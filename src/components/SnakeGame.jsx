import { useState, useEffect, useRef, useCallback } from 'react';
import { soundEffects } from '../utils/sounds';

/**
 * useSnakeGame - Custom hook containing all snake game logic
 * Supports flexible grid sizes and destructive mode
 */
export function useGame(initialSpeed = 150) {
    const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
    const [food, setFood] = useState([]); // Array of food items for destructive mode
    const [direction, setDirection] = useState({ x: 0, y: -1 }); // Default moving up
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [gridDimensions, setGridDimensions] = useState({ cols: 20, rows: 20 });
    const [isDestructiveMode, setIsDestructiveMode] = useState(false);
    const [allDestructiveFoodEaten, setAllDestructiveFoodEaten] = useState(false);

    const [foodLoaded, setFoodLoaded] = useState(false);

    const directionRef = useRef(direction);
    const lastEatenFoodRef = useRef(null);

    useEffect(() => {
        directionRef.current = direction;
    }, [direction]);

    // Generate random food for normal mode or after destructive food is eaten
    const spawnFood = useCallback((cols, rows, append = false) => {
        const newFood = {
            x: Math.floor(Math.random() * cols),
            y: Math.floor(Math.random() * rows),
            id: `apple-${Date.now()}-${Math.random()}`
        };
        if (append) {
            setFood(prevFood => [...prevFood, newFood]);
        } else {
            setFood([newFood]);
        }
        setFoodLoaded(true);
    }, []);

    // Calculate food positions from DOM elements for destructive mode
    const mapFoodElements = useCallback((cols, rows, container) => {
        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const cellWidth = containerRect.width / cols;
        const cellHeight = containerRect.height / rows;

        const foodElements = document.querySelectorAll('.snake-food');
        const newFood = [];

        foodElements.forEach(el => {
            // In destructive mode, we want to include ALL snake-food elements initially
            // regardless of current opacity, because we are resetting the game.
            // But wait, resetGame resets opacity in the DOM before calling this?
            // Yes, HiddenSnakeFooter does: document.querySelectorAll('.snake-food').forEach(el => el.style.opacity = '1');
            // So we can just grab them.

            const rect = el.getBoundingClientRect();

            // Calculate grid position relative to container
            const relativeLeft = rect.left - containerRect.left;
            const relativeTop = rect.top - containerRect.top;

            const gridX = Math.floor(relativeLeft / cellWidth);
            const gridY = Math.floor(relativeTop / cellHeight);

            // Calculate width and height in grid cells
            // We use Math.ceil to ensure we cover the element, but maybe Math.round is better?
            // Let's use a slightly generous coverage
            const gridW = Math.ceil(rect.width / cellWidth);
            const gridH = Math.ceil(rect.height / cellHeight);

            if (gridX + gridW > 0 && gridX < cols && gridY + gridH > 0 && gridY < rows) {
                newFood.push({
                    x: gridX,
                    y: gridY,
                    width: gridW,
                    height: gridH,
                    id: el.id
                });
            }
        });

        setFood(newFood);
        setFoodLoaded(true);
    }, []);

    const resetGame = useCallback((cols = 20, rows = 20, isDestructive = false, container = null, initialSnakePos = null) => {
        setGridDimensions({ cols, rows });
        setFoodLoaded(false); // Reset loaded state
        setIsDestructiveMode(isDestructive);
        setAllDestructiveFoodEaten(false);

        // Set initial snake position
        if (initialSnakePos) {
            setSnake([initialSnakePos]);
            // Default direction to LEFT for this specific layout
            setDirection({ x: -1, y: 0 });
            directionRef.current = { x: -1, y: 0 };
        } else {
            setSnake([{ x: Math.floor(cols / 2), y: Math.floor(rows / 2) }]);
            setDirection({ x: 1, y: 0 });
            directionRef.current = { x: 1, y: 0 };
        }
        setGameOver(false);
        setScore(0);
        setIsPlaying(true);

        if (isDestructive && container) {
            // Small delay to ensure layout is stable
            setTimeout(() => mapFoodElements(cols, rows, container), 100);
        } else {
            spawnFood(cols, rows);
        }
    }, [spawnFood, mapFoodElements]);

    const changeDirection = useCallback((newDirection) => {
        const current = directionRef.current;
        // Prevent reversing direction
        if (newDirection.x === -current.x && newDirection.y === -current.y) {
            return;
        }
        setDirection(newDirection);
    }, []);

    useEffect(() => {
        if (!isPlaying || gameOver) return;

        const tick = () => {
            setSnake(prevSnake => {
                const head = prevSnake[0];
                const newHead = {
                    x: (head.x + directionRef.current.x + gridDimensions.cols) % gridDimensions.cols,
                    y: (head.y + directionRef.current.y + gridDimensions.rows) % gridDimensions.rows
                };

                // Check collision with self
                if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
                    setGameOver(true);
                    setIsPlaying(false);
                    soundEffects.playGameOver();
                    return prevSnake;
                }

                const newSnake = [newHead, ...prevSnake];

                // Check if food is eaten
                // In destructive mode, food has width/height
                const eatenFoodIndex = food.findIndex(f => {
                    if (f.width && f.height) {
                        // Check if head is inside the food rectangle
                        return newHead.x >= f.x && newHead.x < f.x + f.width &&
                            newHead.y >= f.y && newHead.y < f.y + f.height;
                    }
                    return newHead.x === f.x && newHead.y === f.y;
                });

                if (eatenFoodIndex !== -1) {
                    const eatenFood = food[eatenFoodIndex];

                    // Prevent double-counting the same food
                    if (lastEatenFoodRef.current !== eatenFood.id) {
                        lastEatenFoodRef.current = eatenFood.id;
                        setScore(s => s + 1);

                        // Play eating sound
                        soundEffects.playEat();
                    }

                    // Remove eaten food
                    const newFoodList = [...food];
                    newFoodList.splice(eatenFoodIndex, 1);
                    setFood(newFoodList);

                    // Check if this was a random apple or destructive food
                    const isApple = eatenFood.id.startsWith('apple-');
                    const isDestructiveFood = eatenFood.width && eatenFood.height;

                    if (isApple) {
                        // Generate new apple immediately
                        spawnFood(gridDimensions.cols, gridDimensions.rows, true);
                    } else if (isDestructiveFood) {
                        // Check if all destructive food is eaten
                        const remainingDestructiveFood = newFoodList.filter(f => f.width && f.height);
                        if (remainingDestructiveFood.length === 0 && !allDestructiveFoodEaten) {
                            setAllDestructiveFoodEaten(true);
                            // Start generating apples
                            spawnFood(gridDimensions.cols, gridDimensions.rows, true);
                        }
                    }

                    return newSnake;
                }

                // Remove tail if no food eaten
                newSnake.pop();
                return newSnake;
            });
        };

        const interval = setInterval(tick, initialSpeed);
        return () => clearInterval(interval);
    }, [isPlaying, gameOver, food, spawnFood, gridDimensions, initialSpeed]);

    return {
        snake,
        food,
        gameOver,
        score,
        isPlaying,
        resetGame,
        changeDirection,
        setIsPlaying,
        gridDimensions,
        setFood,
        foodLoaded
    };
}

/**
 * SnakeGameRenderer - Renders the snake game
 * Adapts to container size and aspect ratio
 */
export function GameCanvas({
    snake,
    food,
    gameOver,
    score,
    isPlaying,
    resetGame,
    changeDirection,
    setIsPlaying,
    gridDimensions,
    containerRef,
    isDestructive = false,
    onEat,
    initialSnakePos, // Optional prop to pass initial position
    foodLoaded
}) {
    const [cellSize, setCellSize] = useState(20);
    const prevFoodLengthRef = useRef(food.length);

    // Handle eating callback
    // We detect eating by checking if food array length decreased
    useEffect(() => {
        if (isDestructive && isPlaying && foodLoaded) {
            // We need to find which items are missing from the DOM list compared to our current food list?
            // Actually, simpler: The hook removed the item from 'food'.
            // We need to sync the DOM.
            // Let's just iterate over all .snake-food elements and check if they are still in the 'food' array.
            const currentFoodIds = new Set(food.map(f => f.id));
            const elements = document.querySelectorAll('.snake-food');
            elements.forEach(el => {
                if (!currentFoodIds.has(el.id) && el.style.opacity !== '0') {
                    if (onEat) onEat(el.id);
                }
            });
        }
    }, [food, isDestructive, isPlaying, onEat, foodLoaded]);


    // Calculate grid size based on container dimensions
    useEffect(() => {
        if (containerRef.current && isPlaying) {
            const { width, height } = containerRef.current.getBoundingClientRect();
            const size = 20; // Target cell size
            const cols = Math.floor(width / size);
            const rows = Math.floor(height / size);

            if (!isDestructive && (cols !== gridDimensions.cols || rows !== gridDimensions.rows)) {
                setCellSize(Math.min(width / gridDimensions.cols, height / gridDimensions.rows));
            } else if (isDestructive) {
                setCellSize(size);
                // Initialize game if needed
                // We check if snake is at default position (10,10) AND length 1 to detect "fresh" state
                // But now we might have a custom start position.
                // Let's rely on a flag or just check if grid dimensions match.
                if (gridDimensions.cols !== cols || gridDimensions.rows !== rows) {
                    resetGame(cols, rows, true, containerRef.current, initialSnakePos);
                }
            }
        }
    }, [containerRef, isPlaying, gridDimensions, isDestructive, resetGame, initialSnakePos]);

    useEffect(() => {
        if (!isPlaying) return;

        const handleKeyPress = (e) => {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }
            switch (e.key) {
                case 'ArrowUp':
                    changeDirection({ x: 0, y: -1 });
                    break;
                case 'ArrowDown':
                    changeDirection({ x: 0, y: 1 });
                    break;
                case 'ArrowLeft':
                    changeDirection({ x: -1, y: 0 });
                    break;
                case 'ArrowRight':
                    changeDirection({ x: 1, y: 0 });
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isPlaying, changeDirection]);

    const controlBtnStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        color: 'white',
        fontSize: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        backdropFilter: 'blur(5px)',
        touchAction: 'manipulation',
        userSelect: 'none'
    };

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            pointerEvents: 'none'
        }}>
            {gameOver && (
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    zIndex: 30,
                    background: 'rgba(0,0,0,0.9)',
                    padding: '20px',
                    borderRadius: '10px',
                    pointerEvents: 'auto'
                }}>
                    <div style={{ fontSize: '24px', marginBottom: '10px', color: '#ef4444' }}>
                        Game Over!
                    </div>
                    <div style={{ fontSize: '18px', marginBottom: '15px', color: '#a0a0b0' }}>
                        Score: {score}
                    </div>
                    <button
                        onClick={() => {
                            const { width, height } = containerRef.current.getBoundingClientRect();
                            const size = 20;
                            document.querySelectorAll('.snake-food').forEach(el => el.style.opacity = '1');
                            resetGame(Math.floor(width / size), Math.floor(height / size), isDestructive, containerRef.current, initialSnakePos);
                        }}
                        style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            background: '#6366f1',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Play Again
                    </button>
                </div>
            )}

            <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${gridDimensions.cols}, ${cellSize}px)`,
                gridTemplateRows: `repeat(${gridDimensions.rows}, ${cellSize}px)`,
                gap: '0px',
                background: isDestructive ? 'transparent' : '#1a1a2e',
                width: '100%',
                height: '100%'
            }}>
                {Array.from({ length: gridDimensions.cols * gridDimensions.rows }).map((_, index) => {
                    const x = index % gridDimensions.cols;
                    const y = Math.floor(index / gridDimensions.cols);
                    const isSnake = snake.some(segment => segment.x === x && segment.y === y);
                    const isHead = snake[0].x === x && snake[0].y === y;

                    // Check if this cell contains an apple
                    const apple = food.find(f => !f.width && !f.height && f.x === x && f.y === y);
                    const isApple = !!apple;

                    return (
                        <div
                            key={index}
                            style={{
                                width: cellSize,
                                height: cellSize,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative'
                            }}
                        >
                            {isSnake && (
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    background: isHead
                                        ? 'linear-gradient(135deg, #7CFC00 0%, #32CD32 50%, #228B22 100%)'
                                        : 'linear-gradient(135deg, #228B22 0%, #2E8B57 50%, #1a6b3a 100%)',
                                    borderRadius: isHead ? '30%' : '0',
                                    boxShadow: isHead
                                        ? '0 0 8px rgba(124, 252, 0, 0.6), inset -1px -1px 3px rgba(0,0,0,0.3)'
                                        : 'inset -1px -1px 2px rgba(0,0,0,0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative'
                                }}>
                                    {isHead && (
                                        <>
                                            {/* Snake eyes */}
                                            <div style={{
                                                position: 'absolute',
                                                width: '100%',
                                                height: '100%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-around',
                                                padding: '0 25%'
                                            }}>
                                                <div style={{
                                                    width: `${cellSize * 0.2}px`,
                                                    height: `${cellSize * 0.2}px`,
                                                    background: '#000',
                                                    borderRadius: '50%',
                                                    boxShadow: '0 0 2px rgba(255,255,255,0.5)'
                                                }} />
                                                <div style={{
                                                    width: `${cellSize * 0.2}px`,
                                                    height: `${cellSize * 0.2}px`,
                                                    background: '#000',
                                                    borderRadius: '50%',
                                                    boxShadow: '0 0 2px rgba(255,255,255,0.5)'
                                                }} />
                                            </div>
                                        </>
                                    )}
                                    {!isHead && (
                                        /* Scale pattern on body segments */
                                        <div style={{
                                            width: '50%',
                                            height: '50%',
                                            background: 'radial-gradient(circle at 30% 30%, rgba(124, 252, 0, 0.15), transparent)',
                                            borderRadius: '50%'
                                        }} />
                                    )}
                                </div>
                            )}
                            {isApple && (
                                <div style={{
                                    width: '80%',
                                    height: '80%',
                                    borderRadius: '50%',
                                    background: 'radial-gradient(circle at 30% 30%, #ff6b6b, #c92a2a)',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.3), inset -2px -2px 4px rgba(0,0,0,0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: `${cellSize * 0.6}px`
                                }}>
                                    🍎
                                </div>
                            )}
                        </div>
                    );
                })}
            </div >

            {isPlaying && (
                <>
                    <div style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        fontSize: '14px',
                        color: isDestructive ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.5)',
                        pointerEvents: 'none',
                        background: isDestructive ? 'rgba(0,0,0,0.5)' : 'transparent',
                        padding: '2px 5px',
                        borderRadius: '4px'
                    }}>
                        Score: {score}
                    </div>

                    <div className="mobile-controls" style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'none',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '5px',
                        zIndex: 20,
                        pointerEvents: 'auto'
                    }}>
                        <button
                            onPointerDown={(e) => { e.preventDefault(); changeDirection({ x: 0, y: -1 }); }}
                            style={controlBtnStyle}
                        >
                            ↑
                        </button>
                        <div style={{ display: 'flex', gap: '40px' }}>
                            <button
                                onPointerDown={(e) => { e.preventDefault(); changeDirection({ x: -1, y: 0 }); }}
                                style={controlBtnStyle}
                            >
                                ←
                            </button>
                            <button
                                onPointerDown={(e) => { e.preventDefault(); changeDirection({ x: 1, y: 0 }); }}
                                style={controlBtnStyle}
                            >
                                →
                            </button>
                        </div>
                        <button
                            onPointerDown={(e) => { e.preventDefault(); changeDirection({ x: 0, y: 1 }); }}
                            style={controlBtnStyle}
                        >
                            ↓
                        </button>
                    </div>
                </>
            )}
        </div >
    );
}

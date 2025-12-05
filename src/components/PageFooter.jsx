import { useState, useRef, useEffect } from 'react';
import { useGame, GameCanvas } from './SnakeGame';
import './PageFooter.css';

/**
 * HiddenSnakeFooter - A self-contained component that looks like a normal footer
 * Includes a hidden button to toggle snake game mode
 */
function PageFooter() {
    const [isSnakeMode, setIsSnakeMode] = useState(false);
    const [showToggleBtn, setShowToggleBtn] = useState(false);
    const [initialSnakePos, setInitialSnakePos] = useState(null);
    const containerRef = useRef(null); // Ref for footer-content
    const buttonRef = useRef(null); // Ref for the toggle button

    const snakeGame = useGame(100);

    const handleGameToggle = (e) => {
        e.stopPropagation();
        if (!isSnakeMode) {
            // Calculate start position based on button location relative to content container
            if (containerRef.current && buttonRef.current) {
                const containerRect = containerRef.current.getBoundingClientRect();
                const buttonRect = buttonRef.current.getBoundingClientRect();

                const cellSize = 20;

                // Calculate relative position
                // The button is likely to the right/bottom of the content
                // We want the snake to spawn at the nearest grid cell within the container
                // that is closest to the button.

                // Actually, if we want it to look like it comes FROM the button,
                // we should probably spawn it at the bottom-right of the container
                // since the button is at the bottom-right of the footer.

                const cols = Math.floor(containerRect.width / cellSize);
                const rows = Math.floor(containerRect.height / cellSize);

                // Spawn at bottom-right of the grid
                setInitialSnakePos({ x: cols - 1, y: rows - 1 });
            }

            setIsSnakeMode(true);
        } else {
            setIsSnakeMode(false);
            snakeGame.setIsPlaying(false);
            // Reset opacity of all food elements
            document.querySelectorAll('.snake-food').forEach(el => el.style.opacity = '1');
        }
    };

    useEffect(() => {
        if (isSnakeMode && containerRef.current) {
            const { width, height } = containerRef.current.getBoundingClientRect();
            const cellSize = 20;
            const cols = Math.floor(width / cellSize);
            const rows = Math.floor(height / cellSize);
            snakeGame.resetGame(cols, rows, true, containerRef.current, initialSnakePos);
        }
    }, [isSnakeMode, initialSnakePos]);

    return (
        <footer
            className={`hidden-snake-footer ${isSnakeMode ? 'snake-active' : ''}`}
        >
            <div className="footer-content" ref={containerRef}>
                {isSnakeMode && (
                    <div className="snake-overlay">
                        <GameCanvas
                            {...snakeGame}
                            containerRef={containerRef}
                            isDestructive={true}
                            initialSnakePos={initialSnakePos}
                            onEat={(id) => {
                                const element = document.getElementById(id);
                                if (element) element.style.opacity = '0';
                            }}
                        />
                        <button
                            className="toggle-snake-btn active"
                            onClick={handleGameToggle}
                            title="Quitter le jeu"
                        >
                            ✕
                        </button>
                    </div>
                )}

                <div id="section-about" className="footer-section snake-food">
                    <h4>À propos</h4>
                    <p>
                        Plateforme de quiz éducatif promouvant la sensibilisation à l'open-source
                    </p>
                </div>

                <div id="section-resources" className="footer-section snake-food">
                    <h4>Ressources</h4>
                    <ul>
                        <li><a href="#linux">Linux</a></li>
                        <li><a href="#libreoffice">LibreOffice</a></li>
                        <li><a href="#opensource">Open Source</a></li>
                    </ul>
                </div>

                <div id="section-contact" className="footer-section snake-food">
                    <h4>Contact</h4>
                    <p>
                        info@opensourceedu.org
                    </p>
                </div>
            </div>

            <div className="footer-bottom" onClick={() => setShowToggleBtn(true)}>
                <p>
                    &copy; 2024 Éducation Open Source. Tous droits réservés.
                </p>
                {!isSnakeMode && showToggleBtn && (
                    <button
                        ref={buttonRef}
                        className="toggle-snake-btn"
                        onClick={handleGameToggle}
                        title="???"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12C3 12 5 8 8 8C11 8 12 10 14 10C16 10 17 8 20 8C20 8 21 9 21 10C21 11 20 12 19 12C18 12 17 11 16 11C15 11 14 12 12 12C10 12 9 10 7 10C5 10 4 11 3 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="19" cy="9" r="1" fill="white" />
                        </svg>
                    </button>
                )}
            </div>
        </footer>
    );
}

export default PageFooter;

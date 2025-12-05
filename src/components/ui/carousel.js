"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselNext = exports.CarouselPrevious = exports.CarouselItem = exports.CarouselContent = exports.Carousel = exports.CarouselApi = void 0;
const React = require("react");
const embla_carousel_react_1 = require("embla-carousel-react@8.6.0");
const lucide_react_1 = require("lucide-react@0.487.0");
const utils_1 = require("./utils");
const button_1 = require("./button");
const CarouselContext = React.createContext(null);
function useCarousel() {
    const context = React.useContext(CarouselContext);
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }
    return context;
}
function Carousel(_a) {
    var _b = _a.orientation, orientation = _b === void 0 ? "horizontal" : _b, opts = _a.opts, setApi = _a.setApi, plugins = _a.plugins, className = _a.className, children = _a.children, props = Object.assign({}, _a);
    const _c = (0, embla_carousel_react_1.useEmblaCarousel)(Object.assign({}, opts, { axis: orientation === "horizontal" ? "x" : "y" }), plugins), carouselRef = _c[0], api = _c[1];
    const _d = React.useState(false), canScrollPrev = _d[0], setCanScrollPrev = _d[1];
    const _e = React.useState(false), canScrollNext = _e[0], setCanScrollNext = _e[1];
    const onSelect = React.useCallback((api) => {
        if (!api)
            return;
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
        api === null || api === void 0 ? void 0 : api.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
        api === null || api === void 0 ? void 0 : api.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback((event) => {
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollPrev();
        }
        else if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollNext();
        }
    }, [scrollPrev, scrollNext]);
    React.useEffect(() => {
        if (!api || !setApi)
            return;
        setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
        if (!api)
            return;
        onSelect(api);
        api.on("reInit", onSelect);
        api.on("select", onSelect);
        return () => {
            api === null || api === void 0 ? void 0 : api.off("select", onSelect);
        };
    }, [api, onSelect]);
    return (React.createElement(CarouselContext.Provider, { value: {
            carouselRef,
            api: api,
            opts,
            orientation: orientation || (opts === null || opts === void 0 ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal",
            scrollPrev,
            scrollNext,
            canScrollPrev,
            canScrollNext,
        } },
        React.createElement("div", Object.assign({ onKeyDownCapture: handleKeyDown, className: (0, utils_1.cn)("relative", className), role: "region", "aria-roledescription": "carousel", "data-slot": "carousel" }, props), children)));
}
exports.Carousel = Carousel;
function CarouselContent(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    const { carouselRef, orientation } = useCarousel();
    return (React.createElement("div", { ref: carouselRef, className: "overflow-hidden", "data-slot": "carousel-content" },
        React.createElement("div", Object.assign({ className: (0, utils_1.cn)("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className) }, props))));
}
exports.CarouselContent = CarouselContent;
function CarouselItem(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    const { orientation } = useCarousel();
    return React.createElement("div", Object.assign({ role: "group", "aria-roledescription": "slide", "data-slot": "carousel-item", className: (0, utils_1.cn)("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className) }, props));
}
exports.CarouselItem = CarouselItem;
function CarouselPrevious(_a) {
    var _b = _a.variant, variant = _b === void 0 ? "outline" : _b, _c = _a.size, size = _c === void 0 ? "icon" : _c, className = _a.className, props = Object.assign({}, _a);
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return (React.createElement(button_1.Button, Object.assign({ "data-slot": "carousel-previous", variant: variant, size: size, className: (0, utils_1.cn)("absolute size-8 rounded-full", orientation === "horizontal"
            ? "top-1/2 -left-12 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className), disabled: !canScrollPrev, onClick: scrollPrev }, props),
        React.createElement(lucide_react_1.ArrowLeft, null),
        React.createElement("span", { className: "sr-only" }, "Previous slide")));
}
exports.CarouselPrevious = CarouselPrevious;
function CarouselNext(_a) {
    var _b = _a.variant, variant = _b === void 0 ? "outline" : _b, _c = _a.size, size = _c === void 0 ? "icon" : _c, className = _a.className, props = Object.assign({}, _a);
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return (React.createElement(button_1.Button, Object.assign({ "data-slot": "carousel-next", variant: variant, size: size, className: (0, utils_1.cn)("absolute size-8 rounded-full", orientation === "horizontal"
            ? "top-1/2 -right-12 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className), disabled: !canScrollNext, onClick: scrollNext }, props),
        React.createElement(lucide_react_1.ArrowRight, null),
        React.createElement("span", { className: "sr-only" }, "Next slide")));
}
exports.CarouselNext = CarouselNext;
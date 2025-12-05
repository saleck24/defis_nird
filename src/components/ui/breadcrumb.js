"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadcrumbEllipsis = exports.BreadcrumbSeparator = exports.BreadcrumbPage = exports.BreadcrumbLink = exports.BreadcrumbItem = exports.BreadcrumbList = exports.Breadcrumb = void 0;
const React = require("react");
const react_slot_1 = require("@radix-ui/react-slot@1.1.2");
const lucide_react_1 = require("lucide-react@0.487.0");
const utils_1 = require("./utils");
function Breadcrumb(props) {
    return React.createElement("nav", Object.assign({ "aria-label": "breadcrumb", "data-slot": "breadcrumb" }, props));
}
exports.Breadcrumb = Breadcrumb;
function BreadcrumbList(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("ol", Object.assign({ "data-slot": "breadcrumb-list", className: (0, utils_1.cn)("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5", className) }, props));
}
exports.BreadcrumbList = BreadcrumbList;
function BreadcrumbItem(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("li", Object.assign({ "data-slot": "breadcrumb-item", className: (0, utils_1.cn)("inline-flex items-center gap-1.5", className) }, props));
}
exports.BreadcrumbItem = BreadcrumbItem;
function BreadcrumbLink(_a) {
    var { asChild, className } = _a, props = Object.assign({}, _a);
    const Comp = asChild ? react_slot_1.Slot : "a";
    return React.createElement(Comp, Object.assign({ "data-slot": "breadcrumb-link", className: (0, utils_1.cn)("hover:text-foreground transition-colors", className) }, props));
}
exports.BreadcrumbLink = BreadcrumbLink;
function BreadcrumbPage(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("span", Object.assign({ "data-slot": "breadcrumb-page", role: "link", "aria-disabled": "true", "aria-current": "page", className: (0, utils_1.cn)("text-foreground font-normal", className) }, props));
}
exports.BreadcrumbPage = BreadcrumbPage;
function BreadcrumbSeparator(_a) {
    var { children, className } = _a, props = Object.assign({}, _a);
    return React.createElement("li", Object.assign({ "data-slot": "breadcrumb-separator", role: "presentation", "aria-hidden": "true", className: (0, utils_1.cn)("[&>svg]:size-3.5", className) }, props), children !== null && children !== void 0 ? children : React.createElement(lucide_react_1.ChevronRight, null));
}
exports.BreadcrumbSeparator = BreadcrumbSeparator;
function BreadcrumbEllipsis(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return (React.createElement("span", Object.assign({ "data-slot": "breadcrumb-ellipsis", role: "presentation", "aria-hidden": "true", className: (0, utils_1.cn)("flex size-9 items-center justify-center", className) }, props),
        React.createElement(lucide_react_1.MoreHorizontal, { className: "size-4" }),
        React.createElement("span", { className: "sr-only" }, "More")));
}
exports.BreadcrumbEllipsis = BreadcrumbEllipsis;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationEllipsis = exports.PaginationNext = exports.PaginationPrevious = exports.PaginationItem = exports.PaginationLink = exports.PaginationContent = exports.Pagination = void 0;
const React = require("react");
const lucide_react_1 = require("lucide-react@0.487.0");
const utils_1 = require("./utils");
const button_1 = require("./button");
function Pagination(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("nav", Object.assign({ role: "navigation", "aria-label": "pagination", "data-slot": "pagination", className: (0, utils_1.cn)("mx-auto flex w-full justify-center", className) }, props));
}
exports.Pagination = Pagination;
function PaginationContent(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("ul", Object.assign({ "data-slot": "pagination-content", className: (0, utils_1.cn)("flex flex-row items-center gap-1", className) }, props));
}
exports.PaginationContent = PaginationContent;
function PaginationItem(props) {
    return React.createElement("li", Object.assign({ "data-slot": "pagination-item" }, props));
}
exports.PaginationItem = PaginationItem;
function PaginationLink(_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? "icon" : _c, className = _a.className, props = Object.assign({}, _a);
    return React.createElement("a", Object.assign({ "aria-current": isActive ? "page" : undefined, "data-slot": "pagination-link", "data-active": isActive, className: (0, utils_1.cn)((0, button_1.buttonVariants)({
            variant: isActive ? "outline" : "ghost",
            size,
        }), className) }, props));
}
exports.PaginationLink = PaginationLink;
function PaginationPrevious(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return (React.createElement(PaginationLink, Object.assign({ "aria-label": "Go to previous page", size: "default", className: (0, utils_1.cn)("gap-1 px-2.5 sm:pl-2.5", className) }, props),
        React.createElement(lucide_react_1.ChevronLeftIcon, null),
        React.createElement("span", { className: "hidden sm:block" }, "Previous")));
}
exports.PaginationPrevious = PaginationPrevious;
function PaginationNext(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return (React.createElement(PaginationLink, Object.assign({ "aria-label": "Go to next page", size: "default", className: (0, utils_1.cn)("gap-1 px-2.5 sm:pr-2.5", className) }, props),
        React.createElement("span", { className: "hidden sm:block" }, "Next"),
        React.createElement(lucide_react_1.ChevronRightIcon, null)));
}
exports.PaginationNext = PaginationNext;
function PaginationEllipsis(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return (React.createElement("span", Object.assign({ "aria-hidden": true, "data-slot": "pagination-ellipsis", className: (0, utils_1.cn)("flex size-9 items-center justify-center", className) }, props),
        React.createElement(lucide_react_1.MoreHorizontalIcon, { className: "size-4" }),
        React.createElement("span", { className: "sr-only" }, "More pages")));
}
exports.PaginationEllipsis = PaginationEllipsis;
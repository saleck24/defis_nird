"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopoverAnchor = exports.PopoverContent = exports.PopoverTrigger = exports.Popover = void 0;
const React = require("react");
const PopoverPrimitive = require("@radix-ui/react-popover@1.1.6");
const utils_1 = require("./utils");
function Popover(props) {
    return React.createElement(PopoverPrimitive.Root, Object.assign({ "data-slot": "popover" }, props));
}
exports.Popover = Popover;
function PopoverTrigger(props) {
    return React.createElement(PopoverPrimitive.Trigger, Object.assign({ "data-slot": "popover-trigger" }, props));
}
exports.PopoverTrigger = PopoverTrigger;
function PopoverContent(_a) {
    var _b = _a.align, align = _b === void 0 ? "center" : _b, _c = _a.sideOffset, sideOffset = _c === void 0 ? 4 : _c, className = _a.className, props = Object.assign({}, _a);
    return (React.createElement(PopoverPrimitive.Portal, null,
        React.createElement(PopoverPrimitive.Content, Object.assign({ "data-slot": "popover-content", align: align, sideOffset: sideOffset, className: (0, utils_1.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", className) }, props))));
}
exports.PopoverContent = PopoverContent;
function PopoverAnchor(props) {
    return React.createElement(PopoverPrimitive.Anchor, Object.assign({ "data-slot": "popover-anchor" }, props));
}
exports.PopoverAnchor = PopoverAnchor;
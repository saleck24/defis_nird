"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoverCardContent = exports.HoverCardTrigger = exports.HoverCard = void 0;
const React = require("react");
const HoverCardPrimitive = require("@radix-ui/react-hover-card@1.1.6");
const utils_1 = require("./utils");
function HoverCard(props) {
    return React.createElement(HoverCardPrimitive.Root, Object.assign({ "data-slot": "hover-card" }, props));
}
exports.HoverCard = HoverCard;
function HoverCardTrigger(props) {
    return React.createElement(HoverCardPrimitive.Trigger, Object.assign({ "data-slot": "hover-card-trigger" }, props));
}
exports.HoverCardTrigger = HoverCardTrigger;
function HoverCardContent(_a) {
    var _b = _a.align, align = _b === void 0 ? "center" : _b, _c = _a.sideOffset, sideOffset = _c === void 0 ? 4 : _c, className = _a.className, props = Object.assign({}, _a);
    return (React.createElement(HoverCardPrimitive.Portal, Object.assign({ "data-slot": "hover-card-portal" }, null),
        React.createElement(HoverCardPrimitive.Content, Object.assign({ "data-slot": "hover-card-content", align: align, sideOffset: sideOffset, className: (0, utils_1.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", className) }, props))));
}
exports.HoverCardContent = HoverCardContent;
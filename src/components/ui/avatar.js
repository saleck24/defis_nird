"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarFallback = exports.AvatarImage = exports.Avatar = void 0;
const React = require("react");
const AvatarPrimitive = require("@radix-ui/react-avatar@1.1.3");
const utils_1 = require("./utils");
function Avatar(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(AvatarPrimitive.Root, Object.assign({ "data-slot": "avatar", className: (0, utils_1.cn)("relative flex size-10 shrink-0 overflow-hidden rounded-full", className) }, props));
}
exports.Avatar = Avatar;
function AvatarImage(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(AvatarPrimitive.Image, Object.assign({ "data-slot": "avatar-image", className: (0, utils_1.cn)("aspect-square size-full", className) }, props));
}
exports.AvatarImage = AvatarImage;
function AvatarFallback(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(AvatarPrimitive.Fallback, Object.assign({ "data-slot": "avatar-fallback", className: (0, utils_1.cn)("bg-muted flex size-full items-center justify-center rounded-full", className) }, props));
}
exports.AvatarFallback = AvatarFallback;
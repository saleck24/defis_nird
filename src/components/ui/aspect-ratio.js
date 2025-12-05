"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AspectRatio = void 0;
const React = require("react");
const AspectRatioPrimitive = require("@radix-ui/react-aspect-ratio@1.1.2");
function AspectRatio(props) {
    return React.createElement(AspectRatioPrimitive.Root, Object.assign({ "data-slot": "aspect-ratio" }, props));
}
exports.AspectRatio = AspectRatio;
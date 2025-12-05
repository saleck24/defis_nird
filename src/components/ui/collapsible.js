"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollapsibleContent = exports.CollapsibleTrigger = exports.Collapsible = void 0;
const React = require("react");
const CollapsiblePrimitive = require("@radix-ui/react-collapsible@1.1.3");
function Collapsible(props) {
    return React.createElement(CollapsiblePrimitive.Root, Object.assign({ "data-slot": "collapsible" }, props));
}
exports.Collapsible = Collapsible;
function CollapsibleTrigger(props) {
    return React.createElement(CollapsiblePrimitive.CollapsibleTrigger, Object.assign({ "data-slot": "collapsible-trigger" }, props));
}
exports.CollapsibleTrigger = CollapsibleTrigger;
function CollapsibleContent(props) {
    return React.createElement(CollapsiblePrimitive.CollapsibleContent, Object.assign({ "data-slot": "collapsible-content" }, props));
}
exports.CollapsibleContent = CollapsibleContent;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const React = require("react");
const LabelPrimitive = require("@radix-ui/react-label@2.1.2");
const utils_1 = require("./utils");
function Label(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(LabelPrimitive.Root, Object.assign({ "data-slot": "label", className: (0, utils_1.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className) }, props));
}
exports.Label = Label;
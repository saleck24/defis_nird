"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
const React = require("react");
const CheckboxPrimitive = require("@radix-ui/react-checkbox@1.1.4");
const lucide_react_1 = require("lucide-react@0.487.0");
const utils_1 = require("./utils");
function Checkbox(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return (React.createElement(CheckboxPrimitive.Root, Object.assign({ "data-slot": "checkbox", className: (0, utils_1.cn)("peer border bg-input-background dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className) }, props),
        React.createElement(CheckboxPrimitive.Indicator, { "data-slot": "checkbox-indicator", className: "flex items-center justify-center text-current transition-none" },
            React.createElement(lucide_react_1.CheckIcon, { className: "size-3.5" }))));
}
exports.Checkbox = Checkbox;
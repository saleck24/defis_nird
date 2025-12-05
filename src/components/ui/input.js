"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const React = require("react");
const utils_1 = require("./utils");
function Input(_a) {
    var { className, type } = _a, props = Object.assign({}, _a);
    return React.createElement("input", Object.assign({ type: type, "data-slot": "input", className: (0, utils_1.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className) }, props));
}
exports.Input = Input;
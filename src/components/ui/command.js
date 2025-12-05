"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandSeparator = exports.CommandShortcut = exports.CommandItem = exports.CommandGroup = exports.CommandEmpty = exports.CommandList = exports.CommandInput = exports.CommandDialog = exports.Command = void 0;
const React = require("react");
const cmdk_1 = require("cmdk@1.1.1");
const lucide_react_1 = require("lucide-react@0.487.0");
const utils_1 = require("./utils");
const dialog_1 = require("./dialog");
function Command(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(cmdk_1.CommandPrimitive, Object.assign({ "data-slot": "command", className: (0, utils_1.cn)("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", className) }, props));
}
exports.Command = Command;
function CommandDialog(_a) {
    var _b = _a.title, title = _b === void 0 ? "Command Palette" : _b, _c = _a.description, description = _c === void 0 ? "Search for a command to run..." : _c, children = _a.children, props = Object.assign({}, _a);
    return (React.createElement(dialog_1.Dialog, Object.assign({}, props),
        React.createElement(dialog_1.DialogHeader, { className: "sr-only" },
            React.createElement(dialog_1.DialogTitle, null, title),
            React.createElement(dialog_1.DialogDescription, null, description)),
        React.createElement(dialog_1.DialogContent, { className: "overflow-hidden p-0" },
            React.createElement(Command, { className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5" }, children))));
}
exports.CommandDialog = CommandDialog;
function CommandInput(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return (React.createElement("div", { "data-slot": "command-input-wrapper", className: "flex h-9 items-center gap-2 border-b px-3" },
        React.createElement(lucide_react_1.SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
        React.createElement(cmdk_1.CommandPrimitive.Input, Object.assign({ "data-slot": "command-input", className: (0, utils_1.cn)("placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", className) }, props))));
}
exports.CommandInput = CommandInput;
function CommandList(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(cmdk_1.CommandPrimitive.List, Object.assign({ "data-slot": "command-list", className: (0, utils_1.cn)("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", className) }, props));
}
exports.CommandList = CommandList;
function CommandEmpty(props) {
    return React.createElement(cmdk_1.CommandPrimitive.Empty, Object.assign({ "data-slot": "command-empty", className: "py-6 text-center text-sm" }, props));
}
exports.CommandEmpty = CommandEmpty;
function CommandGroup(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(cmdk_1.CommandPrimitive.Group, Object.assign({ "data-slot": "command-group", className: (0, utils_1.cn)("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium", className) }, props));
}
exports.CommandGroup = CommandGroup;
function CommandSeparator(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(cmdk_1.CommandPrimitive.Separator, Object.assign({ "data-slot": "command-separator", className: (0, utils_1.cn)("bg-border -mx-1 h-px", className) }, props));
}
exports.CommandSeparator = CommandSeparator;
function CommandItem(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(cmdk_1.CommandPrimitive.Item, Object.assign({ "data-slot": "command-item", className: (0, utils_1.cn)("data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className) }, props));
}
exports.CommandItem = CommandItem;
function CommandShortcut(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("span", Object.assign({ "data-slot": "command-shortcut", className: (0, utils_1.cn)("text-muted-foreground ml-auto text-xs tracking-widest", className) }, props));
}
exports.CommandShortcut = CommandShortcut;
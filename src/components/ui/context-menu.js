"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMenuRadioGroup = exports.ContextMenuSubTrigger = exports.ContextMenuSubContent = exports.ContextMenuSub = exports.ContextMenuPortal = exports.ContextMenuGroup = exports.ContextMenuTrigger = exports.ContextMenu = exports.ContextMenuShortcut = exports.ContextMenuSeparator = exports.ContextMenuLabel = exports.ContextMenuRadioItem = exports.ContextMenuCheckboxItem = exports.ContextMenuItem = exports.ContextMenuContent = void 0;
const React = require("react");
const ContextMenuPrimitive = require("@radix-ui/react-context-menu@2.2.6");
const lucide_react_1 = require("lucide-react@0.487.0");
const utils_1 = require("./utils");
function ContextMenu(props) {
    return React.createElement(ContextMenuPrimitive.Root, Object.assign({ "data-slot": "context-menu" }, props));
}
exports.ContextMenu = ContextMenu;
function ContextMenuTrigger(props) {
    return React.createElement(ContextMenuPrimitive.Trigger, Object.assign({ "data-slot": "context-menu-trigger" }, props));
}
exports.ContextMenuTrigger = ContextMenuTrigger;
function ContextMenuGroup(props) {
    return React.createElement(ContextMenuPrimitive.Group, Object.assign({ "data-slot": "context-menu-group" }, props));
}
exports.ContextMenuGroup = ContextMenuGroup;
function ContextMenuPortal(props) {
    return React.createElement(ContextMenuPrimitive.Portal, Object.assign({ "data-slot": "context-menu-portal" }, props));
}
exports.ContextMenuPortal = ContextMenuPortal;
function ContextMenuSub(props) {
    return React.createElement(ContextMenuPrimitive.Sub, Object.assign({ "data-slot": "context-menu-sub" }, props));
}
exports.ContextMenuSub = ContextMenuSub;
function ContextMenuRadioGroup(props) {
    return React.createElement(ContextMenuPrimitive.RadioGroup, Object.assign({ "data-slot": "context-menu-radio-group" }, props));
}
exports.ContextMenuRadioGroup = ContextMenuRadioGroup;
function ContextMenuSubTrigger(_a) {
    var { className, inset, children } = _a, props = Object.assign({}, _a);
    return (React.createElement(ContextMenuPrimitive.SubTrigger, Object.assign({ "data-slot": "context-menu-sub-trigger", "data-inset": inset, className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className) }, props),
        children,
        React.createElement(lucide_react_1.ChevronRightIcon, { className: "ml-auto" })));
}
exports.ContextMenuSubTrigger = ContextMenuSubTrigger;
function ContextMenuSubContent(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(ContextMenuPrimitive.SubContent, Object.assign({ "data-slot": "context-menu-sub-content", className: (0, utils_1.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className) }, props));
}
exports.ContextMenuSubContent = ContextMenuSubContent;
function ContextMenuContent(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return (React.createElement(ContextMenuPrimitive.Portal, null,
        React.createElement(ContextMenuPrimitive.Content, Object.assign({ "data-slot": "context-menu-content", className: (0, utils_1.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className) }, props))));
}
exports.ContextMenuContent = ContextMenuContent;
function ContextMenuItem(_a) {
    var { className, inset, variant = "default" } = _a, props = Object.assign({}, _a);
    return React.createElement(ContextMenuPrimitive.Item, Object.assign({ "data-slot": "context-menu-item", "data-inset": inset, "data-variant": variant, className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className) }, props));
}
exports.ContextMenuItem = ContextMenuItem;
function ContextMenuCheckboxItem(_a) {
    var { className, children, checked } = _a, props = Object.assign({}, _a);
    return (React.createElement(ContextMenuPrimitive.CheckboxItem, Object.assign({ "data-slot": "context-menu-checkbox-item", className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), checked: checked }, props),
        React.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" },
            React.createElement(ContextMenuPrimitive.ItemIndicator, null,
                React.createElement(lucide_react_1.CheckIcon, { className: "size-4" }))),
        children));
}
exports.ContextMenuCheckboxItem = ContextMenuCheckboxItem;
function ContextMenuRadioItem(_a) {
    var { className, children } = _a, props = Object.assign({}, _a);
    return (React.createElement(ContextMenuPrimitive.RadioItem, Object.assign({ "data-slot": "context-menu-radio-item", className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className) }, props),
        React.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" },
            React.createElement(ContextMenuPrimitive.ItemIndicator, null,
                React.createElement(lucide_react_1.CircleIcon, { className: "size-2 fill-current" }))),
        children));
}
exports.ContextMenuRadioItem = ContextMenuRadioItem;
function ContextMenuLabel(_a) {
    var { className, inset } = _a, props = Object.assign({}, _a);
    return React.createElement(ContextMenuPrimitive.Label, Object.assign({ "data-slot": "context-menu-label", "data-inset": inset, className: (0, utils_1.cn)("text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className) }, props));
}
exports.ContextMenuLabel = ContextMenuLabel;
function ContextMenuSeparator(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(ContextMenuPrimitive.Separator, Object.assign({ "data-slot": "context-menu-separator", className: (0, utils_1.cn)("bg-border -mx-1 my-1 h-px", className) }, props));
}
exports.ContextMenuSeparator = ContextMenuSeparator;
function ContextMenuShortcut(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("span", Object.assign({ "data-slot": "context-menu-shortcut", className: (0, utils_1.cn)("text-muted-foreground ml-auto text-xs tracking-widest", className) }, props));
}
exports.ContextMenuShortcut = ContextMenuShortcut;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownMenuSubContent = exports.DropdownMenuSubTrigger = exports.DropdownMenuSub = exports.DropdownMenuShortcut = exports.DropdownMenuSeparator = exports.DropdownMenuRadioItem = exports.DropdownMenuRadioGroup = exports.DropdownMenuCheckboxItem = exports.DropdownMenuItem = exports.DropdownMenuLabel = exports.DropdownMenuGroup = exports.DropdownMenuContent = exports.DropdownMenuTrigger = exports.DropdownMenuPortal = exports.DropdownMenu = void 0;
const React = require("react");
const DropdownMenuPrimitive = require("@radix-ui/react-dropdown-menu@2.1.6");
const lucide_react_1 = require("lucide-react@0.487.0");
const utils_1 = require("./utils");
function DropdownMenu(props) {
    return React.createElement(DropdownMenuPrimitive.Root, Object.assign({ "data-slot": "dropdown-menu" }, props));
}
exports.DropdownMenu = DropdownMenu;
function DropdownMenuPortal(props) {
    return React.createElement(DropdownMenuPrimitive.Portal, Object.assign({ "data-slot": "dropdown-menu-portal" }, props));
}
exports.DropdownMenuPortal = DropdownMenuPortal;
function DropdownMenuTrigger(props) {
    return React.createElement(DropdownMenuPrimitive.Trigger, Object.assign({ "data-slot": "dropdown-menu-trigger" }, props));
}
exports.DropdownMenuTrigger = DropdownMenuTrigger;
function DropdownMenuContent(_a) {
    var { className, sideOffset = 4 } = _a, props = Object.assign({}, _a);
    return (React.createElement(DropdownMenuPrimitive.Portal, null,
        React.createElement(DropdownMenuPrimitive.Content, Object.assign({ "data-slot": "dropdown-menu-content", sideOffset: sideOffset, className: (0, utils_1.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className) }, props))));
}
exports.DropdownMenuContent = DropdownMenuContent;
function DropdownMenuGroup(props) {
    return React.createElement(DropdownMenuPrimitive.Group, Object.assign({ "data-slot": "dropdown-menu-group" }, props));
}
exports.DropdownMenuGroup = DropdownMenuGroup;
function DropdownMenuItem(_a) {
    var { className, inset, variant = "default" } = _a, props = Object.assign({}, _a);
    return React.createElement(DropdownMenuPrimitive.Item, Object.assign({ "data-slot": "dropdown-menu-item", "data-inset": inset, "data-variant": variant, className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className) }, props));
}
exports.DropdownMenuItem = DropdownMenuItem;
function DropdownMenuCheckboxItem(_a) {
    var { className, children, checked } = _a, props = Object.assign({}, _a);
    return (React.createElement(DropdownMenuPrimitive.CheckboxItem, Object.assign({ "data-slot": "dropdown-menu-checkbox-item", className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), checked: checked }, props),
        React.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" },
            React.createElement(DropdownMenuPrimitive.ItemIndicator, null,
                React.createElement(lucide_react_1.CheckIcon, { className: "size-4" }))),
        children));
}
exports.DropdownMenuCheckboxItem = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup(props) {
    return React.createElement(DropdownMenuPrimitive.RadioGroup, Object.assign({ "data-slot": "dropdown-menu-radio-group" }, props));
}
exports.DropdownMenuRadioGroup = DropdownMenuRadioGroup;
function DropdownMenuRadioItem(_a) {
    var { className, children } = _a, props = Object.assign({}, _a);
    return (React.createElement(DropdownMenuPrimitive.RadioItem, Object.assign({ "data-slot": "dropdown-menu-radio-item", className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className) }, props),
        React.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" },
            React.createElement(DropdownMenuPrimitive.ItemIndicator, null,
                React.createElement(lucide_react_1.CircleIcon, { className: "size-2 fill-current" }))),
        children));
}
exports.DropdownMenuRadioItem = DropdownMenuRadioItem;
function DropdownMenuLabel(_a) {
    var { className, inset } = _a, props = Object.assign({}, _a);
    return React.createElement(DropdownMenuPrimitive.Label, Object.assign({ "data-slot": "dropdown-menu-label", "data-inset": inset, className: (0, utils_1.cn)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className) }, props));
}
exports.DropdownMenuLabel = DropdownMenuLabel;
function DropdownMenuSeparator(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(DropdownMenuPrimitive.Separator, Object.assign({ "data-slot": "dropdown-menu-separator", className: (0, utils_1.cn)("bg-border -mx-1 my-1 h-px", className) }, props));
}
exports.DropdownMenuSeparator = DropdownMenuSeparator;
function DropdownMenuShortcut(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("span", Object.assign({ "data-slot": "dropdown-menu-shortcut", className: (0, utils_1.cn)("text-muted-foreground ml-auto text-xs tracking-widest", className) }, props));
}
exports.DropdownMenuShortcut = DropdownMenuShortcut;
function DropdownMenuSub(props) {
    return React.createElement(DropdownMenuPrimitive.Sub, Object.assign({ "data-slot": "dropdown-menu-sub" }, props));
}
exports.DropdownMenuSub = DropdownMenuSub;
function DropdownMenuSubTrigger(_a) {
    var { className, inset, children } = _a, props = Object.assign({}, _a);
    return (React.createElement(DropdownMenuPrimitive.SubTrigger, Object.assign({ "data-slot": "dropdown-menu-sub-trigger", "data-inset": inset, className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8", className) }, props),
        children,
        React.createElement(lucide_react_1.ChevronRightIcon, { className: "ml-auto size-4" })));
}
exports.DropdownMenuSubTrigger = DropdownMenuSubTrigger;
function DropdownMenuSubContent(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(DropdownMenuPrimitive.SubContent, Object.assign({ "data-slot": "dropdown-menu-sub-content", className: (0, utils_1.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className) }, props));
}
exports.DropdownMenuSubContent = DropdownMenuSubContent;
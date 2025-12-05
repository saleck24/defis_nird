"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenubarSubContent = exports.MenubarSubTrigger = exports.MenubarSub = exports.MenubarRadioItem = exports.MenubarRadioGroup = exports.MenubarCheckboxItem = exports.MenubarShortcut = exports.MenubarItem = exports.MenubarLabel = exports.MenubarSeparator = exports.MenubarGroup = exports.MenubarContent = exports.MenubarTrigger = exports.MenubarMenu = exports.MenubarPortal = exports.Menubar = void 0;
const React = require("react");
const MenubarPrimitive = require("@radix-ui/react-menubar@1.1.6");
const lucide_react_1 = require("lucide-react@0.487.0");
const utils_1 = require("./utils");
function Menubar(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(MenubarPrimitive.Root, Object.assign({ "data-slot": "menubar", className: (0, utils_1.cn)("bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs", className) }, props));
}
exports.Menubar = Menubar;
function MenubarMenu(props) {
    return React.createElement(MenubarPrimitive.Menu, Object.assign({ "data-slot": "menubar-menu" }, props));
}
exports.MenubarMenu = MenubarMenu;
function MenubarGroup(props) {
    return React.createElement(MenubarPrimitive.Group, Object.assign({ "data-slot": "menubar-group" }, props));
}
exports.MenubarGroup = MenubarGroup;
function MenubarPortal(props) {
    return React.createElement(MenubarPrimitive.Portal, Object.assign({ "data-slot": "menubar-portal" }, props));
}
exports.MenubarPortal = MenubarPortal;
function MenubarRadioGroup(props) {
    return React.createElement(MenubarPrimitive.RadioGroup, Object.assign({ "data-slot": "menubar-radio-group" }, props));
}
exports.MenubarRadioGroup = MenubarRadioGroup;
function MenubarTrigger(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(MenubarPrimitive.Trigger, Object.assign({ "data-slot": "menubar-trigger", className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none", className) }, props));
}
exports.MenubarTrigger = MenubarTrigger;
function MenubarContent(_a) {
    var _b = _a.align, align = _b === void 0 ? "start" : _b, _c = _a.alignOffset, alignOffset = _c === void 0 ? -4 : _c, _d = _a.sideOffset, sideOffset = _d === void 0 ? 8 : _d, className = _a.className, props = Object.assign({}, _a);
    return (React.createElement(MenubarPortal, null,
        React.createElement(MenubarPrimitive.Content, Object.assign({ "data-slot": "menubar-content", align: align, alignOffset: alignOffset, sideOffset: sideOffset, className: (0, utils_1.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md", className) }, props))));
}
exports.MenubarContent = MenubarContent;
function MenubarItem(_a) {
    var { className, inset, variant = "default" } = _a, props = Object.assign({}, _a);
    return React.createElement(MenubarPrimitive.Item, Object.assign({ "data-slot": "menubar-item", "data-inset": inset, "data-variant": variant, className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className) }, props));
}
exports.MenubarItem = MenubarItem;
function MenubarCheckboxItem(_a) {
    var { className, children, checked } = _a, props = Object.assign({}, _a);
    return (React.createElement(MenubarPrimitive.CheckboxItem, Object.assign({ "data-slot": "menubar-checkbox-item", className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className), checked: checked }, props),
        React.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" },
            React.createElement(MenubarPrimitive.ItemIndicator, null,
                React.createElement(lucide_react_1.CheckIcon, { className: "size-4" }))),
        children));
}
exports.MenubarCheckboxItem = MenubarCheckboxItem;
function MenubarRadioItem(_a) {
    var { className, children } = _a, props = Object.assign({}, _a);
    return (React.createElement(MenubarPrimitive.RadioItem, Object.assign({ "data-slot": "menubar-radio-item", className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className) }, props),
        React.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" },
            React.createElement(MenubarPrimitive.ItemIndicator, null,
                React.createElement(lucide_react_1.CircleIcon, { className: "size-2 fill-current" }))),
        children));
}
exports.MenubarRadioItem = MenubarRadioItem;
function MenubarLabel(_a) {
    var { className, inset } = _a, props = Object.assign({}, _a);
    return React.createElement(MenubarPrimitive.Label, Object.assign({ "data-slot": "menubar-label", "data-inset": inset, className: (0, utils_1.cn)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className) }, props));
}
exports.MenubarLabel = MenubarLabel;
function MenubarSeparator(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(MenubarPrimitive.Separator, Object.assign({ "data-slot": "menubar-separator", className: (0, utils_1.cn)("bg-border -mx-1 my-1 h-px", className) }, props));
}
exports.MenubarSeparator = MenubarSeparator;
function MenubarShortcut(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("span", Object.assign({ "data-slot": "menubar-shortcut", className: (0, utils_1.cn)("text-muted-foreground ml-auto text-xs tracking-widest", className) }, props));
}
exports.MenubarShortcut = MenubarShortcut;
function MenubarSub(props) {
    return React.createElement(MenubarPrimitive.Sub, Object.assign({ "data-slot": "menubar-sub" }, props));
}
exports.MenubarSub = MenubarSub;
function MenubarSubTrigger(_a) {
    var { className, inset, children } = _a, props = Object.assign({}, _a);
    return (React.createElement(MenubarPrimitive.SubTrigger, Object.assign({ "data-slot": "menubar-sub-trigger", "data-inset": inset, className: (0, utils_1.cn)("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8", className) }, props),
        children,
        React.createElement(lucide_react_1.ChevronRightIcon, { className: "ml-auto h-4 w-4" })));
}
exports.MenubarSubTrigger = MenubarSubTrigger;
function MenubarSubContent(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(MenubarPrimitive.SubContent, Object.assign({ "data-slot": "menubar-sub-content", className: (0, utils_1.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className) }, props));
}
exports.MenubarSubContent = MenubarSubContent;
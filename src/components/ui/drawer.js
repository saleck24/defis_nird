"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawerDescription = exports.DrawerTitle = exports.DrawerFooter = exports.DrawerHeader = exports.DrawerContent = exports.DrawerClose = exports.DrawerOverlay = exports.DrawerPortal = exports.DrawerTrigger = exports.Drawer = void 0;
const React = require("react");
const vaul_1 = require("vaul@1.1.2");
const utils_1 = require("./utils");
function Drawer(props) {
    return React.createElement(vaul_1.DrawerPrimitive.Root, Object.assign({ "data-slot": "drawer" }, props));
}
exports.Drawer = Drawer;
function DrawerTrigger(props) {
    return React.createElement(vaul_1.DrawerPrimitive.Trigger, Object.assign({ "data-slot": "drawer-trigger" }, props));
}
exports.DrawerTrigger = DrawerTrigger;
function DrawerPortal(props) {
    return React.createElement(vaul_1.DrawerPrimitive.Portal, Object.assign({ "data-slot": "drawer-portal" }, props));
}
exports.DrawerPortal = DrawerPortal;
function DrawerClose(props) {
    return React.createElement(vaul_1.DrawerPrimitive.Close, Object.assign({ "data-slot": "drawer-close" }, props));
}
exports.DrawerClose = DrawerClose;
function DrawerOverlay(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(vaul_1.DrawerPrimitive.Overlay, Object.assign({ "data-slot": "drawer-overlay", className: (0, utils_1.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className) }, props));
}
exports.DrawerOverlay = DrawerOverlay;
function DrawerContent(_a) {
    var { className, children } = _a, props = Object.assign({}, _a);
    return React.createElement(DrawerPortal, { "data-slot": "drawer-portal" },
        React.createElement(DrawerOverlay, null),
        React.createElement(vaul_1.DrawerPrimitive.Content, Object.assign({ "data-slot": "drawer-content", className: (0, utils_1.cn)("group/drawer-content bg-background fixed z-50 flex h-auto flex-col", "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b", "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t", "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm", "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm", className) }, props),
            React.createElement("div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
            children));
}
exports.DrawerContent = DrawerContent;
function DrawerHeader(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("div", Object.assign({ "data-slot": "drawer-header", className: (0, utils_1.cn)("flex flex-col gap-1.5 p-4", className) }, props));
}
exports.DrawerHeader = DrawerHeader;
function DrawerFooter(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("div", Object.assign({ "data-slot": "drawer-footer", className: (0, utils_1.cn)("mt-auto flex flex-col gap-2 p-4", className) }, props));
}
exports.DrawerFooter = DrawerFooter;
function DrawerTitle(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(vaul_1.DrawerPrimitive.Title, Object.assign({ "data-slot": "drawer-title", className: (0, utils_1.cn)("text-foreground font-semibold", className) }, props));
}
exports.DrawerTitle = DrawerTitle;
function DrawerDescription(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(vaul_1.DrawerPrimitive.Description, Object.assign({ "data-slot": "drawer-description", className: (0, utils_1.cn)("text-muted-foreground text-sm", className) }, props));
}
exports.DrawerDescription = DrawerDescription;
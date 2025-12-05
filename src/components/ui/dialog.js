"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogTrigger = exports.DialogTitle = exports.DialogPortal = exports.DialogOverlay = exports.DialogHeader = exports.DialogFooter = exports.DialogDescription = exports.DialogContent = exports.DialogClose = exports.Dialog = void 0;
const React = require("react");
const DialogPrimitive = require("@radix-ui/react-dialog@1.1.6");
const lucide_react_1 = require("lucide-react@0.487.0");
const utils_1 = require("./utils");
function Dialog(props) {
    return React.createElement(DialogPrimitive.Root, Object.assign({ "data-slot": "dialog" }, props));
}
exports.Dialog = Dialog;
function DialogTrigger(props) {
    return React.createElement(DialogPrimitive.Trigger, Object.assign({ "data-slot": "dialog-trigger" }, props));
}
exports.DialogTrigger = DialogTrigger;
function DialogPortal(props) {
    return React.createElement(DialogPrimitive.Portal, Object.assign({ "data-slot": "dialog-portal" }, props));
}
exports.DialogPortal = DialogPortal;
function DialogClose(props) {
    return React.createElement(DialogPrimitive.Close, Object.assign({ "data-slot": "dialog-close" }, props));
}
exports.DialogClose = DialogClose;
function DialogOverlay(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(DialogPrimitive.Overlay, Object.assign({ "data-slot": "dialog-overlay", className: (0, utils_1.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className) }, props));
}
exports.DialogOverlay = DialogOverlay;
function DialogContent(_a) {
    var { className, children } = _a, props = Object.assign({}, _a);
    return (React.createElement(DialogPortal, { "data-slot": "dialog-portal" },
        React.createElement(DialogOverlay, null),
        React.createElement(DialogPrimitive.Content, Object.assign({ "data-slot": "dialog-content", className: (0, utils_1.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className) }, props),
            children,
            React.createElement(DialogPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4" },
                React.createElement(lucide_react_1.XIcon, null),
                React.createElement("span", { className: "sr-only" }, "Close")))));
}
exports.DialogContent = DialogContent;
function DialogHeader(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("div", Object.assign({ "data-slot": "dialog-header", className: (0, utils_1.cn)("flex flex-col gap-2 text-center sm:text-left", className) }, props));
}
exports.DialogHeader = DialogHeader;
function DialogFooter(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("div", Object.assign({ "data-slot": "dialog-footer", className: (0, utils_1.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className) }, props));
}
exports.DialogFooter = DialogFooter;
function DialogTitle(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(DialogPrimitive.Title, Object.assign({ "data-slot": "dialog-title", className: (0, utils_1.cn)("text-lg leading-none font-semibold", className) }, props));
}
exports.DialogTitle = DialogTitle;
function DialogDescription(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(DialogPrimitive.Description, Object.assign({ "data-slot": "dialog-description", className: (0, utils_1.cn)("text-muted-foreground text-sm", className) }, props));
}
exports.DialogDescription = DialogDescription;
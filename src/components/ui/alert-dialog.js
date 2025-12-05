"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertDialogCancel = exports.AlertDialogAction = exports.AlertDialogDescription = exports.AlertDialogTitle = exports.AlertDialogFooter = exports.AlertDialogHeader = exports.AlertDialogContent = exports.AlertDialogOverlay = exports.AlertDialogPortal = exports.AlertDialogTrigger = exports.AlertDialog = void 0;
const React = require("react");
const AlertDialogPrimitive = require("@radix-ui/react-alert-dialog@1.1.6");
const utils_1 = require("./utils");
const button_1 = require("./button");
function AlertDialog(props) {
    return React.createElement(AlertDialogPrimitive.Root, Object.assign({ "data-slot": "alert-dialog" }, props));
}
exports.AlertDialog = AlertDialog;
function AlertDialogTrigger(props) {
    return React.createElement(AlertDialogPrimitive.Trigger, Object.assign({ "data-slot": "alert-dialog-trigger" }, props));
}
exports.AlertDialogTrigger = AlertDialogTrigger;
function AlertDialogPortal(props) {
    return React.createElement(AlertDialogPrimitive.Portal, Object.assign({ "data-slot": "alert-dialog-portal" }, props));
}
exports.AlertDialogPortal = AlertDialogPortal;
function AlertDialogOverlay(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(AlertDialogPrimitive.Overlay, Object.assign({ "data-slot": "alert-dialog-overlay", className: (0, utils_1.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className) }, props));
}
exports.AlertDialogOverlay = AlertDialogOverlay;
function AlertDialogContent(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return (React.createElement(AlertDialogPortal, null,
        React.createElement(AlertDialogOverlay, null),
        React.createElement(AlertDialogPrimitive.Content, Object.assign({ "data-slot": "alert-dialog-content", className: (0, utils_1.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className) }, props))));
}
exports.AlertDialogContent = AlertDialogContent;
function AlertDialogHeader(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("div", Object.assign({ "data-slot": "alert-dialog-header", className: (0, utils_1.cn)("flex flex-col gap-2 text-center sm:text-left", className) }, props));
}
exports.AlertDialogHeader = AlertDialogHeader;
function AlertDialogFooter(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("div", Object.assign({ "data-slot": "alert-dialog-footer", className: (0, utils_1.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className) }, props));
}
exports.AlertDialogFooter = AlertDialogFooter;
function AlertDialogTitle(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(AlertDialogPrimitive.Title, Object.assign({ "data-slot": "alert-dialog-title", className: (0, utils_1.cn)("text-lg font-semibold", className) }, props));
}
exports.AlertDialogTitle = AlertDialogTitle;
function AlertDialogDescription(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(AlertDialogPrimitive.Description, Object.assign({ "data-slot": "alert-dialog-description", className: (0, utils_1.cn)("text-muted-foreground text-sm", className) }, props));
}
exports.AlertDialogDescription = AlertDialogDescription;
function AlertDialogAction(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(AlertDialogPrimitive.Action, Object.assign({ className: (0, utils_1.cn)((0, button_1.buttonVariants)(), className) }, props));
}
exports.AlertDialogAction = AlertDialogAction;
function AlertDialogCancel(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(AlertDialogPrimitive.Cancel, Object.assign({ className: (0, utils_1.cn)((0, button_1.buttonVariants)({ variant: "outline" }), className) }, props));
}
exports.AlertDialogCancel = AlertDialogCancel;
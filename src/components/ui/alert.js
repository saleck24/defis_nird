"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertDescription = exports.AlertTitle = exports.Alert = exports.alertVariants = void 0;
const React = require("react");
const class_variance_authority_1 = require("class-variance-authority@0.7.1");
const utils_1 = require("./utils");
const alertVariants = (0, class_variance_authority_1.cva)("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
    variants: {
        variant: {
            default: "bg-card text-card-foreground",
            destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
exports.alertVariants = alertVariants;
function Alert(_a) {
    var { className, variant } = _a, props = Object.assign({}, _a);
    return React.createElement("div", Object.assign({ "data-slot": "alert", role: "alert", className: (0, utils_1.cn)(alertVariants({ variant }), className) }, props));
}
exports.Alert = Alert;
function AlertTitle(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("div", Object.assign({ "data-slot": "alert-title", className: (0, utils_1.cn)("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className) }, props));
}
exports.AlertTitle = AlertTitle;
function AlertDescription(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("div", Object.assign({ "data-slot": "alert-description", className: (0, utils_1.cn)("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", className) }, props));
}
exports.AlertDescription = AlertDescription;
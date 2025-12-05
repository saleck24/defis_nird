"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardContent = exports.CardDescription = exports.CardAction = exports.CardTitle = exports.CardFooter = exports.CardHeader = exports.Card = void 0;
const React = require("react");
const utils_1 = require("./utils");
function Card(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("div", Object.assign({ "data-slot": "card", className: (0, utils_1.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border", className) }, props));
}
exports.Card = Card;
function CardHeader(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("div", Object.assign({ "data-slot": "card-header", className: (0, utils_1.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className) }, props));
}
exports.CardHeader = CardHeader;
function CardTitle(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("h4", Object.assign({ "data-slot": "card-title", className: (0, utils_1.cn)("leading-none", className) }, props));
}
exports.CardTitle = CardTitle;
function CardDescription(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("p", Object.assign({ "data-slot": "card-description", className: (0, utils_1.cn)("text-muted-foreground", className) }, props));
}
exports.CardDescription = CardDescription;
function CardAction(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("div", Object.assign({ "data-slot": "card-action", className: (0, utils_1.cn)("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className) }, props));
}
exports.CardAction = CardAction;
function CardContent(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("div", Object.assign({ "data-slot": "card-content", className: (0, utils_1.cn)("px-6 [&:last-child]:pb-6", className) }, props));
}
exports.CardContent = CardContent;
function CardFooter(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("div", Object.assign({ "data-slot": "card-footer", className: (0, utils_1.cn)("flex items-center px-6 pb-6 [.border-t]:pt-6", className) }, props));
}
exports.CardFooter = CardFooter;
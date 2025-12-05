"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionContent = exports.AccordionTrigger = exports.AccordionItem = exports.Accordion = void 0;
const React = require("react");
const AccordionPrimitive = require("@radix-ui/react-accordion@1.2.3");
const lucide_react_1 = require("lucide-react@0.487.0");
const utils_1 = require("./utils");
function Accordion(props) {
    return React.createElement(AccordionPrimitive.Root, Object.assign({ "data-slot": "accordion" }, props));
}
exports.Accordion = Accordion;
function AccordionItem(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement(AccordionPrimitive.Item, Object.assign({ "data-slot": "accordion-item", className: (0, utils_1.cn)("border-b last:border-b-0", className) }, props));
}
exports.AccordionItem = AccordionItem;
function AccordionTrigger(_a) {
    var { className, children } = _a, props = Object.assign({}, _a);
    return (React.createElement(AccordionPrimitive.Header, { className: "flex" },
        React.createElement(AccordionPrimitive.Trigger, Object.assign({ "data-slot": "accordion-trigger", className: (0, utils_1.cn)("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className) }, props),
            children,
            React.createElement(lucide_react_1.ChevronDownIcon, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" }))));
}
exports.AccordionTrigger = AccordionTrigger;
function AccordionContent(_a) {
    var { className, children } = _a, props = Object.assign({}, _a);
    return (React.createElement(AccordionPrimitive.Content, Object.assign({ "data-slot": "accordion-content", className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm" }, props),
        React.createElement("div", { className: (0, utils_1.cn)("pt-0 pb-4", className) }, children)));
}
exports.AccordionContent = AccordionContent;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormField = exports.FormMessage = exports.FormDescription = exports.FormControl = exports.FormLabel = exports.FormItem = exports.Form = exports.useFormField = void 0;
const React = require("react");
const react_hook_form_1 = require("react-hook-form@7.55.0");
const utils_1 = require("./utils");
const label_1 = require("./label");
const Form = react_hook_form_1.FormProvider;
exports.Form = Form;
const FormFieldContext = React.createContext({});
const FormField = (props) => {
    return (React.createElement(FormFieldContext.Provider, { value: { name: props.name } },
        React.createElement(react_hook_form_1.Controller, Object.assign({}, props))));
};
exports.FormField = FormField;
const useFormField = () => {
    const fieldContext = React.useContext(FormFieldContext);
    const itemContext = React.useContext(FormItemContext);
    const { getFieldState } = (0, react_hook_form_1.useFormContext)();
    const formState = (0, react_hook_form_1.useFormState)({ name: fieldContext.name });
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState,
    };
};
exports.useFormField = useFormField;
const FormItemContext = React.createContext({});
function FormItem(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    const id = React.useId();
    return (React.createElement(FormItemContext.Provider, { value: { id } },
        React.createElement("div", Object.assign({ "data-slot": "form-item", className: (0, utils_1.cn)("grid gap-2", className) }, props))));
}
exports.FormItem = FormItem;
function FormLabel(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    const { error, formItemId } = (0, exports.useFormField)();
    return React.createElement(label_1.Label, Object.assign({ "data-slot": "form-label", "data-error": !!error, className: (0, utils_1.cn)("data-[error=true]:text-destructive", className), htmlFor: formItemId }, props));
}
exports.FormLabel = FormLabel;
function FormControl(props) {
    const { error, formItemId, formDescriptionId, formMessageId } = (0, exports.useFormField)();
    return React.createElement(react_slot_1.Slot, Object.assign({ "data-slot": "form-control", id: formItemId, "aria-describedby": !error
            ? `${formDescriptionId}`
            : `${formDescriptionId} ${formMessageId}`, "aria-invalid": !!error }, props));
}
exports.FormControl = FormControl;
function FormDescription(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    const { formDescriptionId } = (0, exports.useFormField)();
    return React.createElement("p", Object.assign({ "data-slot": "form-description", id: formDescriptionId, className: (0, utils_1.cn)("text-muted-foreground text-sm", className) }, props));
}
exports.FormDescription = FormDescription;
function FormMessage(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    const { error, formMessageId } = (0, exports.useFormField)();
    const body = error ? String(error === null || error === void 0 ? void 0 : error.message) : props.children;
    if (!body) {
        return null;
    }
    return React.createElement("p", Object.assign({ "data-slot": "form-message", id: formMessageId, className: (0, utils_1.cn)("text-destructive text-sm", className) }, props), body);
}
exports.FormMessage = FormMessage;
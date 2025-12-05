"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputOTPSeparator = exports.InputOTPSlot = exports.InputOTPGroup = exports.InputOTP = void 0;
const React = require("react");
const input_otp_1 = require("input-otp@1.4.2");
const lucide_react_1 = require("lucide-react@0.487.0");
const utils_1 = require("./utils");
function InputOTP(_a) {
    var { className, containerClassName } = _a, props = Object.assign({}, _a);
    return React.createElement(input_otp_1.OTPInput, Object.assign({ "data-slot": "input-otp", containerClassName: (0, utils_1.cn)("flex items-center gap-2 has-disabled:opacity-50", containerClassName), className: (0, utils_1.cn)("disabled:cursor-not-allowed", className) }, props));
}
exports.InputOTP = InputOTP;
function InputOTPGroup(_a) {
    var { className } = _a, props = Object.assign({}, _a);
    return React.createElement("div", Object.assign({ "data-slot": "input-otp-group", className: (0, utils_1.cn)("flex items-center gap-1", className) }, props));
}
exports.InputOTPGroup = InputOTPGroup;
function InputOTPSlot(_a) {
    var { index, className } = _a, props = Object.assign({}, _a);
    const inputOTPContext = React.useContext(input_otp_1.OTPInputContext);
    const _b = (inputOTPContext === null || inputOTPContext === void 0 ? void 0 : inputOTPContext.slots[index]) || {}, char = _b.char, hasFakeCaret = _b.hasFakeCaret, isActive = _b.isActive;
    return (React.createElement("div", Object.assign({ "data-slot": "input-otp-slot", "data-active": isActive, className: (0, utils_1.cn)("data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm bg-input-background transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]", className) }, props),
        char,
        hasFakeCaret && (React.createElement("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center" },
            React.createElement("div", { className: "animate-caret-blink bg-foreground h-4 w-px duration-1000" })))));
}
exports.InputOTPSlot = InputOTPSlot;
function InputOTPSeparator(props) {
    return React.createElement("div", Object.assign({ "data-slot": "input-otp-separator", role: "separator" }, props),
        React.createElement(lucide_react_1.MinusIcon, null));
}
exports.InputOTPSeparator = InputOTPSeparator;

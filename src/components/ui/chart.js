"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartStyle = exports.ChartLegendContent = exports.ChartLegend = exports.ChartTooltipContent = exports.ChartTooltip = exports.ChartContainer = void 0;
const React = require("react");
const RechartsPrimitive = require("recharts@2.15.2");
const utils_1 = require("./utils");
const THEMES = { light: "", dark: ".dark" };
const ChartContext = React.createContext(null);
function useChart() {
    const context = React.useContext(ChartContext);
    if (!context) {
        throw new Error("useChart must be used within a <ChartContainer />");
    }
    return context;
}
function ChartContainer(_a) {
    var { id, className, children, config } = _a, props = Object.assign({}, _a);
    const uniqueId = React.useId();
    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
    return (React.createElement(ChartContext.Provider, { value: { config } },
        React.createElement("div", Object.assign({ "data-slot": "chart", "data-chart": chartId, className: (0, utils_1.cn)("[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden", className) }, props),
            React.createElement(ChartStyle, { id: chartId, config: config }),
            React.createElement(RechartsPrimitive.ResponsiveContainer, null, children))));
}
exports.ChartContainer = ChartContainer;
const ChartStyle = ({ id, config }) => {
    const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color);
    if (!colorConfig.length) {
        return null;
    }
    return (React.createElement("style", { dangerouslySetInnerHTML: {
            __html: Object.entries(THEMES)
                .map(([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
                .map(([key, itemConfig]) => {
                var _a;
                const color = ((_a = itemConfig.theme) === null || _a === void 0 ? void 0 : _a[theme]) ||
                    itemConfig.color;
                return color ? `  --color-${key}: ${color};` : null;
            })
                .join("\n")}
}
`)
                .join("\n"),
        } }));
};
exports.ChartStyle = ChartStyle;
const ChartTooltip = RechartsPrimitive.Tooltip;
exports.ChartTooltip = ChartTooltip;
function ChartTooltipContent(_a) {
    var { active, payload, className, indicator = "dot", hideLabel = false, hideIndicator = false, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey } = _a, props = Object.assign({}, _a);
    const { config } = useChart();
    const tooltipLabel = React.useMemo(() => {
        if (hideLabel || !(payload === null || payload === void 0 ? void 0 : payload.length)) {
            return null;
        }
        const [item] = payload;
        const key = `${labelKey || (item === null || item === void 0 ? void 0 : item.dataKey) || (item === null || item === void 0 ? void 0 : item.name) || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        const value = !labelKey && typeof label === "string"
            ? config[label] === null || config[label] === void 0 ? void 0 : config[label].label || label
            : (itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.label);
        if (labelFormatter) {
            return (React.createElement("div", { className: (0, utils_1.cn)("font-medium", labelClassName) }, labelFormatter(value, payload)));
        }
        if (!value) {
            return null;
        }
        return React.createElement("div", { className: (0, utils_1.cn)("font-medium", labelClassName) }, value);
    }, [
        label,
        labelFormatter,
        payload,
        hideLabel,
        labelClassName,
        config,
        labelKey,
    ]);
    if (!active || !(payload === null || payload === void 0 ? void 0 : payload.length)) {
        return null;
    }
    const nestLabel = payload.length === 1 && indicator !== "dot";
    return (React.createElement("div", Object.assign({ className: (0, utils_1.cn)("border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl", className) }, props),
        !nestLabel ? tooltipLabel : null,
        React.createElement("div", { className: "grid gap-1.5" }, payload.map((item, index) => {
            var _a;
            const key = `${nameKey || item.name || item.dataKey || "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;
            return (React.createElement("div", { key: item.dataKey, className: (0, utils_1.cn)("[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5", indicator === "dot" && "items-center") }, formatter && (item === null || item === void 0 ? void 0 : item.value) !== undefined && item.name ? (formatter(item.value, item.name, item, index, item.payload)) : (React.createElement(React.Fragment, null,
                (itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.icon) ? (React.createElement(itemConfig.icon, null)) : (!hideIndicator && (React.createElement("div", { className: (0, utils_1.cn)("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", {
                        "h-2.5 w-2.5": indicator === "dot",
                        "w-1": indicator === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                        "my-0.5": nestLabel && indicator === "dashed",
                    }), style: {
                        "--color-bg": indicatorColor,
                        "--color-border": indicatorColor,
                    } }))),
                React.createElement("div", { className: (0, utils_1.cn)("flex flex-1 justify-between leading-none", nestLabel ? "items-end" : "items-center") },
                    React.createElement("div", { className: "grid gap-1.5" },
                        nestLabel ? tooltipLabel : null,
                        React.createElement("span", { className: "text-muted-foreground" }, (_a = itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.label) !== null && _a !== void 0 ? _a : item.name)),
                    item.value && (React.createElement("span", { className: "text-foreground font-mono font-medium tabular-nums" }, item.value.toLocaleString())))))));
        }))));
}
exports.ChartTooltipContent = ChartTooltipContent;
const ChartLegend = RechartsPrimitive.Legend;
exports.ChartLegend = ChartLegend;
function ChartLegendContent(_a) {
    var { className, hideIcon = false, payload, verticalAlign = "bottom", nameKey } = _a, props = Object.assign({}, _a);
    const { config } = useChart();
    if (!(payload === null || payload === void 0 ? void 0 : payload.length)) {
        return null;
    }
    return (React.createElement("div", Object.assign({ className: (0, utils_1.cn)("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className) }, props), payload.map((item) => {
        var _a;
        const key = `${nameKey || item.dataKey || "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        return (React.createElement("div", { key: item.value, className: (0, utils_1.cn)("[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3") }, (itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.icon) && !hideIcon ? (React.createElement(itemConfig.icon, null)) : (React.createElement("div", { className: "h-2 w-2 shrink-0 rounded-[2px]", style: {
                backgroundColor: item.color,
            } })), itemConfig === null || itemConfig === void 0 ? void 0 : itemConfig.label));
    })));
}
exports.ChartLegendContent = ChartLegendContent;
function getPayloadConfigFromPayload(config, payload, key) {
    var _a, _b, _c, _d;
    if (typeof payload !== "object" || payload === null) {
        return undefined;
    }
    const payloadPayload = "payload" in payload &&
        typeof payload.payload === "object" &&
        payload.payload !== null
        ? payload.payload
        : undefined;
    let configLabelKey = key;
    if (key in payload &&
        typeof payload[key] === "string") {
        configLabelKey = payload[key];
    }
    else if (payloadPayload &&
        key in payloadPayload &&
        typeof payloadPayload[key] === "string") {
        configLabelKey = payloadPayload[key];
    }
    return configLabelKey in config
        ? config[configLabelKey]
        : config[key];
}
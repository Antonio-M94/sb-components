"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./mylabel.css");
const MyLabel = ({ allCaps = false, color = "primary", label = "No Label", size = "normal", fontColor, backgroundColor = "transparent", }) => {
    return ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: `label ${size} text-${color}`, style: { color: fontColor, backgroundColor } }, { children: allCaps ? label.toLocaleUpperCase() : label })));
};
exports.MyLabel = MyLabel;

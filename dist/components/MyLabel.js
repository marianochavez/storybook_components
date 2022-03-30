"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./mylabel.css");
function capitalizeStr(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
var MyLabel = function (_a) {
    var _b = _a.label, label = _b === void 0 ? 'noLabel' : _b, _c = _a.size, size = _c === void 0 ? 'normal' : _c, _d = _a.color, color = _d === void 0 ? 'primary' : _d, _e = _a.capitalize, capitalize = _e === void 0 ? false : _e, _f = _a.allCaps, allCaps = _f === void 0 ? false : _f, fontColor = _a.fontColor, _g = _a.backgroundColor, backgroundColor = _g === void 0 ? 'transparent' : _g;
    if (allCaps)
        label = label.toUpperCase();
    if (capitalize)
        label = capitalizeStr(label);
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: "label ".concat(size, " ").concat("text-" + color, " "), style: { color: fontColor, backgroundColor: backgroundColor } }, { children: label })));
};
exports.MyLabel = MyLabel;

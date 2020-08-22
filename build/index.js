/**
 * author iWuzhi
 * date 2020-08-22 13:03:27
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./webpack-externals/index.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.webpackExternals = void 0;
    var index_js_1 = require("./webpack-externals/index.js");
    Object.defineProperty(exports, "webpackExternals", { enumerable: true, get: function () { return __importDefault(index_js_1).default; } });
});

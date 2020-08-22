/**
 * author iWuzhi
 * date 2020-08-22 13:03:59
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = [
        {
            name: 'react',
            options: {
                'react': 'React'
            },
            cdn: '/lib/react/umd/react/react.development.js'
        },
        {
            name: 'react-dom',
            options: {
                'react-dom': 'ReactDOM'
            },
            cdn: '/lib/react-dom/umd/react-dom.development.js'
        }
    ];
});

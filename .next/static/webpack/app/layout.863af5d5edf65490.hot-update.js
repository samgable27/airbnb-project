"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"c3b8112d929a\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzVjYjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJjM2I4MTEyZDkyOWFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/CategoryBox.tsx":
/*!****************************************!*\
  !*** ./app/components/CategoryBox.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst CategoryBox = (param)=>{\n    let { icon: Icon, label, selected } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer\\n    \".concat(selected ? \"border-b-neutral-800\" : \"border-transparent\", \"\\n    \").concat(selected ? \"text-neutral-800\" : \"text-neutral-500\", \"\\n    \"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                size: 26\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\chris\\\\builds\\\\airbnb-proj\\\\app\\\\components\\\\CategoryBox.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-medium text-sm\",\n                children: label\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\chris\\\\builds\\\\airbnb-proj\\\\app\\\\components\\\\CategoryBox.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\chris\\\\builds\\\\airbnb-proj\\\\app\\\\components\\\\CategoryBox.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CategoryBox, \"b3R/Kl8NZr2hIt7q26EJDkrVSsQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n_c = CategoryBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryBox);\nvar _c;\n$RefreshReg$(_c, \"CategoryBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NhdGVnb3J5Qm94LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFNkQ7QUFRN0QsTUFBTUUsY0FBMEM7UUFBQyxFQUMvQ0MsTUFBTUMsSUFBSSxFQUNWQyxLQUFLLEVBQ0xDLFFBQVEsRUFDVDs7SUFDQyxNQUFNQyxTQUFTUCwwREFBU0E7SUFDeEIsTUFBTVEsU0FBU1AsZ0VBQWVBO0lBRTlCLHFCQUNFLDhEQUFDUTtRQUNDQyxXQUFXLHdIQUVYSixPQURBQSxXQUFXLHlCQUF5QixzQkFBcUIsVUFDTixPQUFuREEsV0FBVyxxQkFBcUIsb0JBQW1COzswQkFHbkQsOERBQUNGO2dCQUFLTyxNQUFNOzs7Ozs7MEJBQ1osOERBQUNGO2dCQUFJQyxXQUFVOzBCQUF1Qkw7Ozs7Ozs7Ozs7OztBQUc1QztHQW5CTUg7O1FBS1dGLHNEQUFTQTtRQUNUQyw0REFBZUE7OztLQU4xQkM7QUFxQk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQ2F0ZWdvcnlCb3gudHN4PzJlMzciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgSWNvblR5cGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbGliXCI7XHJcblxyXG5pbnRlcmZhY2UgQ2F0ZWdvcnlCb3hQcm9wcyB7XHJcbiAgaWNvbjogSWNvblR5cGU7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBzZWxlY3RlZD86IGJvb2xlYW47XHJcbn1cclxuY29uc3QgQ2F0ZWdvcnlCb3g6IFJlYWN0LkZDPENhdGVnb3J5Qm94UHJvcHM+ID0gKHtcclxuICBpY29uOiBJY29uLFxyXG4gIGxhYmVsLFxyXG4gIHNlbGVjdGVkLFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgcGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHAtMyBib3JkZXItYi0yIGhvdmVyOnRleHQtbmV1dHJhbC04MDAgdHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlclxyXG4gICAgJHtzZWxlY3RlZCA/IFwiYm9yZGVyLWItbmV1dHJhbC04MDBcIiA6IFwiYm9yZGVyLXRyYW5zcGFyZW50XCJ9XHJcbiAgICAke3NlbGVjdGVkID8gXCJ0ZXh0LW5ldXRyYWwtODAwXCIgOiBcInRleHQtbmV1dHJhbC01MDBcIn1cclxuICAgIGB9XHJcbiAgICA+XHJcbiAgICAgIDxJY29uIHNpemU9ezI2fSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtc21cIj57bGFiZWx9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlCb3g7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTZWFyY2hQYXJhbXMiLCJDYXRlZ29yeUJveCIsImljb24iLCJJY29uIiwibGFiZWwiLCJzZWxlY3RlZCIsInJvdXRlciIsInBhcmFtcyIsImRpdiIsImNsYXNzTmFtZSIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/CategoryBox.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"1187060dd3e2\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzVjYjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIxMTg3MDYwZGQzZTJcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/CategoryBox.tsx":
/*!****************************************!*\
  !*** ./app/components/CategoryBox.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nconst CategoryBox = (param)=>{\n    let { icon: Icon, label, selected } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer\\n    \".concat(selected ? \"border-b-neutral-800\" : \"border-transparent\", \"\\n    \").concat(selected ? \"text-neutral-800\" : \"text-neutral-500\", \"\\n    \"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                size: 26\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\chris\\\\builds\\\\airbnb-proj\\\\app\\\\components\\\\CategoryBox.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-medium text-sm\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\chris\\\\builds\\\\airbnb-proj\\\\app\\\\components\\\\CategoryBox.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\chris\\\\builds\\\\airbnb-proj\\\\app\\\\components\\\\CategoryBox.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CategoryBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryBox);\nvar _c;\n$RefreshReg$(_c, \"CategoryBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NhdGVnb3J5Qm94LnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFTQSxNQUFNQSxjQUEwQztRQUFDLEVBQy9DQyxNQUFNQyxJQUFJLEVBQ1ZDLEtBQUssRUFDTEMsUUFBUSxFQUNUO0lBQ0MscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVcsd0hBRVhGLE9BREFBLFdBQVcseUJBQXlCLHNCQUFxQixVQUNOLE9BQW5EQSxXQUFXLHFCQUFxQixvQkFBbUI7OzBCQUduRCw4REFBQ0Y7Z0JBQUtLLE1BQU07Ozs7OzswQkFDWiw4REFBQ0Y7Z0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7OztBQUdyQjtLQWhCTU47QUFrQk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQ2F0ZWdvcnlCb3gudHN4PzJlMzciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyBJY29uVHlwZSB9IGZyb20gXCJyZWFjdC1pY29ucy9saWJcIjtcclxuXHJcbmludGVyZmFjZSBDYXRlZ29yeUJveFByb3BzIHtcclxuICBpY29uOiBJY29uVHlwZTtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcclxufVxyXG5jb25zdCBDYXRlZ29yeUJveDogUmVhY3QuRkM8Q2F0ZWdvcnlCb3hQcm9wcz4gPSAoe1xyXG4gIGljb246IEljb24sXHJcbiAgbGFiZWwsXHJcbiAgc2VsZWN0ZWQsXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiBwLTMgYm9yZGVyLWItMiBob3Zlcjp0ZXh0LW5ldXRyYWwtODAwIHRyYW5zaXRpb24gY3Vyc29yLXBvaW50ZXJcclxuICAgICR7c2VsZWN0ZWQgPyBcImJvcmRlci1iLW5ldXRyYWwtODAwXCIgOiBcImJvcmRlci10cmFuc3BhcmVudFwifVxyXG4gICAgJHtzZWxlY3RlZCA/IFwidGV4dC1uZXV0cmFsLTgwMFwiIDogXCJ0ZXh0LW5ldXRyYWwtNTAwXCJ9XHJcbiAgICBgfVxyXG4gICAgPlxyXG4gICAgICA8SWNvbiBzaXplPXsyNn0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LXNtXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlCb3g7XHJcbiJdLCJuYW1lcyI6WyJDYXRlZ29yeUJveCIsImljb24iLCJJY29uIiwibGFiZWwiLCJzZWxlY3RlZCIsImRpdiIsImNsYXNzTmFtZSIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/CategoryBox.tsx\n"));

/***/ })

});
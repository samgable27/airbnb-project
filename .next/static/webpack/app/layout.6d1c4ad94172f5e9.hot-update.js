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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"5ab72185b417\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzVjYjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI1YWI3MjE4NWI0MTdcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/CategoryBox.tsx":
/*!****************************************!*\
  !*** ./app/components/CategoryBox.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ \"(app-pages-browser)/./node_modules/query-string/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst CategoryBox = (param)=>{\n    let { icon: Icon, label, selected } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)();\n    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{\n        var _params;\n        let currentQuery = {};\n        if (params) {\n            currentQuery = query_string__WEBPACK_IMPORTED_MODULE_3__[\"default\"].parse(params.toString());\n        }\n        const updatedQuery = {\n            ...currentQuery,\n            category: label\n        };\n        if (((_params = params) === null || _params === void 0 ? void 0 : _params.get(\"category\")) === label) {\n            delete updatedQuery.category;\n        }\n        const url = query_string__WEBPACK_IMPORTED_MODULE_3__[\"default\"].stringifyUrl({\n            url: \"/\",\n            query: updatedQuery\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer\\n    \".concat(selected ? \"border-b-neutral-800\" : \"border-transparent\", \"\\n    \").concat(selected ? \"text-neutral-800\" : \"text-neutral-500\", \"\\n    \"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                size: 26\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\chris\\\\builds\\\\airbnb-proj\\\\app\\\\components\\\\CategoryBox.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-medium text-sm\",\n                children: label\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\chris\\\\builds\\\\airbnb-proj\\\\app\\\\components\\\\CategoryBox.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\chris\\\\builds\\\\airbnb-proj\\\\app\\\\components\\\\CategoryBox.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CategoryBox, \"tyGbu589/mLWQpx3IabqljG5C14=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useSearchParams\n    ];\n});\n_c = CategoryBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CategoryBox);\nvar _c;\n$RefreshReg$(_c, \"CategoryBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0NhdGVnb3J5Qm94LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFNkQ7QUFDekI7QUFFTjtBQU85QixNQUFNSSxjQUEwQztRQUFDLEVBQy9DQyxNQUFNQyxJQUFJLEVBQ1ZDLEtBQUssRUFDTEMsUUFBUSxFQUNUOztJQUNDLE1BQU1DLFNBQVNULDBEQUFTQTtJQUN4QixNQUFNVSxTQUFTVCxnRUFBZUE7SUFFOUIsTUFBTVUsY0FBY1Qsa0RBQVdBLENBQUM7WUFZMUJRO1FBWEosSUFBSUUsZUFBZSxDQUFDO1FBRXBCLElBQUlGLFFBQVE7WUFDVkUsZUFBZVQsb0RBQUVBLENBQUNVLEtBQUssQ0FBQ0gsT0FBT0ksUUFBUTtRQUN6QztRQUVBLE1BQU1DLGVBQW9CO1lBQ3hCLEdBQUdILFlBQVk7WUFDZkksVUFBVVQ7UUFDWjtRQUVBLElBQUlHLEVBQUFBLFVBQUFBLG9CQUFBQSw4QkFBQUEsUUFBUU8sR0FBRyxDQUFDLGlCQUFnQlYsT0FBTztZQUNyQyxPQUFPUSxhQUFhQyxRQUFRO1FBQzlCO1FBRUEsTUFBTUUsTUFBTWYsb0RBQUVBLENBQUNnQixZQUFZLENBQUM7WUFDMUJELEtBQUs7WUFDTEUsT0FBT0w7UUFDVDtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTTtRQUNDQyxXQUFXLHdIQUVYZCxPQURBQSxXQUFXLHlCQUF5QixzQkFBcUIsVUFDTixPQUFuREEsV0FBVyxxQkFBcUIsb0JBQW1COzswQkFHbkQsOERBQUNGO2dCQUFLaUIsTUFBTTs7Ozs7OzBCQUNaLDhEQUFDRjtnQkFBSUMsV0FBVTswQkFBdUJmOzs7Ozs7Ozs7Ozs7QUFHNUM7R0F6Q01IOztRQUtXSixzREFBU0E7UUFDVEMsNERBQWVBOzs7S0FOMUJHO0FBMkNOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0NhdGVnb3J5Qm94LnRzeD8yZTM3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEljb25UeXBlIH0gZnJvbSBcInJlYWN0LWljb25zL2xpYlwiO1xyXG5pbXBvcnQgcXMgZnJvbSBcInF1ZXJ5LXN0cmluZ1wiO1xyXG5cclxuaW50ZXJmYWNlIENhdGVnb3J5Qm94UHJvcHMge1xyXG4gIGljb246IEljb25UeXBlO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgc2VsZWN0ZWQ/OiBib29sZWFuO1xyXG59XHJcbmNvbnN0IENhdGVnb3J5Qm94OiBSZWFjdC5GQzxDYXRlZ29yeUJveFByb3BzPiA9ICh7XHJcbiAgaWNvbjogSWNvbixcclxuICBsYWJlbCxcclxuICBzZWxlY3RlZCxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGxldCBjdXJyZW50UXVlcnkgPSB7fTtcclxuXHJcbiAgICBpZiAocGFyYW1zKSB7XHJcbiAgICAgIGN1cnJlbnRRdWVyeSA9IHFzLnBhcnNlKHBhcmFtcy50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVkUXVlcnk6IGFueSA9IHtcclxuICAgICAgLi4uY3VycmVudFF1ZXJ5LFxyXG4gICAgICBjYXRlZ29yeTogbGFiZWwsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChwYXJhbXM/LmdldChcImNhdGVnb3J5XCIpID09PSBsYWJlbCkge1xyXG4gICAgICBkZWxldGUgdXBkYXRlZFF1ZXJ5LmNhdGVnb3J5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVybCA9IHFzLnN0cmluZ2lmeVVybCh7XHJcbiAgICAgIHVybDogXCIvXCIsXHJcbiAgICAgIHF1ZXJ5OiB1cGRhdGVkUXVlcnksXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHAtMyBib3JkZXItYi0yIGhvdmVyOnRleHQtbmV1dHJhbC04MDAgdHJhbnNpdGlvbiBjdXJzb3ItcG9pbnRlclxyXG4gICAgJHtzZWxlY3RlZCA/IFwiYm9yZGVyLWItbmV1dHJhbC04MDBcIiA6IFwiYm9yZGVyLXRyYW5zcGFyZW50XCJ9XHJcbiAgICAke3NlbGVjdGVkID8gXCJ0ZXh0LW5ldXRyYWwtODAwXCIgOiBcInRleHQtbmV1dHJhbC01MDBcIn1cclxuICAgIGB9XHJcbiAgICA+XHJcbiAgICAgIDxJY29uIHNpemU9ezI2fSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtc21cIj57bGFiZWx9PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnlCb3g7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VDYWxsYmFjayIsInFzIiwiQ2F0ZWdvcnlCb3giLCJpY29uIiwiSWNvbiIsImxhYmVsIiwic2VsZWN0ZWQiLCJyb3V0ZXIiLCJwYXJhbXMiLCJoYW5kbGVDbGljayIsImN1cnJlbnRRdWVyeSIsInBhcnNlIiwidG9TdHJpbmciLCJ1cGRhdGVkUXVlcnkiLCJjYXRlZ29yeSIsImdldCIsInVybCIsInN0cmluZ2lmeVVybCIsInF1ZXJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/CategoryBox.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"f0674e48e4bc\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzVjYjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJmMDY3NGU0OGU0YmNcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/components/navbar/Categories.tsx":
/*!**********************************************!*\
  !*** ./app/components/navbar/Categories.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categories: function() { return /* binding */ categories; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Container */ \"(app-pages-browser)/./app/components/Container.tsx\");\n/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/tb */ \"(app-pages-browser)/./node_modules/react-icons/tb/index.esm.js\");\n/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/gi */ \"(app-pages-browser)/./node_modules/react-icons/gi/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ \"(app-pages-browser)/./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _CategoryBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CategoryBox */ \"(app-pages-browser)/./app/components/CategoryBox.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ categories,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst categories = [\n    {\n        label: \"Beach\",\n        icon: react_icons_tb__WEBPACK_IMPORTED_MODULE_4__.TbBeach,\n        description: \"This property is close to the beach!\"\n    },\n    {\n        label: \"Windmills\",\n        icon: react_icons_gi__WEBPACK_IMPORTED_MODULE_5__.GiWindmill,\n        description: \"This property has windmills!\"\n    },\n    {\n        label: \"Modern\",\n        icon: react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdOutlineVilla,\n        description: \"This property is modern!\"\n    },\n    {\n        label: \"Countryside\",\n        icon: react_icons_tb__WEBPACK_IMPORTED_MODULE_4__.TbMountain,\n        description: \"This property is in the beautiful countryside!\"\n    },\n    {\n        label: \"Pool\",\n        icon: react_icons_tb__WEBPACK_IMPORTED_MODULE_4__.TbPool,\n        description: \"This property has a pool!\"\n    },\n    {\n        label: \"Islands\",\n        icon: react_icons_gi__WEBPACK_IMPORTED_MODULE_5__.GiIsland,\n        description: \"This property is on an island!\"\n    },\n    {\n        label: \"Lake\",\n        icon: react_icons_gi__WEBPACK_IMPORTED_MODULE_5__.GiBoatFishing,\n        description: \"This property is close to a lake!\"\n    },\n    {\n        label: \"Skiing\",\n        icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaSkiing,\n        description: \"This property has skiing activities!\"\n    },\n    {\n        label: \"Castle\",\n        icon: react_icons_gi__WEBPACK_IMPORTED_MODULE_5__.GiCastle,\n        description: \"This property is in a castle!\"\n    },\n    {\n        label: \"Camping\",\n        icon: react_icons_gi__WEBPACK_IMPORTED_MODULE_5__.GiForestCamp,\n        description: \"This property has camping activities!\"\n    },\n    {\n        label: \"Arctic\",\n        icon: react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsSnow,\n        description: \"This property has camping activities!\"\n    },\n    {\n        label: \"Cave\",\n        icon: react_icons_gi__WEBPACK_IMPORTED_MODULE_5__.GiCaveEntrance,\n        description: \"This property is in a cave!\"\n    },\n    {\n        label: \"Desert\",\n        icon: react_icons_gi__WEBPACK_IMPORTED_MODULE_5__.GiCactus,\n        description: \"This property is in the desert!\"\n    },\n    {\n        label: \"Barns\",\n        icon: react_icons_gi__WEBPACK_IMPORTED_MODULE_5__.GiBarn,\n        description: \"This property is in a barn!\"\n    },\n    {\n        label: \"Barns\",\n        icon: react_icons_gi__WEBPACK_IMPORTED_MODULE_5__.GiBarn,\n        description: \"This property is in the desert!\"\n    }\n];\nconst Categories = ()=>{\n    var _params;\n    _s();\n    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const category = (_params = params) === null || _params === void 0 ? void 0 : _params.get(\"category\");\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    const isMainPage = pathname === \"/\";\n    if (!isMainPage) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pt-4 flex flex-row items-center justify-between overflow-x-auto\",\n            children: categories.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CategoryBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    label: item.label,\n                    selected: category === item.label,\n                    icon: item.icon\n                }, item.label, false, {\n                    fileName: \"C:\\\\Users\\\\chris\\\\builds\\\\airbnb-proj\\\\app\\\\components\\\\navbar\\\\Categories.tsx\",\n                    lineNumber: 114,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\chris\\\\builds\\\\airbnb-proj\\\\app\\\\components\\\\navbar\\\\Categories.tsx\",\n            lineNumber: 112,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\chris\\\\builds\\\\airbnb-proj\\\\app\\\\components\\\\navbar\\\\Categories.tsx\",\n        lineNumber: 111,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Categories, \"JtZdQqGC+hADEJeV1U+ckqkvfe0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = Categories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categories);\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL25hdmJhci9DYXRlZ29yaWVzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRXFDO0FBQ3dCO0FBVXJDO0FBQ2dCO0FBQ1E7QUFDTjtBQUNEO0FBQ3NCO0FBRXhELE1BQU1rQixhQUFhO0lBQ3hCO1FBQ0VDLE9BQU87UUFDUEMsTUFBTW5CLG1EQUFPQTtRQUNib0IsYUFBYTtJQUNmO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxNQUFNVCxzREFBVUE7UUFDaEJVLGFBQWE7SUFDZjtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsTUFBTVAsMERBQWNBO1FBQ3BCUSxhQUFhO0lBQ2Y7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLE1BQU1sQixzREFBVUE7UUFDaEJtQixhQUFhO0lBQ2Y7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLE1BQU1qQixrREFBTUE7UUFDWmtCLGFBQWE7SUFDZjtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsTUFBTVYsb0RBQVFBO1FBQ2RXLGFBQWE7SUFDZjtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsTUFBTWYseURBQWFBO1FBQ25CZ0IsYUFBYTtJQUNmO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxNQUFNTixvREFBUUE7UUFDZE8sYUFBYTtJQUNmO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxNQUFNYixvREFBUUE7UUFDZGMsYUFBYTtJQUNmO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxNQUFNWCx3REFBWUE7UUFDbEJZLGFBQWE7SUFDZjtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsTUFBTVIsa0RBQU1BO1FBQ1pTLGFBQWE7SUFDZjtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsTUFBTVosMERBQWNBO1FBQ3BCYSxhQUFhO0lBQ2Y7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLE1BQU1kLG9EQUFRQTtRQUNkZSxhQUFhO0lBQ2Y7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLE1BQU1oQixrREFBTUE7UUFDWmlCLGFBQWE7SUFDZjtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsTUFBTWhCLGtEQUFNQTtRQUNaaUIsYUFBYTtJQUNmO0NBQ0QsQ0FBQztBQUVGLE1BQU1DLGFBQWE7UUFFQUM7O0lBRGpCLE1BQU1BLFNBQVNOLGdFQUFlQTtJQUM5QixNQUFNTyxZQUFXRCxVQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVFFLEdBQUcsQ0FBQztJQUM3QixNQUFNQyxXQUFXViw0REFBV0E7SUFFNUIsTUFBTVcsYUFBYUQsYUFBYTtJQUVoQyxJQUFJLENBQUNDLFlBQVk7UUFDZixPQUFPO0lBQ1Q7SUFFQSxxQkFDRSw4REFBQzNCLGtEQUFTQTtrQkFDUiw0RUFBQzRCO1lBQUlDLFdBQVU7c0JBQ1pYLFdBQVdZLEdBQUcsQ0FBQyxDQUFDQyxxQkFDZiw4REFBQ2hCLG9EQUFXQTtvQkFFVkksT0FBT1ksS0FBS1osS0FBSztvQkFDakJhLFVBQVVSLGFBQWFPLEtBQUtaLEtBQUs7b0JBQ2pDQyxNQUFNVyxLQUFLWCxJQUFJO21CQUhWVyxLQUFLWixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7QUFTM0I7R0F6Qk1HOztRQUNXTCw0REFBZUE7UUFFYkQsd0RBQVdBOzs7S0FIeEJNO0FBMkJOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL25hdmJhci9DYXRlZ29yaWVzLnRzeD9iNzE5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IFRiQmVhY2gsIFRiTW91bnRhaW4sIFRiUG9vbCB9IGZyb20gXCJyZWFjdC1pY29ucy90YlwiO1xyXG5pbXBvcnQge1xyXG4gIEdpQmFybixcclxuICBHaUJvYXRGaXNoaW5nLFxyXG4gIEdpQ2FjdHVzLFxyXG4gIEdpQ2FzdGxlLFxyXG4gIEdpQ2F2ZUVudHJhbmNlLFxyXG4gIEdpRm9yZXN0Q2FtcCxcclxuICBHaUlzbGFuZCxcclxuICBHaVdpbmRtaWxsLFxyXG59IGZyb20gXCJyZWFjdC1pY29ucy9naVwiO1xyXG5pbXBvcnQgeyBCc1Nub3cgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuaW1wb3J0IHsgTWRPdXRsaW5lVmlsbGEgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IHsgRmFTa2lpbmcgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IENhdGVnb3J5Qm94IGZyb20gXCIuLi9DYXRlZ29yeUJveFwiO1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAge1xyXG4gICAgbGFiZWw6IFwiQmVhY2hcIixcclxuICAgIGljb246IFRiQmVhY2gsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIHByb3BlcnR5IGlzIGNsb3NlIHRvIHRoZSBiZWFjaCFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiBcIldpbmRtaWxsc1wiLFxyXG4gICAgaWNvbjogR2lXaW5kbWlsbCxcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgcHJvcGVydHkgaGFzIHdpbmRtaWxscyFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiBcIk1vZGVyblwiLFxyXG4gICAgaWNvbjogTWRPdXRsaW5lVmlsbGEsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIHByb3BlcnR5IGlzIG1vZGVybiFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiBcIkNvdW50cnlzaWRlXCIsXHJcbiAgICBpY29uOiBUYk1vdW50YWluLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBwcm9wZXJ0eSBpcyBpbiB0aGUgYmVhdXRpZnVsIGNvdW50cnlzaWRlIVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6IFwiUG9vbFwiLFxyXG4gICAgaWNvbjogVGJQb29sLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBwcm9wZXJ0eSBoYXMgYSBwb29sIVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6IFwiSXNsYW5kc1wiLFxyXG4gICAgaWNvbjogR2lJc2xhbmQsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIHByb3BlcnR5IGlzIG9uIGFuIGlzbGFuZCFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiBcIkxha2VcIixcclxuICAgIGljb246IEdpQm9hdEZpc2hpbmcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIHByb3BlcnR5IGlzIGNsb3NlIHRvIGEgbGFrZSFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiBcIlNraWluZ1wiLFxyXG4gICAgaWNvbjogRmFTa2lpbmcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIHByb3BlcnR5IGhhcyBza2lpbmcgYWN0aXZpdGllcyFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiBcIkNhc3RsZVwiLFxyXG4gICAgaWNvbjogR2lDYXN0bGUsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIHByb3BlcnR5IGlzIGluIGEgY2FzdGxlIVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6IFwiQ2FtcGluZ1wiLFxyXG4gICAgaWNvbjogR2lGb3Jlc3RDYW1wLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBwcm9wZXJ0eSBoYXMgY2FtcGluZyBhY3Rpdml0aWVzIVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6IFwiQXJjdGljXCIsXHJcbiAgICBpY29uOiBCc1Nub3csXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIHByb3BlcnR5IGhhcyBjYW1waW5nIGFjdGl2aXRpZXMhXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogXCJDYXZlXCIsXHJcbiAgICBpY29uOiBHaUNhdmVFbnRyYW5jZSxcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgcHJvcGVydHkgaXMgaW4gYSBjYXZlIVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6IFwiRGVzZXJ0XCIsXHJcbiAgICBpY29uOiBHaUNhY3R1cyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgcHJvcGVydHkgaXMgaW4gdGhlIGRlc2VydCFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiBcIkJhcm5zXCIsXHJcbiAgICBpY29uOiBHaUJhcm4sXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIHByb3BlcnR5IGlzIGluIGEgYmFybiFcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiBcIkJhcm5zXCIsXHJcbiAgICBpY29uOiBHaUJhcm4sXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIHByb3BlcnR5IGlzIGluIHRoZSBkZXNlcnQhXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgY29uc3QgY2F0ZWdvcnkgPSBwYXJhbXM/LmdldChcImNhdGVnb3J5XCIpO1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuXHJcbiAgY29uc3QgaXNNYWluUGFnZSA9IHBhdGhuYW1lID09PSBcIi9cIjtcclxuXHJcbiAgaWYgKCFpc01haW5QYWdlKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG92ZXJmbG93LXgtYXV0b1wiPlxyXG4gICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgPENhdGVnb3J5Qm94XHJcbiAgICAgICAgICAgIGtleT17aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgIHNlbGVjdGVkPXtjYXRlZ29yeSA9PT0gaXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgaWNvbj17aXRlbS5pY29ufVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllcztcclxuIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIlRiQmVhY2giLCJUYk1vdW50YWluIiwiVGJQb29sIiwiR2lCYXJuIiwiR2lCb2F0RmlzaGluZyIsIkdpQ2FjdHVzIiwiR2lDYXN0bGUiLCJHaUNhdmVFbnRyYW5jZSIsIkdpRm9yZXN0Q2FtcCIsIkdpSXNsYW5kIiwiR2lXaW5kbWlsbCIsIkJzU25vdyIsIk1kT3V0bGluZVZpbGxhIiwiRmFTa2lpbmciLCJDYXRlZ29yeUJveCIsInVzZVBhdGhuYW1lIiwidXNlU2VhcmNoUGFyYW1zIiwiY2F0ZWdvcmllcyIsImxhYmVsIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiQ2F0ZWdvcmllcyIsInBhcmFtcyIsImNhdGVnb3J5IiwiZ2V0IiwicGF0aG5hbWUiLCJpc01haW5QYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsInNlbGVjdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/navbar/Categories.tsx\n"));

/***/ })

});
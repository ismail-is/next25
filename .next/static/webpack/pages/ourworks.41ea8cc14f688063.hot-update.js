"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ourworks",{

/***/ "./src/components/Page-header/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/Page-header/index.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar PageHeader = function(param) {\n    var title = param.title, fullPath = param.fullPath, image = param.image;\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"header\", {\n        className: \"pages-header bg-img valign parallaxie\",\n        style: {\n            backgroundImage: \"url(\".concat(!image ? \"/assets/img/Architectures/Aboutus.jpg\" : image, \")\")\n        },\n        \"data-overlay-dark\": \"5\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\archo-react-architecture-interior-template-2023-11-27-04-49-03-utc\\\\Main_files\\\\archo\\\\src\\\\components\\\\Page-header\\\\index.jsx\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"container\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\archo-react-architecture-interior-template-2023-11-27-04-49-03-utc\\\\Main_files\\\\archo\\\\src\\\\components\\\\Page-header\\\\index.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"row\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\archo-react-architecture-interior-template-2023-11-27-04-49-03-utc\\\\Main_files\\\\archo\\\\src\\\\components\\\\Page-header\\\\index.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                    className: \"col-lg-12\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\archo-react-architecture-interior-template-2023-11-27-04-49-03-utc\\\\Main_files\\\\archo\\\\src\\\\components\\\\Page-header\\\\index.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"cont text-center\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\archo-react-architecture-interior-template-2023-11-27-04-49-03-utc\\\\Main_files\\\\archo\\\\src\\\\components\\\\Page-header\\\\index.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\archo-react-architecture-interior-template-2023-11-27-04-49-03-utc\\\\Main_files\\\\archo\\\\src\\\\components\\\\Page-header\\\\index.jsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: title\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: \"path\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\archo-react-architecture-interior-template-2023-11-27-04-49-03-utc\\\\Main_files\\\\archo\\\\src\\\\components\\\\Page-header\\\\index.jsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 15\n                                },\n                                __self: _this,\n                                children: fullPath.map(function(item, index) {\n                                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\archo-react-architecture-interior-template-2023-11-27-04-49-03-utc\\\\Main_files\\\\archo\\\\src\\\\components\\\\Page-header\\\\index.jsx\",\n                                            lineNumber: 22,\n                                            columnNumber: 19\n                                        },\n                                        __self: _this1,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: item.url,\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\archo-react-architecture-interior-template-2023-11-27-04-49-03-utc\\\\Main_files\\\\archo\\\\src\\\\components\\\\Page-header\\\\index.jsx\",\n                                                    lineNumber: 23,\n                                                    columnNumber: 21\n                                                },\n                                                __self: _this1,\n                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                                    className: router.pathname == item.url ? \"active\" : \"\",\n                                                    __source: {\n                                                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\archo-react-architecture-interior-template-2023-11-27-04-49-03-utc\\\\Main_files\\\\archo\\\\src\\\\components\\\\Page-header\\\\index.jsx\",\n                                                        lineNumber: 24,\n                                                        columnNumber: 23\n                                                    },\n                                                    __self: _this1,\n                                                    children: item.name\n                                                })\n                                            }),\n                                            index != fullPath.length - 1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", {\n                                                __source: {\n                                                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\archo-react-architecture-interior-template-2023-11-27-04-49-03-utc\\\\Main_files\\\\archo\\\\src\\\\components\\\\Page-header\\\\index.jsx\",\n                                                    lineNumber: 30,\n                                                    columnNumber: 53\n                                                },\n                                                __self: _this1,\n                                                children: \"/\"\n                                            }) : \"\"\n                                        ]\n                                    }, item.id);\n                                })\n                            })\n                        ]\n                    })\n                })\n            })\n        })\n    }));\n};\n_s(PageHeader, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = PageHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageHeader);\nvar _c;\n$RefreshReg$(_c, \"PageHeader\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdlLWhlYWRlci9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUI7QUFDRztBQUNXOzs7QUFFdkMsR0FBSyxDQUFDRyxVQUFVLEdBQUcsUUFBUSxRQUF3QixDQUFDO1FBQTlCQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLEtBQUssU0FBTEEsS0FBSzs7O0lBQzFDLEdBQUssQ0FBQ0MsTUFBTSxHQUFHTCxzREFBUztJQUN4QixNQUFNLHNFQUNITSxDQUFNO1FBQ0xDLFNBQVMsRUFBQyxDQUF1QztRQUNqREMsS0FBSyxFQUFFLENBQUM7WUFDTkMsZUFBZSxFQUFHLENBQUksTUFBMkQsTUFBQyxFQUF6REwsS0FBSyxHQUFHLENBQXVDLHlDQUFHQSxLQUFLLEVBQUMsQ0FBQztRQUNwRixDQUFDO1FBQ0RNLENBQWlCLG9CQUFDLENBQUc7Ozs7Ozs7dUZBRXBCQyxDQUFHO1lBQUNKLFNBQVMsRUFBQyxDQUFXOzs7Ozs7OzJGQUN2QkksQ0FBRztnQkFBQ0osU0FBUyxFQUFDLENBQUs7Ozs7Ozs7K0ZBQ2pCSSxDQUFHO29CQUFDSixTQUFTLEVBQUMsQ0FBVzs7Ozs7OztvR0FDdkJJLENBQUc7d0JBQUNKLFNBQVMsRUFBQyxDQUFrQjs7Ozs7Ozs7aUdBQzlCSyxDQUFFOzs7Ozs7OzBDQUFFVixLQUFLOztpR0FDVFMsQ0FBRztnQ0FBQ0osU0FBUyxFQUFDLENBQU07Ozs7Ozs7MENBQ2xCSixRQUFRLENBQUNVLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBRUMsS0FBSztrREFDeEIsTUFBTSx5REFBTGpCLHVEQUFjOzs7Ozs7OztpSEFDWkMsa0RBQUk7Z0RBQUNrQixJQUFJLEVBQUVILElBQUksQ0FBQ0ksR0FBRzs7Ozs7OzsrSEFDakJDLENBQUM7b0RBQ0FaLFNBQVMsRUFBRUYsTUFBTSxDQUFDZSxRQUFRLElBQUlOLElBQUksQ0FBQ0ksR0FBRyxHQUFHLENBQVEsVUFBRyxDQUFFOzs7Ozs7OzhEQUVyREosSUFBSSxDQUFDTyxJQUFJOzs7NENBR2JOLEtBQUssSUFBSVosUUFBUSxDQUFDbUIsTUFBTSxHQUFHLENBQUMsd0VBQUlDLENBQUk7Ozs7Ozs7MERBQUMsQ0FBQztpREFBVSxDQUFFOzt1Q0FSaENULElBQUksQ0FBQ1UsRUFBRTs7Ozs7Ozs7O0FBa0I5QyxDQUFDO0dBbkNLdkIsVUFBVTs7UUFDQ0Qsa0RBQVM7OztLQURwQkMsVUFBVTtBQXFDaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9QYWdlLWhlYWRlci9pbmRleC5qc3g/MjZmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBQYWdlSGVhZGVyID0gKHsgdGl0bGUsIGZ1bGxQYXRoLCBpbWFnZSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXJcclxuICAgICAgY2xhc3NOYW1lPVwicGFnZXMtaGVhZGVyIGJnLWltZyB2YWxpZ24gcGFyYWxsYXhpZVwiXHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7IWltYWdlID8gXCIvYXNzZXRzL2ltZy9BcmNoaXRlY3R1cmVzL0Fib3V0dXMuanBnXCIgOiBpbWFnZX0pYCxcclxuICAgICAgfX1cclxuICAgICAgZGF0YS1vdmVybGF5LWRhcms9XCI1XCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGF0aFwiPlxyXG4gICAgICAgICAgICAgICAge2Z1bGxQYXRoLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS51cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtyb3V0ZXIucGF0aG5hbWUgPT0gaXRlbS51cmwgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAge2luZGV4ICE9IGZ1bGxQYXRoLmxlbmd0aCAtIDEgPyA8c3Bhbj4vPC9zcGFuPiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsInVzZVJvdXRlciIsIlBhZ2VIZWFkZXIiLCJ0aXRsZSIsImZ1bGxQYXRoIiwiaW1hZ2UiLCJyb3V0ZXIiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImRhdGEtb3ZlcmxheS1kYXJrIiwiZGl2IiwiaDEiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJGcmFnbWVudCIsImhyZWYiLCJ1cmwiLCJhIiwicGF0aG5hbWUiLCJuYW1lIiwibGVuZ3RoIiwic3BhbiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Page-header/index.jsx\n");

/***/ })

});
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ourworks",{

/***/ "./src/components/Blogs1/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Blogs1/index.jsx ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/pages/ourworks/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/ourworks/index.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_About_Us1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/About-Us1 */ \"./src/components/About-Us1/index.jsx\");\n/* harmony import */ var _components_Services1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Services1 */ \"./src/components/Services1/index.jsx\");\n/* harmony import */ var _components_Intro_with_horizontal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Intro-with-horizontal */ \"./src/components/Intro-with-horizontal/index.jsx\");\n/* harmony import */ var _layouts_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layouts/light */ \"./src/layouts/light.jsx\");\n/* harmony import */ var _components_Portfolio1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Portfolio1 */ \"./src/components/Portfolio1/index.jsx\");\n/* harmony import */ var _components_Skills_circle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Skills-circle */ \"./src/components/Skills-circle/index.jsx\");\n/* harmony import */ var _components_Testimonials1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Testimonials1 */ \"./src/components/Testimonials1/index.jsx\");\n/* harmony import */ var _components_Team1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Team1 */ \"./src/components/Team1/index.jsx\");\n/* harmony import */ var _components_Blogs1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Blogs1 */ \"./src/components/Blogs1/index.jsx\");\n/* harmony import */ var _components_Blogs1__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_Blogs1__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Contact */ \"./src/components/Contact/index.jsx\");\n/* harmony import */ var _components_Brands__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Brands */ \"./src/components/Brands/index.jsx\");\n/* harmony import */ var _components_About_Us2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/About-Us2 */ \"./src/components/About-Us2/index.jsx\");\n/* harmony import */ var _components_Work_header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Work-header */ \"./src/components/Work-header/index.jsx\");\n/* harmony import */ var _components_Work_Four_Column__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Work-Four-Column */ \"./src/components/Work-Four-Column/index.jsx\");\n/* harmony import */ var _components_Page_header__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Page-header */ \"./src/components/Page-header/index.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/* eslint-disable @next/next/no-img-element */ \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar ourworks = function() {\n    // React.useEffect(() => {\n    //   document.querySelector(\"body\").classList.add(\"homepage\");\n    // }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        footerClass: \"mt-30\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\archo-react-architecture-interior-template-2023-11-27-04-49-03-utc\\\\Main_files\\\\archo\\\\src\\\\pages\\\\ourworks\\\\index.jsx\",\n            lineNumber: 24,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Page_header__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n                title: \"Our Works\",\n                fullPath: [],\n                image: \"/assets/img/Architectures/contactheader.jpg\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\archo-react-architecture-interior-template-2023-11-27-04-49-03-utc\\\\Main_files\\\\archo\\\\src\\\\pages\\\\ourworks\\\\index.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_components_Blogs1__WEBPACK_IMPORTED_MODULE_10___default()), {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\archo-react-architecture-interior-template-2023-11-27-04-49-03-utc\\\\Main_files\\\\archo\\\\src\\\\pages\\\\ourworks\\\\index.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Contact__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\archo-react-architecture-interior-template-2023-11-27-04-49-03-utc\\\\Main_files\\\\archo\\\\src\\\\pages\\\\ourworks\\\\index.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ourworks);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvb3Vyd29ya3MvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsRUFBOEMsNkNBQ3JCO0FBQ3dCO0FBQ0M7QUFDc0I7QUFDM0I7QUFDTztBQUNLO0FBQ0E7QUFDZjtBQUNFO0FBQ0U7QUFDRjtBQUNLO0FBQ0k7QUFDUztBQUNUOztBQUVyRCxHQUFLLENBQUNnQixRQUFRLEdBQUcsUUFBUSxHQUFGLENBQUM7SUFDdEIsRUFBMEI7SUFDMUIsRUFBOEQ7SUFDOUQsRUFBVTtJQUNWLE1BQU0sdUVBQ0haLHNEQUFXO1FBQUNhLFdBQVcsRUFBRSxDQUFPOzs7Ozs7OztpRkFDOUJGLGdFQUFVO2dCQUNURyxLQUFLLEVBQUMsQ0FBVztnQkFDakJDLFFBQVEsRUFBRSxDQUFDLENBRVY7Z0JBQ0RDLEtBQUssRUFBQyxDQUE2Qzs7Ozs7Ozs7aUZBTXBEWCw0REFBTTs7Ozs7Ozs7aUZBUU5DLDREQUFPOzs7Ozs7Ozs7O0FBR2QsQ0FBQztBQUVELCtEQUFlTSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL291cndvcmtzL2luZGV4LmpzeD9iOGY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWJvdXRVczEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQWJvdXQtVXMxXCI7XHJcbmltcG9ydCBTZXJ2aWNlczEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VydmljZXMxXCI7XHJcbmltcG9ydCBJbnRyb1dpdGhIb3Jpem9udGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0ludHJvLXdpdGgtaG9yaXpvbnRhbFwiO1xyXG5pbXBvcnQgTGlnaHRMYXlvdXQgZnJvbSBcIi4uLy4uL2xheW91dHMvbGlnaHRcIjtcclxuaW1wb3J0IFBvcnRmb2xpbzEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9ydGZvbGlvMVwiO1xyXG5pbXBvcnQgU2tpbGxzQ2lyY2xlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NraWxscy1jaXJjbGVcIjtcclxuaW1wb3J0IFRlc3RpbW9uaWFscyBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UZXN0aW1vbmlhbHMxXCI7XHJcbmltcG9ydCBUZWFtMSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UZWFtMVwiO1xyXG5pbXBvcnQgQmxvZ3MxIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Jsb2dzMVwiO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250YWN0XCI7XHJcbmltcG9ydCBCcmFuZHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnJhbmRzXCI7XHJcbmltcG9ydCBBYm91dFVzMiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BYm91dC1VczJcIjtcclxuaW1wb3J0IFdvcmtIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvV29yay1oZWFkZXJcIjtcclxuaW1wb3J0IFdvcmtGb3VyQ29sdW1uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dvcmstRm91ci1Db2x1bW5cIjtcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGFnZS1oZWFkZXJcIjtcclxuXHJcbmNvbnN0IG91cndvcmtzID0gKCkgPT4ge1xyXG4gIC8vIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwiaG9tZXBhZ2VcIik7XHJcbiAgLy8gfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGlnaHRMYXlvdXQgZm9vdGVyQ2xhc3M9e1wibXQtMzBcIn0+XHJcbiAgICAgIDxQYWdlSGVhZGVyXHJcbiAgICAgICAgdGl0bGU9XCJPdXIgV29ya3NcIlxyXG4gICAgICAgIGZ1bGxQYXRoPXtbXHJcbiAgICAgICAgIFxyXG4gICAgICAgIF19XHJcbiAgICAgICAgaW1hZ2U9XCIvYXNzZXRzL2ltZy9BcmNoaXRlY3R1cmVzL2NvbnRhY3RoZWFkZXIuanBnXCJcclxuICAgICAgLz5cclxuICAgICAgey8qIDxJbnRyb1dpdGhIb3Jpem9udGFsIC8+ICovfVxyXG4gICAgICBcclxuICAgICAgey8qIDxBYm91dFVzMSAvPiAqL31cclxuICAgICAgey8qIDxBYm91dFVzMi8+ICovfVxyXG4gICAgICA8QmxvZ3MxIC8+XHJcbiAgICAgIHsvKiA8U2VydmljZXMxIC8+ICovfVxyXG4gICAgICB7LyogPFBvcnRmb2xpbzEgLz4gKi99XHJcbiAgICAgIHsvKiA8U2tpbGxzQ2lyY2xlIC8+ICovfVxyXG4gICAgICB7LyogPEJyYW5kcy8+ICovfVxyXG4gICAgICB7LyogPFRlc3RpbW9uaWFscyAvPiAqL31cclxuICAgICAgey8qIDxUZWFtMSAvPiAqL31cclxuey8qIDxXb3JrRm91ckNvbHVtbi8+ICovfVxyXG4gICAgICA8Q29udGFjdCAvPlxyXG4gICAgPC9MaWdodExheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3Vyd29ya3M7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFib3V0VXMxIiwiU2VydmljZXMxIiwiSW50cm9XaXRoSG9yaXpvbnRhbCIsIkxpZ2h0TGF5b3V0IiwiUG9ydGZvbGlvMSIsIlNraWxsc0NpcmNsZSIsIlRlc3RpbW9uaWFscyIsIlRlYW0xIiwiQmxvZ3MxIiwiQ29udGFjdCIsIkJyYW5kcyIsIkFib3V0VXMyIiwiV29ya0hlYWRlciIsIldvcmtGb3VyQ29sdW1uIiwiUGFnZUhlYWRlciIsIm91cndvcmtzIiwiZm9vdGVyQ2xhc3MiLCJ0aXRsZSIsImZ1bGxQYXRoIiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/ourworks/index.jsx\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/test_page",{

/***/ "./pages/test_page.tsx":
/*!*****************************!*\
  !*** ./pages/test_page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TestPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Raindrops__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Raindrops */ \"./pages/Raindrops.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction TestPage() {\n    _s();\n    // const canvasRef = useRef(null)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const contentDiv = document.getElementById(\"content\");\n        if (contentDiv) {\n            contentDiv.style.opacity = \"1\";\n            contentDiv.style.transition = \"opacity 2s\";\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().raindrop_container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Raindrops__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jerry.hong/site/react-site/pages/test_page.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"content\",\n                style: {\n                    position: \"absolute\",\n                    color: \"#333333\",\n                    top: 0,\n                    left: 0,\n                    paddingLeft: \"32px\",\n                    opacity: 0\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Hello, world!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jerry.hong/site/react-site/pages/test_page.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"This is some HTML content on top of the canvas.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jerry.hong/site/react-site/pages/test_page.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jerry.hong/site/react-site/pages/test_page.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jerry.hong/site/react-site/pages/test_page.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(TestPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = TestPage;\nvar _c;\n$RefreshReg$(_c, \"TestPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0X3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQThDO0FBQ2I7QUFDUTtBQUUxQixTQUFTRyxXQUFZOztJQUNsQyxpQ0FBaUM7SUFFakNGLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNRyxhQUFhQyxTQUFTQyxjQUFjLENBQUM7UUFDM0MsSUFBSUYsWUFBWTtZQUNkQSxXQUFXRyxLQUFLLENBQUNDLE9BQU8sR0FBRztZQUMzQkosV0FBV0csS0FBSyxDQUFDRSxVQUFVLEdBQUc7UUFDaEMsQ0FBQztJQUNILEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXWCxtRkFBeUI7OzBCQUN2Qyw4REFBQ0Usa0RBQWVBOzs7OzswQkFDaEIsOERBQUNRO2dCQUFJRyxJQUFHO2dCQUFVTixPQUFPO29CQUFFTyxVQUFVO29CQUFZQyxPQUFPO29CQUFXQyxLQUFLO29CQUFHQyxNQUFNO29CQUFHQyxhQUFhO29CQUFRVixTQUFTO2dCQUFFOztrQ0FDbEgsOERBQUNXO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJWCxDQUFDO0dBcEJ1QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Rlc3RfcGFnZS50c3g/MDc4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSYWluZHJvcHNTa2V0Y2ggZnJvbSAnLi9SYWluZHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RQYWdlICgpIHtcbiAgLy8gY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuICAgIGlmIChjb250ZW50RGl2KSB7XG4gICAgICBjb250ZW50RGl2LnN0eWxlLm9wYWNpdHkgPSAnMSdcbiAgICAgIGNvbnRlbnREaXYuc3R5bGUudHJhbnNpdGlvbiA9ICdvcGFjaXR5IDJzJ1xuICAgIH1cbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhaW5kcm9wX2NvbnRhaW5lcn0+XG4gICAgICA8UmFpbmRyb3BzU2tldGNoIC8+XG4gICAgICA8ZGl2IGlkPVwiY29udGVudFwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBjb2xvcjogJyMzMzMzMzMnLCB0b3A6IDAsIGxlZnQ6IDAsIHBhZGRpbmdMZWZ0OiAnMzJweCcsIG9wYWNpdHk6IDAgfX0+XG4gICAgICAgIDxoMj5IZWxsbywgd29ybGQhPC9oMj5cbiAgICAgICAgPHA+VGhpcyBpcyBzb21lIEhUTUwgY29udGVudCBvbiB0b3Agb2YgdGhlIGNhbnZhcy48L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZUVmZmVjdCIsIlJhaW5kcm9wc1NrZXRjaCIsIlRlc3RQYWdlIiwiY29udGVudERpdiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwicmFpbmRyb3BfY29udGFpbmVyIiwiaWQiLCJwb3NpdGlvbiIsImNvbG9yIiwidG9wIiwibGVmdCIsInBhZGRpbmdMZWZ0IiwiaDIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/test_page.tsx\n"));

/***/ })

});
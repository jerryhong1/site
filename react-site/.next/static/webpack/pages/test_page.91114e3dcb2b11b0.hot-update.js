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

/***/ "./pages/Raindrops.js":
/*!****************************!*\
  !*** ./pages/Raindrops.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RaindropsSketch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Will only import `react-p5` on client-side\nconst Sketch = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-p5_build_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-p5 */ \"../node_modules/react-p5/build/index.js\", 23)).then((mod)=>mod.default), {\n    loadableGenerated: {\n        modules: [\n            \"Raindrops.js -> \" + \"react-p5\"\n        ]\n    },\n    ssr: false\n});\n_c = Sketch;\nfunction RaindropsSketch() {\n    const drops = [];\n    const gravity = 0.2;\n    const max_speed = 20;\n    const setup = (p5, canvasParentRef)=>{\n        console.log(canvasParentRef.clientHeight);\n        const canvas = p5.createCanvas(canvasParentRef.clientWidth, 1000);\n        canvas.parent(canvasParentRef);\n        for(let i = 0; i < 400; i++){\n            drops[i] = {\n                x: p5.random(p5.width),\n                y: p5.random(-500, -50),\n                length: p5.random(5, 20),\n                speed: p5.random(1, 5),\n                delayFrames: p5.random(0, 600)\n            };\n        }\n    };\n    const draw = (p5)=>{\n        p5.background(200, 220, 230);\n        for(let i = 0; i < drops.length; i++){\n            const drop = drops[i];\n            if (drop.delayFrames >= p5.frameCount) {\n                continue;\n            }\n            p5.stroke(150, 200, 255);\n            p5.strokeWeight(1.5);\n            p5.line(drop.x, drop.y, drop.x, drop.y + drop.length);\n            drop.y += drop.speed;\n            drop.speed += gravity;\n            if (drop.y > p5.height + 50) {\n                drop.y = p5.random(-500, -50);\n                drop.speed = p5.random(5, 20);\n                drop.x = p5.random(p5.width);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sketch, {\n        setup: setup,\n        draw: draw\n    }, void 0, false, {\n        fileName: \"/Users/jerry.hong/site/react-site/pages/Raindrops.js\",\n        lineNumber: 47,\n        columnNumber: 10\n    }, this);\n}\n_c1 = RaindropsSketch;\nvar _c, _c1;\n$RefreshReg$(_c, \"Sketch\");\n$RefreshReg$(_c1, \"RaindropsSketch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9SYWluZHJvcHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFrQztBQUNsQyw2Q0FBNkM7QUFDN0MsTUFBTUMsU0FBU0QsbURBQU9BLENBQUMsSUFBTSxrTUFBTyxDQUFZRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsT0FBTzs7Ozs7O0lBQ3ZFQyxLQUFLLEtBQUs7O0tBRE5KO0FBSVMsU0FBU0ssa0JBQW1CO0lBQ3pDLE1BQU1DLFFBQVEsRUFBRTtJQUNoQixNQUFNQyxVQUFVO0lBQ2hCLE1BQU1DLFlBQVk7SUFFbEIsTUFBTUMsUUFBUSxDQUFDQyxJQUFJQyxrQkFBb0I7UUFDckNDLFFBQVFDLEdBQUcsQ0FBQ0YsZ0JBQWdCRyxZQUFZO1FBQ3hDLE1BQU1DLFNBQVNMLEdBQUdNLFlBQVksQ0FBQ0wsZ0JBQWdCTSxXQUFXLEVBQUU7UUFDNURGLE9BQU9HLE1BQU0sQ0FBQ1A7UUFDZCxJQUFLLElBQUlRLElBQUksR0FBR0EsSUFBSSxLQUFLQSxJQUFLO1lBQzVCYixLQUFLLENBQUNhLEVBQUUsR0FBRztnQkFDVEMsR0FBR1YsR0FBR1csTUFBTSxDQUFDWCxHQUFHWSxLQUFLO2dCQUNyQkMsR0FBR2IsR0FBR1csTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUNwQkcsUUFBUWQsR0FBR1csTUFBTSxDQUFDLEdBQUc7Z0JBQ3JCSSxPQUFPZixHQUFHVyxNQUFNLENBQUMsR0FBRztnQkFDcEJLLGFBQWFoQixHQUFHVyxNQUFNLENBQUMsR0FBRztZQUM1QjtRQUNGO0lBQ0Y7SUFFQSxNQUFNTSxPQUFPLENBQUNqQixLQUFPO1FBQ25CQSxHQUFHa0IsVUFBVSxDQUFDLEtBQUssS0FBSztRQUN4QixJQUFLLElBQUlULElBQUksR0FBR0EsSUFBSWIsTUFBTWtCLE1BQU0sRUFBRUwsSUFBSztZQUNyQyxNQUFNVSxPQUFPdkIsS0FBSyxDQUFDYSxFQUFFO1lBQ3JCLElBQUlVLEtBQUtILFdBQVcsSUFBSWhCLEdBQUdvQixVQUFVLEVBQUU7Z0JBQ3JDLFFBQVE7WUFDVixDQUFDO1lBQ0RwQixHQUFHcUIsTUFBTSxDQUFDLEtBQUssS0FBSztZQUNwQnJCLEdBQUdzQixZQUFZLENBQUM7WUFDaEJ0QixHQUFHdUIsSUFBSSxDQUFDSixLQUFLVCxDQUFDLEVBQUVTLEtBQUtOLENBQUMsRUFBRU0sS0FBS1QsQ0FBQyxFQUFFUyxLQUFLTixDQUFDLEdBQUdNLEtBQUtMLE1BQU07WUFDcERLLEtBQUtOLENBQUMsSUFBSU0sS0FBS0osS0FBSztZQUNwQkksS0FBS0osS0FBSyxJQUFJbEI7WUFDZCxJQUFJc0IsS0FBS04sQ0FBQyxHQUFHYixHQUFHd0IsTUFBTSxHQUFHLElBQUk7Z0JBQzNCTCxLQUFLTixDQUFDLEdBQUdiLEdBQUdXLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDMUJRLEtBQUtKLEtBQUssR0FBR2YsR0FBR1csTUFBTSxDQUFDLEdBQUc7Z0JBQzFCUSxLQUFLVCxDQUFDLEdBQUdWLEdBQUdXLE1BQU0sQ0FBQ1gsR0FBR1ksS0FBSztZQUM3QixDQUFDO1FBQ0g7SUFDRjtJQUVBLHFCQUFPLDhEQUFDdEI7UUFBT1MsT0FBT0E7UUFBT2tCLE1BQU1BOzs7Ozs7QUFDckMsQ0FBQztNQXpDdUJ0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9SYWluZHJvcHMuanM/YjU3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG4vLyBXaWxsIG9ubHkgaW1wb3J0IGByZWFjdC1wNWAgb24gY2xpZW50LXNpZGVcbmNvbnN0IFNrZXRjaCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1wNScpLnRoZW4oKG1vZCkgPT4gbW9kLmRlZmF1bHQpLCB7XG4gIHNzcjogZmFsc2Vcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhaW5kcm9wc1NrZXRjaCAoKSB7XG4gIGNvbnN0IGRyb3BzID0gW11cbiAgY29uc3QgZ3Jhdml0eSA9IDAuMlxuICBjb25zdCBtYXhfc3BlZWQgPSAyMFxuXG4gIGNvbnN0IHNldHVwID0gKHA1LCBjYW52YXNQYXJlbnRSZWYpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjYW52YXNQYXJlbnRSZWYuY2xpZW50SGVpZ2h0KVxuICAgIGNvbnN0IGNhbnZhcyA9IHA1LmNyZWF0ZUNhbnZhcyhjYW52YXNQYXJlbnRSZWYuY2xpZW50V2lkdGgsIDEwMDApXG4gICAgY2FudmFzLnBhcmVudChjYW52YXNQYXJlbnRSZWYpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDA7IGkrKykge1xuICAgICAgZHJvcHNbaV0gPSB7XG4gICAgICAgIHg6IHA1LnJhbmRvbShwNS53aWR0aCksXG4gICAgICAgIHk6IHA1LnJhbmRvbSgtNTAwLCAtNTApLFxuICAgICAgICBsZW5ndGg6IHA1LnJhbmRvbSg1LCAyMCksXG4gICAgICAgIHNwZWVkOiBwNS5yYW5kb20oMSwgNSksXG4gICAgICAgIGRlbGF5RnJhbWVzOiBwNS5yYW5kb20oMCwgNjAwKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRyYXcgPSAocDUpID0+IHtcbiAgICBwNS5iYWNrZ3JvdW5kKDIwMCwgMjIwLCAyMzApXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZHJvcCA9IGRyb3BzW2ldXG4gICAgICBpZiAoZHJvcC5kZWxheUZyYW1lcyA+PSBwNS5mcmFtZUNvdW50KSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBwNS5zdHJva2UoMTUwLCAyMDAsIDI1NSlcbiAgICAgIHA1LnN0cm9rZVdlaWdodCgxLjUpXG4gICAgICBwNS5saW5lKGRyb3AueCwgZHJvcC55LCBkcm9wLngsIGRyb3AueSArIGRyb3AubGVuZ3RoKVxuICAgICAgZHJvcC55ICs9IGRyb3Auc3BlZWRcbiAgICAgIGRyb3Auc3BlZWQgKz0gZ3Jhdml0eVxuICAgICAgaWYgKGRyb3AueSA+IHA1LmhlaWdodCArIDUwKSB7XG4gICAgICAgIGRyb3AueSA9IHA1LnJhbmRvbSgtNTAwLCAtNTApXG4gICAgICAgIGRyb3Auc3BlZWQgPSBwNS5yYW5kb20oNSwgMjApXG4gICAgICAgIGRyb3AueCA9IHA1LnJhbmRvbShwNS53aWR0aClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gPFNrZXRjaCBzZXR1cD17c2V0dXB9IGRyYXc9e2RyYXd9IC8+XG59XG4iXSwibmFtZXMiOlsiZHluYW1pYyIsIlNrZXRjaCIsInRoZW4iLCJtb2QiLCJkZWZhdWx0Iiwic3NyIiwiUmFpbmRyb3BzU2tldGNoIiwiZHJvcHMiLCJncmF2aXR5IiwibWF4X3NwZWVkIiwic2V0dXAiLCJwNSIsImNhbnZhc1BhcmVudFJlZiIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnRIZWlnaHQiLCJjYW52YXMiLCJjcmVhdGVDYW52YXMiLCJjbGllbnRXaWR0aCIsInBhcmVudCIsImkiLCJ4IiwicmFuZG9tIiwid2lkdGgiLCJ5IiwibGVuZ3RoIiwic3BlZWQiLCJkZWxheUZyYW1lcyIsImRyYXciLCJiYWNrZ3JvdW5kIiwiZHJvcCIsImZyYW1lQ291bnQiLCJzdHJva2UiLCJzdHJva2VXZWlnaHQiLCJsaW5lIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Raindrops.js\n"));

/***/ })

});
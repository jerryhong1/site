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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RaindropsSketch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Will only import `react-p5` on client-side\nconst Sketch = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-p5_build_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-p5 */ \"../node_modules/react-p5/build/index.js\", 23)).then((mod)=>mod.default), {\n    loadableGenerated: {\n        modules: [\n            \"Raindrops.js -> \" + \"react-p5\"\n        ]\n    },\n    ssr: false\n});\n_c = Sketch;\nfunction RaindropsSketch() {\n    const drops = [];\n    const gravity = 0.1;\n    const setup = (p5, canvasParentRef)=>{\n        console.log(canvasParentRef);\n        const canvas = p5.createCanvas(canvasParentRef.clientWidth, canvasParentRef.clientHeight);\n        canvas.parent(canvasParentRef);\n        for(let i = 0; i < 50; i++){\n            drops[i] = {\n                x: p5.random(p5.width),\n                y: p5.random(-500, -50),\n                length: p5.random(10, 30),\n                speed: p5.random(5, 10)\n            };\n        }\n    };\n    const draw = (p5)=>{\n        p5.background(200, 220, 230);\n        for(let i = 0; i < drops.length; i++){\n            p5.stroke(150, 200, 255);\n            p5.strokeWeight(2);\n            p5.line(drops[i].x, drops[i].y, drops[i].x, drops[i].y + drops[i].length);\n            drops[i].y += drops[i].speed;\n            drops[i].speed += gravity;\n            if (drops[i].y > p5.height + 50) {\n                drops[i].y = p5.random(-500, -50);\n                drops[i].speed = p5.random(5, 10);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sketch, {\n        setup: setup,\n        draw: draw\n    }, void 0, false, {\n        fileName: \"/Users/jerry.hong/site/react-site/pages/Raindrops.js\",\n        lineNumber: 40,\n        columnNumber: 10\n    }, this);\n}\n_c1 = RaindropsSketch;\nvar _c, _c1;\n$RefreshReg$(_c, \"Sketch\");\n$RefreshReg$(_c1, \"RaindropsSketch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9SYWluZHJvcHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFrQztBQUNsQyw2Q0FBNkM7QUFDN0MsTUFBTUMsU0FBU0QsbURBQU9BLENBQUMsSUFBTSxrTUFBTyxDQUFZRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsT0FBTzs7Ozs7O0lBQ3ZFQyxLQUFLLEtBQUs7O0tBRE5KO0FBSVMsU0FBU0ssa0JBQW1CO0lBQ3pDLE1BQU1DLFFBQVEsRUFBRTtJQUNoQixNQUFNQyxVQUFVO0lBRWhCLE1BQU1DLFFBQVEsQ0FBQ0MsSUFBSUMsa0JBQW9CO1FBQ3JDQyxRQUFRQyxHQUFHLENBQUNGO1FBQ1osTUFBTUcsU0FBU0osR0FBR0ssWUFBWSxDQUFDSixnQkFBZ0JLLFdBQVcsRUFBRUwsZ0JBQWdCTSxZQUFZO1FBQ3hGSCxPQUFPSSxNQUFNLENBQUNQO1FBQ2QsSUFBSyxJQUFJUSxJQUFJLEdBQUdBLElBQUksSUFBSUEsSUFBSztZQUMzQlosS0FBSyxDQUFDWSxFQUFFLEdBQUc7Z0JBQ1RDLEdBQUdWLEdBQUdXLE1BQU0sQ0FBQ1gsR0FBR1ksS0FBSztnQkFDckJDLEdBQUdiLEdBQUdXLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDcEJHLFFBQVFkLEdBQUdXLE1BQU0sQ0FBQyxJQUFJO2dCQUN0QkksT0FBT2YsR0FBR1csTUFBTSxDQUFDLEdBQUc7WUFDdEI7UUFDRjtJQUNGO0lBRUEsTUFBTUssT0FBTyxDQUFDaEIsS0FBTztRQUNuQkEsR0FBR2lCLFVBQVUsQ0FBQyxLQUFLLEtBQUs7UUFDeEIsSUFBSyxJQUFJUixJQUFJLEdBQUdBLElBQUlaLE1BQU1pQixNQUFNLEVBQUVMLElBQUs7WUFDckNULEdBQUdrQixNQUFNLENBQUMsS0FBSyxLQUFLO1lBQ3BCbEIsR0FBR21CLFlBQVksQ0FBQztZQUNoQm5CLEdBQUdvQixJQUFJLENBQUN2QixLQUFLLENBQUNZLEVBQUUsQ0FBQ0MsQ0FBQyxFQUFFYixLQUFLLENBQUNZLEVBQUUsQ0FBQ0ksQ0FBQyxFQUFFaEIsS0FBSyxDQUFDWSxFQUFFLENBQUNDLENBQUMsRUFBRWIsS0FBSyxDQUFDWSxFQUFFLENBQUNJLENBQUMsR0FBR2hCLEtBQUssQ0FBQ1ksRUFBRSxDQUFDSyxNQUFNO1lBQ3hFakIsS0FBSyxDQUFDWSxFQUFFLENBQUNJLENBQUMsSUFBSWhCLEtBQUssQ0FBQ1ksRUFBRSxDQUFDTSxLQUFLO1lBQzVCbEIsS0FBSyxDQUFDWSxFQUFFLENBQUNNLEtBQUssSUFBSWpCO1lBQ2xCLElBQUlELEtBQUssQ0FBQ1ksRUFBRSxDQUFDSSxDQUFDLEdBQUdiLEdBQUdxQixNQUFNLEdBQUcsSUFBSTtnQkFDL0J4QixLQUFLLENBQUNZLEVBQUUsQ0FBQ0ksQ0FBQyxHQUFHYixHQUFHVyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQzlCZCxLQUFLLENBQUNZLEVBQUUsQ0FBQ00sS0FBSyxHQUFHZixHQUFHVyxNQUFNLENBQUMsR0FBRztZQUNoQyxDQUFDO1FBQ0g7SUFDRjtJQUVBLHFCQUFPLDhEQUFDcEI7UUFBT1EsT0FBT0E7UUFBT2lCLE1BQU1BOzs7Ozs7QUFDckMsQ0FBQztNQWxDdUJwQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9SYWluZHJvcHMuanM/YjU3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG4vLyBXaWxsIG9ubHkgaW1wb3J0IGByZWFjdC1wNWAgb24gY2xpZW50LXNpZGVcbmNvbnN0IFNrZXRjaCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1wNScpLnRoZW4oKG1vZCkgPT4gbW9kLmRlZmF1bHQpLCB7XG4gIHNzcjogZmFsc2Vcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhaW5kcm9wc1NrZXRjaCAoKSB7XG4gIGNvbnN0IGRyb3BzID0gW11cbiAgY29uc3QgZ3Jhdml0eSA9IDAuMVxuXG4gIGNvbnN0IHNldHVwID0gKHA1LCBjYW52YXNQYXJlbnRSZWYpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjYW52YXNQYXJlbnRSZWYpXG4gICAgY29uc3QgY2FudmFzID0gcDUuY3JlYXRlQ2FudmFzKGNhbnZhc1BhcmVudFJlZi5jbGllbnRXaWR0aCwgY2FudmFzUGFyZW50UmVmLmNsaWVudEhlaWdodClcbiAgICBjYW52YXMucGFyZW50KGNhbnZhc1BhcmVudFJlZilcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDUwOyBpKyspIHtcbiAgICAgIGRyb3BzW2ldID0ge1xuICAgICAgICB4OiBwNS5yYW5kb20ocDUud2lkdGgpLFxuICAgICAgICB5OiBwNS5yYW5kb20oLTUwMCwgLTUwKSxcbiAgICAgICAgbGVuZ3RoOiBwNS5yYW5kb20oMTAsIDMwKSxcbiAgICAgICAgc3BlZWQ6IHA1LnJhbmRvbSg1LCAxMClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBkcmF3ID0gKHA1KSA9PiB7XG4gICAgcDUuYmFja2dyb3VuZCgyMDAsIDIyMCwgMjMwKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHA1LnN0cm9rZSgxNTAsIDIwMCwgMjU1KVxuICAgICAgcDUuc3Ryb2tlV2VpZ2h0KDIpXG4gICAgICBwNS5saW5lKGRyb3BzW2ldLngsIGRyb3BzW2ldLnksIGRyb3BzW2ldLngsIGRyb3BzW2ldLnkgKyBkcm9wc1tpXS5sZW5ndGgpXG4gICAgICBkcm9wc1tpXS55ICs9IGRyb3BzW2ldLnNwZWVkXG4gICAgICBkcm9wc1tpXS5zcGVlZCArPSBncmF2aXR5XG4gICAgICBpZiAoZHJvcHNbaV0ueSA+IHA1LmhlaWdodCArIDUwKSB7XG4gICAgICAgIGRyb3BzW2ldLnkgPSBwNS5yYW5kb20oLTUwMCwgLTUwKVxuICAgICAgICBkcm9wc1tpXS5zcGVlZCA9IHA1LnJhbmRvbSg1LCAxMClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gPFNrZXRjaCBzZXR1cD17c2V0dXB9IGRyYXc9e2RyYXd9IC8+XG59XG4iXSwibmFtZXMiOlsiZHluYW1pYyIsIlNrZXRjaCIsInRoZW4iLCJtb2QiLCJkZWZhdWx0Iiwic3NyIiwiUmFpbmRyb3BzU2tldGNoIiwiZHJvcHMiLCJncmF2aXR5Iiwic2V0dXAiLCJwNSIsImNhbnZhc1BhcmVudFJlZiIsImNvbnNvbGUiLCJsb2ciLCJjYW52YXMiLCJjcmVhdGVDYW52YXMiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInBhcmVudCIsImkiLCJ4IiwicmFuZG9tIiwid2lkdGgiLCJ5IiwibGVuZ3RoIiwic3BlZWQiLCJkcmF3IiwiYmFja2dyb3VuZCIsInN0cm9rZSIsInN0cm9rZVdlaWdodCIsImxpbmUiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Raindrops.js\n"));

/***/ })

});
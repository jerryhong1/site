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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RaindropsSketch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Will only import `react-p5` on client-side\nconst Sketch = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-p5_build_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-p5 */ \"../node_modules/react-p5/build/index.js\", 23)).then((mod)=>mod.default), {\n    loadableGenerated: {\n        modules: [\n            \"Raindrops.js -> \" + \"react-p5\"\n        ]\n    },\n    ssr: false\n});\n_c = Sketch;\nfunction RaindropsSketch() {\n    const drops = [];\n    const gravity = 0.1;\n    const setup = (p5, canvasParentRef)=>{\n        console.log(canvasParentRef.clientHeight);\n        const canvas = p5.createCanvas(canvasParentRef.clientWidth, 1000);\n        canvas.parent(canvasParentRef);\n        for(let i = 0; i < 200; i++){\n            drops[i] = {\n                x: p5.random(p5.width),\n                y: p5.random(-500, -50),\n                length: p5.random(10, 30),\n                speed: p5.random(5, 10),\n                delayFrames: p5.random(0, 300)\n            };\n        }\n    };\n    const draw = (p5)=>{\n        p5.background(200, 220, 230);\n        for(let i = 0; i < drops.length; i++){\n            const drop = drops[i];\n            if (drop.delayFrames <= frameCount) {\n                continue;\n            }\n            p5.stroke(150, 200, 255);\n            p5.strokeWeight(2);\n            p5.line(drops[i].x, drops[i].y, drops[i].x, drops[i].y + drops[i].length);\n            drops[i].y += drops[i].speed;\n            drops[i].speed += gravity;\n            if (drops[i].y > p5.height + 50) {\n                drops[i].y = p5.random(-500, -50);\n                drops[i].speed = p5.random(5, 10);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sketch, {\n        setup: setup,\n        draw: draw\n    }, void 0, false, {\n        fileName: \"/Users/jerry.hong/site/react-site/pages/Raindrops.js\",\n        lineNumber: 45,\n        columnNumber: 10\n    }, this);\n}\n_c1 = RaindropsSketch;\nvar _c, _c1;\n$RefreshReg$(_c, \"Sketch\");\n$RefreshReg$(_c1, \"RaindropsSketch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9SYWluZHJvcHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFrQztBQUNsQyw2Q0FBNkM7QUFDN0MsTUFBTUMsU0FBU0QsbURBQU9BLENBQUMsSUFBTSxrTUFBTyxDQUFZRSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsT0FBTzs7Ozs7O0lBQ3ZFQyxLQUFLLEtBQUs7O0tBRE5KO0FBSVMsU0FBU0ssa0JBQW1CO0lBQ3pDLE1BQU1DLFFBQVEsRUFBRTtJQUNoQixNQUFNQyxVQUFVO0lBRWhCLE1BQU1DLFFBQVEsQ0FBQ0MsSUFBSUMsa0JBQW9CO1FBQ3JDQyxRQUFRQyxHQUFHLENBQUNGLGdCQUFnQkcsWUFBWTtRQUN4QyxNQUFNQyxTQUFTTCxHQUFHTSxZQUFZLENBQUNMLGdCQUFnQk0sV0FBVyxFQUFFO1FBQzVERixPQUFPRyxNQUFNLENBQUNQO1FBQ2QsSUFBSyxJQUFJUSxJQUFJLEdBQUdBLElBQUksS0FBS0EsSUFBSztZQUM1QlosS0FBSyxDQUFDWSxFQUFFLEdBQUc7Z0JBQ1RDLEdBQUdWLEdBQUdXLE1BQU0sQ0FBQ1gsR0FBR1ksS0FBSztnQkFDckJDLEdBQUdiLEdBQUdXLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDcEJHLFFBQVFkLEdBQUdXLE1BQU0sQ0FBQyxJQUFJO2dCQUN0QkksT0FBT2YsR0FBR1csTUFBTSxDQUFDLEdBQUc7Z0JBQ3BCSyxhQUFhaEIsR0FBR1csTUFBTSxDQUFDLEdBQUc7WUFDNUI7UUFDRjtJQUNGO0lBRUEsTUFBTU0sT0FBTyxDQUFDakIsS0FBTztRQUNuQkEsR0FBR2tCLFVBQVUsQ0FBQyxLQUFLLEtBQUs7UUFDeEIsSUFBSyxJQUFJVCxJQUFJLEdBQUdBLElBQUlaLE1BQU1pQixNQUFNLEVBQUVMLElBQUs7WUFDckMsTUFBTVUsT0FBT3RCLEtBQUssQ0FBQ1ksRUFBRTtZQUNyQixJQUFJVSxLQUFLSCxXQUFXLElBQUlJLFlBQVk7Z0JBQ2xDLFFBQVE7WUFDVixDQUFDO1lBQ0RwQixHQUFHcUIsTUFBTSxDQUFDLEtBQUssS0FBSztZQUNwQnJCLEdBQUdzQixZQUFZLENBQUM7WUFDaEJ0QixHQUFHdUIsSUFBSSxDQUFDMUIsS0FBSyxDQUFDWSxFQUFFLENBQUNDLENBQUMsRUFBRWIsS0FBSyxDQUFDWSxFQUFFLENBQUNJLENBQUMsRUFBRWhCLEtBQUssQ0FBQ1ksRUFBRSxDQUFDQyxDQUFDLEVBQUViLEtBQUssQ0FBQ1ksRUFBRSxDQUFDSSxDQUFDLEdBQUdoQixLQUFLLENBQUNZLEVBQUUsQ0FBQ0ssTUFBTTtZQUN4RWpCLEtBQUssQ0FBQ1ksRUFBRSxDQUFDSSxDQUFDLElBQUloQixLQUFLLENBQUNZLEVBQUUsQ0FBQ00sS0FBSztZQUM1QmxCLEtBQUssQ0FBQ1ksRUFBRSxDQUFDTSxLQUFLLElBQUlqQjtZQUNsQixJQUFJRCxLQUFLLENBQUNZLEVBQUUsQ0FBQ0ksQ0FBQyxHQUFHYixHQUFHd0IsTUFBTSxHQUFHLElBQUk7Z0JBQy9CM0IsS0FBSyxDQUFDWSxFQUFFLENBQUNJLENBQUMsR0FBR2IsR0FBR1csTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUM5QmQsS0FBSyxDQUFDWSxFQUFFLENBQUNNLEtBQUssR0FBR2YsR0FBR1csTUFBTSxDQUFDLEdBQUc7WUFDaEMsQ0FBQztRQUNIO0lBQ0Y7SUFFQSxxQkFBTyw4REFBQ3BCO1FBQU9RLE9BQU9BO1FBQU9rQixNQUFNQTs7Ozs7O0FBQ3JDLENBQUM7TUF2Q3VCckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUmFpbmRyb3BzLmpzP2I1NzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuLy8gV2lsbCBvbmx5IGltcG9ydCBgcmVhY3QtcDVgIG9uIGNsaWVudC1zaWRlXG5jb25zdCBTa2V0Y2ggPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtcDUnKS50aGVuKChtb2QpID0+IG1vZC5kZWZhdWx0KSwge1xuICBzc3I6IGZhbHNlXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYWluZHJvcHNTa2V0Y2ggKCkge1xuICBjb25zdCBkcm9wcyA9IFtdXG4gIGNvbnN0IGdyYXZpdHkgPSAwLjFcblxuICBjb25zdCBzZXR1cCA9IChwNSwgY2FudmFzUGFyZW50UmVmKSA9PiB7XG4gICAgY29uc29sZS5sb2coY2FudmFzUGFyZW50UmVmLmNsaWVudEhlaWdodClcbiAgICBjb25zdCBjYW52YXMgPSBwNS5jcmVhdGVDYW52YXMoY2FudmFzUGFyZW50UmVmLmNsaWVudFdpZHRoLCAxMDAwKVxuICAgIGNhbnZhcy5wYXJlbnQoY2FudmFzUGFyZW50UmVmKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjAwOyBpKyspIHtcbiAgICAgIGRyb3BzW2ldID0ge1xuICAgICAgICB4OiBwNS5yYW5kb20ocDUud2lkdGgpLFxuICAgICAgICB5OiBwNS5yYW5kb20oLTUwMCwgLTUwKSxcbiAgICAgICAgbGVuZ3RoOiBwNS5yYW5kb20oMTAsIDMwKSxcbiAgICAgICAgc3BlZWQ6IHA1LnJhbmRvbSg1LCAxMCksXG4gICAgICAgIGRlbGF5RnJhbWVzOiBwNS5yYW5kb20oMCwgMzAwKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRyYXcgPSAocDUpID0+IHtcbiAgICBwNS5iYWNrZ3JvdW5kKDIwMCwgMjIwLCAyMzApXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZHJvcCA9IGRyb3BzW2ldXG4gICAgICBpZiAoZHJvcC5kZWxheUZyYW1lcyA8PSBmcmFtZUNvdW50KSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgICBwNS5zdHJva2UoMTUwLCAyMDAsIDI1NSlcbiAgICAgIHA1LnN0cm9rZVdlaWdodCgyKVxuICAgICAgcDUubGluZShkcm9wc1tpXS54LCBkcm9wc1tpXS55LCBkcm9wc1tpXS54LCBkcm9wc1tpXS55ICsgZHJvcHNbaV0ubGVuZ3RoKVxuICAgICAgZHJvcHNbaV0ueSArPSBkcm9wc1tpXS5zcGVlZFxuICAgICAgZHJvcHNbaV0uc3BlZWQgKz0gZ3Jhdml0eVxuICAgICAgaWYgKGRyb3BzW2ldLnkgPiBwNS5oZWlnaHQgKyA1MCkge1xuICAgICAgICBkcm9wc1tpXS55ID0gcDUucmFuZG9tKC01MDAsIC01MClcbiAgICAgICAgZHJvcHNbaV0uc3BlZWQgPSBwNS5yYW5kb20oNSwgMTApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDxTa2V0Y2ggc2V0dXA9e3NldHVwfSBkcmF3PXtkcmF3fSAvPlxufVxuIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJTa2V0Y2giLCJ0aGVuIiwibW9kIiwiZGVmYXVsdCIsInNzciIsIlJhaW5kcm9wc1NrZXRjaCIsImRyb3BzIiwiZ3Jhdml0eSIsInNldHVwIiwicDUiLCJjYW52YXNQYXJlbnRSZWYiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50SGVpZ2h0IiwiY2FudmFzIiwiY3JlYXRlQ2FudmFzIiwiY2xpZW50V2lkdGgiLCJwYXJlbnQiLCJpIiwieCIsInJhbmRvbSIsIndpZHRoIiwieSIsImxlbmd0aCIsInNwZWVkIiwiZGVsYXlGcmFtZXMiLCJkcmF3IiwiYmFja2dyb3VuZCIsImRyb3AiLCJmcmFtZUNvdW50Iiwic3Ryb2tlIiwic3Ryb2tlV2VpZ2h0IiwibGluZSIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Raindrops.js\n"));

/***/ })

});
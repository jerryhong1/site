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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RaindropsSketch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Will only import `react-p5` on client-side\nconst Sketch = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-p5_build_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-p5 */ \"../node_modules/react-p5/build/index.js\", 23)).then((mod)=>mod.default), {\n    loadableGenerated: {\n        modules: [\n            \"Raindrops.js -> \" + \"react-p5\"\n        ]\n    },\n    ssr: false\n});\n_c = Sketch;\nfunction RaindropsSketch() {\n    const drops = [];\n    const gravity = 0.2;\n    const maxSpeed = 15;\n    // const waterLevel = 0\n    // const waveOffset = 0\n    const nFramesDelay = 30;\n    const setup = (p5, canvasParentRef)=>{\n        console.log(canvasParentRef.clientHeight);\n        const canvas = p5.createCanvas(canvasParentRef.clientWidth, 1000);\n        canvas.parent(canvasParentRef);\n        for(let i = 0; i < 400; i++){\n            drops[i] = {\n                x: p5.random(p5.width),\n                y: p5.random(-500, -50),\n                length: 0.5,\n                max_length: p5.random(5, 20),\n                speed: p5.random(1, 5),\n                delayFrames: p5.random(0, 600)\n            };\n        }\n    };\n    const draw = (p5)=>{\n        p5.background(240, 240, 240);\n        // rain\n        for(let i = 0; i < drops.length; i++){\n            const drop = drops[i];\n            if (drop.delayFrames >= p5.frameCount) {\n                continue;\n            }\n            const alpha = Math.max(Math.min((p5.frameCount - nFramesDelay) / 1.4, 255), 0);\n            p5.stroke(200, 200, 200, alpha);\n            p5.strokeWeight(1.5);\n            p5.line(drop.x, drop.y, drop.x, drop.y + drop.length);\n            drop.length = Math.min(drop.length + 0.2, drop.max_length);\n            drop.y += drop.speed;\n            drop.speed = Math.min(drop.speed + gravity, maxSpeed);\n            if (drop.y > p5.height + 50) {\n                drop.y = p5.random(-500, -50);\n                drop.speed = p5.random(5, 20);\n                drop.x = p5.random(p5.width);\n                drop.length = 0;\n            }\n        }\n    // // pooling water\n    // p5.background(200, 220, 230)\n    // // Draw the water\n    // p5.fill(150, 200, 255)\n    // p5.beginShape()\n    // p5.vertex(0, p5.height)\n    // for (let x = 0; x <= p5.width; x += 10) {\n    //   const y = waterLevel + p5.noise(waveOffset + x * 0.01) * 50\n    //   p5.vertex(x, y)\n    // }\n    // p5.vertex(p5.width, p5.height)\n    // p5.endShape(p5.CLOSE)\n    // // Update the wave offset to create the wave motion\n    // waveOffset += 0.01\n    // // Update the water level to simulate pooling\n    // waterLevel += 1\n    // waterLevel = p5.constrain(waterLevel, 250, p5.height)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sketch, {\n        setup: setup,\n        draw: draw\n    }, void 0, false, {\n        fileName: \"/Users/jerry.hong/site/react-site/pages/Raindrops.js\",\n        lineNumber: 77,\n        columnNumber: 10\n    }, this);\n}\n_c1 = RaindropsSketch;\nvar _c, _c1;\n$RefreshReg$(_c, \"Sketch\");\n$RefreshReg$(_c1, \"RaindropsSketch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUk7SUFDSixpQ0FBaUM7SUFDakMsd0JBQXdCO0lBRXhCLHNEQUFzRDtJQUN0RCxxQkFBcUI7SUFFckIsZ0RBQWdEO0lBQ2hELGtCQUFrQjtJQUNsQix3REFBd0Q7SUFDMUQ7SUFFQSxxQkFBTyw4REFBQ3pCO1FBQU9VLE9BQU9BO1FBQU9tQixNQUFNQTs7Ozs7O0FBQ3JDLENBQUM7TUF2RXVCeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUmFpbmRyb3BzLmpzP2I1NzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJ1xuLy8gV2lsbCBvbmx5IGltcG9ydCBgcmVhY3QtcDVgIG9uIGNsaWVudC1zaWRlXG5jb25zdCBTa2V0Y2ggPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtcDUnKS50aGVuKChtb2QpID0+IG1vZC5kZWZhdWx0KSwge1xuICBzc3I6IGZhbHNlXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYWluZHJvcHNTa2V0Y2ggKCkge1xuICBjb25zdCBkcm9wcyA9IFtdXG4gIGNvbnN0IGdyYXZpdHkgPSAwLjJcbiAgY29uc3QgbWF4U3BlZWQgPSAxNVxuICAvLyBjb25zdCB3YXRlckxldmVsID0gMFxuICAvLyBjb25zdCB3YXZlT2Zmc2V0ID0gMFxuICBjb25zdCBuRnJhbWVzRGVsYXkgPSAzMFxuXG4gIGNvbnN0IHNldHVwID0gKHA1LCBjYW52YXNQYXJlbnRSZWYpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjYW52YXNQYXJlbnRSZWYuY2xpZW50SGVpZ2h0KVxuICAgIGNvbnN0IGNhbnZhcyA9IHA1LmNyZWF0ZUNhbnZhcyhjYW52YXNQYXJlbnRSZWYuY2xpZW50V2lkdGgsIDEwMDApXG4gICAgY2FudmFzLnBhcmVudChjYW52YXNQYXJlbnRSZWYpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDA7IGkrKykge1xuICAgICAgZHJvcHNbaV0gPSB7XG4gICAgICAgIHg6IHA1LnJhbmRvbShwNS53aWR0aCksXG4gICAgICAgIHk6IHA1LnJhbmRvbSgtNTAwLCAtNTApLFxuICAgICAgICBsZW5ndGg6IDAuNSxcbiAgICAgICAgbWF4X2xlbmd0aDogcDUucmFuZG9tKDUsIDIwKSxcbiAgICAgICAgc3BlZWQ6IHA1LnJhbmRvbSgxLCA1KSxcbiAgICAgICAgZGVsYXlGcmFtZXM6IHA1LnJhbmRvbSgwLCA2MDApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZHJhdyA9IChwNSkgPT4ge1xuICAgIHA1LmJhY2tncm91bmQoMjQwLCAyNDAsIDI0MClcblxuICAgIC8vIHJhaW5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBkcm9wID0gZHJvcHNbaV1cbiAgICAgIGlmIChkcm9wLmRlbGF5RnJhbWVzID49IHA1LmZyYW1lQ291bnQpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFscGhhID0gTWF0aC5tYXgoTWF0aC5taW4oKHA1LmZyYW1lQ291bnQgLSBuRnJhbWVzRGVsYXkpIC8gMS40LCAyNTUpLCAwKVxuICAgICAgcDUuc3Ryb2tlKDIwMCwgMjAwLCAyMDAsIGFscGhhKVxuICAgICAgcDUuc3Ryb2tlV2VpZ2h0KDEuNSlcbiAgICAgIHA1LmxpbmUoZHJvcC54LCBkcm9wLnksIGRyb3AueCwgZHJvcC55ICsgZHJvcC5sZW5ndGgpXG4gICAgICBkcm9wLmxlbmd0aCA9IE1hdGgubWluKGRyb3AubGVuZ3RoICsgMC4yLCBkcm9wLm1heF9sZW5ndGgpXG4gICAgICBkcm9wLnkgKz0gZHJvcC5zcGVlZFxuICAgICAgZHJvcC5zcGVlZCA9IE1hdGgubWluKGRyb3Auc3BlZWQgKyBncmF2aXR5LCBtYXhTcGVlZClcbiAgICAgIGlmIChkcm9wLnkgPiBwNS5oZWlnaHQgKyA1MCkge1xuICAgICAgICBkcm9wLnkgPSBwNS5yYW5kb20oLTUwMCwgLTUwKVxuICAgICAgICBkcm9wLnNwZWVkID0gcDUucmFuZG9tKDUsIDIwKVxuICAgICAgICBkcm9wLnggPSBwNS5yYW5kb20ocDUud2lkdGgpXG4gICAgICAgIGRyb3AubGVuZ3RoID0gMFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIC8vIHBvb2xpbmcgd2F0ZXJcbiAgICAvLyBwNS5iYWNrZ3JvdW5kKDIwMCwgMjIwLCAyMzApXG5cbiAgICAvLyAvLyBEcmF3IHRoZSB3YXRlclxuICAgIC8vIHA1LmZpbGwoMTUwLCAyMDAsIDI1NSlcbiAgICAvLyBwNS5iZWdpblNoYXBlKClcbiAgICAvLyBwNS52ZXJ0ZXgoMCwgcDUuaGVpZ2h0KVxuICAgIC8vIGZvciAobGV0IHggPSAwOyB4IDw9IHA1LndpZHRoOyB4ICs9IDEwKSB7XG4gICAgLy8gICBjb25zdCB5ID0gd2F0ZXJMZXZlbCArIHA1Lm5vaXNlKHdhdmVPZmZzZXQgKyB4ICogMC4wMSkgKiA1MFxuICAgIC8vICAgcDUudmVydGV4KHgsIHkpXG4gICAgLy8gfVxuICAgIC8vIHA1LnZlcnRleChwNS53aWR0aCwgcDUuaGVpZ2h0KVxuICAgIC8vIHA1LmVuZFNoYXBlKHA1LkNMT1NFKVxuXG4gICAgLy8gLy8gVXBkYXRlIHRoZSB3YXZlIG9mZnNldCB0byBjcmVhdGUgdGhlIHdhdmUgbW90aW9uXG4gICAgLy8gd2F2ZU9mZnNldCArPSAwLjAxXG5cbiAgICAvLyAvLyBVcGRhdGUgdGhlIHdhdGVyIGxldmVsIHRvIHNpbXVsYXRlIHBvb2xpbmdcbiAgICAvLyB3YXRlckxldmVsICs9IDFcbiAgICAvLyB3YXRlckxldmVsID0gcDUuY29uc3RyYWluKHdhdGVyTGV2ZWwsIDI1MCwgcDUuaGVpZ2h0KVxuICB9XG5cbiAgcmV0dXJuIDxTa2V0Y2ggc2V0dXA9e3NldHVwfSBkcmF3PXtkcmF3fSAvPlxufVxuIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJTa2V0Y2giLCJ0aGVuIiwibW9kIiwiZGVmYXVsdCIsInNzciIsIlJhaW5kcm9wc1NrZXRjaCIsImRyb3BzIiwiZ3Jhdml0eSIsIm1heFNwZWVkIiwibkZyYW1lc0RlbGF5Iiwic2V0dXAiLCJwNSIsImNhbnZhc1BhcmVudFJlZiIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnRIZWlnaHQiLCJjYW52YXMiLCJjcmVhdGVDYW52YXMiLCJjbGllbnRXaWR0aCIsInBhcmVudCIsImkiLCJ4IiwicmFuZG9tIiwid2lkdGgiLCJ5IiwibGVuZ3RoIiwibWF4X2xlbmd0aCIsInNwZWVkIiwiZGVsYXlGcmFtZXMiLCJkcmF3IiwiYmFja2dyb3VuZCIsImRyb3AiLCJmcmFtZUNvdW50IiwiYWxwaGEiLCJNYXRoIiwibWF4IiwibWluIiwic3Ryb2tlIiwic3Ryb2tlV2VpZ2h0IiwibGluZSIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Raindrops.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RaindropsSketch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Will only import `react-p5` on client-side\nconst Sketch = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"node_modules_react-p5_build_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-p5 */ \"../node_modules/react-p5/build/index.js\", 23)).then((mod)=>mod.default), {\n    loadableGenerated: {\n        modules: [\n            \"Raindrops.js -> \" + \"react-p5\"\n        ]\n    },\n    ssr: false\n});\n_c = Sketch;\nfunction RaindropsSketch() {\n    const drops = [];\n    const gravity = 0.2;\n    const maxSpeed = 15;\n    const waterLevel = 0;\n    const waveOffset = 0;\n    const setup = (p5, canvasParentRef)=>{\n        console.log(canvasParentRef.clientHeight);\n        const canvas = p5.createCanvas(canvasParentRef.clientWidth, 1000);\n        canvas.parent(canvasParentRef);\n        for(let i = 0; i < 400; i++){\n            drops[i] = {\n                x: p5.random(p5.width),\n                y: p5.random(-500, -50),\n                length: 0.5,\n                max_length: p5.random(5, 20),\n                speed: p5.random(1, 5),\n                delayFrames: p5.random(0, 600)\n            };\n        }\n    };\n    const draw = (p5)=>{\n        p5.background(240, 240, 240);\n        // rain\n        for(let i = 0; i < drops.length; i++){\n            const drop = drops[i];\n            if (drop.delayFrames >= p5.frameCount) {\n                continue;\n            }\n            const alpha = Math.min(p5.frameCount, 255);\n            p5.stroke(0, 0, 0, alpha);\n            p5.strokeWeight(1.5);\n            p5.line(drop.x, drop.y, drop.x, drop.y + drop.length);\n            drop.length = Math.min(drop.length + 0.2, drop.max_length);\n            drop.y += drop.speed;\n            drop.speed = Math.min(drop.speed + gravity, maxSpeed);\n            if (drop.y > p5.height + 50) {\n                drop.y = p5.random(-500, -50);\n                drop.speed = p5.random(5, 20);\n                drop.x = p5.random(p5.width);\n                drop.length = 0;\n            }\n        }\n    // // pooling water\n    // p5.background(200, 220, 230)\n    // // Draw the water\n    // p5.fill(150, 200, 255)\n    // p5.beginShape()\n    // p5.vertex(0, p5.height)\n    // for (let x = 0; x <= p5.width; x += 10) {\n    //   const y = waterLevel + p5.noise(waveOffset + x * 0.01) * 50\n    //   p5.vertex(x, y)\n    // }\n    // p5.vertex(p5.width, p5.height)\n    // p5.endShape(p5.CLOSE)\n    // // Update the wave offset to create the wave motion\n    // waveOffset += 0.01\n    // // Update the water level to simulate pooling\n    // waterLevel += 1\n    // waterLevel = p5.constrain(waterLevel, 250, p5.height)\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sketch, {\n        setup: setup,\n        draw: draw\n    }, void 0, false, {\n        fileName: \"/Users/jerry.hong/site/react-site/pages/Raindrops.js\",\n        lineNumber: 76,\n        columnNumber: 10\n    }, this);\n}\n_c1 = RaindropsSketch;\nvar _c, _c1;\n$RefreshReg$(_c, \"Sketch\");\n$RefreshReg$(_c1, \"RaindropsSketch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFxQjtJQUVyQixnREFBZ0Q7SUFDaEQsa0JBQWtCO0lBQ2xCLHdEQUF3RDtJQUMxRDtJQUVBLHFCQUFPLDhEQUFDMUI7UUFBT1csT0FBT0E7UUFBT21CLE1BQU1BOzs7Ozs7QUFDckMsQ0FBQztNQXRFdUJ6QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9SYWluZHJvcHMuanM/YjU3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG4vLyBXaWxsIG9ubHkgaW1wb3J0IGByZWFjdC1wNWAgb24gY2xpZW50LXNpZGVcbmNvbnN0IFNrZXRjaCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1wNScpLnRoZW4oKG1vZCkgPT4gbW9kLmRlZmF1bHQpLCB7XG4gIHNzcjogZmFsc2Vcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhaW5kcm9wc1NrZXRjaCAoKSB7XG4gIGNvbnN0IGRyb3BzID0gW11cbiAgY29uc3QgZ3Jhdml0eSA9IDAuMlxuICBjb25zdCBtYXhTcGVlZCA9IDE1XG4gIGNvbnN0IHdhdGVyTGV2ZWwgPSAwXG4gIGNvbnN0IHdhdmVPZmZzZXQgPSAwXG5cbiAgY29uc3Qgc2V0dXAgPSAocDUsIGNhbnZhc1BhcmVudFJlZikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGNhbnZhc1BhcmVudFJlZi5jbGllbnRIZWlnaHQpXG4gICAgY29uc3QgY2FudmFzID0gcDUuY3JlYXRlQ2FudmFzKGNhbnZhc1BhcmVudFJlZi5jbGllbnRXaWR0aCwgMTAwMClcbiAgICBjYW52YXMucGFyZW50KGNhbnZhc1BhcmVudFJlZilcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQwMDsgaSsrKSB7XG4gICAgICBkcm9wc1tpXSA9IHtcbiAgICAgICAgeDogcDUucmFuZG9tKHA1LndpZHRoKSxcbiAgICAgICAgeTogcDUucmFuZG9tKC01MDAsIC01MCksXG4gICAgICAgIGxlbmd0aDogMC41LFxuICAgICAgICBtYXhfbGVuZ3RoOiBwNS5yYW5kb20oNSwgMjApLFxuICAgICAgICBzcGVlZDogcDUucmFuZG9tKDEsIDUpLFxuICAgICAgICBkZWxheUZyYW1lczogcDUucmFuZG9tKDAsIDYwMClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBkcmF3ID0gKHA1KSA9PiB7XG4gICAgcDUuYmFja2dyb3VuZCgyNDAsIDI0MCwgMjQwKVxuXG4gICAgLy8gcmFpblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGRyb3AgPSBkcm9wc1tpXVxuICAgICAgaWYgKGRyb3AuZGVsYXlGcmFtZXMgPj0gcDUuZnJhbWVDb3VudCkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgY29uc3QgYWxwaGEgPSBNYXRoLm1pbihwNS5mcmFtZUNvdW50LCAyNTUpXG4gICAgICBwNS5zdHJva2UoMCwgMCwgMCwgYWxwaGEpXG4gICAgICBwNS5zdHJva2VXZWlnaHQoMS41KVxuICAgICAgcDUubGluZShkcm9wLngsIGRyb3AueSwgZHJvcC54LCBkcm9wLnkgKyBkcm9wLmxlbmd0aClcbiAgICAgIGRyb3AubGVuZ3RoID0gTWF0aC5taW4oZHJvcC5sZW5ndGggKyAwLjIsIGRyb3AubWF4X2xlbmd0aClcbiAgICAgIGRyb3AueSArPSBkcm9wLnNwZWVkXG4gICAgICBkcm9wLnNwZWVkID0gTWF0aC5taW4oZHJvcC5zcGVlZCArIGdyYXZpdHksIG1heFNwZWVkKVxuICAgICAgaWYgKGRyb3AueSA+IHA1LmhlaWdodCArIDUwKSB7XG4gICAgICAgIGRyb3AueSA9IHA1LnJhbmRvbSgtNTAwLCAtNTApXG4gICAgICAgIGRyb3Auc3BlZWQgPSBwNS5yYW5kb20oNSwgMjApXG4gICAgICAgIGRyb3AueCA9IHA1LnJhbmRvbShwNS53aWR0aClcbiAgICAgICAgZHJvcC5sZW5ndGggPSAwXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gLy8gcG9vbGluZyB3YXRlclxuICAgIC8vIHA1LmJhY2tncm91bmQoMjAwLCAyMjAsIDIzMClcblxuICAgIC8vIC8vIERyYXcgdGhlIHdhdGVyXG4gICAgLy8gcDUuZmlsbCgxNTAsIDIwMCwgMjU1KVxuICAgIC8vIHA1LmJlZ2luU2hhcGUoKVxuICAgIC8vIHA1LnZlcnRleCgwLCBwNS5oZWlnaHQpXG4gICAgLy8gZm9yIChsZXQgeCA9IDA7IHggPD0gcDUud2lkdGg7IHggKz0gMTApIHtcbiAgICAvLyAgIGNvbnN0IHkgPSB3YXRlckxldmVsICsgcDUubm9pc2Uod2F2ZU9mZnNldCArIHggKiAwLjAxKSAqIDUwXG4gICAgLy8gICBwNS52ZXJ0ZXgoeCwgeSlcbiAgICAvLyB9XG4gICAgLy8gcDUudmVydGV4KHA1LndpZHRoLCBwNS5oZWlnaHQpXG4gICAgLy8gcDUuZW5kU2hhcGUocDUuQ0xPU0UpXG5cbiAgICAvLyAvLyBVcGRhdGUgdGhlIHdhdmUgb2Zmc2V0IHRvIGNyZWF0ZSB0aGUgd2F2ZSBtb3Rpb25cbiAgICAvLyB3YXZlT2Zmc2V0ICs9IDAuMDFcblxuICAgIC8vIC8vIFVwZGF0ZSB0aGUgd2F0ZXIgbGV2ZWwgdG8gc2ltdWxhdGUgcG9vbGluZ1xuICAgIC8vIHdhdGVyTGV2ZWwgKz0gMVxuICAgIC8vIHdhdGVyTGV2ZWwgPSBwNS5jb25zdHJhaW4od2F0ZXJMZXZlbCwgMjUwLCBwNS5oZWlnaHQpXG4gIH1cblxuICByZXR1cm4gPFNrZXRjaCBzZXR1cD17c2V0dXB9IGRyYXc9e2RyYXd9IC8+XG59XG4iXSwibmFtZXMiOlsiZHluYW1pYyIsIlNrZXRjaCIsInRoZW4iLCJtb2QiLCJkZWZhdWx0Iiwic3NyIiwiUmFpbmRyb3BzU2tldGNoIiwiZHJvcHMiLCJncmF2aXR5IiwibWF4U3BlZWQiLCJ3YXRlckxldmVsIiwid2F2ZU9mZnNldCIsInNldHVwIiwicDUiLCJjYW52YXNQYXJlbnRSZWYiLCJjb25zb2xlIiwibG9nIiwiY2xpZW50SGVpZ2h0IiwiY2FudmFzIiwiY3JlYXRlQ2FudmFzIiwiY2xpZW50V2lkdGgiLCJwYXJlbnQiLCJpIiwieCIsInJhbmRvbSIsIndpZHRoIiwieSIsImxlbmd0aCIsIm1heF9sZW5ndGgiLCJzcGVlZCIsImRlbGF5RnJhbWVzIiwiZHJhdyIsImJhY2tncm91bmQiLCJkcm9wIiwiZnJhbWVDb3VudCIsImFscGhhIiwiTWF0aCIsIm1pbiIsInN0cm9rZSIsInN0cm9rZVdlaWdodCIsImxpbmUiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Raindrops.js\n"));

/***/ })

});
webpackHotUpdate_N_E("pages/editor/[id]",{

/***/ "./pages/editor/[id].tsx":
/*!*******************************!*\
  !*** ./pages/editor/[id].tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var _Users_jojo_ClubhouseBio_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jojo_ClubhouseBio_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jojo_ClubhouseBio_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jojo_ClubhouseBio_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_db_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/db/api */ \"./utils/db/api.ts\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/NavBar */ \"./components/NavBar.tsx\");\n/* harmony import */ var _utils_Emojis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/Emojis */ \"./utils/Emojis.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/jojo/ClubhouseBio/app/pages/editor/[id].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Editor() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      tabState = _useState[0],\n      setTabState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      cursorPositionState = _useState2[0],\n      setCursorPositionState = _useState2[1];\n\n  var textAreaRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      initialTextAreaData = _useState3[0],\n      setInitialTextAreaData = _useState3[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      copyStatus = _useState4[0],\n      setCopyStatus = _useState4[1];\n\n  var saveChangeToDB = function saveChangeToDB(event) {\n    var id = router.query.id;\n    _utils_db_api__WEBPACK_IMPORTED_MODULE_5__[\"default\"].updateDocument(id, event.target.value);\n  };\n\n  var EmojiNameMapper = ['most_useful', 'creative', 'science', 'sport', 'travel'];\n  var textAreaPlaceholder = \"Hi I am Elon and I like \\uD83D\\uDE80.\";\n\n  var handleChange = function handleChange(event) {\n    setCursorPositionState(event.target.selectionStart);\n    saveChangeToDB(event);\n  };\n\n  var handleCopy = function handleCopy() {\n    if (textAreaRef.current) {\n      textAreaRef.current.select();\n      document.execCommand('copy');\n      setCopyStatus(true);\n      textAreaRef.current.selectionStart = 0;\n      textAreaRef.current.selectionEnd = 0;\n    }\n\n    setTimeout(function () {\n      setCopyStatus(false);\n    }, 5000);\n  };\n\n  var insertMyText = function insertMyText(text) {\n    if (textAreaRef.current === null) {\n      return;\n    }\n\n    var textToInsert = text;\n    var cursorPosition = cursorPositionState;\n    var textBeforeCursorPosition = textAreaRef.current.value.substring(0, cursorPosition);\n    var textAfterCursorPosition = textAreaRef.current.value.substring(cursorPosition, textAreaRef.current.value.length);\n    textAreaRef.current.value = textBeforeCursorPosition + textToInsert + textAfterCursorPosition;\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = Object(_Users_jojo_ClubhouseBio_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_jojo_ClubhouseBio_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var data;\n        return _Users_jojo_ClubhouseBio_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return _utils_db_api__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getDocument(router.query.id);\n\n              case 2:\n                data = _context.sent;\n\n                if (data !== undefined) {\n                  setInitialTextAreaData(data.text);\n                }\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, [router]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: \"lg:px-8 max-w-screen-xl px-6 mx-auto\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-col justify-between min-h-screen\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"header\", {\n        className: \"\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"main\", {\n        className: \"mt-14 flex-1\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n          className: \"p-2 text-4xl font-semibold text-center text-white\",\n          children: \"Bio Editor\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"md:block hidden mt-4 text-2xl text-white\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            children: \"1. When you are happy with your bio, send the link (url) to your phone.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            children: \"2. Open the link, and copy and paste your bio to Clubhouse.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"sm:hidden block mt-4 text-2xl text-white\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            children: \"Almost done \\uD83E\\uDD73 now copy and paste your bio to Clubhouse!\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"text-center\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              onClick: handleCopy,\n              className: \"bg-clubhouse-button1 text-white rounded-md p-4\",\n              children: copyStatus ? 'Copied!' : 'Copy bio'\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 102,\n              columnNumber: 11\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 9\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"bg-white px-6 py-4 my-3 w-3/4 mx-auto shadow rounded-md flex items-center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"w-full text-center mx-auto\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              className: \"border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline \".concat(tabState === 0 ? 'bg-green-500' : 'bg-gray-200'),\n              onClick: function onClick() {\n                return setTabState(0);\n              },\n              children: \"\\u0415\\u0440\\u04E9\\u043D\\u0445\\u0438\\u0439\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 109,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              className: \"border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline \".concat(tabState === 1 ? 'bg-green-500' : 'bg-gray-200'),\n              onClick: function onClick() {\n                return setTabState(1);\n              },\n              children: \"\\xA0\\u042D\\u043D\\u0442\\u0435\\u0440\\u0442\\u0435\\u0439\\u043D\\u043C\\u0435\\u043D\\u0442\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              className: \"border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline \".concat(tabState === 2 ? 'bg-green-500' : 'bg-gray-200'),\n              onClick: function onClick() {\n                return setTabState(2);\n              },\n              children: \"\\u0428\\u0438\\u043D\\u0436\\u043B\\u044D\\u0445 \\u0443\\u0445\\u0430\\u0430\\u043D\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 130,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              className: \"border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline \".concat(tabState === 3 ? 'bg-green-500' : 'bg-gray-200'),\n              onClick: function onClick() {\n                return setTabState(3);\n              },\n              children: \"\\u0421\\u043F\\u043E\\u0440\\u0442\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 139,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              className: \"border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline \".concat(tabState === 4 ? 'bg-green-500' : 'bg-gray-200'),\n              onClick: function onClick() {\n                return setTabState(4);\n              },\n              children: \"\\u0410\\u044F\\u043B\\u0430\\u043B\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 148,\n              columnNumber: 7\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 5\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"mt-4\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"grid grid-flow-col auto-cols-max md:auto-cols-min\",\n            children: _utils_Emojis__WEBPACK_IMPORTED_MODULE_7__[\"default\"][EmojiNameMapper[tabState]].map(function (element) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n                type: \"button\",\n                className: \"mr-2 text-5xl\",\n                onClick: function onClick() {\n                  insertMyText(element);\n                },\n                children: element\n              }, element.id, false, {\n                fileName: _jsxFileName,\n                lineNumber: 165,\n                columnNumber: 23\n              }, _this);\n            })\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 163,\n            columnNumber: 5\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 162,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"flex justify-center px-6 mt-8\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"textarea\", {\n            \"data-limit-row-len\": \"true\",\n            rows: 20,\n            cols: 27,\n            wrap: \"hard\",\n            className: \"md:text-2xl text-md p-2 font-sans font-light outline-none\",\n            onChange: handleChange,\n            onBlur: handleChange,\n            onClick: handleChange,\n            ref: textAreaRef,\n            placeholder: textAreaPlaceholder,\n            defaultValue: initialTextAreaData\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 179,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 178,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"footer\", {\n        className: \" h-8 mt-4 mb-4 text-white\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          children: \"Built with \\u2764\\uFE0F by Jan Ruettinger\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 195,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 194,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Editor, \"Ht/r7CU03/qd2exMHA0idMfRq+U=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdG9yLy50c3g/MTg4OCJdLCJuYW1lcyI6WyJFZGl0b3IiLCJ1c2VTdGF0ZSIsInRhYlN0YXRlIiwic2V0VGFiU3RhdGUiLCJjdXJzb3JQb3NpdGlvblN0YXRlIiwic2V0Q3Vyc29yUG9zaXRpb25TdGF0ZSIsInRleHRBcmVhUmVmIiwidXNlUmVmIiwiaW5pdGlhbFRleHRBcmVhRGF0YSIsInNldEluaXRpYWxUZXh0QXJlYURhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb3B5U3RhdHVzIiwic2V0Q29weVN0YXR1cyIsInNhdmVDaGFuZ2VUb0RCIiwiZXZlbnQiLCJpZCIsInF1ZXJ5IiwiYXBpIiwidXBkYXRlRG9jdW1lbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkVtb2ppTmFtZU1hcHBlciIsInRleHRBcmVhUGxhY2Vob2xkZXIiLCJoYW5kbGVDaGFuZ2UiLCJzZWxlY3Rpb25TdGFydCIsImhhbmRsZUNvcHkiLCJjdXJyZW50Iiwic2VsZWN0IiwiZG9jdW1lbnQiLCJleGVjQ29tbWFuZCIsInNlbGVjdGlvbkVuZCIsInNldFRpbWVvdXQiLCJpbnNlcnRNeVRleHQiLCJ0ZXh0IiwidGV4dFRvSW5zZXJ0IiwiY3Vyc29yUG9zaXRpb24iLCJ0ZXh0QmVmb3JlQ3Vyc29yUG9zaXRpb24iLCJzdWJzdHJpbmciLCJ0ZXh0QWZ0ZXJDdXJzb3JQb3NpdGlvbiIsImxlbmd0aCIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsImdldERvY3VtZW50IiwiZGF0YSIsInVuZGVmaW5lZCIsIkVtb2ppcyIsIm1hcCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQVMsQ0FBVCxDQURUO0FBQUEsTUFDeEJDLFFBRHdCO0FBQUEsTUFDZEMsV0FEYzs7QUFBQSxtQkFFdUJGLHNEQUFRLENBQUMsQ0FBRCxDQUYvQjtBQUFBLE1BRXhCRyxtQkFGd0I7QUFBQSxNQUVIQyxzQkFGRzs7QUFHL0IsTUFBTUMsV0FBVyxHQUFHQyxvREFBTSxDQUFzQixJQUF0QixDQUExQjs7QUFIK0IsbUJBSXVCTixzREFBUSxDQUFTLEVBQVQsQ0FKL0I7QUFBQSxNQUl4Qk8sbUJBSndCO0FBQUEsTUFJSEMsc0JBSkc7O0FBSy9CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBTCtCLG1CQU1LVixzREFBUSxDQUFDLEtBQUQsQ0FOYjtBQUFBLE1BTXhCVyxVQU53QjtBQUFBLE1BTVpDLGFBTlk7O0FBUS9CLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFnQjtBQUNyQyxRQUFNQyxFQUFFLEdBQUdOLE1BQU0sQ0FBQ08sS0FBUCxDQUFhRCxFQUF4QjtBQUNBRSx5REFBRyxDQUFDQyxjQUFKLENBQW1CSCxFQUFuQixFQUF1QkQsS0FBSyxDQUFDSyxNQUFOLENBQWFDLEtBQXBDO0FBQ0QsR0FIRDs7QUFLQSxNQUFNQyxlQUF5QixHQUFHLENBQ2hDLGFBRGdDLEVBRWhDLFVBRmdDLEVBR2hDLFNBSGdDLEVBSWhDLE9BSmdDLEVBS2hDLFFBTGdDLENBQWxDO0FBUUEsTUFBTUMsbUJBQW1CLDBDQUF6Qjs7QUFDQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDVCxLQUFELEVBQWdCO0FBQ25DViwwQkFBc0IsQ0FBQ1UsS0FBSyxDQUFDSyxNQUFOLENBQWFLLGNBQWQsQ0FBdEI7QUFDQVgsa0JBQWMsQ0FBQ0MsS0FBRCxDQUFkO0FBQ0QsR0FIRDs7QUFLQSxNQUFNVyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLFFBQUdwQixXQUFXLENBQUNxQixPQUFmLEVBQXVCO0FBQ3JCckIsaUJBQVcsQ0FBQ3FCLE9BQVosQ0FBb0JDLE1BQXBCO0FBQ0FDLGNBQVEsQ0FBQ0MsV0FBVCxDQUFxQixNQUFyQjtBQUNBakIsbUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDQVAsaUJBQVcsQ0FBQ3FCLE9BQVosQ0FBb0JGLGNBQXBCLEdBQXFDLENBQXJDO0FBQ0FuQixpQkFBVyxDQUFDcUIsT0FBWixDQUFvQkksWUFBcEIsR0FBbUMsQ0FBbkM7QUFDRDs7QUFDREMsY0FBVSxDQUFDLFlBQU07QUFBQ25CLG1CQUFhLENBQUMsS0FBRCxDQUFiO0FBQXFCLEtBQTdCLEVBQThCLElBQTlCLENBQVY7QUFDRCxHQVREOztBQVdBLE1BQU1vQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQWtCO0FBQ3JDLFFBQUk1QixXQUFXLENBQUNxQixPQUFaLEtBQXdCLElBQTVCLEVBQWtDO0FBQ2hDO0FBQ0Q7O0FBRUQsUUFBTVEsWUFBWSxHQUFHRCxJQUFyQjtBQUNBLFFBQU1FLGNBQWMsR0FBR2hDLG1CQUF2QjtBQUNBLFFBQU1pQyx3QkFBd0IsR0FBRy9CLFdBQVcsQ0FBQ3FCLE9BQVosQ0FBb0JOLEtBQXBCLENBQTBCaUIsU0FBMUIsQ0FDL0IsQ0FEK0IsRUFFL0JGLGNBRitCLENBQWpDO0FBSUEsUUFBTUcsdUJBQXVCLEdBQUdqQyxXQUFXLENBQUNxQixPQUFaLENBQW9CTixLQUFwQixDQUEwQmlCLFNBQTFCLENBQzlCRixjQUQ4QixFQUU5QjlCLFdBQVcsQ0FBQ3FCLE9BQVosQ0FBb0JOLEtBQXBCLENBQTBCbUIsTUFGSSxDQUFoQztBQUlBbEMsZUFBVyxDQUFDcUIsT0FBWixDQUFvQk4sS0FBcEIsR0FDRWdCLHdCQUF3QixHQUFHRixZQUEzQixHQUEwQ0ksdUJBRDVDO0FBRUQsR0FqQkQ7O0FBbUJBRSx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxTQUFTO0FBQUEsb1JBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDR3hCLHFEQUFHLENBQUN5QixXQUFKLENBQWdCakMsTUFBTSxDQUFDTyxLQUFQLENBQWFELEVBQTdCLENBREg7O0FBQUE7QUFDVjRCLG9CQURVOztBQUVoQixvQkFBSUEsSUFBSSxLQUFLQyxTQUFiLEVBQXdCO0FBQ3RCcEMsd0NBQXNCLENBQUNtQyxJQUFJLENBQUNWLElBQU4sQ0FBdEI7QUFDRDs7QUFKZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFUUSxTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBTUFBLGFBQVM7QUFDVixHQVJRLEVBUU4sQ0FBQ2hDLE1BQUQsQ0FSTSxDQUFUO0FBVUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsc0NBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyw0Q0FBZjtBQUFBLDhCQUNFO0FBQVEsaUJBQVMsRUFBQyxFQUFsQjtBQUFBLCtCQUNFLHFFQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFNLGlCQUFTLEVBQUMsY0FBaEI7QUFBQSxnQ0FDRTtBQUFJLG1CQUFTLEVBQUMsbURBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFLLG1CQUFTLEVBQUMsMENBQWY7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQWFFO0FBQUssbUJBQVMsRUFBQywwQ0FBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBUUY7QUFBSyxxQkFBUyxFQUFDLGFBQWY7QUFBQSxtQ0FDRTtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUFzQixxQkFBTyxFQUFFZ0IsVUFBL0I7QUFBMEMsdUJBQVMsRUFBQyxnREFBcEQ7QUFBQSx3QkFBc0dkLFVBQVUsR0FBRyxTQUFILEdBQWU7QUFBL0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJGLGVBeUJFO0FBQ0osbUJBQVMsRUFBQywyRUFETjtBQUFBLGlDQUdOO0FBQUsscUJBQVMsRUFBQyw0QkFBZjtBQUFBLG9DQUNFO0FBQ0Usa0JBQUksRUFBQyxRQURQO0FBRUUsdUJBQVMseUxBRVBWLFFBQVEsS0FBSyxDQUFiLEdBQWlCLGNBQWpCLEdBQWtDLGFBRjNCLENBRlg7QUFNRSxxQkFBTyxFQUFFO0FBQUEsdUJBQU1DLFdBQVcsQ0FBQyxDQUFELENBQWpCO0FBQUEsZUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQVdFO0FBQ0Usa0JBQUksRUFBQyxRQURQO0FBRUUsdUJBQVMseUxBRVBELFFBQVEsS0FBSyxDQUFiLEdBQWlCLGNBQWpCLEdBQWtDLGFBRjNCLENBRlg7QUFNc0IscUJBQU8sRUFBRTtBQUFBLHVCQUFNQyxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBLGVBTi9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVhGLGVBc0JFO0FBQ0Usa0JBQUksRUFBQyxRQURQO0FBRUUsdUJBQVMseUxBRVBELFFBQVEsS0FBSyxDQUFiLEdBQWlCLGNBQWpCLEdBQWtDLGFBRjNCLENBRlg7QUFNc0IscUJBQU8sRUFBRTtBQUFBLHVCQUFNQyxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBLGVBTi9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXRCRixlQStCRTtBQUNFLGtCQUFJLEVBQUMsUUFEUDtBQUVFLHVCQUFTLHlMQUVQRCxRQUFRLEtBQUssQ0FBYixHQUFpQixjQUFqQixHQUFrQyxhQUYzQixDQUZYO0FBTXNCLHFCQUFPLEVBQUU7QUFBQSx1QkFBTUMsV0FBVyxDQUFDLENBQUQsQ0FBakI7QUFBQSxlQU4vQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkEvQkYsZUF3Q0U7QUFDRSxrQkFBSSxFQUFDLFFBRFA7QUFFRSx1QkFBUyx5TEFFUEQsUUFBUSxLQUFLLENBQWIsR0FBaUIsY0FBakIsR0FBa0MsYUFGM0IsQ0FGWDtBQU1zQixxQkFBTyxFQUFFO0FBQUEsdUJBQU1DLFdBQVcsQ0FBQyxDQUFELENBQWpCO0FBQUEsZUFOL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBeENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhNO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBekJGLGVBa0ZKO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUEsaUNBQ0E7QUFBSyxxQkFBUyxFQUFDLG1EQUFmO0FBQUEsc0JBQ2lCMkMscURBQU0sQ0FBQ3hCLGVBQWUsQ0FBQ3BCLFFBQUQsQ0FBaEIsQ0FBTixDQUFrQzZDLEdBQWxDLENBQXNDLFVBQUNDLE9BQUQ7QUFBQSxrQ0FDckM7QUFFRSxvQkFBSSxFQUFDLFFBRlA7QUFHRSx5QkFBUyxFQUFDLGVBSFo7QUFJRSx1QkFBTyxFQUFFLG1CQUFNO0FBQ2JmLDhCQUFZLENBQUNlLE9BQUQsQ0FBWjtBQUNELGlCQU5IO0FBQUEsMEJBUUdBO0FBUkgsaUJBQ09BLE9BQU8sQ0FBQ2hDLEVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEcUM7QUFBQSxhQUF0QztBQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsRkksZUFrR0U7QUFBSyxtQkFBUyxFQUFDLCtCQUFmO0FBQUEsaUNBQ0U7QUFDRSxrQ0FBbUIsTUFEckI7QUFFRSxnQkFBSSxFQUFFLEVBRlI7QUFHRSxnQkFBSSxFQUFFLEVBSFI7QUFJRSxnQkFBSSxFQUFDLE1BSlA7QUFLRSxxQkFBUyxFQUFDLDJEQUxaO0FBTUUsb0JBQVEsRUFBRVEsWUFOWjtBQU9FLGtCQUFNLEVBQUVBLFlBUFY7QUFRRSxtQkFBTyxFQUFFQSxZQVJYO0FBU0UsZUFBRyxFQUFFbEIsV0FUUDtBQVVFLHVCQUFXLEVBQUVpQixtQkFWZjtBQVdFLHdCQUFZLEVBQUVmO0FBWGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQXNIRTtBQUFRLGlCQUFTLEVBQUMsMkJBQWxCO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThIRDs7R0FqTXVCUixNO1VBS1BXLHFEOzs7S0FMT1gsTSIsImZpbGUiOiIuL3BhZ2VzL2VkaXRvci9baWRdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vdXRpbHMvZGIvYXBpJztcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZCYXInO1xuaW1wb3J0IEVtb2ppcyBmcm9tICcuLi8uLi91dGlscy9FbW9qaXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0b3IoKSB7XG4gIGNvbnN0IFt0YWJTdGF0ZSwgc2V0VGFiU3RhdGVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW2N1cnNvclBvc2l0aW9uU3RhdGUsIHNldEN1cnNvclBvc2l0aW9uU3RhdGVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHRleHRBcmVhUmVmID0gdXNlUmVmPEhUTUxUZXh0QXJlYUVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBbaW5pdGlhbFRleHRBcmVhRGF0YSwgc2V0SW5pdGlhbFRleHRBcmVhRGF0YV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtjb3B5U3RhdHVzLCBzZXRDb3B5U3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzYXZlQ2hhbmdlVG9EQiA9IChldmVudDogYW55KSA9PiB7XG4gICAgY29uc3QgaWQgPSByb3V0ZXIucXVlcnkuaWQgYXMgc3RyaW5nO1xuICAgIGFwaS51cGRhdGVEb2N1bWVudChpZCwgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBFbW9qaU5hbWVNYXBwZXI6IHN0cmluZ1tdID0gW1xuICAgICdtb3N0X3VzZWZ1bCcsXG4gICAgJ2NyZWF0aXZlJyxcbiAgICAnc2NpZW5jZScsXG4gICAgJ3Nwb3J0JyxcbiAgICAndHJhdmVsJyxcbiAgXTtcblxuICBjb25zdCB0ZXh0QXJlYVBsYWNlaG9sZGVyID0gYEhpIEkgYW0gRWxvbiBhbmQgSSBsaWtlIPCfmoAuYDtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBzZXRDdXJzb3JQb3NpdGlvblN0YXRlKGV2ZW50LnRhcmdldC5zZWxlY3Rpb25TdGFydCk7XG4gICAgc2F2ZUNoYW5nZVRvREIoZXZlbnQpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNvcHkgPSAoKSA9PiB7XG4gICAgaWYodGV4dEFyZWFSZWYuY3VycmVudCl7XG4gICAgICB0ZXh0QXJlYVJlZi5jdXJyZW50LnNlbGVjdCgpO1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgIHNldENvcHlTdGF0dXModHJ1ZSk7XG4gICAgICB0ZXh0QXJlYVJlZi5jdXJyZW50LnNlbGVjdGlvblN0YXJ0ID0gMDtcbiAgICAgIHRleHRBcmVhUmVmLmN1cnJlbnQuc2VsZWN0aW9uRW5kID0gMDtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7c2V0Q29weVN0YXR1cyhmYWxzZSl9LDUwMDApO1xuICB9XG5cbiAgY29uc3QgaW5zZXJ0TXlUZXh0ID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgIGlmICh0ZXh0QXJlYVJlZi5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdGV4dFRvSW5zZXJ0ID0gdGV4dDtcbiAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IGN1cnNvclBvc2l0aW9uU3RhdGU7XG4gICAgY29uc3QgdGV4dEJlZm9yZUN1cnNvclBvc2l0aW9uID0gdGV4dEFyZWFSZWYuY3VycmVudC52YWx1ZS5zdWJzdHJpbmcoXG4gICAgICAwLFxuICAgICAgY3Vyc29yUG9zaXRpb25cbiAgICApO1xuICAgIGNvbnN0IHRleHRBZnRlckN1cnNvclBvc2l0aW9uID0gdGV4dEFyZWFSZWYuY3VycmVudC52YWx1ZS5zdWJzdHJpbmcoXG4gICAgICBjdXJzb3JQb3NpdGlvbixcbiAgICAgIHRleHRBcmVhUmVmLmN1cnJlbnQudmFsdWUubGVuZ3RoXG4gICAgKTtcbiAgICB0ZXh0QXJlYVJlZi5jdXJyZW50LnZhbHVlID1cbiAgICAgIHRleHRCZWZvcmVDdXJzb3JQb3NpdGlvbiArIHRleHRUb0luc2VydCArIHRleHRBZnRlckN1cnNvclBvc2l0aW9uO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXREb2N1bWVudChyb3V0ZXIucXVlcnkuaWQgYXMgc3RyaW5nKTtcbiAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2V0SW5pdGlhbFRleHRBcmVhRGF0YShkYXRhLnRleHQpO1xuICAgICAgfVxuICAgIH07XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtyb3V0ZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6cHgtOCBtYXgtdy1zY3JlZW4teGwgcHgtNiBteC1hdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIG1pbi1oLXNjcmVlblwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm10LTE0IGZsZXgtMVwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwLTIgdGV4dC00eGwgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICBCaW8gRWRpdG9yXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmJsb2NrIGhpZGRlbiBtdC00IHRleHQtMnhsIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDEuIFdoZW4geW91IGFyZSBoYXBweSB3aXRoIHlvdXIgYmlvLCBzZW5kIHRoZSBsaW5rICh1cmwpIHRvIHlvdXJcbiAgICAgICAgICAgICAgcGhvbmUuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDIuIE9wZW4gdGhlIGxpbmssIGFuZCBjb3B5IGFuZCBwYXN0ZSB5b3VyIGJpbyB0byBDbHViaG91c2UuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmhpZGRlbiBibG9jayBtdC00IHRleHQtMnhsIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIDxkaXY+QWxtb3N0IGRvbmUg8J+lsyBub3cgY29weSBhbmQgcGFzdGUgeW91ciBiaW8gdG8gQ2x1YmhvdXNlITwvZGl2PlxuICAgICAgICAgICAgey8qIDxDb3B5VG9DbGlwYm9hcmQgdGV4dD17U3RyaW5nKHRleHRBcmVhUmVmLmN1cnJlbnQ/LnZhbHVlKX1cbiAgICAgICAgICBvbkNvcHk9eygpID0+IHNldENvcHlTdGF0dXModHJ1ZSl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJnLWNsdWJob3VzZS1idXR0b24xIHRleHQtd2hpdGUgcm91bmRlZC1tZCBwLTRcIj57Y29weVN0YXR1cyA/ICdDb3BpZWQhJyA6ICdDb3B5IGJpbyd9PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ29weX1jbGFzc05hbWU9XCJiZy1jbHViaG91c2UtYnV0dG9uMSB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgcC00XCI+e2NvcHlTdGF0dXMgPyAnQ29waWVkIScgOiAnQ29weSBiaW8nfTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBweC02IHB5LTQgbXktMyB3LTMvNCBteC1hdXRvIHNoYWRvdyByb3VuZGVkLW1kIGZsZXggaXRlbXMtY2VudGVyXCJcbiAgICA+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1jZW50ZXIgbXgtYXV0b1wiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPVxuICAgICAgICB7YGJvcmRlciBib3JkZXItZ3JheS0yMDAgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCByb3VuZGVkLW1kIHB4LTQgcHktMiBtLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZSBzZWxlY3Qtbm9uZSBob3ZlcjpiZy1ncmF5LTMwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmUgJHtcbiAgICAgICAgICB0YWJTdGF0ZSA9PT0gMCA/ICdiZy1ncmVlbi01MDAnIDogJ2JnLWdyYXktMjAwJ1xuICAgICAgICB9YH1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiU3RhdGUoMCl9XG4gICAgICA+XG4gICAgICAgINCV0YDTqdC90YXQuNC5XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT1cbiAgICAgICAge2Bib3JkZXIgYm9yZGVyLWdyYXktMjAwIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgcm91bmRlZC1tZCBweC00IHB5LTIgbS0yIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2Ugc2VsZWN0LW5vbmUgaG92ZXI6YmctZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lICR7XG4gICAgICAgICAgdGFiU3RhdGUgPT09IDEgPyAnYmctZ3JlZW4tNTAwJyA6ICdiZy1ncmF5LTIwMCdcbiAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiU3RhdGUoMSl9XG5cbiAgICAgPlxuICAgICAgICDCoNCt0L3RgtC10YDRgtC10LnQvdC80LXQvdGCXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT1cbiAgICAgICAge2Bib3JkZXIgYm9yZGVyLWdyYXktMjAwIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgcm91bmRlZC1tZCBweC00IHB5LTIgbS0yIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2Ugc2VsZWN0LW5vbmUgaG92ZXI6YmctZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lICR7XG4gICAgICAgICAgdGFiU3RhdGUgPT09IDIgPyAnYmctZ3JlZW4tNTAwJyA6ICdiZy1ncmF5LTIwMCdcbiAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiU3RhdGUoMil9ICAgICAgPlxuICAgICAgICDQqNC40L3QttC70Y3RhSDRg9GF0LDQsNC9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT1cbiAgICAgICAge2Bib3JkZXIgYm9yZGVyLWdyYXktMjAwIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgcm91bmRlZC1tZCBweC00IHB5LTIgbS0yIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2Ugc2VsZWN0LW5vbmUgaG92ZXI6YmctZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lICR7XG4gICAgICAgICAgdGFiU3RhdGUgPT09IDMgPyAnYmctZ3JlZW4tNTAwJyA6ICdiZy1ncmF5LTIwMCdcbiAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiU3RhdGUoMyl9ICAgICAgPlxuICAgICAgICDQodC/0L7RgNGCXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT1cbiAgICAgICAge2Bib3JkZXIgYm9yZGVyLWdyYXktMjAwIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgcm91bmRlZC1tZCBweC00IHB5LTIgbS0yIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2Ugc2VsZWN0LW5vbmUgaG92ZXI6YmctZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lICR7XG4gICAgICAgICAgdGFiU3RhdGUgPT09IDQgPyAnYmctZ3JlZW4tNTAwJyA6ICdiZy1ncmF5LTIwMCdcbiAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiU3RhdGUoNCl9ICAgICAgPlxuICAgICAgICDQkNGP0LvQsNC7XG4gICAgICA8L2J1dHRvbj5cblxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWZsb3ctY29sIGF1dG8tY29scy1tYXggbWQ6YXV0by1jb2xzLW1pblwiPlxuICAgICAgICAgICAgICAgICAgICB7RW1vamlzW0Vtb2ppTmFtZU1hcHBlclt0YWJTdGF0ZV1dLm1hcCgoZWxlbWVudDogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbGVtZW50LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yIHRleHQtNXhsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0TXlUZXh0KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHgtNiBtdC04XCI+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgZGF0YS1saW1pdC1yb3ctbGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIHJvd3M9ezIwfVxuICAgICAgICAgICAgICBjb2xzPXsyN31cbiAgICAgICAgICAgICAgd3JhcD1cImhhcmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZDp0ZXh0LTJ4bCB0ZXh0LW1kIHAtMiBmb250LXNhbnMgZm9udC1saWdodCBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICByZWY9e3RleHRBcmVhUmVmfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGV4dEFyZWFQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpbml0aWFsVGV4dEFyZWFEYXRhfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cIiBoLTggbXQtNCBtYi00IHRleHQtd2hpdGVcIj5cbiAgICAgICAgICA8ZGl2PkJ1aWx0IHdpdGgg4p2k77iPIGJ5IEphbiBSdWV0dGluZ2VyPC9kaXY+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/editor/[id].tsx\n");

/***/ })

})
webpackHotUpdate_N_E("pages/editor/[id]",{

/***/ "./pages/editor/[id].tsx":
/*!*******************************!*\
  !*** ./pages/editor/[id].tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var _Users_jojo_ClubhouseBio_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jojo_ClubhouseBio_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jojo_ClubhouseBio_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jojo_ClubhouseBio_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_db_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/db/api */ \"./utils/db/api.ts\");\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/NavBar */ \"./components/NavBar.tsx\");\n/* harmony import */ var _utils_Emojis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/Emojis */ \"./utils/Emojis.ts\");\n\n\n\n\nvar _jsxFileName = \"/Users/jojo/ClubhouseBio/app/pages/editor/[id].tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Editor() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      tabState = _useState[0],\n      setTabState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      cursorPositionState = _useState2[0],\n      setCursorPositionState = _useState2[1];\n\n  var textAreaRef = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null);\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      initialTextAreaData = _useState3[0],\n      setInitialTextAreaData = _useState3[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      copyStatus = _useState4[0],\n      setCopyStatus = _useState4[1];\n\n  var saveChangeToDB = function saveChangeToDB(event) {\n    var id = router.query.id;\n    _utils_db_api__WEBPACK_IMPORTED_MODULE_5__[\"default\"].updateDocument(id, event.target.value);\n  };\n\n  var EmojiNameMapper = ['most_useful', 'creative', 'science', 'sport', 'travel'];\n  var textAreaPlaceholder = \"Hi I am Elon and I like \\uD83D\\uDE80.\";\n\n  var handleChange = function handleChange(event) {\n    setCursorPositionState(event.target.selectionStart);\n    saveChangeToDB(event);\n  };\n\n  var handleCopy = function handleCopy() {\n    if (textAreaRef.current) {\n      textAreaRef.current.select();\n      document.execCommand('copy');\n      setCopyStatus(true);\n      textAreaRef.current.selectionStart = 0;\n      textAreaRef.current.selectionEnd = 0;\n    }\n\n    setTimeout(function () {\n      setCopyStatus(false);\n    }, 5000);\n  };\n\n  var insertMyText = function insertMyText(text) {\n    if (textAreaRef.current === null) {\n      return;\n    }\n\n    var textToInsert = text;\n    var cursorPosition = cursorPositionState;\n    var textBeforeCursorPosition = textAreaRef.current.value.substring(0, cursorPosition);\n    var textAfterCursorPosition = textAreaRef.current.value.substring(cursorPosition, textAreaRef.current.value.length);\n    textAreaRef.current.value = textBeforeCursorPosition + textToInsert + textAfterCursorPosition;\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var fetchData = /*#__PURE__*/function () {\n      var _ref = Object(_Users_jojo_ClubhouseBio_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_jojo_ClubhouseBio_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var data;\n        return _Users_jojo_ClubhouseBio_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return _utils_db_api__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getDocument(router.query.id);\n\n              case 2:\n                data = _context.sent;\n\n                if (data !== undefined) {\n                  setInitialTextAreaData(data.text);\n                }\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function fetchData() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchData();\n  }, [router]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: \"lg:px-8 max-w-screen-xl px-6 mx-auto\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-col justify-between min-h-screen\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"header\", {\n        className: \"\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"main\", {\n        className: \"mt-14 flex-1\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"h1\", {\n          className: \"p-2 text-4xl font-semibold text-center text-white\",\n          children: \"Bio Editor\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"md:block hidden mt-4 text-2xl text-white\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            children: \"1. When you are happy with your bio, send the link (url) to your phone.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            children: \"2. Open the link, and copy and paste your bio to Clubhouse.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"sm:hidden block mt-4 text-2xl text-white\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            children: \"Almost done \\uD83E\\uDD73 now copy and paste your bio to Clubhouse!\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"text-center\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              onClick: handleCopy,\n              className: \"bg-clubhouse-button1 text-white rounded-md p-4\",\n              children: copyStatus ? 'Copied!' : 'Copy bio'\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 102,\n              columnNumber: 11\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 9\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"bg-white px-6 py-4 my-3 w-3/4 mx-auto shadow rounded-md flex items-center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"w-full text-center mx-auto\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              className: \"border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline \".concat(tabState === 0 ? 'bg-green-500' : 'bg-gray-200'),\n              onClick: function onClick() {\n                return setTabState(0);\n              },\n              children: \"\\u0415\\u0440\\u04E9\\u043D\\u0445\\u0438\\u0439\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 109,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              className: \"border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline \".concat(tabState === 1 ? 'bg-green-500' : 'bg-gray-200'),\n              onClick: function onClick() {\n                return setTabState(1);\n              },\n              children: \"\\xA0\\u042D\\u043D\\u0442\\u0435\\u0440\\u0442\\u0435\\u0439\\u043D\\u043C\\u0435\\u043D\\u0442\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              className: \"border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline \".concat(tabState === 2 ? 'bg-green-500' : 'bg-gray-200'),\n              onClick: function onClick() {\n                return setTabState(2);\n              },\n              children: \"\\u0428\\u0438\\u043D\\u0436\\u043B\\u044D\\u0445 \\u0443\\u0445\\u0430\\u0430\\u043D\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 130,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              className: \"border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline \".concat(tabState === 3 ? 'bg-green-500' : 'bg-gray-200'),\n              onClick: function onClick() {\n                return setTabState(3);\n              },\n              children: \"\\u0421\\u043F\\u043E\\u0440\\u0442\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 139,\n              columnNumber: 7\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              className: \"border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline \".concat(tabState === 4 ? 'bg-green-500' : 'bg-gray-200'),\n              onClick: function onClick() {\n                return setTabState(4);\n              },\n              children: \"\\u0410\\u044F\\u043B\\u0430\\u043B\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 148,\n              columnNumber: 7\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 5\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"mt-4\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: \"w-full text-center mx-auto\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n              className: \"grid grid-flow-col grid-cols-3 grid-rows-max\",\n              children: _utils_Emojis__WEBPACK_IMPORTED_MODULE_7__[\"default\"][EmojiNameMapper[tabState]].map(function (element) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"button\", {\n                  type: \"button\",\n                  className: \"mr-2 text-5xl\",\n                  onClick: function onClick() {\n                    insertMyText(element);\n                  },\n                  children: element\n                }, element.id, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 166,\n                  columnNumber: 23\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 164,\n              columnNumber: 5\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 163,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 162,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: \"flex justify-center px-6 mt-8\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"textarea\", {\n            \"data-limit-row-len\": \"true\",\n            rows: 20,\n            cols: 27,\n            wrap: \"hard\",\n            className: \"md:text-2xl text-md p-2 font-sans font-light outline-none\",\n            onChange: handleChange,\n            onBlur: handleChange,\n            onClick: handleChange,\n            ref: textAreaRef,\n            placeholder: textAreaPlaceholder,\n            defaultValue: initialTextAreaData\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 181,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 180,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"footer\", {\n        className: \" h-8 mt-4 mb-4 text-white\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          children: \"Built with \\u2764\\uFE0F by Jan Ruettinger\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 197,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 196,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Editor, \"Ht/r7CU03/qd2exMHA0idMfRq+U=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdG9yLy50c3g/MTg4OCJdLCJuYW1lcyI6WyJFZGl0b3IiLCJ1c2VTdGF0ZSIsInRhYlN0YXRlIiwic2V0VGFiU3RhdGUiLCJjdXJzb3JQb3NpdGlvblN0YXRlIiwic2V0Q3Vyc29yUG9zaXRpb25TdGF0ZSIsInRleHRBcmVhUmVmIiwidXNlUmVmIiwiaW5pdGlhbFRleHRBcmVhRGF0YSIsInNldEluaXRpYWxUZXh0QXJlYURhdGEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb3B5U3RhdHVzIiwic2V0Q29weVN0YXR1cyIsInNhdmVDaGFuZ2VUb0RCIiwiZXZlbnQiLCJpZCIsInF1ZXJ5IiwiYXBpIiwidXBkYXRlRG9jdW1lbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkVtb2ppTmFtZU1hcHBlciIsInRleHRBcmVhUGxhY2Vob2xkZXIiLCJoYW5kbGVDaGFuZ2UiLCJzZWxlY3Rpb25TdGFydCIsImhhbmRsZUNvcHkiLCJjdXJyZW50Iiwic2VsZWN0IiwiZG9jdW1lbnQiLCJleGVjQ29tbWFuZCIsInNlbGVjdGlvbkVuZCIsInNldFRpbWVvdXQiLCJpbnNlcnRNeVRleHQiLCJ0ZXh0IiwidGV4dFRvSW5zZXJ0IiwiY3Vyc29yUG9zaXRpb24iLCJ0ZXh0QmVmb3JlQ3Vyc29yUG9zaXRpb24iLCJzdWJzdHJpbmciLCJ0ZXh0QWZ0ZXJDdXJzb3JQb3NpdGlvbiIsImxlbmd0aCIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsImdldERvY3VtZW50IiwiZGF0YSIsInVuZGVmaW5lZCIsIkVtb2ppcyIsIm1hcCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQVMsQ0FBVCxDQURUO0FBQUEsTUFDeEJDLFFBRHdCO0FBQUEsTUFDZEMsV0FEYzs7QUFBQSxt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O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFwR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUF3SEU7QUFBUSxpQkFBUyxFQUFDLDJCQUFsQjtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnSUQ7O0dBbk11QlIsTTtVQUtQVyxxRDs7O0tBTE9YLE0iLCJmaWxlIjoiLi9wYWdlcy9lZGl0b3IvW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL3V0aWxzL2RiL2FwaSc7XG5pbXBvcnQgTmF2QmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2QmFyJztcbmltcG9ydCBFbW9qaXMgZnJvbSAnLi4vLi4vdXRpbHMvRW1vamlzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yKCkge1xuICBjb25zdCBbdGFiU3RhdGUsIHNldFRhYlN0YXRlXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFtjdXJzb3JQb3NpdGlvblN0YXRlLCBzZXRDdXJzb3JQb3NpdGlvblN0YXRlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCB0ZXh0QXJlYVJlZiA9IHVzZVJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PihudWxsKTtcbiAgY29uc3QgW2luaXRpYWxUZXh0QXJlYURhdGEsIHNldEluaXRpYWxUZXh0QXJlYURhdGFdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbY29weVN0YXR1cywgc2V0Q29weVN0YXR1c10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc2F2ZUNoYW5nZVRvREIgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGNvbnN0IGlkID0gcm91dGVyLnF1ZXJ5LmlkIGFzIHN0cmluZztcbiAgICBhcGkudXBkYXRlRG9jdW1lbnQoaWQsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgRW1vamlOYW1lTWFwcGVyOiBzdHJpbmdbXSA9IFtcbiAgICAnbW9zdF91c2VmdWwnLFxuICAgICdjcmVhdGl2ZScsXG4gICAgJ3NjaWVuY2UnLFxuICAgICdzcG9ydCcsXG4gICAgJ3RyYXZlbCcsXG4gIF07XG5cbiAgY29uc3QgdGV4dEFyZWFQbGFjZWhvbGRlciA9IGBIaSBJIGFtIEVsb24gYW5kIEkgbGlrZSDwn5qALmA7XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgc2V0Q3Vyc29yUG9zaXRpb25TdGF0ZShldmVudC50YXJnZXQuc2VsZWN0aW9uU3RhcnQpO1xuICAgIHNhdmVDaGFuZ2VUb0RCKGV2ZW50KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDb3B5ID0gKCkgPT4ge1xuICAgIGlmKHRleHRBcmVhUmVmLmN1cnJlbnQpe1xuICAgICAgdGV4dEFyZWFSZWYuY3VycmVudC5zZWxlY3QoKTtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICBzZXRDb3B5U3RhdHVzKHRydWUpO1xuICAgICAgdGV4dEFyZWFSZWYuY3VycmVudC5zZWxlY3Rpb25TdGFydCA9IDA7XG4gICAgICB0ZXh0QXJlYVJlZi5jdXJyZW50LnNlbGVjdGlvbkVuZCA9IDA7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge3NldENvcHlTdGF0dXMoZmFsc2UpfSw1MDAwKTtcbiAgfVxuXG4gIGNvbnN0IGluc2VydE15VGV4dCA9ICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICBpZiAodGV4dEFyZWFSZWYuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRleHRUb0luc2VydCA9IHRleHQ7XG4gICAgY29uc3QgY3Vyc29yUG9zaXRpb24gPSBjdXJzb3JQb3NpdGlvblN0YXRlO1xuICAgIGNvbnN0IHRleHRCZWZvcmVDdXJzb3JQb3NpdGlvbiA9IHRleHRBcmVhUmVmLmN1cnJlbnQudmFsdWUuc3Vic3RyaW5nKFxuICAgICAgMCxcbiAgICAgIGN1cnNvclBvc2l0aW9uXG4gICAgKTtcbiAgICBjb25zdCB0ZXh0QWZ0ZXJDdXJzb3JQb3NpdGlvbiA9IHRleHRBcmVhUmVmLmN1cnJlbnQudmFsdWUuc3Vic3RyaW5nKFxuICAgICAgY3Vyc29yUG9zaXRpb24sXG4gICAgICB0ZXh0QXJlYVJlZi5jdXJyZW50LnZhbHVlLmxlbmd0aFxuICAgICk7XG4gICAgdGV4dEFyZWFSZWYuY3VycmVudC52YWx1ZSA9XG4gICAgICB0ZXh0QmVmb3JlQ3Vyc29yUG9zaXRpb24gKyB0ZXh0VG9JbnNlcnQgKyB0ZXh0QWZ0ZXJDdXJzb3JQb3NpdGlvbjtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGkuZ2V0RG9jdW1lbnQocm91dGVyLnF1ZXJ5LmlkIGFzIHN0cmluZyk7XG4gICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNldEluaXRpYWxUZXh0QXJlYURhdGEoZGF0YS50ZXh0KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbcm91dGVyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnB4LTggbWF4LXctc2NyZWVuLXhsIHB4LTYgbXgtYXV0b1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBtaW4taC1zY3JlZW5cIj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8TmF2QmFyIC8+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtdC0xNCBmbGV4LTFcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicC0yIHRleHQtNHhsIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgQmlvIEVkaXRvclxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpibG9jayBoaWRkZW4gbXQtNCB0ZXh0LTJ4bCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAxLiBXaGVuIHlvdSBhcmUgaGFwcHkgd2l0aCB5b3VyIGJpbywgc2VuZCB0aGUgbGluayAodXJsKSB0byB5b3VyXG4gICAgICAgICAgICAgIHBob25lLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAyLiBPcGVuIHRoZSBsaW5rLCBhbmQgY29weSBhbmQgcGFzdGUgeW91ciBiaW8gdG8gQ2x1YmhvdXNlLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpoaWRkZW4gYmxvY2sgbXQtNCB0ZXh0LTJ4bCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICA8ZGl2PkFsbW9zdCBkb25lIPCfpbMgbm93IGNvcHkgYW5kIHBhc3RlIHlvdXIgYmlvIHRvIENsdWJob3VzZSE8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8Q29weVRvQ2xpcGJvYXJkIHRleHQ9e1N0cmluZyh0ZXh0QXJlYVJlZi5jdXJyZW50Py52YWx1ZSl9XG4gICAgICAgICAgb25Db3B5PXsoKSA9PiBzZXRDb3B5U3RhdHVzKHRydWUpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJiZy1jbHViaG91c2UtYnV0dG9uMSB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgcC00XCI+e2NvcHlTdGF0dXMgPyAnQ29waWVkIScgOiAnQ29weSBiaW8nfTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNvcHl9Y2xhc3NOYW1lPVwiYmctY2x1YmhvdXNlLWJ1dHRvbjEgdGV4dC13aGl0ZSByb3VuZGVkLW1kIHAtNFwiPntjb3B5U3RhdHVzID8gJ0NvcGllZCEnIDogJ0NvcHkgYmlvJ308L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHgtNiBweS00IG15LTMgdy0zLzQgbXgtYXV0byBzaGFkb3cgcm91bmRlZC1tZCBmbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyIG14LWF1dG9cIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT1cbiAgICAgICAge2Bib3JkZXIgYm9yZGVyLWdyYXktMjAwIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgcm91bmRlZC1tZCBweC00IHB5LTIgbS0yIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2Ugc2VsZWN0LW5vbmUgaG92ZXI6YmctZ3JheS0zMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lICR7XG4gICAgICAgICAgdGFiU3RhdGUgPT09IDAgPyAnYmctZ3JlZW4tNTAwJyA6ICdiZy1ncmF5LTIwMCdcbiAgICAgICAgfWB9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYlN0YXRlKDApfVxuICAgICAgPlxuICAgICAgICDQldGA06nQvdGF0LjQuVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9XG4gICAgICAgIHtgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIHJvdW5kZWQtbWQgcHgtNCBweS0yIG0tMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlIHNlbGVjdC1ub25lIGhvdmVyOmJnLWdyYXktMzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSAke1xuICAgICAgICAgIHRhYlN0YXRlID09PSAxID8gJ2JnLWdyZWVuLTUwMCcgOiAnYmctZ3JheS0yMDAnXG4gICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYlN0YXRlKDEpfVxuXG4gICAgID5cbiAgICAgICAgwqDQrdC90YLQtdGA0YLQtdC50L3QvNC10L3RglxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9XG4gICAgICAgIHtgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIHJvdW5kZWQtbWQgcHgtNCBweS0yIG0tMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlIHNlbGVjdC1ub25lIGhvdmVyOmJnLWdyYXktMzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSAke1xuICAgICAgICAgIHRhYlN0YXRlID09PSAyID8gJ2JnLWdyZWVuLTUwMCcgOiAnYmctZ3JheS0yMDAnXG4gICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYlN0YXRlKDIpfSAgICAgID5cbiAgICAgICAg0KjQuNC90LbQu9GN0YUg0YPRhdCw0LDQvVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9XG4gICAgICAgIHtgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIHJvdW5kZWQtbWQgcHgtNCBweS0yIG0tMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlIHNlbGVjdC1ub25lIGhvdmVyOmJnLWdyYXktMzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSAke1xuICAgICAgICAgIHRhYlN0YXRlID09PSAzID8gJ2JnLWdyZWVuLTUwMCcgOiAnYmctZ3JheS0yMDAnXG4gICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYlN0YXRlKDMpfSAgICAgID5cbiAgICAgICAg0KHQv9C+0YDRglxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9XG4gICAgICAgIHtgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIHJvdW5kZWQtbWQgcHgtNCBweS0yIG0tMiB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCBlYXNlIHNlbGVjdC1ub25lIGhvdmVyOmJnLWdyYXktMzAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZSAke1xuICAgICAgICAgIHRhYlN0YXRlID09PSA0ID8gJ2JnLWdyZWVuLTUwMCcgOiAnYmctZ3JheS0yMDAnXG4gICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYlN0YXRlKDQpfSAgICAgID5cbiAgICAgICAg0JDRj9C70LDQu1xuICAgICAgPC9idXR0b24+XG5cblxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyIG14LWF1dG9cIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1mbG93LWNvbCBncmlkLWNvbHMtMyBncmlkLXJvd3MtbWF4XCI+XG4gICAgICAgICAgICAgICAgICAgIHtFbW9qaXNbRW1vamlOYW1lTWFwcGVyW3RhYlN0YXRlXV0ubWFwKChlbGVtZW50OiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VsZW1lbnQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTIgdGV4dC01eGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRNeVRleHQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50fVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB4LTYgbXQtOFwiPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGRhdGEtbGltaXQtcm93LWxlbj1cInRydWVcIlxuICAgICAgICAgICAgICByb3dzPXsyMH1cbiAgICAgICAgICAgICAgY29scz17Mjd9XG4gICAgICAgICAgICAgIHdyYXA9XCJoYXJkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6dGV4dC0yeGwgdGV4dC1tZCBwLTIgZm9udC1zYW5zIGZvbnQtbGlnaHQgb3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgcmVmPXt0ZXh0QXJlYVJlZn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RleHRBcmVhUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aW5pdGlhbFRleHRBcmVhRGF0YX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCIgaC04IG10LTQgbWItNCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgPGRpdj5CdWlsdCB3aXRoIOKdpO+4jyBieSBKYW4gUnVldHRpbmdlcjwvZGl2PlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/editor/[id].tsx\n");

/***/ })

})
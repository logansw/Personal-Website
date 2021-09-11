exports.id = 794;
exports.ids = [794];
exports.modules = {

/***/ 196:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Dialogue; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dialogue_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1855);
/* harmony import */ var _Dialogue_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Dialogue_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);





class Dialogue extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (_Dialogue_module_css__WEBPACK_IMPORTED_MODULE_3___default().dialogue),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Dialogue_module_css__WEBPACK_IMPORTED_MODULE_3___default().relative),
        children: this.renderUserResponse()
      }), this.renderLoganResponse()]
    });
  }

  renderUserResponse() {
    if (this.props.userResponse === "") {
      return null;
    } else {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Dialogue_module_css__WEBPACK_IMPORTED_MODULE_3___default().userResponse),
        children: this.props.userResponse
      });
    }
  }

  renderLoganResponse() {
    if (this.props.clickable) {
      let styleArr = [];
      styleArr.push((_Dialogue_module_css__WEBPACK_IMPORTED_MODULE_3___default().logan));
      styleArr.push((_Dialogue_module_css__WEBPACK_IMPORTED_MODULE_3___default().clickable));

      if (this.props.bold) {
        styleArr.push((_Dialogue_module_css__WEBPACK_IMPORTED_MODULE_3___default().bold));
      }

      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: styleArr.join(' '),
        onClick: this.props.clickHandler,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_Dialogue_module_css__WEBPACK_IMPORTED_MODULE_3___default().text),
          children: this.props.text
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_Dialogue_module_css__WEBPACK_IMPORTED_MODULE_3___default().arrow),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__.default, {
            src: "/Arrow.svg",
            alt: "Next",
            width: 37,
            height: 22
          })
        })]
      });
    } else {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Dialogue_module_css__WEBPACK_IMPORTED_MODULE_3___default().logan),
        onClick: this.props.clickHandler,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_Dialogue_module_css__WEBPACK_IMPORTED_MODULE_3___default().text),
          children: this.props.text
        })
      });
    }
  }

}

/***/ }),

/***/ 4815:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ Response; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Response_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1515);
/* harmony import */ var _Response_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Response_module_css__WEBPACK_IMPORTED_MODULE_2__);



class Response extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_Response_module_css__WEBPACK_IMPORTED_MODULE_2___default().response),
      onClick: this.props.clickHandler,
      children: this.props.text
    });
  }

}

/***/ }),

/***/ 1855:
/***/ (function(module) {

// Exports
module.exports = {
	"dialogue": "Dialogue_dialogue__3DJgf",
	"userResponse": "Dialogue_userResponse__2k3IC",
	"logan": "Dialogue_logan__3-jKT",
	"text": "Dialogue_text__1pZLQ",
	"arrow": "Dialogue_arrow__3Jl48",
	"breathe": "Dialogue_breathe__NI3_U",
	"relative": "Dialogue_relative__1t7CO",
	"clickable": "Dialogue_clickable__ZI0xg",
	"bold": "Dialogue_bold__1J6L0"
};


/***/ }),

/***/ 1515:
/***/ (function(module) {

// Exports
module.exports = {
	"response": "Response_response__3xPV8"
};


/***/ })

};
;
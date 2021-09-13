exports.id = 481;
exports.ids = [481];
exports.modules = {

/***/ 173:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ NavBar; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/NavBar.module.css
var NavBar_module = __webpack_require__(9646);
var NavBar_module_default = /*#__PURE__*/__webpack_require__.n(NavBar_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/Logo.module.css
var Logo_module = __webpack_require__(463);
var Logo_module_default = /*#__PURE__*/__webpack_require__.n(Logo_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/Logo.tsx





class Logo extends (external_react_default()).Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (Logo_module_default()).logo,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Logo_module_default()).png,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/Whaleshark Logo 2 Outline.svg",
          alt: "Whaleshark Logo",
          layout: "responsive",
          width: 100,
          height: 100
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Logo_module_default()).name,
        children: "LOGAN WANG"
      })]
    });
  }

}
;// CONCATENATED MODULE: ./components/NavBar.tsx







class NavBar extends (external_react_default()).Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebar: false
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (NavBar_module_default()).navBar,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Logo, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (NavBar_module_default()).gap
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: this.state.sidebar ? (NavBar_module_default()).sidebarActive : (NavBar_module_default()).links,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (NavBar_module_default()).close,
          onClick: this.toggleSidebar,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: "/x.svg",
            alt: "Close",
            width: 24,
            height: 15
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (NavBar_module_default()).gap
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: this.props.active == "about" ? (NavBar_module_default()).active : (NavBar_module_default()).link,
            children: "About"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/stuff",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: this.props.active == "stuff" ? (NavBar_module_default()).active : (NavBar_module_default()).link,
            children: "Stuff"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/contact",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: this.props.active == "contact" ? (NavBar_module_default()).active : (NavBar_module_default()).link,
            children: "Contact"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (NavBar_module_default()).gap
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (NavBar_module_default()).menu,
        onClick: this.toggleSidebar,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/menu.svg",
          alt: "Hamburger Menu",
          layout: "responsive",
          width: 100,
          height: 100
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: this.state.sidebar ? (NavBar_module_default()).dim : (NavBar_module_default()).notDim,
        onClick: this.toggleSidebar
      })]
    });
  }

  toggleSidebar() {
    this.setState(state => {
      return {
        sidebar: !state.sidebar
      };
    });
  }

}

/***/ }),

/***/ 463:
/***/ (function(module) {

// Exports
module.exports = {
	"logo": "Logo_logo__1AbpY",
	"png": "Logo_png__wVFjA",
	"name": "Logo_name__GQIdL"
};


/***/ }),

/***/ 9646:
/***/ (function(module) {

// Exports
module.exports = {
	"navBar": "NavBar_navBar__3AGsl",
	"gap": "NavBar_gap__1a9tj",
	"link": "NavBar_link__ElhDU",
	"active": "NavBar_active__tS6Ku",
	"close": "NavBar_close__iuriv",
	"menu": "NavBar_menu__3I-Tv",
	"links": "NavBar_links__3DO-o",
	"sidebarActive": "NavBar_sidebarActive__30aye",
	"dim": "NavBar_dim__22neC",
	"notDim": "NavBar_notDim__2myFH"
};


/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;
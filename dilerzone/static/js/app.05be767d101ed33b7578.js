webpackJsonp([1],{

/***/ "+MWo":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dilerzone"
  }, [_c('PageLayout', [_c('div', {
    attrs: {
      "slot": "content"
    },
    slot: "content"
  }, [_c('router-view')], 1)])], 1)
},staticRenderFns: []}

/***/ }),

/***/ "/2MF":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "formPassword"
  }, [_c('div', {
    staticClass: "formPassword-input"
  }, [_c('FormInput', _vm._b({
    attrs: {
      "name": _vm.name,
      "type": _vm.inputType
    },
    on: {
      "input": function($event) {
        return _vm.$emit('input', $event)
      },
      "blur": _vm.hidePassword
    }
  }, 'FormInput', _vm.$props, false)), _vm._v(" "), _c('button', {
    staticClass: "formPassword-button",
    class: {
      '_show': _vm.showPassword
    },
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.togglePasswordVisibility,
      "blur": _vm.hidePassword
    }
  })], 1)])
},staticRenderFns: []}

/***/ }),

/***/ "/G7i":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("e5Dp")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("Dbgo"),
  /* template */
  __webpack_require__("cr8N"),
  /* scopeId */
  "data-v-84d5b634",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "0J3u":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "store"
  }, [_c('h2', [_vm._v("Store")])])
}]}

/***/ }),

/***/ "0JJk":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pageLayout"
  }, [_c('div', {
    staticClass: "pageLayout-main"
  }, [_c('div', {
    staticClass: "pageLayout-main-grid"
  }, [_c('div', {
    staticClass: "pageLayout-main-aside"
  }, [_c('MainMenu')], 1), _vm._v(" "), _c('div', {
    staticClass: "pageLayout-main-content"
  }, [_vm._t("content")], 2)])])])
},staticRenderFns: []}

/***/ }),

/***/ "1WlK":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "34YU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_PageLayout__ = __webpack_require__("af7G");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_PageLayout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_PageLayout__);
//
//
//
//
//
//
//
//
//
//
//

// import MainMenu from '@/components/MainMenu'

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    // MainMenu,
    PageLayout: __WEBPACK_IMPORTED_MODULE_0__components_PageLayout___default.a
  }
});

/***/ }),

/***/ "3UEi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'formGroup'
});

/***/ }),

/***/ "3hb8":
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("JcsQ"),
  /* template */
  __webpack_require__("ys8O"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "4txX":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "newsItemComponent"
  }, [_c('div', {
    staticClass: "newsItemComponent-wrapper"
  }, [_c('div', {
    staticClass: "newsItemComponent-side"
  }, [_c('img', {
    staticClass: "newsItemComponent-img",
    attrs: {
      "src": _vm.item.image ? _vm.item.image : _vm.dummyImage,
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "newsItemComponent-main"
  }, [_c('div', {
    staticClass: "newsItemComponent-title"
  }, [_c('div', {
    staticClass: "newsItemComponent-date"
  }, [_vm._v("\n          " + _vm._s(_vm._f("formatDate")(_vm.item.date_start)) + "\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "newsItemComponent-text"
  }, [_vm._v("\n          " + _vm._s(_vm.item.title) + "\n        ")])]), _vm._v(" "), _c('div', {
    staticClass: "newsItemComponent-block",
    domProps: {
      "innerHTML": _vm._s(_vm.item.text)
    }
  })])])])
},staticRenderFns: []}

/***/ }),

/***/ "5Jkf":
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("hWsb"),
  /* template */
  __webpack_require__("LBP7"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "73Sm":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "files"
  }, [_c('h2', [_vm._v("Files")])])
}]}

/***/ }),

/***/ "7T3d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormInput__ = __webpack_require__("O9rZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormInput___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FormInput__);
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'formPassword',
  components: {
    FormInput: __WEBPACK_IMPORTED_MODULE_0__FormInput___default.a
  },
  props: {
    value: String,
    name: String,
    hasErrors: '',
    error: ''
  },
  data: function data() {
    return {
      showPassword: false
    };
  },

  computed: {
    inputType: function inputType() {
      return this.showPassword ? 'text' : 'password';
    }
  },
  methods: {
    togglePasswordVisibility: function togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    hidePassword: function hidePassword() {
      this.showPassword = false;
    }
  }
});

/***/ }),

/***/ "CoRt":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("hfPt")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("nte9"),
  /* template */
  __webpack_require__("pT+m"),
  /* scopeId */
  "data-v-63f20038",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "Dbgo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/svg-baker-runtime/browser-symbol.js
var browser_symbol = __webpack_require__("Wc9H");
var browser_symbol_default = /*#__PURE__*/__webpack_require__.n(browser_symbol);

// EXTERNAL MODULE: ./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js
var browser_sprite_build = __webpack_require__("IaZV");
var browser_sprite_build_default = /*#__PURE__*/__webpack_require__.n(browser_sprite_build);

// CONCATENATED MODULE: ./src/assets/svg/btn_hot.svg


var symbol = new browser_symbol_default.a({
  "id": "btn_hot",
  "use": "btn_hot-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 24 24\" id=\"btn_hot\">\n<path d=\"M13.5,0.7c0,0,0.7,2.7,0.7,4.8c0,2.1-1.4,3.7-3.4,3.7c-2.1,0-3.6-1.7-3.6-3.7l0-0.4C5.2,7.5,4,10.6,4,14c0,4.4,3.6,8,8,8\n\ts8-3.6,8-8C20,8.6,17.4,3.8,13.5,0.7z M11.7,19c-1.8,0-3.2-1.4-3.2-3.1c0-1.6,1.1-2.8,2.8-3.1c1.8-0.4,3.6-1.2,4.6-2.6\n\tc0.4,1.3,0.6,2.6,0.6,4C16.5,16.9,14.4,19,11.7,19z\" />\n</symbol>"
});
var result = browser_sprite_build_default.a.add(symbol);
/* harmony default export */ var btn_hot = (symbol);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/FormButton.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var FormButton = __webpack_exports__["default"] = ({
  name: 'formButton',
  data: function data() {
    return { hot: btn_hot };
  }
});

/***/ }),

/***/ "JcsQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "LBP7":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "requests"
  }, [_c('h2', [_vm._v("Requests")])])
}]}

/***/ }),

/***/ "LFSv":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "orders"
  }, [_c('h2', [_vm._v("Orders")])])
}]}

/***/ }),

/***/ "M/ag":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'pageLayout'
});

/***/ }),

/***/ "M93x":
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("xJD8"),
  /* template */
  __webpack_require__("VwoG"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./src/App.vue
var App = __webpack_require__("M93x");
var App_default = /*#__PURE__*/__webpack_require__.n(App);

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("/ocq");

// EXTERNAL MODULE: ./src/pages/Dilerzone.vue
var Dilerzone = __webpack_require__("acCE");
var Dilerzone_default = /*#__PURE__*/__webpack_require__.n(Dilerzone);

// EXTERNAL MODULE: ./src/views/Files.vue
var Files = __webpack_require__("tBur");
var Files_default = /*#__PURE__*/__webpack_require__.n(Files);

// EXTERNAL MODULE: ./src/views/Login.vue
var Login = __webpack_require__("lmfZ");
var Login_default = /*#__PURE__*/__webpack_require__.n(Login);

// EXTERNAL MODULE: ./src/views/News.vue
var News = __webpack_require__("zSHs");
var News_default = /*#__PURE__*/__webpack_require__.n(News);

// EXTERNAL MODULE: ./src/views/Orders.vue
var Orders = __webpack_require__("hr+V");
var Orders_default = /*#__PURE__*/__webpack_require__.n(Orders);

// EXTERNAL MODULE: ./src/views/Requests.vue
var Requests = __webpack_require__("5Jkf");
var Requests_default = /*#__PURE__*/__webpack_require__.n(Requests);

// EXTERNAL MODULE: ./src/views/Stock.vue
var Stock = __webpack_require__("fIO6");
var Stock_default = /*#__PURE__*/__webpack_require__.n(Stock);

// EXTERNAL MODULE: ./src/views/UserSettings.vue
var UserSettings = __webpack_require__("3hb8");
var UserSettings_default = /*#__PURE__*/__webpack_require__.n(UserSettings);

// CONCATENATED MODULE: ./src/router.js


// import Home from '@/views/Home.vue'









vue_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  mode: 'history',
  base: Object({"NODE_ENV":"production"}).BASE_URL,
  routes: [{
    path: '/dilerlogin',
    component: Login_default.a
  }, {
    path: '/dilerzone',
    component: Dilerzone_default.a
  }, {
    path: '/dilerzone/:id',
    component: Dilerzone_default.a,
    children: [{
      path: '/dilerzone/files',
      component: Files_default.a
    }, {
      path: '/dilerzone/news',
      component: News_default.a
    }, {
      path: '/dilerzone/orders',
      component: Orders_default.a
    }, {
      path: '/dilerzone/requests',
      component: Requests_default.a
    }, {
      path: '/dilerzone/store',
      component: Stock_default.a
    }, {
      path: '/dilerzone/user_settings',
      component: UserSettings_default.a
    }]
  }]
}));
// CONCATENATED MODULE: ./src/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.




vue_esm["a" /* default */].config.productionTip = false;

// Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new vue_esm["a" /* default */]({
  el: '#app',
  router: router,
  render: function render(h) {
    return h(App_default.a);
  }
});

/***/ }),

/***/ "NtoT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./src/components/FormGroup.vue
var FormGroup = __webpack_require__("bp/4");
var FormGroup_default = /*#__PURE__*/__webpack_require__.n(FormGroup);

// EXTERNAL MODULE: ./src/components/FormInput.vue
var FormInput = __webpack_require__("O9rZ");
var FormInput_default = /*#__PURE__*/__webpack_require__.n(FormInput);

// EXTERNAL MODULE: ./src/components/FormPassword.vue
var FormPassword = __webpack_require__("d5Xs");
var FormPassword_default = /*#__PURE__*/__webpack_require__.n(FormPassword);

// EXTERNAL MODULE: ./src/components/FormButton.vue
var FormButton = __webpack_require__("/G7i");
var FormButton_default = /*#__PURE__*/__webpack_require__.n(FormButton);

// EXTERNAL MODULE: ./src/components/FormLink.vue
var FormLink = __webpack_require__("kkKu");
var FormLink_default = /*#__PURE__*/__webpack_require__.n(FormLink);

// EXTERNAL MODULE: ./src/components/CardError.vue
var CardError = __webpack_require__("CoRt");
var CardError_default = /*#__PURE__*/__webpack_require__.n(CardError);

// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("Zrlr");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__("wxAW");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./src/helpers.js
var helpers = __webpack_require__("cX0o");

// EXTERNAL MODULE: ./src/constants.js + 14 modules
var constants = __webpack_require__("oiih");

// CONCATENATED MODULE: ./src/services/AuthService.js








var BASE_URL = '/dilerlogin';

var AuthService_AuthService = function () {
  function AuthService() {
    classCallCheck_default()(this, AuthService);
  }

  createClass_default()(AuthService, null, [{
    key: 'login',
    value: function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(credentials) {
        var params, response, validator;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                validator = function validator(response) {
                  return response.data && response.data.success === true;
                };

                params = Object(helpers["a" /* createPostParams */])(credentials);
                _context.next = 4;
                return vue_esm["a" /* default */].axios.post('', params, { baseURL: BASE_URL });

              case 4:
                response = _context.sent;
                return _context.abrupt('return', Object(helpers["c" /* validateResponse */])(response, validator));

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login(_x) {
        return _ref.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: 'logout',
    value: function () {
      var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var response;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return vue_esm["a" /* default */].axios.get('/logout/' + Object(helpers["b" /* getCookie */])(constants["a" /* COOKIES_NAMES */].USER_ID), { baseURL: BASE_URL });

              case 2:
                response = _context2.sent;
                return _context2.abrupt('return', Object(helpers["c" /* validateResponse */])(response));

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function logout() {
        return _ref2.apply(this, arguments);
      }

      return logout;
    }()
  }, {
    key: 'recoverPassword',
    value: function () {
      var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3(credentials) {
        var params, response, validator;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                validator = function validator(response) {
                  return response.data && response.data !== false;
                };

                params = Object(helpers["a" /* createPostParams */])(credentials);
                _context3.next = 4;
                return vue_esm["a" /* default */].axios.post('/forgot/all', params, { baseURL: BASE_URL });

              case 4:
                response = _context3.sent;
                return _context3.abrupt('return', Object(helpers["c" /* validateResponse */])(response, validator));

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function recoverPassword(_x2) {
        return _ref3.apply(this, arguments);
      }

      return recoverPassword;
    }()
  }]);

  return AuthService;
}();
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/Login.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ var Login = __webpack_exports__["default"] = ({
  name: 'login',
  components: {
    FormGroup: FormGroup_default.a,
    FormInput: FormInput_default.a,
    FormButton: FormButton_default.a,
    FormPassword: FormPassword_default.a,
    FormLink: FormLink_default.a,
    CardError: CardError_default.a
  },
  data: function data() {
    return {
      login: '',
      password: '',
      loginRecovery: '',
      emailRecovery: '',
      error: false,
      state: 'default',
      errorMessage: '',
      isLogining: false,
      isRecoveringPassword: false
    };
  },

  computed: {
    showLoginForm: function showLoginForm() {
      return this.state === 'default';
    },
    showPasswordRecoveryForm: function showPasswordRecoveryForm() {
      return this.state === 'recovery';
    },
    showSuccessRecovery: function showSuccessRecovery() {
      return this.state === 'success';
    },
    loginButtonIsDisabled: function loginButtonIsDisabled() {
      return !(this.login && this.password);
    },
    recoverPasswordButtonIsDisabled: function recoverPasswordButtonIsDisabled() {
      return !(this.loginRecovery && this.emailRecovery);
    }
  },
  methods: {
    authenticate: function authenticate() {
      var _this = this;

      if (!this.isLogining) {
        this.isLogining = true;
        var params = {
          login: this.login,
          password: this.password
        };
        AuthService_AuthService.login(params).then(function (res) {
          _this.error = false;
          if (constants["b" /* isProduction */]) {
            window.location = '/' + res.redirect;
          } else {
            window.location = '/app.html';
          }
        }).catch(function (e) {
          console.error('login error', e);
          _this.errorMessage = 'Неправильное имя пользователя или пароль';
          _this.error = true;
        }).finally(function () {
          _this.isLogining = false;
        });
      }
    },
    recoverPassword: function recoverPassword() {
      var _this2 = this;

      if (!this.isRecoveringPassword) {
        this.isRecoveringPassword = true;
        var params = {
          login: this.loginRecovery,
          email: this.emailRecovery
        };
        AuthService_AuthService.recoverPassword(params).then(function () {
          _this2.error = false;
          _this2.changeState('success');
        }).catch(function (e) {
          console.error('password recovery error', e);
          _this2.errorMessage = 'Произошла ошибка восстановления пароля';
          _this2.error = true;
        }).finally(function () {
          _this2.isRecoveringPassword = false;
        });
      }
    },
    changeState: function changeState(state) {
      this.error = false;
      this.state = state;
    }
  }
});

/***/ }),

/***/ "O9rZ":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("rFiC")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("X+bO"),
  /* template */
  __webpack_require__("tdJa"),
  /* scopeId */
  "data-v-f83e2474",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "RoyZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "S/qm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/svg-baker-runtime/browser-symbol.js
var browser_symbol = __webpack_require__("Wc9H");
var browser_symbol_default = /*#__PURE__*/__webpack_require__.n(browser_symbol);

// EXTERNAL MODULE: ./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js
var browser_sprite_build = __webpack_require__("IaZV");
var browser_sprite_build_default = /*#__PURE__*/__webpack_require__.n(browser_sprite_build);

// CONCATENATED MODULE: ./src/assets/svg/search.svg


var symbol = new browser_symbol_default.a({
  "id": "search",
  "use": "search-usage",
  "viewBox": "0 0 609.8 606.2",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 609.8 606.2\" id=\"search\">\n<path d=\"M609.8,572.5c0-9.3-3.4-17.2-10.2-23.9L427.2,377.2c20.6-26.7,34.4-56.3,41.3-88.9h0.3c3.6-16.9,5.4-34.4,5.4-52.5\n\t\t\t\tc0-65.2-23.3-120.9-69.8-167C358.5,22.9,302.7,0,237.1,0c-65.6,0-121.6,22.9-168,68.7l0,0C23,114.9,0,170.6,0,235.7\n\t\t\t\tc0,65.2,23.1,120.6,69.1,166.4c46.4,46.2,102.5,69.3,168,69.4c54,0,101.4-15.6,142.3-46.8l172.4,171.4\n\t\t\t\tc6.7,6.7,14.7,10.1,24.1,10.1c9.3,0,17.2-3.4,23.7-10.1C606.3,589.6,609.7,581.8,609.8,572.5 M402.4,274.1v-0.3\n\t\t\t\tc-6.7,30.6-22,57.5-45.7,80.8l0,0c-32.9,33-72.8,49.5-119.6,49.5c-46.9,0-87-16.5-120.3-49.5C84.1,322,67.7,282.3,67.8,235.7\n\t\t\t\tc0-46.6,16.4-86.3,49.1-119.2l0.3-0.3c33.1-32.6,73.1-48.8,119.9-48.8c46.9,0,86.7,16.2,119.6,48.8\n\t\t\t\tc33.2,33.1,49.8,72.9,49.8,119.5C406.5,249,405.1,261.8,402.4,274.1z\" />\n</symbol>"
});
var result = browser_sprite_build_default.a.add(symbol);
/* harmony default export */ var search = (symbol);
// CONCATENATED MODULE: ./src/assets/svg/fire.svg


var fire_symbol = new browser_symbol_default.a({
  "id": "fire",
  "use": "fire-usage",
  "viewBox": "0 0 22 22",
  "content": "<symbol viewBox=\"0 0 22 22\" xmlns=\"http://www.w3.org/2000/svg\" id=\"fire\">\n    <path d=\"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z\" />\n</symbol>"
});
var fire_result = browser_sprite_build_default.a.add(fire_symbol);
/* harmony default export */ var fire = (fire_symbol);
// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("Xxa5");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("exGp");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("Zrlr");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/createClass.js
var createClass = __webpack_require__("wxAW");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm.js
var vue_esm = __webpack_require__("7+uW");

// EXTERNAL MODULE: ./src/helpers.js
var helpers = __webpack_require__("cX0o");

// CONCATENATED MODULE: ./src/services/NewsService.js







var NewsService_NewsService = function () {
  function NewsService() {
    classCallCheck_default()(this, NewsService);
  }

  createClass_default()(NewsService, null, [{
    key: 'getAllNews',
    value: function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var response;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return vue_esm["a" /* default */].axios.get('/getNews/all');

              case 2:
                response = _context.sent;
                return _context.abrupt('return', Object(helpers["c" /* validateResponse */])(response));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAllNews() {
        return _ref.apply(this, arguments);
      }

      return getAllNews;
    }()
  }]);

  return NewsService;
}();
// EXTERNAL MODULE: ./src/components/NewsItem.vue
var NewsItem = __webpack_require__("YUo1");
var NewsItem_default = /*#__PURE__*/__webpack_require__.n(NewsItem);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/views/News.vue
//
//
//
//
//
//
//





// import { formatDate } from '@/helpers'

/* harmony default export */ var News = __webpack_exports__["default"] = ({
  name: 'News',
  // mixins: [privilegesMixin],
  components: { NewsItem: NewsItem_default.a },
  data: function data() {
    return {
      searchIcon: search,
      fireIcon: fire,
      selectedValue: '',
      isFetchingData: false,
      news: []
    };
  },

  methods: {
    getNews: function getNews() {
      var _this = this;

      this.isFetchingData = true;
      NewsService_NewsService.getAllNews().then(function (res) {
        _this.news = res;
      }).catch(function (e) {
        return console.error('error getting news', e);
      }).finally(function () {
        _this.isFetchingData = false;
      });
    }
  },
  created: function created() {
    this.getNews();
  }
});

/***/ }),

/***/ "SVoq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "VwoG":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Hello world")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/dilerlogin"
    }
  }, [_vm._v("login")]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/dilerzone/news"
    }
  }, [_vm._v("news")]), _vm._v(" "), _c('router-view')], 1)
},staticRenderFns: []}

/***/ }),

/***/ "WOtC":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "formGroup",
    class: [{
      '_vertical': _vm.props.vertical
    }].concat([_vm.data.staticClass]).concat([_vm.data.class])
  }, [_c('div', {
    staticClass: "formGroup-label",
    class: {
      '_required': _vm.props.required
    }
  }, [_vm._t("label"), _vm._v(" "), (_vm.props.label) ? _c('label', {
    attrs: {
      "for": _vm.props.id || _vm.props.for
    }
  }, [_vm._v("\n      " + _vm._s(_vm.props.label) + "\n    ")]) : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "formGroup-input"
  }, [_vm._t("input")], 2), _vm._v(" "), _c('div', {
    staticClass: "formGroup-addition"
  }, [_vm._t("addition")], 2)])
},staticRenderFns: []}

/***/ }),

/***/ "X+bO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'formInput',
  props: ['type', 'id', 'placeholder', 'name', 'value', 'icon', 'hasErrors', 'error', 'disabled', 'max', 'min'],
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "XPmg":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YUo1":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("1WlK")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("pM4p"),
  /* template */
  __webpack_require__("4txX"),
  /* scopeId */
  "data-v-0343f656",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "Ywb3":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "login-card"
  }, [(_vm.error) ? _c('CardError', {
    attrs: {
      "message": _vm.errorMessage
    }
  }) : _vm._e(), _vm._v(" "), (_vm.showLoginForm) ? _c('div', {
    staticClass: "login-form login-default"
  }, [_c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.authenticate($event)
      }
    }
  }, [_c('div', {
    staticClass: "login-subtitle"
  }, [_vm._v("\n          Вход для дилеров\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "login-form-content"
  }, [_c('FormGroup', {
    attrs: {
      "for": "login",
      "label": "Логин",
      "vertical": true
    }
  }, [_c('FormInput', {
    attrs: {
      "slot": "input",
      "name": "login",
      "id": "login"
    },
    slot: "input",
    model: {
      value: (_vm.login),
      callback: function($$v) {
        _vm.login = $$v
      },
      expression: "login"
    }
  })], 1), _vm._v(" "), _c('FormGroup', {
    attrs: {
      "for": "password",
      "label": "Пароль",
      "vertical": true
    }
  }, [_c('FormPassword', {
    attrs: {
      "slot": "input",
      "name": "password",
      "id": "password"
    },
    slot: "input",
    model: {
      value: (_vm.password),
      callback: function($$v) {
        _vm.password = $$v
      },
      expression: "password"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "login-links"
  }, [_c('FormLink', {
    on: {
      "click": function($event) {
        return _vm.changeState('recovery')
      }
    }
  }, [_vm._v("Восстановить пароль")]), _vm._v(" "), _c('FormLink', {
    attrs: {
      "href": "/dillernew.html",
      "target": "_blank"
    }
  }, [_vm._v("Стать новым дилером")])], 1), _vm._v(" "), _c('div', {
    staticClass: "login-buttonLogin"
  }, [_c('FormButton', {
    attrs: {
      "btn-type": "submit",
      "type": "solid",
      "is-loading": _vm.isLogining,
      "disabled": _vm.loginButtonIsDisabled
    }
  }, [_vm._v("\n              Войти\n            ")])], 1)], 1)])]) : _vm._e(), _vm._v(" "), (_vm.showPasswordRecoveryForm) ? _c('div', {
    staticClass: "login-form login-passwordRecovery"
  }, [_c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.recoverPassword($event)
      }
    }
  }, [_c('div', {
    staticClass: "login-text"
  }, [_vm._v("\n          Для восстановления пароля нужно вписать в поле ниже адрес электронной почты, указанный при регистрации.\n        ")]), _vm._v(" "), _c('FormGroup', {
    attrs: {
      "for": "loginRecovery",
      "label": "Логин",
      "vertical": true
    }
  }, [_c('FormInput', {
    attrs: {
      "slot": "input",
      "name": "login",
      "id": "loginRecovery"
    },
    slot: "input",
    model: {
      value: (_vm.loginRecovery),
      callback: function($$v) {
        _vm.loginRecovery = $$v
      },
      expression: "loginRecovery"
    }
  })], 1), _vm._v(" "), _c('FormGroup', {
    attrs: {
      "for": "emailRecovery",
      "label": "E-mail",
      "vertical": true
    }
  }, [_c('FormInput', {
    attrs: {
      "slot": "input",
      "type": "email",
      "name": "emailRecovery",
      "id": "emailRecovery"
    },
    slot: "input",
    model: {
      value: (_vm.emailRecovery),
      callback: function($$v) {
        _vm.emailRecovery = $$v
      },
      expression: "emailRecovery"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "login-links"
  }, [_c('FormLink', {
    on: {
      "click": function($event) {
        return _vm.changeState('default')
      }
    }
  }, [_vm._v("Войти")])], 1), _vm._v(" "), _c('div', {
    staticClass: "login-buttonRecovery"
  }, [_c('FormButton', {
    attrs: {
      "btn-type": "submit",
      "type": "solid",
      "disabled": _vm.recoverPasswordButtonIsDisabled
    }
  }, [_vm._v("Отправить пароль на\n            почту\n          ")])], 1)], 1)]) : _vm._e(), _vm._v(" "), (_vm.showSuccessRecovery) ? _c('div', {
    staticClass: "login-form login-success"
  }, [_c('div', {
    staticClass: "login-success-text"
  }, [_vm._v("\n        Пароль отправлен на "), _c('span', {
    staticClass: "__bold"
  }, [_vm._v(_vm._s(_vm.emailRecovery))])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('FormLink', {
    on: {
      "click": function($event) {
        return _vm.changeState('default')
      }
    }
  }, [_vm._v("Дилерская зона")])], 1) : _vm._e()], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "login-logo",
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "@/assets/img/logo.png",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login-successImage"
  }, [_c('img', {
    attrs: {
      "src": "@/assets/img/sent.png",
      "alt": ""
    }
  })])
}]}

/***/ }),

/***/ "ZpGl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'formLink'
});

/***/ }),

/***/ "acCE":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("nkRk")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("34YU"),
  /* template */
  __webpack_require__("+MWo"),
  /* scopeId */
  "data-v-509ed3cc",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "af7G":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("kmno")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("M/ag"),
  /* template */
  __webpack_require__("0JJk"),
  /* scopeId */
  "data-v-ef69de2e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "bFWX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "bp/4":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("f9BU")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("3UEi"),
  /* template */
  __webpack_require__("WOtC"),
  /* scopeId */
  "data-v-7483ac0a",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "cX0o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export uniqueId */
/* unused harmony export Personal */
/* harmony export (immutable) */ __webpack_exports__["a"] = createPostParams;
/* unused harmony export filesEditDateFormat */
/* unused harmony export formatPrice */
/* unused harmony export formatNumber */
/* unused harmony export formatSize */
/* unused harmony export formatDate */
/* unused harmony export ErrorResponse */
/* harmony export (immutable) */ __webpack_exports__["c"] = validateResponse;
/* harmony export (immutable) */ __webpack_exports__["b"] = getCookie;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("pFYg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__("d7EF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries__ = __webpack_require__("W3Iv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("Zrlr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("oiih");






var uniqueId = function generateUniqueId() {
  return Math.round(Date.now() * Math.random());
};

var Personal = function Personal() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$name = _ref.name,
      name = _ref$name === undefined ? '' : _ref$name,
      _ref$id = _ref.id,
      id = _ref$id === undefined ? uniqueId() : _ref$id;

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Personal);

  this.name = name;
  this.id = id;
};

/*
*  Функция принимает объект в виде {ключ: значение} и возвращает POST парамерты
* */
function createPostParams(credentials) {
  var params = new URLSearchParams();
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(credentials).forEach(function (_ref2) {
    var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];

    return params.append(key, value);
  });
  return params;
}

var filesEditDateFormat = function filesEditDateFormat(timestamp) {
  if (typeof timestamp !== 'number') return timestamp;
  var date = new Date(timestamp * 1000);
  return '' + date.toLocaleDateString('ru', { hour: 'numeric', minute: 'numeric', second: 'numeric' });
};

function formatPrice(value) {
  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  var _value = 0;
  switch (typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(value)) {
    case 'string':
      _value = parseFloat(value);
      if (isNaN(_value)) return 0;
      break;

    case 'number':
      _value = value;
      break;

    default:
      break;
  }
  _value = formatMoney(_value, num, ' ', '.');
  return _value;
}

function formatNumber(value) {
  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void 0;

  var _value = 0;
  switch (typeof value === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(value)) {
    case 'string':
      _value = parseFloat(value);
      if (isNaN(_value)) return 0;
      break;

    case 'number':
      _value = value;
      break;

    default:
      break;
  }
  var a = _value % 1;
  a.toString();
  // if (num !== void 0) _value = _value.toFixed(num)
  return _value;
}

function formatSize(size) {
  if (size === void 0) return '-';
  if (size <= 0) {
    return '0 bytes';
  }
  var abbreviations = ['bytes', 'kB', 'MB', 'GB'];
  var index = Math.floor(Math.log(size) / Math.log(1000));
  return +(size / Math.pow(1000, index)).toPrecision(3) + ' ' + abbreviations[index];
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('ru');
}

var ErrorResponse = function ErrorResponse() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref4$errorMessage = _ref4.errorMessage,
      errorMessage = _ref4$errorMessage === undefined ? '' : _ref4$errorMessage,
      _ref4$data = _ref4.data,
      data = _ref4$data === undefined ? null : _ref4$data,
      _ref4$responseCode = _ref4.responseCode,
      responseCode = _ref4$responseCode === undefined ? null : _ref4$responseCode;

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, ErrorResponse);

  this.errorMessage = errorMessage;
  this.data = data;
  this.responseCode = responseCode;
};

function validateResponse(response) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var validator = void 0;
  if (typeof config === 'function') {
    validator = config;
  } else {
    validator = config.validator;
  }
  if (config.log !== false && !("production" === 'production')) {
    console.log('response', response);
  }
  var status = response.status;
  if (status >= 200 && status < 300) {
    if (validator) {
      console.log('response.data', response.data);
      if (validator(response)) return response.data;
      throw new ErrorResponse({ errorMessage: 'Error message', data: response.data });
    }
    return response.data;
  }
  if (status === 401 || status === 403) {
    // show global error => logout => route to login page
    var message = void 0;
    if (status === 401) {
      message = 'Unauthorized';
    } else {
      message = 'Forbidden. You have not enough rights.';
    }
    console.error(message);
    console.log(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* isProduction */]);
    if (__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* isProduction */]) {
      console.log('adsasdasd');
      window.location = '/dilerlogin';
    } else {
      console.log('NE adsasdasd');
      window.location = '/login.html';
    }
    // store.commit('setGlobalError', message)
    // store.dispatch('logout')
    // router.push({ name: 'sign' })
    throw new ErrorResponse({ responseCode: status });
  }
  if (status === 400) {
    // ошибки данных , тут у response будет тело ответа, где содержится инфа об ошибке
    throw new ErrorResponse({ data: response.data, responseCode: status });
  }
  if (status === 404) {
    // не найдено => global error
    // не глобальная
    // store.commit('setGlobalError', 'Nothing found on your request');
    throw new ErrorResponse({ errorMessage: 'Nothing found on your request', responseCode: status });
  }
  if (status === 409) {
    // conflict => show global error
    // store.commit('setGlobalError', 'Conflicted.');
    throw new ErrorResponse({ errorMessage: 'Conflicted.', responseCode: status });
  }
  if (status === 408) {
    // timeout => show global error
    // store.commit('setGlobalError', 'Request timeout.')
    throw new ErrorResponse({ responseCode: status });
  }
  if (status >= 500) {
    // внутренняя ошибка сервера => global error
    // store.commit('setServerError')
    throw new ErrorResponse({ responseCode: status });
  }
  throw new ErrorResponse({ errorMessage: response.statusText, responseCode: status });
}

/* eslint-disable */
function formatMoney(num, decPlaces, thouSeparator, decSeparator) {
  var n = num,
      decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
      decSeparator = decSeparator == undefined ? '.' : decSeparator,
      thouSeparator = thouSeparator == undefined ? ',' : thouSeparator,
      sign = n < 0 ? '-' : '',
      i = parseInt(n = Math.abs(+n || 0).toFixed(decPlaces)) + '',
      j = (j = i.length) > 3 ? j % 3 : 0;
  return sign + (j ? i.substr(0, j) + thouSeparator : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thouSeparator) + (decPlaces ? decSeparator + Math.abs(n - i).toFixed(decPlaces).slice(2) : '');
}

/* eslint-enable */

function getCookie(name) {
  var decode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var cookies = document.cookie.split(';');
  var result = cookies.find(function (cookie) {
    return cookie.indexOf(name) > -1;
  });
  if (result && decode) return decodeURIComponent(result.trim().slice(name.length + 1));
  if (result) return result.trim().slice(name.length + 1);
  return void 0;
}

/***/ }),

/***/ "cr8N":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', _vm._g(_vm._b({
    staticClass: "button",
    class: [{
        '_solid': _vm.props.type === 'solid',
        '_skeleton': _vm.props.type === 'skeleton',
        '_hot': _vm.props.type === 'hotBooking',
        '_notColored': _vm.props.type === 'notColored',
        '_sm': _vm.props.size === 'sm',
        '_lg': _vm.props.size === 'lg',
        '_inline': _vm.props.block ? (_vm.props.block === false || _vm.props.block === 'false') : false,
        '-loading': _vm.props.isLoading,
        '-active': _vm.props.active
      }]
      .concat([_vm.data.class])
      .concat(_vm.data.staticClass),
    attrs: {
      "type": _vm.props.btnType || ''
    }
  }, 'button', _vm.data.attrs, false), _vm.listeners), [_vm._t("default"), _vm._v(" "), (_vm.props.isLoading) ? _c('span', {
    staticClass: "button-loader"
  }, [_c('span', {
    staticClass: "button-loader-wrapper"
  }, [_c('svg', {
    staticClass: "button-loader-image",
    attrs: {
      "xmlns:svg": "www.w3.org/2000/svg",
      "viewbox": "0 0 20 20"
    }
  }, [_c('circle', {
    staticClass: "button-loader-image-one",
    attrs: {
      "cx": "10",
      "cy": "10",
      "r": "3"
    }
  }), _vm._v(" "), _c('circle', {
    staticClass: "button-loader-image-two",
    attrs: {
      "cx": "10",
      "cy": "10",
      "r": "8"
    }
  }), _vm._v(" "), _c('circle', {
    staticClass: "button-loader-image-three",
    attrs: {
      "cx": "10",
      "cy": "10",
      "r": "13"
    }
  }), _vm._v(" "), _c('circle', {
    staticClass: "button-loader-image-four",
    attrs: {
      "cx": "10",
      "cy": "10",
      "r": "18"
    }
  })])])]) : _vm._e(), _vm._v(" "), _c('span', [(_vm.props.type === 'hotBooking') ? _c('svg', {
    staticClass: "button-icon",
    staticStyle: {
      "enable-background": "new 0 0 24 24"
    },
    attrs: {
      "version": "1.1",
      "id": "hot",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "x": "0px",
      "y": "0px",
      "viewBox": "0 0 24 24",
      "xml:space": "preserve"
    }
  }, [_c('path', {
    attrs: {
      "d": "M13.5,0.7c0,0,0.7,2.7,0.7,4.8c0,2.1-1.4,3.7-3.4,3.7c-2.1,0-3.6-1.7-3.6-3.7l0-0.4C5.2,7.5,4,10.6,4,14c0,4.4,3.6,8,8,8\n              s8-3.6,8-8C20,8.6,17.4,3.8,13.5,0.7z M11.7,19c-1.8,0-3.2-1.4-3.2-3.1c0-1.6,1.1-2.8,2.8-3.1c1.8-0.4,3.6-1.2,4.6-2.6\n              c0.4,1.3,0.6,2.6,0.6,4C16.5,16.9,14.4,19,11.7,19z"
    }
  })]) : _vm._e()])], 2)
},staticRenderFns: []}

/***/ }),

/***/ "d24o":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAABuCAMAAAAH4JEUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmMThhYjM2My05MDJkLWEzNDEtYWI3MC0yYmRkNzMwNmI0NWQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzhFQjZFOEFCN0ZCMTFFOEE3RUZGQ0JBM0E0QTc5MkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzhFQjZFODlCN0ZCMTFFOEE3RUZGQ0JBM0E0QTc5MkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTc4NjgwOWUtNjM1OC1lMzRhLWIyODctNDkzYWYxNjg0ZDg5IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzAzYWEwOWUtNjBhNS0xMWU3LTllN2ItZTBhZTZlNWU2MzE3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+b2BXBwAAAMBQTFRFfmZlamVlYlNTvLOy3t7etKmploSEzcrKxL28inV1nY2MlpeXYkNCg2xrxMLCysXF09DQvLu72djY1tbWYUxLUlNTsaWls7OzeXp6XEhHhoeHo5OTqpycjI2NXkA/rqGh2NXV0c7OcFZVnJycTiwrUzMyq6ysuK6udVtao6Ska09OkHx7dXZ2eF9fcHBwWDs6cXJyT1BQ4ODgcnNzk4B/ZklI1dPTgICAd3h4YWBfmIeGbWtrkJGR3NvbXT084eHhGF9IUgAAA1BJREFUeNrs2t1yqjAQAGCsiGDxj1rbqkVFra2nVqRCq5bN+7/V0SAIqL2ogexF9soZHeebDdlsQiSCNyRhEzZhEzZhEzaGtqmD16ZuEI/pvIfXVjKLaG3yzB2inaddsHystoEOGtr69g+gjdVWBLBklDanpwNAH6OtUYV9WA4+W8mFINrYbAMNwsgicdfYijM4xhSTzV9BPOaIbOoMklFEY6uYKRpU0dh6cBLqb7+/83Ic0/5J4uYbRVFWF4a285znXGjDuVidX72ay/thnjWkdJI5cC9kzd8ul51c69v0xNZNfG8Y4aef5S6GedqIqqdx2ko7rl4P76PyYUT30cnVRoru6RN3bElubdvuTA1irKlt7eVqI+oprh51T4/2Pj5/vu+pbTnKe3+axunRRC3bUWwL9ztfIe/esp7GRfvVFzsZH5+59+RlpZqwmaXDF88pm/3G4aymlEycGUxO+T1Fe5c52BwriQtstXTaHjjss3YT4lwBfkvRHgkXG+mfWRs6KZvHyUba4drqhr25kaLdEl42UjlUt2jRbCZpf2iRrrY505WmdRuhDeZh3kYJ2reXv60hBenaKNHzJgWp+7pujl5va8zOtJe0iWskaD8c9vXS2d4XdivDQ6J83OVvUwEu4W7jtiaHM4fuJZupPsZoI8LBplyygWV/FFo3BUr78nHZWpPxeDGZ0N6yRnDZJmNzvQ1G9IUgs4330aILgoPMNqG2xd/LR4Y2ShvfXPOwZWUL0vZ01cOWkW1BbYv1nxqjjG2UdvOxo8n4bIunwk7WqRGCzgb7yrZtqQShTbftQgughtFmvdK9/h1GW7CveSVcbRX4Jbp8be1faO6Ar81wL9sqhK8tdkpTnafmg8zbFu3nrYGSasoJdxtpVKRXqdrz92/t2Y4ow7tSWpwmyahs8cPLmUdQ2WLng3qd4LK57F9Bs7INWC4IjG3H4wd2F4BY2d7YTlGmtvBigeURdLbDkmXWCTqbb2ZwvUZiOhXYXoRjZAtO4mYGRls1PEtFaHOzuPbDxlbOIm2MbHTjoPsobbTyMr82z+YPaeWVHIw2Obgnos9X/SE2W/wdiLXxUNmmsZtJutvD9bxlE8ImbMImbMImbMImbMImbKzivwADAFNlFw6GmEVMAAAAAElFTkSuQmCC"

/***/ }),

/***/ "d5Xs":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("XPmg")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("7T3d"),
  /* template */
  __webpack_require__("/2MF"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "e5Dp":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "f9BU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "fIO6":
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("SVoq"),
  /* template */
  __webpack_require__("0J3u"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "hWsb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "hfPt":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "hr+V":
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("bFWX"),
  /* template */
  __webpack_require__("LFSv"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "kkKu":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("yHmx")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("ZpGl"),
  /* template */
  __webpack_require__("vOAM"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "kmno":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "lmfZ":
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("NtoT"),
  /* template */
  __webpack_require__("Ywb3"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "mNHD":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "news"
  }, [_c('h1', [_vm._v("Новости")]), _vm._v(" "), _vm._l((_vm.news), function(item, index) {
    return _c('NewsItem', {
      key: index,
      attrs: {
        "item": item
      }
    })
  })], 2)
},staticRenderFns: []}

/***/ }),

/***/ "nkRk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "nte9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'cardError'
});

/***/ }),

/***/ "oiih":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/svg-baker-runtime/browser-symbol.js
var browser_symbol = __webpack_require__("Wc9H");
var browser_symbol_default = /*#__PURE__*/__webpack_require__.n(browser_symbol);

// EXTERNAL MODULE: ./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js
var browser_sprite_build = __webpack_require__("IaZV");
var browser_sprite_build_default = /*#__PURE__*/__webpack_require__.n(browser_sprite_build);

// CONCATENATED MODULE: ./src/assets/svg/newspaper.svg


var symbol = new browser_symbol_default.a({
  "id": "newspaper",
  "use": "newspaper-usage",
  "viewBox": "0 0 620.628 620.628",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 620.628 620.628\" id=\"newspaper\">\n<defs>\n\t\t\t<rect id=\"newspaper_SVGID_1_\" y=\"25.182\" width=\"620.628\" height=\"570.265\" />\n\t\t</defs>\n\t\t<clipPath id=\"newspaper_SVGID_2_\">\n\t\t\t<use xlink:href=\"#newspaper_SVGID_1_\" style=\"overflow:visible;\" />\n\t\t</clipPath>\n\t\t<path style=\"clip-path:url(#newspaper_SVGID_2_);\" d=\"M500.077,191.289c-17.919,0-255.353,0-255.353,0\n\t\t\ts-13.596-1.896-13.188-13.198c0.194-6.366,3.717-13.155,13.188-13.155h255.921c0,0,17.985-1.437,17.768,13.165\n\t\t\tC518.413,183.472,517.996,191.289,500.077,191.289L500.077,191.289z M500.077,257.742c-17.919,0-255.353,0-255.353,0\n\t\t\ts-13.596-1.882-13.188-13.193c0.194-6.371,3.717-13.165,13.188-13.165h255.921c0,0,17.985-1.437,17.768,13.184\n\t\t\tC518.413,249.915,517.996,257.742,500.077,257.742L500.077,257.742z M497.877,324.488c-17.899,0-255.371,0-255.371,0\n\t\t\ts-13.577-1.877-13.179-13.193c0.223-6.372,3.726-13.165,13.179-13.165h255.94c0,0,17.976-1.437,17.768,13.183\n\t\t\tC516.214,316.676,515.815,324.488,497.877,324.488L497.877,324.488z M497.877,388.75c-17.899,0-255.371,0-255.371,0\n\t\t\ts-13.577-1.896-13.179-13.178c0.223-6.372,3.726-13.179,13.179-13.179h255.94c0,0,17.976-1.441,17.768,13.179\n\t\t\tC516.214,380.919,515.815,388.75,497.877,388.75L497.877,388.75z M497.877,455.743c-17.899,0-255.371,0-255.371,0\n\t\t\ts-13.577-1.849-13.179-13.179c0.223-6.371,3.726-13.159,13.179-13.159h255.94c0,0,17.976-1.432,17.768,13.169\n\t\t\tC516.214,447.931,515.815,455.743,497.877,455.743L497.877,455.743z M577.65,25.182H170.26c-23.788,0-42.982,19.341-42.982,42.991\n\t\t\tv38.337h0.242v346.939c0,0,2.484,19.047-6.912,39.46c-0.981,2.199-2.186,4.438-3.494,6.675c-0.156,0.246-0.232,0.493-0.398,0.739\n\t\t\tc-0.038,0.038-0.071,0.038-0.128,0.066c-5.784,9.452-14.814,18.535-29.164,24.148c10.173-22.783,10.33-41.262,10.33-68.055\n\t\t\tc-0.157-19.778-0.157-215.808-0.157-318.127c-13.027-0.147-28.505-0.147-45.841-0.284C9.32,137.849,1.398,173.308,0,189.734\n\t\t\tv307.802c0,0,0.194,15.938,3.096,27.362c3.963,13.861,10.624,27.248,20.574,41.773c15.748,23.124,45.627,27.912,53.027,28.774\n\t\t\th508.226c4.513-0.237,9.965-1.015,14.316-3.081c12.762-7.424,21.389-21.143,21.389-37.005V68.173\n\t\t\tC620.638,44.522,601.43,25.182,577.65,25.182L577.65,25.182z\" />\n</symbol>"
});
var result = browser_sprite_build_default.a.add(symbol);
/* harmony default export */ var newspaper = (symbol);
// CONCATENATED MODULE: ./src/assets/svg/drawer.svg


var drawer_symbol = new browser_symbol_default.a({
  "id": "drawer",
  "use": "drawer-usage",
  "viewBox": "0 0 512 512",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 512 512\" id=\"drawer\">\n  <path d=\"M449.247,0l33.622,285.779l-37.739,4.44L415.104,35H96.896L66.87,290.221l-37.74-4.44L62.75,0H449.247z M128,64h256v32H128\n\t\tV64z M128,128h256v32H128V128z M128,192h256v32H128V192z M128,256h256v32H128V256z M496,320H16c-8.8,0-13.723,6.83-10.94,15.18\n\t\tl53.88,161.643C61.723,505.17,71.2,512,80,512h352c8.8,0,18.275-6.83,21.06-15.179l53.882-161.645\n\t\tC509.724,326.83,504.8,320,496,320z M320,384H192v-32h128V384z\" />\n</symbol>"
});
var drawer_result = browser_sprite_build_default.a.add(drawer_symbol);
/* harmony default export */ var drawer = (drawer_symbol);
// CONCATENATED MODULE: ./src/assets/svg/warehouse.svg


var warehouse_symbol = new browser_symbol_default.a({
  "id": "warehouse",
  "use": "warehouse-usage",
  "viewBox": "0 0 490 490",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 490 490\" id=\"warehouse\">\n<g>\n\t<path d=\"M485.574,155.527L249.263,22.489c-2.647-1.49-5.878-1.49-8.525,0L4.426,155.527c-2.734,1.54-4.427,4.435-4.426,7.573\n\t\tv302.912c0,1.445,1.171,2.616,2.615,2.616h52.142c1.444,0,2.615-1.171,2.615-2.616V208.937h375.255v257.076\n\t\tc0,1.445,1.171,2.616,2.615,2.616h52.142c1.444,0,2.616-1.171,2.616-2.616V163.098C490,159.961,488.309,157.067,485.574,155.527z\" />\n\t<g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path d=\"M391.952,387.449H328.15c-4.799,0-8.688,3.89-8.688,8.688v63.804c0,4.799,3.89,8.688,8.688,8.688h63.802\n\t\t\t\t\tc4.799,0,8.689-3.889,8.689-8.688v-63.804C400.641,391.338,396.751,387.449,391.952,387.449z\" />\n\t\t\t\t<path d=\"M276.9,387.449h-63.802c-4.799,0-8.689,3.89-8.689,8.688v63.804c0,4.799,3.89,8.688,8.689,8.688H276.9\n\t\t\t\t\tc4.799,0,8.688-3.889,8.688-8.688v-63.804C285.589,391.338,281.699,387.449,276.9,387.449z\" />\n\t\t\t</g>\n\t\t\t<path d=\"M161.849,387.449H98.047c-4.798,0-8.688,3.89-8.688,8.688v63.804c0,4.799,3.891,8.688,8.688,8.688h63.802\n\t\t\t\tc4.798,0,8.688-3.889,8.688-8.688v-63.804C170.537,391.338,166.646,387.449,161.849,387.449z\" />\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<path d=\"M391.952,270.065H328.15c-4.799,0-8.688,3.89-8.688,8.688v63.804c0,4.798,3.89,8.688,8.688,8.688h63.802\n\t\t\t\t\tc4.799,0,8.689-3.89,8.689-8.688v-63.804C400.641,273.954,396.751,270.065,391.952,270.065z\" />\n\t\t\t\t<path d=\"M276.9,270.065h-63.802c-4.799,0-8.689,3.89-8.689,8.688v63.804c0,4.798,3.89,8.688,8.689,8.688H276.9\n\t\t\t\t\tc4.799,0,8.688-3.89,8.688-8.688v-63.804C285.589,273.954,281.699,270.065,276.9,270.065z\" />\n\t\t\t</g>\n\t\t\t<path d=\"M161.849,270.065H98.047c-4.798,0-8.688,3.89-8.688,8.688v63.804c0,4.798,3.891,8.688,8.688,8.688h63.802\n\t\t\t\tc4.798,0,8.688-3.89,8.688-8.688v-63.804C170.537,273.954,166.646,270.065,161.849,270.065z\" />\n\t\t</g>\n\t</g>\n</g>\n</symbol>"
});
var warehouse_result = browser_sprite_build_default.a.add(warehouse_symbol);
/* harmony default export */ var warehouse = (warehouse_symbol);
// CONCATENATED MODULE: ./src/assets/svg/request.svg


var request_symbol = new browser_symbol_default.a({
  "id": "request",
  "use": "request-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" id=\"request\"><path d=\"M16.67,4.76h-1.9a4.76,4.76,0,1,0-9.52,0H3.33a1.9,1.9,0,0,0-1.9,1.9V18.1A1.91,1.91,0,0,0,3.33,20H16.67a1.91,1.91,0,0,0,1.9-1.9V6.67A1.91,1.91,0,0,0,16.67,4.76ZM10,1.9a2.85,2.85,0,0,1,2.86,2.86H7.14A2.85,2.85,0,0,1,10,1.9Zm0,9.52A4.76,4.76,0,0,1,5.24,6.67h1.9a2.86,2.86,0,0,0,5.71,0h1.9A4.76,4.76,0,0,1,10,11.43Z\" /></symbol>"
});
var request_result = browser_sprite_build_default.a.add(request_symbol);
/* harmony default export */ var request = (request_symbol);
// CONCATENATED MODULE: ./src/assets/svg/order.svg


var order_symbol = new browser_symbol_default.a({
  "id": "order",
  "use": "order-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" id=\"order\"><path d=\"M17,2H12.82A3,3,0,0,0,7.18,2H3A2,2,0,0,0,1,4V18a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V4A2,2,0,0,0,17,2ZM10,2A1,1,0,1,1,9,3,1,1,0,0,1,10,2ZM8,16,4,12l1.41-1.41L8,13.17l6.59-6.59L16,8Z\" /></symbol>"
});
var order_result = browser_sprite_build_default.a.add(order_symbol);
/* harmony default export */ var order = (order_symbol);
// CONCATENATED MODULE: ./src/assets/svg/settings.svg


var settings_symbol = new browser_symbol_default.a({
  "id": "settings",
  "use": "settings-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" id=\"settings\"><path d=\"M17.43,11a7.79,7.79,0,0,0,.07-1,7.79,7.79,0,0,0-.07-1l2.11-1.65a.5.5,0,0,0,.12-.64l-2-3.46a.5.5,0,0,0-.61-.22l-2.49,1a7.31,7.31,0,0,0-1.69-1L12.49.42A.49.49,0,0,0,12,0H8a.49.49,0,0,0-.49.42L7.13,3.07a7.68,7.68,0,0,0-1.69,1L3,3.05a.49.49,0,0,0-.61.22l-2,3.46a.49.49,0,0,0,.12.64L2.57,9a7.93,7.93,0,0,0-.07,1,7.93,7.93,0,0,0,.07,1L.46,12.63a.5.5,0,0,0-.12.64l2,3.46a.5.5,0,0,0,.61.22l2.49-1a7.31,7.31,0,0,0,1.69,1l.38,2.65A.49.49,0,0,0,8,20h4a.49.49,0,0,0,.49-.42l.38-2.65a7.68,7.68,0,0,0,1.69-1l2.49,1a.49.49,0,0,0,.61-.22l2-3.46a.5.5,0,0,0-.12-.64ZM10,13.5A3.5,3.5,0,1,1,13.5,10,3.5,3.5,0,0,1,10,13.5Z\" /></symbol>"
});
var settings_result = browser_sprite_build_default.a.add(settings_symbol);
/* harmony default export */ var settings = (settings_symbol);
// CONCATENATED MODULE: ./src/assets/svg/bricks.svg


var bricks_symbol = new browser_symbol_default.a({
  "id": "bricks",
  "use": "bricks-usage",
  "viewBox": "0 0 174.898 174.898",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 174.898 174.898\" id=\"bricks\">\r\n<path d=\"M59.395,32.475H0v-20.98C0,5.156,5.157,0,11.495,0h47.9V32.475z M133.79,32.475V0H74.395v32.475H133.79z M148.79,0v32.475\r\n\th26.108v-20.98C174.898,5.156,169.742,0,163.405,0H148.79z M174.898,79.949V47.475h-59.394v32.475H174.898z M100.504,79.949V47.475\r\n\tH41.11v32.475H100.504z M0,47.475v32.475H26.11V47.475H0z M0,94.949v32.475h59.395V94.949H0z M133.79,127.424V94.949H74.395v32.475\r\n\tH133.79z M174.898,127.424V94.949H148.79v32.475H174.898z M163.405,174.898c6.337,0,11.493-5.156,11.493-11.494v-20.98h-59.394\r\n\tv32.475H163.405z M100.504,174.898v-32.475H41.11v32.475H100.504z M26.11,174.898v-32.475H0v20.98\r\n\tc0,6.338,5.156,11.494,11.494,11.494H26.11z\" />\r\n</symbol>"
});
var bricks_result = browser_sprite_build_default.a.add(bricks_symbol);
/* harmony default export */ var bricks = (bricks_symbol);
// CONCATENATED MODULE: ./src/assets/svg/booking_full.svg


var booking_full_symbol = new browser_symbol_default.a({
  "id": "booking_full",
  "use": "booking_full-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" id=\"booking_full\">\n<style type=\"text/css\">\n\t#booking_full .st0{fill:#FFFFFF;}\n</style>\n<g>\n\t<path class=\"st0\" d=\"M10,0L1.8,3.6v5.5c0,1.6,0.4,3.2,1,4.6c1.4,3.1,4,5.5,7.2,6.3c4.7-1.1,8.2-5.9,8.2-10.9V3.6L10,0z\" />\n</g>\n<path d=\"M10,0L1.8,3.6v5.5c0,5,3.5,9.8,8.2,10.9c4.7-1.1,8.2-5.9,8.2-10.9V3.6L10,0z M16.4,10C16.4,10,16.4,10,16.4,10\n\tc-0.5,3.8-3,7.1-6.4,8.1V2l6.4,2.8V10z\" />\n</symbol>"
});
var booking_full_result = browser_sprite_build_default.a.add(booking_full_symbol);
/* harmony default export */ var booking_full = (booking_full_symbol);
// CONCATENATED MODULE: ./src/assets/svg/booking_fail.svg


var booking_fail_symbol = new browser_symbol_default.a({
  "id": "booking_fail",
  "use": "booking_fail-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" id=\"booking_fail\">\n<style type=\"text/css\">\n\t#booking_fail .st0{fill:#FFFFFF;}\n</style>\n<g>\n\t<path class=\"st0\" d=\"M10,0L1.8,3.6v5.5c0,1.6,0.4,3.2,1,4.6c1.4,3.1,4,5.5,7.2,6.3c4.7-1.1,8.2-5.9,8.2-10.9V3.6L10,0z\" />\n</g>\n<g>\n\t<path d=\"M6.6,7.1L10,0L1.8,3.6v5.5c0,3.9,2.1,7.6,5.2,9.6l2.5-5.4L6.6,7.1z\" />\n\t<path d=\"M13,1.3l-0.6,1.4L12.2,3l4.2,1.8V10c0,0,0,0,0,0c-0.4,3.3-2.4,6.2-5.2,7.6L11,18l-0.8,1.8L10.1,20\n\t\tc4.7-1.2,8.1-5.9,8.1-10.9V3.6L13,1.3z\" />\n</g>\n</symbol>"
});
var booking_fail_result = browser_sprite_build_default.a.add(booking_fail_symbol);
/* harmony default export */ var booking_fail = (booking_fail_symbol);
// CONCATENATED MODULE: ./src/assets/svg/booking_half.svg


var booking_half_symbol = new browser_symbol_default.a({
  "id": "booking_half",
  "use": "booking_half-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" id=\"booking_half\">\n<style type=\"text/css\">\n\t#booking_half .st0{fill:#FFFFFF;}\n\t#booking_half .st1{fill:none;}\n</style>\n<g>\n\t<path class=\"st0\" d=\"M10,0L1.8,3.6v5.5c0,1.6,0.4,3.2,1,4.6c1.4,3.1,4,5.5,7.2,6.3c4.7-1.1,8.2-5.9,8.2-10.9V3.6L10,0z\" />\n</g>\n<g>\n\t<polygon class=\"st1\" points=\"10.1,2.1 10,2.1 10,3.9 11.7,2.7 \t\" />\n\t<polygon class=\"st1\" points=\"14.8,4.1 10,7.3 10,9 16.4,4.8 16.4,4.8 \t\" />\n\t<polygon class=\"st1\" points=\"13.3,3.4 10,5.6 10,7.3 14.8,4.1 \t\" />\n\t<polygon class=\"st1\" points=\"11.7,2.7 10,3.9 10,5.6 13.3,3.4 \t\" />\n\t<polygon class=\"st1\" points=\"10,2 10,2.1 10.1,2.1 \t\" />\n\t<path class=\"st1\" d=\"M10,9v9.1c3.4-1,5.9-4.4,6.4-8.1c0,0,0,0,0,0V4.8l0,0L10,9L10,9z\" />\n\t<polygon points=\"14.8,4.1 16.6,2.9 15.1,2.3 13.3,3.4 \t\" />\n\t<polygon points=\"10,0 1.8,3.6 1.8,5.8 10.4,0.2 \t\" />\n\t<polygon points=\"7,11 10,9 10,9 \t\" />\n\t<polygon points=\"16.4,4.8 16.4,4.8 18.2,3.6 18.2,3.6 \t\" />\n\t<path d=\"M10,5.6l-8,5.3c0.1,0.5,0.2,1,0.3,1.5l7.7-5V5.6z\" />\n\t<polygon points=\"11.7,2.7 13.5,1.6 12,0.9 10.1,2.1 \t\" />\n\t<path d=\"M10,2.1L1.8,7.5v1.6c0,0,0,0.1,0,0.1L10,3.9V2.1z\" />\n\t<polygon points=\"2.8,13.7 2.8,13.7 7,11 \t\" />\n\t<path d=\"M16.4,10C16.4,10,16.4,10,16.4,10c-0.5,3.8-3,7.1-6.4,8.1V9l-3,2l-4.2,2.7c1.4,3.1,4,5.5,7.2,6.3c4.7-1.1,8.2-5.9,8.2-10.9\n\t\tV3.6l-1.8,1.2V10z\" />\n</g>\n</symbol>"
});
var booking_half_result = browser_sprite_build_default.a.add(booking_half_symbol);
/* harmony default export */ var booking_half = (booking_half_symbol);
// CONCATENATED MODULE: ./src/assets/svg/booking_hot.svg


var booking_hot_symbol = new browser_symbol_default.a({
  "id": "booking_hot",
  "use": "booking_hot-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" id=\"booking_hot\">\n<style type=\"text/css\">\n\t#booking_hot .st0{fill:#FFFFFF;}\n\t#booking_hot .st1{fill:#D8362A;}\n</style>\n<g>\n\t<path class=\"st0\" d=\"M10,0L1.8,3.6v5.5c0,1.6,0.4,3.2,1,4.6c1.4,3.1,4,5.5,7.2,6.3c4.7-1.1,8.2-5.9,8.2-10.9V3.6L10,0z\" />\n</g>\n<g>\n\t<path class=\"st1\" fill=\"#D8362A\" d=\"M7.9,12.6c0,1.1,0.9,1.9,2,1.9c1.6,0,2.9-1.3,2.9-2.9c0-0.9-0.1-1.7-0.4-2.5c-0.6,0.8-1.7,1.4-2.8,1.6\n\t\tC8.5,10.9,7.9,11.6,7.9,12.6z\" />\n\t<path class=\"st1\" fill=\"#D8362A\" d=\"M10,0L1.8,3.6v5.5c0,1.6,0.4,3.2,1,4.6c1.4,3.1,4,5.5,7.2,6.3c4.7-1.1,8.2-5.9,8.2-10.9V3.6L10,0z M10,16.3\n\t\tc-2.7,0-4.9-2.2-4.9-4.9c0-2.1,0.7-4,2-5.4l0,0.2c0,1.3,1,2.3,2.2,2.3c1.3,0,2.1-1,2.1-2.3c0-1.3-0.5-2.9-0.5-2.9\n\t\tc2.4,1.9,4,4.9,4,8.2C14.9,14.2,12.7,16.3,10,16.3z\" />\n</g>\n</symbol>"
});
var booking_hot_result = browser_sprite_build_default.a.add(booking_hot_symbol);
/* harmony default export */ var booking_hot = (booking_hot_symbol);
// CONCATENATED MODULE: ./src/assets/svg/in_work.svg


var in_work_symbol = new browser_symbol_default.a({
  "id": "in_work",
  "use": "in_work-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" id=\"in_work\">\n<path d=\"M8.9,0v4.4h2.2V2.3c3.8,0.5,6.7,3.8,6.7,7.7c0,4.3-3.5,7.8-7.8,7.8S2.2,14.3,2.2,10c0-1.9,0.7-3.6,1.8-4.9l6,6l1.6-1.6L4,2\n\tv0c-2.4,1.8-4,4.7-4,8c0,5.5,4.5,10,10,10c5.5,0,10-4.5,10-10S15.5,0,10,0H8.9z\" />\n</symbol>"
});
var in_work_result = browser_sprite_build_default.a.add(in_work_symbol);
/* harmony default export */ var in_work = (in_work_symbol);
// CONCATENATED MODULE: ./src/assets/svg/in_production.svg


var in_production_symbol = new browser_symbol_default.a({
  "id": "in_production",
  "use": "in_production-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" id=\"in_production\">\n<path d=\"M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0z M8,15l-5-5l1.4-1.4L8,12.2l7.6-7.6L17,6L8,15z\" />\n</symbol>"
});
var in_production_result = browser_sprite_build_default.a.add(in_production_symbol);
/* harmony default export */ var in_production = (in_production_symbol);
// CONCATENATED MODULE: ./src/assets/svg/in_design.svg


var in_design_symbol = new browser_symbol_default.a({
  "id": "in_design",
  "use": "in_design-usage",
  "viewBox": "0 0 20 20",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 20 20\" id=\"in_design\">\n<g>\n\t<path d=\"M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10c5.5,0,10-4.5,10-10S15.5,0,10,0z M10,18c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8\n\t\tS14.4,18,10,18z\" />\n\t<path d=\"M10.5,5H9v6l5.3,3.1l0.8-1.2l-4.5-2.7V5z\" />\n</g>\n</symbol>"
});
var in_design_result = browser_sprite_build_default.a.add(in_design_symbol);
/* harmony default export */ var in_design = (in_design_symbol);
// CONCATENATED MODULE: ./src/constants.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isProduction; });
/* unused harmony export MIN_PRODUCTS_NUMBER_DEFAULT */
/* unused harmony export GRID_BREAKPOINTS */
/* unused harmony export REQUEST_CARD_ACTIONS */
/* unused harmony export REQUEST_CARD_ACTIONS_MOBILE_POSITION */
/* unused harmony export REQUEST_CARD_ACTIONS_MOBILE_PERSON */
/* unused harmony export ORDER_CARD_ACTIONS */
/* unused harmony export ORDER_CARD_ACTIONS_MOBILE_POSITION */
/* unused harmony export BOOKING_STATUS_TYPES */
/* unused harmony export ARR_PROVIDER */
/* unused harmony export STORE_INNER_TEXT */
/* unused harmony export NO_NAME_DEFAULT_STRING */
/* unused harmony export WAREHOUSE_TABS */
/* unused harmony export BOOKINGICON */
/* unused harmony export ORDER_STATUS */
/* unused harmony export ORDER_PAY_STATUS */
/* unused harmony export MAIN_MENU_LIST */
/* unused harmony export PRIVILEGES */
/* unused harmony export SUBSCRIPTIONS */
/* unused harmony export SORTING_TYPES */
/* unused harmony export SORTING_DIRECTONS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COOKIES_NAMES; });
/* unused harmony export PRELOADER_APPEARENCE_DELAY */
/* unused harmony export MIN_SEARCH_CHARS */
/* unused harmony export FULL_USER_SUBSCRIPTIONS_LIST */
/* unused harmony export FULL_USER_PRIVILEGES_LIST */















var isProduction = "production" === 'production';

var MIN_PRODUCTS_NUMBER_DEFAULT = 20;

var GRID_BREAKPOINTS = {
  xs: 0,
  sm: 780,
  md: 1040,
  lg: 1200,
  xl: 1500
};

var REQUEST_CARD_ACTIONS = [{
  name: 'Подробнее',
  eventName: 'moreInfo'
}, {
  name: 'Забронировать',
  eventName: 'setBooking'
}, {
  name: 'Снять бронь',
  eventName: 'deleteBooking'
}, {
  name: 'Посмотреть комплектующие',
  eventName: 'show_parts'
}, {
  name: 'Сохранить КП',
  eventName: 'save_CP'
}, {
  name: 'Удалить',
  eventName: 'deleteRequest'
}];
var REQUEST_CARD_ACTIONS_MOBILE_POSITION = [{
  name: 'Забронировать',
  eventName: 'setBooking'
}, {
  name: 'Снять бронь',
  eventName: 'removeBooking'
}, {
  name: 'Редактировать',
  eventName: 'editPosition'
}, {
  name: 'Удалить',
  eventName: 'deletePosition'
}];
var REQUEST_CARD_ACTIONS_MOBILE_PERSON = [{
  name: 'Редактировать',
  eventName: 'editPerson'
}, {
  name: 'Удалить',
  eventName: 'deletePerson'
}];

var ORDER_CARD_ACTIONS = [{
  name: 'Подробнее',
  eventName: 'moreInfo'
}, {
  name: 'Посмотреть комплектующие',
  eventName: 'showAccessories'
}, {
  name: 'Сохранить КП',
  eventName: 'saveKP'
}, {
  name: 'Удалить',
  eventName: 'remove'
}];
var ORDER_CARD_ACTIONS_MOBILE_POSITION = [{
  name: 'График прохождения',
  eventName: 'showGraf'
}];

var BOOKING_STATUS_TYPES = {
  NOT_NEEDED: 0,
  NOT_BOOKED: 1,
  FULL: 2,
  HOT: 3,
  PARTIAL: 4,
  EXPIRED: 5
};

var ARR_PROVIDER = [{
  id: 10879,
  name: 'ООО "ПОНИ"'
}, {
  id: 12069,
  name: 'OOO "ПОНИпринт"'
}];

var STORE_INNER_TEXT = {
  blocks: {
    available: 'Свободно, шт -',
    booking: 'Бронь, шт -',
    stock: 'На складе, шт -',
    next_income: 'Следующая поставка -',
    income_size: 'Планируемое количество, шт -'
  },
  materials: {
    color: 'Цвет -',
    available: 'Свободно, м -',
    booking: 'Бронь, м -',
    stock: 'На складе, м -',
    next_income: 'Следующая поставка -',
    income_size: 'Планируемое количество, м -',
    format_1: '15х21 -',
    format_2: '20х26 -',
    format_3: '8,5х15 -'
  },
  products: {
    color: 'Цвет -',
    available: 'Свободно, шт -',
    booking: 'Бронь, шт -',
    stock: 'На складе, шт -'
  },
  pack: {
    color: 'Цвет -',
    available: 'Свободно, шт -',
    booking: 'Бронь, шт -',
    stock: 'На складе, шт -'
  }
};

var NO_NAME_DEFAULT_STRING = 'Нет';

var WAREHOUSE_TABS = [{
  name: 'Блоки Freestyle',
  id: 'blocks'
}, {
  name: 'Материалы Freestyle',
  id: 'materials'
}, {
  name: 'Изделия Complete',
  id: 'products'
}, {
  name: 'Упаковка',
  id: 'pack'
}];

var BOOKINGICON = {
  0: '',
  1: '',
  2: booking_full,
  3: booking_hot,
  4: booking_half,
  5: booking_fail
};
var ORDER_STATUS = {
  1: {
    icon: in_design,
    hint: 'в оформлении'
  },
  2: {
    icon: in_work,
    hint: 'в работе'
  },
  3: {
    icon: in_production,
    hint: 'в производстве'
  },
  4: {
    icon: in_production,
    hint: 'в отгрузке'
  }
};
var ORDER_PAY_STATUS = {
  1: in_design,
  2: in_work,
  3: in_production
};

var MAIN_MENU_LIST = [{
  name: 'Новости',
  icon: newspaper,
  link: '/news',
  id: 'news',
  available: 'news'
}, {
  name: 'Файловый архив',
  icon: drawer,
  link: '/files',
  id: 'files',
  available: 'files'
}, {
  name: 'Склад',
  icon: warehouse,
  link: '/store',
  id: 'store',
  available: 'warehouse'
}, {
  name: 'Запросы',
  icon: request,
  link: '/requests',
  id: 'requests'
}, {
  name: 'Заказы',
  icon: order,
  link: '/orders',
  id: 'orders'
}, {
  name: 'Настройки пользователей',
  icon: settings,
  link: '/user_settings',
  id: 'users',
  available: 'usersCreation'
}, {
  name: 'Конструктор',
  icon: bricks,
  link: '/constructor',
  id: 'constructor'
}];

var PRIVILEGES = {
  WAREHOUSE: 'sklad',
  FILES: 'files',
  ORDERS_VIEW: 'prosmotr_zakazov',
  REQUESTS_CREATION: 'vvod_zaprosov',
  BOOKING: 'bron',
  BPZ_APPROVAL: 'podpis_bpz',
  MODEL_APPROVAL: 'podpis_maket',
  NEWS: 'news',
  CONTACT: 'pramaja_svaz',
  POLYGRAPH: 'poligraf',
  FORUM: 'forum',
  USERS: 'users'
};

var SUBSCRIPTIONS = {
  NEWS: 'news',
  ORDERS_EMAIL: 'orders_email',
  ORDERS_SMS: 'orders_sms',
  ALL: 'all'
};

var SORTING_TYPES = {
  ALPHABETIC: 'name',
  SIZE: 'size',
  DATE: 'date',
  NUMBER: 'number'
};

var SORTING_DIRECTONS = {
  TOP_TO_BOTTOM: 'descending',
  BOTTOM_TO_TOP: 'ascending'
};

var COOKIES_NAMES = {
  ACCESS: 'access',
  USER_ID: 'user_id',
  ORG_ID: 'org_id'
};

var PRELOADER_APPEARENCE_DELAY = 500;

var MIN_SEARCH_CHARS = 3;

var FULL_USER_SUBSCRIPTIONS_LIST = [SUBSCRIPTIONS.NEWS, SUBSCRIPTIONS.ORDERS_EMAIL, SUBSCRIPTIONS.ORDERS_SMS, SUBSCRIPTIONS.ALL];

var FULL_USER_PRIVILEGES_LIST = [PRIVILEGES.WAREHOUSE, PRIVILEGES.FILES, PRIVILEGES.REQUESTS_CREATION, PRIVILEGES.BOOKING, PRIVILEGES.ORDERS_VIEW, PRIVILEGES.BPZ_APPROVAL, PRIVILEGES.NEWS, PRIVILEGES.CONTACT];

/***/ }),

/***/ "pM4p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_img_dummy_png__ = __webpack_require__("d24o");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_img_dummy_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_img_dummy_png__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'newsItemComponent',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      dummyImage: __WEBPACK_IMPORTED_MODULE_0__assets_img_dummy_png___default.a
    };
  }
});

/***/ }),

/***/ "pT+m":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cardError"
  }, [_vm._v("\n  " + _vm._s(_vm.props.message) + "\n  "), _c('div', {
    staticClass: "cardError-warn"
  })])
},staticRenderFns: []}

/***/ }),

/***/ "qCER":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "rFiC":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "tBur":
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("qCER"),
  /* template */
  __webpack_require__("73Sm"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ "tdJa":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "input",
    class: {
      '_withIcon': _vm.icon
    }
  }, [_c('input', _vm._g({
    staticClass: "input-field",
    attrs: {
      "type": _vm.type,
      "id": _vm.id,
      "placeholder": _vm.placeholder,
      "name": _vm.name,
      "disabled": _vm.disabled
    },
    domProps: {
      "value": _vm.value
    }
  }, Object.assign({}, _vm.$listeners,
    {blur: function($event) {
      _vm.$emit('blur', $event)
    },
    focus: function focus($event) {
      _vm.$emit('focus', $event)
    },
    input: function($event) {
      if (_vm.max || _vm.min) {
        if ($event.target.value > _vm.max) {
          _vm.$emit('input', _vm.max)
        } else if ($event.target.value < _vm.min) {
          _vm.$emit('input', _vm.min)
        } else {
          _vm.$emit('input', $event.target.value)
        }
      } else {
        _vm.$emit('input', $event.target.value)
      }
    }}))), _vm._v(" "), (_vm.icon) ? _c('div', {
    staticClass: "input-icon"
  }, [_c('svg', {
    staticClass: "icon-svg"
  }, [_c('use', {
    attrs: {
      "xlink:href": ("#" + (_vm.icon.id))
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.hasErrors) ? _c('div', {
    staticClass: "input-hint"
  }, [_vm._v("\n    " + _vm._s(_vm.error) + "\n  ")]) : _vm._e()])
},staticRenderFns: []}

/***/ }),

/***/ "vOAM":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', _vm._g(_vm._b({
    staticClass: "link",
    class: [_vm.data.class].concat(_vm.data.staticClass),
    attrs: {
      "href": _vm.props.href || '#'
    }
  }, 'a', _vm.data.attrs, false), _vm.listeners), [_c('span', [_vm._t("default")], 2)])
},staticRenderFns: []}

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "yHmx":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ys8O":
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "user-settings"
  }, [_c('h2', [_vm._v("User Settings")])])
}]}

/***/ }),

/***/ "zSHs":
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__("RoyZ")

var Component = __webpack_require__("VU/8")(
  /* script */
  __webpack_require__("S/qm"),
  /* template */
  __webpack_require__("mNHD"),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ })

},["NHnr"]);
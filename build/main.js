require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("axios");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(17);
var resolve = path.resolve;
module.exports = {
  /*
  ** Headers of the page
  */
  router: {
    middleware: 'auth'
  },
  head: {
    title: '智慧销售分析系统',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{
      async: 'async',
      defer: 'defer',
      type: 'text/javascript',
      src: '/libs/echarts.min.js'
    }]
  },
  /*
  ** Global CSS
  */
  css: ['@assets/css/main.css', '@assets/icons/iconfont.css', 'element-ui/lib/theme-chalk/index.css', 'video.js/dist/video-js.css'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend: function extend(config, ctx) {
      config.resolve.alias['@components'] = path.join(__dirname, 'components');
      config.resolve.alias['@plugins'] = path.join(__dirname, 'plugins');
      config.resolve.alias['@assets'] = path.join(__dirname, 'assets');
      config.resolve.alias['@static'] = path.join(__dirname, 'static');
      config.resolve.alias['@store'] = path.join(__dirname, 'store');
      config.resolve.alias['@pages'] = path.join(__dirname, 'pages');
      config.resolve.alias['@js'] = path.join(__dirname, 'js');
      config.resolve.alias['@style'] = path.join(__dirname, 'style');
      config.resolve.alias['@filters'] = path.join(__dirname, 'filters');
      if (ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    }
  },
  plugins: ['@plugins/element-ui', '~/utils/auth', '~theme/index.css', { src: '@plugins/nuxt-video-player-plugin.js', ssr: false }]
};
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var development = __webpack_require__(12);
var production = __webpack_require__(13);

var NODE_ENV = "development" || 'development';
module.exports = NODE_ENV === 'development' ? development : production;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var KoaRouter = __webpack_require__(16);
var RegionsDBAction = __webpack_require__(14);
var StoresDBAction = __webpack_require__(15);

var regionsDBAction = new RegionsDBAction();
var storesDBAction = new StoresDBAction();
var apiRouter = KoaRouter({
  prefix: '/api'
});

apiRouter.get('/regionsAll', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var response;
    return __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regionsDBAction.getAllRegions();

          case 2:
            response = _context.sent;

            ctx.body = { code: 0, datas: response };

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

apiRouter.get('/regions/people-counts', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
    var id, range, groupby, response, response_;
    return __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = ctx.query.id;
            range = ctx.query.range;
            groupby = ctx.query.groupby;
            _context2.next = 5;
            return regionsDBAction.getPeoPleCountById(id, range, groupby);

          case 5:
            response = _context2.sent;
            response_ = Object.assign({}, response, {
              counts: response.peopleCounts && response.peopleCounts.length > 0 ? response.peopleCounts.length : 0
            });

            ctx.body = { code: 0, data: response_ };

          case 8:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

apiRouter.get('/regions/people-counts/all', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
    var range, groupby, response;
    return __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            range = ctx.query.range;
            groupby = ctx.query.groupby;
            _context3.next = 4;
            return regionsDBAction.getAllPeoPleCount(range, groupby);

          case 4:
            response = _context3.sent;

            if (response.length <= 0) {
              ctx.body = { code: 0, datas: [] };
            } else {
              ctx.body = { code: 0, datas: response };
            }

          case 6:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

apiRouter.get('/storesAll', function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
    var id, response;
    return __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = ctx.query.id;
            _context4.next = 3;
            return storesDBAction.getAllStore(id);

          case 3:
            response = _context4.sent;

            if (response.length <= 0) {
              ctx.body = { code: 0, datas: [] };
            } else {
              ctx.body = { code: 0, datas: response };
            }

          case 5:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());

apiRouter.get('/stores/people-counts', function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(ctx, next) {
    var id, sid, range, groupby, response, response_;
    return __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = ctx.query.id;
            sid = ctx.query.sid;
            range = ctx.query.range;
            groupby = ctx.query.groupby;
            _context5.next = 6;
            return storesDBAction.getPeoPleCountByStoreInRegion(id, sid, range, groupby);

          case 6:
            response = _context5.sent;
            response_ = Object.assign({}, response, {
              counts: response.peopleCounts && response.peopleCounts.length > 0 ? response.peopleCounts.length : 0
            });

            ctx.body = { code: 0, data: response_ };

          case 9:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, _this);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());

apiRouter.get('/stores/people-counts/all', function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(ctx, next) {
    var id, range, groupby, response;
    return __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = ctx.query.id;
            range = ctx.query.range;
            groupby = ctx.query.groupby;
            _context6.next = 5;
            return storesDBAction.getAllPeoPleCountInRegion(id, range, groupby);

          case 5:
            response = _context6.sent;

            if (response.length <= 0) {
              ctx.body = { code: 0, datas: [] };
            } else {
              ctx.body = { code: 0, datas: response };
            }

          case 7:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, _this);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());

module.exports = [apiRouter.routes()];

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("kcors");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("koa-compose");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("koa-onerror");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("winston");

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = {
  port: 3000,
  host: '0.0.0.0',
  db: {
    host: 'tdsql-75jy4jvx.sql.tencentcdb.com',
    database: 'face_painting',
    user: 'fp',
    port: 65,
    password: 'MKO--Team--2018',
    multipleStatements: true
  },
  redis: {
    RDS_PORT: 6379,
    RDS_HOST: '193.112.185.85',
    RDS_PWD: 'MKO--Team--2018'
  },
  imgDomin: 'https://fp-1256261446.picgz.myqcloud.com'
};

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = {
  port: 3000,
  host: '0.0.0.0',
  db: {
    host: '10.8.0.14',
    database: 'face_painting',
    user: 'fp',
    port: 3306,
    password: 'MKO--Team--2018',
    multipleStatements: true
  },
  redis: {
    RDS_PORT: 6379,
    RDS_HOST: '10.8.0.6',
    RDS_PWD: 'MKO--Team--2018'
  },
  imgDomin: 'https://fp-1256261446.picgz.myqcloud.com'
};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = __webpack_require__(1);
var domain = 'https://blog.csdn.net/u011127019/phoenix/comment/list/52382277';

var RegionsDBAction = function () {
    function RegionsDBAction() {
        _classCallCheck(this, RegionsDBAction);
    }

    _createClass(RegionsDBAction, [{
        key: 'getAllRegions',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
                return __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return axios.get(domain + '?page=1&tree_type=1').then(function (response) {
                                    if (response.data) {
                                        // return response.data;
                                        return [{
                                            "id": "101",
                                            "titleEN": "TST",
                                            "titleZH": "尖沙咀",
                                            "titleCN": "尖沙咀"
                                        }, {
                                            "id": "102",
                                            "titleEN": "MK",
                                            "titleZH": "旺角",
                                            "titleCN": "旺角"
                                        }];
                                    } else {
                                        return {};
                                    }
                                }).catch(function (error) {
                                    console.log(error);
                                });

                            case 2:
                                return _context.abrupt('return', _context.sent);

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getAllRegions() {
                return _ref.apply(this, arguments);
            }

            return getAllRegions;
        }()
    }, {
        key: 'getPeoPleCountById',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(id, range, groupby) {
                return __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return axios.get(domain + '?page=1&tree_type=1').then(function (response) {
                                    if (response.data) {
                                        // return response.data;
                                        return {
                                            "id": "101",
                                            "titleEN": "TST",
                                            "titleZH": "尖沙咀",
                                            "titleCN": "尖沙咀",
                                            "peopleCounts": [{
                                                "timestamp": "1536019200",
                                                "trackCount": {
                                                    "totalEnter": 300,
                                                    "totalExit": 300
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 200
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 0,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535932800",
                                                "trackCount": {
                                                    "totalEnter": 400,
                                                    "totalExit": 400
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 300
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535846400",
                                                "trackCount": {
                                                    "totalEnter": 500,
                                                    "totalExit": 500
                                                },
                                                "genderCount": {
                                                    "male": 200,
                                                    "female": 300
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 50,
                                                    "type5": 0,
                                                    "unknown": 50
                                                }
                                            }, {
                                                "timestamp": "1535760000",
                                                "trackCount": {
                                                    "totalEnter": 600,
                                                    "totalExit": 600
                                                },
                                                "genderCount": {
                                                    "male": 200,
                                                    "female": 400
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 100,
                                                    "type5": 50,
                                                    "unknown": 50
                                                }
                                            }, {
                                                "timestamp": "1535673600",
                                                "trackCount": {
                                                    "totalEnter": 500,
                                                    "totalExit": 500
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 400
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 0,
                                                    "type4": 100,
                                                    "type5": 100,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535587200",
                                                "trackCount": {
                                                    "totalEnter": 400,
                                                    "totalExit": 400
                                                },
                                                "genderCount": {
                                                    "male": 200,
                                                    "female": 200
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535500800",
                                                "trackCount": {
                                                    "totalEnter": 300,
                                                    "totalExit": 300
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 200
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 0,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }]
                                        };
                                    } else {
                                        return {};
                                    }
                                }).catch(function (error) {
                                    console.log(error);
                                });

                            case 2:
                                return _context2.abrupt('return', _context2.sent);

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getPeoPleCountById(_x, _x2, _x3) {
                return _ref2.apply(this, arguments);
            }

            return getPeoPleCountById;
        }()
    }, {
        key: 'getAllPeoPleCount',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(range, groupby) {
                return __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return axios.get(domain + '?page=1&tree_type=1').then(function (response) {
                                    if (response.data) {
                                        // return response.data;
                                        return [{
                                            "id": "101",
                                            "titleEN": "TST",
                                            "titleZH": "尖沙咀",
                                            "titleCN": "尖沙咀",
                                            "peopleCounts": [{
                                                "timestamp": "1536019200",
                                                "trackCount": {
                                                    "totalEnter": 320,
                                                    "totalExit": 300
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 200
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 0,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535932800",
                                                "trackCount": {
                                                    "totalEnter": 450,
                                                    "totalExit": 400
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 300
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535846400",
                                                "trackCount": {
                                                    "totalEnter": 500,
                                                    "totalExit": 500
                                                },
                                                "genderCount": {
                                                    "male": 200,
                                                    "female": 300
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 50,
                                                    "type5": 0,
                                                    "unknown": 50
                                                }
                                            }, {
                                                "timestamp": "1535760000",
                                                "trackCount": {
                                                    "totalEnter": 440,
                                                    "totalExit": 600
                                                },
                                                "genderCount": {
                                                    "male": 200,
                                                    "female": 400
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 100,
                                                    "type5": 50,
                                                    "unknown": 50
                                                }
                                            }, {
                                                "timestamp": "1535673600",
                                                "trackCount": {
                                                    "totalEnter": 760,
                                                    "totalExit": 500
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 400
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 0,
                                                    "type4": 100,
                                                    "type5": 100,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535587200",
                                                "trackCount": {
                                                    "totalEnter": 340,
                                                    "totalExit": 400
                                                },
                                                "genderCount": {
                                                    "male": 200,
                                                    "female": 200
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535500800",
                                                "trackCount": {
                                                    "totalEnter": 670,
                                                    "totalExit": 300
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 200
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 0,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }]
                                        }, {
                                            "id": "102",
                                            "titleEN": "MK",
                                            "titleZH": "旺角",
                                            "titleCN": "旺角",
                                            "peopleCounts": [{
                                                "timestamp": "1536019200",
                                                "trackCount": {
                                                    "totalEnter": 300,
                                                    "totalExit": 300
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 200
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 0,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535932800",
                                                "trackCount": {
                                                    "totalEnter": 400,
                                                    "totalExit": 400
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 300
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535846400",
                                                "trackCount": {
                                                    "totalEnter": 500,
                                                    "totalExit": 500
                                                },
                                                "genderCount": {
                                                    "male": 200,
                                                    "female": 300
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 50,
                                                    "type5": 0,
                                                    "unknown": 50
                                                }
                                            }, {
                                                "timestamp": "1535760000",
                                                "trackCount": {
                                                    "totalEnter": 600,
                                                    "totalExit": 600
                                                },
                                                "genderCount": {
                                                    "male": 200,
                                                    "female": 400
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 100,
                                                    "type5": 50,
                                                    "unknown": 50
                                                }
                                            }, {
                                                "timestamp": "1535673600",
                                                "trackCount": {
                                                    "totalEnter": 500,
                                                    "totalExit": 500
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 400
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 0,
                                                    "type4": 100,
                                                    "type5": 100,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535587200",
                                                "trackCount": {
                                                    "totalEnter": 400,
                                                    "totalExit": 400
                                                },
                                                "genderCount": {
                                                    "male": 200,
                                                    "female": 200
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535500800",
                                                "trackCount": {
                                                    "totalEnter": 300,
                                                    "totalExit": 300
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 200
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 0,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }]
                                        }];
                                    } else {
                                        return {};
                                    }
                                }).catch(function (error) {
                                    console.log(error);
                                });

                            case 2:
                                return _context3.abrupt('return', _context3.sent);

                            case 3:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getAllPeoPleCount(_x4, _x5) {
                return _ref3.apply(this, arguments);
            }

            return getAllPeoPleCount;
        }()
    }]);

    return RegionsDBAction;
}();

module.exports = RegionsDBAction;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = __webpack_require__(1);
var domain = 'https://blog.csdn.net/u011127019/phoenix/comment/list/52382277';

var StoresDBAction = function () {
    function StoresDBAction() {
        _classCallCheck(this, StoresDBAction);
    }

    _createClass(StoresDBAction, [{
        key: 'getAllStore',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(id) {
                return __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return axios.get(domain + '?page=1&tree_type=1').then(function (response) {
                                    if (response.data) {
                                        // return response.data;
                                        return [{
                                            "id": "101001",
                                            "titleEN": "TST1",
                                            "titleZH": "尖沙咀1店",
                                            "titleCN": "尖沙咀1店"
                                        }, {
                                            "id": "101002",
                                            "titleEN": "TST2",
                                            "titleZH": "尖沙咀2店",
                                            "titleCN": "尖沙咀2店"
                                        }];
                                    } else {
                                        return {};
                                    }
                                }).catch(function (error) {
                                    console.log(error);
                                });

                            case 2:
                                return _context.abrupt('return', _context.sent);

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getAllStore(_x) {
                return _ref.apply(this, arguments);
            }

            return getAllStore;
        }()
    }, {
        key: 'getPeoPleCountByStoreInRegion',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(id, sid, range, groupby) {
                return __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return axios.get(domain + '?page=1&tree_type=1').then(function (response) {
                                    if (response.data) {
                                        // return response.data;
                                        return {
                                            "id": "101001",
                                            "titleEN": "TST1",
                                            "titleZH": "尖沙咀1店",
                                            "titleCN": "尖沙咀1店",
                                            "peopleCounts": [{
                                                "timestamp": "1536019200",
                                                "trackCount": {
                                                    "totalEnter": 300,
                                                    "totalExit": 300
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 200
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 0,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535932800",
                                                "trackCount": {
                                                    "totalEnter": 400,
                                                    "totalExit": 400
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 300
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535846400",
                                                "trackCount": {
                                                    "totalEnter": 500,
                                                    "totalExit": 500
                                                },
                                                "genderCount": {
                                                    "male": 200,
                                                    "female": 300
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 50,
                                                    "type5": 0,
                                                    "unknown": 50
                                                }
                                            }, {
                                                "timestamp": "1535760000",
                                                "trackCount": {
                                                    "totalEnter": 600,
                                                    "totalExit": 600
                                                },
                                                "genderCount": {
                                                    "male": 200,
                                                    "female": 400
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 100,
                                                    "type5": 50,
                                                    "unknown": 50
                                                }
                                            }, {
                                                "timestamp": "1535673600",
                                                "trackCount": {
                                                    "totalEnter": 500,
                                                    "totalExit": 500
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 400
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 0,
                                                    "type4": 100,
                                                    "type5": 100,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535587200",
                                                "trackCount": {
                                                    "totalEnter": 400,
                                                    "totalExit": 400
                                                },
                                                "genderCount": {
                                                    "male": 200,
                                                    "female": 200
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535500800",
                                                "trackCount": {
                                                    "totalEnter": 300,
                                                    "totalExit": 300
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 200
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 0,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }]
                                        };
                                    } else {
                                        return {};
                                    }
                                }).catch(function (error) {
                                    console.log(error);
                                });

                            case 2:
                                return _context2.abrupt('return', _context2.sent);

                            case 3:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getPeoPleCountByStoreInRegion(_x2, _x3, _x4, _x5) {
                return _ref2.apply(this, arguments);
            }

            return getPeoPleCountByStoreInRegion;
        }()
    }, {
        key: 'getAllPeoPleCountInRegion',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(id, range, groupby) {
                return __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return axios.get(domain + '?page=1&tree_type=1').then(function (response) {
                                    if (response.data) {
                                        // return response.data;
                                        return [{
                                            "id": "101001",
                                            "titleEN": "TST1",
                                            "titleZH": "尖沙咀1店",
                                            "titleCN": "尖沙咀1店",
                                            "peopleCounts": [{
                                                "timestamp": "1536019200",
                                                "trackCount": {
                                                    "totalEnter": 300,
                                                    "totalExit": 300
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 200
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 0,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535932800",
                                                "trackCount": {
                                                    "totalEnter": 400,
                                                    "totalExit": 400
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 300
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535846400",
                                                "trackCount": {
                                                    "totalEnter": 500,
                                                    "totalExit": 500
                                                },
                                                "genderCount": {
                                                    "male": 200,
                                                    "female": 300
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 50,
                                                    "type5": 0,
                                                    "unknown": 50
                                                }
                                            }, {
                                                "timestamp": "1535760000",
                                                "trackCount": {
                                                    "totalEnter": 600,
                                                    "totalExit": 600
                                                },
                                                "genderCount": {
                                                    "male": 200,
                                                    "female": 400
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 100,
                                                    "type5": 50,
                                                    "unknown": 50
                                                }
                                            }, {
                                                "timestamp": "1535673600",
                                                "trackCount": {
                                                    "totalEnter": 500,
                                                    "totalExit": 500
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 400
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 0,
                                                    "type4": 100,
                                                    "type5": 100,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535587200",
                                                "trackCount": {
                                                    "totalEnter": 400,
                                                    "totalExit": 400
                                                },
                                                "genderCount": {
                                                    "male": 200,
                                                    "female": 200
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535500800",
                                                "trackCount": {
                                                    "totalEnter": 300,
                                                    "totalExit": 300
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 200
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 0,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }]
                                        }, {
                                            "id": "101002",
                                            "titleEN": "TST2",
                                            "titleZH": "尖沙咀2店",
                                            "titleCN": "尖沙咀2店",
                                            "peopleCounts": [{
                                                "timestamp": "1536019200",
                                                "trackCount": {
                                                    "totalEnter": 300,
                                                    "totalExit": 300
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 200
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 0,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535932800",
                                                "trackCount": {
                                                    "totalEnter": 400,
                                                    "totalExit": 400
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 300
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535846400",
                                                "trackCount": {
                                                    "totalEnter": 500,
                                                    "totalExit": 500
                                                },
                                                "genderCount": {
                                                    "male": 200,
                                                    "female": 300
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 50,
                                                    "type5": 0,
                                                    "unknown": 50
                                                }
                                            }, {
                                                "timestamp": "1535760000",
                                                "trackCount": {
                                                    "totalEnter": 600,
                                                    "totalExit": 600
                                                },
                                                "genderCount": {
                                                    "male": 200,
                                                    "female": 400
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 100,
                                                    "type5": 50,
                                                    "unknown": 50
                                                }
                                            }, {
                                                "timestamp": "1535673600",
                                                "trackCount": {
                                                    "totalEnter": 500,
                                                    "totalExit": 500
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 400
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 0,
                                                    "type4": 100,
                                                    "type5": 100,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535587200",
                                                "trackCount": {
                                                    "totalEnter": 400,
                                                    "totalExit": 400
                                                },
                                                "genderCount": {
                                                    "male": 200,
                                                    "female": 200
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 100,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }, {
                                                "timestamp": "1535500800",
                                                "trackCount": {
                                                    "totalEnter": 300,
                                                    "totalExit": 300
                                                },
                                                "genderCount": {
                                                    "male": 100,
                                                    "female": 200
                                                },
                                                "ageCount": {
                                                    "type1": 100,
                                                    "type2": 200,
                                                    "type3": 0,
                                                    "type4": 0,
                                                    "type5": 0,
                                                    "unknown": 0
                                                }
                                            }]
                                        }];
                                    } else {
                                        return {};
                                    }
                                }).catch(function (error) {
                                    console.log(error);
                                });

                            case 2:
                                return _context3.abrupt('return', _context3.sent);

                            case 3:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getAllPeoPleCountInRegion(_x6, _x7, _x8) {
                return _ref3.apply(this, arguments);
            }

            return getAllPeoPleCountInRegion;
        }()
    }]);

    return StoresDBAction;
}();

module.exports = StoresDBAction;

/***/ },
/* 16 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator__);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3() {
    var _this = this;

    var app, host, port, config, nuxt, builder;
    return __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            app = new Koa();
            host = process.env.HOST || '127.0.0.1';
            port = process.env.PORT || 3000;

            // Import and Set Nuxt.js options

            config = __webpack_require__(2);

            config.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new Nuxt(config);

            // Build in development

            if (!config.dev) {
              _context3.next = 10;
              break;
            }

            builder = new Builder(nuxt);
            _context3.next = 10;
            return builder.build();

          case 10:
            app.use(cors());
            app.use(KoaBodyparser());
            KoaOnerror(app);
            app.use(KoaCompose(myRouters));
            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                var start, ms;
                return __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return next();

                      case 2:
                        start = new Date();

                        if (ctx.request.method == 'POST') {
                          LOGGER.info('POST Body: ' + JSON.stringify(ctx.request.body) + ' Time: ' + start);
                        }
                        ms = new Date() - start;

                        LOGGER.info(ctx.request.method + ' ' + ctx.request.url + ' ' + ms + 'ms Time: ' + start);

                      case 6:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());
            app.use(function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0__Users_dee_Projects_AIVision_WEB_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return next();

                      case 2:
                        ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                        return _context2.abrupt('return', new Promise(function (resolve, reject) {
                          ctx.res.on('close', resolve);
                          ctx.res.on('finish', resolve);
                          nuxt.render(ctx.req, ctx.res, function (promise) {
                            if (promise === undefined) return;
                            if ('then' in promise) {
                              promise.then(resolve).catch(reject);
                            }
                          });
                        }));

                      case 4:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _callee2, _this);
              }));

              return function (_x3, _x4) {
                return _ref3.apply(this, arguments);
              };
            }());
            app.on('error', function (err) {
              LOGGER.error(err);
            });
            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

          case 19:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

global.CONFIG = __webpack_require__(3);
var winston = __webpack_require__(11);
var transports = [];
transports.push(new winston.transports.File({
  filename: 'output.log',
  level: 'info'
}));
// 目前暂时将日志输出至Console，后期生产环境中建议移除
transports.push(new winston.transports.Console({
  level: 'info'
}));
global.LOGGER = new winston.Logger({
  transports: transports
});
global.DEBUG = !"development" || "development" === 'development';

if (!DEBUG) {
  winston.handleExceptions(new winston.transports.File({ filename: 'error.log' }));
}

var Koa = __webpack_require__(6);
var cors = __webpack_require__(5);
var KoaBodyparser = __webpack_require__(7);
var KoaOnerror = __webpack_require__(9);

var _require = __webpack_require__(10),
    Nuxt = _require.Nuxt,
    Builder = _require.Builder;

var myRouters = __webpack_require__(4);
var KoaCompose = __webpack_require__(8);

process.on('uncaughtException', function (err) {
  if (err.code != "ECONNRESET") {
    console.log(err.stack);
  }
});

start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map
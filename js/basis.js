/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _service = __webpack_require__(1);

	var _service2 = _interopRequireDefault(_service);

	var _cmpt = __webpack_require__(3);

	var _cmpt2 = _interopRequireDefault(_cmpt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 入口文件
	 */
	angular.module("bootstrap", [_service2.default, _cmpt2.default]);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by zhaoky on 2017/4/5.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _data = __webpack_require__(2);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DataExtend = function () {
		function DataExtend() {
			_classCallCheck(this, DataExtend);
		}

		_createClass(DataExtend, [{
			key: "extend",
			value: function extend(destination, source) {
				for (var prop in source) {
					if (!source.hasOwnProperty(prop)) {
						continue;
					}
					destination[prop] = source[prop];
				}
			}
		}]);

		return DataExtend;
	}();

	var ActionEvent = function () {
		_createClass(ActionEvent, null, [{
			key: "$inject",
			get: function get() {
				return ["$window"];
			}
		}]);

		function ActionEvent($window) {
			_classCallCheck(this, ActionEvent);

			var isSupportTouch = "ontouchend" in $window.document,
			    actionEvent = void 0;

			actionEvent = {
				start: isSupportTouch ? "touchstart" : "mousedown",
				move: isSupportTouch ? "touchmove" : "mousemove",
				end: isSupportTouch ? "touchend" : "mouseup",
				wheel: "mousewheel"
			};

			this.event = actionEvent;
		}

		return ActionEvent;
	}();

	var StopIosDropDown = function () {
		function StopIosDropDown() {
			_classCallCheck(this, StopIosDropDown);
		}

		_createClass(StopIosDropDown, [{
			key: "stop",
			value: function stop(actionEvent) {
				document.querySelector("body").addEventListener(actionEvent.event.start, function (ev) {
					if (_isPc() || !_isPc() && ev.target.nodeName == "A") {
						return;
					}
					ev.preventDefault();
				});
			}
		}]);

		return StopIosDropDown;
	}();

	var InitArrow = function () {
		function InitArrow() {
			_classCallCheck(this, InitArrow);
		}

		_createClass(InitArrow, [{
			key: "init",
			value: function init() {
				var page = document.querySelectorAll(".dock-fill"),
				    arrowNode = document.createElement("div");

				arrowNode.classList.add("-arrow");

				page[0].appendChild(arrowNode);
			}
		}, {
			key: "destroy",
			value: function destroy() {
				var arrowNode = document.querySelector(".-arrow");

				arrowNode.parentNode.removeChild(arrowNode);
			}
		}]);

		return InitArrow;
	}();

	function _isPc() {

		return ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"].every(function (i) {
			return navigator.userAgent.indexOf(i) < 0;
		});
	}

	exports.default = angular.module("appServices", []).constant("resumeData", _data2.default).service("actionEvent", ActionEvent).service("stopIosDropDown", StopIosDropDown).service("dataExtend", DataExtend).service("initArrow", InitArrow).name;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = {
		"cn": {
			"header": {
				"langList": [
					"中",
					"英"
				],
				"titleList": [
					{
						"svg": "img/d_home.svg",
						"title": "首页"
					},
					{
						"svg": "img/d_info.svg",
						"title": "关于我"
					},
					{
						"svg": "img/d_skills.svg",
						"title": "技能栈"
					},
					{
						"svg": "img/d_exp.svg",
						"title": "经历"
					},
					{
						"svg": "img/d_works.svg",
						"title": "作品集"
					},
					{
						"svg": "img/d_contact.svg",
						"title": "联系我"
					}
				]
			},
			"footer": {},
			"default": {
				"quote": "生活是一种绵延不绝的渴望，渴望不断上升，变得更伟大而高贵。",
				"desList": [
					"我叫张宏伟",
					"一名前端研发工程师",
					"hongwei1916@163.com"
				]
			},
			"info": {
				"title": "关于我",
				"infoList": [
					{
						"icon": "img/i_age.svg",
						"key": "年龄",
						"value": "23岁"
					},
					{
						"icon": "img/i_edu.svg",
						"key": "学历",
						"value": "本科"
					},
					{
						"icon": "img/i_site.svg",
						"key": "坐标",
						"value": "北京"
					},
					{
						"icon": "img/i_status.svg",
						"key": "状态",
						"value": "离职,"
					}
				],
				"desList": [
					"两年全职前端开发经验",
					"熟悉MV*开发,深谙自动化,模块化开发之道",
					"高效的自学能力,具备独立分析解决问题能力",
					"强烈的自我驱动力,代码强迫症患者"
				]
			},
			"skill": {
				"title": "技能栈",
				"outCircleList": [
					{
						"color": "rgba(121,100,102,0.8)",
						"name": "gulp"
					},
					{
						"color": "rgba(49,65,82,0.8)",
						"name": "Angular"
					},
					{
						"color": "rgba(76,157,160,0.8)",
						"name": "webpack"
					},
					{
						"color": "rgba(66,66,66,0.8)",
						"name": "less"
					},
					{
						"color": "rgba(193,131,106,0.8)",
						"name": "git"
					},
					{
						"color": "rgba(117,148,179,0.8)",
						"name": "Nodejs"
					},
					{
						"color": "rgba(71,83,94,0.8)",
						"name": "ReactNative"
					},
					{
						"color": "rgba(147,147,189,0.8)",
						"name": "React"
					}
				],
				"innerCircleList": [
					{
						"color": "rgba(179,164,140,0.8)",
						"name": "ES6"
					},
					{
						"color": "rgba(171,209,220,0.8)",
						"name": "Vue"
					},
					{
						"color": "rgba(238,215,163,0.8)",
						"name": "JQuery"
					},
					{
						"color": "rgba(207,184,178,0.8)",
						"name": "Bootstrap"
					}
				],
				"desList": [
					"熟练使用angularJs1.x及vueJS2.x各种类库的指令封装",
					"常驻PC/APP/微信三平台前端研发",
					"擅长组件/插件开发，能脱离库书写JS代码",
					"编码常思其健壮性，扩展性，维护性"
				]
			},
			"works": {
				"title": "作品集",
				"worksList": [
					{
						"title": "移动校园APP",
						"des": "一站式、全生命周期的校园官方移动服务平台，涵盖PC、安卓、IOS、微信平台，上线学校包括中央财经大学，北京交通大学，中国戏曲学院，辽宁大学，西南财经大学等等，下载量数十万，深受学生老师喜爱。",
						"url": ""
					},
					{
						"title": "移动校园管理系统",
						"des": "针对校园APP的后台管理系统，包括人员架构，信息统计，权限设置，H5生产机，数据交换平台，各个模块的数据管理，反馈设置等等，为高校提供基于互联网运营的移动校园整体解决方案。",
						"url": ""
					},
					{
						"title": "企业官网",
						"des": "普通性的各类企业网站开发，兼容IE8+,适配全移动机型，具有良好的兼容性，扩展性。根据客户群体的习性进行详细分析策划，制定出一套适合企业自身的网站建设的设计风格方案。",
						"url": ""
					}
				],
				"viewMore": "github上面查看更多"
			},
			"experience": {
				"title": "经历",
				"expList": [
					{
						"title": "玖富金科控股集团有限责任公司",
						"time": "2015年6月~2017年7月",
						"post": "web前端研发工程师",
						"imgUrl": "img/e_js.svg",
						"tech": "vue vuex vue-router axiox es6 webpack less",
						"contentList": [
							"负责快速构建高质量移动APP/PC页面",
							"根据业务需求设计合适的工程项目",
							"高度组件化、模块化思维，拥有各平台调试能力",
							"同期学习ES6及react,ng2,体会函数式编程思想"
						]
					}
				],
				"des": "2014年初，开始前端自学生涯。"
			},
			"contact": {
				"title": "联系我",
				"desList1": [
					"灵感",
					"代码",
					"梦想",
					"未来"
				],
				"desList2": [
					"注重效率，偏爱敏捷开发",
					"喜欢尝试，期待新鲜事物",
					"前端即兴趣，兴趣即未来",
					"行路有良友，便是捷径",
					"带上我吧，一起看到更大的世界"
				],
				"download": "下载简历",
				"fileList": [
					{
						"title": "HTML版",
						"url": "www.baidu.com"
					},
					{
						"title": "PDF版",
						"url": "www.baidu.com"
					}
				],
				"typeList": [
					{
						"icon": "img/s_github.svg",
						"url": ""
					},
					{
						"icon": "img/s_sf.svg",
						"url": ""
					},
					{
						"icon": "img/s_blog.svg",
						"url": ""
					},
					{
						"icon": "img/s_zh.svg",
						"url": ""
					},
					{
						"icon": "img/s_wb.svg",
						"url": ""
					}
				]
			}
		},
		"en": {
			"header": {
				"langList": [
					"CN",
					"EN"
				],
				"titleList": [
					{
						"svg": "img/d_home.svg",
						"title": "home"
					},
					{
						"svg": "img/d_info.svg",
						"title": "about"
					},
					{
						"svg": "img/d_skills.svg",
						"title": "skills"
					},
					{
						"svg": "img/d_exp.svg",
						"title": "exp"
					},
					{
						"svg": "img/d_works.svg",
						"title": "works"
					},
					{
						"svg": "img/d_contact.svg",
						"title": "contact"
					}
				]
			},
			"footer": {},
			"default": {
				"quote": "Life is a kind of endless yearning, eager to continue to rise, become more great and noble.",
				"desList": [
					"I am ZhangHongWei",
					"A front-end R & D engineer",
					"hongwei1916@163.com"
				]
			},
			"info": {
				"title": "About Me",
				"infoList": [
					{
						"icon": "img/i_age.svg",
						"key": "Age",
						"value": "23"
					},
					{
						"icon": "img/i_edu.svg",
						"key": "Edu.",
						"value": "B.S."
					},
					{
						"icon": "img/i_site.svg",
						"key": "Add.",
						"value": "BeiJing"
					},
					{
						"icon": "img/i_status.svg",
						"key": "Status",
						"value": "On Job"
					}
				],
				"desList": [
					" Two years of full-time front-end development experience",
					"Familiar with MV * development, well versed in automation, modular development of the road",
					"Efficient self-learning ability, with independent analysis to solve problems",
					"Strong self-driving force, the code OCD"
				]
			},
			"skill": {
				"title": "Skills",
				"outCircleList": [
					{
						"color": "rgba(121,100,102,0.8)",
						"name": "gulp"
					},
					{
						"color": "rgba(49,65,82,0.8)",
						"name": "Angular"
					},
					{
						"color": "rgba(76,157,160,0.8)",
						"name": "webpack"
					},
					{
						"color": "rgba(66,66,66,0.8)",
						"name": "less"
					},
					{
						"color": "rgba(193,131,106,0.8)",
						"name": "git"
					},
					{
						"color": "rgba(117,148,179,0.8)",
						"name": "Nodejs"
					},
					{
						"color": "rgba(71,83,94,0.8)",
						"name": "ReactNative"
					},
					{
						"color": "rgba(147,147,189,0.8)",
						"name": "React"
					}
				],
				"innerCircleList": [
					{
						"color": "rgba(179,164,140,0.8)",
						"name": "ES6"
					},
					{
						"color": "rgba(171,209,220,0.8)",
						"name": "Vue"
					},
					{
						"color": "rgba(238,215,163,0.8)",
						"name": "JQuery"
					},
					{
						"color": "rgba(207,184,178,0.8)",
						"name": "Bootstrap"
					}
				],
				"desList": [
					"Skilled use of angularJs1.x and encapsulate all kinds of libraries",
					"Permanent PC / APP / WeChat three platform front-end research and development",
					"Good at component / plugin development, can be written out of the library to write JS code",
					"Coding thinking robustness/scalability/maintainability"
				]
			},
			"works": {
				"title": "Works",
				"worksList": [
					{
						"title": "Campus APP",
						"des": "One-stop, the whole life cycle of the campus official mobile service platform, covering PC, Andrews, IOS, WeChat platform, on-line schools, including CUFE, BJTU, NACTA, LNU, SWUFE and so on, download Hundreds of thousands, loved by the students teacher.",
						"url": ""
					},
					{
						"title": "campus management system",
						"des": "According to the background management system of campus APP, including the personnel structure, information statistics, H5 production machine, data exchange platform, data management of each module, feedback settings, etc., for the university to provide Internet-based mobile campus overall solution.",
						"url": ""
					},
					{
						"title": "Enterprise official website",
						"des": "Ordinary enterprise website development, compatible with IE8 +, suitable for all mobile models, with good compatibility, scalability. According to the habits of customer groups for detailed analysis planning, to develop a set of corporate website for their own design style program.",
						"url": ""
					}
				],
				"viewMore": "Go github to see more"
			},
			"experience": {
				"title": "Experience",
				"expList": [
					{
						"title": "Jiu Fu Group",
						"time": "2015.06~now",
						"post": "Web front-end R & D engineers",
						"imgUrl": "img/e_js.svg",
						"tech": "less gulp angular1.x cordova javascript and some libraries",
						"contentList": [
							"Responsible for the rapid construction of high-quality APP / PC / WeChat page",
							"According to business needs to design the appropriate project",
							"Highly component, modular thinking, with the platform debugging capabilities",
							"Learning ES6 and vue, react, ng2, experience the function of programming ideas"
						]
					}
				],
				"des": "In early 2014, began the front-end self-study career."
			},
			"contact": {
				"title": "Contact Me",
				"desList1": [
					"INSPIRATION",
					"CODE",
					"DREAM",
					"FUTURE"
				],
				"desList2": [
					"Focus on efficiency, preference for agile development",
					"Like to try, look forward to something new",
					"Front is interested, interest is the future",
					"Line road friends, is a shortcut",
					"With me, see the bigger world together"
				],
				"download": "Download Resume",
				"fileList": [
					{
						"title": "HTML",
						"url": "www.baidu.com"
					},
					{
						"title": "PDF",
						"url": "www.baidu.com"
					}
				],
				"typeList": [
					{
						"icon": "img/s_github.svg",
						"url": ""
					},
					{
						"icon": "img/s_sf.svg",
						"url": ""
					},
					{
						"icon": "img/s_blog.svg",
						"url": ""
					},
					{
						"icon": "img/s_zh.svg",
						"url": ""
					},
					{
						"icon": "img/s_wb.svg",
						"url": ""
					}
				]
			}
		}
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _cmpt = __webpack_require__(4);

	var _cmpt2 = _interopRequireDefault(_cmpt);

	var _cmpt3 = __webpack_require__(5);

	var _cmpt4 = _interopRequireDefault(_cmpt3);

	var _cmpt5 = __webpack_require__(6);

	var _cmpt6 = _interopRequireDefault(_cmpt5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module("zkyResume", [_cmpt2.default, _cmpt4.default, _cmpt6.default]).component("zkyResume", {
		templateUrl: "components/zkyResume/cmpt.html",
		controllerAs: "zr",
		controller: ZkyResumeCtrl
	}).name;


	function ZkyResumeCtrl() {}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = angular.module("rHeader", []).component("resumeHeader", {
		templateUrl: "components/rHeader/cmpt.html",
		controller: ResumeHeaderCtrl,
		bindings: {
			pageIndex: "="
		}
	}).directive("showNav", ["actionEvent", function (actionEvent) {
		function link($scope, ele) {
			var vm = $scope.$ctrl;
			ele[0].addEventListener(actionEvent.event.start, clickHandler);
			function clickHandler() {
				vm.isShowNav = !vm.isShowNav;
				$scope.$apply();
			}
		}

		return {
			restrict: "A",
			link: link
		};
	}]).directive("switchLang", ["actionEvent", "$rootScope", function (actionEvent, $rootScope) {
		function link($scope, ele) {
			var vm = $scope.$ctrl;
			ele[0].addEventListener(actionEvent.event.start, clickHandler);
			function clickHandler(ev) {
				if (ev.target.nodeName !== "SPAN") {
					return;
				}
				vm.selectedLang = Number(ev.target.dataset.index) + 1;

				$scope.$apply();

				$rootScope.$broadcast("switchLang", vm.selectedLang);
			}
		}

		return {
			restrict: "A",
			link: link
		};
	}]).directive("selectedNavItem", ["resumeData", "actionEvent", function (resumeData, actionEvent) {

		function link($scope, ele) {
			var vm = $scope.$ctrl;

			ele[0].addEventListener(actionEvent.event.start, clickHandler);
			function clickHandler(evt) {
				if (evt.target.nodeName != "EM") {
					return;
				}

				+evt.target.dataset.index !== vm.pageIndex && !resumeData.moving && (vm.pageIndex = +evt.target.dataset.index);
				vm.isShowNav = false;
				$scope.$apply();
			}
		}

		return {
			restrict: "A",
			link: link
		};
	}]).name;


	ResumeHeaderCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];

	function ResumeHeaderCtrl(dataExtend, resumeData, $rootScope, $scope) {

		var vm = this;

		dataExtend.extend(vm, resumeData.cn.header);

		vm.pageIndex = 0;

		vm.selectedLang = 1; //1为中文,2为英文

		$rootScope.$on("switchLang", function (evt, data) {

			var extendData = Number(data) == 2 ? resumeData.en.header : resumeData.cn.header;

			dataExtend.extend(vm, extendData);

			$scope.$apply();
		});
	}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = angular.module("rFooter", []).component("resumeFooter", {
		templateUrl: "components/rFooter/cmpt.html",
		controllerAs: "rf",
		controller: ResumeFooterCtrl
	}).name;


	function ResumeFooterCtrl() {}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _cmpt = __webpack_require__(7);

	var _cmpt2 = _interopRequireDefault(_cmpt);

	var _cmpt3 = __webpack_require__(8);

	var _cmpt4 = _interopRequireDefault(_cmpt3);

	var _cmpt5 = __webpack_require__(9);

	var _cmpt6 = _interopRequireDefault(_cmpt5);

	var _cmpt7 = __webpack_require__(10);

	var _cmpt8 = _interopRequireDefault(_cmpt7);

	var _cmpt9 = __webpack_require__(11);

	var _cmpt10 = _interopRequireDefault(_cmpt9);

	var _cmpt11 = __webpack_require__(12);

	var _cmpt12 = _interopRequireDefault(_cmpt11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module("rMain", [_cmpt2.default, _cmpt4.default, _cmpt6.default, _cmpt8.default, _cmpt10.default, _cmpt12.default]).directive("resumeMain", ["initArrow", "stopIosDropDown", "$timeout", "resumeData", "actionEvent", function (initArrow, stopIosDropDown, $timeout, resumeData, actionEvent) {

	    function link($scope, ele) {

	        var pageIndex = 0,
	            moving = void 0,
	            startTouchY = void 0,
	            disY = void 0,
	            curTouchIndex = void 0,
	            nodeList = ele[0].querySelectorAll(".page-section"),
	            nodeListLen = nodeList.length;

	        init();

	        $scope.$watch("pageIndex", function (newV, oldV) {

	            var nodeList = ele[0].querySelectorAll(".page-section");

	            if (moving || typeof newV === 'undefined') {
	                return;
	            }

	            var newIndex = +newV;

	            moving = typeof oldV !== 'undefined';

	            resumeData.moving = moving;

	            if (Math.abs(newIndex - oldV) > 1) {
	                var promise = new Promise(function (resolve) {
	                    nodeList[newIndex].style.display = "block";
	                    nodeList[newIndex].style.transform = newIndex > oldV ? "translateY(100%)" : "translateY(-100%)";
	                    $timeout(function () {
	                        resolve();
	                    }, 200);
	                });
	                promise.then(function () {
	                    nodeList[newIndex].classList.add("active");
	                    nodeList[newIndex].style.display = "";
	                    if (typeof oldV !== 'undefined') {
	                        nodeList[oldV].style.transform = newIndex > oldV ? "translateY(-100%)" : "translateY(100%)";
	                        nodeList[oldV].style.transition = "transform 0.5s";
	                    }
	                });
	            } else if (Math.abs(newIndex - oldV) == 1) {
	                nodeList[newIndex].classList.add("active");
	                if (typeof oldV !== 'undefined') {
	                    nodeList[oldV].style.transform = newIndex > oldV ? "translateY(-100%)" : "translateY(100%)";
	                    nodeList[oldV].style.transition = "transform 0.5s";
	                }
	            }

	            pageIndex = newIndex;

	            nodeList[newIndex].addEventListener("webkitTransitionEnd", transitionEndHandler);
	        });

	        $scope.$on("$destroy", function () {
	            initArrow.destroy();
	            ele[0].removeEventListener("touchstart", touchStartHandler);
	            ele[0].removeEventListener("mousewheel", startWheelHandler);
	        });
	        //初始化
	        function init() {
	            // nodeList = Array.from(nodeList);

	            ele[0].classList.add("dock-fill");

	            nodeList[0].classList.add("cur-page");

	            nodeList[pageIndex + 1].classList.add("next-page");

	            initArrow.init();

	            stopIosDropDown.stop(actionEvent);

	            _consoleLog();

	            ele[0].addEventListener(actionEvent.event.start, touchStartHandler);
	            ele[0].addEventListener("mousewheel", _throttleGenerator(startWheelHandler, 100));
	        }

	        function _throttleGenerator(fn, time) {
	            var date = new Date();
	            return function () {
	                var nowDate = new Date();
	                if (nowDate - date > time) {
	                    fn.apply(undefined, arguments);
	                }
	                date = nowDate;
	            };
	        }

	        //滚轮事件
	        function startWheelHandler(e) {

	            if (moving || e.wheelDelta < 0 && pageIndex == nodeListLen - 1 || e.wheelDelta > 0 && pageIndex == 0) {
	                return;
	            }
	            e.wheelDelta < 0 ? pageIndex++ : pageIndex--;

	            applyPageIndex(pageIndex);
	        }

	        function touchStartHandler(e) {

	            if (moving || e.type != "touchstart") {
	                return;
	            }

	            startTouchY = e.changedTouches[0].pageY;

	            ele[0].addEventListener(actionEvent.event.move, touchMoveHandler);
	        }

	        function touchMoveHandler(e) {

	            if (moving) {
	                return;
	            }

	            disY = e.changedTouches[0].pageY - startTouchY; //为负上滑 为正下滑

	            if (disY < 0 && pageIndex == nodeListLen - 1 || disY > 0 && pageIndex == 0) {
	                return;
	            }

	            setTouchMovePageAttr();

	            ele[0].addEventListener(actionEvent.event.end, touchEndHandler);
	        }

	        function touchEndHandler() {

	            if (moving) {
	                return;
	            }

	            Math.abs(disY) < 100 ? littleBounce() : applyPageIndex(curTouchIndex);
	        }

	        function transitionEndHandler() {

	            moving = false;

	            resumeData.moving = moving;

	            setTouchEndAttr();

	            ele[0].removeEventListener("touchmove", touchMoveHandler);
	            ele[0].removeEventListener("touchend", touchEndHandler);
	        }

	        function littleBounce() {

	            var nodeList = ele[0].querySelectorAll(".page-section");

	            nodeList[curTouchIndex].style.transform = "";
	            nodeList[curTouchIndex].style.transition = "transform 0.5s";

	            nodeList[disY < 0 ? curTouchIndex - 1 : curTouchIndex + 1].style.transform = "";
	            nodeList[disY < 0 ? curTouchIndex - 1 : curTouchIndex + 1].style.transition = "transform 0.5s";

	            nodeList[curTouchIndex].addEventListener("webkitTransitionEnd", transitionEndHandler);
	        }
	        //脏检查
	        function applyPageIndex(index) {

	            $scope.$apply(function () {
	                $scope.pageIndex = index;
	            });
	        }

	        function setTouchMovePageAttr() {

	            var nodeList = ele[0].querySelectorAll(".page-section");

	            curTouchIndex = disY < 0 ? pageIndex + 1 : pageIndex - 1;

	            nodeList[curTouchIndex].classList.add("touch-page");

	            nodeList[curTouchIndex].style.transform = disY < 0 ? "translateY(" + (ele[0].offsetHeight + disY) + "px)" : "translateY(" + (-ele[0].offsetHeight + disY) + "px)";

	            nodeList[disY < 0 ? curTouchIndex - 1 : curTouchIndex + 1].style.transform = "translateY(" + disY + "px)";
	        }

	        function setTouchEndAttr() {

	            var nodeList = ele[0].querySelectorAll(".page-section");

	            nodeList = Array.prototype.slice.call(nodeList);

	            nodeList.forEach(function (item, index) {

	                item.classList.remove("prev-page", "active", "next-page", "cur-page", "touch-page");

	                item.style.transform = "";
	                item.style.transition = "";

	                pageIndex !== 0 && index == pageIndex - 1 && item.classList.add("prev-page");

	                index == pageIndex && item.classList.add("cur-page");

	                pageIndex !== nodeListLen - 1 && index == pageIndex + 1 && item.classList.add("next-page");

	                item.removeEventListener("webkitTransitionEnd", transitionEndHandler);
	            });

	            ele[0].querySelectorAll(".-arrow")[0].style.display = pageIndex == nodeListLen - 1 ? "none" : "block";
	        }

	        function _consoleLog() {
	            console.log("Hi! 朋友，感谢您愿意调试简历代码。\n" + "本简历采用ES6,angularJS 1.x,gulp,less,webpack开发构建。\n" + "源码已开源在（https://github.com/JasonZhang1234/web-front-end),喜欢请点个star吧！ \n" + "如果您有什么建议或者想学习前端，欢迎您加入我们,我们互相学习，共同进步^_^ \n");
	        }
	    }

	    return {
	        restrict: "E",
	        link: link,
	        template: "<div ng-transclude></div>",
	        transclude: true,
	        replace: true,
	        scope: {
	            pageIndex: "="
	        }
	    };
	}]).name;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = angular.module("rContact", []).component("resumeContact", {
		templateUrl: "components/_rContact/cmpt.html",
		controller: ResumeContactCtrl
	}).name;

	ResumeContactCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];

	function ResumeContactCtrl(dataExtend, resumeData, $rootScope, $scope) {
		var vm = this;

		dataExtend.extend(vm, resumeData.cn.contact);

		$rootScope.$on("switchLang", function (evt, data) {

			var extendData = Number(data) == 2 ? resumeData.en.contact : resumeData.cn.contact;

			vm.isEng = Number(data) == 2;

			dataExtend.extend(vm, extendData);

			$scope.$apply();
		});
	}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = angular.module("rDefault", []).component("resumeDefault", {
		templateUrl: "components/_rDefault/cmpt.html",
		controller: ResumeDefaultCtrl
	}).name;


	ResumeDefaultCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];

	function ResumeDefaultCtrl(dataExtend, resumeData, $rootScope, $scope) {
		var vm = this;

		dataExtend.extend(vm, resumeData.cn.default);

		$rootScope.$on("switchLang", function (evt, data) {

			var extendData = Number(data) == 2 ? resumeData.en.default : resumeData.cn.default;

			dataExtend.extend(vm, extendData);

			$scope.$apply();
		});
	}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = angular.module("rWorks", []).component("resumeWorks", {
		templateUrl: "components/_rWorks/cmpt.html",
		controller: ResumeWorksCtrl
	}).directive("switchWork", ["actionEvent", function (actionEvent) {
		function link($scope, ele, attr) {
			var worksContain = document.body.querySelector(".-work-list");
			var rotate = 0;
			ele[0].addEventListener(actionEvent.event.start, switchWorkHandler);

			function switchWorkHandler(evt) {

				if (evt.target.nodeName !== "I") {
					return;
				}
				rotate += evt.target.className == "-left" ? 90 : -90;

				worksContain.style.transform = "rotateY(" + rotate + "deg)";
			}
		}
		return {
			link: link
		};
	}]).name;


	ResumeWorksCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];

	function ResumeWorksCtrl(dataExtend, resumeData, $rootScope, $scope) {
		var vm = this;

		dataExtend.extend(vm, resumeData.cn.works);

		$rootScope.$on("switchLang", function (evt, data) {

			var extendData = Number(data) == 2 ? resumeData.en.works : resumeData.cn.works;

			vm.isEng = Number(data) == 2;

			dataExtend.extend(vm, extendData);

			$scope.$apply();
		});
	}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = angular.module("rExperience", []).component("resumeExperience", {
		templateUrl: "components/_rExperience/cmpt.html",
		controller: ResumeExperienceCtrl,
		bindings: {
			pageIndex: "<"
		}
	}).directive("touchThreeD", ["$window", "actionEvent", function ($window, actionEvent) {
		function link($scope, ele) {

			var bannerWidth = void 0,
			    bannerHeight = void 0,
			    offsetLeft = void 0,
			    offsetTop = void 0;
			$scope.$watch("$parent.$parent.pageIndex", function (newV) {
				if (Number(newV) !== 3) {
					return;
				}
				bannerWidth = ele[0].offsetWidth;
				bannerHeight = ele[0].offsetHeight;
				offsetLeft = ele[0].offsetLeft;
				offsetTop = ele[0].offsetTop;
			});

			ele[0].addEventListener(actionEvent.event.move, mousemoveHandler);
			ele[0].addEventListener("mouseout", mouseoutHandler);

			function mousemoveHandler(evt) {
				var pageX = evt.pageX,
				    pageY = evt.pageY,
				    x = pageX - offsetLeft - bannerWidth / 2,
				    y = bannerHeight / 2 - pageY + offsetTop + 140;
				ele[0].style.transform = "rotateY(" + x / 50 + "deg) rotateX(" + y / 50 + "deg)";
			}

			function mouseoutHandler(evt) {
				ele[0].style.transform = "rotateY(0deg) rotateX(0deg)";
			}

			$window.onresize = onResize;

			function onResize() {
				offsetLeft = ele[0].offsetLeft;
				offsetTop = ele[0].offsetTop;
			}
		}
		return {
			restrict: "A",
			link: link
		};
	}]).directive("switchExp", ["actionEvent", function (actionEvent) {
		function link($scope, ele) {

			var vm = $scope.$ctrl,
			    contentNode = document.body.querySelectorAll(".-experience-content")[0];

			vm.cutList = new Array(3);

			ele[0].addEventListener(actionEvent.event.start, switchExpList);

			function switchExpList(evt) {
				if (evt.target.nodeName != "LI") {
					return;
				}

				if (evt.target.dataset.index !== vm.curIndex) {
					vm.curIndex = evt.target.dataset.index;
					contentNode.style.opacity = "0";
					contentNode.addEventListener("webkitTransitionEnd", transitionEndHandler);
				}
			}
			function transitionEndHandler() {
				contentNode.style.opacity = "1";
				$scope.$apply(function () {
					vm.exp = vm.expList[vm.curIndex];
				});
				contentNode.removeEventListener("webkitTransitionEnd", transitionEndHandler);
			}
		}
		return {
			link: link
		};
	}]).name;


	ResumeExperienceCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];

	function ResumeExperienceCtrl(dataExtend, resumeData, $rootScope, $scope) {
		var vm = this;

		dataExtend.extend(vm, resumeData.cn.experience);

		vm.curIndex = 0;

		vm.exp = vm.expList[vm.curIndex];

		$rootScope.$on("switchLang", function (evt, data) {

			var extendData = Number(data) == 2 ? resumeData.en.experience : resumeData.cn.experience;

			vm.isEng = Number(data) == 2;

			dataExtend.extend(vm, extendData);

			vm.exp = vm.expList[0];

			$scope.$apply();
		});
	}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = angular.module("rInfo", []).component("resumeInfo", {
		templateUrl: "components/_rInfo/cmpt.html",
		controller: ResumeInfoCtrl
	}).name;


	ResumeInfoCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];

	function ResumeInfoCtrl(dataExtend, resumeData, $rootScope, $scope) {
		var vm = this;

		dataExtend.extend(vm, resumeData.cn.info);

		$rootScope.$on("switchLang", function (evt, data) {

			var extendData = Number(data) == 2 ? resumeData.en.info : resumeData.cn.info;

			vm.isEng = Number(data) == 2;

			dataExtend.extend(vm, extendData);

			$scope.$apply();
		});
	}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = angular.module("rSkill", []).component("resumeSkill", {
		templateUrl: "components/_rSkill/cmpt.html",
		controller: ResumeSkillCtrl
	}).name;


	ResumeSkillCtrl.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"];

	function ResumeSkillCtrl(dataExtend, resumeData, $rootScope, $scope) {
		var vm = this;

		dataExtend.extend(vm, resumeData.cn.skill);

		$rootScope.$on("switchLang", function (evt, data) {

			var extendData = Number(data) == 2 ? resumeData.en.skill : resumeData.cn.skill;

			vm.isEng = Number(data) == 2;

			dataExtend.extend(vm, extendData);

			$scope.$apply();
		});
	}

/***/ })
/******/ ]);
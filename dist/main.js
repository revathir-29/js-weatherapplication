/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/weather-api.js":
/*!****************************!*\
  !*** ./src/weather-api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
  /* harmony export */ });
  const apiKey = "b067ed5c72424299acc131107230311";
  const url = "https://api.weatherapi.com/v1";
  const apiMethod = "/current.json";
  const processResponse = weatherData => {
    const {
      location: {
        name: city
      },
      current: {
        temp_c: temperatureC,
        temp_f: temperatureF,
        feelslike_c: feelsLikeC,
        feelslike_f: feelsLikeF,
        humidity,
        wind_kph: wind
      }
    } = weatherData;
    return {
      city,
      temperatureC,
      temperatureF,
      feelsLikeC,
      feelsLikeF,
      humidity,
      wind
    };
  };
  async function callWeatherApi(parameter) {
    try {
      const response = await fetch(`${url}${apiMethod}?key=${apiKey}&q=${parameter}`, {
        mode: "cors"
      });
      const responseData = processResponse(await response.json());
      return responseData;
    } catch (error) {
      return error;
    }
  }
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (callWeatherApi);
  
  /***/ }),
  
  /***/ "./src/weather-view.js":
  /*!*****************************!*\
    !*** ./src/weather-view.js ***!
    \*****************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   displayApiData: () => (/* binding */ displayApiData),
  /* harmony export */   toggleTemperatureUnit: () => (/* binding */ toggleTemperatureUnit)
  /* harmony export */ });
  const searchResult = document.getElementById("search-result");
  const city = document.getElementById("city");
  const feelsLike = document.getElementById("feels-like");
  const wind = document.getElementById("wind");
  const humidity = document.getElementById("humidity");
  const temperature = document.getElementById("temp");
  const displayApiData = proccesedData => {
    if (!proccesedData) return;
    searchResult.classList.add("active");
    city.textContent = `${proccesedData.city}`;
    feelsLike.textContent = `Feels like: ${proccesedData.feelsLikeC} °C`;
    temperature.textContent = `Temperature: ${proccesedData.temperatureC} °C`;
    wind.textContent = `Wind: ${proccesedData.wind} km/h`;
    humidity.textContent = `Humidity: ${proccesedData.humidity} %`;
  };
  const changeToFahrenheit = proccesedData => {
    feelsLike.textContent = `Feels like: ${proccesedData.feelsLikeF} °F`;
    temperature.textContent = `Temperature: ${proccesedData.temperatureF} °F`;
  };
  const toggleTemperatureUnit = proccesedData => {
    if (temperature.textContent.includes("°C")) {
      changeToFahrenheit(proccesedData);
    } else {
      displayApiData(proccesedData);
    }
  };
  
  
  /***/ }),
  
  /***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
  /*!*************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
    \*************************************************************/
  /***/ ((module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
  /* harmony export */ });
  /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
  /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
  /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
  // Imports
  
  
  var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
  // Module
  ___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :root {
    --dark-blue: #22223b;
    --light-blue: #4a4e69;
    --border-radius-12px: 12px;
    --box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
  }
  
  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--light-blue);
  }
  
  .header {
    width: 100%;
    padding: 4rem;
    background-color: var(--dark-blue);
    text-align: center;
    color: white;
  }
  
  .main {
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  #search-input {
    padding: 0.75em 7px;
    border: none;
    border-radius: var(--border-radius-12px);
  }
  
  #search-result {
    background-color: var(--dark-blue);
    color: white;
    text-align: center;
  }
  
  .active {
    padding: 2em;
    margin: 2em;
    border: 1px solid white;
    width: 300px;
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius-12px);
  }
  
  h2 {
    font-size: 2.5rem;
  }
  
  #search-result > p {
    margin-top: 0.5em;
    font-size: 1.25rem;
  }
  
  #toggle-unit-button,
  #search-button {
    border: none;
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius-12px);
    background-color: var(--dark-blue);
    color: white;
    padding: 0.75em;
    margin: 0.5em;
  }
  `, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,oBAAoB;EACpB,qBAAqB;EACrB,0BAA0B;EAC1B,kDAAkD;AACpD;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,mCAAmC;AACrC;;AAEA;EACE,WAAW;EACX,aAAa;EACb,kCAAkC;EAClC,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,wCAAwC;AAC1C;;AAEA;EACE,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,YAAY;EACZ,6BAA6B;EAC7B,wCAAwC;AAC1C;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;;EAEE,YAAY;EACZ,6BAA6B;EAC7B,wCAAwC;EACxC,kCAAkC;EAClC,YAAY;EACZ,eAAe;EACf,aAAa;AACf","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --dark-blue: #22223b;\n  --light-blue: #4a4e69;\n  --border-radius-12px: 12px;\n  --box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--light-blue);\n}\n\n.header {\n  width: 100%;\n  padding: 4rem;\n  background-color: var(--dark-blue);\n  text-align: center;\n  color: white;\n}\n\n.main {\n  margin-top: 2rem;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#search-input {\n  padding: 0.75em 7px;\n  border: none;\n  border-radius: var(--border-radius-12px);\n}\n\n#search-result {\n  background-color: var(--dark-blue);\n  color: white;\n  text-align: center;\n}\n\n.active {\n  padding: 2em;\n  margin: 2em;\n  border: 1px solid white;\n  width: 300px;\n  box-shadow: var(--box-shadow);\n  border-radius: var(--border-radius-12px);\n}\n\nh2 {\n  font-size: 2.5rem;\n}\n\n#search-result > p {\n  margin-top: 0.5em;\n  font-size: 1.25rem;\n}\n\n#toggle-unit-button,\n#search-button {\n  border: none;\n  box-shadow: var(--box-shadow);\n  border-radius: var(--border-radius-12px);\n  background-color: var(--dark-blue);\n  color: white;\n  padding: 0.75em;\n  margin: 0.5em;\n}\n"],"sourceRoot":""}]);
  // Exports
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);
  
  
  /***/ }),
  
  /***/ "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/
  /***/ ((module) => {
  
  
  
  /*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
  */
  module.exports = function (cssWithMappingToString) {
    var list = [];
  
    // return the list of modules as css string
    list.toString = function toString() {
      return this.map(function (item) {
        var content = "";
        var needLayer = typeof item[5] !== "undefined";
        if (item[4]) {
          content += "@supports (".concat(item[4], ") {");
        }
        if (item[2]) {
          content += "@media ".concat(item[2], " {");
        }
        if (needLayer) {
          content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
        }
        content += cssWithMappingToString(item);
        if (needLayer) {
          content += "}";
        }
        if (item[2]) {
          content += "}";
        }
        if (item[4]) {
          content += "}";
        }
        return content;
      }).join("");
    };
  
    // import a list of modules into the list
    list.i = function i(modules, media, dedupe, supports, layer) {
      if (typeof modules === "string") {
        modules = [[null, modules, undefined]];
      }
      var alreadyImportedModules = {};
      if (dedupe) {
        for (var k = 0; k < this.length; k++) {
          var id = this[k][0];
          if (id != null) {
            alreadyImportedModules[id] = true;
          }
        }
      }
      for (var _k = 0; _k < modules.length; _k++) {
        var item = [].concat(modules[_k]);
        if (dedupe && alreadyImportedModules[item[0]]) {
          continue;
        }
        if (typeof layer !== "undefined") {
          if (typeof item[5] === "undefined") {
            item[5] = layer;
          } else {
            item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
            item[5] = layer;
          }
        }
        if (media) {
          if (!item[2]) {
            item[2] = media;
          } else {
            item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
            item[2] = media;
          }
        }
        if (supports) {
          if (!item[4]) {
            item[4] = "".concat(supports);
          } else {
            item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
            item[4] = supports;
          }
        }
        list.push(item);
      }
    };
    return list;
  };
  
  /***/ }),
  
  /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
  /*!************************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
    \************************************************************/
  /***/ ((module) => {
  
  
  
  module.exports = function (item) {
    var content = item[1];
    var cssMapping = item[3];
    if (!cssMapping) {
      return content;
    }
    if (typeof btoa === "function") {
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
      var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
      var sourceMapping = "/*# ".concat(data, " */");
      return [content].concat([sourceMapping]).join("\n");
    }
    return [content].join("\n");
  };
  
  /***/ }),
  
  /***/ "./src/style.css":
  /*!***********************!*\
    !*** ./src/style.css ***!
    \***********************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
  /* harmony export */ });
  /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
  /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
  /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
  /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
  /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
  /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
  /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
  /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
  /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
  /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
  /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
  /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
  /* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");
  
        
        
        
        
        
        
        
        
        
  
  var options = {};
  
  options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
  options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
  
        options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
      
  options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
  options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());
  
  var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);
  
  
  
  
         /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);
  
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/
  /***/ ((module) => {
  
  
  
  var stylesInDOM = [];
  function getIndexByIdentifier(identifier) {
    var result = -1;
    for (var i = 0; i < stylesInDOM.length; i++) {
      if (stylesInDOM[i].identifier === identifier) {
        result = i;
        break;
      }
    }
    return result;
  }
  function modulesToDom(list, options) {
    var idCountMap = {};
    var identifiers = [];
    for (var i = 0; i < list.length; i++) {
      var item = list[i];
      var id = options.base ? item[0] + options.base : item[0];
      var count = idCountMap[id] || 0;
      var identifier = "".concat(id, " ").concat(count);
      idCountMap[id] = count + 1;
      var indexByIdentifier = getIndexByIdentifier(identifier);
      var obj = {
        css: item[1],
        media: item[2],
        sourceMap: item[3],
        supports: item[4],
        layer: item[5]
      };
      if (indexByIdentifier !== -1) {
        stylesInDOM[indexByIdentifier].references++;
        stylesInDOM[indexByIdentifier].updater(obj);
      } else {
        var updater = addElementStyle(obj, options);
        options.byIndex = i;
        stylesInDOM.splice(i, 0, {
          identifier: identifier,
          updater: updater,
          references: 1
        });
      }
      identifiers.push(identifier);
    }
    return identifiers;
  }
  function addElementStyle(obj, options) {
    var api = options.domAPI(options);
    api.update(obj);
    var updater = function updater(newObj) {
      if (newObj) {
        if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
          return;
        }
        api.update(obj = newObj);
      } else {
        api.remove();
      }
    };
    return updater;
  }
  module.exports = function (list, options) {
    options = options || {};
    list = list || [];
    var lastIdentifiers = modulesToDom(list, options);
    return function update(newList) {
      newList = newList || [];
      for (var i = 0; i < lastIdentifiers.length; i++) {
        var identifier = lastIdentifiers[i];
        var index = getIndexByIdentifier(identifier);
        stylesInDOM[index].references--;
      }
      var newLastIdentifiers = modulesToDom(newList, options);
      for (var _i = 0; _i < lastIdentifiers.length; _i++) {
        var _identifier = lastIdentifiers[_i];
        var _index = getIndexByIdentifier(_identifier);
        if (stylesInDOM[_index].references === 0) {
          stylesInDOM[_index].updater();
          stylesInDOM.splice(_index, 1);
        }
      }
      lastIdentifiers = newLastIdentifiers;
    };
  };
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
  /*!********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
    \********************************************************************/
  /***/ ((module) => {
  
  
  
  var memo = {};
  
  /* istanbul ignore next  */
  function getTarget(target) {
    if (typeof memo[target] === "undefined") {
      var styleTarget = document.querySelector(target);
  
      // Special case to return head of iframe instead of iframe itself
      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }
      memo[target] = styleTarget;
    }
    return memo[target];
  }
  
  /* istanbul ignore next  */
  function insertBySelector(insert, style) {
    var target = getTarget(insert);
    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }
    target.appendChild(style);
  }
  module.exports = insertBySelector;
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
    \**********************************************************************/
  /***/ ((module) => {
  
  
  
  /* istanbul ignore next  */
  function insertStyleElement(options) {
    var element = document.createElement("style");
    options.setAttributes(element, options.attributes);
    options.insert(element, options.options);
    return element;
  }
  module.exports = insertStyleElement;
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
    \**********************************************************************************/
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
  
  
  
  /* istanbul ignore next  */
  function setAttributesWithoutAttributes(styleElement) {
    var nonce =  true ? __webpack_require__.nc : 0;
    if (nonce) {
      styleElement.setAttribute("nonce", nonce);
    }
  }
  module.exports = setAttributesWithoutAttributes;
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
  /*!***************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
    \***************************************************************/
  /***/ ((module) => {
  
  
  
  /* istanbul ignore next  */
  function apply(styleElement, options, obj) {
    var css = "";
    if (obj.supports) {
      css += "@supports (".concat(obj.supports, ") {");
    }
    if (obj.media) {
      css += "@media ".concat(obj.media, " {");
    }
    var needLayer = typeof obj.layer !== "undefined";
    if (needLayer) {
      css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
    }
    css += obj.css;
    if (needLayer) {
      css += "}";
    }
    if (obj.media) {
      css += "}";
    }
    if (obj.supports) {
      css += "}";
    }
    var sourceMap = obj.sourceMap;
    if (sourceMap && typeof btoa !== "undefined") {
      css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
    }
  
    // For old IE
    /* istanbul ignore if  */
    options.styleTagTransform(css, styleElement, options.options);
  }
  function removeStyleElement(styleElement) {
    // istanbul ignore if
    if (styleElement.parentNode === null) {
      return false;
    }
    styleElement.parentNode.removeChild(styleElement);
  }
  
  /* istanbul ignore next  */
  function domAPI(options) {
    if (typeof document === "undefined") {
      return {
        update: function update() {},
        remove: function remove() {}
      };
    }
    var styleElement = options.insertStyleElement(options);
    return {
      update: function update(obj) {
        apply(styleElement, options, obj);
      },
      remove: function remove() {
        removeStyleElement(styleElement);
      }
    };
  }
  module.exports = domAPI;
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
    \*********************************************************************/
  /***/ ((module) => {
  
  
  
  /* istanbul ignore next  */
  function styleTagTransform(css, styleElement) {
    if (styleElement.styleSheet) {
      styleElement.styleSheet.cssText = css;
    } else {
      while (styleElement.firstChild) {
        styleElement.removeChild(styleElement.firstChild);
      }
      styleElement.appendChild(document.createTextNode(css));
    }
  }
  module.exports = styleTagTransform;
  
  /***/ })
  
  /******/ 	});
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	var __webpack_module_cache__ = {};
  /******/ 	
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/ 		// Check if module is in cache
  /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
  /******/ 		if (cachedModule !== undefined) {
  /******/ 			return cachedModule.exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			id: moduleId,
  /******/ 			// no module.loaded needed
  /******/ 			exports: {}
  /******/ 		};
  /******/ 	
  /******/ 		// Execute the module function
  /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/ 	
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/ 	
  /************************************************************************/
  /******/ 	/* webpack/runtime/compat get default export */
  /******/ 	(() => {
  /******/ 		// getDefaultExport function for compatibility with non-harmony modules
  /******/ 		__webpack_require__.n = (module) => {
  /******/ 			var getter = module && module.__esModule ?
  /******/ 				() => (module['default']) :
  /******/ 				() => (module);
  /******/ 			__webpack_require__.d(getter, { a: getter });
  /******/ 			return getter;
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/define property getters */
  /******/ 	(() => {
  /******/ 		// define getter functions for harmony exports
  /******/ 		__webpack_require__.d = (exports, definition) => {
  /******/ 			for(var key in definition) {
  /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
  /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
  /******/ 				}
  /******/ 			}
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
  /******/ 	(() => {
  /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/make namespace object */
  /******/ 	(() => {
  /******/ 		// define __esModule on exports
  /******/ 		__webpack_require__.r = (exports) => {
  /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/ 			}
  /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/nonce */
  /******/ 	(() => {
  /******/ 		__webpack_require__.nc = undefined;
  /******/ 	})();
  /******/ 	
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
  /*!**********************!*\
    !*** ./src/index.js ***!
    \**********************/
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
  /* harmony import */ var _weather_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather-api */ "./src/weather-api.js");
  /* harmony import */ var _weather_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather-view */ "./src/weather-view.js");
  
  
  
  let proccesedData = "";
  const toggleUnitButton = document.getElementById("toggle-unit-button");
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  async function apiCall() {
    if (searchInput.value === "") return;
    try {
      proccesedData = await (0,_weather_api__WEBPACK_IMPORTED_MODULE_1__["default"])(searchInput.value);
      (0,_weather_view__WEBPACK_IMPORTED_MODULE_2__.displayApiData)(proccesedData);
    } catch (error) {
      alert(`${error.message}`);
    }
  }
  searchForm.addEventListener("submit", e => {
    e.preventDefault();
  });
  searchButton.addEventListener("click", apiCall);
  toggleUnitButton.addEventListener("click", () => {
    (0,_weather_view__WEBPACK_IMPORTED_MODULE_2__.toggleTemperatureUnit)(proccesedData);
  });
  })();
  
  /******/ })()
  ;
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBQzNDQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQztBQUVGUCxZQUFZLENBQUNLLGdCQUFnQixDQUFDLE9BQU8sRUFBRUosT0FBTyxDQUFDO0FBRS9DSixnQkFBZ0IsQ0FBQ1EsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07RUFDL0NWLG9FQUFxQixDQUFDTCxhQUFhLENBQUM7QUFDdEMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci10ZW1wbGF0ZS8uL3NyYy93ZWF0aGVyLWFwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci10ZW1wbGF0ZS8uL3NyYy93ZWF0aGVyLXZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXItdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXItdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXItdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXItdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXItdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXItdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBpS2V5ID0gXCJiMDY3ZWQ1YzcyNDI0Mjk5YWNjMTMxMTA3MjMwMzExXCI7XG5jb25zdCB1cmwgPSBcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxXCI7XG5jb25zdCBhcGlNZXRob2QgPSBcIi9jdXJyZW50Lmpzb25cIjtcblxuY29uc3QgcHJvY2Vzc1Jlc3BvbnNlID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBsb2NhdGlvbjogeyBuYW1lOiBjaXR5IH0sXG4gICAgY3VycmVudDoge1xuICAgICAgdGVtcF9jOiB0ZW1wZXJhdHVyZUMsXG4gICAgICB0ZW1wX2Y6IHRlbXBlcmF0dXJlRixcbiAgICAgIGZlZWxzbGlrZV9jOiBmZWVsc0xpa2VDLFxuICAgICAgZmVlbHNsaWtlX2Y6IGZlZWxzTGlrZUYsXG4gICAgICBodW1pZGl0eSxcbiAgICAgIHdpbmRfa3BoOiB3aW5kLFxuICAgIH0sXG4gIH0gPSB3ZWF0aGVyRGF0YTtcblxuICByZXR1cm4ge1xuICAgIGNpdHksXG4gICAgdGVtcGVyYXR1cmVDLFxuICAgIHRlbXBlcmF0dXJlRixcbiAgICBmZWVsc0xpa2VDLFxuICAgIGZlZWxzTGlrZUYsXG4gICAgaHVtaWRpdHksXG4gICAgd2luZCxcbiAgfTtcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGNhbGxXZWF0aGVyQXBpKHBhcmFtZXRlcikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHt1cmx9JHthcGlNZXRob2R9P2tleT0ke2FwaUtleX0mcT0ke3BhcmFtZXRlcn1gLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9LFxuICAgICk7XG5cbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBwcm9jZXNzUmVzcG9uc2UoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcbiAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYWxsV2VhdGhlckFwaTtcbiIsImNvbnN0IHNlYXJjaFJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXJlc3VsdFwiKTtcbmNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHlcIik7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZlZWxzLWxpa2VcIik7XG5jb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kXCIpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh1bWlkaXR5XCIpO1xuY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBcIik7XG5cbmNvbnN0IGRpc3BsYXlBcGlEYXRhID0gKHByb2NjZXNlZERhdGEpID0+IHtcbiAgaWYgKCFwcm9jY2VzZWREYXRhKSByZXR1cm47XG5cbiAgc2VhcmNoUmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgY2l0eS50ZXh0Q29udGVudCA9IGAke3Byb2NjZXNlZERhdGEuY2l0eX1gO1xuICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtwcm9jY2VzZWREYXRhLmZlZWxzTGlrZUN9IMKwQ2A7XG4gIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYFRlbXBlcmF0dXJlOiAke3Byb2NjZXNlZERhdGEudGVtcGVyYXR1cmVDfSDCsENgO1xuICB3aW5kLnRleHRDb250ZW50ID0gYFdpbmQ6ICR7cHJvY2Nlc2VkRGF0YS53aW5kfSBrbS9oYDtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgSHVtaWRpdHk6ICR7cHJvY2Nlc2VkRGF0YS5odW1pZGl0eX0gJWA7XG59O1xuXG5jb25zdCBjaGFuZ2VUb0ZhaHJlbmhlaXQgPSAocHJvY2Nlc2VkRGF0YSkgPT4ge1xuICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZTogJHtwcm9jY2VzZWREYXRhLmZlZWxzTGlrZUZ9IMKwRmA7XG4gIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gYFRlbXBlcmF0dXJlOiAke3Byb2NjZXNlZERhdGEudGVtcGVyYXR1cmVGfSDCsEZgO1xufTtcblxuY29uc3QgdG9nZ2xlVGVtcGVyYXR1cmVVbml0ID0gKHByb2NjZXNlZERhdGEpID0+IHtcbiAgaWYgKHRlbXBlcmF0dXJlLnRleHRDb250ZW50LmluY2x1ZGVzKFwiwrBDXCIpKSB7XG4gICAgY2hhbmdlVG9GYWhyZW5oZWl0KHByb2NjZXNlZERhdGEpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlBcGlEYXRhKHByb2NjZXNlZERhdGEpO1xuICB9XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5QXBpRGF0YSwgdG9nZ2xlVGVtcGVyYXR1cmVVbml0IH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAtLWRhcmstYmx1ZTogIzIyMjIzYjtcbiAgLS1saWdodC1ibHVlOiAjNGE0ZTY5O1xuICAtLWJvcmRlci1yYWRpdXMtMTJweDogMTJweDtcbiAgLS1ib3gtc2hhZG93OiA4cHggOHB4IDI0cHggMHB4IHJnYmEoNjYsIDY4LCA5MCwgMSk7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XG59XG5cbi5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tYWluIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jc2VhcmNoLWlucHV0IHtcbiAgcGFkZGluZzogMC43NWVtIDdweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTEycHgpO1xufVxuXG4jc2VhcmNoLXJlc3VsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWN0aXZlIHtcbiAgcGFkZGluZzogMmVtO1xuICBtYXJnaW46IDJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMTJweCk7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbiNzZWFyY2gtcmVzdWx0ID4gcCB7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbiN0b2dnbGUtdW5pdC1idXR0b24sXG4jc2VhcmNoLWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMTJweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC43NWVtO1xuICBtYXJnaW46IDAuNWVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0Isd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLHdDQUF3QztFQUN4QyxrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1kYXJrLWJsdWU6ICMyMjIyM2I7XFxuICAtLWxpZ2h0LWJsdWU6ICM0YTRlNjk7XFxuICAtLWJvcmRlci1yYWRpdXMtMTJweDogMTJweDtcXG4gIC0tYm94LXNoYWRvdzogOHB4IDhweCAyNHB4IDBweCByZ2JhKDY2LCA2OCwgOTAsIDEpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmx1ZSk7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1haW4ge1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzZWFyY2gtaW5wdXQge1xcbiAgcGFkZGluZzogMC43NWVtIDdweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMTJweCk7XFxufVxcblxcbiNzZWFyY2gtcmVzdWx0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgcGFkZGluZzogMmVtO1xcbiAgbWFyZ2luOiAyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy0xMnB4KTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbiNzZWFyY2gtcmVzdWx0ID4gcCB7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuI3RvZ2dsZS11bml0LWJ1dHRvbixcXG4jc2VhcmNoLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtMTJweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMC43NWVtO1xcbiAgbWFyZ2luOiAwLjVlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgY2FsbFdlYXRoZXJBcGkgZnJvbSBcIi4vd2VhdGhlci1hcGlcIjtcbmltcG9ydCB7IGRpc3BsYXlBcGlEYXRhLCB0b2dnbGVUZW1wZXJhdHVyZVVuaXQgfSBmcm9tIFwiLi93ZWF0aGVyLXZpZXdcIjtcblxubGV0IHByb2NjZXNlZERhdGEgPSBcIlwiO1xuY29uc3QgdG9nZ2xlVW5pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLXVuaXQtYnV0dG9uXCIpO1xuY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWZvcm1cIik7XG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWlucHV0XCIpO1xuY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtYnV0dG9uXCIpO1xuXG5hc3luYyBmdW5jdGlvbiBhcGlDYWxsKCkge1xuICBpZiAoc2VhcmNoSW5wdXQudmFsdWUgPT09IFwiXCIpIHJldHVybjtcblxuICB0cnkge1xuICAgIHByb2NjZXNlZERhdGEgPSBhd2FpdCBjYWxsV2VhdGhlckFwaShzZWFyY2hJbnB1dC52YWx1ZSk7XG4gICAgZGlzcGxheUFwaURhdGEocHJvY2Nlc2VkRGF0YSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYWxlcnQoYCR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgfVxufVxuXG5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXBpQ2FsbCk7XG5cbnRvZ2dsZVVuaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdG9nZ2xlVGVtcGVyYXR1cmVVbml0KHByb2NjZXNlZERhdGEpO1xufSk7XG4iXSwibmFtZXMiOlsiYXBpS2V5IiwidXJsIiwiYXBpTWV0aG9kIiwicHJvY2Vzc1Jlc3BvbnNlIiwid2VhdGhlckRhdGEiLCJsb2NhdGlvbiIsIm5hbWUiLCJjaXR5IiwiY3VycmVudCIsInRlbXBfYyIsInRlbXBlcmF0dXJlQyIsInRlbXBfZiIsInRlbXBlcmF0dXJlRiIsImZlZWxzbGlrZV9jIiwiZmVlbHNMaWtlQyIsImZlZWxzbGlrZV9mIiwiZmVlbHNMaWtlRiIsImh1bWlkaXR5Iiwid2luZF9rcGgiLCJ3aW5kIiwiY2FsbFdlYXRoZXJBcGkiLCJwYXJhbWV0ZXIiLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsInJlc3BvbnNlRGF0YSIsImpzb24iLCJlcnJvciIsInNlYXJjaFJlc3VsdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmZWVsc0xpa2UiLCJ0ZW1wZXJhdHVyZSIsImRpc3BsYXlBcGlEYXRhIiwicHJvY2Nlc2VkRGF0YSIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiY2hhbmdlVG9GYWhyZW5oZWl0IiwidG9nZ2xlVGVtcGVyYXR1cmVVbml0IiwiaW5jbHVkZXMiLCJ0b2dnbGVVbml0QnV0dG9uIiwic2VhcmNoRm9ybSIsInNlYXJjaElucHV0Iiwic2VhcmNoQnV0dG9uIiwiYXBpQ2FsbCIsInZhbHVlIiwiYWxlcnQiLCJtZXNzYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = ".skin{\n    position: relative;\n}\n.nose{\n    border: 10px solid  #2e2e2e;\n    border-color: #2e2e2e transparent transparent;\n    border-bottom: none;\n    width: 0px;\n    height: 0px;\n    position: absolute;\n    left: 50%;\n    top: 145px;\n    margin-left: -10px;   \n    z-index: 1;\n}\n@keyframes wave{\n    0%{transform: rotate(0deg);}\n    33%{transform: rotate(5deg);}\n    66%{transform: rotate(-5deg);}\n    100%{transform: rotate(0deg);}\n}\n.nose:hover{\n    transform-origin: center bottom;\n    animation: wave 0.5s 1;\n}\n.circle{\n    position: absolute;\n    border: 1px solid #2e2e2e;\n    width: 20px;\n    height: 6px;   \n    top: -16px;\n    transform: translate(-50%);\n    border-radius: 10px 10px 0 0;\n    background:  #2e2e2e;\n}\n\n.eye{\n    border: 2px solid black;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    background: #2e2e2e;\n    border-radius: 50%;\n}\n.eye::before{\n    content: '';\n    display: block;\n    width: 25px;\n    height: 25px;\n    background: white;   \n    border: 2px solid black; \n    border-radius: 50%;\n    position: relative;\n    left: 8px;\n    top: 2px;\n}\n.eye.left{\n    transform: translate(-120px);\n}\n.eye.right{\n    transform: translate(120px);\n}\n.mouth{\n    position: absolute;\n    width: 146px;\n    height: 150px;   \n    top: 150px;\n    left: 50%;\n    transform: translate(-50%);\n    \n}\n.mouth .up .lip{\n    border: 3px solid #2e2e2e;\n    height: 30px;\n    width: 70px;\n    border-top-color: transparent;\n    position: relative;\n    /* top: -13px; */\n    position: absolute;\n    border-right-color: transparent;\n    border-left-color: transparent;\n    background: #ffe600;\n}\n.mouth .up .lip.left{\n    left: 1px;\n    transform: rotate(-20deg);\n    border-radius: 0 0 0 50px;\n }\n .mouth .up .lip.right{\n    right: 1px;\n    transform: rotate(20deg);\n    border-radius: 0 0 50px 0;\n }\n .mouth .up .lip::before{\n    content: '';\n    display: block;\n    width: 5px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    background: #ffe600;\n }\n .mouth .up .lip.left::before{\n    right: -4px;\n}\n.mouth .up .lip.right::before{\n    left: -4px;\n}\n.mouth .up .lip::after{\n    content: '';\n    position: absolute;\n    display: block;\n    width: 80px;\n    height: 8px;\n    top: -5px;\n    background: #ffe600;\n}\n.mouth .up .lip.left::after{\n    right: -4px;\n}\n.mouth .up .lip.right::after{\n    left: -4px;\n}\n.mouth .down{\n  /* border: 1px solid red;   */\n  height: 160px;\n  position: absolute;\n  top: 15px;\n  width: 100%;\n  overflow: hidden;\n  z-index: -1;\n}\n.mouth .down .circle1{\n    border: 3px solid black;\n    width: 125px;\n    height: 800px;\n    position: absolute;\n    bottom: 15px;\n    left: 50%;\n    transform: translate(-50%);    \n    border-radius: 100px/450px;\n    background: #9b000a;\n    overflow: hidden;\n}\n.mouth .down .circle1 .circle2{\n    /* border:1px solid  green ; */\n    height: 150px;\n    width: 150px;\n    position: absolute;\n    bottom: -35px;\n    left: 50%;\n    transform: translate(-50%);\n    border-radius: 50%;\n    background: #ff485f;\n}\n.face{\n    position: absolute;\n    left: 50%;\n    margin-left:-44px ;\n    top: 190px;\n    border: 2px solid black;\n    width: 88px;\n    height: 88px;\n    border-radius: 50%;\n    background: #ff0000;\n}\n.face.left{\n    transform: translateX(-180px);\n}\n.face.right{\n    transform: translateX(180px);\n}    \n";
var _default = string;
exports.default = _default;
},{}],"test.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//模块化
var player = {
  n: 0,
  time: 50,
  id: undefined,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.run();
  },
  events: {
    '#btnPlay': 'run',
    '#btnPause': 'stop',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  codeShow: function codeShow() {
    player.n += 1;
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }
  },
  run: function run() {
    player.stop();
    player.id = setInterval(player.codeShow, player.time);
  },
  stop: function stop() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.stop();
    player.time = 100;
    player.run();
  },
  normal: function normal() {
    player.stop();
    player.time = 50;
    player.run();
  },
  fast: function fast() {
    player.stop();
    player.time = 5;
    player.run();
  }
};
player.init();
},{"./css.js":"css.js"}],"C:/Users/容新/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "10447" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/容新/AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map
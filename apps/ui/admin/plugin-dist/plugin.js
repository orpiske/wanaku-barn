function OE(a, o) {
  for (var r = 0; r < o.length; r++) {
    const i = o[r];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const f in i)
        if (f !== "default" && !(f in a)) {
          const p = Object.getOwnPropertyDescriptor(i, f);
          p && Object.defineProperty(a, f, p.get ? p : {
            enumerable: !0,
            get: () => i[f]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
function fo(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Vu = { exports: {} }, dr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dg;
function DE() {
  if (dg) return dr;
  dg = 1;
  var a = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function r(i, f, p) {
    var m = null;
    if (p !== void 0 && (m = "" + p), f.key !== void 0 && (m = "" + f.key), "key" in f) {
      p = {};
      for (var g in f)
        g !== "key" && (p[g] = f[g]);
    } else p = f;
    return f = p.ref, {
      $$typeof: a,
      type: i,
      key: m,
      ref: f !== void 0 ? f : null,
      props: p
    };
  }
  return dr.Fragment = o, dr.jsx = r, dr.jsxs = r, dr;
}
var mg;
function ME() {
  return mg || (mg = 1, Vu.exports = DE()), Vu.exports;
}
var M = ME();
typeof globalThis.process > "u" && (globalThis.process = { env: { NODE_ENV: "production" } });
var ku = { exports: {} }, De = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pg;
function $E() {
  if (pg) return De;
  pg = 1;
  var a = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), p = Symbol.for("react.consumer"), m = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), w = Symbol.iterator;
  function x(O) {
    return O === null || typeof O != "object" ? null : (O = w && O[w] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var N = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, C = Object.assign, A = {};
  function $(O, q, P) {
    this.props = O, this.context = q, this.refs = A, this.updater = P || N;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(O, q) {
    if (typeof O != "object" && typeof O != "function" && O != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, O, q, "setState");
  }, $.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function _() {
  }
  _.prototype = $.prototype;
  function z(O, q, P) {
    this.props = O, this.context = q, this.refs = A, this.updater = P || N;
  }
  var D = z.prototype = new _();
  D.constructor = z, C(D, $.prototype), D.isPureReactComponent = !0;
  var H = Array.isArray;
  function L() {
  }
  var j = { H: null, A: null, T: null, S: null }, I = Object.prototype.hasOwnProperty;
  function F(O, q, P) {
    var G = P.ref;
    return {
      $$typeof: a,
      type: O,
      key: q,
      ref: G !== void 0 ? G : null,
      props: P
    };
  }
  function Z(O, q) {
    return F(O.type, q, O.props);
  }
  function he(O) {
    return typeof O == "object" && O !== null && O.$$typeof === a;
  }
  function ae(O) {
    var q = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(P) {
      return q[P];
    });
  }
  var se = /\/+/g;
  function ne(O, q) {
    return typeof O == "object" && O !== null && O.key != null ? ae("" + O.key) : q.toString(36);
  }
  function ge(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (typeof O.status == "string" ? O.then(L, L) : (O.status = "pending", O.then(
          function(q) {
            O.status === "pending" && (O.status = "fulfilled", O.value = q);
          },
          function(q) {
            O.status === "pending" && (O.status = "rejected", O.reason = q);
          }
        )), O.status) {
          case "fulfilled":
            return O.value;
          case "rejected":
            throw O.reason;
        }
    }
    throw O;
  }
  function R(O, q, P, G, te) {
    var V = typeof O;
    (V === "undefined" || V === "boolean") && (O = null);
    var Q = !1;
    if (O === null) Q = !0;
    else
      switch (V) {
        case "bigint":
        case "string":
        case "number":
          Q = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case a:
            case o:
              Q = !0;
              break;
            case E:
              return Q = O._init, R(
                Q(O._payload),
                q,
                P,
                G,
                te
              );
          }
      }
    if (Q)
      return te = te(O), Q = G === "" ? "." + ne(O, 0) : G, H(te) ? (P = "", Q != null && (P = Q.replace(se, "$&/") + "/"), R(te, q, P, "", function(ve) {
        return ve;
      })) : te != null && (he(te) && (te = Z(
        te,
        P + (te.key == null || O && O.key === te.key ? "" : ("" + te.key).replace(
          se,
          "$&/"
        ) + "/") + Q
      )), q.push(te)), 1;
    Q = 0;
    var me = G === "" ? "." : G + ":";
    if (H(O))
      for (var ie = 0; ie < O.length; ie++)
        G = O[ie], V = me + ne(G, ie), Q += R(
          G,
          q,
          P,
          V,
          te
        );
    else if (ie = x(O), typeof ie == "function")
      for (O = ie.call(O), ie = 0; !(G = O.next()).done; )
        G = G.value, V = me + ne(G, ie++), Q += R(
          G,
          q,
          P,
          V,
          te
        );
    else if (V === "object") {
      if (typeof O.then == "function")
        return R(
          ge(O),
          q,
          P,
          G,
          te
        );
      throw q = String(O), Error(
        "Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Q;
  }
  function J(O, q, P) {
    if (O == null) return O;
    var G = [], te = 0;
    return R(O, G, "", "", function(V) {
      return q.call(P, V, te++);
    }), G;
  }
  function W(O) {
    if (O._status === -1) {
      var q = O._result;
      q = q(), q.then(
        function(P) {
          (O._status === 0 || O._status === -1) && (O._status = 1, O._result = P);
        },
        function(P) {
          (O._status === 0 || O._status === -1) && (O._status = 2, O._result = P);
        }
      ), O._status === -1 && (O._status = 0, O._result = q);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var le = typeof reportError == "function" ? reportError : function(O) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var q = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof O == "object" && O !== null && typeof O.message == "string" ? String(O.message) : String(O),
        error: O
      });
      if (!window.dispatchEvent(q)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", O);
      return;
    }
    console.error(O);
  }, pe = {
    map: J,
    forEach: function(O, q, P) {
      J(
        O,
        function() {
          q.apply(this, arguments);
        },
        P
      );
    },
    count: function(O) {
      var q = 0;
      return J(O, function() {
        q++;
      }), q;
    },
    toArray: function(O) {
      return J(O, function(q) {
        return q;
      }) || [];
    },
    only: function(O) {
      if (!he(O))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return O;
    }
  };
  return De.Activity = S, De.Children = pe, De.Component = $, De.Fragment = r, De.Profiler = f, De.PureComponent = z, De.StrictMode = i, De.Suspense = h, De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j, De.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(O) {
      return j.H.useMemoCache(O);
    }
  }, De.cache = function(O) {
    return function() {
      return O.apply(null, arguments);
    };
  }, De.cacheSignal = function() {
    return null;
  }, De.cloneElement = function(O, q, P) {
    if (O == null)
      throw Error(
        "The argument must be a React element, but you passed " + O + "."
      );
    var G = C({}, O.props), te = O.key;
    if (q != null)
      for (V in q.key !== void 0 && (te = "" + q.key), q)
        !I.call(q, V) || V === "key" || V === "__self" || V === "__source" || V === "ref" && q.ref === void 0 || (G[V] = q[V]);
    var V = arguments.length - 2;
    if (V === 1) G.children = P;
    else if (1 < V) {
      for (var Q = Array(V), me = 0; me < V; me++)
        Q[me] = arguments[me + 2];
      G.children = Q;
    }
    return F(O.type, te, G);
  }, De.createContext = function(O) {
    return O = {
      $$typeof: m,
      _currentValue: O,
      _currentValue2: O,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, O.Provider = O, O.Consumer = {
      $$typeof: p,
      _context: O
    }, O;
  }, De.createElement = function(O, q, P) {
    var G, te = {}, V = null;
    if (q != null)
      for (G in q.key !== void 0 && (V = "" + q.key), q)
        I.call(q, G) && G !== "key" && G !== "__self" && G !== "__source" && (te[G] = q[G]);
    var Q = arguments.length - 2;
    if (Q === 1) te.children = P;
    else if (1 < Q) {
      for (var me = Array(Q), ie = 0; ie < Q; ie++)
        me[ie] = arguments[ie + 2];
      te.children = me;
    }
    if (O && O.defaultProps)
      for (G in Q = O.defaultProps, Q)
        te[G] === void 0 && (te[G] = Q[G]);
    return F(O, V, te);
  }, De.createRef = function() {
    return { current: null };
  }, De.forwardRef = function(O) {
    return { $$typeof: g, render: O };
  }, De.isValidElement = he, De.lazy = function(O) {
    return {
      $$typeof: E,
      _payload: { _status: -1, _result: O },
      _init: W
    };
  }, De.memo = function(O, q) {
    return {
      $$typeof: b,
      type: O,
      compare: q === void 0 ? null : q
    };
  }, De.startTransition = function(O) {
    var q = j.T, P = {};
    j.T = P;
    try {
      var G = O(), te = j.S;
      te !== null && te(P, G), typeof G == "object" && G !== null && typeof G.then == "function" && G.then(L, le);
    } catch (V) {
      le(V);
    } finally {
      q !== null && P.types !== null && (q.types = P.types), j.T = q;
    }
  }, De.unstable_useCacheRefresh = function() {
    return j.H.useCacheRefresh();
  }, De.use = function(O) {
    return j.H.use(O);
  }, De.useActionState = function(O, q, P) {
    return j.H.useActionState(O, q, P);
  }, De.useCallback = function(O, q) {
    return j.H.useCallback(O, q);
  }, De.useContext = function(O) {
    return j.H.useContext(O);
  }, De.useDebugValue = function() {
  }, De.useDeferredValue = function(O, q) {
    return j.H.useDeferredValue(O, q);
  }, De.useEffect = function(O, q) {
    return j.H.useEffect(O, q);
  }, De.useEffectEvent = function(O) {
    return j.H.useEffectEvent(O);
  }, De.useId = function() {
    return j.H.useId();
  }, De.useImperativeHandle = function(O, q, P) {
    return j.H.useImperativeHandle(O, q, P);
  }, De.useInsertionEffect = function(O, q) {
    return j.H.useInsertionEffect(O, q);
  }, De.useLayoutEffect = function(O, q) {
    return j.H.useLayoutEffect(O, q);
  }, De.useMemo = function(O, q) {
    return j.H.useMemo(O, q);
  }, De.useOptimistic = function(O, q) {
    return j.H.useOptimistic(O, q);
  }, De.useReducer = function(O, q, P) {
    return j.H.useReducer(O, q, P);
  }, De.useRef = function(O) {
    return j.H.useRef(O);
  }, De.useState = function(O) {
    return j.H.useState(O);
  }, De.useSyncExternalStore = function(O, q, P) {
    return j.H.useSyncExternalStore(
      O,
      q,
      P
    );
  }, De.useTransition = function() {
    return j.H.useTransition();
  }, De.version = "19.2.4", De;
}
var hg;
function Nf() {
  return hg || (hg = 1, ku.exports = $E()), ku.exports;
}
var v = Nf();
const d = /* @__PURE__ */ fo(v), $0 = /* @__PURE__ */ OE({
  __proto__: null,
  default: d
}, [v]);
var Iu = { exports: {} }, mr = {}, Gu = { exports: {} }, Zu = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gg;
function BE() {
  return gg || (gg = 1, (function(a) {
    function o(R, J) {
      var W = R.length;
      R.push(J);
      e: for (; 0 < W; ) {
        var le = W - 1 >>> 1, pe = R[le];
        if (0 < f(pe, J))
          R[le] = J, R[W] = pe, W = le;
        else break e;
      }
    }
    function r(R) {
      return R.length === 0 ? null : R[0];
    }
    function i(R) {
      if (R.length === 0) return null;
      var J = R[0], W = R.pop();
      if (W !== J) {
        R[0] = W;
        e: for (var le = 0, pe = R.length, O = pe >>> 1; le < O; ) {
          var q = 2 * (le + 1) - 1, P = R[q], G = q + 1, te = R[G];
          if (0 > f(P, W))
            G < pe && 0 > f(te, P) ? (R[le] = te, R[G] = W, le = G) : (R[le] = P, R[q] = W, le = q);
          else if (G < pe && 0 > f(te, W))
            R[le] = te, R[G] = W, le = G;
          else break e;
        }
      }
      return J;
    }
    function f(R, J) {
      var W = R.sortIndex - J.sortIndex;
      return W !== 0 ? W : R.id - J.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var p = performance;
      a.unstable_now = function() {
        return p.now();
      };
    } else {
      var m = Date, g = m.now();
      a.unstable_now = function() {
        return m.now() - g;
      };
    }
    var h = [], b = [], E = 1, S = null, w = 3, x = !1, N = !1, C = !1, A = !1, $ = typeof setTimeout == "function" ? setTimeout : null, _ = typeof clearTimeout == "function" ? clearTimeout : null, z = typeof setImmediate < "u" ? setImmediate : null;
    function D(R) {
      for (var J = r(b); J !== null; ) {
        if (J.callback === null) i(b);
        else if (J.startTime <= R)
          i(b), J.sortIndex = J.expirationTime, o(h, J);
        else break;
        J = r(b);
      }
    }
    function H(R) {
      if (C = !1, D(R), !N)
        if (r(h) !== null)
          N = !0, L || (L = !0, ae());
        else {
          var J = r(b);
          J !== null && ge(H, J.startTime - R);
        }
    }
    var L = !1, j = -1, I = 5, F = -1;
    function Z() {
      return A ? !0 : !(a.unstable_now() - F < I);
    }
    function he() {
      if (A = !1, L) {
        var R = a.unstable_now();
        F = R;
        var J = !0;
        try {
          e: {
            N = !1, C && (C = !1, _(j), j = -1), x = !0;
            var W = w;
            try {
              t: {
                for (D(R), S = r(h); S !== null && !(S.expirationTime > R && Z()); ) {
                  var le = S.callback;
                  if (typeof le == "function") {
                    S.callback = null, w = S.priorityLevel;
                    var pe = le(
                      S.expirationTime <= R
                    );
                    if (R = a.unstable_now(), typeof pe == "function") {
                      S.callback = pe, D(R), J = !0;
                      break t;
                    }
                    S === r(h) && i(h), D(R);
                  } else i(h);
                  S = r(h);
                }
                if (S !== null) J = !0;
                else {
                  var O = r(b);
                  O !== null && ge(
                    H,
                    O.startTime - R
                  ), J = !1;
                }
              }
              break e;
            } finally {
              S = null, w = W, x = !1;
            }
            J = void 0;
          }
        } finally {
          J ? ae() : L = !1;
        }
      }
    }
    var ae;
    if (typeof z == "function")
      ae = function() {
        z(he);
      };
    else if (typeof MessageChannel < "u") {
      var se = new MessageChannel(), ne = se.port2;
      se.port1.onmessage = he, ae = function() {
        ne.postMessage(null);
      };
    } else
      ae = function() {
        $(he, 0);
      };
    function ge(R, J) {
      j = $(function() {
        R(a.unstable_now());
      }, J);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, a.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : I = 0 < R ? Math.floor(1e3 / R) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, a.unstable_next = function(R) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = w;
      }
      var W = w;
      w = J;
      try {
        return R();
      } finally {
        w = W;
      }
    }, a.unstable_requestPaint = function() {
      A = !0;
    }, a.unstable_runWithPriority = function(R, J) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var W = w;
      w = R;
      try {
        return J();
      } finally {
        w = W;
      }
    }, a.unstable_scheduleCallback = function(R, J, W) {
      var le = a.unstable_now();
      switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? le + W : le) : W = le, R) {
        case 1:
          var pe = -1;
          break;
        case 2:
          pe = 250;
          break;
        case 5:
          pe = 1073741823;
          break;
        case 4:
          pe = 1e4;
          break;
        default:
          pe = 5e3;
      }
      return pe = W + pe, R = {
        id: E++,
        callback: J,
        priorityLevel: R,
        startTime: W,
        expirationTime: pe,
        sortIndex: -1
      }, W > le ? (R.sortIndex = W, o(b, R), r(h) === null && R === r(b) && (C ? (_(j), j = -1) : C = !0, ge(H, W - le))) : (R.sortIndex = pe, o(h, R), N || x || (N = !0, L || (L = !0, ae()))), R;
    }, a.unstable_shouldYield = Z, a.unstable_wrapCallback = function(R) {
      var J = w;
      return function() {
        var W = w;
        w = J;
        try {
          return R.apply(this, arguments);
        } finally {
          w = W;
        }
      };
    };
  })(Zu)), Zu;
}
var bg;
function LE() {
  return bg || (bg = 1, Gu.exports = BE()), Gu.exports;
}
var Yu = { exports: {} }, Bt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yg;
function zE() {
  if (yg) return Bt;
  yg = 1;
  var a = Nf();
  function o(h) {
    var b = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var E = 2; E < arguments.length; E++)
        b += "&args[]=" + encodeURIComponent(arguments[E]);
    }
    return "Minified React error #" + h + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var i = {
    d: {
      f: r,
      r: function() {
        throw Error(o(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, f = Symbol.for("react.portal");
  function p(h, b, E) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: S == null ? null : "" + S,
      children: h,
      containerInfo: b,
      implementation: E
    };
  }
  var m = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(h, b) {
    if (h === "font") return "";
    if (typeof b == "string")
      return b === "use-credentials" ? b : "";
  }
  return Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, Bt.createPortal = function(h, b) {
    var E = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(o(299));
    return p(h, b, null, E);
  }, Bt.flushSync = function(h) {
    var b = m.T, E = i.p;
    try {
      if (m.T = null, i.p = 2, h) return h();
    } finally {
      m.T = b, i.p = E, i.d.f();
    }
  }, Bt.preconnect = function(h, b) {
    typeof h == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, i.d.C(h, b));
  }, Bt.prefetchDNS = function(h) {
    typeof h == "string" && i.d.D(h);
  }, Bt.preinit = function(h, b) {
    if (typeof h == "string" && b && typeof b.as == "string") {
      var E = b.as, S = g(E, b.crossOrigin), w = typeof b.integrity == "string" ? b.integrity : void 0, x = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      E === "style" ? i.d.S(
        h,
        typeof b.precedence == "string" ? b.precedence : void 0,
        {
          crossOrigin: S,
          integrity: w,
          fetchPriority: x
        }
      ) : E === "script" && i.d.X(h, {
        crossOrigin: S,
        integrity: w,
        fetchPriority: x,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, Bt.preinitModule = function(h, b) {
    if (typeof h == "string")
      if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var E = g(
            b.as,
            b.crossOrigin
          );
          i.d.M(h, {
            crossOrigin: E,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0
          });
        }
      } else b == null && i.d.M(h);
  }, Bt.preload = function(h, b) {
    if (typeof h == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var E = b.as, S = g(E, b.crossOrigin);
      i.d.L(h, E, {
        crossOrigin: S,
        integrity: typeof b.integrity == "string" ? b.integrity : void 0,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0,
        type: typeof b.type == "string" ? b.type : void 0,
        fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
        referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
        imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
        imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
        media: typeof b.media == "string" ? b.media : void 0
      });
    }
  }, Bt.preloadModule = function(h, b) {
    if (typeof h == "string")
      if (b) {
        var E = g(b.as, b.crossOrigin);
        i.d.m(h, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: E,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0
        });
      } else i.d.m(h);
  }, Bt.requestFormReset = function(h) {
    i.d.r(h);
  }, Bt.unstable_batchedUpdates = function(h, b) {
    return h(b);
  }, Bt.useFormState = function(h, b, E) {
    return m.H.useFormState(h, b, E);
  }, Bt.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, Bt.version = "19.2.4", Bt;
}
var vg;
function B0() {
  if (vg) return Yu.exports;
  vg = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (o) {
        console.error(o);
      }
  }
  return a(), Yu.exports = zE(), Yu.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eg;
function jE() {
  if (Eg) return mr;
  Eg = 1;
  var a = LE(), o = Nf(), r = B0();
  function i(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function p(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function m(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function g(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function h(e) {
    if (p(e) !== e)
      throw Error(i(188));
  }
  function b(e) {
    var t = e.alternate;
    if (!t) {
      if (t = p(e), t === null) throw Error(i(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var s = n.return;
      if (s === null) break;
      var u = s.alternate;
      if (u === null) {
        if (l = s.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (s.child === u.child) {
        for (u = s.child; u; ) {
          if (u === n) return h(s), e;
          if (u === l) return h(s), t;
          u = u.sibling;
        }
        throw Error(i(188));
      }
      if (n.return !== l.return) n = s, l = u;
      else {
        for (var y = !1, T = s.child; T; ) {
          if (T === n) {
            y = !0, n = s, l = u;
            break;
          }
          if (T === l) {
            y = !0, l = s, n = u;
            break;
          }
          T = T.sibling;
        }
        if (!y) {
          for (T = u.child; T; ) {
            if (T === n) {
              y = !0, n = u, l = s;
              break;
            }
            if (T === l) {
              y = !0, l = u, n = s;
              break;
            }
            T = T.sibling;
          }
          if (!y) throw Error(i(189));
        }
      }
      if (n.alternate !== l) throw Error(i(190));
    }
    if (n.tag !== 3) throw Error(i(188));
    return n.stateNode.current === n ? e : t;
  }
  function E(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = E(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var S = Object.assign, w = Symbol.for("react.element"), x = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), z = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), F = Symbol.for("react.activity"), Z = Symbol.for("react.memo_cache_sentinel"), he = Symbol.iterator;
  function ae(e) {
    return e === null || typeof e != "object" ? null : (e = he && e[he] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var se = Symbol.for("react.client.reference");
  function ne(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === se ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case C:
        return "Fragment";
      case $:
        return "Profiler";
      case A:
        return "StrictMode";
      case H:
        return "Suspense";
      case L:
        return "SuspenseList";
      case F:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case N:
          return "Portal";
        case z:
          return e.displayName || "Context";
        case _:
          return (e._context.displayName || "Context") + ".Consumer";
        case D:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case j:
          return t = e.displayName || null, t !== null ? t : ne(e.type) || "Memo";
        case I:
          t = e._payload, e = e._init;
          try {
            return ne(e(t));
          } catch {
          }
      }
    return null;
  }
  var ge = Array.isArray, R = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, le = [], pe = -1;
  function O(e) {
    return { current: e };
  }
  function q(e) {
    0 > pe || (e.current = le[pe], le[pe] = null, pe--);
  }
  function P(e, t) {
    pe++, le[pe] = e.current, e.current = t;
  }
  var G = O(null), te = O(null), V = O(null), Q = O(null);
  function me(e, t) {
    switch (P(V, t), P(te, e), P(G, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Lh(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Lh(t), e = zh(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    q(G), P(G, e);
  }
  function ie() {
    q(G), q(te), q(V);
  }
  function ve(e) {
    e.memoizedState !== null && P(Q, e);
    var t = G.current, n = zh(t, e.type);
    t !== n && (P(te, e), P(G, n));
  }
  function Ne(e) {
    te.current === e && (q(G), q(te)), Q.current === e && (q(Q), cr._currentValue = W);
  }
  var Te, Oe;
  function Ee(e) {
    if (Te === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Te = t && t[1] || "", Oe = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Te + e + Oe;
  }
  var Ue = !1;
  function Se(e, t) {
    if (!e || Ue) return "";
    Ue = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var ue = function() {
                throw Error();
              };
              if (Object.defineProperty(ue.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(ue, []);
                } catch (ee) {
                  var K = ee;
                }
                Reflect.construct(e, [], ue);
              } else {
                try {
                  ue.call();
                } catch (ee) {
                  K = ee;
                }
                e.call(ue.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (ee) {
                K = ee;
              }
              (ue = e()) && typeof ue.catch == "function" && ue.catch(function() {
              });
            }
          } catch (ee) {
            if (ee && K && typeof ee.stack == "string")
              return [ee.stack, K.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = l.DetermineComponentFrameRoot(), y = u[0], T = u[1];
      if (y && T) {
        var B = y.split(`
`), X = T.split(`
`);
        for (s = l = 0; l < B.length && !B[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; s < X.length && !X[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (l === B.length || s === X.length)
          for (l = B.length - 1, s = X.length - 1; 1 <= l && 0 <= s && B[l] !== X[s]; )
            s--;
        for (; 1 <= l && 0 <= s; l--, s--)
          if (B[l] !== X[s]) {
            if (l !== 1 || s !== 1)
              do
                if (l--, s--, 0 > s || B[l] !== X[s]) {
                  var re = `
` + B[l].replace(" at new ", " at ");
                  return e.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", e.displayName)), re;
                }
              while (1 <= l && 0 <= s);
            break;
          }
      }
    } finally {
      Ue = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Ee(n) : "";
  }
  function fe(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ee(e.type);
      case 16:
        return Ee("Lazy");
      case 13:
        return e.child !== t && t !== null ? Ee("Suspense Fallback") : Ee("Suspense");
      case 19:
        return Ee("SuspenseList");
      case 0:
      case 15:
        return Se(e.type, !1);
      case 11:
        return Se(e.type.render, !1);
      case 1:
        return Se(e.type, !0);
      case 31:
        return Ee("Activity");
      default:
        return "";
    }
  }
  function Ye(e) {
    try {
      var t = "", n = null;
      do
        t += fe(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var ze = Object.prototype.hasOwnProperty, je = a.unstable_scheduleCallback, We = a.unstable_cancelCallback, _e = a.unstable_shouldYield, ke = a.unstable_requestPaint, Xe = a.unstable_now, yn = a.unstable_getCurrentPriorityLevel, Jt = a.unstable_ImmediatePriority, Wt = a.unstable_UserBlockingPriority, Hn = a.unstable_NormalPriority, bo = a.unstable_LowPriority, yo = a.unstable_IdlePriority, $r = a.log, Br = a.unstable_setDisableYieldValue, ol = null, $t = null;
  function Nn(e) {
    if (typeof $r == "function" && Br(e), $t && typeof $t.setStrictMode == "function")
      try {
        $t.setStrictMode(ol, e);
      } catch {
      }
  }
  var jt = Math.clz32 ? Math.clz32 : Lr, vo = Math.log, vd = Math.LN2;
  function Lr(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (vo(e) / vd | 0) | 0;
  }
  var Un = 256, rl = 262144, Eo = 4194304;
  function vn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ql(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var s = 0, u = e.suspendedLanes, y = e.pingedLanes;
    e = e.warmLanes;
    var T = l & 134217727;
    return T !== 0 ? (l = T & ~u, l !== 0 ? s = vn(l) : (y &= T, y !== 0 ? s = vn(y) : n || (n = T & ~e, n !== 0 && (s = vn(n))))) : (T = l & ~u, T !== 0 ? s = vn(T) : y !== 0 ? s = vn(y) : n || (n = l & ~e, n !== 0 && (s = vn(n)))), s === 0 ? 0 : t !== 0 && t !== s && (t & u) === 0 && (u = s & -s, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : s;
  }
  function il(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Oc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function So() {
    var e = Eo;
    return Eo <<= 1, (Eo & 62914560) === 0 && (Eo = 4194304), e;
  }
  function pa(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Be(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function rt(e, t, n, l, s, u) {
    var y = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var T = e.entanglements, B = e.expirationTimes, X = e.hiddenUpdates;
    for (n = y & ~n; 0 < n; ) {
      var re = 31 - jt(n), ue = 1 << re;
      T[re] = 0, B[re] = -1;
      var K = X[re];
      if (K !== null)
        for (X[re] = null, re = 0; re < K.length; re++) {
          var ee = K[re];
          ee !== null && (ee.lane &= -536870913);
        }
      n &= ~ue;
    }
    l !== 0 && Ht(e, l, 0), u !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(y & ~t));
  }
  function Ht(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - jt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930;
  }
  function En(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - jt(n), s = 1 << l;
      s & t | e[l] & t && (e[l] |= t), n &= ~s;
    }
  }
  function Vl(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : wo(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function wo(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Dc(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ed() {
    var e = J.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : og(e.type));
  }
  function Sd(e, t) {
    var n = J.p;
    try {
      return J.p = e, t();
    } finally {
      J.p = n;
    }
  }
  var cl = Math.random().toString(36).slice(2), At = "__reactFiber$" + cl, Gt = "__reactProps$" + cl, ha = "__reactContainer$" + cl, Mc = "__reactEvents$" + cl, vv = "__reactListeners$" + cl, Ev = "__reactHandles$" + cl, wd = "__reactResources$" + cl, xo = "__reactMarker$" + cl;
  function $c(e) {
    delete e[At], delete e[Gt], delete e[Mc], delete e[vv], delete e[Ev];
  }
  function ga(e) {
    var t = e[At];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[ha] || n[At]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Ih(e); e !== null; ) {
            if (n = e[At]) return n;
            e = Ih(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ba(e) {
    if (e = e[At] || e[ha]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function To(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(i(33));
  }
  function ya(e) {
    var t = e[wd];
    return t || (t = e[wd] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Nt(e) {
    e[xo] = !0;
  }
  var xd = /* @__PURE__ */ new Set(), Td = {};
  function kl(e, t) {
    va(e, t), va(e + "Capture", t);
  }
  function va(e, t) {
    for (Td[e] = t, e = 0; e < t.length; e++)
      xd.add(t[e]);
  }
  var Sv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Cd = {}, Nd = {};
  function wv(e) {
    return ze.call(Nd, e) ? !0 : ze.call(Cd, e) ? !1 : Sv.test(e) ? Nd[e] = !0 : (Cd[e] = !0, !1);
  }
  function zr(e, t, n) {
    if (wv(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function jr(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function qn(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }
  function cn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function _d(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function xv(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var s = l.get, u = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(y) {
          n = "" + y, u.call(this, y);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(y) {
          n = "" + y;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Bc(e) {
    if (!e._valueTracker) {
      var t = _d(e) ? "checked" : "value";
      e._valueTracker = xv(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Ad(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = _d(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Hr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Tv = /[\n"\\]/g;
  function sn(e) {
    return e.replace(
      Tv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Lc(e, t, n, l, s, u, y, T) {
    e.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.type = y : e.removeAttribute("type"), t != null ? y === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + cn(t)) : e.value !== "" + cn(t) && (e.value = "" + cn(t)) : y !== "submit" && y !== "reset" || e.removeAttribute("value"), t != null ? zc(e, y, cn(t)) : n != null ? zc(e, y, cn(n)) : l != null && e.removeAttribute("value"), s == null && u != null && (e.defaultChecked = !!u), s != null && (e.checked = s && typeof s != "function" && typeof s != "symbol"), T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? e.name = "" + cn(T) : e.removeAttribute("name");
  }
  function Rd(e, t, n, l, s, u, y, T) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Bc(e);
        return;
      }
      n = n != null ? "" + cn(n) : "", t = t != null ? "" + cn(t) : n, T || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? s, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = T ? e.checked : !!l, e.defaultChecked = !!l, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.name = y), Bc(e);
  }
  function zc(e, t, n) {
    t === "number" && Hr(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Ea(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < n.length; s++)
        t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++)
        s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + cn(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          e[s].selected = !0, l && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Od(e, t, n) {
    if (t != null && (t = "" + cn(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + cn(n) : "";
  }
  function Dd(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(i(92));
        if (ge(l)) {
          if (1 < l.length) throw Error(i(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = cn(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), Bc(e);
  }
  function Sa(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Cv = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Md(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Cv.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function $d(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(i(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var s in t)
        l = t[s], t.hasOwnProperty(s) && n[s] !== l && Md(e, s, l);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Md(e, u, t[u]);
  }
  function jc(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Nv = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), _v = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ur(e) {
    return _v.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Vn() {
  }
  var Hc = null;
  function Uc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var wa = null, xa = null;
  function Bd(e) {
    var t = ba(e);
    if (t && (e = t.stateNode)) {
      var n = e[Gt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Lc(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + sn(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var s = l[Gt] || null;
                if (!s) throw Error(i(90));
                Lc(
                  l,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              l = n[t], l.form === e.form && Ad(l);
          }
          break e;
        case "textarea":
          Od(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Ea(e, !!n.multiple, t, !1);
      }
    }
  }
  var qc = !1;
  function Ld(e, t, n) {
    if (qc) return e(t, n);
    qc = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (qc = !1, (wa !== null || xa !== null) && (Ni(), wa && (t = wa, e = xa, xa = wa = null, Bd(t), e)))
        for (t = 0; t < e.length; t++) Bd(e[t]);
    }
  }
  function Co(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[Gt] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        i(231, t, typeof n)
      );
    return n;
  }
  var kn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Vc = !1;
  if (kn)
    try {
      var No = {};
      Object.defineProperty(No, "passive", {
        get: function() {
          Vc = !0;
        }
      }), window.addEventListener("test", No, No), window.removeEventListener("test", No, No);
    } catch {
      Vc = !1;
    }
  var sl = null, kc = null, qr = null;
  function zd() {
    if (qr) return qr;
    var e, t = kc, n = t.length, l, s = "value" in sl ? sl.value : sl.textContent, u = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++) ;
    var y = n - e;
    for (l = 1; l <= y && t[n - l] === s[u - l]; l++) ;
    return qr = s.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Vr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function kr() {
    return !0;
  }
  function jd() {
    return !1;
  }
  function Zt(e) {
    function t(n, l, s, u, y) {
      this._reactName = n, this._targetInst = s, this.type = l, this.nativeEvent = u, this.target = y, this.currentTarget = null;
      for (var T in e)
        e.hasOwnProperty(T) && (n = e[T], this[T] = n ? n(u) : u[T]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? kr : jd, this.isPropagationStopped = jd, this;
    }
    return S(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = kr);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = kr);
      },
      persist: function() {
      },
      isPersistent: kr
    }), t;
  }
  var Il = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ir = Zt(Il), _o = S({}, Il, { view: 0, detail: 0 }), Av = Zt(_o), Ic, Gc, Ao, Gr = S({}, _o, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Yc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ao && (Ao && e.type === "mousemove" ? (Ic = e.screenX - Ao.screenX, Gc = e.screenY - Ao.screenY) : Gc = Ic = 0, Ao = e), Ic);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Gc;
    }
  }), Hd = Zt(Gr), Rv = S({}, Gr, { dataTransfer: 0 }), Ov = Zt(Rv), Dv = S({}, _o, { relatedTarget: 0 }), Zc = Zt(Dv), Mv = S({}, Il, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $v = Zt(Mv), Bv = S({}, Il, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Lv = Zt(Bv), zv = S({}, Il, { data: 0 }), Ud = Zt(zv), jv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Hv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Uv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function qv(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Uv[e]) ? !!t[e] : !1;
  }
  function Yc() {
    return qv;
  }
  var Vv = S({}, _o, {
    key: function(e) {
      if (e.key) {
        var t = jv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Vr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Hv[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Yc,
    charCode: function(e) {
      return e.type === "keypress" ? Vr(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Vr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), kv = Zt(Vv), Iv = S({}, Gr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), qd = Zt(Iv), Gv = S({}, _o, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Yc
  }), Zv = Zt(Gv), Yv = S({}, Il, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Xv = Zt(Yv), Qv = S({}, Gr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Kv = Zt(Qv), Fv = S({}, Il, {
    newState: 0,
    oldState: 0
  }), Jv = Zt(Fv), Wv = [9, 13, 27, 32], Xc = kn && "CompositionEvent" in window, Ro = null;
  kn && "documentMode" in document && (Ro = document.documentMode);
  var Pv = kn && "TextEvent" in window && !Ro, Vd = kn && (!Xc || Ro && 8 < Ro && 11 >= Ro), kd = " ", Id = !1;
  function Gd(e, t) {
    switch (e) {
      case "keyup":
        return Wv.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Zd(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ta = !1;
  function e2(e, t) {
    switch (e) {
      case "compositionend":
        return Zd(t);
      case "keypress":
        return t.which !== 32 ? null : (Id = !0, kd);
      case "textInput":
        return e = t.data, e === kd && Id ? null : e;
      default:
        return null;
    }
  }
  function t2(e, t) {
    if (Ta)
      return e === "compositionend" || !Xc && Gd(e, t) ? (e = zd(), qr = kc = sl = null, Ta = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Vd && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var n2 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Yd(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!n2[e.type] : t === "textarea";
  }
  function Xd(e, t, n, l) {
    wa ? xa ? xa.push(l) : xa = [l] : wa = l, t = $i(t, "onChange"), 0 < t.length && (n = new Ir(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var Oo = null, Do = null;
  function l2(e) {
    Rh(e, 0);
  }
  function Zr(e) {
    var t = To(e);
    if (Ad(t)) return e;
  }
  function Qd(e, t) {
    if (e === "change") return t;
  }
  var Kd = !1;
  if (kn) {
    var Qc;
    if (kn) {
      var Kc = "oninput" in document;
      if (!Kc) {
        var Fd = document.createElement("div");
        Fd.setAttribute("oninput", "return;"), Kc = typeof Fd.oninput == "function";
      }
      Qc = Kc;
    } else Qc = !1;
    Kd = Qc && (!document.documentMode || 9 < document.documentMode);
  }
  function Jd() {
    Oo && (Oo.detachEvent("onpropertychange", Wd), Do = Oo = null);
  }
  function Wd(e) {
    if (e.propertyName === "value" && Zr(Do)) {
      var t = [];
      Xd(
        t,
        Do,
        e,
        Uc(e)
      ), Ld(l2, t);
    }
  }
  function a2(e, t, n) {
    e === "focusin" ? (Jd(), Oo = t, Do = n, Oo.attachEvent("onpropertychange", Wd)) : e === "focusout" && Jd();
  }
  function o2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Zr(Do);
  }
  function r2(e, t) {
    if (e === "click") return Zr(t);
  }
  function i2(e, t) {
    if (e === "input" || e === "change")
      return Zr(t);
  }
  function c2(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Pt = typeof Object.is == "function" ? Object.is : c2;
  function Mo(e, t) {
    if (Pt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var s = n[l];
      if (!ze.call(t, s) || !Pt(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  function Pd(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function em(e, t) {
    var n = Pd(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = e + n.textContent.length, e <= t && l >= t)
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Pd(n);
    }
  }
  function tm(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? tm(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function nm(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Hr(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Hr(e.document);
    }
    return t;
  }
  function Fc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var s2 = kn && "documentMode" in document && 11 >= document.documentMode, Ca = null, Jc = null, $o = null, Wc = !1;
  function lm(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Wc || Ca == null || Ca !== Hr(l) || (l = Ca, "selectionStart" in l && Fc(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), $o && Mo($o, l) || ($o = l, l = $i(Jc, "onSelect"), 0 < l.length && (t = new Ir(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = Ca)));
  }
  function Gl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Na = {
    animationend: Gl("Animation", "AnimationEnd"),
    animationiteration: Gl("Animation", "AnimationIteration"),
    animationstart: Gl("Animation", "AnimationStart"),
    transitionrun: Gl("Transition", "TransitionRun"),
    transitionstart: Gl("Transition", "TransitionStart"),
    transitioncancel: Gl("Transition", "TransitionCancel"),
    transitionend: Gl("Transition", "TransitionEnd")
  }, Pc = {}, am = {};
  kn && (am = document.createElement("div").style, "AnimationEvent" in window || (delete Na.animationend.animation, delete Na.animationiteration.animation, delete Na.animationstart.animation), "TransitionEvent" in window || delete Na.transitionend.transition);
  function Zl(e) {
    if (Pc[e]) return Pc[e];
    if (!Na[e]) return e;
    var t = Na[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in am)
        return Pc[e] = t[n];
    return e;
  }
  var om = Zl("animationend"), rm = Zl("animationiteration"), im = Zl("animationstart"), u2 = Zl("transitionrun"), f2 = Zl("transitionstart"), d2 = Zl("transitioncancel"), cm = Zl("transitionend"), sm = /* @__PURE__ */ new Map(), es = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  es.push("scrollEnd");
  function Sn(e, t) {
    sm.set(e, t), kl(t, [e]);
  }
  var Yr = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, un = [], _a = 0, ts = 0;
  function Xr() {
    for (var e = _a, t = ts = _a = 0; t < e; ) {
      var n = un[t];
      un[t++] = null;
      var l = un[t];
      un[t++] = null;
      var s = un[t];
      un[t++] = null;
      var u = un[t];
      if (un[t++] = null, l !== null && s !== null) {
        var y = l.pending;
        y === null ? s.next = s : (s.next = y.next, y.next = s), l.pending = s;
      }
      u !== 0 && um(n, s, u);
    }
  }
  function Qr(e, t, n, l) {
    un[_a++] = e, un[_a++] = t, un[_a++] = n, un[_a++] = l, ts |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function ns(e, t, n, l) {
    return Qr(e, t, n, l), Kr(e);
  }
  function Yl(e, t) {
    return Qr(e, null, null, t), Kr(e);
  }
  function um(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var s = !1, u = e.return; u !== null; )
      u.childLanes |= n, l = u.alternate, l !== null && (l.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (s = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, s && t !== null && (s = 31 - jt(n), e = u.hiddenUpdates, l = e[s], l === null ? e[s] = [t] : l.push(t), t.lane = n | 536870912), u) : null;
  }
  function Kr(e) {
    if (50 < tr)
      throw tr = 0, fu = null, Error(i(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Aa = {};
  function m2(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function en(e, t, n, l) {
    return new m2(e, t, n, l);
  }
  function ls(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function In(e, t) {
    var n = e.alternate;
    return n === null ? (n = en(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function fm(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Fr(e, t, n, l, s, u) {
    var y = 0;
    if (l = e, typeof e == "function") ls(e) && (y = 1);
    else if (typeof e == "string")
      y = yE(
        e,
        n,
        G.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case F:
          return e = en(31, n, t, s), e.elementType = F, e.lanes = u, e;
        case C:
          return Xl(n.children, s, u, t);
        case A:
          y = 8, s |= 24;
          break;
        case $:
          return e = en(12, n, t, s | 2), e.elementType = $, e.lanes = u, e;
        case H:
          return e = en(13, n, t, s), e.elementType = H, e.lanes = u, e;
        case L:
          return e = en(19, n, t, s), e.elementType = L, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case z:
                y = 10;
                break e;
              case _:
                y = 9;
                break e;
              case D:
                y = 11;
                break e;
              case j:
                y = 14;
                break e;
              case I:
                y = 16, l = null;
                break e;
            }
          y = 29, n = Error(
            i(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = en(y, n, t, s), t.elementType = e, t.type = l, t.lanes = u, t;
  }
  function Xl(e, t, n, l) {
    return e = en(7, e, l, t), e.lanes = n, e;
  }
  function as(e, t, n) {
    return e = en(6, e, null, t), e.lanes = n, e;
  }
  function dm(e) {
    var t = en(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function os(e, t, n) {
    return t = en(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var mm = /* @__PURE__ */ new WeakMap();
  function fn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = mm.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Ye(t)
      }, mm.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Ye(t)
    };
  }
  var Ra = [], Oa = 0, Jr = null, Bo = 0, dn = [], mn = 0, ul = null, _n = 1, An = "";
  function Gn(e, t) {
    Ra[Oa++] = Bo, Ra[Oa++] = Jr, Jr = e, Bo = t;
  }
  function pm(e, t, n) {
    dn[mn++] = _n, dn[mn++] = An, dn[mn++] = ul, ul = e;
    var l = _n;
    e = An;
    var s = 32 - jt(l) - 1;
    l &= ~(1 << s), n += 1;
    var u = 32 - jt(t) + s;
    if (30 < u) {
      var y = s - s % 5;
      u = (l & (1 << y) - 1).toString(32), l >>= y, s -= y, _n = 1 << 32 - jt(t) + s | n << s | l, An = u + e;
    } else
      _n = 1 << u | n << s | l, An = e;
  }
  function rs(e) {
    e.return !== null && (Gn(e, 1), pm(e, 1, 0));
  }
  function is(e) {
    for (; e === Jr; )
      Jr = Ra[--Oa], Ra[Oa] = null, Bo = Ra[--Oa], Ra[Oa] = null;
    for (; e === ul; )
      ul = dn[--mn], dn[mn] = null, An = dn[--mn], dn[mn] = null, _n = dn[--mn], dn[mn] = null;
  }
  function hm(e, t) {
    dn[mn++] = _n, dn[mn++] = An, dn[mn++] = ul, _n = t.id, An = t.overflow, ul = e;
  }
  var Rt = null, it = null, Ze = !1, fl = null, pn = !1, cs = Error(i(519));
  function dl(e) {
    var t = Error(
      i(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Lo(fn(t, e)), cs;
  }
  function gm(e) {
    var t = e.stateNode, n = e.type, l = e.memoizedProps;
    switch (t[At] = e, t[Gt] = l, n) {
      case "dialog":
        Ve("cancel", t), Ve("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ve("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < lr.length; n++)
          Ve(lr[n], t);
        break;
      case "source":
        Ve("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ve("error", t), Ve("load", t);
        break;
      case "details":
        Ve("toggle", t);
        break;
      case "input":
        Ve("invalid", t), Rd(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        Ve("invalid", t);
        break;
      case "textarea":
        Ve("invalid", t), Dd(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || $h(t.textContent, n) ? (l.popover != null && (Ve("beforetoggle", t), Ve("toggle", t)), l.onScroll != null && Ve("scroll", t), l.onScrollEnd != null && Ve("scrollend", t), l.onClick != null && (t.onclick = Vn), t = !0) : t = !1, t || dl(e, !0);
  }
  function bm(e) {
    for (Rt = e.return; Rt; )
      switch (Rt.tag) {
        case 5:
        case 31:
        case 13:
          pn = !1;
          return;
        case 27:
        case 3:
          pn = !0;
          return;
        default:
          Rt = Rt.return;
      }
  }
  function Da(e) {
    if (e !== Rt) return !1;
    if (!Ze) return bm(e), Ze = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Nu(e.type, e.memoizedProps)), n = !n), n && it && dl(e), bm(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      it = kh(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(317));
      it = kh(e);
    } else
      t === 27 ? (t = it, Nl(e.type) ? (e = Du, Du = null, it = e) : it = t) : it = Rt ? gn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ql() {
    it = Rt = null, Ze = !1;
  }
  function ss() {
    var e = fl;
    return e !== null && (Kt === null ? Kt = e : Kt.push.apply(
      Kt,
      e
    ), fl = null), e;
  }
  function Lo(e) {
    fl === null ? fl = [e] : fl.push(e);
  }
  var us = O(null), Kl = null, Zn = null;
  function ml(e, t, n) {
    P(us, t._currentValue), t._currentValue = n;
  }
  function Yn(e) {
    e._currentValue = us.current, q(us);
  }
  function fs(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function ds(e, t, n, l) {
    var s = e.child;
    for (s !== null && (s.return = e); s !== null; ) {
      var u = s.dependencies;
      if (u !== null) {
        var y = s.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var T = u;
          u = s;
          for (var B = 0; B < t.length; B++)
            if (T.context === t[B]) {
              u.lanes |= n, T = u.alternate, T !== null && (T.lanes |= n), fs(
                u.return,
                n,
                e
              ), l || (y = null);
              break e;
            }
          u = T.next;
        }
      } else if (s.tag === 18) {
        if (y = s.return, y === null) throw Error(i(341));
        y.lanes |= n, u = y.alternate, u !== null && (u.lanes |= n), fs(y, n, e), y = null;
      } else y = s.child;
      if (y !== null) y.return = s;
      else
        for (y = s; y !== null; ) {
          if (y === e) {
            y = null;
            break;
          }
          if (s = y.sibling, s !== null) {
            s.return = y.return, y = s;
            break;
          }
          y = y.return;
        }
      s = y;
    }
  }
  function Ma(e, t, n, l) {
    e = null;
    for (var s = t, u = !1; s !== null; ) {
      if (!u) {
        if ((s.flags & 524288) !== 0) u = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var y = s.alternate;
        if (y === null) throw Error(i(387));
        if (y = y.memoizedProps, y !== null) {
          var T = s.type;
          Pt(s.pendingProps.value, y.value) || (e !== null ? e.push(T) : e = [T]);
        }
      } else if (s === Q.current) {
        if (y = s.alternate, y === null) throw Error(i(387));
        y.memoizedState.memoizedState !== s.memoizedState.memoizedState && (e !== null ? e.push(cr) : e = [cr]);
      }
      s = s.return;
    }
    e !== null && ds(
      t,
      e,
      n,
      l
    ), t.flags |= 262144;
  }
  function Wr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Pt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Fl(e) {
    Kl = e, Zn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Ot(e) {
    return ym(Kl, e);
  }
  function Pr(e, t) {
    return Kl === null && Fl(e), ym(e, t);
  }
  function ym(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Zn === null) {
      if (e === null) throw Error(i(308));
      Zn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Zn = Zn.next = t;
    return n;
  }
  var p2 = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, h2 = a.unstable_scheduleCallback, g2 = a.unstable_NormalPriority, vt = {
    $$typeof: z,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ms() {
    return {
      controller: new p2(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function zo(e) {
    e.refCount--, e.refCount === 0 && h2(g2, function() {
      e.controller.abort();
    });
  }
  var jo = null, ps = 0, $a = 0, Ba = null;
  function b2(e, t) {
    if (jo === null) {
      var n = jo = [];
      ps = 0, $a = bu(), Ba = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return ps++, t.then(vm, vm), t;
  }
  function vm() {
    if (--ps === 0 && jo !== null) {
      Ba !== null && (Ba.status = "fulfilled");
      var e = jo;
      jo = null, $a = 0, Ba = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function y2(e, t) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        n.push(s);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var s = 0; s < n.length; s++) (0, n[s])(t);
      },
      function(s) {
        for (l.status = "rejected", l.reason = s, s = 0; s < n.length; s++)
          (0, n[s])(void 0);
      }
    ), l;
  }
  var Em = R.S;
  R.S = function(e, t) {
    lh = Xe(), typeof t == "object" && t !== null && typeof t.then == "function" && b2(e, t), Em !== null && Em(e, t);
  };
  var Jl = O(null);
  function hs() {
    var e = Jl.current;
    return e !== null ? e : ot.pooledCache;
  }
  function ei(e, t) {
    t === null ? P(Jl, Jl.current) : P(Jl, t.pool);
  }
  function Sm() {
    var e = hs();
    return e === null ? null : { parent: vt._currentValue, pool: e };
  }
  var La = Error(i(460)), gs = Error(i(474)), ti = Error(i(542)), ni = { then: function() {
  } };
  function wm(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function xm(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Vn, Vn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Cm(e), e;
      default:
        if (typeof t.status == "string") t.then(Vn, Vn);
        else {
          if (e = ot, e !== null && 100 < e.shellSuspendCounter)
            throw Error(i(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var s = t;
                s.status = "fulfilled", s.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var s = t;
                s.status = "rejected", s.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Cm(e), e;
        }
        throw Pl = t, La;
    }
  }
  function Wl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Pl = n, La) : n;
    }
  }
  var Pl = null;
  function Tm() {
    if (Pl === null) throw Error(i(459));
    var e = Pl;
    return Pl = null, e;
  }
  function Cm(e) {
    if (e === La || e === ti)
      throw Error(i(483));
  }
  var za = null, Ho = 0;
  function li(e) {
    var t = Ho;
    return Ho += 1, za === null && (za = []), xm(za, e, t);
  }
  function Uo(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function ai(e, t) {
    throw t.$$typeof === w ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(
      i(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Nm(e) {
    function t(k, U) {
      if (e) {
        var Y = k.deletions;
        Y === null ? (k.deletions = [U], k.flags |= 16) : Y.push(U);
      }
    }
    function n(k, U) {
      if (!e) return null;
      for (; U !== null; )
        t(k, U), U = U.sibling;
      return null;
    }
    function l(k) {
      for (var U = /* @__PURE__ */ new Map(); k !== null; )
        k.key !== null ? U.set(k.key, k) : U.set(k.index, k), k = k.sibling;
      return U;
    }
    function s(k, U) {
      return k = In(k, U), k.index = 0, k.sibling = null, k;
    }
    function u(k, U, Y) {
      return k.index = Y, e ? (Y = k.alternate, Y !== null ? (Y = Y.index, Y < U ? (k.flags |= 67108866, U) : Y) : (k.flags |= 67108866, U)) : (k.flags |= 1048576, U);
    }
    function y(k) {
      return e && k.alternate === null && (k.flags |= 67108866), k;
    }
    function T(k, U, Y, ce) {
      return U === null || U.tag !== 6 ? (U = as(Y, k.mode, ce), U.return = k, U) : (U = s(U, Y), U.return = k, U);
    }
    function B(k, U, Y, ce) {
      var Ae = Y.type;
      return Ae === C ? re(
        k,
        U,
        Y.props.children,
        ce,
        Y.key
      ) : U !== null && (U.elementType === Ae || typeof Ae == "object" && Ae !== null && Ae.$$typeof === I && Wl(Ae) === U.type) ? (U = s(U, Y.props), Uo(U, Y), U.return = k, U) : (U = Fr(
        Y.type,
        Y.key,
        Y.props,
        null,
        k.mode,
        ce
      ), Uo(U, Y), U.return = k, U);
    }
    function X(k, U, Y, ce) {
      return U === null || U.tag !== 4 || U.stateNode.containerInfo !== Y.containerInfo || U.stateNode.implementation !== Y.implementation ? (U = os(Y, k.mode, ce), U.return = k, U) : (U = s(U, Y.children || []), U.return = k, U);
    }
    function re(k, U, Y, ce, Ae) {
      return U === null || U.tag !== 7 ? (U = Xl(
        Y,
        k.mode,
        ce,
        Ae
      ), U.return = k, U) : (U = s(U, Y), U.return = k, U);
    }
    function ue(k, U, Y) {
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return U = as(
          "" + U,
          k.mode,
          Y
        ), U.return = k, U;
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case x:
            return Y = Fr(
              U.type,
              U.key,
              U.props,
              null,
              k.mode,
              Y
            ), Uo(Y, U), Y.return = k, Y;
          case N:
            return U = os(
              U,
              k.mode,
              Y
            ), U.return = k, U;
          case I:
            return U = Wl(U), ue(k, U, Y);
        }
        if (ge(U) || ae(U))
          return U = Xl(
            U,
            k.mode,
            Y,
            null
          ), U.return = k, U;
        if (typeof U.then == "function")
          return ue(k, li(U), Y);
        if (U.$$typeof === z)
          return ue(
            k,
            Pr(k, U),
            Y
          );
        ai(k, U);
      }
      return null;
    }
    function K(k, U, Y, ce) {
      var Ae = U !== null ? U.key : null;
      if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint")
        return Ae !== null ? null : T(k, U, "" + Y, ce);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case x:
            return Y.key === Ae ? B(k, U, Y, ce) : null;
          case N:
            return Y.key === Ae ? X(k, U, Y, ce) : null;
          case I:
            return Y = Wl(Y), K(k, U, Y, ce);
        }
        if (ge(Y) || ae(Y))
          return Ae !== null ? null : re(k, U, Y, ce, null);
        if (typeof Y.then == "function")
          return K(
            k,
            U,
            li(Y),
            ce
          );
        if (Y.$$typeof === z)
          return K(
            k,
            U,
            Pr(k, Y),
            ce
          );
        ai(k, Y);
      }
      return null;
    }
    function ee(k, U, Y, ce, Ae) {
      if (typeof ce == "string" && ce !== "" || typeof ce == "number" || typeof ce == "bigint")
        return k = k.get(Y) || null, T(U, k, "" + ce, Ae);
      if (typeof ce == "object" && ce !== null) {
        switch (ce.$$typeof) {
          case x:
            return k = k.get(
              ce.key === null ? Y : ce.key
            ) || null, B(U, k, ce, Ae);
          case N:
            return k = k.get(
              ce.key === null ? Y : ce.key
            ) || null, X(U, k, ce, Ae);
          case I:
            return ce = Wl(ce), ee(
              k,
              U,
              Y,
              ce,
              Ae
            );
        }
        if (ge(ce) || ae(ce))
          return k = k.get(Y) || null, re(U, k, ce, Ae, null);
        if (typeof ce.then == "function")
          return ee(
            k,
            U,
            Y,
            li(ce),
            Ae
          );
        if (ce.$$typeof === z)
          return ee(
            k,
            U,
            Y,
            Pr(U, ce),
            Ae
          );
        ai(U, ce);
      }
      return null;
    }
    function we(k, U, Y, ce) {
      for (var Ae = null, Qe = null, Ce = U, Le = U = 0, Ge = null; Ce !== null && Le < Y.length; Le++) {
        Ce.index > Le ? (Ge = Ce, Ce = null) : Ge = Ce.sibling;
        var Ke = K(
          k,
          Ce,
          Y[Le],
          ce
        );
        if (Ke === null) {
          Ce === null && (Ce = Ge);
          break;
        }
        e && Ce && Ke.alternate === null && t(k, Ce), U = u(Ke, U, Le), Qe === null ? Ae = Ke : Qe.sibling = Ke, Qe = Ke, Ce = Ge;
      }
      if (Le === Y.length)
        return n(k, Ce), Ze && Gn(k, Le), Ae;
      if (Ce === null) {
        for (; Le < Y.length; Le++)
          Ce = ue(k, Y[Le], ce), Ce !== null && (U = u(
            Ce,
            U,
            Le
          ), Qe === null ? Ae = Ce : Qe.sibling = Ce, Qe = Ce);
        return Ze && Gn(k, Le), Ae;
      }
      for (Ce = l(Ce); Le < Y.length; Le++)
        Ge = ee(
          Ce,
          k,
          Le,
          Y[Le],
          ce
        ), Ge !== null && (e && Ge.alternate !== null && Ce.delete(
          Ge.key === null ? Le : Ge.key
        ), U = u(
          Ge,
          U,
          Le
        ), Qe === null ? Ae = Ge : Qe.sibling = Ge, Qe = Ge);
      return e && Ce.forEach(function(Dl) {
        return t(k, Dl);
      }), Ze && Gn(k, Le), Ae;
    }
    function Re(k, U, Y, ce) {
      if (Y == null) throw Error(i(151));
      for (var Ae = null, Qe = null, Ce = U, Le = U = 0, Ge = null, Ke = Y.next(); Ce !== null && !Ke.done; Le++, Ke = Y.next()) {
        Ce.index > Le ? (Ge = Ce, Ce = null) : Ge = Ce.sibling;
        var Dl = K(k, Ce, Ke.value, ce);
        if (Dl === null) {
          Ce === null && (Ce = Ge);
          break;
        }
        e && Ce && Dl.alternate === null && t(k, Ce), U = u(Dl, U, Le), Qe === null ? Ae = Dl : Qe.sibling = Dl, Qe = Dl, Ce = Ge;
      }
      if (Ke.done)
        return n(k, Ce), Ze && Gn(k, Le), Ae;
      if (Ce === null) {
        for (; !Ke.done; Le++, Ke = Y.next())
          Ke = ue(k, Ke.value, ce), Ke !== null && (U = u(Ke, U, Le), Qe === null ? Ae = Ke : Qe.sibling = Ke, Qe = Ke);
        return Ze && Gn(k, Le), Ae;
      }
      for (Ce = l(Ce); !Ke.done; Le++, Ke = Y.next())
        Ke = ee(Ce, k, Le, Ke.value, ce), Ke !== null && (e && Ke.alternate !== null && Ce.delete(Ke.key === null ? Le : Ke.key), U = u(Ke, U, Le), Qe === null ? Ae = Ke : Qe.sibling = Ke, Qe = Ke);
      return e && Ce.forEach(function(RE) {
        return t(k, RE);
      }), Ze && Gn(k, Le), Ae;
    }
    function lt(k, U, Y, ce) {
      if (typeof Y == "object" && Y !== null && Y.type === C && Y.key === null && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case x:
            e: {
              for (var Ae = Y.key; U !== null; ) {
                if (U.key === Ae) {
                  if (Ae = Y.type, Ae === C) {
                    if (U.tag === 7) {
                      n(
                        k,
                        U.sibling
                      ), ce = s(
                        U,
                        Y.props.children
                      ), ce.return = k, k = ce;
                      break e;
                    }
                  } else if (U.elementType === Ae || typeof Ae == "object" && Ae !== null && Ae.$$typeof === I && Wl(Ae) === U.type) {
                    n(
                      k,
                      U.sibling
                    ), ce = s(U, Y.props), Uo(ce, Y), ce.return = k, k = ce;
                    break e;
                  }
                  n(k, U);
                  break;
                } else t(k, U);
                U = U.sibling;
              }
              Y.type === C ? (ce = Xl(
                Y.props.children,
                k.mode,
                ce,
                Y.key
              ), ce.return = k, k = ce) : (ce = Fr(
                Y.type,
                Y.key,
                Y.props,
                null,
                k.mode,
                ce
              ), Uo(ce, Y), ce.return = k, k = ce);
            }
            return y(k);
          case N:
            e: {
              for (Ae = Y.key; U !== null; ) {
                if (U.key === Ae)
                  if (U.tag === 4 && U.stateNode.containerInfo === Y.containerInfo && U.stateNode.implementation === Y.implementation) {
                    n(
                      k,
                      U.sibling
                    ), ce = s(U, Y.children || []), ce.return = k, k = ce;
                    break e;
                  } else {
                    n(k, U);
                    break;
                  }
                else t(k, U);
                U = U.sibling;
              }
              ce = os(Y, k.mode, ce), ce.return = k, k = ce;
            }
            return y(k);
          case I:
            return Y = Wl(Y), lt(
              k,
              U,
              Y,
              ce
            );
        }
        if (ge(Y))
          return we(
            k,
            U,
            Y,
            ce
          );
        if (ae(Y)) {
          if (Ae = ae(Y), typeof Ae != "function") throw Error(i(150));
          return Y = Ae.call(Y), Re(
            k,
            U,
            Y,
            ce
          );
        }
        if (typeof Y.then == "function")
          return lt(
            k,
            U,
            li(Y),
            ce
          );
        if (Y.$$typeof === z)
          return lt(
            k,
            U,
            Pr(k, Y),
            ce
          );
        ai(k, Y);
      }
      return typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint" ? (Y = "" + Y, U !== null && U.tag === 6 ? (n(k, U.sibling), ce = s(U, Y), ce.return = k, k = ce) : (n(k, U), ce = as(Y, k.mode, ce), ce.return = k, k = ce), y(k)) : n(k, U);
    }
    return function(k, U, Y, ce) {
      try {
        Ho = 0;
        var Ae = lt(
          k,
          U,
          Y,
          ce
        );
        return za = null, Ae;
      } catch (Ce) {
        if (Ce === La || Ce === ti) throw Ce;
        var Qe = en(29, Ce, null, k.mode);
        return Qe.lanes = ce, Qe.return = k, Qe;
      } finally {
      }
    };
  }
  var ea = Nm(!0), _m = Nm(!1), pl = !1;
  function bs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ys(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function hl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function gl(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Je & 2) !== 0) {
      var s = l.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, t = Kr(e), um(e, null, n), t;
    }
    return Qr(e, l, t, n), Kr(e);
  }
  function qo(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, En(e, n);
    }
  }
  function vs(e, t) {
    var n = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var s = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var y = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? s = u = y : u = u.next = y, n = n.next;
        } while (n !== null);
        u === null ? s = u = t : u = u.next = t;
      } else s = u = t;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Es = !1;
  function Vo() {
    if (Es) {
      var e = Ba;
      if (e !== null) throw e;
    }
  }
  function ko(e, t, n, l) {
    Es = !1;
    var s = e.updateQueue;
    pl = !1;
    var u = s.firstBaseUpdate, y = s.lastBaseUpdate, T = s.shared.pending;
    if (T !== null) {
      s.shared.pending = null;
      var B = T, X = B.next;
      B.next = null, y === null ? u = X : y.next = X, y = B;
      var re = e.alternate;
      re !== null && (re = re.updateQueue, T = re.lastBaseUpdate, T !== y && (T === null ? re.firstBaseUpdate = X : T.next = X, re.lastBaseUpdate = B));
    }
    if (u !== null) {
      var ue = s.baseState;
      y = 0, re = X = B = null, T = u;
      do {
        var K = T.lane & -536870913, ee = K !== T.lane;
        if (ee ? (Ie & K) === K : (l & K) === K) {
          K !== 0 && K === $a && (Es = !0), re !== null && (re = re.next = {
            lane: 0,
            tag: T.tag,
            payload: T.payload,
            callback: null,
            next: null
          });
          e: {
            var we = e, Re = T;
            K = t;
            var lt = n;
            switch (Re.tag) {
              case 1:
                if (we = Re.payload, typeof we == "function") {
                  ue = we.call(lt, ue, K);
                  break e;
                }
                ue = we;
                break e;
              case 3:
                we.flags = we.flags & -65537 | 128;
              case 0:
                if (we = Re.payload, K = typeof we == "function" ? we.call(lt, ue, K) : we, K == null) break e;
                ue = S({}, ue, K);
                break e;
              case 2:
                pl = !0;
            }
          }
          K = T.callback, K !== null && (e.flags |= 64, ee && (e.flags |= 8192), ee = s.callbacks, ee === null ? s.callbacks = [K] : ee.push(K));
        } else
          ee = {
            lane: K,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null
          }, re === null ? (X = re = ee, B = ue) : re = re.next = ee, y |= K;
        if (T = T.next, T === null) {
          if (T = s.shared.pending, T === null)
            break;
          ee = T, T = ee.next, ee.next = null, s.lastBaseUpdate = ee, s.shared.pending = null;
        }
      } while (!0);
      re === null && (B = ue), s.baseState = B, s.firstBaseUpdate = X, s.lastBaseUpdate = re, u === null && (s.shared.lanes = 0), Sl |= y, e.lanes = y, e.memoizedState = ue;
    }
  }
  function Am(e, t) {
    if (typeof e != "function")
      throw Error(i(191, e));
    e.call(t);
  }
  function Rm(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Am(n[e], t);
  }
  var ja = O(null), oi = O(0);
  function Om(e, t) {
    e = tl, P(oi, e), P(ja, t), tl = e | t.baseLanes;
  }
  function Ss() {
    P(oi, tl), P(ja, ja.current);
  }
  function ws() {
    tl = oi.current, q(ja), q(oi);
  }
  var tn = O(null), hn = null;
  function bl(e) {
    var t = e.alternate;
    P(bt, bt.current & 1), P(tn, e), hn === null && (t === null || ja.current !== null || t.memoizedState !== null) && (hn = e);
  }
  function xs(e) {
    P(bt, bt.current), P(tn, e), hn === null && (hn = e);
  }
  function Dm(e) {
    e.tag === 22 ? (P(bt, bt.current), P(tn, e), hn === null && (hn = e)) : yl();
  }
  function yl() {
    P(bt, bt.current), P(tn, tn.current);
  }
  function nn(e) {
    q(tn), hn === e && (hn = null), q(bt);
  }
  var bt = O(0);
  function ri(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Ru(n) || Ou(n)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Xn = 0, Me = null, tt = null, Et = null, ii = !1, Ha = !1, ta = !1, ci = 0, Io = 0, Ua = null, v2 = 0;
  function pt() {
    throw Error(i(321));
  }
  function Ts(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Pt(e[n], t[n])) return !1;
    return !0;
  }
  function Cs(e, t, n, l, s, u) {
    return Xn = u, Me = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, R.H = e === null || e.memoizedState === null ? pp : qs, ta = !1, u = n(l, s), ta = !1, Ha && (u = $m(
      t,
      n,
      l,
      s
    )), Mm(e), u;
  }
  function Mm(e) {
    R.H = Yo;
    var t = tt !== null && tt.next !== null;
    if (Xn = 0, Et = tt = Me = null, ii = !1, Io = 0, Ua = null, t) throw Error(i(300));
    e === null || St || (e = e.dependencies, e !== null && Wr(e) && (St = !0));
  }
  function $m(e, t, n, l) {
    Me = e;
    var s = 0;
    do {
      if (Ha && (Ua = null), Io = 0, Ha = !1, 25 <= s) throw Error(i(301));
      if (s += 1, Et = tt = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      R.H = hp, u = t(n, l);
    } while (Ha);
    return u;
  }
  function E2() {
    var e = R.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Go(t) : t, e = e.useState()[0], (tt !== null ? tt.memoizedState : null) !== e && (Me.flags |= 1024), t;
  }
  function Ns() {
    var e = ci !== 0;
    return ci = 0, e;
  }
  function _s(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function As(e) {
    if (ii) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      ii = !1;
    }
    Xn = 0, Et = tt = Me = null, Ha = !1, Io = ci = 0, Ua = null;
  }
  function Ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Et === null ? Me.memoizedState = Et = e : Et = Et.next = e, Et;
  }
  function yt() {
    if (tt === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = tt.next;
    var t = Et === null ? Me.memoizedState : Et.next;
    if (t !== null)
      Et = t, tt = e;
    else {
      if (e === null)
        throw Me.alternate === null ? Error(i(467)) : Error(i(310));
      tt = e, e = {
        memoizedState: tt.memoizedState,
        baseState: tt.baseState,
        baseQueue: tt.baseQueue,
        queue: tt.queue,
        next: null
      }, Et === null ? Me.memoizedState = Et = e : Et = Et.next = e;
    }
    return Et;
  }
  function si() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Go(e) {
    var t = Io;
    return Io += 1, Ua === null && (Ua = []), e = xm(Ua, e, t), t = Me, (Et === null ? t.memoizedState : Et.next) === null && (t = t.alternate, R.H = t === null || t.memoizedState === null ? pp : qs), e;
  }
  function ui(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Go(e);
      if (e.$$typeof === z) return Ot(e);
    }
    throw Error(i(438, String(e)));
  }
  function Rs(e) {
    var t = null, n = Me.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var l = Me.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = si(), Me.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = Z;
    return t.index++, n;
  }
  function Qn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function fi(e) {
    var t = yt();
    return Os(t, tt, e);
  }
  function Os(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(i(311));
    l.lastRenderedReducer = n;
    var s = e.baseQueue, u = l.pending;
    if (u !== null) {
      if (s !== null) {
        var y = s.next;
        s.next = u.next, u.next = y;
      }
      t.baseQueue = s = u, l.pending = null;
    }
    if (u = e.baseState, s === null) e.memoizedState = u;
    else {
      t = s.next;
      var T = y = null, B = null, X = t, re = !1;
      do {
        var ue = X.lane & -536870913;
        if (ue !== X.lane ? (Ie & ue) === ue : (Xn & ue) === ue) {
          var K = X.revertLane;
          if (K === 0)
            B !== null && (B = B.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            }), ue === $a && (re = !0);
          else if ((Xn & K) === K) {
            X = X.next, K === $a && (re = !0);
            continue;
          } else
            ue = {
              lane: 0,
              revertLane: X.revertLane,
              gesture: null,
              action: X.action,
              hasEagerState: X.hasEagerState,
              eagerState: X.eagerState,
              next: null
            }, B === null ? (T = B = ue, y = u) : B = B.next = ue, Me.lanes |= K, Sl |= K;
          ue = X.action, ta && n(u, ue), u = X.hasEagerState ? X.eagerState : n(u, ue);
        } else
          K = {
            lane: ue,
            revertLane: X.revertLane,
            gesture: X.gesture,
            action: X.action,
            hasEagerState: X.hasEagerState,
            eagerState: X.eagerState,
            next: null
          }, B === null ? (T = B = K, y = u) : B = B.next = K, Me.lanes |= ue, Sl |= ue;
        X = X.next;
      } while (X !== null && X !== t);
      if (B === null ? y = u : B.next = T, !Pt(u, e.memoizedState) && (St = !0, re && (n = Ba, n !== null)))
        throw n;
      e.memoizedState = u, e.baseState = y, e.baseQueue = B, l.lastRenderedState = u;
    }
    return s === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Ds(e) {
    var t = yt(), n = t.queue;
    if (n === null) throw Error(i(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, s = n.pending, u = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var y = s = s.next;
      do
        u = e(u, y.action), y = y.next;
      while (y !== s);
      Pt(u, t.memoizedState) || (St = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, l];
  }
  function Bm(e, t, n) {
    var l = Me, s = yt(), u = Ze;
    if (u) {
      if (n === void 0) throw Error(i(407));
      n = n();
    } else n = t();
    var y = !Pt(
      (tt || s).memoizedState,
      n
    );
    if (y && (s.memoizedState = n, St = !0), s = s.queue, Bs(jm.bind(null, l, s, e), [
      e
    ]), s.getSnapshot !== t || y || Et !== null && Et.memoizedState.tag & 1) {
      if (l.flags |= 2048, qa(
        9,
        { destroy: void 0 },
        zm.bind(
          null,
          l,
          s,
          n,
          t
        ),
        null
      ), ot === null) throw Error(i(349));
      u || (Xn & 127) !== 0 || Lm(l, t, n);
    }
    return n;
  }
  function Lm(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Me.updateQueue, t === null ? (t = si(), Me.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function zm(e, t, n, l) {
    t.value = n, t.getSnapshot = l, Hm(t) && Um(e);
  }
  function jm(e, t, n) {
    return n(function() {
      Hm(t) && Um(e);
    });
  }
  function Hm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Pt(e, n);
    } catch {
      return !0;
    }
  }
  function Um(e) {
    var t = Yl(e, 2);
    t !== null && Ft(t, e, 2);
  }
  function Ms(e) {
    var t = Ut();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), ta) {
        Nn(!0);
        try {
          n();
        } finally {
          Nn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qn,
      lastRenderedState: e
    }, t;
  }
  function qm(e, t, n, l) {
    return e.baseState = n, Os(
      e,
      tt,
      typeof l == "function" ? l : Qn
    );
  }
  function S2(e, t, n, l, s) {
    if (pi(e)) throw Error(i(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: s,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          u.listeners.push(y);
        }
      };
      R.T !== null ? n(!0) : u.isTransition = !1, l(u), n = t.pending, n === null ? (u.next = t.pending = u, Vm(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function Vm(e, t) {
    var n = t.action, l = t.payload, s = e.state;
    if (t.isTransition) {
      var u = R.T, y = {};
      R.T = y;
      try {
        var T = n(s, l), B = R.S;
        B !== null && B(y, T), km(e, t, T);
      } catch (X) {
        $s(e, t, X);
      } finally {
        u !== null && y.types !== null && (u.types = y.types), R.T = u;
      }
    } else
      try {
        u = n(s, l), km(e, t, u);
      } catch (X) {
        $s(e, t, X);
      }
  }
  function km(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        Im(e, t, l);
      },
      function(l) {
        return $s(e, t, l);
      }
    ) : Im(e, t, n);
  }
  function Im(e, t, n) {
    t.status = "fulfilled", t.value = n, Gm(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Vm(e, n)));
  }
  function $s(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, Gm(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Gm(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Zm(e, t) {
    return t;
  }
  function Ym(e, t) {
    if (Ze) {
      var n = ot.formState;
      if (n !== null) {
        e: {
          var l = Me;
          if (Ze) {
            if (it) {
              t: {
                for (var s = it, u = pn; s.nodeType !== 8; ) {
                  if (!u) {
                    s = null;
                    break t;
                  }
                  if (s = gn(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                u = s.data, s = u === "F!" || u === "F" ? s : null;
              }
              if (s) {
                it = gn(
                  s.nextSibling
                ), l = s.data === "F!";
                break e;
              }
            }
            dl(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return n = Ut(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zm,
      lastRenderedState: t
    }, n.queue = l, n = fp.bind(
      null,
      Me,
      l
    ), l.dispatch = n, l = Ms(!1), u = Us.bind(
      null,
      Me,
      !1,
      l.queue
    ), l = Ut(), s = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = s, n = S2.bind(
      null,
      Me,
      s,
      u,
      n
    ), s.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function Xm(e) {
    var t = yt();
    return Qm(t, tt, e);
  }
  function Qm(e, t, n) {
    if (t = Os(
      e,
      t,
      Zm
    )[0], e = fi(Qn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Go(t);
      } catch (y) {
        throw y === La ? ti : y;
      }
    else l = t;
    t = yt();
    var s = t.queue, u = s.dispatch;
    return n !== t.memoizedState && (Me.flags |= 2048, qa(
      9,
      { destroy: void 0 },
      w2.bind(null, s, n),
      null
    )), [l, u, e];
  }
  function w2(e, t) {
    e.action = t;
  }
  function Km(e) {
    var t = yt(), n = tt;
    if (n !== null)
      return Qm(t, n, e);
    yt(), t = t.memoizedState, n = yt();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function qa(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = Me.updateQueue, t === null && (t = si(), Me.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Fm() {
    return yt().memoizedState;
  }
  function di(e, t, n, l) {
    var s = Ut();
    Me.flags |= e, s.memoizedState = qa(
      1 | t,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function mi(e, t, n, l) {
    var s = yt();
    l = l === void 0 ? null : l;
    var u = s.memoizedState.inst;
    tt !== null && l !== null && Ts(l, tt.memoizedState.deps) ? s.memoizedState = qa(t, u, n, l) : (Me.flags |= e, s.memoizedState = qa(
      1 | t,
      u,
      n,
      l
    ));
  }
  function Jm(e, t) {
    di(8390656, 8, e, t);
  }
  function Bs(e, t) {
    mi(2048, 8, e, t);
  }
  function x2(e) {
    Me.flags |= 4;
    var t = Me.updateQueue;
    if (t === null)
      t = si(), Me.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Wm(e) {
    var t = yt().memoizedState;
    return x2({ ref: t, nextImpl: e }), function() {
      if ((Je & 2) !== 0) throw Error(i(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Pm(e, t) {
    return mi(4, 2, e, t);
  }
  function ep(e, t) {
    return mi(4, 4, e, t);
  }
  function tp(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function np(e, t, n) {
    n = n != null ? n.concat([e]) : null, mi(4, 4, tp.bind(null, t, e), n);
  }
  function Ls() {
  }
  function lp(e, t) {
    var n = yt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Ts(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function ap(e, t) {
    var n = yt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Ts(t, l[1]))
      return l[0];
    if (l = e(), ta) {
      Nn(!0);
      try {
        e();
      } finally {
        Nn(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function zs(e, t, n) {
    return n === void 0 || (Xn & 1073741824) !== 0 && (Ie & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = oh(), Me.lanes |= e, Sl |= e, n);
  }
  function op(e, t, n, l) {
    return Pt(n, t) ? n : ja.current !== null ? (e = zs(e, n, l), Pt(e, t) || (St = !0), e) : (Xn & 42) === 0 || (Xn & 1073741824) !== 0 && (Ie & 261930) === 0 ? (St = !0, e.memoizedState = n) : (e = oh(), Me.lanes |= e, Sl |= e, t);
  }
  function rp(e, t, n, l, s) {
    var u = J.p;
    J.p = u !== 0 && 8 > u ? u : 8;
    var y = R.T, T = {};
    R.T = T, Us(e, !1, t, n);
    try {
      var B = s(), X = R.S;
      if (X !== null && X(T, B), B !== null && typeof B == "object" && typeof B.then == "function") {
        var re = y2(
          B,
          l
        );
        Zo(
          e,
          t,
          re,
          on(e)
        );
      } else
        Zo(
          e,
          t,
          l,
          on(e)
        );
    } catch (ue) {
      Zo(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: ue },
        on()
      );
    } finally {
      J.p = u, y !== null && T.types !== null && (y.types = T.types), R.T = y;
    }
  }
  function T2() {
  }
  function js(e, t, n, l) {
    if (e.tag !== 5) throw Error(i(476));
    var s = ip(e).queue;
    rp(
      e,
      s,
      t,
      W,
      n === null ? T2 : function() {
        return cp(e), n(l);
      }
    );
  }
  function ip(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: W,
      baseState: W,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qn,
        lastRenderedState: W
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function cp(e) {
    var t = ip(e);
    t.next === null && (t = e.alternate.memoizedState), Zo(
      e,
      t.next.queue,
      {},
      on()
    );
  }
  function Hs() {
    return Ot(cr);
  }
  function sp() {
    return yt().memoizedState;
  }
  function up() {
    return yt().memoizedState;
  }
  function C2(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = on();
          e = hl(n);
          var l = gl(t, e, n);
          l !== null && (Ft(l, t, n), qo(l, t, n)), t = { cache: ms() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function N2(e, t, n) {
    var l = on();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, pi(e) ? dp(t, n) : (n = ns(e, t, n, l), n !== null && (Ft(n, e, l), mp(n, t, l)));
  }
  function fp(e, t, n) {
    var l = on();
    Zo(e, t, n, l);
  }
  function Zo(e, t, n, l) {
    var s = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (pi(e)) dp(t, s);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var y = t.lastRenderedState, T = u(y, n);
          if (s.hasEagerState = !0, s.eagerState = T, Pt(T, y))
            return Qr(e, t, s, 0), ot === null && Xr(), !1;
        } catch {
        } finally {
        }
      if (n = ns(e, t, s, l), n !== null)
        return Ft(n, e, l), mp(n, t, l), !0;
    }
    return !1;
  }
  function Us(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: bu(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, pi(e)) {
      if (t) throw Error(i(479));
    } else
      t = ns(
        e,
        n,
        l,
        2
      ), t !== null && Ft(t, e, 2);
  }
  function pi(e) {
    var t = e.alternate;
    return e === Me || t !== null && t === Me;
  }
  function dp(e, t) {
    Ha = ii = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function mp(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, En(e, n);
    }
  }
  var Yo = {
    readContext: Ot,
    use: ui,
    useCallback: pt,
    useContext: pt,
    useEffect: pt,
    useImperativeHandle: pt,
    useLayoutEffect: pt,
    useInsertionEffect: pt,
    useMemo: pt,
    useReducer: pt,
    useRef: pt,
    useState: pt,
    useDebugValue: pt,
    useDeferredValue: pt,
    useTransition: pt,
    useSyncExternalStore: pt,
    useId: pt,
    useHostTransitionStatus: pt,
    useFormState: pt,
    useActionState: pt,
    useOptimistic: pt,
    useMemoCache: pt,
    useCacheRefresh: pt
  };
  Yo.useEffectEvent = pt;
  var pp = {
    readContext: Ot,
    use: ui,
    useCallback: function(e, t) {
      return Ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Ot,
    useEffect: Jm,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, di(
        4194308,
        4,
        tp.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return di(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      di(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = Ut();
      t = t === void 0 ? null : t;
      var l = e();
      if (ta) {
        Nn(!0);
        try {
          e();
        } finally {
          Nn(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = Ut();
      if (n !== void 0) {
        var s = n(t);
        if (ta) {
          Nn(!0);
          try {
            n(t);
          } finally {
            Nn(!1);
          }
        }
      } else s = t;
      return l.memoizedState = l.baseState = s, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: s
      }, l.queue = e, e = e.dispatch = N2.bind(
        null,
        Me,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = Ut();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Ms(e);
      var t = e.queue, n = fp.bind(null, Me, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Ls,
    useDeferredValue: function(e, t) {
      var n = Ut();
      return zs(n, e, t);
    },
    useTransition: function() {
      var e = Ms(!1);
      return e = rp.bind(
        null,
        Me,
        e.queue,
        !0,
        !1
      ), Ut().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = Me, s = Ut();
      if (Ze) {
        if (n === void 0)
          throw Error(i(407));
        n = n();
      } else {
        if (n = t(), ot === null)
          throw Error(i(349));
        (Ie & 127) !== 0 || Lm(l, t, n);
      }
      s.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return s.queue = u, Jm(jm.bind(null, l, u, e), [
        e
      ]), l.flags |= 2048, qa(
        9,
        { destroy: void 0 },
        zm.bind(
          null,
          l,
          u,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = Ut(), t = ot.identifierPrefix;
      if (Ze) {
        var n = An, l = _n;
        n = (l & ~(1 << 32 - jt(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = ci++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = v2++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Hs,
    useFormState: Ym,
    useActionState: Ym,
    useOptimistic: function(e) {
      var t = Ut();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Us.bind(
        null,
        Me,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Rs,
    useCacheRefresh: function() {
      return Ut().memoizedState = C2.bind(
        null,
        Me
      );
    },
    useEffectEvent: function(e) {
      var t = Ut(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Je & 2) !== 0)
          throw Error(i(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, qs = {
    readContext: Ot,
    use: ui,
    useCallback: lp,
    useContext: Ot,
    useEffect: Bs,
    useImperativeHandle: np,
    useInsertionEffect: Pm,
    useLayoutEffect: ep,
    useMemo: ap,
    useReducer: fi,
    useRef: Fm,
    useState: function() {
      return fi(Qn);
    },
    useDebugValue: Ls,
    useDeferredValue: function(e, t) {
      var n = yt();
      return op(
        n,
        tt.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = fi(Qn)[0], t = yt().memoizedState;
      return [
        typeof e == "boolean" ? e : Go(e),
        t
      ];
    },
    useSyncExternalStore: Bm,
    useId: sp,
    useHostTransitionStatus: Hs,
    useFormState: Xm,
    useActionState: Xm,
    useOptimistic: function(e, t) {
      var n = yt();
      return qm(n, tt, e, t);
    },
    useMemoCache: Rs,
    useCacheRefresh: up
  };
  qs.useEffectEvent = Wm;
  var hp = {
    readContext: Ot,
    use: ui,
    useCallback: lp,
    useContext: Ot,
    useEffect: Bs,
    useImperativeHandle: np,
    useInsertionEffect: Pm,
    useLayoutEffect: ep,
    useMemo: ap,
    useReducer: Ds,
    useRef: Fm,
    useState: function() {
      return Ds(Qn);
    },
    useDebugValue: Ls,
    useDeferredValue: function(e, t) {
      var n = yt();
      return tt === null ? zs(n, e, t) : op(
        n,
        tt.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ds(Qn)[0], t = yt().memoizedState;
      return [
        typeof e == "boolean" ? e : Go(e),
        t
      ];
    },
    useSyncExternalStore: Bm,
    useId: sp,
    useHostTransitionStatus: Hs,
    useFormState: Km,
    useActionState: Km,
    useOptimistic: function(e, t) {
      var n = yt();
      return tt !== null ? qm(n, tt, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Rs,
    useCacheRefresh: up
  };
  hp.useEffectEvent = Wm;
  function Vs(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : S({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ks = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = on(), s = hl(l);
      s.payload = t, n != null && (s.callback = n), t = gl(e, s, l), t !== null && (Ft(t, e, l), qo(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = on(), s = hl(l);
      s.tag = 1, s.payload = t, n != null && (s.callback = n), t = gl(e, s, l), t !== null && (Ft(t, e, l), qo(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = on(), l = hl(n);
      l.tag = 2, t != null && (l.callback = t), t = gl(e, l, n), t !== null && (Ft(t, e, n), qo(t, e, n));
    }
  };
  function gp(e, t, n, l, s, u, y) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, y) : t.prototype && t.prototype.isPureReactComponent ? !Mo(n, l) || !Mo(s, u) : !0;
  }
  function bp(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && ks.enqueueReplaceState(t, t.state, null);
  }
  function na(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
    }
    if (e = e.defaultProps) {
      n === t && (n = S({}, n));
      for (var s in e)
        n[s] === void 0 && (n[s] = e[s]);
    }
    return n;
  }
  function yp(e) {
    Yr(e);
  }
  function vp(e) {
    console.error(e);
  }
  function Ep(e) {
    Yr(e);
  }
  function hi(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Sp(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function Is(e, t, n) {
    return n = hl(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      hi(e, t);
    }, n;
  }
  function wp(e) {
    return e = hl(e), e.tag = 3, e;
  }
  function xp(e, t, n, l) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = l.value;
      e.payload = function() {
        return s(u);
      }, e.callback = function() {
        Sp(t, n, l);
      };
    }
    var y = n.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (e.callback = function() {
      Sp(t, n, l), typeof s != "function" && (wl === null ? wl = /* @__PURE__ */ new Set([this]) : wl.add(this));
      var T = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: T !== null ? T : ""
      });
    });
  }
  function _2(e, t, n, l, s) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && Ma(
        t,
        n,
        s,
        !0
      ), n = tn.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return hn === null ? _i() : n.alternate === null && ht === 0 && (ht = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, l === ni ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), pu(e, l, s)), !1;
          case 22:
            return n.flags |= 65536, l === ni ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), pu(e, l, s)), !1;
        }
        throw Error(i(435, n.tag));
      }
      return pu(e, l, s), _i(), !1;
    }
    if (Ze)
      return t = tn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = s, l !== cs && (e = Error(i(422), { cause: l }), Lo(fn(e, n)))) : (l !== cs && (t = Error(i(423), {
        cause: l
      }), Lo(
        fn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, s &= -s, e.lanes |= s, l = fn(l, n), s = Is(
        e.stateNode,
        l,
        s
      ), vs(e, s), ht !== 4 && (ht = 2)), !1;
    var u = Error(i(520), { cause: l });
    if (u = fn(u, n), er === null ? er = [u] : er.push(u), ht !== 4 && (ht = 2), t === null) return !0;
    l = fn(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = s & -s, n.lanes |= e, e = Is(n.stateNode, l, e), vs(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (wl === null || !wl.has(u))))
            return n.flags |= 65536, s &= -s, n.lanes |= s, s = wp(s), xp(
              s,
              e,
              n,
              l
            ), vs(n, s), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Gs = Error(i(461)), St = !1;
  function Dt(e, t, n, l) {
    t.child = e === null ? _m(t, null, n, l) : ea(
      t,
      e.child,
      n,
      l
    );
  }
  function Tp(e, t, n, l, s) {
    n = n.render;
    var u = t.ref;
    if ("ref" in l) {
      var y = {};
      for (var T in l)
        T !== "ref" && (y[T] = l[T]);
    } else y = l;
    return Fl(t), l = Cs(
      e,
      t,
      n,
      y,
      u,
      s
    ), T = Ns(), e !== null && !St ? (_s(e, t, s), Kn(e, t, s)) : (Ze && T && rs(t), t.flags |= 1, Dt(e, t, l, s), t.child);
  }
  function Cp(e, t, n, l, s) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !ls(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, Np(
        e,
        t,
        u,
        l,
        s
      )) : (e = Fr(
        n.type,
        null,
        l,
        t,
        t.mode,
        s
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Ws(e, s)) {
      var y = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Mo, n(y, l) && e.ref === t.ref)
        return Kn(e, t, s);
    }
    return t.flags |= 1, e = In(u, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Np(e, t, n, l, s) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Mo(u, l) && e.ref === t.ref)
        if (St = !1, t.pendingProps = l = u, Ws(e, s))
          (e.flags & 131072) !== 0 && (St = !0);
        else
          return t.lanes = e.lanes, Kn(e, t, s);
    }
    return Zs(
      e,
      t,
      n,
      l,
      s
    );
  }
  function _p(e, t, n, l) {
    var s = l.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, e !== null) {
          for (l = t.child = e.child, s = 0; l !== null; )
            s = s | l.lanes | l.childLanes, l = l.sibling;
          l = s & ~u;
        } else l = 0, t.child = null;
        return Ap(
          e,
          t,
          u,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ei(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Om(t, u) : Ss(), Dm(t);
      else
        return l = t.lanes = 536870912, Ap(
          e,
          t,
          u !== null ? u.baseLanes | n : n,
          n,
          l
        );
    } else
      u !== null ? (ei(t, u.cachePool), Om(t, u), yl(), t.memoizedState = null) : (e !== null && ei(t, null), Ss(), yl());
    return Dt(e, t, s, n), t.child;
  }
  function Xo(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Ap(e, t, n, l, s) {
    var u = hs();
    return u = u === null ? null : { parent: vt._currentValue, pool: u }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && ei(t, null), Ss(), Dm(t), e !== null && Ma(e, t, l, !0), t.childLanes = s, null;
  }
  function gi(e, t) {
    return t = yi(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Rp(e, t, n) {
    return ea(t, e.child, null, n), e = gi(t, t.pendingProps), e.flags |= 2, nn(t), t.memoizedState = null, e;
  }
  function A2(e, t, n) {
    var l = t.pendingProps, s = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ze) {
        if (l.mode === "hidden")
          return e = gi(t, l), t.lanes = 536870912, Xo(null, e);
        if (xs(t), (e = it) ? (e = Vh(
          e,
          pn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ul !== null ? { id: _n, overflow: An } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = dm(e), n.return = t, t.child = n, Rt = t, it = null)) : e = null, e === null) throw dl(t);
        return t.lanes = 536870912, null;
      }
      return gi(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var y = u.dehydrated;
      if (xs(t), s)
        if (t.flags & 256)
          t.flags &= -257, t = Rp(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(i(558));
      else if (St || Ma(e, t, n, !1), s = (n & e.childLanes) !== 0, St || s) {
        if (l = ot, l !== null && (y = Vl(l, n), y !== 0 && y !== u.retryLane))
          throw u.retryLane = y, Yl(e, y), Ft(l, e, y), Gs;
        _i(), t = Rp(
          e,
          t,
          n
        );
      } else
        e = u.treeContext, it = gn(y.nextSibling), Rt = t, Ze = !0, fl = null, pn = !1, e !== null && hm(t, e), t = gi(t, l), t.flags |= 4096;
      return t;
    }
    return e = In(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function bi(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(i(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Zs(e, t, n, l, s) {
    return Fl(t), n = Cs(
      e,
      t,
      n,
      l,
      void 0,
      s
    ), l = Ns(), e !== null && !St ? (_s(e, t, s), Kn(e, t, s)) : (Ze && l && rs(t), t.flags |= 1, Dt(e, t, n, s), t.child);
  }
  function Op(e, t, n, l, s, u) {
    return Fl(t), t.updateQueue = null, n = $m(
      t,
      l,
      n,
      s
    ), Mm(e), l = Ns(), e !== null && !St ? (_s(e, t, u), Kn(e, t, u)) : (Ze && l && rs(t), t.flags |= 1, Dt(e, t, n, u), t.child);
  }
  function Dp(e, t, n, l, s) {
    if (Fl(t), t.stateNode === null) {
      var u = Aa, y = n.contextType;
      typeof y == "object" && y !== null && (u = Ot(y)), u = new n(l, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = ks, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = l, u.state = t.memoizedState, u.refs = {}, bs(t), y = n.contextType, u.context = typeof y == "object" && y !== null ? Ot(y) : Aa, u.state = t.memoizedState, y = n.getDerivedStateFromProps, typeof y == "function" && (Vs(
        t,
        n,
        y,
        l
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (y = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), y !== u.state && ks.enqueueReplaceState(u, u.state, null), ko(t, l, u, s), Vo(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      u = t.stateNode;
      var T = t.memoizedProps, B = na(n, T);
      u.props = B;
      var X = u.context, re = n.contextType;
      y = Aa, typeof re == "object" && re !== null && (y = Ot(re));
      var ue = n.getDerivedStateFromProps;
      re = typeof ue == "function" || typeof u.getSnapshotBeforeUpdate == "function", T = t.pendingProps !== T, re || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (T || X !== y) && bp(
        t,
        u,
        l,
        y
      ), pl = !1;
      var K = t.memoizedState;
      u.state = K, ko(t, l, u, s), Vo(), X = t.memoizedState, T || K !== X || pl ? (typeof ue == "function" && (Vs(
        t,
        n,
        ue,
        l
      ), X = t.memoizedState), (B = pl || gp(
        t,
        n,
        B,
        l,
        K,
        X,
        y
      )) ? (re || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = X), u.props = l, u.state = X, u.context = y, l = B) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      u = t.stateNode, ys(e, t), y = t.memoizedProps, re = na(n, y), u.props = re, ue = t.pendingProps, K = u.context, X = n.contextType, B = Aa, typeof X == "object" && X !== null && (B = Ot(X)), T = n.getDerivedStateFromProps, (X = typeof T == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (y !== ue || K !== B) && bp(
        t,
        u,
        l,
        B
      ), pl = !1, K = t.memoizedState, u.state = K, ko(t, l, u, s), Vo();
      var ee = t.memoizedState;
      y !== ue || K !== ee || pl || e !== null && e.dependencies !== null && Wr(e.dependencies) ? (typeof T == "function" && (Vs(
        t,
        n,
        T,
        l
      ), ee = t.memoizedState), (re = pl || gp(
        t,
        n,
        re,
        l,
        K,
        ee,
        B
      ) || e !== null && e.dependencies !== null && Wr(e.dependencies)) ? (X || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, ee, B), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        l,
        ee,
        B
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || y === e.memoizedProps && K === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && K === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = ee), u.props = l, u.state = ee, u.context = B, l = re) : (typeof u.componentDidUpdate != "function" || y === e.memoizedProps && K === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && K === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return u = l, bi(e, t), l = (t.flags & 128) !== 0, u || l ? (u = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && l ? (t.child = ea(
      t,
      e.child,
      null,
      s
    ), t.child = ea(
      t,
      null,
      n,
      s
    )) : Dt(e, t, n, s), t.memoizedState = u.state, e = t.child) : e = Kn(
      e,
      t,
      s
    ), e;
  }
  function Mp(e, t, n, l) {
    return Ql(), t.flags |= 256, Dt(e, t, n, l), t.child;
  }
  var Ys = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Xs(e) {
    return { baseLanes: e, cachePool: Sm() };
  }
  function Qs(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= an), e;
  }
  function $p(e, t, n) {
    var l = t.pendingProps, s = !1, u = (t.flags & 128) !== 0, y;
    if ((y = u) || (y = e !== null && e.memoizedState === null ? !1 : (bt.current & 2) !== 0), y && (s = !0, t.flags &= -129), y = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ze) {
        if (s ? bl(t) : yl(), (e = it) ? (e = Vh(
          e,
          pn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ul !== null ? { id: _n, overflow: An } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = dm(e), n.return = t, t.child = n, Rt = t, it = null)) : e = null, e === null) throw dl(t);
        return Ou(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var T = l.children;
      return l = l.fallback, s ? (yl(), s = t.mode, T = yi(
        { mode: "hidden", children: T },
        s
      ), l = Xl(
        l,
        s,
        n,
        null
      ), T.return = t, l.return = t, T.sibling = l, t.child = T, l = t.child, l.memoizedState = Xs(n), l.childLanes = Qs(
        e,
        y,
        n
      ), t.memoizedState = Ys, Xo(null, l)) : (bl(t), Ks(t, T));
    }
    var B = e.memoizedState;
    if (B !== null && (T = B.dehydrated, T !== null)) {
      if (u)
        t.flags & 256 ? (bl(t), t.flags &= -257, t = Fs(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (yl(), t.child = e.child, t.flags |= 128, t = null) : (yl(), T = l.fallback, s = t.mode, l = yi(
          { mode: "visible", children: l.children },
          s
        ), T = Xl(
          T,
          s,
          n,
          null
        ), T.flags |= 2, l.return = t, T.return = t, l.sibling = T, t.child = l, ea(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = Xs(n), l.childLanes = Qs(
          e,
          y,
          n
        ), t.memoizedState = Ys, t = Xo(null, l));
      else if (bl(t), Ou(T)) {
        if (y = T.nextSibling && T.nextSibling.dataset, y) var X = y.dgst;
        y = X, l = Error(i(419)), l.stack = "", l.digest = y, Lo({ value: l, source: null, stack: null }), t = Fs(
          e,
          t,
          n
        );
      } else if (St || Ma(e, t, n, !1), y = (n & e.childLanes) !== 0, St || y) {
        if (y = ot, y !== null && (l = Vl(y, n), l !== 0 && l !== B.retryLane))
          throw B.retryLane = l, Yl(e, l), Ft(y, e, l), Gs;
        Ru(T) || _i(), t = Fs(
          e,
          t,
          n
        );
      } else
        Ru(T) ? (t.flags |= 192, t.child = e.child, t = null) : (e = B.treeContext, it = gn(
          T.nextSibling
        ), Rt = t, Ze = !0, fl = null, pn = !1, e !== null && hm(t, e), t = Ks(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return s ? (yl(), T = l.fallback, s = t.mode, B = e.child, X = B.sibling, l = In(B, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = B.subtreeFlags & 65011712, X !== null ? T = In(
      X,
      T
    ) : (T = Xl(
      T,
      s,
      n,
      null
    ), T.flags |= 2), T.return = t, l.return = t, l.sibling = T, t.child = l, Xo(null, l), l = t.child, T = e.child.memoizedState, T === null ? T = Xs(n) : (s = T.cachePool, s !== null ? (B = vt._currentValue, s = s.parent !== B ? { parent: B, pool: B } : s) : s = Sm(), T = {
      baseLanes: T.baseLanes | n,
      cachePool: s
    }), l.memoizedState = T, l.childLanes = Qs(
      e,
      y,
      n
    ), t.memoizedState = Ys, Xo(e.child, l)) : (bl(t), n = e.child, e = n.sibling, n = In(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (y = t.deletions, y === null ? (t.deletions = [e], t.flags |= 16) : y.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Ks(e, t) {
    return t = yi(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function yi(e, t) {
    return e = en(22, e, null, t), e.lanes = 0, e;
  }
  function Fs(e, t, n) {
    return ea(t, e.child, null, n), e = Ks(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Bp(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), fs(e.return, t, n);
  }
  function Js(e, t, n, l, s, u) {
    var y = e.memoizedState;
    y === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: s,
      treeForkCount: u
    } : (y.isBackwards = t, y.rendering = null, y.renderingStartTime = 0, y.last = l, y.tail = n, y.tailMode = s, y.treeForkCount = u);
  }
  function Lp(e, t, n) {
    var l = t.pendingProps, s = l.revealOrder, u = l.tail;
    l = l.children;
    var y = bt.current, T = (y & 2) !== 0;
    if (T ? (y = y & 1 | 2, t.flags |= 128) : y &= 1, P(bt, y), Dt(e, t, l, n), l = Ze ? Bo : 0, !T && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Bp(e, n, t);
        else if (e.tag === 19)
          Bp(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          e = n.alternate, e !== null && ri(e) === null && (s = n), n = n.sibling;
        n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Js(
          t,
          !1,
          s,
          n,
          u,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (e = s.alternate, e !== null && ri(e) === null) {
            t.child = s;
            break;
          }
          e = s.sibling, s.sibling = n, n = s, s = e;
        }
        Js(
          t,
          !0,
          n,
          null,
          u,
          l
        );
        break;
      case "together":
        Js(
          t,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Kn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Sl |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Ma(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(i(153));
    if (t.child !== null) {
      for (e = t.child, n = In(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = In(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Ws(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Wr(e)));
  }
  function R2(e, t, n) {
    switch (t.tag) {
      case 3:
        me(t, t.stateNode.containerInfo), ml(t, vt, e.memoizedState.cache), Ql();
        break;
      case 27:
      case 5:
        ve(t);
        break;
      case 4:
        me(t, t.stateNode.containerInfo);
        break;
      case 10:
        ml(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, xs(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (bl(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? $p(e, t, n) : (bl(t), e = Kn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        bl(t);
        break;
      case 19:
        var s = (e.flags & 128) !== 0;
        if (l = (n & t.childLanes) !== 0, l || (Ma(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), s) {
          if (l)
            return Lp(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), P(bt, bt.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, _p(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        ml(t, vt, e.memoizedState.cache);
    }
    return Kn(e, t, n);
  }
  function zp(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        St = !0;
      else {
        if (!Ws(e, n) && (t.flags & 128) === 0)
          return St = !1, R2(
            e,
            t,
            n
          );
        St = (e.flags & 131072) !== 0;
      }
    else
      St = !1, Ze && (t.flags & 1048576) !== 0 && pm(t, Bo, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = Wl(t.elementType), t.type = e, typeof e == "function")
            ls(e) ? (l = na(e, l), t.tag = 1, t = Dp(
              null,
              t,
              e,
              l,
              n
            )) : (t.tag = 0, t = Zs(
              null,
              t,
              e,
              l,
              n
            ));
          else {
            if (e != null) {
              var s = e.$$typeof;
              if (s === D) {
                t.tag = 11, t = Tp(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (s === j) {
                t.tag = 14, t = Cp(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              }
            }
            throw t = ne(e) || e, Error(i(306, t, ""));
          }
        }
        return t;
      case 0:
        return Zs(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return l = t.type, s = na(
          l,
          t.pendingProps
        ), Dp(
          e,
          t,
          l,
          s,
          n
        );
      case 3:
        e: {
          if (me(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(i(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          s = u.element, ys(e, t), ko(t, l, null, n);
          var y = t.memoizedState;
          if (l = y.cache, ml(t, vt, l), l !== u.cache && ds(
            t,
            [vt],
            n,
            !0
          ), Vo(), l = y.element, u.isDehydrated)
            if (u = {
              element: l,
              isDehydrated: !1,
              cache: y.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Mp(
                e,
                t,
                l,
                n
              );
              break e;
            } else if (l !== s) {
              s = fn(
                Error(i(424)),
                t
              ), Lo(s), t = Mp(
                e,
                t,
                l,
                n
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (it = gn(e.firstChild), Rt = t, Ze = !0, fl = null, pn = !0, n = _m(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (Ql(), l === s) {
              t = Kn(
                e,
                t,
                n
              );
              break e;
            }
            Dt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return bi(e, t), e === null ? (n = Xh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ze || (n = t.type, e = t.pendingProps, l = Bi(
          V.current
        ).createElement(n), l[At] = t, l[Gt] = e, Mt(l, n, e), Nt(l), t.stateNode = l) : t.memoizedState = Xh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ve(t), e === null && Ze && (l = t.stateNode = Gh(
          t.type,
          t.pendingProps,
          V.current
        ), Rt = t, pn = !0, s = it, Nl(t.type) ? (Du = s, it = gn(l.firstChild)) : it = s), Dt(
          e,
          t,
          t.pendingProps.children,
          n
        ), bi(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ze && ((s = l = it) && (l = oE(
          l,
          t.type,
          t.pendingProps,
          pn
        ), l !== null ? (t.stateNode = l, Rt = t, it = gn(l.firstChild), pn = !1, s = !0) : s = !1), s || dl(t)), ve(t), s = t.type, u = t.pendingProps, y = e !== null ? e.memoizedProps : null, l = u.children, Nu(s, u) ? l = null : y !== null && Nu(s, y) && (t.flags |= 32), t.memoizedState !== null && (s = Cs(
          e,
          t,
          E2,
          null,
          null,
          n
        ), cr._currentValue = s), bi(e, t), Dt(e, t, l, n), t.child;
      case 6:
        return e === null && Ze && ((e = n = it) && (n = rE(
          n,
          t.pendingProps,
          pn
        ), n !== null ? (t.stateNode = n, Rt = t, it = null, e = !0) : e = !1), e || dl(t)), null;
      case 13:
        return $p(e, t, n);
      case 4:
        return me(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = ea(
          t,
          null,
          l,
          n
        ) : Dt(e, t, l, n), t.child;
      case 11:
        return Tp(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return Dt(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return Dt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return Dt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return l = t.pendingProps, ml(t, t.type, l.value), Dt(e, t, l.children, n), t.child;
      case 9:
        return s = t.type._context, l = t.pendingProps.children, Fl(t), s = Ot(s), l = l(s), t.flags |= 1, Dt(e, t, l, n), t.child;
      case 14:
        return Cp(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Np(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Lp(e, t, n);
      case 31:
        return A2(e, t, n);
      case 22:
        return _p(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Fl(t), l = Ot(vt), e === null ? (s = hs(), s === null && (s = ot, u = ms(), s.pooledCache = u, u.refCount++, u !== null && (s.pooledCacheLanes |= n), s = u), t.memoizedState = { parent: l, cache: s }, bs(t), ml(t, vt, s)) : ((e.lanes & n) !== 0 && (ys(e, t), ko(t, null, null, n), Vo()), s = e.memoizedState, u = t.memoizedState, s.parent !== l ? (s = { parent: l, cache: l }, t.memoizedState = s, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = s), ml(t, vt, l)) : (l = u.cache, ml(t, vt, l), l !== s.cache && ds(
          t,
          [vt],
          n,
          !0
        ))), Dt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(i(156, t.tag));
  }
  function Fn(e) {
    e.flags |= 4;
  }
  function Ps(e, t, n, l, s) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (s & 335544128) === s)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (sh()) e.flags |= 8192;
        else
          throw Pl = ni, gs;
    } else e.flags &= -16777217;
  }
  function jp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Wh(t))
      if (sh()) e.flags |= 8192;
      else
        throw Pl = ni, gs;
  }
  function vi(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? So() : 536870912, e.lanes |= t, Ga |= t);
  }
  function Qo(e, t) {
    if (!Ze)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function ct(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, l = 0;
    if (t)
      for (var s = e.child; s !== null; )
        n |= s.lanes | s.childLanes, l |= s.subtreeFlags & 65011712, l |= s.flags & 65011712, s.return = e, s = s.sibling;
    else
      for (s = e.child; s !== null; )
        n |= s.lanes | s.childLanes, l |= s.subtreeFlags, l |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= l, e.childLanes = n, t;
  }
  function O2(e, t, n) {
    var l = t.pendingProps;
    switch (is(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ct(t), null;
      case 1:
        return ct(t), null;
      case 3:
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Yn(vt), ie(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Da(t) ? Fn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ss())), ct(t), null;
      case 26:
        var s = t.type, u = t.memoizedState;
        return e === null ? (Fn(t), u !== null ? (ct(t), jp(t, u)) : (ct(t), Ps(
          t,
          s,
          null,
          l,
          n
        ))) : u ? u !== e.memoizedState ? (Fn(t), ct(t), jp(t, u)) : (ct(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Fn(t), ct(t), Ps(
          t,
          s,
          e,
          l,
          n
        )), null;
      case 27:
        if (Ne(t), n = V.current, s = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Fn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(i(166));
            return ct(t), null;
          }
          e = G.current, Da(t) ? gm(t) : (e = Gh(s, l, n), t.stateNode = e, Fn(t));
        }
        return ct(t), null;
      case 5:
        if (Ne(t), s = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Fn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(i(166));
            return ct(t), null;
          }
          if (u = G.current, Da(t))
            gm(t);
          else {
            var y = Bi(
              V.current
            );
            switch (u) {
              case 1:
                u = y.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                u = y.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    u = y.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    u = y.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    u = y.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof l.is == "string" ? y.createElement("select", {
                      is: l.is
                    }) : y.createElement("select"), l.multiple ? u.multiple = !0 : l.size && (u.size = l.size);
                    break;
                  default:
                    u = typeof l.is == "string" ? y.createElement(s, { is: l.is }) : y.createElement(s);
                }
            }
            u[At] = t, u[Gt] = l;
            e: for (y = t.child; y !== null; ) {
              if (y.tag === 5 || y.tag === 6)
                u.appendChild(y.stateNode);
              else if (y.tag !== 4 && y.tag !== 27 && y.child !== null) {
                y.child.return = y, y = y.child;
                continue;
              }
              if (y === t) break e;
              for (; y.sibling === null; ) {
                if (y.return === null || y.return === t)
                  break e;
                y = y.return;
              }
              y.sibling.return = y.return, y = y.sibling;
            }
            t.stateNode = u;
            e: switch (Mt(u, s, l), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Fn(t);
          }
        }
        return ct(t), Ps(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && Fn(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(i(166));
          if (e = V.current, Da(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, s = Rt, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  l = s.memoizedProps;
              }
            e[At] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || $h(e.nodeValue, n)), e || dl(t, !0);
          } else
            e = Bi(e).createTextNode(
              l
            ), e[At] = t, t.stateNode = e;
        }
        return ct(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Da(t), n !== null) {
            if (e === null) {
              if (!l) throw Error(i(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(i(557));
              e[At] = t;
            } else
              Ql(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ct(t), e = !1;
          } else
            n = ss(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (nn(t), t) : (nn(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(i(558));
        }
        return ct(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (s = Da(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!s) throw Error(i(318));
              if (s = t.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(i(317));
              s[At] = t;
            } else
              Ql(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ct(t), s = !1;
          } else
            s = ss(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return t.flags & 256 ? (nn(t), t) : (nn(t), null);
        }
        return nn(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, s = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (s = l.alternate.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== s && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), vi(t, t.updateQueue), ct(t), null);
      case 4:
        return ie(), e === null && Su(t.stateNode.containerInfo), ct(t), null;
      case 10:
        return Yn(t.type), ct(t), null;
      case 19:
        if (q(bt), l = t.memoizedState, l === null) return ct(t), null;
        if (s = (t.flags & 128) !== 0, u = l.rendering, u === null)
          if (s) Qo(l, !1);
          else {
            if (ht !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = ri(e), u !== null) {
                  for (t.flags |= 128, Qo(l, !1), e = u.updateQueue, t.updateQueue = e, vi(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    fm(n, e), n = n.sibling;
                  return P(
                    bt,
                    bt.current & 1 | 2
                  ), Ze && Gn(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && Xe() > Ti && (t.flags |= 128, s = !0, Qo(l, !1), t.lanes = 4194304);
          }
        else {
          if (!s)
            if (e = ri(u), e !== null) {
              if (t.flags |= 128, s = !0, e = e.updateQueue, t.updateQueue = e, vi(t, e), Qo(l, !0), l.tail === null && l.tailMode === "hidden" && !u.alternate && !Ze)
                return ct(t), null;
            } else
              2 * Xe() - l.renderingStartTime > Ti && n !== 536870912 && (t.flags |= 128, s = !0, Qo(l, !1), t.lanes = 4194304);
          l.isBackwards ? (u.sibling = t.child, t.child = u) : (e = l.last, e !== null ? e.sibling = u : t.child = u, l.last = u);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Xe(), e.sibling = null, n = bt.current, P(
          bt,
          s ? n & 1 | 2 : n & 1
        ), Ze && Gn(t, l.treeForkCount), e) : (ct(t), null);
      case 22:
      case 23:
        return nn(t), ws(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (ct(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ct(t), n = t.updateQueue, n !== null && vi(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && q(Jl), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Yn(vt), ct(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(i(156, t.tag));
  }
  function D2(e, t) {
    switch (is(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Yn(vt), ie(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ne(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (nn(t), t.alternate === null)
            throw Error(i(340));
          Ql();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (nn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(i(340));
          Ql();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return q(bt), null;
      case 4:
        return ie(), null;
      case 10:
        return Yn(t.type), null;
      case 22:
      case 23:
        return nn(t), ws(), e !== null && q(Jl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Yn(vt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Hp(e, t) {
    switch (is(t), t.tag) {
      case 3:
        Yn(vt), ie();
        break;
      case 26:
      case 27:
      case 5:
        Ne(t);
        break;
      case 4:
        ie();
        break;
      case 31:
        t.memoizedState !== null && nn(t);
        break;
      case 13:
        nn(t);
        break;
      case 19:
        q(bt);
        break;
      case 10:
        Yn(t.type);
        break;
      case 22:
      case 23:
        nn(t), ws(), e !== null && q(Jl);
        break;
      case 24:
        Yn(vt);
    }
  }
  function Ko(e, t) {
    try {
      var n = t.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var s = l.next;
        n = s;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var u = n.create, y = n.inst;
            l = u(), y.destroy = l;
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (T) {
      et(t, t.return, T);
    }
  }
  function vl(e, t, n) {
    try {
      var l = t.updateQueue, s = l !== null ? l.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            var y = l.inst, T = y.destroy;
            if (T !== void 0) {
              y.destroy = void 0, s = t;
              var B = n, X = T;
              try {
                X();
              } catch (re) {
                et(
                  s,
                  B,
                  re
                );
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (re) {
      et(t, t.return, re);
    }
  }
  function Up(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Rm(t, n);
      } catch (l) {
        et(e, e.return, l);
      }
    }
  }
  function qp(e, t, n) {
    n.props = na(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      et(e, t, l);
    }
  }
  function Fo(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(l) : n.current = l;
      }
    } catch (s) {
      et(e, t, s);
    }
  }
  function Rn(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (s) {
          et(e, t, s);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          et(e, t, s);
        }
      else n.current = null;
  }
  function Vp(e) {
    var t = e.type, n = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (s) {
      et(e, e.return, s);
    }
  }
  function eu(e, t, n) {
    try {
      var l = e.stateNode;
      P2(l, e.type, n, t), l[Gt] = t;
    } catch (s) {
      et(e, e.return, s);
    }
  }
  function kp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Nl(e.type) || e.tag === 4;
  }
  function tu(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || kp(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Nl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function nu(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Vn));
    else if (l !== 4 && (l === 27 && Nl(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (nu(e, t, n), e = e.sibling; e !== null; )
        nu(e, t, n), e = e.sibling;
  }
  function Ei(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && Nl(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (Ei(e, t, n), e = e.sibling; e !== null; )
        Ei(e, t, n), e = e.sibling;
  }
  function Ip(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, s = t.attributes; s.length; )
        t.removeAttributeNode(s[0]);
      Mt(t, l, n), t[At] = e, t[Gt] = n;
    } catch (u) {
      et(e, e.return, u);
    }
  }
  var Jn = !1, wt = !1, lu = !1, Gp = typeof WeakSet == "function" ? WeakSet : Set, _t = null;
  function M2(e, t) {
    if (e = e.containerInfo, Tu = Vi, e = nm(e), Fc(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var s = l.anchorOffset, u = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break e;
            }
            var y = 0, T = -1, B = -1, X = 0, re = 0, ue = e, K = null;
            t: for (; ; ) {
              for (var ee; ue !== n || s !== 0 && ue.nodeType !== 3 || (T = y + s), ue !== u || l !== 0 && ue.nodeType !== 3 || (B = y + l), ue.nodeType === 3 && (y += ue.nodeValue.length), (ee = ue.firstChild) !== null; )
                K = ue, ue = ee;
              for (; ; ) {
                if (ue === e) break t;
                if (K === n && ++X === s && (T = y), K === u && ++re === l && (B = y), (ee = ue.nextSibling) !== null) break;
                ue = K, K = ue.parentNode;
              }
              ue = ee;
            }
            n = T === -1 || B === -1 ? null : { start: T, end: B };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Cu = { focusedElem: e, selectionRange: n }, Vi = !1, _t = t; _t !== null; )
      if (t = _t, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, _t = e;
      else
        for (; _t !== null; ) {
          switch (t = _t, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  s = e[n], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, n = t, s = u.memoizedProps, u = u.memoizedState, l = n.stateNode;
                try {
                  var we = na(
                    n.type,
                    s
                  );
                  e = l.getSnapshotBeforeUpdate(
                    we,
                    u
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Re) {
                  et(
                    n,
                    n.return,
                    Re
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  Au(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Au(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(i(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, _t = e;
            break;
          }
          _t = t.return;
        }
  }
  function Zp(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Pn(e, n), l & 4 && Ko(5, n);
        break;
      case 1:
        if (Pn(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (y) {
              et(n, n.return, y);
            }
          else {
            var s = na(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                s,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              et(
                n,
                n.return,
                y
              );
            }
          }
        l & 64 && Up(n), l & 512 && Fo(n, n.return);
        break;
      case 3:
        if (Pn(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Rm(e, t);
          } catch (y) {
            et(n, n.return, y);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Ip(n);
      case 26:
      case 5:
        Pn(e, n), t === null && l & 4 && Vp(n), l & 512 && Fo(n, n.return);
        break;
      case 12:
        Pn(e, n);
        break;
      case 31:
        Pn(e, n), l & 4 && Qp(e, n);
        break;
      case 13:
        Pn(e, n), l & 4 && Kp(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = V2.bind(
          null,
          n
        ), iE(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || Jn, !l) {
          t = t !== null && t.memoizedState !== null || wt, s = Jn;
          var u = wt;
          Jn = l, (wt = t) && !u ? el(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Pn(e, n), Jn = s, wt = u;
        }
        break;
      case 30:
        break;
      default:
        Pn(e, n);
    }
  }
  function Yp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Yp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && $c(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var ft = null, Yt = !1;
  function Wn(e, t, n) {
    for (n = n.child; n !== null; )
      Xp(e, t, n), n = n.sibling;
  }
  function Xp(e, t, n) {
    if ($t && typeof $t.onCommitFiberUnmount == "function")
      try {
        $t.onCommitFiberUnmount(ol, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        wt || Rn(n, t), Wn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        wt || Rn(n, t);
        var l = ft, s = Yt;
        Nl(n.type) && (ft = n.stateNode, Yt = !1), Wn(
          e,
          t,
          n
        ), or(n.stateNode), ft = l, Yt = s;
        break;
      case 5:
        wt || Rn(n, t);
      case 6:
        if (l = ft, s = Yt, ft = null, Wn(
          e,
          t,
          n
        ), ft = l, Yt = s, ft !== null)
          if (Yt)
            try {
              (ft.nodeType === 9 ? ft.body : ft.nodeName === "HTML" ? ft.ownerDocument.body : ft).removeChild(n.stateNode);
            } catch (u) {
              et(
                n,
                t,
                u
              );
            }
          else
            try {
              ft.removeChild(n.stateNode);
            } catch (u) {
              et(
                n,
                t,
                u
              );
            }
        break;
      case 18:
        ft !== null && (Yt ? (e = ft, Uh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Wa(e)) : Uh(ft, n.stateNode));
        break;
      case 4:
        l = ft, s = Yt, ft = n.stateNode.containerInfo, Yt = !0, Wn(
          e,
          t,
          n
        ), ft = l, Yt = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        vl(2, n, t), wt || vl(4, n, t), Wn(
          e,
          t,
          n
        );
        break;
      case 1:
        wt || (Rn(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && qp(
          n,
          t,
          l
        )), Wn(
          e,
          t,
          n
        );
        break;
      case 21:
        Wn(
          e,
          t,
          n
        );
        break;
      case 22:
        wt = (l = wt) || n.memoizedState !== null, Wn(
          e,
          t,
          n
        ), wt = l;
        break;
      default:
        Wn(
          e,
          t,
          n
        );
    }
  }
  function Qp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Wa(e);
      } catch (n) {
        et(t, t.return, n);
      }
    }
  }
  function Kp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Wa(e);
      } catch (n) {
        et(t, t.return, n);
      }
  }
  function $2(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Gp()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Gp()), t;
      default:
        throw Error(i(435, e.tag));
    }
  }
  function Si(e, t) {
    var n = $2(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var s = k2.bind(null, e, l);
        l.then(s, s);
      }
    });
  }
  function Xt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var s = n[l], u = e, y = t, T = y;
        e: for (; T !== null; ) {
          switch (T.tag) {
            case 27:
              if (Nl(T.type)) {
                ft = T.stateNode, Yt = !1;
                break e;
              }
              break;
            case 5:
              ft = T.stateNode, Yt = !1;
              break e;
            case 3:
            case 4:
              ft = T.stateNode.containerInfo, Yt = !0;
              break e;
          }
          T = T.return;
        }
        if (ft === null) throw Error(i(160));
        Xp(u, y, s), ft = null, Yt = !1, u = s.alternate, u !== null && (u.return = null), s.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Fp(t, e), t = t.sibling;
  }
  var wn = null;
  function Fp(e, t) {
    var n = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Xt(t, e), Qt(e), l & 4 && (vl(3, e, e.return), Ko(3, e), vl(5, e, e.return));
        break;
      case 1:
        Xt(t, e), Qt(e), l & 512 && (wt || n === null || Rn(n, n.return)), l & 64 && Jn && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var s = wn;
        if (Xt(t, e), Qt(e), l & 512 && (wt || n === null || Rn(n, n.return)), l & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (l = e.memoizedState, n === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, n = e.memoizedProps, s = s.ownerDocument || s;
                  t: switch (l) {
                    case "title":
                      u = s.getElementsByTagName("title")[0], (!u || u[xo] || u[At] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = s.createElement(l), s.head.insertBefore(
                        u,
                        s.querySelector("head > title")
                      )), Mt(u, l, n), u[At] = e, Nt(u), l = u;
                      break e;
                    case "link":
                      var y = Fh(
                        "link",
                        "href",
                        s
                      ).get(l + (n.href || ""));
                      if (y) {
                        for (var T = 0; T < y.length; T++)
                          if (u = y[T], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            y.splice(T, 1);
                            break t;
                          }
                      }
                      u = s.createElement(l), Mt(u, l, n), s.head.appendChild(u);
                      break;
                    case "meta":
                      if (y = Fh(
                        "meta",
                        "content",
                        s
                      ).get(l + (n.content || ""))) {
                        for (T = 0; T < y.length; T++)
                          if (u = y[T], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            y.splice(T, 1);
                            break t;
                          }
                      }
                      u = s.createElement(l), Mt(u, l, n), s.head.appendChild(u);
                      break;
                    default:
                      throw Error(i(468, l));
                  }
                  u[At] = e, Nt(u), l = u;
                }
                e.stateNode = l;
              } else
                Jh(
                  s,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Kh(
                s,
                l,
                e.memoizedProps
              );
          else
            u !== l ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, l === null ? Jh(
              s,
              e.type,
              e.stateNode
            ) : Kh(
              s,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && eu(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Xt(t, e), Qt(e), l & 512 && (wt || n === null || Rn(n, n.return)), n !== null && l & 4 && eu(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Xt(t, e), Qt(e), l & 512 && (wt || n === null || Rn(n, n.return)), e.flags & 32) {
          s = e.stateNode;
          try {
            Sa(s, "");
          } catch (we) {
            et(e, e.return, we);
          }
        }
        l & 4 && e.stateNode != null && (s = e.memoizedProps, eu(
          e,
          s,
          n !== null ? n.memoizedProps : s
        )), l & 1024 && (lu = !0);
        break;
      case 6:
        if (Xt(t, e), Qt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(i(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch (we) {
            et(e, e.return, we);
          }
        }
        break;
      case 3:
        if (ji = null, s = wn, wn = Li(t.containerInfo), Xt(t, e), wn = s, Qt(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            Wa(t.containerInfo);
          } catch (we) {
            et(e, e.return, we);
          }
        lu && (lu = !1, Jp(e));
        break;
      case 4:
        l = wn, wn = Li(
          e.stateNode.containerInfo
        ), Xt(t, e), Qt(e), wn = l;
        break;
      case 12:
        Xt(t, e), Qt(e);
        break;
      case 31:
        Xt(t, e), Qt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Si(e, l)));
        break;
      case 13:
        Xt(t, e), Qt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (xi = Xe()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Si(e, l)));
        break;
      case 22:
        s = e.memoizedState !== null;
        var B = n !== null && n.memoizedState !== null, X = Jn, re = wt;
        if (Jn = X || s, wt = re || B, Xt(t, e), wt = re, Jn = X, Qt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = s ? t._visibility & -2 : t._visibility | 1, s && (n === null || B || Jn || wt || la(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                B = n = t;
                try {
                  if (u = B.stateNode, s)
                    y = u.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    T = B.stateNode;
                    var ue = B.memoizedProps.style, K = ue != null && ue.hasOwnProperty("display") ? ue.display : null;
                    T.style.display = K == null || typeof K == "boolean" ? "" : ("" + K).trim();
                  }
                } catch (we) {
                  et(B, B.return, we);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                B = t;
                try {
                  B.stateNode.nodeValue = s ? "" : B.memoizedProps;
                } catch (we) {
                  et(B, B.return, we);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                B = t;
                try {
                  var ee = B.stateNode;
                  s ? qh(ee, !0) : qh(B.stateNode, !1);
                } catch (we) {
                  et(B, B.return, we);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), t = t.return;
            }
            n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
          }
        l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, Si(e, n))));
        break;
      case 19:
        Xt(t, e), Qt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, Si(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Xt(t, e), Qt(e);
    }
  }
  function Qt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (kp(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(i(160));
        switch (n.tag) {
          case 27:
            var s = n.stateNode, u = tu(e);
            Ei(e, u, s);
            break;
          case 5:
            var y = n.stateNode;
            n.flags & 32 && (Sa(y, ""), n.flags &= -33);
            var T = tu(e);
            Ei(e, T, y);
            break;
          case 3:
          case 4:
            var B = n.stateNode.containerInfo, X = tu(e);
            nu(
              e,
              X,
              B
            );
            break;
          default:
            throw Error(i(161));
        }
      } catch (re) {
        et(e, e.return, re);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Jp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Jp(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Pn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Zp(e, t.alternate, t), t = t.sibling;
  }
  function la(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          vl(4, t, t.return), la(t);
          break;
        case 1:
          Rn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && qp(
            t,
            t.return,
            n
          ), la(t);
          break;
        case 27:
          or(t.stateNode);
        case 26:
        case 5:
          Rn(t, t.return), la(t);
          break;
        case 22:
          t.memoizedState === null && la(t);
          break;
        case 30:
          la(t);
          break;
        default:
          la(t);
      }
      e = e.sibling;
    }
  }
  function el(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, s = e, u = t, y = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          el(
            s,
            u,
            n
          ), Ko(4, u);
          break;
        case 1:
          if (el(
            s,
            u,
            n
          ), l = u, s = l.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (X) {
              et(l, l.return, X);
            }
          if (l = u, s = l.updateQueue, s !== null) {
            var T = l.stateNode;
            try {
              var B = s.shared.hiddenCallbacks;
              if (B !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < B.length; s++)
                  Am(B[s], T);
            } catch (X) {
              et(l, l.return, X);
            }
          }
          n && y & 64 && Up(u), Fo(u, u.return);
          break;
        case 27:
          Ip(u);
        case 26:
        case 5:
          el(
            s,
            u,
            n
          ), n && l === null && y & 4 && Vp(u), Fo(u, u.return);
          break;
        case 12:
          el(
            s,
            u,
            n
          );
          break;
        case 31:
          el(
            s,
            u,
            n
          ), n && y & 4 && Qp(s, u);
          break;
        case 13:
          el(
            s,
            u,
            n
          ), n && y & 4 && Kp(s, u);
          break;
        case 22:
          u.memoizedState === null && el(
            s,
            u,
            n
          ), Fo(u, u.return);
          break;
        case 30:
          break;
        default:
          el(
            s,
            u,
            n
          );
      }
      t = t.sibling;
    }
  }
  function au(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && zo(n));
  }
  function ou(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && zo(e));
  }
  function xn(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Wp(
          e,
          t,
          n,
          l
        ), t = t.sibling;
  }
  function Wp(e, t, n, l) {
    var s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        xn(
          e,
          t,
          n,
          l
        ), s & 2048 && Ko(9, t);
        break;
      case 1:
        xn(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        xn(
          e,
          t,
          n,
          l
        ), s & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && zo(e)));
        break;
      case 12:
        if (s & 2048) {
          xn(
            e,
            t,
            n,
            l
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, y = u.id, T = u.onPostCommit;
            typeof T == "function" && T(
              y,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (B) {
            et(t, t.return, B);
          }
        } else
          xn(
            e,
            t,
            n,
            l
          );
        break;
      case 31:
        xn(
          e,
          t,
          n,
          l
        );
        break;
      case 13:
        xn(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, y = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? xn(
          e,
          t,
          n,
          l
        ) : Jo(e, t) : u._visibility & 2 ? xn(
          e,
          t,
          n,
          l
        ) : (u._visibility |= 2, Va(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && au(y, t);
        break;
      case 24:
        xn(
          e,
          t,
          n,
          l
        ), s & 2048 && ou(t.alternate, t);
        break;
      default:
        xn(
          e,
          t,
          n,
          l
        );
    }
  }
  function Va(e, t, n, l, s) {
    for (s = s && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, y = t, T = n, B = l, X = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Va(
            u,
            y,
            T,
            B,
            s
          ), Ko(8, y);
          break;
        case 23:
          break;
        case 22:
          var re = y.stateNode;
          y.memoizedState !== null ? re._visibility & 2 ? Va(
            u,
            y,
            T,
            B,
            s
          ) : Jo(
            u,
            y
          ) : (re._visibility |= 2, Va(
            u,
            y,
            T,
            B,
            s
          )), s && X & 2048 && au(
            y.alternate,
            y
          );
          break;
        case 24:
          Va(
            u,
            y,
            T,
            B,
            s
          ), s && X & 2048 && ou(y.alternate, y);
          break;
        default:
          Va(
            u,
            y,
            T,
            B,
            s
          );
      }
      t = t.sibling;
    }
  }
  function Jo(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, s = l.flags;
        switch (l.tag) {
          case 22:
            Jo(n, l), s & 2048 && au(
              l.alternate,
              l
            );
            break;
          case 24:
            Jo(n, l), s & 2048 && ou(l.alternate, l);
            break;
          default:
            Jo(n, l);
        }
        t = t.sibling;
      }
  }
  var Wo = 8192;
  function ka(e, t, n) {
    if (e.subtreeFlags & Wo)
      for (e = e.child; e !== null; )
        Pp(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Pp(e, t, n) {
    switch (e.tag) {
      case 26:
        ka(
          e,
          t,
          n
        ), e.flags & Wo && e.memoizedState !== null && vE(
          n,
          wn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ka(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var l = wn;
        wn = Li(e.stateNode.containerInfo), ka(
          e,
          t,
          n
        ), wn = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Wo, Wo = 16777216, ka(
          e,
          t,
          n
        ), Wo = l) : ka(
          e,
          t,
          n
        ));
        break;
      default:
        ka(
          e,
          t,
          n
        );
    }
  }
  function eh(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Po(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          _t = l, nh(
            l,
            e
          );
        }
      eh(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        th(e), e = e.sibling;
  }
  function th(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Po(e), e.flags & 2048 && vl(9, e, e.return);
        break;
      case 3:
        Po(e);
        break;
      case 12:
        Po(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, wi(e)) : Po(e);
        break;
      default:
        Po(e);
    }
  }
  function wi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          _t = l, nh(
            l,
            e
          );
        }
      eh(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          vl(8, t, t.return), wi(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, wi(t));
          break;
        default:
          wi(t);
      }
      e = e.sibling;
    }
  }
  function nh(e, t) {
    for (; _t !== null; ) {
      var n = _t;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          vl(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          zo(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, _t = l;
      else
        e: for (n = e; _t !== null; ) {
          l = _t;
          var s = l.sibling, u = l.return;
          if (Yp(l), l === n) {
            _t = null;
            break e;
          }
          if (s !== null) {
            s.return = u, _t = s;
            break e;
          }
          _t = u;
        }
    }
  }
  var B2 = {
    getCacheForType: function(e) {
      var t = Ot(vt), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return Ot(vt).controller.signal;
    }
  }, L2 = typeof WeakMap == "function" ? WeakMap : Map, Je = 0, ot = null, qe = null, Ie = 0, Pe = 0, ln = null, El = !1, Ia = !1, ru = !1, tl = 0, ht = 0, Sl = 0, aa = 0, iu = 0, an = 0, Ga = 0, er = null, Kt = null, cu = !1, xi = 0, lh = 0, Ti = 1 / 0, Ci = null, wl = null, Tt = 0, xl = null, Za = null, nl = 0, su = 0, uu = null, ah = null, tr = 0, fu = null;
  function on() {
    return (Je & 2) !== 0 && Ie !== 0 ? Ie & -Ie : R.T !== null ? bu() : Ed();
  }
  function oh() {
    if (an === 0)
      if ((Ie & 536870912) === 0 || Ze) {
        var e = rl;
        rl <<= 1, (rl & 3932160) === 0 && (rl = 262144), an = e;
      } else an = 536870912;
    return e = tn.current, e !== null && (e.flags |= 32), an;
  }
  function Ft(e, t, n) {
    (e === ot && (Pe === 2 || Pe === 9) || e.cancelPendingCommit !== null) && (Ya(e, 0), Tl(
      e,
      Ie,
      an,
      !1
    )), Be(e, n), ((Je & 2) === 0 || e !== ot) && (e === ot && ((Je & 2) === 0 && (aa |= n), ht === 4 && Tl(
      e,
      Ie,
      an,
      !1
    )), On(e));
  }
  function rh(e, t, n) {
    if ((Je & 6) !== 0) throw Error(i(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || il(e, t), s = l ? H2(e, t) : mu(e, t, !0), u = l;
    do {
      if (s === 0) {
        Ia && !l && Tl(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !z2(n)) {
          s = mu(e, t, !1), u = !1;
          continue;
        }
        if (s === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var y = 0;
          else
            y = e.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            t = y;
            e: {
              var T = e;
              s = er;
              var B = T.current.memoizedState.isDehydrated;
              if (B && (Ya(T, y).flags |= 256), y = mu(
                T,
                y,
                !1
              ), y !== 2) {
                if (ru && !B) {
                  T.errorRecoveryDisabledLanes |= u, aa |= u, s = 4;
                  break e;
                }
                u = Kt, Kt = s, u !== null && (Kt === null ? Kt = u : Kt.push.apply(
                  Kt,
                  u
                ));
              }
              s = y;
            }
            if (u = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Ya(e, 0), Tl(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, u = s, u) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Tl(
                l,
                t,
                an,
                !El
              );
              break e;
            case 2:
              Kt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && (s = xi + 300 - Xe(), 10 < s)) {
            if (Tl(
              l,
              t,
              an,
              !El
            ), ql(l, 0, !0) !== 0) break e;
            nl = t, l.timeoutHandle = jh(
              ih.bind(
                null,
                l,
                n,
                Kt,
                Ci,
                cu,
                t,
                an,
                aa,
                Ga,
                El,
                u,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break e;
          }
          ih(
            l,
            n,
            Kt,
            Ci,
            cu,
            t,
            an,
            aa,
            Ga,
            El,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    On(e);
  }
  function ih(e, t, n, l, s, u, y, T, B, X, re, ue, K, ee) {
    if (e.timeoutHandle = -1, ue = t.subtreeFlags, ue & 8192 || (ue & 16785408) === 16785408) {
      ue = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Vn
      }, Pp(
        t,
        u,
        ue
      );
      var we = (u & 62914560) === u ? xi - Xe() : (u & 4194048) === u ? lh - Xe() : 0;
      if (we = EE(
        ue,
        we
      ), we !== null) {
        nl = u, e.cancelPendingCommit = we(
          hh.bind(
            null,
            e,
            t,
            u,
            n,
            l,
            s,
            y,
            T,
            B,
            re,
            ue,
            null,
            K,
            ee
          )
        ), Tl(e, u, y, !X);
        return;
      }
    }
    hh(
      e,
      t,
      u,
      n,
      l,
      s,
      y,
      T,
      B
    );
  }
  function z2(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var s = n[l], u = s.getSnapshot;
          s = s.value;
          try {
            if (!Pt(u(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Tl(e, t, n, l) {
    t &= ~iu, t &= ~aa, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var s = t; 0 < s; ) {
      var u = 31 - jt(s), y = 1 << u;
      l[u] = -1, s &= ~y;
    }
    n !== 0 && Ht(e, n, t);
  }
  function Ni() {
    return (Je & 6) === 0 ? (nr(0), !1) : !0;
  }
  function du() {
    if (qe !== null) {
      if (Pe === 0)
        var e = qe.return;
      else
        e = qe, Zn = Kl = null, As(e), za = null, Ho = 0, e = qe;
      for (; e !== null; )
        Hp(e.alternate, e), e = e.return;
      qe = null;
    }
  }
  function Ya(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, nE(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), nl = 0, du(), ot = e, qe = n = In(e.current, null), Ie = t, Pe = 0, ln = null, El = !1, Ia = il(e, t), ru = !1, Ga = an = iu = aa = Sl = ht = 0, Kt = er = null, cu = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var s = 31 - jt(l), u = 1 << s;
        t |= e[s], l &= ~u;
      }
    return tl = t, Xr(), n;
  }
  function ch(e, t) {
    Me = null, R.H = Yo, t === La || t === ti ? (t = Tm(), Pe = 3) : t === gs ? (t = Tm(), Pe = 4) : Pe = t === Gs ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ln = t, qe === null && (ht = 1, hi(
      e,
      fn(t, e.current)
    ));
  }
  function sh() {
    var e = tn.current;
    return e === null ? !0 : (Ie & 4194048) === Ie ? hn === null : (Ie & 62914560) === Ie || (Ie & 536870912) !== 0 ? e === hn : !1;
  }
  function uh() {
    var e = R.H;
    return R.H = Yo, e === null ? Yo : e;
  }
  function fh() {
    var e = R.A;
    return R.A = B2, e;
  }
  function _i() {
    ht = 4, El || (Ie & 4194048) !== Ie && tn.current !== null || (Ia = !0), (Sl & 134217727) === 0 && (aa & 134217727) === 0 || ot === null || Tl(
      ot,
      Ie,
      an,
      !1
    );
  }
  function mu(e, t, n) {
    var l = Je;
    Je |= 2;
    var s = uh(), u = fh();
    (ot !== e || Ie !== t) && (Ci = null, Ya(e, t)), t = !1;
    var y = ht;
    e: do
      try {
        if (Pe !== 0 && qe !== null) {
          var T = qe, B = ln;
          switch (Pe) {
            case 8:
              du(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              tn.current === null && (t = !0);
              var X = Pe;
              if (Pe = 0, ln = null, Xa(e, T, B, X), n && Ia) {
                y = 0;
                break e;
              }
              break;
            default:
              X = Pe, Pe = 0, ln = null, Xa(e, T, B, X);
          }
        }
        j2(), y = ht;
        break;
      } catch (re) {
        ch(e, re);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Zn = Kl = null, Je = l, R.H = s, R.A = u, qe === null && (ot = null, Ie = 0, Xr()), y;
  }
  function j2() {
    for (; qe !== null; ) dh(qe);
  }
  function H2(e, t) {
    var n = Je;
    Je |= 2;
    var l = uh(), s = fh();
    ot !== e || Ie !== t ? (Ci = null, Ti = Xe() + 500, Ya(e, t)) : Ia = il(
      e,
      t
    );
    e: do
      try {
        if (Pe !== 0 && qe !== null) {
          t = qe;
          var u = ln;
          t: switch (Pe) {
            case 1:
              Pe = 0, ln = null, Xa(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (wm(u)) {
                Pe = 0, ln = null, mh(t);
                break;
              }
              t = function() {
                Pe !== 2 && Pe !== 9 || ot !== e || (Pe = 7), On(e);
              }, u.then(t, t);
              break e;
            case 3:
              Pe = 7;
              break e;
            case 4:
              Pe = 5;
              break e;
            case 7:
              wm(u) ? (Pe = 0, ln = null, mh(t)) : (Pe = 0, ln = null, Xa(e, t, u, 7));
              break;
            case 5:
              var y = null;
              switch (qe.tag) {
                case 26:
                  y = qe.memoizedState;
                case 5:
                case 27:
                  var T = qe;
                  if (y ? Wh(y) : T.stateNode.complete) {
                    Pe = 0, ln = null;
                    var B = T.sibling;
                    if (B !== null) qe = B;
                    else {
                      var X = T.return;
                      X !== null ? (qe = X, Ai(X)) : qe = null;
                    }
                    break t;
                  }
              }
              Pe = 0, ln = null, Xa(e, t, u, 5);
              break;
            case 6:
              Pe = 0, ln = null, Xa(e, t, u, 6);
              break;
            case 8:
              du(), ht = 6;
              break e;
            default:
              throw Error(i(462));
          }
        }
        U2();
        break;
      } catch (re) {
        ch(e, re);
      }
    while (!0);
    return Zn = Kl = null, R.H = l, R.A = s, Je = n, qe !== null ? 0 : (ot = null, Ie = 0, Xr(), ht);
  }
  function U2() {
    for (; qe !== null && !_e(); )
      dh(qe);
  }
  function dh(e) {
    var t = zp(e.alternate, e, tl);
    e.memoizedProps = e.pendingProps, t === null ? Ai(e) : qe = t;
  }
  function mh(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Op(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ie
        );
        break;
      case 11:
        t = Op(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ie
        );
        break;
      case 5:
        As(t);
      default:
        Hp(n, t), t = qe = fm(t, tl), t = zp(n, t, tl);
    }
    e.memoizedProps = e.pendingProps, t === null ? Ai(e) : qe = t;
  }
  function Xa(e, t, n, l) {
    Zn = Kl = null, As(t), za = null, Ho = 0;
    var s = t.return;
    try {
      if (_2(
        e,
        s,
        t,
        n,
        Ie
      )) {
        ht = 1, hi(
          e,
          fn(n, e.current)
        ), qe = null;
        return;
      }
    } catch (u) {
      if (s !== null) throw qe = s, u;
      ht = 1, hi(
        e,
        fn(n, e.current)
      ), qe = null;
      return;
    }
    t.flags & 32768 ? (Ze || l === 1 ? e = !0 : Ia || (Ie & 536870912) !== 0 ? e = !1 : (El = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = tn.current, l !== null && l.tag === 13 && (l.flags |= 16384))), ph(t, e)) : Ai(t);
  }
  function Ai(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        ph(
          t,
          El
        );
        return;
      }
      e = t.return;
      var n = O2(
        t.alternate,
        t,
        tl
      );
      if (n !== null) {
        qe = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        qe = t;
        return;
      }
      qe = t = e;
    } while (t !== null);
    ht === 0 && (ht = 5);
  }
  function ph(e, t) {
    do {
      var n = D2(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, qe = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        qe = e;
        return;
      }
      qe = e = n;
    } while (e !== null);
    ht = 6, qe = null;
  }
  function hh(e, t, n, l, s, u, y, T, B) {
    e.cancelPendingCommit = null;
    do
      Ri();
    while (Tt !== 0);
    if ((Je & 6) !== 0) throw Error(i(327));
    if (t !== null) {
      if (t === e.current) throw Error(i(177));
      if (u = t.lanes | t.childLanes, u |= ts, rt(
        e,
        n,
        u,
        y,
        T,
        B
      ), e === ot && (qe = ot = null, Ie = 0), Za = t, xl = e, nl = n, su = u, uu = s, ah = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, I2(Hn, function() {
        return Eh(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = R.T, R.T = null, s = J.p, J.p = 2, y = Je, Je |= 4;
        try {
          M2(e, t, n);
        } finally {
          Je = y, J.p = s, R.T = l;
        }
      }
      Tt = 1, gh(), bh(), yh();
    }
  }
  function gh() {
    if (Tt === 1) {
      Tt = 0;
      var e = xl, t = Za, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = R.T, R.T = null;
        var l = J.p;
        J.p = 2;
        var s = Je;
        Je |= 4;
        try {
          Fp(t, e);
          var u = Cu, y = nm(e.containerInfo), T = u.focusedElem, B = u.selectionRange;
          if (y !== T && T && T.ownerDocument && tm(
            T.ownerDocument.documentElement,
            T
          )) {
            if (B !== null && Fc(T)) {
              var X = B.start, re = B.end;
              if (re === void 0 && (re = X), "selectionStart" in T)
                T.selectionStart = X, T.selectionEnd = Math.min(
                  re,
                  T.value.length
                );
              else {
                var ue = T.ownerDocument || document, K = ue && ue.defaultView || window;
                if (K.getSelection) {
                  var ee = K.getSelection(), we = T.textContent.length, Re = Math.min(B.start, we), lt = B.end === void 0 ? Re : Math.min(B.end, we);
                  !ee.extend && Re > lt && (y = lt, lt = Re, Re = y);
                  var k = em(
                    T,
                    Re
                  ), U = em(
                    T,
                    lt
                  );
                  if (k && U && (ee.rangeCount !== 1 || ee.anchorNode !== k.node || ee.anchorOffset !== k.offset || ee.focusNode !== U.node || ee.focusOffset !== U.offset)) {
                    var Y = ue.createRange();
                    Y.setStart(k.node, k.offset), ee.removeAllRanges(), Re > lt ? (ee.addRange(Y), ee.extend(U.node, U.offset)) : (Y.setEnd(U.node, U.offset), ee.addRange(Y));
                  }
                }
              }
            }
            for (ue = [], ee = T; ee = ee.parentNode; )
              ee.nodeType === 1 && ue.push({
                element: ee,
                left: ee.scrollLeft,
                top: ee.scrollTop
              });
            for (typeof T.focus == "function" && T.focus(), T = 0; T < ue.length; T++) {
              var ce = ue[T];
              ce.element.scrollLeft = ce.left, ce.element.scrollTop = ce.top;
            }
          }
          Vi = !!Tu, Cu = Tu = null;
        } finally {
          Je = s, J.p = l, R.T = n;
        }
      }
      e.current = t, Tt = 2;
    }
  }
  function bh() {
    if (Tt === 2) {
      Tt = 0;
      var e = xl, t = Za, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = R.T, R.T = null;
        var l = J.p;
        J.p = 2;
        var s = Je;
        Je |= 4;
        try {
          Zp(e, t.alternate, t);
        } finally {
          Je = s, J.p = l, R.T = n;
        }
      }
      Tt = 3;
    }
  }
  function yh() {
    if (Tt === 4 || Tt === 3) {
      Tt = 0, ke();
      var e = xl, t = Za, n = nl, l = ah;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Tt = 5 : (Tt = 0, Za = xl = null, vh(e, e.pendingLanes));
      var s = e.pendingLanes;
      if (s === 0 && (wl = null), Dc(n), t = t.stateNode, $t && typeof $t.onCommitFiberRoot == "function")
        try {
          $t.onCommitFiberRoot(
            ol,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = R.T, s = J.p, J.p = 2, R.T = null;
        try {
          for (var u = e.onRecoverableError, y = 0; y < l.length; y++) {
            var T = l[y];
            u(T.value, {
              componentStack: T.stack
            });
          }
        } finally {
          R.T = t, J.p = s;
        }
      }
      (nl & 3) !== 0 && Ri(), On(e), s = e.pendingLanes, (n & 261930) !== 0 && (s & 42) !== 0 ? e === fu ? tr++ : (tr = 0, fu = e) : tr = 0, nr(0);
    }
  }
  function vh(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, zo(t)));
  }
  function Ri() {
    return gh(), bh(), yh(), Eh();
  }
  function Eh() {
    if (Tt !== 5) return !1;
    var e = xl, t = su;
    su = 0;
    var n = Dc(nl), l = R.T, s = J.p;
    try {
      J.p = 32 > n ? 32 : n, R.T = null, n = uu, uu = null;
      var u = xl, y = nl;
      if (Tt = 0, Za = xl = null, nl = 0, (Je & 6) !== 0) throw Error(i(331));
      var T = Je;
      if (Je |= 4, th(u.current), Wp(
        u,
        u.current,
        y,
        n
      ), Je = T, nr(0, !1), $t && typeof $t.onPostCommitFiberRoot == "function")
        try {
          $t.onPostCommitFiberRoot(ol, u);
        } catch {
        }
      return !0;
    } finally {
      J.p = s, R.T = l, vh(e, t);
    }
  }
  function Sh(e, t, n) {
    t = fn(n, t), t = Is(e.stateNode, t, 2), e = gl(e, t, 2), e !== null && (Be(e, 2), On(e));
  }
  function et(e, t, n) {
    if (e.tag === 3)
      Sh(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Sh(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (wl === null || !wl.has(l))) {
            e = fn(n, e), n = wp(2), l = gl(t, n, 2), l !== null && (xp(
              n,
              l,
              t,
              e
            ), Be(l, 2), On(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function pu(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new L2();
      var s = /* @__PURE__ */ new Set();
      l.set(t, s);
    } else
      s = l.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), l.set(t, s));
    s.has(n) || (ru = !0, s.add(n), e = q2.bind(null, e, t, n), t.then(e, e));
  }
  function q2(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, ot === e && (Ie & n) === n && (ht === 4 || ht === 3 && (Ie & 62914560) === Ie && 300 > Xe() - xi ? (Je & 2) === 0 && Ya(e, 0) : iu |= n, Ga === Ie && (Ga = 0)), On(e);
  }
  function wh(e, t) {
    t === 0 && (t = So()), e = Yl(e, t), e !== null && (Be(e, t), On(e));
  }
  function V2(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), wh(e, n);
  }
  function k2(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(i(314));
    }
    l !== null && l.delete(t), wh(e, n);
  }
  function I2(e, t) {
    return je(e, t);
  }
  var Oi = null, Qa = null, hu = !1, Di = !1, gu = !1, Cl = 0;
  function On(e) {
    e !== Qa && e.next === null && (Qa === null ? Oi = Qa = e : Qa = Qa.next = e), Di = !0, hu || (hu = !0, Z2());
  }
  function nr(e, t) {
    if (!gu && Di) {
      gu = !0;
      do
        for (var n = !1, l = Oi; l !== null; ) {
          if (e !== 0) {
            var s = l.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var y = l.suspendedLanes, T = l.pingedLanes;
              u = (1 << 31 - jt(42 | e) + 1) - 1, u &= s & ~(y & ~T), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, Nh(l, u));
          } else
            u = Ie, u = ql(
              l,
              l === ot ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (u & 3) === 0 || il(l, u) || (n = !0, Nh(l, u));
          l = l.next;
        }
      while (n);
      gu = !1;
    }
  }
  function G2() {
    xh();
  }
  function xh() {
    Di = hu = !1;
    var e = 0;
    Cl !== 0 && tE() && (e = Cl);
    for (var t = Xe(), n = null, l = Oi; l !== null; ) {
      var s = l.next, u = Th(l, t);
      u === 0 ? (l.next = null, n === null ? Oi = s : n.next = s, s === null && (Qa = n)) : (n = l, (e !== 0 || (u & 3) !== 0) && (Di = !0)), l = s;
    }
    Tt !== 0 && Tt !== 5 || nr(e), Cl !== 0 && (Cl = 0);
  }
  function Th(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var y = 31 - jt(u), T = 1 << y, B = s[y];
      B === -1 ? ((T & n) === 0 || (T & l) !== 0) && (s[y] = Oc(T, t)) : B <= t && (e.expiredLanes |= T), u &= ~T;
    }
    if (t = ot, n = Ie, n = ql(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (Pe === 2 || Pe === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && We(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || il(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && We(l), Dc(n)) {
        case 2:
        case 8:
          n = Wt;
          break;
        case 32:
          n = Hn;
          break;
        case 268435456:
          n = yo;
          break;
        default:
          n = Hn;
      }
      return l = Ch.bind(null, e), n = je(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && We(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Ch(e, t) {
    if (Tt !== 0 && Tt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Ri() && e.callbackNode !== n)
      return null;
    var l = Ie;
    return l = ql(
      e,
      e === ot ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (rh(e, l, t), Th(e, Xe()), e.callbackNode != null && e.callbackNode === n ? Ch.bind(null, e) : null);
  }
  function Nh(e, t) {
    if (Ri()) return null;
    rh(e, t, !0);
  }
  function Z2() {
    lE(function() {
      (Je & 6) !== 0 ? je(
        Jt,
        G2
      ) : xh();
    });
  }
  function bu() {
    if (Cl === 0) {
      var e = $a;
      e === 0 && (e = Un, Un <<= 1, (Un & 261888) === 0 && (Un = 256)), Cl = e;
    }
    return Cl;
  }
  function _h(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ur("" + e);
  }
  function Ah(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Y2(e, t, n, l, s) {
    if (t === "submit" && n && n.stateNode === s) {
      var u = _h(
        (s[Gt] || null).action
      ), y = l.submitter;
      y && (t = (t = y[Gt] || null) ? _h(t.formAction) : y.getAttribute("formAction"), t !== null && (u = t, y = null));
      var T = new Ir(
        "action",
        "action",
        null,
        l,
        s
      );
      e.push({
        event: T,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Cl !== 0) {
                  var B = y ? Ah(s, y) : new FormData(s);
                  js(
                    n,
                    {
                      pending: !0,
                      data: B,
                      method: s.method,
                      action: u
                    },
                    null,
                    B
                  );
                }
              } else
                typeof u == "function" && (T.preventDefault(), B = y ? Ah(s, y) : new FormData(s), js(
                  n,
                  {
                    pending: !0,
                    data: B,
                    method: s.method,
                    action: u
                  },
                  u,
                  B
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var yu = 0; yu < es.length; yu++) {
    var vu = es[yu], X2 = vu.toLowerCase(), Q2 = vu[0].toUpperCase() + vu.slice(1);
    Sn(
      X2,
      "on" + Q2
    );
  }
  Sn(om, "onAnimationEnd"), Sn(rm, "onAnimationIteration"), Sn(im, "onAnimationStart"), Sn("dblclick", "onDoubleClick"), Sn("focusin", "onFocus"), Sn("focusout", "onBlur"), Sn(u2, "onTransitionRun"), Sn(f2, "onTransitionStart"), Sn(d2, "onTransitionCancel"), Sn(cm, "onTransitionEnd"), va("onMouseEnter", ["mouseout", "mouseover"]), va("onMouseLeave", ["mouseout", "mouseover"]), va("onPointerEnter", ["pointerout", "pointerover"]), va("onPointerLeave", ["pointerout", "pointerover"]), kl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), kl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), kl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), kl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), kl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), kl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var lr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), K2 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lr)
  );
  function Rh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], s = l.event;
      l = l.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var y = l.length - 1; 0 <= y; y--) {
            var T = l[y], B = T.instance, X = T.currentTarget;
            if (T = T.listener, B !== u && s.isPropagationStopped())
              break e;
            u = T, s.currentTarget = X;
            try {
              u(s);
            } catch (re) {
              Yr(re);
            }
            s.currentTarget = null, u = B;
          }
        else
          for (y = 0; y < l.length; y++) {
            if (T = l[y], B = T.instance, X = T.currentTarget, T = T.listener, B !== u && s.isPropagationStopped())
              break e;
            u = T, s.currentTarget = X;
            try {
              u(s);
            } catch (re) {
              Yr(re);
            }
            s.currentTarget = null, u = B;
          }
      }
    }
  }
  function Ve(e, t) {
    var n = t[Mc];
    n === void 0 && (n = t[Mc] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (Oh(t, e, 2, !1), n.add(l));
  }
  function Eu(e, t, n) {
    var l = 0;
    t && (l |= 4), Oh(
      n,
      e,
      l,
      t
    );
  }
  var Mi = "_reactListening" + Math.random().toString(36).slice(2);
  function Su(e) {
    if (!e[Mi]) {
      e[Mi] = !0, xd.forEach(function(n) {
        n !== "selectionchange" && (K2.has(n) || Eu(n, !1, e), Eu(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Mi] || (t[Mi] = !0, Eu("selectionchange", !1, t));
    }
  }
  function Oh(e, t, n, l) {
    switch (og(t)) {
      case 2:
        var s = xE;
        break;
      case 8:
        s = TE;
        break;
      default:
        s = zu;
    }
    n = s.bind(
      null,
      t,
      n,
      e
    ), s = void 0, !Vc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), l ? s !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: s
    }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, {
      passive: s
    }) : e.addEventListener(t, n, !1);
  }
  function wu(e, t, n, l, s) {
    var u = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var y = l.tag;
        if (y === 3 || y === 4) {
          var T = l.stateNode.containerInfo;
          if (T === s) break;
          if (y === 4)
            for (y = l.return; y !== null; ) {
              var B = y.tag;
              if ((B === 3 || B === 4) && y.stateNode.containerInfo === s)
                return;
              y = y.return;
            }
          for (; T !== null; ) {
            if (y = ga(T), y === null) return;
            if (B = y.tag, B === 5 || B === 6 || B === 26 || B === 27) {
              l = u = y;
              continue e;
            }
            T = T.parentNode;
          }
        }
        l = l.return;
      }
    Ld(function() {
      var X = u, re = Uc(n), ue = [];
      e: {
        var K = sm.get(e);
        if (K !== void 0) {
          var ee = Ir, we = e;
          switch (e) {
            case "keypress":
              if (Vr(n) === 0) break e;
            case "keydown":
            case "keyup":
              ee = kv;
              break;
            case "focusin":
              we = "focus", ee = Zc;
              break;
            case "focusout":
              we = "blur", ee = Zc;
              break;
            case "beforeblur":
            case "afterblur":
              ee = Zc;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ee = Hd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ee = Ov;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ee = Zv;
              break;
            case om:
            case rm:
            case im:
              ee = $v;
              break;
            case cm:
              ee = Xv;
              break;
            case "scroll":
            case "scrollend":
              ee = Av;
              break;
            case "wheel":
              ee = Kv;
              break;
            case "copy":
            case "cut":
            case "paste":
              ee = Lv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ee = qd;
              break;
            case "toggle":
            case "beforetoggle":
              ee = Jv;
          }
          var Re = (t & 4) !== 0, lt = !Re && (e === "scroll" || e === "scrollend"), k = Re ? K !== null ? K + "Capture" : null : K;
          Re = [];
          for (var U = X, Y; U !== null; ) {
            var ce = U;
            if (Y = ce.stateNode, ce = ce.tag, ce !== 5 && ce !== 26 && ce !== 27 || Y === null || k === null || (ce = Co(U, k), ce != null && Re.push(
              ar(U, ce, Y)
            )), lt) break;
            U = U.return;
          }
          0 < Re.length && (K = new ee(
            K,
            we,
            null,
            n,
            re
          ), ue.push({ event: K, listeners: Re }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (K = e === "mouseover" || e === "pointerover", ee = e === "mouseout" || e === "pointerout", K && n !== Hc && (we = n.relatedTarget || n.fromElement) && (ga(we) || we[ha]))
            break e;
          if ((ee || K) && (K = re.window === re ? re : (K = re.ownerDocument) ? K.defaultView || K.parentWindow : window, ee ? (we = n.relatedTarget || n.toElement, ee = X, we = we ? ga(we) : null, we !== null && (lt = p(we), Re = we.tag, we !== lt || Re !== 5 && Re !== 27 && Re !== 6) && (we = null)) : (ee = null, we = X), ee !== we)) {
            if (Re = Hd, ce = "onMouseLeave", k = "onMouseEnter", U = "mouse", (e === "pointerout" || e === "pointerover") && (Re = qd, ce = "onPointerLeave", k = "onPointerEnter", U = "pointer"), lt = ee == null ? K : To(ee), Y = we == null ? K : To(we), K = new Re(
              ce,
              U + "leave",
              ee,
              n,
              re
            ), K.target = lt, K.relatedTarget = Y, ce = null, ga(re) === X && (Re = new Re(
              k,
              U + "enter",
              we,
              n,
              re
            ), Re.target = Y, Re.relatedTarget = lt, ce = Re), lt = ce, ee && we)
              t: {
                for (Re = F2, k = ee, U = we, Y = 0, ce = k; ce; ce = Re(ce))
                  Y++;
                ce = 0;
                for (var Ae = U; Ae; Ae = Re(Ae))
                  ce++;
                for (; 0 < Y - ce; )
                  k = Re(k), Y--;
                for (; 0 < ce - Y; )
                  U = Re(U), ce--;
                for (; Y--; ) {
                  if (k === U || U !== null && k === U.alternate) {
                    Re = k;
                    break t;
                  }
                  k = Re(k), U = Re(U);
                }
                Re = null;
              }
            else Re = null;
            ee !== null && Dh(
              ue,
              K,
              ee,
              Re,
              !1
            ), we !== null && lt !== null && Dh(
              ue,
              lt,
              we,
              Re,
              !0
            );
          }
        }
        e: {
          if (K = X ? To(X) : window, ee = K.nodeName && K.nodeName.toLowerCase(), ee === "select" || ee === "input" && K.type === "file")
            var Qe = Qd;
          else if (Yd(K))
            if (Kd)
              Qe = i2;
            else {
              Qe = o2;
              var Ce = a2;
            }
          else
            ee = K.nodeName, !ee || ee.toLowerCase() !== "input" || K.type !== "checkbox" && K.type !== "radio" ? X && jc(X.elementType) && (Qe = Qd) : Qe = r2;
          if (Qe && (Qe = Qe(e, X))) {
            Xd(
              ue,
              Qe,
              n,
              re
            );
            break e;
          }
          Ce && Ce(e, K, X), e === "focusout" && X && K.type === "number" && X.memoizedProps.value != null && zc(K, "number", K.value);
        }
        switch (Ce = X ? To(X) : window, e) {
          case "focusin":
            (Yd(Ce) || Ce.contentEditable === "true") && (Ca = Ce, Jc = X, $o = null);
            break;
          case "focusout":
            $o = Jc = Ca = null;
            break;
          case "mousedown":
            Wc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Wc = !1, lm(ue, n, re);
            break;
          case "selectionchange":
            if (s2) break;
          case "keydown":
          case "keyup":
            lm(ue, n, re);
        }
        var Le;
        if (Xc)
          e: {
            switch (e) {
              case "compositionstart":
                var Ge = "onCompositionStart";
                break e;
              case "compositionend":
                Ge = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ge = "onCompositionUpdate";
                break e;
            }
            Ge = void 0;
          }
        else
          Ta ? Gd(e, n) && (Ge = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ge = "onCompositionStart");
        Ge && (Vd && n.locale !== "ko" && (Ta || Ge !== "onCompositionStart" ? Ge === "onCompositionEnd" && Ta && (Le = zd()) : (sl = re, kc = "value" in sl ? sl.value : sl.textContent, Ta = !0)), Ce = $i(X, Ge), 0 < Ce.length && (Ge = new Ud(
          Ge,
          e,
          null,
          n,
          re
        ), ue.push({ event: Ge, listeners: Ce }), Le ? Ge.data = Le : (Le = Zd(n), Le !== null && (Ge.data = Le)))), (Le = Pv ? e2(e, n) : t2(e, n)) && (Ge = $i(X, "onBeforeInput"), 0 < Ge.length && (Ce = new Ud(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          re
        ), ue.push({
          event: Ce,
          listeners: Ge
        }), Ce.data = Le)), Y2(
          ue,
          e,
          X,
          n,
          re
        );
      }
      Rh(ue, t);
    });
  }
  function ar(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function $i(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var s = e, u = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || u === null || (s = Co(e, n), s != null && l.unshift(
        ar(e, s, u)
      ), s = Co(e, t), s != null && l.push(
        ar(e, s, u)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function F2(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Dh(e, t, n, l, s) {
    for (var u = t._reactName, y = []; n !== null && n !== l; ) {
      var T = n, B = T.alternate, X = T.stateNode;
      if (T = T.tag, B !== null && B === l) break;
      T !== 5 && T !== 26 && T !== 27 || X === null || (B = X, s ? (X = Co(n, u), X != null && y.unshift(
        ar(n, X, B)
      )) : s || (X = Co(n, u), X != null && y.push(
        ar(n, X, B)
      ))), n = n.return;
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var J2 = /\r\n?/g, W2 = /\u0000|\uFFFD/g;
  function Mh(e) {
    return (typeof e == "string" ? e : "" + e).replace(J2, `
`).replace(W2, "");
  }
  function $h(e, t) {
    return t = Mh(t), Mh(e) === t;
  }
  function nt(e, t, n, l, s, u) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || Sa(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && Sa(e, "" + l);
        break;
      case "className":
        jr(e, "class", l);
        break;
      case "tabIndex":
        jr(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        jr(e, n, l);
        break;
      case "style":
        $d(e, l, u);
        break;
      case "data":
        if (t !== "object") {
          jr(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = Ur("" + l), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (n === "formAction" ? (t !== "input" && nt(e, t, "name", s.name, s, null), nt(
            e,
            t,
            "formEncType",
            s.formEncType,
            s,
            null
          ), nt(
            e,
            t,
            "formMethod",
            s.formMethod,
            s,
            null
          ), nt(
            e,
            t,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (nt(e, t, "encType", s.encType, s, null), nt(e, t, "method", s.method, s, null), nt(e, t, "target", s.target, s, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = Ur("" + l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = Vn);
        break;
      case "onScroll":
        l != null && Ve("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ve("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(i(61));
          if (n = l.__html, n != null) {
            if (s.children != null) throw Error(i(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = Ur("" + l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "" + l) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(n) : e.setAttribute(n, l);
        break;
      case "popover":
        Ve("beforetoggle", e), Ve("toggle", e), zr(e, "popover", l);
        break;
      case "xlinkActuate":
        qn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        qn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        qn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        qn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        qn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        qn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        qn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        qn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        qn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        zr(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Nv.get(n) || n, zr(e, n, l));
    }
  }
  function xu(e, t, n, l, s, u) {
    switch (n) {
      case "style":
        $d(e, l, u);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(i(61));
          if (n = l.__html, n != null) {
            if (s.children != null) throw Error(i(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Sa(e, l) : (typeof l == "number" || typeof l == "bigint") && Sa(e, "" + l);
        break;
      case "onScroll":
        l != null && Ve("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ve("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = Vn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Td.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), t = n.slice(2, s ? n.length - 7 : void 0), u = e[Gt] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, s), typeof l == "function")) {
              typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, s);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : zr(e, n, l);
          }
    }
  }
  function Mt(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ve("error", e), Ve("load", e);
        var l = !1, s = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var y = n[u];
            if (y != null)
              switch (u) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(i(137, t));
                default:
                  nt(e, t, u, y, n, null);
              }
          }
        s && nt(e, t, "srcSet", n.srcSet, n, null), l && nt(e, t, "src", n.src, n, null);
        return;
      case "input":
        Ve("invalid", e);
        var T = u = y = s = null, B = null, X = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var re = n[l];
            if (re != null)
              switch (l) {
                case "name":
                  s = re;
                  break;
                case "type":
                  y = re;
                  break;
                case "checked":
                  B = re;
                  break;
                case "defaultChecked":
                  X = re;
                  break;
                case "value":
                  u = re;
                  break;
                case "defaultValue":
                  T = re;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (re != null)
                    throw Error(i(137, t));
                  break;
                default:
                  nt(e, t, l, re, n, null);
              }
          }
        Rd(
          e,
          u,
          T,
          B,
          X,
          y,
          s,
          !1
        );
        return;
      case "select":
        Ve("invalid", e), l = y = u = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (T = n[s], T != null))
            switch (s) {
              case "value":
                u = T;
                break;
              case "defaultValue":
                y = T;
                break;
              case "multiple":
                l = T;
              default:
                nt(e, t, s, T, n, null);
            }
        t = u, n = y, e.multiple = !!l, t != null ? Ea(e, !!l, t, !1) : n != null && Ea(e, !!l, n, !0);
        return;
      case "textarea":
        Ve("invalid", e), u = s = l = null;
        for (y in n)
          if (n.hasOwnProperty(y) && (T = n[y], T != null))
            switch (y) {
              case "value":
                l = T;
                break;
              case "defaultValue":
                s = T;
                break;
              case "children":
                u = T;
                break;
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(i(91));
                break;
              default:
                nt(e, t, y, T, n, null);
            }
        Dd(e, l, s, u);
        return;
      case "option":
        for (B in n)
          if (n.hasOwnProperty(B) && (l = n[B], l != null))
            switch (B) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                nt(e, t, B, l, n, null);
            }
        return;
      case "dialog":
        Ve("beforetoggle", e), Ve("toggle", e), Ve("cancel", e), Ve("close", e);
        break;
      case "iframe":
      case "object":
        Ve("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < lr.length; l++)
          Ve(lr[l], e);
        break;
      case "image":
        Ve("error", e), Ve("load", e);
        break;
      case "details":
        Ve("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ve("error", e), Ve("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (X in n)
          if (n.hasOwnProperty(X) && (l = n[X], l != null))
            switch (X) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(i(137, t));
              default:
                nt(e, t, X, l, n, null);
            }
        return;
      default:
        if (jc(t)) {
          for (re in n)
            n.hasOwnProperty(re) && (l = n[re], l !== void 0 && xu(
              e,
              t,
              re,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (T in n)
      n.hasOwnProperty(T) && (l = n[T], l != null && nt(e, t, T, l, n, null));
  }
  function P2(e, t, n, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, u = null, y = null, T = null, B = null, X = null, re = null;
        for (ee in n) {
          var ue = n[ee];
          if (n.hasOwnProperty(ee) && ue != null)
            switch (ee) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                B = ue;
              default:
                l.hasOwnProperty(ee) || nt(e, t, ee, null, l, ue);
            }
        }
        for (var K in l) {
          var ee = l[K];
          if (ue = n[K], l.hasOwnProperty(K) && (ee != null || ue != null))
            switch (K) {
              case "type":
                u = ee;
                break;
              case "name":
                s = ee;
                break;
              case "checked":
                X = ee;
                break;
              case "defaultChecked":
                re = ee;
                break;
              case "value":
                y = ee;
                break;
              case "defaultValue":
                T = ee;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (ee != null)
                  throw Error(i(137, t));
                break;
              default:
                ee !== ue && nt(
                  e,
                  t,
                  K,
                  ee,
                  l,
                  ue
                );
            }
        }
        Lc(
          e,
          y,
          T,
          B,
          X,
          re,
          u,
          s
        );
        return;
      case "select":
        ee = y = T = K = null;
        for (u in n)
          if (B = n[u], n.hasOwnProperty(u) && B != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                ee = B;
              default:
                l.hasOwnProperty(u) || nt(
                  e,
                  t,
                  u,
                  null,
                  l,
                  B
                );
            }
        for (s in l)
          if (u = l[s], B = n[s], l.hasOwnProperty(s) && (u != null || B != null))
            switch (s) {
              case "value":
                K = u;
                break;
              case "defaultValue":
                T = u;
                break;
              case "multiple":
                y = u;
              default:
                u !== B && nt(
                  e,
                  t,
                  s,
                  u,
                  l,
                  B
                );
            }
        t = T, n = y, l = ee, K != null ? Ea(e, !!n, K, !1) : !!l != !!n && (t != null ? Ea(e, !!n, t, !0) : Ea(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        ee = K = null;
        for (T in n)
          if (s = n[T], n.hasOwnProperty(T) && s != null && !l.hasOwnProperty(T))
            switch (T) {
              case "value":
                break;
              case "children":
                break;
              default:
                nt(e, t, T, null, l, s);
            }
        for (y in l)
          if (s = l[y], u = n[y], l.hasOwnProperty(y) && (s != null || u != null))
            switch (y) {
              case "value":
                K = s;
                break;
              case "defaultValue":
                ee = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(i(91));
                break;
              default:
                s !== u && nt(e, t, y, s, l, u);
            }
        Od(e, K, ee);
        return;
      case "option":
        for (var we in n)
          if (K = n[we], n.hasOwnProperty(we) && K != null && !l.hasOwnProperty(we))
            switch (we) {
              case "selected":
                e.selected = !1;
                break;
              default:
                nt(
                  e,
                  t,
                  we,
                  null,
                  l,
                  K
                );
            }
        for (B in l)
          if (K = l[B], ee = n[B], l.hasOwnProperty(B) && K !== ee && (K != null || ee != null))
            switch (B) {
              case "selected":
                e.selected = K && typeof K != "function" && typeof K != "symbol";
                break;
              default:
                nt(
                  e,
                  t,
                  B,
                  K,
                  l,
                  ee
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Re in n)
          K = n[Re], n.hasOwnProperty(Re) && K != null && !l.hasOwnProperty(Re) && nt(e, t, Re, null, l, K);
        for (X in l)
          if (K = l[X], ee = n[X], l.hasOwnProperty(X) && K !== ee && (K != null || ee != null))
            switch (X) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (K != null)
                  throw Error(i(137, t));
                break;
              default:
                nt(
                  e,
                  t,
                  X,
                  K,
                  l,
                  ee
                );
            }
        return;
      default:
        if (jc(t)) {
          for (var lt in n)
            K = n[lt], n.hasOwnProperty(lt) && K !== void 0 && !l.hasOwnProperty(lt) && xu(
              e,
              t,
              lt,
              void 0,
              l,
              K
            );
          for (re in l)
            K = l[re], ee = n[re], !l.hasOwnProperty(re) || K === ee || K === void 0 && ee === void 0 || xu(
              e,
              t,
              re,
              K,
              l,
              ee
            );
          return;
        }
    }
    for (var k in n)
      K = n[k], n.hasOwnProperty(k) && K != null && !l.hasOwnProperty(k) && nt(e, t, k, null, l, K);
    for (ue in l)
      K = l[ue], ee = n[ue], !l.hasOwnProperty(ue) || K === ee || K == null && ee == null || nt(e, t, ue, K, l, ee);
  }
  function Bh(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function eE() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var s = n[l], u = s.transferSize, y = s.initiatorType, T = s.duration;
        if (u && T && Bh(y)) {
          for (y = 0, T = s.responseEnd, l += 1; l < n.length; l++) {
            var B = n[l], X = B.startTime;
            if (X > T) break;
            var re = B.transferSize, ue = B.initiatorType;
            re && Bh(ue) && (B = B.responseEnd, y += re * (B < T ? 1 : (T - X) / (B - X)));
          }
          if (--l, t += 8 * (u + y) / (s.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Tu = null, Cu = null;
  function Bi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Lh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function zh(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Nu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var _u = null;
  function tE() {
    var e = window.event;
    return e && e.type === "popstate" ? e === _u ? !1 : (_u = e, !0) : (_u = null, !1);
  }
  var jh = typeof setTimeout == "function" ? setTimeout : void 0, nE = typeof clearTimeout == "function" ? clearTimeout : void 0, Hh = typeof Promise == "function" ? Promise : void 0, lE = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hh < "u" ? function(e) {
    return Hh.resolve(null).then(e).catch(aE);
  } : jh;
  function aE(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Nl(e) {
    return e === "head";
  }
  function Uh(e, t) {
    var n = t, l = 0;
    do {
      var s = n.nextSibling;
      if (e.removeChild(n), s && s.nodeType === 8)
        if (n = s.data, n === "/$" || n === "/&") {
          if (l === 0) {
            e.removeChild(s), Wa(t);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          or(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, or(n);
          for (var u = n.firstChild; u; ) {
            var y = u.nextSibling, T = u.nodeName;
            u[xo] || T === "SCRIPT" || T === "STYLE" || T === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = y;
          }
        } else
          n === "body" && or(e.ownerDocument.body);
      n = s;
    } while (n);
    Wa(t);
  }
  function qh(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), l && l.nodeType === 8)
        if (n = l.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = l;
    } while (n);
  }
  function Au(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Au(n), $c(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function oE(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var s = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[xo])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== s.rel || e.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || e.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (s.src == null ? null : s.src) || e.getAttribute("type") !== (s.type == null ? null : s.type) || e.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = gn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function rE(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = gn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Vh(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = gn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ru(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Ou(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function iE(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var l = function() {
        t(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function gn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Du = null;
  function kh(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return gn(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Ih(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Gh(e, t, n) {
    switch (t = Bi(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(i(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(i(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(i(454));
        return e;
      default:
        throw Error(i(451));
    }
  }
  function or(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    $c(e);
  }
  var bn = /* @__PURE__ */ new Map(), Zh = /* @__PURE__ */ new Set();
  function Li(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ll = J.d;
  J.d = {
    f: cE,
    r: sE,
    D: uE,
    C: fE,
    L: dE,
    m: mE,
    X: hE,
    S: pE,
    M: gE
  };
  function cE() {
    var e = ll.f(), t = Ni();
    return e || t;
  }
  function sE(e) {
    var t = ba(e);
    t !== null && t.tag === 5 && t.type === "form" ? cp(t) : ll.r(e);
  }
  var Ka = typeof document > "u" ? null : document;
  function Yh(e, t, n) {
    var l = Ka;
    if (l && typeof t == "string" && t) {
      var s = sn(t);
      s = 'link[rel="' + e + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), Zh.has(s) || (Zh.add(s), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(s) === null && (t = l.createElement("link"), Mt(t, "link", e), Nt(t), l.head.appendChild(t)));
    }
  }
  function uE(e) {
    ll.D(e), Yh("dns-prefetch", e, null);
  }
  function fE(e, t) {
    ll.C(e, t), Yh("preconnect", e, t);
  }
  function dE(e, t, n) {
    ll.L(e, t, n);
    var l = Ka;
    if (l && e && t) {
      var s = 'link[rel="preload"][as="' + sn(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + sn(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (s += '[imagesizes="' + sn(
        n.imageSizes
      ) + '"]')) : s += '[href="' + sn(e) + '"]';
      var u = s;
      switch (t) {
        case "style":
          u = Fa(e);
          break;
        case "script":
          u = Ja(e);
      }
      bn.has(u) || (e = S(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), bn.set(u, e), l.querySelector(s) !== null || t === "style" && l.querySelector(rr(u)) || t === "script" && l.querySelector(ir(u)) || (t = l.createElement("link"), Mt(t, "link", e), Nt(t), l.head.appendChild(t)));
    }
  }
  function mE(e, t) {
    ll.m(e, t);
    var n = Ka;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", s = 'link[rel="modulepreload"][as="' + sn(l) + '"][href="' + sn(e) + '"]', u = s;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ja(e);
      }
      if (!bn.has(u) && (e = S({ rel: "modulepreload", href: e }, t), bn.set(u, e), n.querySelector(s) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ir(u)))
              return;
        }
        l = n.createElement("link"), Mt(l, "link", e), Nt(l), n.head.appendChild(l);
      }
    }
  }
  function pE(e, t, n) {
    ll.S(e, t, n);
    var l = Ka;
    if (l && e) {
      var s = ya(l).hoistableStyles, u = Fa(e);
      t = t || "default";
      var y = s.get(u);
      if (!y) {
        var T = { loading: 0, preload: null };
        if (y = l.querySelector(
          rr(u)
        ))
          T.loading = 5;
        else {
          e = S(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = bn.get(u)) && Mu(e, n);
          var B = y = l.createElement("link");
          Nt(B), Mt(B, "link", e), B._p = new Promise(function(X, re) {
            B.onload = X, B.onerror = re;
          }), B.addEventListener("load", function() {
            T.loading |= 1;
          }), B.addEventListener("error", function() {
            T.loading |= 2;
          }), T.loading |= 4, zi(y, t, l);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: T
        }, s.set(u, y);
      }
    }
  }
  function hE(e, t) {
    ll.X(e, t);
    var n = Ka;
    if (n && e) {
      var l = ya(n).hoistableScripts, s = Ja(e), u = l.get(s);
      u || (u = n.querySelector(ir(s)), u || (e = S({ src: e, async: !0 }, t), (t = bn.get(s)) && $u(e, t), u = n.createElement("script"), Nt(u), Mt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(s, u));
    }
  }
  function gE(e, t) {
    ll.M(e, t);
    var n = Ka;
    if (n && e) {
      var l = ya(n).hoistableScripts, s = Ja(e), u = l.get(s);
      u || (u = n.querySelector(ir(s)), u || (e = S({ src: e, async: !0, type: "module" }, t), (t = bn.get(s)) && $u(e, t), u = n.createElement("script"), Nt(u), Mt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(s, u));
    }
  }
  function Xh(e, t, n, l) {
    var s = (s = V.current) ? Li(s) : null;
    if (!s) throw Error(i(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = Fa(n.href), n = ya(
          s
        ).hoistableStyles, l = n.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Fa(n.href);
          var u = ya(
            s
          ).hoistableStyles, y = u.get(e);
          if (y || (s = s.ownerDocument || s, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, y), (u = s.querySelector(
            rr(e)
          )) && !u._p && (y.instance = u, y.state.loading = 5), bn.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, bn.set(e, n), u || bE(
            s,
            e,
            n,
            y.state
          ))), t && l === null)
            throw Error(i(528, ""));
          return y;
        }
        if (t && l !== null)
          throw Error(i(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ja(n), n = ya(
          s
        ).hoistableScripts, l = n.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(i(444, e));
    }
  }
  function Fa(e) {
    return 'href="' + sn(e) + '"';
  }
  function rr(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Qh(e) {
    return S({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function bE(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), Mt(t, "link", n), Nt(t), e.head.appendChild(t));
  }
  function Ja(e) {
    return '[src="' + sn(e) + '"]';
  }
  function ir(e) {
    return "script[async]" + e;
  }
  function Kh(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + sn(n.href) + '"]'
          );
          if (l)
            return t.instance = l, Nt(l), l;
          var s = S({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Nt(l), Mt(l, "style", s), zi(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          s = Fa(n.href);
          var u = e.querySelector(
            rr(s)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Nt(u), u;
          l = Qh(n), (s = bn.get(s)) && Mu(l, s), u = (e.ownerDocument || e).createElement("link"), Nt(u);
          var y = u;
          return y._p = new Promise(function(T, B) {
            y.onload = T, y.onerror = B;
          }), Mt(u, "link", l), t.state.loading |= 4, zi(u, n.precedence, e), t.instance = u;
        case "script":
          return u = Ja(n.src), (s = e.querySelector(
            ir(u)
          )) ? (t.instance = s, Nt(s), s) : (l = n, (s = bn.get(u)) && (l = S({}, n), $u(l, s)), e = e.ownerDocument || e, s = e.createElement("script"), Nt(s), Mt(s, "link", l), e.head.appendChild(s), t.instance = s);
        case "void":
          return null;
        default:
          throw Error(i(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, zi(l, n.precedence, e));
    return t.instance;
  }
  function zi(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = l.length ? l[l.length - 1] : null, u = s, y = 0; y < l.length; y++) {
      var T = l[y];
      if (T.dataset.precedence === t) u = T;
      else if (u !== s) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Mu(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function $u(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var ji = null;
  function Fh(e, t, n) {
    if (ji === null) {
      var l = /* @__PURE__ */ new Map(), s = ji = /* @__PURE__ */ new Map();
      s.set(n, l);
    } else
      s = ji, l = s.get(n), l || (l = /* @__PURE__ */ new Map(), s.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), s = 0; s < n.length; s++) {
      var u = n[s];
      if (!(u[xo] || u[At] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = u.getAttribute(t) || "";
        y = e + y;
        var T = l.get(y);
        T ? T.push(u) : l.set(y, [u]);
      }
    }
    return l;
  }
  function Jh(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function yE(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Wh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function vE(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = Fa(l.href), u = t.querySelector(
          rr(s)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Hi.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, Nt(u);
          return;
        }
        u = t.ownerDocument || t, l = Qh(l), (s = bn.get(s)) && Mu(l, s), u = u.createElement("link"), Nt(u);
        var y = u;
        y._p = new Promise(function(T, B) {
          y.onload = T, y.onerror = B;
        }), Mt(u, "link", l), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Hi.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Bu = 0;
  function EE(e, t) {
    return e.stylesheets && e.count === 0 && qi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && qi(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Bu === 0 && (Bu = 62500 * eE());
      var s = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && qi(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Bu ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(s);
      };
    } : null;
  }
  function Hi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) qi(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Ui = null;
  function qi(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ui = /* @__PURE__ */ new Map(), t.forEach(SE, e), Ui = null, Hi.call(e));
  }
  function SE(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Ui.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Ui.set(e, n);
        for (var s = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < s.length; u++) {
          var y = s[u];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (n.set(y.dataset.precedence, y), l = y);
        }
        l && n.set(null, l);
      }
      s = t.instance, y = s.getAttribute("data-precedence"), u = n.get(y) || l, u === l && n.set(null, s), n.set(y, s), this.count++, l = Hi.bind(this), s.addEventListener("load", l), s.addEventListener("error", l), u ? u.parentNode.insertBefore(s, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(s, e.firstChild)), t.state.loading |= 4;
    }
  }
  var cr = {
    $$typeof: z,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0
  };
  function wE(e, t, n, l, s, u, y, T, B) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = pa(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pa(0), this.hiddenUpdates = pa(null), this.identifierPrefix = l, this.onUncaughtError = s, this.onCaughtError = u, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = B, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ph(e, t, n, l, s, u, y, T, B, X, re, ue) {
    return e = new wE(
      e,
      t,
      n,
      y,
      B,
      X,
      re,
      ue,
      T
    ), t = 1, u === !0 && (t |= 24), u = en(3, null, null, t), e.current = u, u.stateNode = e, t = ms(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, bs(u), e;
  }
  function eg(e) {
    return e ? (e = Aa, e) : Aa;
  }
  function tg(e, t, n, l, s, u) {
    s = eg(s), l.context === null ? l.context = s : l.pendingContext = s, l = hl(t), l.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (l.callback = u), n = gl(e, l, t), n !== null && (Ft(n, e, t), qo(n, e, t));
  }
  function ng(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Lu(e, t) {
    ng(e, t), (e = e.alternate) && ng(e, t);
  }
  function lg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Yl(e, 67108864);
      t !== null && Ft(t, e, 67108864), Lu(e, 67108864);
    }
  }
  function ag(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = on();
      t = wo(t);
      var n = Yl(e, t);
      n !== null && Ft(n, e, t), Lu(e, t);
    }
  }
  var Vi = !0;
  function xE(e, t, n, l) {
    var s = R.T;
    R.T = null;
    var u = J.p;
    try {
      J.p = 2, zu(e, t, n, l);
    } finally {
      J.p = u, R.T = s;
    }
  }
  function TE(e, t, n, l) {
    var s = R.T;
    R.T = null;
    var u = J.p;
    try {
      J.p = 8, zu(e, t, n, l);
    } finally {
      J.p = u, R.T = s;
    }
  }
  function zu(e, t, n, l) {
    if (Vi) {
      var s = ju(l);
      if (s === null)
        wu(
          e,
          t,
          l,
          ki,
          n
        ), rg(e, l);
      else if (NE(
        s,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (rg(e, l), t & 4 && -1 < CE.indexOf(e)) {
        for (; s !== null; ) {
          var u = ba(s);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var y = vn(u.pendingLanes);
                  if (y !== 0) {
                    var T = u;
                    for (T.pendingLanes |= 2, T.entangledLanes |= 2; y; ) {
                      var B = 1 << 31 - jt(y);
                      T.entanglements[1] |= B, y &= ~B;
                    }
                    On(u), (Je & 6) === 0 && (Ti = Xe() + 500, nr(0));
                  }
                }
                break;
              case 31:
              case 13:
                T = Yl(u, 2), T !== null && Ft(T, u, 2), Ni(), Lu(u, 2);
            }
          if (u = ju(l), u === null && wu(
            e,
            t,
            l,
            ki,
            n
          ), u === s) break;
          s = u;
        }
        s !== null && l.stopPropagation();
      } else
        wu(
          e,
          t,
          l,
          null,
          n
        );
    }
  }
  function ju(e) {
    return e = Uc(e), Hu(e);
  }
  var ki = null;
  function Hu(e) {
    if (ki = null, e = ga(e), e !== null) {
      var t = p(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = m(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = g(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ki = e, null;
  }
  function og(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (yn()) {
          case Jt:
            return 2;
          case Wt:
            return 8;
          case Hn:
          case bo:
            return 32;
          case yo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Uu = !1, _l = null, Al = null, Rl = null, sr = /* @__PURE__ */ new Map(), ur = /* @__PURE__ */ new Map(), Ol = [], CE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function rg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        _l = null;
        break;
      case "dragenter":
      case "dragleave":
        Al = null;
        break;
      case "mouseover":
      case "mouseout":
        Rl = null;
        break;
      case "pointerover":
      case "pointerout":
        sr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ur.delete(t.pointerId);
    }
  }
  function fr(e, t, n, l, s, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: u,
      targetContainers: [s]
    }, t !== null && (t = ba(t), t !== null && lg(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function NE(e, t, n, l, s) {
    switch (t) {
      case "focusin":
        return _l = fr(
          _l,
          e,
          t,
          n,
          l,
          s
        ), !0;
      case "dragenter":
        return Al = fr(
          Al,
          e,
          t,
          n,
          l,
          s
        ), !0;
      case "mouseover":
        return Rl = fr(
          Rl,
          e,
          t,
          n,
          l,
          s
        ), !0;
      case "pointerover":
        var u = s.pointerId;
        return sr.set(
          u,
          fr(
            sr.get(u) || null,
            e,
            t,
            n,
            l,
            s
          )
        ), !0;
      case "gotpointercapture":
        return u = s.pointerId, ur.set(
          u,
          fr(
            ur.get(u) || null,
            e,
            t,
            n,
            l,
            s
          )
        ), !0;
    }
    return !1;
  }
  function ig(e) {
    var t = ga(e.target);
    if (t !== null) {
      var n = p(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = m(n), t !== null) {
            e.blockedOn = t, Sd(e.priority, function() {
              ag(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = g(n), t !== null) {
            e.blockedOn = t, Sd(e.priority, function() {
              ag(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ii(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ju(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        Hc = l, n.target.dispatchEvent(l), Hc = null;
      } else
        return t = ba(n), t !== null && lg(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function cg(e, t, n) {
    Ii(e) && n.delete(t);
  }
  function _E() {
    Uu = !1, _l !== null && Ii(_l) && (_l = null), Al !== null && Ii(Al) && (Al = null), Rl !== null && Ii(Rl) && (Rl = null), sr.forEach(cg), ur.forEach(cg);
  }
  function Gi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Uu || (Uu = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      _E
    )));
  }
  var Zi = null;
  function sg(e) {
    Zi !== e && (Zi = e, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        Zi === e && (Zi = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], s = e[t + 2];
          if (typeof l != "function") {
            if (Hu(l || n) === null)
              continue;
            break;
          }
          var u = ba(n);
          u !== null && (e.splice(t, 3), t -= 3, js(
            u,
            {
              pending: !0,
              data: s,
              method: n.method,
              action: l
            },
            l,
            s
          ));
        }
      }
    ));
  }
  function Wa(e) {
    function t(B) {
      return Gi(B, e);
    }
    _l !== null && Gi(_l, e), Al !== null && Gi(Al, e), Rl !== null && Gi(Rl, e), sr.forEach(t), ur.forEach(t);
    for (var n = 0; n < Ol.length; n++) {
      var l = Ol[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Ol.length && (n = Ol[0], n.blockedOn === null); )
      ig(n), n.blockedOn === null && Ol.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var s = n[l], u = n[l + 1], y = s[Gt] || null;
        if (typeof u == "function")
          y || sg(n);
        else if (y) {
          var T = null;
          if (u && u.hasAttribute("formAction")) {
            if (s = u, y = u[Gt] || null)
              T = y.formAction;
            else if (Hu(s) !== null) continue;
          } else T = y.action;
          typeof T == "function" ? n[l + 1] = T : (n.splice(l, 3), l -= 3), sg(n);
        }
      }
  }
  function ug() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(y) {
            return s = y;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      s !== null && (s(), s = null), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, s = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), s !== null && (s(), s = null);
      };
    }
  }
  function qu(e) {
    this._internalRoot = e;
  }
  Yi.prototype.render = qu.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(i(409));
    var n = t.current, l = on();
    tg(n, l, e, t, null, null);
  }, Yi.prototype.unmount = qu.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      tg(e.current, 2, null, e, null, null), Ni(), t[ha] = null;
    }
  };
  function Yi(e) {
    this._internalRoot = e;
  }
  Yi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ed();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ol.length && t !== 0 && t < Ol[n].priority; n++) ;
      Ol.splice(n, 0, e), n === 0 && ig(e);
    }
  };
  var fg = o.version;
  if (fg !== "19.2.4")
    throw Error(
      i(
        527,
        fg,
        "19.2.4"
      )
    );
  J.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
    return e = b(t), e = e !== null ? E(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var AE = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: R,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xi.isDisabled && Xi.supportsFiber)
      try {
        ol = Xi.inject(
          AE
        ), $t = Xi;
      } catch {
      }
  }
  return mr.createRoot = function(e, t) {
    if (!f(e)) throw Error(i(299));
    var n = !1, l = "", s = yp, u = vp, y = Ep;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (s = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (y = t.onRecoverableError)), t = Ph(
      e,
      1,
      !1,
      null,
      null,
      n,
      l,
      null,
      s,
      u,
      y,
      ug
    ), e[ha] = t.current, Su(e), new qu(t);
  }, mr.hydrateRoot = function(e, t, n) {
    if (!f(e)) throw Error(i(299));
    var l = !1, s = "", u = yp, y = vp, T = Ep, B = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (y = n.onCaughtError), n.onRecoverableError !== void 0 && (T = n.onRecoverableError), n.formState !== void 0 && (B = n.formState)), t = Ph(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      s,
      B,
      u,
      y,
      T,
      ug
    ), t.context = eg(null), n = t.current, l = on(), l = wo(l), s = hl(l), s.callback = null, gl(n, s, l), n = l, t.current.lanes = n, Be(t, n), On(t), e[ha] = t.current, Su(e), new Yi(t);
  }, mr.version = "19.2.4", mr;
}
var Sg;
function HE() {
  if (Sg) return Iu.exports;
  Sg = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (o) {
        console.error(o);
      }
  }
  return a(), Iu.exports = jE(), Iu.exports;
}
var UE = HE();
const Qi = "wanaku-classic-api";
let pc = null, L0 = null;
function qE(a) {
  pc = a;
}
function VE() {
  return pc;
}
function kE() {
  pc = null, L0 = null;
}
function IE() {
  return pc !== null;
}
function GE() {
  return L0;
}
function wg(a, o) {
  (o == null || o > a.length) && (o = a.length);
  for (var r = 0, i = Array(o); r < o; r++) i[r] = a[r];
  return i;
}
function ZE(a) {
  if (Array.isArray(a)) return a;
}
function YE(a, o) {
  if (!(a instanceof o)) throw new TypeError("Cannot call a class as a function");
}
function XE(a, o) {
  for (var r = 0; r < o.length; r++) {
    var i = o[r];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(a, PE(i.key), i);
  }
}
function QE(a, o, r) {
  return o && XE(a.prototype, o), Object.defineProperty(a, "prototype", {
    writable: !1
  }), a;
}
function z0(a, o) {
  var r = typeof Symbol < "u" && a[Symbol.iterator] || a["@@iterator"];
  if (!r) {
    if (Array.isArray(a) || (r = j0(a)) || o) {
      r && (a = r);
      var i = 0, f = function() {
      };
      return {
        s: f,
        n: function() {
          return i >= a.length ? {
            done: !0
          } : {
            done: !1,
            value: a[i++]
          };
        },
        e: function(h) {
          throw h;
        },
        f
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var p, m = !0, g = !1;
  return {
    s: function() {
      r = r.call(a);
    },
    n: function() {
      var h = r.next();
      return m = h.done, h;
    },
    e: function(h) {
      g = !0, p = h;
    },
    f: function() {
      try {
        m || r.return == null || r.return();
      } finally {
        if (g) throw p;
      }
    }
  };
}
function KE(a, o) {
  var r = a == null ? null : typeof Symbol < "u" && a[Symbol.iterator] || a["@@iterator"];
  if (r != null) {
    var i, f, p, m, g = [], h = !0, b = !1;
    try {
      if (p = (r = r.call(a)).next, o !== 0) for (; !(h = (i = p.call(r)).done) && (g.push(i.value), g.length !== o); h = !0) ;
    } catch (E) {
      b = !0, f = E;
    } finally {
      try {
        if (!h && r.return != null && (m = r.return(), Object(m) !== m)) return;
      } finally {
        if (b) throw f;
      }
    }
    return g;
  }
}
function FE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function JE(a, o) {
  return ZE(a) || KE(a, o) || j0(a, o) || FE();
}
function WE(a, o) {
  if (typeof a != "object" || !a) return a;
  var r = a[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(a, o);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(a);
}
function PE(a) {
  var o = WE(a, "string");
  return typeof o == "symbol" ? o : o + "";
}
function j0(a, o) {
  if (a) {
    if (typeof a == "string") return wg(a, o);
    var r = {}.toString.call(a).slice(8, -1);
    return r === "Object" && a.constructor && (r = a.constructor.name), r === "Map" || r === "Set" ? Array.from(a) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? wg(a, o) : void 0;
  }
}
var ye = {};
try {
  process.env.CARBON_ENABLE_CSS_CUSTOM_PROPERTIES && process.env.CARBON_ENABLE_CSS_CUSTOM_PROPERTIES === "true" ? ye.enableCssCustomProperties = !0 : ye.enableCssCustomProperties = !1, process.env.CARBON_ENABLE_CSS_GRID && process.env.CARBON_ENABLE_CSS_GRID === "true" ? ye.enableCssGrid = !0 : ye.enableCssGrid = !1, process.env.CARBON_ENABLE_V11_RELEASE ? process.env.CARBON_ENABLE_V11_RELEASE === "true" ? ye.enableV11Release = !0 : ye.enableV11Release = !1 : ye.enableV11Release = !0, process.env.CARBON_ENABLE_EXPERIMENTAL_TILE_CONTRAST && process.env.CARBON_ENABLE_EXPERIMENTAL_TILE_CONTRAST === "true" ? ye.enableExperimentalTileContrast = !0 : ye.enableExperimentalTileContrast = !1, process.env.CARBON_ENABLE_TILE_CONTRAST && process.env.CARBON_ENABLE_TILE_CONTRAST === "true" ? ye.enableTileContrast = !0 : ye.enableTileContrast = !1, process.env.CARBON_ENABLE_V12_TILE_DEFAULT_ICONS && process.env.CARBON_ENABLE_V12_TILE_DEFAULT_ICONS === "true" ? ye.enableV12TileDefaultIcons = !0 : ye.enableV12TileDefaultIcons = !1, process.env.CARBON_ENABLE_V12_TILE_RADIO_ICONS && process.env.CARBON_ENABLE_V12_TILE_RADIO_ICONS === "true" ? ye.enableV12TileRadioIcons = !0 : ye.enableV12TileRadioIcons = !1, process.env.CARBON_ENABLE_V12_OVERFLOWMENU && process.env.CARBON_ENABLE_V12_OVERFLOWMENU === "true" ? ye.enableV12Overflowmenu = !0 : ye.enableV12Overflowmenu = !1, process.env.CARBON_ENABLE_TREEVIEW_CONTROLLABLE && process.env.CARBON_ENABLE_TREEVIEW_CONTROLLABLE === "true" ? ye.enableTreeviewControllable = !0 : ye.enableTreeviewControllable = !1, process.env.CARBON_ENABLE_V12_STRUCTURED_LIST_VISIBLE_ICONS && process.env.CARBON_ENABLE_V12_STRUCTURED_LIST_VISIBLE_ICONS === "true" ? ye.enableV12StructuredListVisibleIcons = !0 : ye.enableV12StructuredListVisibleIcons = !1, process.env.CARBON_ENABLE_EXPERIMENTAL_FOCUS_WRAP_WITHOUT_SENTINELS && process.env.CARBON_ENABLE_EXPERIMENTAL_FOCUS_WRAP_WITHOUT_SENTINELS === "true" ? ye.enableExperimentalFocusWrapWithoutSentinels = !0 : ye.enableExperimentalFocusWrapWithoutSentinels = !1, process.env.CARBON_ENABLE_FOCUS_WRAP_WITHOUT_SENTINELS && process.env.CARBON_ENABLE_FOCUS_WRAP_WITHOUT_SENTINELS === "true" ? ye.enableFocusWrapWithoutSentinels = !0 : ye.enableFocusWrapWithoutSentinels = !1, process.env.CARBON_ENABLE_DIALOG_ELEMENT && process.env.CARBON_ENABLE_DIALOG_ELEMENT === "true" ? ye.enableDialogElement = !0 : ye.enableDialogElement = !1, process.env.CARBON_ENABLE_V12_DYNAMIC_FLOATING_STYLES && process.env.CARBON_ENABLE_V12_DYNAMIC_FLOATING_STYLES === "true" ? ye.enableV12DynamicFloatingStyles = !0 : ye.enableV12DynamicFloatingStyles = !1, process.env.CARBON_ENABLE_V12_TOGGLE_REDUCED_LABEL_SPACING && process.env.CARBON_ENABLE_V12_TOGGLE_REDUCED_LABEL_SPACING === "true" ? ye.enableV12ToggleReducedLabelSpacing = !0 : ye.enableV12ToggleReducedLabelSpacing = !1, process.env.CARBON_ENABLE_ENHANCED_FILE_UPLOADER && process.env.CARBON_ENABLE_ENHANCED_FILE_UPLOADER === "true" ? ye.enableEnhancedFileUploader = !0 : ye.enableEnhancedFileUploader = !1, process.env.CARBON_ENABLE_PRESENCE && process.env.CARBON_ENABLE_PRESENCE === "true" ? ye.enablePresence = !0 : ye.enablePresence = !1;
} catch {
  ye.enableCssCustomProperties = !1, ye.enableCssGrid = !1, ye.enableV11Release = !0, ye.enableExperimentalTileContrast = !1, ye.enableTileContrast = !1, ye.enableV12TileDefaultIcons = !1, ye.enableV12TileRadioIcons = !1, ye.enableV12Overflowmenu = !1, ye.enableTreeviewControllable = !1, ye.enableV12StructuredListVisibleIcons = !1, ye.enableExperimentalFocusWrapWithoutSentinels = !1, ye.enableFocusWrapWithoutSentinels = !1, ye.enableDialogElement = !1, ye.enableV12DynamicFloatingStyles = !1, ye.enableV12ToggleReducedLabelSpacing = !1, ye.enableEnhancedFileUploader = !1, ye.enablePresence = !1;
}
var eS = [{
  name: "enable-css-custom-properties",
  description: "Describe what the flag does",
  enabled: ye.enableCssCustomProperties
}, {
  name: "enable-css-grid",
  description: `Enable CSS Grid Layout in the Grid and Column React components
`,
  enabled: ye.enableCssGrid
}, {
  name: "enable-v11-release",
  description: `Enable the features and functionality for the v11 Release
`,
  enabled: ye.enableV11Release
}, {
  name: "enable-experimental-tile-contrast",
  description: `Deprecated, use enable-tile-contrast instead
`,
  enabled: ye.enableExperimentalTileContrast
}, {
  name: "enable-tile-contrast",
  description: `Enable the experimental tile improved contrast styles
`,
  enabled: ye.enableTileContrast
}, {
  name: "enable-v12-tile-default-icons",
  description: `Enable rendering of default icons in the tile components
`,
  enabled: ye.enableV12TileDefaultIcons
}, {
  name: "enable-v12-tile-radio-icons",
  description: `Enable rendering of radio icons in the RadioTile component
`,
  enabled: ye.enableV12TileRadioIcons
}, {
  name: "enable-v12-overflowmenu",
  description: `Enable the use of the v12 OverflowMenu leveraging the Menu subcomponents
`,
  enabled: ye.enableV12Overflowmenu
}, {
  name: "enable-treeview-controllable",
  description: `Enable the new TreeView controllable API
`,
  enabled: ye.enableTreeviewControllable
}, {
  name: "enable-v12-structured-list-visible-icons",
  description: `Enable rendering of radio icons in the StructuredList component
`,
  enabled: ye.enableV12StructuredListVisibleIcons
}, {
  name: "enable-experimental-focus-wrap-without-sentinels",
  description: `Deprecated, use enable-focus-wrap-without-sentinels instead
`,
  enabled: ye.enableExperimentalFocusWrapWithoutSentinels
}, {
  name: "enable-focus-wrap-without-sentinels",
  description: `Enable the new focus wrap behavior that doesn't use sentinel nodes
`,
  enabled: ye.enableFocusWrapWithoutSentinels
}, {
  name: "enable-dialog-element",
  description: `Enable components to utilize the native dialog element
`,
  enabled: ye.enableDialogElement
}, {
  name: "enable-v12-dynamic-floating-styles",
  description: `Enable dynamic setting of floating styles for components like Popover, Tooltip, etc.
`,
  enabled: ye.enableV12DynamicFloatingStyles
}, {
  name: "enable-v12-toggle-reduced-label-spacing",
  description: `Enable a reduced spacing between the toggle control and its label
`,
  enabled: ye.enableV12ToggleReducedLabelSpacing
}, {
  name: "enable-enhanced-file-uploader",
  description: `Enable enhanced functionality for the FileUploader component, including richer callback data and expanded trigger events for onChange and onDelete.
`,
  enabled: ye.enableEnhancedFileUploader
}, {
  name: "enable-presence",
  description: `Enable components to remain unmounted in closed state and mount in open state.
`,
  enabled: ye.enablePresence
}], tS = /* @__PURE__ */ (function() {
  function a(o) {
    var r = this;
    YE(this, a), this.flags = /* @__PURE__ */ new Map(), o && Object.keys(o).forEach(function(i) {
      r.flags.set(i, o[i]);
    });
  }
  return QE(a, [{
    key: "checkForFlag",
    value: function(r) {
      if (!this.flags.has(r))
        throw new Error("Unable to find a feature flag with the name: `".concat(r, "`"));
    }
    /**
     * Add a feature flag
     */
  }, {
    key: "add",
    value: function(r, i) {
      if (this.flags.has(r))
        throw new Error("The feature flag: ".concat(r, " already exists"));
      this.flags.set(r, i);
    }
    /**
     * Enable a feature flag
     */
  }, {
    key: "enable",
    value: function(r) {
      this.checkForFlag(r), this.flags.set(r, !0);
    }
    /**
     * Disable a feature flag
     */
  }, {
    key: "disable",
    value: function(r) {
      this.checkForFlag(r), this.flags.set(r, !1);
    }
    /**
     * Merge the given feature flags with the current set of feature flags.
     * Duplicate keys will be set to the value in the given feature flags.
     */
  }, {
    key: "merge",
    value: function(r) {
      var i = this;
      Object.keys(r).forEach(function(f) {
        i.flags.set(f, r[f]);
      });
    }
  }, {
    key: "mergeWithScope",
    value: function(r) {
      var i = z0(r.flags), f;
      try {
        for (i.s(); !(f = i.n()).done; ) {
          var p = JE(f.value, 2), m = p[0], g = p[1];
          this.flags.has(m) || this.flags.set(m, g);
        }
      } catch (h) {
        i.e(h);
      } finally {
        i.f();
      }
    }
    /**
     * Check if a feature flag is enabled
     */
  }, {
    key: "enabled",
    value: function(r) {
      var i;
      return this.checkForFlag(r), (i = this.flags.get(r)) !== null && i !== void 0 ? i : !1;
    }
  }]);
})(), nS = function(o) {
  return new tS(o);
}, lS = function() {
  var o = nS(), r = z0(eS), i;
  try {
    for (r.s(); !(i = r.n()).done; ) {
      var f = i.value;
      o.add(f.name, f.enabled);
    }
  } catch (p) {
    r.e(p);
  } finally {
    r.f();
  }
  return o;
}, Tn = lS();
Tn.add.bind(Tn);
Tn.enable.bind(Tn);
Tn.disable.bind(Tn);
var df = Tn.enabled.bind(Tn), aS = Tn.merge.bind(Tn);
aS({
  "enable-css-custom-properties": !0,
  "enable-css-grid": !0,
  "enable-v11-release": !0,
  "enable-experimental-tile-contrast": !1,
  "enable-tile-contrast": !1,
  "enable-v12-tile-radio-icons": !1,
  "enable-v12-structured-list-visible-icons": !1,
  "enable-v12-dynamic-floating-styles": !1
});
function de() {
  return de = Object.assign ? Object.assign.bind() : function(a) {
    for (var o = 1; o < arguments.length; o++) {
      var r = arguments[o];
      for (var i in r) ({}).hasOwnProperty.call(r, i) && (a[i] = r[i]);
    }
    return a;
  }, de.apply(null, arguments);
}
var Xu = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var xg;
function oS() {
  return xg || (xg = 1, (function(a) {
    (function() {
      var o = {}.hasOwnProperty;
      function r() {
        for (var p = "", m = 0; m < arguments.length; m++) {
          var g = arguments[m];
          g && (p = f(p, i(g)));
        }
        return p;
      }
      function i(p) {
        if (typeof p == "string" || typeof p == "number")
          return p;
        if (typeof p != "object")
          return "";
        if (Array.isArray(p))
          return r.apply(null, p);
        if (p.toString !== Object.prototype.toString && !p.toString.toString().includes("[native code]"))
          return p.toString();
        var m = "";
        for (var g in p)
          o.call(p, g) && p[g] && (m = f(m, g));
        return m;
      }
      function f(p, m) {
        return m ? p ? p + " " + m : p + m : p;
      }
      a.exports ? (r.default = r, a.exports = r) : window.classNames = r;
    })();
  })(Xu)), Xu.exports;
}
var rS = oS();
const oe = /* @__PURE__ */ fo(rS), _f = /* @__PURE__ */ d.createContext("cds");
function be() {
  return d.useContext(_f);
}
var Qu = { exports: {} }, Ku, Tg;
function iS() {
  if (Tg) return Ku;
  Tg = 1;
  var a = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ku = a, Ku;
}
var Fu, Cg;
function cS() {
  if (Cg) return Fu;
  Cg = 1;
  var a = /* @__PURE__ */ iS();
  function o() {
  }
  function r() {
  }
  return r.resetWarningCache = o, Fu = function() {
    function i(m, g, h, b, E, S) {
      if (S !== a) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
      }
    }
    i.isRequired = i;
    function f() {
      return i;
    }
    var p = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: f,
      element: i,
      elementType: i,
      instanceOf: f,
      node: i,
      objectOf: f,
      oneOf: f,
      oneOfType: f,
      shape: f,
      exact: f,
      checkPropTypes: r,
      resetWarningCache: o
    };
    return p.PropTypes = p, p;
  }, Fu;
}
var Ng;
function sS() {
  return Ng || (Ng = 1, Qu.exports = /* @__PURE__ */ cS()()), Qu.exports;
}
var uS = /* @__PURE__ */ sS();
const c = /* @__PURE__ */ fo(uS);
function fS(a, o, r) {
  return (o = pS(o)) in a ? Object.defineProperty(a, o, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[o] = r, a;
}
function _g(a, o) {
  var r = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(a);
    o && (i = i.filter(function(f) {
      return Object.getOwnPropertyDescriptor(a, f).enumerable;
    })), r.push.apply(r, i);
  }
  return r;
}
function Ju(a) {
  for (var o = 1; o < arguments.length; o++) {
    var r = arguments[o] != null ? arguments[o] : {};
    o % 2 ? _g(Object(r), !0).forEach(function(i) {
      fS(a, i, r[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r)) : _g(Object(r)).forEach(function(i) {
      Object.defineProperty(a, i, Object.getOwnPropertyDescriptor(r, i));
    });
  }
  return a;
}
function Ag(a, o) {
  if (a == null) return {};
  var r, i, f = dS(a, o);
  if (Object.getOwnPropertySymbols) {
    var p = Object.getOwnPropertySymbols(a);
    for (i = 0; i < p.length; i++) r = p[i], o.indexOf(r) === -1 && {}.propertyIsEnumerable.call(a, r) && (f[r] = a[r]);
  }
  return f;
}
function dS(a, o) {
  if (a == null) return {};
  var r = {};
  for (var i in a) if ({}.hasOwnProperty.call(a, i)) {
    if (o.indexOf(i) !== -1) continue;
    r[i] = a[i];
  }
  return r;
}
function mS(a, o) {
  if (typeof a != "object" || !a) return a;
  var r = a[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(a, o);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(a);
}
function pS(a) {
  var o = mS(a, "string");
  return typeof o == "symbol" ? o : o + "";
}
var hS = ["width", "height", "viewBox"], gS = ["tabindex"], bS = {
  // Reference:
  // https://github.com/IBM/carbon-components-react/issues/1392
  // https://github.com/PolymerElements/iron-iconset-svg/pull/47
  // `focusable` is a string attribute which is why we do not use a boolean here
  focusable: "false",
  preserveAspectRatio: "xMidYMid meet"
};
function yS() {
  var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = a.width, r = a.height, i = a.viewBox, f = i === void 0 ? "0 0 ".concat(o, " ").concat(r) : i, p = Ag(a, hS), m = p.tabindex, g = Ag(p, gS), h = Ju(Ju(Ju({}, bS), g), {}, {
    width: o,
    height: r,
    viewBox: f
  });
  return h["aria-label"] || h["aria-labelledby"] ? (h.role = "img", m != null && (h.focusable = "true", h.tabindex = m)) : h["aria-hidden"] = !0, h;
}
const xe = /* @__PURE__ */ v.forwardRef(function({
  className: o,
  children: r,
  tabIndex: i,
  xmlns: f = "http://www.w3.org/2000/svg",
  preserveAspectRatio: p = "xMidYMid meet",
  ...m
}, g) {
  const {
    tabindex: h,
    ...b
  } = yS({
    ...m,
    tabindex: i
  }), E = b;
  return o && (E.className = o), h != null && (typeof h == "number" ? E.tabIndex = h : E.tabIndex = Number(i)), g && (E.ref = g), f && (E.xmlns = f), p && (E.preserveAspectRatio = p), /* @__PURE__ */ d.createElement("svg", E, r);
});
xe.displayName = "Icon";
xe.propTypes = {
  "aria-hidden": c.oneOfType([c.bool, c.oneOf(["true", "false"])]),
  "aria-label": c.string,
  "aria-labelledby": c.string,
  children: c.node,
  className: c.string,
  height: c.oneOfType([c.number, c.string]),
  preserveAspectRatio: c.string,
  tabIndex: c.oneOfType([c.number, c.string]),
  viewBox: c.string,
  width: c.oneOfType([c.number, c.string]),
  xmlns: c.string
};
var Rg, Og, Dg, Mg, $g, Bg;
const H0 = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, Rg || (Rg = /* @__PURE__ */ d.createElement("path", {
    d: "M17 15 17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"
  })), o);
}), vS = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, Og || (Og = /* @__PURE__ */ d.createElement("path", {
    d: "M16,2A14.1725,14.1725,0,0,0,2,16,14.1725,14.1725,0,0,0,16,30,14.1725,14.1725,0,0,0,30,16,14.1725,14.1725,0,0,0,16,2Zm8,15H17v7H15V17H8V15h7V8h2v7h7Z"
  })), Dg || (Dg = /* @__PURE__ */ d.createElement("path", {
    fill: "none",
    d: "M24 17 17 17 17 24 15 24 15 17 8 17 8 15 15 15 15 8 17 8 17 15 24 15 24 17z",
    "data-icon-path": "inner-path"
  })), o);
}), ES = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, Mg || (Mg = /* @__PURE__ */ d.createElement("path", {
    d: "M19,21v-2h1v-7h-1v-2h4v2h-1v7h1v2h-4Z"
  })), $g || ($g = /* @__PURE__ */ d.createElement("path", {
    d: "M15.5005,21h2l-3.5005-11h-3l-3.4966,11h1.9988l.6018-2h4.7781l.6184,2ZM10.7058,17l1.6284-5.4111.2559-.0024,1.6736,5.4136h-3.5579Z"
  })), Bg || (Bg = /* @__PURE__ */ d.createElement("path", {
    d: "M32,32H0V0h32v32ZM2,30h28V2H2v28Z"
  })), o);
});
var Lg, zg, jg, Hg, Ug, qg, Vg, kg;
const SS = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return r === 16 || r === "16" || r === "16px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    ...i
  }, Lg || (Lg = /* @__PURE__ */ d.createElement("path", {
    d: "M9.3 3.7 13.1 7.5 1 7.5 1 8.5 13.1 8.5 9.3 12.3 10 13 15 8 10 3z"
  })), o) : r === 20 || r === "20" || r === "20px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    ...i
  }, zg || (zg = /* @__PURE__ */ d.createElement("path", {
    d: "M11.8 2.8 10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"
  })), o) : r === 24 || r === "24" || r === "24px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...i
  }, jg || (jg = /* @__PURE__ */ d.createElement("path", {
    d: "M14 4 12.9 5.1 18.9 11.2 2 11.2 2 12.8 18.9 12.8 12.9 18.9 14 20 22 12z"
  })), o) : /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, Hg || (Hg = /* @__PURE__ */ d.createElement("path", {
    d: "M18 6 16.57 7.393 24.15 15 4 15 4 17 24.15 17 16.57 24.573 18 26 28 16 18 6z"
  })), o);
}), wS = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return r === 16 || r === "16" || r === "16px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    ...i
  }, Ug || (Ug = /* @__PURE__ */ d.createElement("path", {
    d: "M3.7 6.7 7.5 2.9 7.5 15 8.5 15 8.5 2.9 12.3 6.7 13 6 8 1 3 6z"
  })), o) : /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, qg || (qg = /* @__PURE__ */ d.createElement("path", {
    d: "M16 4 6 14 7.41 15.41 15 7.83 15 28 17 28 17 7.83 24.59 15.41 26 14 16 4z"
  })), o);
}), xS = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, Vg || (Vg = /* @__PURE__ */ d.createElement("path", {
    d: "M27.6 20.6 24 24.2 24 4 22 4 22 24.2 18.4 20.6 17 22 23 28 29 22z"
  })), kg || (kg = /* @__PURE__ */ d.createElement("path", {
    d: "M9 4 3 10 4.4 11.4 8 7.8 8 28 10 28 10 7.8 13.6 11.4 15 10z"
  })), o);
});
var Ig, Gg, Zg, Yg, Xg, Qg, Kg, Fg, Jg, Wg, Pg, eb, tb, nb, lb, ab, ob, rb, ib, cb, sb, ub, fb, db, mb, pb, hb, gb, bb, yb, vb, Eb, Sb, wb, xb, Tb;
const TS = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, Ig || (Ig = /* @__PURE__ */ d.createElement("path", {
    d: "M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM6,26V6H26V26Z"
  })), o);
}), CS = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, Gg || (Gg = /* @__PURE__ */ d.createElement("path", {
    d: "M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM14,21.5,9,16.5427,10.5908,15,14,18.3456,21.4087,11l1.5918,1.5772Z"
  })), Zg || (Zg = /* @__PURE__ */ d.createElement("path", {
    fill: "none",
    d: "M14,21.5,9,16.5427,10.5908,15,14,18.3456,21.4087,11l1.5918,1.5772Z",
    "data-icon-path": "inner-path"
  })), o);
}), U0 = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return r === 16 || r === "16" || r === "16px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    ...i
  }, Yg || (Yg = /* @__PURE__ */ d.createElement("path", {
    d: "M8,1C4.1,1,1,4.1,1,8c0,3.9,3.1,7,7,7s7-3.1,7-7C15,4.1,11.9,1,8,1z M7,11L4.3,8.3l0.9-0.8L7,9.3l4-3.9l0.9,0.8L7,11z"
  })), Xg || (Xg = /* @__PURE__ */ d.createElement("path", {
    d: "M7,11L4.3,8.3l0.9-0.8L7,9.3l4-3.9l0.9,0.8L7,11z",
    "data-icon-path": "inner-path",
    opacity: "0"
  })), o) : r === 20 || r === "20" || r === "20px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    ...i
  }, Qg || (Qg = /* @__PURE__ */ d.createElement("path", {
    d: "M10,1c-4.9,0-9,4.1-9,9s4.1,9,9,9s9-4,9-9S15,1,10,1z M8.7,13.5l-3.2-3.2l1-1l2.2,2.2l4.8-4.8l1,1L8.7,13.5z"
  })), Kg || (Kg = /* @__PURE__ */ d.createElement("path", {
    fill: "none",
    d: "M8.7,13.5l-3.2-3.2l1-1l2.2,2.2l4.8-4.8l1,1L8.7,13.5z",
    "data-icon-path": "inner-path",
    opacity: "0"
  })), o) : r === 24 || r === "24" || r === "24px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...i
  }, Fg || (Fg = /* @__PURE__ */ d.createElement("path", {
    d: "M12,1C6,1,1,6,1,12s5,11,11,11s11-4.9,11-11S18.1,1,12,1z M10.4,16.3l-3.9-3.9l1.3-1.2l2.7,2.7l5.8-5.8l1.3,1.3L10.4,16.3z"
  })), Jg || (Jg = /* @__PURE__ */ d.createElement("path", {
    fill: "none",
    d: "M10.4,16.3l-3.9-3.9l1.3-1.2l2.7,2.7l5.8-5.8l1.3,1.3L10.4,16.3z",
    "data-icon-path": "inner-path",
    opacity: "0"
  })), o) : /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, Wg || (Wg = /* @__PURE__ */ d.createElement("path", {
    d: "M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2ZM14,21.5908l-5-5L10.5906,15,14,18.4092,21.41,11l1.5957,1.5859Z"
  })), Pg || (Pg = /* @__PURE__ */ d.createElement("path", {
    fill: "none",
    d: "M14 21.591 9 16.591 10.591 15 14 18.409 21.41 11 23.005 12.585 14 21.591z",
    "data-icon-path": "inner-path"
  })), o);
}), NS = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, eb || (eb = /* @__PURE__ */ d.createElement("path", {
    d: "M14 21.414 9 16.413 10.413 15 14 18.586 21.585 11 23 12.415 14 21.414z"
  })), tb || (tb = /* @__PURE__ */ d.createElement("path", {
    d: "M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"
  })), o);
}), ao = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return r === "glyph" || r === "glyph" || r === "glyphpx" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 10 6",
    fill: "currentColor",
    ...i
  }, nb || (nb = /* @__PURE__ */ d.createElement("path", {
    d: "M5 6 0 1 .7.3 5 4.6 9.3.3 10 1z"
  })), o) : r === 16 || r === "16" || r === "16px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    ...i
  }, lb || (lb = /* @__PURE__ */ d.createElement("path", {
    d: "M8 11 3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"
  })), o) : /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, ab || (ab = /* @__PURE__ */ d.createElement("path", {
    d: "M16 22 6 12 7.4 10.6 16 19.2 24.6 10.6 26 12z"
  })), o);
}), _S = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return r === "glyph" || r === "glyph" || r === "glyphpx" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 6 10",
    fill: "currentColor",
    ...i
  }, ob || (ob = /* @__PURE__ */ d.createElement("path", {
    d: "M0 5 5 0 5.7.7 1.4 5 5.7 9.3 5 10z"
  })), o) : r === 16 || r === "16" || r === "16px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    ...i
  }, rb || (rb = /* @__PURE__ */ d.createElement("path", {
    d: "M5 8 10 3 10.7 3.7 6.4 8 10.7 12.3 10 13z"
  })), o) : /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, ib || (ib = /* @__PURE__ */ d.createElement("path", {
    d: "M10 16 20 6 21.4 7.4 12.8 16 21.4 24.6 20 26z"
  })), o);
}), Af = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return r === "glyph" || r === "glyph" || r === "glyphpx" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 6 10",
    fill: "currentColor",
    ...i
  }, cb || (cb = /* @__PURE__ */ d.createElement("path", {
    d: "M6 5 1 10 .3 9.3 4.6 5 .3.7 1 0z"
  })), o) : r === 16 || r === "16" || r === "16px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    ...i
  }, sb || (sb = /* @__PURE__ */ d.createElement("path", {
    d: "M11 8 6 13 5.3 12.3 9.6 8 5.3 3.7 6 3z"
  })), o) : /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, ub || (ub = /* @__PURE__ */ d.createElement("path", {
    d: "M22 16 12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z"
  })), o);
}), Rf = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return r === "glyph" || r === "glyph" || r === "glyphpx" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 10 6",
    fill: "currentColor",
    ...i
  }, fb || (fb = /* @__PURE__ */ d.createElement("path", {
    d: "M5 0 10 5 9.3 5.7 5 1.4.7 5.7 0 5z"
  })), o) : r === 16 || r === "16" || r === "16px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    ...i
  }, db || (db = /* @__PURE__ */ d.createElement("path", {
    d: "M8 5 13 10 12.3 10.7 8 6.4 3.7 10.7 3 10z"
  })), o) : /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, mb || (mb = /* @__PURE__ */ d.createElement("path", {
    d: "M16 10 26 20 24.6 21.4 16 12.8 7.4 21.4 6 20z"
  })), o);
}), AS = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, pb || (pb = /* @__PURE__ */ d.createElement("path", {
    d: "M7.7,4.7a14.7,14.7,0,0,0-3,3.1L6.3,9A13.26,13.26,0,0,1,8.9,6.3Z"
  })), hb || (hb = /* @__PURE__ */ d.createElement("path", {
    d: "M4.6,12.3l-1.9-.6A12.51,12.51,0,0,0,2,16H4A11.48,11.48,0,0,1,4.6,12.3Z"
  })), gb || (gb = /* @__PURE__ */ d.createElement("path", {
    d: "M2.7,20.4a14.4,14.4,0,0,0,2,3.9l1.6-1.2a12.89,12.89,0,0,1-1.7-3.3Z"
  })), bb || (bb = /* @__PURE__ */ d.createElement("path", {
    d: "M7.8,27.3a14.4,14.4,0,0,0,3.9,2l.6-1.9A12.89,12.89,0,0,1,9,25.7Z"
  })), yb || (yb = /* @__PURE__ */ d.createElement("path", {
    d: "M11.7,2.7l.6,1.9A11.48,11.48,0,0,1,16,4V2A12.51,12.51,0,0,0,11.7,2.7Z"
  })), vb || (vb = /* @__PURE__ */ d.createElement("path", {
    d: "M24.2,27.3a15.18,15.18,0,0,0,3.1-3.1L25.7,23A11.53,11.53,0,0,1,23,25.7Z"
  })), Eb || (Eb = /* @__PURE__ */ d.createElement("path", {
    d: "M27.4,19.7l1.9.6A15.47,15.47,0,0,0,30,16H28A11.48,11.48,0,0,1,27.4,19.7Z"
  })), Sb || (Sb = /* @__PURE__ */ d.createElement("path", {
    d: "M29.2,11.6a14.4,14.4,0,0,0-2-3.9L25.6,8.9a12.89,12.89,0,0,1,1.7,3.3Z"
  })), wb || (wb = /* @__PURE__ */ d.createElement("path", {
    d: "M24.1,4.6a14.4,14.4,0,0,0-3.9-2l-.6,1.9a12.89,12.89,0,0,1,3.3,1.7Z"
  })), xb || (xb = /* @__PURE__ */ d.createElement("path", {
    d: "M20.3,29.3l-.6-1.9A11.48,11.48,0,0,1,16,28v2A21.42,21.42,0,0,0,20.3,29.3Z"
  })), o);
}), Ll = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, Tb || (Tb = /* @__PURE__ */ d.createElement("path", {
    d: "M17.4141 16 24 9.4141 22.5859 8 16 14.5859 9.4143 8 8 9.4141 14.5859 16 8 22.5859 9.4143 24 16 17.4141 22.5859 24 24 22.5859 17.4141 16z"
  })), o);
});
var Cb, Nb, _b, Ab, Rb, Ob;
const RS = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, Cb || (Cb = /* @__PURE__ */ d.createElement("path", {
    d: "M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"
  })), Nb || (Nb = /* @__PURE__ */ d.createElement("path", {
    d: "M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"
  })), o);
}), OS = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, _b || (_b = /* @__PURE__ */ d.createElement("path", {
    d: "M24,3H8A2,2,0,0,0,6,5V27a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V5A2,2,0,0,0,24,3Zm0,2v6H8V5ZM8,19V13H24v6Zm0,8V21H24v6Z"
  })), Ab || (Ab = /* @__PURE__ */ d.createElement("circle", {
    cx: "11",
    cy: "8",
    r: "1"
  })), Rb || (Rb = /* @__PURE__ */ d.createElement("circle", {
    cx: "11",
    cy: "16",
    r: "1"
  })), Ob || (Ob = /* @__PURE__ */ d.createElement("circle", {
    cx: "11",
    cy: "24",
    r: "1"
  })), o);
});
var Db, Mb, $b, Bb, Lb, zb, jb, Hb, Ub, qb, Vb, kb, Ib, Gb, Zb;
const DS = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return r === 16 || r === "16" || r === "16px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    ...i
  }, Db || (Db = /* @__PURE__ */ d.createElement("path", {
    d: "M13 7 12.3 6.3 8.5 10.1 8.5 1 7.5 1 7.5 10.1 3.7 6.3 3 7 8 12z"
  })), Mb || (Mb = /* @__PURE__ */ d.createElement("path", {
    d: "M13,12v2H3v-2H2v2l0,0c0,0.6,0.4,1,1,1h10c0.6,0,1-0.4,1-1l0,0v-2H13z"
  })), o) : /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, $b || ($b = /* @__PURE__ */ d.createElement("path", {
    d: "M26,24v4H6V24H4v4H4a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2h0V24Z"
  })), Bb || (Bb = /* @__PURE__ */ d.createElement("path", {
    d: "M26 14 24.59 12.59 17 20.17 17 2 15 2 15 20.17 7.41 12.59 6 14 16 24 26 14z"
  })), o);
}), MS = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, Lb || (Lb = /* @__PURE__ */ d.createElement("path", {
    d: "M2 26H30V28H2z"
  })), zb || (zb = /* @__PURE__ */ d.createElement("path", {
    d: "M25.4,9c0.8-0.8,0.8-2,0-2.8c0,0,0,0,0,0l-3.6-3.6c-0.8-0.8-2-0.8-2.8,0c0,0,0,0,0,0l-15,15V24h6.4L25.4,9z M20.4,4L24,7.6 l-3,3L17.4,7L20.4,4z M6,22v-3.6l10-10l3.6,3.6l-10,10H6z"
  })), o);
}), $S = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, jb || (jb = /* @__PURE__ */ d.createElement("path", {
    d: "M2,16H2A14,14,0,1,0,16,2,14,14,0,0,0,2,16Zm23.15,7.75L8.25,6.85a12,12,0,0,1,16.9,16.9ZM8.24,25.16A12,12,0,0,1,6.84,8.27L23.73,25.16a12,12,0,0,1-15.49,0Z"
  })), o);
}), q0 = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return r === 16 || r === "16" || r === "16px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    ...i
  }, Hb || (Hb = /* @__PURE__ */ d.createElement("path", {
    d: "M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M10.7,11.5L4.5,5.3l0.8-0.8l6.2,6.2L10.7,11.5z"
  })), Ub || (Ub = /* @__PURE__ */ d.createElement("path", {
    fill: "none",
    d: "M10.7,11.5L4.5,5.3l0.8-0.8l6.2,6.2L10.7,11.5z",
    "data-icon-path": "inner-path",
    opacity: "0"
  })), o) : r === 20 || r === "20" || r === "20px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    ...i
  }, qb || (qb = /* @__PURE__ */ d.createElement("path", {
    d: "M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M13.5,14.5l-8-8l1-1l8,8L13.5,14.5z"
  })), Vb || (Vb = /* @__PURE__ */ d.createElement("path", {
    d: "M13.5,14.5l-8-8l1-1l8,8L13.5,14.5z",
    "data-icon-path": "inner-path",
    opacity: "0"
  })), o) : r === 24 || r === "24" || r === "24px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...i
  }, kb || (kb = /* @__PURE__ */ d.createElement("path", {
    d: "M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11s11-4.9,11-11S18.1,1,12,1z M16.3,17.5L6.5,7.7l1.2-1.2l9.8,9.8L16.3,17.5z"
  })), Ib || (Ib = /* @__PURE__ */ d.createElement("path", {
    fill: "none",
    d: "M16.3,17.5L6.5,7.7l1.2-1.2l9.8,9.8L16.3,17.5z",
    "data-icon-path": "inner-path",
    opacity: "0"
  })), o) : /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, Gb || (Gb = /* @__PURE__ */ d.createElement("path", {
    fill: "none",
    d: "M14.9 7.2H17.1V24.799H14.9z",
    "data-icon-path": "inner-path",
    transform: "rotate(-45 16 16)"
  })), Zb || (Zb = /* @__PURE__ */ d.createElement("path", {
    d: "M16,2A13.914,13.914,0,0,0,2,16,13.914,13.914,0,0,0,16,30,13.914,13.914,0,0,0,30,16,13.914,13.914,0,0,0,16,2Zm5.4449,21L9,10.5557,10.5557,9,23,21.4448Z"
  })), o);
});
var Yb, Xb, Qb, Kb, Fb, Jb, Wb, Pb, e1, t1;
const BS = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return r === "glyph" || r === "glyph" || r === "glyphpx" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    ...i
  }, Yb || (Yb = /* @__PURE__ */ d.createElement("path", {
    d: "M8,2a6,6,0,1,0,6,6A6,6,0,0,0,8,2ZM8,4a4.0045,4.0045,0,0,1,4,4H4A4.0045,4.0045,0,0,1,8,4Z"
  })), o) : /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, Xb || (Xb = /* @__PURE__ */ d.createElement("path", {
    d: "M23.7642,6.8593l1.2851-1.5315A13.976,13.976,0,0,0,20.8672,2.887l-.6836,1.8776A11.9729,11.9729,0,0,1,23.7642,6.8593Z"
  })), Qb || (Qb = /* @__PURE__ */ d.createElement("path", {
    d: "M27.81,14l1.9677-.4128A13.8888,13.8888,0,0,0,28.14,9.0457L26.4087,10A12.52,12.52,0,0,1,27.81,14Z"
  })), Kb || (Kb = /* @__PURE__ */ d.createElement("path", {
    d: "M20.1836,27.2354l.6836,1.8776a13.976,13.976,0,0,0,4.1821-2.4408l-1.2851-1.5315A11.9729,11.9729,0,0,1,20.1836,27.2354Z"
  })), Fb || (Fb = /* @__PURE__ */ d.createElement("path", {
    d: "M26.4087,22,28.14,23a14.14,14.14,0,0,0,1.6382-4.5872L27.81,18.0659A12.1519,12.1519,0,0,1,26.4087,22Z"
  })), Jb || (Jb = /* @__PURE__ */ d.createElement("path", {
    d: "M16,30V2a14,14,0,0,0,0,28Z"
  })), o);
}), LS = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, Wb || (Wb = /* @__PURE__ */ d.createElement("path", {
    fill: "none",
    d: "M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z",
    "data-icon-path": "inner-path"
  })), Pb || (Pb = /* @__PURE__ */ d.createElement("path", {
    d: "M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,6a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"
  })), o);
}), zS = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, e1 || (e1 = /* @__PURE__ */ d.createElement("path", {
    fill: "none",
    d: "M16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,13.875H17.125v-8H13v2.25h1.875v5.75H12v2.25h8Z",
    "data-icon-path": "inner-path"
  })), t1 || (t1 = /* @__PURE__ */ d.createElement("path", {
    d: "M26,4H6A2,2,0,0,0,4,6V26a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V6A2,2,0,0,0,26,4ZM16,8a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,16,8Zm4,16.125H12v-2.25h2.875v-5.75H13v-2.25h4.125v8H20Z"
  })), o);
});
var n1, l1, a1;
const V0 = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, n1 || (n1 = /* @__PURE__ */ d.createElement("circle", {
    cx: "16",
    cy: "8",
    r: "2"
  })), l1 || (l1 = /* @__PURE__ */ d.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "2"
  })), a1 || (a1 = /* @__PURE__ */ d.createElement("circle", {
    cx: "16",
    cy: "24",
    r: "2"
  })), o);
});
var o1, r1;
const jS = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, o1 || (o1 = /* @__PURE__ */ d.createElement("path", {
    d: "M6.34 19H17.65V21H6.34z",
    transform: "rotate(-45 11.995 20.002)"
  })), r1 || (r1 = /* @__PURE__ */ d.createElement("path", {
    d: "M17,30a1,1,0,0,1-.37-.07,1,1,0,0,1-.62-.79l-1-7,2-.28.75,5.27L21,24.52V17a1,1,0,0,1,.29-.71l4.07-4.07A8.94,8.94,0,0,0,28,5.86V4H26.14a8.94,8.94,0,0,0-6.36,2.64l-4.07,4.07A1,1,0,0,1,15,11H7.48L4.87,14.26l5.27.75-.28,2-7-1a1,1,0,0,1-.79-.62,1,1,0,0,1,.15-1l4-5A1,1,0,0,1,7,9h7.59l3.77-3.78A10.92,10.92,0,0,1,26.14,2H28a2,2,0,0,1,2,2V5.86a10.92,10.92,0,0,1-3.22,7.78L23,17.41V25a1,1,0,0,1-.38.78l-5,4A1,1,0,0,1,17,30Z"
  })), o);
});
var i1, c1, s1, u1, f1, d1;
const HS = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return r === 16 || r === "16" || r === "16px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    ...i
  }, i1 || (i1 = /* @__PURE__ */ d.createElement("path", {
    d: "M15,14.3L10.7,10c1.9-2.3,1.6-5.8-0.7-7.7S4.2,0.7,2.3,3S0.7,8.8,3,10.7c2,1.7,5,1.7,7,0l4.3,4.3L15,14.3z M2,6.5 C2,4,4,2,6.5,2S11,4,11,6.5S9,11,6.5,11S2,9,2,6.5z"
  })), o) : /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, c1 || (c1 = /* @__PURE__ */ d.createElement("path", {
    d: "M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"
  })), o);
}), US = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return r === 16 || r === "16" || r === "16px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    ...i
  }, s1 || (s1 = /* @__PURE__ */ d.createElement("path", {
    d: "M13.5,8.4c0-0.1,0-0.3,0-0.4c0-0.1,0-0.3,0-0.4l1-0.8c0.4-0.3,0.4-0.9,0.2-1.3l-1.2-2C13.3,3.2,13,3,12.6,3 c-0.1,0-0.2,0-0.3,0.1l-1.2,0.4c-0.2-0.1-0.4-0.3-0.7-0.4l-0.3-1.3C10.1,1.3,9.7,1,9.2,1H6.8c-0.5,0-0.9,0.3-1,0.8L5.6,3.1 C5.3,3.2,5.1,3.3,4.9,3.4L3.7,3C3.6,3,3.5,3,3.4,3C3,3,2.7,3.2,2.5,3.5l-1.2,2C1.1,5.9,1.2,6.4,1.6,6.8l0.9,0.9c0,0.1,0,0.3,0,0.4 c0,0.1,0,0.3,0,0.4L1.6,9.2c-0.4,0.3-0.5,0.9-0.2,1.3l1.2,2C2.7,12.8,3,13,3.4,13c0.1,0,0.2,0,0.3-0.1l1.2-0.4 c0.2,0.1,0.4,0.3,0.7,0.4l0.3,1.3c0.1,0.5,0.5,0.8,1,0.8h2.4c0.5,0,0.9-0.3,1-0.8l0.3-1.3c0.2-0.1,0.4-0.2,0.7-0.4l1.2,0.4 c0.1,0,0.2,0.1,0.3,0.1c0.4,0,0.7-0.2,0.9-0.5l1.1-2c0.2-0.4,0.2-0.9-0.2-1.3L13.5,8.4z M12.6,12l-1.7-0.6c-0.4,0.3-0.9,0.6-1.4,0.8 L9.2,14H6.8l-0.4-1.8c-0.5-0.2-0.9-0.5-1.4-0.8L3.4,12l-1.2-2l1.4-1.2c-0.1-0.5-0.1-1.1,0-1.6L2.2,6l1.2-2l1.7,0.6 C5.5,4.2,6,4,6.5,3.8L6.8,2h2.4l0.4,1.8c0.5,0.2,0.9,0.5,1.4,0.8L12.6,4l1.2,2l-1.4,1.2c0.1,0.5,0.1,1.1,0,1.6l1.4,1.2L12.6,12z"
  })), u1 || (u1 = /* @__PURE__ */ d.createElement("path", {
    d: "M8,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3C11,9.6,9.7,11,8,11C8,11,8,11,8,11z M8,6C6.9,6,6,6.8,6,7.9C6,7.9,6,8,6,8 c0,1.1,0.8,2,1.9,2c0,0,0.1,0,0.1,0c1.1,0,2-0.8,2-1.9c0,0,0-0.1,0-0.1C10,6.9,9.2,6,8,6C8.1,6,8,6,8,6z"
  })), o) : /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, f1 || (f1 = /* @__PURE__ */ d.createElement("path", {
    d: "M27,16.76c0-.25,0-.5,0-.76s0-.51,0-.77l1.92-1.68A2,2,0,0,0,29.3,11L26.94,7a2,2,0,0,0-1.73-1,2,2,0,0,0-.64.1l-2.43.82a11.35,11.35,0,0,0-1.31-.75l-.51-2.52a2,2,0,0,0-2-1.61H13.64a2,2,0,0,0-2,1.61l-.51,2.52a11.48,11.48,0,0,0-1.32.75L7.43,6.06A2,2,0,0,0,6.79,6,2,2,0,0,0,5.06,7L2.7,11a2,2,0,0,0,.41,2.51L5,15.24c0,.25,0,.5,0,.76s0,.51,0,.77L3.11,18.45A2,2,0,0,0,2.7,21L5.06,25a2,2,0,0,0,1.73,1,2,2,0,0,0,.64-.1l2.43-.82a11.35,11.35,0,0,0,1.31.75l.51,2.52a2,2,0,0,0,2,1.61h4.72a2,2,0,0,0,2-1.61l.51-2.52a11.48,11.48,0,0,0,1.32-.75l2.42.82a2,2,0,0,0,.64.1,2,2,0,0,0,1.73-1L29.3,21a2,2,0,0,0-.41-2.51ZM25.21,24l-3.43-1.16a8.86,8.86,0,0,1-2.71,1.57L18.36,28H13.64l-.71-3.55a9.36,9.36,0,0,1-2.7-1.57L6.79,24,4.43,20l2.72-2.4a8.9,8.9,0,0,1,0-3.13L4.43,12,6.79,8l3.43,1.16a8.86,8.86,0,0,1,2.71-1.57L13.64,4h4.72l.71,3.55a9.36,9.36,0,0,1,2.7,1.57L25.21,8,27.57,12l-2.72,2.4a8.9,8.9,0,0,1,0,3.13L27.57,20Z"
  })), d1 || (d1 = /* @__PURE__ */ d.createElement("path", {
    d: "M16,22a6,6,0,1,1,6-6A5.94,5.94,0,0,1,16,22Zm0-10a3.91,3.91,0,0,0-4,4,3.91,3.91,0,0,0,4,4,3.91,3.91,0,0,0,4-4A3.91,3.91,0,0,0,16,12Z"
  })), o);
});
var m1, p1, h1, g1;
const Of = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, m1 || (m1 = /* @__PURE__ */ d.createElement("path", {
    d: "M12 12H14V24H12z"
  })), p1 || (p1 = /* @__PURE__ */ d.createElement("path", {
    d: "M18 12H20V24H18z"
  })), h1 || (h1 = /* @__PURE__ */ d.createElement("path", {
    d: "M4,6V8H6V28a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V8h2V6ZM8,28V8H24V28Z"
  })), g1 || (g1 = /* @__PURE__ */ d.createElement("path", {
    d: "M12 2H20V4H12z"
  })), o);
});
var b1, y1, v1, E1, S1;
const qS = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, b1 || (b1 = /* @__PURE__ */ d.createElement("path", {
    d: "M20,10H7.8149l3.5874-3.5859L10,5,4,11,10,17l1.4023-1.4146L7.8179,12H20a6,6,0,0,1,0,12H12v2h8a8,8,0,0,0,0-16Z"
  })), o);
}), VS = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return r === 16 || r === "16" || r === "16px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    ...i
  }, y1 || (y1 = /* @__PURE__ */ d.createElement("path", {
    d: "M15.5,7.8C14.3,4.7,11.3,2.6,8,2.5C4.7,2.6,1.7,4.7,0.5,7.8c0,0.1,0,0.2,0,0.3c1.2,3.1,4.1,5.2,7.5,5.3 c3.3-0.1,6.3-2.2,7.5-5.3C15.5,8.1,15.5,7.9,15.5,7.8z M8,12.5c-2.7,0-5.4-2-6.5-4.5c1-2.5,3.8-4.5,6.5-4.5s5.4,2,6.5,4.5 C13.4,10.5,10.6,12.5,8,12.5z"
  })), v1 || (v1 = /* @__PURE__ */ d.createElement("path", {
    d: "M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"
  })), o) : /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, E1 || (E1 = /* @__PURE__ */ d.createElement("path", {
    d: "M30.94,15.66A16.69,16.69,0,0,0,16,5,16.69,16.69,0,0,0,1.06,15.66a1,1,0,0,0,0,.68A16.69,16.69,0,0,0,16,27,16.69,16.69,0,0,0,30.94,16.34,1,1,0,0,0,30.94,15.66ZM16,25c-5.3,0-10.9-3.93-12.93-9C5.1,10.93,10.7,7,16,7s10.9,3.93,12.93,9C26.9,21.07,21.3,25,16,25Z"
  })), S1 || (S1 = /* @__PURE__ */ d.createElement("path", {
    d: "M16,10a6,6,0,1,0,6,6A6,6,0,0,0,16,10Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,16,20Z"
  })), o);
});
var w1, x1, T1, C1, N1, _1, A1, R1, O1, D1, M1, $1, B1, L1, z1, j1, H1;
const kS = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return r === 16 || r === "16" || r === "16px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    ...i
  }, w1 || (w1 = /* @__PURE__ */ d.createElement("path", {
    d: "M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z M8,14c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S11.3,14,8,14z"
  })), x1 || (x1 = /* @__PURE__ */ d.createElement("path", {
    d: "M7.5 4H8.5V9H7.5z"
  })), T1 || (T1 = /* @__PURE__ */ d.createElement("path", {
    d: "M8,10.2c-0.4,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8c0.4,0,0.8-0.3,0.8-0.8S8.4,10.2,8,10.2z"
  })), o) : /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, C1 || (C1 = /* @__PURE__ */ d.createElement("path", {
    d: "M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z"
  })), N1 || (N1 = /* @__PURE__ */ d.createElement("path", {
    d: "M15 8H17V19H15z"
  })), _1 || (_1 = /* @__PURE__ */ d.createElement("path", {
    d: "M16,22a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,16,22Z"
  })), o);
}), Df = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, A1 || (A1 = /* @__PURE__ */ d.createElement("path", {
    fill: "none",
    d: "M16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Zm-1.125-5h2.25V12h-2.25Z",
    "data-icon-path": "inner-path"
  })), R1 || (R1 = /* @__PURE__ */ d.createElement("path", {
    d: "M16.002,6.1714h-.004L4.6487,27.9966,4.6506,28H27.3494l.0019-.0034ZM14.875,12h2.25v9h-2.25ZM16,26a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,16,26Z"
  })), O1 || (O1 = /* @__PURE__ */ d.createElement("path", {
    d: "M29,30H3a1,1,0,0,1-.8872-1.4614l13-25a1,1,0,0,1,1.7744,0l13,25A1,1,0,0,1,29,30ZM4.6507,28H27.3493l.002-.0033L16.002,6.1714h-.004L4.6487,27.9967Z"
  })), o);
}), Mf = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  size: r = 16,
  ...i
}, f) {
  return r === 16 || r === "16" || r === "16px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    ...i
  }, D1 || (D1 = /* @__PURE__ */ d.createElement("path", {
    d: "M8,1C4.2,1,1,4.2,1,8s3.2,7,7,7s7-3.1,7-7S11.9,1,8,1z M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2 c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z"
  })), M1 || (M1 = /* @__PURE__ */ d.createElement("path", {
    d: "M7.5,4h1v5h-1C7.5,9,7.5,4,7.5,4z M8,12.2c-0.4,0-0.8-0.4-0.8-0.8s0.3-0.8,0.8-0.8 c0.4,0,0.8,0.4,0.8,0.8S8.4,12.2,8,12.2z",
    "data-icon-path": "inner-path",
    opacity: "0"
  })), o) : r === 20 || r === "20" || r === "20px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    ...i
  }, $1 || ($1 = /* @__PURE__ */ d.createElement("path", {
    d: "M10,1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S15,1,10,1z M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1 s1,0.4,1,1S10.6,16,10,16z"
  })), B1 || (B1 = /* @__PURE__ */ d.createElement("path", {
    d: "M9.2,5h1.5v7H9.2V5z M10,16c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S10.6,16,10,16z",
    "data-icon-path": "inner-path",
    opacity: "0"
  })), o) : r === 24 || r === "24" || r === "24px" ? /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    ...i
  }, L1 || (L1 = /* @__PURE__ */ d.createElement("path", {
    d: "M12,1C5.9,1,1,5.9,1,12s4.9,11,11,11s11-4.9,11-11C23,5.9,18.1,1,12,1z M11.1,6h1.8v8h-1.8V6z M12,19.2 c-0.7,0-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2s1.2,0.6,1.2,1.2S12.7,19.2,12,19.2z"
  })), z1 || (z1 = /* @__PURE__ */ d.createElement("path", {
    fill: "none",
    d: "M13.2,18c0,0.7-0.6,1.2-1.2,1.2s-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2S13.2,17.3,13.2,18z M12.9,6 h-1.8v8h1.8V6z",
    "data-icon-path": "inner-path",
    opacity: "0"
  })), o) : /* @__PURE__ */ d.createElement(xe, {
    width: r,
    height: r,
    ref: f,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "currentColor",
    ...i
  }, j1 || (j1 = /* @__PURE__ */ d.createElement("path", {
    d: "M16,2C8.3,2,2,8.3,2,16s6.3,14,14,14s14-6.3,14-14C30,8.3,23.7,2,16,2z M14.9,8h2.2v11h-2.2V8z M16,25 c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22c0.8,0,1.5,0.7,1.5,1.5S16.8,25,16,25z"
  })), H1 || (H1 = /* @__PURE__ */ d.createElement("path", {
    fill: "none",
    d: "M17.5,23.5c0,0.8-0.7,1.5-1.5,1.5c-0.8,0-1.5-0.7-1.5-1.5S15.2,22,16,22 C16.8,22,17.5,22.7,17.5,23.5z M17.1,8h-2.2v11h2.2V8z",
    "data-icon-path": "inner-path",
    opacity: "0"
  })), o);
}), U1 = /* @__PURE__ */ v.createContext({
  direction: "auto",
  getTextDirection: {
    current: void 0
  }
}), Fe = /* @__PURE__ */ v.forwardRef(({
  as: a,
  children: o,
  dir: r = "auto",
  ...i
}, f) => {
  const p = v.useContext(U1), m = {}, g = a ?? "span", h = {
    ...p
  };
  if (!p)
    m.dir = r, h.direction = r;
  else {
    const {
      direction: b,
      getTextDirection: E
    } = p;
    if (E && E.current) {
      const S = IS(o), w = E.current(S);
      b !== w ? (m.dir = w, h.direction = w) : b === "auto" && (m.dir = w);
    } else b !== r ? (m.dir = r, h.direction = r) : b === "auto" && (m.dir = r);
  }
  return /* @__PURE__ */ d.createElement(U1.Provider, {
    value: h
  }, /* @__PURE__ */ d.createElement(g, de({
    ref: f
  }, i, m), o));
});
Fe.propTypes = {
  /**
   * Provide a custom element type used to render the outermost node
   */
  as: c.oneOfType([c.func, c.string, c.elementType]),
  /**
   * Provide child elements or text to be rendered inside of this component
   */
  children: c.node,
  /**
   * Specify the text direction to be used for this component and any of its
   * children
   */
  dir: c.oneOf(["ltr", "rtl", "auto"])
};
const IS = (a) => {
  var r;
  if (typeof a == "string")
    return a;
  const o = (r = v.Children.map(a, (i) => typeof i == "string" ? i : null)) == null ? void 0 : r.filter((i) => i !== null);
  return (o == null ? void 0 : o.length) === 1 ? o[0] : o;
}, Tr = {
  key: "Tab",
  which: 9,
  keyCode: 9,
  code: "Tab"
}, ma = {
  key: "Enter",
  which: 13,
  keyCode: 13,
  code: "Enter"
}, al = {
  key: [
    "Escape",
    // IE11 Escape
    "Esc"
  ],
  which: 27,
  keyCode: 27,
  code: "Esc"
}, mo = {
  key: " ",
  which: 32,
  keyCode: 32,
  code: "Space"
}, k0 = {
  key: "End",
  which: 35,
  keyCode: 35,
  code: "Numpad1"
}, I0 = {
  key: "Home",
  which: 36,
  keyCode: 36,
  code: "Numpad7"
}, hc = {
  key: "ArrowLeft",
  which: 37,
  keyCode: 37,
  code: "ArrowLeft"
}, $f = {
  key: "ArrowUp",
  which: 38,
  keyCode: 38,
  code: "ArrowUp"
}, Bf = {
  key: "ArrowRight",
  which: 39,
  keyCode: 39,
  code: "ArrowRight"
}, Lf = {
  key: "ArrowDown",
  which: 40,
  keyCode: 40,
  code: "ArrowDown"
}, GS = {
  key: "Delete",
  which: 8,
  keyCode: 8,
  code: "ArrowDecimal"
}, ua = (a, o) => {
  for (let r = 0; r < o.length; r++)
    if (at(a, o[r]))
      return !0;
  return !1;
}, at = (a, {
  key: o,
  which: r,
  keyCode: i,
  code: f
}) => typeof a == "string" ? a === o : typeof a == "number" ? a === r || a === i : a.key && Array.isArray(o) ? o.includes(a.key) : a.key === o || // TODO: When can these checks for deprecated properties be deleted?
// Presumably, the `Key` type should also be pruned of these properties.
a.which === r || a.keyCode === i || a.code === f, zf = () => {
  let a = 0;
  return () => ++a;
}, Ct = typeof window < "u" ? v.useLayoutEffect : v.useEffect, ZS = /* @__PURE__ */ d.createContext(null);
function G0() {
  return d.useContext(ZS);
}
const Z0 = {
  ...d
}, Wu = zf();
let Pu = !1;
const Y0 = "id";
function YS(a = Y0) {
  const o = G0(), [r, i] = v.useState(() => Pu ? `${o ? `${o}-` : ""}${a}-${Wu()}` : null);
  return Ct(() => {
    r === null && i(`${o ? `${o}-` : ""}${a}-${Wu()}`);
  }, [Wu]), v.useEffect(() => {
    Pu === !1 && (Pu = !0);
  }, []), r;
}
function XS(a = Y0) {
  const o = G0();
  return `${o ? `${o}-` : ""}${a}-${Z0.useId()}`;
}
const dt = Z0.useId ? XS : YS;
function QS(a) {
  const o = dt();
  return a ?? o;
}
const st = () => {
}, ef = /* @__PURE__ */ new Map(), $e = (a, o) => (i, f, p, ...m) => {
  if (typeof i[f] > "u")
    return;
  ef.has(p) || ef.set(p, /* @__PURE__ */ new Set());
  const g = ef.get(p);
  return g && !g.has(f) && g.add(f), a(i, f, p, ...m);
}, KS = /* @__PURE__ */ d.forwardRef(({
  as: a,
  children: o,
  className: r,
  href: i,
  disabled: f = !1,
  inline: p = !1,
  visited: m = !1,
  renderIcon: g,
  size: h,
  target: b,
  ...E
}, S) => {
  const w = be(), C = {
    className: oe(`${w}--link`, r, {
      [`${w}--link--disabled`]: f,
      [`${w}--link--inline`]: p,
      [`${w}--link--visited`]: m,
      [`${w}--link--${h}`]: h
    }),
    rel: b === "_blank" ? "noopener" : void 0,
    target: b
  };
  f ? (C.role = "link", C["aria-disabled"] = !0) : C.href = i;
  const A = a ?? "a", $ = (_) => {
    f ? (_.preventDefault(), _.stopPropagation()) : E.onClick && E.onClick(_);
  };
  return /* @__PURE__ */ d.createElement(A, de({
    ref: S
  }, C, E, {
    onClick: $
  }), o, !p && g && /* @__PURE__ */ d.createElement("span", {
    className: `${w}--link__icon`
  }, /* @__PURE__ */ d.createElement(g, null)));
}), jf = KS;
jf.displayName = "Link";
jf.propTypes = {
  /**
   * Provide a custom element or component to render the top-level node for the
   * component.
   */
  as: c.elementType,
  /**
   * Provide the content for the Link
   */
  children: c.node,
  /**
   * Provide a custom className to be applied to the containing `<a>` node
   */
  className: c.string,
  /**
   * Specify if the control should be disabled, or not
   */
  disabled: c.bool,
  /**
   * Provide the `href` attribute for the `<a>` node
   */
  href: c.string,
  /**
   * Specify whether you want the inline version of this control
   */
  inline: c.bool,
  /**
   * A component used to render an icon.
   */
  renderIcon: c.oneOfType([c.func, c.object]),
  /**
   * Specify the size of the Link. Currently supports either `sm`, `md` (default) or `lg` as an option.
   */
  size: c.oneOf(["sm", "md", "lg"]),
  /**
   * Specify whether you want the link to receive visited styles after the link has been clicked
   */
  visited: c.bool
};
const Ki = {}, Hl = (a, o, r) => (i, f, p, ...m) => {
  if (typeof i[f] > "u")
    return null;
  if (!Ki[p] || !Ki[p][f]) {
    Ki[p] = {
      ...Ki[p],
      [f]: !0
    };
    const g = i[f], h = r ? r(g) : null;
    o && !o.includes(g) && (r ? `${g}${f}${p}${h}${g}` : `${g}${f}${p}${o.join(", ")}${g}`);
  }
  return a(i, f, p, ...m);
}, zn = (a) => {
  const o = v.useMemo(() => a, a);
  return v.useCallback((r) => {
    o.forEach((i) => {
      typeof i == "function" ? i(r) : i && (i.current = r);
    });
  }, [o]);
}, tc = (a, o, r) => {
  const i = v.useRef(null);
  v.useEffect(() => {
    i.current = r;
  }, [r]), v.useEffect(() => {
    const f = "current" in a ? a.current : a;
    if (!f) return;
    const p = (m) => {
      i.current && i.current(m);
    };
    return f.addEventListener(o, p), () => {
      f.removeEventListener(o, p);
    };
  }, [a, o]);
}, gc = (a, o) => {
  const r = v.useRef(null);
  v.useEffect(() => {
    r.current = o;
  }, [o]), v.useEffect(() => {
    const i = (f) => {
      r.current && r.current(f);
    };
    return window.addEventListener(a, i), () => {
      window.removeEventListener(a, i);
    };
  }, [a]);
}, FS = {
  "top-left": "top-start",
  "top-right": "top-end",
  "bottom-left": "bottom-start",
  "bottom-right": "bottom-end",
  "left-bottom": "left-end",
  "left-top": "left-start",
  "right-bottom": "right-end",
  "right-top": "right-start"
}, Ul = (a) => FS[a] ?? a;
function bc() {
  return typeof window < "u";
}
function po(a) {
  return X0(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function rn(a) {
  var o;
  return (a == null || (o = a.ownerDocument) == null ? void 0 : o.defaultView) || window;
}
function jn(a) {
  var o;
  return (o = (X0(a) ? a.ownerDocument : a.document) || window.document) == null ? void 0 : o.documentElement;
}
function X0(a) {
  return bc() ? a instanceof Node || a instanceof rn(a).Node : !1;
}
function Vt(a) {
  return bc() ? a instanceof Element || a instanceof rn(a).Element : !1;
}
function Bn(a) {
  return bc() ? a instanceof HTMLElement || a instanceof rn(a).HTMLElement : !1;
}
function q1(a) {
  return !bc() || typeof ShadowRoot > "u" ? !1 : a instanceof ShadowRoot || a instanceof rn(a).ShadowRoot;
}
const JS = /* @__PURE__ */ new Set(["inline", "contents"]);
function Cr(a) {
  const {
    overflow: o,
    overflowX: r,
    overflowY: i,
    display: f
  } = Cn(a);
  return /auto|scroll|overlay|hidden|clip/.test(o + i + r) && !JS.has(f);
}
const WS = /* @__PURE__ */ new Set(["table", "td", "th"]);
function PS(a) {
  return WS.has(po(a));
}
const ew = [":popover-open", ":modal"];
function yc(a) {
  return ew.some((o) => {
    try {
      return a.matches(o);
    } catch {
      return !1;
    }
  });
}
const tw = ["transform", "translate", "scale", "rotate", "perspective"], nw = ["transform", "translate", "scale", "rotate", "perspective", "filter"], lw = ["paint", "layout", "strict", "content"];
function Hf(a) {
  const o = Uf(), r = Vt(a) ? Cn(a) : a;
  return tw.some((i) => r[i] ? r[i] !== "none" : !1) || (r.containerType ? r.containerType !== "normal" : !1) || !o && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !o && (r.filter ? r.filter !== "none" : !1) || nw.some((i) => (r.willChange || "").includes(i)) || lw.some((i) => (r.contain || "").includes(i));
}
function aw(a) {
  let o = zl(a);
  for (; Bn(o) && !oo(o); ) {
    if (Hf(o))
      return o;
    if (yc(o))
      return null;
    o = zl(o);
  }
  return null;
}
function Uf() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const ow = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function oo(a) {
  return ow.has(po(a));
}
function Cn(a) {
  return rn(a).getComputedStyle(a);
}
function vc(a) {
  return Vt(a) ? {
    scrollLeft: a.scrollLeft,
    scrollTop: a.scrollTop
  } : {
    scrollLeft: a.scrollX,
    scrollTop: a.scrollY
  };
}
function zl(a) {
  if (po(a) === "html")
    return a;
  const o = (
    // Step into the shadow DOM of the parent of a slotted node.
    a.assignedSlot || // DOM Element detected.
    a.parentNode || // ShadowRoot detected.
    q1(a) && a.host || // Fallback.
    jn(a)
  );
  return q1(o) ? o.host : o;
}
function Q0(a) {
  const o = zl(a);
  return oo(o) ? a.ownerDocument ? a.ownerDocument.body : a.body : Bn(o) && Cr(o) ? o : Q0(o);
}
function yr(a, o, r) {
  var i;
  o === void 0 && (o = []), r === void 0 && (r = !0);
  const f = Q0(a), p = f === ((i = a.ownerDocument) == null ? void 0 : i.body), m = rn(f);
  if (p) {
    const g = mf(m);
    return o.concat(m, m.visualViewport || [], Cr(f) ? f : [], g && r ? yr(g) : []);
  }
  return o.concat(f, yr(f, [], r));
}
function mf(a) {
  return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
}
const rw = ["top", "right", "bottom", "left"], ro = Math.min, ca = Math.max, nc = Math.round, Fi = Math.floor, $n = (a) => ({
  x: a,
  y: a
}), iw = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, cw = {
  start: "end",
  end: "start"
};
function sw(a, o, r) {
  return ca(a, ro(o, r));
}
function Nr(a, o) {
  return typeof a == "function" ? a(o) : a;
}
function io(a) {
  return a.split("-")[0];
}
function _r(a) {
  return a.split("-")[1];
}
function uw(a) {
  return a === "x" ? "y" : "x";
}
function qf(a) {
  return a === "y" ? "height" : "width";
}
const fw = /* @__PURE__ */ new Set(["top", "bottom"]);
function ia(a) {
  return fw.has(io(a)) ? "y" : "x";
}
function Vf(a) {
  return uw(ia(a));
}
function dw(a, o, r) {
  r === void 0 && (r = !1);
  const i = _r(a), f = Vf(a), p = qf(f);
  let m = f === "x" ? i === (r ? "end" : "start") ? "right" : "left" : i === "start" ? "bottom" : "top";
  return o.reference[p] > o.floating[p] && (m = lc(m)), [m, lc(m)];
}
function mw(a) {
  const o = lc(a);
  return [pf(a), o, pf(o)];
}
function pf(a) {
  return a.replace(/start|end/g, (o) => cw[o]);
}
const V1 = ["left", "right"], k1 = ["right", "left"], pw = ["top", "bottom"], hw = ["bottom", "top"];
function gw(a, o, r) {
  switch (a) {
    case "top":
    case "bottom":
      return r ? o ? k1 : V1 : o ? V1 : k1;
    case "left":
    case "right":
      return o ? pw : hw;
    default:
      return [];
  }
}
function bw(a, o, r, i) {
  const f = _r(a);
  let p = gw(io(a), r === "start", i);
  return f && (p = p.map((m) => m + "-" + f), o && (p = p.concat(p.map(pf)))), p;
}
function lc(a) {
  return a.replace(/left|right|bottom|top/g, (o) => iw[o]);
}
function yw(a) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...a
  };
}
function K0(a) {
  return typeof a != "number" ? yw(a) : {
    top: a,
    right: a,
    bottom: a,
    left: a
  };
}
function ac(a) {
  const {
    x: o,
    y: r,
    width: i,
    height: f
  } = a;
  return {
    width: i,
    height: f,
    top: r,
    left: o,
    right: o + i,
    bottom: r + f,
    x: o,
    y: r
  };
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var vw = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], hf = /* @__PURE__ */ vw.join(","), F0 = typeof Element > "u", vr = F0 ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, oc = !F0 && Element.prototype.getRootNode ? function(a) {
  var o;
  return a == null || (o = a.getRootNode) === null || o === void 0 ? void 0 : o.call(a);
} : function(a) {
  return a == null ? void 0 : a.ownerDocument;
}, rc = function a(o, r) {
  var i;
  r === void 0 && (r = !0);
  var f = o == null || (i = o.getAttribute) === null || i === void 0 ? void 0 : i.call(o, "inert"), p = f === "" || f === "true", m = p || r && o && a(o.parentNode);
  return m;
}, Ew = function(o) {
  var r, i = o == null || (r = o.getAttribute) === null || r === void 0 ? void 0 : r.call(o, "contenteditable");
  return i === "" || i === "true";
}, Sw = function(o, r, i) {
  if (rc(o))
    return [];
  var f = Array.prototype.slice.apply(o.querySelectorAll(hf));
  return r && vr.call(o, hf) && f.unshift(o), f = f.filter(i), f;
}, ww = function a(o, r, i) {
  for (var f = [], p = Array.from(o); p.length; ) {
    var m = p.shift();
    if (!rc(m, !1))
      if (m.tagName === "SLOT") {
        var g = m.assignedElements(), h = g.length ? g : m.children, b = a(h, !0, i);
        i.flatten ? f.push.apply(f, b) : f.push({
          scopeParent: m,
          candidates: b
        });
      } else {
        var E = vr.call(m, hf);
        E && i.filter(m) && (r || !o.includes(m)) && f.push(m);
        var S = m.shadowRoot || // check for an undisclosed shadow
        typeof i.getShadowRoot == "function" && i.getShadowRoot(m), w = !rc(S, !1) && (!i.shadowRootFilter || i.shadowRootFilter(m));
        if (S && w) {
          var x = a(S === !0 ? m.children : S.children, !0, i);
          i.flatten ? f.push.apply(f, x) : f.push({
            scopeParent: m,
            candidates: x
          });
        } else
          p.unshift.apply(p, m.children);
      }
  }
  return f;
}, J0 = function(o) {
  return !isNaN(parseInt(o.getAttribute("tabindex"), 10));
}, W0 = function(o) {
  if (!o)
    throw new Error("No node provided");
  return o.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(o.tagName) || Ew(o)) && !J0(o) ? 0 : o.tabIndex;
}, xw = function(o, r) {
  var i = W0(o);
  return i < 0 && r && !J0(o) ? 0 : i;
}, Tw = function(o, r) {
  return o.tabIndex === r.tabIndex ? o.documentOrder - r.documentOrder : o.tabIndex - r.tabIndex;
}, P0 = function(o) {
  return o.tagName === "INPUT";
}, Cw = function(o) {
  return P0(o) && o.type === "hidden";
}, Nw = function(o) {
  var r = o.tagName === "DETAILS" && Array.prototype.slice.apply(o.children).some(function(i) {
    return i.tagName === "SUMMARY";
  });
  return r;
}, _w = function(o, r) {
  for (var i = 0; i < o.length; i++)
    if (o[i].checked && o[i].form === r)
      return o[i];
}, Aw = function(o) {
  if (!o.name)
    return !0;
  var r = o.form || oc(o), i = function(g) {
    return r.querySelectorAll('input[type="radio"][name="' + g + '"]');
  }, f;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    f = i(window.CSS.escape(o.name));
  else
    try {
      f = i(o.name);
    } catch (m) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", m.message), !1;
    }
  var p = _w(f, o.form);
  return !p || p === o;
}, Rw = function(o) {
  return P0(o) && o.type === "radio";
}, Ow = function(o) {
  return Rw(o) && !Aw(o);
}, Dw = function(o) {
  var r, i = o && oc(o), f = (r = i) === null || r === void 0 ? void 0 : r.host, p = !1;
  if (i && i !== o) {
    var m, g, h;
    for (p = !!((m = f) !== null && m !== void 0 && (g = m.ownerDocument) !== null && g !== void 0 && g.contains(f) || o != null && (h = o.ownerDocument) !== null && h !== void 0 && h.contains(o)); !p && f; ) {
      var b, E, S;
      i = oc(f), f = (b = i) === null || b === void 0 ? void 0 : b.host, p = !!((E = f) !== null && E !== void 0 && (S = E.ownerDocument) !== null && S !== void 0 && S.contains(f));
    }
  }
  return p;
}, I1 = function(o) {
  var r = o.getBoundingClientRect(), i = r.width, f = r.height;
  return i === 0 && f === 0;
}, Mw = function(o, r) {
  var i = r.displayCheck, f = r.getShadowRoot;
  if (getComputedStyle(o).visibility === "hidden")
    return !0;
  var p = vr.call(o, "details>summary:first-of-type"), m = p ? o.parentElement : o;
  if (vr.call(m, "details:not([open]) *"))
    return !0;
  if (!i || i === "full" || i === "legacy-full") {
    if (typeof f == "function") {
      for (var g = o; o; ) {
        var h = o.parentElement, b = oc(o);
        if (h && !h.shadowRoot && f(h) === !0)
          return I1(o);
        o.assignedSlot ? o = o.assignedSlot : !h && b !== o.ownerDocument ? o = b.host : o = h;
      }
      o = g;
    }
    if (Dw(o))
      return !o.getClientRects().length;
    if (i !== "legacy-full")
      return !0;
  } else if (i === "non-zero-area")
    return I1(o);
  return !1;
}, $w = function(o) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(o.tagName))
    for (var r = o.parentElement; r; ) {
      if (r.tagName === "FIELDSET" && r.disabled) {
        for (var i = 0; i < r.children.length; i++) {
          var f = r.children.item(i);
          if (f.tagName === "LEGEND")
            return vr.call(r, "fieldset[disabled] *") ? !0 : !f.contains(o);
        }
        return !0;
      }
      r = r.parentElement;
    }
  return !1;
}, Bw = function(o, r) {
  return !(r.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  rc(r) || Cw(r) || Mw(r, o) || // For a details element with a summary, the summary element gets the focus
  Nw(r) || $w(r));
}, G1 = function(o, r) {
  return !(Ow(r) || W0(r) < 0 || !Bw(o, r));
}, Lw = function(o) {
  var r = parseInt(o.getAttribute("tabindex"), 10);
  return !!(isNaN(r) || r >= 0);
}, zw = function a(o) {
  var r = [], i = [];
  return o.forEach(function(f, p) {
    var m = !!f.scopeParent, g = m ? f.scopeParent : f, h = xw(g, m), b = m ? a(f.candidates) : g;
    h === 0 ? m ? r.push.apply(r, b) : r.push(g) : i.push({
      documentOrder: p,
      tabIndex: h,
      item: f,
      isScope: m,
      content: b
    });
  }), i.sort(Tw).reduce(function(f, p) {
    return p.isScope ? f.push.apply(f, p.content) : f.push(p.content), f;
  }, []).concat(r);
}, jw = function(o, r) {
  r = r || {};
  var i;
  return r.getShadowRoot ? i = ww([o], r.includeContainer, {
    filter: G1.bind(null, r),
    flatten: !1,
    getShadowRoot: r.getShadowRoot,
    shadowRootFilter: Lw
  }) : i = Sw(o, r.includeContainer, G1.bind(null, r)), zw(i);
}, Hw = typeof document < "u", Uw = function() {
}, gf = Hw ? v.useLayoutEffect : Uw;
const qw = {
  ...$0
}, Vw = qw.useInsertionEffect, kw = Vw || ((a) => a());
function Iw(a) {
  const o = v.useRef(() => {
  });
  return kw(() => {
    o.current = a;
  }), v.useCallback(function() {
    for (var r = arguments.length, i = new Array(r), f = 0; f < r; f++)
      i[f] = arguments[f];
    return o.current == null ? void 0 : o.current(...i);
  }, []);
}
var kf = B0();
const Gw = /* @__PURE__ */ fo(kf);
function Z1(a, o, r) {
  let {
    reference: i,
    floating: f
  } = a;
  const p = ia(o), m = Vf(o), g = qf(m), h = io(o), b = p === "y", E = i.x + i.width / 2 - f.width / 2, S = i.y + i.height / 2 - f.height / 2, w = i[g] / 2 - f[g] / 2;
  let x;
  switch (h) {
    case "top":
      x = {
        x: E,
        y: i.y - f.height
      };
      break;
    case "bottom":
      x = {
        x: E,
        y: i.y + i.height
      };
      break;
    case "right":
      x = {
        x: i.x + i.width,
        y: S
      };
      break;
    case "left":
      x = {
        x: i.x - f.width,
        y: S
      };
      break;
    default:
      x = {
        x: i.x,
        y: i.y
      };
  }
  switch (_r(o)) {
    case "start":
      x[m] -= w * (r && b ? -1 : 1);
      break;
    case "end":
      x[m] += w * (r && b ? -1 : 1);
      break;
  }
  return x;
}
const Zw = async (a, o, r) => {
  const {
    placement: i = "bottom",
    strategy: f = "absolute",
    middleware: p = [],
    platform: m
  } = r, g = p.filter(Boolean), h = await (m.isRTL == null ? void 0 : m.isRTL(o));
  let b = await m.getElementRects({
    reference: a,
    floating: o,
    strategy: f
  }), {
    x: E,
    y: S
  } = Z1(b, i, h), w = i, x = {}, N = 0;
  for (let C = 0; C < g.length; C++) {
    const {
      name: A,
      fn: $
    } = g[C], {
      x: _,
      y: z,
      data: D,
      reset: H
    } = await $({
      x: E,
      y: S,
      initialPlacement: i,
      placement: w,
      strategy: f,
      middlewareData: x,
      rects: b,
      platform: m,
      elements: {
        reference: a,
        floating: o
      }
    });
    E = _ ?? E, S = z ?? S, x = {
      ...x,
      [A]: {
        ...x[A],
        ...D
      }
    }, H && N <= 50 && (N++, typeof H == "object" && (H.placement && (w = H.placement), H.rects && (b = H.rects === !0 ? await m.getElementRects({
      reference: a,
      floating: o,
      strategy: f
    }) : H.rects), {
      x: E,
      y: S
    } = Z1(b, w, h)), C = -1);
  }
  return {
    x: E,
    y: S,
    placement: w,
    strategy: f,
    middlewareData: x
  };
};
async function bf(a, o) {
  var r;
  o === void 0 && (o = {});
  const {
    x: i,
    y: f,
    platform: p,
    rects: m,
    elements: g,
    strategy: h
  } = a, {
    boundary: b = "clippingAncestors",
    rootBoundary: E = "viewport",
    elementContext: S = "floating",
    altBoundary: w = !1,
    padding: x = 0
  } = Nr(o, a), N = K0(x), A = g[w ? S === "floating" ? "reference" : "floating" : S], $ = ac(await p.getClippingRect({
    element: (r = await (p.isElement == null ? void 0 : p.isElement(A))) == null || r ? A : A.contextElement || await (p.getDocumentElement == null ? void 0 : p.getDocumentElement(g.floating)),
    boundary: b,
    rootBoundary: E,
    strategy: h
  })), _ = S === "floating" ? {
    x: i,
    y: f,
    width: m.floating.width,
    height: m.floating.height
  } : m.reference, z = await (p.getOffsetParent == null ? void 0 : p.getOffsetParent(g.floating)), D = await (p.isElement == null ? void 0 : p.isElement(z)) ? await (p.getScale == null ? void 0 : p.getScale(z)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, H = ac(p.convertOffsetParentRelativeRectToViewportRelativeRect ? await p.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: g,
    rect: _,
    offsetParent: z,
    strategy: h
  }) : _);
  return {
    top: ($.top - H.top + N.top) / D.y,
    bottom: (H.bottom - $.bottom + N.bottom) / D.y,
    left: ($.left - H.left + N.left) / D.x,
    right: (H.right - $.right + N.right) / D.x
  };
}
const Yw = (a) => ({
  name: "arrow",
  options: a,
  async fn(o) {
    const {
      x: r,
      y: i,
      placement: f,
      rects: p,
      platform: m,
      elements: g,
      middlewareData: h
    } = o, {
      element: b,
      padding: E = 0
    } = Nr(a, o) || {};
    if (b == null)
      return {};
    const S = K0(E), w = {
      x: r,
      y: i
    }, x = Vf(f), N = qf(x), C = await m.getDimensions(b), A = x === "y", $ = A ? "top" : "left", _ = A ? "bottom" : "right", z = A ? "clientHeight" : "clientWidth", D = p.reference[N] + p.reference[x] - w[x] - p.floating[N], H = w[x] - p.reference[x], L = await (m.getOffsetParent == null ? void 0 : m.getOffsetParent(b));
    let j = L ? L[z] : 0;
    (!j || !await (m.isElement == null ? void 0 : m.isElement(L))) && (j = g.floating[z] || p.floating[N]);
    const I = D / 2 - H / 2, F = j / 2 - C[N] / 2 - 1, Z = ro(S[$], F), he = ro(S[_], F), ae = Z, se = j - C[N] - he, ne = j / 2 - C[N] / 2 + I, ge = sw(ae, ne, se), R = !h.arrow && _r(f) != null && ne !== ge && p.reference[N] / 2 - (ne < ae ? Z : he) - C[N] / 2 < 0, J = R ? ne < ae ? ne - ae : ne - se : 0;
    return {
      [x]: w[x] + J,
      data: {
        [x]: ge,
        centerOffset: ne - ge - J,
        ...R && {
          alignmentOffset: J
        }
      },
      reset: R
    };
  }
}), Xw = function(a) {
  return a === void 0 && (a = {}), {
    name: "flip",
    options: a,
    async fn(o) {
      var r, i;
      const {
        placement: f,
        middlewareData: p,
        rects: m,
        initialPlacement: g,
        platform: h,
        elements: b
      } = o, {
        mainAxis: E = !0,
        crossAxis: S = !0,
        fallbackPlacements: w,
        fallbackStrategy: x = "bestFit",
        fallbackAxisSideDirection: N = "none",
        flipAlignment: C = !0,
        ...A
      } = Nr(a, o);
      if ((r = p.arrow) != null && r.alignmentOffset)
        return {};
      const $ = io(f), _ = ia(g), z = io(g) === g, D = await (h.isRTL == null ? void 0 : h.isRTL(b.floating)), H = w || (z || !C ? [lc(g)] : mw(g)), L = N !== "none";
      !w && L && H.push(...bw(g, C, N, D));
      const j = [g, ...H], I = await bf(o, A), F = [];
      let Z = ((i = p.flip) == null ? void 0 : i.overflows) || [];
      if (E && F.push(I[$]), S) {
        const ne = dw(f, m, D);
        F.push(I[ne[0]], I[ne[1]]);
      }
      if (Z = [...Z, {
        placement: f,
        overflows: F
      }], !F.every((ne) => ne <= 0)) {
        var he, ae;
        const ne = (((he = p.flip) == null ? void 0 : he.index) || 0) + 1, ge = j[ne];
        if (ge && (!(S === "alignment" ? _ !== ia(ge) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Z.every((W) => ia(W.placement) === _ ? W.overflows[0] > 0 : !0)))
          return {
            data: {
              index: ne,
              overflows: Z
            },
            reset: {
              placement: ge
            }
          };
        let R = (ae = Z.filter((J) => J.overflows[0] <= 0).sort((J, W) => J.overflows[1] - W.overflows[1])[0]) == null ? void 0 : ae.placement;
        if (!R)
          switch (x) {
            case "bestFit": {
              var se;
              const J = (se = Z.filter((W) => {
                if (L) {
                  const le = ia(W.placement);
                  return le === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  le === "y";
                }
                return !0;
              }).map((W) => [W.placement, W.overflows.filter((le) => le > 0).reduce((le, pe) => le + pe, 0)]).sort((W, le) => W[1] - le[1])[0]) == null ? void 0 : se[0];
              J && (R = J);
              break;
            }
            case "initialPlacement":
              R = g;
              break;
          }
        if (f !== R)
          return {
            reset: {
              placement: R
            }
          };
      }
      return {};
    }
  };
};
function Y1(a, o) {
  return {
    top: a.top - o.height,
    right: a.right - o.width,
    bottom: a.bottom - o.height,
    left: a.left - o.width
  };
}
function X1(a) {
  return rw.some((o) => a[o] >= 0);
}
const Qw = function(a) {
  return a === void 0 && (a = {}), {
    name: "hide",
    options: a,
    async fn(o) {
      const {
        rects: r
      } = o, {
        strategy: i = "referenceHidden",
        ...f
      } = Nr(a, o);
      switch (i) {
        case "referenceHidden": {
          const p = await bf(o, {
            ...f,
            elementContext: "reference"
          }), m = Y1(p, r.reference);
          return {
            data: {
              referenceHiddenOffsets: m,
              referenceHidden: X1(m)
            }
          };
        }
        case "escaped": {
          const p = await bf(o, {
            ...f,
            altBoundary: !0
          }), m = Y1(p, r.floating);
          return {
            data: {
              escapedOffsets: m,
              escaped: X1(m)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Kw = /* @__PURE__ */ new Set(["left", "top"]);
async function Fw(a, o) {
  const {
    placement: r,
    platform: i,
    elements: f
  } = a, p = await (i.isRTL == null ? void 0 : i.isRTL(f.floating)), m = io(r), g = _r(r), h = ia(r) === "y", b = Kw.has(m) ? -1 : 1, E = p && h ? -1 : 1, S = Nr(o, a);
  let {
    mainAxis: w,
    crossAxis: x,
    alignmentAxis: N
  } = typeof S == "number" ? {
    mainAxis: S,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: S.mainAxis || 0,
    crossAxis: S.crossAxis || 0,
    alignmentAxis: S.alignmentAxis
  };
  return g && typeof N == "number" && (x = g === "end" ? N * -1 : N), h ? {
    x: x * E,
    y: w * b
  } : {
    x: w * b,
    y: x * E
  };
}
const Jw = function(a) {
  return a === void 0 && (a = 0), {
    name: "offset",
    options: a,
    async fn(o) {
      var r, i;
      const {
        x: f,
        y: p,
        placement: m,
        middlewareData: g
      } = o, h = await Fw(o, a);
      return m === ((r = g.offset) == null ? void 0 : r.placement) && (i = g.arrow) != null && i.alignmentOffset ? {} : {
        x: f + h.x,
        y: p + h.y,
        data: {
          ...h,
          placement: m
        }
      };
    }
  };
};
function ey(a) {
  const o = Cn(a);
  let r = parseFloat(o.width) || 0, i = parseFloat(o.height) || 0;
  const f = Bn(a), p = f ? a.offsetWidth : r, m = f ? a.offsetHeight : i, g = nc(r) !== p || nc(i) !== m;
  return g && (r = p, i = m), {
    width: r,
    height: i,
    $: g
  };
}
function If(a) {
  return Vt(a) ? a : a.contextElement;
}
function to(a) {
  const o = If(a);
  if (!Bn(o))
    return $n(1);
  const r = o.getBoundingClientRect(), {
    width: i,
    height: f,
    $: p
  } = ey(o);
  let m = (p ? nc(r.width) : r.width) / i, g = (p ? nc(r.height) : r.height) / f;
  return (!m || !Number.isFinite(m)) && (m = 1), (!g || !Number.isFinite(g)) && (g = 1), {
    x: m,
    y: g
  };
}
const Ww = /* @__PURE__ */ $n(0);
function ty(a) {
  const o = rn(a);
  return !Uf() || !o.visualViewport ? Ww : {
    x: o.visualViewport.offsetLeft,
    y: o.visualViewport.offsetTop
  };
}
function Pw(a, o, r) {
  return o === void 0 && (o = !1), !r || o && r !== rn(a) ? !1 : o;
}
function fa(a, o, r, i) {
  o === void 0 && (o = !1), r === void 0 && (r = !1);
  const f = a.getBoundingClientRect(), p = If(a);
  let m = $n(1);
  o && (i ? Vt(i) && (m = to(i)) : m = to(a));
  const g = Pw(p, r, i) ? ty(p) : $n(0);
  let h = (f.left + g.x) / m.x, b = (f.top + g.y) / m.y, E = f.width / m.x, S = f.height / m.y;
  if (p) {
    const w = rn(p), x = i && Vt(i) ? rn(i) : i;
    let N = w, C = mf(N);
    for (; C && i && x !== N; ) {
      const A = to(C), $ = C.getBoundingClientRect(), _ = Cn(C), z = $.left + (C.clientLeft + parseFloat(_.paddingLeft)) * A.x, D = $.top + (C.clientTop + parseFloat(_.paddingTop)) * A.y;
      h *= A.x, b *= A.y, E *= A.x, S *= A.y, h += z, b += D, N = rn(C), C = mf(N);
    }
  }
  return ac({
    width: E,
    height: S,
    x: h,
    y: b
  });
}
function Ec(a, o) {
  const r = vc(a).scrollLeft;
  return o ? o.left + r : fa(jn(a)).left + r;
}
function ny(a, o) {
  const r = a.getBoundingClientRect(), i = r.left + o.scrollLeft - Ec(a, r), f = r.top + o.scrollTop;
  return {
    x: i,
    y: f
  };
}
function ex(a) {
  let {
    elements: o,
    rect: r,
    offsetParent: i,
    strategy: f
  } = a;
  const p = f === "fixed", m = jn(i), g = o ? yc(o.floating) : !1;
  if (i === m || g && p)
    return r;
  let h = {
    scrollLeft: 0,
    scrollTop: 0
  }, b = $n(1);
  const E = $n(0), S = Bn(i);
  if ((S || !S && !p) && ((po(i) !== "body" || Cr(m)) && (h = vc(i)), Bn(i))) {
    const x = fa(i);
    b = to(i), E.x = x.x + i.clientLeft, E.y = x.y + i.clientTop;
  }
  const w = m && !S && !p ? ny(m, h) : $n(0);
  return {
    width: r.width * b.x,
    height: r.height * b.y,
    x: r.x * b.x - h.scrollLeft * b.x + E.x + w.x,
    y: r.y * b.y - h.scrollTop * b.y + E.y + w.y
  };
}
function tx(a) {
  return Array.from(a.getClientRects());
}
function nx(a) {
  const o = jn(a), r = vc(a), i = a.ownerDocument.body, f = ca(o.scrollWidth, o.clientWidth, i.scrollWidth, i.clientWidth), p = ca(o.scrollHeight, o.clientHeight, i.scrollHeight, i.clientHeight);
  let m = -r.scrollLeft + Ec(a);
  const g = -r.scrollTop;
  return Cn(i).direction === "rtl" && (m += ca(o.clientWidth, i.clientWidth) - f), {
    width: f,
    height: p,
    x: m,
    y: g
  };
}
const Q1 = 25;
function lx(a, o) {
  const r = rn(a), i = jn(a), f = r.visualViewport;
  let p = i.clientWidth, m = i.clientHeight, g = 0, h = 0;
  if (f) {
    p = f.width, m = f.height;
    const E = Uf();
    (!E || E && o === "fixed") && (g = f.offsetLeft, h = f.offsetTop);
  }
  const b = Ec(i);
  if (b <= 0) {
    const E = i.ownerDocument, S = E.body, w = getComputedStyle(S), x = E.compatMode === "CSS1Compat" && parseFloat(w.marginLeft) + parseFloat(w.marginRight) || 0, N = Math.abs(i.clientWidth - S.clientWidth - x);
    N <= Q1 && (p -= N);
  } else b <= Q1 && (p += b);
  return {
    width: p,
    height: m,
    x: g,
    y: h
  };
}
const ax = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ox(a, o) {
  const r = fa(a, !0, o === "fixed"), i = r.top + a.clientTop, f = r.left + a.clientLeft, p = Bn(a) ? to(a) : $n(1), m = a.clientWidth * p.x, g = a.clientHeight * p.y, h = f * p.x, b = i * p.y;
  return {
    width: m,
    height: g,
    x: h,
    y: b
  };
}
function K1(a, o, r) {
  let i;
  if (o === "viewport")
    i = lx(a, r);
  else if (o === "document")
    i = nx(jn(a));
  else if (Vt(o))
    i = ox(o, r);
  else {
    const f = ty(a);
    i = {
      x: o.x - f.x,
      y: o.y - f.y,
      width: o.width,
      height: o.height
    };
  }
  return ac(i);
}
function ly(a, o) {
  const r = zl(a);
  return r === o || !Vt(r) || oo(r) ? !1 : Cn(r).position === "fixed" || ly(r, o);
}
function rx(a, o) {
  const r = o.get(a);
  if (r)
    return r;
  let i = yr(a, [], !1).filter((g) => Vt(g) && po(g) !== "body"), f = null;
  const p = Cn(a).position === "fixed";
  let m = p ? zl(a) : a;
  for (; Vt(m) && !oo(m); ) {
    const g = Cn(m), h = Hf(m);
    !h && g.position === "fixed" && (f = null), (p ? !h && !f : !h && g.position === "static" && !!f && ax.has(f.position) || Cr(m) && !h && ly(a, m)) ? i = i.filter((E) => E !== m) : f = g, m = zl(m);
  }
  return o.set(a, i), i;
}
function ix(a) {
  let {
    element: o,
    boundary: r,
    rootBoundary: i,
    strategy: f
  } = a;
  const m = [...r === "clippingAncestors" ? yc(o) ? [] : rx(o, this._c) : [].concat(r), i], g = m[0], h = m.reduce((b, E) => {
    const S = K1(o, E, f);
    return b.top = ca(S.top, b.top), b.right = ro(S.right, b.right), b.bottom = ro(S.bottom, b.bottom), b.left = ca(S.left, b.left), b;
  }, K1(o, g, f));
  return {
    width: h.right - h.left,
    height: h.bottom - h.top,
    x: h.left,
    y: h.top
  };
}
function cx(a) {
  const {
    width: o,
    height: r
  } = ey(a);
  return {
    width: o,
    height: r
  };
}
function sx(a, o, r) {
  const i = Bn(o), f = jn(o), p = r === "fixed", m = fa(a, !0, p, o);
  let g = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const h = $n(0);
  function b() {
    h.x = Ec(f);
  }
  if (i || !i && !p)
    if ((po(o) !== "body" || Cr(f)) && (g = vc(o)), i) {
      const x = fa(o, !0, p, o);
      h.x = x.x + o.clientLeft, h.y = x.y + o.clientTop;
    } else f && b();
  p && !i && f && b();
  const E = f && !i && !p ? ny(f, g) : $n(0), S = m.left + g.scrollLeft - h.x - E.x, w = m.top + g.scrollTop - h.y - E.y;
  return {
    x: S,
    y: w,
    width: m.width,
    height: m.height
  };
}
function tf(a) {
  return Cn(a).position === "static";
}
function F1(a, o) {
  if (!Bn(a) || Cn(a).position === "fixed")
    return null;
  if (o)
    return o(a);
  let r = a.offsetParent;
  return jn(a) === r && (r = r.ownerDocument.body), r;
}
function ay(a, o) {
  const r = rn(a);
  if (yc(a))
    return r;
  if (!Bn(a)) {
    let f = zl(a);
    for (; f && !oo(f); ) {
      if (Vt(f) && !tf(f))
        return f;
      f = zl(f);
    }
    return r;
  }
  let i = F1(a, o);
  for (; i && PS(i) && tf(i); )
    i = F1(i, o);
  return i && oo(i) && tf(i) && !Hf(i) ? r : i || aw(a) || r;
}
const ux = async function(a) {
  const o = this.getOffsetParent || ay, r = this.getDimensions, i = await r(a.floating);
  return {
    reference: sx(a.reference, await o(a.floating), a.strategy),
    floating: {
      x: 0,
      y: 0,
      width: i.width,
      height: i.height
    }
  };
};
function fx(a) {
  return Cn(a).direction === "rtl";
}
const dx = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ex,
  getDocumentElement: jn,
  getClippingRect: ix,
  getOffsetParent: ay,
  getElementRects: ux,
  getClientRects: tx,
  getDimensions: cx,
  getScale: to,
  isElement: Vt,
  isRTL: fx
};
function oy(a, o) {
  return a.x === o.x && a.y === o.y && a.width === o.width && a.height === o.height;
}
function mx(a, o) {
  let r = null, i;
  const f = jn(a);
  function p() {
    var g;
    clearTimeout(i), (g = r) == null || g.disconnect(), r = null;
  }
  function m(g, h) {
    g === void 0 && (g = !1), h === void 0 && (h = 1), p();
    const b = a.getBoundingClientRect(), {
      left: E,
      top: S,
      width: w,
      height: x
    } = b;
    if (g || o(), !w || !x)
      return;
    const N = Fi(S), C = Fi(f.clientWidth - (E + w)), A = Fi(f.clientHeight - (S + x)), $ = Fi(E), z = {
      rootMargin: -N + "px " + -C + "px " + -A + "px " + -$ + "px",
      threshold: ca(0, ro(1, h)) || 1
    };
    let D = !0;
    function H(L) {
      const j = L[0].intersectionRatio;
      if (j !== h) {
        if (!D)
          return m();
        j ? m(!1, j) : i = setTimeout(() => {
          m(!1, 1e-7);
        }, 1e3);
      }
      j === 1 && !oy(b, a.getBoundingClientRect()) && m(), D = !1;
    }
    try {
      r = new IntersectionObserver(H, {
        ...z,
        // Handle <iframe>s
        root: f.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(H, z);
    }
    r.observe(a);
  }
  return m(!0), p;
}
function ry(a, o, r, i) {
  i === void 0 && (i = {});
  const {
    ancestorScroll: f = !0,
    ancestorResize: p = !0,
    elementResize: m = typeof ResizeObserver == "function",
    layoutShift: g = typeof IntersectionObserver == "function",
    animationFrame: h = !1
  } = i, b = If(a), E = f || p ? [...b ? yr(b) : [], ...yr(o)] : [];
  E.forEach(($) => {
    f && $.addEventListener("scroll", r, {
      passive: !0
    }), p && $.addEventListener("resize", r);
  });
  const S = b && g ? mx(b, r) : null;
  let w = -1, x = null;
  m && (x = new ResizeObserver(($) => {
    let [_] = $;
    _ && _.target === b && x && (x.unobserve(o), cancelAnimationFrame(w), w = requestAnimationFrame(() => {
      var z;
      (z = x) == null || z.observe(o);
    })), r();
  }), b && !h && x.observe(b), x.observe(o));
  let N, C = h ? fa(a) : null;
  h && A();
  function A() {
    const $ = fa(a);
    C && !oy(C, $) && r(), C = $, N = requestAnimationFrame(A);
  }
  return r(), () => {
    var $;
    E.forEach((_) => {
      f && _.removeEventListener("scroll", r), p && _.removeEventListener("resize", r);
    }), S == null || S(), ($ = x) == null || $.disconnect(), x = null, h && cancelAnimationFrame(N);
  };
}
const px = Jw, hx = Xw, gx = Qw, J1 = Yw, bx = (a, o, r) => {
  const i = /* @__PURE__ */ new Map(), f = {
    platform: dx,
    ...r
  }, p = {
    ...f.platform,
    _c: i
  };
  return Zw(a, o, {
    ...f,
    platform: p
  });
};
var yx = typeof document < "u", vx = function() {
}, Pi = yx ? v.useLayoutEffect : vx;
function ic(a, o) {
  if (a === o)
    return !0;
  if (typeof a != typeof o)
    return !1;
  if (typeof a == "function" && a.toString() === o.toString())
    return !0;
  let r, i, f;
  if (a && o && typeof a == "object") {
    if (Array.isArray(a)) {
      if (r = a.length, r !== o.length) return !1;
      for (i = r; i-- !== 0; )
        if (!ic(a[i], o[i]))
          return !1;
      return !0;
    }
    if (f = Object.keys(a), r = f.length, r !== Object.keys(o).length)
      return !1;
    for (i = r; i-- !== 0; )
      if (!{}.hasOwnProperty.call(o, f[i]))
        return !1;
    for (i = r; i-- !== 0; ) {
      const p = f[i];
      if (!(p === "_owner" && a.$$typeof) && !ic(a[p], o[p]))
        return !1;
    }
    return !0;
  }
  return a !== a && o !== o;
}
function iy(a) {
  return typeof window > "u" ? 1 : (a.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function W1(a, o) {
  const r = iy(a);
  return Math.round(o * r) / r;
}
function nf(a) {
  const o = v.useRef(a);
  return Pi(() => {
    o.current = a;
  }), o;
}
function Ex(a) {
  a === void 0 && (a = {});
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: f,
    elements: {
      reference: p,
      floating: m
    } = {},
    transform: g = !0,
    whileElementsMounted: h,
    open: b
  } = a, [E, S] = v.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: o,
    middlewareData: {},
    isPositioned: !1
  }), [w, x] = v.useState(i);
  ic(w, i) || x(i);
  const [N, C] = v.useState(null), [A, $] = v.useState(null), _ = v.useCallback((W) => {
    W !== L.current && (L.current = W, C(W));
  }, []), z = v.useCallback((W) => {
    W !== j.current && (j.current = W, $(W));
  }, []), D = p || N, H = m || A, L = v.useRef(null), j = v.useRef(null), I = v.useRef(E), F = h != null, Z = nf(h), he = nf(f), ae = nf(b), se = v.useCallback(() => {
    if (!L.current || !j.current)
      return;
    const W = {
      placement: o,
      strategy: r,
      middleware: w
    };
    he.current && (W.platform = he.current), bx(L.current, j.current, W).then((le) => {
      const pe = {
        ...le,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: ae.current !== !1
      };
      ne.current && !ic(I.current, pe) && (I.current = pe, kf.flushSync(() => {
        S(pe);
      }));
    });
  }, [w, o, r, he, ae]);
  Pi(() => {
    b === !1 && I.current.isPositioned && (I.current.isPositioned = !1, S((W) => ({
      ...W,
      isPositioned: !1
    })));
  }, [b]);
  const ne = v.useRef(!1);
  Pi(() => (ne.current = !0, () => {
    ne.current = !1;
  }), []), Pi(() => {
    if (D && (L.current = D), H && (j.current = H), D && H) {
      if (Z.current)
        return Z.current(D, H, se);
      se();
    }
  }, [D, H, se, Z, F]);
  const ge = v.useMemo(() => ({
    reference: L,
    floating: j,
    setReference: _,
    setFloating: z
  }), [_, z]), R = v.useMemo(() => ({
    reference: D,
    floating: H
  }), [D, H]), J = v.useMemo(() => {
    const W = {
      position: r,
      left: 0,
      top: 0
    };
    if (!R.floating)
      return W;
    const le = W1(R.floating, E.x), pe = W1(R.floating, E.y);
    return g ? {
      ...W,
      transform: "translate(" + le + "px, " + pe + "px)",
      ...iy(R.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: le,
      top: pe
    };
  }, [r, g, R.floating, E.x, E.y]);
  return v.useMemo(() => ({
    ...E,
    update: se,
    refs: ge,
    elements: R,
    floatingStyles: J
  }), [E, se, ge, R, J]);
}
const Sx = (a) => {
  function o(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: a,
    fn(r) {
      const {
        element: i,
        padding: f
      } = typeof a == "function" ? a(r) : a;
      return i && o(i) ? i.current != null ? J1({
        element: i.current,
        padding: f
      }).fn(r) : {} : i ? J1({
        element: i,
        padding: f
      }).fn(r) : {};
    }
  };
}, wx = (a, o) => ({
  ...px(a),
  options: [a, o]
}), cy = (a, o) => ({
  ...hx(a),
  options: [a, o]
}), xx = (a, o) => ({
  ...gx(a),
  options: [a, o]
}), Tx = (a, o) => ({
  ...Sx(a),
  options: [a, o]
});
function Cx(a) {
  const o = v.useRef(void 0), r = v.useCallback((i) => {
    const f = a.map((p) => {
      if (p != null) {
        if (typeof p == "function") {
          const m = p, g = m(i);
          return typeof g == "function" ? g : () => {
            m(null);
          };
        }
        return p.current = i, () => {
          p.current = null;
        };
      }
    });
    return () => {
      f.forEach((p) => p == null ? void 0 : p());
    };
  }, a);
  return v.useMemo(() => a.every((i) => i == null) ? null : (i) => {
    o.current && (o.current(), o.current = void 0), i != null && (o.current = r(i));
  }, a);
}
const Nx = {
  ...$0
};
let P1 = !1, _x = 0;
const e0 = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + _x++
);
function Ax() {
  const [a, o] = v.useState(() => P1 ? e0() : void 0);
  return gf(() => {
    a == null && o(e0());
  }, []), v.useEffect(() => {
    P1 = !0;
  }, []), a;
}
const Rx = Nx.useId, Ox = Rx || Ax;
function Dx() {
  const a = /* @__PURE__ */ new Map();
  return {
    emit(o, r) {
      var i;
      (i = a.get(o)) == null || i.forEach((f) => f(r));
    },
    on(o, r) {
      a.has(o) || a.set(o, /* @__PURE__ */ new Set()), a.get(o).add(r);
    },
    off(o, r) {
      var i;
      (i = a.get(o)) == null || i.delete(r);
    }
  };
}
const Mx = /* @__PURE__ */ v.createContext(null), $x = /* @__PURE__ */ v.createContext(null), Bx = () => {
  var a;
  return ((a = v.useContext(Mx)) == null ? void 0 : a.id) || null;
}, Lx = () => v.useContext($x);
function zx(a) {
  const {
    open: o = !1,
    onOpenChange: r,
    elements: i
  } = a, f = Ox(), p = v.useRef({}), [m] = v.useState(() => Dx()), g = Bx() != null, [h, b] = v.useState(i.reference), E = Iw((x, N, C) => {
    p.current.openEvent = x ? N : void 0, m.emit("openchange", {
      open: x,
      event: N,
      reason: C,
      nested: g
    }), r == null || r(x, N, C);
  }), S = v.useMemo(() => ({
    setPositionReference: b
  }), []), w = v.useMemo(() => ({
    reference: h || i.reference || null,
    floating: i.floating || null,
    domReference: i.reference
  }), [h, i.reference, i.floating]);
  return v.useMemo(() => ({
    dataRef: p,
    open: o,
    onOpenChange: E,
    elements: w,
    events: m,
    floatingId: f,
    refs: S
  }), [o, E, w, m, f, S]);
}
function sy(a) {
  a === void 0 && (a = {});
  const {
    nodeId: o
  } = a, r = zx({
    ...a,
    elements: {
      reference: null,
      floating: null,
      ...a.elements
    }
  }), i = a.rootContext || r, f = i.elements, [p, m] = v.useState(null), [g, h] = v.useState(null), E = (f == null ? void 0 : f.domReference) || p, S = v.useRef(null), w = Lx();
  gf(() => {
    E && (S.current = E);
  }, [E]);
  const x = Ex({
    ...a,
    elements: {
      ...f,
      ...g && {
        reference: g
      }
    }
  }), N = v.useCallback((z) => {
    const D = Vt(z) ? {
      getBoundingClientRect: () => z.getBoundingClientRect(),
      getClientRects: () => z.getClientRects(),
      contextElement: z
    } : z;
    h(D), x.refs.setReference(D);
  }, [x.refs]), C = v.useCallback((z) => {
    (Vt(z) || z === null) && (S.current = z, m(z)), (Vt(x.refs.reference.current) || x.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    z !== null && !Vt(z)) && x.refs.setReference(z);
  }, [x.refs]), A = v.useMemo(() => ({
    ...x.refs,
    setReference: C,
    setPositionReference: N,
    domReference: S
  }), [x.refs, C, N]), $ = v.useMemo(() => ({
    ...x.elements,
    domReference: E
  }), [x.elements, E]), _ = v.useMemo(() => ({
    ...x,
    ...i,
    refs: A,
    elements: $,
    nodeId: o
  }), [x, A, $, o, i]);
  return gf(() => {
    i.dataRef.current.floatingContext = _;
    const z = w == null ? void 0 : w.nodesRef.current.find((D) => D.id === o);
    z && (z.context = _);
  }), v.useMemo(() => ({
    ...x,
    context: _,
    refs: A,
    elements: $
  }), [x, A, $, _]);
}
const jx = /* @__PURE__ */ v.createContext(Tn);
c.node, $e(c.objectOf(c.bool)), c.bool, c.bool, c.bool, c.bool, c.bool, c.bool, c.bool, c.bool, c.bool, c.bool;
const zt = (a) => v.useContext(jx).enabled(a), uy = /* @__PURE__ */ d.createContext({
  setFloating: {
    current: null
  },
  caretRef: {
    current: null
  },
  autoAlign: null
}), Ar = /* @__PURE__ */ d.forwardRef(function({
  isTabTip: o,
  align: r = o ? "bottom-start" : "bottom",
  as: i = "span",
  autoAlign: f = !1,
  autoAlignBoundary: p,
  backgroundToken: m = "layer",
  caret: g = !o,
  className: h,
  children: b,
  border: E = !1,
  dropShadow: S = !0,
  highContrast: w = !1,
  onRequestClose: x,
  open: N,
  alignmentAxisOffset: C,
  ...A
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
}, $) {
  var q;
  const _ = be(), z = v.useRef(null), D = v.useRef(null), H = v.useRef(null), L = zt("enable-v12-dynamic-floating-styles") || f, j = v.useRef(!1);
  let I = Ul(r);
  tc(H, "mousedown", (P) => {
    var te;
    const G = P.target;
    j.current = ((te = he.floating.current) == null ? void 0 : te.contains(G)) || !1, j.current && setTimeout(() => {
      j.current = !1;
    }, 0);
  }), tc(H, "focusout", (P) => {
    var te;
    const G = P.relatedTarget;
    if (G) {
      if (G && !((te = H.current) != null && te.contains(G))) {
        const V = L && he.floating.current ? !he.floating.current.contains(G) : !0, Q = G && H.current && G.contains(H.current);
        V && !Q && (x == null || x());
      }
    } else {
      if (j.current) {
        j.current = !1;
        return;
      }
      x == null || x();
    }
  }), gc("click", ({
    target: P
  }) => {
    var G;
    N && P instanceof Node && !((G = H.current) != null && G.contains(P)) && (x == null || x());
  });
  const F = d.Children.toArray(b).some((P) => {
    var G, te, V, Q;
    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
      ((te = (G = P == null ? void 0 : P.props) == null ? void 0 : G.className) == null ? void 0 : te.includes("slug")) || // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
      ((Q = (V = P == null ? void 0 : P.props) == null ? void 0 : V.className) == null ? void 0 : Q.includes("ai-label"))
    );
  }) ? 7 : 6, Z = v.useRef({
    offset: 10,
    caretHeight: F
  });
  Ct(() => {
    if (g && H.current) {
      const P = window.getComputedStyle(H.current, null), G = P.getPropertyValue(`--${_}-popover-offset`), te = P.getPropertyValue(`--${_}-popover-caret-height`);
      G && (Z.current.offset = G.includes("px") ? Number(G.split("px", 1)[0]) * 1 : Number(G.split("rem", 1)[0]) * 16), te && (Z.current.caretHeight = te.includes("px") ? Number(te.split("px", 1)[0]) * 1 : Number(te.split("rem", 1)[0]) * 16);
    }
  });
  const {
    refs: he,
    floatingStyles: ae,
    placement: se,
    middlewareData: ne,
    elements: ge,
    update: R
  } = sy(
    L ? {
      placement: I,
      // The floating element is positioned relative to its nearest
      // containing block (usually the viewport). It will in many cases also
      // “break” the floating element out of a clipping ancestor.
      // https://floating-ui.com/docs/misc#clipping
      strategy: "fixed",
      // Middleware order matters, arrow should be last
      middleware: [wx(o ? 0 : {
        alignmentAxis: C,
        // Use 4px spacing when no caret, otherwise use the caret offset
        mainAxis: g ? (q = Z == null ? void 0 : Z.current) == null ? void 0 : q.offset : 4
      }), f && cy({
        fallbackPlacements: o ? I.includes("bottom") ? ["bottom-start", "bottom-end", "top-start", "top-end"] : ["top-start", "top-end", "bottom-start", "bottom-end"] : I.includes("bottom") ? ["bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "top", "top-start", "top-end"] : ["top", "top-start", "top-end", "left", "left-start", "left-end", "right", "right-start", "right-end", "bottom", "bottom-start", "bottom-end"],
        fallbackStrategy: "initialPlacement",
        fallbackAxisSideDirection: "start",
        boundary: p
      }), Tx({
        element: D,
        padding: 16
      }), f && xx()]
    } : {}
    // When autoAlign is turned off & the `enable-v12-dynamic-floating-styles` feature flag is not
    // enabled, floating-ui will not be used
  );
  v.useEffect(() => {
    if (L && N && ge.reference && ge.floating)
      return ry(ge.reference, ge.floating, R);
  }, [L, N, ge, R]);
  const J = v.useMemo(() => ({
    floating: z,
    setFloating: he.setFloating,
    caretRef: D,
    autoAlign: f
  }), [he.setFloating, f]);
  o && (["bottom-start", "bottom-end"].includes(I) || (I = "bottom-start")), v.useEffect(() => {
    var P, G;
    if (L) {
      const te = {
        ...ae,
        visibility: (P = ne.hide) != null && P.referenceHidden ? "hidden" : "visible"
      };
      if (Object.keys(te).forEach((V) => {
        he.floating.current && (he.floating.current.style[V] = te[V]);
      }), g && ne && ne.arrow && (D != null && D.current)) {
        const {
          x: V,
          y: Q
        } = ne.arrow, me = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[se.split("-")[0]];
        D.current.style.left = V != null ? `${V}px` : "", D.current.style.top = Q != null ? `${Q}px` : "", D.current.style.right = "", D.current.style.bottom = "", me && (D.current.style[me] = `${-((G = Z == null ? void 0 : Z.current) == null ? void 0 : G.caretHeight)}px`);
      }
    }
  }, [ae, he.floating, L, ne, se, g]);
  const W = zn([$, H]), le = f && se !== I ? se : I, pe = oe({
    [`${_}--popover-container`]: !0,
    [`${_}--popover--caret`]: g,
    [`${_}--popover--drop-shadow`]: S,
    [`${_}--popover--border`]: E,
    [`${_}--popover--high-contrast`]: w,
    [`${_}--popover--open`]: N,
    [`${_}--popover--auto-align ${_}--autoalign`]: L,
    [`${_}--popover--${le}`]: !0,
    [`${_}--popover--tab-tip`]: o,
    [`${_}--popover--background-token__background`]: m === "background" && !w
  }, h), O = d.Children.map(b, (P) => {
    var ie, ve;
    const G = P, te = (ie = G == null ? void 0 : G.type) == null ? void 0 : ie.displayName, V = (G == null ? void 0 : G.type) === "button", Q = L && te && ["ToggletipButton"].includes(te), me = L && !["ToggletipContent", "PopoverContent"].includes(te);
    if (/* @__PURE__ */ d.isValidElement(G) && (V || Q || me)) {
      const Ne = (ve = G == null ? void 0 : G.props) == null ? void 0 : ve.className, Te = (G == null ? void 0 : G.props).ref, Oe = oe(`${_}--popover--tab-tip__button`, Ne);
      return /* @__PURE__ */ d.cloneElement(G, {
        className: o && (G == null ? void 0 : G.type) === "button" ? Oe : Ne || "",
        // With cloneElement, if you pass a `ref`, it overrides the original ref.
        // https://react.dev/reference/react/cloneElement#parameters
        // The block below works around this and ensures that the original ref is still
        // called while allowing the floating-ui reference element to be set as well.
        // `useMergedRefs` can't be used here because hooks can't be called from within a callback.
        // More here: https://github.com/facebook/react/issues/8873#issuecomment-489579878
        ref: (Ee) => {
          (L && (G == null ? void 0 : G.type) !== ho || L && (G == null ? void 0 : G.type.displayName) === "ToggletipButton") && he.setReference(Ee), typeof Te == "function" ? Te(Ee) : Te != null && (Te.current = Ee);
        }
      });
    } else
      return G;
  });
  return /* @__PURE__ */ d.createElement(uy.Provider, {
    value: J
  }, /* @__PURE__ */ d.createElement(i, de({}, A, {
    className: pe,
    ref: W
  }), L || o ? O : b));
});
Ar.propTypes = {
  /**
   * Specify how the popover should align with the trigger element
   */
  align: Hl(c.oneOf([
    "top",
    "top-left",
    // deprecated use top-start instead
    "top-right",
    // deprecated use top-end instead
    "bottom",
    "bottom-left",
    // deprecated use bottom-start instead
    "bottom-right",
    // deprecated use bottom-end instead
    "left",
    "left-bottom",
    // deprecated use left-end instead
    "left-top",
    // deprecated use left-start instead
    "right",
    "right-bottom",
    // deprecated use right-end instead
    "right-top",
    // deprecated use right-start instead
    // new values to match floating-ui
    "top-start",
    "top-end",
    "bottom-start",
    "bottom-end",
    "left-end",
    "left-start",
    "right-end",
    "right-start"
  ]), ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"], Ul),
  /**
   * **Experimental:** Provide an offset value for alignment axis. Only takes effect when `autoalign` is enabled.
   */
  alignmentAxisOffset: c.number,
  /**
   * Provide a custom element or component to render the top-level node for the
   * component.
   */
  as: c.oneOfType([c.string, c.elementType]),
  /**
   * Will auto-align the popover on first render if it is not visible. This prop
   * is currently experimental and is subject to future changes. Requires
   * React v17+
   * @see https://github.com/carbon-design-system/carbon/issues/18714
   */
  autoAlign: c.bool,
  /**
   * Specify the background token to use. Default is 'layer'.
   */
  backgroundToken: c.oneOf(["layer", "background"]),
  /**
   * Specify a bounding element to be used for autoAlign calculations. The viewport is used by default. This prop is currently experimental and is subject to future changes.
   */
  autoAlignBoundary: c.oneOfType([c.oneOf(["clippingAncestors"]), c.elementType, c.arrayOf(c.elementType), c.exact({
    x: c.number.isRequired,
    y: c.number.isRequired,
    width: c.number.isRequired,
    height: c.number.isRequired
  })]),
  /**
   * Specify whether a caret should be rendered
   */
  caret: c.bool,
  /**
   * Specify whether a border should be rendered on the popover
   */
  border: c.bool,
  /**
   * Provide elements to be rendered inside of the component
   */
  children: c.node,
  /**
   * Provide a custom class name to be added to the outermost node in the
   * component
   */
  className: c.string,
  /**
   * Specify whether a drop shadow should be rendered on the popover
   */
  dropShadow: c.bool,
  /**
   * Render the component using the high-contrast variant
   */
  highContrast: c.bool,
  /**
   * Render the component using the tab tip variant
   */
  isTabTip: c.bool,
  /**
   * Specify a handler for closing popover.
   * The handler should take care of closing the popover, e.g. changing the `open` prop.
   */
  onRequestClose: c.func,
  /**
   * Specify whether the component is currently open or closed
   */
  open: c.bool.isRequired
};
const Hx = v.forwardRef, ho = Hx((a, o) => {
  const {
    className: r,
    children: i,
    ...f
  } = a, p = be(), {
    setFloating: m,
    caretRef: g,
    autoAlign: h
  } = d.useContext(uy), b = zn([m, o]), E = zt("enable-v12-dynamic-floating-styles") || h;
  return /* @__PURE__ */ d.createElement("span", de({}, f, {
    className: `${p}--popover`
  }), /* @__PURE__ */ d.createElement("span", {
    className: oe(`${p}--popover-content`, r),
    ref: b
  }, i, E && /* @__PURE__ */ d.createElement("span", {
    className: oe({
      [`${p}--popover-caret`]: !0,
      [`${p}--popover--auto-align`]: !0
    }),
    ref: g
  })), !E && /* @__PURE__ */ d.createElement("span", {
    className: oe({
      [`${p}--popover-caret`]: !0
    }),
    ref: g
  }));
});
ho.displayName = "PopoverContent";
ho.propTypes = {
  /**
   * Provide elements to be rendered inside of the component
   */
  children: c.node,
  /**
   * Provide a custom class name to be added to the outermost node in the
   * component
   */
  className: c.string
};
const fy = ({
  align: a = "bottom",
  autoAlign: o,
  className: r,
  children: i,
  definition: f,
  defaultOpen: p = !1,
  id: m,
  openOnHover: g,
  tooltipText: h,
  triggerClassName: b,
  ...E
}) => {
  const [S, w] = v.useState(p), x = be(), N = QS(m);
  function C(A) {
    S && at(A, al) && (A.stopPropagation(), w(!1));
  }
  return /* @__PURE__ */ d.createElement(Ar, {
    align: a,
    className: r,
    autoAlign: o,
    dropShadow: !1,
    highContrast: !0,
    onMouseLeave: () => {
      w(!1);
    },
    onMouseEnter: () => {
      g && w(!0);
    },
    onFocus: () => {
      w(!0);
    },
    open: S
  }, /* @__PURE__ */ d.createElement("button", de({}, E, {
    className: oe(`${x}--definition-term`, b),
    "aria-controls": N,
    "aria-describedby": N,
    "aria-expanded": S,
    onBlur: () => {
      w(!1);
    },
    onMouseDown: (A) => {
      A.button === 0 && w(!S);
    },
    onKeyDown: C,
    type: "button"
  }), i), /* @__PURE__ */ d.createElement(ho, {
    className: `${x}--definition-tooltip`,
    id: N
  }, h ?? f));
};
fy.propTypes = {
  /**
   * Specify how the trigger should align with the tooltip
   */
  align: c.oneOf([
    "top",
    "top-left",
    // deprecated use top-start instead
    "top-right",
    // deprecated use top-end instead
    "bottom",
    "bottom-left",
    // deprecated use bottom-start instead
    "bottom-right",
    // deprecated use bottom-end instead
    "left",
    "left-bottom",
    // deprecated use left-end instead
    "left-top",
    // deprecated use left-start instead
    "right",
    "right-bottom",
    // deprecated use right-end instead
    "right-top",
    // deprecated use right-start instead
    // new values to match floating-ui
    "top-start",
    "top-end",
    "bottom-start",
    "bottom-end",
    "left-end",
    "left-start",
    "right-end",
    "right-start"
  ]),
  /**
   * Will auto-align the popover. This prop is currently experimental and is
   * subject to future changes. Requires React v17+
   * @see https://github.com/carbon-design-system/carbon/issues/18714
   */
  autoAlign: c.bool,
  /**
   * The `children` prop will be used as the value that is being defined
   */
  children: c.node.isRequired,
  /**
   * Specify an optional className to be applied to the container node
   */
  className: c.string,
  /**
   * Specify whether the tooltip should be open when it first renders
   */
  defaultOpen: c.bool,
  /**
   * The `definition` prop is used as the content inside of the tooltip that
   * appears when a user interacts with the element rendered by the `children`
   * prop
   */
  definition: c.node.isRequired,
  /**
   * Provide a value that will be assigned as the id of the tooltip
   */
  id: c.string,
  /**
   * Specifies whether or not the `DefinitionTooltip` should open on hover or not
   */
  openOnHover: c.bool,
  /**
   * [Deprecated in v11] Please use the `definition` prop instead.
   *
   * Provide the text that will be displayed in the tooltip when it is rendered.
   */
  tooltipText: $e(c.node),
  /**
   * The CSS class name of the trigger element
   */
  triggerClassName: c.string
};
function Ux(a) {
  const [o, r] = v.useState(a), i = v.useRef(null), f = v.useCallback((p, m = 0) => {
    if (window.clearTimeout(i.current ?? void 0), i.current = null, m === 0) {
      r(p);
      return;
    }
    i.current = window.setTimeout(() => {
      r(p), i.current = null;
    }, m);
  }, []);
  return v.useEffect(() => () => {
    window.clearTimeout(i.current ?? void 0);
  }, []), [o, f];
}
const Gf = (a, o = "component should have no interactive child nodes") => {
  v.useEffect(() => {
  }, [o, a]);
}, yf = (a) => {
  if (!a || !a.childNodes)
    return null;
  if (qx(a))
    return a;
  for (const o of a.childNodes)
    if (o instanceof HTMLElement) {
      const r = yf(o);
      if (r)
        return r;
    }
  return null;
}, vf = (a) => {
  if (!a || !a.childNodes)
    return null;
  if (a.getAttribute("role") && a.getAttribute("role") !== "")
    return a;
  for (const o of a.childNodes)
    if (o instanceof HTMLElement) {
      const r = vf(o);
      if (r)
        return r;
    }
  return null;
}, qx = (a) => {
  if (a.tabIndex === void 0 || a.tabIndex < 0 || (a instanceof HTMLButtonElement || a instanceof HTMLInputElement || a instanceof HTMLSelectElement || a instanceof HTMLTextAreaElement) && a.disabled)
    return !1;
  switch (a.nodeName) {
    case "A":
      return a instanceof HTMLAnchorElement && !!a.href && a.rel !== "ignore";
    case "INPUT":
      return a instanceof HTMLInputElement && a.type !== "hidden";
    default:
      return !0;
  }
}, t0 = /* @__PURE__ */ new Set(["mouseup", "touchend", "touchcancel"]), go = /* @__PURE__ */ d.forwardRef(({
  as: a,
  align: o = "top",
  className: r,
  children: i,
  label: f,
  description: p,
  enterDelayMs: m = 100,
  leaveDelayMs: g = 300,
  defaultOpen: h = !1,
  closeOnActivation: b = !1,
  dropShadow: E = !1,
  highContrast: S = !0,
  // TODO: remove in v12, highContrast should not be configurable
  ...w
}, x) => {
  const N = v.useRef(null), [C, A] = Ux(h), [$, _] = v.useState(!1), [z, D] = v.useState(!1), [H, L] = v.useState(!1), j = dt("tooltip"), I = be(), F = d.Children.only(i), {
    "aria-labelledby": Z,
    "aria-describedby": he
  } = (F == null ? void 0 : F.props) ?? {}, ae = !!f, ge = {
    onFocus: () => !z && A(!0),
    onBlur: () => {
      A(!1), D(!1);
    },
    onClick: () => b && A(!1),
    // This should be placed on the trigger in case the element is disabled
    onMouseEnter: W,
    onMouseLeave: pe,
    onMouseDown: le,
    onMouseMove: O,
    onTouchStart: q,
    "aria-labelledby": Z ?? (ae ? j : void 0),
    "aria-describedby": he ?? (ae ? void 0 : j)
  };
  function R(G) {
    const te = Object.keys(ge).filter((Q) => Q.startsWith("on")), V = {};
    return te.forEach((Q) => {
      V[Q] = (me) => {
        ge[Q](me), G != null && G[Q] && (G == null || G[Q](me));
      };
    }), V;
  }
  const J = v.useCallback((G) => {
    C && at(G, al) && (G.stopPropagation(), A(!1)), C && b && (at(G, ma) || at(G, mo)) && A(!1);
  }, [b, C, A]);
  Ct(() => {
    if (!C)
      return;
    function G(te) {
      at(te, al) && J(te);
    }
    return document.addEventListener("keydown", G), () => {
      document.removeEventListener("keydown", G);
    };
  }, [C, J]);
  function W() {
    w != null && w.onMouseEnter || (L(!0), A(!0, m));
  }
  function le() {
    D(!0), q();
  }
  function pe() {
    L(!1), !$ && A(!1, g);
  }
  function O(G) {
    G.buttons === 1 ? _(!0) : _(!1);
  }
  function q() {
    _(!0);
  }
  const P = v.useCallback(() => {
    _(!1), H || A(!1, g);
  }, [H, g, A]);
  return Gf(N, "The Tooltip component must have no interactive content rendered by the`label` or `description` prop"), v.useEffect(() => ($ && t0.forEach((G) => {
    document.addEventListener(G, P);
  }), () => {
    t0.forEach((G) => {
      document.removeEventListener(G, P);
    });
  }), [$, P]), // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
  /* @__PURE__ */ d.createElement(Ar, de({
    as: a,
    ref: x
  }, w, {
    align: o,
    className: oe(`${I}--tooltip`, r),
    dropShadow: E,
    highContrast: S,
    onKeyDown: J,
    onMouseLeave: pe,
    open: C
  }), /* @__PURE__ */ d.createElement("div", {
    className: `${I}--tooltip-trigger__wrapper`
  }, typeof F < "u" ? /* @__PURE__ */ d.cloneElement(F, {
    ...ge,
    ...R(F.props)
  }) : null), /* @__PURE__ */ d.createElement(ho, {
    "aria-hidden": C ? "false" : "true",
    className: `${I}--tooltip-content`,
    id: j,
    onMouseEnter: W,
    role: "tooltip"
  }, f || p));
});
go.propTypes = {
  /**
   * Specify how the trigger should align with the tooltip
   */
  align: c.oneOf([
    "top",
    "top-left",
    // deprecated use top-start instead
    "top-right",
    // deprecated use top-end instead
    "bottom",
    "bottom-left",
    // deprecated use bottom-start instead
    "bottom-right",
    // deprecated use bottom-end instead
    "left",
    "left-bottom",
    // deprecated use left-end instead
    "left-top",
    // deprecated use left-start instead
    "right",
    "right-bottom",
    // deprecated use right-end instead
    "right-top",
    // deprecated use right-start instead
    // new values to match floating-ui
    "top-start",
    "top-end",
    "bottom-start",
    "bottom-end",
    "left-end",
    "left-start",
    "right-end",
    "right-start"
  ]),
  /**
   * Pass in the child to which the tooltip will be applied
   */
  children: c.node,
  /**
   * Specify an optional className to be applied to the container node
   */
  className: c.string,
  /**
   * Determines wether the tooltip should close when inner content is activated (click, Enter or Space)
   */
  closeOnActivation: c.bool,
  /**
   * Specify whether the tooltip should be open when it first renders
   */
  defaultOpen: c.bool,
  /**
   * Provide the description to be rendered inside of the Tooltip. The
   * description will use `aria-describedby` and will describe the child node
   * in addition to the text rendered inside of the child. This means that if you
   * have text in the child node, that it will be announced alongside the
   * description to the screen reader.
   *
   * Note: if label and description are both provided, label will be used and
   * description will not be used
   */
  description: c.node,
  /**
   * Specify whether a drop shadow should be rendered
   */
  dropShadow: c.bool,
  /**
   * Specify the duration in milliseconds to delay before displaying the tooltip
   */
  enterDelayMs: c.number,
  /**
   * Render the component using the high-contrast theme
   */
  highContrast: c.bool,
  // TODO: remove in v12, highContrast should not be configurable
  /**
   * Provide the label to be rendered inside of the Tooltip. The label will use
   * `aria-labelledby` and will fully describe the child node that is provided.
   * This means that if you have text in the child node, that it will not be
   * announced to the screen reader.
   *
   * Note: if label and description are both provided, description will not be
   * used
   */
  label: c.node,
  /**
   * Specify the duration in milliseconds to delay before hiding the tooltip
   */
  leaveDelayMs: c.number
};
const dy = /* @__PURE__ */ d.forwardRef(function({
  as: o,
  children: r,
  className: i,
  dangerDescription: f = "danger",
  disabled: p = !1,
  hasIconOnly: m = !1,
  href: g,
  iconDescription: h,
  isExpressive: b = !1,
  isSelected: E,
  kind: S = "primary",
  onBlur: w,
  onClick: x,
  onFocus: N,
  onMouseEnter: C,
  onMouseLeave: A,
  renderIcon: $,
  size: _,
  tabIndex: z,
  type: D = "button",
  ...H
}, L) {
  const j = be(), I = oe(i, {
    [`${j}--btn`]: !0,
    [`${j}--btn--xs`]: _ === "xs" && !b,
    // TODO: V12 - Remove this class
    [`${j}--btn--sm`]: _ === "sm" && !b,
    // TODO: V12 - Remove this class
    [`${j}--btn--md`]: _ === "md" && !b,
    // TODO: V12 - Remove this class
    [`${j}--btn--lg`]: _ === "lg" && !b,
    // TODO: V12 - Remove this class
    [`${j}--btn--xl`]: _ === "xl",
    // TODO: V12 - Remove this class
    [`${j}--btn--2xl`]: _ === "2xl",
    // TODO: V12 - Remove this class
    [`${j}--layout--size-${_}`]: _,
    [`${j}--btn--${S}`]: S,
    [`${j}--btn--disabled`]: p,
    [`${j}--btn--expressive`]: b,
    [`${j}--btn--icon-only`]: m,
    [`${j}--btn--selected`]: m && E && S === "ghost"
  }), F = {
    tabIndex: z,
    className: I,
    ref: L
  }, Z = $ ? /* @__PURE__ */ d.createElement($, {
    "aria-label": h,
    className: `${j}--btn__icon`,
    "aria-hidden": "true"
  }) : null, he = ["danger", "danger--tertiary", "danger--ghost"];
  let ae = "button";
  const se = dt("danger-description"), {
    "aria-pressed": ne,
    "aria-describedby": ge
  } = H;
  let R = {
    disabled: p,
    type: D,
    "aria-describedby": he.includes(S) ? se : ge || void 0,
    "aria-pressed": ne ?? (m && S === "ghost" ? E : void 0)
  };
  const J = {
    href: g
  };
  let W = null;
  return he.includes(S) && (W = /* @__PURE__ */ d.createElement("span", {
    id: se,
    className: `${j}--visually-hidden`
  }, f)), o ? (ae = o, R = {
    ...R,
    ...J
  }) : g && !p && (ae = "a", R = J), /* @__PURE__ */ d.createElement(ae, {
    onMouseEnter: C,
    onMouseLeave: A,
    onFocus: N,
    onBlur: w,
    onClick: x,
    ...H,
    ...F,
    ...R
  }, W, r, Z);
}), Vx = v.forwardRef, Zf = Vx((a, o) => {
  const {
    className: r,
    count: i,
    ...f
  } = a, p = be(), m = oe(`${p}--badge-indicator`, r, {
    [`${p}--badge-indicator--count`]: i
  }), g = i && i > 999 ? "999+" : i;
  return /* @__PURE__ */ d.createElement("div", de({
    className: m,
    ref: o
  }, f), g);
});
Zf.propTypes = {
  /**
   * Specify an optional className to add.
   */
  className: c.string,
  /**
   * Count of badge indicator
   */
  count: c.number,
  /**
   * Provide an `id` to uniquely identify the BadgeIndidcator
   */
  id: c.string
};
const my = ["primary", "secondary", "ghost", "tertiary"], Ln = /* @__PURE__ */ v.forwardRef(({
  align: a,
  autoAlign: o = !1,
  badgeCount: r,
  children: i,
  className: f,
  closeOnActivation: p = !0,
  defaultOpen: m = !1,
  disabled: g,
  dropShadow: h = !1,
  enterDelayMs: b = 100,
  highContrast: E = !0,
  kind: S,
  label: w,
  leaveDelayMs: x = 100,
  wrapperClasses: N,
  size: C,
  isSelected: A,
  ...$
}, _) => {
  const z = be(), D = oe(N, `${z}--icon-tooltip`, {
    [`${z}--icon-tooltip--disabled`]: g
  });
  r && (S !== "ghost" || C !== "lg") && console.warn("The prop BadgeCount must be used with hasIconOnly=true, kind='ghost' and size='lg'");
  const H = dt("badge-indicator");
  return /* @__PURE__ */ d.createElement(go, {
    align: a,
    autoAlign: o,
    closeOnActivation: p,
    className: D,
    defaultOpen: m,
    dropShadow: h,
    enterDelayMs: b,
    highContrast: E,
    label: w,
    leaveDelayMs: x
  }, /* @__PURE__ */ d.createElement(dy, de({}, $, {
    disabled: g,
    kind: S,
    ref: _,
    size: C,
    isSelected: A,
    hasIconOnly: !0,
    className: f,
    "aria-describedby": $["aria-describedby"] || r && H
  }), i, !g && r !== void 0 && /* @__PURE__ */ d.createElement(Zf, {
    id: H,
    count: r > 0 ? r : void 0
  })));
});
Ln.propTypes = {
  /**
   * Specify how the trigger should align with the tooltip
   */
  align: Hl(c.oneOf([
    "top",
    "top-left",
    // deprecated use top-start instead
    "top-right",
    // deprecated use top-end instead
    "bottom",
    "bottom-left",
    // deprecated use bottom-start instead
    "bottom-right",
    // deprecated use bottom-end instead
    "left",
    "left-bottom",
    // deprecated use left-end instead
    "left-top",
    // deprecated use left-start instead
    "right",
    "right-bottom",
    // deprecated use right-end instead
    "right-top",
    // deprecated use right-start instead
    // new values to match floating-ui
    "top-start",
    "top-end",
    "bottom-start",
    "bottom-end",
    "left-end",
    "left-start",
    "right-end",
    "right-start"
  ]), ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"], Ul),
  /**
   * **Experimental**: Will attempt to automatically align the tooltip. Requires
   * React v17+
   * @see https://github.com/carbon-design-system/carbon/issues/18714
   */
  autoAlign: c.bool,
  /**
   * **Experimental**: Display a badge on the button. An empty/dot badge if 0, a numbered badge if > 0.
   * Must be used with size="lg", kind="ghost" and hasIconOnly=true
   */
  badgeCount: c.number,
  /**
   * Optionally specify an href for your IconButton to become an `<a>` element
   */
  href: c.string,
  /**
   * Provide an icon or asset to be rendered inside of the IconButton
   */
  children: c.node,
  /**
   * Specify an optional className to be added to your Button
   */
  className: c.string,
  /**
   * Determines whether the tooltip should close when inner content is activated (click, Enter or Space)
   */
  closeOnActivation: c.bool,
  /**
   * Specify whether the tooltip should be open when it first renders
   */
  defaultOpen: c.bool,
  /**
   * Specify whether a drop shadow should be rendered on the tooltip
   */
  dropShadow: c.bool,
  /**
   * Specify whether the Button should be disabled, or not
   */
  disabled: c.bool,
  /**
   * Specify the duration in milliseconds to delay before displaying the tooltip
   */
  enterDelayMs: c.number,
  /**
   * Specify whether the IconButton is currently selected
   */
  isSelected: c.bool,
  /**
   * Render the tooltip using the high-contrast theme
   */
  highContrast: c.bool,
  /**
   * Specify the type of button to be used as the base for the IconButton
   */
  kind: c.oneOf(my),
  /**
   * Provide the label to be rendered inside of the Tooltip. The label will use
   * `aria-labelledby` and will fully describe the child node that is provided.
   * This means that if you have text in the child node it will not be
   * announced to the screen reader.
   * If using `badgeCount={0}`, make sure the label explains that there is a
   * new notification.
   */
  label: c.node.isRequired,
  /**
   * Specify the duration in milliseconds to delay before hiding the tooltip
   */
  leaveDelayMs: c.number,
  /**
   * Optionally specify a `rel` when using an `<a>` element.
   */
  rel: c.string,
  /**
   * Specify the size of the Button.
   */
  size: c.oneOf(["sm", "md", "lg"]),
  /**
   * Optionally specify a `target` when using an `<a>` element.
   */
  target: c.string,
  /**
   * Specify an optional className to be added to your Tooltip wrapper
   */
  wrapperClasses: c.string
};
const kx = ["primary", "secondary", "danger", "ghost", "danger--primary", "danger--ghost", "danger--tertiary", "tertiary"];
function Ix(a, o) {
  return a === !0;
}
const He = /* @__PURE__ */ d.forwardRef((a, o) => {
  const {
    as: r,
    autoAlign: i = !1,
    children: f,
    hasIconOnly: p = !1,
    tooltipHighContrast: m = !0,
    tooltipDropShadow: g = !1,
    iconDescription: h,
    kind: b = "primary",
    onBlur: E,
    onClick: S,
    onFocus: w,
    onMouseEnter: x,
    onMouseLeave: N,
    renderIcon: C,
    size: A,
    tooltipAlignment: $ = "center",
    tooltipPosition: _ = "top",
    ...z
  } = a;
  C && !f && !h && console.error("Button: renderIcon property specified without also providing an iconDescription property. This may impact accessibility for screen reader users.");
  const D = C ? /* @__PURE__ */ d.createElement(C, null) : null;
  if (Ix(p)) {
    let H;
    return (_ === "top" || _ === "bottom") && ($ === "center" && (H = _), $ === "end" && (H = `${_}-end`), $ === "start" && (H = `${_}-start`)), (_ === "right" || _ === "left") && (H = _), // @ts-expect-error - `IconButton` does not support all `size`s that
    // `Button` supports.
    //
    // TODO: What should be done here?
    // 1. Should the `IconButton` not be rendered if the `size` is not
    //    supported?
    // 2. Should an error be thrown?
    // 3. Something else?
    /* @__PURE__ */ d.createElement(Ln, de({}, z, {
      ref: o,
      as: r,
      align: H,
      label: h,
      kind: b,
      size: A,
      highContrast: m,
      dropShadow: g,
      onMouseEnter: x,
      onMouseLeave: N,
      onFocus: w,
      onBlur: E,
      autoAlign: i,
      onClick: S,
      renderIcon: D ? null : C
      // avoid doubling the icon.
    }), D ?? f);
  } else {
    const {
      tooltipAlignment: H,
      ...L
    } = a;
    return /* @__PURE__ */ d.createElement(dy, de({
      ref: o
    }, L));
  }
});
He.displayName = "Button";
He.propTypes = {
  /**
   * Specify how the button itself should be rendered.
   * Make sure to apply all props to the root node and render children appropriately
   */
  as: c.oneOfType([c.func, c.string, c.elementType]),
  /**
   * **Experimental**: Will attempt to automatically align the tooltip. Requires
   * React v17+
   * @see https://github.com/carbon-design-system/carbon/issues/18714
   */
  autoAlign: c.bool,
  /**
   * Specify the content of your Button
   */
  children: c.node,
  /**
   * Specify an optional className to be added to your Button
   */
  className: c.string,
  /**
   * Specify the message read by screen readers for the danger button variants
   */
  dangerDescription: c.string,
  /**
   * Specify whether the Button should be disabled, or not
   */
  disabled: c.bool,
  /**
   * Specify if the button is an icon-only button
   */
  hasIconOnly: c.bool,
  /**
   * Optionally specify an href for your Button to become an `<a>` element
   */
  href: c.string,
  /**
   * If specifying the `renderIcon` prop, provide a description for that icon that can
   * be read by screen readers
   */
  iconDescription: (a) => a.renderIcon && !a.children && !a.iconDescription ? new Error("renderIcon property specified without also providing an iconDescription property.") : null,
  /**
   * Specify whether the Button is expressive, or not
   */
  isExpressive: c.bool,
  /**
   * Specify whether the Button is currently selected. Only applies to the icon only Ghost variant.
   */
  isSelected: c.bool,
  /**
   * Specify the kind of Button you want to create
   */
  kind: (a, o, r) => {
    const {
      hasIconOnly: i
    } = a, f = i ? my : kx;
    return a[o] === void 0 || f.includes(a[o]) ? null : new Error(`Invalid prop \`${o}\` supplied to \`${r}\`. Expected one of ${f.join(", ")}.`);
  },
  /**
   * Provide an optional function to be called when the button element
   * loses focus
   */
  onBlur: c.func,
  /**
   * Provide an optional function to be called when the button element
   * is clicked
   */
  onClick: c.func,
  /**
   * Provide an optional function to be called when the button element
   * receives focus
   */
  onFocus: c.func,
  /**
   * Provide an optional function to be called when the mouse
   * enters the button element
   */
  onMouseEnter: c.func,
  /**
   * Provide an optional function to be called when the mouse
   * leaves the button element
   */
  onMouseLeave: c.func,
  /**
   * Optionally specify a `rel` when using an `<a>` element.
   */
  rel: c.string,
  /**
   * A component used to render an icon.
   */
  renderIcon: c.oneOfType([c.func, c.object]),
  /**
   * Optional prop to specify the role of the Button
   */
  role: c.string,
  /**
   * Specify the size of the button, from the following list of sizes:
   */
  size: c.oneOf(["xs", "sm", "md", "lg", "xl", "2xl"]),
  /**
   * Optional prop to specify the tabIndex of the Button
   */
  tabIndex: c.number,
  /**
   * Optionally specify a `target` when using an `<a>` element.
   */
  target: c.string,
  /**
   * Specify the alignment of the tooltip to the icon-only button.
   * Can be one of: `start`, `center`, or `end`.
   */
  tooltipAlignment: c.oneOf(["start", "center", "end"]),
  /**
   * Enable drop shadow for tooltips for icon-only buttons.
   */
  tooltipDropShadow: c.bool,
  /**
   * Enable high-contrast theme for tooltips for icon-only buttons.
   * Defaults to true.
   */
  tooltipHighContrast: c.bool,
  /**
   * Specify the direction of the tooltip for icon-only buttons.
   * Can be either `top`, `right`, `bottom`, or `left`.
   */
  tooltipPosition: c.oneOf(["top", "right", "bottom", "left"]),
  /**
   * Optional prop to specify the type of the Button
   */
  type: c.oneOf(["button", "reset", "submit"])
};
const n0 = (a) => ({
  ghost: 1,
  "danger--ghost": 2,
  tertiary: 3,
  danger: 5,
  primary: 6
})[a] ?? 4, l0 = (a) => /* @__PURE__ */ d.isValidElement(a) && a.props && typeof a.props == "object" ? a.props.kind ?? "primary" : "primary", da = /* @__PURE__ */ v.forwardRef((a, o) => {
  const {
    children: r,
    className: i,
    fluid: f,
    stacked: p,
    ...m
  } = a, g = be(), h = v.useRef(null), [b, E] = v.useState(!1), [S, w] = v.useState(d.Children.toArray(r));
  Ct(() => {
    const N = () => {
      var $;
      let A = p || !1;
      if (h && h.current) {
        const _ = window.getComputedStyle(h.current);
        A = (($ = _ == null ? void 0 : _.getPropertyValue) == null ? void 0 : $.call(_, "--flex-direction")) === "column";
      }
      return A;
    };
    if (E(N()), !h.current)
      return;
    const C = new ResizeObserver(() => {
      E(N());
    });
    return C.observe(h.current), () => C.disconnect();
  }, [f, p]), v.useEffect(() => {
    const N = d.Children.toArray(r);
    N.sort((C, A) => (n0(l0(C)) - n0(l0(A))) * (b ? -1 : 1)), w(N);
  }, [r, b]);
  const x = oe(i, `${g}--btn-set`, {
    [`${g}--btn-set--stacked`]: b,
    [`${g}--btn-set--fluid`]: f
  });
  return /* @__PURE__ */ d.createElement("div", de({}, m, {
    className: x,
    ref: o
  }), f ? /* @__PURE__ */ d.createElement("div", {
    ref: h,
    className: oe(`${g}--btn-set__fluid-inner`, {
      [`${g}--btn-set__fluid-inner--auto-stack`]: !0
    })
  }, S) : r);
});
da.displayName = "ButtonSet";
da.propTypes = {
  /**
   * Specify the content of your ButtonSet
   */
  children: c.node,
  /**
   * Specify an optional className to be added to your ButtonSet
   */
  className: c.string,
  /**
   * fluid: button set resize to the size of the container up to a maximum dependant on the
   * number of buttons.
   */
  fluid: c.bool,
  /**
   * Specify the button arrangement of the set (vertically stacked or
   * horizontal) - ignored when fluid is true
   */
  stacked: c.bool
};
c.elementType, c.node, c.string;
const py = /* @__PURE__ */ d.createContext(void 0);
function hy() {
  return v.useContext(py);
}
function Yf({
  align: a,
  as: o,
  autoAlign: r,
  className: i,
  children: f,
  defaultOpen: p = !1,
  ...m
}) {
  const g = v.useRef(null), [h, b] = v.useState(p), E = be(), S = dt(), w = oe(`${E}--toggletip`, i, {
    [`${E}--toggletip--open`]: h,
    [`${E}--autoalign`]: r
  }), x = {
    toggle: () => {
      b(!h);
    },
    close: () => {
      b(!1);
    }
  }, N = {
    buttonProps: {
      "aria-expanded": h,
      "aria-controls": S,
      "aria-describedby": h ? S : void 0,
      onClick: x.toggle
    },
    contentProps: {
      id: S
    },
    onClick: {
      onClick: x.toggle
    }
  }, C = ($) => {
    var _;
    if (h && at($, al)) {
      $.stopPropagation(), x.close();
      const z = (_ = g.current) == null ? void 0 : _.children[0];
      z instanceof HTMLButtonElement && z.focus();
    }
  }, A = ($) => {
    h && $.relatedTarget === null || $.currentTarget.contains($.relatedTarget) || x.close();
  };
  return gc("blur", () => {
    h && x.close();
  }), v.useEffect(() => {
    if (!g.current) return;
    const $ = g.current.ownerDocument || document, _ = "PointerEvent" in window ? "pointerdown" : "mousedown", z = (H) => {
      var j;
      const L = H.target;
      h && L && !((j = g.current) != null && j.contains(L)) && b(!1);
    }, D = {
      capture: !0
    };
    return $.addEventListener(_, z, D), () => {
      $.removeEventListener(_, z, D);
    };
  }, [h]), /* @__PURE__ */ d.createElement(py.Provider, {
    value: N
  }, /* @__PURE__ */ d.createElement(Ar, de({
    align: a,
    as: o,
    caret: !0,
    className: w,
    dropShadow: !1,
    highContrast: !0,
    open: h,
    onKeyDown: C,
    onBlur: A,
    ref: g,
    autoAlign: r
  }, m), f));
}
const {
  open: g3,
  ...Gx
} = Ar.propTypes ?? {};
Yf.propTypes = {
  // Has all of Popover's PropTypes except for "open".
  ...Gx,
  /**
   * Specify if the toggletip should be open by default
   */
  defaultOpen: c.bool
};
const Xf = /* @__PURE__ */ v.forwardRef(function({
  children: o,
  className: r,
  label: i = "Show information",
  as: f,
  ...p
}, m) {
  const g = hy(), h = be(), b = oe(`${h}--toggletip-button`, r), E = f ?? "button";
  return E !== "button" ? /* @__PURE__ */ d.createElement(E, de({}, g == null ? void 0 : g.onClick, {
    className: b
  }, p), o) : /* @__PURE__ */ d.createElement("button", de({}, g == null ? void 0 : g.buttonProps, {
    "aria-label": i,
    type: "button",
    className: b,
    ref: m
  }, p), o);
});
Xf.propTypes = {
  /**
   * Custom children to be rendered as the content of the label
   */
  children: c.node,
  /**
   * Provide a custom class name to be added to the outermost node in the
   * component
   */
  className: c.string,
  /**
   * Provide an accessible label for this button
   */
  label: c.string
};
Xf.displayName = "ToggletipButton";
const Zx = v.forwardRef, Qf = Zx((a, o) => {
  const {
    children: r,
    className: i
  } = a, f = hy(), p = be();
  return /* @__PURE__ */ d.createElement(ho, de({
    className: i
  }, f == null ? void 0 : f.contentProps, {
    ref: o
  }), /* @__PURE__ */ d.createElement("div", {
    className: `${p}--toggletip-content`
  }, r));
});
Qf.propTypes = {
  /**
   * Custom children to be rendered as the content of the label
   */
  children: c.node,
  /**
   * Provide a custom class name to be added to the outermost node in the
   * component
   */
  className: c.string
};
Qf.displayName = "ToggletipContent";
function gy({
  children: a,
  className: o
}) {
  const r = be(), i = oe(`${r}--toggletip-actions`, o);
  return /* @__PURE__ */ d.createElement("div", {
    className: i
  }, a);
}
gy.propTypes = {
  /**
   * Custom children to be rendered as the content of the label
   */
  children: c.node,
  /**
   * Provide a custom class name to be added to the outermost node in the
   * component
   */
  className: c.string
};
var a0;
const by = /* @__PURE__ */ d.forwardRef(function({
  className: o,
  children: r
}, i) {
  const f = be(), p = oe(o, {
    [`${f}--ai-label-content`]: !0,
    [`${f}--ai-label-content--with-actions`]: !1
  });
  return /* @__PURE__ */ d.createElement(Qf, {
    className: p
  }, r);
});
by.displayName = "AILabelContent";
by.propTypes = {
  /**
   * Specify the content you want rendered inside the AILabel ToggleTip
   */
  children: c.node,
  /**
   * Specify an optional className to be added to the AILabel callout
   */
  className: c.string
};
const yy = /* @__PURE__ */ d.forwardRef(function({
  className: o,
  children: r
}, i) {
  const f = be(), p = oe(o, {
    [`${f}--ai-label-actions`]: !0
  });
  return /* @__PURE__ */ d.createElement(gy, {
    className: p
  }, r);
});
yy.displayName = "AILabelActions";
yy.propTypes = {
  /**
   * Specify the content you want rendered inside the AILabel callout toolbar
   */
  children: c.node,
  /**
   * Specify an optional className to be added to the AILabel toolbar
   */
  className: c.string
};
const It = /* @__PURE__ */ d.forwardRef(function({
  aiText: o = "AI",
  aiTextLabel: r,
  textLabel: i,
  align: f,
  autoAlign: p = !0,
  children: m,
  className: g,
  kind: h = "default",
  onRevertClick: b,
  revertActive: E,
  revertLabel: S = "Revert to AI input",
  slugLabel: w = "Show information",
  ["aria-label"]: x = "Show information",
  size: N = "xs",
  ...C
}, A) {
  const $ = be(), _ = dt("AILabel"), z = oe(g, {
    [`${$}--ai-label`]: !0,
    [`${$}--ai-label--revert`]: E
  }), D = oe({
    [`${$}--ai-label__button`]: !0,
    [`${$}--ai-label__button--${N}`]: N,
    [`${$}--ai-label__button--${h}`]: h,
    [`${$}--ai-label__button--inline-with-content`]: h === "inline" && (r || i)
  }), H = (I) => {
    b && b(I);
  }, L = !r && !i ? `${o} ${w || x}` : `${o} ${r || i}`, j = ["xs", "2xs", "mini"].includes(N);
  return /* @__PURE__ */ d.createElement("div", {
    className: z,
    ref: A,
    id: _
  }, E ? /* @__PURE__ */ d.createElement(Ln, de({
    onClick: H,
    kind: "ghost",
    size: "sm",
    label: S
  }, C), a0 || (a0 = /* @__PURE__ */ d.createElement(qS, null))) : /* @__PURE__ */ d.createElement(Yf, de({
    align: f,
    autoAlign: p,
    alignmentAxisOffset: j ? -24 : 0
  }, C), /* @__PURE__ */ d.createElement(Xf, {
    className: D,
    label: h === "inline" ? "" : L
  }, /* @__PURE__ */ d.createElement("span", {
    className: `${$}--ai-label__text`
  }, o), h === "inline" && (r || i) && /* @__PURE__ */ d.createElement("span", {
    className: `${$}--ai-label__additional-text`
  }, r || i)), m));
});
It.displayName = "AILabel";
It.propTypes = {
  ...Yf.propTypes,
  /**
   * Specify the content you want rendered inside the `AILabel` ToggleTip
   */
  AILabelContent: c.node,
  /**
   * Specify the correct translation of the AI text
   */
  aiText: c.string,
  /**
   * @deprecated
   * Specify additional text to be rendered next to the AI label in the inline variant
   */
  aiTextLabel: $e(c.string),
  /**
   * Specify the text that will be provided to the aria-label of the `AILabel` button
   */
  "aria-label": c.string,
  /**
   * Specify the type of `AILabel`, from the following list of types:
   */
  kind: c.oneOf(["default", "inline"]),
  /**
   * Callback function that fires when the revert button is clicked
   */
  onRevertClick: c.func,
  /**
   * Specify whether the revert button should be visible
   */
  revertActive: c.bool,
  /**
   * Specify the text that should be shown when the revert button is hovered
   */
  revertLabel: c.string,
  /**
   * Specify the size of the button, from the following list of sizes:
   */
  size: c.oneOf(["mini", "2xs", "xs", "sm", "md", "lg", "xl"]),
  /**
   * @deprecated
   * Specify the text that will be provided to the aria-label of the `AILabel` button
   */
  slugLabel: $e(c.string),
  /**
   * Specify additional text to be rendered next to the AI label in the inline variant
   */
  textLabel: c.string
};
const mt = (a, o) => /* @__PURE__ */ v.isValidElement(a) && a.type === o, Kf = ({
  ref: a,
  onResize: o
}) => {
  const [r, i] = v.useState(-1), [f, p] = v.useState(-1), m = v.useRef(null), g = v.useRef(o);
  return v.useEffect(() => {
    g.current = o;
  }, [o]), v.useEffect(() => {
    const h = () => {
      var b, E;
      if (a.current) {
        const S = window.getComputedStyle(a.current), w = (((b = a.current) == null ? void 0 : b.offsetWidth) ?? 0) - (typeof (S == null ? void 0 : S.paddingLeft) == "string" && (S != null && S.paddingLeft.length) ? parseFloat(S == null ? void 0 : S.paddingLeft) : 0) - (typeof (S == null ? void 0 : S.paddingRight) == "string" && (S != null && S.paddingRight.length) ? parseFloat(S == null ? void 0 : S.paddingRight) : 0), x = (((E = a.current) == null ? void 0 : E.offsetHeight) ?? 0) - (typeof (S == null ? void 0 : S.paddingTop) == "string" && (S != null && S.paddingTop.length) ? parseFloat(S == null ? void 0 : S.paddingTop) : 0) - (typeof (S == null ? void 0 : S.paddingBottom) == "string" && (S != null && S.paddingBottom.length) ? parseFloat(S == null ? void 0 : S.paddingBottom) : 0);
        i(w), p(x);
      }
    };
    !(a != null && a.current) || r >= 0 && f >= 0 || h();
  }, [r, f]), Ct(() => {
    if (!(a != null && a.current))
      return;
    const h = () => {
      var S;
      if (!(a != null && a.current) || !Array.isArray(m == null ? void 0 : m.current))
        return;
      const E = m.current[0];
      i(E.contentRect.width), p(E.contentRect.height), (S = g.current) == null || S.call(g, E.contentRect);
    }, b = new ResizeObserver((E) => {
      m.current = E, window.requestAnimationFrame(() => {
        h();
      });
    });
    return b.observe(a.current), () => {
      b.disconnect();
    };
  }, []), {
    width: r,
    height: f
  };
}, kt = (a) => (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
  (o, ...r) => {
    for (const i of a) {
      if (o.defaultPrevented)
        break;
      typeof i == "function" && i(o, ...r);
    }
  }
);
function Yx(a, o, { signal: r, edges: i } = {}) {
  let f, p = null;
  const m = i != null && i.includes("leading"), g = i == null || i.includes("trailing"), h = () => {
    p !== null && (a.apply(f, p), f = void 0, p = null);
  }, b = () => {
    g && h(), x();
  };
  let E = null;
  const S = () => {
    E != null && clearTimeout(E), E = setTimeout(() => {
      E = null, b();
    }, o);
  }, w = () => {
    E !== null && (clearTimeout(E), E = null);
  }, x = () => {
    w(), f = void 0, p = null;
  }, N = () => {
    w(), h();
  }, C = function(...A) {
    if (r != null && r.aborted)
      return;
    f = this, p = A;
    const $ = E == null;
    S(), m && $ && h();
  };
  return C.schedule = S, C.cancel = x, C.flush = N, r == null || r.addEventListener("abort", x, { once: !0 }), C;
}
function Er(a, o = 0, r = {}) {
  typeof r != "object" && (r = {});
  const { signal: i, leading: f = !1, trailing: p = !0, maxWait: m } = r, g = Array(2);
  f && (g[0] = "leading"), p && (g[1] = "trailing");
  let h, b = null;
  const E = Yx(function(...x) {
    h = a.apply(this, x), b = null;
  }, o, { signal: i, edges: g }), S = function(...x) {
    if (m != null) {
      if (b === null)
        b = Date.now();
      else if (Date.now() - b >= m)
        return h = a.apply(this, x), b = Date.now(), E.cancel(), E.schedule(), h;
    }
    return E.apply(this, x), h;
  }, w = () => (E.flush(), h);
  return S.cancel = E.cancel, S.flush = w, S;
}
function Ff({
  align: a = "bottom",
  autoAlign: o = !1,
  children: r,
  className: i,
  feedback: f = "Copied!",
  feedbackTimeout: p = 2e3,
  onAnimationEnd: m,
  onClick: g = st,
  ...h
}) {
  const [b, E] = v.useState(""), S = be(), w = oe(i, `${S}--copy`, {
    [`${S}--copy-btn--animating`]: b,
    [`${S}--copy-btn--${b}`]: b
  }), x = v.useCallback(Er(() => {
    E("fade-out");
  }, p), [p]), N = v.useCallback(() => {
    E("fade-in"), x();
  }, [x]), C = ($) => {
    $.animationName === `${S}--hide-feedback` && E("");
  };
  v.useEffect(() => () => {
    x.cancel();
  }, [x]);
  const A = h["aria-label"] ?? "";
  return /* @__PURE__ */ d.createElement(Ln, de({
    closeOnActivation: !1,
    align: a,
    autoAlign: o,
    className: w,
    label: b ? f : A,
    leaveDelayMs: b ? p : void 0,
    onClick: kt([g, N]),
    onAnimationEnd: kt([m, C])
  }, h, {
    "aria-label": !r && (b ? f : h["aria-label"]) || void 0
  }), r);
}
Ff.propTypes = {
  /**
   * Specify how the trigger should align with the tooltip
   */
  align: Hl(c.oneOf([
    "top",
    "top-left",
    // deprecated use top-start instead
    "top-right",
    // deprecated use top-end instead
    "bottom",
    "bottom-left",
    // deprecated use bottom-start instead
    "bottom-right",
    // deprecated use bottom-end instead
    "left",
    "left-bottom",
    // deprecated use left-end instead
    "left-top",
    // deprecated use left-start instead
    "right",
    "right-bottom",
    // deprecated use right-end instead
    "right-top",
    // deprecated use right-start instead
    // new values to match floating-ui
    "top-start",
    "top-end",
    "bottom-start",
    "bottom-end",
    "left-end",
    "left-start",
    "right-end",
    "right-start"
  ]), ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"], Ul),
  /**
   * **Experimental**: Will attempt to automatically align the tooltip. Requires
   * React v17+
   * @see https://github.com/carbon-design-system/carbon/issues/18714
   */
  autoAlign: c.bool,
  /**
   * Pass in content to be rendered in the underlying `<button>`
   */
  children: c.node,
  /**
   * Specify an optional className to be applied to the underlying `<button>`
   */
  className: c.string,
  /**
   * Specify the string that is displayed when the button is clicked and the
   * content is copied
   */
  feedback: c.string,
  /**
   * Specify the time it takes for the feedback message to timeout
   */
  feedbackTimeout: c.number,
  /**
   * Specify an optional `onAnimationEnd` handler that is called when the underlying
   * animation ends
   */
  onAnimationEnd: c.func,
  /**
   * Specify an optional `onClick` handler that is called when the underlying
   * `<button>` is clicked
   */
  onClick: c.func
};
const pr = ["xs", "sm", "md", "lg", "xl", "2xl"], hr = ["condensed", "normal"], Xx = /* @__PURE__ */ d.forwardRef(({
  as: a = "div",
  children: o,
  className: r,
  density: i,
  size: f,
  ...p
}, m) => {
  const g = be(), h = oe(r, `${g}--layout`, {
    [`${g}--layout--size-${f}`]: f && pr.includes(f),
    [`${g}--layout--density-${i}`]: i && hr.includes(i)
  });
  return /* @__PURE__ */ d.createElement(a, de({}, p, {
    ref: m,
    className: h
  }), o);
});
Xx.propTypes = {
  /**
   * Specify a custom component or element to be rendered as the top-level
   * element in the component
   */
  as: c.oneOfType([c.func, c.string, c.elementType]),
  /**
   * Provide child elements to be rendered inside of `Layout`
   */
  children: c.node,
  /**
   * Provide a custom class name to be used on the outermost element rendered by
   * the component
   */
  className: c.string,
  /**
   * Specify the desired density of components within this layout
   */
  density: c.oneOf(hr),
  /**
   * Specify the desired size of components within this layout
   */
  size: c.oneOf(pr)
};
const vy = /* @__PURE__ */ d.forwardRef(({
  as: a = "div",
  children: o,
  className: r,
  density: i,
  size: f,
  ...p
}, m) => {
  const g = be(), h = oe(r, Object.entries({
    size: f,
    density: i
  }).map(([b, E]) => ({
    [`${g}--layout-constraint--${b}__default-${E == null ? void 0 : E.default}`]: E == null ? void 0 : E.default,
    [`${g}--layout-constraint--${b}__min-${E == null ? void 0 : E.min}`]: E == null ? void 0 : E.min,
    [`${g}--layout-constraint--${b}__max-${E == null ? void 0 : E.max}`]: E == null ? void 0 : E.max
  })));
  return /* @__PURE__ */ d.createElement(a, de({}, p, {
    ref: m,
    className: h
  }), o);
});
vy.propTypes = {
  /**
   * Specify a custom component or element to be rendered as the top-level
   * element in the component
   */
  as: c.oneOfType([c.func, c.string, c.elementType]),
  /**
   * Provide child elements to be rendered inside of `LayoutConstraint`
   */
  children: c.node,
  /**
   * Provide a custom class name to be used on the outermost element rendered by
   * the component
   */
  className: c.string,
  /**
   * Specify the desired layout density constraints of this element's children
   */
  density: c.shape({
    min: c.oneOf(hr),
    default: c.oneOf(hr),
    max: c.oneOf(hr)
  }),
  /**
   * Specify the desired layout size constraints of this element's children
   */
  size: c.shape({
    min: c.oneOf(pr),
    default: c.oneOf(pr),
    max: c.oneOf(pr)
  })
};
function Ey({
  align: a = "bottom",
  autoAlign: o = !1,
  feedback: r = "Copied!",
  feedbackTimeout: i = 2e3,
  iconDescription: f = "Copy to clipboard",
  className: p,
  onClick: m = st,
  ...g
}) {
  const h = be();
  return /* @__PURE__ */ d.createElement(vy, {
    size: {
      default: "md",
      max: "lg"
    }
  }, /* @__PURE__ */ d.createElement(Ff, de({
    feedback: r,
    feedbackTimeout: i,
    onClick: m,
    align: a,
    autoAlign: o,
    className: oe(p, `${h}--copy-btn`),
    "aria-label": f
  }, g), /* @__PURE__ */ d.createElement(RS, {
    className: `${h}--snippet__icon`
  })));
}
Ey.propTypes = {
  /**
   * Specify how the trigger should align with the tooltip
   */
  align: Hl(c.oneOf([
    "top",
    "top-left",
    // deprecated use top-start instead
    "top-right",
    // deprecated use top-end instead
    "bottom",
    "bottom-left",
    // deprecated use bottom-start instead
    "bottom-right",
    // deprecated use bottom-end instead
    "left",
    "left-bottom",
    // deprecated use left-end instead
    "left-top",
    // deprecated use left-start instead
    "right",
    "right-bottom",
    // deprecated use right-end instead
    "right-top",
    // deprecated use right-start instead
    // new values to match floating-ui
    "top-start",
    "top-end",
    "bottom-start",
    "bottom-end",
    "left-end",
    "left-start",
    "right-end",
    "right-start"
  ]), ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"], Ul),
  /**
   * **Experimental**: Will attempt to automatically align the tooltip. Requires
   * React v17+
   * @see https://github.com/carbon-design-system/carbon/issues/18714
   */
  autoAlign: c.bool,
  /**
   * Specify an optional className to be applied to the underlying `<button>`
   */
  className: c.string,
  /**
   * Specify the string that is displayed when the button is clicked and the
   * content is copied
   */
  feedback: c.string,
  /**
   * Specify the time it takes for the feedback message to timeout
   */
  feedbackTimeout: c.number,
  /**
   * Provide a description for the icon representing the copy action that can
   * be read by screen readers
   */
  iconDescription: c.string,
  /**
   * Specify an optional `onClick` handler that is called when the underlying
   * `<button>` is clicked
   */
  onClick: c.func
};
var lf, o0;
function Qx() {
  return o0 || (o0 = 1, lf = function() {
    var a = document.getSelection();
    if (!a.rangeCount)
      return function() {
      };
    for (var o = document.activeElement, r = [], i = 0; i < a.rangeCount; i++)
      r.push(a.getRangeAt(i));
    switch (o.tagName.toUpperCase()) {
      // .toUpperCase handles XHTML
      case "INPUT":
      case "TEXTAREA":
        o.blur();
        break;
      default:
        o = null;
        break;
    }
    return a.removeAllRanges(), function() {
      a.type === "Caret" && a.removeAllRanges(), a.rangeCount || r.forEach(function(f) {
        a.addRange(f);
      }), o && o.focus();
    };
  }), lf;
}
var af, r0;
function Kx() {
  if (r0) return af;
  r0 = 1;
  var a = Qx(), o = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
  }, r = "Copy to clipboard: #{key}, Enter";
  function i(p) {
    var m = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return p.replace(/#{\s*key\s*}/g, m);
  }
  function f(p, m) {
    var g, h, b, E, S, w, x = !1;
    m || (m = {}), g = m.debug || !1;
    try {
      b = a(), E = document.createRange(), S = document.getSelection(), w = document.createElement("span"), w.textContent = p, w.ariaHidden = "true", w.style.all = "unset", w.style.position = "fixed", w.style.top = 0, w.style.clip = "rect(0, 0, 0, 0)", w.style.whiteSpace = "pre", w.style.webkitUserSelect = "text", w.style.MozUserSelect = "text", w.style.msUserSelect = "text", w.style.userSelect = "text", w.addEventListener("copy", function(C) {
        if (C.stopPropagation(), m.format)
          if (C.preventDefault(), typeof C.clipboardData > "u") {
            g && console.warn("unable to use e.clipboardData"), g && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var A = o[m.format] || o.default;
            window.clipboardData.setData(A, p);
          } else
            C.clipboardData.clearData(), C.clipboardData.setData(m.format, p);
        m.onCopy && (C.preventDefault(), m.onCopy(C.clipboardData));
      }), document.body.appendChild(w), E.selectNodeContents(w), S.addRange(E);
      var N = document.execCommand("copy");
      if (!N)
        throw new Error("copy command was unsuccessful");
      x = !0;
    } catch (C) {
      g && console.error("unable to copy using execCommand: ", C), g && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(m.format || "text", p), m.onCopy && m.onCopy(window.clipboardData), x = !0;
      } catch (A) {
        g && console.error("unable to copy using clipboardData: ", A), g && console.error("falling back to prompt"), h = i("message" in m ? m.message : r), window.prompt(h, p);
      }
    } finally {
      S && (typeof S.removeRange == "function" ? S.removeRange(E) : S.removeAllRanges()), w && document.body.removeChild(w), b();
    }
    return x;
  }
  return af = f, af;
}
var Fx = Kx();
const Jx = /* @__PURE__ */ fo(Fx), Pa = 16, Wx = 15, Px = 0, eT = 3, tT = 16;
function Sy({
  align: a = "bottom",
  autoAlign: o = !1,
  className: r,
  type: i = "single",
  children: f,
  disabled: p,
  feedback: m,
  feedbackTimeout: g,
  onClick: h,
  ["aria-label"]: b = "Copy to clipboard",
  ariaLabel: E,
  copyText: S,
  copyButtonDescription: w,
  light: x,
  showMoreText: N = "Show more",
  showLessText: C = "Show less",
  hideCopyButton: A,
  wrapText: $ = !1,
  maxCollapsedNumberOfRows: _ = Wx,
  maxExpandedNumberOfRows: z = Px,
  minCollapsedNumberOfRows: D = eT,
  minExpandedNumberOfRows: H = tT,
  ...L
}) {
  const [j, I] = v.useState(!1), [F, Z] = v.useState(!1), {
    current: he
  } = v.useRef(dt()), ae = v.useRef(null), se = v.useRef(null), ne = v.useRef(null), ge = v.useCallback(() => i === "single" ? se : i === "multi" ? ae : ne, [i]), R = be();
  Kf({
    ref: ge(),
    onResize: () => {
      if (ne != null && ne.current && i === "multi") {
        const {
          height: O
        } = ne.current.getBoundingClientRect();
        _ > 0 && (z <= 0 || z > _) && O > _ * Pa ? Z(!0) : Z(!1), j && H > 0 && O <= H * Pa && I(!1);
      }
    }
  });
  const J = (O) => {
    var q;
    (S || ne != null && ne.current) && Jx(S ?? ((q = ne == null ? void 0 : ne.current) == null ? void 0 : q.innerText) ?? ""), h && h(O);
  }, W = oe(r, `${R}--snippet`, {
    [`${R}--snippet--${i}`]: i,
    [`${R}--snippet--disabled`]: i !== "inline" && p,
    [`${R}--snippet--expand`]: j,
    [`${R}--snippet--light`]: x,
    [`${R}--snippet--no-copy`]: A,
    [`${R}--snippet--wraptext`]: $
  }), le = j ? C : N;
  if (i === "inline")
    return A ? /* @__PURE__ */ d.createElement("span", {
      className: W
    }, /* @__PURE__ */ d.createElement("code", {
      id: he,
      ref: ne
    }, f)) : /* @__PURE__ */ d.createElement(Ff, de({}, L, {
      align: a,
      autoAlign: o,
      onClick: J,
      "aria-label": E || b,
      "aria-describedby": he,
      className: W,
      disabled: p,
      feedback: m,
      feedbackTimeout: g
    }), /* @__PURE__ */ d.createElement("code", {
      id: he,
      ref: ne
    }, f));
  const pe = {};
  if (i === "multi") {
    const O = {};
    j ? (z > 0 && (O.maxHeight = z * Pa), H > 0 && (O.minHeight = H * Pa)) : (_ > 0 && (O.maxHeight = _ * Pa), D > 0 && (O.minHeight = D * Pa)), Object.keys(O).length && (pe.style = O);
  }
  return /* @__PURE__ */ d.createElement("div", de({}, L, {
    className: W
  }), /* @__PURE__ */ d.createElement("div", de({
    ref: se,
    role: i === "single" || i === "multi" ? "textbox" : void 0,
    tabIndex: (i === "single" || i === "multi") && !p ? 0 : void 0,
    className: `${R}--snippet-container`,
    "aria-label": E || b || "code-snippet",
    "aria-readonly": i === "single" || i === "multi" ? !0 : void 0,
    "aria-multiline": i === "multi" ? !0 : void 0
  }, pe), /* @__PURE__ */ d.createElement("pre", de({
    ref: ae
  }, pe), /* @__PURE__ */ d.createElement("code", {
    ref: ne
  }, f))), !A && /* @__PURE__ */ d.createElement(Ey, {
    align: a,
    autoAlign: o,
    size: i === "multi" ? "sm" : "md",
    disabled: p,
    onClick: J,
    feedback: m,
    feedbackTimeout: g,
    iconDescription: w
  }), F && /* @__PURE__ */ d.createElement(He, {
    kind: "ghost",
    size: "sm",
    className: `${R}--snippet-btn--expand`,
    disabled: p,
    onClick: () => I(!j)
  }, /* @__PURE__ */ d.createElement("span", {
    className: `${R}--snippet-btn--text`
  }, le), /* @__PURE__ */ d.createElement(ao, {
    className: `${R}--icon-chevron--down ${R}--snippet__icon`,
    name: "chevron--down",
    role: "img"
  })));
}
Sy.propTypes = {
  /**
   * Specify how the trigger should align with the tooltip
   */
  align: Hl(c.oneOf([
    "top",
    "top-left",
    // deprecated use top-start instead
    "top-right",
    // deprecated use top-end instead
    "bottom",
    "bottom-left",
    // deprecated use bottom-start instead
    "bottom-right",
    // deprecated use bottom-end instead
    "left",
    "left-bottom",
    // deprecated use left-end instead
    "left-top",
    // deprecated use left-start instead
    "right",
    "right-bottom",
    // deprecated use right-end instead
    "right-top",
    // deprecated use right-start instead
    // new values to match floating-ui
    "top-start",
    "top-end",
    "bottom-start",
    "bottom-end",
    "left-end",
    "left-start",
    "right-end",
    "right-start"
  ]), ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"], Ul),
  /**
   * Specify a label to be read by screen readers on the containing textbox
   * node
   */
  "aria-label": c.string,
  /**
   * Deprecated, please use `aria-label` instead.
   * Specify a label to be read by screen readers on the containing textbox
   * node
   */
  ariaLabel: $e(c.string),
  /**
   * **Experimental**: Will attempt to automatically align the tooltip. Requires
   * React v17+
   * @see https://github.com/carbon-design-system/carbon/issues/18714
   */
  autoAlign: c.bool,
  /**
   * Provide the content of your CodeSnippet as a node or string
   */
  children: c.node,
  /**
   * Specify an optional className to be applied to the container node
   */
  className: c.string,
  /**
   * Specify the description for the Copy Button
   */
  copyButtonDescription: c.string,
  /**
   * Optional text to copy. If not specified, the `children` node's `innerText`
   * will be used as the copy value.
   */
  copyText: c.string,
  /**
   * Specify whether or not the CodeSnippet should be disabled
   */
  disabled: c.bool,
  /**
   * Specify the string displayed when the snippet is copied
   */
  feedback: c.string,
  /**
   * Specify the time it takes for the feedback message to timeout
   */
  feedbackTimeout: c.number,
  /**
   * Specify whether or not a copy button should be used/rendered.
   */
  hideCopyButton: c.bool,
  /**
   * Specify whether you are using the light variant of the Code Snippet,
   * typically used for inline snippet to display an alternate color
   */
  light: $e(c.bool),
  /**
   * Specify the maximum number of rows to be shown when in collapsed view
   */
  maxCollapsedNumberOfRows: c.number,
  /**
   * Specify the maximum number of rows to be shown when in expanded view
   */
  maxExpandedNumberOfRows: c.number,
  /**
   * Specify the minimum number of rows to be shown when in collapsed view
   */
  minCollapsedNumberOfRows: c.number,
  /**
   * Specify the minimum number of rows to be shown when in expanded view
   */
  minExpandedNumberOfRows: c.number,
  /**
   * An optional handler to listen to the `onClick` even fired by the Copy
   * Button
   */
  onClick: c.func,
  /**
   * Specify a string that is displayed when the Code Snippet has been
   * interacted with to show more lines
   */
  showLessText: c.string,
  /**
   * Specify a string that is displayed when the Code Snippet text is more
   * than 15 lines
   */
  showMoreText: c.string,
  /**
   * Provide the type of Code Snippet
   */
  type: c.oneOf(["single", "inline", "multi"]),
  /**
   * Specify whether or not to wrap the text.
   */
  wrapText: c.bool
};
var of, i0;
function nT() {
  if (i0) return of;
  i0 = 1;
  var a = typeof Element < "u", o = typeof Map == "function", r = typeof Set == "function", i = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function f(p, m) {
    if (p === m) return !0;
    if (p && m && typeof p == "object" && typeof m == "object") {
      if (p.constructor !== m.constructor) return !1;
      var g, h, b;
      if (Array.isArray(p)) {
        if (g = p.length, g != m.length) return !1;
        for (h = g; h-- !== 0; )
          if (!f(p[h], m[h])) return !1;
        return !0;
      }
      var E;
      if (o && p instanceof Map && m instanceof Map) {
        if (p.size !== m.size) return !1;
        for (E = p.entries(); !(h = E.next()).done; )
          if (!m.has(h.value[0])) return !1;
        for (E = p.entries(); !(h = E.next()).done; )
          if (!f(h.value[1], m.get(h.value[0]))) return !1;
        return !0;
      }
      if (r && p instanceof Set && m instanceof Set) {
        if (p.size !== m.size) return !1;
        for (E = p.entries(); !(h = E.next()).done; )
          if (!m.has(h.value[0])) return !1;
        return !0;
      }
      if (i && ArrayBuffer.isView(p) && ArrayBuffer.isView(m)) {
        if (g = p.length, g != m.length) return !1;
        for (h = g; h-- !== 0; )
          if (p[h] !== m[h]) return !1;
        return !0;
      }
      if (p.constructor === RegExp) return p.source === m.source && p.flags === m.flags;
      if (p.valueOf !== Object.prototype.valueOf && typeof p.valueOf == "function" && typeof m.valueOf == "function") return p.valueOf() === m.valueOf();
      if (p.toString !== Object.prototype.toString && typeof p.toString == "function" && typeof m.toString == "function") return p.toString() === m.toString();
      if (b = Object.keys(p), g = b.length, g !== Object.keys(m).length) return !1;
      for (h = g; h-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(m, b[h])) return !1;
      if (a && p instanceof Element) return !1;
      for (h = g; h-- !== 0; )
        if (!((b[h] === "_owner" || b[h] === "__v" || b[h] === "__o") && p.$$typeof) && !f(p[b[h]], m[b[h]]))
          return !1;
      return !0;
    }
    return p !== p && m !== m;
  }
  return of = function(m, g) {
    try {
      return f(m, g);
    } catch (h) {
      if ((h.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), !1;
      throw h;
    }
  }, of;
}
var lT = nT();
const rf = /* @__PURE__ */ fo(lT), wy = /* @__PURE__ */ v.createContext({
  isFluid: !1
}), co = (...a) => (o) => {
  a.forEach((r) => {
    r && (typeof r == "function" ? r(o) : typeof r == "object" && "current" in r && (r.current = o));
  });
}, xy = ({
  id: a,
  readOnly: o,
  disabled: r,
  invalid: i,
  invalidText: f,
  warn: p,
  warnText: m
}) => {
  const g = be(), h = {
    disabled: !o && r,
    invalid: !o && !r && i,
    invalidId: `${a}-error-msg`,
    warn: !o && !i && !r && p,
    warnId: `${a}-warn-msg`,
    validation: null,
    icon: null,
    helperId: `${a}-helper-text`
  };
  return h.invalid ? (h.icon = Mf, h.validation = /* @__PURE__ */ d.createElement(Fe, {
    as: "div",
    className: `${g}--form-requirement`,
    id: h.invalidId
  }, f)) : h.warn && (h.icon = Df, h.validation = /* @__PURE__ */ d.createElement(Fe, {
    as: "div",
    className: `${g}--form-requirement`,
    id: h.warnId
  }, m)), h;
}, aT = {
  isRoot: !0,
  hasIcons: !1,
  hasSelectableItems: !1,
  size: null,
  items: [],
  requestCloseRoot: () => {
  }
};
function oT(a, o) {
  var r;
  switch (o.type) {
    case "enableIcons":
      return {
        ...a,
        hasIcons: !0
      };
    case "enableSelectableItems":
      return {
        ...a,
        hasSelectableItems: !0
      };
    case "registerItem": {
      const i = o.payload, f = a.items.filter((g) => g.ref.current), p = (r = i.ref.current) == null ? void 0 : r.nextElementSibling, m = f.findIndex((g) => g.ref.current === p);
      return f.splice(m < 0 ? f.length : m, 0, i), {
        ...a,
        items: f
      };
    }
  }
}
const c0 = /* @__PURE__ */ v.createContext({
  state: aT,
  // 'dispatch' is populated by the root menu
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- https://github.com/carbon-design-system/carbon/issues/20452
  dispatch: (a) => {
  }
}), rT = /* @__PURE__ */ d.createContext({
  direction: "ltr"
});
function iT() {
  return v.useContext(rT);
}
const Ty = !!(typeof window < "u" && window.document && window.document.createElement), Ji = 8, Cy = /* @__PURE__ */ v.forwardRef(function({
  backgroundToken: o = "layer",
  border: r = !1,
  children: i,
  className: f,
  containerRef: p,
  label: m,
  menuAlignment: g,
  onClose: h,
  onOpen: b,
  open: E,
  size: S = "sm",
  legacyAutoalign: w = "true",
  target: x = Ty && document.body,
  x: N = 0,
  y: C = 0,
  ...A
}, $) {
  const _ = be(), z = v.useRef(null), D = v.useContext(c0), H = D.state.isRoot, L = H ? S : D.state.size, [j, I] = v.useReducer(oT, {
    ...D.state,
    isRoot: !1,
    hasIcons: !1,
    hasSelectableItems: !1,
    size: S,
    requestCloseRoot: H ? le : D.state.requestCloseRoot
  }), F = v.useMemo(() => ({
    state: j,
    dispatch: I
  }), [j, I]), Z = v.useRef(null), he = zn([$, Z]), [ae, se] = v.useState([-1, -1]), ne = F.state.items.filter((ie) => !ie.disabled && ie.ref.current);
  let ge;
  if (p != null && p.current) {
    const {
      width: ie
    } = p.current.getBoundingClientRect();
    ge = ie;
  }
  const {
    direction: R
  } = iT();
  function J() {
    z.current && z.current.focus();
  }
  function W() {
    var ie;
    if (Z.current) {
      const {
        activeElement: ve,
        dir: Ne
      } = document;
      if (z.current = ve instanceof HTMLElement ? ve : null, w) {
        const Te = V();
        (Ne === "rtl" || R === "rtl") && !((ie = A == null ? void 0 : A.id) != null && ie.includes("MenuButton")) ? (Z.current.style.insetInlineStart = "initial", Z.current.style.insetInlineEnd = `${Te[0]}px`) : (Z.current.style.insetInlineStart = `${Te[0]}px`, Z.current.style.insetInlineEnd = "initial"), Z.current.style.insetBlockStart = `${Te[1]}px`, se(Te);
      }
      Z.current.focus(), b && b();
    }
  }
  function le() {
    J(), h && h();
  }
  function pe(ie) {
    ie.stopPropagation(), (at(ie, al) || at(ie, Tr) || !H && at(ie, hc)) && h ? (ie.preventDefault(), le()) : O(ie);
  }
  function O(ie) {
    var Oe, Ee;
    const ve = ne == null ? void 0 : ne.filter((Ue) => {
      var Se;
      return (Se = Ue == null ? void 0 : Ue.ref) == null ? void 0 : Se.current;
    });
    if (!(ve != null && ve.length)) return;
    const Ne = ne.findIndex((Ue) => {
      var Se, fe;
      return (fe = (Se = Ue.ref) == null ? void 0 : Se.current) == null ? void 0 : fe.contains(document.activeElement);
    });
    let Te = Ne;
    if (Ne === -1 ? Te = 0 : ie && (at(ie, $f) && (Te = Te - 1), at(ie, Lf) && (Te = Te + 1)), Te < 0 && (Te = ve.length - 1), Te >= ve.length && (Te = 0), Te !== Ne) {
      const Ue = ve[Te];
      (Ee = (Oe = Ue == null ? void 0 : Ue.ref) == null ? void 0 : Oe.current) == null || Ee.focus(), ie == null || ie.preventDefault();
    }
  }
  function q(ie) {
    var ve;
    E && h && H && ie.relatedTarget && !((ve = Z.current) != null && ve.contains(ie.relatedTarget)) && le();
  }
  function P(ie, ve) {
    if (!Z.current)
      return;
    const {
      width: Ne,
      height: Te
    } = Z.current.getBoundingClientRect(), Oe = H ? "vertical" : "horizontal", Ee = {
      x: {
        max: window.innerWidth,
        size: Ne,
        anchor: Oe === "horizontal" ? ie[1] : ie[0],
        reversedAnchor: Oe === "horizontal" ? ie[0] : ie[1],
        offset: 0
      },
      y: {
        max: window.innerHeight,
        size: Te,
        anchor: Oe === "horizontal" ? ie[0] : ie[1],
        reversedAnchor: Oe === "horizontal" ? ie[1] : ie[0],
        offset: H ? 0 : 4
        // top padding in menu, used to align the menu items
      }
    };
    if (ge && ge < Ee.x.size && (g === "bottom" || g === "top") && (Ee.x.size = ge), ge && (g === "bottom-end" || g === "top-end") && Ee.x.anchor >= 87 && ge < Ee.x.size) {
      const ke = Ee.x.anchor + Ee.x.reversedAnchor;
      Ee.x.anchor = Ee.x.anchor + ke;
    }
    const {
      max: Ue,
      size: Se,
      anchor: fe,
      reversedAnchor: Ye,
      offset: ze
    } = Ee[ve], je = [
      // towards max (preferred)
      Ue - Ji - Se - fe >= 0 ? fe - ze : !1,
      // towards min / reversed (first fallback)
      Ye - Se >= 0 ? Ye - Se + ze : !1,
      // align at max (second fallback)
      Ue - Ji - Se
    ], We = g === "top" || g === "top-end" || g === "top-start";
    typeof je[0] == "number" && We && je[0] >= 0 && !je[1] && ve === "y" ? Z.current.style.transform = "translate(0)" : We && !je[0] && ve === "y" && (je[0] = fe - ze);
    const _e = je.find((ke) => ke !== !1);
    return _e >= Ji ? _e : Ji;
  }
  function G(ie) {
    return ie != null;
  }
  function te(ie) {
    if (Array.isArray(ie)) {
      const ve = ie.filter(G);
      return ve.length === 2 ? ve : void 0;
    } else
      return [ie, ie];
  }
  function V() {
    const ie = {
      x: te(N),
      y: te(C)
    };
    return !ie.x || !ie.y ? [-1, -1] : [P(ie.x, "x") ?? -1, P(ie.y, "y") ?? -1];
  }
  v.useEffect(() => {
    if (E) {
      const ie = requestAnimationFrame(() => {
        ne.length > 0 && O();
      });
      return () => cancelAnimationFrame(ie);
    }
  }, [E, ne]), v.useEffect(() => {
    E ? W() : se([-1, -1]);
  }, [E]);
  const Q = oe(f, `${_}--menu`, `${_}--menu--${L}`, {
    // --open sets visibility and --shown sets opacity.
    // visibility is needed for focusing elements.
    // opacity is only set once the position has been set correctly
    // to avoid a flicker effect when opening.
    [`${_}--menu--box-shadow-top`]: g && g.slice(0, 3) === "top",
    [`${_}--menu--open`]: E,
    [`${_}--menu--shown`]: E && !w || ae[0] >= 0 && ae[1] >= 0,
    [`${_}--menu--with-icons`]: F.state.hasIcons,
    [`${_}--menu--with-selectable-items`]: F.state.hasSelectableItems,
    [`${_}--autoalign`]: !w,
    [`${_}--menu--border`]: r,
    [`${_}--menu--background-token__background`]: o === "background"
  }), me = /* @__PURE__ */ d.createElement(c0.Provider, {
    value: F
  }, /* @__PURE__ */ d.createElement("ul", de({}, A, {
    className: Q,
    role: "menu",
    ref: he,
    "aria-label": m,
    tabIndex: -1,
    onKeyDown: pe,
    onBlur: q
  }), i));
  return x && H ? E && /* @__PURE__ */ kf.createPortal(me, x) || null : me;
});
Cy.propTypes = {
  /**
   * Specify the background token to use. Default is 'layer'.
   */
  backgroundToken: c.oneOf(["layer", "background"]),
  /**
   * Specify whether a border should be rendered on the menu
   */
  border: c.bool,
  /**
   * A collection of MenuItems to be rendered within this Menu.
   */
  children: c.node,
  /**
   * Additional CSS class names.
   */
  className: c.string,
  /**
   * A label describing the Menu.
   */
  label: c.string,
  /**
   * Specify how the menu should align with the button element
   */
  menuAlignment: c.string,
  /**
   * **Deprecated**: Menus now always support both icons as well as selectable items and nesting.
   * The mode of this menu. Defaults to full.
   * `full` supports nesting and selectable menu items, but no icons.
   * `basic` supports icons but no nesting or selectable menu items.
   *
   * **This prop is not intended for use and will be set by the respective implementation (like useContextMenu, MenuButton, and ComboButton).**
   */
  mode: $e(c.oneOf(["full", "basic"])),
  /**
   * Provide an optional function to be called when the Menu should be closed,
   * including if the Menu is blurred, the user presses escape, or the Menu is
   * a submenu and the user presses ArrowLeft.
   */
  onClose: c.func,
  /**
   * Provide an optional function to be called when the Menu is opened.
   */
  onOpen: c.func,
  /**
   * Whether the Menu is open or not.
   */
  open: c.bool,
  /**
   * Specify the size of the Menu.
   */
  size: c.oneOf(["xs", "sm", "md", "lg"]),
  /**
   * Specify a DOM node where the Menu should be rendered in. Defaults to document.body.
   */
  target: c.object,
  /**
   * Specify the x position of the Menu. Either pass a single number or an array with two numbers describing your activator's boundaries ([x1, x2])
   */
  x: c.oneOfType([c.number, c.arrayOf(c.number)]),
  /**
   * Specify the y position of the Menu. Either pass a single number or an array with two numbers describing your activator's boundaries ([y1, y2])
   */
  y: c.oneOfType([c.number, c.arrayOf(c.number)])
};
const cT = ({
  defaultValue: a,
  name: o = "custom",
  onChange: r,
  value: i
}) => {
  const [f, p] = v.useState(typeof i < "u" ? i : a), m = v.useRef(null);
  m.current === null && (m.current = typeof i < "u");
  const g = (h) => {
    const b = typeof h == "function" ? h(f) : h;
    m.current === !1 && p(b), r && r(b);
  };
  return v.useEffect(() => {
    const h = typeof i < "u";
    m.current, m.current;
  }, [o, i]), m.current === !0 ? [i, g, m.current] : [f, g, m.current];
};
function sT(a) {
  const [o, r] = v.useState(!1), [i, f] = v.useState([[-1, -1], [-1, -1]]);
  function p() {
    const b = (a == null ? void 0 : a.current) || a;
    if (b) {
      const {
        left: E,
        top: S,
        right: w,
        bottom: x
      } = b.getBoundingClientRect();
      f([[E, w], [S, x]]);
    }
    r(!0);
  }
  function m() {
    r(!1);
  }
  function g() {
    o ? m() : p();
  }
  function h(b) {
    b.preventDefault();
  }
  return {
    open: o,
    x: i[0],
    y: i[1],
    handleClick: g,
    handleMousedown: h,
    handleClose: m
  };
}
const s0 = /* @__PURE__ */ d.createContext(1), uT = ["one", "two", "three"], Ef = [0, 1, 2], fT = Ef[0], dT = Ef[Ef.length - 1], mT = (a, o, r) => Math.min(r, Math.max(o, a)), Bl = /* @__PURE__ */ d.forwardRef((a, o) => {
  const {
    as: r,
    className: i,
    children: f,
    level: p,
    withBackground: m = !1,
    ...g
  } = a, h = d.useContext(s0), b = p ?? h, E = be(), S = oe(`${E}--layer-${uT[b]}`, {
    [`${E}--layer__with-background`]: m
  }, i), w = mT(b + 1, fT, dT), x = r || "div";
  return /* @__PURE__ */ d.createElement(s0.Provider, {
    value: w
  }, /* @__PURE__ */ d.createElement(x, de({
    ref: o
  }, g, {
    className: S
  }), f));
});
Bl.displayName = "Layer";
Bl.propTypes = {
  /**
   * Specify a custom component or element to be rendered as the top-level
   * element in the component
   */
  as: c.oneOfType([c.func, c.string, c.elementType]),
  /**
   * Provide child elements to be rendered inside of `Theme`
   */
  children: c.node,
  /**
   * Provide a custom class name to be used on the outermost element rendered by
   * the component
   */
  className: c.string,
  /**
   * Specify the layer level and override any existing levels based on hierarchy
   */
  level: c.oneOf([0, 1, 2]),
  /**
   * Applies a css background-color set to $layer-background
   */
  withBackground: c.bool
};
const Sc = /* @__PURE__ */ d.forwardRef(function({
  buttonOnClick: o,
  children: r,
  className: i,
  closeClassName: f,
  closeIconClassName: p,
  closeModal: m,
  iconDescription: g = "Close",
  label: h,
  labelClassName: b,
  title: E,
  titleClassName: S,
  ...w
}, x) {
  const N = be();
  function C(H) {
    m == null || m(H), o == null || o(H);
  }
  const A = oe(`${N}--modal-header`, i), $ = oe(`${N}--modal-header__label ${N}--type-delta`, b), _ = oe(`${N}--modal-header__heading ${N}--type-beta`, S), z = oe(`${N}--modal-close`, f), D = oe(`${N}--modal-close__icon`, p);
  return /* @__PURE__ */ d.createElement("div", de({
    className: A
  }, w, {
    ref: x
  }), h && /* @__PURE__ */ d.createElement("h2", {
    className: $
  }, h), E && /* @__PURE__ */ d.createElement("h2", {
    className: _
  }, E), r, /* @__PURE__ */ d.createElement("div", {
    className: `${N}--modal-close-button`
  }, /* @__PURE__ */ d.createElement(Ln, {
    className: z,
    label: g,
    onClick: C,
    "aria-label": g,
    align: "left"
  }, /* @__PURE__ */ d.createElement(Ll, {
    size: 20,
    "aria-hidden": "true",
    tabIndex: "-1",
    className: D
  }))));
});
Sc.propTypes = {
  /**
   * Provide an optional function to be called when the close button is
   * clicked
   */
  buttonOnClick: c.func,
  /**
   * Specify the content to be placed in the ModalHeader
   */
  children: c.node,
  /**
   * Specify an optional className to be applied to the modal header
   */
  className: c.string,
  /**
   * Specify an optional className to be applied to the modal close node
   */
  closeClassName: c.string,
  /**
   * Specify an optional className to be applied to the modal close icon node
   */
  closeIconClassName: c.string,
  /**
   * Provide an optional function to be called when the modal is closed
   */
  closeModal: c.func,
  /**
   * Specify a description for the close icon that can be read by screen
   * readers
   */
  iconDescription: c.string,
  /**
   * Specify an optional label to be displayed
   */
  label: c.string,
  /**
   * Specify an optional className to be applied to the modal header label
   */
  labelClassName: c.string,
  /**
   * Specify an optional title to be displayed
   */
  title: c.node,
  /**
   * Specify an optional className to be applied to the modal heading
   */
  titleClassName: c.string
};
function Rr({
  active: a = !0,
  className: o,
  withOverlay: r = !0,
  small: i = !1,
  description: f = "loading",
  ...p
}) {
  const m = be(), g = oe(o, {
    [`${m}--loading`]: !0,
    [`${m}--loading--small`]: i,
    [`${m}--loading--stop`]: !a
  }), h = oe({
    [`${m}--loading-overlay`]: !0,
    [`${m}--loading-overlay--stop`]: !a
  }), b = /* @__PURE__ */ d.createElement("div", de({}, p, {
    "aria-atomic": "true",
    "aria-live": a ? "assertive" : "off",
    className: g
  }), /* @__PURE__ */ d.createElement("svg", {
    className: `${m}--loading__svg`,
    viewBox: "0 0 100 100",
    role: "img",
    "aria-label": f
  }, /* @__PURE__ */ d.createElement("title", null, f), i ? /* @__PURE__ */ d.createElement("circle", {
    className: `${m}--loading__background`,
    cx: "50%",
    cy: "50%",
    r: "42"
  }) : null, /* @__PURE__ */ d.createElement("circle", {
    className: `${m}--loading__stroke`,
    cx: "50%",
    cy: "50%",
    r: i ? "42" : "44"
  })));
  return r ? /* @__PURE__ */ d.createElement("div", {
    className: h
  }, b) : b;
}
Rr.propTypes = {
  /**
   * Specify whether you want the loading indicator to be spinning or not
   */
  active: c.bool,
  /**
   * Provide an optional className to be applied to the containing node
   */
  className: c.string,
  /**
   * Specify a description that would be used to best describe the loading state
   */
  description: c.string,
  /**
   * Provide an `id` to uniquely identify the label
   */
  id: $e(c.string),
  /**
   * Specify whether you would like the small variant of <Loading>
   */
  small: c.bool,
  /**
   * Specify whether you want the loader to be applied with an overlay
   */
  withOverlay: c.bool
};
const Sr = ({
  className: a,
  status: o = "active",
  iconDescription: r,
  description: i,
  onSuccess: f,
  successDelay: p = 1500,
  ...m
}) => {
  const g = be(), h = oe(`${g}--inline-loading`, a), b = v.useRef(null);
  v.useEffect(() => (o === "finished" && (b.current = setTimeout(() => {
    f && f();
  }, p)), () => {
    b.current && (clearTimeout(b.current), b.current = null);
  }), [o, f, p]);
  const E = () => {
    let N = r || o;
    if (o === "error")
      return /* @__PURE__ */ d.createElement(q0, {
        className: `${g}--inline-loading--error`
      }, /* @__PURE__ */ d.createElement("title", null, N));
    if (o === "finished")
      return /* @__PURE__ */ d.createElement(U0, {
        className: `${g}--inline-loading__checkmark-container`
      }, /* @__PURE__ */ d.createElement("title", null, N));
    if (o === "inactive" || o === "active")
      return o === "inactive" ? void 0 : (r || (N = "loading"), /* @__PURE__ */ d.createElement(Rr, {
        small: !0,
        description: N,
        withOverlay: !1,
        active: o === "active"
      }));
  }, S = i && /* @__PURE__ */ d.createElement("div", {
    className: `${g}--inline-loading__text`
  }, i), w = E(), x = w && /* @__PURE__ */ d.createElement("div", {
    className: `${g}--inline-loading__animation`
  }, w);
  return /* @__PURE__ */ d.createElement("div", de({
    className: h
  }, m, {
    "aria-live": m["aria-live"] ?? (o === "inactive" ? "off" : "assertive")
  }), x, S);
};
Sr.propTypes = {
  /**
   * Specify a custom className to be applied to the container node
   */
  className: c.string,
  /**
   * Specify the description for the inline loading text
   */
  description: c.node,
  /**
   * Specify the description for the inline loading text
   */
  iconDescription: c.string,
  /**
   * Provide an optional handler to be invoked when <InlineLoading> is
   * successful
   */
  onSuccess: c.func,
  /**
   * Specify the loading status
   */
  status: c.oneOf(["inactive", "active", "finished", "error"]),
  /**
   * Provide a delay for the `setTimeout` for success
   */
  successDelay: c.number
};
function Ny({
  secondaryButtons: a,
  secondaryButtonText: o,
  secondaryClassName: r,
  closeModal: i,
  onRequestClose: f,
  disabled: p
}) {
  function m(g) {
    i(g), f(g);
  }
  return Array.isArray(a) && a.length <= 2 ? /* @__PURE__ */ d.createElement(d.Fragment, null, a.map(({
    buttonText: g,
    onClick: h
  }, b) => /* @__PURE__ */ d.createElement(He, {
    key: `${g}-${b}`,
    className: r,
    kind: "secondary",
    onClick: h || m
  }, g))) : o ? /* @__PURE__ */ d.createElement(He, {
    disabled: p,
    className: r,
    onClick: m,
    kind: "secondary"
  }, o) : null;
}
Ny.propTypes = {
  closeModal: c.func,
  disabled: c.bool,
  onRequestClose: c.func,
  secondaryButtonText: c.string,
  secondaryButtons: (a, o, r) => {
    if (a.secondaryButtons) {
      if (!Array.isArray(a.secondaryButtons) || a.secondaryButtons.length !== 2)
        return new Error(`${o} needs to be an array of two button config objects`);
      const i = {
        buttonText: c.node,
        onClick: c.func
      };
      a[o].forEach((f) => {
        c.checkPropTypes(i, f, o, r);
      });
    }
    return null;
  },
  secondaryClassName: c.string
};
const wr = /* @__PURE__ */ d.forwardRef(function({
  children: o,
  className: r,
  closeModal: i = st,
  danger: f,
  inputref: p,
  onRequestClose: m = st,
  onRequestSubmit: g = st,
  primaryButtonDisabled: h,
  primaryButtonText: b,
  primaryClassName: E,
  secondaryButtonText: S,
  secondaryButtons: w,
  secondaryClassName: x,
  loadingStatus: N = "inactive",
  loadingDescription: C,
  loadingIconDescription: A,
  onLoadingSuccess: $ = st,
  ..._
}, z) {
  const D = be(), H = oe(`${D}--modal-footer`, r, Array.isArray(w) && w.length === 2 ? `${D}--modal-footer--three-button` : null), L = oe(E, N !== "inactive" ? `${D}--btn--loading` : null), j = N !== "inactive", I = {
    closeModal: i,
    secondaryButtons: w,
    secondaryButtonText: S,
    secondaryClassName: x,
    onRequestClose: m,
    disabled: j
  };
  return /* @__PURE__ */ d.createElement(da, de({
    className: H
  }, _, {
    // @ts-expect-error: Invalid derived types, will be fine once explicit types are added
    ref: z,
    "aria-busy": j
  }), /* @__PURE__ */ d.createElement(Ny, I), b && /* @__PURE__ */ d.createElement(He, {
    onClick: g,
    className: L,
    disabled: j || h,
    kind: f ? "danger" : "primary",
    ref: p
  }, N === "inactive" ? b : /* @__PURE__ */ d.createElement(Sr, {
    status: N,
    description: C,
    iconDescription: A,
    className: `${D}--inline-loading--btn`,
    onSuccess: $
  })), o);
});
wr.propTypes = {
  /**
   * Pass in content that will be rendered in the Modal Footer
   */
  children: c.node,
  /**
   * Specify a custom className to be applied to the Modal Footer container
   */
  className: c.string,
  /**
   * Specify an optional function that is called whenever the modal is closed
   */
  closeModal: c.func,
  /**
   * Specify whether the primary button should be replaced with danger button.
   * Note that this prop is not applied if you render primary/danger button by yourself
   */
  danger: c.bool,
  /**
   * The `ref` callback for the primary button.
   */
  inputref: c.oneOfType([c.func, c.shape({
    current: c.any
  })]),
  /**
   * Specify the description for the loading text
   */
  loadingDescription: c.string,
  /**
   * Specify the description for the loading text
   */
  loadingIconDescription: c.string,
  /**
   * loading status
   */
  loadingStatus: c.oneOf(["inactive", "active", "finished", "error"]),
  /**
   * Provide an optional handler to be invoked when loading is
   * successful
   */
  onLoadingSuccess: c.func,
  /**
   * Specify an optional function for when the modal is requesting to be
   * closed
   */
  onRequestClose: c.func,
  /**
   * Specify an optional function for when the modal is requesting to be
   * submitted
   */
  onRequestSubmit: c.func,
  /**
   * Specify whether the primary button should be disabled
   */
  primaryButtonDisabled: c.bool,
  /**
   * Specify the text for the primary button
   */
  primaryButtonText: c.string,
  /**
   * Specify a custom className to be applied to the primary button
   */
  primaryClassName: c.string,
  /**
   * Specify the text for the secondary button
   */
  secondaryButtonText: c.string,
  /**
   * Specify an array of config objects for secondary buttons
   * (`Array<{
   *   buttonText: string,
   *   onClick: function,
   * }>`).
   */
  secondaryButtons: (a, o, r) => {
    if (a.secondaryButtons) {
      if (!Array.isArray(a.secondaryButtons) || a.secondaryButtons.length !== 2)
        return new Error(`${o} needs to be an array of two button config objects`);
      const i = {
        buttonText: c.node,
        onClick: c.func
      };
      a[o].forEach((f) => {
        c.checkPropTypes(i, f, o, r);
      });
    }
    return null;
  },
  /**
   * Specify a custom className to be applied to the secondary button
   */
  secondaryClassName: c.string
};
const cc = (a, o, r) => {
  a.classList.toggle(o, r);
}, gr = (a, o) => (r, i, f, ...p) => o(r, i, f, ...p), Sf = `
  a[href], area[href], input:not([disabled]):not([tabindex='-1']),
  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),
  textarea:not([disabled]):not([tabindex='-1']),
  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]
`, pT = `
  a[href], area[href], input:not([disabled]),
  button:not([disabled]),select:not([disabled]),
  textarea:not([disabled]),
  iframe, object, embed, *[tabindex]:not([disabled]), *[contenteditable=true]
`, hT = typeof Node < "u" ? Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINS : 0, gT = typeof Node < "u" ? Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY : 0, Jf = (a, o = [], r = "cds") => a instanceof Element && typeof a.closest == "function" ? [`.${r}--overflow-menu-options`, `.${r}--tooltip`, ".flatpickr-calendar", ...o].some((f) => !!a.closest(f)) : !1, Wf = ({
  bodyNode: a,
  startTrapNode: o,
  endTrapNode: r,
  currentActiveNode: i,
  oldActiveNode: f,
  selectorsFloatingMenus: p,
  prefix: m = "cds"
}) => {
  if (a && i && f && !a.contains(i) && !Jf(i, p, m)) {
    const g = f.compareDocumentPosition(i);
    if (i === o || g & hT) {
      const h = Array.from(a.querySelectorAll(Sf)).reverse().find(({
        offsetParent: b
      }) => !!b);
      h ? h.focus() : a !== f && a.focus();
    } else if (i === r || g & gT) {
      const h = Array.from(a.querySelectorAll(Sf)).find(({
        offsetParent: b
      }) => !!b);
      h ? h.focus() : a !== f && a.focus();
    }
  }
}, Pf = ({
  containerNode: a,
  currentActiveNode: o,
  event: r
}) => {
  if (!a) return;
  ["blur", "focusout", "focusin", "focus"].includes(r.type);
  const i = jw(a), f = i[0], p = i[i.length - 1];
  o === p && !r.shiftKey && (r.preventDefault(), f.focus()), o === f && r.shiftKey && (r.preventDefault(), p.focus());
}, wc = /* @__PURE__ */ v.createContext({}), xc = /* @__PURE__ */ d.forwardRef(({
  children: a,
  className: o,
  focusAfterCloseRef: r,
  modal: i,
  onCancel: f = st,
  onClick: p = st,
  onClose: m = st,
  onRequestClose: g = st,
  open: h = !1,
  role: b,
  ariaLabel: E,
  ariaLabelledBy: S,
  ariaDescribedBy: w,
  ...x
}, N) => {
  const C = be(), A = dt(), $ = `${C}--dialog-header__heading--${A}`, _ = `${C}--dialog-header__label--${A}`, z = v.useRef(null), D = N ?? z;
  function H(F) {
    h && i && F.target === D.current && g(F);
  }
  function L(F) {
    H(F), p(F);
  }
  v.useEffect(() => {
    D.current && (h ? i ? D.current.showModal() : D.current.show() : D.current.close());
  }, [i, h]), v.useEffect(() => {
    if (!h && r) {
      const F = setTimeout(() => {
        var Z;
        (Z = r.current) == null || Z.focus();
      });
      return () => {
        clearTimeout(F);
      };
    }
  }, [h, r]);
  const j = oe(`${C}--dialog-container`), I = {
    dialogId: A,
    titleId: $,
    subtitleId: _,
    isOpen: h
  };
  return v.useEffect(() => {
    if (D.current && h && !E && !S) {
      const F = D.current.querySelector(`.${C}--dialog-header__heading`);
      F && F.id && D.current.setAttribute("aria-labelledby", F.id);
    }
  }, [h, E, S, C]), /* @__PURE__ */ d.createElement(wc.Provider, {
    value: I
  }, /* @__PURE__ */ d.createElement("dialog", de({}, x, {
    className: oe(`${C}--dialog`, {
      [`${C}--dialog--modal`]: i
    }, o),
    ref: D,
    onCancel: f,
    onClick: L,
    onClose: m,
    role: b,
    "aria-label": E,
    "aria-labelledby": E ? void 0 : S || $,
    "aria-describedby": w
  }), /* @__PURE__ */ d.createElement("div", {
    className: j
  }, a)));
});
xc.displayName = "Dialog";
xc.propTypes = {
  /**
   * Provide children to be rendered inside of the Dialog
   */
  children: c.node,
  /**
   * Specify an optional className to be applied to the modal root node
   */
  className: c.string,
  /**
   * Provide a ref to return focus to once the dialog is closed.
   */
  focusAfterCloseRef: c.oneOfType([c.func, c.shape({
    current: c.any
  })]),
  /**
   * Modal specifies whether the Dialog is modal or non-modal. This cannot be
   * changed while open=true
   */
  modal: c.bool,
  /**
   * Specify a handler for closing Dialog.
   * The handler should care of closing Dialog, e.g. changing `open` prop.
   */
  onRequestClose: c.func,
  /**
   * open initial state
   */
  open: c.bool,
  /**
   * Specify the role of the dialog for accessibility
   */
  role: c.oneOf(["dialog", "alertdialog"]),
  /**
   * Specify a label for screen readers
   */
  "aria-label": c.string,
  /**
   * Specify the ID of an element that labels this dialog
   */
  "aria-labelledby": c.string,
  /**
   * Specify the ID of an element that describes this dialog
   */
  ariaDescribedBy: c.string
};
const _y = /* @__PURE__ */ d.forwardRef(({
  children: a,
  ...o
}, r) => {
  const i = be();
  return /* @__PURE__ */ d.createElement("div", de({
    className: `${i}--dialog__header`,
    ref: r
  }, o), a);
});
_y.displayName = "DialogHeader";
_y.propTypes = {
  /**
   * Provide the contents to be rendered inside of this component
   */
  children: c.node
};
const Ay = /* @__PURE__ */ d.forwardRef(({
  children: a,
  ...o
}, r) => {
  const i = be();
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
    // @ts-ignore
    /* @__PURE__ */ d.createElement("div", de({
      className: `${i}--dialog__header-controls`,
      ref: r
    }, o), a)
  );
});
Ay.displayName = "DialogControls";
Ay.propTypes = {
  /**
   * Provide children to be rendered inside of this component
   */
  children: c.node
};
const Ry = /* @__PURE__ */ d.forwardRef(({
  onClick: a,
  ...o
}, r) => {
  const i = be();
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
    // @ts-ignore
    /* @__PURE__ */ d.createElement(Ln, de({
      kind: "ghost",
      className: `${i}--dialog__close`,
      label: "Close",
      title: "Close",
      "aria-label": "Close",
      align: "left",
      onClick: a,
      ref: r
    }, o), /* @__PURE__ */ d.createElement(Ll, {
      size: 20,
      "aria-hidden": "true",
      tabIndex: -1,
      className: `${i}--icon__close`
    }))
  );
});
Ry.displayName = "DialogCloseButton";
Ry.propTypes = {
  /**
   * Specify a click handler applied to the IconButton
   */
  onClick: c.func
};
const Oy = /* @__PURE__ */ d.forwardRef(({
  children: a,
  className: o,
  id: r,
  ...i
}, f) => {
  const p = be(), {
    titleId: m
  } = v.useContext(wc), g = r || m;
  return /* @__PURE__ */ d.createElement(Fe, de({
    as: "h2",
    id: g,
    className: oe(`${p}--dialog-header__heading`, o),
    ref: f
  }, i), a);
});
Oy.displayName = "DialogTitle";
Oy.propTypes = {
  /**
   * Provide the contents to be rendered inside of this component
   */
  children: c.node,
  /**
   * Specify an optional className to be applied to the title node
   */
  className: c.string,
  /**
   * Specify an optional id for the title element
   */
  id: c.string
};
const Dy = /* @__PURE__ */ d.forwardRef(({
  children: a,
  className: o,
  id: r,
  ...i
}, f) => {
  const p = be(), {
    subtitleId: m
  } = v.useContext(wc), g = r || m;
  return /* @__PURE__ */ d.createElement(Fe, de({
    as: "h2",
    id: g,
    className: oe(`${p}--dialog-header__label`, o),
    ref: f
  }, i), a);
});
Dy.displayName = "DialogSubtitle";
Dy.propTypes = {
  /**
   * Provide the contents to be rendered inside of this component
   */
  children: c.node,
  /**
   * Specify an optional className to be applied to the subtitle node
   */
  className: c.string,
  /**
   * Specify an optional id for the subtitle element
   */
  id: c.string
};
const My = /* @__PURE__ */ d.forwardRef(({
  children: a,
  className: o,
  hasScrollingContent: r,
  ...i
}, f) => {
  const p = be(), m = v.useRef(null), [g, h] = v.useState(!1), b = dt(), E = `${p}--dialog-body--${b}`;
  Ct(() => {
    m.current && h(m.current.scrollHeight > m.current.clientHeight);
    function N() {
      m.current && h(m.current.scrollHeight > m.current.clientHeight);
    }
    const C = Er(N, 200);
    return window.addEventListener("resize", C), () => {
      C.cancel(), window.removeEventListener("resize", C);
    };
  }, []);
  const S = oe(`${p}--dialog-content`, {
    [`${p}--dialog-scroll-content`]: r || g
  }, o), w = r || g ? {
    tabIndex: 0,
    role: "region"
  } : {}, x = (N) => {
    typeof f == "function" ? f(N) : f && (f.current = N), m.current = N;
  };
  return /* @__PURE__ */ d.createElement(Bl, de({
    ref: x,
    id: E,
    className: S
  }, w, i), a);
});
My.displayName = "DialogBody";
My.propTypes = {
  /**
   * Provide the contents to be rendered inside of this component
   */
  children: c.node,
  /**
   * Specify an optional className to be applied to the body node
   */
  className: c.string,
  /**
   * Specify whether the content has overflow that should be scrollable
   */
  hasScrollingContent: c.bool
};
const $y = /* @__PURE__ */ d.forwardRef(({
  children: a,
  className: o,
  onRequestClose: r = st,
  onSecondarySubmit: i,
  onRequestSubmit: f = st,
  primaryButtonText: p = "Save",
  primaryButtonDisabled: m = !1,
  secondaryButtonText: g = "Cancel",
  secondaryButtons: h,
  loadingStatus: b = "inactive",
  loadingDescription: E,
  loadingIconDescription: S,
  onLoadingSuccess: w = st,
  danger: x = !1,
  ...N
}, C) => {
  const A = be(), $ = v.useRef(null), {
    isOpen: _
  } = v.useContext(wc), [z, D] = v.useState(null);
  v.useEffect(() => {
    if (x && z) {
      const F = requestAnimationFrame(() => {
        z.focus();
      });
      return () => cancelAnimationFrame(F);
    }
  }, [x, z, _]);
  const H = oe(`${A}--dialog-footer`, o, {
    [`${A}--dialog-footer--three-button`]: Array.isArray(h) && h.length === 2
  }), L = b !== "inactive", j = oe({
    [`${A}--btn--loading`]: b !== "inactive"
  }), I = i || r;
  return a ? /* @__PURE__ */ d.createElement(da, de({
    className: H,
    ref: C
  }, N), a) : /* @__PURE__ */ d.createElement(da, de({
    className: H,
    "aria-busy": L,
    ref: C
  }, N), Array.isArray(h) && h.length <= 2 ? h.map(({
    buttonText: F,
    onClick: Z
  }, he) => /* @__PURE__ */ d.createElement(He, {
    key: `${F}-${he}`,
    autoFocus: x,
    kind: "secondary",
    ref: he === 0 && x ? D : void 0,
    onClick: Z
  }, F)) : g && /* @__PURE__ */ d.createElement(He, {
    ref: x ? D : void 0,
    disabled: L,
    kind: "secondary",
    autoFocus: x,
    onClick: I
  }, g), /* @__PURE__ */ d.createElement(He, {
    className: j,
    kind: x ? "danger" : "primary",
    disabled: L || m,
    onClick: f,
    ref: $
  }, b === "inactive" ? p : /* @__PURE__ */ d.createElement(Sr, {
    status: b,
    description: E,
    iconDescription: S,
    className: `${A}--inline-loading--btn`,
    onSuccess: w
  })));
});
$y.displayName = "DialogFooter";
$y.propTypes = {
  /**
   * Provide the contents to be rendered inside of this component
   */
  children: c.node,
  /**
   * Specify an optional className to be applied to the footer node
   */
  className: c.string,
  /**
   * Specify a handler for closing dialog.
   */
  onRequestClose: c.func,
  /**
   * Specify a handler for the secondary button.
   */
  onSecondarySubmit: c.func,
  /**
   * Specify a handler for submitting dialog.
   */
  onRequestSubmit: c.func,
  /**
   * Specify the text for the primary button
   */
  primaryButtonText: c.node,
  /**
   * Specify whether the Button should be disabled, or not
   */
  primaryButtonDisabled: c.bool,
  /**
   * Specify the text for the secondary button
   */
  secondaryButtonText: c.node,
  /**
   * Specify an array of config objects for secondary buttons
   */
  secondaryButtons: (a, o, r) => {
    if (a.secondaryButtons) {
      if (!Array.isArray(a.secondaryButtons) || a.secondaryButtons.length !== 2)
        return new Error(`${o} needs to be an array of two button config objects`);
      const i = {
        buttonText: c.node,
        onClick: c.func
      };
      a[o].forEach((f) => {
        c.checkPropTypes(i, f, o, r);
      });
    }
    return null;
  },
  /**
   * Specify whether the Dialog is for dangerous actions
   */
  danger: c.bool,
  /**
   * Specify loading status
   */
  loadingStatus: c.oneOf(["inactive", "active", "finished", "error"]),
  /**
   * Specify the description for the loading text
   */
  loadingDescription: c.string,
  /**
   * Specify the description for the loading icon
   */
  loadingIconDescription: c.string,
  /**
   * Provide an optional handler to be invoked when loading is
   * successful
   */
  onLoadingSuccess: c.func
};
const bT = (a, o) => {
  const r = be(), [i, f] = v.useState(o ? "idle" : "finished"), p = i === "active";
  return Ct(() => {
    f((m) => !o && m === "idle" ? "active" : o && m !== "idle" ? "idle" : m);
  }, [o]), Ct(() => {
    if (!a.current || !p) return;
    if (!("getAnimations" in a.current)) {
      f("finished");
      return;
    }
    const m = a.current.getAnimations({
      subtree: !0
    }).filter((h) => h instanceof CSSAnimation && h.animationName.startsWith(`${r}--presence`));
    if (!m.length) {
      f("finished");
      return;
    }
    let g = !1;
    return Promise.all(m.map((h) => h.finished)).finally(() => {
      g || f("finished");
    }), () => {
      g = !0;
    };
  }, [a, p, r]), {
    /**
     * Indicates whether the ref object is supposed to be mounted
     */
    isPresent: o || i !== "finished",
    /**
     * Indicates whether the ref object is currently exiting
     */
    isExiting: p
  };
}, By = (a, o) => {
  const r = v.useRef(o), i = v.useRef(null), f = v.useRef(null);
  !o && f.current && !i.current && (r.current = null), f.current = i.current;
  const {
    isPresent: p,
    isExiting: m
  } = bT(i, a), g = v.useCallback((b) => !b || r.current && r.current !== b ? !1 : (r.current = b, !0), []), h = v.useMemo(() => ({
    presenceRef: i,
    isPresenceExclusive: g,
    isExiting: m
  }), [i, g, m]);
  return [p, h];
}, Ly = (a) => {
  const [o, r] = v.useState(!!a), [i, f] = v.useState(!!a);
  return v.useEffect(() => {
    a !== i && (r(!!a), f(!!a));
  }, [a, i]), v.useMemo(() => [o, r], [o]);
}, yT = ({
  open: a,
  _presenceId: o,
  _autoEnablePresence: r = !0,
  children: i
}) => {
  const f = Ly(a), [p] = f, [m, g] = By(p, o), h = v.useMemo(() => ({
    modalState: f,
    autoEnablePresence: r,
    ...g
  }), [f, r, g]);
  return m ? /* @__PURE__ */ d.createElement(Tc, {
    value: h
  }, i) : null;
}, Tc = /* @__PURE__ */ v.createContext(void 0), vT = (a) => {
  const o = v.useContext(Tc);
  return o != null && o.isPresenceExclusive(a) ? o : void 0;
}, ed = /* @__PURE__ */ d.forwardRef(function({
  className: o,
  children: r,
  hasForm: i,
  hasScrollingContent: f,
  ...p
}, m) {
  var x, N;
  const g = be(), h = v.useRef(null), {
    height: b
  } = Kf({
    ref: h
  }), E = !!h.current && ((x = h == null ? void 0 : h.current) == null ? void 0 : x.scrollHeight) > ((N = h == null ? void 0 : h.current) == null ? void 0 : N.clientHeight), S = oe({
    [`${g}--modal-content`]: !0,
    [`${g}--modal-content--with-form`]: i,
    [`${g}--modal-scroll-content`]: f || E,
    [`${g}--modal-scroll-content--no-fade`]: b <= 300
  }, o), w = f || E ? {
    tabIndex: 0,
    role: "region"
  } : {};
  return /* @__PURE__ */ d.createElement(Bl, de({
    className: S
  }, w, p, {
    ref: co(h, m)
  }), r);
});
ed.propTypes = {
  /**
   * Required props for the accessibility label of the header
   */
  "aria-label": gr("hasScrollingContent", c.string),
  /**
   * Specify the content to be placed in the ModalBody
   */
  children: c.node,
  /**
   * Specify an optional className to be added to the Modal Body node
   */
  className: c.string,
  /**
   * Provide whether the modal content has a form element.
   * If `true` is used here, non-form child content should have `cds--modal-content__regular-content` class.
   */
  hasForm: c.bool,
  /**
   * Specify whether the modal contains scrolling content
   */
  hasScrollingContent: c.bool
};
const td = /* @__PURE__ */ d.forwardRef(function({
  open: o,
  ...r
}, i) {
  const f = dt(), p = zt("enable-presence"), m = !!v.useContext(Tc), g = p || m, h = vT(f);
  return g && !h ? /* @__PURE__ */ d.createElement(yT, {
    open: o ?? !1,
    _presenceId: f,
    _autoEnablePresence: m
  }, /* @__PURE__ */ d.createElement(u0, de({
    open: !0,
    ref: i
  }, r))) : /* @__PURE__ */ d.createElement(u0, de({
    ref: i,
    open: o
  }, r));
}), u0 = /* @__PURE__ */ d.forwardRef(function({
  ["aria-labelledby"]: o,
  ["aria-label"]: r,
  children: i,
  className: f,
  containerClassName: p,
  danger: m,
  decorator: g,
  isFullWidth: h,
  onClose: b,
  onKeyDown: E,
  open: S,
  preventCloseOnClickOutside: w,
  selectorPrimaryFocus: x = "[data-modal-primary-focus]",
  selectorsFloatingMenus: N,
  size: C,
  launcherButtonRef: A,
  slug: $,
  ..._
}, z) {
  const D = be(), H = v.useRef(null), L = v.useRef(null), j = v.useRef(null), I = v.useRef(null), F = v.useRef(null), Z = v.useContext(Tc), he = Cx([z, Z == null ? void 0 : Z.presenceRef]), ae = zt("enable-presence") || (Z == null ? void 0 : Z.autoEnablePresence), se = S || ae, ne = Ly(se), [ge, R] = (Z == null ? void 0 : Z.modalState) ?? ne, J = zt("enable-dialog-element"), W = zt("enable-experimental-focus-wrap-without-sentinels"), le = zt("enable-focus-wrap-without-sentinels"), pe = W || le;
  v.useEffect(() => {
    J || cc(document.body, `${D}--body--with-modal-open`, !!se);
  }, [se, D]), v.useEffect(() => {
    if (!J)
      return () => {
        cc(document.body, `${D}--body--with-modal-open`, !1);
      };
  }, []);
  function O(Se) {
    J || pe && se && at(Se, Tr) && H.current && Pf({
      containerNode: H.current,
      currentActiveNode: Se.target,
      event: Se
    }), E == null || E(Se);
  }
  function q(Se) {
    const fe = Se.target;
    F.current = fe;
  }
  function P(Se) {
    const {
      target: fe
    } = Se, Ye = F.current;
    // Passive modals can close on clicks outside the modal when
    // preventCloseOnClickOutside is undefined or explicitly set to false.
    (Ne && !w || // Non-passive modals have to explicitly opt-in for close on outside
    // behavior by explicitly setting preventCloseOnClickOutside to false,
    // rather than just leaving it undefined.
    !Ne && w === !1) && fe instanceof Node && !Jf(fe, N, D) && H.current && !H.current.contains(fe) && !H.current.contains(Ye) && te(Se);
  }
  function G({
    target: Se,
    relatedTarget: fe
  }) {
    if (!J && !pe && se && fe && Se && H.current) {
      const {
        current: ze
      } = H, {
        current: je
      } = j, {
        current: We
      } = I;
      Wf({
        bodyNode: ze,
        startTrapNode: je,
        endTrapNode: We,
        currentActiveNode: fe,
        oldActiveNode: Se,
        selectorsFloatingMenus: N == null ? void 0 : N.filter(Boolean),
        prefix: D
      });
    }
    const Ye = document.querySelector(`.${D}--modal-content`);
    !Ye || !Ye.classList.contains(`${D}--modal-scroll-content`) || !fe || !Ye.contains(fe) || fe.scrollIntoView({
      block: "center"
    });
  }
  function te(Se) {
    (!b || b(Se) !== !1) && R(!1);
  }
  const V = oe(`${D}--modal`, {
    "is-visible": ae || ge,
    [`${D}--modal--enable-presence`]: Z == null ? void 0 : Z.autoEnablePresence,
    [`${D}--modal--danger`]: m,
    [`${D}--modal--slug`]: $,
    [`${D}--modal--decorator`]: g
  }, f), Q = oe(`${D}--modal-container`, C && `${D}--modal-container--${C}`, h && `${D}--modal-container--full-width`, p);
  let me;
  const ie = d.Children.toArray(i).map((Se) => mt(Se, Sc) ? (me = Se.props.label, /* @__PURE__ */ v.cloneElement(Se, {
    closeModal: te
  })) : mt(Se, wr) ? /* @__PURE__ */ v.cloneElement(Se, {
    closeModal: te,
    inputref: L,
    danger: m
  }) : Se), Ne = !v.Children.toArray(ie).some((Se) => mt(Se, wr));
  v.useEffect(() => {
    if (!se) return;
    const Se = (fe) => {
      at(fe, al) && (fe.preventDefault(), fe.stopPropagation(), te(fe));
    };
    return document.addEventListener("keydown", Se, !0), () => {
      document.removeEventListener("keydown", Se, !0);
    };
  }, [se]), v.useEffect(() => {
    !J && !ae && !se && A && setTimeout(() => {
      var Se;
      (Se = A.current) == null || Se.focus();
    });
  }, [J, ae, se, A]), v.useEffect(() => {
    const Se = A == null ? void 0 : A.current;
    return () => {
      ae && Se && setTimeout(() => {
        Se.focus();
      });
    };
  }, [ae, A]), v.useEffect(() => {
    if (!J) {
      const Se = (Ye) => {
        const ze = Ye || H.current, je = ze ? ze.querySelector(m ? `.${D}--btn--secondary` : x) : null;
        return je || L && L.current;
      };
      se && ge && ((Ye) => {
        const ze = Se(Ye), je = Ye.querySelector(`.${D}--modal-close`);
        ze ? ze.focus() : !ze && je && (je == null || je.focus());
      })(H.current);
    }
  }, [se, x, ge]);
  const Te = $ ?? g, Ee = mt(Te, It) ? /* @__PURE__ */ v.cloneElement(Te, {
    size: "sm"
  }) : Te, Ue = J ? /* @__PURE__ */ d.createElement(xc, {
    open: se,
    focusAfterCloseRef: A,
    modal: !0,
    className: Q,
    "aria-label": r || me,
    "aria-labelledby": o,
    "data-exiting": (Z == null ? void 0 : Z.isExiting) || void 0
  }, /* @__PURE__ */ d.createElement("div", {
    ref: H,
    className: `${D}--modal-container-body`
  }, $ ? Ee : g ? /* @__PURE__ */ d.createElement("div", {
    className: `${D}--modal--inner__decorator`
  }, Ee) : "", ie)) : /* @__PURE__ */ d.createElement("div", {
    className: Q,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": r || me,
    "aria-labelledby": o
  }, !pe && /* @__PURE__ */ d.createElement("button", {
    type: "button",
    ref: j,
    className: `${D}--visually-hidden`
  }, "Focus sentinel"), /* @__PURE__ */ d.createElement("div", {
    ref: H,
    className: `${D}--modal-container-body`
  }, $ ? Ee : g ? /* @__PURE__ */ d.createElement("div", {
    className: `${D}--modal--inner__decorator`
  }, Ee) : "", ie), !pe && /* @__PURE__ */ d.createElement("button", {
    type: "button",
    ref: I,
    className: `${D}--visually-hidden`
  }, "Focus sentinel"));
  return /* @__PURE__ */ d.createElement(Bl, de({}, _, {
    level: 0,
    role: "presentation",
    ref: he,
    "aria-hidden": !se,
    onBlur: G,
    onClick: kt([_ == null ? void 0 : _.onClick, P]),
    onMouseDown: kt([_ == null ? void 0 : _.onMouseDown, q]),
    onKeyDown: O,
    className: V,
    "data-exiting": (Z == null ? void 0 : Z.isExiting) || void 0
  }), Ue);
});
td.propTypes = {
  /**
   * Specify the aria-label for cds--modal-container
   */
  "aria-label": c.string,
  /**
   * Specify the aria-labelledby for cds--modal-container
   */
  "aria-labelledby": c.string,
  /**
   * Specify the content to be placed in the ComposedModal
   */
  children: c.node,
  /**
   * Specify an optional className to be applied to the modal root node
   */
  className: c.string,
  /**
   * Specify an optional className to be applied to the modal node
   */
  containerClassName: c.string,
  /**
   * Specify whether the primary button should be replaced with danger button.
   * Note that this prop is not applied if you render primary/danger button by yourself
   */
  danger: c.bool,
  /**
   * **Experimental**: Provide a `decorator` component to be rendered inside the `ComposedModal` component
   */
  decorator: c.node,
  /**
   * Specify whether the Modal content should have any inner padding.
   */
  isFullWidth: c.bool,
  /**
   * Provide a ref to return focus to once the modal is closed.
   */
  launcherButtonRef: c.oneOfType([c.func, c.shape({
    current: c.any
  })]),
  /**
   * Specify an optional handler for closing modal.
   * Returning `false` here prevents closing modal.
   */
  onClose: c.func,
  /**
   * Specify an optional handler for the `onKeyDown` event. Called for all
   * `onKeyDown` events that do not close the modal
   */
  onKeyDown: c.func,
  /**
   * Specify whether the Modal is currently open
   */
  open: c.bool,
  preventCloseOnClickOutside: c.bool,
  /**
   * Specify a CSS selector that matches the DOM element that should be
   * focused when the Modal opens
   */
  selectorPrimaryFocus: c.string,
  /**
   * Specify the CSS selectors that match the floating menus
   */
  selectorsFloatingMenus: c.arrayOf(c.string.isRequired),
  /**
   * Specify the size variant.
   */
  size: c.oneOf(["xs", "sm", "md", "lg"]),
  slug: $e(c.node)
};
const cf = (a) => a !== "" && typeof a < "u";
var f0;
const Or = /* @__PURE__ */ d.forwardRef(({
  autoComplete: a = "off",
  className: o,
  closeButtonLabelText: r = "Clear search input",
  defaultValue: i,
  disabled: f,
  isExpanded: p = !0,
  id: m,
  labelText: g,
  // @ts-expect-error: deprecated prop
  light: h,
  onChange: b = () => {
  },
  onClear: E = () => {
  },
  onKeyDown: S,
  onExpand: w,
  placeholder: x = "Search",
  renderIcon: N,
  role: C,
  size: A = "md",
  type: $ = "search",
  value: _,
  ...z
}, D) => {
  const H = cf(_) || cf(i), L = be(), {
    isFluid: j
  } = v.useContext(wy), I = v.useRef(null), F = zn([D, I]), Z = v.useRef(null), he = dt("search-input"), ae = m || he, se = `${ae}-search`, [ne, ge] = v.useState(H || !1), [R, J] = v.useState(_), W = oe({
    [`${L}--search`]: !0,
    [`${L}--search--sm`]: A === "sm",
    [`${L}--search--md`]: A === "md",
    [`${L}--search--lg`]: A === "lg",
    [`${L}--search--light`]: h,
    [`${L}--search--disabled`]: f,
    [`${L}--search--fluid`]: j
  }, o), le = oe({
    [`${L}--search-close`]: !0,
    [`${L}--search-close--hidden`]: !ne || !p
  });
  _ !== R && (ge(cf(_)), J(_));
  function pe() {
    var V;
    if (!_ && I.current && (I.current.value = ""), I.current) {
      const Q = Object.assign({}, I.current, {
        value: ""
      }), me = {
        bubbles: !1,
        cancelable: !1,
        currentTarget: I.current,
        defaultPrevented: !1,
        eventPhase: 0,
        isDefaultPrevented: () => !1,
        isPropagationStopped: () => !1,
        isTrusted: !1,
        nativeEvent: new Event("change"),
        persist: st,
        preventDefault: st,
        stopPropagation: st,
        target: Q,
        timeStamp: 0,
        type: "change"
      };
      b(me);
    }
    E(), ge(!1), (V = I.current) == null || V.focus();
  }
  function O(V) {
    ge(V.target.value !== "");
  }
  function q(V) {
    var Q, me;
    at(V, al) && (V.stopPropagation(), (Q = I.current) != null && Q.value ? pe() : w && p && ((me = Z.current) == null || me.focus()));
  }
  function P(V) {
    (at(V, ma) || at(V, mo)) && (V.stopPropagation(), w && w(V));
  }
  const G = /* @__PURE__ */ d.createElement("div", {
    "aria-labelledby": w ? se : void 0,
    role: w ? "button" : void 0,
    className: `${L}--search-magnifier`,
    onClick: w,
    onKeyDown: P,
    tabIndex: w && !p ? 0 : -1,
    ref: Z,
    "aria-expanded": w && p ? !0 : w && !p ? !1 : void 0,
    "aria-controls": w ? ae : void 0
  }, /* @__PURE__ */ d.createElement(zy, {
    icon: N
  })), te = w && !p ? /* @__PURE__ */ d.createElement(go, {
    className: `${L}--search-tooltip ${L}--search-magnifier-tooltip`,
    align: "top",
    label: "Search"
  }, G) : G;
  return /* @__PURE__ */ d.createElement("div", {
    role: "search",
    "aria-label": x,
    className: W
  }, te, /* @__PURE__ */ d.createElement("label", {
    id: se,
    htmlFor: ae,
    className: `${L}--label`
  }, g), /* @__PURE__ */ d.createElement("input", de({
    autoComplete: a,
    className: `${L}--search-input`,
    defaultValue: i,
    disabled: f,
    role: C,
    ref: F,
    id: ae,
    onChange: kt([b, O]),
    onKeyDown: kt([S, q]),
    placeholder: x,
    type: $,
    value: _,
    tabIndex: w && !p ? -1 : void 0
  }, z)), /* @__PURE__ */ d.createElement("button", {
    "aria-label": r,
    className: le,
    disabled: f,
    onClick: pe,
    title: r,
    type: "button"
  }, f0 || (f0 = /* @__PURE__ */ d.createElement(Ll, null))));
});
Or.displayName = "Search";
Or.propTypes = {
  /**
   * Specify an optional value for the `autocomplete` property on the underlying
   * `<input>`, defaults to "off"
   */
  autoComplete: c.string,
  /**
   * Specify an optional className to be applied to the container node
   */
  className: c.string,
  /**
   * Specify a label to be read by screen readers on the "close" button
   */
  closeButtonLabelText: c.string,
  /**
   * Optionally provide the default value of the `<input>`
   */
  defaultValue: c.oneOfType([c.string, c.number]),
  /**
   * Specify whether the `<input>` should be disabled
   */
  disabled: c.bool,
  /**
   * Specify a custom `id` for the input
   */
  id: c.string,
  /**
   * Specify whether or not ExpandableSearch should render expanded or not
   */
  isExpanded: c.bool,
  /**
   * Provide the label text for the Search icon
   */
  labelText: c.node.isRequired,
  /**
   * Specify light version or default version of this control
   */
  light: $e(c.bool),
  /**
   * Optional callback called when the search value changes.
   */
  onChange: c.func,
  /**
   * Optional callback called when the search value is cleared.
   */
  onClear: c.func,
  /**
   * Optional callback called when the magnifier icon is clicked in ExpandableSearch.
   */
  onExpand: c.func,
  /**
   * Provide a handler that is invoked on the key down event for the input
   */
  onKeyDown: c.func,
  /**
   * Provide an optional placeholder text for the Search.
   * Note: if the label and placeholder differ,
   * VoiceOver on Mac will read both
   */
  placeholder: c.string,
  /**
   * A component used to render an icon.
   */
  renderIcon: c.oneOfType([c.func, c.object]),
  /**
   * Deprecated, since <input type="search"> already provides correct semantics.
   * Specify the role for the underlying `<input>`, defaults to `searchbox`
   */
  role: $e(c.string),
  /**
   * Specify the size of the Search
   */
  size: c.oneOf(["sm", "md", "lg"]),
  /**
   * Specify the type of the `<input>`
   */
  type: c.string,
  /**
   * Specify the value of the `<input>`
   */
  value: c.oneOfType([c.string, c.number])
};
function zy({
  icon: a
}) {
  const o = be();
  return a ? /* @__PURE__ */ d.createElement(a, {
    className: `${o}--search-magnifier-icon`
  }) : /* @__PURE__ */ d.createElement(HS, {
    className: `${o}--search-magnifier-icon`
  });
}
zy.propTypes = {
  /**
   * Rendered icon for the Search. Can be a React component class
   */
  icon: c.oneOfType([c.func, c.object])
};
const xt = {
  NONE: "NONE",
  DESC: "DESC",
  ASC: "ASC"
}, sc = (a, o) => `${a}:${o}`, wf = (a, o, r = "en") => {
  var p, m;
  if (a === null && (a = ""), o === null && (o = ""), typeof a == "number" && typeof o == "number")
    return a - o;
  if (typeof a == "string" && typeof o == "string")
    return sf(a, o, r);
  const i = (p = a == null ? void 0 : a.props) == null ? void 0 : p.children, f = (m = o == null ? void 0 : o.props) == null ? void 0 : m.children;
  return typeof i == "string" && typeof f == "string" ? sf(i, f, r) : sf(String(a), String(o), r);
}, sf = (a, o, r = "en") => {
  const i = !isNaN(parseFloat(a)) && !isNaN(parseFloat(o));
  return a.localeCompare(o, r, {
    numeric: i
  });
}, ET = ({
  rowIds: a,
  cellsById: o,
  sortDirection: r,
  key: i,
  locale: f = "en",
  sortRow: p = ST
}) => a.slice().sort((m, g) => {
  const h = o[sc(m, i)], b = o[sc(g, i)];
  return p(h == null ? void 0 : h.value, b == null ? void 0 : b.value, {
    key: i,
    sortDirection: r,
    sortStates: xt,
    locale: f,
    compare: wf,
    rowIds: [m, g]
  });
}), ST = (a, o, {
  sortDirection: r,
  sortStates: i,
  locale: f
}) => r === i.ASC ? wf(a, o, f) : wf(o, a, f), wT = xt.NONE, xT = (a, o, r) => {
  if (a === o)
    switch (r) {
      case xt.NONE:
        return xt.ASC;
      case xt.ASC:
        return xt.DESC;
      case xt.DESC:
        return xt.NONE;
    }
  return xt.ASC;
}, d0 = (a, o, {
  key: r
}) => {
  const {
    sortDirection: i,
    sortHeaderKey: f
  } = o, p = xT(r, f ?? "", i);
  return jy(a, o, r, p);
}, jy = ({
  locale: a,
  sortRow: o
}, {
  rowIds: r,
  cellsById: i,
  initialRowOrder: f
}, p, m) => {
  const g = m !== xt.NONE ? ET({
    rowIds: r,
    cellsById: i,
    sortDirection: m,
    key: p,
    locale: a,
    sortRow: o
  }) : f;
  return {
    sortHeaderKey: p,
    sortDirection: m,
    rowIds: g
  };
}, TT = (a, o, r = {}) => {
  const {
    rowsById: i
  } = r, f = new Array(a.length), p = {}, m = {};
  return a.forEach((g, h) => {
    f[h] = g.id;
    const {
      id: b,
      isSelected: E = !1,
      isExpanded: S = !1,
      disabled: w = !1
    } = g;
    p[b] = {
      id: b,
      isSelected: E,
      isExpanded: S,
      disabled: w,
      cells: new Array(o.length)
    }, i && i[g.id] !== void 0 && (p[g.id].isSelected = i[g.id].isSelected, p[g.id].isExpanded = i[g.id].isExpanded), o.forEach(({
      key: x,
      slug: N,
      decorator: C
    }, A) => {
      const $ = sc(g.id, x);
      m[$] = {
        id: $,
        value: g[x],
        isEditable: !1,
        isEditing: !1,
        isValid: !0,
        errors: null,
        hasAILabelHeader: !!(N || mt(C, It)),
        info: {
          header: x
        }
      }, p[g.id].cells[A] = $;
    });
  }), {
    rowIds: f,
    rowsById: p,
    cellsById: m
  };
}, m0 = (a, o) => {
  const {
    rowIds: r,
    rowsById: i,
    cellsById: f
  } = TT(a.rows, a.headers, o), p = {
    rowIds: r,
    rowsById: i,
    cellsById: f,
    sortDirection: o.sortDirection || wT,
    sortHeaderKey: o.sortHeaderKey || null,
    // Copy over rowIds so the reference doesn't mutate the stored
    // `initialRowOrder`
    initialRowOrder: r.slice(),
    filterInputValue: o.filterInputValue || null,
    // Optional state field to indicate whether a consumer should show a
    // batch actions menu
    shouldShowBatchActions: o.shouldShowBatchActions || !1,
    // TODO: Investigate deleting this property when this util is ported to
    // TypeScript. The only reason it was added was to address a type error in
    // packages/react/src/components/DataTable/DataTable.tsx
    isExpandedAll: !1
  };
  if (o.sortDirection && o.sortHeaderKey) {
    const {
      rowIds: m
    } = jy(a, p, o.sortHeaderKey, o.sortDirection);
    p.rowIds = m;
  }
  return p.isExpandedAll = p.rowIds.every((m) => p.rowsById[m].isExpanded === !0), p;
}, p0 = (a, o, r) => a.map((i) => ({
  ...o[i],
  cells: o[i].cells.map((f) => r[f])
})), CT = ({
  rowIds: a,
  headers: o,
  cellsById: r,
  inputValue: i,
  getCellId: f
}) => {
  const p = i.trim().toLowerCase();
  return p ? a.filter((m) => o.some(({
    key: g
  }) => {
    const h = f(m, g), b = r[h];
    return typeof b.value == "boolean" ? !1 : String(b.value).toLowerCase().includes(p);
  })) : a;
}, Hy = /* @__PURE__ */ v.createContext({
  titleId: void 0,
  descriptionId: void 0
}), h0 = (a, o) => {
  var h, b, E, S;
  if (a.children.length > 0)
    return !1;
  const r = window.getComputedStyle(a);
  o.font = r.font ? r.font : `${r.fontSize}" "${r.fontFamily}`;
  let f = (o == null ? void 0 : o.measureText(a.textContent ?? "")).width ?? 0;
  const p = (h = r.letterSpacing) == null ? void 0 : h.split("px");
  p && p.length && !isNaN(Number(p[0])) && (f += Number(p[0]) * (((b = a.textContent) == null ? void 0 : b.length) ?? 0));
  const m = (E = r.paddingLeft) == null ? void 0 : E.split("px");
  m && m.length && !isNaN(Number(m[0])) && (f += Number(m[0]));
  const g = (S = r.paddingLeft) == null ? void 0 : S.split("px");
  return g && g.length && !isNaN(Number(g[0])) && (f += Number(g[0])), f > a.getBoundingClientRect().width;
}, Cc = ({
  className: a,
  children: o,
  useZebraStyles: r,
  size: i = "lg",
  isSortable: f = !1,
  useStaticWidth: p,
  stickyHeader: m,
  overflowMenuOnHover: g = !0,
  experimentalAutoAlign: h = !1,
  ...b
}) => {
  var D;
  const {
    titleId: E,
    descriptionId: S
  } = v.useContext(Hy), w = be(), x = v.useRef(null), N = oe(`${w}--data-table`, a, {
    [`${w}--data-table--${i}`]: i,
    [`${w}--data-table--sort`]: f,
    [`${w}--data-table--zebra`]: r,
    [`${w}--data-table--static`]: p,
    [`${w}--data-table--sticky-header`]: m,
    [`${w}--data-table--visible-overflow-menu`]: !g
  }), C = v.useCallback((H = !1) => {
    var L, j;
    H ? (L = x.current) == null || L.classList.add(`${w}--data-table--top-aligned-body`) : (j = x.current) == null || j.classList.remove(`${w}--data-table--top-aligned-body`);
  }, [w]), A = v.useCallback((H = !1) => {
    var L, j;
    H ? (L = x.current) == null || L.classList.add(`${w}--data-table--top-aligned-header`) : (j = x.current) == null || j.classList.remove(`${w}--data-table--top-aligned-header`);
  }, [w]), $ = v.useCallback(() => {
    if (h) {
      const L = document.createElement("canvas").getContext("2d");
      if (x.current && L) {
        const j = Array.from(x.current.querySelectorAll("td")).some((F) => h0(F, L)), I = Array.from(x.current.querySelectorAll("th")).some((F) => {
          const Z = F.querySelector(`.${w}--table-header-label`);
          return Z instanceof HTMLElement && h0(Z, L);
        });
        C(j), A(I);
      }
    } else
      C(!1), A(!1);
  }, [h, C, A, w]), _ = Er($, 100);
  gc("resize", _), typeof document < "u" && ((D = document == null ? void 0 : document.fonts) != null && D.status) && document.fonts.status !== "loaded" && document.fonts.ready.then(() => {
    $();
  }), Ct(() => {
    $();
  }, [$, i]);
  const z = /* @__PURE__ */ d.createElement("div", {
    className: `${w}--data-table-content`
  }, /* @__PURE__ */ d.createElement("table", de({
    "aria-labelledby": E,
    "aria-describedby": S
  }, b, {
    className: N,
    ref: x
  }), o));
  return m ? /* @__PURE__ */ d.createElement("section", {
    className: `${w}--data-table_inner-container`
  }, z) : z;
};
Cc.propTypes = {
  /**
   * Pass in the children that will be rendered within the Table
   */
  children: c.node,
  className: c.string,
  /**
   * Experimental property. Allows table to align cell contents to the top if there is text wrapping in the content. Might have performance issues, intended for smaller tables
   */
  experimentalAutoAlign: c.bool,
  /**
   * `false` If true, will apply sorting styles
   */
  isSortable: c.bool,
  /**
   * Specify whether the overflow menu (if it exists) should be shown always, or only on hover
   */
  overflowMenuOnHover: c.bool,
  /**
   *  Change the row height of table. Currently supports `xs`, `sm`, `md`, `lg`, and `xl`.
   */
  size: c.oneOf(["xs", "sm", "md", "lg", "xl"]),
  /**
   * `false` If true, will keep the header sticky (only data rows will scroll)
   */
  stickyHeader: c.bool,
  /**
   * If `true`, sets the table width to `auto` instead of `100%`.
   */
  useStaticWidth: c.bool,
  /**
   * `true` to add useZebraStyles striping.
   */
  useZebraStyles: c.bool,
  /**
   * Specify the table tabIndex
   */
  tabIndex: c.number
};
const nd = ({
  name: a,
  className: o,
  type: r
}) => {
  function i({
    className: f,
    ...p
  }) {
    const m = be(), g = oe(typeof o == "function" ? o(m) : o, f);
    return /* @__PURE__ */ d.createElement(r, {
      ...p,
      // Prevent Weird quirk where `cx` will evaluate to an empty string, '',
      // and so we have empty `class` attributes in the resulting markup
      // eslint-disable-next-line no-extra-boolean-cast
      className: g || void 0
    });
  }
  return i.displayName = a, i.propTypes = {
    className: c.string
  }, i;
}, Uy = nd({
  name: "TableActionList",
  type: "div",
  className: (a) => `${a}--action-list`
}), qy = ({
  renderIcon: a = vS,
  iconDescription: o = "Add",
  ...r
}) => /* @__PURE__ */ d.createElement(He, de({
  renderIcon: a,
  iconDescription: o
}, r));
qy.propTypes = {
  /**
   * Specify if the button is an icon-only button
   */
  hasIconOnly: c.bool,
  /**
   * If specifying the `renderIcon` prop, provide a description for that icon that can
   * be read by screen readers
   */
  iconDescription: (a) => {
    if (a.renderIcon && !a.children && !a.iconDescription)
      return new Error("renderIcon property specified without also providing an iconDescription property.");
  },
  /**
   * A component used to render an icon.
   */
  renderIcon: c.oneOfType([c.func, c.object])
};
const Ml = {
  "carbon.table.batch.cancel": "carbon.table.batch.cancel",
  "carbon.table.batch.items.selected": "carbon.table.batch.items.selected",
  "carbon.table.batch.item.selected": "carbon.table.batch.item.selected",
  "carbon.table.batch.selectAll": "carbon.table.batch.selectAll"
}, uf = {
  [Ml["carbon.table.batch.cancel"]]: "Cancel",
  [Ml["carbon.table.batch.items.selected"]]: "items selected",
  [Ml["carbon.table.batch.item.selected"]]: "item selected",
  [Ml["carbon.table.batch.selectAll"]]: "Select all"
}, NT = (a, o = {
  totalSelected: 0,
  totalCount: 0
}) => {
  const {
    totalSelected: r,
    totalCount: i
  } = o;
  switch (a) {
    case Ml["carbon.table.batch.cancel"]:
      return uf[a];
    case Ml["carbon.table.batch.selectAll"]:
      return `${uf[a]} (${i})`;
    case Ml["carbon.table.batch.items.selected"]:
    case Ml["carbon.table.batch.item.selected"]:
      return `${r} ${uf[a]}`;
  }
}, Vy = ({
  className: a,
  children: o,
  shouldShowBatchActions: r,
  totalSelected: i,
  totalCount: f,
  onCancel: p,
  onSelectAll: m,
  translateWithId: g = NT,
  ...h
}) => {
  const [b, E] = d.useState(!1), S = be(), w = oe({
    [`${S}--batch-actions`]: !0,
    [`${S}--batch-actions--active`]: r
  }, a), x = oe(`${S}--batch-summary`, {
    [`${S}--batch-summary__scroll`]: b
  });
  return /* @__PURE__ */ d.createElement("div", de({
    onScroll: () => {
      E(!b);
    },
    "aria-hidden": !r,
    className: w
  }, h), /* @__PURE__ */ d.createElement("div", {
    className: x
  }, /* @__PURE__ */ d.createElement("p", {
    className: `${S}--batch-summary__para`
  }, /* @__PURE__ */ d.createElement(Fe, null, i > 1 || i === 0 ? g("carbon.table.batch.items.selected", {
    totalSelected: i
  }) : g("carbon.table.batch.item.selected", {
    totalSelected: i
  }))), m && /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("span", {
    className: `${S}--batch-summary__divider`
  }, "|"), /* @__PURE__ */ d.createElement(He, {
    onClick: m,
    tabIndex: r ? 0 : -1
  }, g("carbon.table.batch.selectAll", {
    totalCount: f
  })))), /* @__PURE__ */ d.createElement(Uy, null, o, /* @__PURE__ */ d.createElement(He, {
    className: `${S}--batch-summary__cancel`,
    tabIndex: r ? 0 : -1,
    onClick: p
  }, g("carbon.table.batch.cancel"))));
};
Vy.propTypes = {
  children: c.node,
  className: c.string,
  /**
   * Hook required to listen for when the user initiates a cancel request
   * through this component
   */
  onCancel: c.func.isRequired,
  /**
   * Hook to listen for when the user initiates a select all
   * request through this component. This _only_ controls the rendering
   * of the `Select All` button and does not include built in functionality
   */
  onSelectAll: c.func,
  /**
   * Boolean specifier for whether or not the batch action bar should be
   * displayed
   */
  shouldShowBatchActions: c.bool,
  /**
   * Numeric representation of the total number of items in a table.
   * This number is used in the select all button text
   */
  totalCount: c.number,
  /**
   * Numeric representation of the total number of items selected in a table.
   * This number is used to derive the selection message
   */
  totalSelected: c.number.isRequired,
  /**
   * Translates component strings using your i18n tool.
   */
  translateWithId: c.func
};
const Nc = ({
  children: a,
  className: o,
  ...r
}) => /* @__PURE__ */ d.createElement("tbody", de({
  "aria-live": r["aria-live"] ?? "polite",
  className: o
}, r), a);
Nc.propTypes = {
  /**
   * `polite` Adjust the notification behavior of screen readers
   */
  "aria-live": c.oneOf(["polite", "assertive", "off"]),
  children: c.node,
  className: c.string
};
const _T = v.forwardRef, Mn = _T((a, o) => {
  const {
    children: r,
    className: i,
    hasAILabelHeader: f,
    colSpan: p,
    ...m
  } = a, g = be(), h = oe(i, {
    [`${g}--table-cell--column-slug`]: f
  });
  return /* @__PURE__ */ d.createElement("td", de({
    className: h || void 0,
    ref: o,
    colSpan: p
  }, m), r);
});
Mn.displayName = "TableCell";
Mn.propTypes = {
  /**
   * Pass in children that will be embedded in the table header label
   */
  children: c.node,
  /**
   * Specify an optional className to be applied to the container node
   */
  className: c.string,
  /**
   * The width of the expanded row's internal cell
   */
  colSpan: c.number,
  /**
   * Specify if the table cell is in an AI column
   */
  hasAILabelHeader: c.bool,
  /**
   * The id of the matching th node in the table head. Addresses a11y concerns outlined here: https://www.ibm.com/able/guidelines/ci162/info_and_relationships.html and https://www.w3.org/TR/WCAG20-TECHS/H43
   */
  headers: c.string
};
const xf = /* @__PURE__ */ d.createContext(1), ky = /* @__PURE__ */ d.forwardRef(function({
  as: o = "section",
  level: r,
  ...i
}, f) {
  const p = d.useContext(xf), m = r ?? p + 1, g = o;
  return /* @__PURE__ */ d.createElement(xf.Provider, {
    value: Math.min(m, 6)
  }, /* @__PURE__ */ d.createElement(g, de({
    ref: f
  }, i)));
});
ky.propTypes = {
  /**
   * Provide an alternative tag or component to use instead of the default
   * <section> element
   */
  as: c.elementType,
  /**
   * Specify the content that will be placed in the component
   */
  children: c.node,
  /**
   * Specify a class name for the outermost node of the component
   */
  className: c.string,
  /**
   * Overrides the level of the section
   */
  level: c.number
};
const Iy = /* @__PURE__ */ d.forwardRef((a, o) => {
  const r = `h${d.useContext(xf)}`;
  return /* @__PURE__ */ d.createElement(r, de({
    ref: o
  }, a));
});
Iy.propTypes = {
  /**
   * Specify the content that will be placed in the component
   */
  children: c.node,
  /**
   * Specify a class name for the outermost node of the component
   */
  className: c.string
};
const ld = ({
  aiEnabled: a,
  className: o,
  children: r,
  decorator: i,
  title: f,
  description: p,
  stickyHeader: m,
  useStaticWidth: g,
  ...h
}) => {
  const b = dt("tc"), E = `${b}-title`, S = `${b}-description`, w = be(), x = oe(o, `${w}--data-table-container`, {
    [`${w}--data-table--max-width`]: m,
    [`${w}--data-table-container--static`]: g,
    [`${w}--data-table-container--ai-enabled`]: a
  }), N = v.useMemo(() => ({
    titleId: f ? E : void 0,
    descriptionId: p ? S : void 0
  }), [f, p, E, S]);
  return /* @__PURE__ */ d.createElement(Hy.Provider, {
    value: N
  }, /* @__PURE__ */ d.createElement(ky, de({}, h, {
    className: x
  }), (f || p || i) && /* @__PURE__ */ d.createElement("div", {
    className: oe(`${w}--data-table-header`, {
      [`${w}--data-table-header__with-decorator`]: i,
      [`${w}--data-table-header__with-decorator--standalone`]: i && !f && !p
    })
  }, (f || p) && /* @__PURE__ */ d.createElement("div", {
    className: `${w}--data-table-header__content`
  }, f && /* @__PURE__ */ d.createElement(Iy, {
    className: `${w}--data-table-header__title`,
    id: E
  }, f), p && /* @__PURE__ */ d.createElement("p", {
    className: `${w}--data-table-header__description`,
    id: S
  }, p)), i && /* @__PURE__ */ d.createElement("div", {
    className: `${w}--data-table-header__decorator`
  }, i)), r));
};
ld.propTypes = {
  /**
   * Specify if the entire table has AI generated contents
   */
  aiEnabled: c.bool,
  children: c.node,
  className: c.string,
  /**
   * **Experimental**: Provide a `decorator` component to be rendered inside the `TableContainer` component
   */
  decorator: c.node,
  /**
   * Optional description text for the Table
   */
  description: c.node,
  /**
   * Specify whether the table should have a sticky header
   */
  stickyHeader: c.bool,
  /**
   * Provide a title for the Table
   */
  title: c.node,
  /**
   * If true, will use a width of 'fit-content' to match the inner table width
   */
  useStaticWidth: c.bool
};
const so = ({
  className: a,
  decorator: o
}) => {
  const r = be(), i = oe({
    ...a && {
      [a]: !0
    },
    [`${r}--table-column-decorator`]: !0,
    [`${r}--table-column-decorator--active`]: o
  }), p = mt(o, It) ? /* @__PURE__ */ v.cloneElement(o, {
    size: "mini"
  }) : null;
  return /* @__PURE__ */ d.createElement("td", {
    className: i
  }, p);
};
so.displayName = "TableDecoratorRow";
so.propTypes = {
  /**
   * The CSS class names of the cell that wraps the underlying input control
   */
  className: c.string,
  /**
   * **Experimental**: Provide a `decorator` component to be rendered inside the `TableDecoratorRow` component
   */
  decorator: c.node
};
const Gy = ({
  ["aria-controls"]: a,
  ["aria-label"]: o,
  ariaLabel: r,
  className: i,
  enableExpando: f,
  enableToggle: p,
  id: m = "expand",
  isExpanded: g,
  onExpand: h,
  expandIconDescription: b,
  children: E,
  ...S
}) => {
  const w = be(), x = oe(`${w}--table-expand`, i), N = g ? "collapsed" : void 0;
  return /* @__PURE__ */ d.createElement("th", de({
    scope: "col",
    className: x,
    "data-previous-value": N,
    id: m
  }, S), f || p ? /* @__PURE__ */ d.createElement("button", {
    type: "button",
    className: `${w}--table-expand__button`,
    onClick: h,
    title: b,
    "aria-label": r || o,
    "aria-expanded": g,
    "aria-controls": a
  }, /* @__PURE__ */ d.createElement(Af, {
    className: `${w}--table-expand__svg`,
    "aria-label": b
  })) : null, E);
};
Gy.propTypes = {
  /**
   * Space separated list of one or more ID values referencing the TableExpandedRow(s) being controlled by the TableExpandHeader
   */
  "aria-controls": c.string,
  /**
   * Specify the string read by a voice reader when the expand trigger is
   * focused
   */
  "aria-label": c.string,
  /**
   * Deprecated, please use `aria-label` instead.
   * Specify the string read by a voice reader when the expand trigger is
   * focused
   */
  ariaLabel: c.string,
  children: c.node,
  className: c.string,
  /**
   * The enableExpando prop is being replaced by TableExpandHeader
   */
  enableExpando: $e(c.bool),
  /**
   * Specify whether an expand all button should be displayed
   */
  enableToggle: c.bool,
  /**
   * The description of the chevron right icon, to be put in its SVG `<title>` element.
   */
  expandIconDescription: c.string,
  /**
   * Supply an id to the th element.
   */
  id: c.string,
  /**
   * Specify whether this row is expanded or not. This helps coordinate data
   * attributes so that `TableExpandRow` and `TableExpandedRow` work together
   */
  isExpanded: gr("enableToggle", c.bool),
  /**
   * Hook for when a listener initiates a request to expand the given row
   */
  onExpand: c.oneOfType([gr(
    "enableExpando",
    c.func
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
  ), gr(
    "enableToggle",
    c.func
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- https://github.com/carbon-design-system/carbon/issues/20452
  )])
};
const g0 = {}, AT = (a, o) => (g0[a] || (g0[a] = !0), a), uo = ({
  className: a,
  slug: o
}) => {
  v.useEffect(() => {
    AT("TableSlugRow");
  }, []);
  const r = be(), i = oe({
    ...a && {
      [a]: !0
    },
    [`${r}--table-column-slug`]: !0,
    [`${r}--table-column-slug--active`]: o
  });
  let f;
  return o && (f = /* @__PURE__ */ d.cloneElement(o, {
    size: "mini"
  })), /* @__PURE__ */ d.createElement("td", {
    className: i
  }, f);
};
uo.displayName = "TableSlugRow";
uo.propTypes = {
  /**
   * The CSS class names of the cell that wraps the underlying input control
   */
  className: c.string,
  /**
   * Provide a `Slug` component to be rendered inside the `TableSlugRow` component
   */
  slug: c.node
};
const ad = /* @__PURE__ */ v.forwardRef(({
  ["aria-controls"]: a,
  ["aria-label"]: o,
  ariaLabel: r,
  className: i,
  children: f,
  isExpanded: p,
  onExpand: m,
  expandIconDescription: g,
  isSelected: h,
  expandHeader: b = "expand",
  ...E
}, S) => {
  const w = be();
  let x;
  const N = v.Children.toArray(f).map((_) => {
    if (mt(_, uo))
      return _.props.slug && (x = !0), _;
    if (mt(_, so))
      return mt(_.props.decorator, It) && (x = !0), _;
  }), C = v.Children.toArray(f).map((_) => {
    if (!mt(_, uo) && !mt(_, so))
      return _;
  }), A = oe({
    [`${w}--parent-row`]: !0,
    [`${w}--expandable-row`]: p,
    [`${w}--data-table--selected`]: h,
    [`${w}--data-table--slug-row ${w}--data-table--ai-label-row`]: x
  }, i), $ = p ? "collapsed" : void 0;
  return /* @__PURE__ */ d.createElement("tr", de({}, E, {
    ref: S,
    className: A,
    "data-parent-row": !0
  }), N, /* @__PURE__ */ d.createElement(Mn, {
    className: `${w}--table-expand`,
    "data-previous-value": $,
    headers: b
  }, /* @__PURE__ */ d.createElement("button", {
    type: "button",
    className: `${w}--table-expand__button`,
    onClick: m,
    title: g,
    "aria-label": r || o,
    "aria-expanded": p,
    "aria-controls": a
  }, /* @__PURE__ */ d.createElement(Af, {
    className: `${w}--table-expand__svg`,
    "aria-label": g
  }))), C);
});
ad.propTypes = {
  /**
   * Space separated list of one or more ID values referencing the TableExpandedRow(s) being controlled by the TableExpandRow
   * TODO: make this required in v12
   */
  "aria-controls": c.string,
  /**
   * Specify the string read by a voice reader when the expand trigger is
   * focused
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment -- https://github.com/carbon-design-system/carbon/issues/20452
  /**@ts-ignore*/
  "aria-label": c.string,
  /**
   * Deprecated, please use `aria-label` instead.
   * Specify the string read by a voice reader when the expand trigger is
   * focused
   */
  ariaLabel: c.string,
  children: c.node,
  className: c.string,
  /**
   * The id of the matching th node in the table head. Addresses a11y concerns outlined here: https://www.ibm.com/able/guidelines/ci162/info_and_relationships.html and https://www.w3.org/TR/WCAG20-TECHS/H43
   */
  expandHeader: c.string,
  /**
   * The description of the chevron right icon, to be put in its SVG `<title>` element.
   */
  expandIconDescription: c.string,
  /**
   * Specify whether this row is expanded or not. This helps coordinate data
   * attributes so that `TableExpandRow` and `TableExpandedRow` work together
   */
  isExpanded: c.bool,
  /**
   * Specify if the row is selected
   */
  isSelected: c.bool,
  /**
   * Hook for when a listener initiates a request to expand the given row
   */
  onExpand: c.func.isRequired
};
ad.displayName = "TableExpandRow";
const Zy = ({
  className: a,
  children: o,
  colSpan: r,
  ...i
}) => {
  const f = v.useRef(null), p = be(), m = oe(`${p}--expandable-row`, a), g = (h) => {
    if (f && f.current && f.current.previousElementSibling) {
      const b = f.current.previousElementSibling;
      h === "enter" ? b.classList.add(`${p}--expandable-row--hover`) : b.classList.remove(`${p}--expandable-row--hover`);
    }
  };
  return /* @__PURE__ */ d.createElement("tr", de({
    ref: f,
    onMouseEnter: () => g("enter"),
    onMouseLeave: () => g("leave")
  }, i, {
    className: m,
    "data-child-row": !0
  }), /* @__PURE__ */ d.createElement(Mn, {
    colSpan: r
  }, /* @__PURE__ */ d.createElement("div", {
    className: `${p}--child-row-inner-container`
  }, o)));
};
Zy.propTypes = {
  /**
   * Pass in the contents for your TableExpandedRow
   */
  children: c.node,
  /**
   * Specify an optional className to be applied to the container node
   */
  className: c.string,
  /**
   * The width of the expanded row's internal cell
   */
  colSpan: c.number.isRequired
};
const od = nd({
  name: "TableHead",
  type: "thead"
}), RT = "col", Yy = {
  "carbon.table.header.icon.description": "carbon.table.header.icon.description"
}, OT = {
  [Yy["carbon.table.header.icon.description"]]: "Click to sort rows by header in ascending order"
}, DT = (a, o) => o && a === Yy["carbon.table.header.icon.description"] ? o.isSortHeader && xt ? o.sortDirection === xt.NONE ? `Click to sort rows by ${o.header} header in ascending order` : o.sortDirection === xt.ASC ? `Click to sort rows by ${o.header} header in descending order` : `Click to unsort rows by ${o.header} header` : `Click to sort rows by ${o.header} header in ascending order` : OT[a], MT = {
  [xt.NONE]: "none",
  [xt.ASC]: "ascending",
  [xt.DESC]: "descending"
}, $T = v.forwardRef, Dr = $T((a, o) => {
  const {
    className: r,
    children: i,
    colSpan: f,
    decorator: p,
    isSortable: m = !1,
    isSortHeader: g,
    onClick: h,
    scope: b = RT,
    sortDirection: E,
    translateWithId: S = DT,
    slug: w,
    id: x,
    ...N
  } = a, C = be(), A = dt("table-sort"), $ = v.useRef(null), _ = w ?? p, z = mt(_, It), D = z, H = z ? /* @__PURE__ */ v.cloneElement(_, {
    size: "mini",
    ref: $
  }) : _, L = oe({
    [`${C}--table-header-label`]: !0,
    [`${C}--table-header-label--slug ${C}--table-header-label--ai-label`]: D,
    [`${C}--table-header-label--decorator`]: p
  });
  if (!m)
    return /* @__PURE__ */ d.createElement("th", de({}, N, {
      id: x,
      className: r,
      scope: b,
      colSpan: f,
      ref: o
    }), i ? /* @__PURE__ */ d.createElement("div", {
      className: L
    }, i, /* @__PURE__ */ d.createElement("div", {
      className: `${C}--table-header-label--decorator-inner`
    }, H)) : null);
  const j = oe(r, {
    [`${C}--table-sort`]: !0,
    [`${C}--table-sort--active`]: g && E !== xt.NONE,
    [`${C}--table-sort--descending`]: g && E === xt.DESC
  }), I = !g || !E ? "none" : MT[E], F = S && S("carbon.table.header.icon.description", {
    header: i,
    sortDirection: E,
    isSortHeader: g,
    sortStates: xt
  }), Z = oe(r, `${C}--table-sort__header`, {
    [`${C}--table-sort__header--ai-label`]: D,
    [`${C}--table-sort__header--decorator`]: p
  }), he = (ae) => {
    if (!(D && $.current && $.current.contains(ae.target)) && h)
      return h(ae);
  };
  return /* @__PURE__ */ d.createElement("th", {
    id: x,
    "aria-sort": I,
    className: Z,
    colSpan: f,
    ref: o,
    scope: b
  }, /* @__PURE__ */ d.createElement("div", {
    className: `${C}--table-sort__description`,
    id: A
  }, F), /* @__PURE__ */ d.createElement("button", de({
    type: "button",
    "aria-describedby": A,
    className: j,
    onClick: he
  }, N), /* @__PURE__ */ d.createElement("span", {
    className: `${C}--table-sort__flex`
  }, /* @__PURE__ */ d.createElement("div", {
    className: `${C}--table-header-label`
  }, i), /* @__PURE__ */ d.createElement(wS, {
    size: 20,
    className: `${C}--table-sort__icon`
  }), /* @__PURE__ */ d.createElement(xS, {
    size: 20,
    className: `${C}--table-sort__icon-unsorted`
  }), /* @__PURE__ */ d.createElement("div", {
    className: `${C}--table-header-label--decorator-inner`
  }, H))));
});
Dr.propTypes = {
  /**
   * Pass in children that will be embedded in the table header label
   */
  children: c.node,
  /**
   * Specify an optional className to be applied to the container node
   */
  className: c.string,
  /**
   * Specify `colSpan` as a non-negative integer value to indicate how
   * many columns the TableHeader cell extends in a table
   */
  colSpan: c.number,
  /**
   * Supply an id to the th element.
   */
  id: c.string,
  /**
   * Specify whether this header is the header by which a table is being sorted
   * by
   */
  isSortHeader: c.bool,
  /**
   * Specify whether this header is one through which a user can sort the table
   */
  isSortable: c.bool,
  /**
   * Hook that is invoked when the header is clicked
   */
  onClick: c.func,
  /**
   * Specify the scope of this table header. You can find more info about this
   * attribute at the following URL:
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope
   */
  scope: c.string,
  /**
   * Specify which direction we are currently sorting by, should be one of DESC,
   * NONE, or ASC.
   */
  sortDirection: c.oneOf(Object.values(xt)),
  /**
   * Translates component strings using your i18n tool.
   */
  translateWithId: c.func
};
Dr.displayName = "TableHeader";
const BT = v.forwardRef, sa = BT((a, o) => {
  const {
    ariaLabel: r,
    // eslint-disable-line @typescript-eslint/no-unused-vars -- https://github.com/carbon-design-system/carbon/issues/20452
    "aria-label": i,
    // eslint-disable-line @typescript-eslint/no-unused-vars -- https://github.com/carbon-design-system/carbon/issues/20452
    "aria-controls": f,
    // eslint-disable-line @typescript-eslint/no-unused-vars -- https://github.com/carbon-design-system/carbon/issues/20452
    onExpand: p,
    // eslint-disable-line @typescript-eslint/no-unused-vars -- https://github.com/carbon-design-system/carbon/issues/20452
    isExpanded: m,
    // eslint-disable-line @typescript-eslint/no-unused-vars -- https://github.com/carbon-design-system/carbon/issues/20452
    isSelected: g,
    expandHeader: h,
    // eslint-disable-line @typescript-eslint/no-unused-vars
    ...b
  } = a, E = be(), S = v.Children.toArray(a.children).some((x) => mt(x, uo) ? !!x.props.slug : mt(x, so) && mt(x.props.decorator, It)), w = oe(a.className, {
    [`${E}--data-table--selected`]: g,
    [`${E}--data-table--slug-row ${E}--data-table--ai-label-row`]: S
  });
  return w && (b.className = w), /* @__PURE__ */ d.createElement("tr", de({
    ref: o
  }, b));
});
sa.propTypes = {
  /**
   * Specify an optional className to be applied to the container node
   */
  className: c.string,
  /**
   * Specify if the row is selected
   */
  isSelected: c.bool,
  /**
   * Non-standard alias for `aria-label`.
   */
  ariaLabel: c.string,
  /**
   * Accessible label for the row element.
   */
  "aria-label": c.string,
  /**
   * Associates this row with the id of the corresponding expanded row content.
   */
  "aria-controls": c.string,
  /**
   * Handler called when the row’s expand toggle is clicked.
   */
  onExpand: c.func,
  /**
   * Flag indicating whether the row is currently expanded.
   */
  isExpanded: c.bool
};
const rd = /* @__PURE__ */ d.forwardRef((a, o) => {
  const {
    ["aria-label"]: r,
    ariaLabel: i,
    checked: f = !1,
    disabled: p,
    id: m,
    indeterminate: g,
    name: h,
    onChange: b = () => {
    },
    onClick: E,
    onKeyDown: S,
    title: w
  } = a, x = be(), N = v.useRef(null), C = zn([N, o]), A = {
    checked: f,
    className: `${x}--checkbox`,
    disabled: p,
    id: m,
    name: h,
    onClick: E && $,
    onChange: (_) => {
      b(_.target.checked, m, _);
    },
    onKeyDown: S,
    ref: C,
    type: "checkbox"
  };
  g && (A.checked = !1), v.useEffect(() => {
    N != null && N.current && (N.current.indeterminate = g || !1);
  }, [g]);
  function $(_) {
    g && (_.target.checked = !1), E == null || E(_);
  }
  return /* @__PURE__ */ d.createElement(
    "div",
    {
      className: `${x}--checkbox--inline`
    },
    /* @__PURE__ */ d.createElement("input", A),
    /* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */
    /* @__PURE__ */ d.createElement("label", {
      htmlFor: m,
      className: `${x}--checkbox-label`,
      title: w,
      onClick: (_) => {
        _.stopPropagation();
      }
    }, /* @__PURE__ */ d.createElement("span", {
      className: `${x}--visually-hidden`
    }, i || r))
  );
});
rd.propTypes = {
  /**
   * Specify the label for the control
   */
  "aria-label": c.string.isRequired,
  /**
   * Deprecated, please use `aria-label` instead.
   * Specify the label for the control
   */
  ariaLabel: $e(c.string.isRequired),
  /**
   * Specify whether the underlying control is checked, or not
   */
  checked: c.bool,
  /**
   * Specify whether the underlying input control should be disabled
   */
  disabled: c.bool,
  /**
   * Provide an `id` for the underlying input control
   */
  id: c.string.isRequired,
  /**
   * Specify whether the control is in an indeterminate state
   */
  indeterminate: c.bool,
  /**
   * Provide a `name` for the underlying input control
   */
  name: c.string.isRequired,
  /**
   * Provide an optional hook that is called each time the input is updated
   */
  onChange: c.func,
  /**
   * Provide a handler that is invoked when a user clicks on the control
   */
  onClick: c.func,
  /**
   * Provide a handler that is invoked on the key down event for the control
   */
  onKeyDown: c.func,
  /**
   * Provide an optional tooltip for the InlineCheckbox
   */
  title: c.string
};
const id = ({
  ariaLabel: a = "Select all rows in the table",
  ["aria-label"]: o,
  checked: r,
  id: i,
  indeterminate: f,
  name: p,
  onSelect: m,
  disabled: g,
  className: h
}) => {
  const b = be();
  return /* @__PURE__ */ d.createElement("th", {
    "aria-live": "off",
    scope: "col",
    className: oe(`${b}--table-column-checkbox`, h)
  }, /* @__PURE__ */ d.createElement(rd, {
    "aria-label": o || a,
    checked: r,
    id: i,
    indeterminate: f,
    name: p,
    onClick: m,
    disabled: g
  }));
};
id.propTypes = {
  /**
   * Specify the aria label for the underlying input control
   */
  "aria-label": c.string,
  /**
   * Deprecated, please use `aria-label` instead.
   * Specify the aria label for the underlying input control
   */
  ariaLabel: $e(c.string),
  /**
   * Specify whether all items are selected, or not
   */
  checked: c.bool,
  /**
   * The CSS class names of the cell that wraps the underlying input control
   */
  className: c.string,
  /**
   * Specify whether the checkbox input should be disabled
   */
  disabled: c.bool,
  /**
   * Provide an `id` for the underlying input control
   */
  id: c.string.isRequired,
  /**
   * Specify whether the selection only has a subset of all items
   */
  indeterminate: c.bool,
  /**
   * Provide a `name` for the underlying input control
   */
  name: c.string.isRequired,
  /**
   * Provide a handler to listen to when a user initiates a selection request
   */
  onSelect: c.func.isRequired
};
const no = /* @__PURE__ */ d.forwardRef((a, o) => {
  var ge;
  const {
    className: r,
    decorator: i,
    disabled: f = !1,
    hideLabel: p,
    id: m,
    labelPosition: g = "right",
    labelText: h = "",
    name: b,
    onChange: E = () => {
    },
    value: S = "",
    slug: w,
    required: x,
    invalid: N = !1,
    invalidText: C,
    warn: A = !1,
    warnText: $,
    readOnly: _,
    ...z
  } = a, D = be(), H = dt("radio-button"), L = m || H, j = xy({
    id: L,
    readOnly: _,
    disabled: f,
    invalid: N,
    invalidText: C,
    warn: A,
    warnText: $
  });
  function I(R) {
    E(S, b, R);
  }
  const F = oe(`${D}--radio-button__label-text`, {
    [`${D}--visually-hidden`]: p
  }), Z = oe(r, `${D}--radio-button-wrapper`, {
    [`${D}--radio-button-wrapper--label-${g}`]: g !== "right",
    [`${D}--radio-button-wrapper--slug`]: w,
    [`${D}--radio-button-wrapper--decorator`]: i,
    [`${D}--radio-button-wrapper--invalid`]: j.invalid,
    [`${D}--radio-button-wrapper--warning`]: j.warn
  }), he = v.useRef(null), ae = w ?? i, ne = mt(ae, It) ? /* @__PURE__ */ v.cloneElement(ae, {
    size: ((ge = ae.props) == null ? void 0 : ge.kind) === "inline" ? "md" : "mini"
  }) : ae;
  return /* @__PURE__ */ d.createElement("div", {
    className: Z
  }, /* @__PURE__ */ d.createElement("input", de({}, z, {
    type: "radio",
    className: `${D}--radio-button`,
    onChange: I,
    id: L,
    ref: co(he, o),
    disabled: j.disabled,
    value: S,
    name: b,
    required: x,
    readOnly: _
  })), /* @__PURE__ */ d.createElement("label", {
    htmlFor: L,
    className: `${D}--radio-button__label`
  }, /* @__PURE__ */ d.createElement("span", {
    className: `${D}--radio-button__appearance`
  }), h && /* @__PURE__ */ d.createElement(Fe, {
    className: F
  }, h, w ? ne : i ? /* @__PURE__ */ d.createElement("div", {
    className: `${D}--radio-button-wrapper-inner--decorator`
  }, ne) : "")), j.validation);
});
no.displayName = "RadioButton";
no.propTypes = {
  /**
   * Specify whether the `<RadioButton>` is currently checked
   */
  checked: c.bool,
  /**
   * Provide an optional className to be applied to the containing node
   */
  className: c.string,
  /**
   * **Experimental**: Provide a decorator component to be rendered inside the `RadioButton` component
   */
  decorator: c.node,
  /**
   * Specify whether the `<RadioButton>` should be checked by default
   */
  defaultChecked: c.bool,
  /**
   * Specify whether the control is disabled
   */
  disabled: c.bool,
  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: c.bool,
  /**
   * Provide a unique id for the underlying `<input>` node
   */
  id: c.string,
  /**
   * Provide where label text should be placed
   * NOTE: `top`/`bottom` are deprecated
   */
  labelPosition: c.oneOf(["right", "left"]),
  /**
   * Provide label text to be read by screen readers when interacting with the
   * control
   */
  labelText: c.node.isRequired,
  /**
   * Provide a name for the underlying `<input>` node
   */
  name: c.string,
  /**
   * Provide an optional `onChange` hook that is called each time the value of
   * the underlying `<input>` changes
   */
  onChange: c.func,
  /**
   * Provide a handler that is invoked when a user clicks on the control
   */
  onClick: c.func,
  /**
   * `true` to specify if the control is required.
   */
  required: c.bool,
  /**
   * Specify whether the control is currently invalid
   */
  invalid: c.bool,
  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: c.node,
  /**
   * Specify whether the control is currently in warning state
   */
  warn: c.bool,
  /**
   * Provide the text that is displayed when the control is in warning state
   */
  warnText: c.node,
  /**
   * Specify whether the RadioButton should be read-only
   */
  readOnly: c.bool,
  /**
   * **Experimental**: Provide a `Slug` component to be rendered inside the `RadioButton` component
   */
  slug: $e(c.node),
  /**
   * Specify the value of the `<RadioButton>`
   */
  value: c.oneOfType([c.string, c.number])
};
const cd = ({
  ariaLabel: a,
  ["aria-label"]: o,
  checked: r,
  id: i,
  name: f,
  onSelect: p,
  onChange: m,
  disabled: g,
  radio: h,
  className: b
}) => {
  const E = be(), S = dt(), w = m ? ($, _, z) => {
    m(!!$, _ || "", z);
  } : void 0, x = m ? ($, _, z) => {
    m($, _, z);
  } : void 0, N = {
    id: i,
    name: f || S,
    onClick: p,
    checked: r,
    disabled: g
  }, C = o || a || "", A = oe(`${E}--table-column-checkbox`, {
    ...b && {
      [b]: !0
    },
    [`${E}--table-column-radio`]: h
  });
  return /* @__PURE__ */ d.createElement("td", {
    className: A,
    "aria-live": "off"
  }, h ? /* @__PURE__ */ d.createElement(no, de({}, N, {
    labelText: C,
    onChange: w,
    hideLabel: !0
  })) : /* @__PURE__ */ d.createElement(rd, de({}, N, {
    "aria-label": C,
    onChange: x
  })));
};
cd.propTypes = {
  /**
   * Specify the aria label for the underlying input control
   */
  "aria-label": c.string,
  /**
   * Deprecated, please use `aria-label` instead.
   * Specify the aria label for the underlying input control
   */
  ariaLabel: $e(c.string),
  /**
   * Specify whether this row is selected, or not
   */
  checked: c.bool,
  /**
   * The CSS class names of the cell that wraps the underlying input control
   */
  className: c.string,
  /**
   * Specify whether the control is disabled
   */
  disabled: c.bool,
  /**
   * Provide an `id` for the underlying input control
   */
  id: c.string.isRequired,
  /**
   * Provide a `name` for the underlying input control
   */
  name: c.string.isRequired,
  /**
   * Provide an optional hook that is called each time the input is updated
   */
  onChange: c.func,
  /**
   * Provide a handler to listen to when a user initiates a selection request
   */
  onSelect: c.func.isRequired,
  /**
   * Specify whether the control should be a radio button or inline checkbox
   */
  radio: c.bool
};
const sd = ({
  ["aria-label"]: a = "data table toolbar",
  ariaLabel: o,
  children: r,
  size: i,
  ...f
}) => {
  const p = be(), m = oe({
    [`${p}--table-toolbar`]: !0,
    [`${p}--table-toolbar--${i}`]: i
  });
  return /* @__PURE__ */ d.createElement("section", de({
    role: "group",
    "aria-label": o || a
  }, f, {
    className: m
  }), r);
};
sd.propTypes = {
  /**
   * 'aria-label' of the TableToolbar component.
   * Specify a label to be read by screen readers on the container node
   */
  "aria-label": c.string,
  /**
   * Deprecated, please use `aria-label` instead.
   * Specify a label to be read by screen readers on the container node.
   * 'aria-label' of the TableToolbar component.
   */
  ariaLabel: $e(c.string),
  /**
   * Pass in the children that will be rendered inside the TableToolbar
   */
  children: c.node,
  /**
   * `lg` Change the row height of table
   */
  size: c.oneOf(["sm", "lg"])
};
const LT = v.forwardRef, Xy = LT((a, o) => {
  const {
    className: r,
    closeMenu: i,
    dangerDescription: f = "danger",
    disabled: p = !1,
    handleOverflowMenuItemFocus: m,
    hasDivider: g = !1,
    href: h,
    isDelete: b = !1,
    index: E,
    itemText: S = "Provide itemText",
    onClick: w = () => {
    },
    onKeyDown: x = () => {
    },
    requireTitle: N,
    title: C,
    wrapperClassName: A,
    ...$
  } = a, _ = be();
  function z(Z) {
    at(Z, Lf) && (m == null || m({
      currentIndex: E,
      direction: 1
    })), at(Z, $f) && (m == null || m({
      currentIndex: E,
      direction: -1
    }));
  }
  function D(Z) {
    w(Z), i && i();
  }
  const H = oe(`${_}--overflow-menu-options__btn`, r), L = oe(`${_}--overflow-menu-options__option`, {
    [`${_}--overflow-menu--divider`]: g,
    [`${_}--overflow-menu-options__option--danger`]: b,
    [`${_}--overflow-menu-options__option--disabled`]: p
  }, A), j = h ? "a" : "button", I = dt("danger-description"), F = typeof S != "string" ? S : /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("div", {
    className: `${_}--overflow-menu-options__option-content`
  }, S), b && /* @__PURE__ */ d.createElement("span", {
    id: I,
    className: `${_}--visually-hidden`
  }, f));
  return /* @__PURE__ */ d.createElement(Fe, {
    as: "li",
    className: L,
    role: "none"
  }, /* @__PURE__ */ d.createElement(j, de({
    className: H,
    disabled: p,
    href: h,
    onClick: D,
    onKeyDown: (Z) => {
      z(Z), x(Z);
    },
    role: "menuitem",
    ref: o,
    tabIndex: -1,
    title: N ? C || S : void 0
  }, $), F));
});
Xy.propTypes = {
  /**
   * The CSS class name to be placed on the button element
   */
  className: c.string,
  /**
   * A callback to tell the parent menu component that the menu should be closed.
   */
  closeMenu: c.func,
  /**
   * Specify the message read by screen readers for the danger overflow menu item variant
   */
  dangerDescription: c.string,
  /**
   * `true` to make this menu item disabled.
   */
  disabled: c.bool,
  handleOverflowMenuItemFocus: c.func,
  /**
   * `true` to make this menu item a divider.
   */
  hasDivider: c.bool,
  /**
   * If given, overflow item will render as a link with the given href
   */
  href: c.string,
  index: c.number,
  /**
   * `true` to make this menu item a "danger button".
   */
  isDelete: c.bool,
  /**
   * The text in the menu item.
   */
  itemText: c.node.isRequired,
  /**
   * event handlers
   */
  onBlur: c.func,
  onClick: c.func,
  onFocus: c.func,
  onKeyDown: c.func,
  onKeyUp: c.func,
  onMouseDown: c.func,
  onMouseEnter: c.func,
  onMouseLeave: c.func,
  onMouseUp: c.func,
  /**
   * `true` if this menu item has long text and requires a browser tooltip
   */
  requireTitle: c.bool,
  /**
   * Specify a title for the OverflowMenuItem
   */
  title: c.string,
  /**
   * The CSS class name to be placed on the wrapper list item element
   */
  wrapperClassName: c.string
};
const zT = v.forwardRef, ud = zT((a, o) => {
  const {
    children: r,
    ...i
  } = a;
  return /* @__PURE__ */ d.createElement(Xy, de({
    ref: o,
    itemText: r
  }, i));
});
ud.displayName = "TableToolbarAction";
ud.propTypes = {
  children: c.node,
  className: c.string,
  onClick: c.func.isRequired
};
const Qy = nd({
  name: "TableToolbarContent",
  type: "div",
  className: (a) => `${a}--toolbar-content`
}), b0 = {
  "carbon.table.toolbar.search.label": "carbon.table.toolbar.search.label",
  "carbon.table.toolbar.search.placeholder": "carbon.table.toolbar.search.placeholder"
}, jT = {
  [b0["carbon.table.toolbar.search.label"]]: "Filter table",
  [b0["carbon.table.toolbar.search.placeholder"]]: "Filter table"
}, HT = (a) => jT[a], Ky = ({
  className: a,
  searchContainerClass: o,
  onChange: r,
  onClear: i = st,
  translateWithId: f = HT,
  placeholder: p,
  labelText: m,
  expanded: g,
  defaultExpanded: h,
  defaultValue: b,
  disabled: E,
  onExpand: S,
  persistent: w = !1,
  id: x,
  onBlur: N,
  onFocus: C,
  size: A = "lg",
  tabIndex: $ = "0",
  ..._
}) => {
  const {
    current: z
  } = v.useRef(g !== void 0), [D, H] = v.useState(!!(h || b)), L = z ? g : D, [j, I] = v.useState(b || ""), F = dt("table-toolbar-search"), [Z, he] = v.useState(null), ae = be();
  v.useEffect(() => {
    var W, le, pe;
    Z && ((pe = (le = (W = Z.current) == null ? void 0 : W.querySelector) == null ? void 0 : le.call(W, "input")) == null || pe.focus(), he(null));
  }, [Z]), v.useEffect(
    () => {
      b && (r == null || r("", b));
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const se = oe(a, o, {
    [`${ae}--toolbar-search-container-active`]: L,
    [`${ae}--toolbar-search-container-disabled`]: E,
    [`${ae}--toolbar-search-container-expandable`]: !w,
    [`${ae}--toolbar-search-container-persistent`]: w
  }), ne = (W, le = !L) => {
    E || (!z && !w && H(le), S && S(W, le));
  }, ge = (W) => {
    I(W.target.value), r && r(W, W.target.value);
  }, R = (W) => ne(W, !0), J = (W) => !j && ne(W, !1);
  return /* @__PURE__ */ d.createElement(Or, de({
    disabled: E,
    className: se,
    value: j,
    id: typeof x < "u" ? x : F,
    labelText: m || f("carbon.table.toolbar.search.label"),
    placeholder: p || f("carbon.table.toolbar.search.placeholder"),
    onChange: ge,
    onClear: i,
    onFocus: C ? (W) => C(W, ne) : R,
    onBlur: N ? (W) => N(W, ne) : J,
    size: A,
    tabIndex: $
  }, _));
};
Ky.propTypes = {
  children: c.node,
  /**
   * Provide an optional class name for the search container
   */
  className: c.string,
  /**
   * Specifies if the search should initially render in an expanded state
   */
  defaultExpanded: c.bool,
  /**
   * Provide an optional default value for the Search component
   */
  defaultValue: c.string,
  /**
   * Specifies if the search should be disabled
   */
  disabled: c.bool,
  /**
   * Specifies if the search should expand
   */
  expanded: c.bool,
  /**
   * Provide an optional id for the search container
   */
  id: c.string,
  /**
   * Provide an optional label text for the Search component icon
   */
  labelText: c.string,
  /**
   * Provide an optional function to be called when the search input loses focus, this will be
   * passed the event as the first parameter and a function to handle the expanding of the search
   * input as the second
   */
  onBlur: c.func,
  /**
   * Provide an optional hook that is called each time the input is updated
   */
  onChange: c.func,
  /**
   * Optional callback called when the search value is cleared.
   */
  onClear: c.func,
  /**
   * Provide an optional hook that is called each time the input is expanded
   */
  onExpand: c.func,
  /**
   * Provide an optional function to be called when the search input gains focus, this will be
   * passed the event as the first parameter and a function to handle the expanding of the search
   * input as the second.
   */
  onFocus: c.func,
  /**
   * Whether the search should be allowed to expand
   */
  persistent: c.bool,
  /**
   * Provide an optional placeholder text for the Search component
   */
  placeholder: c.string,
  /**
   * Provide an optional className for the overall container of the Search
   */
  searchContainerClass: c.string,
  /**
   * Specify the size of the Search
   */
  size: c.oneOf(["sm", "md", "lg"]),
  /**
   * Optional prop to specify the tabIndex of the <Search> (in expanded state) or the container (in collapsed state)
   */
  tabIndex: c.oneOfType([c.number, c.string]),
  /**
   * Translates component strings using your i18n tool.
   */
  translateWithId: c.func
};
const y0 = "md", Fy = /* @__PURE__ */ d.forwardRef(({
  autoAlign: a = !1,
  children: o,
  className: r,
  label: i = "Options",
  renderIcon: f = V0,
  size: p = y0,
  menuAlignment: m = "bottom-start",
  tooltipAlignment: g,
  menuTarget: h,
  ...b
}, E) => {
  const S = zt("enable-v12-dynamic-floating-styles") || a, {
    refs: w,
    floatingStyles: x,
    placement: N,
    middlewareData: C
  } = sy(
    S ? {
      // Computing the position starts with initial positioning
      // via `placement`.
      placement: m,
      // The floating element is positioned relative to its nearest
      // containing block (usually the viewport). It will in many cases
      // also “break” the floating element out of a clipping ancestor.
      // https://floating-ui.com/docs/misc#clipping
      strategy: "fixed",
      // Middleware are executed as an in-between “middle” step of the
      // initial `placement` computation and eventual return of data for
      // rendering. Each middleware is executed in order.
      middleware: [a && cy({
        // An explicit array of placements to try if the initial
        // `placement` doesn’t fit on the axes in which overflow
        // is checked.
        fallbackPlacements: m.includes("bottom") ? ["bottom-start", "bottom-end", "top-start", "top-end"] : ["top-start", "top-end", "bottom-start", "bottom-end"]
      })],
      whileElementsMounted: ry
    } : {}
    // When autoAlign is turned off & the `enable-v12-dynamic-floating-styles` feature flag is not
    // enabled, floating-ui will not be used
  ), A = dt("overflowmenu"), $ = be(), _ = v.useRef(null), {
    open: z,
    x: D,
    y: H,
    handleClick: L,
    handleMousedown: j,
    handleClose: I
  } = sT(_);
  v.useEffect(() => {
    S && Object.keys(x).forEach((ne) => {
      w.floating.current && (w.floating.current.style[ne] = x[ne]);
    });
  }, [x, S, w.floating, z, N, C]);
  function F() {
    _.current && L();
  }
  const Z = oe(r, `${$}--overflow-menu__container`, {
    [`${$}--autoalign`]: S
  }), he = oe(`${$}--overflow-menu__${m}`), ae = oe(`${$}--overflow-menu`, {
    [`${$}--overflow-menu--open`]: z
  }, p !== y0 && `${$}--overflow-menu--${p}`), se = co(_, w.setReference);
  return /* @__PURE__ */ d.createElement("div", de({}, b, {
    className: Z,
    "aria-owns": z ? A : void 0,
    ref: E
  }), /* @__PURE__ */ d.createElement(Ln, {
    "aria-controls": z ? A : void 0,
    "aria-haspopup": !0,
    "aria-expanded": z,
    className: ae,
    onClick: F,
    onMouseDown: j,
    ref: se,
    label: i,
    align: g,
    kind: "ghost"
  }, /* @__PURE__ */ d.createElement(f, {
    className: `${$}--overflow-menu__icon`
  })), /* @__PURE__ */ d.createElement(Cy, {
    containerRef: _,
    ref: w.setFloating,
    menuAlignment: m,
    className: he,
    id: A,
    size: p,
    legacyAutoalign: !S,
    open: z,
    onClose: I,
    x: D,
    y: H,
    label: i,
    target: h
  }, o));
});
Fy.propTypes = {
  /**
   * **Experimental**: Will attempt to automatically align the floating element
   * to avoid collisions with the viewport and being clipped by ancestor
   * elements. Requires React v17+
   * @see https://github.com/carbon-design-system/carbon/issues/18714
   */
  autoAlign: c.bool,
  /**
   * A collection of MenuItems to be rendered within this OverflowMenu.
   */
  children: c.node,
  /**
   * Additional CSS class names for the trigger button.
   */
  className: c.string,
  /**
   * A label describing the options available. Is used in the trigger tooltip and as the menu's accessible label.
   */
  label: c.string,
  /**
   * Experimental property. Specify how the menu should align with the button element
   */
  menuAlignment: c.oneOf(["top-start", "top-end", "bottom-start", "bottom-end"]),
  /**
   * A component used to render an icon.
   */
  renderIcon: c.oneOfType([c.func, c.object]),
  /**
   * Specify the size of the menu, from a list of available sizes.
   */
  size: c.oneOf(["xs", "sm", "md", "lg"]),
  /**
   * Specify how the trigger tooltip should be aligned.
   */
  tooltipAlignment: Hl(c.oneOf([
    "top",
    "top-left",
    // deprecated use top-start instead
    "top-right",
    // deprecated use top-end instead
    "bottom",
    "bottom-left",
    // deprecated use bottom-start instead
    "bottom-right",
    // deprecated use bottom-end instead
    "left",
    "left-bottom",
    // deprecated use left-end instead
    "left-top",
    // deprecated use left-start instead
    "right",
    "right-bottom",
    // deprecated use right-end instead
    "right-top",
    // deprecated use right-start instead
    // new values to match floating-ui
    "top-start",
    "top-end",
    "bottom-start",
    "bottom-end",
    "left-end",
    "left-start",
    "right-end",
    "right-start"
  ]), ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"], Ul),
  /**
   * Specify a DOM node where the Menu should be rendered in. Defaults to document.body.
   */
  menuTarget: c.instanceOf(typeof Element < "u" ? Element : Object)
};
const v0 = globalThis, UT = /* @__PURE__ */ (() => {
  const a = [];
  let o = !1;
  const r = () => {
    a.forEach((p) => {
      p();
    }), o = !1;
  }, i = () => {
    o || (o = !0, v0.requestAnimationFrame(r));
  }, f = (p) => {
    a.indexOf(p) < 0 && a.push(p);
  };
  return {
    /** Adds a callback function to be executed on window `resize`. */
    add: (p) => (a.length || v0.addEventListener("resize", i), f(p), {
      /** Removes the callback. */
      remove: () => {
        const m = a.indexOf(p);
        m >= 0 && a.splice(m, 1);
      }
    })
  };
})(), qT = "left", fd = "top", VT = "right", Mr = "bottom", kT = ({
  menuSize: a,
  refPosition: o,
  offset: r,
  direction: i,
  scrollX: f,
  scrollY: p,
  container: m
}) => {
  const {
    left: g = 0,
    top: h = 0,
    right: b = 0,
    bottom: E = 0
  } = o, S = m.position !== "static" ? 0 : f, w = m.position !== "static" ? 0 : p, x = {
    top: m.position !== "static" ? m.rect.top : 0,
    left: m.position !== "static" ? m.rect.left : 0
  }, {
    width: N,
    height: C
  } = a, {
    top: A = 0,
    left: $ = 0
  } = r, _ = (g + b) / 2, z = (h + E) / 2;
  return {
    [qT]: () => ({
      left: g - N + S - $ - x.left,
      top: z - C / 2 + w + A - 9 - x.top
    }),
    [fd]: () => ({
      left: _ - N / 2 + S + $ - x.left,
      top: h - C + w - A - x.top
    }),
    [VT]: () => ({
      left: b + S + $ - x.left,
      top: z - C / 2 + w + A + 3 - x.top
    }),
    [Mr]: () => ({
      left: _ - N / 2 + S + $ - x.left,
      top: E + w + A - x.top
    })
  }[i]();
}, IT = ({
  children: a,
  flipped: o,
  focusTrap: r,
  menuDirection: i = Mr,
  menuOffset: f = {
    top: 0,
    left: 0
  },
  menuRef: p,
  onPlace: m,
  selectorPrimaryFocus: g,
  styles: h,
  target: b = () => document.body,
  triggerRef: E,
  updateOrientation: S
}) => {
  const w = v.useContext(_f), [x, N] = v.useState(void 0), C = v.useRef(null), A = v.useRef(null), $ = v.useRef(null), _ = v.useRef(!1), z = v.useCallback((ae) => {
    const se = C.current;
    if (!se)
      return;
    const ne = E.current, ge = se.getBoundingClientRect(), R = ne ? ne.getBoundingClientRect() : void 0, J = typeof f == "function" ? f(se, i, ne, o) : f, W = globalThis.scrollX ?? 0, le = globalThis.scrollY ?? 0;
    if (S && S({
      menuSize: ge,
      refPosition: R,
      direction: i,
      offset: J,
      scrollX: W,
      scrollY: le,
      container: {
        rect: b().getBoundingClientRect(),
        position: getComputedStyle(b()).position
      }
    }), ge.width > 0 && ge.height > 0 || !J) {
      const pe = kT({
        menuSize: ge,
        refPosition: R ?? {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        },
        offset: J,
        direction: i,
        scrollX: W,
        scrollY: le,
        container: {
          rect: b().getBoundingClientRect(),
          position: getComputedStyle(b()).position
        }
      });
      if ((!x || x.left !== pe.left || x.top !== pe.top) && N(pe), !ae) {
        const O = se.getBoundingClientRect();
        (O.width !== ge.width || O.height !== ge.height) && z(!0);
      }
    }
  }, [E, f, i, o, b, S, x]), D = (ae) => {
    const se = g ? ae.querySelector(g) : null, ne = ae.querySelector(Sf), ge = ae.querySelector(pT);
    (se || // User defined focusable node
    ne || // First sequentially focusable node
    ge || // First programmatic focusable node
    ae).focus();
  }, H = (ae) => {
    C.current = ae, _.current = !!ae, p && p(ae), ae && z();
  };
  v.useEffect(() => {
    _.current && x && C.current && (C.current.contains(document.activeElement) || D(C.current), typeof m == "function" && m(C.current), _.current = !1);
  }, [x, m]), v.useEffect(() => {
    const ae = UT.add(() => {
      z();
    });
    return () => {
      ae.remove();
    };
  }, [E, f, i, o, b, S]), v.useEffect(() => {
    z();
  }, [f, i, o, E, b, S]);
  const L = () => {
    const ae = x, se = ae ? {
      left: `${ae.left}px`,
      top: `${ae.top}px`,
      right: "auto"
    } : {
      visibility: "hidden",
      top: "0px"
    }, ne = a;
    return /* @__PURE__ */ v.cloneElement(ne, {
      ref: H,
      style: {
        ...h,
        ...se,
        position: "absolute",
        opacity: 1
      }
    });
  }, j = (ae) => {
    const {
      target: se,
      relatedTarget: ne
    } = ae;
    C.current && A.current && $.current && se instanceof HTMLElement && ne instanceof HTMLElement && Wf({
      bodyNode: C.current,
      startTrapNode: A.current,
      endTrapNode: $.current,
      currentActiveNode: ne,
      oldActiveNode: se,
      prefix: w
    });
  }, I = (ae) => {
    at(ae, Tr) && C.current && ae.target instanceof HTMLElement && Pf({
      containerNode: C.current,
      currentActiveNode: ae.target,
      event: ae
    });
  }, F = df("enable-experimental-focus-wrap-without-sentinels"), Z = df("enable-focus-wrap-without-sentinels"), he = F || Z;
  if (typeof document < "u") {
    const ae = b ? b() : document.body;
    return /* @__PURE__ */ Gw.createPortal(
      // eslint-disable-next-line  jsx-a11y/no-static-element-interactions  -- https://github.com/carbon-design-system/carbon/issues/20452
      /* @__PURE__ */ d.createElement("div", {
        onBlur: r && !he ? j : void 0,
        onKeyDown: he ? I : void 0
      }, !he && /* @__PURE__ */ d.createElement("span", {
        ref: A,
        tabIndex: 0,
        role: "link",
        className: `${w}--visually-hidden`
      }, "Focus sentinel"), L(), !he && /* @__PURE__ */ d.createElement("span", {
        ref: $,
        tabIndex: 0,
        role: "link",
        className: `${w}--visually-hidden`
      }, "Focus sentinel")),
      ae
    );
  }
  return null;
}, GT = (a, o) => {
  const r = v.useRef(o);
  v.useEffect(() => {
    r.current = o;
  }, [o]), Ty && gc("click", (i) => {
    const {
      target: f
    } = i;
    f instanceof Node && a.current && !a.current.contains(f) && r.current(i);
  });
}, ZT = zf(), YT = (a, ...o) => (a.addEventListener(...o), {
  release() {
    return a.removeEventListener(...o), null;
  }
}), XT = {
  [fd]: "bottom",
  [Mr]: "top"
}, E0 = (a, o, r, i) => {
  const f = XT[o], {
    offsetWidth: p
  } = a;
  switch (f) {
    case "top":
    case "bottom": {
      const m = r ? r.offsetWidth : 0;
      return {
        left: (i ? -1 : 1) * (p / 2 - m / 2),
        top: 0
      };
    }
    default:
      return {
        left: 0,
        top: 0
      };
  }
}, dd = /* @__PURE__ */ v.forwardRef(({
  align: a,
  ["aria-label"]: o = null,
  ariaLabel: r,
  children: i,
  className: f,
  direction: p = Mr,
  flipped: m = !1,
  focusTrap: g = !1,
  iconClass: h,
  iconDescription: b = "Options",
  id: E,
  light: S,
  menuOffset: w = E0,
  menuOffsetFlip: x = E0,
  menuOptionsClass: N,
  onClick: C = st,
  onClose: A = st,
  onOpen: $ = st,
  open: _,
  renderIcon: z = V0,
  selectorPrimaryFocus: D = "[data-floating-menu-primary-focus]",
  size: H = "md",
  innerRef: L,
  ...j
}, I) => {
  const F = v.useContext(_f), [Z, he] = v.useState(_ ?? !1), [ae, se] = v.useState(!1), [ne, ge] = v.useState(!1), R = v.useRef(null), J = v.useRef(ZT()), W = v.useRef(null), le = v.useRef({}), pe = v.useRef(_), O = v.useRef(Z), q = v.useRef(null), P = v.useRef(null);
  v.useEffect(() => {
    pe.current !== _ && (he(!!_), pe.current = _);
  }, [_]), v.useEffect(() => {
    q.current && ge(!0);
  }, []), v.useEffect(() => {
    Z && !O.current ? $() : !Z && O.current && A(), O.current = Z;
  }, [Z, A, $]), GT(P, ({
    target: _e
  }) => {
    Z && (!W.current || _e instanceof Node && !W.current.contains(_e)) && te();
  });
  const G = v.useCallback(() => {
    q.current && q.current.focus();
  }, []), te = v.useCallback((_e) => {
    he(!1), _e && _e();
  }, []), V = v.useCallback(() => {
    const _e = ae, ke = Z;
    te(() => {
      ke && !_e && G();
    });
  }, [ae, Z, te, G]), Q = v.useCallback(() => {
    const _e = Z;
    te(() => {
      _e && G();
    });
  }, [Z, te, G]), me = (_e) => {
    se(!0), (!W.current || !W.current.contains(_e.target)) && (he((ke) => !ke), C(_e));
  }, ie = (_e) => {
    Z && ua(_e, [$f, Bf, Lf, hc]) && _e.preventDefault(), ua(_e, [al, Tr]) && (Q(), _e.stopPropagation(), _e.preventDefault());
  }, ve = ({
    currentIndex: _e = 0,
    direction: ke
  }) => {
    const Xe = v.Children.toArray(i).reduce((Wt, Hn, bo) => (/* @__PURE__ */ d.isValidElement(Hn) && !Hn.props.disabled && Wt.push(bo), Wt), []), yn = (() => {
      const Wt = Xe.indexOf(_e) + ke;
      switch (Wt) {
        case -1:
          return Xe.length - 1;
        case Xe.length:
          return 0;
        default:
          return Wt;
      }
    })(), Jt = le.current[Xe[yn]];
    Jt == null || Jt.focus();
  }, Ne = (_e) => {
    _e || (W.current = _e), !_e && R.current && (R.current = R.current.release());
  }, Te = (_e) => {
    if (!_e) return;
    W.current = _e;
    const ke = "onfocusin" in window, Xe = ke ? "focusin" : "focus";
    R.current = YT(_e.ownerDocument, Xe, (yn) => {
      const Jt = yn.target;
      if (!(Jt instanceof Element)) return;
      const Wt = q.current;
      typeof Jt.matches == "function" && !_e.contains(Jt) && Wt && !Jt.matches(`.${F}--overflow-menu:first-child, .${F}--overflow-menu-options:first-child`) && V();
    }, !ke);
  }, Oe = () => {
    const _e = q.current;
    return _e instanceof Element && _e.closest("[data-floating-menu-container]") || document.body;
  }, Ee = `overflow-menu-${J.current}__menu-body`, Ue = oe(f, `${F}--overflow-menu`, {
    [`${F}--overflow-menu--open`]: Z,
    [`${F}--overflow-menu--light`]: S,
    [`${F}--overflow-menu--${H}`]: H
  }), Se = oe(N, `${F}--overflow-menu-options`, {
    [`${F}--overflow-menu--flip`]: m,
    [`${F}--overflow-menu-options--open`]: Z,
    [`${F}--overflow-menu-options--light`]: S,
    [`${F}--overflow-menu-options--${H}`]: H
  }), fe = oe(`${F}--overflow-menu__icon`, h), Ye = v.Children.toArray(i).map((_e, ke) => {
    if (/* @__PURE__ */ v.isValidElement(_e)) {
      const Xe = _e;
      return /* @__PURE__ */ v.cloneElement(Xe, {
        closeMenu: Xe.props.closeMenu || V,
        handleOverflowMenuItemFocus: ve,
        ref: (yn) => {
          le.current[ke] = yn;
        },
        index: ke
      });
    }
    return null;
  }), ze = /* @__PURE__ */ d.createElement("ul", {
    className: Se,
    tabIndex: -1,
    role: "menu",
    "aria-label": o || r,
    onKeyDown: ie,
    id: Ee
  }, Ye), je = /* @__PURE__ */ d.createElement(IT, {
    focusTrap: g,
    triggerRef: q,
    menuDirection: p,
    menuOffset: m ? x : w,
    menuRef: Ne,
    flipped: m,
    target: Oe,
    onPlace: Te,
    selectorPrimaryFocus: D
  }, /* @__PURE__ */ v.cloneElement(ze, {
    "data-floating-menu-direction": p
  })), We = L ? co(q, L, I) : co(q, I);
  return /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("span", {
    className: `${F}--overflow-menu__wrapper`,
    "aria-owns": Z ? Ee : void 0,
    ref: P
  }, /* @__PURE__ */ d.createElement(Ln, de({}, j, {
    align: a,
    type: "button",
    "aria-haspopup": !0,
    "aria-expanded": Z,
    "aria-controls": Z ? Ee : void 0,
    className: Ue,
    onClick: me,
    id: E,
    ref: We,
    size: H,
    label: b,
    kind: "ghost"
  }), /* @__PURE__ */ d.createElement(z, {
    className: fe,
    "aria-label": b
  })), Z && ne && je));
});
dd.propTypes = {
  /**
   * Specify how the trigger should align with the tooltip
   */
  align: Hl(c.oneOf([
    "top",
    "top-left",
    // deprecated use top-start instead
    "top-right",
    // deprecated use top-end instead
    "bottom",
    "bottom-left",
    // deprecated use bottom-start instead
    "bottom-right",
    // deprecated use bottom-end instead
    "left",
    "left-bottom",
    // deprecated use left-end instead
    "left-top",
    // deprecated use left-start instead
    "right",
    "right-bottom",
    // deprecated use right-end instead
    "right-top",
    // deprecated use right-start instead
    // new values to match floating-ui
    "top-start",
    "top-end",
    "bottom-start",
    "bottom-end",
    "left-end",
    "left-start",
    "right-end",
    "right-start"
  ]), ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"], Ul),
  /**
   * Specify a label to be read by screen readers on the container node
   */
  "aria-label": c.string,
  /**
   * Deprecated, please use `aria-label` instead.
   * Specify a label to be read by screen readers on the container note.
   */
  ariaLabel: $e(c.string),
  /**
   * The child nodes.
   */
  children: c.node,
  /**
   * The CSS class names.
   */
  className: c.string,
  /**
   * The menu direction.
   */
  direction: c.oneOf([fd, Mr]),
  /**
   * `true` if the menu alignment should be flipped.
   */
  flipped: c.bool,
  /**
   * @deprecated Tab key is handled with event handler so no need for focus trap.
   * Enable or disable focus trap behavior
   */
  focusTrap: c.bool,
  /**
   * The CSS class for the icon.
   */
  iconClass: c.string,
  /**
   * The icon description.
   */
  iconDescription: c.string,
  /**
   * The element ID.
   */
  id: c.string,
  /**
   * `true` to use the light version. For use on $ui-01 backgrounds only.
   * Don't use this to make OverflowMenu background color same as container background color.
   */
  light: $e(c.bool),
  /**
   * The adjustment in position applied to the floating menu.
   */
  menuOffset: c.oneOfType([c.shape({
    top: c.number.isRequired,
    left: c.number.isRequired
  }), c.func]),
  /**
   * The adjustment in position applied to the floating menu when flipped.
   */
  menuOffsetFlip: c.oneOfType([c.shape({
    top: c.number.isRequired,
    left: c.number.isRequired
  }), c.func]),
  /**
   * The class to apply to the menu options
   */
  menuOptionsClass: c.string,
  /**
   * The event handler for the `click` event.
   */
  onClick: c.func,
  /**
   * Function called when menu is closed
   */
  onClose: c.func,
  /**
   * The event handler for the `focus` event.
   */
  onFocus: c.func,
  /**
   * The event handler for the `keydown` event.
   */
  onKeyDown: c.func,
  /**
   * Function called when menu is opened
   */
  onOpen: c.func,
  /**
   * `true` if the menu should be open.
   */
  open: c.bool,
  /**
   * A component used to render an icon.
   */
  renderIcon: c.oneOfType([c.func, c.object]),
  /**
   * Specify a CSS selector that matches the DOM element that should
   * be focused when the OverflowMenu opens
   */
  selectorPrimaryFocus: c.string,
  /**
   * Specify the size of the OverflowMenu. Currently supports either `xs`, `sm`, `md` (default) or `lg` as an option.
   */
  size: c.oneOf(["xs", "sm", "md", "lg"])
};
const md = /* @__PURE__ */ v.forwardRef((a, o) => zt("enable-v12-overflowmenu") ? /* @__PURE__ */ d.createElement(Fy, de({}, a, {
  ref: o
})) : /* @__PURE__ */ d.createElement(dd, de({}, a, {
  ref: o
})));
md.displayName = "OverflowMenu";
md.propTypes = dd.propTypes;
const QT = "Settings", Jy = ({
  className: a,
  renderIcon: o = US,
  iconDescription: r = QT,
  children: i,
  menuOptionsClass: f,
  ...p
}) => {
  const m = be(), g = oe(a, `${m}--toolbar-action ${m}--overflow-menu`), h = oe(f, `${m}--toolbar-action__menu`);
  return /* @__PURE__ */ d.createElement(md, de({
    renderIcon: o,
    className: g,
    title: r,
    iconDescription: r,
    menuOptionsClass: h,
    flipped: !0
  }, p), i);
};
Jy.propTypes = {
  children: c.node.isRequired,
  /**
   * Provide an optional class name for the toolbar menu
   */
  className: c.string,
  /**
   * The description of the menu icon.
   */
  iconDescription: c.string,
  /**
   * Provide an optional class name for the toolbar menu
   */
  menuOptionsClass: c.string,
  /**
   * A component used to render an icon.
   */
  renderIcon: c.oneOfType([c.func, c.object])
};
const KT = zf(), Lt = {
  "carbon.table.row.expand": "carbon.table.row.expand",
  "carbon.table.row.collapse": "carbon.table.row.collapse",
  "carbon.table.all.expand": "carbon.table.all.expand",
  "carbon.table.all.collapse": "carbon.table.all.collapse",
  "carbon.table.all.select": "carbon.table.all.select",
  "carbon.table.all.unselect": "carbon.table.all.unselect",
  "carbon.table.row.select": "carbon.table.row.select",
  "carbon.table.row.unselect": "carbon.table.row.unselect"
}, FT = {
  [Lt["carbon.table.all.expand"]]: "Expand all rows",
  [Lt["carbon.table.all.collapse"]]: "Collapse all rows",
  [Lt["carbon.table.row.expand"]]: "Expand current row",
  [Lt["carbon.table.row.collapse"]]: "Collapse current row",
  [Lt["carbon.table.all.select"]]: "Select all rows",
  [Lt["carbon.table.all.unselect"]]: "Unselect all rows",
  [Lt["carbon.table.row.select"]]: "Select row",
  [Lt["carbon.table.row.unselect"]]: "Unselect row"
}, JT = (a) => FT[a], ut = (a) => {
  const {
    children: o,
    filterRows: r = CT,
    headers: i,
    render: f,
    translateWithId: p = JT,
    size: m,
    isSortable: g,
    useZebraStyles: h,
    useStaticWidth: b,
    stickyHeader: E,
    overflowMenuOnHover: S,
    experimentalAutoAlign: w,
    radio: x,
    rows: N
  } = a, C = v.useMemo(() => KT(), []), [A, $] = v.useState(() => ({
    ...m0(a, {}),
    // Initialize to collapsed. A value of `undefined` is treated as neutral.
    isExpandedAll: !1
  }));
  v.useEffect(() => {
    const V = N.map((Oe) => Oe.id), Q = i.map((Oe) => Oe.key), me = !rf(V, A.rowIds), ie = Array.from(new Set(Object.keys(A.cellsById).map((Oe) => Oe.split(":")[1]))), ve = !rf(Q, ie), Ne = A.rowIds.map((Oe) => {
      const Ee = A.rowsById[Oe];
      return {
        id: Ee.id,
        disabled: Ee.disabled,
        isExpanded: Ee.isExpanded,
        isSelected: Ee.isSelected
      };
    }), Te = !rf(N, Ne);
    (me || ve || Te) && $((Oe) => m0(a, Oe));
  }, [i, N]);
  const _ = ({
    header: V,
    onClick: Q,
    isSortable: me,
    ...ie
  }) => {
    const {
      sortDirection: ve,
      sortHeaderKey: Ne
    } = A, {
      key: Te,
      slug: Oe,
      decorator: Ee
    } = V;
    return {
      ...ie,
      key: Te,
      sortDirection: ve,
      isSortable: me ?? V.isSortable ?? g,
      isSortHeader: Ne === Te,
      slug: Oe,
      decorator: Ee,
      onClick: (Ue) => {
        const Se = d0(a, A, {
          key: Te
        });
        $((fe) => ({
          ...fe,
          ...Se
        })), Q && D(Q, {
          sortHeaderKey: Te,
          sortDirection: Se.sortDirection
        })(Ue);
      }
    };
  }, z = ({
    onClick: V,
    onExpand: Q,
    ...me
  } = {}) => {
    const {
      isExpandedAll: ie,
      rowIds: ve,
      rowsById: Ne
    } = A, Te = ie || ve.every((Ue) => Ne[Ue].isExpanded), Oe = Te ? Lt["carbon.table.all.collapse"] : Lt["carbon.table.all.expand"], Ee = [q, Q];
    return V && Ee.push(H(V, {
      isExpanded: Te
    })), {
      ...me,
      "aria-label": p(Oe),
      // Provide a string of all expanded row IDs, separated by a space.
      "aria-controls": ve.map((Ue) => `${R()}-expanded-row-${Ue}`).join(" "),
      isExpanded: Te,
      onExpand: kt(Ee),
      id: `${R()}-expand`
    };
  }, D = (V, Q) => (me) => V(me, Q), H = (V, Q) => (me) => V(me, Q), L = ({
    row: V,
    onClick: Q,
    ...me
  }) => {
    const ie = V.isExpanded ? Lt["carbon.table.row.collapse"] : Lt["carbon.table.row.expand"];
    return {
      ...me,
      key: V.id,
      onClick: Q,
      // Compose the event handlers so we don't overwrite a consumer's `onClick`
      // handler
      onExpand: kt([O(V.id), Q]),
      isExpanded: V.isExpanded,
      "aria-label": p(ie),
      "aria-controls": `${R()}-expanded-row-${V.id}`,
      isSelected: V.isSelected,
      disabled: V.disabled,
      expandHeader: `${R()}-expand`
    };
  }, j = ({
    row: V,
    ...Q
  }) => ({
    ...Q,
    id: `${R()}-expanded-row-${V.id}`
  }), I = ({
    onClick: V,
    row: Q,
    ...me
  } = {}) => {
    if (Q) {
      const Ee = Q.isSelected ? Lt["carbon.table.row.unselect"] : Lt["carbon.table.row.select"];
      return {
        ...me,
        checked: Q.isSelected,
        onSelect: kt([pe(Q.id), V]),
        id: `${R()}__select-row-${Q.id}`,
        name: `select-row-${C}`,
        "aria-label": p(Ee),
        disabled: Q.disabled,
        radio: x
      };
    }
    const ie = A.rowIds.length, ve = ne.length, Ne = ie > 0 && ve === ie, Te = ie > 0 && ve > 0 && ve !== ie, Oe = Ne || Te ? Lt["carbon.table.all.unselect"] : Lt["carbon.table.all.select"];
    return {
      ...me,
      "aria-label": p(Oe),
      checked: Ne,
      id: `${R()}__select-all`,
      indeterminate: Te,
      name: `select-all-${C}`,
      onSelect: kt([le, V])
    };
  }, F = (V) => ({
    ...V,
    size: m === "xs" || m === "sm" ? "sm" : void 0
  }), Z = (V) => {
    const {
      shouldShowBatchActions: Q
    } = A, me = ne.length;
    return {
      onSelectAll: void 0,
      totalCount: A.rowIds.length,
      ...V,
      shouldShowBatchActions: Q && me > 0,
      totalSelected: me,
      onCancel: W
    };
  }, he = () => ({
    useZebraStyles: h,
    size: m ?? "lg",
    isSortable: g,
    useStaticWidth: b,
    stickyHeader: E,
    overflowMenuOnHover: S ?? !1,
    experimentalAutoAlign: w
  }), ae = () => ({
    stickyHeader: E,
    useStaticWidth: b
  }), se = ({
    cell: {
      hasAILabelHeader: V,
      id: Q
    },
    ...me
  }) => ({
    ...me,
    hasAILabelHeader: V,
    key: Q
  }), ne = A.rowIds.filter((V) => {
    const Q = A.rowsById[V];
    return Q.isSelected && !Q.disabled;
  }), ge = typeof A.filterInputValue == "string" ? r({
    cellsById: A.cellsById,
    getCellId: sc,
    headers: i,
    inputValue: A.filterInputValue,
    rowIds: A.rowIds
  }) : A.rowIds, R = () => `data-table-${C}`, J = (V, Q) => {
    const {
      rowIds: me
    } = V, ie = me.length !== ge.length;
    return {
      rowsById: me.reduce((ve, Ne) => {
        const Te = {
          ...V.rowsById[Ne]
        };
        return !Te.disabled && (!ie || ge.includes(Ne)) && (Te.isSelected = Q), ve[Ne] = Te, ve;
      }, {})
    };
  }, W = () => {
    $((V) => ({
      ...V,
      shouldShowBatchActions: !1,
      ...J(V, !1)
    }));
  }, le = () => {
    $((V) => {
      const {
        rowsById: Q
      } = V, me = !Object.values(Q).filter((ie) => ie.isSelected && !ie.disabled).length;
      return {
        ...V,
        shouldShowBatchActions: me,
        ...J(V, me)
      };
    });
  }, pe = (V) => () => {
    $((Q) => {
      const me = Q.rowsById[V];
      if (x) {
        const Ne = Object.entries(Q.rowsById).reduce((Te, [Oe, Ee]) => (Te[Oe] = {
          ...Ee,
          isSelected: !1
        }, Te), {});
        return {
          ...Q,
          shouldShowBatchActions: !1,
          rowsById: {
            ...Ne,
            [V]: {
              ...Ne[V],
              isSelected: !Ne[V].isSelected
            }
          }
        };
      }
      const ie = Q.rowIds.filter((Ne) => Q.rowsById[Ne].isSelected).length, ve = me.isSelected ? ie - 1 : ie + 1;
      return {
        ...Q,
        // Show batch action toolbar if selecting, or if there are other
        // selected rows remaining.
        shouldShowBatchActions: !me.isSelected || ve > 0,
        rowsById: {
          ...Q.rowsById,
          [V]: {
            ...me,
            isSelected: !me.isSelected
          }
        }
      };
    });
  }, O = (V) => () => {
    $((Q) => {
      const me = Q.rowsById[V], {
        isExpandedAll: ie
      } = Q;
      return {
        ...Q,
        isExpandedAll: me.isExpanded ? !1 : ie,
        rowsById: {
          ...Q.rowsById,
          [V]: {
            ...me,
            isExpanded: !me.isExpanded
          }
        }
      };
    });
  }, q = () => {
    $((V) => {
      const {
        rowIds: Q,
        isExpandedAll: me
      } = V;
      return {
        ...V,
        isExpandedAll: !me,
        rowsById: Q.reduce((ie, ve) => (ie[ve] = {
          ...V.rowsById[ve],
          isExpanded: !me
        }, ie), {})
      };
    });
  }, P = (V) => () => {
    $((Q) => {
      const me = d0(a, Q, {
        key: V
      });
      return {
        ...Q,
        // Preserve ALL existing state
        ...me
        // Then apply only the sorting changes
      };
    });
  }, G = (V, Q) => {
    const me = Q ?? (V === "" ? V : V.target.value);
    $((ie) => ({
      ...ie,
      filterInputValue: me
    }));
  }, te = {
    // Data derived from state
    rows: p0(ge, A.rowsById, A.cellsById),
    headers: i,
    selectedRows: p0(ne, A.rowsById, A.cellsById),
    // Prop accessors/getters
    getHeaderProps: _,
    getExpandHeaderProps: z,
    getRowProps: L,
    getExpandedRowProps: j,
    getSelectionProps: I,
    getToolbarProps: F,
    getBatchActionProps: Z,
    getTableProps: he,
    getTableContainerProps: ae,
    getCellProps: se,
    // Custom event handlers
    onInputChange: G,
    // Expose internal state change actions
    sortBy: (V) => P(V)(),
    selectAll: le,
    selectRow: (V) => pe(V)(),
    expandRow: (V) => O(V)(),
    expandAll: q,
    radio: x
  };
  return typeof f < "u" ? f(te) : typeof o < "u" ? o(te) : null;
};
ut.Table = Cc;
ut.TableActionList = Uy;
ut.TableBatchAction = qy;
ut.TableBatchActions = Vy;
ut.TableBody = Nc;
ut.TableCell = Mn;
ut.TableContainer = ld;
ut.TableDecoratorRow = so;
ut.TableExpandHeader = Gy;
ut.TableExpandRow = ad;
ut.TableExpandedRow = Zy;
ut.TableHead = od;
ut.TableHeader = Dr;
ut.TableRow = sa;
ut.TableSelectAll = id;
ut.TableSelectRow = cd;
ut.TableSlugRow = uo;
ut.TableToolbar = sd;
ut.TableToolbarAction = ud;
ut.TableToolbarContent = Qy;
ut.TableToolbarSearch = Ky;
ut.TableToolbarMenu = Jy;
ut.propTypes = {
  /**
   * Pass in the children that will be rendered within the Table
   */
  children: c.func,
  /**
   * Experimental property. Allows table to align cell contents to the top if there is text wrapping in the content. Might have performance issues, intended for smaller tables
   */
  experimentalAutoAlign: c.bool,
  /**
   * Optional hook to manually control filtering of the rows from the
   * TableToolbarSearch component
   */
  filterRows: c.func,
  /**
   * The `headers` prop represents the order in which the headers should
   * appear in the table. We expect an array of objects to be passed in, where
   * `key` is the name of the key in a row object, and `header` is the name of
   * the header.
   */
  headers: c.arrayOf(c.shape({
    key: c.string.isRequired,
    header: c.node.isRequired,
    isSortable: c.bool
  })).isRequired,
  /**
   * Specify whether the table should be able to be sorted by its headers
   */
  isSortable: c.bool,
  /**
   * Provide a string for the current locale
   */
  locale: c.string,
  /**
   * Specify whether the overflow menu (if it exists) should be shown always, or only on hover
   */
  overflowMenuOnHover: c.bool,
  /**
   * Specify whether the control should be a radio button or inline checkbox
   */
  radio: c.bool,
  /**
   * @deprecated Use `children` instead. This prop will be removed in
   * the next major version.
   *
   * https://www.patterns.dev/react/render-props-pattern/#children-as-a-function
   */
  render: $e(c.func),
  /**
   * The `rows` prop is where you provide us with a list of all the rows that
   * you want to render in the table. The only hard requirement is that this
   * is an array of objects, and that each object has a unique `id` field
   * available on it.
   */
  rows: c.arrayOf(c.shape({
    id: c.string.isRequired,
    disabled: c.bool,
    isSelected: c.bool,
    isExpanded: c.bool
  })).isRequired,
  /**
   *  Change the row height of table. Currently supports `xs`, `sm`, `md`, `lg`, and `xl`.
   */
  size: c.oneOf(["xs", "sm", "md", "lg", "xl"]),
  /**
   * Optional hook to manually control sorting of the rows.
   */
  sortRow: c.func,
  /**
   * Specify whether the header should be sticky.
   * Still experimental: may not work with every combination of table props
   */
  stickyHeader: c.bool,
  /**
   * Translates component strings using your i18n tool.
   */
  translateWithId: c.func,
  /**
   * If `true`, sets the table width to `auto` instead of `100%`.
   */
  useStaticWidth: c.bool,
  /**
   * `true` to add useZebraStyles striping.
   */
  useZebraStyles: c.bool
};
function uc({
  className: a,
  children: o,
  id: r,
  ...i
}) {
  const f = be(), p = oe(`${f}--label`, `${f}--label--no-margin`, a);
  return /* @__PURE__ */ d.createElement(Fe, de({
    as: "label",
    htmlFor: r,
    className: p
  }, i), o);
}
uc.propTypes = {
  /**
   * Specify the content of the form label
   */
  children: c.node,
  /**
   * Provide a custom className to be applied to the containing <label> node
   */
  className: c.string,
  /**
   * Provide a unique id for the given <FormLabel>
   */
  id: c.string
};
const Wy = /* @__PURE__ */ d.createContext({
  mode: "flexbox",
  subgrid: !1
}), fc = ({
  children: a,
  mode: o,
  subgrid: r = !1
}) => {
  const i = d.useMemo(() => ({
    mode: o,
    subgrid: r
  }), [o, r]);
  return /* @__PURE__ */ d.createElement(Wy.Provider, {
    value: i
  }, a);
}, WT = ["flexbox", "css-grid"];
fc.propTypes = {
  /**
   * Pass in components which will be rendered within the `GridSettings`
   * component
   */
  children: c.node,
  /**
   * Specify the gutter mode for the GridContext
   */
  mode: c.oneOf(WT).isRequired,
  /**
   * Specify whether subgrid should be enabled
   */
  subgrid: c.bool
};
const Py = () => d.useContext(Wy), ev = /* @__PURE__ */ d.forwardRef(({
  as: a,
  condensed: o = !1,
  narrow: r = !1,
  fullWidth: i = !1,
  className: f,
  children: p,
  ...m
}, g) => {
  const h = be(), b = oe(f, {
    [`${h}--grid`]: !0,
    [`${h}--grid--condensed`]: o,
    [`${h}--grid--narrow`]: r,
    [`${h}--grid--full-width`]: i
  }), E = a || "div";
  return /* @__PURE__ */ d.createElement(fc, {
    mode: "flexbox",
    subgrid: !1
  }, /* @__PURE__ */ d.createElement(E, de({
    className: b,
    ref: g
  }, m), p));
});
ev.propTypes = {
  /**
   * Provide a custom element to render instead of the default <div>
   */
  as: c.oneOfType([c.string, c.elementType]),
  /**
   * Pass in content that will be rendered within the `FlexGrid`
   */
  children: c.node,
  /**
   * Specify a custom className to be applied to the `FlexGrid`
   */
  className: c.string,
  /**
   * Collapse the gutter to 1px. Useful for fluid layouts.
   * Rows have 1px of margin between them to match gutter.
   */
  condensed: c.bool,
  /**
   * Remove the default max width that the grid has set
   */
  fullWidth: c.bool,
  /**
   * Container hangs 16px into the gutter. Useful for
   * typographic alignment with and without containers.
   */
  narrow: c.bool
};
const PT = ev, tv = /* @__PURE__ */ d.forwardRef(({
  align: a,
  as: o,
  children: r,
  className: i,
  condensed: f = !1,
  fullWidth: p = !1,
  narrow: m = !1,
  ...g
}, h) => {
  const b = be(), {
    subgrid: E
  } = Py();
  let S = "wide";
  if (m ? S = "narrow" : f && (S = "condensed"), E)
    return /* @__PURE__ */ d.createElement(fc, {
      mode: "css-grid",
      subgrid: !0
    }, /* @__PURE__ */ d.createElement(nv, de({
      ref: h,
      as: o,
      className: i,
      mode: S
    }, g), r));
  const w = oe(i, {
    [`${b}--css-grid`]: !0,
    [`${b}--css-grid--condensed`]: S === "condensed",
    [`${b}--css-grid--narrow`]: S === "narrow",
    [`${b}--css-grid--full-width`]: p,
    [`${b}--css-grid--start`]: a === "start",
    [`${b}--css-grid--end`]: a === "end"
  }), x = o || "div";
  return /* @__PURE__ */ d.createElement(fc, {
    mode: "css-grid",
    subgrid: !0
  }, /* @__PURE__ */ d.createElement(x, de({
    className: w,
    ref: h
  }, g), r));
});
tv.propTypes = {
  /**
   * Provide a custom element to render instead of the default <div>
   */
  as: c.oneOfType([c.string, c.elementType]),
  /**
   * Specify grid alignment. Default is center
   */
  align: c.oneOf(["start", "center", "end"]),
  /**
   * Pass in content that will be rendered within the `Grid`
   */
  children: c.node,
  /**
   * Specify a custom className to be applied to the `Grid`
   */
  className: c.string,
  /**
   * Collapse the gutter to 1px. Useful for fluid layouts.
   * Rows have 1px of margin between them to match gutter.
   */
  condensed: c.bool,
  /**
   * Remove the default max width that the grid has set
   */
  fullWidth: c.bool,
  /**
   * Container hangs 16px into the gutter. Useful for
   * typographic alignment with and without containers.
   */
  narrow: c.bool
};
const nv = /* @__PURE__ */ d.forwardRef(({
  as: a,
  className: o,
  children: r,
  mode: i,
  ...f
}, p) => {
  const m = be(), g = oe(o, {
    [`${m}--subgrid`]: !0,
    [`${m}--subgrid--condensed`]: i === "condensed",
    [`${m}--subgrid--narrow`]: i === "narrow",
    [`${m}--subgrid--wide`]: i === "wide"
  }), h = a || "div";
  return /* @__PURE__ */ d.createElement(h, de({}, f, {
    ref: p,
    className: g
  }), r);
});
nv.propTypes = {
  /**
   * Provide a custom element to render instead of the default <div>
   */
  as: c.oneOfType([c.string, c.elementType]),
  /**
   * Pass in content that will be rendered within the `Subgrid`
   */
  children: c.node,
  /**
   * Specify a custom className to be applied to the `Subgrid`
   */
  className: c.string,
  /**
   * Specify the gutter mode for the subgrid
   */
  mode: c.oneOf(["wide", "narrow", "condensed"])
};
const eC = tv;
function lv(a) {
  return zt("enable-css-grid") ? /* @__PURE__ */ d.createElement(eC, a) : /* @__PURE__ */ d.createElement(PT, a);
}
lv.propTypes = {
  /**
   * Specify grid alignment. Default is center
   */
  align: c.oneOf(["start", "center", "end"]),
  /**
   * Provide a custom element to render instead of the default <div>
   */
  as: c.oneOfType([c.string, c.elementType]),
  /**
   * Pass in content that will be rendered within the `Grid`
   */
  children: c.node,
  /**
   * Specify a custom className to be applied to the `Grid`
   */
  className: c.string,
  /**
   * Collapse the gutter to 1px. Useful for fluid layouts.
   * Rows have 1px of margin between them to match gutter.
   */
  condensed: c.bool,
  /**
   * Remove the default max width that the grid has set
   */
  fullWidth: c.bool,
  /**
   * Container hangs 16px into the gutter. Useful for
   * typographic alignment with and without containers.
   */
  narrow: c.bool
};
const pd = lv, _c = /* @__PURE__ */ d.forwardRef(({
  as: a,
  children: o,
  className: r,
  sm: i,
  md: f,
  lg: p,
  xlg: m,
  max: g,
  ...h
}, b) => {
  const {
    mode: E
  } = Py(), S = be(), w = a || "div";
  if (E === "css-grid")
    return /* @__PURE__ */ d.createElement(av, de({
      as: w,
      className: r,
      sm: i,
      md: f,
      ref: b,
      lg: p,
      xlg: m,
      max: g
    }, h), o);
  const x = nC([i, f, p, m, g], S), N = oe(r, x, {
    [`${S}--col`]: x.length === 0
  });
  return /* @__PURE__ */ d.createElement(w, de({
    className: N,
    ref: b
  }, h), o);
}), xr = c.oneOf(["25%", "50%", "75%", "100%"]), Dn = df("enable-css-grid") ? c.oneOfType([c.bool, c.number, c.shape({
  span: c.oneOfType([c.number, xr]),
  offset: c.number,
  start: c.number,
  end: c.number
}), xr]) : c.oneOfType([c.bool, c.number, c.shape({
  span: c.number,
  offset: c.number
})]);
_c.propTypes = {
  /**
   * Provide a custom element to render instead of the default <div>
   */
  as: c.oneOfType([c.string, c.elementType]),
  /**
   * Pass in content that will be rendered within the `Column`
   */
  children: c.node,
  /**
   * Specify a custom className to be applied to the `Column`
   */
  className: c.string,
  /**
   * Specify column span for the `lg` breakpoint (Default breakpoint up to 1312px)
   * This breakpoint supports 16 columns by default.
   *
   * @see https://carbondesignsystem.com/elements/2x-grid/overview/#breakpoints
   */
  lg: Dn,
  /**
   * Specify column span for the `max` breakpoint. This breakpoint supports 16
   * columns by default.
   *
   * @see https://carbondesignsystem.com/elements/2x-grid/overview/#breakpoints
   */
  max: Dn,
  /**
   * Specify column span for the `md` breakpoint (Default breakpoint up to 1056px)
   * This breakpoint supports 8 columns by default.
   *
   * @see https://carbondesignsystem.com/elements/2x-grid/overview/#breakpoints
   */
  md: Dn,
  /**
   * Specify column span for the `sm` breakpoint (Default breakpoint up to 672px)
   * This breakpoint supports 4 columns by default.
   *
   * @see https://carbondesignsystem.com/elements/2x-grid/overview/#breakpoints
   */
  sm: Dn,
  /**
   * Specify constant column span, start, or end values that will not change
   * based on breakpoint
   */
  span: c.oneOfType([c.number, xr]),
  /**
   * Specify column span for the `xlg` breakpoint (Default breakpoint up to
   * 1584px) This breakpoint supports 16 columns by default.
   *
   * @see https://carbondesignsystem.com/elements/2x-grid/overview/#breakpoints
   */
  xlg: Dn
};
const av = /* @__PURE__ */ d.forwardRef(({
  as: a = "div",
  children: o,
  className: r,
  sm: i,
  md: f,
  lg: p,
  xlg: m,
  max: g,
  span: h,
  ...b
}, E) => {
  const S = be(), w = tC([i, f, p, m, g], S), x = lC(h, S), N = oe(r, w, x, {
    [`${S}--css-grid-column`]: !0
  });
  return /* @__PURE__ */ d.createElement(a, de({
    className: N,
    ref: E
  }, b), o);
});
av.propTypes = {
  /**
   * Provide a custom element to render instead of the default <div>
   */
  as: c.oneOfType([c.string, c.elementType]),
  /**
   * Pass in content that will be rendered within the `Column`
   */
  children: c.node,
  /**
   * Specify a custom className to be applied to the `Column`
   */
  className: c.string,
  /**
   * Specify column span for the `lg` breakpoint (Default breakpoint up to 1312px)
   * This breakpoint supports 16 columns by default.
   *
   * @see https://carbondesignsystem.com/elements/2x-grid/overview/#breakpoints
   */
  lg: Dn,
  /**
   * Specify column span for the `max` breakpoint. This breakpoint supports 16
   * columns by default.
   *
   * @see https://carbondesignsystem.com/elements/2x-grid/overview/#breakpoints
   */
  max: Dn,
  /**
   * Specify column span for the `md` breakpoint (Default breakpoint up to 1056px)
   * This breakpoint supports 8 columns by default.
   *
   * @see https://carbondesignsystem.com/elements/2x-grid/overview/#breakpoints
   */
  md: Dn,
  /**
   * Specify column span for the `sm` breakpoint (Default breakpoint up to 672px)
   * This breakpoint supports 4 columns by default.
   *
   * @see https://carbondesignsystem.com/elements/2x-grid/overview/#breakpoints
   */
  sm: Dn,
  /**
   * Specify constant column span, start,  or end values that will not change
   * based on breakpoint
   */
  span: c.oneOfType([c.number, xr, c.shape({
    span: c.oneOfType([c.number, xr]),
    start: c.number,
    end: c.number
  })]),
  /**
   * Specify column span for the `xlg` breakpoint (Default breakpoint up to
   * 1584px) This breakpoint supports 16 columns by default.
   *
   * @see https://carbondesignsystem.com/elements/2x-grid/overview/#breakpoints
   */
  xlg: Dn
};
const ov = ["sm", "md", "lg", "xlg", "max"];
function tC(a, o) {
  const r = [];
  for (let i = 0; i < a.length; i++) {
    const f = a[i];
    if (f == null)
      continue;
    const p = ov[i];
    if (f === !0) {
      r.push(`${o}--${p}:col-span-auto`);
      continue;
    }
    if (typeof f == "string") {
      r.push(`${o}--${p}:col-span-${f.replace("%", "")}`);
      continue;
    }
    if (typeof f == "number") {
      r.push(`${o}--${p}:col-span-${f}`);
      continue;
    }
    if (typeof f == "object") {
      const {
        span: m,
        offset: g,
        start: h,
        end: b
      } = f;
      if (typeof g == "number" && r.push(`${o}--${p}:col-start-${g > 0 ? g + 1 : "auto"}`), typeof h == "number" && r.push(`${o}--${p}:col-start-${h || "auto"}`), typeof b == "number" && r.push(`${o}--${p}:col-end-${b}`), typeof m == "number")
        r.push(`${o}--${p}:col-span-${m}`);
      else if (typeof m == "string") {
        r.push(`${o}--${p}:col-span-${m.slice(0, -1)}`);
        continue;
      }
    }
  }
  return r.join(" ");
}
function nC(a, o) {
  const r = [];
  for (let i = 0; i < a.length; i++) {
    const f = a[i];
    if (f == null)
      continue;
    const p = ov[i];
    if (f === !0) {
      r.push(`${o}--col-${p}`);
      continue;
    }
    if (typeof f == "number") {
      r.push(`${o}--col-${p}-${f}`);
      continue;
    }
    if (typeof f == "object") {
      const {
        span: m,
        offset: g
      } = f;
      typeof m == "number" && r.push(`${o}--col-${p}-${m}`), m === !0 && r.push(`${o}--col-${p}`), typeof g == "number" && r.push(`${o}--offset-${p}-${g}`);
    }
  }
  return r.join(" ");
}
function lC(a, o) {
  const r = [];
  if (typeof a == "number")
    r.push(`${o}--col-span-${a}`);
  else if (typeof a == "string")
    r.push(`${o}--col-span-${a.slice(0, -1)}`);
  else if (typeof a == "object") {
    const {
      span: i,
      start: f,
      end: p
    } = a;
    i != null && r.push(`${o}--col-span-${i}`), f != null && r.push(`${o}--col-start-${f}`), p != null && r.push(`${o}--col-end-${p}`);
  }
  return r.join("");
}
const aC = (a) => {
  const o = v.useRef(void 0);
  return v.useEffect(() => {
    o.current = a;
  }, [a]), o.current;
}, oC = ({
  open: a,
  _presenceId: o,
  _autoEnablePresence: r = !0,
  children: i
}) => {
  const [f, p] = By(a, o), m = v.useMemo(() => ({
    autoEnablePresence: r,
    ...p
  }), [r, p]);
  return f ? /* @__PURE__ */ d.createElement(Ac.Provider, {
    value: m
  }, i) : null;
}, Ac = /* @__PURE__ */ v.createContext(void 0), rC = (a) => {
  const o = v.useContext(Ac);
  return o != null && o.isPresenceExclusive(a) ? o : void 0;
}, iC = ["xs", "sm", "md", "lg"], cC = "`<Modal>` prop `preventCloseOnClickOutside` should not be `false` when `passiveModal` is `false`. Transactional, non-passive Modals should not be dissmissable by clicking outside. See: https://carbondesignsystem.com/components/modal/usage/#transactional-modal", $l = /* @__PURE__ */ d.forwardRef(function({
  open: o,
  ...r
}, i) {
  const f = dt(), p = zt("enable-presence"), m = !!v.useContext(Ac), g = p || m, h = rC(f);
  return g && !h ? /* @__PURE__ */ d.createElement(oC, {
    open: o ?? !1,
    _presenceId: f,
    _autoEnablePresence: m
  }, /* @__PURE__ */ d.createElement(S0, de({
    open: !0,
    ref: i
  }, r))) : /* @__PURE__ */ d.createElement(S0, de({
    ref: i,
    open: o
  }, r));
}), S0 = /* @__PURE__ */ d.forwardRef(function({
  "aria-label": o,
  children: r,
  className: i,
  decorator: f,
  modalHeading: p = "",
  modalLabel: m = "",
  modalAriaLabel: g,
  passiveModal: h = !1,
  secondaryButtonText: b,
  primaryButtonText: E,
  open: S,
  onRequestClose: w = st,
  onRequestSubmit: x = st,
  onSecondarySubmit: N,
  primaryButtonDisabled: C = !1,
  danger: A,
  alert: $,
  secondaryButtons: _,
  selectorPrimaryFocus: z = "[data-modal-primary-focus]",
  selectorsFloatingMenus: D,
  shouldSubmitOnEnter: H,
  size: L,
  hasScrollingContent: j = !1,
  closeButtonLabel: I = "Close",
  preventCloseOnClickOutside: F,
  isFullWidth: Z,
  launcherButtonRef: he,
  loadingStatus: ae = "inactive",
  loadingDescription: se,
  loadingIconDescription: ne,
  onLoadingSuccess: ge = st,
  slug: R,
  ...J
}, W) {
  var So, pa;
  const le = be(), pe = v.useRef(null), O = v.useRef(null), q = v.useRef(null), P = v.useRef(null), G = v.useRef(null), te = v.useRef(null), V = v.useRef(null), Q = `modal-${dt()}`, me = `${le}--modal-header__label--${Q}`, ie = `${le}--modal-header__heading--${Q}`, ve = `${le}--modal-body--${Q}`, Ne = `${le}--modal-close`, Te = oe({
    [`${le}--btn--loading`]: ae !== "inactive"
  }), Oe = ae !== "inactive", Ee = v.useContext(Ac), Ue = zn([W, Ee == null ? void 0 : Ee.presenceRef]), Se = zt("enable-presence") || (Ee == null ? void 0 : Ee.autoEnablePresence), fe = S || Se, Ye = aC(fe), ze = zt("enable-experimental-focus-wrap-without-sentinels"), We = zt("enable-focus-wrap-without-sentinels") || ze, _e = zt("enable-dialog-element");
  function ke(Be) {
    return !N && Be === O.current || Be.classList.contains(Ne);
  }
  function Xe(Be) {
    const {
      target: rt
    } = Be;
    Be.stopPropagation(), fe && rt instanceof HTMLElement && (at(Be, ma) && H && !ke(rt) && document.activeElement !== pe.current && x(Be), We && !_e && at(Be, Tr) && P.current && Pf({
      containerNode: P.current,
      currentActiveNode: rt,
      event: Be
    }));
  }
  function yn(Be) {
    const {
      target: rt
    } = Be;
    // Passive modals can close on clicks outside the modal when
    // preventCloseOnClickOutside is undefined or explicitly set to false.
    (h && !F || // Non-passive modals have to explicitly opt-in for close on outside
    // behavior by explicitly setting preventCloseOnClickOutside to false,
    // rather than just leaving it undefined.
    !h && F === !1) && rt instanceof Node && !Jf(rt, D, le) && P.current && !P.current.contains(rt) && w(Be);
  }
  function Jt({
    target: Be,
    relatedTarget: rt
  }) {
    if (!_e && fe && Be instanceof HTMLElement && rt instanceof HTMLElement) {
      const {
        current: En
      } = P, {
        current: Vl
      } = G, {
        current: wo
      } = te;
      V.current = setTimeout(() => {
        Wf({
          bodyNode: En,
          startTrapNode: Vl,
          endTrapNode: wo,
          currentActiveNode: rt,
          oldActiveNode: Be,
          selectorsFloatingMenus: D,
          prefix: le
        }), V.current && clearTimeout(V.current);
      });
    }
    const Ht = document.querySelector(`.${le}--modal-content`);
    !Ht || !Ht.classList.contains(`${le}--modal-scroll-content`) || !rt || !Ht.contains(rt) || rt.scrollIntoView({
      block: "center"
    });
  }
  const Wt = N || w, {
    height: Hn
  } = Kf({
    ref: q
  }), bo = oe(`${le}--modal`, {
    [`${le}--modal-tall`]: !h,
    "is-visible": Se || fe,
    [`${le}--modal--enable-presence`]: Ee == null ? void 0 : Ee.autoEnablePresence,
    [`${le}--modal--danger`]: A,
    [`${le}--modal--slug`]: R,
    [`${le}--modal--decorator`]: f
  }, i), yo = oe(`${le}--modal-container`, {
    [`${le}--modal-container--${L}`]: L,
    [`${le}--modal-container--full-width`]: Z
  }), $r = !!q.current && ((So = q == null ? void 0 : q.current) == null ? void 0 : So.scrollHeight) > ((pa = q == null ? void 0 : q.current) == null ? void 0 : pa.clientHeight), Br = oe(`${le}--modal-content`, {
    [`${le}--modal-scroll-content`]: j || $r,
    [`${le}--modal-scroll-content--no-fade`]: Hn <= 300
  }), ol = oe(`${le}--modal-footer`, {
    [`${le}--modal-footer--three-button`]: Array.isArray(_) && _.length === 2
  }), $t = (Be) => typeof Be == "string" ? Be : void 0, Nn = $t(m), jt = $t(p), vo = Nn || o || g || jt, Lr = j || $r ? {
    tabIndex: 0,
    role: "region",
    "aria-label": vo,
    "aria-labelledby": m ? me : ie
  } : {}, Un = {};
  $ && h && (Un.role = "alert"), $ && !h && (Un.role = "alertdialog", Un["aria-describedby"] = ve), v.useEffect(() => {
    if (!fe) return;
    const Be = (rt) => {
      at(rt, al) && (rt.preventDefault(), rt.stopPropagation(), w(rt));
    };
    return document.addEventListener("keydown", Be, !0), () => {
      document.removeEventListener("keydown", Be, !0);
    };
  }, [fe]), v.useEffect(() => () => {
    _e || cc(document.body, `${le}--body--with-modal-open`, !1);
  }, [le, _e]), v.useEffect(() => {
    _e || cc(document.body, `${le}--body--with-modal-open`, fe ?? !1);
  }, [fe, le, _e]), v.useEffect(() => {
    !_e && !Se && Ye && !fe && he && setTimeout(() => {
      var Be;
      "current" in he && ((Be = he.current) == null || Be.focus());
    });
  }, [fe, Ye, he, _e, Se]), v.useEffect(() => {
    const Be = he == null ? void 0 : he.current;
    return () => {
      Se && Be && setTimeout(() => {
        Be.focus();
      });
    };
  }, [Se, he]), v.useEffect(() => {
    if (!_e) {
      const Be = (Ht) => {
        const En = Ht || P.current, Vl = En && (En.querySelector(z) || A && En.querySelector(`.${le}--btn--secondary`));
        return Vl || pe && pe.current;
      };
      fe && ((Ht) => {
        const En = Be(Ht);
        En !== null && En.focus();
      })(P.current);
    }
  }, [fe, z, A, le, _e]);
  const rl = R ?? f, vn = mt(rl, It) ? /* @__PURE__ */ v.cloneElement(rl, {
    size: "sm"
  }) : rl, ql = /* @__PURE__ */ d.createElement("div", {
    className: `${le}--modal-close-button`
  }, /* @__PURE__ */ d.createElement(Ln, {
    className: Ne,
    label: I,
    onClick: w,
    "aria-label": I,
    align: "left",
    ref: pe
  }, /* @__PURE__ */ d.createElement(Ll, {
    size: 20,
    "aria-hidden": "true",
    tabIndex: "-1",
    className: `${Ne}__icon`
  }))), il = $ && !h, Oc = _e ? /* @__PURE__ */ d.createElement(xc, {
    open: fe,
    focusAfterCloseRef: he,
    modal: !0,
    ref: P,
    role: il ? "alertdialog" : "",
    "aria-describedby": il ? ve : "",
    className: yo,
    "aria-label": vo,
    "data-exiting": (Ee == null ? void 0 : Ee.isExiting) || void 0
  }, /* @__PURE__ */ d.createElement("div", {
    className: `${le}--modal-header`
  }, m && /* @__PURE__ */ d.createElement(Fe, {
    as: "h2",
    id: me,
    className: `${le}--modal-header__label`
  }, m), /* @__PURE__ */ d.createElement(Fe, {
    as: "h2",
    id: ie,
    className: `${le}--modal-header__heading`
  }, p), f ? /* @__PURE__ */ d.createElement("div", {
    className: `${le}--modal--inner__decorator`
  }, vn) : "", /* @__PURE__ */ d.createElement("div", {
    className: `${le}--modal-close-button`
  }, /* @__PURE__ */ d.createElement(Ln, {
    className: Ne,
    label: I,
    onClick: w,
    "aria-label": I,
    align: "left",
    ref: pe
  }, /* @__PURE__ */ d.createElement(Ll, {
    size: 20,
    "aria-hidden": "true",
    tabIndex: "-1",
    className: `${Ne}__icon`
  })))), /* @__PURE__ */ d.createElement(Bl, de({
    ref: q,
    id: ve,
    className: Br
  }, Lr), r), !h && /* @__PURE__ */ d.createElement(da, {
    className: ol,
    "aria-busy": Oe
  }, Array.isArray(_) && _.length <= 2 ? _.map(({
    buttonText: Be,
    onClick: rt
  }, Ht) => /* @__PURE__ */ d.createElement(He, {
    key: `${Be}-${Ht}`,
    kind: "secondary",
    onClick: rt
  }, Be)) : b && /* @__PURE__ */ d.createElement(He, {
    disabled: Oe,
    kind: "secondary",
    onClick: Wt,
    ref: O
  }, b), /* @__PURE__ */ d.createElement(He, {
    className: Te,
    kind: A ? "danger" : "primary",
    disabled: Oe || C,
    onClick: x,
    ref: pe
  }, ae === "inactive" ? E : /* @__PURE__ */ d.createElement(Sr, {
    status: ae,
    description: se,
    iconDescription: ne,
    className: `${le}--inline-loading--btn`,
    onSuccess: ge
  })))) : /* @__PURE__ */ d.createElement(d.Fragment, null, !_e && !We && /* @__PURE__ */ d.createElement("span", {
    ref: G,
    tabIndex: 0,
    role: "link",
    className: `${le}--visually-hidden`
  }, "Focus sentinel"), /* @__PURE__ */ d.createElement("div", de({
    ref: P,
    role: "dialog"
  }, Un, {
    className: yo,
    "aria-label": vo,
    "aria-modal": "true",
    tabIndex: -1
  }), /* @__PURE__ */ d.createElement("div", {
    className: `${le}--modal-header`
  }, h && ql, m && /* @__PURE__ */ d.createElement(Fe, {
    as: "h2",
    id: me,
    className: `${le}--modal-header__label`
  }, m), /* @__PURE__ */ d.createElement(Fe, {
    as: "h2",
    id: ie,
    className: `${le}--modal-header__heading`
  }, p), R ? vn : f ? /* @__PURE__ */ d.createElement("div", {
    className: `${le}--modal--inner__decorator`
  }, vn) : "", !h && ql), /* @__PURE__ */ d.createElement(Bl, de({
    ref: q,
    id: ve,
    className: Br
  }, Lr), r), !h && /* @__PURE__ */ d.createElement(da, {
    className: ol,
    "aria-busy": Oe
  }, Array.isArray(_) && _.length <= 2 ? _.map(({
    buttonText: Be,
    onClick: rt
  }, Ht) => /* @__PURE__ */ d.createElement(He, {
    key: `${Be}-${Ht}`,
    kind: "secondary",
    onClick: rt
  }, Be)) : b && /* @__PURE__ */ d.createElement(He, {
    disabled: Oe,
    kind: "secondary",
    onClick: Wt,
    ref: O
  }, b), /* @__PURE__ */ d.createElement(He, {
    className: Te,
    kind: A ? "danger" : "primary",
    disabled: Oe || C,
    onClick: x,
    ref: pe
  }, ae === "inactive" ? E : /* @__PURE__ */ d.createElement(Sr, {
    status: ae,
    description: se,
    iconDescription: ne,
    className: `${le}--inline-loading--btn`,
    onSuccess: ge
  })))), !_e && !We && /* @__PURE__ */ d.createElement("span", {
    ref: te,
    tabIndex: 0,
    role: "link",
    className: `${le}--visually-hidden`
  }, "Focus sentinel"));
  return /* @__PURE__ */ d.createElement(Bl, de({}, J, {
    level: 0,
    onKeyDown: Xe,
    onClick: kt([J == null ? void 0 : J.onClick, yn]),
    onBlur: Jt,
    className: bo,
    role: "presentation",
    ref: Ue,
    "data-exiting": (Ee == null ? void 0 : Ee.isExiting) || void 0
  }), Oc);
});
$l.propTypes = {
  /**
   * Specify whether the Modal is displaying an alert, error or warning
   * Should go hand in hand with the danger prop.
   */
  alert: c.bool,
  /**
   * Required props for the accessibility label of the header
   */
  "aria-label": gr("hasScrollingContent", c.string),
  /**
   * Provide the contents of your Modal
   */
  children: c.node,
  /**
   * Specify an optional className to be applied to the modal root node
   */
  className: c.string,
  /**
   * Specify label for the close button of the modal; defaults to close
   */
  closeButtonLabel: c.string,
  /**
   * Specify whether the Modal is for dangerous actions
   */
  danger: c.bool,
  /**
   * **Experimental**: Provide a decorator component to be rendered inside the `Modal` component
   */
  decorator: c.node,
  /**
   * Specify whether the modal contains scrolling content
   */
  hasScrollingContent: c.bool,
  /**
   * Specify the DOM element ID of the top-level node.
   */
  id: c.string,
  /**
   * Specify whether or not the Modal content should have any inner padding.
   */
  isFullWidth: c.bool,
  /**
   * Provide a ref to return focus to once the modal is closed.
   */
  launcherButtonRef: c.oneOfType([c.func, c.shape({
    current: c.oneOfType([
      // `PropTypes.instanceOf(HTMLButtonElement)` alone won't work because
      // `HTMLButtonElement` is not defined in the test environment even
      // though `testEnvironment` is set to `jsdom`.
      typeof HTMLButtonElement < "u" ? c.instanceOf(HTMLButtonElement) : c.any,
      c.oneOf([null])
    ]).isRequired
  })]),
  /**
   * Specify the description for the loading text
   */
  loadingDescription: c.string,
  /**
   * Specify the description for the loading text
   */
  loadingIconDescription: c.string,
  /**
   * loading status
   */
  loadingStatus: c.oneOf(["inactive", "active", "finished", "error"]),
  /**
   * Specify a label to be read by screen readers on the modal root node
   */
  modalAriaLabel: c.string,
  /**
   * Specify the content of the modal header title.
   */
  modalHeading: c.node,
  /**
   * Specify the content of the modal header label.
   */
  modalLabel: c.node,
  /**
   * Specify a handler for keypresses.
   */
  onKeyDown: c.func,
  /**
   * Provide an optional handler to be invoked when loading is
   * successful
   */
  onLoadingSuccess: c.func,
  /**
   * Specify a handler for closing modal.
   * The handler should care of closing modal, e.g. changing `open` prop.
   */
  onRequestClose: c.func,
  /**
   * Specify a handler for "submitting" modal.
   * The handler should care of closing modal, e.g. changing `open` prop, if necessary.
   */
  onRequestSubmit: c.func,
  /**
   * Specify a handler for the secondary button.
   * Useful if separate handler from `onRequestClose` is desirable
   */
  onSecondarySubmit: c.func,
  /**
   * Specify whether the Modal is currently open
   */
  open: c.bool,
  /**
   * Specify whether the modal should be button-less
   */
  passiveModal: c.bool,
  /**
   * Prevent closing on click outside of modal
   */
  preventCloseOnClickOutside: (a, o) => !a.passiveModal && a[o] === !1 ? new Error(cC) : null,
  /**
   * Specify whether the Button should be disabled, or not
   */
  primaryButtonDisabled: c.bool,
  /**
   * Specify the text for the primary button
   */
  primaryButtonText: c.node,
  /**
   * Specify the text for the secondary button
   */
  secondaryButtonText: c.node,
  /**
   * Specify an array of config objects for secondary buttons
   * (`Array<{
   *   buttonText: string,
   *   onClick: function,
   * }>`).
   */
  secondaryButtons: (a, o, r) => {
    if (a.secondaryButtons) {
      if (!Array.isArray(a.secondaryButtons) || a.secondaryButtons.length !== 2)
        return new Error(`${o} needs to be an array of two button config objects`);
      const i = {
        buttonText: c.node,
        onClick: c.func
      };
      a[o].forEach((f) => {
        c.checkPropTypes(i, f, o, r);
      });
    }
    return null;
  },
  /**
   * Specify a CSS selector that matches the DOM element that should
   * be focused when the Modal opens
   */
  selectorPrimaryFocus: c.string,
  /**
   * Specify CSS selectors that match DOM elements working as floating menus.
   * Focusing on those elements won't trigger "focus-wrap" behavior
   */
  selectorsFloatingMenus: c.arrayOf(c.string.isRequired),
  /**
   * Specify if Enter key should be used as "submit" action
   */
  shouldSubmitOnEnter: c.bool,
  /**
   * Specify the size variant.
   */
  size: c.oneOf(iC),
  slug: $e(c.node)
};
c.node, c.string, c.bool, c.func;
function hd({
  "aria-label": a = "close notification",
  ariaLabel: o,
  className: r,
  type: i = "button",
  renderIcon: f = Ll,
  name: p,
  notificationType: m = "toast",
  ...g
}) {
  const h = be(), b = oe(r, {
    [`${h}--${m}-notification__close-button`]: m
  }), E = oe({
    [`${h}--${m}-notification__close-icon`]: m
  });
  return /* @__PURE__ */ d.createElement("button", de({}, g, {
    type: i,
    "aria-label": o || a,
    title: o || a,
    className: b
  }), f && /* @__PURE__ */ d.createElement(f, {
    className: E,
    name: p
  }));
}
hd.propTypes = {
  /**
   * Specify a label to be read by screen readers on the container node
   */
  "aria-label": c.string,
  /**
   * Deprecated, please use `aria-label` instead.
   * Specify a label to be read by screen readers on the container note.
   */
  ariaLabel: $e(c.string),
  /**
   * Specify an optional className to be applied to the notification button
   */
  className: c.string,
  /**
   * Specify an optional icon for the Button through a string,
   * if something but regular "close" icon is desirable
   */
  name: c.string,
  /**
   * Specify the notification type
   */
  notificationType: c.oneOf(["toast", "inline", "actionable"]),
  /**
   * A component used to render an icon.
   */
  renderIcon: c.oneOfType([c.func, c.object]),
  /**
   * Optional prop to specify the type of the Button
   */
  type: c.string
};
const sC = {
  error: q0,
  success: U0,
  warning: Mf,
  "warning-alt": Df,
  info: LS,
  "info-square": zS
};
function gd({
  iconDescription: a,
  kind: o,
  notificationType: r
}) {
  const i = be(), f = sC[o];
  return f ? /* @__PURE__ */ d.createElement(f, {
    className: `${i}--${r}-notification__icon`,
    size: 20
  }, /* @__PURE__ */ d.createElement("title", null, a)) : null;
}
gd.propTypes = {
  iconDescription: c.string.isRequired,
  kind: c.oneOf(["error", "success", "warning", "warning-alt", "info", "info-square"]).isRequired,
  notificationType: c.oneOf(["inline", "toast"]).isRequired
};
function dc({
  ["aria-label"]: a,
  // @ts-expect-error: deprecated prop
  ariaLabel: o,
  role: r = "status",
  onClose: i,
  onCloseButtonClick: f = st,
  statusIconDescription: p,
  className: m,
  children: g,
  kind: h = "error",
  lowContrast: b,
  hideCloseButton: E = !1,
  timeout: S = 0,
  title: w,
  caption: x,
  subtitle: N,
  ...C
}) {
  const [A, $] = v.useState(!0), _ = be(), z = oe(m, {
    [`${_}--toast-notification`]: !0,
    [`${_}--toast-notification--low-contrast`]: b,
    [`${_}--toast-notification--${h}`]: h
  }), D = v.useRef(null);
  Gf(D);
  const H = (F) => {
    (!i || i(F) !== !1) && $(!1);
  }, L = v.useRef(null);
  function j(F) {
    f(F), H(F);
  }
  const I = v.useRef(i);
  return v.useEffect(() => {
    I.current = i;
  }), v.useEffect(() => {
    if (!S)
      return;
    const F = window.setTimeout((Z) => {
      $(!1), I.current && I.current(Z);
    }, S);
    return () => {
      window.clearTimeout(F);
    };
  }, [S]), A ? /* @__PURE__ */ d.createElement("div", de({
    ref: L
  }, C, {
    role: r,
    className: z
  }), /* @__PURE__ */ d.createElement(gd, {
    notificationType: "toast",
    kind: h,
    iconDescription: p || `${h} icon`
  }), /* @__PURE__ */ d.createElement("div", {
    ref: D,
    className: `${_}--toast-notification__details`
  }, w && /* @__PURE__ */ d.createElement(Fe, {
    as: "div",
    className: `${_}--toast-notification__title`
  }, w), N && /* @__PURE__ */ d.createElement(Fe, {
    as: "div",
    className: `${_}--toast-notification__subtitle`
  }, N), x && /* @__PURE__ */ d.createElement(Fe, {
    as: "div",
    className: `${_}--toast-notification__caption`
  }, x), g), !E && /* @__PURE__ */ d.createElement(hd, {
    notificationType: "toast",
    onClick: j,
    "aria-label": o || a
  })) : null;
}
dc.propTypes = {
  /**
   * Provide a description for "close" icon button that can be read by screen readers
   */
  "aria-label": c.string,
  /**
   * Deprecated, please use `aria-label` instead.
   * Provide a description for "close" icon button that can be read by screen readers
   */
  ariaLabel: $e(c.string),
  /**
   * Specify the caption
   */
  caption: c.string,
  /**
   * Specify the content
   */
  children: c.node,
  /**
   * Specify an optional className to be applied to the notification box
   */
  className: c.string,
  /**
   * Specify the close button should be disabled, or not
   */
  hideCloseButton: c.bool,
  /**
   * Specify what state the notification represents
   */
  kind: c.oneOf(["error", "info", "info-square", "success", "warning", "warning-alt"]),
  /**
   * Specify whether you are using the low contrast variant of the ToastNotification.
   */
  lowContrast: c.bool,
  /**
   * Provide a function that is called when menu is closed
   */
  onClose: c.func,
  /**
   * Provide a function that is called when the close button is clicked
   */
  onCloseButtonClick: c.func,
  /**
   * By default, this value is "status". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: c.oneOf(["alert", "log", "status"]),
  /**
   * Provide a description for "status" icon that can be read by screen readers
   */
  statusIconDescription: c.string,
  /**
   * Specify the subtitle
   */
  subtitle: c.string,
  /**
   * Specify an optional duration the notification should be closed in
   */
  timeout: c.number,
  /**
   * Specify the title
   */
  title: c.string
};
function bd({
  ["aria-label"]: a,
  children: o,
  title: r,
  subtitle: i,
  role: f = "status",
  onClose: p,
  onCloseButtonClick: m = st,
  statusIconDescription: g,
  className: h,
  kind: b = "error",
  lowContrast: E,
  hideCloseButton: S = !1,
  ...w
}) {
  const [x, N] = v.useState(!0), C = be(), A = oe(h, {
    [`${C}--inline-notification`]: !0,
    [`${C}--inline-notification--low-contrast`]: E,
    [`${C}--inline-notification--${b}`]: b,
    [`${C}--inline-notification--hide-close-button`]: S
  }), $ = v.useRef(null);
  Gf($);
  const _ = (H) => {
    (!p || p(H) !== !1) && N(!1);
  }, z = v.useRef(null);
  function D(H) {
    m(H), _(H);
  }
  return x ? /* @__PURE__ */ d.createElement("div", de({
    ref: z
  }, w, {
    role: f,
    className: A
  }), /* @__PURE__ */ d.createElement("div", {
    className: `${C}--inline-notification__details`
  }, /* @__PURE__ */ d.createElement(gd, {
    notificationType: "inline",
    kind: b,
    iconDescription: g || `${b} icon`
  }), /* @__PURE__ */ d.createElement("div", {
    ref: $,
    className: `${C}--inline-notification__text-wrapper`
  }, r && /* @__PURE__ */ d.createElement(Fe, {
    as: "div",
    className: `${C}--inline-notification__title`
  }, r), i && /* @__PURE__ */ d.createElement(Fe, {
    as: "div",
    className: `${C}--inline-notification__subtitle`
  }, i), o)), !S && /* @__PURE__ */ d.createElement(hd, {
    notificationType: "inline",
    onClick: D,
    "aria-label": a
  })) : null;
}
bd.propTypes = {
  /**
   * Provide a description for "close" icon button that can be read by screen readers
   */
  "aria-label": c.string,
  /**
   * Specify the content
   */
  children: c.node,
  /**
   * Specify an optional className to be applied to the notification box
   */
  className: c.string,
  /**
   * Specify the close button should be disabled, or not
   */
  hideCloseButton: c.bool,
  /**
   * Specify what state the notification represents
   */
  kind: c.oneOf(["error", "info", "info-square", "success", "warning", "warning-alt"]),
  /**
   * Specify whether you are using the low contrast variant of the InlineNotification.
   */
  lowContrast: c.bool,
  /**
   * Provide a function that is called when menu is closed
   */
  onClose: c.func,
  /**
   * Provide a function that is called when the close button is clicked
   */
  onCloseButtonClick: c.func,
  /**
   * By default, this value is "status". You can also provide an alternate
   * role if it makes sense from the accessibility-side.
   */
  role: c.oneOf(["alert", "log", "status"]),
  /**
   * Provide a description for "status" icon that can be read by screen readers
   */
  statusIconDescription: c.string,
  /**
   * Specify the subtitle
   */
  subtitle: c.string,
  /**
   * Specify the title
   */
  title: c.string
};
c.string, c.string, $e(c.string), c.string, c.node, c.string, c.bool, $e(c.bool), c.bool, c.bool, c.oneOf(["error", "info", "info-square", "success", "warning", "warning-alt"]), c.bool, c.func, c.func, c.func, c.string, c.string, c.node, c.string;
const uC = {
  error: "warning",
  // only redirect error -> warning
  success: "info"
  // only redirect success -> info
}, fC = (a) => uC[a];
c.string, c.node, c.string, Hl(c.oneOf(["error", "info", "info-square", "success", "warning", "warning-alt"]), ["warning", "info"], fC), c.bool, c.func, c.string, c.node, c.string, c.string;
var dC = 16;
function mC(a) {
  return "".concat(a / dC, "rem");
}
var pC = {
  lg: {
    width: mC(1056)
  }
};
const hC = (a, o = !1) => {
  const [r, i] = v.useState(o);
  return v.useEffect(() => {
    const f = (m) => {
      i(m.matches);
    }, p = window.matchMedia(a);
    return p.addEventListener("change", f), i(p.matches), () => {
      p.removeEventListener("change", f);
    };
  }, [a]), r;
}, gC = (a) => a ? (a == null ? void 0 : a.offsetWidth) < (a == null ? void 0 : a.scrollWidth) : !1;
var w0;
const Tf = {
  red: "Red",
  magenta: "Magenta",
  purple: "Purple",
  blue: "Blue",
  cyan: "Cyan",
  teal: "Teal",
  green: "Green",
  gray: "Gray",
  "cool-gray": "Cool-Gray",
  "warm-gray": "Warm-Gray",
  "high-contrast": "High-Contrast",
  outline: "Outline"
}, bC = {
  sm: "sm",
  md: "md",
  lg: "lg"
}, yC = /* @__PURE__ */ d.forwardRef(({
  children: a,
  className: o,
  decorator: r,
  id: i,
  type: f,
  filter: p,
  // remove filter in next major release - V12
  renderIcon: m,
  title: g = "Clear filter",
  // remove title in next major release - V12
  disabled: h,
  onClose: b,
  // remove onClose in next major release - V12
  size: E,
  as: S,
  slug: w,
  ...x
}, N) => {
  const C = be(), A = v.useRef(null);
  p && console.warn("The `filter` prop for Tag has been deprecated and will be removed in the next major version. Use DismissibleTag instead."), b && console.warn("The `onClose` prop for Tag has been deprecated and will be removed in the next major version. Use DismissibleTag instead.");
  const $ = zn([N, A]), _ = dt(), z = i ?? `tag-${_}`, [D, H] = v.useState(!1);
  Ct(() => {
    var J;
    const R = (J = A.current) == null ? void 0 : J.getElementsByClassName(`${C}--tag__label`)[0];
    H(gC(R));
  }, [C, A]);
  const j = [`${C}--tag--selectable`, `${C}--tag--filter`, `${C}--tag--operational`].some((R) => o == null ? void 0 : o.includes(R)), I = oe(`${C}--tag`, o, {
    [`${C}--tag--disabled`]: h,
    [`${C}--tag--filter`]: p,
    [`${C}--tag--${E}`]: E,
    // TODO: V12 - Remove this class
    [`${C}--layout--size-${E}`]: E,
    [`${C}--tag--${f}`]: f,
    [`${C}--tag--interactive`]: x.onClick && !j && D
  }), F = f !== void 0 && f in Object.keys(Tf) ? Tf[f] : "", Z = (R) => {
    b && (R.stopPropagation(), b(R));
  }, he = w ?? r, se = mt(he, It) && !j ? /* @__PURE__ */ v.cloneElement(he, {
    size: "sm",
    kind: "inline"
  }) : null;
  if (p) {
    const R = S ?? "div";
    return /* @__PURE__ */ d.createElement(R, de({
      className: I,
      id: z
    }, x), m && E !== "sm" ? /* @__PURE__ */ d.createElement("div", {
      className: `${C}--tag__custom-icon`
    }, /* @__PURE__ */ d.createElement(m, null)) : "", /* @__PURE__ */ d.createElement(Fe, {
      title: typeof a == "string" ? a : void 0,
      className: `${C}--tag__label`
    }, a ?? F), se, /* @__PURE__ */ d.createElement("button", {
      type: "button",
      className: `${C}--tag__close-icon`,
      onClick: Z,
      disabled: h,
      "aria-label": g,
      title: g
    }, w0 || (w0 = /* @__PURE__ */ d.createElement(Ll, null))));
  }
  const ne = S ?? (x.onClick || o != null && o.includes(`${C}--tag--operational`) ? "button" : "div"), ge = oe({
    [`${C}--tag__label`]: !j
  });
  return /* @__PURE__ */ d.createElement(ne, de({
    ref: $,
    disabled: h,
    className: I,
    id: z,
    type: ne === "button" ? "button" : void 0
  }, x), m && E !== "sm" ? /* @__PURE__ */ d.createElement("div", {
    className: `${C}--tag__custom-icon`
  }, /* @__PURE__ */ d.createElement(m, null)) : "", D && !j ? /* @__PURE__ */ d.createElement(fy, {
    openOnHover: !1,
    definition: a ?? F,
    className: `${C}--definition--tooltip--tag`
  }, /* @__PURE__ */ d.createElement(Fe, {
    title: a != null && typeof a == "string" ? a : F,
    className: ge
  }, a ?? F)) : /* @__PURE__ */ d.createElement(Fe, {
    title: a != null && typeof a == "string" ? a : F,
    className: ge
  }, a ?? F), w ? se : r ? /* @__PURE__ */ d.createElement("div", {
    className: `${C}--tag__decorator`
  }, se) : "");
}), mc = yC;
mc.propTypes = {
  /**
   * Provide an alternative tag or component to use instead of the default
   * wrapping element
   */
  as: c.elementType,
  /**
   * Provide content to be rendered inside of a `Tag`
   */
  children: c.node,
  /**
   * Provide a custom className that is applied to the containing <span>
   */
  className: c.string,
  /**
   * **Experimental:** Provide a `decorator` component to be rendered inside the `Tag` component
   */
  decorator: c.node,
  /**
   * Specify if the `Tag` is disabled
   */
  disabled: c.bool,
  /**
   * Determine if `Tag` is a filter/chip
   */
  filter: $e(c.bool),
  /**
   * Specify the id for the tag.
   */
  id: c.string,
  /**
   * Click handler for filter tag close button.
   */
  onClose: $e(c.func),
  /**
   * A component used to render an icon.
   */
  renderIcon: c.oneOfType([c.func, c.object]),
  /**
   * Specify the size of the Tag. Currently supports either `sm`,
   * `md` (default) or `lg` sizes.
   */
  size: c.oneOf(Object.keys(bC)),
  /**
   * **Experimental:** Provide a `Slug` component to be rendered inside the `Tag` component
   */
  slug: $e(c.node),
  /**
   * Text to show on clear filters
   */
  title: $e(c.string),
  /**
   * Specify the type of the `Tag`
   */
  type: c.oneOf(Object.keys(Tf))
};
const vC = (a) => ({
  "data-invalid": !0,
  "aria-invalid": !0,
  "aria-describedby": a
}), EC = (a) => ({
  "aria-describedby": a
}), SC = (a) => ({
  "aria-describedby": a
}), wC = ({
  sharedTextInputProps: a,
  invalid: o,
  invalidId: r,
  warn: i,
  warnId: f,
  hasHelper: p,
  helperId: m
}) => ({
  ...a,
  ...o ? vC(r) : {},
  ...i ? EC(f) : {},
  ...p ? SC(m) : {}
}), Wi = {
  "carbon.progress-step.complete": "carbon.progress-step.complete",
  "carbon.progress-step.incomplete": "carbon.progress-step.incomplete",
  "carbon.progress-step.current": "carbon.progress-step.current",
  "carbon.progress-step.invalid": "carbon.progress-step.invalid"
}, xC = {
  [Wi["carbon.progress-step.complete"]]: "Complete",
  [Wi["carbon.progress-step.incomplete"]]: "Incomplete",
  [Wi["carbon.progress-step.current"]]: "Current",
  [Wi["carbon.progress-step.invalid"]]: "Invalid"
}, TC = (a) => xC[a];
function rv({
  children: a,
  className: o,
  currentIndex: r = 0,
  onChange: i,
  spaceEqually: f,
  vertical: p,
  ...m
}) {
  const g = be(), [h, b] = v.useState(r), [E, S] = v.useState(r), w = oe({
    [`${g}--progress`]: !0,
    [`${g}--progress--vertical`]: p,
    [`${g}--progress--space-equal`]: f && !p,
    [o ?? ""]: o
  });
  return r !== E && (b(r), S(r)), /* @__PURE__ */ d.createElement("ul", de({
    className: w
  }, m), d.Children.map(a, (x, N) => {
    if (!/* @__PURE__ */ d.isValidElement(x))
      return null;
    const C = i ? () => i(N) : void 0;
    return N === h ? /* @__PURE__ */ d.cloneElement(x, {
      complete: x.props.complete,
      current: !x.props.complete,
      index: N,
      onClick: C
    }) : N < h ? /* @__PURE__ */ d.cloneElement(x, {
      complete: !0,
      index: N,
      onClick: C
    }) : N > h ? /* @__PURE__ */ d.cloneElement(x, {
      complete: x.props.complete || !1,
      index: N,
      onClick: C
    }) : null;
  }));
}
rv.propTypes = {
  /**
   * Provide `<ProgressStep>` components to be rendered in the
   * `<ProgressIndicator>`
   */
  children: c.node,
  /**
   * Provide an optional className to be applied to the containing node
   */
  className: c.string,
  /**
   * Optionally specify the current step array index
   */
  currentIndex: c.number,
  /**
   * Optional callback called if a ProgressStep is clicked on. Returns the index of the step.
   */
  onChange: c.func,
  /**
   * Specify whether the progress steps should be split equally in size in the div
   */
  spaceEqually: c.bool,
  /**
   * Determines whether or not the ProgressIndicator should be rendered vertically.
   */
  vertical: c.bool
};
function Cf({
  label: a,
  description: o,
  className: r,
  current: i,
  complete: f,
  invalid: p,
  secondaryLabel: m,
  disabled: g,
  onClick: h,
  translateWithId: b = TC,
  ...E
}) {
  const S = be(), w = oe({
    [`${S}--progress-step`]: !0,
    [`${S}--progress-step--current`]: i,
    [`${S}--progress-step--complete`]: f,
    [`${S}--progress-step--incomplete`]: !f && !i,
    [`${S}--progress-step--disabled`]: g,
    [r ?? ""]: r
  }), x = (A) => {
    ua(A, [ma, mo]) && h && h(A);
  }, N = ({
    complete: A,
    current: $,
    description: _,
    invalid: z,
    prefix: D
  }) => z ? /* @__PURE__ */ d.createElement(kS, {
    className: `${D}--progress__warning`
  }, /* @__PURE__ */ d.createElement("title", null, _)) : $ ? /* @__PURE__ */ d.createElement(BS, null, /* @__PURE__ */ d.createElement("title", null, _)) : A ? /* @__PURE__ */ d.createElement(NS, null, /* @__PURE__ */ d.createElement("title", null, _)) : /* @__PURE__ */ d.createElement(AS, null, /* @__PURE__ */ d.createElement("title", null, _));
  let C = b("carbon.progress-step.incomplete");
  return i && (C = b("carbon.progress-step.current")), f && (C = b("carbon.progress-step.complete")), p && (C = b("carbon.progress-step.invalid")), /* @__PURE__ */ d.createElement("li", {
    className: w
  }, /* @__PURE__ */ d.createElement("button", de({
    type: "button",
    className: oe(`${S}--progress-step-button`, {
      [`${S}--progress-step-button--unclickable`]: !h || i
    }),
    disabled: g,
    "aria-disabled": g,
    tabIndex: g ? -1 : 0,
    onClick: i ? void 0 : h,
    onKeyDown: x,
    title: a
  }, E), /* @__PURE__ */ d.createElement(N, {
    complete: f,
    current: i,
    description: o,
    invalid: p,
    prefix: S
  }), /* @__PURE__ */ d.createElement("div", {
    className: `${S}--progress-text`
  }, /* @__PURE__ */ d.createElement(Fe, {
    as: "span",
    className: `${S}--progress-label`
  }, a), m != null ? /* @__PURE__ */ d.createElement(Fe, {
    as: "span",
    className: `${S}--progress-optional`
  }, m) : null), /* @__PURE__ */ d.createElement("span", {
    className: `${S}--assistive-text`
  }, C), /* @__PURE__ */ d.createElement("span", {
    className: `${S}--progress-line`
  })));
}
Cf.propTypes = {
  /**
   * Provide an optional className to be applied to the containing `<li>` node
   */
  className: c.string,
  /**
   * Specify whether the step has been completed
   */
  complete: c.bool,
  /**
   * Specify whether the step is the current step
   */
  current: c.bool,
  /**
   * Provide a description for the `<ProgressStep>`
   */
  description: c.string,
  /**
   * Specify whether the step is disabled
   */
  disabled: c.bool,
  /**
   * Index of the current step within the ProgressIndicator
   */
  index: c.number,
  /**
   * Specify whether the step is invalid
   */
  invalid: c.bool,
  /**
   * Provide the label for the `<ProgressStep>`
   */
  label: c.node.isRequired,
  /**
   * A callback called if the step is clicked or the enter key is pressed
   */
  onClick: c.func,
  /**
   * Provide the props that describe a progress step tooltip
   */
  overflowTooltipProps: c.object,
  /**
   * Provide an optional secondary label
   */
  secondaryLabel: c.string,
  /**
   * The ID of the tooltip content.
   */
  tooltipId: c.string,
  /**
   * Translates component strings using your i18n tool.
   */
  translateWithId: c.func
};
const CC = (a, o) => (i) => /* @__PURE__ */ d.createElement(Fe, de({
  as: a
}, i)), NC = CC("legend"), yd = /* @__PURE__ */ d.forwardRef((a, o) => {
  const {
    children: r,
    className: i,
    decorator: f,
    defaultSelected: p,
    disabled: m,
    helperText: g,
    invalid: h = !1,
    invalidText: b,
    labelPosition: E = "right",
    legendText: S,
    name: w,
    onChange: x = () => {
    },
    orientation: N = "horizontal",
    readOnly: C,
    valueSelected: A,
    warn: $ = !1,
    warnText: _,
    slug: z,
    required: D,
    ...H
  } = a, L = be(), [j, I] = v.useState(A ?? p), F = v.useRef(A), Z = dt();
  v.useEffect(() => {
    A !== F.current && (I(A), F.current = A);
  }, [A]);
  function he() {
    return d.Children.map(r, (V) => {
      if (!V)
        return;
      const Q = {
        name: w,
        key: V.props.value,
        value: V.props.value,
        onChange: ae,
        checked: V.props.value === j,
        required: D
      };
      return !j && V.props.checked && (Q.checked = !0), /* @__PURE__ */ d.cloneElement(V, Q);
    });
  }
  function ae(te, V, Q) {
    C || te !== j && (I(te), x(te, w, Q));
  }
  const se = !C && !m && !h && $, ne = !h && !m && !$, ge = oe(`${L}--form-item`, i), R = oe(`${L}--radio-button-group`, {
    [`${L}--radio-button-group--${N}`]: N === "vertical",
    [`${L}--radio-button-group--label-${E}`]: E,
    [`${L}--radio-button-group--readonly`]: C,
    [`${L}--radio-button-group--invalid`]: !C && !m && h,
    [`${L}--radio-button-group--warning`]: se,
    [`${L}--radio-button-group--slug`]: z,
    [`${L}--radio-button-group--decorator`]: f
  }), J = oe(`${L}--form__helper-text`, {
    [`${L}--form__helper-text--disabled`]: m
  }), W = typeof g < "u" && g !== null, le = W ? `radio-button-group-helper-text-${Z}` : void 0, pe = W && /* @__PURE__ */ d.createElement("div", {
    id: le,
    className: J
  }, g), O = v.useRef(null), q = z ?? f, G = mt(q, It) ? /* @__PURE__ */ v.cloneElement(q, {
    size: "mini",
    kind: "default"
  }) : q;
  return /* @__PURE__ */ d.createElement("div", {
    className: ge,
    ref: co(O, o)
  }, /* @__PURE__ */ d.createElement("fieldset", de({
    className: R,
    disabled: m,
    "data-invalid": h ? !0 : void 0,
    "aria-describedby": ne && g ? le : void 0
  }, H), S && /* @__PURE__ */ d.createElement(NC, {
    className: `${L}--label`
  }, S, z ? G : f ? /* @__PURE__ */ d.createElement("div", {
    className: `${L}--radio-button-group-inner--decorator`
  }, G) : ""), he()), /* @__PURE__ */ d.createElement("div", {
    className: `${L}--radio-button__validation-msg`
  }, !C && !m && h && /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(Mf, {
    className: `${L}--radio-button__invalid-icon`
  }), /* @__PURE__ */ d.createElement("div", {
    className: `${L}--form-requirement`
  }, b)), se && /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(Df, {
    className: `${L}--radio-button__invalid-icon ${L}--radio-button__invalid-icon--warning`
  }), /* @__PURE__ */ d.createElement("div", {
    className: `${L}--form-requirement`
  }, _))), ne && pe);
});
yd.propTypes = {
  /**
   * Provide a collection of `<RadioButton>` components to render in the group
   */
  children: c.node,
  /**
   * Provide an optional className to be applied to the container node
   */
  className: c.string,
  /**
   * **Experimental**: Provide a decorator component to be rendered inside the `RadioButtonGroup` component
   */
  decorator: c.node,
  /**
   * Specify the `<RadioButton>` to be selected by default
   */
  defaultSelected: c.oneOfType([c.string, c.number]),
  /**
   * Specify whether the group is disabled
   */
  disabled: c.bool,
  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: c.node,
  /**
   * Specify whether the control is currently invalid
   */
  invalid: c.bool,
  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: c.node,
  /**
   * Provide where label text should be placed
   */
  labelPosition: c.oneOf(["left", "right"]),
  /**
   * Provide a legend to the RadioButtonGroup input that you are
   * exposing to the user
   */
  legendText: c.node,
  /**
   * Specify the name of the underlying `<input>` nodes
   */
  name: c.string.isRequired,
  /**
   * Provide an optional `onChange` hook that is called whenever the value of
   * the group changes
   */
  onChange: c.func,
  /**
   * Provide where radio buttons should be placed
   */
  orientation: c.oneOf(["horizontal", "vertical"]),
  /**
   * Whether the RadioButtonGroup should be read-only
   */
  readOnly: c.bool,
  /**
   * `true` to specify if radio selection in group is required.
   */
  required: c.bool,
  /**
   * **Experimental**: Provide a `Slug` component to be rendered inside the `RadioButtonGroup` component
   */
  slug: $e(c.node),
  /**
   * Specify the value that is currently selected in the group
   */
  valueSelected: c.oneOfType([c.string, c.number]),
  /**
   * Specify whether the control is currently in warning state
   */
  warn: c.bool,
  /**
   * Provide the text that is displayed when the control is in warning state
   */
  warnText: c.node
};
yd.displayName = "RadioButtonGroup";
const x0 = (a, {
  onPress: o,
  onPressIn: r,
  onPressOut: i,
  onLongPress: f,
  delayLongPressMs: p = 500
} = {}) => {
  const m = v.useRef(o), g = v.useRef(r), h = v.useRef(i), b = v.useRef(f), [E, S] = v.useState(!1), [w, x] = v.useState(!1), N = v.useRef({
    longPress: !1
  });
  v.useEffect(() => {
    m.current = o;
  }, [o]), v.useEffect(() => {
    g.current = r;
  }, [r]), v.useEffect(() => {
    h.current = i;
  }, [i]), v.useEffect(() => {
    b.current = f;
  }, [f]), v.useEffect(() => {
    const C = a.current;
    if (!C) return;
    const A = (L) => {
      var j;
      S(!0), (j = g.current) == null || j.call(g), L.preventDefault();
    }, $ = () => {
      var L;
      S(!1), x(!1), (L = h.current) == null || L.call(h, N.current);
    }, _ = () => {
      var L;
      S(!1), x(!1), (L = h.current) == null || L.call(h, N.current), N.current.longPress = !1;
    }, z = () => {
      var L;
      S(!1), x(!1), (L = h.current) == null || L.call(h, N.current), N.current.longPress = !1;
    }, D = () => {
      var L;
      x(!1), S(!1), (L = m.current) == null || L.call(m, N.current), N.current.longPress = !1;
    }, H = (L) => {
      L.preventDefault();
    };
    return C.addEventListener("pointerdown", A), C.addEventListener("pointerup", $), C.addEventListener("pointercancel", _), C.addEventListener("pointerleave", z), C.addEventListener("click", D), C.addEventListener("contextmenu", H), () => {
      C.removeEventListener("pointerdown", A), C.removeEventListener("pointerup", $), C.removeEventListener("pointercancel", _), C.removeEventListener("pointerleave", z), C.removeEventListener("click", D), C.removeEventListener("contextmenu", H);
    };
  }, [a]), v.useEffect(() => {
    if (E) {
      const C = setTimeout(() => {
        S(!1), x(!0);
      }, p);
      return () => {
        clearTimeout(C);
      };
    }
  }, [E, p]), v.useEffect(() => {
    var C;
    if (w)
      return N.current.longPress = !0, (C = b.current) == null ? void 0 : C.call(b);
  }, [w]);
};
var T0, C0, N0;
const Rc = /* @__PURE__ */ d.createContext({
  baseId: "",
  activeIndex: 0,
  defaultSelectedIndex: 0,
  dismissable: !1,
  onTabCloseRequest() {
  },
  setActiveIndex() {
  },
  selectedIndex: 0,
  setSelectedIndex() {
  }
}), iv = /* @__PURE__ */ d.createContext({
  index: 0,
  hasSecondaryLabel: !1
}), _C = `(min-width: ${pC.lg.width})`, cv = /* @__PURE__ */ d.createContext(0);
function sv({
  children: a,
  defaultSelectedIndex: o = 0,
  onChange: r,
  selectedIndex: i,
  dismissable: f,
  onTabCloseRequest: p
}) {
  const m = dt("ccs");
  f && !p && console.error("dismissable property specified without also providing an onTabCloseRequest property.");
  const [g, h] = v.useState(o), [b, E] = cT({
    value: i,
    defaultValue: o,
    onChange: (w) => r == null ? void 0 : r({
      selectedIndex: w
    })
  }), S = {
    baseId: m,
    activeIndex: g,
    defaultSelectedIndex: o,
    dismissable: f,
    onTabCloseRequest: p,
    setActiveIndex: h,
    selectedIndex: b,
    setSelectedIndex: E
  };
  return /* @__PURE__ */ d.createElement(Rc.Provider, {
    value: S
  }, a);
}
sv.propTypes = {
  /**
   * Provide child elements to be rendered inside the `Tabs`.
   * These elements should render either `TabsList` or `TabsPanels`
   */
  children: c.node,
  /**
   * Specify which content tab should be initially selected when the component
   * is first rendered
   */
  defaultSelectedIndex: c.number,
  /**
   * Whether the render Tab children should be dismissable.
   */
  dismissable: c.bool,
  /**
   * Provide an optional function which is called whenever the state of the
   * `Tabs` changes
   */
  onChange: c.func,
  /**
   * If specifying the `onTabCloseRequest` prop, provide a callback function
   * responsible for removing the tab when close button is pressed on one of the Tab elements
   */
  onTabCloseRequest: (a) => {
    if (a.dismissable && !a.onTabCloseRequest)
      return new Error("dismissable property specified without also providing an onTabCloseRequest property.");
  },
  /**
   * Control which content panel is currently selected. This puts the component
   * in a controlled mode and should be used along with `onChange`
   */
  selectedIndex: c.number
};
c.node, c.number, c.string, c.func, c.number;
function AC(a, o, r) {
  switch (!0) {
    case at(a, Bf):
      return (r + 1) % o;
    case at(a, hc):
      return (o + r - 1) % o;
    case at(a, I0):
      return 0;
    case at(a, k0):
      return o - 1;
    default:
      return r;
  }
}
function uv({
  activation: a = "automatic",
  "aria-label": o,
  children: r,
  className: i,
  contained: f = !1,
  fullWidth: p = !1,
  iconSize: m,
  leftOverflowButtonProps: g,
  light: h,
  rightOverflowButtonProps: b,
  scrollDebounceWait: E = 200,
  scrollIntoView: S,
  ...w
}) {
  const {
    activeIndex: x,
    selectedIndex: N,
    setSelectedIndex: C,
    setActiveIndex: A,
    dismissable: $
  } = d.useContext(Rc), _ = be(), z = v.useRef(null), D = v.useRef(null), H = v.useRef(null), [L, j] = v.useState(!1), [I, F] = v.useState(0), Z = f && v.Children.toArray(r).some((te) => mt(te, lo) && typeof te.props.secondaryLabel < "u"), he = hC(_C), ae = p && f && he && d.Children.toArray(r).length < 9, se = oe(`${_}--tabs`, {
    [`${_}--tabs--contained`]: f,
    [`${_}--tabs--light`]: h,
    [`${_}--tabs__icon--default`]: m === "default",
    [`${_}--tabs__icon--lg`]: m === "lg",
    // TODO: V12 - Remove this class
    [`${_}--layout--size-lg`]: m === "lg",
    [`${_}--tabs--tall`]: Z,
    [`${_}--tabs--full-width`]: ae,
    [`${_}--tabs--dismissable`]: $
  }, i), ne = 44, [ge, R] = v.useState(z.current ? I + ne + z.current.clientWidth < z.current.scrollWidth : !1), J = z.current ? L && I > 0 : !1, W = oe(`${_}--tab--overflow-nav-button`, `${_}--tab--overflow-nav-button--previous`, {
    [`${_}--tab--overflow-nav-button--hidden`]: !J
  }), le = oe(`${_}--tab--overflow-nav-button`, `${_}--tab--overflow-nav-button--next`, {
    [`${_}--tab--overflow-nav-button--hidden`]: !ge
  }), pe = v.useRef([]), O = v.useCallback(() => {
    Er(() => {
      z.current && F(z.current.scrollLeft);
    }, E)();
  }, [E]);
  function q(te) {
    var V;
    if (ua(te, [Bf, hc, I0, k0])) {
      te.preventDefault();
      const me = pe.current.filter((Ne) => Ne !== null).filter((Ne) => !Ne.disabled), ie = me.indexOf(pe.current[a === "automatic" ? N : x]), ve = pe.current.indexOf(me[AC(te, me.length, ie)]);
      a === "automatic" ? C(ve) : a === "manual" && A(ve), (V = pe.current[ve]) == null || V.focus();
    }
  }
  function P({
    relatedTarget: te
  }) {
    var V;
    (V = z.current) != null && V.contains(te) || a === "manual" && A(N);
  }
  function G(te) {
    if (!(!L || !z.current) && te) {
      const {
        width: V
      } = te.getBoundingClientRect(), Q = te.offsetLeft, me = te.offsetLeft + V, ie = z.current.scrollLeft + ne, ve = z.current.scrollLeft + z.current.clientWidth - ne;
      Q < ie && F(Q - ne), me > ve && F(me + ne - z.current.clientWidth);
    }
  }
  return v.useEffect(() => {
    const te = pe.current[N];
    S && te && te.scrollIntoView({
      block: "nearest",
      inline: "nearest"
    });
  }, []), v.useEffect(() => {
    R(z.current ? I + ne + z.current.clientWidth + 1 < z.current.scrollWidth : !1), $ && z.current && j(z.current.scrollWidth > z.current.clientWidth + 1);
  }, [r, $, I]), v.useEffect(() => {
    var te;
    if ((te = pe.current[N]) != null && te.disabled) {
      const V = pe.current.filter((Q) => !Q.disabled);
      if (V.length > 0) {
        const Q = V[0];
        C(pe.current.indexOf(Q));
      }
    }
  }, []), Ct(() => {
    z.current && j(z.current.scrollWidth > z.current.clientWidth + 1);
    function te() {
      z.current && j(z.current.scrollWidth > z.current.clientWidth + 1);
    }
    const V = Er(te, 200);
    return window.addEventListener("resize", V), () => {
      V.cancel(), window.removeEventListener("resize", V);
    };
  }, []), Ct(() => {
    I !== null && z.current && (z.current.scrollLeft = I);
  }, [I]), Ct(() => {
    const te = a === "manual" ? pe.current[x] : pe.current[N];
    G(te);
  }, [a, x]), Ct(() => {
    const te = pe.current[N];
    G(te);
  }, [N, L, r]), x0(D, {
    onPress({
      longPress: te
    }) {
      !te && z.current && F(Math.max(I - z.current.scrollWidth / pe.current.length * 1.5, 0));
    },
    onLongPress() {
      return _0(z, "backward", F);
    }
  }), x0(H, {
    onPress({
      longPress: te
    }) {
      !te && z.current && F(Math.min(I + z.current.scrollWidth / pe.current.length * 1.5, z.current.scrollWidth - z.current.clientWidth));
    },
    onLongPress() {
      return _0(z, "forward", F);
    }
  }), /* @__PURE__ */ d.createElement("div", {
    className: se
  }, /* @__PURE__ */ d.createElement("button", de({
    "aria-hidden": "true",
    tabIndex: -1,
    "aria-label": "Scroll left",
    ref: D,
    className: W,
    type: "button"
  }, g), T0 || (T0 = /* @__PURE__ */ d.createElement(_S, null))), /* @__PURE__ */ d.createElement("div", de({}, w, {
    "aria-label": o,
    ref: z,
    role: "tablist",
    className: `${_}--tab--list`,
    onScroll: O,
    onKeyDown: q,
    onBlur: P
  }), v.Children.map(r, (te, V) => /* @__PURE__ */ v.isValidElement(te) ? /* @__PURE__ */ d.createElement(iv.Provider, {
    value: {
      index: V,
      hasSecondaryLabel: Z,
      contained: f
    }
  }, /* @__PURE__ */ v.cloneElement(te, {
    ref: (Q) => {
      Q && (pe.current[V] = Q);
    }
  })) : null)), /* @__PURE__ */ d.createElement("button", de({
    "aria-hidden": "true",
    tabIndex: -1,
    "aria-label": "Scroll right",
    ref: H,
    className: le,
    type: "button"
  }, b), C0 || (C0 = /* @__PURE__ */ d.createElement(Af, null))));
}
uv.propTypes = {
  /**
   * Specify whether the content tab should be activated automatically or
   * manually
   */
  activation: c.oneOf(["automatic", "manual"]),
  /**
   * Provide an accessible label to be read when a user interacts with this
   * component
   */
  "aria-label": c.string,
  /**
   * Provide child elements to be rendered inside `ContentTabs`.
   * These elements should render a `ContentTab`
   */
  children: c.node,
  /**
   * Specify an optional className to be added to the container node
   */
  className: c.string,
  /**
   * Specify whether component is contained type
   */
  contained: c.bool,
  /**
   * Used for tabs within a grid, this makes it so tabs span the full container width and have the same width. Only available on contained tabs with <9 children
   */
  fullWidth: c.bool,
  /**
   * If using `IconTab`, specify the size of the icon being used.
   */
  iconSize: c.oneOf(["default", "lg"]),
  /**
   * Provide the props that describe the left overflow button
   */
  leftOverflowButtonProps: c.object,
  /**
   * Specify whether to use the light component variant
   */
  light: $e(c.bool),
  /**
   * Provide the props that describe the right overflow button
   */
  rightOverflowButtonProps: c.object,
  /**
   * Optionally provide a delay (in milliseconds) passed to the lodash
   * debounce of the onScroll handler. This will impact the responsiveness
   * of scroll arrow buttons rendering when scrolling to the first or last tab.
   */
  scrollDebounceWait: c.number,
  /**
   * Choose whether to automatically scroll
   * to newly selected tabs on component rerender
   */
  scrollIntoView: c.bool
};
c.oneOf(["automatic", "manual"]), c.string, c.node, c.string;
function _0(a, o, r) {
  const i = a.current;
  if (!i)
    return () => {
    };
  const f = i == null ? void 0 : i.style["scroll-behavior"];
  i.style["scroll-behavior"] = "auto";
  const p = o === "forward" ? 5 : -5;
  let m = null;
  function g() {
    i && (i.scrollLeft = i.scrollLeft + p, m = requestAnimationFrame(g));
  }
  return m = requestAnimationFrame(g), () => {
    i.style["scroll-behavior"] = f, r(i.scrollLeft), m && cancelAnimationFrame(m);
  };
}
const lo = /* @__PURE__ */ v.forwardRef(({
  as: a = "button",
  children: o,
  className: r,
  disabled: i,
  onClick: f,
  onKeyDown: p,
  secondaryLabel: m,
  renderIcon: g,
  ...h
}, b) => {
  const E = be(), {
    selectedIndex: S,
    setSelectedIndex: w,
    baseId: x,
    dismissable: N,
    onTabCloseRequest: C
  } = d.useContext(Rc), {
    index: A,
    hasSecondaryLabel: $,
    contained: _
  } = d.useContext(iv), {
    badgeIndicator: z
  } = d.useContext(fv) || {}, D = v.useRef(null), H = v.useRef(null), L = zn([b, H]), [j, I] = v.useState(!1), F = `${x}-tab-${A}`, Z = `${x}-tabpanel-${A}`, [he, ae] = v.useState(!1), se = (q) => (ae(q.offsetHeight < q.scrollHeight), q.offsetHeight < q.scrollHeight), ne = oe(`${E}--tabs__nav-item`, `${E}--tabs__nav-link`, {
    [`${E}--tabs__nav-item--selected`]: S === A,
    [`${E}--tabs__nav-item--disabled`]: i,
    [`${E}--tabs__nav-item--hover-off`]: j
  }, r), ge = a, R = (q) => {
    _ && H.current && (q.stopPropagation(), I(!0), H.current.classList.add(`${E}--tabs__nav-item--hover-off`));
  }, J = () => {
    _ && H.current && (H.current.classList.remove(`${E}--tabs__nav-item--hover-off`), I(!1));
  };
  tc(D, "mouseover", R), tc(D, "mouseleave", J), Ct(() => {
    function q() {
      const P = document.getElementById(`${F}`) || H.current;
      if (P != null && P.closest(`.${E}--tabs--vertical`)) {
        const G = P == null ? void 0 : P.getElementsByClassName(`${E}--tabs__nav-item-label`)[0];
        se(G);
      }
    }
    return q(), window.addEventListener("resize", q), () => {
      window.removeEventListener("resize", q);
    };
  }, [E, F]);
  const W = (q) => {
    if (q.stopPropagation(), C == null || C(A), H.current && H.current.parentElement) {
      const P = Array.from(H.current.parentElement.childNodes).filter((G) => G instanceof HTMLElement ? G.classList.contains(`${E}--tabs__nav-link`) && !G.classList.contains(`${E}--tabs__nav-item--disabled`) : !1).length;
      if (H.current && A + 1 !== P)
        H.current.focus();
      else {
        const G = (P - 2) * 2, te = H.current.parentElement.childNodes[G];
        te instanceof HTMLElement && te.focus();
      }
    }
  }, le = (q) => {
    N && at(q, GS) && W(q), p == null || p(q);
  }, pe = /* @__PURE__ */ d.createElement("div", {
    className: oe({
      [`${E}--tabs__nav-item--close`]: N,
      [`${E}--tabs__nav-item--close--hidden`]: !N
    })
  }, /* @__PURE__ */ d.createElement("button", {
    type: "button",
    tabIndex: -1,
    "aria-disabled": i,
    "aria-hidden": S === A && N ? "false" : "true",
    disabled: i,
    className: oe({
      [`${E}--tabs__nav-item--close-icon`]: N,
      [`${E}--visually-hidden`]: !N,
      [`${E}--tabs__nav-item--close-icon--selected`]: S === A,
      [`${E}--tabs__nav-item--close-icon--disabled`]: i
    }),
    onClick: W,
    title: `Remove ${typeof o == "string" ? o : ""} tab`,
    ref: D
  }, /* @__PURE__ */ d.createElement(Ll, {
    "aria-hidden": S === A && N ? "false" : "true",
    "aria-label": `Press delete to remove ${typeof o == "string" ? o : ""} tab`
  }))), O = g ?? N;
  return he ? /* @__PURE__ */ d.createElement(go, {
    label: o,
    align: "top",
    leaveDelayMs: 0,
    autoAlign: !0,
    onMouseEnter: () => !1,
    closeOnActivation: !0
  }, /* @__PURE__ */ d.createElement(ge, de({}, h, {
    "aria-controls": Z,
    "aria-disabled": i,
    "aria-selected": S === A,
    ref: L,
    id: F,
    role: "tab",
    className: ne,
    disabled: i,
    title: o,
    onClick: (q) => {
      i || (w(A), f == null || f(q));
    },
    onKeyDown: le,
    tabIndex: S === A ? "0" : "-1",
    type: "button"
  }), /* @__PURE__ */ d.createElement("div", {
    className: `${E}--tabs__nav-item-label-wrapper`
  }, /* @__PURE__ */ d.createElement(Fe, {
    className: `${E}--tabs__nav-item-label`
  }, o)), $ && m && /* @__PURE__ */ d.createElement(Fe, {
    as: "div",
    className: `${E}--tabs__nav-item-secondary-label`,
    title: m
  }, m))) : /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(ge, de({}, h, {
    "aria-controls": Z,
    "aria-disabled": i,
    "aria-selected": S === A,
    ref: L,
    id: F,
    role: "tab",
    className: ne,
    disabled: i,
    onClick: (q) => {
      i || (w(A), f == null || f(q));
    },
    onKeyDown: le,
    tabIndex: S === A ? "0" : "-1",
    type: "button"
  }), /* @__PURE__ */ d.createElement("div", {
    className: `${E}--tabs__nav-item-label-wrapper`
  }, N && g && /* @__PURE__ */ d.createElement("div", {
    className: `${E}--tabs__nav-item--icon-left`
  }, /* @__PURE__ */ d.createElement(g, {
    size: 16
  })), /* @__PURE__ */ d.createElement(Fe, {
    className: `${E}--tabs__nav-item-label`
  }, o), !N && g && /* @__PURE__ */ d.createElement("div", {
    className: oe(`${E}--tabs__nav-item--icon`, {
      [`${E}--visually-hidden`]: !O
    })
  }, !N && g && /* @__PURE__ */ d.createElement(g, {
    size: 16
  }))), $ && m && /* @__PURE__ */ d.createElement(Fe, {
    as: "div",
    className: `${E}--tabs__nav-item-secondary-label`,
    title: m
  }, m), !i && z && (N0 || (N0 = /* @__PURE__ */ d.createElement(Zf, null)))), pe);
});
lo.propTypes = {
  /**
   * Provide a custom element to render instead of the default button
   */
  as: c.oneOfType([c.string, c.elementType]),
  /**
   * Provide child elements to be rendered inside `Tab`.
   */
  children: c.node,
  /**
   * Specify an optional className to be added to your Tab
   */
  className: c.string,
  /**
   * Whether your Tab is disabled.
   */
  disabled: c.bool,
  /**
   * Provide a handler that is invoked when a user clicks on the control
   */
  onClick: c.func,
  /**
   * Provide a handler that is invoked on the key down event for the control
   */
  onKeyDown: c.func,
  /**
   * An optional parameter to allow overriding the anchor rendering.
   * Useful for using Tab along with react-router or other client
   * side router libraries.
   */
  renderButton: c.func,
  /**
   * A component used to render an icon.
   */
  renderIcon: c.oneOfType([c.func, c.object]),
  /**
   * An optional label to render under the primary tab label.
   * Only useful for contained tabs.
   */
  secondaryLabel: c.string
};
const fv = /* @__PURE__ */ v.createContext(!1), RC = /* @__PURE__ */ d.forwardRef(({
  badgeIndicator: a,
  children: o,
  className: r,
  defaultOpen: i = !1,
  enterDelayMs: f,
  leaveDelayMs: p,
  label: m,
  ...g
}, h) => {
  const b = be(), E = v.useMemo(() => ({
    badgeIndicator: a
  }), [a]), S = /* @__PURE__ */ v.isValidElement(o) && (o.props.size === 20 || o.props.size === "20"), w = oe(`${b}--tabs__nav-item--icon-only`, r, {
    [`${b}--tabs__nav-item--icon-only__20`]: S
  });
  return /* @__PURE__ */ d.createElement(fv.Provider, {
    value: E
  }, /* @__PURE__ */ d.createElement(go, {
    align: "bottom",
    defaultOpen: i,
    className: `${b}--icon-tooltip`,
    enterDelayMs: f,
    label: m,
    leaveDelayMs: p
  }, /* @__PURE__ */ d.createElement(lo, de({
    className: w,
    ref: h
  }, g), o)));
});
RC.propTypes = {
  /**
   * **Experimental**: Display an empty dot badge on the Tab.
   */
  badgeIndicator: c.bool,
  /**
   * Provide an icon to be rendered inside `IconTab` as the visual label for Tab.
   */
  children: c.node,
  /**
   * Specify an optional className to be added to your Tab
   */
  className: c.string,
  /**
   * Specify whether the tooltip for the icon should be open when it first renders
   */
  defaultOpen: c.bool,
  /**
   * Specify the duration in milliseconds to delay before displaying the tooltip for the icon.
   */
  enterDelayMs: c.number,
  /**
   * Provide the label to be rendered inside the Tooltip. The label will use
   * `aria-labelledby` and will fully describe the child node that is provided.
   * This means that if you have text in the child node it will not be
   * announced to the screen reader. If using the badgeIndicator then provide a
   * label with describing that there is a new notification.
   */
  label: c.node.isRequired,
  /**
   * Specify the duration in milliseconds to delay before hiding the tooltip
   */
  leaveDelayMs: c.number
};
const ec = /* @__PURE__ */ d.forwardRef(({
  children: a,
  className: o,
  ...r
}, i) => {
  const f = be(), {
    selectedIndex: p,
    baseId: m
  } = d.useContext(Rc), g = d.useContext(cv), h = `${m}-tabpanel-${g}`, b = `${m}-tab-${g}`, E = oe(`${f}--tab-content`, o);
  return /* @__PURE__ */ d.createElement("div", de({}, r, {
    "aria-labelledby": b,
    id: h,
    className: E,
    ref: i,
    role: "tabpanel",
    hidden: p !== g
  }), a);
});
ec.propTypes = {
  /**
   * Provide child elements to be rendered inside `TabPanel`.
   */
  children: c.node,
  /**
   * Specify an optional className to be added to TabPanel.
   */
  className: c.string
};
function dv({
  children: a
}) {
  const o = be(), r = v.useRef([]), i = v.useRef([]);
  return Ct(() => {
    var g, h;
    const f = (g = r.current[0]) == null ? void 0 : g.previousElementSibling, p = f == null ? void 0 : f.classList.contains(`${o}--tabs--vertical`), m = (h = f == null ? void 0 : f.parentElement) == null ? void 0 : h.style.height;
    if (p && !m) {
      i.current = r.current.map((S) => (S == null ? void 0 : S.hidden) || !1), r.current.forEach((S) => {
        S && (S.hidden = !1);
      });
      const b = r.current.map((S) => (S == null ? void 0 : S.offsetHeight) || 0), E = Math.max(...b);
      f instanceof HTMLElement && (f.style.height = E + "px"), r.current.forEach((S, w) => {
        S && (S.hidden = i.current[w]);
      });
    }
  }), /* @__PURE__ */ d.createElement(d.Fragment, null, v.Children.map(a, (f, p) => /* @__PURE__ */ v.isValidElement(f) ? /* @__PURE__ */ d.createElement(cv.Provider, {
    value: p
  }, /* @__PURE__ */ v.cloneElement(f, {
    ref: (m) => {
      r.current[p] = m;
    }
  })) : null));
}
dv.propTypes = {
  /**
   * Provide child elements to be rendered inside `TabPanels`.
   */
  children: c.node
};
const OC = (a, o, r = "character", i = "characters") => {
  if (typeof o > "u") return null;
  const f = o - a;
  return f <= 10 && f > 0 ? `${f} ${f === 1 ? r : i} left.` : f <= 0 ? `Maximum ${i} reached.` : null;
}, qt = /* @__PURE__ */ v.forwardRef(({
  className: a,
  decorator: o,
  disabled: r = !1,
  helperText: i,
  hideLabel: f,
  id: p,
  inline: m = !1,
  invalid: g = !1,
  invalidText: h,
  labelText: b,
  light: E,
  onChange: S = () => {
  },
  onClick: w = () => {
  },
  placeholder: x,
  readOnly: N,
  size: C,
  type: A = "text",
  warn: $ = !1,
  warnText: _,
  enableCounter: z = !1,
  maxCount: D,
  slug: H,
  ...L
}, j) => {
  const I = be(), {
    defaultValue: F,
    value: Z
  } = L, he = v.useRef(null), ae = zn([j, he]);
  function se() {
    var We;
    return (F || Z || ((We = he.current) == null ? void 0 : We.value) || "").toString().length;
  }
  const [ne, ge] = v.useState(se());
  v.useEffect(() => {
    ge(se());
  }, [Z, F, z]);
  const R = xy({
    id: p,
    readOnly: N,
    disabled: r,
    invalid: g,
    invalidText: h,
    warn: $,
    warnText: _
  }), J = oe(`${I}--text-input`, {
    [`${I}--text-input--light`]: E,
    [`${I}--text-input--invalid`]: R.invalid,
    [`${I}--text-input--warning`]: R.warn,
    [`${I}--text-input--${C}`]: C,
    // TODO: V12 - Remove this class
    [`${I}--layout--size-${C}`]: C
  }), W = {
    id: p,
    onChange: (je) => {
      var We;
      R.disabled || (ge((We = je.target.value) == null ? void 0 : We.length), S(je));
    },
    onClick: (je) => {
      R.disabled || w(je);
    },
    placeholder: x,
    type: A,
    ref: ae,
    className: J,
    title: x,
    disabled: R.disabled,
    readOnly: N,
    "aria-describedby": i && R.helperId,
    ...L
  };
  z && (W.maxLength = D);
  const le = oe([oe(`${I}--form-item`, a)], `${I}--text-input-wrapper`, {
    [`${I}--text-input-wrapper--readonly`]: N,
    [`${I}--text-input-wrapper--light`]: E,
    [`${I}--text-input-wrapper--inline`]: m,
    [`${I}--text-input-wrapper--inline--invalid`]: m && R.invalid
  }), pe = oe(`${I}--label`, {
    [`${I}--visually-hidden`]: f,
    [`${I}--label--disabled`]: R.disabled,
    [`${I}--label--inline`]: m,
    [`${I}--label--inline--${C}`]: m && !!C
  }), O = oe(`${I}--form__helper-text`, {
    [`${I}--form__helper-text--disabled`]: R.disabled,
    [`${I}--form__helper-text--inline`]: m
  }), q = oe(`${I}--text-input__field-outer-wrapper`, {
    [`${I}--text-input__field-outer-wrapper--inline`]: m
  }), P = oe(`${I}--text-input__field-wrapper`, {
    [`${I}--text-input__field-wrapper--warning`]: R.warn,
    [`${I}--text-input__field-wrapper--slug`]: H,
    [`${I}--text-input__field-wrapper--decorator`]: o
  }), G = oe({
    [`${I}--text-input__invalid-icon`]: R.invalid || R.warn,
    [`${I}--text-input__invalid-icon--warning`]: R.warn
  }), te = oe(`${I}--label`, {
    [`${I}--label--disabled`]: r,
    [`${I}--text-input__label-counter`]: !0
  }), V = z && D ? /* @__PURE__ */ d.createElement(Fe, {
    as: "div",
    className: te
  }, `${ne}/${D}`) : null, Q = typeof b < "u" && b !== null && /* @__PURE__ */ d.createElement(Fe, {
    as: "label",
    htmlFor: p,
    className: pe
  }, b), me = /* @__PURE__ */ d.createElement("div", {
    className: `${I}--text-input__label-wrapper`
  }, Q, V), ie = typeof i < "u" && i !== null && /* @__PURE__ */ d.createElement(Fe, {
    as: "div",
    id: R.helperId,
    className: O
  }, i), ve = /* @__PURE__ */ d.createElement("input", wC({
    sharedTextInputProps: W,
    invalid: R.invalid,
    invalidId: R.invalidId,
    warn: R.warn,
    warnId: R.warnId
  })), {
    isFluid: Ne
  } = v.useContext(wy), Te = v.useRef(null), [Oe, Ee] = v.useState(""), Ue = OC(ne, D);
  v.useEffect(() => {
    if (Ue && Ue !== Oe) {
      const je = Te.current;
      if (je) {
        je.textContent = "";
        const We = setTimeout(() => {
          je && (je.textContent = Ue, Ee(Ue));
        }, 1e3);
        return () => {
          We && clearTimeout(We);
        };
      }
    }
  }, [Ue, Oe]);
  const Se = R.icon, fe = H ?? o, ze = mt(fe, It) ? /* @__PURE__ */ v.cloneElement(fe, {
    size: "mini"
  }) : fe;
  return /* @__PURE__ */ d.createElement("div", {
    className: le
  }, m ? /* @__PURE__ */ d.createElement("div", {
    className: `${I}--text-input__label-helper-wrapper`
  }, me, !Ne && (R.validation || ie)) : me, /* @__PURE__ */ d.createElement("div", {
    className: q
  }, /* @__PURE__ */ d.createElement("div", {
    className: P,
    "data-invalid": R.invalid || null
  }, Se && /* @__PURE__ */ d.createElement(Se, {
    className: G
  }), ve, H ? ze : o ? /* @__PURE__ */ d.createElement("div", {
    className: `${I}--text-input__field-inner-wrapper--decorator`
  }, ze) : "", /* @__PURE__ */ d.createElement("span", {
    className: `${I}--text-input__counter-alert`,
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
    ref: Te
  }, Ue), Ne && /* @__PURE__ */ d.createElement("hr", {
    className: `${I}--text-input__divider`
  }), Ne && !m && R.validation), !Ne && !m && (R.validation || ie)));
});
qt.displayName = "TextInput";
qt.propTypes = {
  /**
   * Specify an optional className to be applied to the `<input>` node
   */
  className: c.string,
  /**
   * **Experimental**: Provide a `decorator` component to be rendered inside the `TextInput` component
   */
  decorator: c.node,
  /**
   * Optionally provide the default value of the `<input>`
   */
  defaultValue: c.oneOfType([c.string, c.number]),
  /**
   * Specify whether the `<input>` should be disabled
   */
  disabled: c.bool,
  /**
   * Specify whether to display the character counter
   */
  enableCounter: c.bool,
  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: c.node,
  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: c.bool,
  /**
   * Specify a custom `id` for the `<input>`
   */
  id: c.string.isRequired,
  /**
   * `true` to use the inline version.
   */
  inline: c.bool,
  /**
   * Specify whether the control is currently invalid
   */
  invalid: c.bool,
  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: c.node,
  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: c.node.isRequired,
  /**
   * `true` to use the light version. For use on $ui-01 backgrounds only.
   * Don't use this to make tile background color same as container background color.
   */
  light: $e(c.bool),
  /**
   * Max character count allowed for the input. This is needed in order for enableCounter to display
   */
  maxCount: c.number,
  /**
   * Optionally provide an `onChange` handler that is called whenever `<input>`
   * is updated
   */
  onChange: c.func,
  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * `<input>` is clicked
   */
  onClick: c.func,
  /**
   * Specify the placeholder attribute for the `<input>`
   */
  placeholder: c.string,
  /**
   * Whether the input should be read-only
   */
  readOnly: c.bool,
  /**
   * Specify the size of the Text Input. Currently supports the following:
   */
  size: c.oneOf(["sm", "md", "lg"]),
  /**
   * **Experimental**: Provide a `Slug` component to be rendered inside the `TextInput` component
   */
  slug: $e(c.node),
  /**
   * Specify the type of the `<input>`
   */
  type: c.string,
  /**
   * Specify the value of the `<input>`
   */
  value: c.oneOfType([c.string, c.number]),
  /**
   * Specify whether the control is currently in warning state
   */
  warn: c.bool,
  /**
   * Provide the text that is displayed when the control is in warning state
   */
  warnText: c.node
};
var A0, R0, O0, D0;
const jl = /* @__PURE__ */ d.forwardRef(({
  children: a,
  className: o,
  decorator: r,
  light: i = !1,
  slug: f,
  hasRoundedCorners: p = !1,
  ...m
}, g) => {
  const h = be(), b = oe(`${h}--tile`, {
    [`${h}--tile--light`]: i,
    [`${h}--tile--slug`]: f,
    [`${h}--tile--slug-rounded`]: f && p,
    [`${h}--tile--decorator`]: r,
    [`${h}--tile--decorator-rounded`]: r && p
  }, o);
  return /* @__PURE__ */ d.createElement("div", de({
    className: b,
    ref: g
  }, m), a, f, r && /* @__PURE__ */ d.createElement("div", {
    className: `${h}--tile--inner-decorator`
  }, r));
});
jl.displayName = "Tile";
jl.propTypes = {
  /**
   * The child nodes.
   */
  children: c.node,
  /**
   * The CSS class names.
   */
  className: c.string,
  /**
   * **Experimental**: Provide a `decorator` component to be rendered inside the `Tile` component
   */
  decorator: c.node,
  /**
   * **Experimental**: Specify if the `Tile` component should be rendered with rounded corners. Only valid
   * when an AILabel is present
   */
  hasRoundedCorners: c.bool,
  /**
   * `true` to use the light version. For use on $ui-01 backgrounds only.
   * Don't use this to make tile background color same as container background color.
   *
   * @deprecated
   */
  light: $e(c.bool),
  /**
   * **Experimental**: Provide a `Slug` component to be rendered inside the `Tile` component
   */
  slug: $e(c.node)
};
const mv = /* @__PURE__ */ d.forwardRef(({
  children: a,
  className: o,
  clicked: r = !1,
  decorator: i,
  disabled: f,
  href: p,
  light: m,
  onClick: g = () => {
  },
  onKeyDown: h = () => {
  },
  renderIcon: b,
  hasRoundedCorners: E,
  slug: S,
  ...w
}, x) => {
  const N = be(), C = oe(`${N}--tile`, `${N}--tile--clickable`, {
    [`${N}--tile--is-clicked`]: r,
    [`${N}--tile--light`]: m,
    [`${N}--tile--slug`]: S,
    [`${N}--tile--slug-rounded`]: S && E,
    [`${N}--tile--decorator`]: i,
    [`${N}--tile--decorator-rounded`]: i && E
  }, o), [A, $] = v.useState(r);
  function _(L) {
    var j;
    (j = L == null ? void 0 : L.persist) == null || j.call(L), $(!A), g(L);
  }
  function z(L) {
    var j;
    (j = L == null ? void 0 : L.persist) == null || j.call(L), !p && ua(L, [ma, mo]) && (L.preventDefault(), $(!A), g(L)), h(L);
  }
  const D = zt("enable-v12-tile-default-icons");
  D && (b || (b = SS), f && (b = $S));
  const H = oe({
    [`${N}--tile--icon`]: !D || D && !f,
    [`${N}--tile--disabled-icon`]: D && f
  });
  return /* @__PURE__ */ d.createElement(jf, de({
    className: C,
    href: p,
    tabIndex: !p && !f ? 0 : void 0,
    onClick: f ? void 0 : _,
    onKeyDown: z,
    ref: x,
    disabled: f
  }, w), S || i ? /* @__PURE__ */ d.createElement("div", {
    className: `${N}--tile-content`
  }, a) : a, (S === !0 || i === !0) && /* @__PURE__ */ d.createElement(ES, {
    size: "24",
    className: `${N}--tile--ai-label-icon`
  }), /* @__PURE__ */ d.isValidElement(i) && /* @__PURE__ */ d.createElement("div", {
    className: `${N}--tile--inner-decorator`
  }, i), b && /* @__PURE__ */ d.createElement(b, {
    className: H,
    "aria-hidden": "true"
  }));
});
mv.displayName = "ClickableTile";
mv.propTypes = {
  /**
   * The child nodes.
   */
  children: c.node,
  /**
   * The CSS class names.
   */
  className: c.string,
  /**
   * Boolean for whether a tile has been clicked.
   */
  clicked: c.bool,
  /**
   * **Experimental**: Provide a `decorator` component or set the boolean to True for an AILabel icon to be rendered inside the `ClickableTile` component
   */
  decorator: c.oneOfType([c.bool, c.node]),
  /**
   * Specify whether the ClickableTile should be disabled
   */
  disabled: c.bool,
  /**
   * **Experimental**: Specify if the `ClickableTile` component should be rendered with rounded corners.
   * Only valid when `slug` prop is present
   */
  hasRoundedCorners: c.bool,
  /**
   * The href for the link.
   */
  href: c.string,
  /**
   * `true` to use the light version. For use on $ui-01 backgrounds only.
   * Don't use this to make tile background color same as container background color.
   */
  light: $e(c.bool),
  /**
   * Specify the function to run when the ClickableTile is clicked
   */
  onClick: c.func,
  /**
   * Specify the function to run when the ClickableTile is interacted with via a keyboard
   */
  onKeyDown: c.func,
  /**
   * The rel property for the link.
   */
  rel: c.string,
  /**
   * A component used to render an icon.
   */
  renderIcon: c.oneOfType([c.func, c.object])
};
const DC = /* @__PURE__ */ d.forwardRef(({
  children: a,
  className: o,
  decorator: r,
  disabled: i,
  id: f,
  light: p,
  onClick: m = () => {
  },
  onChange: g = () => {
  },
  onKeyDown: h = () => {
  },
  selected: b = !1,
  tabIndex: E = 0,
  title: S = "title",
  slug: w,
  hasRoundedCorners: x,
  ...N
}, C) => {
  const A = be(), $ = m, _ = h, [z, D] = v.useState(b);
  v.useEffect(() => {
    D(b);
  }, [b]);
  const H = oe(`${A}--tile`, `${A}--tile--selectable`, {
    [`${A}--tile--is-selected`]: z,
    [`${A}--tile--light`]: p,
    [`${A}--tile--disabled`]: i,
    [`${A}--tile--slug`]: w,
    [`${A}--tile--slug-rounded`]: w && x,
    [`${A}--tile--decorator`]: r,
    [`${A}--tile--decorator-rounded`]: r && x
  }, o), L = v.useCallback((se, ne) => {
    D(ne), g(se, ne, f);
  }, [g, f]);
  function j(se) {
    var ge;
    if (se.preventDefault(), (ge = se == null ? void 0 : se.persist) == null || ge.call(se), ae && F.current && se.target instanceof Node && F.current.contains(se.target))
      return;
    L(se, !z), $(se);
  }
  function I(se) {
    var ne;
    (ne = se == null ? void 0 : se.persist) == null || ne.call(se), ua(se, [ma, mo]) && (se.preventDefault(), L(se, !z)), _(se);
  }
  const F = v.useRef(null), Z = w ?? r, ae = mt(Z, It) ? /* @__PURE__ */ v.cloneElement(Z, {
    size: "xs",
    ref: F
  }) : Z;
  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    /* @__PURE__ */ d.createElement("div", de({
      className: H,
      onClick: i ? void 0 : j,
      role: "checkbox",
      "aria-checked": z,
      onKeyDown: i ? void 0 : I,
      tabIndex: i ? void 0 : E,
      ref: C,
      id: f,
      title: S
    }, N), /* @__PURE__ */ d.createElement("span", {
      className: `${A}--tile__checkmark ${A}--tile__checkmark--persistent`
    }, z ? A0 || (A0 = /* @__PURE__ */ d.createElement(CS, null)) : R0 || (R0 = /* @__PURE__ */ d.createElement(TS, null))), /* @__PURE__ */ d.createElement(Fe, {
      as: "label",
      htmlFor: f,
      className: `${A}--tile-content`
    }, a), w ? ae : r ? /* @__PURE__ */ d.createElement("div", {
      className: `${A}--tile--inner-decorator`
    }, ae) : "")
  );
});
DC.propTypes = {
  children: c.node,
  className: c.string,
  /**
   * **Experimental**: Provide a `decorator` component to be rendered inside the `SelectableTile` component
   */
  decorator: c.node,
  /**
   * Specify whether the SelectableTile should be disabled
   */
  disabled: c.bool,
  /**
   * **Experimental**: Specify if the `SelectableTile` component should be rendered with rounded corners.
   * Only valid when `slug` prop is present
   */
  hasRoundedCorners: c.bool,
  /**
   * The ID of the `<input>`.
   */
  id: c.string,
  /**
   * `true` to use the light version. For use on $ui-01 backgrounds only.
   * Don't use this to make tile background color same as container background color.
   */
  light: $e(c.bool),
  /**
   * The `name` of the `<input>`.
   * @deprecated
   */
  name: $e(c.string),
  /**
   * The empty handler of the `<input>`.
   */
  onChange: c.func,
  /**
   * Specify the function to run when the SelectableTile is clicked
   */
  onClick: c.func,
  /**
   * Specify the function to run when the SelectableTile is interacted with via a keyboard
   */
  onKeyDown: c.func,
  /**
   * `true` to select this tile.
   */
  selected: c.bool,
  /**
   * **Experimental**: Provide a `Slug` component to be rendered inside the `SelectableTile` component
   */
  slug: $e(c.node),
  /**
   * Specify the tab index of the wrapper element
   */
  tabIndex: c.number,
  /**
   * The `title` of the `<input>`.
   */
  title: c.string,
  /**
   * The value of the `<input>`.
   * @deprecated
   */
  value: $e(c.oneOfType([c.string, c.number]))
};
const pv = /* @__PURE__ */ v.forwardRef(({
  tabIndex: a = 0,
  className: o,
  children: r,
  decorator: i,
  expanded: f = !1,
  tileMaxHeight: p = 0,
  tilePadding: m = 0,
  onClick: g,
  onKeyUp: h,
  tileCollapsedIconText: b = "Interact to expand Tile",
  tileExpandedIconText: E = "Interact to collapse Tile",
  tileCollapsedLabel: S,
  tileExpandedLabel: w,
  light: x,
  slug: N,
  hasRoundedCorners: C,
  ...A
}, $) => {
  const [_, z] = v.useState(0), [D, H] = v.useState(0), [L, j] = v.useState(f), [I, F] = v.useState(!0), Z = v.useRef(null), he = v.useRef(null), ae = v.useRef(null), se = v.useRef(null), ne = v.useRef(null), ge = zn([$, ne]), R = be();
  v.useEffect(() => {
    j(f);
  }, [f]);
  const J = () => {
    j((Q) => !Q);
  }, W = (Q) => {
    Q.target !== ne.current && Q.target !== ae.current && ua(Q, [ma, mo]) && Q.preventDefault();
  }, le = oe(`${R}--tile`, `${R}--tile--expandable`, {
    [`${R}--tile--is-expanded`]: L,
    [`${R}--tile--light`]: x
  }, o), pe = oe(le, `${R}--tile--expandable--interactive`, {
    [`${R}--tile--slug`]: N,
    [`${R}--tile--slug-rounded`]: N && C,
    [`${R}--tile--decorator`]: i,
    [`${R}--tile--decorator-rounded`]: i && C
  }), O = oe(`${R}--tile__chevron`, `${R}--tile__chevron--interactive`), q = v.Children.toArray(r);
  Ct(() => {
    if (!ne.current || !Z.current)
      return;
    const Q = window.getComputedStyle(ne.current), me = parseInt(Q.getPropertyValue("padding-top"), 10) || 0, ie = parseInt(Q.getPropertyValue("padding-bottom"), 10) || 0;
    H(me + ie), z(Z.current.scrollHeight);
  }, []), Ct(() => {
    if (!Z.current || !he.current)
      return;
    const Q = !!yf(Z.current) || !!vf(Z.current) || !!yf(he.current) || !!vf(he.current) || !!(N || i);
    F(Q);
  }, [N, i, r]), Ct(() => {
    var ve;
    if (!ne.current)
      return;
    if (L) {
      ne.current.style.maxHeight = "";
      return;
    }
    const Q = _ || ((ve = Z.current) == null ? void 0 : ve.scrollHeight) || 0, me = p > 0 ? p : Q, ie = m > 0 ? m : D;
    ne.current.style.maxHeight = `${me + ie}px`;
  }, [L, p, m, _, D]), v.useEffect(() => {
    if (!Z.current)
      return;
    const Q = new ResizeObserver(() => {
      Z.current && z(Z.current.scrollHeight);
    });
    return Q.observe(Z.current), () => Q.disconnect();
  }, []);
  const P = dt(I ? "expandable-tile-interactive" : "expandable-tile"), G = N ?? i, V = mt(G, It) ? /* @__PURE__ */ v.cloneElement(G, {
    size: "xs"
  }) : G;
  return I ? /* @__PURE__ */ d.createElement("div", de({
    ref: ge,
    className: pe
  }, A), /* @__PURE__ */ d.createElement("div", {
    ref: se
  }, N ? V : i ? /* @__PURE__ */ d.createElement("div", {
    className: `${R}--tile--inner-decorator`
  }, V) : "", /* @__PURE__ */ d.createElement("div", {
    ref: Z,
    className: `${R}--tile-content`
  }, q[0]), /* @__PURE__ */ d.createElement("button", {
    type: "button",
    "aria-expanded": L,
    "aria-controls": P,
    onKeyUp: kt([h, W]),
    onClick: kt([g, J]),
    "aria-label": L ? E : b,
    ref: ae,
    className: O
  }, O0 || (O0 = /* @__PURE__ */ d.createElement(ao, null))), /* @__PURE__ */ d.createElement("div", {
    ref: he,
    className: `${R}--tile-content`,
    id: P
  }, q[1]))) : /* @__PURE__ */ d.createElement("button", de({
    type: "button",
    ref: ge,
    className: le,
    "aria-controls": P,
    "aria-expanded": L,
    title: L ? E : b
  }, A, {
    onKeyUp: kt([h, W]),
    onClick: kt([g, J]),
    tabIndex: a
  }), /* @__PURE__ */ d.createElement("div", {
    ref: se
  }, /* @__PURE__ */ d.createElement("div", {
    ref: Z,
    className: `${R}--tile-content`
  }, q[0]), /* @__PURE__ */ d.createElement("div", {
    className: `${R}--tile__chevron`
  }, /* @__PURE__ */ d.createElement("span", null, L ? w : S), D0 || (D0 = /* @__PURE__ */ d.createElement(ao, null))), /* @__PURE__ */ d.createElement("div", {
    ref: he,
    id: P,
    className: `${R}--tile-content`
  }, q[1])));
});
pv.propTypes = {
  children: c.node,
  className: c.string,
  /**
   * **Experimental**: Provide a `decorator` component to be rendered inside the `ExpandableTile` component
   */
  decorator: c.node,
  /**
   * `true` if the tile is expanded.
   */
  expanded: c.bool,
  /**
   * Specify if the `ExpandableTile` component should be rendered with rounded corners.
   * Only valid when `slug` prop is present
   */
  hasRoundedCorners: c.bool,
  /**
   * An ID that can be provided to aria-labelledby
   */
  id: c.string,
  /**
   * `true` to use the light version. For use on $ui-01 backgrounds only.
   * Don't use this to make tile background color same as container background color.
   */
  light: $e(c.bool),
  /**
   * Specify the function to run when the ExpandableTile is clicked
   */
  onClick: c.func,
  /**
   * optional handler to trigger a function when a key is pressed
   */
  onKeyUp: c.func,
  /**
   * **Experimental**: Provide a `Slug` component to be rendered inside the `ExpandableTile` component
   */
  slug: $e(c.node),
  /**
   * The `tabindex` attribute.
   */
  tabIndex: c.number,
  /**
   * The description of the "collapsed" icon that can be read by screen readers.
   */
  tileCollapsedIconText: c.string,
  /**
   * When "collapsed", a label to appear next to the chevron (e.g., "View more").
   */
  tileCollapsedLabel: c.string,
  /**
   * The description of the "expanded" icon that can be read by screen readers.
   */
  tileExpandedIconText: c.string,
  /**
   * When "expanded", a label to appear next to the chevron (e.g., "View less").
   */
  tileExpandedLabel: c.string
};
pv.displayName = "ExpandableTile";
const hv = /* @__PURE__ */ d.forwardRef(({
  children: a
}, o) => {
  const r = be();
  return /* @__PURE__ */ d.createElement("div", {
    ref: o,
    className: `${r}--tile-content__above-the-fold`
  }, a);
});
hv.propTypes = {
  /**
   * The child nodes.
   */
  children: c.node
};
hv.displayName = "TileAboveTheFoldContent";
const gv = /* @__PURE__ */ d.forwardRef(({
  children: a
}, o) => {
  const r = be();
  return /* @__PURE__ */ d.createElement("div", {
    ref: o,
    className: `${r}--tile-content__below-the-fold`
  }, a);
});
gv.propTypes = {
  /**
   * The child nodes.
   */
  children: c.node
};
gv.displayName = "TileBelowTheFoldContent";
const MC = ({
  onRequestClose: a,
  onSubmit: o
}) => {
  const [r, i] = v.useState(""), [f, p] = v.useState(null), [m, g] = v.useState(""), h = v.useRef(null), b = (S) => {
    const w = S.target.files;
    if (w && w.length > 0) {
      const x = w[0];
      p(x), r || i(x.name), g("");
    }
  }, E = async () => {
    if (!f) {
      g("Please select a file to upload");
      return;
    }
    try {
      const S = await f.arrayBuffer(), w = new Uint8Array(S);
      let x = "";
      for (let A = 0; A < w.byteLength; A++)
        x += String.fromCharCode(w[A]);
      const N = btoa(x), C = {
        name: r || f.name,
        data: N
      };
      o(C);
    } catch (S) {
      console.error("Error reading file:", S), g("Error reading file. Please try again.");
    }
  };
  return /* @__PURE__ */ M.jsxs(
    $l,
    {
      open: !0,
      modalHeading: "Add Data Store",
      primaryButtonText: "Upload",
      secondaryButtonText: "Cancel",
      onRequestClose: a,
      onRequestSubmit: E,
      children: [
        /* @__PURE__ */ M.jsx("div", { style: { marginBottom: "1rem" }, children: /* @__PURE__ */ M.jsx(
          qt,
          {
            id: "datastore-name",
            labelText: "Name (optional)",
            placeholder: "e.g. config.yaml",
            value: r,
            onChange: (S) => i(S.target.value),
            helperText: "Leave empty to use filename"
          }
        ) }),
        /* @__PURE__ */ M.jsxs("div", { style: { marginBottom: "1rem" }, children: [
          /* @__PURE__ */ M.jsx(
            "label",
            {
              htmlFor: "file-input",
              style: {
                display: "block",
                marginBottom: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: 400,
                color: "var(--cds-text-primary)"
              },
              children: "Select File"
            }
          ),
          /* @__PURE__ */ M.jsx(
            "input",
            {
              ref: h,
              id: "file-input",
              type: "file",
              onChange: b,
              style: {
                display: "block",
                width: "100%",
                padding: "0.5rem",
                border: "1px solid var(--cds-border-strong)",
                borderRadius: "0",
                backgroundColor: "var(--cds-field)"
              }
            }
          ),
          f && /* @__PURE__ */ M.jsxs("div", { style: { marginTop: "0.5rem", fontSize: "0.875rem", color: "var(--cds-text-secondary)" }, children: [
            "Selected: ",
            f.name,
            " (",
            (f.size / 1024).toFixed(2),
            " KB)"
          ] })
        ] }),
        m && /* @__PURE__ */ M.jsx(
          "div",
          {
            style: {
              color: "var(--cds-text-error)",
              fontSize: "0.875rem",
              marginTop: "0.5rem"
            },
            children: m
          }
        )
      ]
    }
  );
}, $C = ({
  dataStore: a,
  onRequestClose: o
}) => {
  const [r, i] = v.useState(""), [f, p] = v.useState(!0), [m, g] = v.useState(null);
  v.useEffect(() => {
    if (p(!0), g(null), i(""), !a.data) {
      g("No data available"), p(!1);
      return;
    }
    try {
      const b = atob(a.data), E = new Uint8Array(b.length);
      for (let w = 0; w < b.length; w++)
        E[w] = b.charCodeAt(w);
      const S = new TextDecoder("utf-8").decode(E);
      i(S), p(!1);
    } catch (b) {
      console.error("Error decoding data:", b), g("Failed to decode data. The content may be binary or corrupted."), p(!1);
    }
  }, [a.data]);
  const h = (b) => {
    try {
      const E = JSON.parse(b);
      return JSON.stringify(E, null, 2);
    } catch {
      return b;
    }
  };
  return /* @__PURE__ */ M.jsxs(
    $l,
    {
      open: !0,
      modalHeading: `View Data Store: ${a.name || a.id || "Unknown"}`,
      passiveModal: !0,
      onRequestClose: o,
      size: "lg",
      children: [
        /* @__PURE__ */ M.jsxs("div", { style: { marginBottom: "1rem" }, children: [
          /* @__PURE__ */ M.jsxs("div", { style: { marginBottom: "0.5rem" }, children: [
            /* @__PURE__ */ M.jsx("strong", { children: "ID:" }),
            " ",
            a.id || "N/A"
          ] }),
          /* @__PURE__ */ M.jsxs("div", { style: { marginBottom: "1rem" }, children: [
            /* @__PURE__ */ M.jsx("strong", { children: "Name:" }),
            " ",
            a.name || "N/A"
          ] })
        ] }),
        /* @__PURE__ */ M.jsxs("div", { children: [
          /* @__PURE__ */ M.jsx("strong", { children: "Contents:" }),
          f ? /* @__PURE__ */ M.jsx("div", { style: { display: "flex", justifyContent: "center", padding: "2rem" }, children: /* @__PURE__ */ M.jsx(Rr, { description: "Loading content...", withOverlay: !1 }) }) : m ? /* @__PURE__ */ M.jsx(
            "div",
            {
              style: {
                color: "var(--cds-text-error)",
                fontSize: "0.875rem",
                marginTop: "0.5rem",
                padding: "1rem",
                backgroundColor: "var(--cds-notification-background-error)",
                border: "1px solid var(--cds-support-error)"
              },
              children: m
            }
          ) : /* @__PURE__ */ M.jsx(
            "pre",
            {
              style: {
                marginTop: "0.5rem",
                padding: "1rem",
                backgroundColor: "var(--cds-layer-01)",
                border: "1px solid var(--cds-border-subtle)",
                borderRadius: "4px",
                overflow: "auto",
                maxHeight: "400px",
                fontSize: "0.875rem",
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word"
              },
              children: h(r)
            }
          )
        ] })
      ]
    }
  );
}, BC = [
  { key: "id", header: "ID" },
  { key: "name", header: "Name" },
  { key: "dataTruncated", header: "Data (Base64)" },
  { key: "actions", header: "Actions" }
], LC = ({
  dataStores: a,
  onDelete: o,
  onAdd: r,
  onDownload: i,
  onView: f
}) => {
  const p = (m) => m ? m.length <= 50 ? m : `${m.substring(0, 47)}...` : "";
  return /* @__PURE__ */ M.jsx(
    ut,
    {
      rows: a.map((m, g) => ({
        id: m.id || `datastore-${g}`,
        name: m.name || "N/A",
        data: m.data || "",
        dataTruncated: p(m.data)
      })),
      headers: BC,
      children: ({ rows: m, headers: g, getTableProps: h, getHeaderProps: b, getRowProps: E }) => /* @__PURE__ */ M.jsxs(ld, { children: [
        /* @__PURE__ */ M.jsx(sd, { children: /* @__PURE__ */ M.jsx(Qy, { children: /* @__PURE__ */ M.jsx(He, { renderIcon: H0, onClick: r, children: "Add Data Store" }) }) }),
        /* @__PURE__ */ M.jsxs(Cc, { ...h(), children: [
          /* @__PURE__ */ M.jsx(od, { children: /* @__PURE__ */ M.jsx(sa, { children: g.map((S) => /* @__PURE__ */ v.createElement(Dr, { ...b({ header: S }), key: S.key }, S.header)) }) }),
          /* @__PURE__ */ M.jsx(Nc, { children: a.length === 0 ? /* @__PURE__ */ M.jsx(sa, { children: /* @__PURE__ */ M.jsx(Mn, { colSpan: g.length, style: { textAlign: "center", color: "var(--cds-text-secondary)" }, children: 'No data stores found. Click "Add Data Store" to upload a file.' }) }) : m.map((S) => {
            const { key: w, ...x } = E({ row: S }), N = a.find((C) => C.id === S.id);
            return /* @__PURE__ */ M.jsx(sa, { ...x, children: S.cells.map((C) => C.info.header === "dataTruncated" ? /* @__PURE__ */ M.jsx(Mn, { children: /* @__PURE__ */ M.jsx(go, { label: (N == null ? void 0 : N.data) || "", align: "bottom", children: /* @__PURE__ */ M.jsx("span", { children: C.value }) }) }, C.id) : C.info.header === "actions" ? /* @__PURE__ */ M.jsxs(Mn, { children: [
              /* @__PURE__ */ M.jsx(
                He,
                {
                  kind: "ghost",
                  renderIcon: VS,
                  hasIconOnly: !0,
                  iconDescription: "View",
                  onClick: () => N && f(N)
                }
              ),
              /* @__PURE__ */ M.jsx(
                He,
                {
                  kind: "ghost",
                  renderIcon: DS,
                  hasIconOnly: !0,
                  iconDescription: "Download",
                  onClick: () => N && i(N)
                }
              ),
              /* @__PURE__ */ M.jsx(
                He,
                {
                  kind: "ghost",
                  renderIcon: Of,
                  hasIconOnly: !0,
                  iconDescription: "Delete",
                  onClick: () => (N == null ? void 0 : N.id) && o(N.id)
                }
              )
            ] }, C.id) : /* @__PURE__ */ M.jsx(Mn, { children: C.value }, C.id)) }, w);
          }) })
        ] })
      ] })
    }
  );
}, zC = (a) => {
  const o = a.headers.get("content-type");
  return o && o.includes("application/json") ? a.json() : a.text();
}, jC = (a) => {
  const o = GE() || "" || window.location.origin, r = new URL(a, o), i = r.pathname, f = r.search;
  return new URL(`${o}${i}${f}`).toString();
}, HC = (a) => ({
  ...a
}), ff = "wanaku_auth_redirect_ts", UC = 1e4;
async function qC(a, o) {
  const r = VE();
  if (!r)
    throw new Error("Plugin host is not available");
  const i = new URL(a, "http://localhost"), f = i.pathname + i.search, p = (o.method || "GET").toUpperCase();
  let m;
  if (o.body && typeof o.body == "string")
    try {
      m = JSON.parse(o.body);
    } catch {
      m = o.body;
    }
  let g;
  switch (p) {
    case "POST":
      g = await r.http.post(Qi, f, m);
      break;
    case "PUT":
      g = await r.http.put(Qi, f, m);
      break;
    case "DELETE":
      g = await r.http.delete(Qi, f);
      break;
    default:
      g = await r.http.get(Qi, f);
      break;
  }
  const h = g;
  if (h && typeof h == "object" && "error" in h && h.error)
    throw new Error(String(h.error));
  return { status: 200, data: g, headers: new Headers() };
}
const gt = async (a, o) => {
  if (IE())
    return qC(a, o);
  const r = jC(a), i = HC(o.headers), f = {
    ...o,
    headers: i,
    redirect: "manual"
  }, p = new Request(r, f), m = await fetch(p);
  if (m.type === "opaqueredirect" || m.status === 401) {
    const h = Number(sessionStorage.getItem(ff) || "0");
    throw Date.now() - h < UC ? new Error("Authentication redirect loop detected — check OIDC configuration") : (sessionStorage.setItem(ff, String(Date.now())), window.location.reload(), new Error("Redirecting to login"));
  }
  m.ok && sessionStorage.removeItem(ff);
  const g = await zC(m);
  if (!m.ok) {
    const h = g, b = (h == null ? void 0 : h.error) || `Request failed with status ${m.status}`;
    throw new Error(b);
  }
  return { status: m.status, data: g, headers: m.headers };
}, VC = () => "/api/v1/data-store", kC = async (a, o) => gt(VC(), {
  ...o,
  method: "PUT",
  headers: { "Content-Type": "application/json", ...o == null ? void 0 : o.headers },
  body: JSON.stringify(a)
}), IC = (a) => {
  const o = new URLSearchParams();
  Object.entries(a || {}).forEach(([i, f]) => {
    f !== void 0 && o.append(i, f === null ? "null" : f.toString());
  });
  const r = o.toString();
  return r.length > 0 ? `/api/v1/data-store?${r}` : "/api/v1/data-store";
}, GC = async (a, o) => gt(
  IC(a),
  {
    ...o,
    method: "GET"
  }
), ZC = () => "/api/v1/data-store", YC = async (a, o) => gt(ZC(), {
  ...o,
  method: "POST",
  headers: { "Content-Type": "application/json", ...o == null ? void 0 : o.headers },
  body: JSON.stringify(a)
}), XC = (a) => `/api/v1/data-store/${a}`, QC = async (a, o) => gt(
  XC(a),
  {
    ...o,
    method: "DELETE"
  }
), KC = () => "/api/v1/toolset-repos", FC = async (a) => gt(
  KC(),
  {
    ...a,
    method: "GET"
  }
), JC = () => "/api/v1/toolset-repos", WC = async (a, o) => gt(
  JC(),
  {
    ...o,
    method: "POST",
    headers: { "Content-Type": "application/json", ...o == null ? void 0 : o.headers },
    body: JSON.stringify(a)
  }
), PC = (a) => `/api/v1/toolset-repos/${a}`, e3 = async (a, o, r) => gt(
  PC(a),
  {
    ...r,
    method: "PUT",
    headers: { "Content-Type": "application/json", ...r == null ? void 0 : r.headers },
    body: JSON.stringify(o)
  }
), t3 = (a) => `/api/v1/toolset-repos/${a}`, n3 = async (a, o) => gt(
  t3(a),
  {
    ...o,
    method: "DELETE"
  }
), l3 = (a) => `/api/v1/toolset-repos/${a}/browse`, a3 = async (a, o) => gt(
  l3(a),
  {
    ...o,
    method: "GET"
  }
), o3 = (a, o) => `/api/v1/toolset-repos/${a}/toolsets/${o}`, r3 = async (a, o, r) => gt(
  o3(a, o),
  {
    ...r,
    method: "GET"
  }
), i3 = () => {
  const a = v.useCallback(
    (f, p) => GC(f, p),
    []
  ), o = v.useCallback(
    (f, p) => YC(f, p),
    []
  ), r = v.useCallback(
    (f, p) => kC(f, p),
    []
  ), i = v.useCallback(
    (f, p) => QC(f, p),
    []
  );
  return {
    listDataStores: a,
    addDataStore: o,
    updateDataStore: r,
    deleteDataStore: i
  };
}, c3 = () => {
  const [a, o] = v.useState([]), [r, i] = v.useState(!0), [f, p] = v.useState(null), [m, g] = v.useState(!1), [h, b] = v.useState(null), { listDataStores: E, addDataStore: S, deleteDataStore: w } = i3();
  if (v.useEffect(() => {
    E().then((A) => {
      o(A.data.data || []), i(!1);
    }).catch(() => {
      p("Failed to load data stores"), i(!1);
    });
  }, [E]), v.useEffect(() => {
    if (f) {
      const A = setTimeout(() => p(null), 1e4);
      return () => clearTimeout(A);
    }
  }, [f]), r)
    return /* @__PURE__ */ M.jsx("div", { children: "Loading..." });
  const x = async (A) => {
    try {
      await S(A), g(!1), p(null), E().then(($) => {
        o($.data.data || []);
      });
    } catch {
      p("Error adding data store. Please try again.");
    }
  }, N = async (A) => {
    try {
      await w(A), E().then(($) => {
        o($.data.data || []);
      });
    } catch {
      p("Failed to delete data store");
    }
  }, C = (A) => {
    if (!A.data) {
      p("No data to download");
      return;
    }
    try {
      const $ = atob(A.data), _ = new Uint8Array($.length);
      for (let L = 0; L < $.length; L++)
        _[L] = $.charCodeAt(L);
      const z = new Blob([_]), D = URL.createObjectURL(z), H = document.createElement("a");
      H.href = D, H.download = A.name || "download", document.body.appendChild(H), H.click(), document.body.removeChild(H), URL.revokeObjectURL(D);
    } catch {
      p("Failed to download file. Data may be corrupted.");
    }
  };
  return /* @__PURE__ */ M.jsxs("div", { children: [
    f && /* @__PURE__ */ M.jsx(
      dc,
      {
        kind: "error",
        title: "Error",
        subtitle: f,
        onCloseButtonClick: () => p(null),
        timeout: 1e4,
        style: { float: "right" }
      }
    ),
    /* @__PURE__ */ M.jsx("h1", { className: "title", children: "Data Stores" }),
    /* @__PURE__ */ M.jsx("p", { className: "description", children: "Manage stored data files. Upload files as base64-encoded data stores that can be retrieved and downloaded later." }),
    /* @__PURE__ */ M.jsx("div", { id: "page-content", children: /* @__PURE__ */ M.jsx(
      LC,
      {
        dataStores: a,
        onDelete: N,
        onAdd: () => g(!0),
        onDownload: C,
        onView: (A) => b(A)
      }
    ) }),
    m && /* @__PURE__ */ M.jsx(
      MC,
      {
        onRequestClose: () => g(!1),
        onSubmit: x
      }
    ),
    h && /* @__PURE__ */ M.jsx(
      $C,
      {
        dataStore: h,
        onRequestClose: () => b(null)
      }
    )
  ] });
}, oa = "/api/v1/service-catalog", bv = () => {
  const a = v.useCallback(
    (m, g) => {
      const h = new URLSearchParams();
      m && h.append("search", m);
      const b = h.toString(), E = b ? `${oa}?${b}` : `${oa}`;
      return gt(E, {
        ...g,
        method: "GET"
      });
    },
    []
  ), o = v.useCallback(
    (m, g) => gt(
      `${oa}/${encodeURIComponent(m)}`,
      {
        ...g,
        method: "GET"
      }
    ),
    []
  ), r = v.useCallback(
    (m, g) => {
      const h = new URLSearchParams({ name: m });
      return gt(
        `${oa}/download?${h.toString()}`,
        {
          ...g,
          method: "GET"
        }
      );
    },
    []
  ), i = v.useCallback(
    (m, g) => gt(
      `${oa}`,
      {
        ...g,
        method: "POST",
        headers: { "Content-Type": "application/json", ...g == null ? void 0 : g.headers },
        body: JSON.stringify(m)
      }
    ),
    []
  ), f = v.useCallback(
    (m, g) => gt(
      `${oa}/${encodeURIComponent(m)}`,
      {
        ...g,
        method: "DELETE"
      }
    ),
    []
  ), p = v.useCallback(
    (m, g, h) => {
      const b = new URLSearchParams({ name: m, model: g });
      return gt(
        `${oa}/instructions?${b.toString()}`,
        {
          ...h,
          method: "GET"
        }
      );
    },
    []
  );
  return {
    listServiceCatalogs: a,
    getServiceCatalog: o,
    downloadServiceCatalog: r,
    deployServiceCatalog: i,
    removeServiceCatalog: f,
    getDeploymentInstructions: p
  };
}, s3 = ({
  catalogName: a,
  onClose: o
}) => {
  const [r, i] = v.useState(0), [f, p] = v.useState("local"), [m, g] = v.useState(null), [h, b] = v.useState({}), [E, S] = v.useState(!1), [w, x] = v.useState(null), { getDeploymentInstructions: N } = bv(), C = v.useCallback(async () => {
    var D;
    if (r === 0) {
      S(!0), x(null);
      try {
        const j = (await N(a, f)).data.data;
        g(j);
        const I = {};
        (D = j.placeholders) == null || D.forEach((F) => {
          I[F.key || ""] = F.defaultValue || "";
        }), b(I), i(1);
      } catch (H) {
        console.error("Error fetching deployment instructions:", H), x("Failed to generate deployment instructions");
      } finally {
        S(!1);
      }
    }
  }, [r, a, f, N]), A = v.useCallback(() => {
    r === 1 && (i(0), g(null), x(null));
  }, [r]), $ = v.useMemo(() => m != null && m.systems ? m.systems.map((D) => {
    let H = D.instruction || "";
    return Object.entries(h).forEach(([L, j]) => {
      j && (H = H.split(`<${L}>`).join(j));
    }), { ...D, renderedInstruction: H };
  }) : [], [m, h]), _ = v.useCallback((D) => !D || D === "http://" || D === "https://" ? !1 : !D.startsWith("http://") && !D.startsWith("https://"), []), z = {
    local: "Local (java -jar)",
    docker: "Docker / Podman",
    kubernetes: "Kubernetes / OpenShift"
  };
  return /* @__PURE__ */ M.jsxs(td, { open: !0, onClose: o, size: "lg", children: [
    /* @__PURE__ */ M.jsx(Sc, { title: `Deploy: ${a}` }),
    /* @__PURE__ */ M.jsxs(ed, { children: [
      /* @__PURE__ */ M.jsxs(
        rv,
        {
          currentIndex: r,
          className: "deployment-wizard-progress",
          children: [
            /* @__PURE__ */ M.jsx(Cf, { label: "Deployment Model" }),
            /* @__PURE__ */ M.jsx(Cf, { label: "Instructions" })
          ]
        }
      ),
      r === 0 && /* @__PURE__ */ M.jsxs("div", { className: "deployment-wizard-step", children: [
        /* @__PURE__ */ M.jsx("p", { className: "deployment-wizard-description", children: "Choose how you want to deploy this service catalog." }),
        /* @__PURE__ */ M.jsxs(
          yd,
          {
            legendText: "Deployment model",
            name: "deployment-model",
            defaultSelected: f,
            onChange: (D) => p(String(D || "local")),
            className: "deployment-wizard-radio-group",
            orientation: "vertical",
            children: [
              /* @__PURE__ */ M.jsx(
                no,
                {
                  labelText: "Local (java -jar)",
                  value: "local",
                  id: "model-local"
                }
              ),
              /* @__PURE__ */ M.jsx(
                no,
                {
                  labelText: "Docker / Podman",
                  value: "docker",
                  id: "model-docker"
                }
              ),
              /* @__PURE__ */ M.jsx(
                no,
                {
                  labelText: "Kubernetes / OpenShift",
                  value: "kubernetes",
                  id: "model-kubernetes"
                }
              )
            ]
          }
        )
      ] }),
      r === 1 && E && /* @__PURE__ */ M.jsx(Rr, { description: "Generating deployment instructions..." }),
      r === 1 && w && /* @__PURE__ */ M.jsx(
        bd,
        {
          kind: "error",
          title: "Error",
          subtitle: w,
          hideCloseButton: !0
        }
      ),
      r === 1 && m && !E && !w && /* @__PURE__ */ M.jsxs("div", { className: "deployment-wizard-step", children: [
        /* @__PURE__ */ M.jsxs("p", { className: "deployment-wizard-type-note", children: [
          "Detected type: ",
          /* @__PURE__ */ M.jsx("strong", { children: m.catalogType }),
          " — ",
          "Deployment model: ",
          /* @__PURE__ */ M.jsx("strong", { children: z[m.deploymentModel || ""] || m.deploymentModel })
        ] }),
        m.placeholders && m.placeholders.length > 0 && /* @__PURE__ */ M.jsxs("div", { className: "deployment-wizard-placeholders", children: [
          /* @__PURE__ */ M.jsx(uc, { className: "deployment-wizard-section-label", children: "Configuration" }),
          m.placeholders.map((D) => {
            const H = h[D.key || ""] || "", L = D.type === "url" && _(H);
            return /* @__PURE__ */ M.jsx(
              qt,
              {
                id: `placeholder-${D.key}`,
                labelText: D.label || D.key || "",
                helperText: L ? void 0 : D.description,
                placeholder: D.defaultValue || `Enter ${D.label || D.key}`,
                value: H,
                invalid: L,
                invalidText: "URL must start with http:// or https://",
                onChange: (j) => b((I) => ({
                  ...I,
                  [D.key || ""]: j.target.value
                }))
              },
              D.key
            );
          })
        ] }),
        /* @__PURE__ */ M.jsxs("div", { className: "deployment-wizard-instructions", children: [
          /* @__PURE__ */ M.jsx(uc, { className: "deployment-wizard-section-label", children: $.length === 1 && $[0].systemName === "all" ? "Deployment Manifest" : "Commands" }),
          $.map((D, H) => /* @__PURE__ */ M.jsxs("div", { className: "deployment-wizard-system-block", children: [
            D.systemName !== "all" && /* @__PURE__ */ M.jsxs("p", { className: "deployment-wizard-system-label", children: [
              "System: ",
              /* @__PURE__ */ M.jsx("strong", { children: D.systemName })
            ] }),
            /* @__PURE__ */ M.jsx(
              Sy,
              {
                type: "multi",
                feedback: "Copied!",
                className: "deployment-wizard-snippet",
                children: D.renderedInstruction
              }
            )
          ] }, D.systemName || H))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ M.jsx(wr, { children: r === 0 ? /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
      /* @__PURE__ */ M.jsx(He, { kind: "secondary", onClick: o, children: "Cancel" }),
      /* @__PURE__ */ M.jsx(He, { kind: "primary", onClick: C, disabled: E, children: "Next" })
    ] }) : /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
      /* @__PURE__ */ M.jsx(He, { kind: "secondary", onClick: A, children: "Back" }),
      /* @__PURE__ */ M.jsx(He, { kind: "primary", onClick: o, children: "Done" })
    ] }) })
  ] });
}, u3 = ({
  catalogs: a,
  onDelete: o,
  onSearch: r,
  getDetail: i
}) => {
  const [f, p] = v.useState(null), [m, g] = v.useState(null), [h, b] = v.useState(null), [E, S] = v.useState({}), w = async (x) => {
    if (h === x) {
      b(null);
      return;
    }
    if (b(x), !E[x]) {
      const N = await i(x);
      N && S((C) => ({ ...C, [x]: N }));
    }
  };
  return /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
    /* @__PURE__ */ M.jsx("div", { className: "catalog-search", children: /* @__PURE__ */ M.jsx(
      Or,
      {
        labelText: "Search service catalogs",
        placeholder: "Search service catalogs...",
        onChange: (x) => r(x.target.value),
        size: "lg"
      }
    ) }),
    a.length === 0 ? /* @__PURE__ */ M.jsxs(jl, { className: "catalog-empty-tile", children: [
      /* @__PURE__ */ M.jsx("p", { children: "No service catalogs found." }),
      /* @__PURE__ */ M.jsx("p", { className: "catalog-empty-hint", children: "Use the CLI to deploy a service catalog:" }),
      /* @__PURE__ */ M.jsx("code", { className: "catalog-empty-code", children: "wanaku service init --name=myservice --services=system1" })
    ] }) : /* @__PURE__ */ M.jsx(pd, { className: "catalog-grid", children: a.map((x, N) => {
      var $;
      const C = h === x.name, A = E[x.name];
      return /* @__PURE__ */ M.jsx(_c, { lg: 4, md: 4, sm: 4, children: /* @__PURE__ */ M.jsxs(jl, { className: `catalog-card ${C ? "catalog-card--expanded" : ""}`, children: [
        /* @__PURE__ */ M.jsxs("div", { className: "catalog-card-header", children: [
          /* @__PURE__ */ M.jsxs("div", { className: "catalog-card-title-row", children: [
            x.icon && /* @__PURE__ */ M.jsx("span", { className: "catalog-card-icon", children: x.icon }),
            /* @__PURE__ */ M.jsx("h4", { className: "catalog-card-name", children: x.name })
          ] }),
          /* @__PURE__ */ M.jsx(
            He,
            {
              kind: "ghost",
              size: "sm",
              renderIcon: Of,
              hasIconOnly: !0,
              iconDescription: "Delete",
              className: "catalog-card-delete",
              onClick: (_) => {
                _.stopPropagation(), p(x.name);
              }
            }
          )
        ] }),
        /* @__PURE__ */ M.jsx("p", { className: "catalog-card-description", children: x.description }),
        /* @__PURE__ */ M.jsx("div", { className: "catalog-card-tags", children: ($ = x.services) == null ? void 0 : $.map((_) => /* @__PURE__ */ M.jsx(mc, { type: "blue", size: "sm", children: _ }, _)) }),
        /* @__PURE__ */ M.jsx(
          He,
          {
            kind: "tertiary",
            size: "sm",
            renderIcon: jS,
            className: "catalog-card-deploy",
            onClick: (_) => {
              _.stopPropagation(), g(x.name);
            },
            children: "Deploy"
          }
        ),
        /* @__PURE__ */ M.jsx(
          He,
          {
            kind: "ghost",
            size: "sm",
            renderIcon: C ? Rf : ao,
            className: "catalog-card-expand",
            onClick: () => w(x.name),
            children: C ? "Hide details" : "View details"
          }
        ),
        C && /* @__PURE__ */ M.jsx("div", { className: "catalog-card-details", children: A ? A.services.map((_) => /* @__PURE__ */ M.jsxs("div", { className: "catalog-system", children: [
          /* @__PURE__ */ M.jsx("strong", { className: "catalog-system-name", children: _.name }),
          /* @__PURE__ */ M.jsxs("ul", { className: "catalog-system-files", children: [
            /* @__PURE__ */ M.jsxs("li", { children: [
              "Routes: ",
              /* @__PURE__ */ M.jsx("code", { children: _.routesFile })
            ] }),
            /* @__PURE__ */ M.jsxs("li", { children: [
              "Rules: ",
              /* @__PURE__ */ M.jsx("code", { children: _.rulesFile })
            ] }),
            _.dependenciesFile && /* @__PURE__ */ M.jsxs("li", { children: [
              "Dependencies: ",
              /* @__PURE__ */ M.jsx("code", { children: _.dependenciesFile })
            ] })
          ] })
        ] }, _.name)) : /* @__PURE__ */ M.jsx("p", { className: "catalog-loading", children: "Loading system details..." }) })
      ] }) }, x.id || `catalog-${N}`);
    }) }),
    f && /* @__PURE__ */ M.jsx(
      $l,
      {
        open: !0,
        modalHeading: "Delete Service Catalog",
        primaryButtonText: "Delete",
        secondaryButtonText: "Cancel",
        danger: !0,
        onRequestClose: () => p(null),
        onRequestSubmit: () => {
          o(f), p(null);
        },
        children: /* @__PURE__ */ M.jsxs("p", { children: [
          "Are you sure you want to delete the service catalog ",
          /* @__PURE__ */ M.jsx("strong", { children: f }),
          "? This action cannot be undone."
        ] })
      }
    ),
    m && /* @__PURE__ */ M.jsx(
      s3,
      {
        catalogName: m,
        onClose: () => g(null)
      }
    )
  ] });
}, ra = "/api/v1/service-template", yv = () => {
  const a = v.useCallback(
    (m, g) => {
      const h = new URLSearchParams();
      m && h.append("search", m);
      const b = h.toString(), E = b ? `${ra}/list?${b}` : `${ra}/list`;
      return gt(E, {
        ...g,
        method: "GET"
      });
    },
    []
  ), o = v.useCallback(
    (m, g) => {
      const h = new URLSearchParams({ name: m });
      return gt(
        `${ra}/get?${h.toString()}`,
        {
          ...g,
          method: "GET"
        }
      );
    },
    []
  ), r = v.useCallback(
    (m, g) => {
      const h = new URLSearchParams({ name: m });
      return gt(
        `${ra}/properties?${h.toString()}`,
        {
          ...g,
          method: "GET"
        }
      );
    },
    []
  ), i = v.useCallback(
    (m, g) => gt(
      `${ra}/deploy`,
      {
        ...g,
        method: "POST",
        headers: { "Content-Type": "application/json", ...g == null ? void 0 : g.headers },
        body: JSON.stringify(m)
      }
    ),
    []
  ), f = v.useCallback(
    (m, g, h, b, E) => gt(
      `${ra}/instantiate`,
      {
        ...E,
        method: "POST",
        headers: { "Content-Type": "application/json", ...E == null ? void 0 : E.headers },
        body: JSON.stringify({ templateName: m, properties: g, serviceName: h || void 0, serviceSystem: b || void 0 })
      }
    ),
    []
  ), p = v.useCallback(
    (m, g) => {
      const h = new URLSearchParams({ name: m });
      return gt(
        `${ra}/remove?${h.toString()}`,
        {
          ...g,
          method: "DELETE"
        }
      );
    },
    []
  );
  return {
    listServiceTemplates: a,
    getServiceTemplate: o,
    getTemplateProperties: r,
    deployServiceTemplate: i,
    instantiateTemplate: f,
    removeServiceTemplate: p
  };
}, f3 = ({
  templateName: a,
  onClose: o,
  onSuccess: r
}) => {
  const [i, f] = v.useState({}), [p, m] = v.useState({}), [g, h] = v.useState(""), [b, E] = v.useState(""), [S, w] = v.useState(!0), [x, N] = v.useState(!1), [C, A] = v.useState(null), { getTemplateProperties: $, instantiateTemplate: _ } = yv();
  v.useEffect(() => {
    (async () => {
      try {
        const I = (await $(a)).data.data || {};
        f(I);
        const F = {};
        Object.values(I).forEach((Z) => {
          Object.entries(Z).forEach(([he, ae]) => {
            F[he] = ae || "";
          });
        }), m(F), w(!1);
      } catch (L) {
        console.error("Error fetching template properties:", L), A("Failed to load template properties"), w(!1);
      }
    })();
  }, [a, $]);
  const z = async () => {
    N(!0), A(null);
    try {
      await _(a, p, g, b), r();
    } catch (H) {
      console.error("Error instantiating template:", H), A("Failed to create service catalog from template"), N(!1);
    }
  }, D = Object.keys(i).length > 0 && Object.values(i).some((H) => Object.keys(H).length > 0);
  return /* @__PURE__ */ M.jsxs(td, { open: !0, onClose: o, size: "md", children: [
    /* @__PURE__ */ M.jsx(Sc, { title: `Create Service Catalog from Template: ${a}` }),
    /* @__PURE__ */ M.jsx(ed, { children: S ? /* @__PURE__ */ M.jsx(Rr, { description: "Loading template properties..." }) : C ? /* @__PURE__ */ M.jsx(
      bd,
      {
        kind: "error",
        title: "Error",
        subtitle: C,
        hideCloseButton: !0
      }
    ) : /* @__PURE__ */ M.jsxs("div", { className: "template-wizard-form", children: [
      /* @__PURE__ */ M.jsx("p", { className: "template-wizard-description", children: "Fill in the configuration parameters below to create a new service catalog." }),
      /* @__PURE__ */ M.jsx(
        qt,
        {
          id: "service-name",
          labelText: "Service name",
          placeholder: "Leave empty to use template default",
          value: g,
          onChange: (H) => h(H.target.value),
          helperText: "Optional: override the catalog name from the template"
        }
      ),
      /* @__PURE__ */ M.jsx(
        qt,
        {
          id: "service-system",
          labelText: "System identifier",
          placeholder: "Leave empty to use template default",
          value: b,
          onChange: (H) => E(H.target.value),
          helperText: "Optional: override the system identifier from the template"
        }
      ),
      D && Object.entries(i).map(([H, L]) => /* @__PURE__ */ M.jsxs("div", { className: "template-wizard-system", children: [
        /* @__PURE__ */ M.jsxs(uc, { className: "template-wizard-system-label", children: [
          "System: ",
          /* @__PURE__ */ M.jsx("strong", { children: H })
        ] }),
        Object.entries(L).map(([j, I]) => /* @__PURE__ */ M.jsx(
          qt,
          {
            id: `prop-${H}-${j}`,
            labelText: j,
            placeholder: `Enter ${j}`,
            value: p[j] || "",
            onChange: (F) => m((Z) => ({ ...Z, [j]: F.target.value })),
            helperText: I ? `Current: ${I}` : void 0
          },
          j
        ))
      ] }, H))
    ] }) }),
    /* @__PURE__ */ M.jsxs(wr, { children: [
      /* @__PURE__ */ M.jsx(He, { kind: "secondary", onClick: o, disabled: x, children: "Cancel" }),
      /* @__PURE__ */ M.jsx(
        He,
        {
          kind: "primary",
          onClick: z,
          disabled: S || x,
          children: x ? "Creating..." : "Create"
        }
      )
    ] })
  ] });
}, d3 = ({
  templates: a,
  onSearch: o,
  onInstantiateSuccess: r
}) => {
  const [i, f] = v.useState(null), [p, m] = v.useState(null), g = (h) => {
    m(p === h ? null : h);
  };
  return /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
    /* @__PURE__ */ M.jsx("div", { className: "catalog-search", children: /* @__PURE__ */ M.jsx(
      Or,
      {
        labelText: "Search service templates",
        placeholder: "Search service templates...",
        onChange: (h) => o(h.target.value),
        size: "lg"
      }
    ) }),
    a.length === 0 ? /* @__PURE__ */ M.jsxs(jl, { className: "catalog-empty-tile", children: [
      /* @__PURE__ */ M.jsx("p", { children: "No service templates found." }),
      /* @__PURE__ */ M.jsx("p", { className: "catalog-empty-hint", children: "Use the CLI to deploy a service template:" }),
      /* @__PURE__ */ M.jsx("code", { className: "catalog-empty-code", children: "wanaku service init --name=mytemplate --services=system1 --template" })
    ] }) : /* @__PURE__ */ M.jsx(pd, { className: "catalog-grid", children: a.map((h, b) => {
      var S;
      const E = p === h.name;
      return /* @__PURE__ */ M.jsx(_c, { lg: 4, md: 4, sm: 4, children: /* @__PURE__ */ M.jsxs(jl, { className: `catalog-card ${E ? "catalog-card--expanded" : ""}`, children: [
        /* @__PURE__ */ M.jsx("div", { className: "catalog-card-header", children: /* @__PURE__ */ M.jsxs("div", { className: "catalog-card-title-row", children: [
          h.icon && /* @__PURE__ */ M.jsx("span", { className: "catalog-card-icon", children: h.icon }),
          /* @__PURE__ */ M.jsx("h4", { className: "catalog-card-name", children: h.name })
        ] }) }),
        /* @__PURE__ */ M.jsx("p", { className: "catalog-card-description", children: h.description }),
        /* @__PURE__ */ M.jsxs("div", { className: "catalog-card-tags", children: [
          (S = h.services) == null ? void 0 : S.map((w) => /* @__PURE__ */ M.jsx(mc, { type: "purple", size: "sm", children: w }, w)),
          h.hasProperties && /* @__PURE__ */ M.jsx(mc, { type: "green", size: "sm", children: "Parameterized" })
        ] }),
        /* @__PURE__ */ M.jsxs("div", { className: "catalog-card-actions", children: [
          /* @__PURE__ */ M.jsx(
            He,
            {
              kind: "primary",
              size: "sm",
              renderIcon: OS,
              className: "catalog-card-instantiate",
              onClick: () => f(h.name),
              children: "Create Service Catalog"
            }
          ),
          /* @__PURE__ */ M.jsx(
            He,
            {
              kind: "ghost",
              size: "sm",
              renderIcon: E ? Rf : ao,
              className: "catalog-card-expand",
              onClick: () => g(h.name),
              children: E ? "Hide details" : "View details"
            }
          )
        ] }),
        E && /* @__PURE__ */ M.jsx("div", { className: "catalog-card-details", children: /* @__PURE__ */ M.jsxs("div", { className: "catalog-system", children: [
          /* @__PURE__ */ M.jsx("strong", { className: "catalog-system-name", children: "Template Info" }),
          /* @__PURE__ */ M.jsxs("ul", { className: "catalog-system-files", children: [
            /* @__PURE__ */ M.jsxs("li", { children: [
              "Systems: ",
              h.services.join(", ")
            ] }),
            /* @__PURE__ */ M.jsxs("li", { children: [
              "Has Properties: ",
              h.hasProperties ? "Yes" : "No"
            ] })
          ] })
        ] }) })
      ] }) }, h.id || `template-${b}`);
    }) }),
    i && /* @__PURE__ */ M.jsx(
      f3,
      {
        templateName: i,
        onClose: () => f(null),
        onSuccess: () => {
          r(i), f(null);
        }
      }
    )
  ] });
}, m3 = () => {
  const a = v.useCallback(
    (m) => FC(m),
    []
  ), o = v.useCallback(
    (m, g) => WC(m, g),
    []
  ), r = v.useCallback(
    (m, g, h) => e3(m, g, h),
    []
  ), i = v.useCallback(
    (m, g) => n3(m, g),
    []
  ), f = v.useCallback(
    (m, g) => a3(m, g),
    []
  ), p = v.useCallback(
    (m, g, h) => r3(m, g, h),
    []
  );
  return {
    listRepos: a,
    addRepo: o,
    updateRepo: r,
    removeRepo: i,
    browseRepo: f,
    fetchToolset: p
  };
}, p3 = ({ onError: a, onSuccess: o }) => {
  const [r, i] = v.useState([]), [f, p] = v.useState(!0), [m, g] = v.useState(!1), [h, b] = v.useState(null), [E, S] = v.useState(null), [w, x] = v.useState(null), [N, C] = v.useState(null), [A, $] = v.useState(null), [_, z] = v.useState([]), [D, H] = v.useState([]), [L, j] = v.useState(!1), [I, F] = v.useState(""), [Z, he] = v.useState(""), [ae, se] = v.useState("main"), [ne, ge] = v.useState(""), [R, J] = v.useState(""), [W, le] = v.useState(""), [pe, O] = v.useState(""), { listRepos: q, addRepo: P, updateRepo: G, removeRepo: te, browseRepo: V, fetchToolset: Q } = m3(), me = v.useCallback(async () => {
    try {
      const fe = await q();
      i(fe.data.data || []), p(!1);
    } catch {
      a("Failed to load toolset repositories"), p(!1);
    }
  }, [q, a]);
  v.useEffect(() => {
    me();
  }, [me]);
  const ie = async () => {
    try {
      const fe = {
        name: I,
        url: Z
      };
      ae && (fe.branch = ae), ne && (fe.description = ne), await P(fe), o(`Toolset repository '${I}' added`), g(!1), F(""), he(""), se("main"), ge(""), me();
    } catch {
      a("Failed to add toolset repository");
    }
  }, ve = async () => {
    if (h)
      try {
        const fe = {
          url: R
        };
        W && (fe.branch = W), pe && (fe.description = pe), await G(h.name, fe), o(`Toolset repository '${h.name}' updated`), b(null), J(""), le(""), O(""), me();
      } catch {
        a("Failed to update toolset repository");
      }
  }, Ne = async (fe) => {
    try {
      await te(fe), o(`Toolset repository '${fe}' removed`), S(null), me();
    } catch {
      a(`Failed to remove repository '${fe}'`);
    }
  }, Te = async (fe) => {
    j(!0), x(fe);
    try {
      const Ye = await V(fe);
      C(Ye.data.data ?? null);
    } catch {
      a(`Failed to browse repository '${fe}'`), x(null);
    } finally {
      j(!1);
    }
  }, Oe = async (fe, Ye) => {
    try {
      const je = (await Q(fe, Ye)).data.data || [];
      $(Ye), z(je), H(je.filter((We) => We.name).map((We) => We.name));
    } catch {
      a(`Failed to fetch toolset '${Ye}'`);
    }
  }, Ee = async () => {
    a("Tool import is now managed by Praxis"), $(null), z([]), H([]);
  };
  if (f)
    return /* @__PURE__ */ M.jsx("div", { children: "Loading..." });
  const Ue = [
    { key: "name", header: "Name" },
    { key: "description", header: "Description" },
    { key: "type", header: "Type" },
    { key: "uri", header: "URI" }
  ], Se = _.map((fe, Ye) => ({
    id: fe.name || `tool-${Ye}`,
    name: fe.name || "",
    description: fe.description || "",
    type: fe.type || "",
    uri: fe.uri || ""
  }));
  return /* @__PURE__ */ M.jsxs(M.Fragment, { children: [
    /* @__PURE__ */ M.jsx("div", { style: { display: "flex", justifyContent: "flex-end", marginBottom: "1rem" }, children: /* @__PURE__ */ M.jsx(He, { renderIcon: H0, size: "sm", onClick: () => g(!0), children: "Add Repository" }) }),
    r.length === 0 ? /* @__PURE__ */ M.jsxs(jl, { className: "catalog-empty-tile", children: [
      /* @__PURE__ */ M.jsx("p", { children: "No toolset repositories registered." }),
      /* @__PURE__ */ M.jsx("p", { className: "catalog-empty-hint", children: "Add a remote toolset repository to browse and import tools." })
    ] }) : /* @__PURE__ */ M.jsx(pd, { className: "catalog-grid", children: r.map((fe, Ye) => /* @__PURE__ */ M.jsx(_c, { lg: 4, md: 4, sm: 4, children: /* @__PURE__ */ M.jsxs(jl, { className: "catalog-card", children: [
      /* @__PURE__ */ M.jsxs("div", { className: "catalog-card-header", children: [
        /* @__PURE__ */ M.jsxs("div", { className: "catalog-card-title-row", children: [
          fe.icon && /* @__PURE__ */ M.jsx("span", { className: "catalog-card-icon", children: fe.icon }),
          /* @__PURE__ */ M.jsx("h4", { className: "catalog-card-name", children: fe.name })
        ] }),
        /* @__PURE__ */ M.jsxs("div", { style: { display: "flex", gap: "0.25rem" }, children: [
          /* @__PURE__ */ M.jsx(
            He,
            {
              kind: "ghost",
              size: "sm",
              renderIcon: MS,
              hasIconOnly: !0,
              iconDescription: "Edit",
              onClick: (ze) => {
                ze.stopPropagation(), b(fe), J(fe.url), le(fe.branch || "main"), O(fe.description || "");
              }
            }
          ),
          /* @__PURE__ */ M.jsx(
            He,
            {
              kind: "ghost",
              size: "sm",
              renderIcon: Of,
              hasIconOnly: !0,
              iconDescription: "Delete",
              className: "catalog-card-delete",
              onClick: (ze) => {
                ze.stopPropagation(), S(fe.name);
              }
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ M.jsxs("p", { className: "catalog-card-description", children: [
        fe.description || fe.url,
        fe.branch && /* @__PURE__ */ M.jsxs("span", { style: { marginLeft: "0.5rem", fontSize: "0.75rem", opacity: 0.7 }, children: [
          "(",
          fe.branch,
          ")"
        ] })
      ] }),
      /* @__PURE__ */ M.jsx(
        He,
        {
          kind: "ghost",
          size: "sm",
          renderIcon: w === fe.name ? Rf : ao,
          className: "catalog-card-expand",
          onClick: () => {
            w === fe.name ? (x(null), C(null)) : Te(fe.name);
          },
          children: w === fe.name ? "Hide toolsets" : "Browse toolsets"
        }
      ),
      w === fe.name && /* @__PURE__ */ M.jsx("div", { className: "catalog-card-details", children: L ? /* @__PURE__ */ M.jsx("p", { className: "catalog-loading", children: "Loading toolsets..." }) : N ? N.toolsets.map((ze) => /* @__PURE__ */ M.jsx("div", { className: "catalog-system", style: { marginBottom: "0.5rem" }, children: /* @__PURE__ */ M.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ M.jsxs("div", { children: [
          ze.icon && /* @__PURE__ */ M.jsx("span", { style: { marginRight: "0.25rem" }, children: ze.icon }),
          /* @__PURE__ */ M.jsx("strong", { className: "catalog-system-name", children: ze.name }),
          ze.description && /* @__PURE__ */ M.jsx("span", { style: { marginLeft: "0.5rem", fontSize: "0.8125rem", color: "var(--cds-text-secondary, #525252)" }, children: ze.description })
        ] }),
        /* @__PURE__ */ M.jsx(
          He,
          {
            kind: "ghost",
            size: "sm",
            onClick: () => Oe(fe.name, ze.name),
            children: "Import"
          }
        )
      ] }) }, ze.name)) : null })
    ] }) }, fe.name || `repo-${Ye}`)) }),
    m && /* @__PURE__ */ M.jsxs(
      $l,
      {
        open: !0,
        modalHeading: "Add Toolset Repository",
        primaryButtonText: "Add",
        primaryButtonDisabled: !I || !Z,
        secondaryButtonText: "Cancel",
        onRequestSubmit: ie,
        onRequestClose: () => g(!1),
        children: [
          /* @__PURE__ */ M.jsx(
            qt,
            {
              id: "repo-name",
              labelText: "Name",
              placeholder: "e.g. wanaku-toolsets",
              required: !0,
              value: I,
              onChange: (fe) => F(fe.target.value),
              style: { marginBottom: "1rem" }
            }
          ),
          /* @__PURE__ */ M.jsx(
            qt,
            {
              id: "repo-url",
              labelText: "GitHub URL",
              placeholder: "e.g. https://github.com/wanaku-ai/wanaku-toolsets",
              required: !0,
              value: Z,
              onChange: (fe) => he(fe.target.value),
              style: { marginBottom: "1rem" }
            }
          ),
          /* @__PURE__ */ M.jsx(
            qt,
            {
              id: "repo-branch",
              labelText: "Branch",
              placeholder: "main",
              value: ae,
              onChange: (fe) => se(fe.target.value),
              style: { marginBottom: "1rem" }
            }
          ),
          /* @__PURE__ */ M.jsx(
            qt,
            {
              id: "repo-description",
              labelText: "Description (optional)",
              placeholder: "Short description of the repository",
              value: ne,
              onChange: (fe) => ge(fe.target.value)
            }
          )
        ]
      }
    ),
    h && /* @__PURE__ */ M.jsxs(
      $l,
      {
        open: !0,
        modalHeading: "Edit Toolset Repository",
        primaryButtonText: "Save",
        primaryButtonDisabled: !R,
        secondaryButtonText: "Cancel",
        onRequestSubmit: ve,
        onRequestClose: () => {
          b(null), J(""), le(""), O("");
        },
        children: [
          /* @__PURE__ */ M.jsx(
            qt,
            {
              id: "edit-repo-name",
              labelText: "Name",
              value: h.name,
              disabled: !0,
              style: { marginBottom: "1rem" }
            }
          ),
          /* @__PURE__ */ M.jsx(
            qt,
            {
              id: "edit-repo-url",
              labelText: "GitHub URL",
              placeholder: "e.g. https://github.com/wanaku-ai/wanaku-toolsets",
              required: !0,
              value: R,
              onChange: (fe) => J(fe.target.value),
              style: { marginBottom: "1rem" }
            }
          ),
          /* @__PURE__ */ M.jsx(
            qt,
            {
              id: "edit-repo-branch",
              labelText: "Branch",
              placeholder: "main",
              value: W,
              onChange: (fe) => le(fe.target.value),
              style: { marginBottom: "1rem" }
            }
          ),
          /* @__PURE__ */ M.jsx(
            qt,
            {
              id: "edit-repo-description",
              labelText: "Description (optional)",
              placeholder: "Short description of the repository",
              value: pe,
              onChange: (fe) => O(fe.target.value)
            }
          )
        ]
      }
    ),
    E && /* @__PURE__ */ M.jsx(
      $l,
      {
        open: !0,
        modalHeading: "Delete Toolset Repository",
        primaryButtonText: "Delete",
        secondaryButtonText: "Cancel",
        danger: !0,
        onRequestClose: () => S(null),
        onRequestSubmit: () => Ne(E),
        children: /* @__PURE__ */ M.jsxs("p", { children: [
          "Are you sure you want to remove the repository",
          " ",
          /* @__PURE__ */ M.jsx("strong", { children: E }),
          "? This will not remove any previously imported tools."
        ] })
      }
    ),
    A && _.length > 0 && /* @__PURE__ */ M.jsx(
      $l,
      {
        open: !0,
        modalHeading: `Import tools from "${A}"`,
        primaryButtonText: `Import ${D.length} tool(s)`,
        primaryButtonDisabled: D.length === 0,
        secondaryButtonText: "Cancel",
        size: "lg",
        onRequestSubmit: Ee,
        onRequestClose: () => {
          $(null), z([]), H([]);
        },
        children: /* @__PURE__ */ M.jsx(ut, { rows: Se, headers: Ue, children: ({ rows: fe, headers: Ye, getHeaderProps: ze, getRowProps: je, getSelectionProps: We, getTableProps: _e }) => /* @__PURE__ */ M.jsxs(Cc, { ..._e(), children: [
          /* @__PURE__ */ M.jsx(od, { children: /* @__PURE__ */ M.jsxs(sa, { children: [
            /* @__PURE__ */ M.jsx(
              id,
              {
                ...We(),
                checked: D.length === _.length,
                indeterminate: D.length > 0 && D.length < _.length,
                onSelect: () => {
                  D.length === _.length ? H([]) : H(_.filter((ke) => ke.name).map((ke) => ke.name));
                }
              }
            ),
            Ye.map((ke) => /* @__PURE__ */ v.createElement(Dr, { ...ze({ header: ke }), key: ke.key }, ke.header))
          ] }) }),
          /* @__PURE__ */ M.jsx(Nc, { children: fe.map((ke) => /* @__PURE__ */ v.createElement(sa, { ...je({ row: ke }), key: ke.id }, /* @__PURE__ */ M.jsx(
            cd,
            {
              ...We({ row: ke }),
              checked: D.includes(ke.id),
              onSelect: () => {
                H(
                  (Xe) => Xe.includes(ke.id) ? Xe.filter((yn) => yn !== ke.id) : [...Xe, ke.id]
                );
              }
            }
          ), ke.cells.map((Xe) => /* @__PURE__ */ M.jsx(Mn, { children: Xe.value }, Xe.id)))) })
        ] }) })
      }
    )
  ] });
}, h3 = () => {
  const [a, o] = v.useState([]), [r, i] = v.useState([]), [f, p] = v.useState(!0), [m, g] = v.useState(!0), [h, b] = v.useState(null), [E, S] = v.useState(null), { listServiceCatalogs: w, getServiceCatalog: x, removeServiceCatalog: N } = bv(), { listServiceTemplates: C } = yv(), A = v.useCallback(
    async (j) => {
      try {
        const F = (await w(j)).data;
        o(F.data || []), p(!1);
      } catch {
        b("Failed to load service catalogs"), p(!1);
      }
    },
    [w]
  ), $ = v.useCallback(
    async (j) => {
      try {
        const F = (await C(j)).data;
        i(F.data || []), g(!1);
      } catch {
        b("Failed to load service templates"), g(!1);
      }
    },
    [C]
  );
  v.useEffect(() => {
    A(), $();
  }, [A, $]), v.useEffect(() => {
    if (h) {
      const j = setTimeout(() => b(null), 1e4);
      return () => clearTimeout(j);
    }
  }, [h]), v.useEffect(() => {
    if (E) {
      const j = setTimeout(() => S(null), 5e3);
      return () => clearTimeout(j);
    }
  }, [E]);
  const _ = async (j) => {
    try {
      await N(j), S(`Service catalog '${j}' deleted successfully`), A();
    } catch {
      b(`Failed to delete service catalog '${j}'`);
    }
  }, z = (j) => {
    A(j || void 0);
  }, D = (j) => {
    $(j || void 0);
  }, H = async (j) => {
    try {
      return (await x(j)).data.data;
    } catch (I) {
      return console.error("Error fetching catalog detail:", I), null;
    }
  }, L = (j) => {
    S(`Service catalog created successfully from template '${j}'`), A();
  };
  return /* @__PURE__ */ M.jsxs("div", { className: "service-catalog-page", children: [
    h && /* @__PURE__ */ M.jsx(
      dc,
      {
        kind: "error",
        title: "Error",
        subtitle: h,
        onCloseButtonClick: () => b(null),
        timeout: 1e4,
        style: { float: "right" }
      }
    ),
    E && /* @__PURE__ */ M.jsx(
      dc,
      {
        kind: "success",
        title: "Success",
        subtitle: E,
        onCloseButtonClick: () => S(null),
        timeout: 5e3,
        style: { float: "right" }
      }
    ),
    /* @__PURE__ */ M.jsx("h1", { className: "title", children: "Service Catalog" }),
    /* @__PURE__ */ M.jsx("p", { className: "description", children: "View and manage deployed service catalogs, service templates, and remote toolset repositories." }),
    /* @__PURE__ */ M.jsxs(sv, { children: [
      /* @__PURE__ */ M.jsxs(uv, { "aria-label": "Service catalog tabs", children: [
        /* @__PURE__ */ M.jsx(lo, { children: "Service Catalogs" }),
        /* @__PURE__ */ M.jsx(lo, { children: "Service Templates" }),
        /* @__PURE__ */ M.jsx(lo, { children: "Toolset Repositories" })
      ] }),
      /* @__PURE__ */ M.jsxs(dv, { children: [
        /* @__PURE__ */ M.jsx(ec, { children: f ? /* @__PURE__ */ M.jsx("div", { children: "Loading..." }) : /* @__PURE__ */ M.jsx(
          u3,
          {
            catalogs: a,
            onDelete: _,
            onSearch: z,
            getDetail: H
          }
        ) }),
        /* @__PURE__ */ M.jsx(ec, { children: m ? /* @__PURE__ */ M.jsx("div", { children: "Loading..." }) : /* @__PURE__ */ M.jsx(
          d3,
          {
            templates: r,
            onSearch: D,
            onInstantiateSuccess: L
          }
        ) }),
        /* @__PURE__ */ M.jsx(ec, { children: /* @__PURE__ */ M.jsx(
          p3,
          {
            onError: (j) => b(j),
            onSuccess: (j) => S(j)
          }
        ) })
      ] })
    ] })
  ] });
}, eo = [], br = [];
function M0(a, o) {
  a.classList.add("wanaku-classic-plugin");
  const r = UE.createRoot(a);
  return br.push(r), r.render(
    /* @__PURE__ */ M.jsx(v.StrictMode, { children: /* @__PURE__ */ M.jsx(o, {}) })
  ), {
    dispose() {
      r.unmount();
      const i = br.indexOf(r);
      i >= 0 && br.splice(i, 1);
    }
  };
}
async function b3(a) {
  qE(a), eo.push(
    a.navigation.add({
      id: "wanaku-data-stores",
      label: "Data Stores",
      route: "/wanaku/data-stores",
      order: 100
    })
  ), eo.push(
    a.navigation.add({
      id: "wanaku-service-catalog",
      label: "Service Catalog",
      route: "/wanaku/service-catalog",
      order: 110
    })
  ), eo.push(
    a.pages.register({
      route: "/wanaku/data-stores",
      mount: (o) => M0(o, c3)
    })
  ), eo.push(
    a.pages.register({
      route: "/wanaku/service-catalog",
      mount: (o) => M0(o, h3)
    })
  );
}
function y3() {
  for (const a of eo)
    a.dispose();
  eo.length = 0;
  for (const a of br)
    a.unmount();
  br.length = 0, kE();
}
export {
  b3 as activate,
  y3 as deactivate
};

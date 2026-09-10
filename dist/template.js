function Pe(fe) {
  return fe && fe.__esModule && Object.prototype.hasOwnProperty.call(fe, "default") ? fe.default : fe;
}
var we = { exports: {} };
var Ie = we.exports, Le;
function Ke() {
  return Le || (Le = 1, (function(fe, Oe) {
    (function(j, N) {
      fe.exports = N();
    })(typeof self < "u" ? self : Ie, function() {
      return (
        /******/
        (function(U) {
          var j = {};
          function N(_) {
            if (j[_])
              return j[_].exports;
            var x = j[_] = {
              /******/
              i: _,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return U[_].call(x.exports, x, x.exports, N), x.l = !0, x.exports;
          }
          return N.m = U, N.c = j, N.d = function(_, x, v) {
            N.o(_, x) || Object.defineProperty(_, x, {
              /******/
              configurable: !1,
              /******/
              enumerable: !0,
              /******/
              get: v
              /******/
            });
          }, N.n = function(_) {
            var x = _ && _.__esModule ? (
              /******/
              function() {
                return _.default;
              }
            ) : (
              /******/
              function() {
                return _;
              }
            );
            return N.d(x, "a", x), x;
          }, N.o = function(_, x) {
            return Object.prototype.hasOwnProperty.call(_, x);
          }, N.p = "", N(N.s = 11);
        })([
          /* 0 */
          /***/
          (function(U, y, N) {
            var _ = Array.prototype, x = Object.prototype, v = {
              "&": "&amp;",
              '"': "&quot;",
              "'": "&#39;",
              "<": "&lt;",
              ">": "&gt;",
              "\\": "&#92;"
            }, E = /[&"'<>\\]/g, y = U.exports = {};
            function O(f, w) {
              return x.hasOwnProperty.call(f, w);
            }
            y.hasOwnProp = O;
            function P(f) {
              return v[f];
            }
            function I(f, w, F) {
              if (F.Update || (F = new y.TemplateError(F)), F.Update(f), !w) {
                var B = F;
                F = new Error(B.message), F.name = B.name;
              }
              return F;
            }
            y._prettifyError = I;
            function C(f, w, F) {
              var B, V;
              f instanceof Error && (V = f, f = V.name + ": " + V.message), Object.setPrototypeOf ? (B = new Error(f), Object.setPrototypeOf(B, C.prototype)) : (B = this, Object.defineProperty(B, "message", {
                enumerable: !1,
                writable: !0,
                value: f
              })), Object.defineProperty(B, "name", {
                value: "Template render error"
              }), Error.captureStackTrace && Error.captureStackTrace(B, this.constructor);
              var Z;
              if (V) {
                var $ = Object.getOwnPropertyDescriptor(V, "stack");
                Z = $ && ($.get || function() {
                  return $.value;
                }), Z || (Z = function() {
                  return V.stack;
                });
              } else {
                var se = new Error(f).stack;
                Z = function() {
                  return se;
                };
              }
              return Object.defineProperty(B, "stack", {
                get: function() {
                  return Z.call(B);
                }
              }), Object.defineProperty(B, "cause", {
                value: V
              }), B.lineno = w, B.colno = F, B.firstUpdate = !0, B.Update = function(X) {
                var Q = "(" + (X || "unknown path") + ")";
                return this.firstUpdate && (this.lineno && this.colno ? Q += " [Line " + this.lineno + ", Column " + this.colno + "]" : this.lineno && (Q += " [Line " + this.lineno + "]")), Q += `
 `, this.firstUpdate && (Q += " "), this.message = Q + (this.message || ""), this.firstUpdate = !1, this;
              }, B;
            }
            Object.setPrototypeOf ? Object.setPrototypeOf(C.prototype, Error.prototype) : C.prototype = Object.create(Error.prototype, {
              constructor: {
                value: C
              }
            }), y.TemplateError = C;
            function g(f) {
              return f.replace(E, P);
            }
            y.escape = g;
            function L(f) {
              return x.toString.call(f) === "[object Function]";
            }
            y.isFunction = L;
            function e(f) {
              return x.toString.call(f) === "[object Array]";
            }
            y.isArray = e;
            function n(f) {
              return x.toString.call(f) === "[object String]";
            }
            y.isString = n;
            function i(f) {
              return x.toString.call(f) === "[object Object]";
            }
            y.isObject = i;
            function p(f) {
              return f ? typeof f == "string" ? f.split(".") : [f] : [];
            }
            function l(f) {
              var w = p(f);
              return function(B) {
                for (var V = B, Z = 0; Z < w.length; Z++) {
                  var $ = w[Z];
                  if (O(V, $))
                    V = V[$];
                  else
                    return;
                }
                return V;
              };
            }
            y.getAttrGetter = l;
            function h(f, w, F) {
              for (var B = {}, V = L(w) ? w : l(w), Z = 0; Z < f.length; Z++) {
                var $ = f[Z], se = V($, Z);
                if (se === void 0 && F === !0)
                  throw new TypeError('groupby: attribute "' + w + '" resolved to undefined');
                (B[se] || (B[se] = [])).push($);
              }
              return B;
            }
            y.groupBy = h;
            function t(f) {
              return Array.prototype.slice.call(f);
            }
            y.toArray = t;
            function r(f) {
              var w = [];
              if (!f)
                return w;
              for (var F = f.length, B = t(arguments).slice(1), V = -1; ++V < F; )
                k(B, f[V]) === -1 && w.push(f[V]);
              return w;
            }
            y.without = r;
            function a(f, w) {
              for (var F = "", B = 0; B < w; B++)
                F += f;
              return F;
            }
            y.repeat = a;
            function o(f, w, F) {
              if (f != null) {
                if (_.forEach && f.forEach === _.forEach)
                  f.forEach(w, F);
                else if (f.length === +f.length)
                  for (var B = 0, V = f.length; B < V; B++)
                    w.call(F, f[B], B, f);
              }
            }
            y.each = o;
            function s(f, w) {
              var F = [];
              if (f == null)
                return F;
              if (_.map && f.map === _.map)
                return f.map(w);
              for (var B = 0; B < f.length; B++)
                F[F.length] = w(f[B], B);
              return f.length === +f.length && (F.length = f.length), F;
            }
            y.map = s;
            function c(f, w, F) {
              var B = -1;
              function V() {
                B++, B < f.length ? w(f[B], B, V, F) : F();
              }
              V();
            }
            y.asyncIter = c;
            function u(f, w, F) {
              var B = T(f || {}), V = B.length, Z = -1;
              function $() {
                Z++;
                var se = B[Z];
                Z < V ? w(se, f[se], Z, V, $) : F();
              }
              $();
            }
            y.asyncFor = u;
            function k(f, w, F) {
              return Array.prototype.indexOf.call(f || [], w, F);
            }
            y.indexOf = k;
            function T(f) {
              var w = [];
              for (var F in f)
                O(f, F) && w.push(F);
              return w;
            }
            y.keys = T;
            function b(f) {
              return T(f).map(function(w) {
                return [w, f[w]];
              });
            }
            y._entries = b;
            function A(f) {
              return T(f).map(function(w) {
                return f[w];
              });
            }
            y._values = A;
            function R(f, w) {
              return f = f || {}, T(w).forEach(function(F) {
                f[F] = w[F];
              }), f;
            }
            y._assign = y.extend = R;
            function d(f, w) {
              if (e(w) || n(w))
                return w.indexOf(f) !== -1;
              if (i(w))
                return f in w;
              throw new Error('Cannot use "in" operator to search for "' + f + '" in unexpected types.');
            }
            y.inOperator = d;
          }),
          /* 1 */
          /***/
          (function(U, j, N) {
            function _(n, i) {
              for (var p = 0; p < i.length; p++) {
                var l = i[p];
                l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(n, v(l.key), l);
              }
            }
            function x(n, i, p) {
              return i && _(n.prototype, i), Object.defineProperty(n, "prototype", { writable: !1 }), n;
            }
            function v(n) {
              var i = E(n, "string");
              return typeof i == "symbol" ? i : String(i);
            }
            function E(n, i) {
              if (typeof n != "object" || n === null) return n;
              var p = n[Symbol.toPrimitive];
              if (p !== void 0) {
                var l = p.call(n, i);
                if (typeof l != "object") return l;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(n);
            }
            function y(n, i) {
              n.prototype = Object.create(i.prototype), n.prototype.constructor = n, O(n, i);
            }
            function O(n, i) {
              return O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, h) {
                return l.__proto__ = h, l;
              }, O(n, i);
            }
            var P = N(16), I = N(0);
            function C(n, i) {
              return typeof n != "function" || typeof i != "function" ? i : function() {
                var l = this.parent;
                this.parent = n;
                var h = i.apply(this, arguments);
                return this.parent = l, h;
              };
            }
            function g(n, i, p) {
              p = p || {}, I.keys(p).forEach(function(h) {
                p[h] = C(n.prototype[h], p[h]);
              });
              var l = /* @__PURE__ */ (function(h) {
                y(t, h);
                function t() {
                  return h.apply(this, arguments) || this;
                }
                return x(t, [{
                  key: "typename",
                  get: function() {
                    return i;
                  }
                }]), t;
              })(n);
              return I._assign(l.prototype, p), l;
            }
            var L = /* @__PURE__ */ (function() {
              function n() {
                this.init.apply(this, arguments);
              }
              var i = n.prototype;
              return i.init = function() {
              }, n.extend = function(l, h) {
                return typeof l == "object" && (h = l, l = "anonymous"), g(this, l, h);
              }, x(n, [{
                key: "typename",
                get: function() {
                  return this.constructor.name;
                }
              }]), n;
            })(), e = /* @__PURE__ */ (function(n) {
              y(i, n);
              function i() {
                var l, h;
                return h = n.call(this) || this, (l = h).init.apply(l, arguments), h;
              }
              var p = i.prototype;
              return p.init = function() {
              }, i.extend = function(h, t) {
                return typeof h == "object" && (t = h, h = "anonymous"), g(this, h, t);
              }, x(i, [{
                key: "typename",
                get: function() {
                  return this.constructor.name;
                }
              }]), i;
            })(P);
            U.exports = {
              Obj: L,
              EmitterObj: e
            };
          }),
          /* 2 */
          /***/
          (function(U, j, N) {
            var _ = N(0), x = Array.from, v = typeof Symbol == "function" && Symbol.iterator && typeof x == "function", E = /* @__PURE__ */ (function() {
              function s(u, k) {
                this.variables = /* @__PURE__ */ Object.create(null), this.parent = u, this.topLevel = !1, this.isolateWrites = k;
              }
              var c = s.prototype;
              return c.set = function(k, T, b) {
                var A = k.split("."), R = this.variables, d = this;
                if (b && (d = this.resolve(A[0], !0))) {
                  d.set(k, T);
                  return;
                }
                for (var f = 0; f < A.length - 1; f++) {
                  var w = A[f];
                  R[w] || (R[w] = {}), R = R[w];
                }
                R[A[A.length - 1]] = T;
              }, c.get = function(k) {
                var T = this.variables[k];
                return T !== void 0 ? T : null;
              }, c.lookup = function(k) {
                var T = this.parent, b = this.variables[k];
                return b !== void 0 ? b : T && T.lookup(k);
              }, c.resolve = function(k, T) {
                var b = T && this.isolateWrites ? void 0 : this.parent, A = this.variables[k];
                return A !== void 0 ? this : b && b.resolve(k);
              }, c.push = function(k) {
                return new s(this, k);
              }, c.pop = function() {
                return this.parent;
              }, s;
            })();
            function y(s, c, u) {
              return function() {
                for (var T = arguments.length, b = new Array(T), A = 0; A < T; A++)
                  b[A] = arguments[A];
                var R = C(b), d, f = I(b);
                if (R > s.length)
                  d = b.slice(0, s.length), b.slice(d.length, R).forEach(function(B, V) {
                    V < c.length && (f[c[V]] = B);
                  }), d.push(f);
                else if (R < s.length) {
                  d = b.slice(0, R);
                  for (var w = R; w < s.length; w++) {
                    var F = s[w];
                    d.push(f[F]), delete f[F];
                  }
                  d.push(f);
                } else
                  d = b;
                return u.apply(this, d);
              };
            }
            function O(s) {
              return s.__keywords = !0, s;
            }
            function P(s) {
              return s && Object.prototype.hasOwnProperty.call(s, "__keywords");
            }
            function I(s) {
              var c = s.length;
              if (c) {
                var u = s[c - 1];
                if (P(u))
                  return u;
              }
              return {};
            }
            function C(s) {
              var c = s.length;
              if (c === 0)
                return 0;
              var u = s[c - 1];
              return P(u) ? c - 1 : c;
            }
            function g(s) {
              if (typeof s != "string")
                return s;
              this.val = s, this.length = s.length;
            }
            g.prototype = Object.create(String.prototype, {
              length: {
                writable: !0,
                configurable: !0,
                value: 0
              }
            }), g.prototype.valueOf = function() {
              return this.val;
            }, g.prototype.toString = function() {
              return this.val;
            };
            function L(s, c) {
              return s instanceof g ? new g(c) : c.toString();
            }
            function e(s) {
              var c = typeof s;
              return c === "string" ? new g(s) : c !== "function" ? s : function(k) {
                var T = s.apply(this, arguments);
                return typeof T == "string" ? new g(T) : T;
              };
            }
            function n(s, c) {
              return s = s ?? "", c && !(s instanceof g) && (s = _.escape(s.toString())), s;
            }
            function i(s, c, u) {
              if (s == null)
                throw new _.TemplateError("attempted to output null or undefined value", c + 1, u + 1);
              return s;
            }
            function p(s, c) {
              if (s != null)
                return typeof s[c] == "function" ? function() {
                  for (var u = arguments.length, k = new Array(u), T = 0; T < u; T++)
                    k[T] = arguments[T];
                  return s[c].apply(s, k);
                } : s[c];
            }
            function l(s, c, u, k) {
              if (s) {
                if (typeof s != "function")
                  throw new Error("Unable to call `" + c + "`, which is not a function");
              } else throw new Error("Unable to call `" + c + "`, which is undefined or falsey");
              return s.apply(u, k);
            }
            function h(s, c, u) {
              var k = c.lookup(u);
              return k !== void 0 ? k : s.lookup(u);
            }
            function t(s, c, u) {
              return s.lineno ? s : new _.TemplateError(s, c, u);
            }
            function r(s, c, u, k) {
              if (_.isArray(s)) {
                var T = s.length;
                _.asyncIter(s, function(A, R, d) {
                  switch (c) {
                    case 1:
                      u(A, R, T, d);
                      break;
                    case 2:
                      u(A[0], A[1], R, T, d);
                      break;
                    case 3:
                      u(A[0], A[1], A[2], R, T, d);
                      break;
                    default:
                      A.push(R, T, d), u.apply(this, A);
                  }
                }, k);
              } else
                _.asyncFor(s, function(A, R, d, f, w) {
                  u(A, R, d, f, w);
                }, k);
            }
            function a(s, c, u, k) {
              var T = 0, b, A;
              function R(V, Z) {
                T++, A[V] = Z, T === b && k(null, A.join(""));
              }
              if (_.isArray(s))
                if (b = s.length, A = new Array(b), b === 0)
                  k(null, "");
                else
                  for (var d = 0; d < s.length; d++) {
                    var f = s[d];
                    switch (c) {
                      case 1:
                        u(f, d, b, R);
                        break;
                      case 2:
                        u(f[0], f[1], d, b, R);
                        break;
                      case 3:
                        u(f[0], f[1], f[2], d, b, R);
                        break;
                      default:
                        f.push(d, b, R), u.apply(this, f);
                    }
                  }
              else {
                var w = _.keys(s || {});
                if (b = w.length, A = new Array(b), b === 0)
                  k(null, "");
                else
                  for (var F = 0; F < w.length; F++) {
                    var B = w[F];
                    u(B, s[B], F, b, R);
                  }
              }
            }
            function o(s) {
              return typeof s != "object" || s === null || _.isArray(s) ? s : v && Symbol.iterator in s ? x(s) : s;
            }
            U.exports = {
              Frame: E,
              makeMacro: y,
              makeKeywordArgs: O,
              numArgs: C,
              suppressValue: n,
              ensureDefined: i,
              memberLookup: p,
              contextOrFrameLookup: h,
              callWrap: l,
              handleError: t,
              isArray: _.isArray,
              keys: _.keys,
              SafeString: g,
              copySafeness: L,
              markSafe: e,
              asyncEach: r,
              asyncAll: a,
              inOperator: _.inOperator,
              fromIterator: o
            };
          }),
          /* 3 */
          /***/
          (function(U, j, N) {
            function _(H, Y) {
              for (var ne = 0; ne < Y.length; ne++) {
                var ee = Y[ne];
                ee.enumerable = ee.enumerable || !1, ee.configurable = !0, "value" in ee && (ee.writable = !0), Object.defineProperty(H, v(ee.key), ee);
              }
            }
            function x(H, Y, ne) {
              return Y && _(H.prototype, Y), Object.defineProperty(H, "prototype", { writable: !1 }), H;
            }
            function v(H) {
              var Y = E(H, "string");
              return typeof Y == "symbol" ? Y : String(Y);
            }
            function E(H, Y) {
              if (typeof H != "object" || H === null) return H;
              var ne = H[Symbol.toPrimitive];
              if (ne !== void 0) {
                var ee = ne.call(H, Y);
                if (typeof ee != "object") return ee;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(H);
            }
            function y(H, Y) {
              H.prototype = Object.create(Y.prototype), H.prototype.constructor = H, O(H, Y);
            }
            function O(H, Y) {
              return O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(ee, ie) {
                return ee.__proto__ = ie, ee;
              }, O(H, Y);
            }
            var P = N(1), I = P.Obj;
            function C(H, Y, ne) {
              H instanceof Y && ne.push(H), H instanceof g && H.findAll(Y, ne);
            }
            var g = /* @__PURE__ */ (function(H) {
              y(Y, H);
              function Y() {
                return H.apply(this, arguments) || this;
              }
              var ne = Y.prototype;
              return ne.init = function(ie, ae) {
                for (var he = arguments, ye = this, Ee = arguments.length, Re = new Array(Ee > 2 ? Ee - 2 : 0), ke = 2; ke < Ee; ke++)
                  Re[ke - 2] = arguments[ke];
                this.lineno = ie, this.colno = ae, this.fields.forEach(function(Fe, Be) {
                  var be = he[Be + 2];
                  be === void 0 && (be = null), ye[Fe] = be;
                });
              }, ne.findAll = function(ie, ae) {
                var he = this;
                return ae = ae || [], this instanceof e ? this.children.forEach(function(ye) {
                  return C(ye, ie, ae);
                }) : this.fields.forEach(function(ye) {
                  return C(he[ye], ie, ae);
                }), ae;
              }, ne.iterFields = function(ie) {
                var ae = this;
                this.fields.forEach(function(he) {
                  ie(ae[he], he);
                });
              }, Y;
            })(I), L = /* @__PURE__ */ (function(H) {
              y(Y, H);
              function Y() {
                return H.apply(this, arguments) || this;
              }
              return x(Y, [{
                key: "typename",
                get: function() {
                  return "Value";
                }
              }, {
                key: "fields",
                get: function() {
                  return ["value"];
                }
              }]), Y;
            })(g), e = /* @__PURE__ */ (function(H) {
              y(Y, H);
              function Y() {
                return H.apply(this, arguments) || this;
              }
              var ne = Y.prototype;
              return ne.init = function(ie, ae, he) {
                H.prototype.init.call(this, ie, ae, he || []);
              }, ne.addChild = function(ie) {
                this.children.push(ie);
              }, x(Y, [{
                key: "typename",
                get: function() {
                  return "NodeList";
                }
              }, {
                key: "fields",
                get: function() {
                  return ["children"];
                }
              }]), Y;
            })(g), n = e.extend("Root"), i = L.extend("Literal"), p = L.extend("Symbol"), l = e.extend("Group"), h = e.extend("Array"), t = g.extend("Pair", {
              fields: ["key", "value"]
            }), r = e.extend("Dict"), a = g.extend("LookupVal", {
              fields: ["target", "val"]
            }), o = g.extend("If", {
              fields: ["cond", "body", "else_"]
            }), s = o.extend("IfAsync"), c = g.extend("InlineIf", {
              fields: ["cond", "body", "else_"]
            }), u = g.extend("For", {
              fields: ["arr", "name", "body", "else_"]
            }), k = u.extend("AsyncEach"), T = u.extend("AsyncAll"), b = g.extend("Macro", {
              fields: ["name", "args", "body"]
            }), A = b.extend("Caller"), R = g.extend("Import", {
              fields: ["template", "target", "withContext"]
            }), d = /* @__PURE__ */ (function(H) {
              y(Y, H);
              function Y() {
                return H.apply(this, arguments) || this;
              }
              var ne = Y.prototype;
              return ne.init = function(ie, ae, he, ye, Ee) {
                H.prototype.init.call(this, ie, ae, he, ye || new e(), Ee);
              }, x(Y, [{
                key: "typename",
                get: function() {
                  return "FromImport";
                }
              }, {
                key: "fields",
                get: function() {
                  return ["template", "names", "withContext"];
                }
              }]), Y;
            })(g), f = g.extend("FunCall", {
              fields: ["name", "args"]
            }), w = f.extend("Filter"), F = w.extend("FilterAsync", {
              fields: ["name", "args", "symbol"]
            }), B = r.extend("KeywordArgs"), V = g.extend("Block", {
              fields: ["name", "body"]
            }), Z = g.extend("Super", {
              fields: ["blockName", "symbol"]
            }), $ = g.extend("TemplateRef", {
              fields: ["template"]
            }), se = $.extend("Extends"), ue = g.extend("Include", {
              fields: ["template", "ignoreMissing"]
            }), X = g.extend("Set", {
              fields: ["targets", "value"]
            }), Q = g.extend("Switch", {
              fields: ["expr", "cases", "default"]
            }), D = g.extend("Case", {
              fields: ["cond", "body"]
            }), W = e.extend("Output"), G = g.extend("Capture", {
              fields: ["body"]
            }), te = i.extend("TemplateData"), ce = g.extend("UnaryOp", {
              fields: ["target"]
            }), le = g.extend("BinOp", {
              fields: ["left", "right"]
            }), me = le.extend("In"), m = le.extend("Is"), S = le.extend("Or"), M = le.extend("And"), K = ce.extend("Not"), z = le.extend("Add"), J = le.extend("Concat"), re = le.extend("Sub"), q = le.extend("Mul"), oe = le.extend("Div"), pe = le.extend("FloorDiv"), ve = le.extend("Mod"), de = le.extend("Pow"), Te = ce.extend("Neg"), Ae = ce.extend("Pos"), Se = g.extend("Compare", {
              fields: ["expr", "ops"]
            }), Ne = g.extend("CompareOperand", {
              fields: ["expr", "type"]
            }), xe = g.extend("CallExtension", {
              init: function(Y, ne, ee, ie) {
                this.parent(), this.extName = Y.__name || Y, this.prop = ne, this.args = ee || new e(), this.contentArgs = ie || [], this.autoescape = Y.autoescape;
              },
              fields: ["extName", "prop", "args", "contentArgs"]
            }), Ce = xe.extend("CallExtensionAsync");
            function ge(H, Y, ne) {
              var ee = H.split(`
`);
              ee.forEach(function(ie, ae) {
                ie && (ne && ae > 0 || !ne) && process.stdout.write(" ".repeat(Y));
                var he = ae === ee.length - 1 ? "" : `
`;
                process.stdout.write("" + ie + he);
              });
            }
            function _e(H, Y) {
              if (Y = Y || 0, ge(H.typename + ": ", Y), H instanceof e)
                ge(`
`), H.children.forEach(function(ie) {
                  _e(ie, Y + 2);
                });
              else if (H instanceof xe)
                ge(H.extName + "." + H.prop + `
`), H.args && _e(H.args, Y + 2), H.contentArgs && H.contentArgs.forEach(function(ie) {
                  _e(ie, Y + 2);
                });
              else {
                var ne = [], ee = null;
                H.iterFields(function(ie, ae) {
                  ie instanceof g ? ne.push([ae, ie]) : (ee = ee || {}, ee[ae] = ie);
                }), ee ? ge(JSON.stringify(ee, null, 2) + `
`, null, !0) : ge(`
`), ne.forEach(function(ie) {
                  var ae = ie[0], he = ie[1];
                  ge("[" + ae + "] =>", Y + 2), _e(he, Y + 4);
                });
              }
            }
            U.exports = {
              Node: g,
              Root: n,
              NodeList: e,
              Value: L,
              Literal: i,
              Symbol: p,
              Group: l,
              Array: h,
              Pair: t,
              Dict: r,
              Output: W,
              Capture: G,
              TemplateData: te,
              If: o,
              IfAsync: s,
              InlineIf: c,
              For: u,
              AsyncEach: k,
              AsyncAll: T,
              Macro: b,
              Caller: A,
              Import: R,
              FromImport: d,
              FunCall: f,
              Filter: w,
              FilterAsync: F,
              KeywordArgs: B,
              Block: V,
              Super: Z,
              Extends: se,
              Include: ue,
              Set: X,
              Switch: Q,
              Case: D,
              LookupVal: a,
              BinOp: le,
              In: me,
              Is: m,
              Or: S,
              And: M,
              Not: K,
              Add: z,
              Concat: J,
              Sub: re,
              Mul: q,
              Div: oe,
              FloorDiv: pe,
              Mod: ve,
              Pow: de,
              Neg: Te,
              Pos: Ae,
              Compare: Se,
              CompareOperand: Ne,
              CallExtension: xe,
              CallExtensionAsync: Ce,
              printNodes: _e
            };
          }),
          /* 4 */
          /***/
          (function(U, j) {
          }),
          /* 5 */
          /***/
          (function(U, j, N) {
            function _(i, p) {
              i.prototype = Object.create(p.prototype), i.prototype.constructor = i, x(i, p);
            }
            function x(i, p) {
              return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(h, t) {
                return h.__proto__ = t, h;
              }, x(i, p);
            }
            var v = N(8), E = N(17), y = N(3), O = N(0), P = O.TemplateError, I = N(2), C = I.Frame, g = N(1), L = g.Obj, e = {
              "==": "==",
              "===": "===",
              "!=": "!=",
              "!==": "!==",
              "<": "<",
              ">": ">",
              "<=": "<=",
              ">=": ">="
            }, n = /* @__PURE__ */ (function(i) {
              _(p, i);
              function p() {
                return i.apply(this, arguments) || this;
              }
              var l = p.prototype;
              return l.init = function(t, r) {
                this.templateName = t, this.codebuf = [], this.lastId = 0, this.buffer = null, this.bufferStack = [], this._scopeClosers = "", this.inBlock = !1, this.throwOnUndefined = r;
              }, l.fail = function(t, r, a) {
                throw r !== void 0 && (r += 1), a !== void 0 && (a += 1), new P(t, r, a);
              }, l._pushBuffer = function() {
                var t = this._tmpid();
                return this.bufferStack.push(this.buffer), this.buffer = t, this._emit("var " + this.buffer + ' = "";'), t;
              }, l._popBuffer = function() {
                this.buffer = this.bufferStack.pop();
              }, l._emit = function(t) {
                this.codebuf.push(t);
              }, l._emitLine = function(t) {
                this._emit(t + `
`);
              }, l._emitLines = function() {
                for (var t = this, r = arguments.length, a = new Array(r), o = 0; o < r; o++)
                  a[o] = arguments[o];
                a.forEach(function(s) {
                  return t._emitLine(s);
                });
              }, l._emitFuncBegin = function(t, r) {
                this.buffer = "output", this._scopeClosers = "", this._emitLine("function " + r + "(env, context, frame, runtime, cb) {"), this._emitLine("var lineno = " + t.lineno + ";"), this._emitLine("var colno = " + t.colno + ";"), this._emitLine("var " + this.buffer + ' = "";'), this._emitLine("try {");
              }, l._emitFuncEnd = function(t) {
                t || this._emitLine("cb(null, " + this.buffer + ");"), this._closeScopeLevels(), this._emitLine("} catch (e) {"), this._emitLine("  cb(runtime.handleError(e, lineno, colno));"), this._emitLine("}"), this._emitLine("}"), this.buffer = null;
              }, l._addScopeLevel = function() {
                this._scopeClosers += "})";
              }, l._closeScopeLevels = function() {
                this._emitLine(this._scopeClosers + ";"), this._scopeClosers = "";
              }, l._withScopedSyntax = function(t) {
                var r = this._scopeClosers;
                this._scopeClosers = "", t.call(this), this._closeScopeLevels(), this._scopeClosers = r;
              }, l._makeCallback = function(t) {
                var r = this._tmpid();
                return "function(" + r + (t ? "," + t : "") + `) {
if(` + r + ") { cb(" + r + "); return; }";
              }, l._tmpid = function() {
                return this.lastId++, "t_" + this.lastId;
              }, l._templateName = function() {
                return this.templateName == null ? "undefined" : JSON.stringify(this.templateName);
              }, l._compileChildren = function(t, r) {
                var a = this;
                t.children.forEach(function(o) {
                  a.compile(o, r);
                });
              }, l._compileAggregate = function(t, r, a, o) {
                var s = this;
                a && this._emit(a), t.children.forEach(function(c, u) {
                  u > 0 && s._emit(","), s.compile(c, r);
                }), o && this._emit(o);
              }, l._compileExpression = function(t, r) {
                this.assertType(t, y.Literal, y.Symbol, y.Group, y.Array, y.Dict, y.FunCall, y.Caller, y.Filter, y.LookupVal, y.Compare, y.InlineIf, y.In, y.Is, y.And, y.Or, y.Not, y.Add, y.Concat, y.Sub, y.Mul, y.Div, y.FloorDiv, y.Mod, y.Pow, y.Neg, y.Pos, y.Compare, y.NodeList), this.compile(t, r);
              }, l.assertType = function(t) {
                for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
                  a[o - 1] = arguments[o];
                a.some(function(s) {
                  return t instanceof s;
                }) || this.fail("assertType: invalid type: " + t.typename, t.lineno, t.colno);
              }, l.compileCallExtension = function(t, r, a) {
                var o = this, s = t.args, c = t.contentArgs, u = typeof t.autoescape == "boolean" ? t.autoescape : !0;
                if (a || this._emit(this.buffer + " += runtime.suppressValue("), this._emit('env.getExtension("' + t.extName + '")["' + t.prop + '"]('), this._emit("context"), (s || c) && this._emit(","), s && (s instanceof y.NodeList || this.fail("compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`"), s.children.forEach(function(T, b) {
                  o._compileExpression(T, r), (b !== s.children.length - 1 || c.length) && o._emit(",");
                })), c.length && c.forEach(function(T, b) {
                  if (b > 0 && o._emit(","), T) {
                    o._emitLine("function(cb) {"), o._emitLine("if(!cb) { cb = function(err) { if(err) { throw err; }}}");
                    var A = o._pushBuffer();
                    o._withScopedSyntax(function() {
                      o.compile(T, r), o._emitLine("cb(null, " + A + ");");
                    }), o._popBuffer(), o._emitLine("return " + A + ";"), o._emitLine("}");
                  } else
                    o._emit("null");
                }), a) {
                  var k = this._tmpid();
                  this._emitLine(", " + this._makeCallback(k)), this._emitLine(this.buffer + " += runtime.suppressValue(" + k + ", " + u + " && env.opts.autoescape);"), this._addScopeLevel();
                } else
                  this._emit(")"), this._emit(", " + u + ` && env.opts.autoescape);
`);
              }, l.compileCallExtensionAsync = function(t, r) {
                this.compileCallExtension(t, r, !0);
              }, l.compileNodeList = function(t, r) {
                this._compileChildren(t, r);
              }, l.compileLiteral = function(t) {
                if (typeof t.value == "string") {
                  var r = t.value.replace(/\\/g, "\\\\");
                  r = r.replace(/"/g, '\\"'), r = r.replace(/\n/g, "\\n"), r = r.replace(/\r/g, "\\r"), r = r.replace(/\t/g, "\\t"), r = r.replace(/\u2028/g, "\\u2028"), this._emit('"' + r + '"');
                } else t.value === null ? this._emit("null") : this._emit(t.value.toString());
              }, l.compileSymbol = function(t, r) {
                var a = t.value, o = r.lookup(a);
                o ? this._emit(o) : this._emit('runtime.contextOrFrameLookup(context, frame, "' + a + '")');
              }, l.compileGroup = function(t, r) {
                this._compileAggregate(t, r, "(", ")");
              }, l.compileArray = function(t, r) {
                this._compileAggregate(t, r, "[", "]");
              }, l.compileDict = function(t, r) {
                this._compileAggregate(t, r, "{", "}");
              }, l.compilePair = function(t, r) {
                var a = t.key, o = t.value;
                a instanceof y.Symbol ? a = new y.Literal(a.lineno, a.colno, a.value) : a instanceof y.Literal && typeof a.value == "string" || this.fail("compilePair: Dict keys must be strings or names", a.lineno, a.colno), this.compile(a, r), this._emit(": "), this._compileExpression(o, r);
              }, l.compileInlineIf = function(t, r) {
                this._emit("("), this.compile(t.cond, r), this._emit("?"), this.compile(t.body, r), this._emit(":"), t.else_ !== null ? this.compile(t.else_, r) : this._emit('""'), this._emit(")");
              }, l.compileIn = function(t, r) {
                this._emit("runtime.inOperator("), this.compile(t.left, r), this._emit(","), this.compile(t.right, r), this._emit(")");
              }, l.compileIs = function(t, r) {
                var a = t.right.name ? t.right.name.value : t.right.value;
                this._emit('env.getTest("' + a + '").call(context, '), this.compile(t.left, r), t.right.args && (this._emit(","), this.compile(t.right.args, r)), this._emit(") === true");
              }, l._binOpEmitter = function(t, r, a) {
                this.compile(t.left, r), this._emit(a), this.compile(t.right, r);
              }, l.compileOr = function(t, r) {
                return this._binOpEmitter(t, r, " || ");
              }, l.compileAnd = function(t, r) {
                return this._binOpEmitter(t, r, " && ");
              }, l.compileAdd = function(t, r) {
                return this._binOpEmitter(t, r, " + ");
              }, l.compileConcat = function(t, r) {
                return this._binOpEmitter(t, r, ' + "" + ');
              }, l.compileSub = function(t, r) {
                return this._binOpEmitter(t, r, " - ");
              }, l.compileMul = function(t, r) {
                return this._binOpEmitter(t, r, " * ");
              }, l.compileDiv = function(t, r) {
                return this._binOpEmitter(t, r, " / ");
              }, l.compileMod = function(t, r) {
                return this._binOpEmitter(t, r, " % ");
              }, l.compileNot = function(t, r) {
                this._emit("!"), this.compile(t.target, r);
              }, l.compileFloorDiv = function(t, r) {
                this._emit("Math.floor("), this.compile(t.left, r), this._emit(" / "), this.compile(t.right, r), this._emit(")");
              }, l.compilePow = function(t, r) {
                this._emit("Math.pow("), this.compile(t.left, r), this._emit(", "), this.compile(t.right, r), this._emit(")");
              }, l.compileNeg = function(t, r) {
                this._emit("-"), this.compile(t.target, r);
              }, l.compilePos = function(t, r) {
                this._emit("+"), this.compile(t.target, r);
              }, l.compileCompare = function(t, r) {
                var a = this;
                this.compile(t.expr, r), t.ops.forEach(function(o) {
                  a._emit(" " + e[o.type] + " "), a.compile(o.expr, r);
                });
              }, l.compileLookupVal = function(t, r) {
                this._emit("runtime.memberLookup(("), this._compileExpression(t.target, r), this._emit("),"), this._compileExpression(t.val, r), this._emit(")");
              }, l._getNodeName = function(t) {
                switch (t.typename) {
                  case "Symbol":
                    return t.value;
                  case "FunCall":
                    return "the return value of (" + this._getNodeName(t.name) + ")";
                  case "LookupVal":
                    return this._getNodeName(t.target) + '["' + this._getNodeName(t.val) + '"]';
                  case "Literal":
                    return t.value.toString();
                  default:
                    return "--expression--";
                }
              }, l.compileFunCall = function(t, r) {
                this._emit("(lineno = " + t.lineno + ", colno = " + t.colno + ", "), this._emit("runtime.callWrap("), this._compileExpression(t.name, r), this._emit(', "' + this._getNodeName(t.name).replace(/"/g, '\\"') + '", context, '), this._compileAggregate(t.args, r, "[", "])"), this._emit(")");
              }, l.compileFilter = function(t, r) {
                var a = t.name;
                this.assertType(a, y.Symbol), this._emit('env.getFilter("' + a.value + '").call(context, '), this._compileAggregate(t.args, r), this._emit(")");
              }, l.compileFilterAsync = function(t, r) {
                var a = t.name, o = t.symbol.value;
                this.assertType(a, y.Symbol), r.set(o, o), this._emit('env.getFilter("' + a.value + '").call(context, '), this._compileAggregate(t.args, r), this._emitLine(", " + this._makeCallback(o)), this._addScopeLevel();
              }, l.compileKeywordArgs = function(t, r) {
                this._emit("runtime.makeKeywordArgs("), this.compileDict(t, r), this._emit(")");
              }, l.compileSet = function(t, r) {
                var a = this, o = [];
                t.targets.forEach(function(s) {
                  var c = s.value, u = r.lookup(c);
                  u == null && (u = a._tmpid(), a._emitLine("var " + u + ";")), o.push(u);
                }), t.value ? (this._emit(o.join(" = ") + " = "), this._compileExpression(t.value, r), this._emitLine(";")) : (this._emit(o.join(" = ") + " = "), this.compile(t.body, r), this._emitLine(";")), t.targets.forEach(function(s, c) {
                  var u = o[c], k = s.value;
                  a._emitLine('frame.set("' + k + '", ' + u + ", true);"), a._emitLine("if(frame.topLevel) {"), a._emitLine('context.setVariable("' + k + '", ' + u + ");"), a._emitLine("}"), k.charAt(0) !== "_" && (a._emitLine("if(frame.topLevel) {"), a._emitLine('context.addExport("' + k + '", ' + u + ");"), a._emitLine("}"));
                });
              }, l.compileSwitch = function(t, r) {
                var a = this;
                this._emit("switch ("), this.compile(t.expr, r), this._emit(") {"), t.cases.forEach(function(o, s) {
                  a._emit("case "), a.compile(o.cond, r), a._emit(": "), a.compile(o.body, r), o.body.children.length && a._emitLine("break;");
                }), t.default && (this._emit("default:"), this.compile(t.default, r)), this._emit("}");
              }, l.compileIf = function(t, r, a) {
                var o = this;
                this._emit("if("), this._compileExpression(t.cond, r), this._emitLine(") {"), this._withScopedSyntax(function() {
                  o.compile(t.body, r), a && o._emit("cb()");
                }), t.else_ ? (this._emitLine(`}
else {`), this._withScopedSyntax(function() {
                  o.compile(t.else_, r), a && o._emit("cb()");
                })) : a && (this._emitLine(`}
else {`), this._emit("cb()")), this._emitLine("}");
              }, l.compileIfAsync = function(t, r) {
                this._emit("(function(cb) {"), this.compileIf(t, r, !0), this._emit("})(" + this._makeCallback()), this._addScopeLevel();
              }, l._emitLoopBindings = function(t, r, a, o) {
                var s = this, c = [{
                  name: "index",
                  val: a + " + 1"
                }, {
                  name: "index0",
                  val: a
                }, {
                  name: "revindex",
                  val: o + " - " + a
                }, {
                  name: "revindex0",
                  val: o + " - " + a + " - 1"
                }, {
                  name: "first",
                  val: a + " === 0"
                }, {
                  name: "last",
                  val: a + " === " + o + " - 1"
                }, {
                  name: "length",
                  val: o
                }];
                c.forEach(function(u) {
                  s._emitLine('frame.set("loop.' + u.name + '", ' + u.val + ");");
                });
              }, l.compileFor = function(t, r) {
                var a = this, o = this._tmpid(), s = this._tmpid(), c = this._tmpid();
                if (r = r.push(), this._emitLine("frame = frame.push();"), this._emit("var " + c + " = "), this._compileExpression(t.arr, r), this._emitLine(";"), this._emit("if(" + c + ") {"), this._emitLine(c + " = runtime.fromIterator(" + c + ");"), t.name instanceof y.Array) {
                  this._emitLine("var " + o + ";"), this._emitLine("if(runtime.isArray(" + c + ")) {"), this._emitLine("var " + s + " = " + c + ".length;"), this._emitLine("for(" + o + "=0; " + o + " < " + c + ".length; " + o + "++) {"), t.name.children.forEach(function(d, f) {
                    var w = a._tmpid();
                    a._emitLine("var " + w + " = " + c + "[" + o + "][" + f + "];"), a._emitLine('frame.set("' + d + '", ' + c + "[" + o + "][" + f + "]);"), r.set(t.name.children[f].value, w);
                  }), this._emitLoopBindings(t, c, o, s), this._withScopedSyntax(function() {
                    a.compile(t.body, r);
                  }), this._emitLine("}"), this._emitLine("} else {");
                  var u = t.name.children, k = u[0], T = u[1], b = this._tmpid(), A = this._tmpid();
                  r.set(k.value, b), r.set(T.value, A), this._emitLine(o + " = -1;"), this._emitLine("var " + s + " = runtime.keys(" + c + ").length;"), this._emitLine("for(var " + b + " in " + c + ") {"), this._emitLine(o + "++;"), this._emitLine("var " + A + " = " + c + "[" + b + "];"), this._emitLine('frame.set("' + k.value + '", ' + b + ");"), this._emitLine('frame.set("' + T.value + '", ' + A + ");"), this._emitLoopBindings(t, c, o, s), this._withScopedSyntax(function() {
                    a.compile(t.body, r);
                  }), this._emitLine("}"), this._emitLine("}");
                } else {
                  var R = this._tmpid();
                  r.set(t.name.value, R), this._emitLine("var " + s + " = " + c + ".length;"), this._emitLine("for(var " + o + "=0; " + o + " < " + c + ".length; " + o + "++) {"), this._emitLine("var " + R + " = " + c + "[" + o + "];"), this._emitLine('frame.set("' + t.name.value + '", ' + R + ");"), this._emitLoopBindings(t, c, o, s), this._withScopedSyntax(function() {
                    a.compile(t.body, r);
                  }), this._emitLine("}");
                }
                this._emitLine("}"), t.else_ && (this._emitLine("if (!" + s + ") {"), this.compile(t.else_, r), this._emitLine("}")), this._emitLine("frame = frame.pop();");
              }, l._compileAsyncLoop = function(t, r, a) {
                var o = this, s = this._tmpid(), c = this._tmpid(), u = this._tmpid(), k = a ? "asyncAll" : "asyncEach";
                if (r = r.push(), this._emitLine("frame = frame.push();"), this._emit("var " + u + " = runtime.fromIterator("), this._compileExpression(t.arr, r), this._emitLine(");"), t.name instanceof y.Array) {
                  var T = t.name.children.length;
                  this._emit("runtime." + k + "(" + u + ", " + T + ", function("), t.name.children.forEach(function(R) {
                    o._emit(R.value + ",");
                  }), this._emit(s + "," + c + ",next) {"), t.name.children.forEach(function(R) {
                    var d = R.value;
                    r.set(d, d), o._emitLine('frame.set("' + d + '", ' + d + ");");
                  });
                } else {
                  var b = t.name.value;
                  this._emitLine("runtime." + k + "(" + u + ", 1, function(" + b + ", " + s + ", " + c + ",next) {"), this._emitLine('frame.set("' + b + '", ' + b + ");"), r.set(b, b);
                }
                this._emitLoopBindings(t, u, s, c), this._withScopedSyntax(function() {
                  var R;
                  a && (R = o._pushBuffer()), o.compile(t.body, r), o._emitLine("next(" + s + (R ? "," + R : "") + ");"), a && o._popBuffer();
                });
                var A = this._tmpid();
                this._emitLine("}, " + this._makeCallback(A)), this._addScopeLevel(), a && this._emitLine(this.buffer + " += " + A + ";"), t.else_ && (this._emitLine("if (!" + u + ".length) {"), this.compile(t.else_, r), this._emitLine("}")), this._emitLine("frame = frame.pop();");
              }, l.compileAsyncEach = function(t, r) {
                this._compileAsyncLoop(t, r);
              }, l.compileAsyncAll = function(t, r) {
                this._compileAsyncLoop(t, r, !0);
              }, l._compileMacro = function(t, r) {
                var a = this, o = [], s = null, c = "macro_" + this._tmpid(), u = r !== void 0;
                t.args.children.forEach(function(d, f) {
                  f === t.args.children.length - 1 && d instanceof y.Dict ? s = d : (a.assertType(d, y.Symbol), o.push(d));
                });
                var k = [].concat(o.map(function(d) {
                  return "l_" + d.value;
                }), ["kwargs"]), T = o.map(function(d) {
                  return '"' + d.value + '"';
                }), b = (s && s.children || []).map(function(d) {
                  return '"' + d.key.value + '"';
                }), A;
                u ? A = r.push(!0) : A = new C(), this._emitLines("var " + c + " = runtime.makeMacro(", "[" + T.join(", ") + "], ", "[" + b.join(", ") + "], ", "function (" + k.join(", ") + ") {", "var callerFrame = frame;", "frame = " + (u ? "frame.push(true);" : "new runtime.Frame();"), "kwargs = kwargs || {};", 'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {', 'frame.set("caller", kwargs.caller); }'), o.forEach(function(d) {
                  a._emitLine('frame.set("' + d.value + '", l_' + d.value + ");"), A.set(d.value, "l_" + d.value);
                }), s && s.children.forEach(function(d) {
                  var f = d.key.value;
                  a._emit('frame.set("' + f + '", '), a._emit('Object.prototype.hasOwnProperty.call(kwargs, "' + f + '")'), a._emit(' ? kwargs["' + f + '"] : '), a._compileExpression(d.value, A), a._emit(");");
                });
                var R = this._pushBuffer();
                return this._withScopedSyntax(function() {
                  a.compile(t.body, A);
                }), this._emitLine("frame = " + (u ? "frame.pop();" : "callerFrame;")), this._emitLine("return new runtime.SafeString(" + R + ");"), this._emitLine("});"), this._popBuffer(), c;
              }, l.compileMacro = function(t, r) {
                var a = this._compileMacro(t), o = t.name.value;
                r.set(o, a), r.parent ? this._emitLine('frame.set("' + o + '", ' + a + ");") : (t.name.value.charAt(0) !== "_" && this._emitLine('context.addExport("' + o + '");'), this._emitLine('context.setVariable("' + o + '", ' + a + ");"));
              }, l.compileCaller = function(t, r) {
                this._emit("(function (){");
                var a = this._compileMacro(t, r);
                this._emit("return " + a + ";})()");
              }, l._compileGetTemplate = function(t, r, a, o) {
                var s = this._tmpid(), c = this._templateName(), u = this._makeCallback(s), k = a ? "true" : "false", T = o ? "true" : "false";
                return this._emit("env.getTemplate("), this._compileExpression(t.template, r), this._emitLine(", " + k + ", " + c + ", " + T + ", " + u), s;
              }, l.compileImport = function(t, r) {
                var a = t.target.value, o = this._compileGetTemplate(t, r, !1, !1);
                this._addScopeLevel(), this._emitLine(o + ".getExported(" + (t.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(o)), this._addScopeLevel(), r.set(a, o), r.parent ? this._emitLine('frame.set("' + a + '", ' + o + ");") : this._emitLine('context.setVariable("' + a + '", ' + o + ");");
              }, l.compileFromImport = function(t, r) {
                var a = this, o = this._compileGetTemplate(t, r, !1, !1);
                this._addScopeLevel(), this._emitLine(o + ".getExported(" + (t.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(o)), this._addScopeLevel(), t.names.children.forEach(function(s) {
                  var c, u, k = a._tmpid();
                  s instanceof y.Pair ? (c = s.key.value, u = s.value.value) : (c = s.value, u = c), a._emitLine("if(Object.prototype.hasOwnProperty.call(" + o + ', "' + c + '")) {'), a._emitLine("var " + k + " = " + o + "." + c + ";"), a._emitLine("} else {"), a._emitLine(`cb(new Error("cannot import '` + c + `'")); return;`), a._emitLine("}"), r.set(u, k), r.parent ? a._emitLine('frame.set("' + u + '", ' + k + ");") : a._emitLine('context.setVariable("' + u + '", ' + k + ");");
                });
              }, l.compileBlock = function(t) {
                var r = this._tmpid();
                this.inBlock || this._emit('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : '), this._emit('context.getBlock("' + t.name.value + '")'), this.inBlock || this._emit(")"), this._emitLine("(env, context, frame, runtime, " + this._makeCallback(r)), this._emitLine(this.buffer + " += " + r + ";"), this._addScopeLevel();
              }, l.compileSuper = function(t, r) {
                var a = t.blockName.value, o = t.symbol.value, s = this._makeCallback(o);
                this._emitLine('context.getSuper(env, "' + a + '", b_' + a + ", frame, runtime, " + s), this._emitLine(o + " = runtime.markSafe(" + o + ");"), this._addScopeLevel(), r.set(o, o);
              }, l.compileExtends = function(t, r) {
                var a = this._tmpid(), o = this._compileGetTemplate(t, r, !0, !1);
                this._emitLine("parentTemplate = " + o), this._emitLine("for(var " + a + " in parentTemplate.blocks) {"), this._emitLine("context.addBlock(" + a + ", parentTemplate.blocks[" + a + "]);"), this._emitLine("}"), this._addScopeLevel();
              }, l.compileInclude = function(t, r) {
                this._emitLine("var tasks = [];"), this._emitLine("tasks.push("), this._emitLine("function(callback) {");
                var a = this._compileGetTemplate(t, r, !1, t.ignoreMissing);
                this._emitLine("callback(null," + a + ");});"), this._emitLine("});");
                var o = this._tmpid();
                this._emitLine("tasks.push("), this._emitLine("function(template, callback){"), this._emitLine("template.render(context.getVariables(), frame, " + this._makeCallback(o)), this._emitLine("callback(null," + o + ");});"), this._emitLine("});"), this._emitLine("tasks.push("), this._emitLine("function(result, callback){"), this._emitLine(this.buffer + " += result;"), this._emitLine("callback(null);"), this._emitLine("});"), this._emitLine("env.waterfall(tasks, function(){"), this._addScopeLevel();
              }, l.compileTemplateData = function(t, r) {
                this.compileLiteral(t, r);
              }, l.compileCapture = function(t, r) {
                var a = this, o = this.buffer;
                this.buffer = "output", this._emitLine("(function() {"), this._emitLine('var output = "";'), this._withScopedSyntax(function() {
                  a.compile(t.body, r);
                }), this._emitLine("return output;"), this._emitLine("})()"), this.buffer = o;
              }, l.compileOutput = function(t, r) {
                var a = this, o = t.children;
                o.forEach(function(s) {
                  s instanceof y.TemplateData ? s.value && (a._emit(a.buffer + " += "), a.compileLiteral(s, r), a._emitLine(";")) : (a._emit(a.buffer + " += runtime.suppressValue("), a.throwOnUndefined && a._emit("runtime.ensureDefined("), a.compile(s, r), a.throwOnUndefined && a._emit("," + t.lineno + "," + t.colno + ")"), a._emit(`, env.opts.autoescape);
`));
                });
              }, l.compileRoot = function(t, r) {
                var a = this;
                r && this.fail("compileRoot: root node can't have frame"), r = new C(), this._emitFuncBegin(t, "root"), this._emitLine("var parentTemplate = null;"), this._compileChildren(t, r), this._emitLine("if(parentTemplate) {"), this._emitLine("parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);"), this._emitLine("} else {"), this._emitLine("cb(null, " + this.buffer + ");"), this._emitLine("}"), this._emitFuncEnd(!0), this.inBlock = !0;
                var o = [], s = t.findAll(y.Block);
                s.forEach(function(c, u) {
                  var k = c.name.value;
                  if (o.indexOf(k) !== -1)
                    throw new Error('Block "' + k + '" defined more than once.');
                  o.push(k), a._emitFuncBegin(c, "b_" + k);
                  var T = new C();
                  a._emitLine("var frame = frame.push(true);"), a.compile(c.body, T), a._emitFuncEnd();
                }), this._emitLine("return {"), s.forEach(function(c, u) {
                  var k = "b_" + c.name.value;
                  a._emitLine(k + ": " + k + ",");
                }), this._emitLine(`root: root
};`);
              }, l.compile = function(t, r) {
                var a = this["compile" + t.typename];
                a ? a.call(this, t, r) : this.fail("compile: Cannot compile node: " + t.typename, t.lineno, t.colno);
              }, l.getCode = function() {
                return this.codebuf.join("");
              }, p;
            })(L);
            U.exports = {
              compile: function(p, l, h, t, r) {
                r === void 0 && (r = {});
                var a = new n(t, r.throwOnUndefined), o = (h || []).map(function(c) {
                  return c.preprocess;
                }).filter(function(c) {
                  return !!c;
                }), s = o.reduce(function(c, u) {
                  return u(c);
                }, p);
                return a.compile(E.transform(v.parse(s, h, r), l, t)), a.getCode();
              },
              Compiler: n
            };
          }),
          /* 6 */
          /***/
          (function(U, j, N) {
            function _(O, P) {
              O.prototype = Object.create(P.prototype), O.prototype.constructor = O, x(O, P);
            }
            function x(O, P) {
              return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(C, g) {
                return C.__proto__ = g, C;
              }, x(O, P);
            }
            var v = N(4), E = N(1), y = E.EmitterObj;
            U.exports = /* @__PURE__ */ (function(O) {
              _(P, O);
              function P() {
                return O.apply(this, arguments) || this;
              }
              var I = P.prototype;
              return I.resolve = function(g, L) {
                return v.resolve(v.dirname(g), L);
              }, I.isRelative = function(g) {
                return g.indexOf("./") === 0 || g.indexOf("../") === 0;
              }, P;
            })(y);
          }),
          /* 7 */
          /***/
          (function(U, j, N) {
            function _(T, b) {
              T.prototype = Object.create(b.prototype), T.prototype.constructor = T, x(T, b);
            }
            function x(T, b) {
              return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(R, d) {
                return R.__proto__ = d, R;
              }, x(T, b);
            }
            var v = N(12), E = N(15), y = N(0), O = N(5), P = N(18), I = N(10), C = I.FileSystemLoader, g = I.WebLoader, L = I.PrecompiledLoader, e = N(20), n = N(21), i = N(1), p = i.Obj, l = i.EmitterObj, h = N(2), t = h.handleError, r = h.Frame, a = N(22);
            function o(T, b, A) {
              v(function() {
                T(b, A);
              });
            }
            var s = {
              type: "code",
              obj: {
                root: function(b, A, R, d, f) {
                  try {
                    f(null, "");
                  } catch (w) {
                    f(t(w, null, null));
                  }
                }
              }
            }, c = /* @__PURE__ */ (function(T) {
              _(b, T);
              function b() {
                return T.apply(this, arguments) || this;
              }
              var A = b.prototype;
              return A.init = function(d, f) {
                var w = this;
                f = this.opts = f || {}, this.opts.dev = !!f.dev, this.opts.autoescape = f.autoescape != null ? f.autoescape : !0, this.opts.throwOnUndefined = !!f.throwOnUndefined, this.opts.trimBlocks = !!f.trimBlocks, this.opts.lstripBlocks = !!f.lstripBlocks, this.loaders = [], d ? this.loaders = y.isArray(d) ? d : [d] : C ? this.loaders = [new C("views")] : g && (this.loaders = [new g("/views")]), typeof window < "u" && window.nunjucksPrecompiled && this.loaders.unshift(new L(window.nunjucksPrecompiled)), this._initLoaders(), this.globals = n(), this.filters = {}, this.tests = {}, this.asyncFilters = [], this.extensions = {}, this.extensionsList = [], y._entries(P).forEach(function(F) {
                  var B = F[0], V = F[1];
                  return w.addFilter(B, V);
                }), y._entries(e).forEach(function(F) {
                  var B = F[0], V = F[1];
                  return w.addTest(B, V);
                });
              }, A._initLoaders = function() {
                var d = this;
                this.loaders.forEach(function(f) {
                  f.cache = {}, typeof f.on == "function" && (f.on("update", function(w, F) {
                    f.cache[w] = null, d.emit("update", w, F, f);
                  }), f.on("load", function(w, F) {
                    d.emit("load", w, F, f);
                  }));
                });
              }, A.invalidateCache = function() {
                this.loaders.forEach(function(d) {
                  d.cache = {};
                });
              }, A.addExtension = function(d, f) {
                return f.__name = d, this.extensions[d] = f, this.extensionsList.push(f), this;
              }, A.removeExtension = function(d) {
                var f = this.getExtension(d);
                f && (this.extensionsList = y.without(this.extensionsList, f), delete this.extensions[d]);
              }, A.getExtension = function(d) {
                return this.extensions[d];
              }, A.hasExtension = function(d) {
                return !!this.extensions[d];
              }, A.addGlobal = function(d, f) {
                return this.globals[d] = f, this;
              }, A.getGlobal = function(d) {
                if (typeof this.globals[d] > "u")
                  throw new Error("global not found: " + d);
                return this.globals[d];
              }, A.addFilter = function(d, f, w) {
                var F = f;
                return w && this.asyncFilters.push(d), this.filters[d] = F, this;
              }, A.getFilter = function(d) {
                if (!this.filters[d])
                  throw new Error("filter not found: " + d);
                return this.filters[d];
              }, A.addTest = function(d, f) {
                return this.tests[d] = f, this;
              }, A.getTest = function(d) {
                if (!this.tests[d])
                  throw new Error("test not found: " + d);
                return this.tests[d];
              }, A.resolveTemplate = function(d, f, w) {
                var F = d.isRelative && f ? d.isRelative(w) : !1;
                return F && d.resolve ? d.resolve(f, w) : w;
              }, A.getTemplate = function(d, f, w, F, B) {
                var V = this, Z = this, $ = null;
                if (d && d.raw && (d = d.raw), y.isFunction(w) && (B = w, w = null, f = f || !1), y.isFunction(f) && (B = f, f = !1), d instanceof k)
                  $ = d;
                else {
                  if (typeof d != "string")
                    throw new Error("template names must be a string: " + d);
                  for (var se = 0; se < this.loaders.length; se++) {
                    var ue = this.loaders[se];
                    if ($ = ue.cache[this.resolveTemplate(ue, w, d)], $)
                      break;
                  }
                }
                if ($)
                  if (f && $.compile(), B) {
                    B(null, $);
                    return;
                  } else
                    return $;
                var X, Q = function(W, G) {
                  if (!G && !W && !F && (W = new Error("template not found: " + d)), W)
                    if (B) {
                      B(W);
                      return;
                    } else
                      throw W;
                  var te;
                  G ? (te = new k(G.src, V, G.path, f), G.noCache || (G.loader.cache[d] = te)) : te = new k(s, V, "", f), B ? B(null, te) : X = te;
                };
                return y.asyncIter(this.loaders, function(D, W, G, te) {
                  function ce(le, me) {
                    le ? te(le) : me ? (me.loader = D, te(null, me)) : G();
                  }
                  d = Z.resolveTemplate(D, w, d), D.async ? D.getSource(d, ce) : ce(null, D.getSource(d));
                }, Q), X;
              }, A.express = function(d) {
                return a(this, d);
              }, A.render = function(d, f, w) {
                y.isFunction(f) && (w = f, f = null);
                var F = null;
                return this.getTemplate(d, function(B, V) {
                  if (B && w)
                    o(w, B);
                  else {
                    if (B)
                      throw B;
                    F = V.render(f, w);
                  }
                }), F;
              }, A.renderString = function(d, f, w, F) {
                y.isFunction(w) && (F = w, w = {}), w = w || {};
                var B = new k(d, this, w.path);
                return B.render(f, F);
              }, A.waterfall = function(d, f, w) {
                return E(d, f, w);
              }, b;
            })(l), u = /* @__PURE__ */ (function(T) {
              _(b, T);
              function b() {
                return T.apply(this, arguments) || this;
              }
              var A = b.prototype;
              return A.init = function(d, f, w) {
                var F = this;
                this.env = w || new c(), this.ctx = y.extend({}, d), this.blocks = {}, this.exported = [], y.keys(f).forEach(function(B) {
                  F.addBlock(B, f[B]);
                });
              }, A.lookup = function(d) {
                return d in this.env.globals && !(d in this.ctx) ? this.env.globals[d] : this.ctx[d];
              }, A.setVariable = function(d, f) {
                this.ctx[d] = f;
              }, A.getVariables = function() {
                return this.ctx;
              }, A.addBlock = function(d, f) {
                return this.blocks[d] = this.blocks[d] || [], this.blocks[d].push(f), this;
              }, A.getBlock = function(d) {
                if (!this.blocks[d])
                  throw new Error('unknown block "' + d + '"');
                return this.blocks[d][0];
              }, A.getSuper = function(d, f, w, F, B, V) {
                var Z = y.indexOf(this.blocks[f] || [], w), $ = this.blocks[f][Z + 1], se = this;
                if (Z === -1 || !$)
                  throw new Error('no super block available for "' + f + '"');
                $(d, se, F, B, V);
              }, A.addExport = function(d) {
                this.exported.push(d);
              }, A.getExported = function() {
                var d = this, f = {};
                return this.exported.forEach(function(w) {
                  f[w] = d.ctx[w];
                }), f;
              }, b;
            })(p), k = /* @__PURE__ */ (function(T) {
              _(b, T);
              function b() {
                return T.apply(this, arguments) || this;
              }
              var A = b.prototype;
              return A.init = function(d, f, w, F) {
                if (this.env = f || new c(), y.isObject(d))
                  switch (d.type) {
                    case "code":
                      this.tmplProps = d.obj;
                      break;
                    case "string":
                      this.tmplStr = d.obj;
                      break;
                    default:
                      throw new Error("Unexpected template object type " + d.type + "; expected 'code', or 'string'");
                  }
                else if (y.isString(d))
                  this.tmplStr = d;
                else
                  throw new Error("src must be a string or an object describing the source");
                if (this.path = w, F)
                  try {
                    this._compile();
                  } catch (B) {
                    throw y._prettifyError(this.path, this.env.opts.dev, B);
                  }
                else
                  this.compiled = !1;
              }, A.render = function(d, f, w) {
                var F = this;
                typeof d == "function" ? (w = d, d = {}) : typeof f == "function" && (w = f, f = null);
                var B = !f;
                try {
                  this.compile();
                } catch (X) {
                  var V = y._prettifyError(this.path, this.env.opts.dev, X);
                  if (w)
                    return o(w, V);
                  throw V;
                }
                var Z = new u(d || {}, this.blocks, this.env), $ = f ? f.push(!0) : new r();
                $.topLevel = !0;
                var se = null, ue = !1;
                return this.rootRenderFunc(this.env, Z, $, h, function(X, Q) {
                  if (!(ue && w && typeof Q < "u"))
                    if (X && (X = y._prettifyError(F.path, F.env.opts.dev, X), ue = !0), w)
                      B ? o(w, X, Q) : w(X, Q);
                    else {
                      if (X)
                        throw X;
                      se = Q;
                    }
                }), se;
              }, A.getExported = function(d, f, w) {
                typeof d == "function" && (w = d, d = {}), typeof f == "function" && (w = f, f = null);
                try {
                  this.compile();
                } catch (V) {
                  if (w)
                    return w(V);
                  throw V;
                }
                var F = f ? f.push() : new r();
                F.topLevel = !0;
                var B = new u(d || {}, this.blocks, this.env);
                this.rootRenderFunc(this.env, B, F, h, function(V) {
                  V ? w(V, null) : w(null, B.getExported());
                });
              }, A.compile = function() {
                this.compiled || this._compile();
              }, A._compile = function() {
                var d;
                if (this.tmplProps)
                  d = this.tmplProps;
                else {
                  var f = O.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts), w = new Function(f);
                  d = w();
                }
                this.blocks = this._getBlocks(d), this.rootRenderFunc = d.root, this.compiled = !0;
              }, A._getBlocks = function(d) {
                var f = {};
                return y.keys(d).forEach(function(w) {
                  w.slice(0, 2) === "b_" && (f[w.slice(2)] = d[w]);
                }), f;
              }, b;
            })(p);
            U.exports = {
              Environment: c,
              Template: k
            };
          }),
          /* 8 */
          /***/
          (function(U, j, N) {
            function _(I, C) {
              I.prototype = Object.create(C.prototype), I.prototype.constructor = I, x(I, C);
            }
            function x(I, C) {
              return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(L, e) {
                return L.__proto__ = e, L;
              }, x(I, C);
            }
            var v = N(9), E = N(3), y = N(1).Obj, O = N(0), P = /* @__PURE__ */ (function(I) {
              _(C, I);
              function C() {
                return I.apply(this, arguments) || this;
              }
              var g = C.prototype;
              return g.init = function(e) {
                this.tokens = e, this.peeked = null, this.breakOnBlocks = null, this.dropLeadingWhitespace = !1, this.extensions = [];
              }, g.nextToken = function(e) {
                var n;
                if (this.peeked)
                  if (!e && this.peeked.type === v.TOKEN_WHITESPACE)
                    this.peeked = null;
                  else
                    return n = this.peeked, this.peeked = null, n;
                if (n = this.tokens.nextToken(), !e)
                  for (; n && n.type === v.TOKEN_WHITESPACE; )
                    n = this.tokens.nextToken();
                return n;
              }, g.peekToken = function() {
                return this.peeked = this.peeked || this.nextToken(), this.peeked;
              }, g.pushToken = function(e) {
                if (this.peeked)
                  throw new Error("pushToken: can only push one token on between reads");
                this.peeked = e;
              }, g.error = function(e, n, i) {
                if (n === void 0 || i === void 0) {
                  var p = this.peekToken() || {};
                  n = p.lineno, i = p.colno;
                }
                return n !== void 0 && (n += 1), i !== void 0 && (i += 1), new O.TemplateError(e, n, i);
              }, g.fail = function(e, n, i) {
                throw this.error(e, n, i);
              }, g.skip = function(e) {
                var n = this.nextToken();
                return !n || n.type !== e ? (this.pushToken(n), !1) : !0;
              }, g.expect = function(e) {
                var n = this.nextToken();
                return n.type !== e && this.fail("expected " + e + ", got " + n.type, n.lineno, n.colno), n;
              }, g.skipValue = function(e, n) {
                var i = this.nextToken();
                return !i || i.type !== e || i.value !== n ? (this.pushToken(i), !1) : !0;
              }, g.skipSymbol = function(e) {
                return this.skipValue(v.TOKEN_SYMBOL, e);
              }, g.advanceAfterBlockEnd = function(e) {
                var n;
                return e || (n = this.peekToken(), n || this.fail("unexpected end of file"), n.type !== v.TOKEN_SYMBOL && this.fail("advanceAfterBlockEnd: expected symbol token or explicit name to be passed"), e = this.nextToken().value), n = this.nextToken(), n && n.type === v.TOKEN_BLOCK_END ? n.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0) : this.fail("expected block end in " + e + " statement"), n;
              }, g.advanceAfterVariableEnd = function() {
                var e = this.nextToken();
                e && e.type === v.TOKEN_VARIABLE_END ? this.dropLeadingWhitespace = e.value.charAt(e.value.length - this.tokens.tags.VARIABLE_END.length - 1) === "-" : (this.pushToken(e), this.fail("expected variable end"));
              }, g.parseFor = function() {
                var e = this.peekToken(), n, i;
                this.skipSymbol("for") ? (n = new E.For(e.lineno, e.colno), i = "endfor") : this.skipSymbol("asyncEach") ? (n = new E.AsyncEach(e.lineno, e.colno), i = "endeach") : this.skipSymbol("asyncAll") ? (n = new E.AsyncAll(e.lineno, e.colno), i = "endall") : this.fail("parseFor: expected for{Async}", e.lineno, e.colno), n.name = this.parsePrimary(), n.name instanceof E.Symbol || this.fail("parseFor: variable name expected for loop");
                var p = this.peekToken().type;
                if (p === v.TOKEN_COMMA) {
                  var l = n.name;
                  for (n.name = new E.Array(l.lineno, l.colno), n.name.addChild(l); this.skip(v.TOKEN_COMMA); ) {
                    var h = this.parsePrimary();
                    n.name.addChild(h);
                  }
                }
                return this.skipSymbol("in") || this.fail('parseFor: expected "in" keyword for loop', e.lineno, e.colno), n.arr = this.parseExpression(), this.advanceAfterBlockEnd(e.value), n.body = this.parseUntilBlocks(i, "else"), this.skipSymbol("else") && (this.advanceAfterBlockEnd("else"), n.else_ = this.parseUntilBlocks(i)), this.advanceAfterBlockEnd(), n;
              }, g.parseMacro = function() {
                var e = this.peekToken();
                this.skipSymbol("macro") || this.fail("expected macro");
                var n = this.parsePrimary(!0), i = this.parseSignature(), p = new E.Macro(e.lineno, e.colno, n, i);
                return this.advanceAfterBlockEnd(e.value), p.body = this.parseUntilBlocks("endmacro"), this.advanceAfterBlockEnd(), p;
              }, g.parseCall = function() {
                var e = this.peekToken();
                this.skipSymbol("call") || this.fail("expected call");
                var n = this.parseSignature(!0) || new E.NodeList(), i = this.parsePrimary();
                this.advanceAfterBlockEnd(e.value);
                var p = this.parseUntilBlocks("endcall");
                this.advanceAfterBlockEnd();
                var l = new E.Symbol(e.lineno, e.colno, "caller"), h = new E.Caller(e.lineno, e.colno, l, n, p), t = i.args.children;
                t[t.length - 1] instanceof E.KeywordArgs || t.push(new E.KeywordArgs());
                var r = t[t.length - 1];
                return r.addChild(new E.Pair(e.lineno, e.colno, l, h)), new E.Output(e.lineno, e.colno, [i]);
              }, g.parseWithContext = function() {
                var e = this.peekToken(), n = null;
                return this.skipSymbol("with") ? n = !0 : this.skipSymbol("without") && (n = !1), n !== null && (this.skipSymbol("context") || this.fail("parseFrom: expected context after with/without", e.lineno, e.colno)), n;
              }, g.parseImport = function() {
                var e = this.peekToken();
                this.skipSymbol("import") || this.fail("parseImport: expected import", e.lineno, e.colno);
                var n = this.parseExpression();
                this.skipSymbol("as") || this.fail('parseImport: expected "as" keyword', e.lineno, e.colno);
                var i = this.parseExpression(), p = this.parseWithContext(), l = new E.Import(e.lineno, e.colno, n, i, p);
                return this.advanceAfterBlockEnd(e.value), l;
              }, g.parseFrom = function() {
                var e = this.peekToken();
                this.skipSymbol("from") || this.fail("parseFrom: expected from");
                var n = this.parseExpression();
                this.skipSymbol("import") || this.fail("parseFrom: expected import", e.lineno, e.colno);
                for (var i = new E.NodeList(), p; ; ) {
                  var l = this.peekToken();
                  if (l.type === v.TOKEN_BLOCK_END) {
                    i.children.length || this.fail("parseFrom: Expected at least one import name", e.lineno, e.colno), l.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0), this.nextToken();
                    break;
                  }
                  i.children.length > 0 && !this.skip(v.TOKEN_COMMA) && this.fail("parseFrom: expected comma", e.lineno, e.colno);
                  var h = this.parsePrimary();
                  if (h.value.charAt(0) === "_" && this.fail("parseFrom: names starting with an underscore cannot be imported", h.lineno, h.colno), this.skipSymbol("as")) {
                    var t = this.parsePrimary();
                    i.addChild(new E.Pair(h.lineno, h.colno, h, t));
                  } else
                    i.addChild(h);
                  p = this.parseWithContext();
                }
                return new E.FromImport(e.lineno, e.colno, n, i, p);
              }, g.parseBlock = function() {
                var e = this.peekToken();
                this.skipSymbol("block") || this.fail("parseBlock: expected block", e.lineno, e.colno);
                var n = new E.Block(e.lineno, e.colno);
                n.name = this.parsePrimary(), n.name instanceof E.Symbol || this.fail("parseBlock: variable name expected", e.lineno, e.colno), this.advanceAfterBlockEnd(e.value), n.body = this.parseUntilBlocks("endblock"), this.skipSymbol("endblock"), this.skipSymbol(n.name.value);
                var i = this.peekToken();
                return i || this.fail("parseBlock: expected endblock, got end of file"), this.advanceAfterBlockEnd(i.value), n;
              }, g.parseExtends = function() {
                var e = "extends", n = this.peekToken();
                this.skipSymbol(e) || this.fail("parseTemplateRef: expected " + e);
                var i = new E.Extends(n.lineno, n.colno);
                return i.template = this.parseExpression(), this.advanceAfterBlockEnd(n.value), i;
              }, g.parseInclude = function() {
                var e = "include", n = this.peekToken();
                this.skipSymbol(e) || this.fail("parseInclude: expected " + e);
                var i = new E.Include(n.lineno, n.colno);
                return i.template = this.parseExpression(), this.skipSymbol("ignore") && this.skipSymbol("missing") && (i.ignoreMissing = !0), this.advanceAfterBlockEnd(n.value), i;
              }, g.parseIf = function() {
                var e = this.peekToken(), n;
                this.skipSymbol("if") || this.skipSymbol("elif") || this.skipSymbol("elseif") ? n = new E.If(e.lineno, e.colno) : this.skipSymbol("ifAsync") ? n = new E.IfAsync(e.lineno, e.colno) : this.fail("parseIf: expected if, elif, or elseif", e.lineno, e.colno), n.cond = this.parseExpression(), this.advanceAfterBlockEnd(e.value), n.body = this.parseUntilBlocks("elif", "elseif", "else", "endif");
                var i = this.peekToken();
                switch (i && i.value) {
                  case "elseif":
                  case "elif":
                    n.else_ = this.parseIf();
                    break;
                  case "else":
                    this.advanceAfterBlockEnd(), n.else_ = this.parseUntilBlocks("endif"), this.advanceAfterBlockEnd();
                    break;
                  case "endif":
                    n.else_ = null, this.advanceAfterBlockEnd();
                    break;
                  default:
                    this.fail("parseIf: expected elif, else, or endif, got end of file");
                }
                return n;
              }, g.parseSet = function() {
                var e = this.peekToken();
                this.skipSymbol("set") || this.fail("parseSet: expected set", e.lineno, e.colno);
                for (var n = new E.Set(e.lineno, e.colno, []), i; (i = this.parsePrimary()) && (n.targets.push(i), !!this.skip(v.TOKEN_COMMA)); )
                  ;
                return this.skipValue(v.TOKEN_OPERATOR, "=") ? (n.value = this.parseExpression(), this.advanceAfterBlockEnd(e.value)) : this.skip(v.TOKEN_BLOCK_END) ? (n.body = new E.Capture(e.lineno, e.colno, this.parseUntilBlocks("endset")), n.value = null, this.advanceAfterBlockEnd()) : this.fail("parseSet: expected = or block end in set tag", e.lineno, e.colno), n;
              }, g.parseSwitch = function() {
                var e = "switch", n = "endswitch", i = "case", p = "default", l = this.peekToken();
                !this.skipSymbol(e) && !this.skipSymbol(i) && !this.skipSymbol(p) && this.fail('parseSwitch: expected "switch," "case" or "default"', l.lineno, l.colno);
                var h = this.parseExpression();
                this.advanceAfterBlockEnd(e), this.parseUntilBlocks(i, p, n);
                var t = this.peekToken(), r = [], a;
                do {
                  this.skipSymbol(i);
                  var o = this.parseExpression();
                  this.advanceAfterBlockEnd(e);
                  var s = this.parseUntilBlocks(i, p, n);
                  r.push(new E.Case(t.line, t.col, o, s)), t = this.peekToken();
                } while (t && t.value === i);
                switch (t.value) {
                  case p:
                    this.advanceAfterBlockEnd(), a = this.parseUntilBlocks(n), this.advanceAfterBlockEnd();
                    break;
                  case n:
                    this.advanceAfterBlockEnd();
                    break;
                  default:
                    this.fail('parseSwitch: expected "case," "default" or "endswitch," got EOF.');
                }
                return new E.Switch(l.lineno, l.colno, h, r, a);
              }, g.parseStatement = function() {
                var e = this.peekToken(), n;
                if (e.type !== v.TOKEN_SYMBOL && this.fail("tag name expected", e.lineno, e.colno), this.breakOnBlocks && O.indexOf(this.breakOnBlocks, e.value) !== -1)
                  return null;
                switch (e.value) {
                  case "raw":
                    return this.parseRaw();
                  case "verbatim":
                    return this.parseRaw("verbatim");
                  case "if":
                  case "ifAsync":
                    return this.parseIf();
                  case "for":
                  case "asyncEach":
                  case "asyncAll":
                    return this.parseFor();
                  case "block":
                    return this.parseBlock();
                  case "extends":
                    return this.parseExtends();
                  case "include":
                    return this.parseInclude();
                  case "set":
                    return this.parseSet();
                  case "macro":
                    return this.parseMacro();
                  case "call":
                    return this.parseCall();
                  case "import":
                    return this.parseImport();
                  case "from":
                    return this.parseFrom();
                  case "filter":
                    return this.parseFilterStatement();
                  case "switch":
                    return this.parseSwitch();
                  default:
                    if (this.extensions.length)
                      for (var i = 0; i < this.extensions.length; i++) {
                        var p = this.extensions[i];
                        if (O.indexOf(p.tags || [], e.value) !== -1)
                          return p.parse(this, E, v);
                      }
                    this.fail("unknown block tag: " + e.value, e.lineno, e.colno);
                }
                return n;
              }, g.parseRaw = function(e) {
                e = e || "raw";
                for (var n = "end" + e, i = new RegExp("([\\s\\S]*?){%\\s*(" + e + "|" + n + ")\\s*(?=%})%}"), p = 1, l = "", h = null, t = this.advanceAfterBlockEnd(); (h = this.tokens._extractRegex(i)) && p > 0; ) {
                  var r = h[0], a = h[1], o = h[2];
                  o === e ? p += 1 : o === n && (p -= 1), p === 0 ? (l += a, this.tokens.backN(r.length - a.length)) : l += r;
                }
                return new E.Output(t.lineno, t.colno, [new E.TemplateData(t.lineno, t.colno, l)]);
              }, g.parsePostfix = function(e) {
                for (var n, i = this.peekToken(); i; ) {
                  if (i.type === v.TOKEN_LEFT_PAREN)
                    e = new E.FunCall(i.lineno, i.colno, e, this.parseSignature());
                  else if (i.type === v.TOKEN_LEFT_BRACKET)
                    n = this.parseAggregate(), n.children.length > 1 && this.fail("invalid index"), e = new E.LookupVal(i.lineno, i.colno, e, n.children[0]);
                  else if (i.type === v.TOKEN_OPERATOR && i.value === ".") {
                    this.nextToken();
                    var p = this.nextToken();
                    p.type !== v.TOKEN_SYMBOL && this.fail("expected name as lookup value, got " + p.value, p.lineno, p.colno), n = new E.Literal(p.lineno, p.colno, p.value), e = new E.LookupVal(i.lineno, i.colno, e, n);
                  } else
                    break;
                  i = this.peekToken();
                }
                return e;
              }, g.parseExpression = function() {
                var e = this.parseInlineIf();
                return e;
              }, g.parseInlineIf = function() {
                var e = this.parseOr();
                if (this.skipSymbol("if")) {
                  var n = this.parseOr(), i = e;
                  e = new E.InlineIf(e.lineno, e.colno), e.body = i, e.cond = n, this.skipSymbol("else") ? e.else_ = this.parseOr() : e.else_ = null;
                }
                return e;
              }, g.parseOr = function() {
                for (var e = this.parseAnd(); this.skipSymbol("or"); ) {
                  var n = this.parseAnd();
                  e = new E.Or(e.lineno, e.colno, e, n);
                }
                return e;
              }, g.parseAnd = function() {
                for (var e = this.parseNot(); this.skipSymbol("and"); ) {
                  var n = this.parseNot();
                  e = new E.And(e.lineno, e.colno, e, n);
                }
                return e;
              }, g.parseNot = function() {
                var e = this.peekToken();
                return this.skipSymbol("not") ? new E.Not(e.lineno, e.colno, this.parseNot()) : this.parseIn();
              }, g.parseIn = function() {
                for (var e = this.parseIs(); ; ) {
                  var n = this.nextToken();
                  if (!n)
                    break;
                  var i = n.type === v.TOKEN_SYMBOL && n.value === "not";
                  if (i || this.pushToken(n), this.skipSymbol("in")) {
                    var p = this.parseIs();
                    e = new E.In(e.lineno, e.colno, e, p), i && (e = new E.Not(e.lineno, e.colno, e));
                  } else {
                    i && this.pushToken(n);
                    break;
                  }
                }
                return e;
              }, g.parseIs = function() {
                var e = this.parseCompare();
                if (this.skipSymbol("is")) {
                  var n = this.skipSymbol("not"), i = this.parseCompare();
                  e = new E.Is(e.lineno, e.colno, e, i), n && (e = new E.Not(e.lineno, e.colno, e));
                }
                return e;
              }, g.parseCompare = function() {
                for (var e = ["==", "===", "!=", "!==", "<", ">", "<=", ">="], n = this.parseConcat(), i = []; ; ) {
                  var p = this.nextToken();
                  if (p)
                    if (e.indexOf(p.value) !== -1)
                      i.push(new E.CompareOperand(p.lineno, p.colno, this.parseConcat(), p.value));
                    else {
                      this.pushToken(p);
                      break;
                    }
                  else break;
                }
                return i.length ? new E.Compare(i[0].lineno, i[0].colno, n, i) : n;
              }, g.parseConcat = function() {
                for (var e = this.parseAdd(); this.skipValue(v.TOKEN_TILDE, "~"); ) {
                  var n = this.parseAdd();
                  e = new E.Concat(e.lineno, e.colno, e, n);
                }
                return e;
              }, g.parseAdd = function() {
                for (var e = this.parseSub(); this.skipValue(v.TOKEN_OPERATOR, "+"); ) {
                  var n = this.parseSub();
                  e = new E.Add(e.lineno, e.colno, e, n);
                }
                return e;
              }, g.parseSub = function() {
                for (var e = this.parseMul(); this.skipValue(v.TOKEN_OPERATOR, "-"); ) {
                  var n = this.parseMul();
                  e = new E.Sub(e.lineno, e.colno, e, n);
                }
                return e;
              }, g.parseMul = function() {
                for (var e = this.parseDiv(); this.skipValue(v.TOKEN_OPERATOR, "*"); ) {
                  var n = this.parseDiv();
                  e = new E.Mul(e.lineno, e.colno, e, n);
                }
                return e;
              }, g.parseDiv = function() {
                for (var e = this.parseFloorDiv(); this.skipValue(v.TOKEN_OPERATOR, "/"); ) {
                  var n = this.parseFloorDiv();
                  e = new E.Div(e.lineno, e.colno, e, n);
                }
                return e;
              }, g.parseFloorDiv = function() {
                for (var e = this.parseMod(); this.skipValue(v.TOKEN_OPERATOR, "//"); ) {
                  var n = this.parseMod();
                  e = new E.FloorDiv(e.lineno, e.colno, e, n);
                }
                return e;
              }, g.parseMod = function() {
                for (var e = this.parsePow(); this.skipValue(v.TOKEN_OPERATOR, "%"); ) {
                  var n = this.parsePow();
                  e = new E.Mod(e.lineno, e.colno, e, n);
                }
                return e;
              }, g.parsePow = function() {
                for (var e = this.parseUnary(); this.skipValue(v.TOKEN_OPERATOR, "**"); ) {
                  var n = this.parseUnary();
                  e = new E.Pow(e.lineno, e.colno, e, n);
                }
                return e;
              }, g.parseUnary = function(e) {
                var n = this.peekToken(), i;
                return this.skipValue(v.TOKEN_OPERATOR, "-") ? i = new E.Neg(n.lineno, n.colno, this.parseUnary(!0)) : this.skipValue(v.TOKEN_OPERATOR, "+") ? i = new E.Pos(n.lineno, n.colno, this.parseUnary(!0)) : i = this.parsePrimary(), e || (i = this.parseFilter(i)), i;
              }, g.parsePrimary = function(e) {
                var n = this.nextToken(), i, p = null;
                if (n ? n.type === v.TOKEN_STRING ? i = n.value : n.type === v.TOKEN_INT ? i = parseInt(n.value, 10) : n.type === v.TOKEN_FLOAT ? i = parseFloat(n.value) : n.type === v.TOKEN_BOOLEAN ? n.value === "true" ? i = !0 : n.value === "false" ? i = !1 : this.fail("invalid boolean: " + n.value, n.lineno, n.colno) : n.type === v.TOKEN_NONE ? i = null : n.type === v.TOKEN_REGEX && (i = new RegExp(n.value.body, n.value.flags)) : this.fail("expected expression, got end of file"), i !== void 0 ? p = new E.Literal(n.lineno, n.colno, i) : n.type === v.TOKEN_SYMBOL ? p = new E.Symbol(n.lineno, n.colno, n.value) : (this.pushToken(n), p = this.parseAggregate()), e || (p = this.parsePostfix(p)), p)
                  return p;
                throw this.error("unexpected token: " + n.value, n.lineno, n.colno);
              }, g.parseFilterName = function() {
                for (var e = this.expect(v.TOKEN_SYMBOL), n = e.value; this.skipValue(v.TOKEN_OPERATOR, "."); )
                  n += "." + this.expect(v.TOKEN_SYMBOL).value;
                return new E.Symbol(e.lineno, e.colno, n);
              }, g.parseFilterArgs = function(e) {
                if (this.peekToken().type === v.TOKEN_LEFT_PAREN) {
                  var n = this.parsePostfix(e);
                  return n.args.children;
                }
                return [];
              }, g.parseFilter = function(e) {
                for (; this.skip(v.TOKEN_PIPE); ) {
                  var n = this.parseFilterName();
                  e = new E.Filter(n.lineno, n.colno, n, new E.NodeList(n.lineno, n.colno, [e].concat(this.parseFilterArgs(e))));
                }
                return e;
              }, g.parseFilterStatement = function() {
                var e = this.peekToken();
                this.skipSymbol("filter") || this.fail("parseFilterStatement: expected filter");
                var n = this.parseFilterName(), i = this.parseFilterArgs(n);
                this.advanceAfterBlockEnd(e.value);
                var p = new E.Capture(n.lineno, n.colno, this.parseUntilBlocks("endfilter"));
                this.advanceAfterBlockEnd();
                var l = new E.Filter(n.lineno, n.colno, n, new E.NodeList(n.lineno, n.colno, [p].concat(i)));
                return new E.Output(n.lineno, n.colno, [l]);
              }, g.parseAggregate = function() {
                var e = this.nextToken(), n;
                switch (e.type) {
                  case v.TOKEN_LEFT_PAREN:
                    n = new E.Group(e.lineno, e.colno);
                    break;
                  case v.TOKEN_LEFT_BRACKET:
                    n = new E.Array(e.lineno, e.colno);
                    break;
                  case v.TOKEN_LEFT_CURLY:
                    n = new E.Dict(e.lineno, e.colno);
                    break;
                  default:
                    return null;
                }
                for (; ; ) {
                  var i = this.peekToken().type;
                  if (i === v.TOKEN_RIGHT_PAREN || i === v.TOKEN_RIGHT_BRACKET || i === v.TOKEN_RIGHT_CURLY) {
                    this.nextToken();
                    break;
                  }
                  if (n.children.length > 0 && (this.skip(v.TOKEN_COMMA) || this.fail("parseAggregate: expected comma after expression", e.lineno, e.colno)), n instanceof E.Dict) {
                    var p = this.parsePrimary();
                    this.skip(v.TOKEN_COLON) || this.fail("parseAggregate: expected colon after dict key", e.lineno, e.colno);
                    var l = this.parseExpression();
                    n.addChild(new E.Pair(p.lineno, p.colno, p, l));
                  } else {
                    var h = this.parseExpression();
                    n.addChild(h);
                  }
                }
                return n;
              }, g.parseSignature = function(e, n) {
                var i = this.peekToken();
                if (!n && i.type !== v.TOKEN_LEFT_PAREN) {
                  if (e)
                    return null;
                  this.fail("expected arguments", i.lineno, i.colno);
                }
                i.type === v.TOKEN_LEFT_PAREN && (i = this.nextToken());
                for (var p = new E.NodeList(i.lineno, i.colno), l = new E.KeywordArgs(i.lineno, i.colno), h = !1; ; ) {
                  if (i = this.peekToken(), !n && i.type === v.TOKEN_RIGHT_PAREN) {
                    this.nextToken();
                    break;
                  } else if (n && i.type === v.TOKEN_BLOCK_END)
                    break;
                  if (h && !this.skip(v.TOKEN_COMMA))
                    this.fail("parseSignature: expected comma after expression", i.lineno, i.colno);
                  else {
                    var t = this.parseExpression();
                    this.skipValue(v.TOKEN_OPERATOR, "=") ? l.addChild(new E.Pair(t.lineno, t.colno, t, this.parseExpression())) : p.addChild(t);
                  }
                  h = !0;
                }
                return l.children.length && p.addChild(l), p;
              }, g.parseUntilBlocks = function() {
                for (var e = this.breakOnBlocks, n = arguments.length, i = new Array(n), p = 0; p < n; p++)
                  i[p] = arguments[p];
                this.breakOnBlocks = i;
                var l = this.parse();
                return this.breakOnBlocks = e, l;
              }, g.parseNodes = function() {
                for (var e, n = []; e = this.nextToken(); )
                  if (e.type === v.TOKEN_DATA) {
                    var i = e.value, p = this.peekToken(), l = p && p.value;
                    this.dropLeadingWhitespace && (i = i.replace(/^\s*/, ""), this.dropLeadingWhitespace = !1), p && (p.type === v.TOKEN_BLOCK_START && l.charAt(l.length - 1) === "-" || p.type === v.TOKEN_VARIABLE_START && l.charAt(this.tokens.tags.VARIABLE_START.length) === "-" || p.type === v.TOKEN_COMMENT && l.charAt(this.tokens.tags.COMMENT_START.length) === "-") && (i = i.replace(/\s*$/, "")), n.push(new E.Output(e.lineno, e.colno, [new E.TemplateData(e.lineno, e.colno, i)]));
                  } else if (e.type === v.TOKEN_BLOCK_START) {
                    this.dropLeadingWhitespace = !1;
                    var h = this.parseStatement();
                    if (!h)
                      break;
                    n.push(h);
                  } else if (e.type === v.TOKEN_VARIABLE_START) {
                    var t = this.parseExpression();
                    this.dropLeadingWhitespace = !1, this.advanceAfterVariableEnd(), n.push(new E.Output(e.lineno, e.colno, [t]));
                  } else e.type === v.TOKEN_COMMENT ? this.dropLeadingWhitespace = e.value.charAt(e.value.length - this.tokens.tags.COMMENT_END.length - 1) === "-" : this.fail("Unexpected token at top-level: " + e.type, e.lineno, e.colno);
                return n;
              }, g.parse = function() {
                return new E.NodeList(0, 0, this.parseNodes());
              }, g.parseAsRoot = function() {
                return new E.Root(0, 0, this.parseNodes());
              }, C;
            })(y);
            U.exports = {
              parse: function(C, g, L) {
                var e = new P(v.lex(C, L));
                return g !== void 0 && (e.extensions = g), e.parseAsRoot();
              },
              Parser: P
            };
          }),
          /* 9 */
          /***/
          (function(U, j, N) {
            var _ = N(0), x = ` 
	\r `, v = "()[]{}%*-+~/#,:|.<>=!", E = "0123456789", y = "{%", O = "%}", P = "{{", I = "}}", C = "{#", g = "#}", L = "string", e = "whitespace", n = "data", i = "block-start", p = "block-end", l = "variable-start", h = "variable-end", t = "comment", r = "left-paren", a = "right-paren", o = "left-bracket", s = "right-bracket", c = "left-curly", u = "right-curly", k = "operator", T = "comma", b = "colon", A = "tilde", R = "pipe", d = "int", f = "float", w = "boolean", F = "none", B = "symbol", V = "special", Z = "regex";
            function $(ue, X, Q, D) {
              return {
                type: ue,
                value: X,
                lineno: Q,
                colno: D
              };
            }
            var se = /* @__PURE__ */ (function() {
              function ue(Q, D) {
                this.str = Q, this.index = 0, this.len = Q.length, this.lineno = 0, this.colno = 0, this.in_code = !1, D = D || {};
                var W = D.tags || {};
                this.tags = {
                  BLOCK_START: W.blockStart || y,
                  BLOCK_END: W.blockEnd || O,
                  VARIABLE_START: W.variableStart || P,
                  VARIABLE_END: W.variableEnd || I,
                  COMMENT_START: W.commentStart || C,
                  COMMENT_END: W.commentEnd || g
                }, this.trimBlocks = !!D.trimBlocks, this.lstripBlocks = !!D.lstripBlocks;
              }
              var X = ue.prototype;
              return X.nextToken = function() {
                var D = this.lineno, W = this.colno, G;
                if (this.in_code) {
                  var te = this.current();
                  if (this.isFinished())
                    return null;
                  if (te === '"' || te === "'")
                    return $(L, this._parseString(te), D, W);
                  if (G = this._extract(x))
                    return $(e, G, D, W);
                  if ((G = this._extractString(this.tags.BLOCK_END)) || (G = this._extractString("-" + this.tags.BLOCK_END)))
                    return this.in_code = !1, this.trimBlocks && (te = this.current(), te === `
` ? this.forward() : te === "\r" && (this.forward(), te = this.current(), te === `
` ? this.forward() : this.back())), $(p, G, D, W);
                  if ((G = this._extractString(this.tags.VARIABLE_END)) || (G = this._extractString("-" + this.tags.VARIABLE_END)))
                    return this.in_code = !1, $(h, G, D, W);
                  if (te === "r" && this.str.charAt(this.index + 1) === "/") {
                    this.forwardN(2);
                    for (var ce = ""; !this.isFinished(); )
                      if (this.current() === "/" && this.previous() !== "\\") {
                        this.forward();
                        break;
                      } else
                        ce += this.current(), this.forward();
                    for (var le = ["g", "i", "m", "y"], me = ""; !this.isFinished(); ) {
                      var m = le.indexOf(this.current()) !== -1;
                      if (m)
                        me += this.current(), this.forward();
                      else
                        break;
                    }
                    return $(Z, {
                      body: ce,
                      flags: me
                    }, D, W);
                  } else if (v.indexOf(te) !== -1) {
                    this.forward();
                    var S = ["==", "===", "!=", "!==", "<=", ">=", "//", "**"], M = te + this.current(), K;
                    switch (_.indexOf(S, M) !== -1 && (this.forward(), te = M, _.indexOf(S, M + this.current()) !== -1 && (te = M + this.current(), this.forward())), te) {
                      case "(":
                        K = r;
                        break;
                      case ")":
                        K = a;
                        break;
                      case "[":
                        K = o;
                        break;
                      case "]":
                        K = s;
                        break;
                      case "{":
                        K = c;
                        break;
                      case "}":
                        K = u;
                        break;
                      case ",":
                        K = T;
                        break;
                      case ":":
                        K = b;
                        break;
                      case "~":
                        K = A;
                        break;
                      case "|":
                        K = R;
                        break;
                      default:
                        K = k;
                    }
                    return $(K, te, D, W);
                  } else if (G = this._extractUntil(x + v), G.match(/^[-+]?[0-9]+$/))
                    if (this.current() === ".") {
                      this.forward();
                      var z = this._extract(E);
                      return $(f, G + "." + z, D, W);
                    } else
                      return $(d, G, D, W);
                  else {
                    if (G.match(/^(true|false)$/))
                      return $(w, G, D, W);
                    if (G === "none")
                      return $(F, G, D, W);
                    if (G === "null")
                      return $(F, G, D, W);
                    if (G)
                      return $(B, G, D, W);
                    throw new Error("Unexpected value while parsing: " + G);
                  }
                } else {
                  var J = this.tags.BLOCK_START.charAt(0) + this.tags.VARIABLE_START.charAt(0) + this.tags.COMMENT_START.charAt(0) + this.tags.COMMENT_END.charAt(0);
                  if (this.isFinished())
                    return null;
                  if ((G = this._extractString(this.tags.BLOCK_START + "-")) || (G = this._extractString(this.tags.BLOCK_START)))
                    return this.in_code = !0, $(i, G, D, W);
                  if ((G = this._extractString(this.tags.VARIABLE_START + "-")) || (G = this._extractString(this.tags.VARIABLE_START)))
                    return this.in_code = !0, $(l, G, D, W);
                  G = "";
                  var re, q = !1;
                  for (this._matches(this.tags.COMMENT_START) && (q = !0, G = this._extractString(this.tags.COMMENT_START)); (re = this._extractUntil(J)) !== null; )
                    if (G += re, (this._matches(this.tags.BLOCK_START) || this._matches(this.tags.VARIABLE_START) || this._matches(this.tags.COMMENT_START)) && !q) {
                      if (this.lstripBlocks && this._matches(this.tags.BLOCK_START) && this.colno > 0 && this.colno <= G.length) {
                        var oe = G.slice(-this.colno);
                        if (/^\s+$/.test(oe) && (G = G.slice(0, -this.colno), !G.length))
                          return this.nextToken();
                      }
                      break;
                    } else if (this._matches(this.tags.COMMENT_END)) {
                      if (!q)
                        throw new Error("unexpected end of comment");
                      G += this._extractString(this.tags.COMMENT_END);
                      break;
                    } else
                      G += this.current(), this.forward();
                  if (re === null && q)
                    throw new Error("expected end of comment, got end of file");
                  return $(q ? t : n, G, D, W);
                }
              }, X._parseString = function(D) {
                this.forward();
                for (var W = ""; !this.isFinished() && this.current() !== D; ) {
                  var G = this.current();
                  if (G === "\\") {
                    switch (this.forward(), this.current()) {
                      case "n":
                        W += `
`;
                        break;
                      case "t":
                        W += "	";
                        break;
                      case "r":
                        W += "\r";
                        break;
                      default:
                        W += this.current();
                    }
                    this.forward();
                  } else
                    W += G, this.forward();
                }
                return this.forward(), W;
              }, X._matches = function(D) {
                if (this.index + D.length > this.len)
                  return null;
                var W = this.str.slice(this.index, this.index + D.length);
                return W === D;
              }, X._extractString = function(D) {
                return this._matches(D) ? (this.forwardN(D.length), D) : null;
              }, X._extractUntil = function(D) {
                return this._extractMatching(!0, D || "");
              }, X._extract = function(D) {
                return this._extractMatching(!1, D);
              }, X._extractMatching = function(D, W) {
                if (this.isFinished())
                  return null;
                var G = W.indexOf(this.current());
                if (D && G === -1 || !D && G !== -1) {
                  var te = this.current();
                  this.forward();
                  for (var ce = W.indexOf(this.current()); (D && ce === -1 || !D && ce !== -1) && !this.isFinished(); )
                    te += this.current(), this.forward(), ce = W.indexOf(this.current());
                  return te;
                }
                return "";
              }, X._extractRegex = function(D) {
                var W = this.currentStr().match(D);
                return W ? (this.forwardN(W[0].length), W) : null;
              }, X.isFinished = function() {
                return this.index >= this.len;
              }, X.forwardN = function(D) {
                for (var W = 0; W < D; W++)
                  this.forward();
              }, X.forward = function() {
                this.index++, this.previous() === `
` ? (this.lineno++, this.colno = 0) : this.colno++;
              }, X.backN = function(D) {
                for (var W = 0; W < D; W++)
                  this.back();
              }, X.back = function() {
                if (this.index--, this.current() === `
`) {
                  this.lineno--;
                  var D = this.src.lastIndexOf(`
`, this.index - 1);
                  D === -1 ? this.colno = this.index : this.colno = this.index - D;
                } else
                  this.colno--;
              }, X.current = function() {
                return this.isFinished() ? "" : this.str.charAt(this.index);
              }, X.currentStr = function() {
                return this.isFinished() ? "" : this.str.substr(this.index);
              }, X.previous = function() {
                return this.str.charAt(this.index - 1);
              }, ue;
            })();
            U.exports = {
              lex: function(X, Q) {
                return new se(X, Q);
              },
              TOKEN_STRING: L,
              TOKEN_WHITESPACE: e,
              TOKEN_DATA: n,
              TOKEN_BLOCK_START: i,
              TOKEN_BLOCK_END: p,
              TOKEN_VARIABLE_START: l,
              TOKEN_VARIABLE_END: h,
              TOKEN_COMMENT: t,
              TOKEN_LEFT_PAREN: r,
              TOKEN_RIGHT_PAREN: a,
              TOKEN_LEFT_BRACKET: o,
              TOKEN_RIGHT_BRACKET: s,
              TOKEN_LEFT_CURLY: c,
              TOKEN_RIGHT_CURLY: u,
              TOKEN_OPERATOR: k,
              TOKEN_COMMA: T,
              TOKEN_COLON: b,
              TOKEN_TILDE: A,
              TOKEN_PIPE: R,
              TOKEN_INT: d,
              TOKEN_FLOAT: f,
              TOKEN_BOOLEAN: w,
              TOKEN_NONE: F,
              TOKEN_SYMBOL: B,
              TOKEN_SPECIAL: V,
              TOKEN_REGEX: Z
            };
          }),
          /* 10 */
          /***/
          (function(U, j, N) {
            function _(P, I) {
              P.prototype = Object.create(I.prototype), P.prototype.constructor = P, x(P, I);
            }
            function x(P, I) {
              return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(g, L) {
                return g.__proto__ = L, g;
              }, x(P, I);
            }
            var v = N(6), E = N(19), y = E.PrecompiledLoader, O = /* @__PURE__ */ (function(P) {
              _(I, P);
              function I(g, L) {
                var e;
                return e = P.call(this) || this, e.baseURL = g || ".", L = L || {}, e.useCache = !!L.useCache, e.async = !!L.async, e;
              }
              var C = I.prototype;
              return C.resolve = function(L, e) {
                throw new Error("relative templates not support in the browser yet");
              }, C.getSource = function(L, e) {
                var n = this, i = this.useCache, p;
                return this.fetch(this.baseURL + "/" + L, function(l, h) {
                  if (l)
                    if (e)
                      e(l.content);
                    else if (l.status === 404)
                      p = null;
                    else
                      throw l.content;
                  else
                    p = {
                      src: h,
                      path: L,
                      noCache: !i
                    }, n.emit("load", L, p), e && e(null, p);
                }), p;
              }, C.fetch = function(L, e) {
                if (typeof window > "u")
                  throw new Error("WebLoader can only by used in a browser");
                var n = new XMLHttpRequest(), i = !0;
                n.onreadystatechange = function() {
                  n.readyState === 4 && i && (i = !1, n.status === 0 || n.status === 200 ? e(null, n.responseText) : e({
                    status: n.status,
                    content: n.responseText
                  }));
                }, L += (L.indexOf("?") === -1 ? "?" : "&") + "s=" + (/* @__PURE__ */ new Date()).getTime(), n.open("GET", L, this.async), n.send();
              }, I;
            })(v);
            U.exports = {
              WebLoader: O,
              PrecompiledLoader: y
            };
          }),
          /* 11 */
          /***/
          (function(U, j, N) {
            var _ = N(0), x = N(7), v = x.Environment, E = x.Template, y = N(6), O = N(10), P = N(23), I = N(5), C = N(8), g = N(9), L = N(2), e = N(3), n = N(25), i;
            function p(l, h) {
              h = h || {}, _.isObject(l) && (h = l, l = null);
              var t;
              return O.FileSystemLoader ? t = new O.FileSystemLoader(l, {
                watch: h.watch,
                noCache: h.noCache
              }) : O.WebLoader && (t = new O.WebLoader(l, {
                useCache: h.web && h.web.useCache,
                async: h.web && h.web.async
              })), i = new v(t, h), h && h.express && i.express(h.express), i;
            }
            U.exports = {
              Environment: v,
              Template: E,
              Loader: y,
              FileSystemLoader: O.FileSystemLoader,
              NodeResolveLoader: O.NodeResolveLoader,
              PrecompiledLoader: O.PrecompiledLoader,
              WebLoader: O.WebLoader,
              compiler: I,
              parser: C,
              lexer: g,
              runtime: L,
              lib: _,
              nodes: e,
              installJinjaCompat: n,
              configure: p,
              reset: function() {
                i = void 0;
              },
              compile: function(h, t, r, a) {
                return i || p(), new E(h, t, r, a);
              },
              render: function(h, t, r) {
                return i || p(), i.render(h, t, r);
              },
              renderString: function(h, t, r) {
                return i || p(), i.renderString(h, t, r);
              },
              precompile: P ? P.precompile : void 0,
              precompileString: P ? P.precompileString : void 0
            };
          }),
          /* 12 */
          /***/
          (function(U, j, N) {
            var _ = N(13), x = [], v = [], E = _.makeRequestCallFromTimer(y);
            function y() {
              if (v.length)
                throw v.shift();
            }
            U.exports = O;
            function O(I) {
              var C;
              x.length ? C = x.pop() : C = new P(), C.task = I, _(C);
            }
            function P() {
              this.task = null;
            }
            P.prototype.call = function() {
              try {
                this.task.call();
              } catch (I) {
                O.onerror ? O.onerror(I) : (v.push(I), E());
              } finally {
                this.task = null, x[x.length] = this;
              }
            };
          }),
          /* 13 */
          /***/
          (function(U, j, N) {
            (function(_) {
              U.exports = x;
              function x(e) {
                v.length || E(), v[v.length] = e;
              }
              var v = [], E, y = 0, O = 1024;
              function P() {
                for (; y < v.length; ) {
                  var e = y;
                  if (y = y + 1, v[e].call(), y > O) {
                    for (var n = 0, i = v.length - y; n < i; n++)
                      v[n] = v[n + y];
                    v.length -= y, y = 0;
                  }
                }
                v.length = 0, y = 0;
              }
              var I = typeof _ < "u" ? _ : self, C = I.MutationObserver || I.WebKitMutationObserver;
              typeof C == "function" ? E = g(P) : E = L(P), x.requestFlush = E;
              function g(e) {
                var n = 1, i = new C(e), p = document.createTextNode("");
                return i.observe(p, { characterData: !0 }), function() {
                  n = -n, p.data = n;
                };
              }
              function L(e) {
                return function() {
                  var i = setTimeout(l, 0), p = setInterval(l, 50);
                  function l() {
                    clearTimeout(i), clearInterval(p), e();
                  }
                };
              }
              x.makeRequestCallFromTimer = L;
            }).call(j, N(14));
          }),
          /* 14 */
          /***/
          (function(U, j) {
            var N;
            N = /* @__PURE__ */ (function() {
              return this;
            })();
            try {
              N = N || Function("return this")() || (0, eval)("this");
            } catch {
              typeof window == "object" && (N = window);
            }
            U.exports = N;
          }),
          /* 15 */
          /***/
          (function(U, j, N) {
            var _, x;
            (function(v) {
              var E = function() {
                var C = Array.prototype.slice.call(arguments);
                typeof C[0] == "function" && C[0].apply(null, C.splice(1));
              }, y = function(C) {
                typeof setImmediate == "function" ? setImmediate(C) : typeof process < "u" && process.nextTick ? process.nextTick(C) : setTimeout(C, 0);
              }, O = function(C) {
                var g = function(L) {
                  var e = function() {
                    return C.length && C[L].apply(null, arguments), e.next();
                  };
                  return e.next = function() {
                    return L < C.length - 1 ? g(L + 1) : null;
                  }, e;
                };
                return g(0);
              }, P = Array.isArray || function(C) {
                return Object.prototype.toString.call(C) === "[object Array]";
              }, I = function(C, g, L) {
                var e = L ? y : E;
                if (g = g || function() {
                }, !P(C)) {
                  var n = new Error("First argument to waterfall must be an array of functions");
                  return g(n);
                }
                if (!C.length)
                  return g();
                var i = function(p) {
                  return function(l) {
                    if (l)
                      g.apply(null, arguments), g = function() {
                      };
                    else {
                      var h = Array.prototype.slice.call(arguments, 1), t = p.next();
                      t ? h.push(i(t)) : h.push(g), e(function() {
                        p.apply(null, h);
                      });
                    }
                  };
                };
                i(O(C))();
              };
              _ = [], x = (function() {
                return I;
              }).apply(j, _), x !== void 0 && (U.exports = x);
            })();
          }),
          /* 16 */
          /***/
          (function(U, j, N) {
            var _ = typeof Reflect == "object" ? Reflect : null, x = _ && typeof _.apply == "function" ? _.apply : function(s, c, u) {
              return Function.prototype.apply.call(s, c, u);
            }, v;
            _ && typeof _.ownKeys == "function" ? v = _.ownKeys : Object.getOwnPropertySymbols ? v = function(s) {
              return Object.getOwnPropertyNames(s).concat(Object.getOwnPropertySymbols(s));
            } : v = function(s) {
              return Object.getOwnPropertyNames(s);
            };
            function E(o) {
              console && console.warn && console.warn(o);
            }
            var y = Number.isNaN || function(s) {
              return s !== s;
            };
            function O() {
              O.init.call(this);
            }
            U.exports = O, U.exports.once = t, O.EventEmitter = O, O.prototype._events = void 0, O.prototype._eventsCount = 0, O.prototype._maxListeners = void 0;
            var P = 10;
            function I(o) {
              if (typeof o != "function")
                throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof o);
            }
            Object.defineProperty(O, "defaultMaxListeners", {
              enumerable: !0,
              get: function() {
                return P;
              },
              set: function(o) {
                if (typeof o != "number" || o < 0 || y(o))
                  throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + o + ".");
                P = o;
              }
            }), O.init = function() {
              (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
            }, O.prototype.setMaxListeners = function(s) {
              if (typeof s != "number" || s < 0 || y(s))
                throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + s + ".");
              return this._maxListeners = s, this;
            };
            function C(o) {
              return o._maxListeners === void 0 ? O.defaultMaxListeners : o._maxListeners;
            }
            O.prototype.getMaxListeners = function() {
              return C(this);
            }, O.prototype.emit = function(s) {
              for (var c = [], u = 1; u < arguments.length; u++) c.push(arguments[u]);
              var k = s === "error", T = this._events;
              if (T !== void 0)
                k = k && T.error === void 0;
              else if (!k)
                return !1;
              if (k) {
                var b;
                if (c.length > 0 && (b = c[0]), b instanceof Error)
                  throw b;
                var A = new Error("Unhandled error." + (b ? " (" + b.message + ")" : ""));
                throw A.context = b, A;
              }
              var R = T[s];
              if (R === void 0)
                return !1;
              if (typeof R == "function")
                x(R, this, c);
              else
                for (var d = R.length, f = p(R, d), u = 0; u < d; ++u)
                  x(f[u], this, c);
              return !0;
            };
            function g(o, s, c, u) {
              var k, T, b;
              if (I(c), T = o._events, T === void 0 ? (T = o._events = /* @__PURE__ */ Object.create(null), o._eventsCount = 0) : (T.newListener !== void 0 && (o.emit(
                "newListener",
                s,
                c.listener ? c.listener : c
              ), T = o._events), b = T[s]), b === void 0)
                b = T[s] = c, ++o._eventsCount;
              else if (typeof b == "function" ? b = T[s] = u ? [c, b] : [b, c] : u ? b.unshift(c) : b.push(c), k = C(o), k > 0 && b.length > k && !b.warned) {
                b.warned = !0;
                var A = new Error("Possible EventEmitter memory leak detected. " + b.length + " " + String(s) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                A.name = "MaxListenersExceededWarning", A.emitter = o, A.type = s, A.count = b.length, E(A);
              }
              return o;
            }
            O.prototype.addListener = function(s, c) {
              return g(this, s, c, !1);
            }, O.prototype.on = O.prototype.addListener, O.prototype.prependListener = function(s, c) {
              return g(this, s, c, !0);
            };
            function L() {
              if (!this.fired)
                return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
            }
            function e(o, s, c) {
              var u = { fired: !1, wrapFn: void 0, target: o, type: s, listener: c }, k = L.bind(u);
              return k.listener = c, u.wrapFn = k, k;
            }
            O.prototype.once = function(s, c) {
              return I(c), this.on(s, e(this, s, c)), this;
            }, O.prototype.prependOnceListener = function(s, c) {
              return I(c), this.prependListener(s, e(this, s, c)), this;
            }, O.prototype.removeListener = function(s, c) {
              var u, k, T, b, A;
              if (I(c), k = this._events, k === void 0)
                return this;
              if (u = k[s], u === void 0)
                return this;
              if (u === c || u.listener === c)
                --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete k[s], k.removeListener && this.emit("removeListener", s, u.listener || c));
              else if (typeof u != "function") {
                for (T = -1, b = u.length - 1; b >= 0; b--)
                  if (u[b] === c || u[b].listener === c) {
                    A = u[b].listener, T = b;
                    break;
                  }
                if (T < 0)
                  return this;
                T === 0 ? u.shift() : l(u, T), u.length === 1 && (k[s] = u[0]), k.removeListener !== void 0 && this.emit("removeListener", s, A || c);
              }
              return this;
            }, O.prototype.off = O.prototype.removeListener, O.prototype.removeAllListeners = function(s) {
              var c, u, k;
              if (u = this._events, u === void 0)
                return this;
              if (u.removeListener === void 0)
                return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : u[s] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete u[s]), this;
              if (arguments.length === 0) {
                var T = Object.keys(u), b;
                for (k = 0; k < T.length; ++k)
                  b = T[k], b !== "removeListener" && this.removeAllListeners(b);
                return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
              }
              if (c = u[s], typeof c == "function")
                this.removeListener(s, c);
              else if (c !== void 0)
                for (k = c.length - 1; k >= 0; k--)
                  this.removeListener(s, c[k]);
              return this;
            };
            function n(o, s, c) {
              var u = o._events;
              if (u === void 0)
                return [];
              var k = u[s];
              return k === void 0 ? [] : typeof k == "function" ? c ? [k.listener || k] : [k] : c ? h(k) : p(k, k.length);
            }
            O.prototype.listeners = function(s) {
              return n(this, s, !0);
            }, O.prototype.rawListeners = function(s) {
              return n(this, s, !1);
            }, O.listenerCount = function(o, s) {
              return typeof o.listenerCount == "function" ? o.listenerCount(s) : i.call(o, s);
            }, O.prototype.listenerCount = i;
            function i(o) {
              var s = this._events;
              if (s !== void 0) {
                var c = s[o];
                if (typeof c == "function")
                  return 1;
                if (c !== void 0)
                  return c.length;
              }
              return 0;
            }
            O.prototype.eventNames = function() {
              return this._eventsCount > 0 ? v(this._events) : [];
            };
            function p(o, s) {
              for (var c = new Array(s), u = 0; u < s; ++u)
                c[u] = o[u];
              return c;
            }
            function l(o, s) {
              for (; s + 1 < o.length; s++)
                o[s] = o[s + 1];
              o.pop();
            }
            function h(o) {
              for (var s = new Array(o.length), c = 0; c < s.length; ++c)
                s[c] = o[c].listener || o[c];
              return s;
            }
            function t(o, s) {
              return new Promise(function(c, u) {
                function k(b) {
                  o.removeListener(s, T), u(b);
                }
                function T() {
                  typeof o.removeListener == "function" && o.removeListener("error", k), c([].slice.call(arguments));
                }
                a(o, s, T, { once: !0 }), s !== "error" && r(o, k, { once: !0 });
              });
            }
            function r(o, s, c) {
              typeof o.on == "function" && a(o, "error", s, c);
            }
            function a(o, s, c, u) {
              if (typeof o.on == "function")
                u.once ? o.once(s, c) : o.on(s, c);
              else if (typeof o.addEventListener == "function")
                o.addEventListener(s, function k(T) {
                  u.once && o.removeEventListener(s, k), c(T);
                });
              else
                throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof o);
            }
          }),
          /* 17 */
          /***/
          (function(U, j, N) {
            var _ = N(3), x = N(0), v = 0;
            function E() {
              return "hole_" + v++;
            }
            function y(i, p) {
              for (var l = null, h = 0; h < i.length; h++) {
                var t = p(i[h]);
                t !== i[h] && (l || (l = i.slice()), l[h] = t);
              }
              return l || i;
            }
            function O(i, p, l) {
              if (!(i instanceof _.Node))
                return i;
              if (!l) {
                var h = p(i);
                if (h && h !== i)
                  return h;
              }
              if (i instanceof _.NodeList) {
                var t = y(i.children, function(c) {
                  return O(c, p, l);
                });
                t !== i.children && (i = new _[i.typename](i.lineno, i.colno, t));
              } else if (i instanceof _.CallExtension) {
                var r = O(i.args, p, l), a = y(i.contentArgs, function(c) {
                  return O(c, p, l);
                });
                (r !== i.args || a !== i.contentArgs) && (i = new _[i.typename](i.extName, i.prop, r, a));
              } else {
                var o = i.fields.map(function(c) {
                  return i[c];
                }), s = y(o, function(c) {
                  return O(c, p, l);
                });
                s !== o && (i = new _[i.typename](i.lineno, i.colno), s.forEach(function(c, u) {
                  i[i.fields[u]] = c;
                }));
              }
              return l && p(i) || i;
            }
            function P(i, p) {
              return O(i, p, !0);
            }
            function I(i, p, l) {
              var h = [], t = P(l ? i[l] : i, function(r) {
                var a;
                return r instanceof _.Block ? r : ((r instanceof _.Filter && x.indexOf(p, r.name.value) !== -1 || r instanceof _.CallExtensionAsync) && (a = new _.Symbol(r.lineno, r.colno, E()), h.push(new _.FilterAsync(r.lineno, r.colno, r.name, r.args, a))), a);
              });
              return l ? i[l] = t : i = t, h.length ? (h.push(i), new _.NodeList(i.lineno, i.colno, h)) : i;
            }
            function C(i, p) {
              return P(i, function(l) {
                return l instanceof _.Output ? I(l, p) : l instanceof _.Set ? I(l, p, "value") : l instanceof _.For ? I(l, p, "arr") : l instanceof _.If ? I(l, p, "cond") : l instanceof _.CallExtension ? I(l, p, "args") : void 0;
              });
            }
            function g(i) {
              return O(i, function(p) {
                if (p instanceof _.Block) {
                  var l = !1, h = E();
                  p.body = O(p.body, function(t) {
                    if (t instanceof _.FunCall && t.name.value === "super")
                      return l = !0, new _.Symbol(t.lineno, t.colno, h);
                  }), l && p.body.children.unshift(new _.Super(0, 0, p.name, new _.Symbol(0, 0, h)));
                }
              });
            }
            function L(i) {
              return P(i, function(p) {
                if (!(!(p instanceof _.If) && !(p instanceof _.For))) {
                  var l = !1;
                  if (O(p, function(h) {
                    if (h instanceof _.FilterAsync || h instanceof _.IfAsync || h instanceof _.AsyncEach || h instanceof _.AsyncAll || h instanceof _.CallExtensionAsync)
                      return l = !0, h;
                  }), l) {
                    if (p instanceof _.If)
                      return new _.IfAsync(p.lineno, p.colno, p.cond, p.body, p.else_);
                    if (p instanceof _.For && !(p instanceof _.AsyncAll))
                      return new _.AsyncEach(p.lineno, p.colno, p.arr, p.name, p.body, p.else_);
                  }
                }
              });
            }
            function e(i, p) {
              return L(g(C(i, p)));
            }
            function n(i, p) {
              return e(i, p || []);
            }
            U.exports = {
              transform: n
            };
          }),
          /* 18 */
          /***/
          (function(U, v, N) {
            var _ = N(0), x = N(2), v = U.exports = {};
            function E(m, S) {
              return m == null || m === !1 ? S : m;
            }
            v.abs = Math.abs;
            function y(m) {
              return m !== m;
            }
            function O(m, S, M) {
              var K, z = [], J = [];
              for (K = 0; K < m.length; K++)
                K % S === 0 && J.length && (z.push(J), J = []), J.push(m[K]);
              if (J.length) {
                if (M)
                  for (K = J.length; K < S; K++)
                    J.push(M);
                z.push(J);
              }
              return z;
            }
            v.batch = O;
            function P(m) {
              m = E(m, "");
              var S = m.toLowerCase();
              return x.copySafeness(m, S.charAt(0).toUpperCase() + S.slice(1));
            }
            v.capitalize = P;
            function I(m, S) {
              if (m = E(m, ""), S = S || 80, m.length >= S)
                return m;
              var M = S - m.length, K = _.repeat(" ", M / 2 - M % 2), z = _.repeat(" ", M / 2);
              return x.copySafeness(m, K + m + z);
            }
            v.center = I;
            function C(m, S, M) {
              return M ? m || S : m !== void 0 ? m : S;
            }
            v.default = C;
            function g(m, S, M) {
              if (!_.isObject(m))
                throw new _.TemplateError("dictsort filter: val must be an object");
              var K = [];
              for (var z in m)
                K.push([z, m[z]]);
              var J;
              if (M === void 0 || M === "key")
                J = 0;
              else if (M === "value")
                J = 1;
              else
                throw new _.TemplateError("dictsort filter: You can only sort by either key or value");
              return K.sort(function(re, q) {
                var oe = re[J], pe = q[J];
                return S || (_.isString(oe) && (oe = oe.toUpperCase()), _.isString(pe) && (pe = pe.toUpperCase())), oe > pe ? 1 : oe === pe ? 0 : -1;
              }), K;
            }
            v.dictsort = g;
            function L(m, S) {
              return JSON.stringify(m, null, S);
            }
            v.dump = L;
            function e(m) {
              return m instanceof x.SafeString ? m : (m = m ?? "", x.markSafe(_.escape(m.toString())));
            }
            v.escape = e;
            function n(m) {
              return m instanceof x.SafeString ? m : (m = m ?? "", x.markSafe(m.toString()));
            }
            v.safe = n;
            function i(m) {
              return m[0];
            }
            v.first = i;
            function p(m) {
              return m = m ?? "", x.markSafe(_.escape(m.toString()));
            }
            v.forceescape = p;
            function l(m, S) {
              return _.groupBy(m, S, this.env.opts.throwOnUndefined);
            }
            v.groupby = l;
            function h(m, S, M) {
              if (m = E(m, ""), m === "")
                return "";
              S = S || 4;
              var K = m.split(`
`), z = _.repeat(" ", S), J = K.map(function(re, q) {
                return q === 0 && !M ? re : "" + z + re;
              }).join(`
`);
              return x.copySafeness(m, J);
            }
            v.indent = h;
            function t(m, S, M) {
              return S = S || "", M && (m = _.map(m, function(K) {
                return K[M];
              })), m.join(S);
            }
            v.join = t;
            function r(m) {
              return m[m.length - 1];
            }
            v.last = r;
            function a(m) {
              var S = E(m, "");
              return S !== void 0 ? typeof Map == "function" && S instanceof Map || typeof Set == "function" && S instanceof Set ? S.size : _.isObject(S) && !(S instanceof x.SafeString) ? _.keys(S).length : S.length : 0;
            }
            v.length = a;
            function o(m) {
              if (_.isString(m))
                return m.split("");
              if (_.isObject(m))
                return _._entries(m || {}).map(function(S) {
                  var M = S[0], K = S[1];
                  return {
                    key: M,
                    value: K
                  };
                });
              if (_.isArray(m))
                return m;
              throw new _.TemplateError("list filter: type not iterable");
            }
            v.list = o;
            function s(m) {
              return m = E(m, ""), m.toLowerCase();
            }
            v.lower = s;
            function c(m) {
              return m == null ? "" : x.copySafeness(m, m.replace(/\r\n|\n/g, `<br />
`));
            }
            v.nl2br = c;
            function u(m) {
              return m[Math.floor(Math.random() * m.length)];
            }
            v.random = u;
            function k(m) {
              function S(M, K, z) {
                K === void 0 && (K = "truthy");
                var J = this, re = J.env.getTest(K);
                return _.toArray(M).filter(function(oe) {
                  return re.call(J, oe, z) === m;
                });
              }
              return S;
            }
            v.reject = k(!1);
            function T(m, S) {
              return m.filter(function(M) {
                return !M[S];
              });
            }
            v.rejectattr = T, v.select = k(!0);
            function b(m, S) {
              return m.filter(function(M) {
                return !!M[S];
              });
            }
            v.selectattr = b;
            function A(m, S, M, K) {
              var z = m;
              if (S instanceof RegExp)
                return m.replace(S, M);
              typeof K > "u" && (K = -1);
              var J = "";
              if (typeof S == "number")
                S = "" + S;
              else if (typeof S != "string")
                return m;
              if (typeof m == "number" && (m = "" + m), typeof m != "string" && !(m instanceof x.SafeString))
                return m;
              if (S === "")
                return J = M + m.split("").join(M) + M, x.copySafeness(m, J);
              var re = m.indexOf(S);
              if (K === 0 || re === -1)
                return m;
              for (var q = 0, oe = 0; re > -1 && (K === -1 || oe < K); )
                J += m.substring(q, re) + M, q = re + S.length, oe++, re = m.indexOf(S, q);
              return q < m.length && (J += m.substring(q)), x.copySafeness(z, J);
            }
            v.replace = A;
            function R(m) {
              var S;
              return _.isString(m) ? S = o(m) : S = _.map(m, function(M) {
                return M;
              }), S.reverse(), _.isString(m) ? x.copySafeness(m, S.join("")) : S;
            }
            v.reverse = R;
            function d(m, S, M) {
              S = S || 0;
              var K = Math.pow(10, S), z;
              return M === "ceil" ? z = Math.ceil : M === "floor" ? z = Math.floor : z = Math.round, z(m * K) / K;
            }
            v.round = d;
            function f(m, S, M) {
              for (var K = Math.floor(m.length / S), z = m.length % S, J = [], re = 0, q = 0; q < S; q++) {
                var oe = re + q * K;
                q < z && re++;
                var pe = re + (q + 1) * K, ve = m.slice(oe, pe);
                M && q >= z && ve.push(M), J.push(ve);
              }
              return J;
            }
            v.slice = f;
            function w(m, S, M) {
              return M === void 0 && (M = 0), S && (m = _.map(m, function(K) {
                return K[S];
              })), M + m.reduce(function(K, z) {
                return K + z;
              }, 0);
            }
            v.sum = w, v.sort = x.makeMacro(["value", "reverse", "case_sensitive", "attribute"], [], function(S, M, K, z) {
              var J = this, re = _.map(S, function(oe) {
                return oe;
              }), q = _.getAttrGetter(z);
              return re.sort(function(oe, pe) {
                var ve = z ? q(oe) : oe, de = z ? q(pe) : pe;
                if (J.env.opts.throwOnUndefined && z && (ve === void 0 || de === void 0))
                  throw new TypeError('sort: attribute "' + z + '" resolved to undefined');
                return !K && _.isString(ve) && _.isString(de) && (ve = ve.toLowerCase(), de = de.toLowerCase()), ve < de ? M ? 1 : -1 : ve > de ? M ? -1 : 1 : 0;
              }), re;
            });
            function F(m) {
              return x.copySafeness(m, m);
            }
            v.string = F;
            function B(m, S) {
              m = E(m, "");
              var M = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi, K = Z(m.replace(M, "")), z = "";
              return S ? z = K.replace(/^ +| +$/gm, "").replace(/ +/g, " ").replace(/(\r\n)/g, `
`).replace(/\n\n\n+/g, `

`) : z = K.replace(/\s+/gi, " "), x.copySafeness(m, z);
            }
            v.striptags = B;
            function V(m) {
              m = E(m, "");
              var S = m.split(" ").map(function(M) {
                return P(M);
              });
              return x.copySafeness(m, S.join(" "));
            }
            v.title = V;
            function Z(m) {
              return x.copySafeness(m, m.replace(/^\s*|\s*$/g, ""));
            }
            v.trim = Z;
            function $(m, S, M, K) {
              var z = m;
              if (m = E(m, ""), S = S || 255, m.length <= S)
                return m;
              if (M)
                m = m.substring(0, S);
              else {
                var J = m.lastIndexOf(" ", S);
                J === -1 && (J = S), m = m.substring(0, J);
              }
              return m += K ?? "...", x.copySafeness(z, m);
            }
            v.truncate = $;
            function se(m) {
              return m = E(m, ""), m.toUpperCase();
            }
            v.upper = se;
            function ue(m) {
              var S = encodeURIComponent;
              if (_.isString(m))
                return S(m);
              var M = _.isArray(m) ? m : _._entries(m);
              return M.map(function(K) {
                var z = K[0], J = K[1];
                return S(z) + "=" + S(J);
              }).join("&");
            }
            v.urlencode = ue;
            var X = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/, Q = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i, D = /^https?:\/\/.*$/, W = /^www\./, G = /\.(?:org|net|com)(?:\:|\/|$)/;
            function te(m, S, M) {
              y(S) && (S = 1 / 0);
              var K = M === !0 ? ' rel="nofollow"' : "", z = m.split(/(\s+)/).filter(function(J) {
                return J && J.length;
              }).map(function(J) {
                var re = J.match(X), q = re ? re[1] : J, oe = q.substr(0, S);
                return D.test(q) ? '<a href="' + q + '"' + K + ">" + oe + "</a>" : W.test(q) ? '<a href="http://' + q + '"' + K + ">" + oe + "</a>" : Q.test(q) ? '<a href="mailto:' + q + '">' + q + "</a>" : G.test(q) ? '<a href="http://' + q + '"' + K + ">" + oe + "</a>" : J;
              });
              return z.join("");
            }
            v.urlize = te;
            function ce(m) {
              m = E(m, "");
              var S = m ? m.match(/\w+/g) : null;
              return S ? S.length : null;
            }
            v.wordcount = ce;
            function le(m, S) {
              var M = parseFloat(m);
              return y(M) ? S : M;
            }
            v.float = le;
            var me = x.makeMacro(["value", "default", "base"], [], function(S, M, K) {
              K === void 0 && (K = 10);
              var z = parseInt(S, K);
              return y(z) ? M : z;
            });
            v.int = me, v.d = v.default, v.e = v.escape;
          }),
          /* 19 */
          /***/
          (function(U, j, N) {
            function _(y, O) {
              y.prototype = Object.create(O.prototype), y.prototype.constructor = y, x(y, O);
            }
            function x(y, O) {
              return x = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(I, C) {
                return I.__proto__ = C, I;
              }, x(y, O);
            }
            var v = N(6), E = /* @__PURE__ */ (function(y) {
              _(O, y);
              function O(I) {
                var C;
                return C = y.call(this) || this, C.precompiled = I || {}, C;
              }
              var P = O.prototype;
              return P.getSource = function(C) {
                return this.precompiled[C] ? {
                  src: {
                    type: "code",
                    obj: this.precompiled[C]
                  },
                  path: C
                } : null;
              }, O;
            })(v);
            U.exports = {
              PrecompiledLoader: E
            };
          }),
          /* 20 */
          /***/
          (function(U, j, N) {
            var _ = N(2).SafeString;
            function x(u) {
              return typeof u == "function";
            }
            j.callable = x;
            function v(u) {
              return u !== void 0;
            }
            j.defined = v;
            function E(u, k) {
              return u % k === 0;
            }
            j.divisibleby = E;
            function y(u) {
              return u instanceof _;
            }
            j.escaped = y;
            function O(u, k) {
              return u === k;
            }
            j.equalto = O, j.eq = j.equalto, j.sameas = j.equalto;
            function P(u) {
              return u % 2 === 0;
            }
            j.even = P;
            function I(u) {
              return !u;
            }
            j.falsy = I;
            function C(u, k) {
              return u >= k;
            }
            j.ge = C;
            function g(u, k) {
              return u > k;
            }
            j.greaterthan = g, j.gt = j.greaterthan;
            function L(u, k) {
              return u <= k;
            }
            j.le = L;
            function e(u, k) {
              return u < k;
            }
            j.lessthan = e, j.lt = j.lessthan;
            function n(u) {
              return u.toLowerCase() === u;
            }
            j.lower = n;
            function i(u, k) {
              return u !== k;
            }
            j.ne = i;
            function p(u) {
              return u === null;
            }
            j.null = p;
            function l(u) {
              return typeof u == "number";
            }
            j.number = l;
            function h(u) {
              return u % 2 === 1;
            }
            j.odd = h;
            function t(u) {
              return typeof u == "string";
            }
            j.string = t;
            function r(u) {
              return !!u;
            }
            j.truthy = r;
            function a(u) {
              return u === void 0;
            }
            j.undefined = a;
            function o(u) {
              return u.toUpperCase() === u;
            }
            j.upper = o;
            function s(u) {
              return typeof Symbol < "u" ? !!u[Symbol.iterator] : Array.isArray(u) || typeof u == "string";
            }
            j.iterable = s;
            function c(u) {
              var k = u != null && typeof u == "object" && !Array.isArray(u);
              return Set ? k && !(u instanceof Set) : k;
            }
            j.mapping = c;
          }),
          /* 21 */
          /***/
          (function(U, j, N) {
            function _(E) {
              var y = -1;
              return {
                current: null,
                reset: function() {
                  y = -1, this.current = null;
                },
                next: function() {
                  return y++, y >= E.length && (y = 0), this.current = E[y], this.current;
                }
              };
            }
            function x(E) {
              E = E || ",";
              var y = !0;
              return function() {
                var O = y ? "" : E;
                return y = !1, O;
              };
            }
            function v() {
              return {
                range: function(y, O, P) {
                  typeof O > "u" ? (O = y, y = 0, P = 1) : P || (P = 1);
                  var I = [];
                  if (P > 0)
                    for (var C = y; C < O; C += P)
                      I.push(C);
                  else
                    for (var g = y; g > O; g += P)
                      I.push(g);
                  return I;
                },
                cycler: function() {
                  return _(Array.prototype.slice.call(arguments));
                },
                joiner: function(y) {
                  return x(y);
                }
              };
            }
            U.exports = v;
          }),
          /* 22 */
          /***/
          (function(U, j, N) {
            var _ = N(4);
            U.exports = function(v, E) {
              function y(O, P) {
                if (this.name = O, this.path = O, this.defaultEngine = P.defaultEngine, this.ext = _.extname(O), !this.ext && !this.defaultEngine)
                  throw new Error("No default engine was specified and no extension was provided.");
                this.ext || (this.name += this.ext = (this.defaultEngine[0] !== "." ? "." : "") + this.defaultEngine);
              }
              return y.prototype.render = function(P, I) {
                v.render(this.name, P, I);
              }, E.set("view", y), E.set("nunjucksEnv", v), v;
            };
          }),
          /* 23 */
          /***/
          (function(U, j, N) {
            var _ = N(4), x = N(4), v = N(0), E = v._prettifyError, y = N(5), O = N(7), P = O.Environment, I = N(24);
            function C(n, i) {
              return Array.isArray(i) ? i.some(function(p) {
                return n.match(p);
              }) : !1;
            }
            function g(n, i) {
              i = i || {}, i.isString = !0;
              var p = i.env || new P([]), l = i.wrapper || I;
              if (!i.name)
                throw new Error('the "name" option is required when compiling a string');
              return l([e(n, i.name, p)], i);
            }
            function L(n, i) {
              i = i || {};
              var p = i.env || new P([]), l = i.wrapper || I;
              if (i.isString)
                return g(n, i);
              var h = _.existsSync(n) && _.statSync(n), t = [], r = [];
              function a(c) {
                _.readdirSync(c).forEach(function(u) {
                  var k = x.join(c, u), T = k.substr(x.join(n, "/").length), b = _.statSync(k);
                  b && b.isDirectory() ? (T += "/", C(T, i.exclude) || a(k)) : C(T, i.include) && r.push(k);
                });
              }
              if (h.isFile())
                t.push(e(_.readFileSync(n, "utf-8"), i.name || n, p));
              else if (h.isDirectory()) {
                a(n);
                for (var o = 0; o < r.length; o++) {
                  var s = r[o].replace(x.join(n, "/"), "");
                  try {
                    t.push(e(_.readFileSync(r[o], "utf-8"), s, p));
                  } catch (c) {
                    if (i.force)
                      console.error(c);
                    else
                      throw c;
                  }
                }
              }
              return l(t, i);
            }
            function e(n, i, p) {
              p = p || new P([]);
              var l = p.asyncFilters, h = p.extensionsList, t;
              i = i.replace(/\\/g, "/");
              try {
                t = y.compile(n, l, h, i, p.opts);
              } catch (r) {
                throw E(i, !1, r);
              }
              return {
                name: i,
                template: t
              };
            }
            U.exports = {
              precompile: L,
              precompileString: g
            };
          }),
          /* 24 */
          /***/
          (function(U, j, N) {
            function _(x, v) {
              var E = "";
              v = v || {};
              for (var y = 0; y < x.length; y++) {
                var O = JSON.stringify(x[y].name), P = x[y].template;
                E += "(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[" + O + `] = (function() {
` + P + `
})();
`, v.asFunction && (E += "return function(ctx, cb) { return nunjucks.render(" + O + `, ctx, cb); }
`), E += `})();
`;
              }
              return E;
            }
            U.exports = _;
          }),
          /* 25 */
          /***/
          (function(U, j, N) {
            function _() {
              var x = this.runtime, v = this.lib, E = this.compiler.Compiler, y = this.parser.Parser, O = this.nodes, P = this.lexer, I = x.contextOrFrameLookup, C = x.memberLookup, g, L;
              E && (g = E.prototype.assertType), y && (L = y.prototype.parseAggregate);
              function e() {
                x.contextOrFrameLookup = I, x.memberLookup = C, E && (E.prototype.assertType = g), y && (y.prototype.parseAggregate = L);
              }
              x.contextOrFrameLookup = function(a, o, s) {
                var c = I.apply(this, arguments);
                if (c !== void 0)
                  return c;
                switch (s) {
                  case "True":
                    return !0;
                  case "False":
                    return !1;
                  case "None":
                    return null;
                  default:
                    return;
                }
              };
              function n(r) {
                return {
                  index: r.index,
                  lineno: r.lineno,
                  colno: r.colno
                };
              }
              if (O && E && y) {
                var i = O.Node.extend("Slice", {
                  fields: ["start", "stop", "step"],
                  init: function(a, o, s, c, u) {
                    s = s || new O.Literal(a, o, null), c = c || new O.Literal(a, o, null), u = u || new O.Literal(a, o, 1), this.parent(a, o, s, c, u);
                  }
                });
                E.prototype.assertType = function(a) {
                  a instanceof i || g.apply(this, arguments);
                }, E.prototype.compileSlice = function(a, o) {
                  this._emit("("), this._compileExpression(a.start, o), this._emit("),("), this._compileExpression(a.stop, o), this._emit("),("), this._compileExpression(a.step, o), this._emit(")");
                }, y.prototype.parseAggregate = function() {
                  var a = this, o = n(this.tokens);
                  o.colno--, o.index--;
                  try {
                    return L.apply(this);
                  } catch (R) {
                    var s = n(this.tokens), c = function() {
                      return v._assign(a.tokens, s), R;
                    };
                    v._assign(this.tokens, o), this.peeked = !1;
                    var u = this.peekToken();
                    if (u.type !== P.TOKEN_LEFT_BRACKET)
                      throw c();
                    this.nextToken();
                    for (var k = new i(u.lineno, u.colno), T = !1, b = 0; b <= k.fields.length && !this.skip(P.TOKEN_RIGHT_BRACKET); b++) {
                      if (b === k.fields.length)
                        if (T)
                          this.fail("parseSlice: too many slice components", u.lineno, u.colno);
                        else
                          break;
                      if (this.skip(P.TOKEN_COLON))
                        T = !0;
                      else {
                        var A = k.fields[b];
                        k[A] = this.parseExpression(), T = this.skip(P.TOKEN_COLON) || T;
                      }
                    }
                    if (!T)
                      throw c();
                    return new O.Array(u.lineno, u.colno, [k]);
                  }
                };
              }
              function p(r, a, o, s) {
                r = r || [], a === null && (a = s < 0 ? r.length - 1 : 0), o === null ? o = s < 0 ? -1 : r.length : o < 0 && (o += r.length), a < 0 && (a += r.length);
                for (var c = [], u = a; !(u < 0 || u > r.length || s > 0 && u >= o || s < 0 && u <= o); u += s)
                  c.push(x.memberLookup(r, u));
                return c;
              }
              function l(r, a) {
                return Object.prototype.hasOwnProperty.call(r, a);
              }
              var h = {
                pop: function(a) {
                  if (a === void 0)
                    return this.pop();
                  if (a >= this.length || a < 0)
                    throw new Error("KeyError");
                  return this.splice(a, 1);
                },
                append: function(a) {
                  return this.push(a);
                },
                remove: function(a) {
                  for (var o = 0; o < this.length; o++)
                    if (this[o] === a)
                      return this.splice(o, 1);
                  throw new Error("ValueError");
                },
                count: function(a) {
                  for (var o = 0, s = 0; s < this.length; s++)
                    this[s] === a && o++;
                  return o;
                },
                index: function(a) {
                  var o;
                  if ((o = this.indexOf(a)) === -1)
                    throw new Error("ValueError");
                  return o;
                },
                find: function(a) {
                  return this.indexOf(a);
                },
                insert: function(a, o) {
                  return this.splice(a, 0, o);
                }
              }, t = {
                items: function() {
                  return v._entries(this);
                },
                values: function() {
                  return v._values(this);
                },
                keys: function() {
                  return v.keys(this);
                },
                get: function(a, o) {
                  var s = this[a];
                  return s === void 0 && (s = o), s;
                },
                has_key: function(a) {
                  return l(this, a);
                },
                pop: function(a, o) {
                  var s = this[a];
                  if (s === void 0 && o !== void 0)
                    s = o;
                  else {
                    if (s === void 0)
                      throw new Error("KeyError");
                    delete this[a];
                  }
                  return s;
                },
                popitem: function() {
                  var a = v.keys(this);
                  if (!a.length)
                    throw new Error("KeyError");
                  var o = a[0], s = this[o];
                  return delete this[o], [o, s];
                },
                setdefault: function(a, o) {
                  return o === void 0 && (o = null), a in this || (this[a] = o), this[a];
                },
                update: function(a) {
                  return v._assign(this, a), null;
                }
              };
              return t.iteritems = t.items, t.itervalues = t.values, t.iterkeys = t.keys, x.memberLookup = function(a, o, s) {
                return arguments.length === 4 ? p.apply(this, arguments) : (a = a || {}, v.isArray(a) && l(h, o) ? h[o].bind(a) : v.isObject(a) && l(t, o) ? t[o].bind(a) : C.apply(this, arguments));
              }, e;
            }
            U.exports = _;
          })
          /******/
        ])
      );
    });
  })(we)), we.exports;
}
var Me = Ke();
const je = /* @__PURE__ */ Pe(Me);
function De(fe) {
  const Oe = {};
  for (const [j, N] of Object.entries(fe.templates))
    Oe[j] = je.compile(N);
  const U = (j) => {
    j.result = {};
    for (const N of Object.keys(fe.templates))
      j.result[N] = Oe[N].render(j.properties || {});
  };
  return "features" in fe.geojson ? fe.geojson.features.forEach(U) : U(fe.geojson), fe.geojson;
}
const Ue = {
  templateExtractor: De
};
export {
  Ue as Quyuan,
  Ue as default
};

function He(M) {
  return M && M.__esModule && Object.prototype.hasOwnProperty.call(M, "default") ? M.default : M;
}
var xe = { exports: {} };
var Ye = xe.exports, Fe;
function ze() {
  return Fe || (Fe = 1, (function(M, ee) {
    (function(D, A) {
      M.exports = A();
    })(typeof self < "u" ? self : Ye, function() {
      return (
        /******/
        (function(K) {
          var D = {};
          function A(g) {
            if (D[g])
              return D[g].exports;
            var b = D[g] = {
              /******/
              i: g,
              /******/
              l: !1,
              /******/
              exports: {}
              /******/
            };
            return K[g].call(b.exports, b, b.exports, A), b.l = !0, b.exports;
          }
          return A.m = K, A.c = D, A.d = function(g, b, m) {
            A.o(g, b) || Object.defineProperty(g, b, {
              /******/
              configurable: !1,
              /******/
              enumerable: !0,
              /******/
              get: m
              /******/
            });
          }, A.n = function(g) {
            var b = g && g.__esModule ? (
              /******/
              function() {
                return g.default;
              }
            ) : (
              /******/
              function() {
                return g;
              }
            );
            return A.d(b, "a", b), b;
          }, A.o = function(g, b) {
            return Object.prototype.hasOwnProperty.call(g, b);
          }, A.p = "", A(A.s = 11);
        })([
          /* 0 */
          /***/
          (function(K, y, A) {
            var g = Array.prototype, b = Object.prototype, m = {
              "&": "&amp;",
              '"': "&quot;",
              "'": "&#39;",
              "<": "&lt;",
              ">": "&gt;",
              "\\": "&#92;"
            }, _ = /[&"'<>\\]/g, y = K.exports = {};
            function O(f, k) {
              return b.hasOwnProperty.call(f, k);
            }
            y.hasOwnProp = O;
            function I(f) {
              return m[f];
            }
            function P(f, k, F) {
              if (F.Update || (F = new y.TemplateError(F)), F.Update(f), !k) {
                var B = F;
                F = new Error(B.message), F.name = B.name;
              }
              return F;
            }
            y._prettifyError = P;
            function C(f, k, F) {
              var B, G;
              f instanceof Error && (G = f, f = G.name + ": " + G.message), Object.setPrototypeOf ? (B = new Error(f), Object.setPrototypeOf(B, C.prototype)) : (B = this, Object.defineProperty(B, "message", {
                enumerable: !1,
                writable: !0,
                value: f
              })), Object.defineProperty(B, "name", {
                value: "Template render error"
              }), Error.captureStackTrace && Error.captureStackTrace(B, this.constructor);
              var te;
              if (G) {
                var J = Object.getOwnPropertyDescriptor(G, "stack");
                te = J && (J.get || function() {
                  return J.value;
                }), te || (te = function() {
                  return G.stack;
                });
              } else {
                var le = new Error(f).stack;
                te = function() {
                  return le;
                };
              }
              return Object.defineProperty(B, "stack", {
                get: function() {
                  return te.call(B);
                }
              }), Object.defineProperty(B, "cause", {
                value: G
              }), B.lineno = k, B.colno = F, B.firstUpdate = !0, B.Update = function(Q) {
                var Z = "(" + (Q || "unknown path") + ")";
                return this.firstUpdate && (this.lineno && this.colno ? Z += " [Line " + this.lineno + ", Column " + this.colno + "]" : this.lineno && (Z += " [Line " + this.lineno + "]")), Z += `
 `, this.firstUpdate && (Z += " "), this.message = Z + (this.message || ""), this.firstUpdate = !1, this;
              }, B;
            }
            Object.setPrototypeOf ? Object.setPrototypeOf(C.prototype, Error.prototype) : C.prototype = Object.create(Error.prototype, {
              constructor: {
                value: C
              }
            }), y.TemplateError = C;
            function E(f) {
              return f.replace(_, I);
            }
            y.escape = E;
            function L(f) {
              return b.toString.call(f) === "[object Function]";
            }
            y.isFunction = L;
            function e(f) {
              return b.toString.call(f) === "[object Array]";
            }
            y.isArray = e;
            function n(f) {
              return b.toString.call(f) === "[object String]";
            }
            y.isString = n;
            function r(f) {
              return b.toString.call(f) === "[object Object]";
            }
            y.isObject = r;
            function p(f) {
              return f ? typeof f == "string" ? f.split(".") : [f] : [];
            }
            function l(f) {
              var k = p(f);
              return function(B) {
                for (var G = B, te = 0; te < k.length; te++) {
                  var J = k[te];
                  if (O(G, J))
                    G = G[J];
                  else
                    return;
                }
                return G;
              };
            }
            y.getAttrGetter = l;
            function h(f, k, F) {
              for (var B = {}, G = L(k) ? k : l(k), te = 0; te < f.length; te++) {
                var J = f[te], le = G(J, te);
                if (le === void 0 && F === !0)
                  throw new TypeError('groupby: attribute "' + k + '" resolved to undefined');
                (B[le] || (B[le] = [])).push(J);
              }
              return B;
            }
            y.groupBy = h;
            function t(f) {
              return Array.prototype.slice.call(f);
            }
            y.toArray = t;
            function i(f) {
              var k = [];
              if (!f)
                return k;
              for (var F = f.length, B = t(arguments).slice(1), G = -1; ++G < F; )
                w(B, f[G]) === -1 && k.push(f[G]);
              return k;
            }
            y.without = i;
            function a(f, k) {
              for (var F = "", B = 0; B < k; B++)
                F += f;
              return F;
            }
            y.repeat = a;
            function o(f, k, F) {
              if (f != null) {
                if (g.forEach && f.forEach === g.forEach)
                  f.forEach(k, F);
                else if (f.length === +f.length)
                  for (var B = 0, G = f.length; B < G; B++)
                    k.call(F, f[B], B, f);
              }
            }
            y.each = o;
            function s(f, k) {
              var F = [];
              if (f == null)
                return F;
              if (g.map && f.map === g.map)
                return f.map(k);
              for (var B = 0; B < f.length; B++)
                F[F.length] = k(f[B], B);
              return f.length === +f.length && (F.length = f.length), F;
            }
            y.map = s;
            function u(f, k, F) {
              var B = -1;
              function G() {
                B++, B < f.length ? k(f[B], B, G, F) : F();
              }
              G();
            }
            y.asyncIter = u;
            function c(f, k, F) {
              var B = T(f || {}), G = B.length, te = -1;
              function J() {
                te++;
                var le = B[te];
                te < G ? k(le, f[le], te, G, J) : F();
              }
              J();
            }
            y.asyncFor = c;
            function w(f, k, F) {
              return Array.prototype.indexOf.call(f || [], k, F);
            }
            y.indexOf = w;
            function T(f) {
              var k = [];
              for (var F in f)
                O(f, F) && k.push(F);
              return k;
            }
            y.keys = T;
            function x(f) {
              return T(f).map(function(k) {
                return [k, f[k]];
              });
            }
            y._entries = x;
            function S(f) {
              return T(f).map(function(k) {
                return f[k];
              });
            }
            y._values = S;
            function R(f, k) {
              return f = f || {}, T(k).forEach(function(F) {
                f[F] = k[F];
              }), f;
            }
            y._assign = y.extend = R;
            function d(f, k) {
              if (e(k) || n(k))
                return k.indexOf(f) !== -1;
              if (r(k))
                return f in k;
              throw new Error('Cannot use "in" operator to search for "' + f + '" in unexpected types.');
            }
            y.inOperator = d;
          }),
          /* 1 */
          /***/
          (function(K, D, A) {
            function g(n, r) {
              for (var p = 0; p < r.length; p++) {
                var l = r[p];
                l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(n, m(l.key), l);
              }
            }
            function b(n, r, p) {
              return r && g(n.prototype, r), Object.defineProperty(n, "prototype", { writable: !1 }), n;
            }
            function m(n) {
              var r = _(n, "string");
              return typeof r == "symbol" ? r : String(r);
            }
            function _(n, r) {
              if (typeof n != "object" || n === null) return n;
              var p = n[Symbol.toPrimitive];
              if (p !== void 0) {
                var l = p.call(n, r);
                if (typeof l != "object") return l;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(n);
            }
            function y(n, r) {
              n.prototype = Object.create(r.prototype), n.prototype.constructor = n, O(n, r);
            }
            function O(n, r) {
              return O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(l, h) {
                return l.__proto__ = h, l;
              }, O(n, r);
            }
            var I = A(16), P = A(0);
            function C(n, r) {
              return typeof n != "function" || typeof r != "function" ? r : function() {
                var l = this.parent;
                this.parent = n;
                var h = r.apply(this, arguments);
                return this.parent = l, h;
              };
            }
            function E(n, r, p) {
              p = p || {}, P.keys(p).forEach(function(h) {
                p[h] = C(n.prototype[h], p[h]);
              });
              var l = /* @__PURE__ */ (function(h) {
                y(t, h);
                function t() {
                  return h.apply(this, arguments) || this;
                }
                return b(t, [{
                  key: "typename",
                  get: function() {
                    return r;
                  }
                }]), t;
              })(n);
              return P._assign(l.prototype, p), l;
            }
            var L = /* @__PURE__ */ (function() {
              function n() {
                this.init.apply(this, arguments);
              }
              var r = n.prototype;
              return r.init = function() {
              }, n.extend = function(l, h) {
                return typeof l == "object" && (h = l, l = "anonymous"), E(this, l, h);
              }, b(n, [{
                key: "typename",
                get: function() {
                  return this.constructor.name;
                }
              }]), n;
            })(), e = /* @__PURE__ */ (function(n) {
              y(r, n);
              function r() {
                var l, h;
                return h = n.call(this) || this, (l = h).init.apply(l, arguments), h;
              }
              var p = r.prototype;
              return p.init = function() {
              }, r.extend = function(h, t) {
                return typeof h == "object" && (t = h, h = "anonymous"), E(this, h, t);
              }, b(r, [{
                key: "typename",
                get: function() {
                  return this.constructor.name;
                }
              }]), r;
            })(I);
            K.exports = {
              Obj: L,
              EmitterObj: e
            };
          }),
          /* 2 */
          /***/
          (function(K, D, A) {
            var g = A(0), b = Array.from, m = typeof Symbol == "function" && Symbol.iterator && typeof b == "function", _ = /* @__PURE__ */ (function() {
              function s(c, w) {
                this.variables = /* @__PURE__ */ Object.create(null), this.parent = c, this.topLevel = !1, this.isolateWrites = w;
              }
              var u = s.prototype;
              return u.set = function(w, T, x) {
                var S = w.split("."), R = this.variables, d = this;
                if (x && (d = this.resolve(S[0], !0))) {
                  d.set(w, T);
                  return;
                }
                for (var f = 0; f < S.length - 1; f++) {
                  var k = S[f];
                  R[k] || (R[k] = {}), R = R[k];
                }
                R[S[S.length - 1]] = T;
              }, u.get = function(w) {
                var T = this.variables[w];
                return T !== void 0 ? T : null;
              }, u.lookup = function(w) {
                var T = this.parent, x = this.variables[w];
                return x !== void 0 ? x : T && T.lookup(w);
              }, u.resolve = function(w, T) {
                var x = T && this.isolateWrites ? void 0 : this.parent, S = this.variables[w];
                return S !== void 0 ? this : x && x.resolve(w);
              }, u.push = function(w) {
                return new s(this, w);
              }, u.pop = function() {
                return this.parent;
              }, s;
            })();
            function y(s, u, c) {
              return function() {
                for (var T = arguments.length, x = new Array(T), S = 0; S < T; S++)
                  x[S] = arguments[S];
                var R = C(x), d, f = P(x);
                if (R > s.length)
                  d = x.slice(0, s.length), x.slice(d.length, R).forEach(function(B, G) {
                    G < u.length && (f[u[G]] = B);
                  }), d.push(f);
                else if (R < s.length) {
                  d = x.slice(0, R);
                  for (var k = R; k < s.length; k++) {
                    var F = s[k];
                    d.push(f[F]), delete f[F];
                  }
                  d.push(f);
                } else
                  d = x;
                return c.apply(this, d);
              };
            }
            function O(s) {
              return s.__keywords = !0, s;
            }
            function I(s) {
              return s && Object.prototype.hasOwnProperty.call(s, "__keywords");
            }
            function P(s) {
              var u = s.length;
              if (u) {
                var c = s[u - 1];
                if (I(c))
                  return c;
              }
              return {};
            }
            function C(s) {
              var u = s.length;
              if (u === 0)
                return 0;
              var c = s[u - 1];
              return I(c) ? u - 1 : u;
            }
            function E(s) {
              if (typeof s != "string")
                return s;
              this.val = s, this.length = s.length;
            }
            E.prototype = Object.create(String.prototype, {
              length: {
                writable: !0,
                configurable: !0,
                value: 0
              }
            }), E.prototype.valueOf = function() {
              return this.val;
            }, E.prototype.toString = function() {
              return this.val;
            };
            function L(s, u) {
              return s instanceof E ? new E(u) : u.toString();
            }
            function e(s) {
              var u = typeof s;
              return u === "string" ? new E(s) : u !== "function" ? s : function(w) {
                var T = s.apply(this, arguments);
                return typeof T == "string" ? new E(T) : T;
              };
            }
            function n(s, u) {
              return s = s ?? "", u && !(s instanceof E) && (s = g.escape(s.toString())), s;
            }
            function r(s, u, c) {
              if (s == null)
                throw new g.TemplateError("attempted to output null or undefined value", u + 1, c + 1);
              return s;
            }
            function p(s, u) {
              if (s != null)
                return typeof s[u] == "function" ? function() {
                  for (var c = arguments.length, w = new Array(c), T = 0; T < c; T++)
                    w[T] = arguments[T];
                  return s[u].apply(s, w);
                } : s[u];
            }
            function l(s, u, c, w) {
              if (s) {
                if (typeof s != "function")
                  throw new Error("Unable to call `" + u + "`, which is not a function");
              } else throw new Error("Unable to call `" + u + "`, which is undefined or falsey");
              return s.apply(c, w);
            }
            function h(s, u, c) {
              var w = u.lookup(c);
              return w !== void 0 ? w : s.lookup(c);
            }
            function t(s, u, c) {
              return s.lineno ? s : new g.TemplateError(s, u, c);
            }
            function i(s, u, c, w) {
              if (g.isArray(s)) {
                var T = s.length;
                g.asyncIter(s, function(S, R, d) {
                  switch (u) {
                    case 1:
                      c(S, R, T, d);
                      break;
                    case 2:
                      c(S[0], S[1], R, T, d);
                      break;
                    case 3:
                      c(S[0], S[1], S[2], R, T, d);
                      break;
                    default:
                      S.push(R, T, d), c.apply(this, S);
                  }
                }, w);
              } else
                g.asyncFor(s, function(S, R, d, f, k) {
                  c(S, R, d, f, k);
                }, w);
            }
            function a(s, u, c, w) {
              var T = 0, x, S;
              function R(G, te) {
                T++, S[G] = te, T === x && w(null, S.join(""));
              }
              if (g.isArray(s))
                if (x = s.length, S = new Array(x), x === 0)
                  w(null, "");
                else
                  for (var d = 0; d < s.length; d++) {
                    var f = s[d];
                    switch (u) {
                      case 1:
                        c(f, d, x, R);
                        break;
                      case 2:
                        c(f[0], f[1], d, x, R);
                        break;
                      case 3:
                        c(f[0], f[1], f[2], d, x, R);
                        break;
                      default:
                        f.push(d, x, R), c.apply(this, f);
                    }
                  }
              else {
                var k = g.keys(s || {});
                if (x = k.length, S = new Array(x), x === 0)
                  w(null, "");
                else
                  for (var F = 0; F < k.length; F++) {
                    var B = k[F];
                    c(B, s[B], F, x, R);
                  }
              }
            }
            function o(s) {
              return typeof s != "object" || s === null || g.isArray(s) ? s : m && Symbol.iterator in s ? b(s) : s;
            }
            K.exports = {
              Frame: _,
              makeMacro: y,
              makeKeywordArgs: O,
              numArgs: C,
              suppressValue: n,
              ensureDefined: r,
              memberLookup: p,
              contextOrFrameLookup: h,
              callWrap: l,
              handleError: t,
              isArray: g.isArray,
              keys: g.keys,
              SafeString: E,
              copySafeness: L,
              markSafe: e,
              asyncEach: i,
              asyncAll: a,
              inOperator: g.inOperator,
              fromIterator: o
            };
          }),
          /* 3 */
          /***/
          (function(K, D, A) {
            function g(Y, z) {
              for (var ie = 0; ie < z.length; ie++) {
                var ne = z[ie];
                ne.enumerable = ne.enumerable || !1, ne.configurable = !0, "value" in ne && (ne.writable = !0), Object.defineProperty(Y, m(ne.key), ne);
              }
            }
            function b(Y, z, ie) {
              return z && g(Y.prototype, z), Object.defineProperty(Y, "prototype", { writable: !1 }), Y;
            }
            function m(Y) {
              var z = _(Y, "string");
              return typeof z == "symbol" ? z : String(z);
            }
            function _(Y, z) {
              if (typeof Y != "object" || Y === null) return Y;
              var ie = Y[Symbol.toPrimitive];
              if (ie !== void 0) {
                var ne = ie.call(Y, z);
                if (typeof ne != "object") return ne;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(Y);
            }
            function y(Y, z) {
              Y.prototype = Object.create(z.prototype), Y.prototype.constructor = Y, O(Y, z);
            }
            function O(Y, z) {
              return O = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(ne, oe) {
                return ne.__proto__ = oe, ne;
              }, O(Y, z);
            }
            var I = A(1), P = I.Obj;
            function C(Y, z, ie) {
              Y instanceof z && ie.push(Y), Y instanceof E && Y.findAll(z, ie);
            }
            var E = /* @__PURE__ */ (function(Y) {
              y(z, Y);
              function z() {
                return Y.apply(this, arguments) || this;
              }
              var ie = z.prototype;
              return ie.init = function(oe, ce) {
                for (var pe = arguments, ge = this, we = arguments.length, Ve = new Array(we > 2 ? we - 2 : 0), Oe = 2; Oe < we; Oe++)
                  Ve[Oe - 2] = arguments[Oe];
                this.lineno = oe, this.colno = ce, this.fields.forEach(function(Ge, We) {
                  var Se = pe[We + 2];
                  Se === void 0 && (Se = null), ge[Ge] = Se;
                });
              }, ie.findAll = function(oe, ce) {
                var pe = this;
                return ce = ce || [], this instanceof e ? this.children.forEach(function(ge) {
                  return C(ge, oe, ce);
                }) : this.fields.forEach(function(ge) {
                  return C(pe[ge], oe, ce);
                }), ce;
              }, ie.iterFields = function(oe) {
                var ce = this;
                this.fields.forEach(function(pe) {
                  oe(ce[pe], pe);
                });
              }, z;
            })(P), L = /* @__PURE__ */ (function(Y) {
              y(z, Y);
              function z() {
                return Y.apply(this, arguments) || this;
              }
              return b(z, [{
                key: "typename",
                get: function() {
                  return "Value";
                }
              }, {
                key: "fields",
                get: function() {
                  return ["value"];
                }
              }]), z;
            })(E), e = /* @__PURE__ */ (function(Y) {
              y(z, Y);
              function z() {
                return Y.apply(this, arguments) || this;
              }
              var ie = z.prototype;
              return ie.init = function(oe, ce, pe) {
                Y.prototype.init.call(this, oe, ce, pe || []);
              }, ie.addChild = function(oe) {
                this.children.push(oe);
              }, b(z, [{
                key: "typename",
                get: function() {
                  return "NodeList";
                }
              }, {
                key: "fields",
                get: function() {
                  return ["children"];
                }
              }]), z;
            })(E), n = e.extend("Root"), r = L.extend("Literal"), p = L.extend("Symbol"), l = e.extend("Group"), h = e.extend("Array"), t = E.extend("Pair", {
              fields: ["key", "value"]
            }), i = e.extend("Dict"), a = E.extend("LookupVal", {
              fields: ["target", "val"]
            }), o = E.extend("If", {
              fields: ["cond", "body", "else_"]
            }), s = o.extend("IfAsync"), u = E.extend("InlineIf", {
              fields: ["cond", "body", "else_"]
            }), c = E.extend("For", {
              fields: ["arr", "name", "body", "else_"]
            }), w = c.extend("AsyncEach"), T = c.extend("AsyncAll"), x = E.extend("Macro", {
              fields: ["name", "args", "body"]
            }), S = x.extend("Caller"), R = E.extend("Import", {
              fields: ["template", "target", "withContext"]
            }), d = /* @__PURE__ */ (function(Y) {
              y(z, Y);
              function z() {
                return Y.apply(this, arguments) || this;
              }
              var ie = z.prototype;
              return ie.init = function(oe, ce, pe, ge, we) {
                Y.prototype.init.call(this, oe, ce, pe, ge || new e(), we);
              }, b(z, [{
                key: "typename",
                get: function() {
                  return "FromImport";
                }
              }, {
                key: "fields",
                get: function() {
                  return ["template", "names", "withContext"];
                }
              }]), z;
            })(E), f = E.extend("FunCall", {
              fields: ["name", "args"]
            }), k = f.extend("Filter"), F = k.extend("FilterAsync", {
              fields: ["name", "args", "symbol"]
            }), B = i.extend("KeywordArgs"), G = E.extend("Block", {
              fields: ["name", "body"]
            }), te = E.extend("Super", {
              fields: ["blockName", "symbol"]
            }), J = E.extend("TemplateRef", {
              fields: ["template"]
            }), le = J.extend("Extends"), fe = E.extend("Include", {
              fields: ["template", "ignoreMissing"]
            }), Q = E.extend("Set", {
              fields: ["targets", "value"]
            }), Z = E.extend("Switch", {
              fields: ["expr", "cases", "default"]
            }), V = E.extend("Case", {
              fields: ["cond", "body"]
            }), H = e.extend("Output"), W = E.extend("Capture", {
              fields: ["body"]
            }), re = r.extend("TemplateData"), he = E.extend("UnaryOp", {
              fields: ["target"]
            }), ue = E.extend("BinOp", {
              fields: ["left", "right"]
            }), de = ue.extend("In"), v = ue.extend("Is"), N = ue.extend("Or"), U = ue.extend("And"), j = he.extend("Not"), $ = ue.extend("Add"), X = ue.extend("Concat"), se = ue.extend("Sub"), q = ue.extend("Mul"), ae = ue.extend("Div"), me = ue.extend("FloorDiv"), ve = ue.extend("Mod"), ye = ue.extend("Pow"), Ke = he.extend("Neg"), Me = he.extend("Pos"), je = E.extend("Compare", {
              fields: ["expr", "ops"]
            }), De = E.extend("CompareOperand", {
              fields: ["expr", "type"]
            }), Ae = E.extend("CallExtension", {
              init: function(z, ie, ne, oe) {
                this.parent(), this.extName = z.__name || z, this.prop = ie, this.args = ne || new e(), this.contentArgs = oe || [], this.autoescape = z.autoescape;
              },
              fields: ["extName", "prop", "args", "contentArgs"]
            }), Ue = Ae.extend("CallExtensionAsync");
            function _e(Y, z, ie) {
              var ne = Y.split(`
`);
              ne.forEach(function(oe, ce) {
                oe && (ie && ce > 0 || !ie) && process.stdout.write(" ".repeat(z));
                var pe = ce === ne.length - 1 ? "" : `
`;
                process.stdout.write("" + oe + pe);
              });
            }
            function Ee(Y, z) {
              if (z = z || 0, _e(Y.typename + ": ", z), Y instanceof e)
                _e(`
`), Y.children.forEach(function(oe) {
                  Ee(oe, z + 2);
                });
              else if (Y instanceof Ae)
                _e(Y.extName + "." + Y.prop + `
`), Y.args && Ee(Y.args, z + 2), Y.contentArgs && Y.contentArgs.forEach(function(oe) {
                  Ee(oe, z + 2);
                });
              else {
                var ie = [], ne = null;
                Y.iterFields(function(oe, ce) {
                  oe instanceof E ? ie.push([ce, oe]) : (ne = ne || {}, ne[ce] = oe);
                }), ne ? _e(JSON.stringify(ne, null, 2) + `
`, null, !0) : _e(`
`), ie.forEach(function(oe) {
                  var ce = oe[0], pe = oe[1];
                  _e("[" + ce + "] =>", z + 2), Ee(pe, z + 4);
                });
              }
            }
            K.exports = {
              Node: E,
              Root: n,
              NodeList: e,
              Value: L,
              Literal: r,
              Symbol: p,
              Group: l,
              Array: h,
              Pair: t,
              Dict: i,
              Output: H,
              Capture: W,
              TemplateData: re,
              If: o,
              IfAsync: s,
              InlineIf: u,
              For: c,
              AsyncEach: w,
              AsyncAll: T,
              Macro: x,
              Caller: S,
              Import: R,
              FromImport: d,
              FunCall: f,
              Filter: k,
              FilterAsync: F,
              KeywordArgs: B,
              Block: G,
              Super: te,
              Extends: le,
              Include: fe,
              Set: Q,
              Switch: Z,
              Case: V,
              LookupVal: a,
              BinOp: ue,
              In: de,
              Is: v,
              Or: N,
              And: U,
              Not: j,
              Add: $,
              Concat: X,
              Sub: se,
              Mul: q,
              Div: ae,
              FloorDiv: me,
              Mod: ve,
              Pow: ye,
              Neg: Ke,
              Pos: Me,
              Compare: je,
              CompareOperand: De,
              CallExtension: Ae,
              CallExtensionAsync: Ue,
              printNodes: Ee
            };
          }),
          /* 4 */
          /***/
          (function(K, D) {
          }),
          /* 5 */
          /***/
          (function(K, D, A) {
            function g(r, p) {
              r.prototype = Object.create(p.prototype), r.prototype.constructor = r, b(r, p);
            }
            function b(r, p) {
              return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(h, t) {
                return h.__proto__ = t, h;
              }, b(r, p);
            }
            var m = A(8), _ = A(17), y = A(3), O = A(0), I = O.TemplateError, P = A(2), C = P.Frame, E = A(1), L = E.Obj, e = {
              "==": "==",
              "===": "===",
              "!=": "!=",
              "!==": "!==",
              "<": "<",
              ">": ">",
              "<=": "<=",
              ">=": ">="
            }, n = /* @__PURE__ */ (function(r) {
              g(p, r);
              function p() {
                return r.apply(this, arguments) || this;
              }
              var l = p.prototype;
              return l.init = function(t, i) {
                this.templateName = t, this.codebuf = [], this.lastId = 0, this.buffer = null, this.bufferStack = [], this._scopeClosers = "", this.inBlock = !1, this.throwOnUndefined = i;
              }, l.fail = function(t, i, a) {
                throw i !== void 0 && (i += 1), a !== void 0 && (a += 1), new I(t, i, a);
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
                for (var t = this, i = arguments.length, a = new Array(i), o = 0; o < i; o++)
                  a[o] = arguments[o];
                a.forEach(function(s) {
                  return t._emitLine(s);
                });
              }, l._emitFuncBegin = function(t, i) {
                this.buffer = "output", this._scopeClosers = "", this._emitLine("function " + i + "(env, context, frame, runtime, cb) {"), this._emitLine("var lineno = " + t.lineno + ";"), this._emitLine("var colno = " + t.colno + ";"), this._emitLine("var " + this.buffer + ' = "";'), this._emitLine("try {");
              }, l._emitFuncEnd = function(t) {
                t || this._emitLine("cb(null, " + this.buffer + ");"), this._closeScopeLevels(), this._emitLine("} catch (e) {"), this._emitLine("  cb(runtime.handleError(e, lineno, colno));"), this._emitLine("}"), this._emitLine("}"), this.buffer = null;
              }, l._addScopeLevel = function() {
                this._scopeClosers += "})";
              }, l._closeScopeLevels = function() {
                this._emitLine(this._scopeClosers + ";"), this._scopeClosers = "";
              }, l._withScopedSyntax = function(t) {
                var i = this._scopeClosers;
                this._scopeClosers = "", t.call(this), this._closeScopeLevels(), this._scopeClosers = i;
              }, l._makeCallback = function(t) {
                var i = this._tmpid();
                return "function(" + i + (t ? "," + t : "") + `) {
if(` + i + ") { cb(" + i + "); return; }";
              }, l._tmpid = function() {
                return this.lastId++, "t_" + this.lastId;
              }, l._templateName = function() {
                return this.templateName == null ? "undefined" : JSON.stringify(this.templateName);
              }, l._compileChildren = function(t, i) {
                var a = this;
                t.children.forEach(function(o) {
                  a.compile(o, i);
                });
              }, l._compileAggregate = function(t, i, a, o) {
                var s = this;
                a && this._emit(a), t.children.forEach(function(u, c) {
                  c > 0 && s._emit(","), s.compile(u, i);
                }), o && this._emit(o);
              }, l._compileExpression = function(t, i) {
                this.assertType(t, y.Literal, y.Symbol, y.Group, y.Array, y.Dict, y.FunCall, y.Caller, y.Filter, y.LookupVal, y.Compare, y.InlineIf, y.In, y.Is, y.And, y.Or, y.Not, y.Add, y.Concat, y.Sub, y.Mul, y.Div, y.FloorDiv, y.Mod, y.Pow, y.Neg, y.Pos, y.Compare, y.NodeList), this.compile(t, i);
              }, l.assertType = function(t) {
                for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
                  a[o - 1] = arguments[o];
                a.some(function(s) {
                  return t instanceof s;
                }) || this.fail("assertType: invalid type: " + t.typename, t.lineno, t.colno);
              }, l.compileCallExtension = function(t, i, a) {
                var o = this, s = t.args, u = t.contentArgs, c = typeof t.autoescape == "boolean" ? t.autoescape : !0;
                if (a || this._emit(this.buffer + " += runtime.suppressValue("), this._emit('env.getExtension("' + t.extName + '")["' + t.prop + '"]('), this._emit("context"), (s || u) && this._emit(","), s && (s instanceof y.NodeList || this.fail("compileCallExtension: arguments must be a NodeList, use `parser.parseSignature`"), s.children.forEach(function(T, x) {
                  o._compileExpression(T, i), (x !== s.children.length - 1 || u.length) && o._emit(",");
                })), u.length && u.forEach(function(T, x) {
                  if (x > 0 && o._emit(","), T) {
                    o._emitLine("function(cb) {"), o._emitLine("if(!cb) { cb = function(err) { if(err) { throw err; }}}");
                    var S = o._pushBuffer();
                    o._withScopedSyntax(function() {
                      o.compile(T, i), o._emitLine("cb(null, " + S + ");");
                    }), o._popBuffer(), o._emitLine("return " + S + ";"), o._emitLine("}");
                  } else
                    o._emit("null");
                }), a) {
                  var w = this._tmpid();
                  this._emitLine(", " + this._makeCallback(w)), this._emitLine(this.buffer + " += runtime.suppressValue(" + w + ", " + c + " && env.opts.autoescape);"), this._addScopeLevel();
                } else
                  this._emit(")"), this._emit(", " + c + ` && env.opts.autoescape);
`);
              }, l.compileCallExtensionAsync = function(t, i) {
                this.compileCallExtension(t, i, !0);
              }, l.compileNodeList = function(t, i) {
                this._compileChildren(t, i);
              }, l.compileLiteral = function(t) {
                if (typeof t.value == "string") {
                  var i = t.value.replace(/\\/g, "\\\\");
                  i = i.replace(/"/g, '\\"'), i = i.replace(/\n/g, "\\n"), i = i.replace(/\r/g, "\\r"), i = i.replace(/\t/g, "\\t"), i = i.replace(/\u2028/g, "\\u2028"), this._emit('"' + i + '"');
                } else t.value === null ? this._emit("null") : this._emit(t.value.toString());
              }, l.compileSymbol = function(t, i) {
                var a = t.value, o = i.lookup(a);
                o ? this._emit(o) : this._emit('runtime.contextOrFrameLookup(context, frame, "' + a + '")');
              }, l.compileGroup = function(t, i) {
                this._compileAggregate(t, i, "(", ")");
              }, l.compileArray = function(t, i) {
                this._compileAggregate(t, i, "[", "]");
              }, l.compileDict = function(t, i) {
                this._compileAggregate(t, i, "{", "}");
              }, l.compilePair = function(t, i) {
                var a = t.key, o = t.value;
                a instanceof y.Symbol ? a = new y.Literal(a.lineno, a.colno, a.value) : a instanceof y.Literal && typeof a.value == "string" || this.fail("compilePair: Dict keys must be strings or names", a.lineno, a.colno), this.compile(a, i), this._emit(": "), this._compileExpression(o, i);
              }, l.compileInlineIf = function(t, i) {
                this._emit("("), this.compile(t.cond, i), this._emit("?"), this.compile(t.body, i), this._emit(":"), t.else_ !== null ? this.compile(t.else_, i) : this._emit('""'), this._emit(")");
              }, l.compileIn = function(t, i) {
                this._emit("runtime.inOperator("), this.compile(t.left, i), this._emit(","), this.compile(t.right, i), this._emit(")");
              }, l.compileIs = function(t, i) {
                var a = t.right.name ? t.right.name.value : t.right.value;
                this._emit('env.getTest("' + a + '").call(context, '), this.compile(t.left, i), t.right.args && (this._emit(","), this.compile(t.right.args, i)), this._emit(") === true");
              }, l._binOpEmitter = function(t, i, a) {
                this.compile(t.left, i), this._emit(a), this.compile(t.right, i);
              }, l.compileOr = function(t, i) {
                return this._binOpEmitter(t, i, " || ");
              }, l.compileAnd = function(t, i) {
                return this._binOpEmitter(t, i, " && ");
              }, l.compileAdd = function(t, i) {
                return this._binOpEmitter(t, i, " + ");
              }, l.compileConcat = function(t, i) {
                return this._binOpEmitter(t, i, ' + "" + ');
              }, l.compileSub = function(t, i) {
                return this._binOpEmitter(t, i, " - ");
              }, l.compileMul = function(t, i) {
                return this._binOpEmitter(t, i, " * ");
              }, l.compileDiv = function(t, i) {
                return this._binOpEmitter(t, i, " / ");
              }, l.compileMod = function(t, i) {
                return this._binOpEmitter(t, i, " % ");
              }, l.compileNot = function(t, i) {
                this._emit("!"), this.compile(t.target, i);
              }, l.compileFloorDiv = function(t, i) {
                this._emit("Math.floor("), this.compile(t.left, i), this._emit(" / "), this.compile(t.right, i), this._emit(")");
              }, l.compilePow = function(t, i) {
                this._emit("Math.pow("), this.compile(t.left, i), this._emit(", "), this.compile(t.right, i), this._emit(")");
              }, l.compileNeg = function(t, i) {
                this._emit("-"), this.compile(t.target, i);
              }, l.compilePos = function(t, i) {
                this._emit("+"), this.compile(t.target, i);
              }, l.compileCompare = function(t, i) {
                var a = this;
                this.compile(t.expr, i), t.ops.forEach(function(o) {
                  a._emit(" " + e[o.type] + " "), a.compile(o.expr, i);
                });
              }, l.compileLookupVal = function(t, i) {
                this._emit("runtime.memberLookup(("), this._compileExpression(t.target, i), this._emit("),"), this._compileExpression(t.val, i), this._emit(")");
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
              }, l.compileFunCall = function(t, i) {
                this._emit("(lineno = " + t.lineno + ", colno = " + t.colno + ", "), this._emit("runtime.callWrap("), this._compileExpression(t.name, i), this._emit(', "' + this._getNodeName(t.name).replace(/"/g, '\\"') + '", context, '), this._compileAggregate(t.args, i, "[", "])"), this._emit(")");
              }, l.compileFilter = function(t, i) {
                var a = t.name;
                this.assertType(a, y.Symbol), this._emit('env.getFilter("' + a.value + '").call(context, '), this._compileAggregate(t.args, i), this._emit(")");
              }, l.compileFilterAsync = function(t, i) {
                var a = t.name, o = t.symbol.value;
                this.assertType(a, y.Symbol), i.set(o, o), this._emit('env.getFilter("' + a.value + '").call(context, '), this._compileAggregate(t.args, i), this._emitLine(", " + this._makeCallback(o)), this._addScopeLevel();
              }, l.compileKeywordArgs = function(t, i) {
                this._emit("runtime.makeKeywordArgs("), this.compileDict(t, i), this._emit(")");
              }, l.compileSet = function(t, i) {
                var a = this, o = [];
                t.targets.forEach(function(s) {
                  var u = s.value, c = i.lookup(u);
                  c == null && (c = a._tmpid(), a._emitLine("var " + c + ";")), o.push(c);
                }), t.value ? (this._emit(o.join(" = ") + " = "), this._compileExpression(t.value, i), this._emitLine(";")) : (this._emit(o.join(" = ") + " = "), this.compile(t.body, i), this._emitLine(";")), t.targets.forEach(function(s, u) {
                  var c = o[u], w = s.value;
                  a._emitLine('frame.set("' + w + '", ' + c + ", true);"), a._emitLine("if(frame.topLevel) {"), a._emitLine('context.setVariable("' + w + '", ' + c + ");"), a._emitLine("}"), w.charAt(0) !== "_" && (a._emitLine("if(frame.topLevel) {"), a._emitLine('context.addExport("' + w + '", ' + c + ");"), a._emitLine("}"));
                });
              }, l.compileSwitch = function(t, i) {
                var a = this;
                this._emit("switch ("), this.compile(t.expr, i), this._emit(") {"), t.cases.forEach(function(o, s) {
                  a._emit("case "), a.compile(o.cond, i), a._emit(": "), a.compile(o.body, i), o.body.children.length && a._emitLine("break;");
                }), t.default && (this._emit("default:"), this.compile(t.default, i)), this._emit("}");
              }, l.compileIf = function(t, i, a) {
                var o = this;
                this._emit("if("), this._compileExpression(t.cond, i), this._emitLine(") {"), this._withScopedSyntax(function() {
                  o.compile(t.body, i), a && o._emit("cb()");
                }), t.else_ ? (this._emitLine(`}
else {`), this._withScopedSyntax(function() {
                  o.compile(t.else_, i), a && o._emit("cb()");
                })) : a && (this._emitLine(`}
else {`), this._emit("cb()")), this._emitLine("}");
              }, l.compileIfAsync = function(t, i) {
                this._emit("(function(cb) {"), this.compileIf(t, i, !0), this._emit("})(" + this._makeCallback()), this._addScopeLevel();
              }, l._emitLoopBindings = function(t, i, a, o) {
                var s = this, u = [{
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
                u.forEach(function(c) {
                  s._emitLine('frame.set("loop.' + c.name + '", ' + c.val + ");");
                });
              }, l.compileFor = function(t, i) {
                var a = this, o = this._tmpid(), s = this._tmpid(), u = this._tmpid();
                if (i = i.push(), this._emitLine("frame = frame.push();"), this._emit("var " + u + " = "), this._compileExpression(t.arr, i), this._emitLine(";"), this._emit("if(" + u + ") {"), this._emitLine(u + " = runtime.fromIterator(" + u + ");"), t.name instanceof y.Array) {
                  this._emitLine("var " + o + ";"), this._emitLine("if(runtime.isArray(" + u + ")) {"), this._emitLine("var " + s + " = " + u + ".length;"), this._emitLine("for(" + o + "=0; " + o + " < " + u + ".length; " + o + "++) {"), t.name.children.forEach(function(d, f) {
                    var k = a._tmpid();
                    a._emitLine("var " + k + " = " + u + "[" + o + "][" + f + "];"), a._emitLine('frame.set("' + d + '", ' + u + "[" + o + "][" + f + "]);"), i.set(t.name.children[f].value, k);
                  }), this._emitLoopBindings(t, u, o, s), this._withScopedSyntax(function() {
                    a.compile(t.body, i);
                  }), this._emitLine("}"), this._emitLine("} else {");
                  var c = t.name.children, w = c[0], T = c[1], x = this._tmpid(), S = this._tmpid();
                  i.set(w.value, x), i.set(T.value, S), this._emitLine(o + " = -1;"), this._emitLine("var " + s + " = runtime.keys(" + u + ").length;"), this._emitLine("for(var " + x + " in " + u + ") {"), this._emitLine(o + "++;"), this._emitLine("var " + S + " = " + u + "[" + x + "];"), this._emitLine('frame.set("' + w.value + '", ' + x + ");"), this._emitLine('frame.set("' + T.value + '", ' + S + ");"), this._emitLoopBindings(t, u, o, s), this._withScopedSyntax(function() {
                    a.compile(t.body, i);
                  }), this._emitLine("}"), this._emitLine("}");
                } else {
                  var R = this._tmpid();
                  i.set(t.name.value, R), this._emitLine("var " + s + " = " + u + ".length;"), this._emitLine("for(var " + o + "=0; " + o + " < " + u + ".length; " + o + "++) {"), this._emitLine("var " + R + " = " + u + "[" + o + "];"), this._emitLine('frame.set("' + t.name.value + '", ' + R + ");"), this._emitLoopBindings(t, u, o, s), this._withScopedSyntax(function() {
                    a.compile(t.body, i);
                  }), this._emitLine("}");
                }
                this._emitLine("}"), t.else_ && (this._emitLine("if (!" + s + ") {"), this.compile(t.else_, i), this._emitLine("}")), this._emitLine("frame = frame.pop();");
              }, l._compileAsyncLoop = function(t, i, a) {
                var o = this, s = this._tmpid(), u = this._tmpid(), c = this._tmpid(), w = a ? "asyncAll" : "asyncEach";
                if (i = i.push(), this._emitLine("frame = frame.push();"), this._emit("var " + c + " = runtime.fromIterator("), this._compileExpression(t.arr, i), this._emitLine(");"), t.name instanceof y.Array) {
                  var T = t.name.children.length;
                  this._emit("runtime." + w + "(" + c + ", " + T + ", function("), t.name.children.forEach(function(R) {
                    o._emit(R.value + ",");
                  }), this._emit(s + "," + u + ",next) {"), t.name.children.forEach(function(R) {
                    var d = R.value;
                    i.set(d, d), o._emitLine('frame.set("' + d + '", ' + d + ");");
                  });
                } else {
                  var x = t.name.value;
                  this._emitLine("runtime." + w + "(" + c + ", 1, function(" + x + ", " + s + ", " + u + ",next) {"), this._emitLine('frame.set("' + x + '", ' + x + ");"), i.set(x, x);
                }
                this._emitLoopBindings(t, c, s, u), this._withScopedSyntax(function() {
                  var R;
                  a && (R = o._pushBuffer()), o.compile(t.body, i), o._emitLine("next(" + s + (R ? "," + R : "") + ");"), a && o._popBuffer();
                });
                var S = this._tmpid();
                this._emitLine("}, " + this._makeCallback(S)), this._addScopeLevel(), a && this._emitLine(this.buffer + " += " + S + ";"), t.else_ && (this._emitLine("if (!" + c + ".length) {"), this.compile(t.else_, i), this._emitLine("}")), this._emitLine("frame = frame.pop();");
              }, l.compileAsyncEach = function(t, i) {
                this._compileAsyncLoop(t, i);
              }, l.compileAsyncAll = function(t, i) {
                this._compileAsyncLoop(t, i, !0);
              }, l._compileMacro = function(t, i) {
                var a = this, o = [], s = null, u = "macro_" + this._tmpid(), c = i !== void 0;
                t.args.children.forEach(function(d, f) {
                  f === t.args.children.length - 1 && d instanceof y.Dict ? s = d : (a.assertType(d, y.Symbol), o.push(d));
                });
                var w = [].concat(o.map(function(d) {
                  return "l_" + d.value;
                }), ["kwargs"]), T = o.map(function(d) {
                  return '"' + d.value + '"';
                }), x = (s && s.children || []).map(function(d) {
                  return '"' + d.key.value + '"';
                }), S;
                c ? S = i.push(!0) : S = new C(), this._emitLines("var " + u + " = runtime.makeMacro(", "[" + T.join(", ") + "], ", "[" + x.join(", ") + "], ", "function (" + w.join(", ") + ") {", "var callerFrame = frame;", "frame = " + (c ? "frame.push(true);" : "new runtime.Frame();"), "kwargs = kwargs || {};", 'if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {', 'frame.set("caller", kwargs.caller); }'), o.forEach(function(d) {
                  a._emitLine('frame.set("' + d.value + '", l_' + d.value + ");"), S.set(d.value, "l_" + d.value);
                }), s && s.children.forEach(function(d) {
                  var f = d.key.value;
                  a._emit('frame.set("' + f + '", '), a._emit('Object.prototype.hasOwnProperty.call(kwargs, "' + f + '")'), a._emit(' ? kwargs["' + f + '"] : '), a._compileExpression(d.value, S), a._emit(");");
                });
                var R = this._pushBuffer();
                return this._withScopedSyntax(function() {
                  a.compile(t.body, S);
                }), this._emitLine("frame = " + (c ? "frame.pop();" : "callerFrame;")), this._emitLine("return new runtime.SafeString(" + R + ");"), this._emitLine("});"), this._popBuffer(), u;
              }, l.compileMacro = function(t, i) {
                var a = this._compileMacro(t), o = t.name.value;
                i.set(o, a), i.parent ? this._emitLine('frame.set("' + o + '", ' + a + ");") : (t.name.value.charAt(0) !== "_" && this._emitLine('context.addExport("' + o + '");'), this._emitLine('context.setVariable("' + o + '", ' + a + ");"));
              }, l.compileCaller = function(t, i) {
                this._emit("(function (){");
                var a = this._compileMacro(t, i);
                this._emit("return " + a + ";})()");
              }, l._compileGetTemplate = function(t, i, a, o) {
                var s = this._tmpid(), u = this._templateName(), c = this._makeCallback(s), w = a ? "true" : "false", T = o ? "true" : "false";
                return this._emit("env.getTemplate("), this._compileExpression(t.template, i), this._emitLine(", " + w + ", " + u + ", " + T + ", " + c), s;
              }, l.compileImport = function(t, i) {
                var a = t.target.value, o = this._compileGetTemplate(t, i, !1, !1);
                this._addScopeLevel(), this._emitLine(o + ".getExported(" + (t.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(o)), this._addScopeLevel(), i.set(a, o), i.parent ? this._emitLine('frame.set("' + a + '", ' + o + ");") : this._emitLine('context.setVariable("' + a + '", ' + o + ");");
              }, l.compileFromImport = function(t, i) {
                var a = this, o = this._compileGetTemplate(t, i, !1, !1);
                this._addScopeLevel(), this._emitLine(o + ".getExported(" + (t.withContext ? "context.getVariables(), frame, " : "") + this._makeCallback(o)), this._addScopeLevel(), t.names.children.forEach(function(s) {
                  var u, c, w = a._tmpid();
                  s instanceof y.Pair ? (u = s.key.value, c = s.value.value) : (u = s.value, c = u), a._emitLine("if(Object.prototype.hasOwnProperty.call(" + o + ', "' + u + '")) {'), a._emitLine("var " + w + " = " + o + "." + u + ";"), a._emitLine("} else {"), a._emitLine(`cb(new Error("cannot import '` + u + `'")); return;`), a._emitLine("}"), i.set(c, w), i.parent ? a._emitLine('frame.set("' + c + '", ' + w + ");") : a._emitLine('context.setVariable("' + c + '", ' + w + ");");
                });
              }, l.compileBlock = function(t) {
                var i = this._tmpid();
                this.inBlock || this._emit('(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : '), this._emit('context.getBlock("' + t.name.value + '")'), this.inBlock || this._emit(")"), this._emitLine("(env, context, frame, runtime, " + this._makeCallback(i)), this._emitLine(this.buffer + " += " + i + ";"), this._addScopeLevel();
              }, l.compileSuper = function(t, i) {
                var a = t.blockName.value, o = t.symbol.value, s = this._makeCallback(o);
                this._emitLine('context.getSuper(env, "' + a + '", b_' + a + ", frame, runtime, " + s), this._emitLine(o + " = runtime.markSafe(" + o + ");"), this._addScopeLevel(), i.set(o, o);
              }, l.compileExtends = function(t, i) {
                var a = this._tmpid(), o = this._compileGetTemplate(t, i, !0, !1);
                this._emitLine("parentTemplate = " + o), this._emitLine("for(var " + a + " in parentTemplate.blocks) {"), this._emitLine("context.addBlock(" + a + ", parentTemplate.blocks[" + a + "]);"), this._emitLine("}"), this._addScopeLevel();
              }, l.compileInclude = function(t, i) {
                this._emitLine("var tasks = [];"), this._emitLine("tasks.push("), this._emitLine("function(callback) {");
                var a = this._compileGetTemplate(t, i, !1, t.ignoreMissing);
                this._emitLine("callback(null," + a + ");});"), this._emitLine("});");
                var o = this._tmpid();
                this._emitLine("tasks.push("), this._emitLine("function(template, callback){"), this._emitLine("template.render(context.getVariables(), frame, " + this._makeCallback(o)), this._emitLine("callback(null," + o + ");});"), this._emitLine("});"), this._emitLine("tasks.push("), this._emitLine("function(result, callback){"), this._emitLine(this.buffer + " += result;"), this._emitLine("callback(null);"), this._emitLine("});"), this._emitLine("env.waterfall(tasks, function(){"), this._addScopeLevel();
              }, l.compileTemplateData = function(t, i) {
                this.compileLiteral(t, i);
              }, l.compileCapture = function(t, i) {
                var a = this, o = this.buffer;
                this.buffer = "output", this._emitLine("(function() {"), this._emitLine('var output = "";'), this._withScopedSyntax(function() {
                  a.compile(t.body, i);
                }), this._emitLine("return output;"), this._emitLine("})()"), this.buffer = o;
              }, l.compileOutput = function(t, i) {
                var a = this, o = t.children;
                o.forEach(function(s) {
                  s instanceof y.TemplateData ? s.value && (a._emit(a.buffer + " += "), a.compileLiteral(s, i), a._emitLine(";")) : (a._emit(a.buffer + " += runtime.suppressValue("), a.throwOnUndefined && a._emit("runtime.ensureDefined("), a.compile(s, i), a.throwOnUndefined && a._emit("," + t.lineno + "," + t.colno + ")"), a._emit(`, env.opts.autoescape);
`));
                });
              }, l.compileRoot = function(t, i) {
                var a = this;
                i && this.fail("compileRoot: root node can't have frame"), i = new C(), this._emitFuncBegin(t, "root"), this._emitLine("var parentTemplate = null;"), this._compileChildren(t, i), this._emitLine("if(parentTemplate) {"), this._emitLine("parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);"), this._emitLine("} else {"), this._emitLine("cb(null, " + this.buffer + ");"), this._emitLine("}"), this._emitFuncEnd(!0), this.inBlock = !0;
                var o = [], s = t.findAll(y.Block);
                s.forEach(function(u, c) {
                  var w = u.name.value;
                  if (o.indexOf(w) !== -1)
                    throw new Error('Block "' + w + '" defined more than once.');
                  o.push(w), a._emitFuncBegin(u, "b_" + w);
                  var T = new C();
                  a._emitLine("var frame = frame.push(true);"), a.compile(u.body, T), a._emitFuncEnd();
                }), this._emitLine("return {"), s.forEach(function(u, c) {
                  var w = "b_" + u.name.value;
                  a._emitLine(w + ": " + w + ",");
                }), this._emitLine(`root: root
};`);
              }, l.compile = function(t, i) {
                var a = this["compile" + t.typename];
                a ? a.call(this, t, i) : this.fail("compile: Cannot compile node: " + t.typename, t.lineno, t.colno);
              }, l.getCode = function() {
                return this.codebuf.join("");
              }, p;
            })(L);
            K.exports = {
              compile: function(p, l, h, t, i) {
                i === void 0 && (i = {});
                var a = new n(t, i.throwOnUndefined), o = (h || []).map(function(u) {
                  return u.preprocess;
                }).filter(function(u) {
                  return !!u;
                }), s = o.reduce(function(u, c) {
                  return c(u);
                }, p);
                return a.compile(_.transform(m.parse(s, h, i), l, t)), a.getCode();
              },
              Compiler: n
            };
          }),
          /* 6 */
          /***/
          (function(K, D, A) {
            function g(O, I) {
              O.prototype = Object.create(I.prototype), O.prototype.constructor = O, b(O, I);
            }
            function b(O, I) {
              return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(C, E) {
                return C.__proto__ = E, C;
              }, b(O, I);
            }
            var m = A(4), _ = A(1), y = _.EmitterObj;
            K.exports = /* @__PURE__ */ (function(O) {
              g(I, O);
              function I() {
                return O.apply(this, arguments) || this;
              }
              var P = I.prototype;
              return P.resolve = function(E, L) {
                return m.resolve(m.dirname(E), L);
              }, P.isRelative = function(E) {
                return E.indexOf("./") === 0 || E.indexOf("../") === 0;
              }, I;
            })(y);
          }),
          /* 7 */
          /***/
          (function(K, D, A) {
            function g(T, x) {
              T.prototype = Object.create(x.prototype), T.prototype.constructor = T, b(T, x);
            }
            function b(T, x) {
              return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(R, d) {
                return R.__proto__ = d, R;
              }, b(T, x);
            }
            var m = A(12), _ = A(15), y = A(0), O = A(5), I = A(18), P = A(10), C = P.FileSystemLoader, E = P.WebLoader, L = P.PrecompiledLoader, e = A(20), n = A(21), r = A(1), p = r.Obj, l = r.EmitterObj, h = A(2), t = h.handleError, i = h.Frame, a = A(22);
            function o(T, x, S) {
              m(function() {
                T(x, S);
              });
            }
            var s = {
              type: "code",
              obj: {
                root: function(x, S, R, d, f) {
                  try {
                    f(null, "");
                  } catch (k) {
                    f(t(k, null, null));
                  }
                }
              }
            }, u = /* @__PURE__ */ (function(T) {
              g(x, T);
              function x() {
                return T.apply(this, arguments) || this;
              }
              var S = x.prototype;
              return S.init = function(d, f) {
                var k = this;
                f = this.opts = f || {}, this.opts.dev = !!f.dev, this.opts.autoescape = f.autoescape != null ? f.autoescape : !0, this.opts.throwOnUndefined = !!f.throwOnUndefined, this.opts.trimBlocks = !!f.trimBlocks, this.opts.lstripBlocks = !!f.lstripBlocks, this.loaders = [], d ? this.loaders = y.isArray(d) ? d : [d] : C ? this.loaders = [new C("views")] : E && (this.loaders = [new E("/views")]), typeof window < "u" && window.nunjucksPrecompiled && this.loaders.unshift(new L(window.nunjucksPrecompiled)), this._initLoaders(), this.globals = n(), this.filters = {}, this.tests = {}, this.asyncFilters = [], this.extensions = {}, this.extensionsList = [], y._entries(I).forEach(function(F) {
                  var B = F[0], G = F[1];
                  return k.addFilter(B, G);
                }), y._entries(e).forEach(function(F) {
                  var B = F[0], G = F[1];
                  return k.addTest(B, G);
                });
              }, S._initLoaders = function() {
                var d = this;
                this.loaders.forEach(function(f) {
                  f.cache = {}, typeof f.on == "function" && (f.on("update", function(k, F) {
                    f.cache[k] = null, d.emit("update", k, F, f);
                  }), f.on("load", function(k, F) {
                    d.emit("load", k, F, f);
                  }));
                });
              }, S.invalidateCache = function() {
                this.loaders.forEach(function(d) {
                  d.cache = {};
                });
              }, S.addExtension = function(d, f) {
                return f.__name = d, this.extensions[d] = f, this.extensionsList.push(f), this;
              }, S.removeExtension = function(d) {
                var f = this.getExtension(d);
                f && (this.extensionsList = y.without(this.extensionsList, f), delete this.extensions[d]);
              }, S.getExtension = function(d) {
                return this.extensions[d];
              }, S.hasExtension = function(d) {
                return !!this.extensions[d];
              }, S.addGlobal = function(d, f) {
                return this.globals[d] = f, this;
              }, S.getGlobal = function(d) {
                if (typeof this.globals[d] > "u")
                  throw new Error("global not found: " + d);
                return this.globals[d];
              }, S.addFilter = function(d, f, k) {
                var F = f;
                return k && this.asyncFilters.push(d), this.filters[d] = F, this;
              }, S.getFilter = function(d) {
                if (!this.filters[d])
                  throw new Error("filter not found: " + d);
                return this.filters[d];
              }, S.addTest = function(d, f) {
                return this.tests[d] = f, this;
              }, S.getTest = function(d) {
                if (!this.tests[d])
                  throw new Error("test not found: " + d);
                return this.tests[d];
              }, S.resolveTemplate = function(d, f, k) {
                var F = d.isRelative && f ? d.isRelative(k) : !1;
                return F && d.resolve ? d.resolve(f, k) : k;
              }, S.getTemplate = function(d, f, k, F, B) {
                var G = this, te = this, J = null;
                if (d && d.raw && (d = d.raw), y.isFunction(k) && (B = k, k = null, f = f || !1), y.isFunction(f) && (B = f, f = !1), d instanceof w)
                  J = d;
                else {
                  if (typeof d != "string")
                    throw new Error("template names must be a string: " + d);
                  for (var le = 0; le < this.loaders.length; le++) {
                    var fe = this.loaders[le];
                    if (J = fe.cache[this.resolveTemplate(fe, k, d)], J)
                      break;
                  }
                }
                if (J)
                  if (f && J.compile(), B) {
                    B(null, J);
                    return;
                  } else
                    return J;
                var Q, Z = function(H, W) {
                  if (!W && !H && !F && (H = new Error("template not found: " + d)), H)
                    if (B) {
                      B(H);
                      return;
                    } else
                      throw H;
                  var re;
                  W ? (re = new w(W.src, G, W.path, f), W.noCache || (W.loader.cache[d] = re)) : re = new w(s, G, "", f), B ? B(null, re) : Q = re;
                };
                return y.asyncIter(this.loaders, function(V, H, W, re) {
                  function he(ue, de) {
                    ue ? re(ue) : de ? (de.loader = V, re(null, de)) : W();
                  }
                  d = te.resolveTemplate(V, k, d), V.async ? V.getSource(d, he) : he(null, V.getSource(d));
                }, Z), Q;
              }, S.express = function(d) {
                return a(this, d);
              }, S.render = function(d, f, k) {
                y.isFunction(f) && (k = f, f = null);
                var F = null;
                return this.getTemplate(d, function(B, G) {
                  if (B && k)
                    o(k, B);
                  else {
                    if (B)
                      throw B;
                    F = G.render(f, k);
                  }
                }), F;
              }, S.renderString = function(d, f, k, F) {
                y.isFunction(k) && (F = k, k = {}), k = k || {};
                var B = new w(d, this, k.path);
                return B.render(f, F);
              }, S.waterfall = function(d, f, k) {
                return _(d, f, k);
              }, x;
            })(l), c = /* @__PURE__ */ (function(T) {
              g(x, T);
              function x() {
                return T.apply(this, arguments) || this;
              }
              var S = x.prototype;
              return S.init = function(d, f, k) {
                var F = this;
                this.env = k || new u(), this.ctx = y.extend({}, d), this.blocks = {}, this.exported = [], y.keys(f).forEach(function(B) {
                  F.addBlock(B, f[B]);
                });
              }, S.lookup = function(d) {
                return d in this.env.globals && !(d in this.ctx) ? this.env.globals[d] : this.ctx[d];
              }, S.setVariable = function(d, f) {
                this.ctx[d] = f;
              }, S.getVariables = function() {
                return this.ctx;
              }, S.addBlock = function(d, f) {
                return this.blocks[d] = this.blocks[d] || [], this.blocks[d].push(f), this;
              }, S.getBlock = function(d) {
                if (!this.blocks[d])
                  throw new Error('unknown block "' + d + '"');
                return this.blocks[d][0];
              }, S.getSuper = function(d, f, k, F, B, G) {
                var te = y.indexOf(this.blocks[f] || [], k), J = this.blocks[f][te + 1], le = this;
                if (te === -1 || !J)
                  throw new Error('no super block available for "' + f + '"');
                J(d, le, F, B, G);
              }, S.addExport = function(d) {
                this.exported.push(d);
              }, S.getExported = function() {
                var d = this, f = {};
                return this.exported.forEach(function(k) {
                  f[k] = d.ctx[k];
                }), f;
              }, x;
            })(p), w = /* @__PURE__ */ (function(T) {
              g(x, T);
              function x() {
                return T.apply(this, arguments) || this;
              }
              var S = x.prototype;
              return S.init = function(d, f, k, F) {
                if (this.env = f || new u(), y.isObject(d))
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
                if (this.path = k, F)
                  try {
                    this._compile();
                  } catch (B) {
                    throw y._prettifyError(this.path, this.env.opts.dev, B);
                  }
                else
                  this.compiled = !1;
              }, S.render = function(d, f, k) {
                var F = this;
                typeof d == "function" ? (k = d, d = {}) : typeof f == "function" && (k = f, f = null);
                var B = !f;
                try {
                  this.compile();
                } catch (Q) {
                  var G = y._prettifyError(this.path, this.env.opts.dev, Q);
                  if (k)
                    return o(k, G);
                  throw G;
                }
                var te = new c(d || {}, this.blocks, this.env), J = f ? f.push(!0) : new i();
                J.topLevel = !0;
                var le = null, fe = !1;
                return this.rootRenderFunc(this.env, te, J, h, function(Q, Z) {
                  if (!(fe && k && typeof Z < "u"))
                    if (Q && (Q = y._prettifyError(F.path, F.env.opts.dev, Q), fe = !0), k)
                      B ? o(k, Q, Z) : k(Q, Z);
                    else {
                      if (Q)
                        throw Q;
                      le = Z;
                    }
                }), le;
              }, S.getExported = function(d, f, k) {
                typeof d == "function" && (k = d, d = {}), typeof f == "function" && (k = f, f = null);
                try {
                  this.compile();
                } catch (G) {
                  if (k)
                    return k(G);
                  throw G;
                }
                var F = f ? f.push() : new i();
                F.topLevel = !0;
                var B = new c(d || {}, this.blocks, this.env);
                this.rootRenderFunc(this.env, B, F, h, function(G) {
                  G ? k(G, null) : k(null, B.getExported());
                });
              }, S.compile = function() {
                this.compiled || this._compile();
              }, S._compile = function() {
                var d;
                if (this.tmplProps)
                  d = this.tmplProps;
                else {
                  var f = O.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts), k = new Function(f);
                  d = k();
                }
                this.blocks = this._getBlocks(d), this.rootRenderFunc = d.root, this.compiled = !0;
              }, S._getBlocks = function(d) {
                var f = {};
                return y.keys(d).forEach(function(k) {
                  k.slice(0, 2) === "b_" && (f[k.slice(2)] = d[k]);
                }), f;
              }, x;
            })(p);
            K.exports = {
              Environment: u,
              Template: w
            };
          }),
          /* 8 */
          /***/
          (function(K, D, A) {
            function g(P, C) {
              P.prototype = Object.create(C.prototype), P.prototype.constructor = P, b(P, C);
            }
            function b(P, C) {
              return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(L, e) {
                return L.__proto__ = e, L;
              }, b(P, C);
            }
            var m = A(9), _ = A(3), y = A(1).Obj, O = A(0), I = /* @__PURE__ */ (function(P) {
              g(C, P);
              function C() {
                return P.apply(this, arguments) || this;
              }
              var E = C.prototype;
              return E.init = function(e) {
                this.tokens = e, this.peeked = null, this.breakOnBlocks = null, this.dropLeadingWhitespace = !1, this.extensions = [];
              }, E.nextToken = function(e) {
                var n;
                if (this.peeked)
                  if (!e && this.peeked.type === m.TOKEN_WHITESPACE)
                    this.peeked = null;
                  else
                    return n = this.peeked, this.peeked = null, n;
                if (n = this.tokens.nextToken(), !e)
                  for (; n && n.type === m.TOKEN_WHITESPACE; )
                    n = this.tokens.nextToken();
                return n;
              }, E.peekToken = function() {
                return this.peeked = this.peeked || this.nextToken(), this.peeked;
              }, E.pushToken = function(e) {
                if (this.peeked)
                  throw new Error("pushToken: can only push one token on between reads");
                this.peeked = e;
              }, E.error = function(e, n, r) {
                if (n === void 0 || r === void 0) {
                  var p = this.peekToken() || {};
                  n = p.lineno, r = p.colno;
                }
                return n !== void 0 && (n += 1), r !== void 0 && (r += 1), new O.TemplateError(e, n, r);
              }, E.fail = function(e, n, r) {
                throw this.error(e, n, r);
              }, E.skip = function(e) {
                var n = this.nextToken();
                return !n || n.type !== e ? (this.pushToken(n), !1) : !0;
              }, E.expect = function(e) {
                var n = this.nextToken();
                return n.type !== e && this.fail("expected " + e + ", got " + n.type, n.lineno, n.colno), n;
              }, E.skipValue = function(e, n) {
                var r = this.nextToken();
                return !r || r.type !== e || r.value !== n ? (this.pushToken(r), !1) : !0;
              }, E.skipSymbol = function(e) {
                return this.skipValue(m.TOKEN_SYMBOL, e);
              }, E.advanceAfterBlockEnd = function(e) {
                var n;
                return e || (n = this.peekToken(), n || this.fail("unexpected end of file"), n.type !== m.TOKEN_SYMBOL && this.fail("advanceAfterBlockEnd: expected symbol token or explicit name to be passed"), e = this.nextToken().value), n = this.nextToken(), n && n.type === m.TOKEN_BLOCK_END ? n.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0) : this.fail("expected block end in " + e + " statement"), n;
              }, E.advanceAfterVariableEnd = function() {
                var e = this.nextToken();
                e && e.type === m.TOKEN_VARIABLE_END ? this.dropLeadingWhitespace = e.value.charAt(e.value.length - this.tokens.tags.VARIABLE_END.length - 1) === "-" : (this.pushToken(e), this.fail("expected variable end"));
              }, E.parseFor = function() {
                var e = this.peekToken(), n, r;
                this.skipSymbol("for") ? (n = new _.For(e.lineno, e.colno), r = "endfor") : this.skipSymbol("asyncEach") ? (n = new _.AsyncEach(e.lineno, e.colno), r = "endeach") : this.skipSymbol("asyncAll") ? (n = new _.AsyncAll(e.lineno, e.colno), r = "endall") : this.fail("parseFor: expected for{Async}", e.lineno, e.colno), n.name = this.parsePrimary(), n.name instanceof _.Symbol || this.fail("parseFor: variable name expected for loop");
                var p = this.peekToken().type;
                if (p === m.TOKEN_COMMA) {
                  var l = n.name;
                  for (n.name = new _.Array(l.lineno, l.colno), n.name.addChild(l); this.skip(m.TOKEN_COMMA); ) {
                    var h = this.parsePrimary();
                    n.name.addChild(h);
                  }
                }
                return this.skipSymbol("in") || this.fail('parseFor: expected "in" keyword for loop', e.lineno, e.colno), n.arr = this.parseExpression(), this.advanceAfterBlockEnd(e.value), n.body = this.parseUntilBlocks(r, "else"), this.skipSymbol("else") && (this.advanceAfterBlockEnd("else"), n.else_ = this.parseUntilBlocks(r)), this.advanceAfterBlockEnd(), n;
              }, E.parseMacro = function() {
                var e = this.peekToken();
                this.skipSymbol("macro") || this.fail("expected macro");
                var n = this.parsePrimary(!0), r = this.parseSignature(), p = new _.Macro(e.lineno, e.colno, n, r);
                return this.advanceAfterBlockEnd(e.value), p.body = this.parseUntilBlocks("endmacro"), this.advanceAfterBlockEnd(), p;
              }, E.parseCall = function() {
                var e = this.peekToken();
                this.skipSymbol("call") || this.fail("expected call");
                var n = this.parseSignature(!0) || new _.NodeList(), r = this.parsePrimary();
                this.advanceAfterBlockEnd(e.value);
                var p = this.parseUntilBlocks("endcall");
                this.advanceAfterBlockEnd();
                var l = new _.Symbol(e.lineno, e.colno, "caller"), h = new _.Caller(e.lineno, e.colno, l, n, p), t = r.args.children;
                t[t.length - 1] instanceof _.KeywordArgs || t.push(new _.KeywordArgs());
                var i = t[t.length - 1];
                return i.addChild(new _.Pair(e.lineno, e.colno, l, h)), new _.Output(e.lineno, e.colno, [r]);
              }, E.parseWithContext = function() {
                var e = this.peekToken(), n = null;
                return this.skipSymbol("with") ? n = !0 : this.skipSymbol("without") && (n = !1), n !== null && (this.skipSymbol("context") || this.fail("parseFrom: expected context after with/without", e.lineno, e.colno)), n;
              }, E.parseImport = function() {
                var e = this.peekToken();
                this.skipSymbol("import") || this.fail("parseImport: expected import", e.lineno, e.colno);
                var n = this.parseExpression();
                this.skipSymbol("as") || this.fail('parseImport: expected "as" keyword', e.lineno, e.colno);
                var r = this.parseExpression(), p = this.parseWithContext(), l = new _.Import(e.lineno, e.colno, n, r, p);
                return this.advanceAfterBlockEnd(e.value), l;
              }, E.parseFrom = function() {
                var e = this.peekToken();
                this.skipSymbol("from") || this.fail("parseFrom: expected from");
                var n = this.parseExpression();
                this.skipSymbol("import") || this.fail("parseFrom: expected import", e.lineno, e.colno);
                for (var r = new _.NodeList(), p; ; ) {
                  var l = this.peekToken();
                  if (l.type === m.TOKEN_BLOCK_END) {
                    r.children.length || this.fail("parseFrom: Expected at least one import name", e.lineno, e.colno), l.value.charAt(0) === "-" && (this.dropLeadingWhitespace = !0), this.nextToken();
                    break;
                  }
                  r.children.length > 0 && !this.skip(m.TOKEN_COMMA) && this.fail("parseFrom: expected comma", e.lineno, e.colno);
                  var h = this.parsePrimary();
                  if (h.value.charAt(0) === "_" && this.fail("parseFrom: names starting with an underscore cannot be imported", h.lineno, h.colno), this.skipSymbol("as")) {
                    var t = this.parsePrimary();
                    r.addChild(new _.Pair(h.lineno, h.colno, h, t));
                  } else
                    r.addChild(h);
                  p = this.parseWithContext();
                }
                return new _.FromImport(e.lineno, e.colno, n, r, p);
              }, E.parseBlock = function() {
                var e = this.peekToken();
                this.skipSymbol("block") || this.fail("parseBlock: expected block", e.lineno, e.colno);
                var n = new _.Block(e.lineno, e.colno);
                n.name = this.parsePrimary(), n.name instanceof _.Symbol || this.fail("parseBlock: variable name expected", e.lineno, e.colno), this.advanceAfterBlockEnd(e.value), n.body = this.parseUntilBlocks("endblock"), this.skipSymbol("endblock"), this.skipSymbol(n.name.value);
                var r = this.peekToken();
                return r || this.fail("parseBlock: expected endblock, got end of file"), this.advanceAfterBlockEnd(r.value), n;
              }, E.parseExtends = function() {
                var e = "extends", n = this.peekToken();
                this.skipSymbol(e) || this.fail("parseTemplateRef: expected " + e);
                var r = new _.Extends(n.lineno, n.colno);
                return r.template = this.parseExpression(), this.advanceAfterBlockEnd(n.value), r;
              }, E.parseInclude = function() {
                var e = "include", n = this.peekToken();
                this.skipSymbol(e) || this.fail("parseInclude: expected " + e);
                var r = new _.Include(n.lineno, n.colno);
                return r.template = this.parseExpression(), this.skipSymbol("ignore") && this.skipSymbol("missing") && (r.ignoreMissing = !0), this.advanceAfterBlockEnd(n.value), r;
              }, E.parseIf = function() {
                var e = this.peekToken(), n;
                this.skipSymbol("if") || this.skipSymbol("elif") || this.skipSymbol("elseif") ? n = new _.If(e.lineno, e.colno) : this.skipSymbol("ifAsync") ? n = new _.IfAsync(e.lineno, e.colno) : this.fail("parseIf: expected if, elif, or elseif", e.lineno, e.colno), n.cond = this.parseExpression(), this.advanceAfterBlockEnd(e.value), n.body = this.parseUntilBlocks("elif", "elseif", "else", "endif");
                var r = this.peekToken();
                switch (r && r.value) {
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
              }, E.parseSet = function() {
                var e = this.peekToken();
                this.skipSymbol("set") || this.fail("parseSet: expected set", e.lineno, e.colno);
                for (var n = new _.Set(e.lineno, e.colno, []), r; (r = this.parsePrimary()) && (n.targets.push(r), !!this.skip(m.TOKEN_COMMA)); )
                  ;
                return this.skipValue(m.TOKEN_OPERATOR, "=") ? (n.value = this.parseExpression(), this.advanceAfterBlockEnd(e.value)) : this.skip(m.TOKEN_BLOCK_END) ? (n.body = new _.Capture(e.lineno, e.colno, this.parseUntilBlocks("endset")), n.value = null, this.advanceAfterBlockEnd()) : this.fail("parseSet: expected = or block end in set tag", e.lineno, e.colno), n;
              }, E.parseSwitch = function() {
                var e = "switch", n = "endswitch", r = "case", p = "default", l = this.peekToken();
                !this.skipSymbol(e) && !this.skipSymbol(r) && !this.skipSymbol(p) && this.fail('parseSwitch: expected "switch," "case" or "default"', l.lineno, l.colno);
                var h = this.parseExpression();
                this.advanceAfterBlockEnd(e), this.parseUntilBlocks(r, p, n);
                var t = this.peekToken(), i = [], a;
                do {
                  this.skipSymbol(r);
                  var o = this.parseExpression();
                  this.advanceAfterBlockEnd(e);
                  var s = this.parseUntilBlocks(r, p, n);
                  i.push(new _.Case(t.line, t.col, o, s)), t = this.peekToken();
                } while (t && t.value === r);
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
                return new _.Switch(l.lineno, l.colno, h, i, a);
              }, E.parseStatement = function() {
                var e = this.peekToken(), n;
                if (e.type !== m.TOKEN_SYMBOL && this.fail("tag name expected", e.lineno, e.colno), this.breakOnBlocks && O.indexOf(this.breakOnBlocks, e.value) !== -1)
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
                      for (var r = 0; r < this.extensions.length; r++) {
                        var p = this.extensions[r];
                        if (O.indexOf(p.tags || [], e.value) !== -1)
                          return p.parse(this, _, m);
                      }
                    this.fail("unknown block tag: " + e.value, e.lineno, e.colno);
                }
                return n;
              }, E.parseRaw = function(e) {
                e = e || "raw";
                for (var n = "end" + e, r = new RegExp("([\\s\\S]*?){%\\s*(" + e + "|" + n + ")\\s*(?=%})%}"), p = 1, l = "", h = null, t = this.advanceAfterBlockEnd(); (h = this.tokens._extractRegex(r)) && p > 0; ) {
                  var i = h[0], a = h[1], o = h[2];
                  o === e ? p += 1 : o === n && (p -= 1), p === 0 ? (l += a, this.tokens.backN(i.length - a.length)) : l += i;
                }
                return new _.Output(t.lineno, t.colno, [new _.TemplateData(t.lineno, t.colno, l)]);
              }, E.parsePostfix = function(e) {
                for (var n, r = this.peekToken(); r; ) {
                  if (r.type === m.TOKEN_LEFT_PAREN)
                    e = new _.FunCall(r.lineno, r.colno, e, this.parseSignature());
                  else if (r.type === m.TOKEN_LEFT_BRACKET)
                    n = this.parseAggregate(), n.children.length > 1 && this.fail("invalid index"), e = new _.LookupVal(r.lineno, r.colno, e, n.children[0]);
                  else if (r.type === m.TOKEN_OPERATOR && r.value === ".") {
                    this.nextToken();
                    var p = this.nextToken();
                    p.type !== m.TOKEN_SYMBOL && this.fail("expected name as lookup value, got " + p.value, p.lineno, p.colno), n = new _.Literal(p.lineno, p.colno, p.value), e = new _.LookupVal(r.lineno, r.colno, e, n);
                  } else
                    break;
                  r = this.peekToken();
                }
                return e;
              }, E.parseExpression = function() {
                var e = this.parseInlineIf();
                return e;
              }, E.parseInlineIf = function() {
                var e = this.parseOr();
                if (this.skipSymbol("if")) {
                  var n = this.parseOr(), r = e;
                  e = new _.InlineIf(e.lineno, e.colno), e.body = r, e.cond = n, this.skipSymbol("else") ? e.else_ = this.parseOr() : e.else_ = null;
                }
                return e;
              }, E.parseOr = function() {
                for (var e = this.parseAnd(); this.skipSymbol("or"); ) {
                  var n = this.parseAnd();
                  e = new _.Or(e.lineno, e.colno, e, n);
                }
                return e;
              }, E.parseAnd = function() {
                for (var e = this.parseNot(); this.skipSymbol("and"); ) {
                  var n = this.parseNot();
                  e = new _.And(e.lineno, e.colno, e, n);
                }
                return e;
              }, E.parseNot = function() {
                var e = this.peekToken();
                return this.skipSymbol("not") ? new _.Not(e.lineno, e.colno, this.parseNot()) : this.parseIn();
              }, E.parseIn = function() {
                for (var e = this.parseIs(); ; ) {
                  var n = this.nextToken();
                  if (!n)
                    break;
                  var r = n.type === m.TOKEN_SYMBOL && n.value === "not";
                  if (r || this.pushToken(n), this.skipSymbol("in")) {
                    var p = this.parseIs();
                    e = new _.In(e.lineno, e.colno, e, p), r && (e = new _.Not(e.lineno, e.colno, e));
                  } else {
                    r && this.pushToken(n);
                    break;
                  }
                }
                return e;
              }, E.parseIs = function() {
                var e = this.parseCompare();
                if (this.skipSymbol("is")) {
                  var n = this.skipSymbol("not"), r = this.parseCompare();
                  e = new _.Is(e.lineno, e.colno, e, r), n && (e = new _.Not(e.lineno, e.colno, e));
                }
                return e;
              }, E.parseCompare = function() {
                for (var e = ["==", "===", "!=", "!==", "<", ">", "<=", ">="], n = this.parseConcat(), r = []; ; ) {
                  var p = this.nextToken();
                  if (p)
                    if (e.indexOf(p.value) !== -1)
                      r.push(new _.CompareOperand(p.lineno, p.colno, this.parseConcat(), p.value));
                    else {
                      this.pushToken(p);
                      break;
                    }
                  else break;
                }
                return r.length ? new _.Compare(r[0].lineno, r[0].colno, n, r) : n;
              }, E.parseConcat = function() {
                for (var e = this.parseAdd(); this.skipValue(m.TOKEN_TILDE, "~"); ) {
                  var n = this.parseAdd();
                  e = new _.Concat(e.lineno, e.colno, e, n);
                }
                return e;
              }, E.parseAdd = function() {
                for (var e = this.parseSub(); this.skipValue(m.TOKEN_OPERATOR, "+"); ) {
                  var n = this.parseSub();
                  e = new _.Add(e.lineno, e.colno, e, n);
                }
                return e;
              }, E.parseSub = function() {
                for (var e = this.parseMul(); this.skipValue(m.TOKEN_OPERATOR, "-"); ) {
                  var n = this.parseMul();
                  e = new _.Sub(e.lineno, e.colno, e, n);
                }
                return e;
              }, E.parseMul = function() {
                for (var e = this.parseDiv(); this.skipValue(m.TOKEN_OPERATOR, "*"); ) {
                  var n = this.parseDiv();
                  e = new _.Mul(e.lineno, e.colno, e, n);
                }
                return e;
              }, E.parseDiv = function() {
                for (var e = this.parseFloorDiv(); this.skipValue(m.TOKEN_OPERATOR, "/"); ) {
                  var n = this.parseFloorDiv();
                  e = new _.Div(e.lineno, e.colno, e, n);
                }
                return e;
              }, E.parseFloorDiv = function() {
                for (var e = this.parseMod(); this.skipValue(m.TOKEN_OPERATOR, "//"); ) {
                  var n = this.parseMod();
                  e = new _.FloorDiv(e.lineno, e.colno, e, n);
                }
                return e;
              }, E.parseMod = function() {
                for (var e = this.parsePow(); this.skipValue(m.TOKEN_OPERATOR, "%"); ) {
                  var n = this.parsePow();
                  e = new _.Mod(e.lineno, e.colno, e, n);
                }
                return e;
              }, E.parsePow = function() {
                for (var e = this.parseUnary(); this.skipValue(m.TOKEN_OPERATOR, "**"); ) {
                  var n = this.parseUnary();
                  e = new _.Pow(e.lineno, e.colno, e, n);
                }
                return e;
              }, E.parseUnary = function(e) {
                var n = this.peekToken(), r;
                return this.skipValue(m.TOKEN_OPERATOR, "-") ? r = new _.Neg(n.lineno, n.colno, this.parseUnary(!0)) : this.skipValue(m.TOKEN_OPERATOR, "+") ? r = new _.Pos(n.lineno, n.colno, this.parseUnary(!0)) : r = this.parsePrimary(), e || (r = this.parseFilter(r)), r;
              }, E.parsePrimary = function(e) {
                var n = this.nextToken(), r, p = null;
                if (n ? n.type === m.TOKEN_STRING ? r = n.value : n.type === m.TOKEN_INT ? r = parseInt(n.value, 10) : n.type === m.TOKEN_FLOAT ? r = parseFloat(n.value) : n.type === m.TOKEN_BOOLEAN ? n.value === "true" ? r = !0 : n.value === "false" ? r = !1 : this.fail("invalid boolean: " + n.value, n.lineno, n.colno) : n.type === m.TOKEN_NONE ? r = null : n.type === m.TOKEN_REGEX && (r = new RegExp(n.value.body, n.value.flags)) : this.fail("expected expression, got end of file"), r !== void 0 ? p = new _.Literal(n.lineno, n.colno, r) : n.type === m.TOKEN_SYMBOL ? p = new _.Symbol(n.lineno, n.colno, n.value) : (this.pushToken(n), p = this.parseAggregate()), e || (p = this.parsePostfix(p)), p)
                  return p;
                throw this.error("unexpected token: " + n.value, n.lineno, n.colno);
              }, E.parseFilterName = function() {
                for (var e = this.expect(m.TOKEN_SYMBOL), n = e.value; this.skipValue(m.TOKEN_OPERATOR, "."); )
                  n += "." + this.expect(m.TOKEN_SYMBOL).value;
                return new _.Symbol(e.lineno, e.colno, n);
              }, E.parseFilterArgs = function(e) {
                if (this.peekToken().type === m.TOKEN_LEFT_PAREN) {
                  var n = this.parsePostfix(e);
                  return n.args.children;
                }
                return [];
              }, E.parseFilter = function(e) {
                for (; this.skip(m.TOKEN_PIPE); ) {
                  var n = this.parseFilterName();
                  e = new _.Filter(n.lineno, n.colno, n, new _.NodeList(n.lineno, n.colno, [e].concat(this.parseFilterArgs(e))));
                }
                return e;
              }, E.parseFilterStatement = function() {
                var e = this.peekToken();
                this.skipSymbol("filter") || this.fail("parseFilterStatement: expected filter");
                var n = this.parseFilterName(), r = this.parseFilterArgs(n);
                this.advanceAfterBlockEnd(e.value);
                var p = new _.Capture(n.lineno, n.colno, this.parseUntilBlocks("endfilter"));
                this.advanceAfterBlockEnd();
                var l = new _.Filter(n.lineno, n.colno, n, new _.NodeList(n.lineno, n.colno, [p].concat(r)));
                return new _.Output(n.lineno, n.colno, [l]);
              }, E.parseAggregate = function() {
                var e = this.nextToken(), n;
                switch (e.type) {
                  case m.TOKEN_LEFT_PAREN:
                    n = new _.Group(e.lineno, e.colno);
                    break;
                  case m.TOKEN_LEFT_BRACKET:
                    n = new _.Array(e.lineno, e.colno);
                    break;
                  case m.TOKEN_LEFT_CURLY:
                    n = new _.Dict(e.lineno, e.colno);
                    break;
                  default:
                    return null;
                }
                for (; ; ) {
                  var r = this.peekToken().type;
                  if (r === m.TOKEN_RIGHT_PAREN || r === m.TOKEN_RIGHT_BRACKET || r === m.TOKEN_RIGHT_CURLY) {
                    this.nextToken();
                    break;
                  }
                  if (n.children.length > 0 && (this.skip(m.TOKEN_COMMA) || this.fail("parseAggregate: expected comma after expression", e.lineno, e.colno)), n instanceof _.Dict) {
                    var p = this.parsePrimary();
                    this.skip(m.TOKEN_COLON) || this.fail("parseAggregate: expected colon after dict key", e.lineno, e.colno);
                    var l = this.parseExpression();
                    n.addChild(new _.Pair(p.lineno, p.colno, p, l));
                  } else {
                    var h = this.parseExpression();
                    n.addChild(h);
                  }
                }
                return n;
              }, E.parseSignature = function(e, n) {
                var r = this.peekToken();
                if (!n && r.type !== m.TOKEN_LEFT_PAREN) {
                  if (e)
                    return null;
                  this.fail("expected arguments", r.lineno, r.colno);
                }
                r.type === m.TOKEN_LEFT_PAREN && (r = this.nextToken());
                for (var p = new _.NodeList(r.lineno, r.colno), l = new _.KeywordArgs(r.lineno, r.colno), h = !1; ; ) {
                  if (r = this.peekToken(), !n && r.type === m.TOKEN_RIGHT_PAREN) {
                    this.nextToken();
                    break;
                  } else if (n && r.type === m.TOKEN_BLOCK_END)
                    break;
                  if (h && !this.skip(m.TOKEN_COMMA))
                    this.fail("parseSignature: expected comma after expression", r.lineno, r.colno);
                  else {
                    var t = this.parseExpression();
                    this.skipValue(m.TOKEN_OPERATOR, "=") ? l.addChild(new _.Pair(t.lineno, t.colno, t, this.parseExpression())) : p.addChild(t);
                  }
                  h = !0;
                }
                return l.children.length && p.addChild(l), p;
              }, E.parseUntilBlocks = function() {
                for (var e = this.breakOnBlocks, n = arguments.length, r = new Array(n), p = 0; p < n; p++)
                  r[p] = arguments[p];
                this.breakOnBlocks = r;
                var l = this.parse();
                return this.breakOnBlocks = e, l;
              }, E.parseNodes = function() {
                for (var e, n = []; e = this.nextToken(); )
                  if (e.type === m.TOKEN_DATA) {
                    var r = e.value, p = this.peekToken(), l = p && p.value;
                    this.dropLeadingWhitespace && (r = r.replace(/^\s*/, ""), this.dropLeadingWhitespace = !1), p && (p.type === m.TOKEN_BLOCK_START && l.charAt(l.length - 1) === "-" || p.type === m.TOKEN_VARIABLE_START && l.charAt(this.tokens.tags.VARIABLE_START.length) === "-" || p.type === m.TOKEN_COMMENT && l.charAt(this.tokens.tags.COMMENT_START.length) === "-") && (r = r.replace(/\s*$/, "")), n.push(new _.Output(e.lineno, e.colno, [new _.TemplateData(e.lineno, e.colno, r)]));
                  } else if (e.type === m.TOKEN_BLOCK_START) {
                    this.dropLeadingWhitespace = !1;
                    var h = this.parseStatement();
                    if (!h)
                      break;
                    n.push(h);
                  } else if (e.type === m.TOKEN_VARIABLE_START) {
                    var t = this.parseExpression();
                    this.dropLeadingWhitespace = !1, this.advanceAfterVariableEnd(), n.push(new _.Output(e.lineno, e.colno, [t]));
                  } else e.type === m.TOKEN_COMMENT ? this.dropLeadingWhitespace = e.value.charAt(e.value.length - this.tokens.tags.COMMENT_END.length - 1) === "-" : this.fail("Unexpected token at top-level: " + e.type, e.lineno, e.colno);
                return n;
              }, E.parse = function() {
                return new _.NodeList(0, 0, this.parseNodes());
              }, E.parseAsRoot = function() {
                return new _.Root(0, 0, this.parseNodes());
              }, C;
            })(y);
            K.exports = {
              parse: function(C, E, L) {
                var e = new I(m.lex(C, L));
                return E !== void 0 && (e.extensions = E), e.parseAsRoot();
              },
              Parser: I
            };
          }),
          /* 9 */
          /***/
          (function(K, D, A) {
            var g = A(0), b = ` 
	\r `, m = "()[]{}%*-+~/#,:|.<>=!", _ = "0123456789", y = "{%", O = "%}", I = "{{", P = "}}", C = "{#", E = "#}", L = "string", e = "whitespace", n = "data", r = "block-start", p = "block-end", l = "variable-start", h = "variable-end", t = "comment", i = "left-paren", a = "right-paren", o = "left-bracket", s = "right-bracket", u = "left-curly", c = "right-curly", w = "operator", T = "comma", x = "colon", S = "tilde", R = "pipe", d = "int", f = "float", k = "boolean", F = "none", B = "symbol", G = "special", te = "regex";
            function J(fe, Q, Z, V) {
              return {
                type: fe,
                value: Q,
                lineno: Z,
                colno: V
              };
            }
            var le = /* @__PURE__ */ (function() {
              function fe(Z, V) {
                this.str = Z, this.index = 0, this.len = Z.length, this.lineno = 0, this.colno = 0, this.in_code = !1, V = V || {};
                var H = V.tags || {};
                this.tags = {
                  BLOCK_START: H.blockStart || y,
                  BLOCK_END: H.blockEnd || O,
                  VARIABLE_START: H.variableStart || I,
                  VARIABLE_END: H.variableEnd || P,
                  COMMENT_START: H.commentStart || C,
                  COMMENT_END: H.commentEnd || E
                }, this.trimBlocks = !!V.trimBlocks, this.lstripBlocks = !!V.lstripBlocks;
              }
              var Q = fe.prototype;
              return Q.nextToken = function() {
                var V = this.lineno, H = this.colno, W;
                if (this.in_code) {
                  var re = this.current();
                  if (this.isFinished())
                    return null;
                  if (re === '"' || re === "'")
                    return J(L, this._parseString(re), V, H);
                  if (W = this._extract(b))
                    return J(e, W, V, H);
                  if ((W = this._extractString(this.tags.BLOCK_END)) || (W = this._extractString("-" + this.tags.BLOCK_END)))
                    return this.in_code = !1, this.trimBlocks && (re = this.current(), re === `
` ? this.forward() : re === "\r" && (this.forward(), re = this.current(), re === `
` ? this.forward() : this.back())), J(p, W, V, H);
                  if ((W = this._extractString(this.tags.VARIABLE_END)) || (W = this._extractString("-" + this.tags.VARIABLE_END)))
                    return this.in_code = !1, J(h, W, V, H);
                  if (re === "r" && this.str.charAt(this.index + 1) === "/") {
                    this.forwardN(2);
                    for (var he = ""; !this.isFinished(); )
                      if (this.current() === "/" && this.previous() !== "\\") {
                        this.forward();
                        break;
                      } else
                        he += this.current(), this.forward();
                    for (var ue = ["g", "i", "m", "y"], de = ""; !this.isFinished(); ) {
                      var v = ue.indexOf(this.current()) !== -1;
                      if (v)
                        de += this.current(), this.forward();
                      else
                        break;
                    }
                    return J(te, {
                      body: he,
                      flags: de
                    }, V, H);
                  } else if (m.indexOf(re) !== -1) {
                    this.forward();
                    var N = ["==", "===", "!=", "!==", "<=", ">=", "//", "**"], U = re + this.current(), j;
                    switch (g.indexOf(N, U) !== -1 && (this.forward(), re = U, g.indexOf(N, U + this.current()) !== -1 && (re = U + this.current(), this.forward())), re) {
                      case "(":
                        j = i;
                        break;
                      case ")":
                        j = a;
                        break;
                      case "[":
                        j = o;
                        break;
                      case "]":
                        j = s;
                        break;
                      case "{":
                        j = u;
                        break;
                      case "}":
                        j = c;
                        break;
                      case ",":
                        j = T;
                        break;
                      case ":":
                        j = x;
                        break;
                      case "~":
                        j = S;
                        break;
                      case "|":
                        j = R;
                        break;
                      default:
                        j = w;
                    }
                    return J(j, re, V, H);
                  } else if (W = this._extractUntil(b + m), W.match(/^[-+]?[0-9]+$/))
                    if (this.current() === ".") {
                      this.forward();
                      var $ = this._extract(_);
                      return J(f, W + "." + $, V, H);
                    } else
                      return J(d, W, V, H);
                  else {
                    if (W.match(/^(true|false)$/))
                      return J(k, W, V, H);
                    if (W === "none")
                      return J(F, W, V, H);
                    if (W === "null")
                      return J(F, W, V, H);
                    if (W)
                      return J(B, W, V, H);
                    throw new Error("Unexpected value while parsing: " + W);
                  }
                } else {
                  var X = this.tags.BLOCK_START.charAt(0) + this.tags.VARIABLE_START.charAt(0) + this.tags.COMMENT_START.charAt(0) + this.tags.COMMENT_END.charAt(0);
                  if (this.isFinished())
                    return null;
                  if ((W = this._extractString(this.tags.BLOCK_START + "-")) || (W = this._extractString(this.tags.BLOCK_START)))
                    return this.in_code = !0, J(r, W, V, H);
                  if ((W = this._extractString(this.tags.VARIABLE_START + "-")) || (W = this._extractString(this.tags.VARIABLE_START)))
                    return this.in_code = !0, J(l, W, V, H);
                  W = "";
                  var se, q = !1;
                  for (this._matches(this.tags.COMMENT_START) && (q = !0, W = this._extractString(this.tags.COMMENT_START)); (se = this._extractUntil(X)) !== null; )
                    if (W += se, (this._matches(this.tags.BLOCK_START) || this._matches(this.tags.VARIABLE_START) || this._matches(this.tags.COMMENT_START)) && !q) {
                      if (this.lstripBlocks && this._matches(this.tags.BLOCK_START) && this.colno > 0 && this.colno <= W.length) {
                        var ae = W.slice(-this.colno);
                        if (/^\s+$/.test(ae) && (W = W.slice(0, -this.colno), !W.length))
                          return this.nextToken();
                      }
                      break;
                    } else if (this._matches(this.tags.COMMENT_END)) {
                      if (!q)
                        throw new Error("unexpected end of comment");
                      W += this._extractString(this.tags.COMMENT_END);
                      break;
                    } else
                      W += this.current(), this.forward();
                  if (se === null && q)
                    throw new Error("expected end of comment, got end of file");
                  return J(q ? t : n, W, V, H);
                }
              }, Q._parseString = function(V) {
                this.forward();
                for (var H = ""; !this.isFinished() && this.current() !== V; ) {
                  var W = this.current();
                  if (W === "\\") {
                    switch (this.forward(), this.current()) {
                      case "n":
                        H += `
`;
                        break;
                      case "t":
                        H += "	";
                        break;
                      case "r":
                        H += "\r";
                        break;
                      default:
                        H += this.current();
                    }
                    this.forward();
                  } else
                    H += W, this.forward();
                }
                return this.forward(), H;
              }, Q._matches = function(V) {
                if (this.index + V.length > this.len)
                  return null;
                var H = this.str.slice(this.index, this.index + V.length);
                return H === V;
              }, Q._extractString = function(V) {
                return this._matches(V) ? (this.forwardN(V.length), V) : null;
              }, Q._extractUntil = function(V) {
                return this._extractMatching(!0, V || "");
              }, Q._extract = function(V) {
                return this._extractMatching(!1, V);
              }, Q._extractMatching = function(V, H) {
                if (this.isFinished())
                  return null;
                var W = H.indexOf(this.current());
                if (V && W === -1 || !V && W !== -1) {
                  var re = this.current();
                  this.forward();
                  for (var he = H.indexOf(this.current()); (V && he === -1 || !V && he !== -1) && !this.isFinished(); )
                    re += this.current(), this.forward(), he = H.indexOf(this.current());
                  return re;
                }
                return "";
              }, Q._extractRegex = function(V) {
                var H = this.currentStr().match(V);
                return H ? (this.forwardN(H[0].length), H) : null;
              }, Q.isFinished = function() {
                return this.index >= this.len;
              }, Q.forwardN = function(V) {
                for (var H = 0; H < V; H++)
                  this.forward();
              }, Q.forward = function() {
                this.index++, this.previous() === `
` ? (this.lineno++, this.colno = 0) : this.colno++;
              }, Q.backN = function(V) {
                for (var H = 0; H < V; H++)
                  this.back();
              }, Q.back = function() {
                if (this.index--, this.current() === `
`) {
                  this.lineno--;
                  var V = this.src.lastIndexOf(`
`, this.index - 1);
                  V === -1 ? this.colno = this.index : this.colno = this.index - V;
                } else
                  this.colno--;
              }, Q.current = function() {
                return this.isFinished() ? "" : this.str.charAt(this.index);
              }, Q.currentStr = function() {
                return this.isFinished() ? "" : this.str.substr(this.index);
              }, Q.previous = function() {
                return this.str.charAt(this.index - 1);
              }, fe;
            })();
            K.exports = {
              lex: function(Q, Z) {
                return new le(Q, Z);
              },
              TOKEN_STRING: L,
              TOKEN_WHITESPACE: e,
              TOKEN_DATA: n,
              TOKEN_BLOCK_START: r,
              TOKEN_BLOCK_END: p,
              TOKEN_VARIABLE_START: l,
              TOKEN_VARIABLE_END: h,
              TOKEN_COMMENT: t,
              TOKEN_LEFT_PAREN: i,
              TOKEN_RIGHT_PAREN: a,
              TOKEN_LEFT_BRACKET: o,
              TOKEN_RIGHT_BRACKET: s,
              TOKEN_LEFT_CURLY: u,
              TOKEN_RIGHT_CURLY: c,
              TOKEN_OPERATOR: w,
              TOKEN_COMMA: T,
              TOKEN_COLON: x,
              TOKEN_TILDE: S,
              TOKEN_PIPE: R,
              TOKEN_INT: d,
              TOKEN_FLOAT: f,
              TOKEN_BOOLEAN: k,
              TOKEN_NONE: F,
              TOKEN_SYMBOL: B,
              TOKEN_SPECIAL: G,
              TOKEN_REGEX: te
            };
          }),
          /* 10 */
          /***/
          (function(K, D, A) {
            function g(I, P) {
              I.prototype = Object.create(P.prototype), I.prototype.constructor = I, b(I, P);
            }
            function b(I, P) {
              return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(E, L) {
                return E.__proto__ = L, E;
              }, b(I, P);
            }
            var m = A(6), _ = A(19), y = _.PrecompiledLoader, O = /* @__PURE__ */ (function(I) {
              g(P, I);
              function P(E, L) {
                var e;
                return e = I.call(this) || this, e.baseURL = E || ".", L = L || {}, e.useCache = !!L.useCache, e.async = !!L.async, e;
              }
              var C = P.prototype;
              return C.resolve = function(L, e) {
                throw new Error("relative templates not support in the browser yet");
              }, C.getSource = function(L, e) {
                var n = this, r = this.useCache, p;
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
                      noCache: !r
                    }, n.emit("load", L, p), e && e(null, p);
                }), p;
              }, C.fetch = function(L, e) {
                if (typeof window > "u")
                  throw new Error("WebLoader can only by used in a browser");
                var n = new XMLHttpRequest(), r = !0;
                n.onreadystatechange = function() {
                  n.readyState === 4 && r && (r = !1, n.status === 0 || n.status === 200 ? e(null, n.responseText) : e({
                    status: n.status,
                    content: n.responseText
                  }));
                }, L += (L.indexOf("?") === -1 ? "?" : "&") + "s=" + (/* @__PURE__ */ new Date()).getTime(), n.open("GET", L, this.async), n.send();
              }, P;
            })(m);
            K.exports = {
              WebLoader: O,
              PrecompiledLoader: y
            };
          }),
          /* 11 */
          /***/
          (function(K, D, A) {
            var g = A(0), b = A(7), m = b.Environment, _ = b.Template, y = A(6), O = A(10), I = A(23), P = A(5), C = A(8), E = A(9), L = A(2), e = A(3), n = A(25), r;
            function p(l, h) {
              h = h || {}, g.isObject(l) && (h = l, l = null);
              var t;
              return O.FileSystemLoader ? t = new O.FileSystemLoader(l, {
                watch: h.watch,
                noCache: h.noCache
              }) : O.WebLoader && (t = new O.WebLoader(l, {
                useCache: h.web && h.web.useCache,
                async: h.web && h.web.async
              })), r = new m(t, h), h && h.express && r.express(h.express), r;
            }
            K.exports = {
              Environment: m,
              Template: _,
              Loader: y,
              FileSystemLoader: O.FileSystemLoader,
              NodeResolveLoader: O.NodeResolveLoader,
              PrecompiledLoader: O.PrecompiledLoader,
              WebLoader: O.WebLoader,
              compiler: P,
              parser: C,
              lexer: E,
              runtime: L,
              lib: g,
              nodes: e,
              installJinjaCompat: n,
              configure: p,
              reset: function() {
                r = void 0;
              },
              compile: function(h, t, i, a) {
                return r || p(), new _(h, t, i, a);
              },
              render: function(h, t, i) {
                return r || p(), r.render(h, t, i);
              },
              renderString: function(h, t, i) {
                return r || p(), r.renderString(h, t, i);
              },
              precompile: I ? I.precompile : void 0,
              precompileString: I ? I.precompileString : void 0
            };
          }),
          /* 12 */
          /***/
          (function(K, D, A) {
            var g = A(13), b = [], m = [], _ = g.makeRequestCallFromTimer(y);
            function y() {
              if (m.length)
                throw m.shift();
            }
            K.exports = O;
            function O(P) {
              var C;
              b.length ? C = b.pop() : C = new I(), C.task = P, g(C);
            }
            function I() {
              this.task = null;
            }
            I.prototype.call = function() {
              try {
                this.task.call();
              } catch (P) {
                O.onerror ? O.onerror(P) : (m.push(P), _());
              } finally {
                this.task = null, b[b.length] = this;
              }
            };
          }),
          /* 13 */
          /***/
          (function(K, D, A) {
            (function(g) {
              K.exports = b;
              function b(e) {
                m.length || _(), m[m.length] = e;
              }
              var m = [], _, y = 0, O = 1024;
              function I() {
                for (; y < m.length; ) {
                  var e = y;
                  if (y = y + 1, m[e].call(), y > O) {
                    for (var n = 0, r = m.length - y; n < r; n++)
                      m[n] = m[n + y];
                    m.length -= y, y = 0;
                  }
                }
                m.length = 0, y = 0;
              }
              var P = typeof g < "u" ? g : self, C = P.MutationObserver || P.WebKitMutationObserver;
              typeof C == "function" ? _ = E(I) : _ = L(I), b.requestFlush = _;
              function E(e) {
                var n = 1, r = new C(e), p = document.createTextNode("");
                return r.observe(p, { characterData: !0 }), function() {
                  n = -n, p.data = n;
                };
              }
              function L(e) {
                return function() {
                  var r = setTimeout(l, 0), p = setInterval(l, 50);
                  function l() {
                    clearTimeout(r), clearInterval(p), e();
                  }
                };
              }
              b.makeRequestCallFromTimer = L;
            }).call(D, A(14));
          }),
          /* 14 */
          /***/
          (function(K, D) {
            var A;
            A = /* @__PURE__ */ (function() {
              return this;
            })();
            try {
              A = A || Function("return this")() || (0, eval)("this");
            } catch {
              typeof window == "object" && (A = window);
            }
            K.exports = A;
          }),
          /* 15 */
          /***/
          (function(K, D, A) {
            var g, b;
            (function(m) {
              var _ = function() {
                var C = Array.prototype.slice.call(arguments);
                typeof C[0] == "function" && C[0].apply(null, C.splice(1));
              }, y = function(C) {
                typeof setImmediate == "function" ? setImmediate(C) : typeof process < "u" && process.nextTick ? process.nextTick(C) : setTimeout(C, 0);
              }, O = function(C) {
                var E = function(L) {
                  var e = function() {
                    return C.length && C[L].apply(null, arguments), e.next();
                  };
                  return e.next = function() {
                    return L < C.length - 1 ? E(L + 1) : null;
                  }, e;
                };
                return E(0);
              }, I = Array.isArray || function(C) {
                return Object.prototype.toString.call(C) === "[object Array]";
              }, P = function(C, E, L) {
                var e = L ? y : _;
                if (E = E || function() {
                }, !I(C)) {
                  var n = new Error("First argument to waterfall must be an array of functions");
                  return E(n);
                }
                if (!C.length)
                  return E();
                var r = function(p) {
                  return function(l) {
                    if (l)
                      E.apply(null, arguments), E = function() {
                      };
                    else {
                      var h = Array.prototype.slice.call(arguments, 1), t = p.next();
                      t ? h.push(r(t)) : h.push(E), e(function() {
                        p.apply(null, h);
                      });
                    }
                  };
                };
                r(O(C))();
              };
              g = [], b = (function() {
                return P;
              }).apply(D, g), b !== void 0 && (K.exports = b);
            })();
          }),
          /* 16 */
          /***/
          (function(K, D, A) {
            var g = typeof Reflect == "object" ? Reflect : null, b = g && typeof g.apply == "function" ? g.apply : function(s, u, c) {
              return Function.prototype.apply.call(s, u, c);
            }, m;
            g && typeof g.ownKeys == "function" ? m = g.ownKeys : Object.getOwnPropertySymbols ? m = function(s) {
              return Object.getOwnPropertyNames(s).concat(Object.getOwnPropertySymbols(s));
            } : m = function(s) {
              return Object.getOwnPropertyNames(s);
            };
            function _(o) {
              console && console.warn && console.warn(o);
            }
            var y = Number.isNaN || function(s) {
              return s !== s;
            };
            function O() {
              O.init.call(this);
            }
            K.exports = O, K.exports.once = t, O.EventEmitter = O, O.prototype._events = void 0, O.prototype._eventsCount = 0, O.prototype._maxListeners = void 0;
            var I = 10;
            function P(o) {
              if (typeof o != "function")
                throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof o);
            }
            Object.defineProperty(O, "defaultMaxListeners", {
              enumerable: !0,
              get: function() {
                return I;
              },
              set: function(o) {
                if (typeof o != "number" || o < 0 || y(o))
                  throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + o + ".");
                I = o;
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
              for (var u = [], c = 1; c < arguments.length; c++) u.push(arguments[c]);
              var w = s === "error", T = this._events;
              if (T !== void 0)
                w = w && T.error === void 0;
              else if (!w)
                return !1;
              if (w) {
                var x;
                if (u.length > 0 && (x = u[0]), x instanceof Error)
                  throw x;
                var S = new Error("Unhandled error." + (x ? " (" + x.message + ")" : ""));
                throw S.context = x, S;
              }
              var R = T[s];
              if (R === void 0)
                return !1;
              if (typeof R == "function")
                b(R, this, u);
              else
                for (var d = R.length, f = p(R, d), c = 0; c < d; ++c)
                  b(f[c], this, u);
              return !0;
            };
            function E(o, s, u, c) {
              var w, T, x;
              if (P(u), T = o._events, T === void 0 ? (T = o._events = /* @__PURE__ */ Object.create(null), o._eventsCount = 0) : (T.newListener !== void 0 && (o.emit(
                "newListener",
                s,
                u.listener ? u.listener : u
              ), T = o._events), x = T[s]), x === void 0)
                x = T[s] = u, ++o._eventsCount;
              else if (typeof x == "function" ? x = T[s] = c ? [u, x] : [x, u] : c ? x.unshift(u) : x.push(u), w = C(o), w > 0 && x.length > w && !x.warned) {
                x.warned = !0;
                var S = new Error("Possible EventEmitter memory leak detected. " + x.length + " " + String(s) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                S.name = "MaxListenersExceededWarning", S.emitter = o, S.type = s, S.count = x.length, _(S);
              }
              return o;
            }
            O.prototype.addListener = function(s, u) {
              return E(this, s, u, !1);
            }, O.prototype.on = O.prototype.addListener, O.prototype.prependListener = function(s, u) {
              return E(this, s, u, !0);
            };
            function L() {
              if (!this.fired)
                return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
            }
            function e(o, s, u) {
              var c = { fired: !1, wrapFn: void 0, target: o, type: s, listener: u }, w = L.bind(c);
              return w.listener = u, c.wrapFn = w, w;
            }
            O.prototype.once = function(s, u) {
              return P(u), this.on(s, e(this, s, u)), this;
            }, O.prototype.prependOnceListener = function(s, u) {
              return P(u), this.prependListener(s, e(this, s, u)), this;
            }, O.prototype.removeListener = function(s, u) {
              var c, w, T, x, S;
              if (P(u), w = this._events, w === void 0)
                return this;
              if (c = w[s], c === void 0)
                return this;
              if (c === u || c.listener === u)
                --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete w[s], w.removeListener && this.emit("removeListener", s, c.listener || u));
              else if (typeof c != "function") {
                for (T = -1, x = c.length - 1; x >= 0; x--)
                  if (c[x] === u || c[x].listener === u) {
                    S = c[x].listener, T = x;
                    break;
                  }
                if (T < 0)
                  return this;
                T === 0 ? c.shift() : l(c, T), c.length === 1 && (w[s] = c[0]), w.removeListener !== void 0 && this.emit("removeListener", s, S || u);
              }
              return this;
            }, O.prototype.off = O.prototype.removeListener, O.prototype.removeAllListeners = function(s) {
              var u, c, w;
              if (c = this._events, c === void 0)
                return this;
              if (c.removeListener === void 0)
                return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : c[s] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete c[s]), this;
              if (arguments.length === 0) {
                var T = Object.keys(c), x;
                for (w = 0; w < T.length; ++w)
                  x = T[w], x !== "removeListener" && this.removeAllListeners(x);
                return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
              }
              if (u = c[s], typeof u == "function")
                this.removeListener(s, u);
              else if (u !== void 0)
                for (w = u.length - 1; w >= 0; w--)
                  this.removeListener(s, u[w]);
              return this;
            };
            function n(o, s, u) {
              var c = o._events;
              if (c === void 0)
                return [];
              var w = c[s];
              return w === void 0 ? [] : typeof w == "function" ? u ? [w.listener || w] : [w] : u ? h(w) : p(w, w.length);
            }
            O.prototype.listeners = function(s) {
              return n(this, s, !0);
            }, O.prototype.rawListeners = function(s) {
              return n(this, s, !1);
            }, O.listenerCount = function(o, s) {
              return typeof o.listenerCount == "function" ? o.listenerCount(s) : r.call(o, s);
            }, O.prototype.listenerCount = r;
            function r(o) {
              var s = this._events;
              if (s !== void 0) {
                var u = s[o];
                if (typeof u == "function")
                  return 1;
                if (u !== void 0)
                  return u.length;
              }
              return 0;
            }
            O.prototype.eventNames = function() {
              return this._eventsCount > 0 ? m(this._events) : [];
            };
            function p(o, s) {
              for (var u = new Array(s), c = 0; c < s; ++c)
                u[c] = o[c];
              return u;
            }
            function l(o, s) {
              for (; s + 1 < o.length; s++)
                o[s] = o[s + 1];
              o.pop();
            }
            function h(o) {
              for (var s = new Array(o.length), u = 0; u < s.length; ++u)
                s[u] = o[u].listener || o[u];
              return s;
            }
            function t(o, s) {
              return new Promise(function(u, c) {
                function w(x) {
                  o.removeListener(s, T), c(x);
                }
                function T() {
                  typeof o.removeListener == "function" && o.removeListener("error", w), u([].slice.call(arguments));
                }
                a(o, s, T, { once: !0 }), s !== "error" && i(o, w, { once: !0 });
              });
            }
            function i(o, s, u) {
              typeof o.on == "function" && a(o, "error", s, u);
            }
            function a(o, s, u, c) {
              if (typeof o.on == "function")
                c.once ? o.once(s, u) : o.on(s, u);
              else if (typeof o.addEventListener == "function")
                o.addEventListener(s, function w(T) {
                  c.once && o.removeEventListener(s, w), u(T);
                });
              else
                throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof o);
            }
          }),
          /* 17 */
          /***/
          (function(K, D, A) {
            var g = A(3), b = A(0), m = 0;
            function _() {
              return "hole_" + m++;
            }
            function y(r, p) {
              for (var l = null, h = 0; h < r.length; h++) {
                var t = p(r[h]);
                t !== r[h] && (l || (l = r.slice()), l[h] = t);
              }
              return l || r;
            }
            function O(r, p, l) {
              if (!(r instanceof g.Node))
                return r;
              if (!l) {
                var h = p(r);
                if (h && h !== r)
                  return h;
              }
              if (r instanceof g.NodeList) {
                var t = y(r.children, function(u) {
                  return O(u, p, l);
                });
                t !== r.children && (r = new g[r.typename](r.lineno, r.colno, t));
              } else if (r instanceof g.CallExtension) {
                var i = O(r.args, p, l), a = y(r.contentArgs, function(u) {
                  return O(u, p, l);
                });
                (i !== r.args || a !== r.contentArgs) && (r = new g[r.typename](r.extName, r.prop, i, a));
              } else {
                var o = r.fields.map(function(u) {
                  return r[u];
                }), s = y(o, function(u) {
                  return O(u, p, l);
                });
                s !== o && (r = new g[r.typename](r.lineno, r.colno), s.forEach(function(u, c) {
                  r[r.fields[c]] = u;
                }));
              }
              return l && p(r) || r;
            }
            function I(r, p) {
              return O(r, p, !0);
            }
            function P(r, p, l) {
              var h = [], t = I(l ? r[l] : r, function(i) {
                var a;
                return i instanceof g.Block ? i : ((i instanceof g.Filter && b.indexOf(p, i.name.value) !== -1 || i instanceof g.CallExtensionAsync) && (a = new g.Symbol(i.lineno, i.colno, _()), h.push(new g.FilterAsync(i.lineno, i.colno, i.name, i.args, a))), a);
              });
              return l ? r[l] = t : r = t, h.length ? (h.push(r), new g.NodeList(r.lineno, r.colno, h)) : r;
            }
            function C(r, p) {
              return I(r, function(l) {
                return l instanceof g.Output ? P(l, p) : l instanceof g.Set ? P(l, p, "value") : l instanceof g.For ? P(l, p, "arr") : l instanceof g.If ? P(l, p, "cond") : l instanceof g.CallExtension ? P(l, p, "args") : void 0;
              });
            }
            function E(r) {
              return O(r, function(p) {
                if (p instanceof g.Block) {
                  var l = !1, h = _();
                  p.body = O(p.body, function(t) {
                    if (t instanceof g.FunCall && t.name.value === "super")
                      return l = !0, new g.Symbol(t.lineno, t.colno, h);
                  }), l && p.body.children.unshift(new g.Super(0, 0, p.name, new g.Symbol(0, 0, h)));
                }
              });
            }
            function L(r) {
              return I(r, function(p) {
                if (!(!(p instanceof g.If) && !(p instanceof g.For))) {
                  var l = !1;
                  if (O(p, function(h) {
                    if (h instanceof g.FilterAsync || h instanceof g.IfAsync || h instanceof g.AsyncEach || h instanceof g.AsyncAll || h instanceof g.CallExtensionAsync)
                      return l = !0, h;
                  }), l) {
                    if (p instanceof g.If)
                      return new g.IfAsync(p.lineno, p.colno, p.cond, p.body, p.else_);
                    if (p instanceof g.For && !(p instanceof g.AsyncAll))
                      return new g.AsyncEach(p.lineno, p.colno, p.arr, p.name, p.body, p.else_);
                  }
                }
              });
            }
            function e(r, p) {
              return L(E(C(r, p)));
            }
            function n(r, p) {
              return e(r, p || []);
            }
            K.exports = {
              transform: n
            };
          }),
          /* 18 */
          /***/
          (function(K, m, A) {
            var g = A(0), b = A(2), m = K.exports = {};
            function _(v, N) {
              return v == null || v === !1 ? N : v;
            }
            m.abs = Math.abs;
            function y(v) {
              return v !== v;
            }
            function O(v, N, U) {
              var j, $ = [], X = [];
              for (j = 0; j < v.length; j++)
                j % N === 0 && X.length && ($.push(X), X = []), X.push(v[j]);
              if (X.length) {
                if (U)
                  for (j = X.length; j < N; j++)
                    X.push(U);
                $.push(X);
              }
              return $;
            }
            m.batch = O;
            function I(v) {
              v = _(v, "");
              var N = v.toLowerCase();
              return b.copySafeness(v, N.charAt(0).toUpperCase() + N.slice(1));
            }
            m.capitalize = I;
            function P(v, N) {
              if (v = _(v, ""), N = N || 80, v.length >= N)
                return v;
              var U = N - v.length, j = g.repeat(" ", U / 2 - U % 2), $ = g.repeat(" ", U / 2);
              return b.copySafeness(v, j + v + $);
            }
            m.center = P;
            function C(v, N, U) {
              return U ? v || N : v !== void 0 ? v : N;
            }
            m.default = C;
            function E(v, N, U) {
              if (!g.isObject(v))
                throw new g.TemplateError("dictsort filter: val must be an object");
              var j = [];
              for (var $ in v)
                j.push([$, v[$]]);
              var X;
              if (U === void 0 || U === "key")
                X = 0;
              else if (U === "value")
                X = 1;
              else
                throw new g.TemplateError("dictsort filter: You can only sort by either key or value");
              return j.sort(function(se, q) {
                var ae = se[X], me = q[X];
                return N || (g.isString(ae) && (ae = ae.toUpperCase()), g.isString(me) && (me = me.toUpperCase())), ae > me ? 1 : ae === me ? 0 : -1;
              }), j;
            }
            m.dictsort = E;
            function L(v, N) {
              return JSON.stringify(v, null, N);
            }
            m.dump = L;
            function e(v) {
              return v instanceof b.SafeString ? v : (v = v ?? "", b.markSafe(g.escape(v.toString())));
            }
            m.escape = e;
            function n(v) {
              return v instanceof b.SafeString ? v : (v = v ?? "", b.markSafe(v.toString()));
            }
            m.safe = n;
            function r(v) {
              return v[0];
            }
            m.first = r;
            function p(v) {
              return v = v ?? "", b.markSafe(g.escape(v.toString()));
            }
            m.forceescape = p;
            function l(v, N) {
              return g.groupBy(v, N, this.env.opts.throwOnUndefined);
            }
            m.groupby = l;
            function h(v, N, U) {
              if (v = _(v, ""), v === "")
                return "";
              N = N || 4;
              var j = v.split(`
`), $ = g.repeat(" ", N), X = j.map(function(se, q) {
                return q === 0 && !U ? se : "" + $ + se;
              }).join(`
`);
              return b.copySafeness(v, X);
            }
            m.indent = h;
            function t(v, N, U) {
              return N = N || "", U && (v = g.map(v, function(j) {
                return j[U];
              })), v.join(N);
            }
            m.join = t;
            function i(v) {
              return v[v.length - 1];
            }
            m.last = i;
            function a(v) {
              var N = _(v, "");
              return N !== void 0 ? typeof Map == "function" && N instanceof Map || typeof Set == "function" && N instanceof Set ? N.size : g.isObject(N) && !(N instanceof b.SafeString) ? g.keys(N).length : N.length : 0;
            }
            m.length = a;
            function o(v) {
              if (g.isString(v))
                return v.split("");
              if (g.isObject(v))
                return g._entries(v || {}).map(function(N) {
                  var U = N[0], j = N[1];
                  return {
                    key: U,
                    value: j
                  };
                });
              if (g.isArray(v))
                return v;
              throw new g.TemplateError("list filter: type not iterable");
            }
            m.list = o;
            function s(v) {
              return v = _(v, ""), v.toLowerCase();
            }
            m.lower = s;
            function u(v) {
              return v == null ? "" : b.copySafeness(v, v.replace(/\r\n|\n/g, `<br />
`));
            }
            m.nl2br = u;
            function c(v) {
              return v[Math.floor(Math.random() * v.length)];
            }
            m.random = c;
            function w(v) {
              function N(U, j, $) {
                j === void 0 && (j = "truthy");
                var X = this, se = X.env.getTest(j);
                return g.toArray(U).filter(function(ae) {
                  return se.call(X, ae, $) === v;
                });
              }
              return N;
            }
            m.reject = w(!1);
            function T(v, N) {
              return v.filter(function(U) {
                return !U[N];
              });
            }
            m.rejectattr = T, m.select = w(!0);
            function x(v, N) {
              return v.filter(function(U) {
                return !!U[N];
              });
            }
            m.selectattr = x;
            function S(v, N, U, j) {
              var $ = v;
              if (N instanceof RegExp)
                return v.replace(N, U);
              typeof j > "u" && (j = -1);
              var X = "";
              if (typeof N == "number")
                N = "" + N;
              else if (typeof N != "string")
                return v;
              if (typeof v == "number" && (v = "" + v), typeof v != "string" && !(v instanceof b.SafeString))
                return v;
              if (N === "")
                return X = U + v.split("").join(U) + U, b.copySafeness(v, X);
              var se = v.indexOf(N);
              if (j === 0 || se === -1)
                return v;
              for (var q = 0, ae = 0; se > -1 && (j === -1 || ae < j); )
                X += v.substring(q, se) + U, q = se + N.length, ae++, se = v.indexOf(N, q);
              return q < v.length && (X += v.substring(q)), b.copySafeness($, X);
            }
            m.replace = S;
            function R(v) {
              var N;
              return g.isString(v) ? N = o(v) : N = g.map(v, function(U) {
                return U;
              }), N.reverse(), g.isString(v) ? b.copySafeness(v, N.join("")) : N;
            }
            m.reverse = R;
            function d(v, N, U) {
              N = N || 0;
              var j = Math.pow(10, N), $;
              return U === "ceil" ? $ = Math.ceil : U === "floor" ? $ = Math.floor : $ = Math.round, $(v * j) / j;
            }
            m.round = d;
            function f(v, N, U) {
              for (var j = Math.floor(v.length / N), $ = v.length % N, X = [], se = 0, q = 0; q < N; q++) {
                var ae = se + q * j;
                q < $ && se++;
                var me = se + (q + 1) * j, ve = v.slice(ae, me);
                U && q >= $ && ve.push(U), X.push(ve);
              }
              return X;
            }
            m.slice = f;
            function k(v, N, U) {
              return U === void 0 && (U = 0), N && (v = g.map(v, function(j) {
                return j[N];
              })), U + v.reduce(function(j, $) {
                return j + $;
              }, 0);
            }
            m.sum = k, m.sort = b.makeMacro(["value", "reverse", "case_sensitive", "attribute"], [], function(N, U, j, $) {
              var X = this, se = g.map(N, function(ae) {
                return ae;
              }), q = g.getAttrGetter($);
              return se.sort(function(ae, me) {
                var ve = $ ? q(ae) : ae, ye = $ ? q(me) : me;
                if (X.env.opts.throwOnUndefined && $ && (ve === void 0 || ye === void 0))
                  throw new TypeError('sort: attribute "' + $ + '" resolved to undefined');
                return !j && g.isString(ve) && g.isString(ye) && (ve = ve.toLowerCase(), ye = ye.toLowerCase()), ve < ye ? U ? 1 : -1 : ve > ye ? U ? -1 : 1 : 0;
              }), se;
            });
            function F(v) {
              return b.copySafeness(v, v);
            }
            m.string = F;
            function B(v, N) {
              v = _(v, "");
              var U = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi, j = te(v.replace(U, "")), $ = "";
              return N ? $ = j.replace(/^ +| +$/gm, "").replace(/ +/g, " ").replace(/(\r\n)/g, `
`).replace(/\n\n\n+/g, `

`) : $ = j.replace(/\s+/gi, " "), b.copySafeness(v, $);
            }
            m.striptags = B;
            function G(v) {
              v = _(v, "");
              var N = v.split(" ").map(function(U) {
                return I(U);
              });
              return b.copySafeness(v, N.join(" "));
            }
            m.title = G;
            function te(v) {
              return b.copySafeness(v, v.replace(/^\s*|\s*$/g, ""));
            }
            m.trim = te;
            function J(v, N, U, j) {
              var $ = v;
              if (v = _(v, ""), N = N || 255, v.length <= N)
                return v;
              if (U)
                v = v.substring(0, N);
              else {
                var X = v.lastIndexOf(" ", N);
                X === -1 && (X = N), v = v.substring(0, X);
              }
              return v += j ?? "...", b.copySafeness($, v);
            }
            m.truncate = J;
            function le(v) {
              return v = _(v, ""), v.toUpperCase();
            }
            m.upper = le;
            function fe(v) {
              var N = encodeURIComponent;
              if (g.isString(v))
                return N(v);
              var U = g.isArray(v) ? v : g._entries(v);
              return U.map(function(j) {
                var $ = j[0], X = j[1];
                return N($) + "=" + N(X);
              }).join("&");
            }
            m.urlencode = fe;
            var Q = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/, Z = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i, V = /^https?:\/\/.*$/, H = /^www\./, W = /\.(?:org|net|com)(?:\:|\/|$)/;
            function re(v, N, U) {
              y(N) && (N = 1 / 0);
              var j = U === !0 ? ' rel="nofollow"' : "", $ = v.split(/(\s+)/).filter(function(X) {
                return X && X.length;
              }).map(function(X) {
                var se = X.match(Q), q = se ? se[1] : X, ae = q.substr(0, N);
                return V.test(q) ? '<a href="' + q + '"' + j + ">" + ae + "</a>" : H.test(q) ? '<a href="http://' + q + '"' + j + ">" + ae + "</a>" : Z.test(q) ? '<a href="mailto:' + q + '">' + q + "</a>" : W.test(q) ? '<a href="http://' + q + '"' + j + ">" + ae + "</a>" : X;
              });
              return $.join("");
            }
            m.urlize = re;
            function he(v) {
              v = _(v, "");
              var N = v ? v.match(/\w+/g) : null;
              return N ? N.length : null;
            }
            m.wordcount = he;
            function ue(v, N) {
              var U = parseFloat(v);
              return y(U) ? N : U;
            }
            m.float = ue;
            var de = b.makeMacro(["value", "default", "base"], [], function(N, U, j) {
              j === void 0 && (j = 10);
              var $ = parseInt(N, j);
              return y($) ? U : $;
            });
            m.int = de, m.d = m.default, m.e = m.escape;
          }),
          /* 19 */
          /***/
          (function(K, D, A) {
            function g(y, O) {
              y.prototype = Object.create(O.prototype), y.prototype.constructor = y, b(y, O);
            }
            function b(y, O) {
              return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(P, C) {
                return P.__proto__ = C, P;
              }, b(y, O);
            }
            var m = A(6), _ = /* @__PURE__ */ (function(y) {
              g(O, y);
              function O(P) {
                var C;
                return C = y.call(this) || this, C.precompiled = P || {}, C;
              }
              var I = O.prototype;
              return I.getSource = function(C) {
                return this.precompiled[C] ? {
                  src: {
                    type: "code",
                    obj: this.precompiled[C]
                  },
                  path: C
                } : null;
              }, O;
            })(m);
            K.exports = {
              PrecompiledLoader: _
            };
          }),
          /* 20 */
          /***/
          (function(K, D, A) {
            var g = A(2).SafeString;
            function b(c) {
              return typeof c == "function";
            }
            D.callable = b;
            function m(c) {
              return c !== void 0;
            }
            D.defined = m;
            function _(c, w) {
              return c % w === 0;
            }
            D.divisibleby = _;
            function y(c) {
              return c instanceof g;
            }
            D.escaped = y;
            function O(c, w) {
              return c === w;
            }
            D.equalto = O, D.eq = D.equalto, D.sameas = D.equalto;
            function I(c) {
              return c % 2 === 0;
            }
            D.even = I;
            function P(c) {
              return !c;
            }
            D.falsy = P;
            function C(c, w) {
              return c >= w;
            }
            D.ge = C;
            function E(c, w) {
              return c > w;
            }
            D.greaterthan = E, D.gt = D.greaterthan;
            function L(c, w) {
              return c <= w;
            }
            D.le = L;
            function e(c, w) {
              return c < w;
            }
            D.lessthan = e, D.lt = D.lessthan;
            function n(c) {
              return c.toLowerCase() === c;
            }
            D.lower = n;
            function r(c, w) {
              return c !== w;
            }
            D.ne = r;
            function p(c) {
              return c === null;
            }
            D.null = p;
            function l(c) {
              return typeof c == "number";
            }
            D.number = l;
            function h(c) {
              return c % 2 === 1;
            }
            D.odd = h;
            function t(c) {
              return typeof c == "string";
            }
            D.string = t;
            function i(c) {
              return !!c;
            }
            D.truthy = i;
            function a(c) {
              return c === void 0;
            }
            D.undefined = a;
            function o(c) {
              return c.toUpperCase() === c;
            }
            D.upper = o;
            function s(c) {
              return typeof Symbol < "u" ? !!c[Symbol.iterator] : Array.isArray(c) || typeof c == "string";
            }
            D.iterable = s;
            function u(c) {
              var w = c != null && typeof c == "object" && !Array.isArray(c);
              return Set ? w && !(c instanceof Set) : w;
            }
            D.mapping = u;
          }),
          /* 21 */
          /***/
          (function(K, D, A) {
            function g(_) {
              var y = -1;
              return {
                current: null,
                reset: function() {
                  y = -1, this.current = null;
                },
                next: function() {
                  return y++, y >= _.length && (y = 0), this.current = _[y], this.current;
                }
              };
            }
            function b(_) {
              _ = _ || ",";
              var y = !0;
              return function() {
                var O = y ? "" : _;
                return y = !1, O;
              };
            }
            function m() {
              return {
                range: function(y, O, I) {
                  typeof O > "u" ? (O = y, y = 0, I = 1) : I || (I = 1);
                  var P = [];
                  if (I > 0)
                    for (var C = y; C < O; C += I)
                      P.push(C);
                  else
                    for (var E = y; E > O; E += I)
                      P.push(E);
                  return P;
                },
                cycler: function() {
                  return g(Array.prototype.slice.call(arguments));
                },
                joiner: function(y) {
                  return b(y);
                }
              };
            }
            K.exports = m;
          }),
          /* 22 */
          /***/
          (function(K, D, A) {
            var g = A(4);
            K.exports = function(m, _) {
              function y(O, I) {
                if (this.name = O, this.path = O, this.defaultEngine = I.defaultEngine, this.ext = g.extname(O), !this.ext && !this.defaultEngine)
                  throw new Error("No default engine was specified and no extension was provided.");
                this.ext || (this.name += this.ext = (this.defaultEngine[0] !== "." ? "." : "") + this.defaultEngine);
              }
              return y.prototype.render = function(I, P) {
                m.render(this.name, I, P);
              }, _.set("view", y), _.set("nunjucksEnv", m), m;
            };
          }),
          /* 23 */
          /***/
          (function(K, D, A) {
            var g = A(4), b = A(4), m = A(0), _ = m._prettifyError, y = A(5), O = A(7), I = O.Environment, P = A(24);
            function C(n, r) {
              return Array.isArray(r) ? r.some(function(p) {
                return n.match(p);
              }) : !1;
            }
            function E(n, r) {
              r = r || {}, r.isString = !0;
              var p = r.env || new I([]), l = r.wrapper || P;
              if (!r.name)
                throw new Error('the "name" option is required when compiling a string');
              return l([e(n, r.name, p)], r);
            }
            function L(n, r) {
              r = r || {};
              var p = r.env || new I([]), l = r.wrapper || P;
              if (r.isString)
                return E(n, r);
              var h = g.existsSync(n) && g.statSync(n), t = [], i = [];
              function a(u) {
                g.readdirSync(u).forEach(function(c) {
                  var w = b.join(u, c), T = w.substr(b.join(n, "/").length), x = g.statSync(w);
                  x && x.isDirectory() ? (T += "/", C(T, r.exclude) || a(w)) : C(T, r.include) && i.push(w);
                });
              }
              if (h.isFile())
                t.push(e(g.readFileSync(n, "utf-8"), r.name || n, p));
              else if (h.isDirectory()) {
                a(n);
                for (var o = 0; o < i.length; o++) {
                  var s = i[o].replace(b.join(n, "/"), "");
                  try {
                    t.push(e(g.readFileSync(i[o], "utf-8"), s, p));
                  } catch (u) {
                    if (r.force)
                      console.error(u);
                    else
                      throw u;
                  }
                }
              }
              return l(t, r);
            }
            function e(n, r, p) {
              p = p || new I([]);
              var l = p.asyncFilters, h = p.extensionsList, t;
              r = r.replace(/\\/g, "/");
              try {
                t = y.compile(n, l, h, r, p.opts);
              } catch (i) {
                throw _(r, !1, i);
              }
              return {
                name: r,
                template: t
              };
            }
            K.exports = {
              precompile: L,
              precompileString: E
            };
          }),
          /* 24 */
          /***/
          (function(K, D, A) {
            function g(b, m) {
              var _ = "";
              m = m || {};
              for (var y = 0; y < b.length; y++) {
                var O = JSON.stringify(b[y].name), I = b[y].template;
                _ += "(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[" + O + `] = (function() {
` + I + `
})();
`, m.asFunction && (_ += "return function(ctx, cb) { return nunjucks.render(" + O + `, ctx, cb); }
`), _ += `})();
`;
              }
              return _;
            }
            K.exports = g;
          }),
          /* 25 */
          /***/
          (function(K, D, A) {
            function g() {
              var b = this.runtime, m = this.lib, _ = this.compiler.Compiler, y = this.parser.Parser, O = this.nodes, I = this.lexer, P = b.contextOrFrameLookup, C = b.memberLookup, E, L;
              _ && (E = _.prototype.assertType), y && (L = y.prototype.parseAggregate);
              function e() {
                b.contextOrFrameLookup = P, b.memberLookup = C, _ && (_.prototype.assertType = E), y && (y.prototype.parseAggregate = L);
              }
              b.contextOrFrameLookup = function(a, o, s) {
                var u = P.apply(this, arguments);
                if (u !== void 0)
                  return u;
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
              function n(i) {
                return {
                  index: i.index,
                  lineno: i.lineno,
                  colno: i.colno
                };
              }
              if (O && _ && y) {
                var r = O.Node.extend("Slice", {
                  fields: ["start", "stop", "step"],
                  init: function(a, o, s, u, c) {
                    s = s || new O.Literal(a, o, null), u = u || new O.Literal(a, o, null), c = c || new O.Literal(a, o, 1), this.parent(a, o, s, u, c);
                  }
                });
                _.prototype.assertType = function(a) {
                  a instanceof r || E.apply(this, arguments);
                }, _.prototype.compileSlice = function(a, o) {
                  this._emit("("), this._compileExpression(a.start, o), this._emit("),("), this._compileExpression(a.stop, o), this._emit("),("), this._compileExpression(a.step, o), this._emit(")");
                }, y.prototype.parseAggregate = function() {
                  var a = this, o = n(this.tokens);
                  o.colno--, o.index--;
                  try {
                    return L.apply(this);
                  } catch (R) {
                    var s = n(this.tokens), u = function() {
                      return m._assign(a.tokens, s), R;
                    };
                    m._assign(this.tokens, o), this.peeked = !1;
                    var c = this.peekToken();
                    if (c.type !== I.TOKEN_LEFT_BRACKET)
                      throw u();
                    this.nextToken();
                    for (var w = new r(c.lineno, c.colno), T = !1, x = 0; x <= w.fields.length && !this.skip(I.TOKEN_RIGHT_BRACKET); x++) {
                      if (x === w.fields.length)
                        if (T)
                          this.fail("parseSlice: too many slice components", c.lineno, c.colno);
                        else
                          break;
                      if (this.skip(I.TOKEN_COLON))
                        T = !0;
                      else {
                        var S = w.fields[x];
                        w[S] = this.parseExpression(), T = this.skip(I.TOKEN_COLON) || T;
                      }
                    }
                    if (!T)
                      throw u();
                    return new O.Array(c.lineno, c.colno, [w]);
                  }
                };
              }
              function p(i, a, o, s) {
                i = i || [], a === null && (a = s < 0 ? i.length - 1 : 0), o === null ? o = s < 0 ? -1 : i.length : o < 0 && (o += i.length), a < 0 && (a += i.length);
                for (var u = [], c = a; !(c < 0 || c > i.length || s > 0 && c >= o || s < 0 && c <= o); c += s)
                  u.push(b.memberLookup(i, c));
                return u;
              }
              function l(i, a) {
                return Object.prototype.hasOwnProperty.call(i, a);
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
                  return m._entries(this);
                },
                values: function() {
                  return m._values(this);
                },
                keys: function() {
                  return m.keys(this);
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
                  var a = m.keys(this);
                  if (!a.length)
                    throw new Error("KeyError");
                  var o = a[0], s = this[o];
                  return delete this[o], [o, s];
                },
                setdefault: function(a, o) {
                  return o === void 0 && (o = null), a in this || (this[a] = o), this[a];
                },
                update: function(a) {
                  return m._assign(this, a), null;
                }
              };
              return t.iteritems = t.items, t.itervalues = t.values, t.iterkeys = t.keys, b.memberLookup = function(a, o, s) {
                return arguments.length === 4 ? p.apply(this, arguments) : (a = a || {}, m.isArray(a) && l(h, o) ? h[o].bind(a) : m.isObject(a) && l(t, o) ? t[o].bind(a) : C.apply(this, arguments));
              }, e;
            }
            K.exports = g;
          })
          /******/
        ])
      );
    });
  })(xe)), xe.exports;
}
var $e = ze();
const Te = /* @__PURE__ */ He($e), Ce = /* @__PURE__ */ new Set([
  "constructor",
  "__proto__",
  "prototype",
  "__defineGetter__",
  "__defineSetter__",
  "__lookupGetter__",
  "__lookupSetter__",
  "call",
  "apply",
  "bind"
]), be = /* @__PURE__ */ new Set([
  Function,
  Object.getPrototypeOf(async function() {
  }).constructor,
  Object.getPrototypeOf(function* () {
  }).constructor,
  Object.getPrototypeOf(async function* () {
  }).constructor,
  Object,
  Reflect
]), ke = (M, ee) => Object.prototype.hasOwnProperty.call(M, ee), Je = (M) => typeof M == "symbol" ? M : String(M), Xe = /^(?:[\w$]|[^\p{ASCII}\p{C}\p{Z}])+$/u, Qe = /[\\\r\n\u2028\u2029]/, Pe = (M) => {
  throw new Error("The name " + JSON.stringify(M) + " is not allowed in templates");
}, Be = (M) => {
  Xe.test(String(M)) || Pe(M);
}, Le = (M) => {
  M?.typename === "FunCall" ? Le(M.name) : M?.typename === "LookupVal" ? (Le(M.target), Le(M.val)) : M?.typename === "Literal" && typeof M.value == "string" && Qe.test(M.value) && Pe(M.value);
}, Ze = (M) => {
  switch (M.typename) {
    case "Set":
      return M.targets ?? [];
    case "Macro":
    case "Caller":
      return [M.name];
    default:
      return [];
  }
}, qe = (M) => {
  switch (M.typename) {
    case "For":
    case "AsyncEach":
    case "AsyncAll":
      return M.name?.typename === "Array" ? M.name.children ?? [] : [];
    case "Macro":
    case "Caller": {
      const ee = M.args?.children[M.args.children.length - 1];
      return ee?.typename === "Dict" || ee?.typename === "KeywordArgs" ? (ee.children ?? []).map((K) => K.key) : [];
    }
    default:
      return [];
  }
}, Ie = (M) => {
  if (M?.typename !== "Symbol")
    throw new Error("Only plain names can be assigned in templates");
}, et = /* @__PURE__ */ new Set(["Include", "Import", "FromImport", "Extends"]), tt = (M) => {
  if (et.has(M.typename))
    throw new Error("Loading another template is not allowed in templates");
  if (M.typename === "Symbol")
    Be(M.value);
  else if (M.typename === "Is") {
    const ee = M.right?.name ?? M.right;
    ee?.value !== void 0 && Be(ee.value);
  } else M.typename === "FunCall" && Le(M.name);
  for (const ee of Ze(M))
    if (Ie(ee), Ce.has(String(ee?.value)))
      throw new Error("Assigning to `" + String(ee?.value) + "` is not allowed in templates");
  qe(M).forEach(Ie);
}, nt = (M) => typeof M == "object" && M !== null && "typename" in M, Re = (M, ee) => {
  Array.isArray(M) ? M.forEach((K) => Re(K, ee)) : nt(M) && (ee(M), Object.values(M).forEach((K) => Re(K, ee)));
}, rt = (M) => {
  const ee = Te;
  let K;
  try {
    K = ee.parser.parse(M);
  } catch {
    return;
  }
  Re(K, tt);
}, it = () => Te.runtime, ot = () => {
  const M = new Te.Environment([]);
  M.loaders = [];
  const ee = M;
  return ee.getFilter = function(K) {
    if (!ke(this.filters, K) || !this.filters[K])
      throw new Error("filter not found: " + K);
    return this.filters[K];
  }, ee.getTest = function(K) {
    if (!ke(this.tests, K) || !this.tests[K])
      throw new Error("test not found: " + K);
    return this.tests[K];
  }, ee.getGlobal = function(K) {
    if (!ke(this.globals, K) || typeof this.globals[K] > "u")
      throw new Error("global not found: " + K);
    return this.globals[K];
  }, M;
};
let Ne = !1;
function st(M) {
  const ee = it();
  if (Ne || !ee)
    return M();
  const K = ee.memberLookup, D = ee.contextOrFrameLookup, A = ee.callWrap;
  ee.memberLookup = (g, b) => {
    if (g == null || be.has(g))
      return;
    const m = Je(b);
    if (!(typeof m == "string" && Ce.has(m)) && !be.has(g[m]))
      return K(g, m);
  }, ee.contextOrFrameLookup = (g, b, m) => {
    const _ = String(m);
    if (Ce.has(_))
      return;
    let y = b.lookup(_);
    if (y === void 0) {
      const { ctx: O, env: I } = g;
      ke(O, _) ? y = O[_] : ke(I.globals, _) && (y = I.globals[_]);
    }
    if (!be.has(y))
      return y;
  }, ee.callWrap = (g, b, m, _) => {
    if (be.has(g))
      throw new Error("Unable to call `" + String(b) + "`, which is not allowed in templates");
    return A(g, b, m, _);
  }, Ne = !0;
  try {
    return M();
  } finally {
    ee.memberLookup = K, ee.contextOrFrameLookup = D, ee.callWrap = A, Ne = !1;
  }
}
function at(M) {
  const ee = {};
  for (const [D, A] of Object.entries(M.templates))
    rt(A), ee[D] = Te.compile(A, ot());
  const K = (D) => {
    D.result = {};
    for (const A of Object.keys(M.templates))
      D.result[A] = ee[A].render(D.properties || {});
  };
  return st(() => {
    "features" in M.geojson ? M.geojson.features.forEach(K) : K(M.geojson);
  }), M.geojson;
}
const lt = {
  templateExtractor: at
};
export {
  lt as Quyuan,
  lt as default
};

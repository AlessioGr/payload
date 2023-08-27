"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _types = require("../../types");
var _auth = require("../../auth");
var _sanitizeInternalFields = /*#__PURE__*/ _interop_require_default(require("../../utilities/sanitizeInternalFields"));
var _appendVersionToQueryKey = require("./appendVersionToQueryKey");
var _combineQueries = require("../../database/combineQueries");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var replaceWithDraftIfAvailable = function() {
    var _ref = _async_to_generator(function(param) {
        var entity, entityType, doc, req, accessResult, locale, queryToBuild, versionAccessResult, findVersionsArgs, versionDocs, draft;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    entity = param.entity, entityType = param.entityType, doc = param.doc, req = param.req, accessResult = param.accessResult;
                    locale = req.locale;
                    queryToBuild = {
                        and: [
                            {
                                "version._status": {
                                    equals: "draft"
                                }
                            }
                        ]
                    };
                    if (entityType === "collection") {
                        queryToBuild.and.push({
                            parent: {
                                equals: doc.id
                            }
                        });
                    }
                    if ((0, _types.docHasTimestamps)(doc)) {
                        queryToBuild.and.push({
                            updatedAt: {
                                greater_than: doc.updatedAt
                            }
                        });
                    }
                    if ((0, _auth.hasWhereAccessResult)(accessResult)) {
                        versionAccessResult = (0, _appendVersionToQueryKey.appendVersionToQueryKey)(accessResult);
                    }
                    findVersionsArgs = {
                        locale: locale,
                        where: (0, _combineQueries.combineQueries)(queryToBuild, versionAccessResult),
                        collection: entity.slug,
                        global: entity.slug,
                        limit: 1,
                        sort: "-updatedAt",
                        req: req
                    };
                    if (!(entityType === "global")) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        req.payload.db.findGlobalVersions(findVersionsArgs)
                    ];
                case 1:
                    versionDocs = _state.sent().docs;
                    return [
                        3,
                        4
                    ];
                case 2:
                    return [
                        4,
                        req.payload.db.findVersions(findVersionsArgs)
                    ];
                case 3:
                    versionDocs = _state.sent().docs;
                    _state.label = 4;
                case 4:
                    draft = versionDocs[0];
                    if (!draft) {
                        return [
                            2,
                            doc
                        ];
                    }
                    draft = JSON.parse(JSON.stringify(draft));
                    draft = (0, _sanitizeInternalFields.default)(draft);
                    // Disregard all other draft content at this point,
                    // Only interested in the version itself.
                    // Operations will handle firing hooks, etc.
                    return [
                        2,
                        _object_spread_props(_object_spread({
                            id: doc.id
                        }, draft.version), {
                            createdAt: draft.createdAt,
                            updatedAt: draft.updatedAt
                        })
                    ];
            }
        });
    });
    return function replaceWithDraftIfAvailable(_) {
        return _ref.apply(this, arguments);
    };
}();
var _default = replaceWithDraftIfAvailable;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy92ZXJzaW9ucy9kcmFmdHMvcmVwbGFjZVdpdGhEcmFmdElmQXZhaWxhYmxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRvY0hhc1RpbWVzdGFtcHMsIFBheWxvYWRSZXF1ZXN0LCBXaGVyZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IGhhc1doZXJlQWNjZXNzUmVzdWx0IH0gZnJvbSAnLi4vLi4vYXV0aCc7XG5pbXBvcnQgeyBBY2Nlc3NSZXN1bHQgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZywgVHlwZVdpdGhJRCB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgc2FuaXRpemVJbnRlcm5hbEZpZWxkcyBmcm9tICcuLi8uLi91dGlsaXRpZXMvc2FuaXRpemVJbnRlcm5hbEZpZWxkcyc7XG5pbXBvcnQgeyBhcHBlbmRWZXJzaW9uVG9RdWVyeUtleSB9IGZyb20gJy4vYXBwZW5kVmVyc2lvblRvUXVlcnlLZXknO1xuaW1wb3J0IHsgU2FuaXRpemVkR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi4vLi4vZ2xvYmFscy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgY29tYmluZVF1ZXJpZXMgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS9jb21iaW5lUXVlcmllcyc7XG5pbXBvcnQgdHlwZSB7IEZpbmRHbG9iYWxWZXJzaW9uc0FyZ3MsIEZpbmRWZXJzaW9uc0FyZ3MgfSBmcm9tICcuLi8uLi9kYXRhYmFzZS90eXBlcyc7XG5cbnR5cGUgQXJndW1lbnRzPFQ+ID0ge1xuICBlbnRpdHk6IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfCBTYW5pdGl6ZWRHbG9iYWxDb25maWdcbiAgZW50aXR5VHlwZTogJ2NvbGxlY3Rpb24nIHwgJ2dsb2JhbCdcbiAgZG9jOiBUXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgb3ZlcnJpZGVBY2Nlc3M6IGJvb2xlYW5cbiAgYWNjZXNzUmVzdWx0OiBBY2Nlc3NSZXN1bHRcbn1cblxuY29uc3QgcmVwbGFjZVdpdGhEcmFmdElmQXZhaWxhYmxlID0gYXN5bmMgPFQgZXh0ZW5kcyBUeXBlV2l0aElEPih7XG4gIGVudGl0eSxcbiAgZW50aXR5VHlwZSxcbiAgZG9jLFxuICByZXEsXG4gIGFjY2Vzc1Jlc3VsdCxcbn06IEFyZ3VtZW50czxUPik6IFByb21pc2U8VD4gPT4ge1xuICBjb25zdCB7XG4gICAgbG9jYWxlLFxuICB9ID0gcmVxO1xuXG4gIGNvbnN0IHF1ZXJ5VG9CdWlsZDogV2hlcmUgPSB7XG4gICAgYW5kOiBbXG4gICAgICB7XG4gICAgICAgICd2ZXJzaW9uLl9zdGF0dXMnOiB7XG4gICAgICAgICAgZXF1YWxzOiAnZHJhZnQnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGlmIChlbnRpdHlUeXBlID09PSAnY29sbGVjdGlvbicpIHtcbiAgICBxdWVyeVRvQnVpbGQuYW5kLnB1c2goe1xuICAgICAgcGFyZW50OiB7XG4gICAgICAgIGVxdWFsczogZG9jLmlkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChkb2NIYXNUaW1lc3RhbXBzKGRvYykpIHtcbiAgICBxdWVyeVRvQnVpbGQuYW5kLnB1c2goe1xuICAgICAgdXBkYXRlZEF0OiB7XG4gICAgICAgIGdyZWF0ZXJfdGhhbjogZG9jLnVwZGF0ZWRBdCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBsZXQgdmVyc2lvbkFjY2Vzc1Jlc3VsdDtcblxuICBpZiAoaGFzV2hlcmVBY2Nlc3NSZXN1bHQoYWNjZXNzUmVzdWx0KSkge1xuICAgIHZlcnNpb25BY2Nlc3NSZXN1bHQgPSBhcHBlbmRWZXJzaW9uVG9RdWVyeUtleShhY2Nlc3NSZXN1bHQpO1xuICB9XG5cblxuICBjb25zdCBmaW5kVmVyc2lvbnNBcmdzOiBGaW5kVmVyc2lvbnNBcmdzICYgRmluZEdsb2JhbFZlcnNpb25zQXJncyA9IHtcbiAgICBsb2NhbGUsXG4gICAgd2hlcmU6IGNvbWJpbmVRdWVyaWVzKHF1ZXJ5VG9CdWlsZCwgdmVyc2lvbkFjY2Vzc1Jlc3VsdCksXG4gICAgY29sbGVjdGlvbjogZW50aXR5LnNsdWcsXG4gICAgZ2xvYmFsOiBlbnRpdHkuc2x1ZyxcbiAgICBsaW1pdDogMSxcbiAgICBzb3J0OiAnLXVwZGF0ZWRBdCcsXG4gICAgcmVxLFxuICB9O1xuXG4gIGxldCB2ZXJzaW9uRG9jcztcbiAgaWYgKGVudGl0eVR5cGUgPT09ICdnbG9iYWwnKSB7XG4gICAgdmVyc2lvbkRvY3MgPSAoYXdhaXQgcmVxLnBheWxvYWQuZGIuZmluZEdsb2JhbFZlcnNpb25zPFQ+KGZpbmRWZXJzaW9uc0FyZ3MpKS5kb2NzO1xuICB9IGVsc2Uge1xuICAgIHZlcnNpb25Eb2NzID0gKGF3YWl0IHJlcS5wYXlsb2FkLmRiLmZpbmRWZXJzaW9uczxUPihmaW5kVmVyc2lvbnNBcmdzKSkuZG9jcztcbiAgfVxuXG4gIGxldCBkcmFmdCA9IHZlcnNpb25Eb2NzWzBdO1xuXG5cbiAgaWYgKCFkcmFmdCkge1xuICAgIHJldHVybiBkb2M7XG4gIH1cblxuICBkcmFmdCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZHJhZnQpKTtcbiAgZHJhZnQgPSBzYW5pdGl6ZUludGVybmFsRmllbGRzKGRyYWZ0KTtcblxuICAvLyBEaXNyZWdhcmQgYWxsIG90aGVyIGRyYWZ0IGNvbnRlbnQgYXQgdGhpcyBwb2ludCxcbiAgLy8gT25seSBpbnRlcmVzdGVkIGluIHRoZSB2ZXJzaW9uIGl0c2VsZi5cbiAgLy8gT3BlcmF0aW9ucyB3aWxsIGhhbmRsZSBmaXJpbmcgaG9va3MsIGV0Yy5cbiAgcmV0dXJuIHtcbiAgICBpZDogZG9jLmlkLFxuICAgIC4uLmRyYWZ0LnZlcnNpb24sXG4gICAgY3JlYXRlZEF0OiBkcmFmdC5jcmVhdGVkQXQsXG4gICAgdXBkYXRlZEF0OiBkcmFmdC51cGRhdGVkQXQsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXBsYWNlV2l0aERyYWZ0SWZBdmFpbGFibGU7XG4iXSwibmFtZXMiOlsicmVwbGFjZVdpdGhEcmFmdElmQXZhaWxhYmxlIiwiZW50aXR5IiwiZW50aXR5VHlwZSIsImRvYyIsInJlcSIsImFjY2Vzc1Jlc3VsdCIsImxvY2FsZSIsInF1ZXJ5VG9CdWlsZCIsInZlcnNpb25BY2Nlc3NSZXN1bHQiLCJmaW5kVmVyc2lvbnNBcmdzIiwidmVyc2lvbkRvY3MiLCJkcmFmdCIsImFuZCIsImVxdWFscyIsInB1c2giLCJwYXJlbnQiLCJpZCIsImRvY0hhc1RpbWVzdGFtcHMiLCJ1cGRhdGVkQXQiLCJncmVhdGVyX3RoYW4iLCJoYXNXaGVyZUFjY2Vzc1Jlc3VsdCIsImFwcGVuZFZlcnNpb25Ub1F1ZXJ5S2V5Iiwid2hlcmUiLCJjb21iaW5lUXVlcmllcyIsImNvbGxlY3Rpb24iLCJzbHVnIiwiZ2xvYmFsIiwibGltaXQiLCJzb3J0IiwicGF5bG9hZCIsImRiIiwiZmluZEdsb2JhbFZlcnNpb25zIiwiZG9jcyIsImZpbmRWZXJzaW9ucyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInNhbml0aXplSW50ZXJuYWxGaWVsZHMiLCJ2ZXJzaW9uIiwiY3JlYXRlZEF0Il0sIm1hcHBpbmdzIjoiOzs7OytCQXFHQTs7O2VBQUE7OztxQkFyR3dEO29CQUNuQjs2RUFHRjt1Q0FDSzs4QkFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZL0IsSUFBTUE7ZUFBOEIsb0JBQUE7WUFDbENDLFFBQ0FDLFlBQ0FDLEtBQ0FDLEtBQ0FDLGNBR0VDLFFBR0lDLGNBMEJGQyxxQkFPRUMsa0JBVUZDLGFBT0FDOzs7O29CQTVESlYsZUFBQUEsUUFDQUMsbUJBQUFBLFlBQ0FDLFlBQUFBLEtBQ0FDLFlBQUFBLEtBQ0FDLHFCQUFBQTtvQkFHRUMsU0FDRUYsSUFERkU7b0JBR0lDLGVBQXNCO3dCQUMxQkssR0FBRzs0QkFDRDtnQ0FDRSxtQkFBbUI7b0NBQ2pCQyxRQUFRO2dDQUNWOzRCQUNGOztvQkFFSjtvQkFFQSxJQUFJWCxlQUFlLGNBQWM7d0JBQy9CSyxhQUFhSyxHQUFHLENBQUNFLElBQUksQ0FBQzs0QkFDcEJDLFFBQVE7Z0NBQ05GLFFBQVFWLElBQUlhLEVBQUU7NEJBQ2hCO3dCQUNGO29CQUNGO29CQUVBLElBQUlDLElBQUFBLHVCQUFnQixFQUFDZCxNQUFNO3dCQUN6QkksYUFBYUssR0FBRyxDQUFDRSxJQUFJLENBQUM7NEJBQ3BCSSxXQUFXO2dDQUNUQyxjQUFjaEIsSUFBSWUsU0FBUzs0QkFDN0I7d0JBQ0Y7b0JBQ0Y7b0JBSUEsSUFBSUUsSUFBQUEsMEJBQW9CLEVBQUNmLGVBQWU7d0JBQ3RDRyxzQkFBc0JhLElBQUFBLGdEQUF1QixFQUFDaEI7b0JBQ2hEO29CQUdNSSxtQkFBOEQ7d0JBQ2xFSCxRQUFBQTt3QkFDQWdCLE9BQU9DLElBQUFBLDhCQUFjLEVBQUNoQixjQUFjQzt3QkFDcENnQixZQUFZdkIsT0FBT3dCLElBQUk7d0JBQ3ZCQyxRQUFRekIsT0FBT3dCLElBQUk7d0JBQ25CRSxPQUFPO3dCQUNQQyxNQUFNO3dCQUNOeEIsS0FBQUE7b0JBQ0Y7eUJBR0lGLENBQUFBLGVBQWUsUUFBTyxHQUF0QkE7Ozs7b0JBQ2E7O3dCQUFNRSxJQUFJeUIsT0FBTyxDQUFDQyxFQUFFLENBQUNDLGtCQUFrQixDQUFJdEI7OztvQkFBMURDLGNBQWMsQUFBQyxjQUE4RHNCLElBQUk7Ozs7OztvQkFFbEU7O3dCQUFNNUIsSUFBSXlCLE9BQU8sQ0FBQ0MsRUFBRSxDQUFDRyxZQUFZLENBQUl4Qjs7O29CQUFwREMsY0FBYyxBQUFDLGNBQXdEc0IsSUFBSTs7O29CQUd6RXJCLFFBQVFELFdBQVcsQ0FBQyxFQUFFO29CQUcxQixJQUFJLENBQUNDLE9BQU87d0JBQ1Y7OzRCQUFPUjs7b0JBQ1Q7b0JBRUFRLFFBQVF1QixLQUFLQyxLQUFLLENBQUNELEtBQUtFLFNBQVMsQ0FBQ3pCO29CQUNsQ0EsUUFBUTBCLElBQUFBLCtCQUFzQixFQUFDMUI7b0JBRS9CLG1EQUFtRDtvQkFDbkQseUNBQXlDO29CQUN6Qyw0Q0FBNEM7b0JBQzVDOzt3QkFBTzs0QkFDTEssSUFBSWIsSUFBSWEsRUFBRTsyQkFDUEwsTUFBTTJCLE9BQU87NEJBQ2hCQyxXQUFXNUIsTUFBTTRCLFNBQVM7NEJBQzFCckIsV0FBV1AsTUFBTU8sU0FBUzs7Ozs7SUFFOUI7b0JBaEZNbEI7Ozs7SUFrRk4sV0FBZUEifQ==
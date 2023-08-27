"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getEntityPolicies", {
    enumerable: true,
    get: function() {
        return getEntityPolicies;
    }
});
var _types = require("../fields/config/types");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
function getEntityPolicies(args) {
    return _getEntityPolicies.apply(this, arguments);
}
function _getEntityPolicies() {
    _getEntityPolicies = _async_to_generator(function(args) {
        var req, entity, operations, id, type, isLoggedIn, policies, docBeingAccessed, createAccessPromise, executeFieldPolicies;
        function getEntityDoc() {
            return _getEntityDoc.apply(this, arguments);
        }
        function _getEntityDoc() {
            _getEntityDoc = _async_to_generator(function() {
                var where, _paginatedRes_docs, _paginatedRes, paginatedRes;
                var _arguments = arguments;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            where = (_arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : {}).where;
                            if (!entity.slug) return [
                                3,
                                3
                            ];
                            if (type === "global") {
                                return [
                                    2,
                                    req.payload.findGlobal({
                                        overrideAccess: true,
                                        slug: entity.slug
                                    })
                                ];
                            }
                            if (!(type === "collection" && id)) return [
                                3,
                                3
                            ];
                            if (!(typeof where === "object")) return [
                                3,
                                2
                            ];
                            return [
                                4,
                                req.payload.find({
                                    overrideAccess: true,
                                    collection: entity.slug,
                                    where: _object_spread_props(_object_spread({}, where), {
                                        and: _to_consumable_array(where.and || []).concat([
                                            {
                                                id: {
                                                    equals: id
                                                }
                                            }
                                        ])
                                    }),
                                    limit: 1
                                })
                            ];
                        case 1:
                            paginatedRes = _state.sent();
                            return [
                                2,
                                ((_paginatedRes = paginatedRes) === null || _paginatedRes === void 0 ? void 0 : (_paginatedRes_docs = _paginatedRes.docs) === null || _paginatedRes_docs === void 0 ? void 0 : _paginatedRes_docs[0]) || undefined
                            ];
                        case 2:
                            return [
                                2,
                                req.payload.findByID({
                                    overrideAccess: true,
                                    collection: entity.slug,
                                    id: id
                                })
                            ];
                        case 3:
                            return [
                                2,
                                undefined
                            ];
                    }
                });
            });
            return _getEntityDoc.apply(this, arguments);
        }
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    req = args.req, entity = args.entity, operations = args.operations, id = args.id, type = args.type;
                    isLoggedIn = !!req.user;
                    policies = {
                        fields: {}
                    };
                    createAccessPromise = function() {
                        var _ref = _async_to_generator(function(param) {
                            var policiesObj, access, operation, _param_disableWhere, disableWhere, accessLevel, _mutablePolicies_operation, mutablePolicies, accessResult, _tmp, _tmp1;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        policiesObj = param.policiesObj, access = param.access, operation = param.operation, _param_disableWhere = param.disableWhere, disableWhere = _param_disableWhere === void 0 ? false : _param_disableWhere, accessLevel = param.accessLevel;
                                        mutablePolicies = policiesObj;
                                        if (!(accessLevel === "field" && docBeingAccessed === undefined)) return [
                                            3,
                                            2
                                        ];
                                        return [
                                            4,
                                            getEntityDoc()
                                        ];
                                    case 1:
                                        docBeingAccessed = _state.sent();
                                        _state.label = 2;
                                    case 2:
                                        return [
                                            4,
                                            access({
                                                req: req,
                                                id: id,
                                                doc: docBeingAccessed
                                            })
                                        ];
                                    case 3:
                                        accessResult = _state.sent();
                                        if (!(typeof accessResult === "object" && !disableWhere)) return [
                                            3,
                                            7
                                        ];
                                        _tmp = {};
                                        if (!(id || type === "global")) return [
                                            3,
                                            5
                                        ];
                                        return [
                                            4,
                                            getEntityDoc({
                                                where: accessResult
                                            })
                                        ];
                                    case 4:
                                        _tmp1 = !!_state.sent();
                                        return [
                                            3,
                                            6
                                        ];
                                    case 5:
                                        _tmp1 = true;
                                        _state.label = 6;
                                    case 6:
                                        mutablePolicies[operation] = (_tmp.permission = _tmp1, _tmp.where = accessResult, _tmp);
                                        return [
                                            3,
                                            8
                                        ];
                                    case 7:
                                        if (((_mutablePolicies_operation = mutablePolicies[operation]) === null || _mutablePolicies_operation === void 0 ? void 0 : _mutablePolicies_operation.permission) !== false) {
                                            mutablePolicies[operation] = {
                                                permission: !!accessResult
                                            };
                                        }
                                        _state.label = 8;
                                    case 8:
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                        return function createAccessPromise(_) {
                            return _ref.apply(this, arguments);
                        };
                    }();
                    executeFieldPolicies = function() {
                        var _ref = _async_to_generator(function(param) {
                            var policiesObj, fields, operation, entityPermission, mutablePolicies;
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        policiesObj = param.policiesObj, fields = param.fields, operation = param.operation, entityPermission = param.entityPermission;
                                        mutablePolicies = policiesObj.fields;
                                        return [
                                            4,
                                            Promise.all(fields.map(function() {
                                                var _ref = _async_to_generator(function(field) {
                                                    var _field, _policiesObj_operation, _mutablePolicies_field_name;
                                                    return _ts_generator(this, function(_state) {
                                                        switch(_state.label){
                                                            case 0:
                                                                if (!field.name) return [
                                                                    3,
                                                                    8
                                                                ];
                                                                if (!mutablePolicies[field.name]) mutablePolicies[field.name] = {};
                                                                if (!(field.access && typeof field.access[operation] === "function")) return [
                                                                    3,
                                                                    2
                                                                ];
                                                                return [
                                                                    4,
                                                                    createAccessPromise({
                                                                        policiesObj: mutablePolicies[field.name],
                                                                        access: field.access[operation],
                                                                        operation: operation,
                                                                        disableWhere: true,
                                                                        accessLevel: "field"
                                                                    })
                                                                ];
                                                            case 1:
                                                                _state.sent();
                                                                return [
                                                                    3,
                                                                    3
                                                                ];
                                                            case 2:
                                                                mutablePolicies[field.name][operation] = {
                                                                    permission: (_policiesObj_operation = policiesObj[operation]) === null || _policiesObj_operation === void 0 ? void 0 : _policiesObj_operation.permission
                                                                };
                                                                _state.label = 3;
                                                            case 3:
                                                                if (!field.fields) return [
                                                                    3,
                                                                    5
                                                                ];
                                                                if (!mutablePolicies[field.name].fields) mutablePolicies[field.name].fields = {};
                                                                return [
                                                                    4,
                                                                    executeFieldPolicies({
                                                                        policiesObj: mutablePolicies[field.name],
                                                                        fields: field.fields,
                                                                        operation: operation,
                                                                        entityPermission: entityPermission
                                                                    })
                                                                ];
                                                            case 4:
                                                                _state.sent();
                                                                _state.label = 5;
                                                            case 5:
                                                                if (!((_field = field) === null || _field === void 0 ? void 0 : _field.blocks)) return [
                                                                    3,
                                                                    7
                                                                ];
                                                                if (!((_mutablePolicies_field_name = mutablePolicies[field.name]) === null || _mutablePolicies_field_name === void 0 ? void 0 : _mutablePolicies_field_name.blocks)) mutablePolicies[field.name].blocks = {};
                                                                return [
                                                                    4,
                                                                    Promise.all(field.blocks.map(function() {
                                                                        var _ref = _async_to_generator(function(block) {
                                                                            var _mutablePolicies_field_name_blocks;
                                                                            return _ts_generator(this, function(_state) {
                                                                                switch(_state.label){
                                                                                    case 0:
                                                                                        if (!((_mutablePolicies_field_name_blocks = mutablePolicies[field.name].blocks) === null || _mutablePolicies_field_name_blocks === void 0 ? void 0 : _mutablePolicies_field_name_blocks[block.slug])) {
                                                                                            mutablePolicies[field.name].blocks[block.slug] = _define_property({
                                                                                                fields: {}
                                                                                            }, operation, {
                                                                                                permission: entityPermission
                                                                                            });
                                                                                        } else if (!mutablePolicies[field.name].blocks[block.slug][operation]) {
                                                                                            mutablePolicies[field.name].blocks[block.slug][operation] = {
                                                                                                permission: entityPermission
                                                                                            };
                                                                                        }
                                                                                        return [
                                                                                            4,
                                                                                            executeFieldPolicies({
                                                                                                policiesObj: mutablePolicies[field.name].blocks[block.slug],
                                                                                                fields: block.fields,
                                                                                                operation: operation,
                                                                                                entityPermission: entityPermission
                                                                                            })
                                                                                        ];
                                                                                    case 1:
                                                                                        _state.sent();
                                                                                        return [
                                                                                            2
                                                                                        ];
                                                                                }
                                                                            });
                                                                        });
                                                                        return function(block) {
                                                                            return _ref.apply(this, arguments);
                                                                        };
                                                                    }()))
                                                                ];
                                                            case 6:
                                                                _state.sent();
                                                                _state.label = 7;
                                                            case 7:
                                                                return [
                                                                    3,
                                                                    12
                                                                ];
                                                            case 8:
                                                                if (!field.fields) return [
                                                                    3,
                                                                    10
                                                                ];
                                                                return [
                                                                    4,
                                                                    executeFieldPolicies({
                                                                        policiesObj: policiesObj,
                                                                        fields: field.fields,
                                                                        operation: operation,
                                                                        entityPermission: entityPermission
                                                                    })
                                                                ];
                                                            case 9:
                                                                _state.sent();
                                                                return [
                                                                    3,
                                                                    12
                                                                ];
                                                            case 10:
                                                                if (!(field.type === "tabs")) return [
                                                                    3,
                                                                    12
                                                                ];
                                                                return [
                                                                    4,
                                                                    Promise.all(field.tabs.map(function() {
                                                                        var _ref = _async_to_generator(function(tab) {
                                                                            return _ts_generator(this, function(_state) {
                                                                                switch(_state.label){
                                                                                    case 0:
                                                                                        if (!(0, _types.tabHasName)(tab)) return [
                                                                                            3,
                                                                                            2
                                                                                        ];
                                                                                        if (!mutablePolicies[tab.name]) {
                                                                                            mutablePolicies[tab.name] = _define_property({
                                                                                                fields: {}
                                                                                            }, operation, {
                                                                                                permission: entityPermission
                                                                                            });
                                                                                        } else if (!mutablePolicies[tab.name][operation]) {
                                                                                            mutablePolicies[tab.name][operation] = {
                                                                                                permission: entityPermission
                                                                                            };
                                                                                        }
                                                                                        return [
                                                                                            4,
                                                                                            executeFieldPolicies({
                                                                                                policiesObj: mutablePolicies[tab.name],
                                                                                                fields: tab.fields,
                                                                                                operation: operation,
                                                                                                entityPermission: entityPermission
                                                                                            })
                                                                                        ];
                                                                                    case 1:
                                                                                        _state.sent();
                                                                                        return [
                                                                                            3,
                                                                                            4
                                                                                        ];
                                                                                    case 2:
                                                                                        return [
                                                                                            4,
                                                                                            executeFieldPolicies({
                                                                                                policiesObj: policiesObj,
                                                                                                fields: tab.fields,
                                                                                                operation: operation,
                                                                                                entityPermission: entityPermission
                                                                                            })
                                                                                        ];
                                                                                    case 3:
                                                                                        _state.sent();
                                                                                        _state.label = 4;
                                                                                    case 4:
                                                                                        return [
                                                                                            2
                                                                                        ];
                                                                                }
                                                                            });
                                                                        });
                                                                        return function(tab) {
                                                                            return _ref.apply(this, arguments);
                                                                        };
                                                                    }()))
                                                                ];
                                                            case 11:
                                                                _state.sent();
                                                                _state.label = 12;
                                                            case 12:
                                                                return [
                                                                    2
                                                                ];
                                                        }
                                                    });
                                                });
                                                return function(field) {
                                                    return _ref.apply(this, arguments);
                                                };
                                            }()))
                                        ];
                                    case 1:
                                        _state.sent();
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                        return function executeFieldPolicies(_) {
                            return _ref.apply(this, arguments);
                        };
                    }();
                    return [
                        4,
                        Promise.all(operations.map(function() {
                            var _ref = _async_to_generator(function(operation) {
                                var entityAccessPromise;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            if (typeof entity.access[operation] === "function") {
                                                entityAccessPromise = createAccessPromise({
                                                    policiesObj: policies,
                                                    access: entity.access[operation],
                                                    operation: operation,
                                                    accessLevel: "entity"
                                                });
                                            } else {
                                                policies[operation] = {
                                                    permission: isLoggedIn
                                                };
                                            }
                                            return [
                                                4,
                                                entityAccessPromise
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                4,
                                                executeFieldPolicies({
                                                    policiesObj: policies,
                                                    fields: entity.fields,
                                                    operation: operation,
                                                    entityPermission: policies[operation].permission
                                                })
                                            ];
                                        case 2:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(operation) {
                                return _ref.apply(this, arguments);
                            };
                        }()))
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        policies
                    ];
            }
        });
    });
    return _getEntityPolicies.apply(this, arguments);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvZ2V0RW50aXR5UG9saWNpZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWNjZXNzIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IEFsbE9wZXJhdGlvbnMsIERvY3VtZW50LCBXaGVyZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IEZpZWxkQWNjZXNzLCB0YWJIYXNOYW1lIH0gZnJvbSAnLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgVHlwZVdpdGhJRCB9IGZyb20gJy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IFNhbml0aXplZEdsb2JhbENvbmZpZyB9IGZyb20gJy4uL2dsb2JhbHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB0eXBlIHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB0eXBlIHsgQ29sbGVjdGlvblBlcm1pc3Npb24sIEdsb2JhbFBlcm1pc3Npb24gfSBmcm9tICcuLi9hdXRoL3R5cGVzJztcblxudHlwZSBBcmdzID0ge1xuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIG9wZXJhdGlvbnM6IEFsbE9wZXJhdGlvbnNbXVxuICBpZD86IHN0cmluZ1xuICB0eXBlOiAnY29sbGVjdGlvbicgfCAnZ2xvYmFsJ1xuICBlbnRpdHk6IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfCBTYW5pdGl6ZWRHbG9iYWxDb25maWdcbn1cblxudHlwZSBSZXR1cm5UeXBlPFQgZXh0ZW5kcyBBcmdzPiA9IFRbJ3R5cGUnXSBleHRlbmRzICdnbG9iYWwnID8gR2xvYmFsUGVybWlzc2lvbiA6IENvbGxlY3Rpb25QZXJtaXNzaW9uXG5cbnR5cGUgQ3JlYXRlQWNjZXNzUHJvbWlzZSA9IChhcmdzOiB7XG4gIGFjY2Vzc0xldmVsOiAnZW50aXR5JyB8ICdmaWVsZCcsXG4gIHBvbGljaWVzT2JqOiB7XG4gICAgW2tleTogc3RyaW5nXTogYW55XG4gIH1cbiAgYWNjZXNzOiBBY2Nlc3MgfCBGaWVsZEFjY2VzcyxcbiAgb3BlcmF0aW9uOiBBbGxPcGVyYXRpb25zLFxuICBkaXNhYmxlV2hlcmU/OiBib29sZWFuLFxufSkgPT4gUHJvbWlzZTx2b2lkPlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RW50aXR5UG9saWNpZXM8VCBleHRlbmRzIEFyZ3M+KGFyZ3M6IFQpOiBQcm9taXNlPFJldHVyblR5cGU8VD4+IHtcbiAgY29uc3QgeyByZXEsIGVudGl0eSwgb3BlcmF0aW9ucywgaWQsIHR5cGUgfSA9IGFyZ3M7XG4gIGNvbnN0IGlzTG9nZ2VkSW4gPSAhIShyZXEudXNlcik7XG4gIC8vIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tXG4gIC8vIGBwb2xpY2llc2AgYW5kIGBwcm9taXNlc2AgZ2V0IG11dGF0ZWQgaW5cbiAgLy8gdGhlIGZ1bmN0aW9ucyBiZWxvdywgYW5kIHJldHVybiBpbiB0aGUgZW5kXG4gIC8vIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tIC0tLS0gLS0tLSAtLS0tXG4gIGNvbnN0IHBvbGljaWVzID0ge1xuICAgIGZpZWxkczoge30sXG4gIH0gYXMgUmV0dXJuVHlwZTxUPjtcblxuICBsZXQgZG9jQmVpbmdBY2Nlc3NlZDtcblxuICBhc3luYyBmdW5jdGlvbiBnZXRFbnRpdHlEb2MoeyB3aGVyZSB9OiB7IHdoZXJlPzogV2hlcmUgfSA9IHt9KTogUHJvbWlzZTxUeXBlV2l0aElEICYgRG9jdW1lbnQ+IHtcbiAgICBpZiAoZW50aXR5LnNsdWcpIHtcbiAgICAgIGlmICh0eXBlID09PSAnZ2xvYmFsJykge1xuICAgICAgICByZXR1cm4gcmVxLnBheWxvYWQuZmluZEdsb2JhbCh7XG4gICAgICAgICAgb3ZlcnJpZGVBY2Nlc3M6IHRydWUsXG4gICAgICAgICAgc2x1ZzogZW50aXR5LnNsdWcsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZSA9PT0gJ2NvbGxlY3Rpb24nICYmIGlkKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygd2hlcmUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY29uc3QgcGFnaW5hdGVkUmVzID0gYXdhaXQgcmVxLnBheWxvYWQuZmluZCh7XG4gICAgICAgICAgICBvdmVycmlkZUFjY2VzczogdHJ1ZSxcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IGVudGl0eS5zbHVnLFxuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgLi4ud2hlcmUsXG4gICAgICAgICAgICAgIGFuZDogW1xuICAgICAgICAgICAgICAgIC4uLndoZXJlLmFuZCB8fCBbXSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZDoge1xuICAgICAgICAgICAgICAgICAgICBlcXVhbHM6IGlkLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbWl0OiAxLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHBhZ2luYXRlZFJlcz8uZG9jcz8uWzBdIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXEucGF5bG9hZC5maW5kQnlJRCh7XG4gICAgICAgICAgb3ZlcnJpZGVBY2Nlc3M6IHRydWUsXG4gICAgICAgICAgY29sbGVjdGlvbjogZW50aXR5LnNsdWcsXG4gICAgICAgICAgaWQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBjb25zdCBjcmVhdGVBY2Nlc3NQcm9taXNlOiBDcmVhdGVBY2Nlc3NQcm9taXNlID0gYXN5bmMgKHtcbiAgICBwb2xpY2llc09iaixcbiAgICBhY2Nlc3MsXG4gICAgb3BlcmF0aW9uLFxuICAgIGRpc2FibGVXaGVyZSA9IGZhbHNlLFxuICAgIGFjY2Vzc0xldmVsLFxuICB9KSA9PiB7XG4gICAgY29uc3QgbXV0YWJsZVBvbGljaWVzID0gcG9saWNpZXNPYmo7XG5cbiAgICBpZiAoYWNjZXNzTGV2ZWwgPT09ICdmaWVsZCcgJiYgZG9jQmVpbmdBY2Nlc3NlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkb2NCZWluZ0FjY2Vzc2VkID0gYXdhaXQgZ2V0RW50aXR5RG9jKCk7XG4gICAgfVxuICAgIGNvbnN0IGFjY2Vzc1Jlc3VsdCA9IGF3YWl0IGFjY2Vzcyh7IHJlcSwgaWQsIGRvYzogZG9jQmVpbmdBY2Nlc3NlZCB9KTtcblxuICAgIGlmICh0eXBlb2YgYWNjZXNzUmVzdWx0ID09PSAnb2JqZWN0JyAmJiAhZGlzYWJsZVdoZXJlKSB7XG4gICAgICBtdXRhYmxlUG9saWNpZXNbb3BlcmF0aW9uXSA9IHtcbiAgICAgICAgcGVybWlzc2lvbjogKGlkIHx8IHR5cGUgPT09ICdnbG9iYWwnKSA/ICEhKGF3YWl0IGdldEVudGl0eURvYyh7IHdoZXJlOiBhY2Nlc3NSZXN1bHQgfSkpIDogdHJ1ZSxcbiAgICAgICAgd2hlcmU6IGFjY2Vzc1Jlc3VsdCxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChtdXRhYmxlUG9saWNpZXNbb3BlcmF0aW9uXT8ucGVybWlzc2lvbiAhPT0gZmFsc2UpIHtcbiAgICAgIG11dGFibGVQb2xpY2llc1tvcGVyYXRpb25dID0ge1xuICAgICAgICBwZXJtaXNzaW9uOiAhIShhY2Nlc3NSZXN1bHQpLFxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZXhlY3V0ZUZpZWxkUG9saWNpZXMgPSBhc3luYyAoe1xuICAgIHBvbGljaWVzT2JqLFxuICAgIGZpZWxkcyxcbiAgICBvcGVyYXRpb24sXG4gICAgZW50aXR5UGVybWlzc2lvbixcbiAgfSkgPT4ge1xuICAgIGNvbnN0IG11dGFibGVQb2xpY2llcyA9IHBvbGljaWVzT2JqLmZpZWxkcztcblxuICAgIGF3YWl0IFByb21pc2UuYWxsKGZpZWxkcy5tYXAoYXN5bmMgKGZpZWxkKSA9PiB7XG4gICAgICBpZiAoZmllbGQubmFtZSkge1xuICAgICAgICBpZiAoIW11dGFibGVQb2xpY2llc1tmaWVsZC5uYW1lXSkgbXV0YWJsZVBvbGljaWVzW2ZpZWxkLm5hbWVdID0ge307XG5cbiAgICAgICAgaWYgKGZpZWxkLmFjY2VzcyAmJiB0eXBlb2YgZmllbGQuYWNjZXNzW29wZXJhdGlvbl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBhd2FpdCBjcmVhdGVBY2Nlc3NQcm9taXNlKHtcbiAgICAgICAgICAgIHBvbGljaWVzT2JqOiBtdXRhYmxlUG9saWNpZXNbZmllbGQubmFtZV0sXG4gICAgICAgICAgICBhY2Nlc3M6IGZpZWxkLmFjY2Vzc1tvcGVyYXRpb25dLFxuICAgICAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICAgICAgZGlzYWJsZVdoZXJlOiB0cnVlLFxuICAgICAgICAgICAgYWNjZXNzTGV2ZWw6ICdmaWVsZCcsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbXV0YWJsZVBvbGljaWVzW2ZpZWxkLm5hbWVdW29wZXJhdGlvbl0gPSB7XG4gICAgICAgICAgICBwZXJtaXNzaW9uOiBwb2xpY2llc09ialtvcGVyYXRpb25dPy5wZXJtaXNzaW9uLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmllbGQuZmllbGRzKSB7XG4gICAgICAgICAgaWYgKCFtdXRhYmxlUG9saWNpZXNbZmllbGQubmFtZV0uZmllbGRzKSBtdXRhYmxlUG9saWNpZXNbZmllbGQubmFtZV0uZmllbGRzID0ge307XG5cbiAgICAgICAgICBhd2FpdCBleGVjdXRlRmllbGRQb2xpY2llcyh7XG4gICAgICAgICAgICBwb2xpY2llc09iajogbXV0YWJsZVBvbGljaWVzW2ZpZWxkLm5hbWVdLFxuICAgICAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgICBlbnRpdHlQZXJtaXNzaW9uLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpZWxkPy5ibG9ja3MpIHtcbiAgICAgICAgICBpZiAoIW11dGFibGVQb2xpY2llc1tmaWVsZC5uYW1lXT8uYmxvY2tzKSBtdXRhYmxlUG9saWNpZXNbZmllbGQubmFtZV0uYmxvY2tzID0ge307XG5cbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChmaWVsZC5ibG9ja3MubWFwKGFzeW5jIChibG9jaykgPT4ge1xuICAgICAgICAgICAgaWYgKCFtdXRhYmxlUG9saWNpZXNbZmllbGQubmFtZV0uYmxvY2tzPy5bYmxvY2suc2x1Z10pIHtcbiAgICAgICAgICAgICAgbXV0YWJsZVBvbGljaWVzW2ZpZWxkLm5hbWVdLmJsb2Nrc1tibG9jay5zbHVnXSA9IHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHt9LFxuICAgICAgICAgICAgICAgIFtvcGVyYXRpb25dOiB7IHBlcm1pc3Npb246IGVudGl0eVBlcm1pc3Npb24gfSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIW11dGFibGVQb2xpY2llc1tmaWVsZC5uYW1lXS5ibG9ja3NbYmxvY2suc2x1Z11bb3BlcmF0aW9uXSkge1xuICAgICAgICAgICAgICBtdXRhYmxlUG9saWNpZXNbZmllbGQubmFtZV0uYmxvY2tzW2Jsb2NrLnNsdWddW29wZXJhdGlvbl0gPSB7IHBlcm1pc3Npb246IGVudGl0eVBlcm1pc3Npb24gfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgZXhlY3V0ZUZpZWxkUG9saWNpZXMoe1xuICAgICAgICAgICAgICBwb2xpY2llc09iajogbXV0YWJsZVBvbGljaWVzW2ZpZWxkLm5hbWVdLmJsb2Nrc1tibG9jay5zbHVnXSxcbiAgICAgICAgICAgICAgZmllbGRzOiBibG9jay5maWVsZHMsXG4gICAgICAgICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgICAgICAgZW50aXR5UGVybWlzc2lvbixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChmaWVsZC5maWVsZHMpIHtcbiAgICAgICAgYXdhaXQgZXhlY3V0ZUZpZWxkUG9saWNpZXMoe1xuICAgICAgICAgIHBvbGljaWVzT2JqLFxuICAgICAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgICBlbnRpdHlQZXJtaXNzaW9uLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoZmllbGQudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGZpZWxkLnRhYnMubWFwKGFzeW5jICh0YWIpID0+IHtcbiAgICAgICAgICBpZiAodGFiSGFzTmFtZSh0YWIpKSB7XG4gICAgICAgICAgICBpZiAoIW11dGFibGVQb2xpY2llc1t0YWIubmFtZV0pIHtcbiAgICAgICAgICAgICAgbXV0YWJsZVBvbGljaWVzW3RhYi5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHt9LFxuICAgICAgICAgICAgICAgIFtvcGVyYXRpb25dOiB7IHBlcm1pc3Npb246IGVudGl0eVBlcm1pc3Npb24gfSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIW11dGFibGVQb2xpY2llc1t0YWIubmFtZV1bb3BlcmF0aW9uXSkge1xuICAgICAgICAgICAgICBtdXRhYmxlUG9saWNpZXNbdGFiLm5hbWVdW29wZXJhdGlvbl0gPSB7IHBlcm1pc3Npb246IGVudGl0eVBlcm1pc3Npb24gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IGV4ZWN1dGVGaWVsZFBvbGljaWVzKHtcbiAgICAgICAgICAgICAgcG9saWNpZXNPYmo6IG11dGFibGVQb2xpY2llc1t0YWIubmFtZV0sXG4gICAgICAgICAgICAgIGZpZWxkczogdGFiLmZpZWxkcyxcbiAgICAgICAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICAgICAgICBlbnRpdHlQZXJtaXNzaW9uLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IGV4ZWN1dGVGaWVsZFBvbGljaWVzKHtcbiAgICAgICAgICAgICAgcG9saWNpZXNPYmosXG4gICAgICAgICAgICAgIGZpZWxkczogdGFiLmZpZWxkcyxcbiAgICAgICAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICAgICAgICBlbnRpdHlQZXJtaXNzaW9uLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9O1xuXG4gIGF3YWl0IFByb21pc2UuYWxsKG9wZXJhdGlvbnMubWFwKGFzeW5jIChvcGVyYXRpb24pID0+IHtcbiAgICBsZXQgZW50aXR5QWNjZXNzUHJvbWlzZTogUHJvbWlzZTx2b2lkPjtcblxuICAgIGlmICh0eXBlb2YgZW50aXR5LmFjY2Vzc1tvcGVyYXRpb25dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlbnRpdHlBY2Nlc3NQcm9taXNlID0gY3JlYXRlQWNjZXNzUHJvbWlzZSh7XG4gICAgICAgIHBvbGljaWVzT2JqOiBwb2xpY2llcyxcbiAgICAgICAgYWNjZXNzOiBlbnRpdHkuYWNjZXNzW29wZXJhdGlvbl0sXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgYWNjZXNzTGV2ZWw6ICdlbnRpdHknLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvbGljaWVzW29wZXJhdGlvbl0gPSB7XG4gICAgICAgIHBlcm1pc3Npb246IGlzTG9nZ2VkSW4sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGF3YWl0IGVudGl0eUFjY2Vzc1Byb21pc2U7XG5cbiAgICBhd2FpdCBleGVjdXRlRmllbGRQb2xpY2llcyh7XG4gICAgICBwb2xpY2llc09iajogcG9saWNpZXMsXG4gICAgICBmaWVsZHM6IGVudGl0eS5maWVsZHMsXG4gICAgICBvcGVyYXRpb24sXG4gICAgICBlbnRpdHlQZXJtaXNzaW9uOiBwb2xpY2llc1tvcGVyYXRpb25dLnBlcm1pc3Npb24sXG4gICAgfSk7XG4gIH0pKTtcblxuICByZXR1cm4gcG9saWNpZXM7XG59XG4iXSwibmFtZXMiOlsiZ2V0RW50aXR5UG9saWNpZXMiLCJhcmdzIiwicmVxIiwiZW50aXR5Iiwib3BlcmF0aW9ucyIsImlkIiwidHlwZSIsImlzTG9nZ2VkSW4iLCJwb2xpY2llcyIsImRvY0JlaW5nQWNjZXNzZWQiLCJjcmVhdGVBY2Nlc3NQcm9taXNlIiwiZXhlY3V0ZUZpZWxkUG9saWNpZXMiLCJnZXRFbnRpdHlEb2MiLCJ3aGVyZSIsInBhZ2luYXRlZFJlcyIsInNsdWciLCJwYXlsb2FkIiwiZmluZEdsb2JhbCIsIm92ZXJyaWRlQWNjZXNzIiwiZmluZCIsImNvbGxlY3Rpb24iLCJhbmQiLCJlcXVhbHMiLCJsaW1pdCIsImRvY3MiLCJ1bmRlZmluZWQiLCJmaW5kQnlJRCIsInVzZXIiLCJmaWVsZHMiLCJwb2xpY2llc09iaiIsImFjY2VzcyIsIm9wZXJhdGlvbiIsImRpc2FibGVXaGVyZSIsImFjY2Vzc0xldmVsIiwibXV0YWJsZVBvbGljaWVzIiwiYWNjZXNzUmVzdWx0IiwiZG9jIiwicGVybWlzc2lvbiIsImVudGl0eVBlcm1pc3Npb24iLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiZmllbGQiLCJuYW1lIiwiYmxvY2tzIiwiYmxvY2siLCJ0YWJzIiwidGFiIiwidGFiSGFzTmFtZSIsImVudGl0eUFjY2Vzc1Byb21pc2UiXSwibWFwcGluZ3MiOiI7Ozs7K0JBNkJzQkE7OztlQUFBQTs7O3FCQTNCa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
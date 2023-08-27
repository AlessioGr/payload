/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "promise", {
    enumerable: true,
    get: function() {
        return promise;
    }
});
var _types = require("../../config/types");
var _traverseFields = require("./traverseFields");
var _richTextRelationshipPromise = /*#__PURE__*/ _interop_require_default(require("../../richText/richTextRelationshipPromise"));
var _relationshipPopulationPromise = /*#__PURE__*/ _interop_require_default(require("./relationshipPopulationPromise"));
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
var promise = function() {
    var _ref = _async_to_generator(function(param) {
        var currentDepth, depth, doc, field, fieldPromises, findMany, flattenLocales, overrideAccess, populationPromises, req, siblingDoc, showHiddenFields, context, shouldHoistLocalizedValue, _req_payload_config_localization, locale, value, fallbackLocale, hoistedValue, fallbackValue, isNullOrUndefined, _field_admin_elements, _field_admin, _field_admin_elements1, _field_admin1, _field_admin_elements2, _field_admin2, _field_admin3, _field, _pointDoc, pointDoc, _field_hooks, result, _tmp, _, groupDoc, rows, rows1, tabDoc;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    currentDepth = param.currentDepth, depth = param.depth, doc = param.doc, field = param.field, fieldPromises = param.fieldPromises, findMany = param.findMany, flattenLocales = param.flattenLocales, overrideAccess = param.overrideAccess, populationPromises = param.populationPromises, req = param.req, siblingDoc = param.siblingDoc, showHiddenFields = param.showHiddenFields, context = param.context;
                    if ((0, _types.fieldAffectsData)(field) && field.hidden && typeof siblingDoc[field.name] !== "undefined" && !showHiddenFields) {
                        delete siblingDoc[field.name];
                    }
                    shouldHoistLocalizedValue = flattenLocales && (0, _types.fieldAffectsData)(field) && typeof siblingDoc[field.name] === "object" && siblingDoc[field.name] !== null && field.localized && req.locale !== "all" && req.payload.config.localization;
                    if (shouldHoistLocalizedValue) {
                        ;
                        locale = req.locale;
                        value = siblingDoc[field.name][locale];
                        fallbackLocale = req.payload.config.localization && ((_req_payload_config_localization = req.payload.config.localization) === null || _req_payload_config_localization === void 0 ? void 0 : _req_payload_config_localization.fallback) && req.fallbackLocale;
                        hoistedValue = value;
                        if (fallbackLocale && fallbackLocale !== locale) {
                            fallbackValue = siblingDoc[field.name][fallbackLocale];
                            isNullOrUndefined = typeof value === "undefined" || value === null;
                            if (fallbackValue) {
                                switch(field.type){
                                    case "text":
                                    case "textarea":
                                        {
                                            if (value === "" || isNullOrUndefined) {
                                                hoistedValue = fallbackValue;
                                            }
                                            break;
                                        }
                                    default:
                                        {
                                            if (isNullOrUndefined) {
                                                hoistedValue = fallbackValue;
                                            }
                                            break;
                                        }
                                }
                            }
                        }
                        siblingDoc[field.name] = hoistedValue;
                    }
                    // Sanitize outgoing field value
                    switch(field.type){
                        case "group":
                            {
                                // Fill groups with empty objects so fields with hooks within groups can populate
                                // themselves virtually as necessary
                                if (typeof siblingDoc[field.name] === "undefined") {
                                    siblingDoc[field.name] = {};
                                }
                                break;
                            }
                        case "tabs":
                            {
                                field.tabs.forEach(function(tab) {
                                    if ((0, _types.tabHasName)(tab) && (typeof siblingDoc[tab.name] === "undefined" || siblingDoc[tab.name] === null)) {
                                        siblingDoc[tab.name] = {};
                                    }
                                });
                                break;
                            }
                        case "richText":
                            {
                                ;
                                if (((_field_admin = field.admin) === null || _field_admin === void 0 ? void 0 : (_field_admin_elements = _field_admin.elements) === null || _field_admin_elements === void 0 ? void 0 : _field_admin_elements.includes("relationship")) || ((_field_admin1 = field.admin) === null || _field_admin1 === void 0 ? void 0 : (_field_admin_elements1 = _field_admin1.elements) === null || _field_admin_elements1 === void 0 ? void 0 : _field_admin_elements1.includes("upload")) || ((_field_admin2 = field.admin) === null || _field_admin2 === void 0 ? void 0 : (_field_admin_elements2 = _field_admin2.elements) === null || _field_admin_elements2 === void 0 ? void 0 : _field_admin_elements2.includes("link")) || !((_field = field) === null || _field === void 0 ? void 0 : (_field_admin3 = _field.admin) === null || _field_admin3 === void 0 ? void 0 : _field_admin3.elements)) {
                                    populationPromises.push((0, _richTextRelationshipPromise.default)({
                                        currentDepth: currentDepth,
                                        depth: depth,
                                        field: field,
                                        overrideAccess: overrideAccess,
                                        req: req,
                                        siblingDoc: siblingDoc,
                                        showHiddenFields: showHiddenFields
                                    }));
                                }
                                break;
                            }
                        case "point":
                            {
                                ;
                                pointDoc = siblingDoc[field.name];
                                if (Array.isArray((_pointDoc = pointDoc) === null || _pointDoc === void 0 ? void 0 : _pointDoc.coordinates) && pointDoc.coordinates.length === 2) {
                                    siblingDoc[field.name] = pointDoc.coordinates;
                                } else {
                                    siblingDoc[field.name] = undefined;
                                }
                                break;
                            }
                        default:
                            {
                                break;
                            }
                    }
                    if (!(0, _types.fieldAffectsData)(field)) return [
                        3,
                        7
                    ];
                    if (!((_field_hooks = field.hooks) === null || _field_hooks === void 0 ? void 0 : _field_hooks.afterRead)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        field.hooks.afterRead.reduce(function() {
                            var _ref = _async_to_generator(function(priorHook, currentHook) {
                                var shouldRunHookOnAllLocales, hookPromises, hookedValue;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                priorHook
                                            ];
                                        case 1:
                                            _state.sent();
                                            shouldRunHookOnAllLocales = field.localized && (req.locale === "all" || !flattenLocales) && typeof siblingDoc[field.name] === "object";
                                            if (!shouldRunHookOnAllLocales) return [
                                                3,
                                                3
                                            ];
                                            hookPromises = Object.entries(siblingDoc[field.name]).map(function(param) {
                                                var _param = _sliced_to_array(param, 2), locale = _param[0], value = _param[1];
                                                return _async_to_generator(function() {
                                                    var hookedValue;
                                                    return _ts_generator(this, function(_state) {
                                                        switch(_state.label){
                                                            case 0:
                                                                return [
                                                                    4,
                                                                    currentHook({
                                                                        value: value,
                                                                        originalDoc: doc,
                                                                        data: doc,
                                                                        siblingData: siblingDoc,
                                                                        operation: "read",
                                                                        req: req,
                                                                        context: context
                                                                    })
                                                                ];
                                                            case 1:
                                                                hookedValue = _state.sent();
                                                                if (hookedValue !== undefined) {
                                                                    siblingDoc[field.name][locale] = hookedValue;
                                                                }
                                                                return [
                                                                    2
                                                                ];
                                                        }
                                                    });
                                                })();
                                            });
                                            return [
                                                4,
                                                Promise.all(hookPromises)
                                            ];
                                        case 2:
                                            _state.sent();
                                            return [
                                                3,
                                                5
                                            ];
                                        case 3:
                                            return [
                                                4,
                                                currentHook({
                                                    data: doc,
                                                    findMany: findMany,
                                                    originalDoc: doc,
                                                    operation: "read",
                                                    siblingData: siblingDoc,
                                                    req: req,
                                                    value: siblingDoc[field.name],
                                                    context: context
                                                })
                                            ];
                                        case 4:
                                            hookedValue = _state.sent();
                                            if (hookedValue !== undefined) {
                                                siblingDoc[field.name] = hookedValue;
                                            }
                                            _state.label = 5;
                                        case 5:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(priorHook, currentHook) {
                                return _ref.apply(this, arguments);
                            };
                        }(), Promise.resolve())
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    if (!(field.access && field.access.read)) return [
                        3,
                        6
                    ];
                    if (!overrideAccess) return [
                        3,
                        3
                    ];
                    _tmp = true;
                    return [
                        3,
                        5
                    ];
                case 3:
                    return [
                        4,
                        field.access.read({
                            req: req,
                            id: doc.id,
                            siblingData: siblingDoc,
                            data: doc,
                            doc: doc
                        })
                    ];
                case 4:
                    _tmp = _state.sent();
                    _state.label = 5;
                case 5:
                    result = _tmp;
                    if (!result) {
                        delete siblingDoc[field.name];
                    }
                    _state.label = 6;
                case 6:
                    if (field.type === "relationship" || field.type === "upload") {
                        populationPromises.push((0, _relationshipPopulationPromise.default)({
                            currentDepth: currentDepth,
                            depth: depth,
                            field: field,
                            overrideAccess: overrideAccess,
                            req: req,
                            showHiddenFields: showHiddenFields,
                            siblingDoc: siblingDoc
                        }));
                    }
                    _state.label = 7;
                case 7:
                    _ = field.type;
                    switch(_){
                        case "group":
                            return [
                                3,
                                8
                            ];
                        case "array":
                            return [
                                3,
                                9
                            ];
                        case "blocks":
                            return [
                                3,
                                10
                            ];
                        case "row":
                            return [
                                3,
                                11
                            ];
                        case "collapsible":
                            return [
                                3,
                                11
                            ];
                        case "tab":
                            return [
                                3,
                                12
                            ];
                        case "tabs":
                            return [
                                3,
                                14
                            ];
                    }
                    return [
                        3,
                        15
                    ];
                case 8:
                    {
                        groupDoc = siblingDoc[field.name];
                        if (typeof siblingDoc[field.name] !== "object") groupDoc = {};
                        (0, _traverseFields.traverseFields)({
                            currentDepth: currentDepth,
                            depth: depth,
                            doc: doc,
                            fieldPromises: fieldPromises,
                            fields: field.fields,
                            findMany: findMany,
                            flattenLocales: flattenLocales,
                            overrideAccess: overrideAccess,
                            populationPromises: populationPromises,
                            req: req,
                            siblingDoc: groupDoc,
                            showHiddenFields: showHiddenFields,
                            context: context
                        });
                        return [
                            3,
                            16
                        ];
                    }
                    _state.label = 9;
                case 9:
                    {
                        rows = siblingDoc[field.name];
                        if (Array.isArray(rows)) {
                            rows.forEach(function(row) {
                                (0, _traverseFields.traverseFields)({
                                    currentDepth: currentDepth,
                                    depth: depth,
                                    doc: doc,
                                    fields: field.fields,
                                    fieldPromises: fieldPromises,
                                    findMany: findMany,
                                    flattenLocales: flattenLocales,
                                    overrideAccess: overrideAccess,
                                    populationPromises: populationPromises,
                                    req: req,
                                    siblingDoc: row || {},
                                    showHiddenFields: showHiddenFields,
                                    context: context
                                });
                            });
                        } else if (!shouldHoistLocalizedValue && typeof rows === "object" && rows !== null) {
                            Object.values(rows).forEach(function(localeRows) {
                                if (Array.isArray(localeRows)) {
                                    localeRows.forEach(function(row) {
                                        (0, _traverseFields.traverseFields)({
                                            currentDepth: currentDepth,
                                            depth: depth,
                                            doc: doc,
                                            fields: field.fields,
                                            fieldPromises: fieldPromises,
                                            findMany: findMany,
                                            flattenLocales: flattenLocales,
                                            overrideAccess: overrideAccess,
                                            populationPromises: populationPromises,
                                            req: req,
                                            siblingDoc: row || {},
                                            showHiddenFields: showHiddenFields,
                                            context: context
                                        });
                                    });
                                }
                            });
                        }
                        return [
                            3,
                            16
                        ];
                    }
                    _state.label = 10;
                case 10:
                    {
                        rows1 = siblingDoc[field.name];
                        if (Array.isArray(rows1)) {
                            rows1.forEach(function(row) {
                                var block = field.blocks.find(function(blockType) {
                                    return blockType.slug === row.blockType;
                                });
                                if (block) {
                                    (0, _traverseFields.traverseFields)({
                                        currentDepth: currentDepth,
                                        depth: depth,
                                        doc: doc,
                                        fields: block.fields,
                                        fieldPromises: fieldPromises,
                                        findMany: findMany,
                                        flattenLocales: flattenLocales,
                                        overrideAccess: overrideAccess,
                                        populationPromises: populationPromises,
                                        req: req,
                                        siblingDoc: row || {},
                                        showHiddenFields: showHiddenFields,
                                        context: context
                                    });
                                }
                            });
                        } else if (!shouldHoistLocalizedValue && typeof rows1 === "object" && rows1 !== null) {
                            Object.values(rows1).forEach(function(localeRows) {
                                if (Array.isArray(localeRows)) {
                                    localeRows.forEach(function(row) {
                                        var block = field.blocks.find(function(blockType) {
                                            return blockType.slug === row.blockType;
                                        });
                                        if (block) {
                                            (0, _traverseFields.traverseFields)({
                                                currentDepth: currentDepth,
                                                depth: depth,
                                                doc: doc,
                                                fields: block.fields,
                                                fieldPromises: fieldPromises,
                                                findMany: findMany,
                                                flattenLocales: flattenLocales,
                                                overrideAccess: overrideAccess,
                                                populationPromises: populationPromises,
                                                req: req,
                                                siblingDoc: row || {},
                                                showHiddenFields: showHiddenFields,
                                                context: context
                                            });
                                        }
                                    });
                                }
                            });
                        }
                        return [
                            3,
                            16
                        ];
                    }
                    _state.label = 11;
                case 11:
                    {
                        (0, _traverseFields.traverseFields)({
                            currentDepth: currentDepth,
                            depth: depth,
                            doc: doc,
                            fieldPromises: fieldPromises,
                            fields: field.fields,
                            findMany: findMany,
                            flattenLocales: flattenLocales,
                            overrideAccess: overrideAccess,
                            populationPromises: populationPromises,
                            req: req,
                            siblingDoc: siblingDoc,
                            showHiddenFields: showHiddenFields,
                            context: context
                        });
                        return [
                            3,
                            16
                        ];
                    }
                    _state.label = 12;
                case 12:
                    tabDoc = siblingDoc;
                    if ((0, _types.tabHasName)(field)) {
                        tabDoc = siblingDoc[field.name];
                        if (typeof siblingDoc[field.name] !== "object") tabDoc = {};
                    }
                    return [
                        4,
                        (0, _traverseFields.traverseFields)({
                            currentDepth: currentDepth,
                            depth: depth,
                            doc: doc,
                            fieldPromises: fieldPromises,
                            fields: field.fields,
                            findMany: findMany,
                            flattenLocales: flattenLocales,
                            overrideAccess: overrideAccess,
                            populationPromises: populationPromises,
                            req: req,
                            siblingDoc: tabDoc,
                            showHiddenFields: showHiddenFields,
                            context: context
                        })
                    ];
                case 13:
                    _state.sent();
                    return [
                        3,
                        16
                    ];
                case 14:
                    {
                        (0, _traverseFields.traverseFields)({
                            currentDepth: currentDepth,
                            depth: depth,
                            doc: doc,
                            fieldPromises: fieldPromises,
                            fields: field.tabs.map(function(tab) {
                                return _object_spread_props(_object_spread({}, tab), {
                                    type: "tab"
                                });
                            }),
                            findMany: findMany,
                            flattenLocales: flattenLocales,
                            overrideAccess: overrideAccess,
                            populationPromises: populationPromises,
                            req: req,
                            siblingDoc: siblingDoc,
                            showHiddenFields: showHiddenFields,
                            context: context
                        });
                        return [
                            3,
                            16
                        ];
                    }
                    _state.label = 15;
                case 15:
                    {
                        return [
                            3,
                            16
                        ];
                    }
                    _state.label = 16;
                case 16:
                    return [
                        2
                    ];
            }
        });
    });
    return function promise(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYWZ0ZXJSZWFkL3Byb21pc2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7IEZpZWxkLCBmaWVsZEFmZmVjdHNEYXRhLCBUYWJBc0ZpZWxkLCB0YWJIYXNOYW1lIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0LCBSZXF1ZXN0Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgdHJhdmVyc2VGaWVsZHMgfSBmcm9tICcuL3RyYXZlcnNlRmllbGRzJztcbmltcG9ydCByaWNoVGV4dFJlbGF0aW9uc2hpcFByb21pc2UgZnJvbSAnLi4vLi4vcmljaFRleHQvcmljaFRleHRSZWxhdGlvbnNoaXBQcm9taXNlJztcbmltcG9ydCByZWxhdGlvbnNoaXBQb3B1bGF0aW9uUHJvbWlzZSBmcm9tICcuL3JlbGF0aW9uc2hpcFBvcHVsYXRpb25Qcm9taXNlJztcblxudHlwZSBBcmdzID0ge1xuICBjdXJyZW50RGVwdGg6IG51bWJlclxuICBkZXB0aDogbnVtYmVyXG4gIGRvYzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgZmllbGQ6IEZpZWxkIHwgVGFiQXNGaWVsZFxuICBmaWVsZFByb21pc2VzOiBQcm9taXNlPHZvaWQ+W11cbiAgZmluZE1hbnk6IGJvb2xlYW5cbiAgZmxhdHRlbkxvY2FsZXM6IGJvb2xlYW5cbiAgcG9wdWxhdGlvblByb21pc2VzOiBQcm9taXNlPHZvaWQ+W11cbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBvdmVycmlkZUFjY2VzczogYm9vbGVhblxuICBzaWJsaW5nRG9jOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBzaG93SGlkZGVuRmllbGRzOiBib29sZWFuXG4gIGNvbnRleHQ6IFJlcXVlc3RDb250ZXh0XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgcmVzcG9uc2libGUgZm9yIHRoZSBmb2xsb3dpbmcgYWN0aW9ucywgaW4gb3JkZXI6XG4vLyAtIFJlbW92ZSBoaWRkZW4gZmllbGRzIGZyb20gcmVzcG9uc2Vcbi8vIC0gRmxhdHRlbiBsb2NhbGVzIGludG8gcmVxdWVzdGVkIGxvY2FsZVxuLy8gLSBTYW5pdGl6ZSBvdXRnb2luZyBkYXRhIChwb2ludCBmaWVsZCwgZXRjKVxuLy8gLSBFeGVjdXRlIGZpZWxkIGhvb2tzXG4vLyAtIEV4ZWN1dGUgcmVhZCBhY2Nlc3MgY29udHJvbFxuLy8gLSBQb3B1bGF0ZSByZWxhdGlvbnNoaXBzXG5cbmV4cG9ydCBjb25zdCBwcm9taXNlID0gYXN5bmMgKHtcbiAgY3VycmVudERlcHRoLFxuICBkZXB0aCxcbiAgZG9jLFxuICBmaWVsZCxcbiAgZmllbGRQcm9taXNlcyxcbiAgZmluZE1hbnksXG4gIGZsYXR0ZW5Mb2NhbGVzLFxuICBvdmVycmlkZUFjY2VzcyxcbiAgcG9wdWxhdGlvblByb21pc2VzLFxuICByZXEsXG4gIHNpYmxpbmdEb2MsXG4gIHNob3dIaWRkZW5GaWVsZHMsXG4gIGNvbnRleHQsXG59OiBBcmdzKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGlmIChmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5oaWRkZW4gJiYgdHlwZW9mIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gIT09ICd1bmRlZmluZWQnICYmICFzaG93SGlkZGVuRmllbGRzKSB7XG4gICAgZGVsZXRlIHNpYmxpbmdEb2NbZmllbGQubmFtZV07XG4gIH1cblxuICBjb25zdCBzaG91bGRIb2lzdExvY2FsaXplZFZhbHVlID0gZmxhdHRlbkxvY2FsZXNcbiAgICAmJiBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKVxuICAgICYmICh0eXBlb2Ygc2libGluZ0RvY1tmaWVsZC5uYW1lXSA9PT0gJ29iamVjdCcgJiYgc2libGluZ0RvY1tmaWVsZC5uYW1lXSAhPT0gbnVsbClcbiAgICAmJiBmaWVsZC5sb2NhbGl6ZWRcbiAgICAmJiByZXEubG9jYWxlICE9PSAnYWxsJ1xuICAgICYmIHJlcS5wYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb247XG5cbiAgaWYgKHNob3VsZEhvaXN0TG9jYWxpemVkVmFsdWUpIHtcbiAgICAvLyByZXBsYWNlIGFjdHVhbCB2YWx1ZSB3aXRoIGxvY2FsaXplZCB2YWx1ZSBiZWZvcmUgc2FuaXRpemluZ1xuICAgIC8vIHsgW2xvY2FsZV06IGZpZWxkcyB9IC0+IGZpZWxkc1xuICAgIGNvbnN0IHsgbG9jYWxlIH0gPSByZXE7XG4gICAgY29uc3QgdmFsdWUgPSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdW2xvY2FsZV07XG4gICAgY29uc3QgZmFsbGJhY2tMb2NhbGUgPSByZXEucGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uICYmIHJlcS5wYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb24/LmZhbGxiYWNrICYmIHJlcS5mYWxsYmFja0xvY2FsZTtcblxuICAgIGxldCBob2lzdGVkVmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmIChmYWxsYmFja0xvY2FsZSAmJiBmYWxsYmFja0xvY2FsZSAhPT0gbG9jYWxlKSB7XG4gICAgICBjb25zdCBmYWxsYmFja1ZhbHVlID0gc2libGluZ0RvY1tmaWVsZC5uYW1lXVtmYWxsYmFja0xvY2FsZV07XG4gICAgICBjb25zdCBpc051bGxPclVuZGVmaW5lZCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsdWUgPT09IG51bGw7XG5cbiAgICAgIGlmIChmYWxsYmFja1ZhbHVlKSB7XG4gICAgICAgIHN3aXRjaCAoZmllbGQudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgIGNhc2UgJ3RleHRhcmVhJzoge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJyB8fCBpc051bGxPclVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBob2lzdGVkVmFsdWUgPSBmYWxsYmFja1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGhvaXN0ZWRWYWx1ZSA9IGZhbGxiYWNrVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdID0gaG9pc3RlZFZhbHVlO1xuICB9XG5cbiAgLy8gU2FuaXRpemUgb3V0Z29pbmcgZmllbGQgdmFsdWVcbiAgc3dpdGNoIChmaWVsZC50eXBlKSB7XG4gICAgY2FzZSAnZ3JvdXAnOiB7XG4gICAgICAvLyBGaWxsIGdyb3VwcyB3aXRoIGVtcHR5IG9iamVjdHMgc28gZmllbGRzIHdpdGggaG9va3Mgd2l0aGluIGdyb3VwcyBjYW4gcG9wdWxhdGVcbiAgICAgIC8vIHRoZW1zZWx2ZXMgdmlydHVhbGx5IGFzIG5lY2Vzc2FyeVxuICAgICAgaWYgKHR5cGVvZiBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdID0ge307XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICd0YWJzJzoge1xuICAgICAgZmllbGQudGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgaWYgKHRhYkhhc05hbWUodGFiKSAmJiAodHlwZW9mIHNpYmxpbmdEb2NbdGFiLm5hbWVdID09PSAndW5kZWZpbmVkJyB8fCBzaWJsaW5nRG9jW3RhYi5uYW1lXSA9PT0gbnVsbCkpIHtcbiAgICAgICAgICBzaWJsaW5nRG9jW3RhYi5uYW1lXSA9IHt9O1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSAncmljaFRleHQnOiB7XG4gICAgICBpZiAoKChmaWVsZC5hZG1pbj8uZWxlbWVudHM/LmluY2x1ZGVzKCdyZWxhdGlvbnNoaXAnKSB8fCBmaWVsZC5hZG1pbj8uZWxlbWVudHM/LmluY2x1ZGVzKCd1cGxvYWQnKSB8fCBmaWVsZC5hZG1pbj8uZWxlbWVudHM/LmluY2x1ZGVzKCdsaW5rJykpIHx8ICFmaWVsZD8uYWRtaW4/LmVsZW1lbnRzKSkge1xuICAgICAgICBwb3B1bGF0aW9uUHJvbWlzZXMucHVzaChyaWNoVGV4dFJlbGF0aW9uc2hpcFByb21pc2Uoe1xuICAgICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgICBkZXB0aCxcbiAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICByZXEsXG4gICAgICAgICAgc2libGluZ0RvYyxcbiAgICAgICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgJ3BvaW50Jzoge1xuICAgICAgY29uc3QgcG9pbnREb2MgPSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocG9pbnREb2M/LmNvb3JkaW5hdGVzKSAmJiBwb2ludERvYy5jb29yZGluYXRlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgc2libGluZ0RvY1tmaWVsZC5uYW1lXSA9IHBvaW50RG9jLmNvb3JkaW5hdGVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2libGluZ0RvY1tmaWVsZC5uYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpKSB7XG4gICAgLy8gRXhlY3V0ZSBob29rc1xuICAgIGlmIChmaWVsZC5ob29rcz8uYWZ0ZXJSZWFkKSB7XG4gICAgICBhd2FpdCBmaWVsZC5ob29rcy5hZnRlclJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGN1cnJlbnRIb29rKSA9PiB7XG4gICAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgICBjb25zdCBzaG91bGRSdW5Ib29rT25BbGxMb2NhbGVzID0gZmllbGQubG9jYWxpemVkXG4gICAgICAgICAgJiYgKHJlcS5sb2NhbGUgPT09ICdhbGwnIHx8ICFmbGF0dGVuTG9jYWxlcylcbiAgICAgICAgICAmJiB0eXBlb2Ygc2libGluZ0RvY1tmaWVsZC5uYW1lXSA9PT0gJ29iamVjdCc7XG5cbiAgICAgICAgaWYgKHNob3VsZFJ1bkhvb2tPbkFsbExvY2FsZXMpIHtcbiAgICAgICAgICBjb25zdCBob29rUHJvbWlzZXMgPSBPYmplY3QuZW50cmllcyhzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdKS5tYXAoKFtsb2NhbGUsIHZhbHVlXSkgPT4gKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhvb2tlZFZhbHVlID0gYXdhaXQgY3VycmVudEhvb2soe1xuICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgb3JpZ2luYWxEb2M6IGRvYyxcbiAgICAgICAgICAgICAgZGF0YTogZG9jLFxuICAgICAgICAgICAgICBzaWJsaW5nRGF0YTogc2libGluZ0RvYyxcbiAgICAgICAgICAgICAgb3BlcmF0aW9uOiAncmVhZCcsXG4gICAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoaG9va2VkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdW2xvY2FsZV0gPSBob29rZWRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSgpKTtcblxuICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGhvb2tQcm9taXNlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgaG9va2VkVmFsdWUgPSBhd2FpdCBjdXJyZW50SG9vayh7XG4gICAgICAgICAgICBkYXRhOiBkb2MsXG4gICAgICAgICAgICBmaW5kTWFueSxcbiAgICAgICAgICAgIG9yaWdpbmFsRG9jOiBkb2MsXG4gICAgICAgICAgICBvcGVyYXRpb246ICdyZWFkJyxcbiAgICAgICAgICAgIHNpYmxpbmdEYXRhOiBzaWJsaW5nRG9jLFxuICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgdmFsdWU6IHNpYmxpbmdEb2NbZmllbGQubmFtZV0sXG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGhvb2tlZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gPSBob29rZWRWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICB9XG5cbiAgICAvLyBFeGVjdXRlIGFjY2VzcyBjb250cm9sXG4gICAgaWYgKGZpZWxkLmFjY2VzcyAmJiBmaWVsZC5hY2Nlc3MucmVhZCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gb3ZlcnJpZGVBY2Nlc3MgPyB0cnVlIDogYXdhaXQgZmllbGQuYWNjZXNzLnJlYWQoeyByZXEsIGlkOiBkb2MuaWQgYXMgc3RyaW5nIHwgbnVtYmVyLCBzaWJsaW5nRGF0YTogc2libGluZ0RvYywgZGF0YTogZG9jLCBkb2MgfSk7XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGRlbGV0ZSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmaWVsZC50eXBlID09PSAncmVsYXRpb25zaGlwJyB8fCBmaWVsZC50eXBlID09PSAndXBsb2FkJykge1xuICAgICAgcG9wdWxhdGlvblByb21pc2VzLnB1c2gocmVsYXRpb25zaGlwUG9wdWxhdGlvblByb21pc2Uoe1xuICAgICAgICBjdXJyZW50RGVwdGgsXG4gICAgICAgIGRlcHRoLFxuICAgICAgICBmaWVsZCxcbiAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgIHJlcSxcbiAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgc2libGluZ0RvYyxcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cblxuICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICBjYXNlICdncm91cCc6IHtcbiAgICAgIGxldCBncm91cERvYyA9IHNpYmxpbmdEb2NbZmllbGQubmFtZV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgICBpZiAodHlwZW9mIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gIT09ICdvYmplY3QnKSBncm91cERvYyA9IHt9O1xuXG4gICAgICB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgZGVwdGgsXG4gICAgICAgIGRvYyxcbiAgICAgICAgZmllbGRQcm9taXNlcyxcbiAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgIGZpbmRNYW55LFxuICAgICAgICBmbGF0dGVuTG9jYWxlcyxcbiAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgIHBvcHVsYXRpb25Qcm9taXNlcyxcbiAgICAgICAgcmVxLFxuICAgICAgICBzaWJsaW5nRG9jOiBncm91cERvYyxcbiAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgY29udGV4dCxcbiAgICAgIH0pO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlICdhcnJheSc6IHtcbiAgICAgIGNvbnN0IHJvd3MgPSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dzKSkge1xuICAgICAgICByb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgIHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgICAgIGRlcHRoLFxuICAgICAgICAgICAgZG9jLFxuICAgICAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgICAgICBmaWVsZFByb21pc2VzLFxuICAgICAgICAgICAgZmluZE1hbnksXG4gICAgICAgICAgICBmbGF0dGVuTG9jYWxlcyxcbiAgICAgICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICAgICAgcG9wdWxhdGlvblByb21pc2VzLFxuICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgc2libGluZ0RvYzogcm93IHx8IHt9LFxuICAgICAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghc2hvdWxkSG9pc3RMb2NhbGl6ZWRWYWx1ZSAmJiB0eXBlb2Ygcm93cyA9PT0gJ29iamVjdCcgJiYgcm93cyAhPT0gbnVsbCkge1xuICAgICAgICBPYmplY3QudmFsdWVzKHJvd3MpLmZvckVhY2goKGxvY2FsZVJvd3MpID0+IHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsb2NhbGVSb3dzKSkge1xuICAgICAgICAgICAgbG9jYWxlUm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICAgICAgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICAgICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgICAgICAgICBkZXB0aCxcbiAgICAgICAgICAgICAgICBkb2MsXG4gICAgICAgICAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgICAgICAgICAgZmllbGRQcm9taXNlcyxcbiAgICAgICAgICAgICAgICBmaW5kTWFueSxcbiAgICAgICAgICAgICAgICBmbGF0dGVuTG9jYWxlcyxcbiAgICAgICAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICAgICAgICBwb3B1bGF0aW9uUHJvbWlzZXMsXG4gICAgICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgICAgIHNpYmxpbmdEb2M6IHJvdyB8fCB7fSxcbiAgICAgICAgICAgICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgJ2Jsb2Nrcyc6IHtcbiAgICAgIGNvbnN0IHJvd3MgPSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dzKSkge1xuICAgICAgICByb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgIGNvbnN0IGJsb2NrID0gZmllbGQuYmxvY2tzLmZpbmQoKGJsb2NrVHlwZSkgPT4gYmxvY2tUeXBlLnNsdWcgPT09IHJvdy5ibG9ja1R5cGUpO1xuXG4gICAgICAgICAgaWYgKGJsb2NrKSB7XG4gICAgICAgICAgICB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgICAgICAgZGVwdGgsXG4gICAgICAgICAgICAgIGRvYyxcbiAgICAgICAgICAgICAgZmllbGRzOiBibG9jay5maWVsZHMsXG4gICAgICAgICAgICAgIGZpZWxkUHJvbWlzZXMsXG4gICAgICAgICAgICAgIGZpbmRNYW55LFxuICAgICAgICAgICAgICBmbGF0dGVuTG9jYWxlcyxcbiAgICAgICAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgICAgICAgIHBvcHVsYXRpb25Qcm9taXNlcyxcbiAgICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgICBzaWJsaW5nRG9jOiByb3cgfHwge30sXG4gICAgICAgICAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghc2hvdWxkSG9pc3RMb2NhbGl6ZWRWYWx1ZSAmJiB0eXBlb2Ygcm93cyA9PT0gJ29iamVjdCcgJiYgcm93cyAhPT0gbnVsbCkge1xuICAgICAgICBPYmplY3QudmFsdWVzKHJvd3MpLmZvckVhY2goKGxvY2FsZVJvd3MpID0+IHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsb2NhbGVSb3dzKSkge1xuICAgICAgICAgICAgbG9jYWxlUm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBmaWVsZC5ibG9ja3MuZmluZCgoYmxvY2tUeXBlKSA9PiBibG9ja1R5cGUuc2x1ZyA9PT0gcm93LmJsb2NrVHlwZSk7XG5cbiAgICAgICAgICAgICAgaWYgKGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICAgICAgICAgICAgY3VycmVudERlcHRoLFxuICAgICAgICAgICAgICAgICAgZGVwdGgsXG4gICAgICAgICAgICAgICAgICBkb2MsXG4gICAgICAgICAgICAgICAgICBmaWVsZHM6IGJsb2NrLmZpZWxkcyxcbiAgICAgICAgICAgICAgICAgIGZpZWxkUHJvbWlzZXMsXG4gICAgICAgICAgICAgICAgICBmaW5kTWFueSxcbiAgICAgICAgICAgICAgICAgIGZsYXR0ZW5Mb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgICAgICAgICAgICBwb3B1bGF0aW9uUHJvbWlzZXMsXG4gICAgICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICAgICAgICBzaWJsaW5nRG9jOiByb3cgfHwge30sXG4gICAgICAgICAgICAgICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSAncm93JzpcbiAgICBjYXNlICdjb2xsYXBzaWJsZSc6IHtcbiAgICAgIHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgY3VycmVudERlcHRoLFxuICAgICAgICBkZXB0aCxcbiAgICAgICAgZG9jLFxuICAgICAgICBmaWVsZFByb21pc2VzLFxuICAgICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkcyxcbiAgICAgICAgZmluZE1hbnksXG4gICAgICAgIGZsYXR0ZW5Mb2NhbGVzLFxuICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgcG9wdWxhdGlvblByb21pc2VzLFxuICAgICAgICByZXEsXG4gICAgICAgIHNpYmxpbmdEb2MsXG4gICAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSAndGFiJzoge1xuICAgICAgbGV0IHRhYkRvYyA9IHNpYmxpbmdEb2M7XG4gICAgICBpZiAodGFiSGFzTmFtZShmaWVsZCkpIHtcbiAgICAgICAgdGFiRG9jID0gc2libGluZ0RvY1tmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgICAgaWYgKHR5cGVvZiBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdICE9PSAnb2JqZWN0JykgdGFiRG9jID0ge307XG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgY3VycmVudERlcHRoLFxuICAgICAgICBkZXB0aCxcbiAgICAgICAgZG9jLFxuICAgICAgICBmaWVsZFByb21pc2VzLFxuICAgICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkcyxcbiAgICAgICAgZmluZE1hbnksXG4gICAgICAgIGZsYXR0ZW5Mb2NhbGVzLFxuICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgcG9wdWxhdGlvblByb21pc2VzLFxuICAgICAgICByZXEsXG4gICAgICAgIHNpYmxpbmdEb2M6IHRhYkRvYyxcbiAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgY29udGV4dCxcbiAgICAgIH0pO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlICd0YWJzJzoge1xuICAgICAgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICBjdXJyZW50RGVwdGgsXG4gICAgICAgIGRlcHRoLFxuICAgICAgICBkb2MsXG4gICAgICAgIGZpZWxkUHJvbWlzZXMsXG4gICAgICAgIGZpZWxkczogZmllbGQudGFicy5tYXAoKHRhYikgPT4gKHsgLi4udGFiLCB0eXBlOiAndGFiJyB9KSksXG4gICAgICAgIGZpbmRNYW55LFxuICAgICAgICBmbGF0dGVuTG9jYWxlcyxcbiAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgIHBvcHVsYXRpb25Qcm9taXNlcyxcbiAgICAgICAgcmVxLFxuICAgICAgICBzaWJsaW5nRG9jLFxuICAgICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG4iXSwibmFtZXMiOlsicHJvbWlzZSIsImN1cnJlbnREZXB0aCIsImRlcHRoIiwiZG9jIiwiZmllbGQiLCJmaWVsZFByb21pc2VzIiwiZmluZE1hbnkiLCJmbGF0dGVuTG9jYWxlcyIsIm92ZXJyaWRlQWNjZXNzIiwicG9wdWxhdGlvblByb21pc2VzIiwicmVxIiwic2libGluZ0RvYyIsInNob3dIaWRkZW5GaWVsZHMiLCJjb250ZXh0Iiwic2hvdWxkSG9pc3RMb2NhbGl6ZWRWYWx1ZSIsImxvY2FsZSIsInZhbHVlIiwiZmFsbGJhY2tMb2NhbGUiLCJob2lzdGVkVmFsdWUiLCJmYWxsYmFja1ZhbHVlIiwiaXNOdWxsT3JVbmRlZmluZWQiLCJwb2ludERvYyIsInJlc3VsdCIsImdyb3VwRG9jIiwicm93cyIsInRhYkRvYyIsImZpZWxkQWZmZWN0c0RhdGEiLCJoaWRkZW4iLCJuYW1lIiwibG9jYWxpemVkIiwicGF5bG9hZCIsImNvbmZpZyIsImxvY2FsaXphdGlvbiIsImZhbGxiYWNrIiwidHlwZSIsInRhYnMiLCJmb3JFYWNoIiwidGFiIiwidGFiSGFzTmFtZSIsImFkbWluIiwiZWxlbWVudHMiLCJpbmNsdWRlcyIsInB1c2giLCJyaWNoVGV4dFJlbGF0aW9uc2hpcFByb21pc2UiLCJBcnJheSIsImlzQXJyYXkiLCJjb29yZGluYXRlcyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImhvb2tzIiwiYWZ0ZXJSZWFkIiwicmVkdWNlIiwicHJpb3JIb29rIiwiY3VycmVudEhvb2siLCJzaG91bGRSdW5Ib29rT25BbGxMb2NhbGVzIiwiaG9va1Byb21pc2VzIiwiaG9va2VkVmFsdWUiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwib3JpZ2luYWxEb2MiLCJkYXRhIiwic2libGluZ0RhdGEiLCJvcGVyYXRpb24iLCJQcm9taXNlIiwiYWxsIiwicmVzb2x2ZSIsImFjY2VzcyIsInJlYWQiLCJpZCIsInJlbGF0aW9uc2hpcFBvcHVsYXRpb25Qcm9taXNlIiwidHJhdmVyc2VGaWVsZHMiLCJmaWVsZHMiLCJyb3ciLCJ2YWx1ZXMiLCJsb2NhbGVSb3dzIiwiYmxvY2siLCJibG9ja3MiLCJmaW5kIiwiYmxvY2tUeXBlIiwic2x1ZyJdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7OytCQStCdkJBOzs7ZUFBQUE7OztxQkE5Qm1EOzhCQUVqQztrRkFDUztvRkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
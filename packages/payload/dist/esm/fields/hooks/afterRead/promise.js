/* eslint-disable no-param-reassign */ function _array_like_to_array(arr, len) {
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
import { fieldAffectsData, tabHasName } from "../../config/types";
import { traverseFields } from "./traverseFields";
import richTextRelationshipPromise from "../../richText/richTextRelationshipPromise";
import relationshipPopulationPromise from "./relationshipPopulationPromise";
// This function is responsible for the following actions, in order:
// - Remove hidden fields from response
// - Flatten locales into requested locale
// - Sanitize outgoing data (point field, etc)
// - Execute field hooks
// - Execute read access control
// - Populate relationships
export var promise = function() {
    var _ref = _async_to_generator(function(param) {
        var currentDepth, depth, doc, field, fieldPromises, findMany, flattenLocales, overrideAccess, populationPromises, req, siblingDoc, showHiddenFields, context, shouldHoistLocalizedValue, _req_payload_config_localization, locale, value, fallbackLocale, hoistedValue, fallbackValue, isNullOrUndefined, _field_admin_elements, _field_admin, _field_admin_elements1, _field_admin1, _field_admin_elements2, _field_admin2, _field_admin3, _field, _pointDoc, pointDoc, _field_hooks, result, _tmp, _, groupDoc, rows, rows1, tabDoc;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    currentDepth = param.currentDepth, depth = param.depth, doc = param.doc, field = param.field, fieldPromises = param.fieldPromises, findMany = param.findMany, flattenLocales = param.flattenLocales, overrideAccess = param.overrideAccess, populationPromises = param.populationPromises, req = param.req, siblingDoc = param.siblingDoc, showHiddenFields = param.showHiddenFields, context = param.context;
                    if (fieldAffectsData(field) && field.hidden && typeof siblingDoc[field.name] !== "undefined" && !showHiddenFields) {
                        delete siblingDoc[field.name];
                    }
                    shouldHoistLocalizedValue = flattenLocales && fieldAffectsData(field) && typeof siblingDoc[field.name] === "object" && siblingDoc[field.name] !== null && field.localized && req.locale !== "all" && req.payload.config.localization;
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
                                    if (tabHasName(tab) && (typeof siblingDoc[tab.name] === "undefined" || siblingDoc[tab.name] === null)) {
                                        siblingDoc[tab.name] = {};
                                    }
                                });
                                break;
                            }
                        case "richText":
                            {
                                ;
                                if (((_field_admin = field.admin) === null || _field_admin === void 0 ? void 0 : (_field_admin_elements = _field_admin.elements) === null || _field_admin_elements === void 0 ? void 0 : _field_admin_elements.includes("relationship")) || ((_field_admin1 = field.admin) === null || _field_admin1 === void 0 ? void 0 : (_field_admin_elements1 = _field_admin1.elements) === null || _field_admin_elements1 === void 0 ? void 0 : _field_admin_elements1.includes("upload")) || ((_field_admin2 = field.admin) === null || _field_admin2 === void 0 ? void 0 : (_field_admin_elements2 = _field_admin2.elements) === null || _field_admin_elements2 === void 0 ? void 0 : _field_admin_elements2.includes("link")) || !((_field = field) === null || _field === void 0 ? void 0 : (_field_admin3 = _field.admin) === null || _field_admin3 === void 0 ? void 0 : _field_admin3.elements)) {
                                    populationPromises.push(richTextRelationshipPromise({
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
                    if (!fieldAffectsData(field)) return [
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
                        populationPromises.push(relationshipPopulationPromise({
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
                        traverseFields({
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
                                traverseFields({
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
                                        traverseFields({
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
                                    traverseFields({
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
                                            traverseFields({
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
                        traverseFields({
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
                    if (tabHasName(field)) {
                        tabDoc = siblingDoc[field.name];
                        if (typeof siblingDoc[field.name] !== "object") tabDoc = {};
                    }
                    return [
                        4,
                        traverseFields({
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
                        traverseFields({
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYWZ0ZXJSZWFkL3Byb21pc2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7IEZpZWxkLCBmaWVsZEFmZmVjdHNEYXRhLCBUYWJBc0ZpZWxkLCB0YWJIYXNOYW1lIH0gZnJvbSAnLi4vLi4vY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IFBheWxvYWRSZXF1ZXN0LCBSZXF1ZXN0Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgdHJhdmVyc2VGaWVsZHMgfSBmcm9tICcuL3RyYXZlcnNlRmllbGRzJztcbmltcG9ydCByaWNoVGV4dFJlbGF0aW9uc2hpcFByb21pc2UgZnJvbSAnLi4vLi4vcmljaFRleHQvcmljaFRleHRSZWxhdGlvbnNoaXBQcm9taXNlJztcbmltcG9ydCByZWxhdGlvbnNoaXBQb3B1bGF0aW9uUHJvbWlzZSBmcm9tICcuL3JlbGF0aW9uc2hpcFBvcHVsYXRpb25Qcm9taXNlJztcblxudHlwZSBBcmdzID0ge1xuICBjdXJyZW50RGVwdGg6IG51bWJlclxuICBkZXB0aDogbnVtYmVyXG4gIGRvYzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgZmllbGQ6IEZpZWxkIHwgVGFiQXNGaWVsZFxuICBmaWVsZFByb21pc2VzOiBQcm9taXNlPHZvaWQ+W11cbiAgZmluZE1hbnk6IGJvb2xlYW5cbiAgZmxhdHRlbkxvY2FsZXM6IGJvb2xlYW5cbiAgcG9wdWxhdGlvblByb21pc2VzOiBQcm9taXNlPHZvaWQ+W11cbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBvdmVycmlkZUFjY2VzczogYm9vbGVhblxuICBzaWJsaW5nRG9jOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBzaG93SGlkZGVuRmllbGRzOiBib29sZWFuXG4gIGNvbnRleHQ6IFJlcXVlc3RDb250ZXh0XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgcmVzcG9uc2libGUgZm9yIHRoZSBmb2xsb3dpbmcgYWN0aW9ucywgaW4gb3JkZXI6XG4vLyAtIFJlbW92ZSBoaWRkZW4gZmllbGRzIGZyb20gcmVzcG9uc2Vcbi8vIC0gRmxhdHRlbiBsb2NhbGVzIGludG8gcmVxdWVzdGVkIGxvY2FsZVxuLy8gLSBTYW5pdGl6ZSBvdXRnb2luZyBkYXRhIChwb2ludCBmaWVsZCwgZXRjKVxuLy8gLSBFeGVjdXRlIGZpZWxkIGhvb2tzXG4vLyAtIEV4ZWN1dGUgcmVhZCBhY2Nlc3MgY29udHJvbFxuLy8gLSBQb3B1bGF0ZSByZWxhdGlvbnNoaXBzXG5cbmV4cG9ydCBjb25zdCBwcm9taXNlID0gYXN5bmMgKHtcbiAgY3VycmVudERlcHRoLFxuICBkZXB0aCxcbiAgZG9jLFxuICBmaWVsZCxcbiAgZmllbGRQcm9taXNlcyxcbiAgZmluZE1hbnksXG4gIGZsYXR0ZW5Mb2NhbGVzLFxuICBvdmVycmlkZUFjY2VzcyxcbiAgcG9wdWxhdGlvblByb21pc2VzLFxuICByZXEsXG4gIHNpYmxpbmdEb2MsXG4gIHNob3dIaWRkZW5GaWVsZHMsXG4gIGNvbnRleHQsXG59OiBBcmdzKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGlmIChmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSAmJiBmaWVsZC5oaWRkZW4gJiYgdHlwZW9mIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gIT09ICd1bmRlZmluZWQnICYmICFzaG93SGlkZGVuRmllbGRzKSB7XG4gICAgZGVsZXRlIHNpYmxpbmdEb2NbZmllbGQubmFtZV07XG4gIH1cblxuICBjb25zdCBzaG91bGRIb2lzdExvY2FsaXplZFZhbHVlID0gZmxhdHRlbkxvY2FsZXNcbiAgICAmJiBmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKVxuICAgICYmICh0eXBlb2Ygc2libGluZ0RvY1tmaWVsZC5uYW1lXSA9PT0gJ29iamVjdCcgJiYgc2libGluZ0RvY1tmaWVsZC5uYW1lXSAhPT0gbnVsbClcbiAgICAmJiBmaWVsZC5sb2NhbGl6ZWRcbiAgICAmJiByZXEubG9jYWxlICE9PSAnYWxsJ1xuICAgICYmIHJlcS5wYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb247XG5cbiAgaWYgKHNob3VsZEhvaXN0TG9jYWxpemVkVmFsdWUpIHtcbiAgICAvLyByZXBsYWNlIGFjdHVhbCB2YWx1ZSB3aXRoIGxvY2FsaXplZCB2YWx1ZSBiZWZvcmUgc2FuaXRpemluZ1xuICAgIC8vIHsgW2xvY2FsZV06IGZpZWxkcyB9IC0+IGZpZWxkc1xuICAgIGNvbnN0IHsgbG9jYWxlIH0gPSByZXE7XG4gICAgY29uc3QgdmFsdWUgPSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdW2xvY2FsZV07XG4gICAgY29uc3QgZmFsbGJhY2tMb2NhbGUgPSByZXEucGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uICYmIHJlcS5wYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb24/LmZhbGxiYWNrICYmIHJlcS5mYWxsYmFja0xvY2FsZTtcblxuICAgIGxldCBob2lzdGVkVmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmIChmYWxsYmFja0xvY2FsZSAmJiBmYWxsYmFja0xvY2FsZSAhPT0gbG9jYWxlKSB7XG4gICAgICBjb25zdCBmYWxsYmFja1ZhbHVlID0gc2libGluZ0RvY1tmaWVsZC5uYW1lXVtmYWxsYmFja0xvY2FsZV07XG4gICAgICBjb25zdCBpc051bGxPclVuZGVmaW5lZCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsdWUgPT09IG51bGw7XG5cbiAgICAgIGlmIChmYWxsYmFja1ZhbHVlKSB7XG4gICAgICAgIHN3aXRjaCAoZmllbGQudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgIGNhc2UgJ3RleHRhcmVhJzoge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJyB8fCBpc051bGxPclVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBob2lzdGVkVmFsdWUgPSBmYWxsYmFja1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGhvaXN0ZWRWYWx1ZSA9IGZhbGxiYWNrVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdID0gaG9pc3RlZFZhbHVlO1xuICB9XG5cbiAgLy8gU2FuaXRpemUgb3V0Z29pbmcgZmllbGQgdmFsdWVcbiAgc3dpdGNoIChmaWVsZC50eXBlKSB7XG4gICAgY2FzZSAnZ3JvdXAnOiB7XG4gICAgICAvLyBGaWxsIGdyb3VwcyB3aXRoIGVtcHR5IG9iamVjdHMgc28gZmllbGRzIHdpdGggaG9va3Mgd2l0aGluIGdyb3VwcyBjYW4gcG9wdWxhdGVcbiAgICAgIC8vIHRoZW1zZWx2ZXMgdmlydHVhbGx5IGFzIG5lY2Vzc2FyeVxuICAgICAgaWYgKHR5cGVvZiBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdID0ge307XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlICd0YWJzJzoge1xuICAgICAgZmllbGQudGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICAgICAgaWYgKHRhYkhhc05hbWUodGFiKSAmJiAodHlwZW9mIHNpYmxpbmdEb2NbdGFiLm5hbWVdID09PSAndW5kZWZpbmVkJyB8fCBzaWJsaW5nRG9jW3RhYi5uYW1lXSA9PT0gbnVsbCkpIHtcbiAgICAgICAgICBzaWJsaW5nRG9jW3RhYi5uYW1lXSA9IHt9O1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSAncmljaFRleHQnOiB7XG4gICAgICBpZiAoKChmaWVsZC5hZG1pbj8uZWxlbWVudHM/LmluY2x1ZGVzKCdyZWxhdGlvbnNoaXAnKSB8fCBmaWVsZC5hZG1pbj8uZWxlbWVudHM/LmluY2x1ZGVzKCd1cGxvYWQnKSB8fCBmaWVsZC5hZG1pbj8uZWxlbWVudHM/LmluY2x1ZGVzKCdsaW5rJykpIHx8ICFmaWVsZD8uYWRtaW4/LmVsZW1lbnRzKSkge1xuICAgICAgICBwb3B1bGF0aW9uUHJvbWlzZXMucHVzaChyaWNoVGV4dFJlbGF0aW9uc2hpcFByb21pc2Uoe1xuICAgICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgICBkZXB0aCxcbiAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICByZXEsXG4gICAgICAgICAgc2libGluZ0RvYyxcbiAgICAgICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgJ3BvaW50Jzoge1xuICAgICAgY29uc3QgcG9pbnREb2MgPSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocG9pbnREb2M/LmNvb3JkaW5hdGVzKSAmJiBwb2ludERvYy5jb29yZGluYXRlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgc2libGluZ0RvY1tmaWVsZC5uYW1lXSA9IHBvaW50RG9jLmNvb3JkaW5hdGVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2libGluZ0RvY1tmaWVsZC5uYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpKSB7XG4gICAgLy8gRXhlY3V0ZSBob29rc1xuICAgIGlmIChmaWVsZC5ob29rcz8uYWZ0ZXJSZWFkKSB7XG4gICAgICBhd2FpdCBmaWVsZC5ob29rcy5hZnRlclJlYWQucmVkdWNlKGFzeW5jIChwcmlvckhvb2ssIGN1cnJlbnRIb29rKSA9PiB7XG4gICAgICAgIGF3YWl0IHByaW9ySG9vaztcblxuICAgICAgICBjb25zdCBzaG91bGRSdW5Ib29rT25BbGxMb2NhbGVzID0gZmllbGQubG9jYWxpemVkXG4gICAgICAgICAgJiYgKHJlcS5sb2NhbGUgPT09ICdhbGwnIHx8ICFmbGF0dGVuTG9jYWxlcylcbiAgICAgICAgICAmJiB0eXBlb2Ygc2libGluZ0RvY1tmaWVsZC5uYW1lXSA9PT0gJ29iamVjdCc7XG5cbiAgICAgICAgaWYgKHNob3VsZFJ1bkhvb2tPbkFsbExvY2FsZXMpIHtcbiAgICAgICAgICBjb25zdCBob29rUHJvbWlzZXMgPSBPYmplY3QuZW50cmllcyhzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdKS5tYXAoKFtsb2NhbGUsIHZhbHVlXSkgPT4gKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhvb2tlZFZhbHVlID0gYXdhaXQgY3VycmVudEhvb2soe1xuICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgb3JpZ2luYWxEb2M6IGRvYyxcbiAgICAgICAgICAgICAgZGF0YTogZG9jLFxuICAgICAgICAgICAgICBzaWJsaW5nRGF0YTogc2libGluZ0RvYyxcbiAgICAgICAgICAgICAgb3BlcmF0aW9uOiAncmVhZCcsXG4gICAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoaG9va2VkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdW2xvY2FsZV0gPSBob29rZWRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSgpKTtcblxuICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGhvb2tQcm9taXNlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgaG9va2VkVmFsdWUgPSBhd2FpdCBjdXJyZW50SG9vayh7XG4gICAgICAgICAgICBkYXRhOiBkb2MsXG4gICAgICAgICAgICBmaW5kTWFueSxcbiAgICAgICAgICAgIG9yaWdpbmFsRG9jOiBkb2MsXG4gICAgICAgICAgICBvcGVyYXRpb246ICdyZWFkJyxcbiAgICAgICAgICAgIHNpYmxpbmdEYXRhOiBzaWJsaW5nRG9jLFxuICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgdmFsdWU6IHNpYmxpbmdEb2NbZmllbGQubmFtZV0sXG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGhvb2tlZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gPSBob29rZWRWYWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICB9XG5cbiAgICAvLyBFeGVjdXRlIGFjY2VzcyBjb250cm9sXG4gICAgaWYgKGZpZWxkLmFjY2VzcyAmJiBmaWVsZC5hY2Nlc3MucmVhZCkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gb3ZlcnJpZGVBY2Nlc3MgPyB0cnVlIDogYXdhaXQgZmllbGQuYWNjZXNzLnJlYWQoeyByZXEsIGlkOiBkb2MuaWQgYXMgc3RyaW5nIHwgbnVtYmVyLCBzaWJsaW5nRGF0YTogc2libGluZ0RvYywgZGF0YTogZG9jLCBkb2MgfSk7XG5cbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIGRlbGV0ZSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmaWVsZC50eXBlID09PSAncmVsYXRpb25zaGlwJyB8fCBmaWVsZC50eXBlID09PSAndXBsb2FkJykge1xuICAgICAgcG9wdWxhdGlvblByb21pc2VzLnB1c2gocmVsYXRpb25zaGlwUG9wdWxhdGlvblByb21pc2Uoe1xuICAgICAgICBjdXJyZW50RGVwdGgsXG4gICAgICAgIGRlcHRoLFxuICAgICAgICBmaWVsZCxcbiAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgIHJlcSxcbiAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgc2libGluZ0RvYyxcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cblxuICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICBjYXNlICdncm91cCc6IHtcbiAgICAgIGxldCBncm91cERvYyA9IHNpYmxpbmdEb2NbZmllbGQubmFtZV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgICBpZiAodHlwZW9mIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gIT09ICdvYmplY3QnKSBncm91cERvYyA9IHt9O1xuXG4gICAgICB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgZGVwdGgsXG4gICAgICAgIGRvYyxcbiAgICAgICAgZmllbGRQcm9taXNlcyxcbiAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgIGZpbmRNYW55LFxuICAgICAgICBmbGF0dGVuTG9jYWxlcyxcbiAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgIHBvcHVsYXRpb25Qcm9taXNlcyxcbiAgICAgICAgcmVxLFxuICAgICAgICBzaWJsaW5nRG9jOiBncm91cERvYyxcbiAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgY29udGV4dCxcbiAgICAgIH0pO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlICdhcnJheSc6IHtcbiAgICAgIGNvbnN0IHJvd3MgPSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dzKSkge1xuICAgICAgICByb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgIHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgICAgIGRlcHRoLFxuICAgICAgICAgICAgZG9jLFxuICAgICAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgICAgICBmaWVsZFByb21pc2VzLFxuICAgICAgICAgICAgZmluZE1hbnksXG4gICAgICAgICAgICBmbGF0dGVuTG9jYWxlcyxcbiAgICAgICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICAgICAgcG9wdWxhdGlvblByb21pc2VzLFxuICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgc2libGluZ0RvYzogcm93IHx8IHt9LFxuICAgICAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghc2hvdWxkSG9pc3RMb2NhbGl6ZWRWYWx1ZSAmJiB0eXBlb2Ygcm93cyA9PT0gJ29iamVjdCcgJiYgcm93cyAhPT0gbnVsbCkge1xuICAgICAgICBPYmplY3QudmFsdWVzKHJvd3MpLmZvckVhY2goKGxvY2FsZVJvd3MpID0+IHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsb2NhbGVSb3dzKSkge1xuICAgICAgICAgICAgbG9jYWxlUm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICAgICAgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICAgICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgICAgICAgICBkZXB0aCxcbiAgICAgICAgICAgICAgICBkb2MsXG4gICAgICAgICAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgICAgICAgICAgZmllbGRQcm9taXNlcyxcbiAgICAgICAgICAgICAgICBmaW5kTWFueSxcbiAgICAgICAgICAgICAgICBmbGF0dGVuTG9jYWxlcyxcbiAgICAgICAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICAgICAgICBwb3B1bGF0aW9uUHJvbWlzZXMsXG4gICAgICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgICAgIHNpYmxpbmdEb2M6IHJvdyB8fCB7fSxcbiAgICAgICAgICAgICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgJ2Jsb2Nrcyc6IHtcbiAgICAgIGNvbnN0IHJvd3MgPSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dzKSkge1xuICAgICAgICByb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgIGNvbnN0IGJsb2NrID0gZmllbGQuYmxvY2tzLmZpbmQoKGJsb2NrVHlwZSkgPT4gYmxvY2tUeXBlLnNsdWcgPT09IHJvdy5ibG9ja1R5cGUpO1xuXG4gICAgICAgICAgaWYgKGJsb2NrKSB7XG4gICAgICAgICAgICB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgICAgICAgZGVwdGgsXG4gICAgICAgICAgICAgIGRvYyxcbiAgICAgICAgICAgICAgZmllbGRzOiBibG9jay5maWVsZHMsXG4gICAgICAgICAgICAgIGZpZWxkUHJvbWlzZXMsXG4gICAgICAgICAgICAgIGZpbmRNYW55LFxuICAgICAgICAgICAgICBmbGF0dGVuTG9jYWxlcyxcbiAgICAgICAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgICAgICAgIHBvcHVsYXRpb25Qcm9taXNlcyxcbiAgICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgICBzaWJsaW5nRG9jOiByb3cgfHwge30sXG4gICAgICAgICAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghc2hvdWxkSG9pc3RMb2NhbGl6ZWRWYWx1ZSAmJiB0eXBlb2Ygcm93cyA9PT0gJ29iamVjdCcgJiYgcm93cyAhPT0gbnVsbCkge1xuICAgICAgICBPYmplY3QudmFsdWVzKHJvd3MpLmZvckVhY2goKGxvY2FsZVJvd3MpID0+IHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsb2NhbGVSb3dzKSkge1xuICAgICAgICAgICAgbG9jYWxlUm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBmaWVsZC5ibG9ja3MuZmluZCgoYmxvY2tUeXBlKSA9PiBibG9ja1R5cGUuc2x1ZyA9PT0gcm93LmJsb2NrVHlwZSk7XG5cbiAgICAgICAgICAgICAgaWYgKGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICAgICAgICAgICAgY3VycmVudERlcHRoLFxuICAgICAgICAgICAgICAgICAgZGVwdGgsXG4gICAgICAgICAgICAgICAgICBkb2MsXG4gICAgICAgICAgICAgICAgICBmaWVsZHM6IGJsb2NrLmZpZWxkcyxcbiAgICAgICAgICAgICAgICAgIGZpZWxkUHJvbWlzZXMsXG4gICAgICAgICAgICAgICAgICBmaW5kTWFueSxcbiAgICAgICAgICAgICAgICAgIGZsYXR0ZW5Mb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgICAgICAgICAgICBwb3B1bGF0aW9uUHJvbWlzZXMsXG4gICAgICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICAgICAgICBzaWJsaW5nRG9jOiByb3cgfHwge30sXG4gICAgICAgICAgICAgICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSAncm93JzpcbiAgICBjYXNlICdjb2xsYXBzaWJsZSc6IHtcbiAgICAgIHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgY3VycmVudERlcHRoLFxuICAgICAgICBkZXB0aCxcbiAgICAgICAgZG9jLFxuICAgICAgICBmaWVsZFByb21pc2VzLFxuICAgICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkcyxcbiAgICAgICAgZmluZE1hbnksXG4gICAgICAgIGZsYXR0ZW5Mb2NhbGVzLFxuICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgcG9wdWxhdGlvblByb21pc2VzLFxuICAgICAgICByZXEsXG4gICAgICAgIHNpYmxpbmdEb2MsXG4gICAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSAndGFiJzoge1xuICAgICAgbGV0IHRhYkRvYyA9IHNpYmxpbmdEb2M7XG4gICAgICBpZiAodGFiSGFzTmFtZShmaWVsZCkpIHtcbiAgICAgICAgdGFiRG9jID0gc2libGluZ0RvY1tmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgICAgaWYgKHR5cGVvZiBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdICE9PSAnb2JqZWN0JykgdGFiRG9jID0ge307XG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgY3VycmVudERlcHRoLFxuICAgICAgICBkZXB0aCxcbiAgICAgICAgZG9jLFxuICAgICAgICBmaWVsZFByb21pc2VzLFxuICAgICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkcyxcbiAgICAgICAgZmluZE1hbnksXG4gICAgICAgIGZsYXR0ZW5Mb2NhbGVzLFxuICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgcG9wdWxhdGlvblByb21pc2VzLFxuICAgICAgICByZXEsXG4gICAgICAgIHNpYmxpbmdEb2M6IHRhYkRvYyxcbiAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgY29udGV4dCxcbiAgICAgIH0pO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlICd0YWJzJzoge1xuICAgICAgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICBjdXJyZW50RGVwdGgsXG4gICAgICAgIGRlcHRoLFxuICAgICAgICBkb2MsXG4gICAgICAgIGZpZWxkUHJvbWlzZXMsXG4gICAgICAgIGZpZWxkczogZmllbGQudGFicy5tYXAoKHRhYikgPT4gKHsgLi4udGFiLCB0eXBlOiAndGFiJyB9KSksXG4gICAgICAgIGZpbmRNYW55LFxuICAgICAgICBmbGF0dGVuTG9jYWxlcyxcbiAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgIHBvcHVsYXRpb25Qcm9taXNlcyxcbiAgICAgICAgcmVxLFxuICAgICAgICBzaWJsaW5nRG9jLFxuICAgICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiZmllbGRBZmZlY3RzRGF0YSIsInRhYkhhc05hbWUiLCJ0cmF2ZXJzZUZpZWxkcyIsInJpY2hUZXh0UmVsYXRpb25zaGlwUHJvbWlzZSIsInJlbGF0aW9uc2hpcFBvcHVsYXRpb25Qcm9taXNlIiwicHJvbWlzZSIsImN1cnJlbnREZXB0aCIsImRlcHRoIiwiZG9jIiwiZmllbGQiLCJmaWVsZFByb21pc2VzIiwiZmluZE1hbnkiLCJmbGF0dGVuTG9jYWxlcyIsIm92ZXJyaWRlQWNjZXNzIiwicG9wdWxhdGlvblByb21pc2VzIiwicmVxIiwic2libGluZ0RvYyIsInNob3dIaWRkZW5GaWVsZHMiLCJjb250ZXh0Iiwic2hvdWxkSG9pc3RMb2NhbGl6ZWRWYWx1ZSIsImxvY2FsZSIsInZhbHVlIiwiZmFsbGJhY2tMb2NhbGUiLCJob2lzdGVkVmFsdWUiLCJmYWxsYmFja1ZhbHVlIiwiaXNOdWxsT3JVbmRlZmluZWQiLCJwb2ludERvYyIsInJlc3VsdCIsImdyb3VwRG9jIiwicm93cyIsInRhYkRvYyIsImhpZGRlbiIsIm5hbWUiLCJsb2NhbGl6ZWQiLCJwYXlsb2FkIiwiY29uZmlnIiwibG9jYWxpemF0aW9uIiwiZmFsbGJhY2siLCJ0eXBlIiwidGFicyIsImZvckVhY2giLCJ0YWIiLCJhZG1pbiIsImVsZW1lbnRzIiwiaW5jbHVkZXMiLCJwdXNoIiwiQXJyYXkiLCJpc0FycmF5IiwiY29vcmRpbmF0ZXMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJob29rcyIsImFmdGVyUmVhZCIsInJlZHVjZSIsInByaW9ySG9vayIsImN1cnJlbnRIb29rIiwic2hvdWxkUnVuSG9va09uQWxsTG9jYWxlcyIsImhvb2tQcm9taXNlcyIsImhvb2tlZFZhbHVlIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsIm9yaWdpbmFsRG9jIiwiZGF0YSIsInNpYmxpbmdEYXRhIiwib3BlcmF0aW9uIiwiUHJvbWlzZSIsImFsbCIsInJlc29sdmUiLCJhY2Nlc3MiLCJyZWFkIiwiaWQiLCJmaWVsZHMiLCJyb3ciLCJ2YWx1ZXMiLCJsb2NhbGVSb3dzIiwiYmxvY2siLCJibG9ja3MiLCJmaW5kIiwiYmxvY2tUeXBlIiwic2x1ZyJdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
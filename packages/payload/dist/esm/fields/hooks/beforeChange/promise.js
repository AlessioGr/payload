/* eslint-disable no-param-reassign */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
import merge from "deepmerge";
import { fieldAffectsData, tabHasName } from "../../config/types";
import { traverseFields } from "./traverseFields";
import { getExistingRowDoc } from "./getExistingRowDoc";
// This function is responsible for the following actions, in order:
// - Run condition
// - Execute field hooks
// - Validate data
// - Transform data for storage
// - Unflatten locales
export var promise = function() {
    var _ref = _async_to_generator(function(param) {
        var data, doc, docWithLocales, errors, field, id, mergeLocaleActions, operation, path, req, siblingData, siblingDoc, siblingDocWithLocales, skipValidation, context, _field_admin, _req_payload_config, _req_payload_config_localization, passesCondition, skipValidationFromHere, defaultLocale, operationLocale, _field_hooks, valueToValidate, jsonError, rows, validationResult, _, rows1, promises, rows2, promises1, tabPath, tabSiblingData, tabSiblingDoc, tabSiblingDocWithLocales;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = param.data, doc = param.doc, docWithLocales = param.docWithLocales, errors = param.errors, field = param.field, id = param.id, mergeLocaleActions = param.mergeLocaleActions, operation = param.operation, path = param.path, req = param.req, siblingData = param.siblingData, siblingDoc = param.siblingDoc, siblingDocWithLocales = param.siblingDocWithLocales, skipValidation = param.skipValidation, context = param.context;
                    passesCondition = ((_field_admin = field.admin) === null || _field_admin === void 0 ? void 0 : _field_admin.condition) ? field.admin.condition(data, siblingData, {
                        user: req.user
                    }) : true;
                    skipValidationFromHere = skipValidation || !passesCondition;
                    defaultLocale = ((_req_payload_config = req.payload.config) === null || _req_payload_config === void 0 ? void 0 : _req_payload_config.localization) ? (_req_payload_config_localization = req.payload.config.localization) === null || _req_payload_config_localization === void 0 ? void 0 : _req_payload_config_localization.defaultLocale : "en";
                    operationLocale = req.locale || defaultLocale;
                    if (!fieldAffectsData(field)) return [
                        3,
                        5
                    ];
                    // skip validation if the field is localized and the incoming data is null
                    if (field.localized && operationLocale !== defaultLocale) {
                        if ([
                            "array",
                            "blocks"
                        ].includes(field.type) && siblingData[field.name] === null) {
                            skipValidationFromHere = true;
                        }
                    }
                    if (!((_field_hooks = field.hooks) === null || _field_hooks === void 0 ? void 0 : _field_hooks.beforeChange)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        field.hooks.beforeChange.reduce(function() {
                            var _ref = _async_to_generator(function(priorHook, currentHook) {
                                var hookedValue;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                priorHook
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                4,
                                                currentHook({
                                                    value: siblingData[field.name],
                                                    originalDoc: doc,
                                                    data: data,
                                                    siblingData: siblingData,
                                                    operation: operation,
                                                    req: req,
                                                    context: context
                                                })
                                            ];
                                        case 2:
                                            hookedValue = _state.sent();
                                            if (hookedValue !== undefined) {
                                                siblingData[field.name] = hookedValue;
                                            }
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
                    if (!(!skipValidationFromHere && field.validate)) return [
                        3,
                        4
                    ];
                    valueToValidate = siblingData[field.name];
                    if ([
                        "array",
                        "blocks"
                    ].includes(field.type)) {
                        rows = siblingData[field.name];
                        valueToValidate = Array.isArray(rows) ? rows.length : 0;
                    }
                    if (field.type === "json" && typeof siblingData[field.name] === "string") {
                        try {
                            JSON.parse(siblingData[field.name]);
                        } catch (e) {
                            jsonError = e;
                        }
                    }
                    return [
                        4,
                        field.validate(valueToValidate, _object_spread_props(_object_spread({}, field), {
                            jsonError: jsonError,
                            data: merge(doc, data, {
                                arrayMerge: function(_, source) {
                                    return source;
                                }
                            }),
                            siblingData: merge(siblingDoc, siblingData, {
                                arrayMerge: function(_, source) {
                                    return source;
                                }
                            }),
                            id: id,
                            operation: operation,
                            user: req.user,
                            payload: req.payload,
                            t: req.t
                        }))
                    ];
                case 3:
                    validationResult = _state.sent();
                    if (typeof validationResult === "string") {
                        errors.push({
                            message: validationResult,
                            field: "".concat(path).concat(field.name)
                        });
                    }
                    _state.label = 4;
                case 4:
                    // Push merge locale action if applicable
                    if (field.localized) {
                        mergeLocaleActions.push(function() {
                            if (req.payload.config.localization) {
                                var localization = req.payload.config.localization;
                                var localeData = localization.localeCodes.reduce(function(localizedValues, locale) {
                                    var _siblingDocWithLocales_field_name, _siblingDocWithLocales;
                                    var fieldValue = locale === req.locale ? siblingData[field.name] : (_siblingDocWithLocales = siblingDocWithLocales) === null || _siblingDocWithLocales === void 0 ? void 0 : (_siblingDocWithLocales_field_name = _siblingDocWithLocales[field.name]) === null || _siblingDocWithLocales_field_name === void 0 ? void 0 : _siblingDocWithLocales_field_name[locale];
                                    // update locale value if it's not undefined
                                    if (typeof fieldValue !== "undefined") {
                                        return _object_spread_props(_object_spread({}, localizedValues), _define_property({}, locale, fieldValue));
                                    }
                                    return localizedValues;
                                }, {});
                                // If there are locales with data, set the data
                                if (Object.keys(localeData).length > 0) {
                                    siblingData[field.name] = localeData;
                                }
                            }
                        });
                    }
                    _state.label = 5;
                case 5:
                    _ = field.type;
                    switch(_){
                        case "point":
                            return [
                                3,
                                6
                            ];
                        case "group":
                            return [
                                3,
                                7
                            ];
                        case "array":
                            return [
                                3,
                                9
                            ];
                        case "blocks":
                            return [
                                3,
                                12
                            ];
                        case "row":
                            return [
                                3,
                                15
                            ];
                        case "collapsible":
                            return [
                                3,
                                15
                            ];
                        case "tab":
                            return [
                                3,
                                17
                            ];
                        case "tabs":
                            return [
                                3,
                                19
                            ];
                    }
                    return [
                        3,
                        21
                    ];
                case 6:
                    {
                        // Transform point data for storage
                        if (Array.isArray(siblingData[field.name]) && siblingData[field.name][0] !== null && siblingData[field.name][1] !== null) {
                            siblingData[field.name] = {
                                type: "Point",
                                coordinates: [
                                    parseFloat(siblingData[field.name][0]),
                                    parseFloat(siblingData[field.name][1])
                                ]
                            };
                        }
                        return [
                            3,
                            22
                        ];
                    }
                    _state.label = 7;
                case 7:
                    if (typeof siblingData[field.name] !== "object") siblingData[field.name] = {};
                    if (typeof siblingDoc[field.name] !== "object") siblingDoc[field.name] = {};
                    if (typeof siblingDocWithLocales[field.name] !== "object") siblingDocWithLocales[field.name] = {};
                    return [
                        4,
                        traverseFields({
                            data: data,
                            doc: doc,
                            docWithLocales: docWithLocales,
                            errors: errors,
                            fields: field.fields,
                            id: id,
                            mergeLocaleActions: mergeLocaleActions,
                            operation: operation,
                            path: "".concat(path).concat(field.name, "."),
                            req: req,
                            siblingData: siblingData[field.name],
                            siblingDoc: siblingDoc[field.name],
                            siblingDocWithLocales: siblingDocWithLocales[field.name],
                            skipValidation: skipValidationFromHere,
                            context: context
                        })
                    ];
                case 8:
                    _state.sent();
                    return [
                        3,
                        22
                    ];
                case 9:
                    rows1 = siblingData[field.name];
                    if (!Array.isArray(rows1)) return [
                        3,
                        11
                    ];
                    promises = [];
                    rows1.forEach(function(row, i) {
                        promises.push(traverseFields({
                            data: data,
                            doc: doc,
                            docWithLocales: docWithLocales,
                            errors: errors,
                            fields: field.fields,
                            id: id,
                            mergeLocaleActions: mergeLocaleActions,
                            operation: operation,
                            path: "".concat(path).concat(field.name, ".").concat(i, "."),
                            req: req,
                            siblingData: row,
                            siblingDoc: getExistingRowDoc(row, siblingDoc[field.name]),
                            siblingDocWithLocales: getExistingRowDoc(row, siblingDocWithLocales[field.name]),
                            skipValidation: skipValidationFromHere,
                            context: context
                        }));
                    });
                    return [
                        4,
                        Promise.all(promises)
                    ];
                case 10:
                    _state.sent();
                    _state.label = 11;
                case 11:
                    return [
                        3,
                        22
                    ];
                case 12:
                    rows2 = siblingData[field.name];
                    if (!Array.isArray(rows2)) return [
                        3,
                        14
                    ];
                    promises1 = [];
                    rows2.forEach(function(row, i) {
                        var block = field.blocks.find(function(blockType) {
                            return blockType.slug === row.blockType;
                        });
                        if (block) {
                            promises1.push(traverseFields({
                                data: data,
                                doc: doc,
                                docWithLocales: docWithLocales,
                                errors: errors,
                                fields: block.fields,
                                id: id,
                                mergeLocaleActions: mergeLocaleActions,
                                operation: operation,
                                path: "".concat(path).concat(field.name, ".").concat(i, "."),
                                req: req,
                                siblingData: row,
                                siblingDoc: getExistingRowDoc(row, siblingDoc[field.name]),
                                siblingDocWithLocales: getExistingRowDoc(row, siblingDocWithLocales[field.name]),
                                skipValidation: skipValidationFromHere,
                                context: context
                            }));
                        }
                    });
                    return [
                        4,
                        Promise.all(promises1)
                    ];
                case 13:
                    _state.sent();
                    _state.label = 14;
                case 14:
                    return [
                        3,
                        22
                    ];
                case 15:
                    return [
                        4,
                        traverseFields({
                            data: data,
                            doc: doc,
                            docWithLocales: docWithLocales,
                            errors: errors,
                            fields: field.fields,
                            id: id,
                            mergeLocaleActions: mergeLocaleActions,
                            operation: operation,
                            path: path,
                            req: req,
                            siblingData: siblingData,
                            siblingDoc: siblingDoc,
                            siblingDocWithLocales: siblingDocWithLocales,
                            skipValidation: skipValidationFromHere,
                            context: context
                        })
                    ];
                case 16:
                    _state.sent();
                    return [
                        3,
                        22
                    ];
                case 17:
                    tabPath = path;
                    tabSiblingData = siblingData;
                    tabSiblingDoc = siblingDoc;
                    tabSiblingDocWithLocales = siblingDocWithLocales;
                    if (tabHasName(field)) {
                        tabPath = "".concat(path).concat(field.name, ".");
                        if (typeof siblingData[field.name] !== "object") siblingData[field.name] = {};
                        if (typeof siblingDoc[field.name] !== "object") siblingDoc[field.name] = {};
                        if (typeof siblingDocWithLocales[field.name] !== "object") siblingDocWithLocales[field.name] = {};
                        tabSiblingData = siblingData[field.name];
                        tabSiblingDoc = siblingDoc[field.name];
                        tabSiblingDocWithLocales = siblingDocWithLocales[field.name];
                    }
                    return [
                        4,
                        traverseFields({
                            data: data,
                            doc: doc,
                            docWithLocales: docWithLocales,
                            errors: errors,
                            fields: field.fields,
                            id: id,
                            mergeLocaleActions: mergeLocaleActions,
                            operation: operation,
                            path: tabPath,
                            req: req,
                            siblingData: tabSiblingData,
                            siblingDoc: tabSiblingDoc,
                            siblingDocWithLocales: tabSiblingDocWithLocales,
                            skipValidation: skipValidationFromHere,
                            context: context
                        })
                    ];
                case 18:
                    _state.sent();
                    return [
                        3,
                        22
                    ];
                case 19:
                    return [
                        4,
                        traverseFields({
                            data: data,
                            doc: doc,
                            docWithLocales: docWithLocales,
                            errors: errors,
                            fields: field.tabs.map(function(tab) {
                                return _object_spread_props(_object_spread({}, tab), {
                                    type: "tab"
                                });
                            }),
                            id: id,
                            mergeLocaleActions: mergeLocaleActions,
                            operation: operation,
                            path: path,
                            req: req,
                            siblingData: siblingData,
                            siblingDoc: siblingDoc,
                            siblingDocWithLocales: siblingDocWithLocales,
                            skipValidation: skipValidationFromHere,
                            context: context
                        })
                    ];
                case 20:
                    _state.sent();
                    return [
                        3,
                        22
                    ];
                case 21:
                    {
                        return [
                            3,
                            22
                        ];
                    }
                    _state.label = 22;
                case 22:
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYmVmb3JlQ2hhbmdlL3Byb21pc2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnO1xuaW1wb3J0IHsgRmllbGQsIGZpZWxkQWZmZWN0c0RhdGEsIFRhYkFzRmllbGQsIHRhYkhhc05hbWUgfSBmcm9tICcuLi8uLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgT3BlcmF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QsIFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyB0cmF2ZXJzZUZpZWxkcyB9IGZyb20gJy4vdHJhdmVyc2VGaWVsZHMnO1xuaW1wb3J0IHsgZ2V0RXhpc3RpbmdSb3dEb2MgfSBmcm9tICcuL2dldEV4aXN0aW5nUm93RG9jJztcblxudHlwZSBBcmdzID0ge1xuICBkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBkb2M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIGRvY1dpdGhMb2NhbGVzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBlcnJvcnM6IHsgbWVzc2FnZTogc3RyaW5nLCBmaWVsZDogc3RyaW5nIH1bXVxuICBmaWVsZDogRmllbGQgfCBUYWJBc0ZpZWxkXG4gIGlkPzogc3RyaW5nIHwgbnVtYmVyXG4gIG1lcmdlTG9jYWxlQWN0aW9uczogKCgpID0+IHZvaWQpW11cbiAgb3BlcmF0aW9uOiBPcGVyYXRpb25cbiAgcGF0aDogc3RyaW5nXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgc2libGluZ0RhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIHNpYmxpbmdEb2M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIHNpYmxpbmdEb2NXaXRoTG9jYWxlcz86IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIHNraXBWYWxpZGF0aW9uOiBib29sZWFuXG4gIGNvbnRleHQ6IFJlcXVlc3RDb250ZXh0XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgcmVzcG9uc2libGUgZm9yIHRoZSBmb2xsb3dpbmcgYWN0aW9ucywgaW4gb3JkZXI6XG4vLyAtIFJ1biBjb25kaXRpb25cbi8vIC0gRXhlY3V0ZSBmaWVsZCBob29rc1xuLy8gLSBWYWxpZGF0ZSBkYXRhXG4vLyAtIFRyYW5zZm9ybSBkYXRhIGZvciBzdG9yYWdlXG4vLyAtIFVuZmxhdHRlbiBsb2NhbGVzXG5cbmV4cG9ydCBjb25zdCBwcm9taXNlID0gYXN5bmMgKHtcbiAgZGF0YSxcbiAgZG9jLFxuICBkb2NXaXRoTG9jYWxlcyxcbiAgZXJyb3JzLFxuICBmaWVsZCxcbiAgaWQsXG4gIG1lcmdlTG9jYWxlQWN0aW9ucyxcbiAgb3BlcmF0aW9uLFxuICBwYXRoLFxuICByZXEsXG4gIHNpYmxpbmdEYXRhLFxuICBzaWJsaW5nRG9jLFxuICBzaWJsaW5nRG9jV2l0aExvY2FsZXMsXG4gIHNraXBWYWxpZGF0aW9uLFxuICBjb250ZXh0LFxufTogQXJncyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBjb25zdCBwYXNzZXNDb25kaXRpb24gPSAoZmllbGQuYWRtaW4/LmNvbmRpdGlvbikgPyBmaWVsZC5hZG1pbi5jb25kaXRpb24oZGF0YSwgc2libGluZ0RhdGEsIHsgdXNlcjogcmVxLnVzZXIgfSkgOiB0cnVlO1xuICBsZXQgc2tpcFZhbGlkYXRpb25Gcm9tSGVyZSA9IHNraXBWYWxpZGF0aW9uIHx8ICFwYXNzZXNDb25kaXRpb247XG5cbiAgY29uc3QgZGVmYXVsdExvY2FsZSA9IHJlcS5wYXlsb2FkLmNvbmZpZz8ubG9jYWxpemF0aW9uID8gcmVxLnBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvbj8uZGVmYXVsdExvY2FsZSA6ICdlbic7XG4gIGNvbnN0IG9wZXJhdGlvbkxvY2FsZSA9IHJlcS5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcblxuICBpZiAoZmllbGRBZmZlY3RzRGF0YShmaWVsZCkpIHtcbiAgICAvLyBza2lwIHZhbGlkYXRpb24gaWYgdGhlIGZpZWxkIGlzIGxvY2FsaXplZCBhbmQgdGhlIGluY29taW5nIGRhdGEgaXMgbnVsbFxuICAgIGlmIChmaWVsZC5sb2NhbGl6ZWQgJiYgb3BlcmF0aW9uTG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlKSB7XG4gICAgICBpZiAoWydhcnJheScsICdibG9ja3MnXS5pbmNsdWRlcyhmaWVsZC50eXBlKSAmJiBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICBza2lwVmFsaWRhdGlvbkZyb21IZXJlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeGVjdXRlIGhvb2tzXG4gICAgaWYgKGZpZWxkLmhvb2tzPy5iZWZvcmVDaGFuZ2UpIHtcbiAgICAgIGF3YWl0IGZpZWxkLmhvb2tzLmJlZm9yZUNoYW5nZS5yZWR1Y2UoYXN5bmMgKHByaW9ySG9vaywgY3VycmVudEhvb2spID0+IHtcbiAgICAgICAgYXdhaXQgcHJpb3JIb29rO1xuXG4gICAgICAgIGNvbnN0IGhvb2tlZFZhbHVlID0gYXdhaXQgY3VycmVudEhvb2soe1xuICAgICAgICAgIHZhbHVlOiBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSxcbiAgICAgICAgICBvcmlnaW5hbERvYzogZG9jLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgc2libGluZ0RhdGEsXG4gICAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaG9va2VkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0gaG9va2VkVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sIFByb21pc2UucmVzb2x2ZSgpKTtcbiAgICB9XG5cbiAgICAvLyBWYWxpZGF0ZVxuICAgIGlmICghc2tpcFZhbGlkYXRpb25Gcm9tSGVyZSAmJiBmaWVsZC52YWxpZGF0ZSkge1xuICAgICAgbGV0IHZhbHVlVG9WYWxpZGF0ZSA9IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdO1xuICAgICAgbGV0IGpzb25FcnJvcjtcblxuICAgICAgaWYgKFsnYXJyYXknLCAnYmxvY2tzJ10uaW5jbHVkZXMoZmllbGQudHlwZSkpIHtcbiAgICAgICAgY29uc3Qgcm93cyA9IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdO1xuICAgICAgICB2YWx1ZVRvVmFsaWRhdGUgPSBBcnJheS5pc0FycmF5KHJvd3MpID8gcm93cy5sZW5ndGggOiAwO1xuICAgICAgfVxuXG5cbiAgICAgIGlmIChmaWVsZC50eXBlID09PSAnanNvbicgJiYgdHlwZW9mIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID09PSAnc3RyaW5nJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEpTT04ucGFyc2Uoc2libGluZ0RhdGFbZmllbGQubmFtZV0gYXMgc3RyaW5nKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGpzb25FcnJvciA9IGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IGF3YWl0IGZpZWxkLnZhbGlkYXRlKHZhbHVlVG9WYWxpZGF0ZSwge1xuICAgICAgICAuLi5maWVsZCxcbiAgICAgICAganNvbkVycm9yLFxuICAgICAgICBkYXRhOiBtZXJnZShkb2MsIGRhdGEsIHsgYXJyYXlNZXJnZTogKF8sIHNvdXJjZSkgPT4gc291cmNlIH0pLFxuICAgICAgICBzaWJsaW5nRGF0YTogbWVyZ2Uoc2libGluZ0RvYywgc2libGluZ0RhdGEsIHsgYXJyYXlNZXJnZTogKF8sIHNvdXJjZSkgPT4gc291cmNlIH0pLFxuICAgICAgICBpZCxcbiAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICB1c2VyOiByZXEudXNlcixcbiAgICAgICAgcGF5bG9hZDogcmVxLnBheWxvYWQsXG4gICAgICAgIHQ6IHJlcS50LFxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsaWRhdGlvblJlc3VsdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZXJyb3JzLnB1c2goe1xuICAgICAgICAgIG1lc3NhZ2U6IHZhbGlkYXRpb25SZXN1bHQsXG4gICAgICAgICAgZmllbGQ6IGAke3BhdGh9JHtmaWVsZC5uYW1lfWAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFB1c2ggbWVyZ2UgbG9jYWxlIGFjdGlvbiBpZiBhcHBsaWNhYmxlXG4gICAgaWYgKGZpZWxkLmxvY2FsaXplZCkge1xuICAgICAgbWVyZ2VMb2NhbGVBY3Rpb25zLnB1c2goKCkgPT4ge1xuICAgICAgICBpZiAocmVxLnBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvbikge1xuICAgICAgICAgIGNvbnN0IHsgbG9jYWxpemF0aW9uIH0gPSByZXEucGF5bG9hZC5jb25maWc7XG4gICAgICAgICAgY29uc3QgbG9jYWxlRGF0YSA9IGxvY2FsaXphdGlvbi5sb2NhbGVDb2Rlcy5yZWR1Y2UoKGxvY2FsaXplZFZhbHVlcywgbG9jYWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gbG9jYWxlID09PSByZXEubG9jYWxlXG4gICAgICAgICAgICAgID8gc2libGluZ0RhdGFbZmllbGQubmFtZV1cbiAgICAgICAgICAgICAgOiBzaWJsaW5nRG9jV2l0aExvY2FsZXM/LltmaWVsZC5uYW1lXT8uW2xvY2FsZV07XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBsb2NhbGUgdmFsdWUgaWYgaXQncyBub3QgdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZpZWxkVmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4ubG9jYWxpemVkVmFsdWVzLFxuICAgICAgICAgICAgICAgIFtsb2NhbGVdOiBmaWVsZFZhbHVlLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbG9jYWxpemVkVmFsdWVzO1xuICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBsb2NhbGVzIHdpdGggZGF0YSwgc2V0IHRoZSBkYXRhXG4gICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGxvY2FsZURhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0gbG9jYWxlRGF0YTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN3aXRjaCAoZmllbGQudHlwZSkge1xuICAgIGNhc2UgJ3BvaW50Jzoge1xuICAgICAgLy8gVHJhbnNmb3JtIHBvaW50IGRhdGEgZm9yIHN0b3JhZ2VcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdKSAmJiBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXVswXSAhPT0gbnVsbCAmJiBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXVsxXSAhPT0gbnVsbCkge1xuICAgICAgICBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9IHtcbiAgICAgICAgICB0eXBlOiAnUG9pbnQnLFxuICAgICAgICAgIGNvb3JkaW5hdGVzOiBbXG4gICAgICAgICAgICBwYXJzZUZsb2F0KHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdWzBdKSxcbiAgICAgICAgICAgIHBhcnNlRmxvYXQoc2libGluZ0RhdGFbZmllbGQubmFtZV1bMV0pLFxuICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgJ2dyb3VwJzoge1xuICAgICAgaWYgKHR5cGVvZiBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSAhPT0gJ29iamVjdCcpIHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdID0ge307XG4gICAgICBpZiAodHlwZW9mIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gIT09ICdvYmplY3QnKSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdID0ge307XG4gICAgICBpZiAodHlwZW9mIHNpYmxpbmdEb2NXaXRoTG9jYWxlc1tmaWVsZC5uYW1lXSAhPT0gJ29iamVjdCcpIHNpYmxpbmdEb2NXaXRoTG9jYWxlc1tmaWVsZC5uYW1lXSA9IHt9O1xuXG4gICAgICBhd2FpdCB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgIGRhdGEsXG4gICAgICAgIGRvYyxcbiAgICAgICAgZG9jV2l0aExvY2FsZXMsXG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgIGlkLFxuICAgICAgICBtZXJnZUxvY2FsZUFjdGlvbnMsXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgcGF0aDogYCR7cGF0aH0ke2ZpZWxkLm5hbWV9LmAsXG4gICAgICAgIHJlcSxcbiAgICAgICAgc2libGluZ0RhdGE6IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICAgICAgICBzaWJsaW5nRG9jOiBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICAgICAgICBzaWJsaW5nRG9jV2l0aExvY2FsZXM6IHNpYmxpbmdEb2NXaXRoTG9jYWxlc1tmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICAgICAgc2tpcFZhbGlkYXRpb246IHNraXBWYWxpZGF0aW9uRnJvbUhlcmUsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSAnYXJyYXknOiB7XG4gICAgICBjb25zdCByb3dzID0gc2libGluZ0RhdGFbZmllbGQubmFtZV07XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHJvd3MpKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgICAgIHJvd3MuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICAgICAgcHJvbWlzZXMucHVzaCh0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgZG9jLFxuICAgICAgICAgICAgZG9jV2l0aExvY2FsZXMsXG4gICAgICAgICAgICBlcnJvcnMsXG4gICAgICAgICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkcyxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgbWVyZ2VMb2NhbGVBY3Rpb25zLFxuICAgICAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICAgICAgcGF0aDogYCR7cGF0aH0ke2ZpZWxkLm5hbWV9LiR7aX0uYCxcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgIHNpYmxpbmdEYXRhOiByb3csXG4gICAgICAgICAgICBzaWJsaW5nRG9jOiBnZXRFeGlzdGluZ1Jvd0RvYyhyb3csIHNpYmxpbmdEb2NbZmllbGQubmFtZV0pLFxuICAgICAgICAgICAgc2libGluZ0RvY1dpdGhMb2NhbGVzOiBnZXRFeGlzdGluZ1Jvd0RvYyhyb3csIHNpYmxpbmdEb2NXaXRoTG9jYWxlc1tmaWVsZC5uYW1lXSksXG4gICAgICAgICAgICBza2lwVmFsaWRhdGlvbjogc2tpcFZhbGlkYXRpb25Gcm9tSGVyZSxcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgJ2Jsb2Nrcyc6IHtcbiAgICAgIGNvbnN0IHJvd3MgPSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocm93cykpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgcm93cy5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICAgICAgICBjb25zdCBibG9jayA9IGZpZWxkLmJsb2Nrcy5maW5kKChibG9ja1R5cGUpID0+IGJsb2NrVHlwZS5zbHVnID09PSByb3cuYmxvY2tUeXBlKTtcblxuICAgICAgICAgIGlmIChibG9jaykge1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgIGRvYyxcbiAgICAgICAgICAgICAgZG9jV2l0aExvY2FsZXMsXG4gICAgICAgICAgICAgIGVycm9ycyxcbiAgICAgICAgICAgICAgZmllbGRzOiBibG9jay5maWVsZHMsXG4gICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICBtZXJnZUxvY2FsZUFjdGlvbnMsXG4gICAgICAgICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgICAgICAgcGF0aDogYCR7cGF0aH0ke2ZpZWxkLm5hbWV9LiR7aX0uYCxcbiAgICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgICBzaWJsaW5nRGF0YTogcm93LFxuICAgICAgICAgICAgICBzaWJsaW5nRG9jOiBnZXRFeGlzdGluZ1Jvd0RvYyhyb3csIHNpYmxpbmdEb2NbZmllbGQubmFtZV0pLFxuICAgICAgICAgICAgICBzaWJsaW5nRG9jV2l0aExvY2FsZXM6IGdldEV4aXN0aW5nUm93RG9jKHJvdywgc2libGluZ0RvY1dpdGhMb2NhbGVzW2ZpZWxkLm5hbWVdKSxcbiAgICAgICAgICAgICAgc2tpcFZhbGlkYXRpb246IHNraXBWYWxpZGF0aW9uRnJvbUhlcmUsXG4gICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgJ3Jvdyc6XG4gICAgY2FzZSAnY29sbGFwc2libGUnOiB7XG4gICAgICBhd2FpdCB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgIGRhdGEsXG4gICAgICAgIGRvYyxcbiAgICAgICAgZG9jV2l0aExvY2FsZXMsXG4gICAgICAgIGVycm9ycyxcbiAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgIGlkLFxuICAgICAgICBtZXJnZUxvY2FsZUFjdGlvbnMsXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgcGF0aCxcbiAgICAgICAgcmVxLFxuICAgICAgICBzaWJsaW5nRGF0YSxcbiAgICAgICAgc2libGluZ0RvYyxcbiAgICAgICAgc2libGluZ0RvY1dpdGhMb2NhbGVzLFxuICAgICAgICBza2lwVmFsaWRhdGlvbjogc2tpcFZhbGlkYXRpb25Gcm9tSGVyZSxcbiAgICAgICAgY29udGV4dCxcbiAgICAgIH0pO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlICd0YWInOiB7XG4gICAgICBsZXQgdGFiUGF0aCA9IHBhdGg7XG4gICAgICBsZXQgdGFiU2libGluZ0RhdGEgPSBzaWJsaW5nRGF0YTtcbiAgICAgIGxldCB0YWJTaWJsaW5nRG9jID0gc2libGluZ0RvYztcbiAgICAgIGxldCB0YWJTaWJsaW5nRG9jV2l0aExvY2FsZXMgPSBzaWJsaW5nRG9jV2l0aExvY2FsZXM7XG5cbiAgICAgIGlmICh0YWJIYXNOYW1lKGZpZWxkKSkge1xuICAgICAgICB0YWJQYXRoID0gYCR7cGF0aH0ke2ZpZWxkLm5hbWV9LmA7XG4gICAgICAgIGlmICh0eXBlb2Ygc2libGluZ0RhdGFbZmllbGQubmFtZV0gIT09ICdvYmplY3QnKSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSA9IHt9O1xuICAgICAgICBpZiAodHlwZW9mIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gIT09ICdvYmplY3QnKSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdID0ge307XG4gICAgICAgIGlmICh0eXBlb2Ygc2libGluZ0RvY1dpdGhMb2NhbGVzW2ZpZWxkLm5hbWVdICE9PSAnb2JqZWN0Jykgc2libGluZ0RvY1dpdGhMb2NhbGVzW2ZpZWxkLm5hbWVdID0ge307XG5cbiAgICAgICAgdGFiU2libGluZ0RhdGEgPSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgICAgdGFiU2libGluZ0RvYyA9IHNpYmxpbmdEb2NbZmllbGQubmFtZV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgICAgIHRhYlNpYmxpbmdEb2NXaXRoTG9jYWxlcyA9IHNpYmxpbmdEb2NXaXRoTG9jYWxlc1tmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICBkYXRhLFxuICAgICAgICBkb2MsXG4gICAgICAgIGRvY1dpdGhMb2NhbGVzLFxuICAgICAgICBlcnJvcnMsXG4gICAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgICBpZCxcbiAgICAgICAgbWVyZ2VMb2NhbGVBY3Rpb25zLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIHBhdGg6IHRhYlBhdGgsXG4gICAgICAgIHJlcSxcbiAgICAgICAgc2libGluZ0RhdGE6IHRhYlNpYmxpbmdEYXRhLFxuICAgICAgICBzaWJsaW5nRG9jOiB0YWJTaWJsaW5nRG9jLFxuICAgICAgICBzaWJsaW5nRG9jV2l0aExvY2FsZXM6IHRhYlNpYmxpbmdEb2NXaXRoTG9jYWxlcyxcbiAgICAgICAgc2tpcFZhbGlkYXRpb246IHNraXBWYWxpZGF0aW9uRnJvbUhlcmUsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSAndGFicyc6IHtcbiAgICAgIGF3YWl0IHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZG9jLFxuICAgICAgICBkb2NXaXRoTG9jYWxlcyxcbiAgICAgICAgZXJyb3JzLFxuICAgICAgICBmaWVsZHM6IGZpZWxkLnRhYnMubWFwKCh0YWIpID0+ICh7IC4uLnRhYiwgdHlwZTogJ3RhYicgfSkpLFxuICAgICAgICBpZCxcbiAgICAgICAgbWVyZ2VMb2NhbGVBY3Rpb25zLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIHBhdGgsXG4gICAgICAgIHJlcSxcbiAgICAgICAgc2libGluZ0RhdGEsXG4gICAgICAgIHNpYmxpbmdEb2MsXG4gICAgICAgIHNpYmxpbmdEb2NXaXRoTG9jYWxlcyxcbiAgICAgICAgc2tpcFZhbGlkYXRpb246IHNraXBWYWxpZGF0aW9uRnJvbUhlcmUsXG4gICAgICAgIGNvbnRleHQsXG4gICAgICB9KTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZGVmYXVsdDoge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuIl0sIm5hbWVzIjpbIm1lcmdlIiwiZmllbGRBZmZlY3RzRGF0YSIsInRhYkhhc05hbWUiLCJ0cmF2ZXJzZUZpZWxkcyIsImdldEV4aXN0aW5nUm93RG9jIiwicHJvbWlzZSIsImRhdGEiLCJkb2MiLCJkb2NXaXRoTG9jYWxlcyIsImVycm9ycyIsImZpZWxkIiwiaWQiLCJtZXJnZUxvY2FsZUFjdGlvbnMiLCJvcGVyYXRpb24iLCJwYXRoIiwicmVxIiwic2libGluZ0RhdGEiLCJzaWJsaW5nRG9jIiwic2libGluZ0RvY1dpdGhMb2NhbGVzIiwic2tpcFZhbGlkYXRpb24iLCJjb250ZXh0IiwicGFzc2VzQ29uZGl0aW9uIiwic2tpcFZhbGlkYXRpb25Gcm9tSGVyZSIsImRlZmF1bHRMb2NhbGUiLCJvcGVyYXRpb25Mb2NhbGUiLCJ2YWx1ZVRvVmFsaWRhdGUiLCJqc29uRXJyb3IiLCJyb3dzIiwidmFsaWRhdGlvblJlc3VsdCIsInByb21pc2VzIiwidGFiUGF0aCIsInRhYlNpYmxpbmdEYXRhIiwidGFiU2libGluZ0RvYyIsInRhYlNpYmxpbmdEb2NXaXRoTG9jYWxlcyIsImFkbWluIiwiY29uZGl0aW9uIiwidXNlciIsInBheWxvYWQiLCJjb25maWciLCJsb2NhbGl6YXRpb24iLCJsb2NhbGUiLCJsb2NhbGl6ZWQiLCJpbmNsdWRlcyIsInR5cGUiLCJuYW1lIiwiaG9va3MiLCJiZWZvcmVDaGFuZ2UiLCJyZWR1Y2UiLCJwcmlvckhvb2siLCJjdXJyZW50SG9vayIsImhvb2tlZFZhbHVlIiwidmFsdWUiLCJvcmlnaW5hbERvYyIsInVuZGVmaW5lZCIsIlByb21pc2UiLCJyZXNvbHZlIiwidmFsaWRhdGUiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJKU09OIiwicGFyc2UiLCJlIiwiYXJyYXlNZXJnZSIsIl8iLCJzb3VyY2UiLCJ0IiwicHVzaCIsIm1lc3NhZ2UiLCJsb2NhbGVEYXRhIiwibG9jYWxlQ29kZXMiLCJsb2NhbGl6ZWRWYWx1ZXMiLCJmaWVsZFZhbHVlIiwiT2JqZWN0Iiwia2V5cyIsImNvb3JkaW5hdGVzIiwicGFyc2VGbG9hdCIsImZpZWxkcyIsImZvckVhY2giLCJyb3ciLCJpIiwiYWxsIiwiYmxvY2siLCJibG9ja3MiLCJmaW5kIiwiYmxvY2tUeXBlIiwic2x1ZyIsInRhYnMiLCJtYXAiLCJ0YWIiXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDcEMsT0FBT0EsV0FBVyxZQUFZO0FBQzlCLFNBQWdCQyxnQkFBZ0IsRUFBY0MsVUFBVSxRQUFRLHFCQUFxQjtBQUdyRixTQUFTQyxjQUFjLFFBQVEsbUJBQW1CO0FBQ2xELFNBQVNDLGlCQUFpQixRQUFRLHNCQUFzQjtBQW9CeEQsb0VBQW9FO0FBQ3BFLGtCQUFrQjtBQUNsQix3QkFBd0I7QUFDeEIsa0JBQWtC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
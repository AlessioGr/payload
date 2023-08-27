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
import { fieldAffectsData, tabHasName } from "../../config/types";
import { traverseFields } from "./traverseFields";
// This function is responsible for the following actions, in order:
// - Execute field hooks
export var promise = function() {
    var _ref = _async_to_generator(function(param) {
        var data, doc, previousDoc, previousSiblingDoc, field, operation, req, siblingData, siblingDoc, context, _field_hooks, _, _siblingData, rows, promises, rows1, promises1, tabSiblingData, tabSiblingDoc, tabPreviousSiblingDoc;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    data = param.data, doc = param.doc, previousDoc = param.previousDoc, previousSiblingDoc = param.previousSiblingDoc, field = param.field, operation = param.operation, req = param.req, siblingData = param.siblingData, siblingDoc = param.siblingDoc, context = param.context;
                    if (!fieldAffectsData(field)) return [
                        3,
                        2
                    ];
                    if (!((_field_hooks = field.hooks) === null || _field_hooks === void 0 ? void 0 : _field_hooks.afterChange)) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        field.hooks.afterChange.reduce(function() {
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
                                                    previousDoc: previousDoc,
                                                    previousSiblingDoc: previousSiblingDoc,
                                                    previousValue: previousDoc[field.name],
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
                                                siblingDoc[field.name] = hookedValue;
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
                    _ = field.type;
                    switch(_){
                        case "group":
                            return [
                                3,
                                3
                            ];
                        case "array":
                            return [
                                3,
                                5
                            ];
                        case "blocks":
                            return [
                                3,
                                8
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
                                13
                            ];
                        case "tabs":
                            return [
                                3,
                                15
                            ];
                    }
                    return [
                        3,
                        17
                    ];
                case 3:
                    return [
                        4,
                        traverseFields({
                            data: data,
                            doc: doc,
                            previousDoc: previousDoc,
                            previousSiblingDoc: previousDoc[field.name],
                            fields: field.fields,
                            operation: operation,
                            req: req,
                            siblingData: ((_siblingData = siblingData) === null || _siblingData === void 0 ? void 0 : _siblingData[field.name]) || {},
                            siblingDoc: siblingDoc[field.name],
                            context: context
                        })
                    ];
                case 4:
                    _state.sent();
                    return [
                        3,
                        18
                    ];
                case 5:
                    rows = siblingDoc[field.name];
                    if (!Array.isArray(rows)) return [
                        3,
                        7
                    ];
                    promises = [];
                    rows.forEach(function(row, i) {
                        var _previousDoc_field_name, _previousDoc, _siblingData_field_name, _siblingData;
                        promises.push(traverseFields({
                            data: data,
                            doc: doc,
                            previousDoc: previousDoc,
                            previousSiblingDoc: ((_previousDoc = previousDoc) === null || _previousDoc === void 0 ? void 0 : (_previousDoc_field_name = _previousDoc[field.name]) === null || _previousDoc_field_name === void 0 ? void 0 : _previousDoc_field_name[i]) || {},
                            fields: field.fields,
                            operation: operation,
                            req: req,
                            siblingData: ((_siblingData = siblingData) === null || _siblingData === void 0 ? void 0 : (_siblingData_field_name = _siblingData[field.name]) === null || _siblingData_field_name === void 0 ? void 0 : _siblingData_field_name[i]) || {},
                            siblingDoc: _object_spread({}, row) || {},
                            context: context
                        }));
                    });
                    return [
                        4,
                        Promise.all(promises)
                    ];
                case 6:
                    _state.sent();
                    _state.label = 7;
                case 7:
                    return [
                        3,
                        18
                    ];
                case 8:
                    rows1 = siblingDoc[field.name];
                    if (!Array.isArray(rows1)) return [
                        3,
                        10
                    ];
                    promises1 = [];
                    rows1.forEach(function(row, i) {
                        var block = field.blocks.find(function(blockType) {
                            return blockType.slug === row.blockType;
                        });
                        if (block) {
                            var _previousDoc_field_name, _previousDoc, _siblingData_field_name, _siblingData;
                            promises1.push(traverseFields({
                                data: data,
                                doc: doc,
                                previousDoc: previousDoc,
                                previousSiblingDoc: ((_previousDoc = previousDoc) === null || _previousDoc === void 0 ? void 0 : (_previousDoc_field_name = _previousDoc[field.name]) === null || _previousDoc_field_name === void 0 ? void 0 : _previousDoc_field_name[i]) || {},
                                fields: block.fields,
                                operation: operation,
                                req: req,
                                siblingData: ((_siblingData = siblingData) === null || _siblingData === void 0 ? void 0 : (_siblingData_field_name = _siblingData[field.name]) === null || _siblingData_field_name === void 0 ? void 0 : _siblingData_field_name[i]) || {},
                                siblingDoc: _object_spread({}, row) || {},
                                context: context
                            }));
                        }
                    });
                    return [
                        4,
                        Promise.all(promises1)
                    ];
                case 9:
                    _state.sent();
                    _state.label = 10;
                case 10:
                    return [
                        3,
                        18
                    ];
                case 11:
                    return [
                        4,
                        traverseFields({
                            data: data,
                            doc: doc,
                            previousDoc: previousDoc,
                            previousSiblingDoc: _object_spread({}, previousSiblingDoc),
                            fields: field.fields,
                            operation: operation,
                            req: req,
                            siblingData: siblingData || {},
                            siblingDoc: _object_spread({}, siblingDoc),
                            context: context
                        })
                    ];
                case 12:
                    _state.sent();
                    return [
                        3,
                        18
                    ];
                case 13:
                    tabSiblingData = siblingData;
                    tabSiblingDoc = siblingDoc;
                    tabPreviousSiblingDoc = siblingDoc;
                    if (tabHasName(field)) {
                        tabSiblingData = siblingData[field.name];
                        tabSiblingDoc = siblingDoc[field.name];
                        tabPreviousSiblingDoc = previousDoc[field.name];
                    }
                    return [
                        4,
                        traverseFields({
                            data: data,
                            doc: doc,
                            fields: field.fields,
                            operation: operation,
                            req: req,
                            previousSiblingDoc: tabPreviousSiblingDoc,
                            previousDoc: previousDoc,
                            siblingData: tabSiblingData,
                            siblingDoc: tabSiblingDoc,
                            context: context
                        })
                    ];
                case 14:
                    _state.sent();
                    return [
                        3,
                        18
                    ];
                case 15:
                    return [
                        4,
                        traverseFields({
                            data: data,
                            doc: doc,
                            previousDoc: previousDoc,
                            previousSiblingDoc: _object_spread({}, previousSiblingDoc),
                            fields: field.tabs.map(function(tab) {
                                return _object_spread_props(_object_spread({}, tab), {
                                    type: "tab"
                                });
                            }),
                            operation: operation,
                            req: req,
                            siblingData: siblingData || {},
                            siblingDoc: _object_spread({}, siblingDoc),
                            context: context
                        })
                    ];
                case 16:
                    _state.sent();
                    return [
                        3,
                        18
                    ];
                case 17:
                    {
                        return [
                            3,
                            18
                        ];
                    }
                    _state.label = 18;
                case 18:
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYWZ0ZXJDaGFuZ2UvcHJvbWlzZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QsIFJlcXVlc3RDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vZXhwcmVzcy90eXBlcyc7XG5pbXBvcnQgeyBGaWVsZCwgZmllbGRBZmZlY3RzRGF0YSwgVGFiQXNGaWVsZCwgdGFiSGFzTmFtZSB9IGZyb20gJy4uLy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyB0cmF2ZXJzZUZpZWxkcyB9IGZyb20gJy4vdHJhdmVyc2VGaWVsZHMnO1xuXG50eXBlIEFyZ3MgPSB7XG4gIGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIGRvYzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgcHJldmlvdXNEb2M6IFJlY29yZDxzdHJpbmcsIHVua25vd24+XG4gIHByZXZpb3VzU2libGluZ0RvYzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgZmllbGQ6IEZpZWxkIHwgVGFiQXNGaWVsZFxuICBvcGVyYXRpb246ICdjcmVhdGUnIHwgJ3VwZGF0ZSdcbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBzaWJsaW5nRGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgc2libGluZ0RvYzogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbiAgY29udGV4dDogUmVxdWVzdENvbnRleHRcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyByZXNwb25zaWJsZSBmb3IgdGhlIGZvbGxvd2luZyBhY3Rpb25zLCBpbiBvcmRlcjpcbi8vIC0gRXhlY3V0ZSBmaWVsZCBob29rc1xuXG5leHBvcnQgY29uc3QgcHJvbWlzZSA9IGFzeW5jICh7XG4gIGRhdGEsXG4gIGRvYyxcbiAgcHJldmlvdXNEb2MsXG4gIHByZXZpb3VzU2libGluZ0RvYyxcbiAgZmllbGQsXG4gIG9wZXJhdGlvbixcbiAgcmVxLFxuICBzaWJsaW5nRGF0YSxcbiAgc2libGluZ0RvYyxcbiAgY29udGV4dCxcbn06IEFyZ3MpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpKSB7XG4gICAgLy8gRXhlY3V0ZSBob29rc1xuICAgIGlmIChmaWVsZC5ob29rcz8uYWZ0ZXJDaGFuZ2UpIHtcbiAgICAgIGF3YWl0IGZpZWxkLmhvb2tzLmFmdGVyQ2hhbmdlLnJlZHVjZShhc3luYyAocHJpb3JIb29rLCBjdXJyZW50SG9vaykgPT4ge1xuICAgICAgICBhd2FpdCBwcmlvckhvb2s7XG5cbiAgICAgICAgY29uc3QgaG9va2VkVmFsdWUgPSBhd2FpdCBjdXJyZW50SG9vayh7XG4gICAgICAgICAgdmFsdWU6IHNpYmxpbmdEYXRhW2ZpZWxkLm5hbWVdLFxuICAgICAgICAgIG9yaWdpbmFsRG9jOiBkb2MsXG4gICAgICAgICAgcHJldmlvdXNEb2MsXG4gICAgICAgICAgcHJldmlvdXNTaWJsaW5nRG9jLFxuICAgICAgICAgIHByZXZpb3VzVmFsdWU6IHByZXZpb3VzRG9jW2ZpZWxkLm5hbWVdLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgc2libGluZ0RhdGEsXG4gICAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaG9va2VkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHNpYmxpbmdEb2NbZmllbGQubmFtZV0gPSBob29rZWRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgUHJvbWlzZS5yZXNvbHZlKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRyYXZlcnNlIHN1YmZpZWxkc1xuICBzd2l0Y2ggKGZpZWxkLnR5cGUpIHtcbiAgICBjYXNlICdncm91cCc6IHtcbiAgICAgIGF3YWl0IHRyYXZlcnNlRmllbGRzKHtcbiAgICAgICAgZGF0YSxcbiAgICAgICAgZG9jLFxuICAgICAgICBwcmV2aW91c0RvYyxcbiAgICAgICAgcHJldmlvdXNTaWJsaW5nRG9jOiBwcmV2aW91c0RvY1tmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgcmVxLFxuICAgICAgICBzaWJsaW5nRGF0YTogc2libGluZ0RhdGE/LltmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8fCB7fSxcbiAgICAgICAgc2libGluZ0RvYzogc2libGluZ0RvY1tmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgICAgICAgY29udGV4dCxcbiAgICAgIH0pO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlICdhcnJheSc6IHtcbiAgICAgIGNvbnN0IHJvd3MgPSBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShyb3dzKSkge1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgICByb3dzLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgICAgIHByb21pc2VzLnB1c2godHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgIGRvYyxcbiAgICAgICAgICAgIHByZXZpb3VzRG9jLFxuICAgICAgICAgICAgcHJldmlvdXNTaWJsaW5nRG9jOiBwcmV2aW91c0RvYz8uW2ZpZWxkLm5hbWVdPy5baV0gfHwge30gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gICAgICAgICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkcyxcbiAgICAgICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgIHNpYmxpbmdEYXRhOiBzaWJsaW5nRGF0YT8uW2ZpZWxkLm5hbWVdPy5baV0gfHwge30sXG4gICAgICAgICAgICBzaWJsaW5nRG9jOiB7IC4uLnJvdyB9IHx8IHt9LFxuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlICdibG9ja3MnOiB7XG4gICAgICBjb25zdCByb3dzID0gc2libGluZ0RvY1tmaWVsZC5uYW1lXTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocm93cykpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgcm93cy5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICAgICAgICBjb25zdCBibG9jayA9IGZpZWxkLmJsb2Nrcy5maW5kKChibG9ja1R5cGUpID0+IGJsb2NrVHlwZS5zbHVnID09PSByb3cuYmxvY2tUeXBlKTtcblxuICAgICAgICAgIGlmIChibG9jaykge1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgIGRvYyxcbiAgICAgICAgICAgICAgcHJldmlvdXNEb2MsXG4gICAgICAgICAgICAgIHByZXZpb3VzU2libGluZ0RvYzogcHJldmlvdXNEb2M/LltmaWVsZC5uYW1lXT8uW2ldIHx8IHt9IGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICAgICAgICAgICAgICBmaWVsZHM6IGJsb2NrLmZpZWxkcyxcbiAgICAgICAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICAgIHNpYmxpbmdEYXRhOiBzaWJsaW5nRGF0YT8uW2ZpZWxkLm5hbWVdPy5baV0gfHwge30sXG4gICAgICAgICAgICAgIHNpYmxpbmdEb2M6IHsgLi4ucm93IH0gfHwge30sXG4gICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlICdyb3cnOlxuICAgIGNhc2UgJ2NvbGxhcHNpYmxlJzoge1xuICAgICAgYXdhaXQgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICBkYXRhLFxuICAgICAgICBkb2MsXG4gICAgICAgIHByZXZpb3VzRG9jLFxuICAgICAgICBwcmV2aW91c1NpYmxpbmdEb2M6IHsgLi4ucHJldmlvdXNTaWJsaW5nRG9jIH0sXG4gICAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIHJlcSxcbiAgICAgICAgc2libGluZ0RhdGE6IHNpYmxpbmdEYXRhIHx8IHt9LFxuICAgICAgICBzaWJsaW5nRG9jOiB7IC4uLnNpYmxpbmdEb2MgfSxcbiAgICAgICAgY29udGV4dCxcbiAgICAgIH0pO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlICd0YWInOiB7XG4gICAgICBsZXQgdGFiU2libGluZ0RhdGEgPSBzaWJsaW5nRGF0YTtcbiAgICAgIGxldCB0YWJTaWJsaW5nRG9jID0gc2libGluZ0RvYztcbiAgICAgIGxldCB0YWJQcmV2aW91c1NpYmxpbmdEb2MgPSBzaWJsaW5nRG9jO1xuXG4gICAgICBpZiAodGFiSGFzTmFtZShmaWVsZCkpIHtcbiAgICAgICAgdGFiU2libGluZ0RhdGEgPSBzaWJsaW5nRGF0YVtmaWVsZC5uYW1lXSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgICAgICAgdGFiU2libGluZ0RvYyA9IHNpYmxpbmdEb2NbZmllbGQubmFtZV0gYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gICAgICAgIHRhYlByZXZpb3VzU2libGluZ0RvYyA9IHByZXZpb3VzRG9jW2ZpZWxkLm5hbWVdIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0cmF2ZXJzZUZpZWxkcyh7XG4gICAgICAgIGRhdGEsXG4gICAgICAgIGRvYyxcbiAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgcmVxLFxuICAgICAgICBwcmV2aW91c1NpYmxpbmdEb2M6IHRhYlByZXZpb3VzU2libGluZ0RvYyxcbiAgICAgICAgcHJldmlvdXNEb2MsXG4gICAgICAgIHNpYmxpbmdEYXRhOiB0YWJTaWJsaW5nRGF0YSxcbiAgICAgICAgc2libGluZ0RvYzogdGFiU2libGluZ0RvYyxcbiAgICAgICAgY29udGV4dCxcbiAgICAgIH0pO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlICd0YWJzJzoge1xuICAgICAgYXdhaXQgdHJhdmVyc2VGaWVsZHMoe1xuICAgICAgICBkYXRhLFxuICAgICAgICBkb2MsXG4gICAgICAgIHByZXZpb3VzRG9jLFxuICAgICAgICBwcmV2aW91c1NpYmxpbmdEb2M6IHsgLi4ucHJldmlvdXNTaWJsaW5nRG9jIH0sXG4gICAgICAgIGZpZWxkczogZmllbGQudGFicy5tYXAoKHRhYikgPT4gKHsgLi4udGFiLCB0eXBlOiAndGFiJyB9KSksXG4gICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgcmVxLFxuICAgICAgICBzaWJsaW5nRGF0YTogc2libGluZ0RhdGEgfHwge30sXG4gICAgICAgIHNpYmxpbmdEb2M6IHsgLi4uc2libGluZ0RvYyB9LFxuICAgICAgICBjb250ZXh0LFxuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiZmllbGRBZmZlY3RzRGF0YSIsInRhYkhhc05hbWUiLCJ0cmF2ZXJzZUZpZWxkcyIsInByb21pc2UiLCJkYXRhIiwiZG9jIiwicHJldmlvdXNEb2MiLCJwcmV2aW91c1NpYmxpbmdEb2MiLCJmaWVsZCIsIm9wZXJhdGlvbiIsInJlcSIsInNpYmxpbmdEYXRhIiwic2libGluZ0RvYyIsImNvbnRleHQiLCJyb3dzIiwicHJvbWlzZXMiLCJ0YWJTaWJsaW5nRGF0YSIsInRhYlNpYmxpbmdEb2MiLCJ0YWJQcmV2aW91c1NpYmxpbmdEb2MiLCJob29rcyIsImFmdGVyQ2hhbmdlIiwicmVkdWNlIiwicHJpb3JIb29rIiwiY3VycmVudEhvb2siLCJob29rZWRWYWx1ZSIsInZhbHVlIiwibmFtZSIsIm9yaWdpbmFsRG9jIiwicHJldmlvdXNWYWx1ZSIsInVuZGVmaW5lZCIsIlByb21pc2UiLCJyZXNvbHZlIiwidHlwZSIsImZpZWxkcyIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJyb3ciLCJpIiwicHVzaCIsImFsbCIsImJsb2NrIiwiYmxvY2tzIiwiZmluZCIsImJsb2NrVHlwZSIsInNsdWciLCJ0YWJzIiwibWFwIiwidGFiIl0sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLFNBQWdCQSxnQkFBZ0IsRUFBY0MsVUFBVSxRQUFRLHFCQUFxQjtBQUNyRixTQUFTQyxjQUFjLFFBQVEsbUJBQW1CO0FBZWxELG9FQUFvRTtBQUNwRSx3QkFBd0I7QUFFeEIsT0FBTyxJQUFNQztlQUFVLG9CQUFBO1lBQ3JCQyxNQUNBQyxLQUNBQyxhQUNBQyxvQkFDQUMsT0FDQUMsV0FDQUMsS0FDQUMsYUFDQUMsWUFDQUMsU0FJTUwsaUJBbUNhRyxjQVNURyxNQUdFQyxVQXFCRkQsT0FHRUMsV0E0Q0pDLGdCQUNBQyxlQUNBQzs7OztvQkFsSVJkLGFBQUFBLE1BQ0FDLFlBQUFB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
/* eslint-disable no-param-reassign */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addFieldStatePromise", {
    enumerable: true,
    get: function() {
        return addFieldStatePromise;
    }
});
var _bsonobjectid = /*#__PURE__*/ _interop_require_default(require("bson-objectid"));
var _types = require("../../../../../fields/config/types");
var _getDefaultValue = /*#__PURE__*/ _interop_require_default(require("../../../../../fields/getDefaultValue"));
var _iterateFields = require("./iterateFields");
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
var addFieldStatePromise = function() {
    var _ref = _async_to_generator(function(param) {
        var field, locale, user, state, path, passesCondition, fullData, data, id, operation, t, preferences, _field_admin, _data, _data1, fieldState, valueWithDefault, validationResult, _data2, _, arrayValue, _arrayValue_reduce, promises, rowMetadata, blocksValue, _blocksValue_reduce, promises1, rowMetadata1, _data3, promises2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    field = param.field, locale = param.locale, user = param.user, state = param.state, path = param.path, passesCondition = param.passesCondition, fullData = param.fullData, data = param.data, id = param.id, operation = param.operation, t = param.t, preferences = param.preferences;
                    if (!(0, _types.fieldAffectsData)(field)) return [
                        3,
                        12
                    ];
                    fieldState = {
                        valid: true,
                        value: undefined,
                        initialValue: undefined,
                        validate: field.validate,
                        condition: (_field_admin = field.admin) === null || _field_admin === void 0 ? void 0 : _field_admin.condition,
                        passesCondition: passesCondition
                    };
                    return [
                        4,
                        (0, _getDefaultValue.default)({
                            value: (_data = data) === null || _data === void 0 ? void 0 : _data[field.name],
                            defaultValue: field.defaultValue,
                            locale: locale,
                            user: user
                        })
                    ];
                case 1:
                    valueWithDefault = _state.sent();
                    if ((_data1 = data) === null || _data1 === void 0 ? void 0 : _data1[field.name]) {
                        data[field.name] = valueWithDefault;
                    }
                    validationResult = true;
                    if (!(typeof fieldState.validate === "function")) return [
                        3,
                        3
                    ];
                    return [
                        4,
                        fieldState.validate((_data2 = data) === null || _data2 === void 0 ? void 0 : _data2[field.name], _object_spread_props(_object_spread({}, field), {
                            data: fullData,
                            user: user,
                            siblingData: data,
                            id: id,
                            operation: operation,
                            t: t
                        }))
                    ];
                case 2:
                    validationResult = _state.sent();
                    _state.label = 3;
                case 3:
                    if (typeof validationResult === "string") {
                        fieldState.errorMessage = validationResult;
                        fieldState.valid = false;
                    } else {
                        fieldState.valid = true;
                    }
                    _ = field.type;
                    switch(_){
                        case "array":
                            return [
                                3,
                                4
                            ];
                        case "blocks":
                            return [
                                3,
                                6
                            ];
                        case "group":
                            return [
                                3,
                                8
                            ];
                    }
                    return [
                        3,
                        10
                    ];
                case 4:
                    arrayValue = Array.isArray(valueWithDefault) ? valueWithDefault : [];
                    _arrayValue_reduce = arrayValue.reduce(function(acc, row, i) {
                        var _row, _preferences_fields_, _preferences_fields, _preferences;
                        var rowPath = "".concat(path).concat(field.name, ".").concat(i, ".");
                        row.id = ((_row = row) === null || _row === void 0 ? void 0 : _row.id) || new _bsonobjectid.default().toHexString();
                        state["".concat(rowPath, "id")] = {
                            value: row.id,
                            initialValue: row.id,
                            valid: true
                        };
                        acc.promises.push((0, _iterateFields.iterateFields)({
                            state: state,
                            fields: field.fields,
                            data: row,
                            parentPassesCondition: passesCondition,
                            path: rowPath,
                            user: user,
                            fullData: fullData,
                            id: id,
                            locale: locale,
                            operation: operation,
                            t: t,
                            preferences: preferences
                        }));
                        var collapsedRowIDs = (_preferences = preferences) === null || _preferences === void 0 ? void 0 : (_preferences_fields = _preferences.fields) === null || _preferences_fields === void 0 ? void 0 : (_preferences_fields_ = _preferences_fields["".concat(path).concat(field.name)]) === null || _preferences_fields_ === void 0 ? void 0 : _preferences_fields_.collapsed;
                        acc.rowMetadata.push({
                            id: row.id,
                            collapsed: collapsedRowIDs === undefined ? field.admin.initCollapsed : collapsedRowIDs.includes(row.id),
                            childErrorPaths: new Set()
                        });
                        return acc;
                    }, {
                        promises: [],
                        rowMetadata: []
                    }), promises = _arrayValue_reduce.promises, rowMetadata = _arrayValue_reduce.rowMetadata;
                    return [
                        4,
                        Promise.all(promises)
                    ];
                case 5:
                    _state.sent();
                    // Add values to field state
                    if (valueWithDefault === null) {
                        fieldState.value = null;
                        fieldState.initialValue = null;
                    } else {
                        fieldState.value = arrayValue.length;
                        fieldState.initialValue = arrayValue.length;
                        if (arrayValue.length > 0) {
                            fieldState.disableFormData = true;
                        }
                    }
                    fieldState.rows = rowMetadata;
                    // Add field to state
                    state["".concat(path).concat(field.name)] = fieldState;
                    return [
                        3,
                        11
                    ];
                case 6:
                    blocksValue = Array.isArray(valueWithDefault) ? valueWithDefault : [];
                    _blocksValue_reduce = blocksValue.reduce(function(acc, row, i) {
                        var block = field.blocks.find(function(blockType) {
                            return blockType.slug === row.blockType;
                        });
                        var rowPath = "".concat(path).concat(field.name, ".").concat(i, ".");
                        if (block) {
                            var _row, _preferences_fields_, _preferences_fields, _preferences;
                            row.id = ((_row = row) === null || _row === void 0 ? void 0 : _row.id) || new _bsonobjectid.default().toHexString();
                            state["".concat(rowPath, "id")] = {
                                value: row.id,
                                initialValue: row.id,
                                valid: true
                            };
                            state["".concat(rowPath, "blockType")] = {
                                value: row.blockType,
                                initialValue: row.blockType,
                                valid: true
                            };
                            state["".concat(rowPath, "blockName")] = {
                                value: row.blockName,
                                initialValue: row.blockName,
                                valid: true
                            };
                            acc.promises.push((0, _iterateFields.iterateFields)({
                                state: state,
                                fields: block.fields,
                                data: row,
                                fullData: fullData,
                                parentPassesCondition: passesCondition,
                                path: rowPath,
                                user: user,
                                locale: locale,
                                operation: operation,
                                id: id,
                                t: t,
                                preferences: preferences
                            }));
                            var collapsedRowIDs = (_preferences = preferences) === null || _preferences === void 0 ? void 0 : (_preferences_fields = _preferences.fields) === null || _preferences_fields === void 0 ? void 0 : (_preferences_fields_ = _preferences_fields["".concat(path).concat(field.name)]) === null || _preferences_fields_ === void 0 ? void 0 : _preferences_fields_.collapsed;
                            acc.rowMetadata.push({
                                id: row.id,
                                collapsed: collapsedRowIDs === undefined ? field.admin.initCollapsed : collapsedRowIDs.includes(row.id),
                                blockType: row.blockType,
                                childErrorPaths: new Set()
                            });
                        }
                        return acc;
                    }, {
                        promises: [],
                        rowMetadata: []
                    }), promises1 = _blocksValue_reduce.promises, rowMetadata1 = _blocksValue_reduce.rowMetadata;
                    return [
                        4,
                        Promise.all(promises1)
                    ];
                case 7:
                    _state.sent();
                    // Add values to field state
                    if (valueWithDefault === null) {
                        fieldState.value = null;
                        fieldState.initialValue = null;
                    } else {
                        fieldState.value = blocksValue.length;
                        fieldState.initialValue = blocksValue.length;
                        if (blocksValue.length > 0) {
                            fieldState.disableFormData = true;
                        }
                    }
                    fieldState.rows = rowMetadata1;
                    // Add field to state
                    state["".concat(path).concat(field.name)] = fieldState;
                    return [
                        3,
                        11
                    ];
                case 8:
                    return [
                        4,
                        (0, _iterateFields.iterateFields)({
                            state: state,
                            id: id,
                            operation: operation,
                            fields: field.fields,
                            data: ((_data3 = data) === null || _data3 === void 0 ? void 0 : _data3[field.name]) || {},
                            fullData: fullData,
                            parentPassesCondition: passesCondition,
                            path: "".concat(path).concat(field.name, "."),
                            locale: locale,
                            user: user,
                            t: t,
                            preferences: preferences
                        })
                    ];
                case 9:
                    _state.sent();
                    return [
                        3,
                        11
                    ];
                case 10:
                    {
                        fieldState.value = valueWithDefault;
                        fieldState.initialValue = valueWithDefault;
                        // Add field to state
                        state["".concat(path).concat(field.name)] = fieldState;
                        return [
                            3,
                            11
                        ];
                    }
                    _state.label = 11;
                case 11:
                    return [
                        3,
                        16
                    ];
                case 12:
                    if (!(0, _types.fieldHasSubFields)(field)) return [
                        3,
                        14
                    ];
                    // Handle field types that do not use names (row, etc)
                    return [
                        4,
                        (0, _iterateFields.iterateFields)({
                            state: state,
                            fields: field.fields,
                            data: data,
                            parentPassesCondition: passesCondition,
                            path: path,
                            user: user,
                            fullData: fullData,
                            id: id,
                            locale: locale,
                            operation: operation,
                            t: t,
                            preferences: preferences
                        })
                    ];
                case 13:
                    _state.sent();
                    return [
                        3,
                        16
                    ];
                case 14:
                    if (!(field.type === "tabs")) return [
                        3,
                        16
                    ];
                    promises2 = field.tabs.map(function(tab) {
                        var _data;
                        return (0, _iterateFields.iterateFields)({
                            state: state,
                            fields: tab.fields,
                            data: (0, _types.tabHasName)(tab) ? (_data = data) === null || _data === void 0 ? void 0 : _data[tab.name] : data,
                            parentPassesCondition: passesCondition,
                            path: (0, _types.tabHasName)(tab) ? "".concat(path).concat(tab.name, ".") : path,
                            user: user,
                            fullData: fullData,
                            id: id,
                            locale: locale,
                            operation: operation,
                            t: t,
                            preferences: preferences
                        });
                    });
                    return [
                        4,
                        Promise.all(promises2)
                    ];
                case 15:
                    _state.sent();
                    _state.label = 16;
                case 16:
                    return [
                        2
                    ];
            }
        });
    });
    return function addFieldStatePromise(_) {
        return _ref.apply(this, arguments);
    };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vYnVpbGRTdGF0ZUZyb21TY2hlbWEvYWRkRmllbGRTdGF0ZVByb21pc2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBPYmplY3RJRCBmcm9tICdic29uLW9iamVjdGlkJztcbmltcG9ydCB0eXBlIHsgVEZ1bmN0aW9uIH0gZnJvbSAnaTE4bmV4dCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYXV0aCc7XG5pbXBvcnQge1xuICBOb25QcmVzZW50YXRpb25hbEZpZWxkLFxuICBmaWVsZEFmZmVjdHNEYXRhLFxuICBmaWVsZEhhc1N1YkZpZWxkcyxcbiAgdGFiSGFzTmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgZ2V0VmFsdWVXaXRoRGVmYXVsdCBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvZ2V0RGVmYXVsdFZhbHVlJztcbmltcG9ydCB7IEZpZWxkcywgRm9ybUZpZWxkLCBEYXRhIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXRlcmF0ZUZpZWxkcyB9IGZyb20gJy4vaXRlcmF0ZUZpZWxkcyc7XG5cbnR5cGUgQXJncyA9IHtcbiAgZmllbGQ6IE5vblByZXNlbnRhdGlvbmFsRmllbGRcbiAgbG9jYWxlOiBzdHJpbmdcbiAgdXNlcjogVXNlclxuICBzdGF0ZTogRmllbGRzXG4gIHBhdGg6IHN0cmluZ1xuICBwYXNzZXNDb25kaXRpb246IGJvb2xlYW5cbiAgaWQ6IHN0cmluZyB8IG51bWJlclxuICBvcGVyYXRpb246ICdjcmVhdGUnIHwgJ3VwZGF0ZSdcbiAgZGF0YTogRGF0YVxuICBmdWxsRGF0YTogRGF0YVxuICB0OiBURnVuY3Rpb25cbiAgcHJlZmVyZW5jZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiB1bmtub3duXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFkZEZpZWxkU3RhdGVQcm9taXNlID0gYXN5bmMgKHtcbiAgZmllbGQsXG4gIGxvY2FsZSxcbiAgdXNlcixcbiAgc3RhdGUsXG4gIHBhdGgsXG4gIHBhc3Nlc0NvbmRpdGlvbixcbiAgZnVsbERhdGEsXG4gIGRhdGEsXG4gIGlkLFxuICBvcGVyYXRpb24sXG4gIHQsXG4gIHByZWZlcmVuY2VzLFxufTogQXJncyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoZmllbGRBZmZlY3RzRGF0YShmaWVsZCkpIHtcbiAgICBjb25zdCBmaWVsZFN0YXRlOiBGb3JtRmllbGQgPSB7XG4gICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICBpbml0aWFsVmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgIHZhbGlkYXRlOiBmaWVsZC52YWxpZGF0ZSxcbiAgICAgIGNvbmRpdGlvbjogZmllbGQuYWRtaW4/LmNvbmRpdGlvbixcbiAgICAgIHBhc3Nlc0NvbmRpdGlvbixcbiAgICB9O1xuXG4gICAgY29uc3QgdmFsdWVXaXRoRGVmYXVsdCA9IGF3YWl0IGdldFZhbHVlV2l0aERlZmF1bHQoeyB2YWx1ZTogZGF0YT8uW2ZpZWxkLm5hbWVdLCBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHRWYWx1ZSwgbG9jYWxlLCB1c2VyIH0pO1xuICAgIGlmIChkYXRhPy5bZmllbGQubmFtZV0pIHtcbiAgICAgIGRhdGFbZmllbGQubmFtZV0gPSB2YWx1ZVdpdGhEZWZhdWx0O1xuICAgIH1cblxuICAgIGxldCB2YWxpZGF0aW9uUmVzdWx0OiBib29sZWFuIHwgc3RyaW5nID0gdHJ1ZTtcblxuICAgIGlmICh0eXBlb2YgZmllbGRTdGF0ZS52YWxpZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFsaWRhdGlvblJlc3VsdCA9IGF3YWl0IGZpZWxkU3RhdGUudmFsaWRhdGUoZGF0YT8uW2ZpZWxkLm5hbWVdLCB7XG4gICAgICAgIC4uLmZpZWxkLFxuICAgICAgICBkYXRhOiBmdWxsRGF0YSxcbiAgICAgICAgdXNlcixcbiAgICAgICAgc2libGluZ0RhdGE6IGRhdGEsXG4gICAgICAgIGlkLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIHQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbGlkYXRpb25SZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBmaWVsZFN0YXRlLmVycm9yTWVzc2FnZSA9IHZhbGlkYXRpb25SZXN1bHQ7XG4gICAgICBmaWVsZFN0YXRlLnZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZWxkU3RhdGUudmFsaWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZmllbGQudHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOiB7XG4gICAgICAgIGNvbnN0IGFycmF5VmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbHVlV2l0aERlZmF1bHQpID8gdmFsdWVXaXRoRGVmYXVsdCA6IFtdO1xuICAgICAgICBjb25zdCB7IHByb21pc2VzLCByb3dNZXRhZGF0YSB9ID0gYXJyYXlWYWx1ZS5yZWR1Y2UoKGFjYywgcm93LCBpKSA9PiB7XG4gICAgICAgICAgY29uc3Qgcm93UGF0aCA9IGAke3BhdGh9JHtmaWVsZC5uYW1lfS4ke2l9LmA7XG4gICAgICAgICAgcm93LmlkID0gcm93Py5pZCB8fCBuZXcgT2JqZWN0SUQoKS50b0hleFN0cmluZygpO1xuXG4gICAgICAgICAgc3RhdGVbYCR7cm93UGF0aH1pZGBdID0ge1xuICAgICAgICAgICAgdmFsdWU6IHJvdy5pZCxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogcm93LmlkLFxuICAgICAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGFjYy5wcm9taXNlcy5wdXNoKGl0ZXJhdGVGaWVsZHMoe1xuICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkcyxcbiAgICAgICAgICAgIGRhdGE6IHJvdyxcbiAgICAgICAgICAgIHBhcmVudFBhc3Nlc0NvbmRpdGlvbjogcGFzc2VzQ29uZGl0aW9uLFxuICAgICAgICAgICAgcGF0aDogcm93UGF0aCxcbiAgICAgICAgICAgIHVzZXIsXG4gICAgICAgICAgICBmdWxsRGF0YSxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICAgICAgdCxcbiAgICAgICAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGNvbnN0IGNvbGxhcHNlZFJvd0lEcyA9IHByZWZlcmVuY2VzPy5maWVsZHM/LltgJHtwYXRofSR7ZmllbGQubmFtZX1gXT8uY29sbGFwc2VkO1xuXG4gICAgICAgICAgYWNjLnJvd01ldGFkYXRhLnB1c2goe1xuICAgICAgICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgICAgICAgIGNvbGxhcHNlZDogY29sbGFwc2VkUm93SURzID09PSB1bmRlZmluZWQgPyBmaWVsZC5hZG1pbi5pbml0Q29sbGFwc2VkIDogY29sbGFwc2VkUm93SURzLmluY2x1ZGVzKHJvdy5pZCksXG4gICAgICAgICAgICBjaGlsZEVycm9yUGF0aHM6IG5ldyBTZXQoKSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBwcm9taXNlczogW10sXG4gICAgICAgICAgcm93TWV0YWRhdGE6IFtdLFxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cbiAgICAgICAgLy8gQWRkIHZhbHVlcyB0byBmaWVsZCBzdGF0ZVxuICAgICAgICBpZiAodmFsdWVXaXRoRGVmYXVsdCA9PT0gbnVsbCkge1xuICAgICAgICAgIGZpZWxkU3RhdGUudmFsdWUgPSBudWxsO1xuICAgICAgICAgIGZpZWxkU3RhdGUuaW5pdGlhbFZhbHVlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWVsZFN0YXRlLnZhbHVlID0gYXJyYXlWYWx1ZS5sZW5ndGg7XG4gICAgICAgICAgZmllbGRTdGF0ZS5pbml0aWFsVmFsdWUgPSBhcnJheVZhbHVlLmxlbmd0aDtcblxuICAgICAgICAgIGlmIChhcnJheVZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZpZWxkU3RhdGUuZGlzYWJsZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmaWVsZFN0YXRlLnJvd3MgPSByb3dNZXRhZGF0YTtcblxuICAgICAgICAvLyBBZGQgZmllbGQgdG8gc3RhdGVcbiAgICAgICAgc3RhdGVbYCR7cGF0aH0ke2ZpZWxkLm5hbWV9YF0gPSBmaWVsZFN0YXRlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlICdibG9ja3MnOiB7XG4gICAgICAgIGNvbnN0IGJsb2Nrc1ZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWx1ZVdpdGhEZWZhdWx0KSA/IHZhbHVlV2l0aERlZmF1bHQgOiBbXTtcblxuICAgICAgICBjb25zdCB7IHByb21pc2VzLCByb3dNZXRhZGF0YSB9ID0gYmxvY2tzVmFsdWUucmVkdWNlKChhY2MsIHJvdywgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGJsb2NrID0gZmllbGQuYmxvY2tzLmZpbmQoKGJsb2NrVHlwZSkgPT4gYmxvY2tUeXBlLnNsdWcgPT09IHJvdy5ibG9ja1R5cGUpO1xuICAgICAgICAgIGNvbnN0IHJvd1BhdGggPSBgJHtwYXRofSR7ZmllbGQubmFtZX0uJHtpfS5gO1xuXG4gICAgICAgICAgaWYgKGJsb2NrKSB7XG4gICAgICAgICAgICByb3cuaWQgPSByb3c/LmlkIHx8IG5ldyBPYmplY3RJRCgpLnRvSGV4U3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHN0YXRlW2Ake3Jvd1BhdGh9aWRgXSA9IHtcbiAgICAgICAgICAgICAgdmFsdWU6IHJvdy5pZCxcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiByb3cuaWQsXG4gICAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc3RhdGVbYCR7cm93UGF0aH1ibG9ja1R5cGVgXSA9IHtcbiAgICAgICAgICAgICAgdmFsdWU6IHJvdy5ibG9ja1R5cGUsXG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogcm93LmJsb2NrVHlwZSxcbiAgICAgICAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBzdGF0ZVtgJHtyb3dQYXRofWJsb2NrTmFtZWBdID0ge1xuICAgICAgICAgICAgICB2YWx1ZTogcm93LmJsb2NrTmFtZSxcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiByb3cuYmxvY2tOYW1lLFxuICAgICAgICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGFjYy5wcm9taXNlcy5wdXNoKGl0ZXJhdGVGaWVsZHMoe1xuICAgICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgICAgZmllbGRzOiBibG9jay5maWVsZHMsXG4gICAgICAgICAgICAgIGRhdGE6IHJvdyxcbiAgICAgICAgICAgICAgZnVsbERhdGEsXG4gICAgICAgICAgICAgIHBhcmVudFBhc3Nlc0NvbmRpdGlvbjogcGFzc2VzQ29uZGl0aW9uLFxuICAgICAgICAgICAgICBwYXRoOiByb3dQYXRoLFxuICAgICAgICAgICAgICB1c2VyLFxuICAgICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgIHQsXG4gICAgICAgICAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzZWRSb3dJRHMgPSBwcmVmZXJlbmNlcz8uZmllbGRzPy5bYCR7cGF0aH0ke2ZpZWxkLm5hbWV9YF0/LmNvbGxhcHNlZDtcblxuICAgICAgICAgICAgYWNjLnJvd01ldGFkYXRhLnB1c2goe1xuICAgICAgICAgICAgICBpZDogcm93LmlkLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGNvbGxhcHNlZFJvd0lEcyA9PT0gdW5kZWZpbmVkID8gZmllbGQuYWRtaW4uaW5pdENvbGxhcHNlZCA6IGNvbGxhcHNlZFJvd0lEcy5pbmNsdWRlcyhyb3cuaWQpLFxuICAgICAgICAgICAgICBibG9ja1R5cGU6IHJvdy5ibG9ja1R5cGUsXG4gICAgICAgICAgICAgIGNoaWxkRXJyb3JQYXRoczogbmV3IFNldCgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge1xuICAgICAgICAgIHByb21pc2VzOiBbXSxcbiAgICAgICAgICByb3dNZXRhZGF0YTogW10sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcblxuICAgICAgICAvLyBBZGQgdmFsdWVzIHRvIGZpZWxkIHN0YXRlXG4gICAgICAgIGlmICh2YWx1ZVdpdGhEZWZhdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgZmllbGRTdGF0ZS52YWx1ZSA9IG51bGw7XG4gICAgICAgICAgZmllbGRTdGF0ZS5pbml0aWFsVmFsdWUgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpZWxkU3RhdGUudmFsdWUgPSBibG9ja3NWYWx1ZS5sZW5ndGg7XG4gICAgICAgICAgZmllbGRTdGF0ZS5pbml0aWFsVmFsdWUgPSBibG9ja3NWYWx1ZS5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAoYmxvY2tzVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmllbGRTdGF0ZS5kaXNhYmxlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZpZWxkU3RhdGUucm93cyA9IHJvd01ldGFkYXRhO1xuXG4gICAgICAgIC8vIEFkZCBmaWVsZCB0byBzdGF0ZVxuICAgICAgICBzdGF0ZVtgJHtwYXRofSR7ZmllbGQubmFtZX1gXSA9IGZpZWxkU3RhdGU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ2dyb3VwJzoge1xuICAgICAgICBhd2FpdCBpdGVyYXRlRmllbGRzKHtcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgICAgZGF0YTogZGF0YT8uW2ZpZWxkLm5hbWVdIHx8IHt9LFxuICAgICAgICAgIGZ1bGxEYXRhLFxuICAgICAgICAgIHBhcmVudFBhc3Nlc0NvbmRpdGlvbjogcGFzc2VzQ29uZGl0aW9uLFxuICAgICAgICAgIHBhdGg6IGAke3BhdGh9JHtmaWVsZC5uYW1lfS5gLFxuICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICB1c2VyLFxuICAgICAgICAgIHQsXG4gICAgICAgICAgcHJlZmVyZW5jZXMsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGZpZWxkU3RhdGUudmFsdWUgPSB2YWx1ZVdpdGhEZWZhdWx0O1xuICAgICAgICBmaWVsZFN0YXRlLmluaXRpYWxWYWx1ZSA9IHZhbHVlV2l0aERlZmF1bHQ7XG5cbiAgICAgICAgLy8gQWRkIGZpZWxkIHRvIHN0YXRlXG4gICAgICAgIHN0YXRlW2Ake3BhdGh9JHtmaWVsZC5uYW1lfWBdID0gZmllbGRTdGF0ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoZmllbGRIYXNTdWJGaWVsZHMoZmllbGQpKSB7XG4gICAgLy8gSGFuZGxlIGZpZWxkIHR5cGVzIHRoYXQgZG8gbm90IHVzZSBuYW1lcyAocm93LCBldGMpXG4gICAgYXdhaXQgaXRlcmF0ZUZpZWxkcyh7XG4gICAgICBzdGF0ZSxcbiAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgZGF0YSxcbiAgICAgIHBhcmVudFBhc3Nlc0NvbmRpdGlvbjogcGFzc2VzQ29uZGl0aW9uLFxuICAgICAgcGF0aCxcbiAgICAgIHVzZXIsXG4gICAgICBmdWxsRGF0YSxcbiAgICAgIGlkLFxuICAgICAgbG9jYWxlLFxuICAgICAgb3BlcmF0aW9uLFxuICAgICAgdCxcbiAgICAgIHByZWZlcmVuY2VzLFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICd0YWJzJykge1xuICAgIGNvbnN0IHByb21pc2VzID0gZmllbGQudGFicy5tYXAoKHRhYikgPT4gaXRlcmF0ZUZpZWxkcyh7XG4gICAgICBzdGF0ZSxcbiAgICAgIGZpZWxkczogdGFiLmZpZWxkcyxcbiAgICAgIGRhdGE6IHRhYkhhc05hbWUodGFiKSA/IGRhdGE/Llt0YWIubmFtZV0gOiBkYXRhLFxuICAgICAgcGFyZW50UGFzc2VzQ29uZGl0aW9uOiBwYXNzZXNDb25kaXRpb24sXG4gICAgICBwYXRoOiB0YWJIYXNOYW1lKHRhYikgPyBgJHtwYXRofSR7dGFiLm5hbWV9LmAgOiBwYXRoLFxuICAgICAgdXNlcixcbiAgICAgIGZ1bGxEYXRhLFxuICAgICAgaWQsXG4gICAgICBsb2NhbGUsXG4gICAgICBvcGVyYXRpb24sXG4gICAgICB0LFxuICAgICAgcHJlZmVyZW5jZXMsXG4gICAgfSkpO1xuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImFkZEZpZWxkU3RhdGVQcm9taXNlIiwiZmllbGQiLCJsb2NhbGUiLCJ1c2VyIiwic3RhdGUiLCJwYXRoIiwicGFzc2VzQ29uZGl0aW9uIiwiZnVsbERhdGEiLCJkYXRhIiwiaWQiLCJvcGVyYXRpb24iLCJ0IiwicHJlZmVyZW5jZXMiLCJmaWVsZFN0YXRlIiwidmFsdWVXaXRoRGVmYXVsdCIsInZhbGlkYXRpb25SZXN1bHQiLCJhcnJheVZhbHVlIiwicHJvbWlzZXMiLCJyb3dNZXRhZGF0YSIsImJsb2Nrc1ZhbHVlIiwiZmllbGRBZmZlY3RzRGF0YSIsInZhbGlkIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJpbml0aWFsVmFsdWUiLCJ2YWxpZGF0ZSIsImNvbmRpdGlvbiIsImFkbWluIiwiZ2V0VmFsdWVXaXRoRGVmYXVsdCIsIm5hbWUiLCJkZWZhdWx0VmFsdWUiLCJzaWJsaW5nRGF0YSIsImVycm9yTWVzc2FnZSIsInR5cGUiLCJBcnJheSIsImlzQXJyYXkiLCJyZWR1Y2UiLCJhY2MiLCJyb3ciLCJpIiwicm93UGF0aCIsIk9iamVjdElEIiwidG9IZXhTdHJpbmciLCJwdXNoIiwiaXRlcmF0ZUZpZWxkcyIsImZpZWxkcyIsInBhcmVudFBhc3Nlc0NvbmRpdGlvbiIsImNvbGxhcHNlZFJvd0lEcyIsImNvbGxhcHNlZCIsImluaXRDb2xsYXBzZWQiLCJpbmNsdWRlcyIsImNoaWxkRXJyb3JQYXRocyIsIlNldCIsIlByb21pc2UiLCJhbGwiLCJsZW5ndGgiLCJkaXNhYmxlRm9ybURhdGEiLCJyb3dzIiwiYmxvY2siLCJibG9ja3MiLCJmaW5kIiwiYmxvY2tUeXBlIiwic2x1ZyIsImJsb2NrTmFtZSIsImZpZWxkSGFzU3ViRmllbGRzIiwidGFicyIsIm1hcCIsInRhYiIsInRhYkhhc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7OzsrQkErQnZCQTs7O2VBQUFBOzs7bUVBOUJRO3FCQVFkO3NFQUN5Qjs2QkFFRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQnZCLElBQU1BO2VBQXVCLG9CQUFBO1lBQ2xDQyxPQUNB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
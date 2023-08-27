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
import ObjectID from "bson-objectid";
import { fieldAffectsData, fieldHasSubFields, tabHasName } from "../../../../../fields/config/types";
import getValueWithDefault from "../../../../../fields/getDefaultValue";
import { iterateFields } from "./iterateFields";
export var addFieldStatePromise = function() {
    var _ref = _async_to_generator(function(param) {
        var field, locale, user, state, path, passesCondition, fullData, data, id, operation, t, preferences, _field_admin, _data, _data1, fieldState, valueWithDefault, validationResult, _data2, _, arrayValue, _arrayValue_reduce, promises, rowMetadata, blocksValue, _blocksValue_reduce, promises1, rowMetadata1, _data3, promises2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    field = param.field, locale = param.locale, user = param.user, state = param.state, path = param.path, passesCondition = param.passesCondition, fullData = param.fullData, data = param.data, id = param.id, operation = param.operation, t = param.t, preferences = param.preferences;
                    if (!fieldAffectsData(field)) return [
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
                        getValueWithDefault({
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
                        row.id = ((_row = row) === null || _row === void 0 ? void 0 : _row.id) || new ObjectID().toHexString();
                        state["".concat(rowPath, "id")] = {
                            value: row.id,
                            initialValue: row.id,
                            valid: true
                        };
                        acc.promises.push(iterateFields({
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
                            row.id = ((_row = row) === null || _row === void 0 ? void 0 : _row.id) || new ObjectID().toHexString();
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
                            acc.promises.push(iterateFields({
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
                        iterateFields({
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
                    if (!fieldHasSubFields(field)) return [
                        3,
                        14
                    ];
                    // Handle field types that do not use names (row, etc)
                    return [
                        4,
                        iterateFields({
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
                        return iterateFields({
                            state: state,
                            fields: tab.fields,
                            data: tabHasName(tab) ? (_data = data) === null || _data === void 0 ? void 0 : _data[tab.name] : data,
                            parentPassesCondition: passesCondition,
                            path: tabHasName(tab) ? "".concat(path).concat(tab.name, ".") : path,
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vYnVpbGRTdGF0ZUZyb21TY2hlbWEvYWRkRmllbGRTdGF0ZVByb21pc2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBPYmplY3RJRCBmcm9tICdic29uLW9iamVjdGlkJztcbmltcG9ydCB0eXBlIHsgVEZ1bmN0aW9uIH0gZnJvbSAnaTE4bmV4dCc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vYXV0aCc7XG5pbXBvcnQge1xuICBOb25QcmVzZW50YXRpb25hbEZpZWxkLFxuICBmaWVsZEFmZmVjdHNEYXRhLFxuICBmaWVsZEhhc1N1YkZpZWxkcyxcbiAgdGFiSGFzTmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgZ2V0VmFsdWVXaXRoRGVmYXVsdCBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvZ2V0RGVmYXVsdFZhbHVlJztcbmltcG9ydCB7IEZpZWxkcywgRm9ybUZpZWxkLCBEYXRhIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXRlcmF0ZUZpZWxkcyB9IGZyb20gJy4vaXRlcmF0ZUZpZWxkcyc7XG5cbnR5cGUgQXJncyA9IHtcbiAgZmllbGQ6IE5vblByZXNlbnRhdGlvbmFsRmllbGRcbiAgbG9jYWxlOiBzdHJpbmdcbiAgdXNlcjogVXNlclxuICBzdGF0ZTogRmllbGRzXG4gIHBhdGg6IHN0cmluZ1xuICBwYXNzZXNDb25kaXRpb246IGJvb2xlYW5cbiAgaWQ6IHN0cmluZyB8IG51bWJlclxuICBvcGVyYXRpb246ICdjcmVhdGUnIHwgJ3VwZGF0ZSdcbiAgZGF0YTogRGF0YVxuICBmdWxsRGF0YTogRGF0YVxuICB0OiBURnVuY3Rpb25cbiAgcHJlZmVyZW5jZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiB1bmtub3duXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFkZEZpZWxkU3RhdGVQcm9taXNlID0gYXN5bmMgKHtcbiAgZmllbGQsXG4gIGxvY2FsZSxcbiAgdXNlcixcbiAgc3RhdGUsXG4gIHBhdGgsXG4gIHBhc3Nlc0NvbmRpdGlvbixcbiAgZnVsbERhdGEsXG4gIGRhdGEsXG4gIGlkLFxuICBvcGVyYXRpb24sXG4gIHQsXG4gIHByZWZlcmVuY2VzLFxufTogQXJncyk6IFByb21pc2U8dm9pZD4gPT4ge1xuICBpZiAoZmllbGRBZmZlY3RzRGF0YShmaWVsZCkpIHtcbiAgICBjb25zdCBmaWVsZFN0YXRlOiBGb3JtRmllbGQgPSB7XG4gICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICBpbml0aWFsVmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgIHZhbGlkYXRlOiBmaWVsZC52YWxpZGF0ZSxcbiAgICAgIGNvbmRpdGlvbjogZmllbGQuYWRtaW4/LmNvbmRpdGlvbixcbiAgICAgIHBhc3Nlc0NvbmRpdGlvbixcbiAgICB9O1xuXG4gICAgY29uc3QgdmFsdWVXaXRoRGVmYXVsdCA9IGF3YWl0IGdldFZhbHVlV2l0aERlZmF1bHQoeyB2YWx1ZTogZGF0YT8uW2ZpZWxkLm5hbWVdLCBkZWZhdWx0VmFsdWU6IGZpZWxkLmRlZmF1bHRWYWx1ZSwgbG9jYWxlLCB1c2VyIH0pO1xuICAgIGlmIChkYXRhPy5bZmllbGQubmFtZV0pIHtcbiAgICAgIGRhdGFbZmllbGQubmFtZV0gPSB2YWx1ZVdpdGhEZWZhdWx0O1xuICAgIH1cblxuICAgIGxldCB2YWxpZGF0aW9uUmVzdWx0OiBib29sZWFuIHwgc3RyaW5nID0gdHJ1ZTtcblxuICAgIGlmICh0eXBlb2YgZmllbGRTdGF0ZS52YWxpZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFsaWRhdGlvblJlc3VsdCA9IGF3YWl0IGZpZWxkU3RhdGUudmFsaWRhdGUoZGF0YT8uW2ZpZWxkLm5hbWVdLCB7XG4gICAgICAgIC4uLmZpZWxkLFxuICAgICAgICBkYXRhOiBmdWxsRGF0YSxcbiAgICAgICAgdXNlcixcbiAgICAgICAgc2libGluZ0RhdGE6IGRhdGEsXG4gICAgICAgIGlkLFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIHQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbGlkYXRpb25SZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBmaWVsZFN0YXRlLmVycm9yTWVzc2FnZSA9IHZhbGlkYXRpb25SZXN1bHQ7XG4gICAgICBmaWVsZFN0YXRlLnZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZWxkU3RhdGUudmFsaWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZmllbGQudHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOiB7XG4gICAgICAgIGNvbnN0IGFycmF5VmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbHVlV2l0aERlZmF1bHQpID8gdmFsdWVXaXRoRGVmYXVsdCA6IFtdO1xuICAgICAgICBjb25zdCB7IHByb21pc2VzLCByb3dNZXRhZGF0YSB9ID0gYXJyYXlWYWx1ZS5yZWR1Y2UoKGFjYywgcm93LCBpKSA9PiB7XG4gICAgICAgICAgY29uc3Qgcm93UGF0aCA9IGAke3BhdGh9JHtmaWVsZC5uYW1lfS4ke2l9LmA7XG4gICAgICAgICAgcm93LmlkID0gcm93Py5pZCB8fCBuZXcgT2JqZWN0SUQoKS50b0hleFN0cmluZygpO1xuXG4gICAgICAgICAgc3RhdGVbYCR7cm93UGF0aH1pZGBdID0ge1xuICAgICAgICAgICAgdmFsdWU6IHJvdy5pZCxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogcm93LmlkLFxuICAgICAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGFjYy5wcm9taXNlcy5wdXNoKGl0ZXJhdGVGaWVsZHMoe1xuICAgICAgICAgICAgc3RhdGUsXG4gICAgICAgICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkcyxcbiAgICAgICAgICAgIGRhdGE6IHJvdyxcbiAgICAgICAgICAgIHBhcmVudFBhc3Nlc0NvbmRpdGlvbjogcGFzc2VzQ29uZGl0aW9uLFxuICAgICAgICAgICAgcGF0aDogcm93UGF0aCxcbiAgICAgICAgICAgIHVzZXIsXG4gICAgICAgICAgICBmdWxsRGF0YSxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgb3BlcmF0aW9uLFxuICAgICAgICAgICAgdCxcbiAgICAgICAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGNvbnN0IGNvbGxhcHNlZFJvd0lEcyA9IHByZWZlcmVuY2VzPy5maWVsZHM/LltgJHtwYXRofSR7ZmllbGQubmFtZX1gXT8uY29sbGFwc2VkO1xuXG4gICAgICAgICAgYWNjLnJvd01ldGFkYXRhLnB1c2goe1xuICAgICAgICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgICAgICAgIGNvbGxhcHNlZDogY29sbGFwc2VkUm93SURzID09PSB1bmRlZmluZWQgPyBmaWVsZC5hZG1pbi5pbml0Q29sbGFwc2VkIDogY29sbGFwc2VkUm93SURzLmluY2x1ZGVzKHJvdy5pZCksXG4gICAgICAgICAgICBjaGlsZEVycm9yUGF0aHM6IG5ldyBTZXQoKSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBwcm9taXNlczogW10sXG4gICAgICAgICAgcm93TWV0YWRhdGE6IFtdLFxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cbiAgICAgICAgLy8gQWRkIHZhbHVlcyB0byBmaWVsZCBzdGF0ZVxuICAgICAgICBpZiAodmFsdWVXaXRoRGVmYXVsdCA9PT0gbnVsbCkge1xuICAgICAgICAgIGZpZWxkU3RhdGUudmFsdWUgPSBudWxsO1xuICAgICAgICAgIGZpZWxkU3RhdGUuaW5pdGlhbFZhbHVlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWVsZFN0YXRlLnZhbHVlID0gYXJyYXlWYWx1ZS5sZW5ndGg7XG4gICAgICAgICAgZmllbGRTdGF0ZS5pbml0aWFsVmFsdWUgPSBhcnJheVZhbHVlLmxlbmd0aDtcblxuICAgICAgICAgIGlmIChhcnJheVZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZpZWxkU3RhdGUuZGlzYWJsZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmaWVsZFN0YXRlLnJvd3MgPSByb3dNZXRhZGF0YTtcblxuICAgICAgICAvLyBBZGQgZmllbGQgdG8gc3RhdGVcbiAgICAgICAgc3RhdGVbYCR7cGF0aH0ke2ZpZWxkLm5hbWV9YF0gPSBmaWVsZFN0YXRlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBjYXNlICdibG9ja3MnOiB7XG4gICAgICAgIGNvbnN0IGJsb2Nrc1ZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWx1ZVdpdGhEZWZhdWx0KSA/IHZhbHVlV2l0aERlZmF1bHQgOiBbXTtcblxuICAgICAgICBjb25zdCB7IHByb21pc2VzLCByb3dNZXRhZGF0YSB9ID0gYmxvY2tzVmFsdWUucmVkdWNlKChhY2MsIHJvdywgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGJsb2NrID0gZmllbGQuYmxvY2tzLmZpbmQoKGJsb2NrVHlwZSkgPT4gYmxvY2tUeXBlLnNsdWcgPT09IHJvdy5ibG9ja1R5cGUpO1xuICAgICAgICAgIGNvbnN0IHJvd1BhdGggPSBgJHtwYXRofSR7ZmllbGQubmFtZX0uJHtpfS5gO1xuXG4gICAgICAgICAgaWYgKGJsb2NrKSB7XG4gICAgICAgICAgICByb3cuaWQgPSByb3c/LmlkIHx8IG5ldyBPYmplY3RJRCgpLnRvSGV4U3RyaW5nKCk7XG5cbiAgICAgICAgICAgIHN0YXRlW2Ake3Jvd1BhdGh9aWRgXSA9IHtcbiAgICAgICAgICAgICAgdmFsdWU6IHJvdy5pZCxcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiByb3cuaWQsXG4gICAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc3RhdGVbYCR7cm93UGF0aH1ibG9ja1R5cGVgXSA9IHtcbiAgICAgICAgICAgICAgdmFsdWU6IHJvdy5ibG9ja1R5cGUsXG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogcm93LmJsb2NrVHlwZSxcbiAgICAgICAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBzdGF0ZVtgJHtyb3dQYXRofWJsb2NrTmFtZWBdID0ge1xuICAgICAgICAgICAgICB2YWx1ZTogcm93LmJsb2NrTmFtZSxcbiAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiByb3cuYmxvY2tOYW1lLFxuICAgICAgICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGFjYy5wcm9taXNlcy5wdXNoKGl0ZXJhdGVGaWVsZHMoe1xuICAgICAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICAgICAgZmllbGRzOiBibG9jay5maWVsZHMsXG4gICAgICAgICAgICAgIGRhdGE6IHJvdyxcbiAgICAgICAgICAgICAgZnVsbERhdGEsXG4gICAgICAgICAgICAgIHBhcmVudFBhc3Nlc0NvbmRpdGlvbjogcGFzc2VzQ29uZGl0aW9uLFxuICAgICAgICAgICAgICBwYXRoOiByb3dQYXRoLFxuICAgICAgICAgICAgICB1c2VyLFxuICAgICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICAgIG9wZXJhdGlvbixcbiAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgIHQsXG4gICAgICAgICAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzZWRSb3dJRHMgPSBwcmVmZXJlbmNlcz8uZmllbGRzPy5bYCR7cGF0aH0ke2ZpZWxkLm5hbWV9YF0/LmNvbGxhcHNlZDtcblxuICAgICAgICAgICAgYWNjLnJvd01ldGFkYXRhLnB1c2goe1xuICAgICAgICAgICAgICBpZDogcm93LmlkLFxuICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGNvbGxhcHNlZFJvd0lEcyA9PT0gdW5kZWZpbmVkID8gZmllbGQuYWRtaW4uaW5pdENvbGxhcHNlZCA6IGNvbGxhcHNlZFJvd0lEcy5pbmNsdWRlcyhyb3cuaWQpLFxuICAgICAgICAgICAgICBibG9ja1R5cGU6IHJvdy5ibG9ja1R5cGUsXG4gICAgICAgICAgICAgIGNoaWxkRXJyb3JQYXRoczogbmV3IFNldCgpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgfSwge1xuICAgICAgICAgIHByb21pc2VzOiBbXSxcbiAgICAgICAgICByb3dNZXRhZGF0YTogW10sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcblxuICAgICAgICAvLyBBZGQgdmFsdWVzIHRvIGZpZWxkIHN0YXRlXG4gICAgICAgIGlmICh2YWx1ZVdpdGhEZWZhdWx0ID09PSBudWxsKSB7XG4gICAgICAgICAgZmllbGRTdGF0ZS52YWx1ZSA9IG51bGw7XG4gICAgICAgICAgZmllbGRTdGF0ZS5pbml0aWFsVmFsdWUgPSBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpZWxkU3RhdGUudmFsdWUgPSBibG9ja3NWYWx1ZS5sZW5ndGg7XG4gICAgICAgICAgZmllbGRTdGF0ZS5pbml0aWFsVmFsdWUgPSBibG9ja3NWYWx1ZS5sZW5ndGg7XG5cbiAgICAgICAgICBpZiAoYmxvY2tzVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmllbGRTdGF0ZS5kaXNhYmxlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZpZWxkU3RhdGUucm93cyA9IHJvd01ldGFkYXRhO1xuXG4gICAgICAgIC8vIEFkZCBmaWVsZCB0byBzdGF0ZVxuICAgICAgICBzdGF0ZVtgJHtwYXRofSR7ZmllbGQubmFtZX1gXSA9IGZpZWxkU3RhdGU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgJ2dyb3VwJzoge1xuICAgICAgICBhd2FpdCBpdGVyYXRlRmllbGRzKHtcbiAgICAgICAgICBzdGF0ZSxcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgICAgZmllbGRzOiBmaWVsZC5maWVsZHMsXG4gICAgICAgICAgZGF0YTogZGF0YT8uW2ZpZWxkLm5hbWVdIHx8IHt9LFxuICAgICAgICAgIGZ1bGxEYXRhLFxuICAgICAgICAgIHBhcmVudFBhc3Nlc0NvbmRpdGlvbjogcGFzc2VzQ29uZGl0aW9uLFxuICAgICAgICAgIHBhdGg6IGAke3BhdGh9JHtmaWVsZC5uYW1lfS5gLFxuICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICB1c2VyLFxuICAgICAgICAgIHQsXG4gICAgICAgICAgcHJlZmVyZW5jZXMsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIGZpZWxkU3RhdGUudmFsdWUgPSB2YWx1ZVdpdGhEZWZhdWx0O1xuICAgICAgICBmaWVsZFN0YXRlLmluaXRpYWxWYWx1ZSA9IHZhbHVlV2l0aERlZmF1bHQ7XG5cbiAgICAgICAgLy8gQWRkIGZpZWxkIHRvIHN0YXRlXG4gICAgICAgIHN0YXRlW2Ake3BhdGh9JHtmaWVsZC5uYW1lfWBdID0gZmllbGRTdGF0ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoZmllbGRIYXNTdWJGaWVsZHMoZmllbGQpKSB7XG4gICAgLy8gSGFuZGxlIGZpZWxkIHR5cGVzIHRoYXQgZG8gbm90IHVzZSBuYW1lcyAocm93LCBldGMpXG4gICAgYXdhaXQgaXRlcmF0ZUZpZWxkcyh7XG4gICAgICBzdGF0ZSxcbiAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgZGF0YSxcbiAgICAgIHBhcmVudFBhc3Nlc0NvbmRpdGlvbjogcGFzc2VzQ29uZGl0aW9uLFxuICAgICAgcGF0aCxcbiAgICAgIHVzZXIsXG4gICAgICBmdWxsRGF0YSxcbiAgICAgIGlkLFxuICAgICAgbG9jYWxlLFxuICAgICAgb3BlcmF0aW9uLFxuICAgICAgdCxcbiAgICAgIHByZWZlcmVuY2VzLFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT09ICd0YWJzJykge1xuICAgIGNvbnN0IHByb21pc2VzID0gZmllbGQudGFicy5tYXAoKHRhYikgPT4gaXRlcmF0ZUZpZWxkcyh7XG4gICAgICBzdGF0ZSxcbiAgICAgIGZpZWxkczogdGFiLmZpZWxkcyxcbiAgICAgIGRhdGE6IHRhYkhhc05hbWUodGFiKSA/IGRhdGE/Llt0YWIubmFtZV0gOiBkYXRhLFxuICAgICAgcGFyZW50UGFzc2VzQ29uZGl0aW9uOiBwYXNzZXNDb25kaXRpb24sXG4gICAgICBwYXRoOiB0YWJIYXNOYW1lKHRhYikgPyBgJHtwYXRofSR7dGFiLm5hbWV9LmAgOiBwYXRoLFxuICAgICAgdXNlcixcbiAgICAgIGZ1bGxEYXRhLFxuICAgICAgaWQsXG4gICAgICBsb2NhbGUsXG4gICAgICBvcGVyYXRpb24sXG4gICAgICB0LFxuICAgICAgcHJlZmVyZW5jZXMsXG4gICAgfSkpO1xuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIk9iamVjdElEIiwiZmllbGRBZmZlY3RzRGF0YSIsImZpZWxkSGFzU3ViRmllbGRzIiwidGFiSGFzTmFtZSIsImdldFZhbHVlV2l0aERlZmF1bHQiLCJpdGVyYXRlRmllbGRzIiwiYWRkRmllbGRTdGF0ZVByb21pc2UiLCJmaWVsZCIsImxvY2FsZSIsInVzZXIiLCJzdGF0ZSIsInBhdGgiLCJwYXNzZXNDb25kaXRpb24iLCJmdWxsRGF0YSIsImRhdGEiLCJpZCIsIm9wZXJhdGlvbiIsInQiLCJwcmVmZXJlbmNlcyIsImZpZWxkU3RhdGUiLCJ2YWx1ZVdpdGhEZWZhdWx0IiwidmFsaWRhdGlvblJlc3VsdCIsImFycmF5VmFsdWUiLCJwcm9taXNlcyIsInJvd01ldGFkYXRhIiwiYmxvY2tzVmFsdWUiLCJ2YWxpZCIsInZhbHVlIiwidW5kZWZpbmVkIiwiaW5pdGlhbFZhbHVlIiwidmFsaWRhdGUiLCJjb25kaXRpb24iLCJhZG1pbiIsIm5hbWUiLCJkZWZhdWx0VmFsdWUiLCJzaWJsaW5nRGF0YSIsImVycm9yTWVzc2FnZSIsInR5cGUiLCJBcnJheSIsImlzQXJyYXkiLCJyZWR1Y2UiLCJhY2MiLCJyb3ciLCJpIiwicm93UGF0aCIsInRvSGV4U3RyaW5nIiwicHVzaCIsImZpZWxkcyIsInBhcmVudFBhc3Nlc0NvbmRpdGlvbiIsImNvbGxhcHNlZFJvd0lEcyIsImNvbGxhcHNlZCIsImluaXRDb2xsYXBzZWQiLCJpbmNsdWRlcyIsImNoaWxkRXJyb3JQYXRocyIsIlNldCIsIlByb21pc2UiLCJhbGwiLCJsZW5ndGgiLCJkaXNhYmxlRm9ybURhdGEiLCJyb3dzIiwiYmxvY2siLCJibG9ja3MiLCJmaW5kIiwiYmxvY2tUeXBlIiwic2x1ZyIsImJsb2NrTmFtZSIsInRhYnMiLCJtYXAiLCJ0YWIiXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDcEMsT0FBT0EsY0FBYyxnQkFBZ0I7QUFHckMsU0FFRUMsZ0JBQWdCLEVBQ2hCQyxpQkFBaUIsRUFDakJDLFVBQVUsUUFDTCxxQ0FBcUM7QUFDNUMsT0FB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
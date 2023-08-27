"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    TableColumnContext: function() {
        return TableColumnContext;
    },
    useTableColumns: function() {
        return useTableColumns;
    },
    TableColumnsProvider: function() {
        return TableColumnsProvider;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _Preferences = require("../../utilities/Preferences");
var _buildColumns = /*#__PURE__*/ _interop_require_default(require("./buildColumns"));
var _columnReducer = require("./columnReducer");
var _getInitialColumns = /*#__PURE__*/ _interop_require_default(require("./getInitialColumns"));
var _formatFields = /*#__PURE__*/ _interop_require_default(require("../../views/collections/List/formatFields"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var TableColumnContext = /*#__PURE__*/ (0, _react.createContext)({});
var useTableColumns = function() {
    return (0, _react.useContext)(TableColumnContext);
};
var TableColumnsProvider = function(param) {
    var children = param.children, cellProps = param.cellProps, collection = param.collection, _param_collection = param.collection, _param_collection_admin = _param_collection.admin, useAsTitle = _param_collection_admin.useAsTitle, defaultColumns = _param_collection_admin.defaultColumns;
    var preferenceKey = "".concat(collection.slug, "-list");
    var prevCollection = (0, _react.useRef)();
    var hasInitialized = (0, _react.useRef)(false);
    var _usePreferences = (0, _Preferences.usePreferences)(), getPreference = _usePreferences.getPreference, setPreference = _usePreferences.setPreference;
    var _useState = _sliced_to_array((0, _react.useState)(function() {
        return (0, _formatFields.default)(collection);
    }), 1), formattedFields = _useState[0];
    var _useReducer = _sliced_to_array((0, _react.useReducer)(_columnReducer.columnReducer, {}, function() {
        var initialColumns = (0, _getInitialColumns.default)(formattedFields, useAsTitle, defaultColumns);
        return (0, _buildColumns.default)({
            collection: collection,
            columns: initialColumns.map(function(column) {
                return {
                    accessor: column,
                    active: true
                };
            }),
            cellProps: cellProps
        });
    }), 2), tableColumns = _useReducer[0], dispatchTableColumns = _useReducer[1];
    // /////////////////////////////////////
    // Sync preferences on collection change
    // /////////////////////////////////////
    (0, _react.useEffect)(function() {
        var sync = function() {
            var _ref = _async_to_generator(function() {
                var collectionHasChanged, _currentPreferences, currentPreferences, initialColumns, newCols;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            collectionHasChanged = prevCollection.current !== collection.slug;
                            if (!collectionHasChanged) return [
                                3,
                                2
                            ];
                            hasInitialized.current = false;
                            return [
                                4,
                                getPreference(preferenceKey)
                            ];
                        case 1:
                            currentPreferences = _state.sent();
                            prevCollection.current = collection.slug;
                            initialColumns = (0, _getInitialColumns.default)(formattedFields, useAsTitle, defaultColumns);
                            newCols = ((_currentPreferences = currentPreferences) === null || _currentPreferences === void 0 ? void 0 : _currentPreferences.columns) || initialColumns;
                            dispatchTableColumns({
                                type: "set",
                                payload: {
                                    columns: newCols.map(function(column) {
                                        // 'string' is for backwards compatibility
                                        // the preference used to be stored as an array of strings
                                        if (typeof column === "string") {
                                            return {
                                                accessor: column,
                                                active: true
                                            };
                                        }
                                        return column;
                                    }),
                                    collection: _object_spread_props(_object_spread({}, collection), {
                                        fields: (0, _formatFields.default)(collection)
                                    }),
                                    cellProps: cellProps
                                }
                            });
                            hasInitialized.current = true;
                            _state.label = 2;
                        case 2:
                            return [
                                2
                            ];
                    }
                });
            });
            return function sync() {
                return _ref.apply(this, arguments);
            };
        }();
        sync();
    }, [
        preferenceKey,
        setPreference,
        tableColumns,
        getPreference,
        useAsTitle,
        defaultColumns,
        collection,
        cellProps,
        formattedFields
    ]);
    // /////////////////////////////////////
    // Set preferences on column change
    // /////////////////////////////////////
    (0, _react.useEffect)(function() {
        if (!hasInitialized.current) return;
        var sync = function() {
            var _ref = _async_to_generator(function() {
                var currentPreferences, newPreferences;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                getPreference(preferenceKey)
                            ];
                        case 1:
                            currentPreferences = _state.sent();
                            newPreferences = _object_spread_props(_object_spread({}, currentPreferences), {
                                columns: tableColumns.map(function(c) {
                                    return {
                                        accessor: c.accessor,
                                        active: c.active
                                    };
                                })
                            });
                            setPreference(preferenceKey, newPreferences);
                            return [
                                2
                            ];
                    }
                });
            });
            return function sync() {
                return _ref.apply(this, arguments);
            };
        }();
        sync();
    }, [
        tableColumns,
        preferenceKey,
        setPreference,
        getPreference
    ]);
    var setActiveColumns = (0, _react.useCallback)(function(columns) {
        dispatchTableColumns({
            type: "set",
            payload: {
                collection: _object_spread_props(_object_spread({}, collection), {
                    fields: (0, _formatFields.default)(collection)
                }),
                columns: columns.map(function(column) {
                    return {
                        accessor: column,
                        active: true
                    };
                }),
                // onSelect,
                cellProps: cellProps
            }
        });
    }, [
        collection,
        cellProps
    ]);
    var moveColumn = (0, _react.useCallback)(function(args) {
        var fromIndex = args.fromIndex, toIndex = args.toIndex;
        dispatchTableColumns({
            type: "move",
            payload: {
                fromIndex: fromIndex,
                toIndex: toIndex,
                collection: _object_spread_props(_object_spread({}, collection), {
                    fields: (0, _formatFields.default)(collection)
                }),
                cellProps: cellProps
            }
        });
    }, [
        collection,
        cellProps
    ]);
    var toggleColumn = (0, _react.useCallback)(function(column) {
        dispatchTableColumns({
            type: "toggle",
            payload: {
                column: column,
                collection: _object_spread_props(_object_spread({}, collection), {
                    fields: (0, _formatFields.default)(collection)
                }),
                cellProps: cellProps
            }
        });
    }, [
        collection,
        cellProps
    ]);
    return /*#__PURE__*/ _react.default.createElement(TableColumnContext.Provider, {
        value: {
            columns: tableColumns,
            dispatchTableColumns: dispatchTableColumns,
            setActiveColumns: setActiveColumns,
            moveColumn: moveColumn,
            toggleColumn: toggleColumn
        }
    }, children);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1RhYmxlQ29sdW1ucy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IHVzZVByZWZlcmVuY2VzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1ByZWZlcmVuY2VzJztcbmltcG9ydCB7IExpc3RQcmVmZXJlbmNlcyB9IGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvdHlwZXMnO1xuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi4vVGFibGUvdHlwZXMnO1xuaW1wb3J0IGJ1aWxkQ29sdW1ucyBmcm9tICcuL2J1aWxkQ29sdW1ucyc7XG5pbXBvcnQgeyBBY3Rpb24sIGNvbHVtblJlZHVjZXIgfSBmcm9tICcuL2NvbHVtblJlZHVjZXInO1xuaW1wb3J0IGdldEluaXRpYWxDb2x1bW5TdGF0ZSBmcm9tICcuL2dldEluaXRpYWxDb2x1bW5zJztcbmltcG9ydCB7IFByb3BzIGFzIENlbGxQcm9wcyB9IGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC90eXBlcyc7XG5pbXBvcnQgZm9ybWF0RmllbGRzIGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvZm9ybWF0RmllbGRzJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ29sdW1ucyB7XG4gIGNvbHVtbnM6IENvbHVtbltdXG4gIGRpc3BhdGNoVGFibGVDb2x1bW5zOiBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+XG4gIHNldEFjdGl2ZUNvbHVtbnM6IChjb2x1bW5zOiBzdHJpbmdbXSkgPT4gdm9pZFxuICBtb3ZlQ29sdW1uOihhcmdzOiB7XG4gICAgZnJvbUluZGV4OiBudW1iZXJcbiAgICB0b0luZGV4OiBudW1iZXJcbiAgfSkgPT4gdm9pZFxuICB0b2dnbGVDb2x1bW46IChjb2x1bW46IHN0cmluZykgPT4gdm9pZFxufVxuXG5leHBvcnQgY29uc3QgVGFibGVDb2x1bW5Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxJVGFibGVDb2x1bW5zPih7fSBhcyBJVGFibGVDb2x1bW5zKTtcblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlQ29sdW1ucyA9ICgpOiBJVGFibGVDb2x1bW5zID0+IHVzZUNvbnRleHQoVGFibGVDb2x1bW5Db250ZXh0KTtcblxuZXhwb3J0IGNvbnN0IFRhYmxlQ29sdW1uc1Byb3ZpZGVyOiBSZWFjdC5GQzx7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xuICBjZWxsUHJvcHM/OiBQYXJ0aWFsPENlbGxQcm9wcz5bXVxufT4gPSAoe1xuICBjaGlsZHJlbixcbiAgY2VsbFByb3BzLFxuICBjb2xsZWN0aW9uLFxuICBjb2xsZWN0aW9uOiB7XG4gICAgYWRtaW46IHtcbiAgICAgIHVzZUFzVGl0bGUsXG4gICAgICBkZWZhdWx0Q29sdW1ucyxcbiAgICB9LFxuICB9LFxufSkgPT4ge1xuICBjb25zdCBwcmVmZXJlbmNlS2V5ID0gYCR7Y29sbGVjdGlvbi5zbHVnfS1saXN0YDtcbiAgY29uc3QgcHJldkNvbGxlY3Rpb24gPSB1c2VSZWY8U2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1snc2x1ZyddPigpO1xuICBjb25zdCBoYXNJbml0aWFsaXplZCA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IHsgZ2V0UHJlZmVyZW5jZSwgc2V0UHJlZmVyZW5jZSB9ID0gdXNlUHJlZmVyZW5jZXMoKTtcbiAgY29uc3QgW2Zvcm1hdHRlZEZpZWxkc10gPSB1c2VTdGF0ZTxGaWVsZFtdPigoKSA9PiBmb3JtYXRGaWVsZHMoY29sbGVjdGlvbikpO1xuXG4gIGNvbnN0IFt0YWJsZUNvbHVtbnMsIGRpc3BhdGNoVGFibGVDb2x1bW5zXSA9IHVzZVJlZHVjZXIoY29sdW1uUmVkdWNlciwge30sICgpID0+IHtcbiAgICBjb25zdCBpbml0aWFsQ29sdW1ucyA9IGdldEluaXRpYWxDb2x1bW5TdGF0ZShmb3JtYXR0ZWRGaWVsZHMsIHVzZUFzVGl0bGUsIGRlZmF1bHRDb2x1bW5zKTtcblxuICAgIHJldHVybiBidWlsZENvbHVtbnMoe1xuICAgICAgY29sbGVjdGlvbixcbiAgICAgIGNvbHVtbnM6IGluaXRpYWxDb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoe1xuICAgICAgICBhY2Nlc3NvcjogY29sdW1uLFxuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICB9KSksXG4gICAgICBjZWxsUHJvcHMsXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gU3luYyBwcmVmZXJlbmNlcyBvbiBjb2xsZWN0aW9uIGNoYW5nZVxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzeW5jID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY29sbGVjdGlvbkhhc0NoYW5nZWQgPSBwcmV2Q29sbGVjdGlvbi5jdXJyZW50ICE9PSBjb2xsZWN0aW9uLnNsdWc7XG5cbiAgICAgIGlmIChjb2xsZWN0aW9uSGFzQ2hhbmdlZCkge1xuICAgICAgICBoYXNJbml0aWFsaXplZC5jdXJyZW50ID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFByZWZlcmVuY2VzID0gYXdhaXQgZ2V0UHJlZmVyZW5jZTxMaXN0UHJlZmVyZW5jZXM+KHByZWZlcmVuY2VLZXkpO1xuICAgICAgICBwcmV2Q29sbGVjdGlvbi5jdXJyZW50ID0gY29sbGVjdGlvbi5zbHVnO1xuICAgICAgICBjb25zdCBpbml0aWFsQ29sdW1ucyA9IGdldEluaXRpYWxDb2x1bW5TdGF0ZShmb3JtYXR0ZWRGaWVsZHMsIHVzZUFzVGl0bGUsIGRlZmF1bHRDb2x1bW5zKTtcbiAgICAgICAgY29uc3QgbmV3Q29scyA9IGN1cnJlbnRQcmVmZXJlbmNlcz8uY29sdW1ucyB8fCBpbml0aWFsQ29sdW1ucztcblxuICAgICAgICBkaXNwYXRjaFRhYmxlQ29sdW1ucyh7XG4gICAgICAgICAgdHlwZTogJ3NldCcsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgY29sdW1uczogbmV3Q29scy5tYXAoKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAvLyAnc3RyaW5nJyBpcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgICAgICAgICAgLy8gdGhlIHByZWZlcmVuY2UgdXNlZCB0byBiZSBzdG9yZWQgYXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbHVtbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgYWNjZXNzb3I6IGNvbHVtbixcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IHsgLi4uY29sbGVjdGlvbiwgZmllbGRzOiBmb3JtYXRGaWVsZHMoY29sbGVjdGlvbikgfSxcbiAgICAgICAgICAgIGNlbGxQcm9wcyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBoYXNJbml0aWFsaXplZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc3luYygpO1xuICB9LCBbcHJlZmVyZW5jZUtleSwgc2V0UHJlZmVyZW5jZSwgdGFibGVDb2x1bW5zLCBnZXRQcmVmZXJlbmNlLCB1c2VBc1RpdGxlLCBkZWZhdWx0Q29sdW1ucywgY29sbGVjdGlvbiwgY2VsbFByb3BzLCBmb3JtYXR0ZWRGaWVsZHNdKTtcblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIFNldCBwcmVmZXJlbmNlcyBvbiBjb2x1bW4gY2hhbmdlXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW5pdGlhbGl6ZWQuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc3luYyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcmVmZXJlbmNlcyA9IGF3YWl0IGdldFByZWZlcmVuY2U8TGlzdFByZWZlcmVuY2VzPihwcmVmZXJlbmNlS2V5KTtcblxuICAgICAgY29uc3QgbmV3UHJlZmVyZW5jZXMgPSB7XG4gICAgICAgIC4uLmN1cnJlbnRQcmVmZXJlbmNlcyxcbiAgICAgICAgY29sdW1uczogdGFibGVDb2x1bW5zLm1hcCgoYykgPT4gKHtcbiAgICAgICAgICBhY2Nlc3NvcjogYy5hY2Nlc3NvcixcbiAgICAgICAgICBhY3RpdmU6IGMuYWN0aXZlLFxuICAgICAgICB9KSksXG4gICAgICB9O1xuXG4gICAgICBzZXRQcmVmZXJlbmNlKHByZWZlcmVuY2VLZXksIG5ld1ByZWZlcmVuY2VzKTtcbiAgICB9O1xuXG4gICAgc3luYygpO1xuICB9LCBbdGFibGVDb2x1bW5zLCBwcmVmZXJlbmNlS2V5LCBzZXRQcmVmZXJlbmNlLCBnZXRQcmVmZXJlbmNlXSk7XG5cbiAgY29uc3Qgc2V0QWN0aXZlQ29sdW1ucyA9IHVzZUNhbGxiYWNrKChjb2x1bW5zOiBzdHJpbmdbXSkgPT4ge1xuICAgIGRpc3BhdGNoVGFibGVDb2x1bW5zKHtcbiAgICAgIHR5cGU6ICdzZXQnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBjb2xsZWN0aW9uOiB7IC4uLmNvbGxlY3Rpb24sIGZpZWxkczogZm9ybWF0RmllbGRzKGNvbGxlY3Rpb24pIH0sXG4gICAgICAgIGNvbHVtbnM6IGNvbHVtbnMubWFwKChjb2x1bW4pID0+ICh7XG4gICAgICAgICAgYWNjZXNzb3I6IGNvbHVtbixcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0pKSxcbiAgICAgICAgLy8gb25TZWxlY3QsXG4gICAgICAgIGNlbGxQcm9wcyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sIFtjb2xsZWN0aW9uLCBjZWxsUHJvcHNdKTtcblxuICBjb25zdCBtb3ZlQ29sdW1uID0gdXNlQ2FsbGJhY2soKGFyZ3M6IHtcbiAgICBmcm9tSW5kZXg6IG51bWJlclxuICAgIHRvSW5kZXg6IG51bWJlclxuICB9KSA9PiB7XG4gICAgY29uc3QgeyBmcm9tSW5kZXgsIHRvSW5kZXggfSA9IGFyZ3M7XG5cbiAgICBkaXNwYXRjaFRhYmxlQ29sdW1ucyh7XG4gICAgICB0eXBlOiAnbW92ZScsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZyb21JbmRleCxcbiAgICAgICAgdG9JbmRleCxcbiAgICAgICAgY29sbGVjdGlvbjogeyAuLi5jb2xsZWN0aW9uLCBmaWVsZHM6IGZvcm1hdEZpZWxkcyhjb2xsZWN0aW9uKSB9LFxuICAgICAgICBjZWxsUHJvcHMsXG4gICAgICB9LFxuICAgIH0pO1xuICB9LCBbY29sbGVjdGlvbiwgY2VsbFByb3BzXSk7XG5cbiAgY29uc3QgdG9nZ2xlQ29sdW1uID0gdXNlQ2FsbGJhY2soKGNvbHVtbjogc3RyaW5nKSA9PiB7XG4gICAgZGlzcGF0Y2hUYWJsZUNvbHVtbnMoe1xuICAgICAgdHlwZTogJ3RvZ2dsZScsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGNvbHVtbixcbiAgICAgICAgY29sbGVjdGlvbjogeyAuLi5jb2xsZWN0aW9uLCBmaWVsZHM6IGZvcm1hdEZpZWxkcyhjb2xsZWN0aW9uKSB9LFxuICAgICAgICBjZWxsUHJvcHMsXG4gICAgICB9LFxuICAgIH0pO1xuICB9LCBbY29sbGVjdGlvbiwgY2VsbFByb3BzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVDb2x1bW5Db250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBjb2x1bW5zOiB0YWJsZUNvbHVtbnMsXG4gICAgICAgIGRpc3BhdGNoVGFibGVDb2x1bW5zLFxuICAgICAgICBzZXRBY3RpdmVDb2x1bW5zLFxuICAgICAgICBtb3ZlQ29sdW1uLFxuICAgICAgICB0b2dnbGVDb2x1bW4sXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RhYmxlQ29sdW1uQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiVGFibGVDb2x1bW5Db250ZXh0IiwidXNlVGFibGVDb2x1bW5zIiwiVGFibGVDb2x1bW5zUHJvdmlkZXIiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsImNoaWxkcmVuIiwiY2VsbFByb3BzIiwiY29sbGVjdGlvbiIsImFkbWluIiwidXNlQXNUaXRsZSIsImRlZmF1bHRDb2x1bW5zIiwicHJlZmVyZW5jZUtleSIsInNsdWciLCJwcmV2Q29sbGVjdGlvbiIsInVzZVJlZiIsImhhc0luaXRpYWxpemVkIiwidXNlUHJlZmVyZW5jZXMiLCJnZXRQcmVmZXJlbmNlIiwic2V0UHJlZmVyZW5jZSIsInVzZVN0YXRlIiwiZm9ybWF0RmllbGRzIiwiZm9ybWF0dGVkRmllbGRzIiwidXNlUmVkdWNlciIsImNvbHVtblJlZHVjZXIiLCJpbml0aWFsQ29sdW1ucyIsImdldEluaXRpYWxDb2x1bW5TdGF0ZSIsImJ1aWxkQ29sdW1ucyIsImNvbHVtbnMiLCJtYXAiLCJjb2x1bW4iLCJhY2Nlc3NvciIsImFjdGl2ZSIsInRhYmxlQ29sdW1ucyIsImRpc3BhdGNoVGFibGVDb2x1bW5zIiwidXNlRWZmZWN0Iiwic3luYyIsImNvbGxlY3Rpb25IYXNDaGFuZ2VkIiwiY3VycmVudFByZWZlcmVuY2VzIiwibmV3Q29scyIsImN1cnJlbnQiLCJ0eXBlIiwicGF5bG9hZCIsImZpZWxkcyIsIm5ld1ByZWZlcmVuY2VzIiwiYyIsInNldEFjdGl2ZUNvbHVtbnMiLCJ1c2VDYWxsYmFjayIsIm1vdmVDb2x1bW4iLCJhcmdzIiwiZnJvbUluZGV4IiwidG9JbmRleCIsInRvZ2dsZUNvbHVtbiIsIlByb3ZpZGVyIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBdUJhQSxrQkFBa0I7ZUFBbEJBOztJQUVBQyxlQUFlO2VBQWZBOztJQUVBQyxvQkFBb0I7ZUFBcEJBOzs7NkRBM0IwRjsyQkFFeEU7bUVBR047NkJBQ2E7d0VBQ0o7bUVBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNsQixJQUFNRixtQ0FBcUJHLElBQUFBLG9CQUFhLEVBQWdCLENBQUM7QUFFekQsSUFBTUYsa0JBQWtCO1dBQXFCRyxJQUFBQSxpQkFBVSxFQUFDSjs7QUFFeEQsSUFBTUUsdUJBSVI7UUFDSEcsaUJBQUFBLFVBQ0FDLGtCQUFBQSxXQUNBQyxtQkFBQUEsc0NBQ0FBLHdEQUNFQyxPQUNFQyxxQ0FBQUEsWUFDQUMseUNBQUFBO0lBSUosSUFBTUMsZ0JBQWdCLEFBQUMsR0FBa0IsT0FBaEJKLFdBQVdLLElBQUksRUFBQztJQUN6QyxJ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
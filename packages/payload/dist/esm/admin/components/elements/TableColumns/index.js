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
import React, { createContext, useCallback, useContext, useEffect, useReducer, useRef, useState } from "react";
import { usePreferences } from "../../utilities/Preferences";
import buildColumns from "./buildColumns";
import { columnReducer } from "./columnReducer";
import getInitialColumnState from "./getInitialColumns";
import formatFields from "../../views/collections/List/formatFields";
export var TableColumnContext = /*#__PURE__*/ createContext({});
export var useTableColumns = function() {
    return useContext(TableColumnContext);
};
export var TableColumnsProvider = function(param) {
    var children = param.children, cellProps = param.cellProps, collection = param.collection, _param_collection = param.collection, _param_collection_admin = _param_collection.admin, useAsTitle = _param_collection_admin.useAsTitle, defaultColumns = _param_collection_admin.defaultColumns;
    var preferenceKey = "".concat(collection.slug, "-list");
    var prevCollection = useRef();
    var hasInitialized = useRef(false);
    var _usePreferences = usePreferences(), getPreference = _usePreferences.getPreference, setPreference = _usePreferences.setPreference;
    var _useState = _sliced_to_array(useState(function() {
        return formatFields(collection);
    }), 1), formattedFields = _useState[0];
    var _useReducer = _sliced_to_array(useReducer(columnReducer, {}, function() {
        var initialColumns = getInitialColumnState(formattedFields, useAsTitle, defaultColumns);
        return buildColumns({
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
    useEffect(function() {
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
                            initialColumns = getInitialColumnState(formattedFields, useAsTitle, defaultColumns);
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
                                        fields: formatFields(collection)
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
    useEffect(function() {
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
    var setActiveColumns = useCallback(function(columns) {
        dispatchTableColumns({
            type: "set",
            payload: {
                collection: _object_spread_props(_object_spread({}, collection), {
                    fields: formatFields(collection)
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
    var moveColumn = useCallback(function(args) {
        var fromIndex = args.fromIndex, toIndex = args.toIndex;
        dispatchTableColumns({
            type: "move",
            payload: {
                fromIndex: fromIndex,
                toIndex: toIndex,
                collection: _object_spread_props(_object_spread({}, collection), {
                    fields: formatFields(collection)
                }),
                cellProps: cellProps
            }
        });
    }, [
        collection,
        cellProps
    ]);
    var toggleColumn = useCallback(function(column) {
        dispatchTableColumns({
            type: "toggle",
            payload: {
                column: column,
                collection: _object_spread_props(_object_spread({}, collection), {
                    fields: formatFields(collection)
                }),
                cellProps: cellProps
            }
        });
    }, [
        collection,
        cellProps
    ]);
    return /*#__PURE__*/ React.createElement(TableColumnContext.Provider, {
        value: {
            columns: tableColumns,
            dispatchTableColumns: dispatchTableColumns,
            setActiveColumns: setActiveColumns,
            moveColumn: moveColumn,
            toggleColumn: toggleColumn
        }
    }, children);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1RhYmxlQ29sdW1ucy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNhbGxiYWNrLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29sbGVjdGlvbnMvY29uZmlnL3R5cGVzJztcbmltcG9ydCB7IHVzZVByZWZlcmVuY2VzIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1ByZWZlcmVuY2VzJztcbmltcG9ydCB7IExpc3RQcmVmZXJlbmNlcyB9IGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvdHlwZXMnO1xuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi4vVGFibGUvdHlwZXMnO1xuaW1wb3J0IGJ1aWxkQ29sdW1ucyBmcm9tICcuL2J1aWxkQ29sdW1ucyc7XG5pbXBvcnQgeyBBY3Rpb24sIGNvbHVtblJlZHVjZXIgfSBmcm9tICcuL2NvbHVtblJlZHVjZXInO1xuaW1wb3J0IGdldEluaXRpYWxDb2x1bW5TdGF0ZSBmcm9tICcuL2dldEluaXRpYWxDb2x1bW5zJztcbmltcG9ydCB7IFByb3BzIGFzIENlbGxQcm9wcyB9IGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC90eXBlcyc7XG5pbXBvcnQgZm9ybWF0RmllbGRzIGZyb20gJy4uLy4uL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvZm9ybWF0RmllbGRzJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRhYmxlQ29sdW1ucyB7XG4gIGNvbHVtbnM6IENvbHVtbltdXG4gIGRpc3BhdGNoVGFibGVDb2x1bW5zOiBSZWFjdC5EaXNwYXRjaDxBY3Rpb24+XG4gIHNldEFjdGl2ZUNvbHVtbnM6IChjb2x1bW5zOiBzdHJpbmdbXSkgPT4gdm9pZFxuICBtb3ZlQ29sdW1uOihhcmdzOiB7XG4gICAgZnJvbUluZGV4OiBudW1iZXJcbiAgICB0b0luZGV4OiBudW1iZXJcbiAgfSkgPT4gdm9pZFxuICB0b2dnbGVDb2x1bW46IChjb2x1bW46IHN0cmluZykgPT4gdm9pZFxufVxuXG5leHBvcnQgY29uc3QgVGFibGVDb2x1bW5Db250ZXh0ID0gY3JlYXRlQ29udGV4dDxJVGFibGVDb2x1bW5zPih7fSBhcyBJVGFibGVDb2x1bW5zKTtcblxuZXhwb3J0IGNvbnN0IHVzZVRhYmxlQ29sdW1ucyA9ICgpOiBJVGFibGVDb2x1bW5zID0+IHVzZUNvbnRleHQoVGFibGVDb2x1bW5Db250ZXh0KTtcblxuZXhwb3J0IGNvbnN0IFRhYmxlQ29sdW1uc1Byb3ZpZGVyOiBSZWFjdC5GQzx7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbiAgY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1xuICBjZWxsUHJvcHM/OiBQYXJ0aWFsPENlbGxQcm9wcz5bXVxufT4gPSAoe1xuICBjaGlsZHJlbixcbiAgY2VsbFByb3BzLFxuICBjb2xsZWN0aW9uLFxuICBjb2xsZWN0aW9uOiB7XG4gICAgYWRtaW46IHtcbiAgICAgIHVzZUFzVGl0bGUsXG4gICAgICBkZWZhdWx0Q29sdW1ucyxcbiAgICB9LFxuICB9LFxufSkgPT4ge1xuICBjb25zdCBwcmVmZXJlbmNlS2V5ID0gYCR7Y29sbGVjdGlvbi5zbHVnfS1saXN0YDtcbiAgY29uc3QgcHJldkNvbGxlY3Rpb24gPSB1c2VSZWY8U2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1snc2x1ZyddPigpO1xuICBjb25zdCBoYXNJbml0aWFsaXplZCA9IHVzZVJlZihmYWxzZSk7XG4gIGNvbnN0IHsgZ2V0UHJlZmVyZW5jZSwgc2V0UHJlZmVyZW5jZSB9ID0gdXNlUHJlZmVyZW5jZXMoKTtcbiAgY29uc3QgW2Zvcm1hdHRlZEZpZWxkc10gPSB1c2VTdGF0ZTxGaWVsZFtdPigoKSA9PiBmb3JtYXRGaWVsZHMoY29sbGVjdGlvbikpO1xuXG4gIGNvbnN0IFt0YWJsZUNvbHVtbnMsIGRpc3BhdGNoVGFibGVDb2x1bW5zXSA9IHVzZVJlZHVjZXIoY29sdW1uUmVkdWNlciwge30sICgpID0+IHtcbiAgICBjb25zdCBpbml0aWFsQ29sdW1ucyA9IGdldEluaXRpYWxDb2x1bW5TdGF0ZShmb3JtYXR0ZWRGaWVsZHMsIHVzZUFzVGl0bGUsIGRlZmF1bHRDb2x1bW5zKTtcblxuICAgIHJldHVybiBidWlsZENvbHVtbnMoe1xuICAgICAgY29sbGVjdGlvbixcbiAgICAgIGNvbHVtbnM6IGluaXRpYWxDb2x1bW5zLm1hcCgoY29sdW1uKSA9PiAoe1xuICAgICAgICBhY2Nlc3NvcjogY29sdW1uLFxuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICB9KSksXG4gICAgICBjZWxsUHJvcHMsXG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgLy8gU3luYyBwcmVmZXJlbmNlcyBvbiBjb2xsZWN0aW9uIGNoYW5nZVxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzeW5jID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY29sbGVjdGlvbkhhc0NoYW5nZWQgPSBwcmV2Q29sbGVjdGlvbi5jdXJyZW50ICE9PSBjb2xsZWN0aW9uLnNsdWc7XG5cbiAgICAgIGlmIChjb2xsZWN0aW9uSGFzQ2hhbmdlZCkge1xuICAgICAgICBoYXNJbml0aWFsaXplZC5jdXJyZW50ID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFByZWZlcmVuY2VzID0gYXdhaXQgZ2V0UHJlZmVyZW5jZTxMaXN0UHJlZmVyZW5jZXM+KHByZWZlcmVuY2VLZXkpO1xuICAgICAgICBwcmV2Q29sbGVjdGlvbi5jdXJyZW50ID0gY29sbGVjdGlvbi5zbHVnO1xuICAgICAgICBjb25zdCBpbml0aWFsQ29sdW1ucyA9IGdldEluaXRpYWxDb2x1bW5TdGF0ZShmb3JtYXR0ZWRGaWVsZHMsIHVzZUFzVGl0bGUsIGRlZmF1bHRDb2x1bW5zKTtcbiAgICAgICAgY29uc3QgbmV3Q29scyA9IGN1cnJlbnRQcmVmZXJlbmNlcz8uY29sdW1ucyB8fCBpbml0aWFsQ29sdW1ucztcblxuICAgICAgICBkaXNwYXRjaFRhYmxlQ29sdW1ucyh7XG4gICAgICAgICAgdHlwZTogJ3NldCcsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgY29sdW1uczogbmV3Q29scy5tYXAoKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAvLyAnc3RyaW5nJyBpcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAgICAgICAgICAgLy8gdGhlIHByZWZlcmVuY2UgdXNlZCB0byBiZSBzdG9yZWQgYXMgYW4gYXJyYXkgb2Ygc3RyaW5nc1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbHVtbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgYWNjZXNzb3I6IGNvbHVtbixcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNvbGxlY3Rpb246IHsgLi4uY29sbGVjdGlvbiwgZmllbGRzOiBmb3JtYXRGaWVsZHMoY29sbGVjdGlvbikgfSxcbiAgICAgICAgICAgIGNlbGxQcm9wcyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBoYXNJbml0aWFsaXplZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc3luYygpO1xuICB9LCBbcHJlZmVyZW5jZUtleSwgc2V0UHJlZmVyZW5jZSwgdGFibGVDb2x1bW5zLCBnZXRQcmVmZXJlbmNlLCB1c2VBc1RpdGxlLCBkZWZhdWx0Q29sdW1ucywgY29sbGVjdGlvbiwgY2VsbFByb3BzLCBmb3JtYXR0ZWRGaWVsZHNdKTtcblxuICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIFNldCBwcmVmZXJlbmNlcyBvbiBjb2x1bW4gY2hhbmdlXG4gIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW5pdGlhbGl6ZWQuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc3luYyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnRQcmVmZXJlbmNlcyA9IGF3YWl0IGdldFByZWZlcmVuY2U8TGlzdFByZWZlcmVuY2VzPihwcmVmZXJlbmNlS2V5KTtcblxuICAgICAgY29uc3QgbmV3UHJlZmVyZW5jZXMgPSB7XG4gICAgICAgIC4uLmN1cnJlbnRQcmVmZXJlbmNlcyxcbiAgICAgICAgY29sdW1uczogdGFibGVDb2x1bW5zLm1hcCgoYykgPT4gKHtcbiAgICAgICAgICBhY2Nlc3NvcjogYy5hY2Nlc3NvcixcbiAgICAgICAgICBhY3RpdmU6IGMuYWN0aXZlLFxuICAgICAgICB9KSksXG4gICAgICB9O1xuXG4gICAgICBzZXRQcmVmZXJlbmNlKHByZWZlcmVuY2VLZXksIG5ld1ByZWZlcmVuY2VzKTtcbiAgICB9O1xuXG4gICAgc3luYygpO1xuICB9LCBbdGFibGVDb2x1bW5zLCBwcmVmZXJlbmNlS2V5LCBzZXRQcmVmZXJlbmNlLCBnZXRQcmVmZXJlbmNlXSk7XG5cbiAgY29uc3Qgc2V0QWN0aXZlQ29sdW1ucyA9IHVzZUNhbGxiYWNrKChjb2x1bW5zOiBzdHJpbmdbXSkgPT4ge1xuICAgIGRpc3BhdGNoVGFibGVDb2x1bW5zKHtcbiAgICAgIHR5cGU6ICdzZXQnLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBjb2xsZWN0aW9uOiB7IC4uLmNvbGxlY3Rpb24sIGZpZWxkczogZm9ybWF0RmllbGRzKGNvbGxlY3Rpb24pIH0sXG4gICAgICAgIGNvbHVtbnM6IGNvbHVtbnMubWFwKChjb2x1bW4pID0+ICh7XG4gICAgICAgICAgYWNjZXNzb3I6IGNvbHVtbixcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgIH0pKSxcbiAgICAgICAgLy8gb25TZWxlY3QsXG4gICAgICAgIGNlbGxQcm9wcyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sIFtjb2xsZWN0aW9uLCBjZWxsUHJvcHNdKTtcblxuICBjb25zdCBtb3ZlQ29sdW1uID0gdXNlQ2FsbGJhY2soKGFyZ3M6IHtcbiAgICBmcm9tSW5kZXg6IG51bWJlclxuICAgIHRvSW5kZXg6IG51bWJlclxuICB9KSA9PiB7XG4gICAgY29uc3QgeyBmcm9tSW5kZXgsIHRvSW5kZXggfSA9IGFyZ3M7XG5cbiAgICBkaXNwYXRjaFRhYmxlQ29sdW1ucyh7XG4gICAgICB0eXBlOiAnbW92ZScsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGZyb21JbmRleCxcbiAgICAgICAgdG9JbmRleCxcbiAgICAgICAgY29sbGVjdGlvbjogeyAuLi5jb2xsZWN0aW9uLCBmaWVsZHM6IGZvcm1hdEZpZWxkcyhjb2xsZWN0aW9uKSB9LFxuICAgICAgICBjZWxsUHJvcHMsXG4gICAgICB9LFxuICAgIH0pO1xuICB9LCBbY29sbGVjdGlvbiwgY2VsbFByb3BzXSk7XG5cbiAgY29uc3QgdG9nZ2xlQ29sdW1uID0gdXNlQ2FsbGJhY2soKGNvbHVtbjogc3RyaW5nKSA9PiB7XG4gICAgZGlzcGF0Y2hUYWJsZUNvbHVtbnMoe1xuICAgICAgdHlwZTogJ3RvZ2dsZScsXG4gICAgICBwYXlsb2FkOiB7XG4gICAgICAgIGNvbHVtbixcbiAgICAgICAgY29sbGVjdGlvbjogeyAuLi5jb2xsZWN0aW9uLCBmaWVsZHM6IGZvcm1hdEZpZWxkcyhjb2xsZWN0aW9uKSB9LFxuICAgICAgICBjZWxsUHJvcHMsXG4gICAgICB9LFxuICAgIH0pO1xuICB9LCBbY29sbGVjdGlvbiwgY2VsbFByb3BzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVDb2x1bW5Db250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBjb2x1bW5zOiB0YWJsZUNvbHVtbnMsXG4gICAgICAgIGRpc3BhdGNoVGFibGVDb2x1bW5zLFxuICAgICAgICBzZXRBY3RpdmVDb2x1bW5zLFxuICAgICAgICBtb3ZlQ29sdW1uLFxuICAgICAgICB0b2dnbGVDb2x1bW4sXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1RhYmxlQ29sdW1uQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ2FsbGJhY2siLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlUmVkdWNlciIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlUHJlZmVyZW5jZXMiLCJidWlsZENvbHVtbnMiLCJjb2x1bW5SZWR1Y2VyIiwiZ2V0SW5pdGlhbENvbHVtblN0YXRlIiwiZm9ybWF0RmllbGRzIiwiVGFibGVDb2x1bW5Db250ZXh0IiwidXNlVGFibGVDb2x1bW5zIiwiVGFibGVDb2x1bW5zUHJvdmlkZXIiLCJjaGlsZHJlbiIsImNlbGxQcm9wcyIsImNvbGxlY3Rpb24iLCJhZG1pbiIsInVzZUFzVGl0bGUiLCJkZWZhdWx0Q29sdW1ucyIsInByZWZlcmVuY2VLZXkiLCJzbHVnIiwicHJldkNvbGxlY3Rpb24iLCJoYXNJbml0aWFsaXplZCIsImdldFByZWZlcmVuY2UiLCJzZXRQcmVmZXJlbmNlIiwiZm9ybWF0dGVkRmllbGRzIiwiaW5pdGlhbENvbHVtbnMiLCJjb2x1bW5zIiwibWFwIiwiY29sdW1uIiwiYWNjZXNzb3IiLCJhY3RpdmUiLCJ0YWJsZUNvbHVtbnMiLCJkaXNwYXRjaFRhYmxlQ29sdW1ucyIsInN5bmMiLCJjb2xsZWN0aW9uSGFzQ2hhbmdlZCIsImN1cnJlbnRQcmVmZXJlbmNlcyIsIm5ld0NvbHMiLCJjdXJyZW50IiwidHlwZSIsInBheWxvYWQiLCJmaWVsZHMiLCJuZXdQcmVmZXJlbmNlcyIsImMiLCJzZXRBY3RpdmVDb2x1bW5zIiwibW92ZUNvbHVtbiIsImFyZ3MiLCJmcm9tSW5kZXgiLCJ0b0luZGV4IiwidG9nZ2xlQ29sdW1uIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsYUFBYSxFQUFFQyxXQUFXLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxRQUFRLFFBQVE7QUFFL0csU0FBU0MsY0FBYyxRQUFRLDhCQUE4QjtBQUc3RCxPQUFPQyxrQkFBa0IsaUJBQWlCO0FBQzFDLFNBQWlCQyxhQUFhLFFBQVEsa0JBQWtCO0FBQ3hELE9BQU9DLDJCQUEyQixzQkFBc0I7QUFFeEQsT0FBT0Msa0JBQWtCLDRDQUE0QztBQWNyRSxPQUFPLElBQU1DLG1DQUFxQlosY0FBNkIsQ0FBQyxHQUFvQjtBQUVwRixPQUFPLElBQU1hLGtCQUFrQjtXQUFxQlgsV0FBV1U7RUFBb0I7QUFFbkYsT0FBTyxJQUFNRSx1QkFJUjtRQUNIQyxpQkFBQUEsVUFDQUMsa0JBQUFBLFdBQ0FDLG1CQUFBQSxzQ0FDQUEsd0RB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
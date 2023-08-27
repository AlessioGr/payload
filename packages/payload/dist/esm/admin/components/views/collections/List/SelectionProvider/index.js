function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "qs";
import { useLocale } from "../../../../utilities/Locale";
export var SelectAllStatus;
(function(SelectAllStatus) {
    SelectAllStatus["AllAvailable"] = "allAvailable";
    SelectAllStatus["AllInPage"] = "allInPage";
    SelectAllStatus["Some"] = "some";
    SelectAllStatus["None"] = "none";
})(SelectAllStatus || (SelectAllStatus = {}));
var Context = /*#__PURE__*/ createContext({});
export var SelectionProvider = function(param) {
    var children = param.children, _param_docs = param.docs, docs = _param_docs === void 0 ? [] : _param_docs, totalDocs = param.totalDocs;
    var contextRef = useRef({});
    var history = useHistory();
    var _useLocale = useLocale(), locale = _useLocale.code;
    var _useState = _sliced_to_array(useState({}), 2), selected = _useState[0], setSelected = _useState[1];
    var _useState1 = _sliced_to_array(useState(SelectAllStatus.None), 2), selectAll = _useState1[0], setSelectAll = _useState1[1];
    var _useState2 = _sliced_to_array(useState(0), 2), count = _useState2[0], setCount = _useState2[1];
    var toggleAll = useCallback(function() {
        var allAvailable = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        var rows = {};
        if (allAvailable) {
            setSelectAll(SelectAllStatus.AllAvailable);
            docs.forEach(function(param) {
                var id = param.id;
                rows[id] = true;
            });
        } else if (selectAll === SelectAllStatus.AllAvailable || selectAll === SelectAllStatus.AllInPage) {
            setSelectAll(SelectAllStatus.None);
            docs.forEach(function(param) {
                var id = param.id;
                rows[id] = false;
            });
        } else {
            docs.forEach(function(param) {
                var id = param.id;
                rows[id] = selectAll !== SelectAllStatus.Some;
            });
        }
        setSelected(rows);
    }, [
        docs,
        selectAll
    ]);
    var setSelection = useCallback(function(id) {
        var isSelected = !selected[id];
        var newSelected = _object_spread_props(_object_spread({}, selected), _define_property({}, id, isSelected));
        if (!isSelected) {
            setSelectAll(SelectAllStatus.Some);
        }
        setSelected(newSelected);
    }, [
        selected
    ]);
    var getQueryParams = useCallback(function(additionalParams) {
        var where;
        if (selectAll === SelectAllStatus.AllAvailable) {
            var params = queryString.parse(history.location.search, {
                ignoreQueryPrefix: true
            }).where;
            where = params || {
                id: {
                    not_equals: ""
                }
            };
        } else {
            where = {
                id: {
                    in: Object.keys(selected).filter(function(id) {
                        return selected[id];
                    }).map(function(id) {
                        return id;
                    })
                }
            };
        }
        if (additionalParams) {
            where = {
                and: [
                    _object_spread({}, additionalParams),
                    where
                ]
            };
        }
        return queryString.stringify({
            where: where,
            locale: locale
        }, {
            addQueryPrefix: true
        });
    }, [
        history.location.search,
        selectAll,
        selected,
        locale
    ]);
    useEffect(function() {
        if (selectAll === SelectAllStatus.AllAvailable) {
            return;
        }
        var some = false;
        var all = true;
        Object.values(selected).forEach(function(val) {
            all = all && val;
            some = some || val;
        });
        if (all) {
            setSelectAll(SelectAllStatus.AllInPage);
        } else if (some) {
            setSelectAll(SelectAllStatus.Some);
        } else {
            setSelectAll(SelectAllStatus.None);
        }
    }, [
        docs,
        selectAll,
        selected
    ]);
    useEffect(function() {
        var rows = {};
        if (docs.length) {
            docs.forEach(function(param) {
                var id = param.id;
                rows[id] = false;
            });
            setSelected(rows);
        }
        setSelectAll(SelectAllStatus.None);
    }, [
        docs,
        history
    ]);
    useEffect(function() {
        var newCount = selectAll === SelectAllStatus.AllAvailable ? totalDocs : Object.keys(selected).filter(function(id) {
            return selected[id];
        }).length;
        setCount(newCount);
    }, [
        selectAll,
        selected,
        totalDocs
    ]);
    contextRef.current = {
        selectAll: selectAll,
        toggleAll: toggleAll,
        selected: selected,
        setSelection: setSelection,
        totalDocs: totalDocs,
        count: count,
        getQueryParams: getQueryParams
    };
    return /*#__PURE__*/ React.createElement(Context.Provider, {
        value: contextRef.current
    }, children);
};
export var useSelection = function() {
    return useContext(Context);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvU2VsZWN0aW9uUHJvdmlkZXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gJ3FzJztcbmltcG9ydCB7IFdoZXJlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSc7XG5cbmV4cG9ydCBlbnVtIFNlbGVjdEFsbFN0YXR1cyB7XG4gIEFsbEF2YWlsYWJsZSA9ICdhbGxBdmFpbGFibGUnLFxuICBBbGxJblBhZ2UgPSAnYWxsSW5QYWdlJyxcbiAgU29tZSA9ICdzb21lJyxcbiAgTm9uZSA9ICdub25lJyxcbn1cblxudHlwZSBTZWxlY3Rpb25Db250ZXh0ID0ge1xuICBzZWxlY3RlZDogUmVjb3JkPHN0cmluZyB8IG51bWJlciwgYm9vbGVhbj5cbiAgc2V0U2VsZWN0aW9uOiAoaWQ6IHN0cmluZyB8IG51bWJlcikgPT4gdm9pZFxuICBzZWxlY3RBbGw6IFNlbGVjdEFsbFN0YXR1c1xuICB0b2dnbGVBbGw6IChhbGxBdmFpbGFibGU/OiBib29sZWFuKSA9PiB2b2lkXG4gIHRvdGFsRG9jczogbnVtYmVyXG4gIGNvdW50OiBudW1iZXJcbiAgZ2V0UXVlcnlQYXJhbXM6IChhZGRpdGlvbmFsUGFyYW1zPzogV2hlcmUpID0+IHN0cmluZ1xufVxuXG5jb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBTZWxlY3Rpb25Db250ZXh0KTtcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxuICBkb2NzOiBhbnlbXVxuICB0b3RhbERvY3M6IG51bWJlclxufVxuZXhwb3J0IGNvbnN0IFNlbGVjdGlvblByb3ZpZGVyOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBjaGlsZHJlbiwgZG9jcyA9IFtdLCB0b3RhbERvY3MgfSkgPT4ge1xuICBjb25zdCBjb250ZXh0UmVmID0gdXNlUmVmKHt9IGFzIFNlbGVjdGlvbkNvbnRleHQpO1xuXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG4gIGNvbnN0IHsgY29kZTogbG9jYWxlIH0gPSB1c2VMb2NhbGUoKTtcbiAgY29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZTxTZWxlY3Rpb25Db250ZXh0WydzZWxlY3RlZCddPih7fSk7XG4gIGNvbnN0IFtzZWxlY3RBbGwsIHNldFNlbGVjdEFsbF0gPSB1c2VTdGF0ZTxTZWxlY3RBbGxTdGF0dXM+KFNlbGVjdEFsbFN0YXR1cy5Ob25lKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCB0b2dnbGVBbGwgPSB1c2VDYWxsYmFjaygoYWxsQXZhaWxhYmxlID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCByb3dzID0ge307XG4gICAgaWYgKGFsbEF2YWlsYWJsZSkge1xuICAgICAgc2V0U2VsZWN0QWxsKFNlbGVjdEFsbFN0YXR1cy5BbGxBdmFpbGFibGUpO1xuICAgICAgZG9jcy5mb3JFYWNoKCh7IGlkIH0pID0+IHtcbiAgICAgICAgcm93c1tpZF0gPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChzZWxlY3RBbGwgPT09IFNlbGVjdEFsbFN0YXR1cy5BbGxBdmFpbGFibGUgfHwgc2VsZWN0QWxsID09PSBTZWxlY3RBbGxTdGF0dXMuQWxsSW5QYWdlKSB7XG4gICAgICBzZXRTZWxlY3RBbGwoU2VsZWN0QWxsU3RhdHVzLk5vbmUpO1xuICAgICAgZG9jcy5mb3JFYWNoKCh7IGlkIH0pID0+IHtcbiAgICAgICAgcm93c1tpZF0gPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2NzLmZvckVhY2goKHsgaWQgfSkgPT4ge1xuICAgICAgICByb3dzW2lkXSA9IHNlbGVjdEFsbCAhPT0gU2VsZWN0QWxsU3RhdHVzLlNvbWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgc2V0U2VsZWN0ZWQocm93cyk7XG4gIH0sIFtkb2NzLCBzZWxlY3RBbGxdKTtcblxuICBjb25zdCBzZXRTZWxlY3Rpb24gPSB1c2VDYWxsYmFjaygoaWQpID0+IHtcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gIXNlbGVjdGVkW2lkXTtcbiAgICBjb25zdCBuZXdTZWxlY3RlZCA9IHtcbiAgICAgIC4uLnNlbGVjdGVkLFxuICAgICAgW2lkXTogaXNTZWxlY3RlZCxcbiAgICB9O1xuICAgIGlmICghaXNTZWxlY3RlZCkge1xuICAgICAgc2V0U2VsZWN0QWxsKFNlbGVjdEFsbFN0YXR1cy5Tb21lKTtcbiAgICB9XG4gICAgc2V0U2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xuICB9LCBbc2VsZWN0ZWRdKTtcblxuICBjb25zdCBnZXRRdWVyeVBhcmFtcyA9IHVzZUNhbGxiYWNrKChhZGRpdGlvbmFsUGFyYW1zPzogV2hlcmUpOiBzdHJpbmcgPT4ge1xuICAgIGxldCB3aGVyZTogV2hlcmU7XG4gICAgaWYgKHNlbGVjdEFsbCA9PT0gU2VsZWN0QWxsU3RhdHVzLkFsbEF2YWlsYWJsZSkge1xuICAgICAgY29uc3QgcGFyYW1zID0gcXVlcnlTdHJpbmcucGFyc2UoaGlzdG9yeS5sb2NhdGlvbi5zZWFyY2gsIHsgaWdub3JlUXVlcnlQcmVmaXg6IHRydWUgfSkud2hlcmUgYXMgV2hlcmU7XG4gICAgICB3aGVyZSA9IHBhcmFtcyB8fCB7XG4gICAgICAgIGlkOiB7IG5vdF9lcXVhbHM6ICcnIH0sXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB3aGVyZSA9IHtcbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICBpbjogT2JqZWN0LmtleXMoc2VsZWN0ZWQpLmZpbHRlcigoaWQpID0+IHNlbGVjdGVkW2lkXSkubWFwKChpZCkgPT4gaWQpLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKGFkZGl0aW9uYWxQYXJhbXMpIHtcbiAgICAgIHdoZXJlID0ge1xuICAgICAgICBhbmQ6IFtcbiAgICAgICAgICB7IC4uLmFkZGl0aW9uYWxQYXJhbXMgfSxcbiAgICAgICAgICB3aGVyZSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBxdWVyeVN0cmluZy5zdHJpbmdpZnkoe1xuICAgICAgd2hlcmUsXG4gICAgICBsb2NhbGUsXG4gICAgfSwgeyBhZGRRdWVyeVByZWZpeDogdHJ1ZSB9KTtcbiAgfSwgW2hpc3RvcnkubG9jYXRpb24uc2VhcmNoLCBzZWxlY3RBbGwsIHNlbGVjdGVkLCBsb2NhbGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWxlY3RBbGwgPT09IFNlbGVjdEFsbFN0YXR1cy5BbGxBdmFpbGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IHNvbWUgPSBmYWxzZTtcbiAgICBsZXQgYWxsID0gdHJ1ZTtcbiAgICBPYmplY3QudmFsdWVzKHNlbGVjdGVkKS5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgIGFsbCA9IGFsbCAmJiB2YWw7XG4gICAgICBzb21lID0gc29tZSB8fCB2YWw7XG4gICAgfSk7XG5cbiAgICBpZiAoYWxsKSB7XG4gICAgICBzZXRTZWxlY3RBbGwoU2VsZWN0QWxsU3RhdHVzLkFsbEluUGFnZSk7XG4gICAgfSBlbHNlIGlmIChzb21lKSB7XG4gICAgICBzZXRTZWxlY3RBbGwoU2VsZWN0QWxsU3RhdHVzLlNvbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RBbGwoU2VsZWN0QWxsU3RhdHVzLk5vbmUpO1xuICAgIH1cbiAgfSwgW2RvY3MsIHNlbGVjdEFsbCwgc2VsZWN0ZWRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHJvd3MgPSB7fTtcbiAgICBpZiAoZG9jcy5sZW5ndGgpIHtcbiAgICAgIGRvY3MuZm9yRWFjaCgoeyBpZCB9KSA9PiB7XG4gICAgICAgIHJvd3NbaWRdID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHNldFNlbGVjdGVkKHJvd3MpO1xuICAgIH1cbiAgICBzZXRTZWxlY3RBbGwoU2VsZWN0QWxsU3RhdHVzLk5vbmUpO1xuICB9LCBbZG9jcywgaGlzdG9yeV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmV3Q291bnQgPSBzZWxlY3RBbGwgPT09IFNlbGVjdEFsbFN0YXR1cy5BbGxBdmFpbGFibGUgPyB0b3RhbERvY3MgOiBPYmplY3Qua2V5cyhzZWxlY3RlZCkuZmlsdGVyKChpZCkgPT4gc2VsZWN0ZWRbaWRdKS5sZW5ndGg7XG4gICAgc2V0Q291bnQobmV3Q291bnQpO1xuICB9LCBbc2VsZWN0QWxsLCBzZWxlY3RlZCwgdG90YWxEb2NzXSk7XG5cbiAgY29udGV4dFJlZi5jdXJyZW50ID0ge1xuICAgIHNlbGVjdEFsbCxcbiAgICB0b2dnbGVBbGwsXG4gICAgc2VsZWN0ZWQsXG4gICAgc2V0U2VsZWN0aW9uLFxuICAgIHRvdGFsRG9jcyxcbiAgICBjb3VudCxcbiAgICBnZXRRdWVyeVBhcmFtcyxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0UmVmLmN1cnJlbnR9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VTZWxlY3Rpb24gPSAoKTogU2VsZWN0aW9uQ29udGV4dCA9PiB1c2VDb250ZXh0KENvbnRleHQpO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlSGlzdG9yeSIsInF1ZXJ5U3RyaW5nIiwidXNlTG9jYWxlIiwiU2VsZWN0QWxsU3RhdHVzIiwiQWxsQXZhaWxhYmxlIiwiQWxsSW5QYWdlIiwiU29tZSIsIk5vbmUiLCJDb250ZXh0IiwiU2VsZWN0aW9uUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRvY3MiLCJ0b3RhbERvY3MiLCJjb250ZXh0UmVmIiwiaGlzdG9yeSIsImNvZGUiLCJsb2NhbGUiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwic2VsZWN0QWxsIiwic2V0U2VsZWN0QWxsIiwiY291bnQiLCJzZXRDb3VudCIsInRvZ2dsZUFsbCIsImFsbEF2YWlsYWJsZSIsInJvd3MiLCJmb3JFYWNoIiwiaWQiLCJzZXRTZWxlY3Rpb24iLCJpc1NlbGVjdGVkIiwibmV3U2VsZWN0ZWQiLCJnZXRRdWVyeVBhcmFtcyIsImFkZGl0aW9uYWxQYXJhbXMiLCJ3aGVyZSIsInBhcmFtcyIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJpZ25vcmVRdWVyeVByZWZpeCIsIm5vdF9lcXVhbHMiLCJpbiIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJtYXAiLCJhbmQiLCJzdHJpbmdpZnkiLCJhZGRRdWVyeVByZWZpeCIsInNvbWUiLCJhbGwiLCJ2YWx1ZXMiLCJ2YWwiLCJsZW5ndGgiLCJuZXdDb3VudCIsImN1cnJlbnQiLCJQcm92aWRlciIsInZhbHVlIiwidXNlU2VsZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVNDLGFBQWEsRUFBRUMsV0FBVyxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxRQUFRLFFBQVEsUUFBUTtBQUNuRyxTQUFTQyxVQUFVLFFBQVEs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
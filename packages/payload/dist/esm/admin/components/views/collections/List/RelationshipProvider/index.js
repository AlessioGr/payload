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
import React, { createContext, useCallback, useContext, useEffect, useReducer, useRef } from "react";
import querystring from "qs";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../../../utilities/Config";
import { reducer } from "./reducer";
import useDebounce from "../../../../../hooks/useDebounce";
import { useLocale } from "../../../../utilities/Locale";
var Context = /*#__PURE__*/ createContext({});
export var RelationshipProvider = function(param) {
    var children = param.children;
    var _useReducer = _sliced_to_array(useReducer(reducer, {}), 2), documents = _useReducer[0], dispatchDocuments = _useReducer[1];
    var debouncedDocuments = useDebounce(documents, 100);
    var config = useConfig();
    var i18n = useTranslation().i18n;
    var _useLocale = useLocale(), locale = _useLocale.code;
    var prevLocale = useRef(locale);
    var serverURL = config.serverURL, api = config.routes.api;
    var loadRelationshipDocs = useCallback(/*#__PURE__*/ _async_to_generator(function() {
        var reloadAll;
        var _arguments = arguments;
        return _ts_generator(this, function(_state) {
            reloadAll = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : false;
            Object.entries(debouncedDocuments).forEach(function() {
                var _ref = _async_to_generator(function(param) {
                    var _param, slug, docs, idsToLoad, url, params, query, result, json;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _param = _sliced_to_array(param, 2), slug = _param[0], docs = _param[1];
                                idsToLoad = [];
                                Object.entries(docs).forEach(function(param) {
                                    var _param = _sliced_to_array(param, 2), id = _param[0], value = _param[1];
                                    if (value === null || reloadAll) {
                                        idsToLoad.push(id);
                                    }
                                });
                                if (!(idsToLoad.length > 0)) return [
                                    3,
                                    4
                                ];
                                url = "".concat(serverURL).concat(api, "/").concat(slug);
                                params = {
                                    depth: 0,
                                    "where[id][in]": idsToLoad,
                                    locale: locale,
                                    limit: 250
                                };
                                query = querystring.stringify(params, {
                                    addQueryPrefix: true
                                });
                                return [
                                    4,
                                    fetch("".concat(url).concat(query), {
                                        credentials: "include",
                                        headers: {
                                            "Accept-Language": i18n.language
                                        }
                                    })
                                ];
                            case 1:
                                result = _state.sent();
                                if (!result.ok) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    result.json()
                                ];
                            case 2:
                                json = _state.sent();
                                if (json.docs) {
                                    dispatchDocuments({
                                        type: "ADD_LOADED",
                                        docs: json.docs,
                                        relationTo: slug,
                                        idsToLoad: idsToLoad
                                    });
                                }
                                return [
                                    3,
                                    4
                                ];
                            case 3:
                                dispatchDocuments({
                                    type: "ADD_LOADED",
                                    docs: [],
                                    relationTo: slug,
                                    idsToLoad: idsToLoad
                                });
                                _state.label = 4;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                });
                return function(_) {
                    return _ref.apply(this, arguments);
                };
            }());
            return [
                2
            ];
        });
    }), [
        debouncedDocuments,
        serverURL,
        api,
        i18n,
        locale
    ]);
    useEffect(function() {
        loadRelationshipDocs(locale && prevLocale.current !== locale);
        prevLocale.current = locale;
    }, [
        locale,
        loadRelationshipDocs
    ]);
    var getRelationships = useCallback(function() {
        var _ref = _async_to_generator(function(relationships) {
            return _ts_generator(this, function(_state) {
                dispatchDocuments({
                    type: "REQUEST",
                    docs: relationships
                });
                return [
                    2
                ];
            });
        });
        return function(relationships) {
            return _ref.apply(this, arguments);
        };
    }(), []);
    return /*#__PURE__*/ React.createElement(Context.Provider, {
        value: {
            getRelationships: getRelationships,
            documents: documents
        }
    }, children);
};
export var useListRelationships = function() {
    return useContext(Context);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvUmVsYXRpb25zaGlwUHJvdmlkZXIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcXVlcnlzdHJpbmcgZnJvbSAncXMnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHsgVHlwZVdpdGhJRCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCB1c2VEZWJvdW5jZSBmcm9tICcuLi8uLi8uLi8uLi8uLi9ob29rcy91c2VEZWJvdW5jZSc7XG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsaXRpZXMvTG9jYWxlJztcblxuLy8gZG9jdW1lbnRzIGFyZSBmaXJzdCBzZXQgdG8gbnVsbCB3aGVuIHJlcXVlc3RlZFxuLy8gc2V0IHRvIGZhbHNlIHdoZW4gbm8gZG9jIGlzIHJldHVybmVkXG4vLyBvciBzZXQgdG8gdGhlIGRvY3VtZW50IHJldHVybmVkXG5leHBvcnQgdHlwZSBEb2N1bWVudHMgPSB7XG4gIFtzbHVnOiBzdHJpbmddOiB7XG4gICAgW2lkOiBzdHJpbmcgfCBudW1iZXJdOiBUeXBlV2l0aElEIHwgbnVsbCB8IGZhbHNlXG4gIH1cbn1cblxudHlwZSBMaXN0UmVsYXRpb25zaGlwQ29udGV4dCA9IHtcbiAgZ2V0UmVsYXRpb25zaGlwczogKGRvY3M6IHtcbiAgICByZWxhdGlvblRvOiBzdHJpbmcsXG4gICAgdmFsdWU6IG51bWJlciB8IHN0cmluZ1xuICB9W10pID0+IHZvaWQ7XG4gIGRvY3VtZW50czogRG9jdW1lbnRzXG59XG5cbmNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIExpc3RSZWxhdGlvbnNoaXBDb250ZXh0KTtcblxuZXhwb3J0IGNvbnN0IFJlbGF0aW9uc2hpcFByb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlIH0+ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbZG9jdW1lbnRzLCBkaXNwYXRjaERvY3VtZW50c10gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHt9KTtcbiAgY29uc3QgZGVib3VuY2VkRG9jdW1lbnRzID0gdXNlRGVib3VuY2UoZG9jdW1lbnRzLCAxMDApO1xuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IHByZXZMb2NhbGUgPSB1c2VSZWYobG9jYWxlKTtcblxuICBjb25zdCB7XG4gICAgc2VydmVyVVJMLFxuICAgIHJvdXRlczogeyBhcGkgfSxcbiAgfSA9IGNvbmZpZztcblxuICBjb25zdCBsb2FkUmVsYXRpb25zaGlwRG9jcyA9IHVzZUNhbGxiYWNrKGFzeW5jIChyZWxvYWRBbGwgPSBmYWxzZSkgPT4ge1xuICAgIE9iamVjdC5lbnRyaWVzKGRlYm91bmNlZERvY3VtZW50cykuZm9yRWFjaChhc3luYyAoW3NsdWcsIGRvY3NdKSA9PiB7XG4gICAgICBjb25zdCBpZHNUb0xvYWQ6IChzdHJpbmcgfCBudW1iZXIpW10gPSBbXTtcblxuICAgICAgT2JqZWN0LmVudHJpZXMoZG9jcykuZm9yRWFjaCgoW2lkLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHJlbG9hZEFsbCkge1xuICAgICAgICAgIGlkc1RvTG9hZC5wdXNoKGlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cblxuICAgICAgaWYgKGlkc1RvTG9hZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IGAke3NlcnZlclVSTH0ke2FwaX0vJHtzbHVnfWA7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICBkZXB0aDogMCxcbiAgICAgICAgICAnd2hlcmVbaWRdW2luXSc6IGlkc1RvTG9hZCxcbiAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgbGltaXQ6IDI1MCxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBxdWVyeSA9IHF1ZXJ5c3RyaW5nLnN0cmluZ2lmeShwYXJhbXMsIHsgYWRkUXVlcnlQcmVmaXg6IHRydWUgfSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGAke3VybH0ke3F1ZXJ5fWAsIHtcbiAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBpMThuLmxhbmd1YWdlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXN1bHQub2spIHtcbiAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbiAgICAgICAgICBpZiAoanNvbi5kb2NzKSB7XG4gICAgICAgICAgICBkaXNwYXRjaERvY3VtZW50cyh7IHR5cGU6ICdBRERfTE9BREVEJywgZG9jczoganNvbi5kb2NzLCByZWxhdGlvblRvOiBzbHVnLCBpZHNUb0xvYWQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoRG9jdW1lbnRzKHsgdHlwZTogJ0FERF9MT0FERUQnLCBkb2NzOiBbXSwgcmVsYXRpb25Ubzogc2x1ZywgaWRzVG9Mb2FkIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtkZWJvdW5jZWREb2N1bWVudHMsIHNlcnZlclVSTCwgYXBpLCBpMThuLCBsb2NhbGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRSZWxhdGlvbnNoaXBEb2NzKGxvY2FsZSAmJiBwcmV2TG9jYWxlLmN1cnJlbnQgIT09IGxvY2FsZSk7XG4gICAgcHJldkxvY2FsZS5jdXJyZW50ID0gbG9jYWxlO1xuICB9LCBbbG9jYWxlLCBsb2FkUmVsYXRpb25zaGlwRG9jc10pO1xuXG4gIGNvbnN0IGdldFJlbGF0aW9uc2hpcHMgPSB1c2VDYWxsYmFjayhhc3luYyAocmVsYXRpb25zaGlwczogeyByZWxhdGlvblRvOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIgfCBzdHJpbmcgfVtdKSA9PiB7XG4gICAgZGlzcGF0Y2hEb2N1bWVudHMoeyB0eXBlOiAnUkVRVUVTVCcsIGRvY3M6IHJlbGF0aW9uc2hpcHMgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGdldFJlbGF0aW9uc2hpcHMsIGRvY3VtZW50cyB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlTGlzdFJlbGF0aW9uc2hpcHMgPSAoKTogTGlzdFJlbGF0aW9uc2hpcENvbnRleHQgPT4gdXNlQ29udGV4dChDb250ZXh0KTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWR1Y2VyIiwidXNlUmVmIiwicXVlcnlzdHJpbmciLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUNvbmZpZyIsInJlZHVjZXIiLCJ1c2VEZWJvdW5jZSIsInVzZUxvY2FsZSIsIkNvbnRleHQiLCJSZWxhdGlvbnNoaXBQcm92aWRlciIsImNoaWxkcmVuIiwiZG9jdW1lbnRzIiwiZGlzcGF0Y2hEb2N1bWVudHMiLCJkZWJvdW5jZWREb2N1bWVudHMiLCJjb25maWciLCJpMThuIiwiY29kZSIsImxvY2FsZSIsInByZXZMb2NhbGUiLCJzZXJ2ZXJVUkwiLCJyb3V0ZXMiLCJhcGkiLCJsb2FkUmVsYXRpb25zaGlwRG9jcyIsInJlbG9hZEFsbCIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwic2x1ZyIsImRvY3MiLCJpZHNUb0xvYWQiLCJ1cmwiLCJwYXJhbXMiLCJxdWVyeSIsInJlc3VsdCIsImpzb24iLCJpZCIsInZhbHVlIiwicHVzaCIsImxlbmd0aCIsImRlcHRoIiwibGltaXQiLCJzdHJpbmdpZnkiLCJhZGRRdWVyeVByZWZpeCIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwibGFuZ3VhZ2UiLCJvayIsInR5cGUiLCJyZWxhdGlvblRvIiwiY3VycmVudCIsImdldFJlbGF0aW9uc2hpcHMiLCJyZWxhdGlvbnNoaXBzIiwiUHJvdmlkZXIiLCJ1c2VMaXN0UmVsYXRpb25zaGlwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTQyxhQUFhLEVBQUVDLFdBQVcsRUFBRUMsVUFBVSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsTUFBTSxRQUFRLFFBQVE7QUFDckcsT0FBT0MsaUJBQWlCLEtBQUs7QUFDN0IsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUFTQyxTQUFTLFFBQVEsK0JBQStCO0FBRXpELFNBQVNDLE9BQU8sUUFBUSxZQUFZO0FBQ3BDLE9BQU9DLGlCQUFpQixtQ0FBbUM7QUFDM0QsU0FBU0MsU0FBUyxRQUFR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
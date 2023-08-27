function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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
import React, { useState, useCallback, useEffect } from "react";
import qs from "qs";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../../utilities/Config";
import ReactSelect from "../../../elements/ReactSelect";
import { mostRecentVersionOption, publishedVersionOption } from "../shared";
import { formatDate } from "../../../../utilities/formatDate";
import "./index.scss";
var baseClass = "compare-version";
var maxResultsPerRequest = 10;
var baseOptions = [
    mostRecentVersionOption
];
var CompareVersion = function(props) {
    var onChange = props.onChange, value = props.value, baseURL = props.baseURL, versionID = props.versionID, parentID = props.parentID, publishedDoc = props.publishedDoc;
    var _useConfig = useConfig(), dateFormat = _useConfig.admin.dateFormat;
    var _useState = _sliced_to_array(useState(baseOptions), 2), options = _useState[0], setOptions = _useState[1];
    var _useState1 = _sliced_to_array(useState(1), 2), lastLoadedPage = _useState1[0], setLastLoadedPage = _useState1[1];
    var _useState2 = _sliced_to_array(useState(""), 2), errorLoading = _useState2[0], setErrorLoading = _useState2[1];
    var _useTranslation = useTranslation("version"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var getResults = useCallback(function() {
        var _ref = _async_to_generator(function(param) {
            var lastLoadedPageArg, query, search, response, data;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        lastLoadedPageArg = param.lastLoadedPage;
                        query = {
                            limit: maxResultsPerRequest,
                            page: lastLoadedPageArg,
                            depth: 0,
                            where: {
                                and: [
                                    {
                                        id: {
                                            not_equals: versionID
                                        }
                                    }
                                ]
                            }
                        };
                        if (parentID) {
                            query.where.and.push({
                                parent: {
                                    equals: parentID
                                }
                            });
                        }
                        search = qs.stringify(query);
                        return [
                            4,
                            fetch("".concat(baseURL, "?").concat(search), {
                                credentials: "include",
                                headers: {
                                    "Accept-Language": i18n.language
                                }
                            })
                        ];
                    case 1:
                        response = _state.sent();
                        if (!response.ok) return [
                            3,
                            3
                        ];
                        return [
                            4,
                            response.json()
                        ];
                    case 2:
                        data = _state.sent();
                        if (data.docs.length > 0) {
                            setOptions(function(existingOptions) {
                                return _to_consumable_array(existingOptions).concat(_to_consumable_array(data.docs.map(function(doc) {
                                    var _i18n;
                                    return {
                                        label: formatDate(doc.updatedAt, dateFormat, (_i18n = i18n) === null || _i18n === void 0 ? void 0 : _i18n.language),
                                        value: doc.id
                                    };
                                })));
                            });
                            setLastLoadedPage(data.page);
                        }
                        return [
                            3,
                            4
                        ];
                    case 3:
                        setErrorLoading(t("error:unspecific"));
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
    }(), [
        dateFormat,
        baseURL,
        parentID,
        versionID,
        t,
        i18n
    ]);
    var classes = [
        "field-type",
        baseClass,
        errorLoading && "error-loading"
    ].filter(Boolean).join(" ");
    useEffect(function() {
        getResults({
            lastLoadedPage: 1
        });
    }, [
        getResults
    ]);
    useEffect(function() {
        var _publishedDoc;
        if (((_publishedDoc = publishedDoc) === null || _publishedDoc === void 0 ? void 0 : _publishedDoc._status) === "published") setOptions(function(currentOptions) {
            return [
                publishedVersionOption
            ].concat(_to_consumable_array(currentOptions));
        });
    }, [
        publishedDoc
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: classes
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, t("compareVersion")), !errorLoading && /*#__PURE__*/ React.createElement(ReactSelect, {
        isSearchable: false,
        placeholder: t("selectVersionToCompare"),
        onChange: onChange,
        onMenuScrollToBottom: function() {
            getResults({
                lastLoadedPage: lastLoadedPage + 1
            });
        },
        value: value,
        options: options
    }), errorLoading && /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__error-loading")
    }, errorLoading));
};
export default CompareVersion;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vQ29tcGFyZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHFzIGZyb20gJ3FzJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvQ29uZmlnJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgUmVhY3RTZWxlY3QgZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvUmVhY3RTZWxlY3QnO1xuaW1wb3J0IHR5cGUgeyBQYWdpbmF0ZWREb2NzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZGF0YWJhc2UvdHlwZXMnO1xuaW1wb3J0IHsgV2hlcmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBtb3N0UmVjZW50VmVyc2lvbk9wdGlvbiwgcHVibGlzaGVkVmVyc2lvbk9wdGlvbiB9IGZyb20gJy4uL3NoYXJlZCc7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2Zvcm1hdERhdGUnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdjb21wYXJlLXZlcnNpb24nO1xuXG5jb25zdCBtYXhSZXN1bHRzUGVyUmVxdWVzdCA9IDEwO1xuXG5jb25zdCBiYXNlT3B0aW9ucyA9IFtcbiAgbW9zdFJlY2VudFZlcnNpb25PcHRpb24sXG5dO1xuXG5jb25zdCBDb21wYXJlVmVyc2lvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb25DaGFuZ2UsIHZhbHVlLCBiYXNlVVJMLCB2ZXJzaW9uSUQsIHBhcmVudElELCBwdWJsaXNoZWREb2MgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHtcbiAgICBhZG1pbjoge1xuICAgICAgZGF0ZUZvcm1hdCxcbiAgICB9LFxuICB9ID0gdXNlQ29uZmlnKCk7XG5cbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoYmFzZU9wdGlvbnMpO1xuICBjb25zdCBbbGFzdExvYWRlZFBhZ2UsIHNldExhc3RMb2FkZWRQYWdlXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbZXJyb3JMb2FkaW5nLCBzZXRFcnJvckxvYWRpbmddID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCd2ZXJzaW9uJyk7XG5cbiAgY29uc3QgZ2V0UmVzdWx0cyA9IHVzZUNhbGxiYWNrKGFzeW5jICh7XG4gICAgbGFzdExvYWRlZFBhZ2U6IGxhc3RMb2FkZWRQYWdlQXJnLFxuICB9KSA9PiB7XG4gICAgY29uc3QgcXVlcnk6IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IHVua25vd25cbiAgICAgIHdoZXJlOiBXaGVyZVxuICAgIH0gPSB7XG4gICAgICBsaW1pdDogbWF4UmVzdWx0c1BlclJlcXVlc3QsXG4gICAgICBwYWdlOiBsYXN0TG9hZGVkUGFnZUFyZyxcbiAgICAgIGRlcHRoOiAwLFxuICAgICAgd2hlcmU6IHtcbiAgICAgICAgYW5kOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgICAgbm90X2VxdWFsczogdmVyc2lvbklELFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgaWYgKHBhcmVudElEKSB7XG4gICAgICBxdWVyeS53aGVyZS5hbmQucHVzaCh7XG4gICAgICAgIHBhcmVudDoge1xuICAgICAgICAgIGVxdWFsczogcGFyZW50SUQsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWFyY2ggPSBxcy5zdHJpbmdpZnkocXVlcnkpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0/JHtzZWFyY2h9YCwge1xuICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6IGkxOG4ubGFuZ3VhZ2UsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zdCBkYXRhOiBQYWdpbmF0ZWREb2NzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgaWYgKGRhdGEuZG9jcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHNldE9wdGlvbnMoKGV4aXN0aW5nT3B0aW9ucykgPT4gW1xuICAgICAgICAgIC4uLmV4aXN0aW5nT3B0aW9ucyxcbiAgICAgICAgICAuLi5kYXRhLmRvY3MubWFwKChkb2MpID0+ICh7XG4gICAgICAgICAgICBsYWJlbDogZm9ybWF0RGF0ZShkb2MudXBkYXRlZEF0LCBkYXRlRm9ybWF0LCBpMThuPy5sYW5ndWFnZSksXG4gICAgICAgICAgICB2YWx1ZTogZG9jLmlkLFxuICAgICAgICAgIH0pKSxcbiAgICAgICAgXSk7XG4gICAgICAgIHNldExhc3RMb2FkZWRQYWdlKGRhdGEucGFnZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEVycm9yTG9hZGluZyh0KCdlcnJvcjp1bnNwZWNpZmljJykpO1xuICAgIH1cbiAgfSwgW2RhdGVGb3JtYXQsIGJhc2VVUkwsIHBhcmVudElELCB2ZXJzaW9uSUQsIHQsIGkxOG5dKTtcblxuICBjb25zdCBjbGFzc2VzID0gW1xuICAgICdmaWVsZC10eXBlJyxcbiAgICBiYXNlQ2xhc3MsXG4gICAgZXJyb3JMb2FkaW5nICYmICdlcnJvci1sb2FkaW5nJyxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UmVzdWx0cyh7IGxhc3RMb2FkZWRQYWdlOiAxIH0pO1xuICB9LCBbZ2V0UmVzdWx0c10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHB1Ymxpc2hlZERvYz8uX3N0YXR1cyA9PT0gJ3B1Ymxpc2hlZCcpIHNldE9wdGlvbnMoKGN1cnJlbnRPcHRpb25zKSA9PiBbcHVibGlzaGVkVmVyc2lvbk9wdGlvbiwgLi4uY3VycmVudE9wdGlvbnNdKTtcbiAgfSwgW3B1Ymxpc2hlZERvY10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+XG4gICAgICAgIHt0KCdjb21wYXJlVmVyc2lvbicpfVxuICAgICAgPC9kaXY+XG4gICAgICB7IWVycm9yTG9hZGluZyAmJiAoXG4gICAgICAgIDxSZWFjdFNlbGVjdFxuICAgICAgICAgIGlzU2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3QoJ3NlbGVjdFZlcnNpb25Ub0NvbXBhcmUnKX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgb25NZW51U2Nyb2xsVG9Cb3R0b209eygpID0+IHtcbiAgICAgICAgICAgIGdldFJlc3VsdHMoeyBsYXN0TG9hZGVkUGFnZTogbGFzdExvYWRlZFBhZ2UgKyAxIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAge2Vycm9yTG9hZGluZyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19lcnJvci1sb2FkaW5nYH0+XG4gICAgICAgICAge2Vycm9yTG9hZGluZ31cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFyZVZlcnNpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwicXMiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUNvbmZpZyIsIlJlYWN0U2VsZWN0IiwibW9zdFJlY2VudFZlcnNpb25PcHRpb24iLCJwdWJsaXNoZWRWZXJzaW9uT3B0aW9uIiwiZm9ybWF0RGF0ZSIsImJhc2VDbGFzcyIsIm1heFJlc3VsdHNQZXJSZXF1ZXN0IiwiYmFzZU9wdGlvbnMiLCJDb21wYXJlVmVyc2lvbiIsInByb3BzIiwib25DaGFuZ2UiLCJ2YWx1ZSIsImJhc2VVUkwiLCJ2ZXJzaW9uSUQiLCJwYXJlbnRJRCIsInB1Ymxpc2hlZERvYyIsImFkbWluIiwiZGF0ZUZvcm1hdCIsIm9wdGlvbnMiLCJzZXRPcHRpb25zIiwibGFzdExvYWRlZFBhZ2UiLCJzZXRMYXN0TG9hZGVkUGFnZSIsImVycm9yTG9hZGluZyIsInNldEVycm9yTG9hZGluZyIsInQiLCJpMThuIiwiZ2V0UmVzdWx0cyIsImxhc3RMb2FkZWRQYWdlQXJnIiwicXVlcnkiLCJzZWFyY2giLCJyZXNwb25zZSIsImRhdGEiLCJsaW1pdCIsInBhZ2UiLCJkZXB0aCIsIndoZXJlIiwiYW5kIiwiaWQiLCJub3RfZXF1YWxzIiwicHVzaCIsInBhcmVudCIsImVxdWFscyIsInN0cmluZ2lmeSIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwibGFuZ3VhZ2UiLCJvayIsImpzb24iLCJkb2NzIiwibGVuZ3RoIiwiZXhpc3RpbmdPcHRpb25zIiwibWFwIiwiZG9jIiwibGFiZWwiLCJ1cGRhdGVkQXQiLCJjbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJfc3RhdHVzIiwiY3VycmVudE9wdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJpc1NlYXJjaGFibGUiLCJwbGFjZWhvbGRlciIsIm9uTWVudVNjcm9sbFRvQm90dG9tIl0sIm1hcHBpbmdz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
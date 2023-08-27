"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
var _reactrouterdom = require("react-router-dom");
var _reacti18next = require("react-i18next");
var _SearchParams = require("../../utilities/SearchParams");
var _Popup = /*#__PURE__*/ _interop_require_default(require("../Popup"));
var _Chevron = /*#__PURE__*/ _interop_require_default(require("../../icons/Chevron"));
var _defaults = require("../../../../collections/config/defaults");
require("./index.scss");
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
var baseClass = "per-page";
var defaultLimits = _defaults.defaults.admin.pagination.limits;
var PerPage = function(param) {
    var _param_limits = param.limits, limits = _param_limits === void 0 ? defaultLimits : _param_limits, limit = param.limit, handleChange = param.handleChange, _param_modifySearchParams = param.modifySearchParams, modifySearchParams = _param_modifySearchParams === void 0 ? true : _param_modifySearchParams, _param_resetPage = param.resetPage, resetPage = _param_resetPage === void 0 ? false : _param_resetPage;
    var params = (0, _SearchParams.useSearchParams)();
    var history = (0, _reactrouterdom.useHistory)();
    var t = (0, _reacti18next.useTranslation)("general").t;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Popup.default, {
        horizontalAlign: "right",
        button: /*#__PURE__*/ _react.default.createElement("strong", null, t("perPage", {
            limit: limit
        }), /*#__PURE__*/ _react.default.createElement(_Chevron.default, null)),
        render: function(param) {
            var close = param.close;
            return /*#__PURE__*/ _react.default.createElement("div", null, /*#__PURE__*/ _react.default.createElement("ul", null, limits.map(function(limitNumber, i) {
                return /*#__PURE__*/ _react.default.createElement("li", {
                    className: "".concat(baseClass, "-item"),
                    key: i
                }, /*#__PURE__*/ _react.default.createElement("button", {
                    type: "button",
                    className: [
                        "".concat(baseClass, "__button"),
                        limitNumber === Number(limit) && "".concat(baseClass, "__button-active")
                    ].filter(Boolean).join(" "),
                    onClick: function() {
                        close();
                        if (handleChange) handleChange(limitNumber);
                        if (modifySearchParams) {
                            history.replace({
                                search: _qs.default.stringify(_object_spread_props(_object_spread({}, params), {
                                    page: resetPage ? 1 : params.page,
                                    limit: limitNumber
                                }), {
                                    addQueryPrefix: true
                                })
                            });
                        }
                    }
                }, limitNumber === Number(limit) && /*#__PURE__*/ _react.default.createElement(_Chevron.default, null), limitNumber));
            })));
        }
    }));
};
var _default = PerPage;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1BlclBhZ2UvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcXMgZnJvbSAncXMnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9TZWFyY2hQYXJhbXMnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4uL1BvcHVwJztcbmltcG9ydCBDaGV2cm9uIGZyb20gJy4uLy4uL2ljb25zL0NoZXZyb24nO1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvZGVmYXVsdHMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdwZXItcGFnZSc7XG5cbmNvbnN0IGRlZmF1bHRMaW1pdHMgPSBkZWZhdWx0cy5hZG1pbi5wYWdpbmF0aW9uLmxpbWl0cztcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSB7XG4gIGxpbWl0czogbnVtYmVyW11cbiAgbGltaXQ6IG51bWJlclxuICBoYW5kbGVDaGFuZ2U/OiAobGltaXQ6IG51bWJlcikgPT4gdm9pZFxuICBtb2RpZnlTZWFyY2hQYXJhbXM/OiBib29sZWFuXG4gIHJlc2V0UGFnZT86IGJvb2xlYW5cbn1cblxuY29uc3QgUGVyUGFnZTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgbGltaXRzID0gZGVmYXVsdExpbWl0cywgbGltaXQsIGhhbmRsZUNoYW5nZSwgbW9kaWZ5U2VhcmNoUGFyYW1zID0gdHJ1ZSwgcmVzZXRQYWdlID0gZmFsc2UgfSkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8UG9wdXBcbiAgICAgICAgaG9yaXpvbnRhbEFsaWduPVwicmlnaHRcIlxuICAgICAgICBidXR0b249eyhcbiAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAge3QoJ3BlclBhZ2UnLCB7IGxpbWl0IH0pfVxuICAgICAgICAgICAgPENoZXZyb24gLz5cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgKX1cbiAgICAgICAgcmVuZGVyPXsoeyBjbG9zZSB9KSA9PiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge2xpbWl0cy5tYXAoKGxpbWl0TnVtYmVyLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc30taXRlbWB9XG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgICAgICAgICAgICAgYCR7YmFzZUNsYXNzfV9fYnV0dG9uYCxcbiAgICAgICAgICAgICAgICAgICAgICBsaW1pdE51bWJlciA9PT0gTnVtYmVyKGxpbWl0KSAmJiBgJHtiYXNlQ2xhc3N9X19idXR0b24tYWN0aXZlYCxcbiAgICAgICAgICAgICAgICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlQ2hhbmdlKSBoYW5kbGVDaGFuZ2UobGltaXROdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RpZnlTZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaDogcXMuc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZTogcmVzZXRQYWdlID8gMSA6IHBhcmFtcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBsaW1pdE51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgeyBhZGRRdWVyeVByZWZpeDogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2xpbWl0TnVtYmVyID09PSBOdW1iZXIobGltaXQpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hldnJvbiAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7bGltaXROdW1iZXJ9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGVyUGFnZTtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJkZWZhdWx0TGltaXRzIiwiZGVmYXVsdHMiLCJhZG1pbiIsInBhZ2luYXRpb24iLCJsaW1pdHMiLCJQZXJQYWdlIiwibGltaXQiLCJoYW5kbGVDaGFuZ2UiLCJtb2RpZnlTZWFyY2hQYXJhbXMiLCJyZXNldFBhZ2UiLCJwYXJhbXMiLCJ1c2VTZWFyY2hQYXJhbXMiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsIlBvcHVwIiwiaG9yaXpvbnRhbEFsaWduIiwiYnV0dG9uIiwic3Ryb25nIiwiQ2hldnJvbiIsInJlbmRlciIsImNsb3NlIiwidWwiLCJtYXAiLCJsaW1pdE51bWJlciIsImkiLCJsaSIsImtleSIsInR5cGUiLCJOdW1iZXIiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIm9uQ2xpY2siLCJyZXBsYWNlIiwic2VhcmNoIiwicXMiLCJzdHJpbmdpZnkiLCJwYWdlIiwiYWRkUXVlcnlQcmVmaXgiXSwibWFwcGluZ3MiOiI7Ozs7K0JBaUZBOzs7ZUFBQTs7OzREQWpGa0I7eURBQ0g7OEJBQ1k7NEJBQ0k7NEJBQ0M7NERBQ2Q7OERBQ0U7d0JBQ0s7UUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQSxZQUFZO0FBRWxCLElBQU1DLGdCQUFnQkMsa0JBQVEsQ0FBQ0MsS0FBSyxDQUFDQyxVQUFVLENBQUNDLE1BQU07QUFVdEQsSUFBTUMsVUFBMkI7OEJBQUdELFFBQUFBLG9DQUFTSiwrQkFBZU0sY0FBQUEsT0FBT0MscUJBQUFBLGdEQUFjQyxvQkFBQUEsNERBQXFCLDJEQUFNQyxXQUFBQSwwQ0FBWTtJQUN0SCxJQUFNQyxTQUFTQyxJQUFBQSw2QkFBZTtJQUM5QixJQUFNQyxVQUFVQyxJQUFBQSwwQkFBVTtJQUMxQixJQUFNLEFBQUVDLElBQU1DLElBQUFBLDRCQUFjLEVBQUMsV0FBckJEO0lBRVIscUJBQ0UsNkJBQUNFO1FBQUlDLFdBQVdsQjtxQkFDZCw2QkFBQ21CLGNBQUs7UUFDSkMsaUJBQWdCO1FBQ2hCQyxzQkFDRSw2QkFBQ0MsZ0JBQ0VQLEVBQUUsV0FBVztZQUFFUixPQUFBQTtRQUFNLGtCQUN0Qiw2QkFBQ2dCLGdCQUFPO1FBR1pDLFFBQVE7Z0JBQUdDLGNBQUFBO2lDQUNULDZCQUFDUiwyQkFDQyw2QkFBQ1MsWUFDRXJCLE9BQU9zQixHQUFHLENBQUMsU0FBQ0MsYUFBYUM7cUNBQ3hCLDZCQUFDQztvQkFDQ1osV0FBVyxBQUFDLEdBQVksT0FBVmxCLFdBQVU7b0JBQ3hCK0IsS0FBS0Y7aUNBRUwsNkJBQUNSO29CQUNDVyxNQUFLO29CQUNMZCxXQUFXO3dCQUNSLEdBQVksT0FBVmxCLFdBQVU7d0JBQ2I0QixnQkFBZ0JLLE9BQU8xQixVQUFVLEFBQUMsR0FBWSxPQUFWUCxXQUFVO3FCQUMvQyxDQUFDa0MsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7b0JBQ3ZCQyxTQUFTO3dCQUNQWjt3QkFDQSxJQUFJakIsY0FBY0EsYUFBYW9CO3dCQUMvQixJQUFJbkIsb0JBQW9COzRCQUN0QkksUUFBUXlCLE9BQU8sQ0FBQztnQ0FDZEMsUUFBUUMsV0FBRSxDQUFDQyxTQUFTLENBQUMsd0NBQ2hCOUI7b0NBQ0grQixNQUFNaEMsWUFBWSxJQUFJQyxPQUFPK0IsSUFBSTtvQ0FDakNuQyxPQUFPcUI7b0NBQ047b0NBQUVlLGdCQUFnQjtnQ0FBSzs0QkFDNUI7d0JBQ0Y7b0JBQ0Y7bUJBRUNmLGdCQUFnQkssT0FBTzFCLHdCQUN0Qiw2QkFBQ2dCLGdCQUFPLFNBRVRLOzs7O0FBVXJCO0lBRUEsV0FBZXRCIn0=
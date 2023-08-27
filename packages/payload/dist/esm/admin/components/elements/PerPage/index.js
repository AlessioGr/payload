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
import React from "react";
import qs from "qs";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "../../utilities/SearchParams";
import Popup from "../Popup";
import Chevron from "../../icons/Chevron";
import { defaults } from "../../../../collections/config/defaults";
import "./index.scss";
var baseClass = "per-page";
var defaultLimits = defaults.admin.pagination.limits;
var PerPage = function(param) {
    var _param_limits = param.limits, limits = _param_limits === void 0 ? defaultLimits : _param_limits, limit = param.limit, handleChange = param.handleChange, _param_modifySearchParams = param.modifySearchParams, modifySearchParams = _param_modifySearchParams === void 0 ? true : _param_modifySearchParams, _param_resetPage = param.resetPage, resetPage = _param_resetPage === void 0 ? false : _param_resetPage;
    var params = useSearchParams();
    var history = useHistory();
    var t = useTranslation("general").t;
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement(Popup, {
        horizontalAlign: "right",
        button: /*#__PURE__*/ React.createElement("strong", null, t("perPage", {
            limit: limit
        }), /*#__PURE__*/ React.createElement(Chevron, null)),
        render: function(param) {
            var close = param.close;
            return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("ul", null, limits.map(function(limitNumber, i) {
                return /*#__PURE__*/ React.createElement("li", {
                    className: "".concat(baseClass, "-item"),
                    key: i
                }, /*#__PURE__*/ React.createElement("button", {
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
                                search: qs.stringify(_object_spread_props(_object_spread({}, params), {
                                    page: resetPage ? 1 : params.page,
                                    limit: limitNumber
                                }), {
                                    addQueryPrefix: true
                                })
                            });
                        }
                    }
                }, limitNumber === Number(limit) && /*#__PURE__*/ React.createElement(Chevron, null), limitNumber));
            })));
        }
    }));
};
export default PerPage;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1BlclBhZ2UvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcXMgZnJvbSAncXMnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9TZWFyY2hQYXJhbXMnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4uL1BvcHVwJztcbmltcG9ydCBDaGV2cm9uIGZyb20gJy4uLy4uL2ljb25zL0NoZXZyb24nO1xuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvZGVmYXVsdHMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdwZXItcGFnZSc7XG5cbmNvbnN0IGRlZmF1bHRMaW1pdHMgPSBkZWZhdWx0cy5hZG1pbi5wYWdpbmF0aW9uLmxpbWl0cztcblxuZXhwb3J0IHR5cGUgUHJvcHMgPSB7XG4gIGxpbWl0czogbnVtYmVyW11cbiAgbGltaXQ6IG51bWJlclxuICBoYW5kbGVDaGFuZ2U/OiAobGltaXQ6IG51bWJlcikgPT4gdm9pZFxuICBtb2RpZnlTZWFyY2hQYXJhbXM/OiBib29sZWFuXG4gIHJlc2V0UGFnZT86IGJvb2xlYW5cbn1cblxuY29uc3QgUGVyUGFnZTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgbGltaXRzID0gZGVmYXVsdExpbWl0cywgbGltaXQsIGhhbmRsZUNoYW5nZSwgbW9kaWZ5U2VhcmNoUGFyYW1zID0gdHJ1ZSwgcmVzZXRQYWdlID0gZmFsc2UgfSkgPT4ge1xuICBjb25zdCBwYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8UG9wdXBcbiAgICAgICAgaG9yaXpvbnRhbEFsaWduPVwicmlnaHRcIlxuICAgICAgICBidXR0b249eyhcbiAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAge3QoJ3BlclBhZ2UnLCB7IGxpbWl0IH0pfVxuICAgICAgICAgICAgPENoZXZyb24gLz5cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgKX1cbiAgICAgICAgcmVuZGVyPXsoeyBjbG9zZSB9KSA9PiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge2xpbWl0cy5tYXAoKGxpbWl0TnVtYmVyLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc30taXRlbWB9XG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbXG4gICAgICAgICAgICAgICAgICAgICAgYCR7YmFzZUNsYXNzfV9fYnV0dG9uYCxcbiAgICAgICAgICAgICAgICAgICAgICBsaW1pdE51bWJlciA9PT0gTnVtYmVyKGxpbWl0KSAmJiBgJHtiYXNlQ2xhc3N9X19idXR0b24tYWN0aXZlYCxcbiAgICAgICAgICAgICAgICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlQ2hhbmdlKSBoYW5kbGVDaGFuZ2UobGltaXROdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RpZnlTZWFyY2hQYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaDogcXMuc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZTogcmVzZXRQYWdlID8gMSA6IHBhcmFtcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBsaW1pdE51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgeyBhZGRRdWVyeVByZWZpeDogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2xpbWl0TnVtYmVyID09PSBOdW1iZXIobGltaXQpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hldnJvbiAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7bGltaXROdW1iZXJ9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGVyUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInFzIiwidXNlSGlzdG9yeSIsInVzZVRyYW5zbGF0aW9uIiwidXNlU2VhcmNoUGFyYW1zIiwiUG9wdXAiLCJDaGV2cm9uIiwiZGVmYXVsdHMiLCJiYXNlQ2xhc3MiLCJkZWZhdWx0TGltaXRzIiwiYWRtaW4iLCJwYWdpbmF0aW9uIiwibGltaXRzIiwiUGVyUGFnZSIsImxpbWl0IiwiaGFuZGxlQ2hhbmdlIiwibW9kaWZ5U2VhcmNoUGFyYW1zIiwicmVzZXRQYWdlIiwicGFyYW1zIiwiaGlzdG9yeSIsInQiLCJkaXYiLCJjbGFzc05hbWUiLCJob3Jpem9udGFsQWxpZ24iLCJidXR0b24iLCJzdHJvbmciLCJyZW5kZXIiLCJjbG9zZSIsInVsIiwibWFwIiwibGltaXROdW1iZXIiLCJpIiwibGkiLCJrZXkiLCJ0eXBlIiwiTnVtYmVyIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJvbkNsaWNrIiwicmVwbGFjZSIsInNlYXJjaCIsInN0cmluZ2lmeSIsInBhZ2UiLCJhZGRRdWVyeVByZWZpeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixPQUFPQyxRQUFRLEtBQUs7QUFDcEIsU0FBU0MsVUFBVSxRQUFRLG1CQUFtQjtBQUM5QyxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLFNBQVNDLGVBQWUsUUFBUSwrQkFBK0I7QUFDL0QsT0FBT0MsV0FBVyxXQUFXO0FBQzdCLE9BQU9DLGFBQWEsc0JBQXNCO0FBQzFDLFNBQVNDLFFBQVEsUUFBUSwwQ0FBMEM7QUFFbkUsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFlBQVk7QUFFbEIsSUFBTUMsZ0JBQWdCRixTQUFTRyxLQUFLLENBQUNDLFVBQVUsQ0FBQ0MsTUFBTTtBQVV0RCxJQUFNQyxVQUEyQjs4QkFBR0QsUUFBQUEsb0NBQVNILCtCQUFlSyxjQUFBQSxPQUFPQyxxQkFBQUEsZ0RBQWNDLG9CQUFBQSw0REFBcUIsMkRBQU1DLFdBQUFBLDBDQUFZO0lBQ3RILElBQU1DLFNBQVNkO0lBQ2YsSUFBTWUsVUFBVWpCO0lBQ2hCLElBQU0sQUFBRWtCLElBQU1qQixlQUFlLFdBQXJCaUI7SUFFUixxQkFDRSxvQkFBQ0M7UUFBSUMsV0FBV2Q7cUJBQ2Qsb0JBQUNIO1FBQ0NrQixpQkFBZ0I7UUFDaEJDLHNCQUNFLG9CQUFDQyxnQkFDRUwsRUFBRSxXQUFXO1lBQUVOLE9BQUFBO1FBQU0sa0JBQ3RCLG9CQUFDUjtRQUdMb0IsUUFBUTtnQkFBR0MsY0FBQUE7aUNBQ1Qsb0JBQUNOLDJCQUNDLG9CQUFDTyxZQUNFaEIsT0FBT2lCLEdBQUcsQ0FBQyxTQUFDQyxhQUFhQztxQ0FDeEIsb0JBQUNDO29CQUNDVixXQUFXLEFBQUMsR0FBWSxPQUFWZCxXQUFVO29CQUN4QnlCLEtBQUtGO2lDQUVMLG9CQUFDUDtvQkFDQ1UsTUFBSztvQkFDTFosV0FBVzt3QkFDUixHQUFZLE9BQVZkLFdBQVU7d0JBQ2JzQixnQkFBZ0JLLE9BQU9yQixVQUFVLEFBQUMsR0FBWSxPQUFWTixXQUFVO3FCQUMvQyxDQUFDNEIsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7b0JBQ3ZCQyxTQUFTO3dCQUNQWjt3QkFDQSxJQUFJWixjQUFjQSxhQUFhZTt3QkFDL0IsSUFBSWQsb0JBQW9COzRCQUN0QkcsUUFBUXFCLE9BQU8sQ0FBQztnQ0FDZEMsUUFBUXhDLEdBQUd5QyxTQUFTLENBQUMsd0NBQ2hCeEI7b0NBQ0h5QixNQUFNMUIsWUFBWSxJQUFJQyxPQUFPeUIsSUFBSTtvQ0FDakM3QixPQUFPZ0I7b0NBQ047b0NBQUVjLGdCQUFnQjtnQ0FBSzs0QkFDNUI7d0JBQ0Y7b0JBQ0Y7bUJBRUNkLGdCQUFnQkssT0FBT3JCLHdCQUN0QixvQkFBQ1IsZ0JBRUZ3Qjs7OztBQVVyQjtBQUVBLGVBQWVqQixRQUFRIn0=
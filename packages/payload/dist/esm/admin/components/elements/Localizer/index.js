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
import { Link } from "react-router-dom";
import qs from "qs";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import { useLocale } from "../../utilities/Locale";
import { useSearchParams } from "../../utilities/SearchParams";
import Popup from "../Popup";
import "./index.scss";
var baseClass = "localizer";
var Localizer = function() {
    var config = useConfig();
    var localization = config.localization;
    var locale = useLocale();
    var searchParams = useSearchParams();
    var t = useTranslation("general").t;
    if (localization) {
        var locales = localization.locales;
        return /*#__PURE__*/ React.createElement("div", {
            className: baseClass
        }, /*#__PURE__*/ React.createElement(Popup, {
            showScrollbar: true,
            horizontalAlign: "left",
            button: locale.label,
            render: function(param) {
                var close = param.close;
                return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("span", null, t("locales")), /*#__PURE__*/ React.createElement("ul", null, locales.map(function(localeOption) {
                    var baseLocaleClass = "".concat(baseClass, "__locale");
                    var localeClasses = [
                        baseLocaleClass,
                        locale.code === localeOption.code && "".concat(baseLocaleClass, "--active")
                    ].filter(Boolean).join("");
                    var newParams = _object_spread_props(_object_spread({}, searchParams), {
                        locale: localeOption.code
                    });
                    var search = qs.stringify(newParams);
                    if (localeOption.code !== locale.code) {
                        return /*#__PURE__*/ React.createElement("li", {
                            key: localeOption.code,
                            className: localeClasses
                        }, /*#__PURE__*/ React.createElement(Link, {
                            to: {
                                search: search
                            },
                            onClick: close
                        }, localeOption.label));
                    }
                    return null;
                })));
            }
        }));
    }
    return null;
};
export default Localizer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0xvY2FsaXplci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBxcyBmcm9tICdxcyc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTG9jYWxlJztcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9TZWFyY2hQYXJhbXMnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4uL1BvcHVwJztcblxuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdsb2NhbGl6ZXInO1xuXG5jb25zdCBMb2NhbGl6ZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBjb25maWcgPSB1c2VDb25maWcoKTtcbiAgY29uc3QgeyBsb2NhbGl6YXRpb24gfSA9IGNvbmZpZztcblxuICBjb25zdCBsb2NhbGUgPSB1c2VMb2NhbGUoKTtcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcblxuICBpZiAobG9jYWxpemF0aW9uKSB7XG4gICAgY29uc3QgeyBsb2NhbGVzIH0gPSBsb2NhbGl6YXRpb247XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICAgIDxQb3B1cFxuICAgICAgICAgIHNob3dTY3JvbGxiYXJcbiAgICAgICAgICBob3Jpem9udGFsQWxpZ249XCJsZWZ0XCJcbiAgICAgICAgICBidXR0b249e2xvY2FsZS5sYWJlbH1cbiAgICAgICAgICByZW5kZXI9eyh7IGNsb3NlIH0pID0+IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuPnt0KCdsb2NhbGVzJyl9PC9zcGFuPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2xvY2FsZXMubWFwKChsb2NhbGVPcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VMb2NhbGVDbGFzcyA9IGAke2Jhc2VDbGFzc31fX2xvY2FsZWA7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IGxvY2FsZUNsYXNzZXMgPSBbXG4gICAgICAgICAgICAgICAgICAgIGJhc2VMb2NhbGVDbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlLmNvZGUgPT09IGxvY2FsZU9wdGlvbi5jb2RlICYmIGAke2Jhc2VMb2NhbGVDbGFzc30tLWFjdGl2ZWAsXG4gICAgICAgICAgICAgICAgICBdLmZpbHRlcihCb29sZWFuKS5qb2luKCcnKTtcblxuICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UGFyYW1zID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zZWFyY2hQYXJhbXMsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZTogbG9jYWxlT3B0aW9uLmNvZGUsXG4gICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2ggPSBxcy5zdHJpbmdpZnkobmV3UGFyYW1zKTtcblxuICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsZU9wdGlvbi5jb2RlICE9PSBsb2NhbGUuY29kZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsb2NhbGVPcHRpb24uY29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17bG9jYWxlQ2xhc3Nlc31cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17eyBzZWFyY2ggfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y2xvc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2NhbGVPcHRpb24ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxpemVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsInFzIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VDb25maWciLCJ1c2VMb2NhbGUiLCJ1c2VTZWFyY2hQYXJhbXMiLCJQb3B1cCIsImJhc2VDbGFzcyIsIkxvY2FsaXplciIsImNvbmZpZyIsImxvY2FsaXphdGlvbiIsImxvY2FsZSIsInNlYXJjaFBhcmFtcyIsInQiLCJsb2NhbGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwic2hvd1Njcm9sbGJhciIsImhvcml6b250YWxBbGlnbiIsImJ1dHRvbiIsImxhYmVsIiwicmVuZGVyIiwiY2xvc2UiLCJzcGFuIiwidWwiLCJtYXAiLCJsb2NhbGVPcHRpb24iLCJiYXNlTG9jYWxlQ2xhc3MiLCJsb2NhbGVDbGFzc2VzIiwiY29kZSIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwibmV3UGFyYW1zIiwic2VhcmNoIiwic3RyaW5naWZ5IiwibGkiLCJrZXkiLCJ0byIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsU0FBU0MsSUFBSSxRQUFRLG1CQUFtQjtBQUN4QyxPQUFPQyxRQUFRLEtBQUs7QUFDcEIsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUFTQyxTQUFTLFFBQVEseUJBQXlCO0FBQ25ELFNBQVNDLFNBQVMsUUFBUSx5QkFBeUI7QUFDbkQsU0FBU0MsZUFBZSxRQUFRLCtCQUErQjtBQUMvRCxPQUFPQyxXQUFXLFdBQVc7QUFHN0IsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFlBQVk7QUFFbEIsSUFBTUMsWUFBc0I7SUFDMUIsSUFBTUMsU0FBU047SUFDZixJQUFNLEFBQUVPLGVBQWlCRCxPQUFqQkM7SUFFUixJQUFNQyxTQUFTUDtJQUNmLElBQU1RLGVBQWVQO0lBQ3JCLElBQU0sQUFBRVEsSUFBTVgsZUFBZSxXQUFyQlc7SUFFUixJQUFJSCxjQUFjO1FBQ2hCLElBQU0sQUFBRUksVUFBWUosYUFBWkk7UUFFUixxQkFDRSxvQkFBQ0M7WUFBSUMsV0FBV1Q7eUJBQ2Qsb0JBQUNEO1lBQ0NXLGVBQUFBO1lBQ0FDLGlCQUFnQjtZQUNoQkMsUUFBUVIsT0FBT1MsS0FBSztZQUNwQkMsUUFBUTtvQkFBR0MsY0FBQUE7cUNBQ1Qsb0JBQUNQLDJCQUNDLG9CQUFDUSxjQUFNVixFQUFFLDJCQUNULG9CQUFDVyxZQUNFVixRQUFRVyxHQUFHLENBQUMsU0FBQ0M7b0JBQ1osSUFBTUMsa0JBQWtCLEFBQUMsR0FBWSxPQUFWcEIsV0FBVTtvQkFFckMsSUFBTXFCLGdCQUFnQjt3QkFDcEJEO3dCQUNBaEIsT0FBT2tCLElBQUksS0FBS0gsYUFBYUcsSUFBSSxJQUFJLEFBQUMsR0FBa0IsT0FBaEJGLGlCQUFnQjtxQkFDekQsQ0FBQ0csTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7b0JBRXZCLElBQU1DLFlBQVksd0NBQ2JyQjt3QkFDSEQsUUFBUWUsYUFBYUcsSUFBSTs7b0JBRzNCLElBQU1LLFNBQVNqQyxHQUFHa0MsU0FBUyxDQUFDRjtvQkFFNUIsSUFBSVAsYUFBYUcsSUFBSSxLQUFLbEIsT0FBT2tCLElBQUksRUFBRTt3QkFDckMscUJBQ0Usb0JBQUNPOzRCQUNDQyxLQUFLWCxhQUFhRyxJQUFJOzRCQUN0QmIsV0FBV1k7eUNBRVgsb0JBQUM1Qjs0QkFDQ3NDLElBQUk7Z0NBQUVKLFFBQUFBOzRCQUFPOzRCQUNiSyxTQUFTakI7MkJBRVJJLGFBQWFOLEtBQUs7b0JBSTNCO29CQUVBLE9BQU87Z0JBQ1Q7OztJQU9kO0lBRUEsT0FBTztBQUNUO0FBRUEsZUFBZVosVUFBVSJ9
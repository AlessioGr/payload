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
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reactrouterdom = require("react-router-dom");
var _qs = /*#__PURE__*/ _interop_require_default(require("qs"));
var _reacti18next = require("react-i18next");
var _Chevron = /*#__PURE__*/ _interop_require_default(require("../../icons/Chevron"));
var _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
var _SearchParams = require("../../utilities/SearchParams");
var _getTranslation = require("../../../../utilities/getTranslation");
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
var baseClass = "sort-column";
var SortColumn = function(props) {
    var label = props.label, name = props.name, _props_disable = props.disable, disable = _props_disable === void 0 ? false : _props_disable;
    var params = (0, _SearchParams.useSearchParams)();
    var history = (0, _reactrouterdom.useHistory)();
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var sort = params.sort;
    var desc = "-".concat(name);
    var asc = name;
    var ascClasses = [
        "".concat(baseClass, "__asc")
    ];
    if (sort === asc) ascClasses.push("".concat(baseClass, "--active"));
    var descClasses = [
        "".concat(baseClass, "__desc")
    ];
    if (sort === desc) descClasses.push("".concat(baseClass, "--active"));
    var setSort = (0, _react.useCallback)(function(newSort) {
        history.push({
            search: _qs.default.stringify(_object_spread_props(_object_spread({}, params), {
                sort: newSort
            }), {
                addQueryPrefix: true
            })
        });
    }, [
        params,
        history
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("span", {
        className: "".concat(baseClass, "__label")
    }, (0, _getTranslation.getTranslation)(label, i18n)), !disable && /*#__PURE__*/ _react.default.createElement("span", {
        className: "".concat(baseClass, "__buttons")
    }, /*#__PURE__*/ _react.default.createElement(_Button.default, {
        round: true,
        buttonStyle: "none",
        className: ascClasses.join(" "),
        onClick: function() {
            return setSort(asc);
        },
        "aria-label": t("sortByLabelDirection", {
            label: (0, _getTranslation.getTranslation)(label, i18n),
            direction: t("ascending")
        })
    }, /*#__PURE__*/ _react.default.createElement(_Chevron.default, null)), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        round: true,
        buttonStyle: "none",
        className: descClasses.join(" "),
        onClick: function() {
            return setSort(desc);
        },
        "aria-label": t("sortByLabelDirection", {
            label: (0, _getTranslation.getTranslation)(label, i18n),
            direction: t("descending")
        })
    }, /*#__PURE__*/ _react.default.createElement(_Chevron.default, null))));
};
var _default = SortColumn;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1NvcnRDb2x1bW4vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxcyc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBDaGV2cm9uIGZyb20gJy4uLy4uL2ljb25zL0NoZXZyb24nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1NlYXJjaFBhcmFtcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3NvcnQtY29sdW1uJztcblxuY29uc3QgU29ydENvbHVtbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBsYWJlbCwgbmFtZSwgZGlzYWJsZSA9IGZhbHNlLFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG5cbiAgY29uc3QgeyBzb3J0IH0gPSBwYXJhbXM7XG5cbiAgY29uc3QgZGVzYyA9IGAtJHtuYW1lfWA7XG4gIGNvbnN0IGFzYyA9IG5hbWU7XG5cbiAgY29uc3QgYXNjQ2xhc3NlcyA9IFtgJHtiYXNlQ2xhc3N9X19hc2NgXTtcbiAgaWYgKHNvcnQgPT09IGFzYykgYXNjQ2xhc3Nlcy5wdXNoKGAke2Jhc2VDbGFzc30tLWFjdGl2ZWApO1xuXG4gIGNvbnN0IGRlc2NDbGFzc2VzID0gW2Ake2Jhc2VDbGFzc31fX2Rlc2NgXTtcbiAgaWYgKHNvcnQgPT09IGRlc2MpIGRlc2NDbGFzc2VzLnB1c2goYCR7YmFzZUNsYXNzfS0tYWN0aXZlYCk7XG5cbiAgY29uc3Qgc2V0U29ydCA9IHVzZUNhbGxiYWNrKChuZXdTb3J0KSA9PiB7XG4gICAgaGlzdG9yeS5wdXNoKHtcbiAgICAgIHNlYXJjaDogcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHtcbiAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICBzb3J0OiBuZXdTb3J0LFxuICAgICAgfSwgeyBhZGRRdWVyeVByZWZpeDogdHJ1ZSB9KSxcbiAgICB9KTtcbiAgfSwgW3BhcmFtcywgaGlzdG9yeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+e2dldFRyYW5zbGF0aW9uKGxhYmVsLCBpMThuKX08L3NwYW4+XG4gICAgICB7IWRpc2FibGUgJiYgKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2J1dHRvbnNgfT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJub25lXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YXNjQ2xhc3Nlcy5qb2luKCcgJyl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTb3J0KGFzYyl9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdzb3J0QnlMYWJlbERpcmVjdGlvbicsIHsgbGFiZWw6IGdldFRyYW5zbGF0aW9uKGxhYmVsLCBpMThuKSwgZGlyZWN0aW9uOiB0KCdhc2NlbmRpbmcnKSB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2hldnJvbiAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICBidXR0b25TdHlsZT1cIm5vbmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtkZXNjQ2xhc3Nlcy5qb2luKCcgJyl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTb3J0KGRlc2MpfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnc29ydEJ5TGFiZWxEaXJlY3Rpb24nLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihsYWJlbCwgaTE4biksIGRpcmVjdGlvbjogdCgnZGVzY2VuZGluZycpIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDaGV2cm9uIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTb3J0Q29sdW1uO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIlNvcnRDb2x1bW4iLCJwcm9wcyIsImxhYmVsIiwibmFtZSIsImRpc2FibGUiLCJwYXJhbXMiLCJ1c2VTZWFyY2hQYXJhbXMiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsInVzZVRyYW5zbGF0aW9uIiwidCIsImkxOG4iLCJzb3J0IiwiZGVzYyIsImFzYyIsImFzY0NsYXNzZXMiLCJwdXNoIiwiZGVzY0NsYXNzZXMiLCJzZXRTb3J0IiwidXNlQ2FsbGJhY2siLCJuZXdTb3J0Iiwic2VhcmNoIiwicXVlcnlTdHJpbmciLCJzdHJpbmdpZnkiLCJhZGRRdWVyeVByZWZpeCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJnZXRUcmFuc2xhdGlvbiIsIkJ1dHRvbiIsInJvdW5kIiwiYnV0dG9uU3R5bGUiLCJqb2luIiwib25DbGljayIsImFyaWEtbGFiZWwiLCJkaXJlY3Rpb24iLCJDaGV2cm9uIl0sIm1hcHBpbmdzIjoiOzs7OytCQXVFQTs7O2VBQUE7Ozs2REF2RW1DOzhCQUNSO3lEQUNIOzRCQUNPOzhEQUVYOzZEQUNEOzRCQUNhOzhCQUNEO1FBRXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUEsWUFBWTtBQUVsQixJQUFNQyxhQUE4QixTQUFDQztJQUNuQyxJQUNFQyxRQUNFRCxNQURGQyxPQUFPQyxPQUNMRixNQURLRSx1QkFDTEYsTUFEV0csU0FBQUEsc0NBQVU7SUFFekIsSUFBTUMsU0FBU0MsSUFBQUEsNkJBQWU7SUFDOUIsSUFBTUMsVUFBVUMsSUFBQUEsMEJBQVU7SUFDMUIsSUFBb0JDLGtCQUFBQSxJQUFBQSw0QkFBYyxFQUFDLFlBQTNCQyxJQUFZRCxnQkFBWkMsR0FBR0MsT0FBU0YsZ0JBQVRFO0lBRVgsSUFBTSxBQUFFQyxPQUFTUCxPQUFUTztJQUVSLElBQU1DLE9BQU8sQUFBQyxJQUFRLE9BQUxWO0lBQ2pCLElBQU1XLE1BQU1YO0lBRVosSUFBTVksYUFBYTtRQUFFLEdBQVksT0FBVmhCLFdBQVU7S0FBTztJQUN4QyxJQUFJYSxTQUFTRSxLQUFLQyxXQUFXQyxJQUFJLENBQUMsQUFBQyxHQUFZLE9BQVZqQixXQUFVO0lBRS9DLElBQU1rQixjQUFjO1FBQUUsR0FBWSxPQUFWbEIsV0FBVTtLQUFRO0lBQzFDLElBQUlhLFNBQVNDLE1BQU1JLFlBQVlELElBQUksQ0FBQyxBQUFDLEdBQVksT0FBVmpCLFdBQVU7SUFFakQsSUFBTW1CLFVBQVVDLElBQUFBLGtCQUFXLEVBQUMsU0FBQ0M7UUFDM0JiLFFBQVFTLElBQUksQ0FBQztZQUNYSyxRQUFRQyxXQUFXLENBQUNDLFNBQVMsQ0FBQyx3Q0FDekJsQjtnQkFDSE8sTUFBTVE7Z0JBQ0w7Z0JBQUVJLGdCQUFnQjtZQUFLO1FBQzVCO0lBQ0YsR0FBRztRQUFDbkI7UUFBUUU7S0FBUTtJQUVwQixxQkFDRSw2QkFBQ2tCO1FBQUlDLFdBQVczQjtxQkFDZCw2QkFBQzRCO1FBQUtELFdBQVcsQUFBQyxHQUFZLE9BQVYzQixXQUFVO09BQVc2QixJQUFBQSw4QkFBYyxFQUFDMUIsT0FBT1MsUUFDOUQsQ0FBQ1AseUJBQ0EsNkJBQUN1QjtRQUFLRCxXQUFXLEFBQUMsR0FBWSxPQUFWM0IsV0FBVTtxQkFDNUIsNkJBQUM4QixlQUFNO1FBQ0xDLE9BQUFBO1FBQ0FDLGFBQVk7UUFDWkwsV0FBV1gsV0FBV2lCLElBQUksQ0FBQztRQUMzQkMsU0FBUzttQkFBTWYsUUFBUUo7O1FBQ3ZCb0IsY0FBWXhCLEVBQUUsd0JBQXdCO1lBQUVSLE9BQU8wQixJQUFBQSw4QkFBYyxFQUFDMUIsT0FBT1M7WUFBT3dCLFdBQVd6QixFQUFFO1FBQWE7cUJBRXRHLDZCQUFDMEIsZ0JBQU8sd0JBRVYsNkJBQUNQLGVBQU07UUFDTEMsT0FBQUE7UUFDQUMsYUFBWTtRQUNaTCxXQUFXVCxZQUFZZSxJQUFJLENBQUM7UUFDNUJDLFNBQVM7bUJBQU1mLFFBQVFMOztRQUN2QnFCLGNBQVl4QixFQUFFLHdCQUF3QjtZQUFFUixPQUFPMEIsSUFBQUEsOEJBQWMsRUFBQzFCLE9BQU9TO1lBQU93QixXQUFXekIsRUFBRTtRQUFjO3FCQUV2Ryw2QkFBQzBCLGdCQUFPO0FBTXBCO0lBRUEsV0FBZXBDIn0=
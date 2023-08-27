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
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import queryString from "qs";
import { useTranslation } from "react-i18next";
import Chevron from "../../icons/Chevron";
import Button from "../Button";
import { useSearchParams } from "../../utilities/SearchParams";
import { getTranslation } from "../../../../utilities/getTranslation";
import "./index.scss";
var baseClass = "sort-column";
var SortColumn = function(props) {
    var label = props.label, name = props.name, _props_disable = props.disable, disable = _props_disable === void 0 ? false : _props_disable;
    var params = useSearchParams();
    var history = useHistory();
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
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
    var setSort = useCallback(function(newSort) {
        history.push({
            search: queryString.stringify(_object_spread_props(_object_spread({}, params), {
                sort: newSort
            }), {
                addQueryPrefix: true
            })
        });
    }, [
        params,
        history
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement("span", {
        className: "".concat(baseClass, "__label")
    }, getTranslation(label, i18n)), !disable && /*#__PURE__*/ React.createElement("span", {
        className: "".concat(baseClass, "__buttons")
    }, /*#__PURE__*/ React.createElement(Button, {
        round: true,
        buttonStyle: "none",
        className: ascClasses.join(" "),
        onClick: function() {
            return setSort(asc);
        },
        "aria-label": t("sortByLabelDirection", {
            label: getTranslation(label, i18n),
            direction: t("ascending")
        })
    }, /*#__PURE__*/ React.createElement(Chevron, null)), /*#__PURE__*/ React.createElement(Button, {
        round: true,
        buttonStyle: "none",
        className: descClasses.join(" "),
        onClick: function() {
            return setSort(desc);
        },
        "aria-label": t("sortByLabelDirection", {
            label: getTranslation(label, i18n),
            direction: t("descending")
        })
    }, /*#__PURE__*/ React.createElement(Chevron, null))));
};
export default SortColumn;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1NvcnRDb2x1bW4vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxcyc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBDaGV2cm9uIGZyb20gJy4uLy4uL2ljb25zL0NoZXZyb24nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9CdXR0b24nO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1NlYXJjaFBhcmFtcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3NvcnQtY29sdW1uJztcblxuY29uc3QgU29ydENvbHVtbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBsYWJlbCwgbmFtZSwgZGlzYWJsZSA9IGZhbHNlLFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG5cbiAgY29uc3QgeyBzb3J0IH0gPSBwYXJhbXM7XG5cbiAgY29uc3QgZGVzYyA9IGAtJHtuYW1lfWA7XG4gIGNvbnN0IGFzYyA9IG5hbWU7XG5cbiAgY29uc3QgYXNjQ2xhc3NlcyA9IFtgJHtiYXNlQ2xhc3N9X19hc2NgXTtcbiAgaWYgKHNvcnQgPT09IGFzYykgYXNjQ2xhc3Nlcy5wdXNoKGAke2Jhc2VDbGFzc30tLWFjdGl2ZWApO1xuXG4gIGNvbnN0IGRlc2NDbGFzc2VzID0gW2Ake2Jhc2VDbGFzc31fX2Rlc2NgXTtcbiAgaWYgKHNvcnQgPT09IGRlc2MpIGRlc2NDbGFzc2VzLnB1c2goYCR7YmFzZUNsYXNzfS0tYWN0aXZlYCk7XG5cbiAgY29uc3Qgc2V0U29ydCA9IHVzZUNhbGxiYWNrKChuZXdTb3J0KSA9PiB7XG4gICAgaGlzdG9yeS5wdXNoKHtcbiAgICAgIHNlYXJjaDogcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHtcbiAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICBzb3J0OiBuZXdTb3J0LFxuICAgICAgfSwgeyBhZGRRdWVyeVByZWZpeDogdHJ1ZSB9KSxcbiAgICB9KTtcbiAgfSwgW3BhcmFtcywgaGlzdG9yeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+e2dldFRyYW5zbGF0aW9uKGxhYmVsLCBpMThuKX08L3NwYW4+XG4gICAgICB7IWRpc2FibGUgJiYgKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2J1dHRvbnNgfT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICByb3VuZFxuICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJub25lXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YXNjQ2xhc3Nlcy5qb2luKCcgJyl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTb3J0KGFzYyl9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPXt0KCdzb3J0QnlMYWJlbERpcmVjdGlvbicsIHsgbGFiZWw6IGdldFRyYW5zbGF0aW9uKGxhYmVsLCBpMThuKSwgZGlyZWN0aW9uOiB0KCdhc2NlbmRpbmcnKSB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2hldnJvbiAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICBidXR0b25TdHlsZT1cIm5vbmVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtkZXNjQ2xhc3Nlcy5qb2luKCcgJyl9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTb3J0KGRlc2MpfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnc29ydEJ5TGFiZWxEaXJlY3Rpb24nLCB7IGxhYmVsOiBnZXRUcmFuc2xhdGlvbihsYWJlbCwgaTE4biksIGRpcmVjdGlvbjogdCgnZGVzY2VuZGluZycpIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDaGV2cm9uIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTb3J0Q29sdW1uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VIaXN0b3J5IiwicXVlcnlTdHJpbmciLCJ1c2VUcmFuc2xhdGlvbiIsIkNoZXZyb24iLCJCdXR0b24iLCJ1c2VTZWFyY2hQYXJhbXMiLCJnZXRUcmFuc2xhdGlvbiIsImJhc2VDbGFzcyIsIlNvcnRDb2x1bW4iLCJwcm9wcyIsImxhYmVsIiwibmFtZSIsImRpc2FibGUiLCJwYXJhbXMiLCJoaXN0b3J5IiwidCIsImkxOG4iLCJzb3J0IiwiZGVzYyIsImFzYyIsImFzY0NsYXNzZXMiLCJwdXNoIiwiZGVzY0NsYXNzZXMiLCJzZXRTb3J0IiwibmV3U29ydCIsInNlYXJjaCIsInN0cmluZ2lmeSIsImFkZFF1ZXJ5UHJlZml4IiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsInJvdW5kIiwiYnV0dG9uU3R5bGUiLCJq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
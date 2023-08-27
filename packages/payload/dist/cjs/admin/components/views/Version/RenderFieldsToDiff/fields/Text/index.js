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
var _reactdiffviewercontinued = /*#__PURE__*/ _interop_require_wildcard(require("react-diff-viewer-continued"));
var _reacti18next = require("react-i18next");
var _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
var _styles = require("../styles");
var _getTranslation = require("../../../../../../../utilities/getTranslation");
require("./index.scss");
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
var baseClass = "text-diff";
var Text = function(param) {
    var field = param.field, locale = param.locale, version = param.version, comparison = param.comparison, _param_isRichText = param.isRichText, isRichText = _param_isRichText === void 0 ? false : _param_isRichText, diffMethod = param.diffMethod;
    var placeholder = "";
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    if (version === comparison) placeholder = "[".concat(t("noValue"), "]");
    var versionToRender = version;
    var comparisonToRender = comparison;
    if (isRichText) {
        if (typeof version === "object") versionToRender = JSON.stringify(version, null, 2);
        if (typeof comparison === "object") comparisonToRender = JSON.stringify(comparison, null, 2);
    }
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Label.default, null, locale && /*#__PURE__*/ _react.default.createElement("span", {
        className: "".concat(baseClass, "__locale-label")
    }, locale), (0, _getTranslation.getTranslation)(field.label, i18n)), /*#__PURE__*/ _react.default.createElement(_reactdiffviewercontinued.default, {
        styles: _styles.diffStyles,
        compareMethod: _reactdiffviewercontinued.DiffMethod[diffMethod],
        oldValue: typeof comparisonToRender !== "undefined" ? String(comparisonToRender) : placeholder,
        newValue: typeof versionToRender !== "undefined" ? String(versionToRender) : placeholder,
        splitView: true,
        hideLineNumbers: true,
        showDiffOnly: false
    }));
};
var _default = Text;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVuZGVyRmllbGRzVG9EaWZmL2ZpZWxkcy9UZXh0L2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RGlmZlZpZXdlciwgeyBEaWZmTWV0aG9kIH0gZnJvbSAncmVhY3QtZGlmZi12aWV3ZXItY29udGludWVkJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vTGFiZWwnO1xuaW1wb3J0IHsgZGlmZlN0eWxlcyB9IGZyb20gJy4uL3N0eWxlcyc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAndGV4dC1kaWZmJztcblxuY29uc3QgVGV4dDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgZmllbGQsIGxvY2FsZSwgdmVyc2lvbiwgY29tcGFyaXNvbiwgaXNSaWNoVGV4dCA9IGZhbHNlLCBkaWZmTWV0aG9kIH0pID0+IHtcbiAgbGV0IHBsYWNlaG9sZGVyID0gJyc7XG4gIGNvbnN0IHsgdCwgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcblxuICBpZiAodmVyc2lvbiA9PT0gY29tcGFyaXNvbikgcGxhY2Vob2xkZXIgPSBgWyR7dCgnbm9WYWx1ZScpfV1gO1xuXG4gIGxldCB2ZXJzaW9uVG9SZW5kZXIgPSB2ZXJzaW9uO1xuICBsZXQgY29tcGFyaXNvblRvUmVuZGVyID0gY29tcGFyaXNvbjtcblxuICBpZiAoaXNSaWNoVGV4dCkge1xuICAgIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ29iamVjdCcpIHZlcnNpb25Ub1JlbmRlciA9IEpTT04uc3RyaW5naWZ5KHZlcnNpb24sIG51bGwsIDIpO1xuICAgIGlmICh0eXBlb2YgY29tcGFyaXNvbiA9PT0gJ29iamVjdCcpIGNvbXBhcmlzb25Ub1JlbmRlciA9IEpTT04uc3RyaW5naWZ5KGNvbXBhcmlzb24sIG51bGwsIDIpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDxMYWJlbD5cbiAgICAgICAge2xvY2FsZSAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sb2NhbGUtbGFiZWxgfT57bG9jYWxlfTwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgICAge2dldFRyYW5zbGF0aW9uKGZpZWxkLmxhYmVsLCBpMThuKX1cbiAgICAgIDwvTGFiZWw+XG4gICAgICA8UmVhY3REaWZmVmlld2VyXG4gICAgICAgIHN0eWxlcz17ZGlmZlN0eWxlc31cbiAgICAgICAgY29tcGFyZU1ldGhvZD17RGlmZk1ldGhvZFtkaWZmTWV0aG9kXX1cbiAgICAgICAgb2xkVmFsdWU9e3R5cGVvZiBjb21wYXJpc29uVG9SZW5kZXIgIT09ICd1bmRlZmluZWQnID8gU3RyaW5nKGNvbXBhcmlzb25Ub1JlbmRlcikgOiBwbGFjZWhvbGRlcn1cbiAgICAgICAgbmV3VmFsdWU9e3R5cGVvZiB2ZXJzaW9uVG9SZW5kZXIgIT09ICd1bmRlZmluZWQnID8gU3RyaW5nKHZlcnNpb25Ub1JlbmRlcikgOiBwbGFjZWhvbGRlcn1cbiAgICAgICAgc3BsaXRWaWV3XG4gICAgICAgIGhpZGVMaW5lTnVtYmVyc1xuICAgICAgICBzaG93RGlmZk9ubHk9e2ZhbHNlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiVGV4dCIsImZpZWxkIiwibG9jYWxlIiwidmVyc2lvbiIsImNvbXBhcmlzb24iLCJpc1JpY2hUZXh0IiwiZGlmZk1ldGhvZCIsInBsYWNlaG9sZGVyIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsInZlcnNpb25Ub1JlbmRlciIsImNvbXBhcmlzb25Ub1JlbmRlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXYiLCJjbGFzc05hbWUiLCJMYWJlbCIsInNwYW4iLCJnZXRUcmFuc2xhdGlvbiIsImxhYmVsIiwiUmVhY3REaWZmVmlld2VyIiwic3R5bGVzIiwiZGlmZlN0eWxlcyIsImNvbXBhcmVNZXRob2QiLCJEaWZmTWV0aG9kIiwib2xkVmFsdWUiLCJTdHJpbmciLCJuZXdWYWx1ZSIsInNwbGl0VmlldyIsImhpZGVMaW5lTnVtYmVycyIsInNob3dEaWZmT25seSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkErQ0E7OztlQUFBOzs7NERBL0NrQjtnRkFDMEI7NEJBQ2I7NERBQ2I7c0JBQ1M7OEJBRUk7UUFFeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsT0FBd0I7UUFBR0MsY0FBQUEsT0FBT0MsZUFBQUEsUUFBUUMsZ0JBQUFBLFNBQVNDLG1CQUFBQSxzQ0FBWUMsWUFBQUEsNENBQWEsMkJBQU9DLG1CQUFBQTtJQUN2RixJQUFJQyxjQUFjO0lBQ2xCLElBQW9CQyxrQkFBQUEsSUFBQUEsNEJBQWMsRUFBQyxZQUEzQkMsSUFBWUQsZ0JBQVpDLEdBQUdDLE9BQVNGLGdCQUFURTtJQUVYLElBQUlQLFlBQVlDLFlBQVlHLGNBQWMsQUFBQyxJQUFnQixPQUFiRSxFQUFFLFlBQVc7SUFFM0QsSUFBSUUsa0JBQWtCUjtJQUN0QixJQUFJUyxxQkFBcUJSO0lBRXpCLElBQUlDLFlBQVk7UUFDZCxJQUFJLE9BQU9GLFlBQVksVUFBVVEsa0JBQWtCRSxLQUFLQyxTQUFTLENBQUNYLFNBQVMsTUFBTTtRQUNqRixJQUFJLE9BQU9DLGVBQWUsVUFBVVEscUJBQXFCQyxLQUFLQyxTQUFTLENBQUNWLFlBQVksTUFBTTtJQUM1RjtJQUVBLHFCQUNFLDZCQUFDVztRQUFJQyxXQUFXakI7cUJBQ2QsNkJBQUNrQixjQUFLLFFBQ0hmLHdCQUNDLDZCQUFDZ0I7UUFBS0YsV0FBVyxBQUFDLEdBQVksT0FBVmpCLFdBQVU7T0FBa0JHLFNBRWpEaUIsSUFBQUEsOEJBQWMsRUFBQ2xCLE1BQU1tQixLQUFLLEVBQUVWLHNCQUUvQiw2QkFBQ1csaUNBQWU7UUFDZEMsUUFBUUMsa0JBQVU7UUFDbEJDLGVBQWVDLG9DQUFVLENBQUNuQixXQUFXO1FBQ3JDb0IsVUFBVSxPQUFPZCx1QkFBdUIsY0FBY2UsT0FBT2Ysc0JBQXNCTDtRQUNuRnFCLFVBQVUsT0FBT2pCLG9CQUFvQixjQUFjZ0IsT0FBT2hCLG1CQUFtQko7UUFDN0VzQixXQUFBQTtRQUNBQyxpQkFBQUE7UUFDQUMsY0FBYzs7QUFJdEI7SUFFQSxXQUFlL0IifQ==
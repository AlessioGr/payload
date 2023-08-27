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
var _reactdiffviewercontinued = /*#__PURE__*/ _interop_require_default(require("react-diff-viewer-continued"));
var _reacti18next = require("react-i18next");
var _Config = require("../../../../../utilities/Config");
var _Locale = require("../../../../../utilities/Locale");
var _types = require("../../../../../../../fields/config/types");
var _Label = /*#__PURE__*/ _interop_require_default(require("../../Label"));
var _styles = require("../styles");
var _getTranslation = require("../../../../../../../utilities/getTranslation");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "relationship-diff";
var generateLabelFromValue = function(collections, field, locale, value) {
    var relation;
    var relatedDoc;
    var valueToReturn = "";
    if (Array.isArray(field.relationTo)) {
        if (typeof value === "object") {
            relation = value.relationTo;
            relatedDoc = value.value;
        }
    } else {
        relation = field.relationTo;
        relatedDoc = value;
    }
    var relatedCollection = collections.find(function(c) {
        return c.slug === relation;
    });
    if (relatedCollection) {
        var _relatedCollection_admin, _relatedCollection, _relatedDoc, _relatedDoc1;
        var useAsTitle = (_relatedCollection = relatedCollection) === null || _relatedCollection === void 0 ? void 0 : (_relatedCollection_admin = _relatedCollection.admin) === null || _relatedCollection_admin === void 0 ? void 0 : _relatedCollection_admin.useAsTitle;
        var useAsTitleField = relatedCollection.fields.find(function(f) {
            return (0, _types.fieldAffectsData)(f) && !(0, _types.fieldIsPresentationalOnly)(f) && f.name === useAsTitle;
        });
        var titleFieldIsLocalized = false;
        if (useAsTitleField && (0, _types.fieldAffectsData)(useAsTitleField)) titleFieldIsLocalized = useAsTitleField.localized;
        if (typeof ((_relatedDoc = relatedDoc) === null || _relatedDoc === void 0 ? void 0 : _relatedDoc[useAsTitle]) !== "undefined") {
            valueToReturn = relatedDoc[useAsTitle];
        } else if (typeof ((_relatedDoc1 = relatedDoc) === null || _relatedDoc1 === void 0 ? void 0 : _relatedDoc1.id) !== "undefined") {
            valueToReturn = relatedDoc.id;
        }
        if (typeof valueToReturn === "object" && titleFieldIsLocalized) {
            valueToReturn = valueToReturn[locale];
        }
    }
    return valueToReturn;
};
var Relationship = function(param) {
    var field = param.field, version = param.version, comparison = param.comparison;
    var collections = (0, _Config.useConfig)().collections;
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useLocale = (0, _Locale.useLocale)(), locale = _useLocale.code;
    var placeholder = "";
    if (version === comparison) placeholder = "[".concat(t("noValue"), "]");
    var versionToRender = version;
    var comparisonToRender = comparison;
    if (field.hasMany) {
        if (Array.isArray(version)) versionToRender = version.map(function(val) {
            return generateLabelFromValue(collections, field, locale, val);
        }).join(", ");
        if (Array.isArray(comparison)) comparisonToRender = comparison.map(function(val) {
            return generateLabelFromValue(collections, field, locale, val);
        }).join(", ");
    } else {
        versionToRender = generateLabelFromValue(collections, field, locale, version);
        comparisonToRender = generateLabelFromValue(collections, field, locale, comparison);
    }
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Label.default, null, locale && /*#__PURE__*/ _react.default.createElement("span", {
        className: "".concat(baseClass, "__locale-label")
    }, locale), (0, _getTranslation.getTranslation)(field.label, i18n)), /*#__PURE__*/ _react.default.createElement(_reactdiffviewercontinued.default, {
        styles: _styles.diffStyles,
        oldValue: typeof comparisonToRender !== "undefined" ? String(comparisonToRender) : placeholder,
        newValue: typeof versionToRender !== "undefined" ? String(versionToRender) : placeholder,
        splitView: true,
        hideLineNumbers: true,
        showDiffOnly: false
    }));
    return null;
};
var _default = Relationship;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVuZGVyRmllbGRzVG9EaWZmL2ZpZWxkcy9SZWxhdGlvbnNoaXAvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3REaWZmVmlld2VyIGZyb20gJ3JlYWN0LWRpZmYtdmlld2VyLWNvbnRpbnVlZCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvTG9jYWxlJztcbmltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgZmllbGRBZmZlY3RzRGF0YSwgZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seSwgUmVsYXRpb25zaGlwRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi8uLi9MYWJlbCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGRpZmZTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdyZWxhdGlvbnNoaXAtZGlmZic7XG5cbnR5cGUgUmVsYXRpb25zaGlwVmFsdWUgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuXG5jb25zdCBnZW5lcmF0ZUxhYmVsRnJvbVZhbHVlID0gKFxuICBjb2xsZWN0aW9uczogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1tdLFxuICBmaWVsZDogUmVsYXRpb25zaGlwRmllbGQsXG4gIGxvY2FsZTogc3RyaW5nLFxuICB2YWx1ZTogUmVsYXRpb25zaGlwVmFsdWUgfCB7IHJlbGF0aW9uVG86IHN0cmluZywgdmFsdWU6IFJlbGF0aW9uc2hpcFZhbHVlIH0sXG4pOiBzdHJpbmcgPT4ge1xuICBsZXQgcmVsYXRpb246IHN0cmluZztcbiAgbGV0IHJlbGF0ZWREb2M6IFJlbGF0aW9uc2hpcFZhbHVlO1xuICBsZXQgdmFsdWVUb1JldHVybiA9ICcnIGFzIGFueTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZC5yZWxhdGlvblRvKSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICByZWxhdGlvbiA9IHZhbHVlLnJlbGF0aW9uVG87XG4gICAgICByZWxhdGVkRG9jID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlbGF0aW9uID0gZmllbGQucmVsYXRpb25UbztcbiAgICByZWxhdGVkRG9jID0gdmFsdWU7XG4gIH1cblxuICBjb25zdCByZWxhdGVkQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb25zLmZpbmQoKGMpID0+IGMuc2x1ZyA9PT0gcmVsYXRpb24pO1xuXG4gIGlmIChyZWxhdGVkQ29sbGVjdGlvbikge1xuICAgIGNvbnN0IHVzZUFzVGl0bGUgPSByZWxhdGVkQ29sbGVjdGlvbj8uYWRtaW4/LnVzZUFzVGl0bGU7XG4gICAgY29uc3QgdXNlQXNUaXRsZUZpZWxkID0gcmVsYXRlZENvbGxlY3Rpb24uZmllbGRzLmZpbmQoKGYpID0+IChmaWVsZEFmZmVjdHNEYXRhKGYpICYmICFmaWVsZElzUHJlc2VudGF0aW9uYWxPbmx5KGYpKSAmJiBmLm5hbWUgPT09IHVzZUFzVGl0bGUpO1xuICAgIGxldCB0aXRsZUZpZWxkSXNMb2NhbGl6ZWQgPSBmYWxzZTtcblxuICAgIGlmICh1c2VBc1RpdGxlRmllbGQgJiYgZmllbGRBZmZlY3RzRGF0YSh1c2VBc1RpdGxlRmllbGQpKSB0aXRsZUZpZWxkSXNMb2NhbGl6ZWQgPSB1c2VBc1RpdGxlRmllbGQubG9jYWxpemVkO1xuXG5cbiAgICBpZiAodHlwZW9mIHJlbGF0ZWREb2M/Llt1c2VBc1RpdGxlXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhbHVlVG9SZXR1cm4gPSByZWxhdGVkRG9jW3VzZUFzVGl0bGVdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbGF0ZWREb2M/LmlkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFsdWVUb1JldHVybiA9IHJlbGF0ZWREb2MuaWQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZVRvUmV0dXJuID09PSAnb2JqZWN0JyAmJiB0aXRsZUZpZWxkSXNMb2NhbGl6ZWQpIHtcbiAgICAgIHZhbHVlVG9SZXR1cm4gPSB2YWx1ZVRvUmV0dXJuW2xvY2FsZV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlVG9SZXR1cm47XG59O1xuXG5jb25zdCBSZWxhdGlvbnNoaXA6IFJlYWN0LkZDPFByb3BzICYgeyBmaWVsZDogUmVsYXRpb25zaGlwRmllbGQgfT4gPSAoeyBmaWVsZCwgdmVyc2lvbiwgY29tcGFyaXNvbiB9KSA9PiB7XG4gIGNvbnN0IHsgY29sbGVjdGlvbnMgfSA9IHVzZUNvbmZpZygpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG4gIGNvbnN0IHsgY29kZTogbG9jYWxlIH0gPSB1c2VMb2NhbGUoKTtcblxuICBsZXQgcGxhY2Vob2xkZXIgPSAnJztcblxuICBpZiAodmVyc2lvbiA9PT0gY29tcGFyaXNvbikgcGxhY2Vob2xkZXIgPSBgWyR7dCgnbm9WYWx1ZScpfV1gO1xuXG4gIGxldCB2ZXJzaW9uVG9SZW5kZXIgPSB2ZXJzaW9uO1xuICBsZXQgY29tcGFyaXNvblRvUmVuZGVyID0gY29tcGFyaXNvbjtcblxuICBpZiAoZmllbGQuaGFzTWFueSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZlcnNpb24pKSB2ZXJzaW9uVG9SZW5kZXIgPSB2ZXJzaW9uLm1hcCgodmFsKSA9PiBnZW5lcmF0ZUxhYmVsRnJvbVZhbHVlKGNvbGxlY3Rpb25zLCBmaWVsZCwgbG9jYWxlLCB2YWwpKS5qb2luKCcsICcpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbXBhcmlzb24pKSBjb21wYXJpc29uVG9SZW5kZXIgPSBjb21wYXJpc29uLm1hcCgodmFsKSA9PiBnZW5lcmF0ZUxhYmVsRnJvbVZhbHVlKGNvbGxlY3Rpb25zLCBmaWVsZCwgbG9jYWxlLCB2YWwpKS5qb2luKCcsICcpO1xuICB9IGVsc2Uge1xuICAgIHZlcnNpb25Ub1JlbmRlciA9IGdlbmVyYXRlTGFiZWxGcm9tVmFsdWUoY29sbGVjdGlvbnMsIGZpZWxkLCBsb2NhbGUsIHZlcnNpb24pO1xuICAgIGNvbXBhcmlzb25Ub1JlbmRlciA9IGdlbmVyYXRlTGFiZWxGcm9tVmFsdWUoY29sbGVjdGlvbnMsIGZpZWxkLCBsb2NhbGUsIGNvbXBhcmlzb24pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDxMYWJlbD5cbiAgICAgICAge2xvY2FsZSAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sb2NhbGUtbGFiZWxgfT57bG9jYWxlfTwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgICAge2dldFRyYW5zbGF0aW9uKGZpZWxkLmxhYmVsLCBpMThuKX1cbiAgICAgIDwvTGFiZWw+XG4gICAgICA8UmVhY3REaWZmVmlld2VyXG4gICAgICAgIHN0eWxlcz17ZGlmZlN0eWxlc31cbiAgICAgICAgb2xkVmFsdWU9e3R5cGVvZiBjb21wYXJpc29uVG9SZW5kZXIgIT09ICd1bmRlZmluZWQnID8gU3RyaW5nKGNvbXBhcmlzb25Ub1JlbmRlcikgOiBwbGFjZWhvbGRlcn1cbiAgICAgICAgbmV3VmFsdWU9e3R5cGVvZiB2ZXJzaW9uVG9SZW5kZXIgIT09ICd1bmRlZmluZWQnID8gU3RyaW5nKHZlcnNpb25Ub1JlbmRlcikgOiBwbGFjZWhvbGRlcn1cbiAgICAgICAgc3BsaXRWaWV3XG4gICAgICAgIGhpZGVMaW5lTnVtYmVyc1xuICAgICAgICBzaG93RGlmZk9ubHk9e2ZhbHNlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGF0aW9uc2hpcDtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJnZW5lcmF0ZUxhYmVsRnJvbVZhbHVlIiwiY29sbGVjdGlvbnMiLCJmaWVsZCIsImxvY2FsZSIsInZhbHVlIiwicmVsYXRpb24iLCJyZWxhdGVkRG9jIiwidmFsdWVUb1JldHVybiIsIkFycmF5IiwiaXNBcnJheSIsInJlbGF0aW9uVG8iLCJyZWxhdGVkQ29sbGVjdGlvbiIsImZpbmQiLCJjIiwic2x1ZyIsInVzZUFzVGl0bGUiLCJhZG1pbiIsInVzZUFzVGl0bGVGaWVsZCIsImZpZWxkcyIsImYiLCJmaWVsZEFmZmVjdHNEYXRhIiwiZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seSIsIm5hbWUiLCJ0aXRsZUZpZWxkSXNMb2NhbGl6ZWQiLCJsb2NhbGl6ZWQiLCJpZCIsIlJlbGF0aW9uc2hpcCIsInZlcnNpb24iLCJjb21wYXJpc29uIiwidXNlQ29uZmlnIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsInVzZUxvY2FsZSIsImNvZGUiLCJwbGFjZWhvbGRlciIsInZlcnNpb25Ub1JlbmRlciIsImNvbXBhcmlzb25Ub1JlbmRlciIsImhhc01hbnkiLCJtYXAiLCJ2YWwiLCJqb2luIiwiZGl2IiwiY2xhc3NOYW1lIiwiTGFiZWwiLCJzcGFuIiwiZ2V0VHJhbnNsYXRpb24iLCJsYWJlbCIsIlJlYWN0RGlmZlZpZXdlciIsInN0eWxlcyIsImRpZmZTdHlsZXMiLCJvbGRWYWx1ZSIsIlN0cmluZyIsIm5ld1ZhbHVlIiwic3BsaXRWaWV3IiwiaGlkZUxpbmVOdW1iZXJzIiwic2hvd0RpZmZPbmx5Il0sIm1hcHBpbmdzIjoiOzs7OytCQXdHQTs7O2VBQUE7Ozs0REF4R2tCOytFQUNVOzRCQUNHO3NCQUNMO3NCQUNBO3FCQUVxRDs0REFDN0Q7c0JBRVM7OEJBQ0k7UUFFeEI7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFJbEIsSUFBTUMseUJBQXlCLFNBQzdCQyxhQUNBQyxPQUNBQyxRQUNBQztJQUVBLElBQUlDO0lBQ0osSUFBSUM7SUFDSixJQUFJQyxnQkFBZ0I7SUFFcEIsSUFBSUMsTUFBTUMsT0FBTyxDQUFDUCxNQUFNUSxVQUFVLEdBQUc7UUFDbkMsSUFBSSxPQUFPTixVQUFVLFVBQVU7WUFDN0JDLFdBQVdELE1BQU1NLFVBQVU7WUFDM0JKLGFBQWFGLE1BQU1BLEtBQUs7UUFDMUI7SUFDRixPQUFPO1FBQ0xDLFdBQVdILE1BQU1RLFVBQVU7UUFDM0JKLGFBQWFGO0lBQ2Y7SUFFQSxJQUFNTyxvQkFBb0JWLFlBQVlXLElBQUksQ0FBQyxTQUFDQztlQUFNQSxFQUFFQyxJQUFJLEtBQUtUOztJQUU3RCxJQUFJTSxtQkFBbUI7WUFDRkEsMEJBQUFBLG9CQU9STCxhQUVPQTtRQVRsQixJQUFNUyxjQUFhSixxQkFBQUEsK0JBQUFBLDBDQUFBQSwyQkFBQUEsbUJBQW1CSyxLQUFLLGNBQXhCTCwrQ0FBQUEseUJBQTBCSSxVQUFVO1FBQ3ZELElBQU1FLGtCQUFrQk4sa0JBQWtCTyxNQUFNLENBQUNOLElBQUksQ0FBQyxTQUFDTzttQkFBTSxBQUFDQyxJQUFBQSx1QkFBZ0IsRUFBQ0QsTUFBTSxDQUFDRSxJQUFBQSxnQ0FBeUIsRUFBQ0YsTUFBT0EsRUFBRUcsSUFBSSxLQUFLUDs7UUFDbEksSUFBSVEsd0JBQXdCO1FBRTVCLElBQUlOLG1CQUFtQkcsSUFBQUEsdUJBQWdCLEVBQUNILGtCQUFrQk0sd0JBQXdCTixnQkFBZ0JPLFNBQVM7UUFHM0csSUFBSSxTQUFPbEIsY0FBQUEsd0JBQUFBLGtDQUFBQSxXQUFZLENBQUNTLFdBQVcsTUFBSyxhQUFhO1lBQ25EUixnQkFBZ0JELFVBQVUsQ0FBQ1MsV0FBVztRQUN4QyxPQUFPLElBQUksU0FBT1QsZUFBQUEsd0JBQUFBLG1DQUFBQSxhQUFZbUIsRUFBRSxNQUFLLGFBQWE7WUFDaERsQixnQkFBZ0JELFdBQVdtQixFQUFFO1FBQy9CO1FBRUEsSUFBSSxPQUFPbEIsa0JBQWtCLFlBQVlnQix1QkFBdUI7WUFDOURoQixnQkFBZ0JBLGFBQWEsQ0FBQ0osT0FBTztRQUN2QztJQUNGO0lBRUEsT0FBT0k7QUFDVDtBQUVBLElBQU1tQixlQUErRDtRQUFHeEIsY0FBQUEsT0FBT3lCLGdCQUFBQSxTQUFTQyxtQkFBQUE7SUFDdEYsSUFBTSxBQUFFM0IsY0FBZ0I0QixJQUFBQSxpQkFBUyxJQUF6QjVCO0lBQ1IsSUFBb0I2QixrQkFBQUEsSUFBQUEsNEJBQWMsRUFBQyxZQUEzQkMsSUFBWUQsZ0JBQVpDLEdBQUdDLE9BQVNGLGdCQUFURTtJQUNYLElBQXlCQyxhQUFBQSxJQUFBQSxpQkFBUyxLQUExQkMsQUFBTS9CLFNBQVc4QixXQUFqQkM7SUFFUixJQUFJQyxjQUFjO0lBRWxCLElBQUlSLFlBQVlDLFlBQVlPLGNBQWMsQUFBQyxJQUFnQixPQUFiSixFQUFFLFlBQVc7SUFFM0QsSUFBSUssa0JBQWtCVDtJQUN0QixJQUFJVSxxQkFBcUJUO0lBRXpCLElBQUkxQixNQUFNb0MsT0FBTyxFQUFFO1FBQ2pCLElBQUk5QixNQUFNQyxPQUFPLENBQUNrQixVQUFVUyxrQkFBa0JULFFBQVFZLEdBQUcsQ0FBQyxTQUFDQzttQkFBUXhDLHVCQUF1QkMsYUFBYUMsT0FBT0MsUUFBUXFDO1dBQU1DLElBQUksQ0FBQztRQUNqSSxJQUFJakMsTUFBTUMsT0FBTyxDQUFDbUIsYUFBYVMscUJBQXFCVCxXQUFXVyxHQUFHLENBQUMsU0FBQ0M7bUJBQVF4Qyx1QkFBdUJDLGFBQWFDLE9BQU9DLFFBQVFxQztXQUFNQyxJQUFJLENBQUM7SUFDNUksT0FBTztRQUNMTCxrQkFBa0JwQyx1QkFBdUJDLGFBQWFDLE9BQU9DLFFBQVF3QjtRQUNyRVUscUJBQXFCckMsdUJBQXVCQyxhQUFhQyxPQUFPQyxRQUFReUI7SUFDMUU7SUFFQSxxQkFDRSw2QkFBQ2M7UUFBSUMsV0FBVzVDO3FCQUNkLDZCQUFDNkMsY0FBSyxRQUNIekMsd0JBQ0MsNkJBQUMwQztRQUFLRixXQUFXLEFBQUMsR0FBWSxPQUFWNUMsV0FBVTtPQUFrQkksU0FFakQyQyxJQUFBQSw4QkFBYyxFQUFDNUMsTUFBTTZDLEtBQUssRUFBRWYsc0JBRS9CLDZCQUFDZ0IsaUNBQWU7UUFDZEMsUUFBUUMsa0JBQVU7UUFDbEJDLFVBQVUsT0FBT2QsdUJBQXVCLGNBQWNlLE9BQU9mLHNCQUFzQkY7UUFDbkZrQixVQUFVLE9BQU9qQixvQkFBb0IsY0FBY2dCLE9BQU9oQixtQkFBbUJEO1FBQzdFbUIsV0FBQUE7UUFDQUMsaUJBQUFBO1FBQ0FDLGNBQWM7O0lBS3BCLE9BQU87QUFDVDtJQUVBLFdBQWU5QiJ9
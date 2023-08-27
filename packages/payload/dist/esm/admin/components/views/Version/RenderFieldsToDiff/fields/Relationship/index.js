import React from "react";
import ReactDiffViewer from "react-diff-viewer-continued";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../../../../utilities/Config";
import { useLocale } from "../../../../../utilities/Locale";
import { fieldAffectsData, fieldIsPresentationalOnly } from "../../../../../../../fields/config/types";
import Label from "../../Label";
import { diffStyles } from "../styles";
import { getTranslation } from "../../../../../../../utilities/getTranslation";
import "./index.scss";
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
            return fieldAffectsData(f) && !fieldIsPresentationalOnly(f) && f.name === useAsTitle;
        });
        var titleFieldIsLocalized = false;
        if (useAsTitleField && fieldAffectsData(useAsTitleField)) titleFieldIsLocalized = useAsTitleField.localized;
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
    var collections = useConfig().collections;
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var _useLocale = useLocale(), locale = _useLocale.code;
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
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement(Label, null, locale && /*#__PURE__*/ React.createElement("span", {
        className: "".concat(baseClass, "__locale-label")
    }, locale), getTranslation(field.label, i18n)), /*#__PURE__*/ React.createElement(ReactDiffViewer, {
        styles: diffStyles,
        oldValue: typeof comparisonToRender !== "undefined" ? String(comparisonToRender) : placeholder,
        newValue: typeof versionToRender !== "undefined" ? String(versionToRender) : placeholder,
        splitView: true,
        hideLineNumbers: true,
        showDiffOnly: false
    }));
    return null;
};
export default Relationship;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVuZGVyRmllbGRzVG9EaWZmL2ZpZWxkcy9SZWxhdGlvbnNoaXAvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3REaWZmVmlld2VyIGZyb20gJ3JlYWN0LWRpZmYtdmlld2VyLWNvbnRpbnVlZCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvTG9jYWxlJztcbmltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb2xsZWN0aW9ucy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgZmllbGRBZmZlY3RzRGF0YSwgZmllbGRJc1ByZXNlbnRhdGlvbmFsT25seSwgUmVsYXRpb25zaGlwRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCBMYWJlbCBmcm9tICcuLi8uLi9MYWJlbCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGRpZmZTdHlsZXMgfSBmcm9tICcuLi9zdHlsZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdyZWxhdGlvbnNoaXAtZGlmZic7XG5cbnR5cGUgUmVsYXRpb25zaGlwVmFsdWUgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuXG5jb25zdCBnZW5lcmF0ZUxhYmVsRnJvbVZhbHVlID0gKFxuICBjb2xsZWN0aW9uczogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZ1tdLFxuICBmaWVsZDogUmVsYXRpb25zaGlwRmllbGQsXG4gIGxvY2FsZTogc3RyaW5nLFxuICB2YWx1ZTogUmVsYXRpb25zaGlwVmFsdWUgfCB7IHJlbGF0aW9uVG86IHN0cmluZywgdmFsdWU6IFJlbGF0aW9uc2hpcFZhbHVlIH0sXG4pOiBzdHJpbmcgPT4ge1xuICBsZXQgcmVsYXRpb246IHN0cmluZztcbiAgbGV0IHJlbGF0ZWREb2M6IFJlbGF0aW9uc2hpcFZhbHVlO1xuICBsZXQgdmFsdWVUb1JldHVybiA9ICcnIGFzIGFueTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShmaWVsZC5yZWxhdGlvblRvKSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICByZWxhdGlvbiA9IHZhbHVlLnJlbGF0aW9uVG87XG4gICAgICByZWxhdGVkRG9jID0gdmFsdWUudmFsdWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlbGF0aW9uID0gZmllbGQucmVsYXRpb25UbztcbiAgICByZWxhdGVkRG9jID0gdmFsdWU7XG4gIH1cblxuICBjb25zdCByZWxhdGVkQ29sbGVjdGlvbiA9IGNvbGxlY3Rpb25zLmZpbmQoKGMpID0+IGMuc2x1ZyA9PT0gcmVsYXRpb24pO1xuXG4gIGlmIChyZWxhdGVkQ29sbGVjdGlvbikge1xuICAgIGNvbnN0IHVzZUFzVGl0bGUgPSByZWxhdGVkQ29sbGVjdGlvbj8uYWRtaW4/LnVzZUFzVGl0bGU7XG4gICAgY29uc3QgdXNlQXNUaXRsZUZpZWxkID0gcmVsYXRlZENvbGxlY3Rpb24uZmllbGRzLmZpbmQoKGYpID0+IChmaWVsZEFmZmVjdHNEYXRhKGYpICYmICFmaWVsZElzUHJlc2VudGF0aW9uYWxPbmx5KGYpKSAmJiBmLm5hbWUgPT09IHVzZUFzVGl0bGUpO1xuICAgIGxldCB0aXRsZUZpZWxkSXNMb2NhbGl6ZWQgPSBmYWxzZTtcblxuICAgIGlmICh1c2VBc1RpdGxlRmllbGQgJiYgZmllbGRBZmZlY3RzRGF0YSh1c2VBc1RpdGxlRmllbGQpKSB0aXRsZUZpZWxkSXNMb2NhbGl6ZWQgPSB1c2VBc1RpdGxlRmllbGQubG9jYWxpemVkO1xuXG5cbiAgICBpZiAodHlwZW9mIHJlbGF0ZWREb2M/Llt1c2VBc1RpdGxlXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhbHVlVG9SZXR1cm4gPSByZWxhdGVkRG9jW3VzZUFzVGl0bGVdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbGF0ZWREb2M/LmlkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFsdWVUb1JldHVybiA9IHJlbGF0ZWREb2MuaWQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZVRvUmV0dXJuID09PSAnb2JqZWN0JyAmJiB0aXRsZUZpZWxkSXNMb2NhbGl6ZWQpIHtcbiAgICAgIHZhbHVlVG9SZXR1cm4gPSB2YWx1ZVRvUmV0dXJuW2xvY2FsZV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlVG9SZXR1cm47XG59O1xuXG5jb25zdCBSZWxhdGlvbnNoaXA6IFJlYWN0LkZDPFByb3BzICYgeyBmaWVsZDogUmVsYXRpb25zaGlwRmllbGQgfT4gPSAoeyBmaWVsZCwgdmVyc2lvbiwgY29tcGFyaXNvbiB9KSA9PiB7XG4gIGNvbnN0IHsgY29sbGVjdGlvbnMgfSA9IHVzZUNvbmZpZygpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG4gIGNvbnN0IHsgY29kZTogbG9jYWxlIH0gPSB1c2VMb2NhbGUoKTtcblxuICBsZXQgcGxhY2Vob2xkZXIgPSAnJztcblxuICBpZiAodmVyc2lvbiA9PT0gY29tcGFyaXNvbikgcGxhY2Vob2xkZXIgPSBgWyR7dCgnbm9WYWx1ZScpfV1gO1xuXG4gIGxldCB2ZXJzaW9uVG9SZW5kZXIgPSB2ZXJzaW9uO1xuICBsZXQgY29tcGFyaXNvblRvUmVuZGVyID0gY29tcGFyaXNvbjtcblxuICBpZiAoZmllbGQuaGFzTWFueSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZlcnNpb24pKSB2ZXJzaW9uVG9SZW5kZXIgPSB2ZXJzaW9uLm1hcCgodmFsKSA9PiBnZW5lcmF0ZUxhYmVsRnJvbVZhbHVlKGNvbGxlY3Rpb25zLCBmaWVsZCwgbG9jYWxlLCB2YWwpKS5qb2luKCcsICcpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbXBhcmlzb24pKSBjb21wYXJpc29uVG9SZW5kZXIgPSBjb21wYXJpc29uLm1hcCgodmFsKSA9PiBnZW5lcmF0ZUxhYmVsRnJvbVZhbHVlKGNvbGxlY3Rpb25zLCBmaWVsZCwgbG9jYWxlLCB2YWwpKS5qb2luKCcsICcpO1xuICB9IGVsc2Uge1xuICAgIHZlcnNpb25Ub1JlbmRlciA9IGdlbmVyYXRlTGFiZWxGcm9tVmFsdWUoY29sbGVjdGlvbnMsIGZpZWxkLCBsb2NhbGUsIHZlcnNpb24pO1xuICAgIGNvbXBhcmlzb25Ub1JlbmRlciA9IGdlbmVyYXRlTGFiZWxGcm9tVmFsdWUoY29sbGVjdGlvbnMsIGZpZWxkLCBsb2NhbGUsIGNvbXBhcmlzb24pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIDxMYWJlbD5cbiAgICAgICAge2xvY2FsZSAmJiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sb2NhbGUtbGFiZWxgfT57bG9jYWxlfTwvc3Bhbj5cbiAgICAgICAgKX1cbiAgICAgICAge2dldFRyYW5zbGF0aW9uKGZpZWxkLmxhYmVsLCBpMThuKX1cbiAgICAgIDwvTGFiZWw+XG4gICAgICA8UmVhY3REaWZmVmlld2VyXG4gICAgICAgIHN0eWxlcz17ZGlmZlN0eWxlc31cbiAgICAgICAgb2xkVmFsdWU9e3R5cGVvZiBjb21wYXJpc29uVG9SZW5kZXIgIT09ICd1bmRlZmluZWQnID8gU3RyaW5nKGNvbXBhcmlzb25Ub1JlbmRlcikgOiBwbGFjZWhvbGRlcn1cbiAgICAgICAgbmV3VmFsdWU9e3R5cGVvZiB2ZXJzaW9uVG9SZW5kZXIgIT09ICd1bmRlZmluZWQnID8gU3RyaW5nKHZlcnNpb25Ub1JlbmRlcikgOiBwbGFjZWhvbGRlcn1cbiAgICAgICAgc3BsaXRWaWV3XG4gICAgICAgIGhpZGVMaW5lTnVtYmVyc1xuICAgICAgICBzaG93RGlmZk9ubHk9e2ZhbHNlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbGF0aW9uc2hpcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RGlmZlZpZXdlciIsInVzZVRyYW5zbGF0aW9uIiwidXNlQ29uZmlnIiwidXNlTG9jYWxlIiwiZmllbGRBZmZlY3RzRGF0YSIsImZpZWxkSXNQcmVzZW50YXRpb25hbE9ubHkiLCJMYWJlbCIsImRpZmZTdHlsZXMiLCJnZXRUcmFuc2xhdGlvbiIsImJhc2VDbGFzcyIsImdlbmVyYXRlTGFiZWxGcm9tVmFsdWUiLCJjb2xsZWN0aW9ucyIsImZpZWxkIiwibG9jYWxlIiwidmFsdWUiLCJyZWxhdGlvbiIsInJlbGF0ZWREb2MiLCJ2YWx1ZVRvUmV0dXJuIiwiQXJyYXkiLCJpc0FycmF5IiwicmVsYXRpb25UbyIsInJlbGF0ZWRDb2xsZWN0aW9uIiwiZmluZCIsImMiLCJzbHVnIiwidXNlQXNUaXRsZSIsImFkbWluIiwidXNlQXNUaXRsZUZpZWxkIiwiZmllbGRzIiwiZiIsIm5hbWUiLCJ0aXRsZUZpZWxkSXNMb2NhbGl6ZWQiLCJsb2NhbGl6ZWQiLCJpZCIsIlJlbGF0aW9uc2hpcCIsInZlcnNpb24iLCJjb21wYXJpc29uIiwidCIsImkxOG4iLCJjb2RlIiwicGxhY2Vob2xkZXIiLCJ2ZXJzaW9uVG9SZW5kZXIiLCJjb21wYXJpc29uVG9SZW5kZXIiLCJoYXNNYW55IiwibWFwIiwidmFsIiwiam9pbiIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJsYWJlbCIsInN0eWxlcyIsIm9sZFZhbHVlIiwiU3RyaW5nIiwibmV3VmFsdWUiLCJzcGxpdFZpZXciLCJoaWRlTGluZU51bWJlcnMiLCJzaG93RGlmZk9ubHkiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixPQUFPQyxxQkFBcUIsOEJBQThCO0FBQzFELFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsU0FBU0MsU0FBUyxRQUFRLGtDQUFrQztBQUM1RCxTQUFTQyxTQUFTLFFBQVEsa0NBQWtDO0FBRTVELFNBQVNDLGdCQUFnQixFQUFFQyx5QkFBeUIsUUFBMkIsMkNBQTJDO0FBQzFILE9BQU9DLFdBQVcsY0FBYztBQUVoQyxTQUFTQyxVQUFVLFFBQVEsWUFBWTtBQUN2QyxTQUFTQyxjQUFjLFFBQVEsZ0RBQWdEO0FBRS9FLE9BQU8sZUFBZTtBQUV0QixJQUFNQyxZQUFZO0FBSWxCLElBQU1DLHlCQUF5QixTQUM3QkMsYUFDQUMsT0FDQUMsUUFDQUM7SUFFQSxJQUFJQztJQUNKLElBQUlDO0lBQ0osSUFBSUMsZ0JBQWdCO0lBRXBCLElBQUlDLE1BQU1DLE9BQU8sQ0FBQ1AsTUFBTVEsVUFBVSxHQUFHO1FBQ25DLElBQUksT0FBT04sVUFBVSxVQUFVO1lBQzdCQyxXQUFXRCxNQUFNTSxVQUFVO1lBQzNCSixhQUFhRixNQUFNQSxLQUFLO1FBQzFCO0lBQ0YsT0FBTztRQUNMQyxXQUFXSCxNQUFNUSxVQUFVO1FBQzNCSixhQUFhRjtJQUNmO0lBRUEsSUFBTU8sb0JBQW9CVixZQUFZVyxJQUFJLENBQUMsU0FBQ0M7ZUFBTUEsRUFBRUMsSUFBSSxLQUFLVDs7SUFFN0QsSUFBSU0sbUJBQW1CO1lBQ0ZBLDBCQUFBQSxvQkFPUkwsYUFFT0E7UUFUbEIsSUFBTVMsY0FBYUoscUJBQUFBLCtCQUFBQSwwQ0FBQUEsMkJBQUFBLG1CQUFtQkssS0FBSyxjQUF4QkwsK0NBQUFBLHlCQUEwQkksVUFBVTtRQUN2RCxJQUFNRSxrQkFBa0JOLGtCQUFrQk8sTUFBTSxDQUFDTixJQUFJLENBQUMsU0FBQ087bUJBQU0sQUFBQ3pCLGlCQUFpQnlCLE1BQU0sQ0FBQ3hCLDBCQUEwQndCLE1BQU9BLEVBQUVDLElBQUksS0FBS0w7O1FBQ2xJLElBQUlNLHdCQUF3QjtRQUU1QixJQUFJSixtQkFBbUJ2QixpQkFBaUJ1QixrQkFBa0JJLHdCQUF3QkosZ0JBQWdCSyxTQUFTO1FBRzNHLElBQUksU0FBT2hCLGNBQUFBLHdCQUFBQSxrQ0FBQUEsV0FBWSxDQUFDUyxXQUFXLE1BQUssYUFBYTtZQUNuRFIsZ0JBQWdCRCxVQUFVLENBQUNTLFdBQVc7UUFDeEMsT0FBTyxJQUFJLFNBQU9ULGVBQUFBLHdCQUFBQSxtQ0FBQUEsYUFBWWlCLEVBQUUsTUFBSyxhQUFhO1lBQ2hEaEIsZ0JBQWdCRCxXQUFXaUIsRUFBRTtRQUMvQjtRQUVBLElBQUksT0FBT2hCLGtCQUFrQixZQUFZYyx1QkFBdUI7WUFDOURkLGdCQUFnQkEsYUFBYSxDQUFDSixPQUFPO1FBQ3ZDO0lBQ0Y7SUFFQSxPQUFPSTtBQUNUO0FBRUEsSUFBTWlCLGVBQStEO1FBQUd0QixjQUFBQSxPQUFPdUIsZ0JBQUFBLFNBQVNDLG1CQUFBQTtJQUN0RixJQUFNLEFBQUV6QixjQUFnQlQsWUFBaEJTO0lBQ1IsSUFBb0JWLGtCQUFBQSxlQUFlLFlBQTNCb0MsSUFBWXBDLGdCQUFab0MsR0FBR0MsT0FBU3JDLGdCQUFUcUM7SUFDWCxJQUF5Qm5DLGFBQUFBLGFBQWpCb0MsQUFBTTFCLFNBQVdWLFdBQWpCb0M7SUFFUixJQUFJQyxjQUFjO0lBRWxCLElBQUlMLFlBQVlDLFlBQVlJLGNBQWMsQUFBQyxJQUFnQixPQUFiSCxFQUFFLFlBQVc7SUFFM0QsSUFBSUksa0JBQWtCTjtJQUN0QixJQUFJTyxxQkFBcUJOO0lBRXpCLElBQUl4QixNQUFNK0IsT0FBTyxFQUFFO1FBQ2pCLElBQUl6QixNQUFNQyxPQUFPLENBQUNnQixVQUFVTSxrQkFBa0JOLFFBQVFTLEdBQUcsQ0FBQyxTQUFDQzttQkFBUW5DLHVCQUF1QkMsYUFBYUMsT0FBT0MsUUFBUWdDO1dBQU1DLElBQUksQ0FBQztRQUNqSSxJQUFJNUIsTUFBTUMsT0FBTyxDQUFDaUIsYUFBYU0scUJBQXFCTixXQUFXUSxHQUFHLENBQUMsU0FBQ0M7bUJBQVFuQyx1QkFBdUJDLGFBQWFDLE9BQU9DLFFBQVFnQztXQUFNQyxJQUFJLENBQUM7SUFDNUksT0FBTztRQUNMTCxrQkFBa0IvQix1QkFBdUJDLGFBQWFDLE9BQU9DLFFBQVFzQjtRQUNyRU8scUJBQXFCaEMsdUJBQXVCQyxhQUFhQyxPQUFPQyxRQUFRdUI7SUFDMUU7SUFFQSxxQkFDRSxvQkFBQ1c7UUFBSUMsV0FBV3ZDO3FCQUNkLG9CQUFDSCxhQUNFTyx3QkFDQyxvQkFBQ29DO1FBQUtELFdBQVcsQUFBQyxHQUFZLE9BQVZ2QyxXQUFVO09BQWtCSSxTQUVqREwsZUFBZUksTUFBTXNDLEtBQUssRUFBRVosc0JBRS9CLG9CQUFDdEM7UUFDQ21ELFFBQVE1QztRQUNSNkMsVUFBVSxPQUFPVix1QkFBdUIsY0FBY1csT0FBT1gsc0JBQXNCRjtRQUNuRmMsVUFBVSxPQUFPYixvQkFBb0IsY0FBY1ksT0FBT1osbUJBQW1CRDtRQUM3RWUsV0FBQUE7UUFDQUMsaUJBQUFBO1FBQ0FDLGNBQWM7O0lBS3BCLE9BQU87QUFDVDtBQUVBLGVBQWV2QixhQUFhIn0=
import React from "react";
import { fieldAffectsData, fieldHasSubFields } from "../../../../../fields/config/types";
import Nested from "./fields/Nested";
import { diffMethods } from "./fields/diffMethods";
import "./index.scss";
var baseClass = "render-field-diffs";
var RenderFieldsToDiff = function(param) {
    var fields = param.fields, fieldComponents = param.fieldComponents, fieldPermissions = param.fieldPermissions, version = param.version, comparison = param.comparison, locales = param.locales;
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, fields.map(function(field, i) {
        var Component = fieldComponents[field.type];
        var isRichText = field.type === "richText";
        var diffMethod = diffMethods[field.type] || "CHARS";
        if (Component) {
            if (fieldAffectsData(field)) {
                var _version, _version1, _comparison, _comparison1, _fieldPermissions_field_name_read, _fieldPermissions_field_name, _fieldPermissions, _fieldPermissions_field_name1, _fieldPermissions1;
                var valueIsObject = field.type === "code" || field.type === "json";
                var versionValue = valueIsObject ? JSON.stringify((_version = version) === null || _version === void 0 ? void 0 : _version[field.name]) : (_version1 = version) === null || _version1 === void 0 ? void 0 : _version1[field.name];
                var comparisonValue = valueIsObject ? JSON.stringify((_comparison = comparison) === null || _comparison === void 0 ? void 0 : _comparison[field.name]) : (_comparison1 = comparison) === null || _comparison1 === void 0 ? void 0 : _comparison1[field.name];
                var hasPermission = (_fieldPermissions = fieldPermissions) === null || _fieldPermissions === void 0 ? void 0 : (_fieldPermissions_field_name = _fieldPermissions[field.name]) === null || _fieldPermissions_field_name === void 0 ? void 0 : (_fieldPermissions_field_name_read = _fieldPermissions_field_name.read) === null || _fieldPermissions_field_name_read === void 0 ? void 0 : _fieldPermissions_field_name_read.permission;
                var subFieldPermissions = (_fieldPermissions1 = fieldPermissions) === null || _fieldPermissions1 === void 0 ? void 0 : (_fieldPermissions_field_name1 = _fieldPermissions1[field.name]) === null || _fieldPermissions_field_name1 === void 0 ? void 0 : _fieldPermissions_field_name1.fields;
                if (hasPermission === false) return null;
                if (field.localized) {
                    return /*#__PURE__*/ React.createElement("div", {
                        className: "".concat(baseClass, "__field"),
                        key: i
                    }, locales.map(function(locale) {
                        var _versionValue, _comparisonValue;
                        var versionLocaleValue = (_versionValue = versionValue) === null || _versionValue === void 0 ? void 0 : _versionValue[locale];
                        var comparisonLocaleValue = (_comparisonValue = comparisonValue) === null || _comparisonValue === void 0 ? void 0 : _comparisonValue[locale];
                        return /*#__PURE__*/ React.createElement("div", {
                            className: "".concat(baseClass, "__locale"),
                            key: locale
                        }, /*#__PURE__*/ React.createElement("div", {
                            className: "".concat(baseClass, "__locale-value")
                        }, /*#__PURE__*/ React.createElement(Component, {
                            diffMethod: diffMethod,
                            locale: locale,
                            locales: locales,
                            field: field,
                            fieldComponents: fieldComponents,
                            version: versionLocaleValue,
                            comparison: comparisonLocaleValue,
                            permissions: subFieldPermissions,
                            isRichText: isRichText
                        })));
                    }));
                }
                return /*#__PURE__*/ React.createElement("div", {
                    className: "".concat(baseClass, "__field"),
                    key: i
                }, /*#__PURE__*/ React.createElement(Component, {
                    diffMethod: diffMethod,
                    locales: locales,
                    field: field,
                    fieldComponents: fieldComponents,
                    version: versionValue,
                    comparison: comparisonValue,
                    permissions: subFieldPermissions,
                    isRichText: isRichText
                }));
            }
            if (field.type === "tabs") {
                var Tabs = fieldComponents.tabs;
                return /*#__PURE__*/ React.createElement(Tabs, {
                    key: i,
                    version: version,
                    comparison: comparison,
                    field: field,
                    locales: locales,
                    fieldComponents: fieldComponents
                });
            }
            // At this point, we are dealing with a `row` or similar
            if (fieldHasSubFields(field)) {
                return /*#__PURE__*/ React.createElement(Nested, {
                    key: i,
                    locales: locales,
                    disableGutter: true,
                    field: field,
                    fieldComponents: fieldComponents,
                    version: version,
                    comparison: comparison,
                    permissions: fieldPermissions
                });
            }
        }
        return null;
    }));
};
export default RenderFieldsToDiff;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVuZGVyRmllbGRzVG9EaWZmL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRGlmZk1ldGhvZCB9IGZyb20gJ3JlYWN0LWRpZmYtdmlld2VyLWNvbnRpbnVlZCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZmllbGRBZmZlY3RzRGF0YSwgZmllbGRIYXNTdWJGaWVsZHMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZHMvY29uZmlnL3R5cGVzJztcbmltcG9ydCBOZXN0ZWQgZnJvbSAnLi9maWVsZHMvTmVzdGVkJztcbmltcG9ydCB7IGRpZmZNZXRob2RzIH0gZnJvbSAnLi9maWVsZHMvZGlmZk1ldGhvZHMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdyZW5kZXItZmllbGQtZGlmZnMnO1xuXG5jb25zdCBSZW5kZXJGaWVsZHNUb0RpZmY6IFJlYWN0LkZDPFByb3BzPiA9ICh7XG4gIGZpZWxkcyxcbiAgZmllbGRDb21wb25lbnRzLFxuICBmaWVsZFBlcm1pc3Npb25zLFxuICB2ZXJzaW9uLFxuICBjb21wYXJpc29uLFxuICBsb2NhbGVzLFxufSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICB7ZmllbGRzLm1hcCgoZmllbGQsIGkpID0+IHtcbiAgICAgIGNvbnN0IENvbXBvbmVudCA9IGZpZWxkQ29tcG9uZW50c1tmaWVsZC50eXBlXTtcblxuICAgICAgY29uc3QgaXNSaWNoVGV4dCA9IGZpZWxkLnR5cGUgPT09ICdyaWNoVGV4dCc7XG4gICAgICBjb25zdCBkaWZmTWV0aG9kOiBEaWZmTWV0aG9kID0gZGlmZk1ldGhvZHNbZmllbGQudHlwZV0gfHwgJ0NIQVJTJztcblxuICAgICAgaWYgKENvbXBvbmVudCkge1xuICAgICAgICBpZiAoZmllbGRBZmZlY3RzRGF0YShmaWVsZCkpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZUlzT2JqZWN0ID0gZmllbGQudHlwZSA9PT0gJ2NvZGUnIHx8IGZpZWxkLnR5cGUgPT09ICdqc29uJztcbiAgICAgICAgICBjb25zdCB2ZXJzaW9uVmFsdWUgPSB2YWx1ZUlzT2JqZWN0ID8gSlNPTi5zdHJpbmdpZnkodmVyc2lvbj8uW2ZpZWxkLm5hbWVdKSA6IHZlcnNpb24/LltmaWVsZC5uYW1lXTtcbiAgICAgICAgICBjb25zdCBjb21wYXJpc29uVmFsdWUgPSB2YWx1ZUlzT2JqZWN0ID8gSlNPTi5zdHJpbmdpZnkoY29tcGFyaXNvbj8uW2ZpZWxkLm5hbWVdKSA6IGNvbXBhcmlzb24/LltmaWVsZC5uYW1lXTtcbiAgICAgICAgICBjb25zdCBoYXNQZXJtaXNzaW9uID0gZmllbGRQZXJtaXNzaW9ucz8uW2ZpZWxkLm5hbWVdPy5yZWFkPy5wZXJtaXNzaW9uO1xuICAgICAgICAgIGNvbnN0IHN1YkZpZWxkUGVybWlzc2lvbnMgPSBmaWVsZFBlcm1pc3Npb25zPy5bZmllbGQubmFtZV0/LmZpZWxkcztcblxuICAgICAgICAgIGlmIChoYXNQZXJtaXNzaW9uID09PSBmYWxzZSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICBpZiAoZmllbGQubG9jYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19maWVsZGB9XG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xvY2FsZXMubWFwKChsb2NhbGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZlcnNpb25Mb2NhbGVWYWx1ZSA9IHZlcnNpb25WYWx1ZT8uW2xvY2FsZV07XG4gICAgICAgICAgICAgICAgICBjb25zdCBjb21wYXJpc29uTG9jYWxlVmFsdWUgPSBjb21wYXJpc29uVmFsdWU/Lltsb2NhbGVdO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbG9jYWxlYH1cbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2xvY2FsZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sb2NhbGUtdmFsdWVgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlmZk1ldGhvZD17ZGlmZk1ldGhvZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZXM9e2xvY2FsZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPXtmaWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRDb21wb25lbnRzPXtmaWVsZENvbXBvbmVudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb249e3ZlcnNpb25Mb2NhbGVWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyaXNvbj17Y29tcGFyaXNvbkxvY2FsZVZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXNzaW9ucz17c3ViRmllbGRQZXJtaXNzaW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNSaWNoVGV4dD17aXNSaWNoVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZmllbGRgfVxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgICAgICBkaWZmTWV0aG9kPXtkaWZmTWV0aG9kfVxuICAgICAgICAgICAgICAgIGxvY2FsZXM9e2xvY2FsZXN9XG4gICAgICAgICAgICAgICAgZmllbGQ9e2ZpZWxkfVxuICAgICAgICAgICAgICAgIGZpZWxkQ29tcG9uZW50cz17ZmllbGRDb21wb25lbnRzfVxuICAgICAgICAgICAgICAgIHZlcnNpb249e3ZlcnNpb25WYWx1ZX1cbiAgICAgICAgICAgICAgICBjb21wYXJpc29uPXtjb21wYXJpc29uVmFsdWV9XG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbnM9e3N1YkZpZWxkUGVybWlzc2lvbnN9XG4gICAgICAgICAgICAgICAgaXNSaWNoVGV4dD17aXNSaWNoVGV4dH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICAgICAgY29uc3QgVGFicyA9IGZpZWxkQ29tcG9uZW50cy50YWJzO1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUYWJzXG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgdmVyc2lvbj17dmVyc2lvbn1cbiAgICAgICAgICAgICAgY29tcGFyaXNvbj17Y29tcGFyaXNvbn1cbiAgICAgICAgICAgICAgZmllbGQ9e2ZpZWxkfVxuICAgICAgICAgICAgICBsb2NhbGVzPXtsb2NhbGVzfVxuICAgICAgICAgICAgICBmaWVsZENvbXBvbmVudHM9e2ZpZWxkQ29tcG9uZW50c31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF0IHRoaXMgcG9pbnQsIHdlIGFyZSBkZWFsaW5nIHdpdGggYSBgcm93YCBvciBzaW1pbGFyXG4gICAgICAgIGlmIChmaWVsZEhhc1N1YkZpZWxkcyhmaWVsZCkpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE5lc3RlZFxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIGxvY2FsZXM9e2xvY2FsZXN9XG4gICAgICAgICAgICAgIGRpc2FibGVHdXR0ZXJcbiAgICAgICAgICAgICAgZmllbGQ9e2ZpZWxkfVxuICAgICAgICAgICAgICBmaWVsZENvbXBvbmVudHM9e2ZpZWxkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgdmVyc2lvbj17dmVyc2lvbn1cbiAgICAgICAgICAgICAgY29tcGFyaXNvbj17Y29tcGFyaXNvbn1cbiAgICAgICAgICAgICAgcGVybWlzc2lvbnM9e2ZpZWxkUGVybWlzc2lvbnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSl9XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyRmllbGRzVG9EaWZmO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZmllbGRBZmZlY3RzRGF0YSIsImZpZWxkSGFzU3ViRmllbGRzIiwiTmVzdGVkIiwiZGlmZk1ldGhvZHMiLCJiYXNlQ2xhc3MiLCJSZW5kZXJGaWVsZHNUb0RpZmYiLCJmaWVsZHMiLCJmaWVsZENvbXBvbmVudHMiLCJmaWVsZFBlcm1pc3Npb25zIiwidmVyc2lvbiIsImNvbXBhcmlzb24iLCJsb2NhbGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiZmllbGQiLCJpIiwiQ29tcG9uZW50IiwidHlwZSIsImlzUmljaFRleHQiLCJkaWZmTWV0aG9kIiwidmFsdWVJc09iamVjdCIsInZlcnNpb25WYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJuYW1lIiwiY29tcGFyaXNvblZhbHVlIiwiaGFzUGVybWlzc2lvbiIsInJlYWQiLCJwZXJtaXNzaW9uIiwic3ViRmllbGRQZXJtaXNzaW9ucyIsImxvY2FsaXplZCIsImtleSIsImxvY2FsZSIsInZlcnNpb25Mb2NhbGVWYWx1ZSIsImNvbXBhcmlzb25Mb2NhbGVWYWx1ZSIsInBlcm1pc3Npb25zIiwiVGFicyIsInRhYnMiLCJkaXNhYmxlR3V0dGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFHMUIsU0FBU0MsZ0JBQWdCLEVBQUVDLGlCQUFpQixRQUFRLHFDQUFxQztBQUN6RixPQUFPQyxZQUFZLGtCQUFrQjtBQUNyQyxTQUFTQyxXQUFXLFFBQVEsdUJBQXVCO0FBRW5ELE9BQU8sZUFBZTtBQUV0QixJQUFNQyxZQUFZO0FBRWxCLElBQU1DLHFCQUFzQztRQUMxQ0MsZUFBQUEsUUFDQUMsd0JBQUFBLGlCQUNBQyx5QkFBQUEsa0JBQ0FDLGdCQUFBQSxTQUNBQyxtQkFBQUEsWUFDQUMsZ0JBQUFBO3lCQUVBLG9CQUFDQztRQUFJQyxXQUFXVDtPQUNiRSxPQUFPUSxHQUFHLENBQUMsU0FBQ0MsT0FBT0M7UUFDbEIsSUFBTUMsWUFBWVYsZUFBZSxDQUFDUSxNQUFNRyxJQUFJLENBQUM7UUFFN0MsSUFBTUMsYUFBYUosTUFBTUcsSUFBSSxLQUFLO1FBQ2xDLElBQU1FLGFBQXlCakIsV0FBVyxDQUFDWSxNQUFNRyxJQUFJLENBQUMsSUFBSTtRQUUxRCxJQUFJRCxXQUFXO1lBQ2IsSUFBSWpCLGlCQUFpQmUsUUFBUTtvQkFFeUJOLFVBQXlCQSxXQUN0QkMsYUFBNEJBLGNBQzdERixtQ0FBQUEsOEJBQUFBLG1CQUNNQSwrQkFBQUE7Z0JBSjVCLElBQU1hLGdCQUFnQk4sTUFBTUcsSUFBSSxLQUFLLFVBQVVILE1BQU1HLElBQUksS0FBSztnQkFDOUQsSUFBTUksZUFBZUQsZ0JBQWdCRSxLQUFLQyxTQUFTLEVBQUNmLFdBQUFBLHFCQUFBQSwrQkFBQUEsUUFBUyxDQUFDTSxNQUFNVSxJQUFJLENBQUMsS0FBSWhCLFlBQUFBLHFCQUFBQSxnQ0FBQUEsU0FBUyxDQUFDTSxNQUFNVSxJQUFJLENBQUM7Z0JBQ2xHLElBQU1DLGtCQUFrQkwsZ0JBQWdCRSxLQUFLQyxTQUFTLEVBQUNkLGNBQUFBLHdCQUFBQSxrQ0FBQUEsV0FBWSxDQUFDSyxNQUFNVSxJQUFJLENBQUMsS0FBSWYsZUFBQUEsd0JBQUFBLG1DQUFBQSxZQUFZLENBQUNLLE1BQU1VLElBQUksQ0FBQztnQkFDM0csSUFBTUUsaUJBQWdCbkIsb0JBQUFBLDhCQUFBQSx5Q0FBQUEsK0JBQUFBLGlCQUFrQixDQUFDTyxNQUFNVSxJQUFJLENBQUMsY0FBOUJqQixvREFBQUEsb0NBQUFBLDZCQUFnQ29CLElBQUksY0FBcENwQix3REFBQUEsa0NBQXNDcUIsVUFBVTtnQkFDdEUsSUFBTUMsdUJBQXNCdEIscUJBQUFBLDhCQUFBQSwwQ0FBQUEsZ0NBQUFBLGtCQUFrQixDQUFDTyxNQUFNVSxJQUFJLENBQUMsY0FBOUJqQixvREFBQUEsOEJBQWdDRixNQUFNO2dCQUVsRSxJQUFJcUIsa0JBQWtCLE9BQU8sT0FBTztnQkFFcEMsSUFBSVosTUFBTWdCLFNBQVMsRUFBRTtvQkFDbkIscUJBQ0Usb0JBQUNuQjt3QkFDQ0MsV0FBVyxBQUFDLEdBQVksT0FBVlQsV0FBVTt3QkFDeEI0QixLQUFLaEI7dUJBRUpMLFFBQVFHLEdBQUcsQ0FBQyxTQUFDbUI7NEJBQ2VYLGVBQ0dJO3dCQUQ5QixJQUFNUSxzQkFBcUJaLGdCQUFBQSwwQkFBQUEsb0NBQUFBLGFBQWMsQ0FBQ1csT0FBTzt3QkFDakQsSUFBTUUseUJBQXdCVCxtQkFBQUEsNkJBQUFBLHVDQUFBQSxnQkFBaUIsQ0FBQ08sT0FBTzt3QkFDdkQscUJBQ0Usb0JBQUNyQjs0QkFDQ0MsV0FBVyxBQUFDLEdBQVksT0FBVlQsV0FBVTs0QkFDeEI0QixLQUFLQzt5Q0FFTCxvQkFBQ3JCOzRCQUFJQyxXQUFXLEFBQUMsR0FBWSxPQUFWVCxXQUFVO3lDQUMzQixvQkFBQ2E7NEJBQ0NHLFlBQVlBOzRCQUNaYSxRQUFRQTs0QkFDUnRCLFNBQVNBOzRCQUNUSSxPQUFPQTs0QkFDUFIsaUJBQWlCQTs0QkFDakJFLFNBQVN5Qjs0QkFDVHhCLFlBQVl5Qjs0QkFDWkMsYUFBYU47NEJBQ2JYLFlBQVlBOztvQkFLdEI7Z0JBR047Z0JBRUEscUJBQ0Usb0JBQUNQO29CQUNDQyxXQUFXLEFBQUMsR0FBWSxPQUFWVCxXQUFVO29CQUN4QjRCLEtBQUtoQjtpQ0FFTCxvQkFBQ0M7b0JBQ0NHLFlBQVlBO29CQUNaVCxTQUFTQTtvQkFDVEksT0FBT0E7b0JBQ1BSLGlCQUFpQkE7b0JBQ2pCRSxTQUFTYTtvQkFDVFosWUFBWWdCO29CQUNaVSxhQUFhTjtvQkFDYlgsWUFBWUE7O1lBSXBCO1lBRUEsSUFBSUosTUFBTUcsSUFBSSxLQUFLLFFBQVE7Z0JBQ3pCLElBQU1tQixPQUFPOUIsZ0JBQWdCK0IsSUFBSTtnQkFFakMscUJBQ0Usb0JBQUNEO29CQUNDTCxLQUFLaEI7b0JBQ0xQLFNBQVNBO29CQUNUQyxZQUFZQTtvQkFDWkssT0FBT0E7b0JBQ1BKLFNBQVNBO29CQUNUSixpQkFBaUJBOztZQUd2QjtZQUVBLHdEQUF3RDtZQUN4RCxJQUFJTixrQkFBa0JjLFFBQVE7Z0JBQzVCLHFCQUNFLG9CQUFDYjtvQkFDQzhCLEtBQUtoQjtvQkFDTEwsU0FBU0E7b0JBQ1Q0QixlQUFBQTtvQkFDQXhCLE9BQU9BO29CQUNQUixpQkFBaUJBO29CQUNqQkUsU0FBU0E7b0JBQ1RDLFlBQVlBO29CQUNaMEIsYUFBYTVCOztZQUduQjtRQUNGO1FBRUEsT0FBTztJQUNUOztBQUlKLGVBQWVILG1CQUFtQiJ9
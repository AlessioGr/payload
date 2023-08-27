function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
import React from "react";
import { useTranslation } from "react-i18next";
import RenderFieldsToDiff from "../..";
import Label from "../../Label";
import { fieldAffectsData } from "../../../../../../../fields/config/types";
import getUniqueListBy from "../../../../../../../utilities/getUniqueListBy";
import { getTranslation } from "../../../../../../../utilities/getTranslation";
import "./index.scss";
var baseClass = "iterable-diff";
var Iterable = function(param) {
    var version = param.version, comparison = param.comparison, permissions = param.permissions, field = param.field, locale = param.locale, locales = param.locales, fieldComponents = param.fieldComponents;
    var _field_labels, _field_labels1;
    var versionRowCount = Array.isArray(version) ? version.length : 0;
    var comparisonRowCount = Array.isArray(comparison) ? comparison.length : 0;
    var maxRows = Math.max(versionRowCount, comparisonRowCount);
    var _useTranslation = useTranslation("version"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, field.label && /*#__PURE__*/ React.createElement(Label, null, locale && /*#__PURE__*/ React.createElement("span", {
        className: "".concat(baseClass, "__locale-label")
    }, locale), getTranslation(field.label, i18n)), maxRows > 0 && /*#__PURE__*/ React.createElement(React.Fragment, null, Array.from(Array(maxRows).keys()).map(function(row, i) {
        var _version, _comparison;
        var versionRow = ((_version = version) === null || _version === void 0 ? void 0 : _version[i]) || {};
        var comparisonRow = ((_comparison = comparison) === null || _comparison === void 0 ? void 0 : _comparison[i]) || {};
        var subFields = [];
        if (field.type === "array") subFields = field.fields;
        if (field.type === "blocks") {
            var _versionRow, _comparisonRow;
            subFields = [
                {
                    name: "blockType",
                    label: t("fields:blockType"),
                    type: "text"
                }
            ];
            if (((_versionRow = versionRow) === null || _versionRow === void 0 ? void 0 : _versionRow.blockType) === ((_comparisonRow = comparisonRow) === null || _comparisonRow === void 0 ? void 0 : _comparisonRow.blockType)) {
                var matchedBlock = field.blocks.find(function(block) {
                    var _versionRow;
                    return block.slug === ((_versionRow = versionRow) === null || _versionRow === void 0 ? void 0 : _versionRow.blockType);
                }) || {
                    fields: []
                };
                subFields = _to_consumable_array(subFields).concat(_to_consumable_array(matchedBlock.fields));
            } else {
                var matchedVersionBlock = field.blocks.find(function(block) {
                    var _versionRow;
                    return block.slug === ((_versionRow = versionRow) === null || _versionRow === void 0 ? void 0 : _versionRow.blockType);
                }) || {
                    fields: []
                };
                var matchedComparisonBlock = field.blocks.find(function(block) {
                    var _comparisonRow;
                    return block.slug === ((_comparisonRow = comparisonRow) === null || _comparisonRow === void 0 ? void 0 : _comparisonRow.blockType);
                }) || {
                    fields: []
                };
                subFields = getUniqueListBy(_to_consumable_array(subFields).concat(_to_consumable_array(matchedVersionBlock.fields), _to_consumable_array(matchedComparisonBlock.fields)), "name");
            }
        }
        return /*#__PURE__*/ React.createElement("div", {
            className: "".concat(baseClass, "__wrap"),
            key: i
        }, /*#__PURE__*/ React.createElement(RenderFieldsToDiff, {
            locales: locales,
            version: versionRow,
            comparison: comparisonRow,
            fieldPermissions: permissions,
            fields: subFields.filter(function(subField) {
                return !(fieldAffectsData(subField) && subField.name === "id");
            }),
            fieldComponents: fieldComponents
        }));
    })), maxRows === 0 && /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__no-rows")
    }, t("noRowsFound", {
        label: ((_field_labels = field.labels) === null || _field_labels === void 0 ? void 0 : _field_labels.plural) ? getTranslation((_field_labels1 = field.labels) === null || _field_labels1 === void 0 ? void 0 : _field_labels1.plural, i18n) : t("general:rows")
    })));
};
export default Iterable;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVuZGVyRmllbGRzVG9EaWZmL2ZpZWxkcy9JdGVyYWJsZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgUmVuZGVyRmllbGRzVG9EaWZmIGZyb20gJy4uLy4uJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IExhYmVsIGZyb20gJy4uLy4uL0xhYmVsJztcbmltcG9ydCB7IEFycmF5RmllbGQsIEJsb2NrRmllbGQsIEZpZWxkLCBmaWVsZEFmZmVjdHNEYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgZ2V0VW5pcXVlTGlzdEJ5IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRVbmlxdWVMaXN0QnknO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdpdGVyYWJsZS1kaWZmJztcblxuY29uc3QgSXRlcmFibGU6IFJlYWN0LkZDPFByb3BzICYgeyBmaWVsZDogQXJyYXlGaWVsZCB8IEJsb2NrRmllbGQgfT4gPSAoe1xuICB2ZXJzaW9uLFxuICBjb21wYXJpc29uLFxuICBwZXJtaXNzaW9ucyxcbiAgZmllbGQsXG4gIGxvY2FsZSxcbiAgbG9jYWxlcyxcbiAgZmllbGRDb21wb25lbnRzLFxufSkgPT4ge1xuICBjb25zdCB2ZXJzaW9uUm93Q291bnQgPSBBcnJheS5pc0FycmF5KHZlcnNpb24pID8gdmVyc2lvbi5sZW5ndGggOiAwO1xuICBjb25zdCBjb21wYXJpc29uUm93Q291bnQgPSBBcnJheS5pc0FycmF5KGNvbXBhcmlzb24pID8gY29tcGFyaXNvbi5sZW5ndGggOiAwO1xuICBjb25zdCBtYXhSb3dzID0gTWF0aC5tYXgodmVyc2lvblJvd0NvdW50LCBjb21wYXJpc29uUm93Q291bnQpO1xuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCd2ZXJzaW9uJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YmFzZUNsYXNzfT5cbiAgICAgIHtmaWVsZC5sYWJlbCAmJiAoXG4gICAgICAgIDxMYWJlbD5cbiAgICAgICAgICB7bG9jYWxlICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xvY2FsZS1sYWJlbGB9Pntsb2NhbGV9PC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgICAge2dldFRyYW5zbGF0aW9uKGZpZWxkLmxhYmVsLCBpMThuKX1cbiAgICAgICAgPC9MYWJlbD5cbiAgICAgICl9XG4gICAgICB7bWF4Um93cyA+IDAgJiYgKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAge0FycmF5LmZyb20oQXJyYXkobWF4Um93cykua2V5cygpKS5tYXAoKHJvdywgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVyc2lvblJvdyA9IHZlcnNpb24/LltpXSB8fCB7fTtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmlzb25Sb3cgPSBjb21wYXJpc29uPy5baV0gfHwge307XG5cbiAgICAgICAgICAgIGxldCBzdWJGaWVsZHM6IEZpZWxkW10gPSBbXTtcblxuICAgICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdhcnJheScpIHN1YkZpZWxkcyA9IGZpZWxkLmZpZWxkcztcblxuICAgICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdibG9ja3MnKSB7XG4gICAgICAgICAgICAgIHN1YkZpZWxkcyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiAnYmxvY2tUeXBlJyxcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiB0KCdmaWVsZHM6YmxvY2tUeXBlJyksXG4gICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICBpZiAodmVyc2lvblJvdz8uYmxvY2tUeXBlID09PSBjb21wYXJpc29uUm93Py5ibG9ja1R5cGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVkQmxvY2sgPSBmaWVsZC5ibG9ja3MuZmluZCgoYmxvY2spID0+IGJsb2NrLnNsdWcgPT09IHZlcnNpb25Sb3c/LmJsb2NrVHlwZSkgfHwgeyBmaWVsZHM6IFtdIH07XG4gICAgICAgICAgICAgICAgc3ViRmllbGRzID0gW1xuICAgICAgICAgICAgICAgICAgLi4uc3ViRmllbGRzLFxuICAgICAgICAgICAgICAgICAgLi4ubWF0Y2hlZEJsb2NrLmZpZWxkcyxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZWRWZXJzaW9uQmxvY2sgPSBmaWVsZC5ibG9ja3MuZmluZCgoYmxvY2spID0+IGJsb2NrLnNsdWcgPT09IHZlcnNpb25Sb3c/LmJsb2NrVHlwZSkgfHwgeyBmaWVsZHM6IFtdIH07XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlZENvbXBhcmlzb25CbG9jayA9IGZpZWxkLmJsb2Nrcy5maW5kKChibG9jaykgPT4gYmxvY2suc2x1ZyA9PT0gY29tcGFyaXNvblJvdz8uYmxvY2tUeXBlKSB8fCB7IGZpZWxkczogW10gfTtcblxuICAgICAgICAgICAgICAgIHN1YkZpZWxkcyA9IGdldFVuaXF1ZUxpc3RCeTxGaWVsZD4oW1xuICAgICAgICAgICAgICAgICAgLi4uc3ViRmllbGRzLFxuICAgICAgICAgICAgICAgICAgLi4ubWF0Y2hlZFZlcnNpb25CbG9jay5maWVsZHMsXG4gICAgICAgICAgICAgICAgICAuLi5tYXRjaGVkQ29tcGFyaXNvbkJsb2NrLmZpZWxkcyxcbiAgICAgICAgICAgICAgICBdLCAnbmFtZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3dyYXBgfVxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxSZW5kZXJGaWVsZHNUb0RpZmZcbiAgICAgICAgICAgICAgICAgIGxvY2FsZXM9e2xvY2FsZXN9XG4gICAgICAgICAgICAgICAgICB2ZXJzaW9uPXt2ZXJzaW9uUm93fVxuICAgICAgICAgICAgICAgICAgY29tcGFyaXNvbj17Y29tcGFyaXNvblJvd31cbiAgICAgICAgICAgICAgICAgIGZpZWxkUGVybWlzc2lvbnM9e3Blcm1pc3Npb25zfVxuICAgICAgICAgICAgICAgICAgZmllbGRzPXtzdWJGaWVsZHMuZmlsdGVyKChzdWJGaWVsZCkgPT4gIShmaWVsZEFmZmVjdHNEYXRhKHN1YkZpZWxkKSAmJiBzdWJGaWVsZC5uYW1lID09PSAnaWQnKSl9XG4gICAgICAgICAgICAgICAgICBmaWVsZENvbXBvbmVudHM9e2ZpZWxkQ29tcG9uZW50c31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICApfVxuICAgICAge21heFJvd3MgPT09IDAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbm8tcm93c2B9PlxuICAgICAgICAgIHt0KCdub1Jvd3NGb3VuZCcsIHsgbGFiZWw6IGZpZWxkLmxhYmVscz8ucGx1cmFsID8gZ2V0VHJhbnNsYXRpb24oZmllbGQubGFiZWxzPy5wbHVyYWwsIGkxOG4pIDogdCgnZ2VuZXJhbDpyb3dzJykgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZXJhYmxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlVHJhbnNsYXRpb24iLCJSZW5kZXJGaWVsZHNUb0RpZmYiLCJMYWJlbCIsImZpZWxkQWZmZWN0c0RhdGEiLCJnZXRVbmlxdWVMaXN0QnkiLCJnZXRUcmFuc2xhdGlvbiIsImJhc2VDbGFzcyIsIkl0ZXJhYmxlIiwidmVyc2lvbiIsImNvbXBhcmlzb24iLCJwZXJtaXNzaW9ucyIsImZpZWxkIiwibG9jYWxlIiwibG9jYWxlcyIsImZpZWxkQ29tcG9uZW50cyIsInZlcnNpb25Sb3dDb3VudCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImNvbXBhcmlzb25Sb3dDb3VudCIsIm1heFJvd3MiLCJNYXRoIiwibWF4IiwidCIsImkxOG4iLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsInNwYW4iLCJGcmFnbWVudCIsImZyb20iLCJrZXlzIiwibWFwIiwicm93IiwiaSIsInZlcnNpb25Sb3ciLCJjb21wYXJpc29uUm93Iiwic3ViRmllbGRzIiwidHlwZSIsImZpZWxkcyIsIm5hbWUiLCJibG9ja1R5cGUiLCJtYXRjaGVkQmxvY2siLCJibG9ja3MiLCJmaW5kIiwiYmxvY2siLCJzbHVnIiwibWF0Y2hlZFZlcnNpb25CbG9jayIsIm1hdGNoZWRDb21wYXJpc29uQmxvY2siLCJrZXkiLCJmaWVsZFBlcm1pc3Npb25zIiwiZmlsdGVyIiwic3ViRmllbGQiLCJsYWJlbHMiLCJwbHVyYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxPQUFPQyx3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
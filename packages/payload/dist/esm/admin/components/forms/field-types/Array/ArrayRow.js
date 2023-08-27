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
import { useTranslation } from "react-i18next";
import { Collapsible } from "../../../elements/Collapsible";
import RenderFields from "../../RenderFields";
import { ArrayAction } from "../../../elements/ArrayAction";
import HiddenInput from "../HiddenInput";
import { RowLabel } from "../../RowLabel";
import { getTranslation } from "../../../../../utilities/getTranslation";
import { createNestedFieldPath } from "../../Form/createNestedFieldPath";
import { useFormSubmitted } from "../../Form/context";
import { ErrorPill } from "../../../elements/ErrorPill";
import "./index.scss";
var baseClass = "array-field";
export var ArrayRow = function(param) {
    var parentPath = param.path, addRow = param.addRow, removeRow = param.removeRow, moveRow = param.moveRow, duplicateRow = param.duplicateRow, setCollapse = param.setCollapse, transform = param.transform, listeners = param.listeners, attributes = param.attributes, setNodeRef = param.setNodeRef, row = param.row, rowIndex = param.rowIndex, rowCount = param.rowCount, indexPath = param.indexPath, readOnly = param.readOnly, labels = param.labels, fieldTypes = param.fieldTypes, permissions = param.permissions, CustomRowLabel = param.CustomRowLabel, fields = param.fields, hasMaxRows = param.hasMaxRows;
    var _row_childErrorPaths, _permissions;
    var path = "".concat(parentPath, ".").concat(rowIndex);
    var i18n = useTranslation().i18n;
    var hasSubmitted = useFormSubmitted();
    var fallbackLabel = "".concat(getTranslation(labels.singular, i18n), " ").concat(String(rowIndex + 1).padStart(2, "0"));
    var childErrorPathsCount = (_row_childErrorPaths = row.childErrorPaths) === null || _row_childErrorPaths === void 0 ? void 0 : _row_childErrorPaths.size;
    var fieldHasErrors = hasSubmitted && childErrorPathsCount > 0;
    var classNames = [
        "".concat(baseClass, "__row"),
        fieldHasErrors ? "".concat(baseClass, "__row--has-errors") : "".concat(baseClass, "__row--no-errors")
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ React.createElement("div", {
        key: "".concat(parentPath, "-row-").concat(row.id),
        id: "".concat(parentPath.split(".").join("-"), "-row-").concat(rowIndex),
        ref: setNodeRef,
        style: {
            transform: transform
        }
    }, /*#__PURE__*/ React.createElement(Collapsible, {
        collapsed: row.collapsed,
        onToggle: function(collapsed) {
            return setCollapse(row.id, collapsed);
        },
        className: classNames,
        collapsibleStyle: fieldHasErrors ? "error" : "default",
        dragHandleProps: {
            id: row.id,
            attributes: attributes,
            listeners: listeners
        },
        header: /*#__PURE__*/ React.createElement("div", {
            className: "".concat(baseClass, "__row-header")
        }, /*#__PURE__*/ React.createElement(RowLabel, {
            path: path,
            label: CustomRowLabel || fallbackLabel,
            rowNumber: rowIndex + 1
        }), fieldHasErrors && /*#__PURE__*/ React.createElement(ErrorPill, {
            count: childErrorPathsCount,
            withMessage: true
        })),
        actions: !readOnly ? /*#__PURE__*/ React.createElement(ArrayAction, {
            addRow: addRow,
            removeRow: removeRow,
            moveRow: moveRow,
            duplicateRow: duplicateRow,
            rowCount: rowCount,
            index: rowIndex,
            hasMaxRows: hasMaxRows
        }) : undefined
    }, /*#__PURE__*/ React.createElement(HiddenInput, {
        name: "".concat(path, ".id"),
        value: row.id
    }), /*#__PURE__*/ React.createElement(RenderFields, {
        className: "".concat(baseClass, "__fields"),
        readOnly: readOnly,
        fieldTypes: fieldTypes,
        permissions: (_permissions = permissions) === null || _permissions === void 0 ? void 0 : _permissions.fields,
        indexPath: indexPath,
        fieldSchema: fields.map(function(field) {
            return _object_spread_props(_object_spread({}, field), {
                path: createNestedFieldPath(path, field)
            });
        })
    })));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0FycmF5L0FycmF5Um93LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IENvbGxhcHNpYmxlIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvQ29sbGFwc2libGUnO1xuaW1wb3J0IFJlbmRlckZpZWxkcyBmcm9tICcuLi8uLi9SZW5kZXJGaWVsZHMnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IEFycmF5QWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvQXJyYXlBY3Rpb24nO1xuaW1wb3J0IEhpZGRlbklucHV0IGZyb20gJy4uL0hpZGRlbklucHV0JztcbmltcG9ydCB7IFJvd0xhYmVsIH0gZnJvbSAnLi4vLi4vUm93TGFiZWwnO1xuaW1wb3J0IHsgZ2V0VHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi91dGlsaXRpZXMvZ2V0VHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgY3JlYXRlTmVzdGVkRmllbGRQYXRoIH0gZnJvbSAnLi4vLi4vRm9ybS9jcmVhdGVOZXN0ZWRGaWVsZFBhdGgnO1xuaW1wb3J0IHR5cGUgeyBVc2VEcmFnZ2FibGVTb3J0YWJsZVJldHVybiB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0RyYWdnYWJsZVNvcnRhYmxlL3VzZURyYWdnYWJsZVNvcnRhYmxlL3R5cGVzJztcbmltcG9ydCB0eXBlIHsgUm93IH0gZnJvbSAnLi4vLi4vRm9ybS90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IFJvd0xhYmVsIGFzIFJvd0xhYmVsVHlwZSB9IGZyb20gJy4uLy4uL1Jvd0xhYmVsL3R5cGVzJztcbmltcG9ydCB7IHVzZUZvcm1TdWJtaXR0ZWQgfSBmcm9tICcuLi8uLi9Gb3JtL2NvbnRleHQnO1xuaW1wb3J0IHsgRXJyb3JQaWxsIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvRXJyb3JQaWxsJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnYXJyYXktZmllbGQnO1xuXG50eXBlIEFycmF5Um93UHJvcHMgPSBVc2VEcmFnZ2FibGVTb3J0YWJsZVJldHVybiAmIFBpY2s8UHJvcHMsICdmaWVsZHMnIHwgJ3BhdGgnIHwgJ2luZGV4UGF0aCcgfCAnZmllbGRUeXBlcycgfCAncGVybWlzc2lvbnMnIHwgJ2xhYmVscyc+ICYge1xuICBhZGRSb3c6IChyb3dJbmRleDogbnVtYmVyKSA9PiB2b2lkXG4gIGR1cGxpY2F0ZVJvdzogKHJvd0luZGV4OiBudW1iZXIpID0+IHZvaWRcbiAgcmVtb3ZlUm93OiAocm93SW5kZXg6IG51bWJlcikgPT4gdm9pZFxuICBtb3ZlUm93OiAoZnJvbUluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlcikgPT4gdm9pZFxuICBzZXRDb2xsYXBzZTogKHJvd0lEOiBzdHJpbmcsIGNvbGxhcHNlZDogYm9vbGVhbikgPT4gdm9pZFxuICByb3dDb3VudDogbnVtYmVyXG4gIHJvd0luZGV4OiBudW1iZXJcbiAgcm93OiBSb3dcbiAgQ3VzdG9tUm93TGFiZWw/OiBSb3dMYWJlbFR5cGVcbiAgcmVhZE9ubHk/OiBib29sZWFuXG4gIGhhc01heFJvd3M/OiBib29sZWFuXG59XG5leHBvcnQgY29uc3QgQXJyYXlSb3c6IFJlYWN0LkZDPEFycmF5Um93UHJvcHM+ID0gKHtcbiAgcGF0aDogcGFyZW50UGF0aCxcbiAgYWRkUm93LFxuICByZW1vdmVSb3csXG4gIG1vdmVSb3csXG4gIGR1cGxpY2F0ZVJvdyxcbiAgc2V0Q29sbGFwc2UsXG4gIHRyYW5zZm9ybSxcbiAgbGlzdGVuZXJzLFxuICBhdHRyaWJ1dGVzLFxuICBzZXROb2RlUmVmLFxuICByb3csXG4gIHJvd0luZGV4LFxuICByb3dDb3VudCxcbiAgaW5kZXhQYXRoLFxuICByZWFkT25seSxcbiAgbGFiZWxzLFxuICBmaWVsZFR5cGVzLFxuICBwZXJtaXNzaW9ucyxcbiAgQ3VzdG9tUm93TGFiZWwsXG4gIGZpZWxkcyxcbiAgaGFzTWF4Um93cyxcbn0pID0+IHtcbiAgY29uc3QgcGF0aCA9IGAke3BhcmVudFBhdGh9LiR7cm93SW5kZXh9YDtcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBoYXNTdWJtaXR0ZWQgPSB1c2VGb3JtU3VibWl0dGVkKCk7XG5cbiAgY29uc3QgZmFsbGJhY2tMYWJlbCA9IGAke2dldFRyYW5zbGF0aW9uKGxhYmVscy5zaW5ndWxhciwgaTE4bil9ICR7U3RyaW5nKHJvd0luZGV4ICsgMSkucGFkU3RhcnQoMiwgJzAnKX1gO1xuXG4gIGNvbnN0IGNoaWxkRXJyb3JQYXRoc0NvdW50ID0gcm93LmNoaWxkRXJyb3JQYXRocz8uc2l6ZTtcbiAgY29uc3QgZmllbGRIYXNFcnJvcnMgPSBoYXNTdWJtaXR0ZWQgJiYgY2hpbGRFcnJvclBhdGhzQ291bnQgPiAwO1xuXG4gIGNvbnN0IGNsYXNzTmFtZXMgPSBbXG4gICAgYCR7YmFzZUNsYXNzfV9fcm93YCxcbiAgICBmaWVsZEhhc0Vycm9ycyA/IGAke2Jhc2VDbGFzc31fX3Jvdy0taGFzLWVycm9yc2AgOiBgJHtiYXNlQ2xhc3N9X19yb3ctLW5vLWVycm9yc2AsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGtleT17YCR7cGFyZW50UGF0aH0tcm93LSR7cm93LmlkfWB9XG4gICAgICBpZD17YCR7cGFyZW50UGF0aC5zcGxpdCgnLicpLmpvaW4oJy0nKX0tcm93LSR7cm93SW5kZXh9YH1cbiAgICAgIHJlZj17c2V0Tm9kZVJlZn1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHRyYW5zZm9ybSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENvbGxhcHNpYmxlXG4gICAgICAgIGNvbGxhcHNlZD17cm93LmNvbGxhcHNlZH1cbiAgICAgICAgb25Ub2dnbGU9eyhjb2xsYXBzZWQpID0+IHNldENvbGxhcHNlKHJvdy5pZCwgY29sbGFwc2VkKX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzfVxuICAgICAgICBjb2xsYXBzaWJsZVN0eWxlPXtmaWVsZEhhc0Vycm9ycyA/ICdlcnJvcicgOiAnZGVmYXVsdCd9XG4gICAgICAgIGRyYWdIYW5kbGVQcm9wcz17e1xuICAgICAgICAgIGlkOiByb3cuaWQsXG4gICAgICAgICAgYXR0cmlidXRlcyxcbiAgICAgICAgICBsaXN0ZW5lcnMsXG4gICAgICAgIH19XG4gICAgICAgIGhlYWRlcj17KFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19yb3ctaGVhZGVyYH0+XG4gICAgICAgICAgICA8Um93TGFiZWxcbiAgICAgICAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgICAgICAgbGFiZWw9e0N1c3RvbVJvd0xhYmVsIHx8IGZhbGxiYWNrTGFiZWx9XG4gICAgICAgICAgICAgIHJvd051bWJlcj17cm93SW5kZXggKyAxfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtmaWVsZEhhc0Vycm9ycyAmJiAoXG4gICAgICAgICAgICAgIDxFcnJvclBpbGxcbiAgICAgICAgICAgICAgICBjb3VudD17Y2hpbGRFcnJvclBhdGhzQ291bnR9XG4gICAgICAgICAgICAgICAgd2l0aE1lc3NhZ2VcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIGFjdGlvbnM9eyFyZWFkT25seSA/IChcbiAgICAgICAgICA8QXJyYXlBY3Rpb25cbiAgICAgICAgICAgIGFkZFJvdz17YWRkUm93fVxuICAgICAgICAgICAgcmVtb3ZlUm93PXtyZW1vdmVSb3d9XG4gICAgICAgICAgICBtb3ZlUm93PXttb3ZlUm93fVxuICAgICAgICAgICAgZHVwbGljYXRlUm93PXtkdXBsaWNhdGVSb3d9XG4gICAgICAgICAgICByb3dDb3VudD17cm93Q291bnR9XG4gICAgICAgICAgICBpbmRleD17cm93SW5kZXh9XG4gICAgICAgICAgICBoYXNNYXhSb3dzPXtoYXNNYXhSb3dzfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiB1bmRlZmluZWR9XG4gICAgICA+XG4gICAgICAgIDxIaWRkZW5JbnB1dFxuICAgICAgICAgIG5hbWU9e2Ake3BhdGh9LmlkYH1cbiAgICAgICAgICB2YWx1ZT17cm93LmlkfVxuICAgICAgICAvPlxuICAgICAgICA8UmVuZGVyRmllbGRzXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19maWVsZHNgfVxuICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICBmaWVsZFR5cGVzPXtmaWVsZFR5cGVzfVxuICAgICAgICAgIHBlcm1pc3Npb25zPXtwZXJtaXNzaW9ucz8uZmllbGRzfVxuICAgICAgICAgIGluZGV4UGF0aD17aW5kZXhQYXRofVxuICAgICAgICAgIGZpZWxkU2NoZW1hPXtmaWVsZHMubWFwKChmaWVsZCkgPT4gKHtcbiAgICAgICAgICAgIC4uLmZpZWxkLFxuICAgICAgICAgICAgcGF0aDogY3JlYXRlTmVzdGVkRmllbGRQYXRoKHBhdGgsIGZpZWxkKSxcbiAgICAgICAgICB9KSl9XG4gICAgICAgIC8+XG4gICAgICA8L0NvbGxhcHNpYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVRyYW5zbGF0aW9uIiwiQ29sbGFwc2libGUiLCJSZW5kZXJGaWVsZHMiLCJBcnJheUFjdGlvbiIsIkhpZGRlbklucHV0IiwiUm93TGFiZWwiLCJnZXRUcmFuc2xhdGlvbiIsImNyZWF0ZU5lc3RlZEZpZWxkUGF0aCIsInVzZUZvcm1TdWJtaXR0ZWQiLCJFcnJvclBpbGwiLCJiYXNlQ2xhc3MiLCJBcnJheVJvdyIsInBhdGgiLCJwYXJlbnRQYXRoIiwiYWRkUm93IiwicmVtb3ZlUm93IiwibW92ZVJvdyIsImR1cGxpY2F0ZVJvdyIsInNldENvbGxhcHNlIiwidHJhbnNmb3JtIiwibGlzdGVuZXJzIiwiYXR0cmlidXRlcyIsInNldE5vZGVSZWYiLCJyb3ciLCJyb3dJbmRleCIsInJvd0NvdW50IiwiaW5kZXhQYXRoIiwicmVhZE9ubHkiLCJsYWJlbHMiLCJmaWVsZFR5cGVzIiwicGVybWlzc2lvbnMiLCJDdXN0b21Sb3dMYWJlbCIsImZpZWxkcyIsImhhc01heFJvd3MiLCJpMThuIiwiaGFzU3VibWl0dGVkIiwiZmFsbGJhY2tMYWJlbCIsIlN0cmluZyIsInNpbmd1bGFyIiwicGFkU3RhcnQiLCJjaGlsZEVycm9yUGF0aHNDb3VudCIsImNoaWxkRXJyb3JQYXRocyIsInNpemUiLCJmaWVsZEhhc0Vycm9ycyIsImNsYXNzTmFtZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImRpdiIsImtleSIsImlkIiwic3BsaXQiLCJyZWYiLCJzdHlsZSIsImNvbGxhcHNlZCIsIm9uVG9nZ2xlIiwiY2xhc3NOYW1lIiwiY29sbGFwc2libGVTdHlsZSIsImRyYWdIYW5kbGVQcm9wcyIsImhlYWRlciIsImxhYmVsIiwicm93TnVtYmVyIiwiY291bnQiLCJ3aXRoTWVzc2FnZSIsImFjdGlvbnMiLCJpbmRleCIsInVuZGVmaW5lZCIsIm5hbWUiLCJ2YWx1ZSIsImZpZWxkU2NoZW1hIiwibWFwIiwiZmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUFTQyxXQUFXLFFBQVEsZ0NBQWdDO0FBQzVELE9BQU9DLGtCQUFrQixxQkFBcUI7QUFFOUMsU0FBU0MsV0FBVyxRQUFRLGdDQUFnQztBQUM1RCxPQUFPQyxpQkFBaUIsaUJBQWlCO0FBQ3pDLFNBQVNDLFFBQVEsUUFBUSxpQkFBaUI7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
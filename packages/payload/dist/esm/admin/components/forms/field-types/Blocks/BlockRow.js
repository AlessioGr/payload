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
import SectionTitle from "./SectionTitle";
import Pill from "../../../elements/Pill";
import HiddenInput from "../HiddenInput";
import { getTranslation } from "../../../../../utilities/getTranslation";
import { createNestedFieldPath } from "../../Form/createNestedFieldPath";
import { RowActions } from "./RowActions";
import { useFormSubmitted } from "../../Form/context";
import { ErrorPill } from "../../../elements/ErrorPill";
var baseClass = "blocks-field";
export var BlockRow = function(param) {
    var parentPath = param.path, addRow = param.addRow, removeRow = param.removeRow, moveRow = param.moveRow, duplicateRow = param.duplicateRow, setCollapse = param.setCollapse, transform = param.transform, listeners = param.listeners, attributes = param.attributes, setNodeRef = param.setNodeRef, row = param.row, rowIndex = param.rowIndex, rowCount = param.rowCount, indexPath = param.indexPath, readOnly = param.readOnly, labels = param.labels, fieldTypes = param.fieldTypes, permissions = param.permissions, blocks = param.blocks, blockToRender = param.blockToRender, hasMaxRows = param.hasMaxRows;
    var _row_childErrorPaths, _permissions_blocks_row_blockType, _permissions_blocks, _permissions;
    var path = "".concat(parentPath, ".").concat(rowIndex);
    var i18n = useTranslation().i18n;
    var hasSubmitted = useFormSubmitted();
    var childErrorPathsCount = (_row_childErrorPaths = row.childErrorPaths) === null || _row_childErrorPaths === void 0 ? void 0 : _row_childErrorPaths.size;
    var fieldHasErrors = hasSubmitted && childErrorPathsCount > 0;
    var classNames = [
        "".concat(baseClass, "__row"),
        fieldHasErrors ? "".concat(baseClass, "__row--has-errors") : "".concat(baseClass, "__row--no-errors")
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ React.createElement("div", {
        key: "".concat(parentPath, "-row-").concat(rowIndex),
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
        key: row.id,
        dragHandleProps: {
            id: row.id,
            attributes: attributes,
            listeners: listeners
        },
        header: /*#__PURE__*/ React.createElement("div", {
            className: "".concat(baseClass, "__block-header")
        }, /*#__PURE__*/ React.createElement("span", {
            className: "".concat(baseClass, "__block-number")
        }, String(rowIndex + 1).padStart(2, "0")), /*#__PURE__*/ React.createElement(Pill, {
            pillStyle: "white",
            className: "".concat(baseClass, "__block-pill ").concat(baseClass, "__block-pill-").concat(row.blockType)
        }, getTranslation(blockToRender.labels.singular, i18n)), /*#__PURE__*/ React.createElement(SectionTitle, {
            path: "".concat(path, ".blockName"),
            readOnly: readOnly
        }), fieldHasErrors && /*#__PURE__*/ React.createElement(ErrorPill, {
            count: childErrorPathsCount,
            withMessage: true
        })),
        actions: !readOnly ? /*#__PURE__*/ React.createElement(RowActions, {
            addRow: addRow,
            removeRow: removeRow,
            moveRow: moveRow,
            duplicateRow: duplicateRow,
            rowCount: rowCount,
            rowIndex: rowIndex,
            blockType: row.blockType,
            blocks: blocks,
            labels: labels,
            hasMaxRows: hasMaxRows
        }) : undefined
    }, /*#__PURE__*/ React.createElement(HiddenInput, {
        name: "".concat(path, ".id"),
        value: row.id
    }), /*#__PURE__*/ React.createElement(RenderFields, {
        className: "".concat(baseClass, "__fields"),
        readOnly: readOnly,
        fieldTypes: fieldTypes,
        permissions: (_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_blocks = _permissions.blocks) === null || _permissions_blocks === void 0 ? void 0 : (_permissions_blocks_row_blockType = _permissions_blocks[row.blockType]) === null || _permissions_blocks_row_blockType === void 0 ? void 0 : _permissions_blocks_row_blockType.fields,
        fieldSchema: blockToRender.fields.map(function(field) {
            return _object_spread_props(_object_spread({}, field), {
                path: createNestedFieldPath(path, field)
            });
        }),
        indexPath: indexPath
    })));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0Jsb2Nrcy9CbG9ja1Jvdy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgQ29sbGFwc2libGUgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9Db2xsYXBzaWJsZSc7XG5pbXBvcnQgUmVuZGVyRmllbGRzIGZyb20gJy4uLy4uL1JlbmRlckZpZWxkcyc7XG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gJy4vU2VjdGlvblRpdGxlJztcbmltcG9ydCBQaWxsIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1BpbGwnO1xuaW1wb3J0IEhpZGRlbklucHV0IGZyb20gJy4uL0hpZGRlbklucHV0JztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCB7IGNyZWF0ZU5lc3RlZEZpZWxkUGF0aCB9IGZyb20gJy4uLy4uL0Zvcm0vY3JlYXRlTmVzdGVkRmllbGRQYXRoJztcbmltcG9ydCB7IFJvd0FjdGlvbnMgfSBmcm9tICcuL1Jvd0FjdGlvbnMnO1xuaW1wb3J0IHR5cGUgeyBVc2VEcmFnZ2FibGVTb3J0YWJsZVJldHVybiB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0RyYWdnYWJsZVNvcnRhYmxlL3VzZURyYWdnYWJsZVNvcnRhYmxlL3R5cGVzJztcbmltcG9ydCB0eXBlIHsgUm93IH0gZnJvbSAnLi4vLi4vRm9ybS90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IEJsb2NrIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyB1c2VGb3JtU3VibWl0dGVkIH0gZnJvbSAnLi4vLi4vRm9ybS9jb250ZXh0JztcbmltcG9ydCB7IEVycm9yUGlsbCB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0Vycm9yUGlsbCc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdibG9ja3MtZmllbGQnO1xuXG50eXBlIEJsb2NrRmllbGRQcm9wcyA9IFVzZURyYWdnYWJsZVNvcnRhYmxlUmV0dXJuICYgUGljazxQcm9wcywgJ3BhdGgnIHwgJ2xhYmVscycgfCAnYmxvY2tzJyB8ICdmaWVsZFR5cGVzJyB8ICdpbmRleFBhdGgnIHwgJ3Blcm1pc3Npb25zJz4gJiB7XG4gIGFkZFJvdzogKHJvd0luZGV4OiBudW1iZXIsIGJsb2NrVHlwZTogc3RyaW5nKSA9PiB2b2lkXG4gIGR1cGxpY2F0ZVJvdzogKHJvd0luZGV4OiBudW1iZXIpID0+IHZvaWRcbiAgcmVtb3ZlUm93OiAocm93SW5kZXg6IG51bWJlcikgPT4gdm9pZFxuICBtb3ZlUm93OiAoZnJvbUluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlcikgPT4gdm9pZFxuICBzZXRDb2xsYXBzZTogKGlkOiBzdHJpbmcsIGNvbGxhcHNlZDogYm9vbGVhbikgPT4gdm9pZFxuICByb3dJbmRleDogbnVtYmVyXG4gIHJvdzogUm93XG4gIHJlYWRPbmx5OiBib29sZWFuXG4gIHJvd0NvdW50OiBudW1iZXJcbiAgYmxvY2tUb1JlbmRlcjogQmxvY2tcbiAgaGFzTWF4Um93cz86IGJvb2xlYW5cbn1cbmV4cG9ydCBjb25zdCBCbG9ja1JvdzogUmVhY3QuRkM8QmxvY2tGaWVsZFByb3BzPiA9ICh7XG4gIHBhdGg6IHBhcmVudFBhdGgsXG4gIGFkZFJvdyxcbiAgcmVtb3ZlUm93LFxuICBtb3ZlUm93LFxuICBkdXBsaWNhdGVSb3csXG4gIHNldENvbGxhcHNlLFxuICB0cmFuc2Zvcm0sXG4gIGxpc3RlbmVycyxcbiAgYXR0cmlidXRlcyxcbiAgc2V0Tm9kZVJlZixcbiAgcm93LFxuICByb3dJbmRleCxcbiAgcm93Q291bnQsXG4gIGluZGV4UGF0aCxcbiAgcmVhZE9ubHksXG4gIGxhYmVscyxcbiAgZmllbGRUeXBlcyxcbiAgcGVybWlzc2lvbnMsXG4gIGJsb2NrcyxcbiAgYmxvY2tUb1JlbmRlcixcbiAgaGFzTWF4Um93cyxcbn0pID0+IHtcbiAgY29uc3QgcGF0aCA9IGAke3BhcmVudFBhdGh9LiR7cm93SW5kZXh9YDtcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBoYXNTdWJtaXR0ZWQgPSB1c2VGb3JtU3VibWl0dGVkKCk7XG5cbiAgY29uc3QgY2hpbGRFcnJvclBhdGhzQ291bnQgPSByb3cuY2hpbGRFcnJvclBhdGhzPy5zaXplO1xuICBjb25zdCBmaWVsZEhhc0Vycm9ycyA9IGhhc1N1Ym1pdHRlZCAmJiBjaGlsZEVycm9yUGF0aHNDb3VudCA+IDA7XG5cbiAgY29uc3QgY2xhc3NOYW1lcyA9IFtcbiAgICBgJHtiYXNlQ2xhc3N9X19yb3dgLFxuICAgIGZpZWxkSGFzRXJyb3JzID8gYCR7YmFzZUNsYXNzfV9fcm93LS1oYXMtZXJyb3JzYCA6IGAke2Jhc2VDbGFzc31fX3Jvdy0tbm8tZXJyb3JzYCxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAga2V5PXtgJHtwYXJlbnRQYXRofS1yb3ctJHtyb3dJbmRleH1gfVxuICAgICAgaWQ9e2Ake3BhcmVudFBhdGguc3BsaXQoJy4nKS5qb2luKCctJyl9LXJvdy0ke3Jvd0luZGV4fWB9XG4gICAgICByZWY9e3NldE5vZGVSZWZ9XG4gICAgICBzdHlsZT17e1xuICAgICAgICB0cmFuc2Zvcm0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb2xsYXBzaWJsZVxuICAgICAgICBjb2xsYXBzZWQ9e3Jvdy5jb2xsYXBzZWR9XG4gICAgICAgIG9uVG9nZ2xlPXsoY29sbGFwc2VkKSA9PiBzZXRDb2xsYXBzZShyb3cuaWQsIGNvbGxhcHNlZCl9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lc31cbiAgICAgICAgY29sbGFwc2libGVTdHlsZT17ZmllbGRIYXNFcnJvcnMgPyAnZXJyb3InIDogJ2RlZmF1bHQnfVxuICAgICAgICBrZXk9e3Jvdy5pZH1cbiAgICAgICAgZHJhZ0hhbmRsZVByb3BzPXt7XG4gICAgICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgICAgICBhdHRyaWJ1dGVzLFxuICAgICAgICAgIGxpc3RlbmVycyxcbiAgICAgICAgfX1cbiAgICAgICAgaGVhZGVyPXsoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2Jsb2NrLWhlYWRlcmB9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19ibG9jay1udW1iZXJgfT5cbiAgICAgICAgICAgICAge1N0cmluZyhyb3dJbmRleCArIDEpLnBhZFN0YXJ0KDIsICcwJyl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICBwaWxsU3R5bGU9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYmxvY2stcGlsbCAke2Jhc2VDbGFzc31fX2Jsb2NrLXBpbGwtJHtyb3cuYmxvY2tUeXBlfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtnZXRUcmFuc2xhdGlvbihibG9ja1RvUmVuZGVyLmxhYmVscy5zaW5ndWxhciwgaTE4bil9XG4gICAgICAgICAgICA8L1BpbGw+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlXG4gICAgICAgICAgICAgIHBhdGg9e2Ake3BhdGh9LmJsb2NrTmFtZWB9XG4gICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZmllbGRIYXNFcnJvcnMgJiYgKFxuICAgICAgICAgICAgICA8RXJyb3JQaWxsXG4gICAgICAgICAgICAgICAgY291bnQ9e2NoaWxkRXJyb3JQYXRoc0NvdW50fVxuICAgICAgICAgICAgICAgIHdpdGhNZXNzYWdlXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICBhY3Rpb25zPXshcmVhZE9ubHkgPyAoXG4gICAgICAgICAgPFJvd0FjdGlvbnNcbiAgICAgICAgICAgIGFkZFJvdz17YWRkUm93fVxuICAgICAgICAgICAgcmVtb3ZlUm93PXtyZW1vdmVSb3d9XG4gICAgICAgICAgICBtb3ZlUm93PXttb3ZlUm93fVxuICAgICAgICAgICAgZHVwbGljYXRlUm93PXtkdXBsaWNhdGVSb3d9XG4gICAgICAgICAgICByb3dDb3VudD17cm93Q291bnR9XG4gICAgICAgICAgICByb3dJbmRleD17cm93SW5kZXh9XG4gICAgICAgICAgICBibG9ja1R5cGU9e3Jvdy5ibG9ja1R5cGV9XG4gICAgICAgICAgICBibG9ja3M9e2Jsb2Nrc31cbiAgICAgICAgICAgIGxhYmVscz17bGFiZWxzfVxuICAgICAgICAgICAgaGFzTWF4Um93cz17aGFzTWF4Um93c31cbiAgICAgICAgICAvPlxuICAgICAgICApIDogdW5kZWZpbmVkfVxuICAgICAgPlxuICAgICAgICA8SGlkZGVuSW5wdXRcbiAgICAgICAgICBuYW1lPXtgJHtwYXRofS5pZGB9XG4gICAgICAgICAgdmFsdWU9e3Jvdy5pZH1cbiAgICAgICAgLz5cbiAgICAgICAgPFJlbmRlckZpZWxkc1xuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZmllbGRzYH1cbiAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgZmllbGRUeXBlcz17ZmllbGRUeXBlc31cbiAgICAgICAgICBwZXJtaXNzaW9ucz17cGVybWlzc2lvbnM/LmJsb2Nrcz8uW3Jvdy5ibG9ja1R5cGVdPy5maWVsZHN9XG4gICAgICAgICAgZmllbGRTY2hlbWE9e2Jsb2NrVG9SZW5kZXIuZmllbGRzLm1hcCgoZmllbGQpID0+ICh7XG4gICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgIHBhdGg6IGNyZWF0ZU5lc3RlZEZpZWxkUGF0aChwYXRoLCBmaWVsZCksXG4gICAgICAgICAgfSkpfVxuICAgICAgICAgIGluZGV4UGF0aD17aW5kZXhQYXRofVxuICAgICAgICAvPlxuICAgICAgPC9Db2xsYXBzaWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VUcmFuc2xhdGlvbiIsIkNvbGxhcHNpYmxlIiwiUmVuZGVyRmllbGRzIiwiU2VjdGlvblRpdGxlIiwiUGlsbCIsIkhpZGRlbklucHV0IiwiZ2V0VHJhbnNsYXRpb24iLCJjcmVhdGVOZXN0ZWRGaWVsZFBhdGgiLCJSb3dBY3Rpb25zIiwidXNlRm9ybVN1Ym1pdHRlZCIsIkVycm9yUGlsbCIsImJhc2VDbGFzcyIsIkJsb2NrUm93IiwicGF0aCIsInBhcmVudFBhdGgiLCJhZGRSb3ciLCJyZW1vdmVSb3ciLCJtb3ZlUm93IiwiZHVwbGljYXRlUm93Iiwic2V0Q29sbGFwc2UiLCJ0cmFuc2Zvcm0iLCJsaXN0ZW5lcnMiLCJhdHRyaWJ1dGVzIiwic2V0Tm9kZVJlZiIsInJvdyIsInJvd0luZGV4Iiwicm93Q291bnQiLCJpbmRleFBhdGgiLCJyZWFkT25seSIsImxhYmVscyIsImZpZWxkVHlwZXMiLCJwZXJtaXNzaW9ucyIsImJsb2NrcyIsImJsb2NrVG9SZW5kZXIiLCJoYXNNYXhSb3dzIiwiaTE4biIsImhhc1N1Ym1pdHRlZCIsImNoaWxkRXJyb3JQYXRoc0NvdW50IiwiY2hpbGRFcnJvclBhdGhzIiwic2l6ZSIsImZpZWxkSGFzRXJyb3JzIiwiY2xhc3NOYW1lcyIsImZpbHRlciIsIkJvb2xlYW4iLCJqb2luIiwiZGl2Iiwia2V5IiwiaWQiLCJzcGxpdCIsInJlZiIsInN0eWxlIiwiY29sbGFwc2VkIiwib25Ub2dnbGUiLCJjbGFzc05hbWUiLCJjb2xsYXBzaWJsZVN0eWxlIiwiZHJhZ0hhbmRsZVByb3BzIiwiaGVhZGVyIiwic3BhbiIsIlN0cmluZyIsInBhZFN0YXJ0IiwicGlsbFN0eWxlIiwiYmxvY2tUeXBlIiwic2luZ3VsYXIiLCJjb3VudCIsIndpdGhNZXNzYWdlIiwiYWN0aW9ucyIsInVuZGVmaW5lZCIsIm5hbWUiLCJ2YWx1ZSIsImZpZWxkcyIsImZpZWxkU2NoZW1hIiwibWFwIiwiZmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxXQUFXLFFBQVE7QUFDMUIsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUUvQyxTQUFTQyxXQUFXLFFBQVEsZ0NBQWdDO0FBQzVELE9BQU9DLGtCQUFrQixxQkFBcUI7QUFDOUMsT0FBT0Msa0JBQWtCLGlCQUFpQjtBQUMxQyxPQUFPQyxVQUFVLHlCQUF5QjtBQUMxQyxPQUFPQyxpQkFBaUIsaUJBQWlCO0FBQ3pDLFNBQVNDLGNBQWMsUUFBUSwwQ0FBMEM7QUFDekUsU0FBU0MscUJBQXFCLFFBQVEsbUNBQW1DO0FBQ3pFLFNBQVNDLFVBQVUsUUFBUSxlQUFlO0FBSTFDLFNBQVNDLGdCQUFnQixRQUFRLHFCQUFxQjtBQUN0RCxTQUFTQyxTQUFTLFFBQVEsOEJBQThCO0FBRXhELElBQU1DLFlBQVk7QUFlbEIsT0FBTyxJQUFNQyxXQUFzQztRQUNqREMsQUFBTUMsbUJBQU5ELE1BQ0FFLGVBQUFBLFFBQ0FDLGtCQUFBQSxXQUNBQyxnQkFBQUEsU0FDQUMscUJBQUFBLGNBQ0FDLG9CQUFBQSxhQUNBQyxrQkFBQUEsV0FDQUMsa0JBQUFBLFdBQ0FDLG1CQUFBQSxZQUNBQyxtQkFBQUEsWUFDQUMsWUFBQUEsS0FDQUMsaUJBQUFBLFVBQ0FDLGlCQUFBQSxVQUNBQyxrQkFBQUEsV0FDQUMsaUJBQUFBLFVBQ0FDLGVBQUFBLFFBQ0FDLG1CQUFBQSxZQUNBQyxvQkFBQUEsYUFDQUMsZUFBQUEsUUFDQUMsc0JBQUFBLGVBQ0FDLG1CQUFBQTtRQU02QlYsc0JBMEVSTyxtQ0FBQUEscUJBQUFBO0lB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
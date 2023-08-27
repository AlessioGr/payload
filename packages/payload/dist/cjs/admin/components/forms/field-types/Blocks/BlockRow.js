"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BlockRow", {
    enumerable: true,
    get: function() {
        return BlockRow;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reacti18next = require("react-i18next");
var _Collapsible = require("../../../elements/Collapsible");
var _RenderFields = /*#__PURE__*/ _interop_require_default(require("../../RenderFields"));
var _SectionTitle = /*#__PURE__*/ _interop_require_default(require("./SectionTitle"));
var _Pill = /*#__PURE__*/ _interop_require_default(require("../../../elements/Pill"));
var _HiddenInput = /*#__PURE__*/ _interop_require_default(require("../HiddenInput"));
var _getTranslation = require("../../../../../utilities/getTranslation");
var _createNestedFieldPath = require("../../Form/createNestedFieldPath");
var _RowActions = require("./RowActions");
var _context = require("../../Form/context");
var _ErrorPill = require("../../../elements/ErrorPill");
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
var baseClass = "blocks-field";
var BlockRow = function(param) {
    var parentPath = param.path, addRow = param.addRow, removeRow = param.removeRow, moveRow = param.moveRow, duplicateRow = param.duplicateRow, setCollapse = param.setCollapse, transform = param.transform, listeners = param.listeners, attributes = param.attributes, setNodeRef = param.setNodeRef, row = param.row, rowIndex = param.rowIndex, rowCount = param.rowCount, indexPath = param.indexPath, readOnly = param.readOnly, labels = param.labels, fieldTypes = param.fieldTypes, permissions = param.permissions, blocks = param.blocks, blockToRender = param.blockToRender, hasMaxRows = param.hasMaxRows;
    var _row_childErrorPaths, _permissions_blocks_row_blockType, _permissions_blocks, _permissions;
    var path = "".concat(parentPath, ".").concat(rowIndex);
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    var hasSubmitted = (0, _context.useFormSubmitted)();
    var childErrorPathsCount = (_row_childErrorPaths = row.childErrorPaths) === null || _row_childErrorPaths === void 0 ? void 0 : _row_childErrorPaths.size;
    var fieldHasErrors = hasSubmitted && childErrorPathsCount > 0;
    var classNames = [
        "".concat(baseClass, "__row"),
        fieldHasErrors ? "".concat(baseClass, "__row--has-errors") : "".concat(baseClass, "__row--no-errors")
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ _react.default.createElement("div", {
        key: "".concat(parentPath, "-row-").concat(rowIndex),
        id: "".concat(parentPath.split(".").join("-"), "-row-").concat(rowIndex),
        ref: setNodeRef,
        style: {
            transform: transform
        }
    }, /*#__PURE__*/ _react.default.createElement(_Collapsible.Collapsible, {
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
        header: /*#__PURE__*/ _react.default.createElement("div", {
            className: "".concat(baseClass, "__block-header")
        }, /*#__PURE__*/ _react.default.createElement("span", {
            className: "".concat(baseClass, "__block-number")
        }, String(rowIndex + 1).padStart(2, "0")), /*#__PURE__*/ _react.default.createElement(_Pill.default, {
            pillStyle: "white",
            className: "".concat(baseClass, "__block-pill ").concat(baseClass, "__block-pill-").concat(row.blockType)
        }, (0, _getTranslation.getTranslation)(blockToRender.labels.singular, i18n)), /*#__PURE__*/ _react.default.createElement(_SectionTitle.default, {
            path: "".concat(path, ".blockName"),
            readOnly: readOnly
        }), fieldHasErrors && /*#__PURE__*/ _react.default.createElement(_ErrorPill.ErrorPill, {
            count: childErrorPathsCount,
            withMessage: true
        })),
        actions: !readOnly ? /*#__PURE__*/ _react.default.createElement(_RowActions.RowActions, {
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
    }, /*#__PURE__*/ _react.default.createElement(_HiddenInput.default, {
        name: "".concat(path, ".id"),
        value: row.id
    }), /*#__PURE__*/ _react.default.createElement(_RenderFields.default, {
        className: "".concat(baseClass, "__fields"),
        readOnly: readOnly,
        fieldTypes: fieldTypes,
        permissions: (_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_blocks = _permissions.blocks) === null || _permissions_blocks === void 0 ? void 0 : (_permissions_blocks_row_blockType = _permissions_blocks[row.blockType]) === null || _permissions_blocks_row_blockType === void 0 ? void 0 : _permissions_blocks_row_blockType.fields,
        fieldSchema: blockToRender.fields.map(function(field) {
            return _object_spread_props(_object_spread({}, field), {
                path: (0, _createNestedFieldPath.createNestedFieldPath)(path, field)
            });
        }),
        indexPath: indexPath
    })));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0Jsb2Nrcy9CbG9ja1Jvdy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgQ29sbGFwc2libGUgfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9Db2xsYXBzaWJsZSc7XG5pbXBvcnQgUmVuZGVyRmllbGRzIGZyb20gJy4uLy4uL1JlbmRlckZpZWxkcyc7XG5pbXBvcnQgU2VjdGlvblRpdGxlIGZyb20gJy4vU2VjdGlvblRpdGxlJztcbmltcG9ydCBQaWxsIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL1BpbGwnO1xuaW1wb3J0IEhpZGRlbklucHV0IGZyb20gJy4uL0hpZGRlbklucHV0JztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCB7IGNyZWF0ZU5lc3RlZEZpZWxkUGF0aCB9IGZyb20gJy4uLy4uL0Zvcm0vY3JlYXRlTmVzdGVkRmllbGRQYXRoJztcbmltcG9ydCB7IFJvd0FjdGlvbnMgfSBmcm9tICcuL1Jvd0FjdGlvbnMnO1xuaW1wb3J0IHR5cGUgeyBVc2VEcmFnZ2FibGVTb3J0YWJsZVJldHVybiB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0RyYWdnYWJsZVNvcnRhYmxlL3VzZURyYWdnYWJsZVNvcnRhYmxlL3R5cGVzJztcbmltcG9ydCB0eXBlIHsgUm93IH0gZnJvbSAnLi4vLi4vRm9ybS90eXBlcyc7XG5pbXBvcnQgdHlwZSB7IEJsb2NrIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGRzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyB1c2VGb3JtU3VibWl0dGVkIH0gZnJvbSAnLi4vLi4vRm9ybS9jb250ZXh0JztcbmltcG9ydCB7IEVycm9yUGlsbCB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL0Vycm9yUGlsbCc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdibG9ja3MtZmllbGQnO1xuXG50eXBlIEJsb2NrRmllbGRQcm9wcyA9IFVzZURyYWdnYWJsZVNvcnRhYmxlUmV0dXJuICYgUGljazxQcm9wcywgJ3BhdGgnIHwgJ2xhYmVscycgfCAnYmxvY2tzJyB8ICdmaWVsZFR5cGVzJyB8ICdpbmRleFBhdGgnIHwgJ3Blcm1pc3Npb25zJz4gJiB7XG4gIGFkZFJvdzogKHJvd0luZGV4OiBudW1iZXIsIGJsb2NrVHlwZTogc3RyaW5nKSA9PiB2b2lkXG4gIGR1cGxpY2F0ZVJvdzogKHJvd0luZGV4OiBudW1iZXIpID0+IHZvaWRcbiAgcmVtb3ZlUm93OiAocm93SW5kZXg6IG51bWJlcikgPT4gdm9pZFxuICBtb3ZlUm93OiAoZnJvbUluZGV4OiBudW1iZXIsIHRvSW5kZXg6IG51bWJlcikgPT4gdm9pZFxuICBzZXRDb2xsYXBzZTogKGlkOiBzdHJpbmcsIGNvbGxhcHNlZDogYm9vbGVhbikgPT4gdm9pZFxuICByb3dJbmRleDogbnVtYmVyXG4gIHJvdzogUm93XG4gIHJlYWRPbmx5OiBib29sZWFuXG4gIHJvd0NvdW50OiBudW1iZXJcbiAgYmxvY2tUb1JlbmRlcjogQmxvY2tcbiAgaGFzTWF4Um93cz86IGJvb2xlYW5cbn1cbmV4cG9ydCBjb25zdCBCbG9ja1JvdzogUmVhY3QuRkM8QmxvY2tGaWVsZFByb3BzPiA9ICh7XG4gIHBhdGg6IHBhcmVudFBhdGgsXG4gIGFkZFJvdyxcbiAgcmVtb3ZlUm93LFxuICBtb3ZlUm93LFxuICBkdXBsaWNhdGVSb3csXG4gIHNldENvbGxhcHNlLFxuICB0cmFuc2Zvcm0sXG4gIGxpc3RlbmVycyxcbiAgYXR0cmlidXRlcyxcbiAgc2V0Tm9kZVJlZixcbiAgcm93LFxuICByb3dJbmRleCxcbiAgcm93Q291bnQsXG4gIGluZGV4UGF0aCxcbiAgcmVhZE9ubHksXG4gIGxhYmVscyxcbiAgZmllbGRUeXBlcyxcbiAgcGVybWlzc2lvbnMsXG4gIGJsb2NrcyxcbiAgYmxvY2tUb1JlbmRlcixcbiAgaGFzTWF4Um93cyxcbn0pID0+IHtcbiAgY29uc3QgcGF0aCA9IGAke3BhcmVudFBhdGh9LiR7cm93SW5kZXh9YDtcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBoYXNTdWJtaXR0ZWQgPSB1c2VGb3JtU3VibWl0dGVkKCk7XG5cbiAgY29uc3QgY2hpbGRFcnJvclBhdGhzQ291bnQgPSByb3cuY2hpbGRFcnJvclBhdGhzPy5zaXplO1xuICBjb25zdCBmaWVsZEhhc0Vycm9ycyA9IGhhc1N1Ym1pdHRlZCAmJiBjaGlsZEVycm9yUGF0aHNDb3VudCA+IDA7XG5cbiAgY29uc3QgY2xhc3NOYW1lcyA9IFtcbiAgICBgJHtiYXNlQ2xhc3N9X19yb3dgLFxuICAgIGZpZWxkSGFzRXJyb3JzID8gYCR7YmFzZUNsYXNzfV9fcm93LS1oYXMtZXJyb3JzYCA6IGAke2Jhc2VDbGFzc31fX3Jvdy0tbm8tZXJyb3JzYCxcbiAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAga2V5PXtgJHtwYXJlbnRQYXRofS1yb3ctJHtyb3dJbmRleH1gfVxuICAgICAgaWQ9e2Ake3BhcmVudFBhdGguc3BsaXQoJy4nKS5qb2luKCctJyl9LXJvdy0ke3Jvd0luZGV4fWB9XG4gICAgICByZWY9e3NldE5vZGVSZWZ9XG4gICAgICBzdHlsZT17e1xuICAgICAgICB0cmFuc2Zvcm0sXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb2xsYXBzaWJsZVxuICAgICAgICBjb2xsYXBzZWQ9e3Jvdy5jb2xsYXBzZWR9XG4gICAgICAgIG9uVG9nZ2xlPXsoY29sbGFwc2VkKSA9PiBzZXRDb2xsYXBzZShyb3cuaWQsIGNvbGxhcHNlZCl9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lc31cbiAgICAgICAgY29sbGFwc2libGVTdHlsZT17ZmllbGRIYXNFcnJvcnMgPyAnZXJyb3InIDogJ2RlZmF1bHQnfVxuICAgICAgICBrZXk9e3Jvdy5pZH1cbiAgICAgICAgZHJhZ0hhbmRsZVByb3BzPXt7XG4gICAgICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgICAgICBhdHRyaWJ1dGVzLFxuICAgICAgICAgIGxpc3RlbmVycyxcbiAgICAgICAgfX1cbiAgICAgICAgaGVhZGVyPXsoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2Jsb2NrLWhlYWRlcmB9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19ibG9jay1udW1iZXJgfT5cbiAgICAgICAgICAgICAge1N0cmluZyhyb3dJbmRleCArIDEpLnBhZFN0YXJ0KDIsICcwJyl9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8UGlsbFxuICAgICAgICAgICAgICBwaWxsU3R5bGU9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fYmxvY2stcGlsbCAke2Jhc2VDbGFzc31fX2Jsb2NrLXBpbGwtJHtyb3cuYmxvY2tUeXBlfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtnZXRUcmFuc2xhdGlvbihibG9ja1RvUmVuZGVyLmxhYmVscy5zaW5ndWxhciwgaTE4bil9XG4gICAgICAgICAgICA8L1BpbGw+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlXG4gICAgICAgICAgICAgIHBhdGg9e2Ake3BhdGh9LmJsb2NrTmFtZWB9XG4gICAgICAgICAgICAgIHJlYWRPbmx5PXtyZWFkT25seX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZmllbGRIYXNFcnJvcnMgJiYgKFxuICAgICAgICAgICAgICA8RXJyb3JQaWxsXG4gICAgICAgICAgICAgICAgY291bnQ9e2NoaWxkRXJyb3JQYXRoc0NvdW50fVxuICAgICAgICAgICAgICAgIHdpdGhNZXNzYWdlXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICBhY3Rpb25zPXshcmVhZE9ubHkgPyAoXG4gICAgICAgICAgPFJvd0FjdGlvbnNcbiAgICAgICAgICAgIGFkZFJvdz17YWRkUm93fVxuICAgICAgICAgICAgcmVtb3ZlUm93PXtyZW1vdmVSb3d9XG4gICAgICAgICAgICBtb3ZlUm93PXttb3ZlUm93fVxuICAgICAgICAgICAgZHVwbGljYXRlUm93PXtkdXBsaWNhdGVSb3d9XG4gICAgICAgICAgICByb3dDb3VudD17cm93Q291bnR9XG4gICAgICAgICAgICByb3dJbmRleD17cm93SW5kZXh9XG4gICAgICAgICAgICBibG9ja1R5cGU9e3Jvdy5ibG9ja1R5cGV9XG4gICAgICAgICAgICBibG9ja3M9e2Jsb2Nrc31cbiAgICAgICAgICAgIGxhYmVscz17bGFiZWxzfVxuICAgICAgICAgICAgaGFzTWF4Um93cz17aGFzTWF4Um93c31cbiAgICAgICAgICAvPlxuICAgICAgICApIDogdW5kZWZpbmVkfVxuICAgICAgPlxuICAgICAgICA8SGlkZGVuSW5wdXRcbiAgICAgICAgICBuYW1lPXtgJHtwYXRofS5pZGB9XG4gICAgICAgICAgdmFsdWU9e3Jvdy5pZH1cbiAgICAgICAgLz5cbiAgICAgICAgPFJlbmRlckZpZWxkc1xuICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZmllbGRzYH1cbiAgICAgICAgICByZWFkT25seT17cmVhZE9ubHl9XG4gICAgICAgICAgZmllbGRUeXBlcz17ZmllbGRUeXBlc31cbiAgICAgICAgICBwZXJtaXNzaW9ucz17cGVybWlzc2lvbnM/LmJsb2Nrcz8uW3Jvdy5ibG9ja1R5cGVdPy5maWVsZHN9XG4gICAgICAgICAgZmllbGRTY2hlbWE9e2Jsb2NrVG9SZW5kZXIuZmllbGRzLm1hcCgoZmllbGQpID0+ICh7XG4gICAgICAgICAgICAuLi5maWVsZCxcbiAgICAgICAgICAgIHBhdGg6IGNyZWF0ZU5lc3RlZEZpZWxkUGF0aChwYXRoLCBmaWVsZCksXG4gICAgICAgICAgfSkpfVxuICAgICAgICAgIGluZGV4UGF0aD17aW5kZXhQYXRofVxuICAgICAgICAvPlxuICAgICAgPC9Db2xsYXBzaWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiQmxvY2tSb3ciLCJiYXNlQ2xhc3MiLCJwYXRoIiwicGFyZW50UGF0aCIsImFkZFJvdyIsInJlbW92ZVJvdyIsIm1vdmVSb3ciLCJkdXBsaWNhdGVSb3ciLCJzZXRDb2xsYXBzZSIsInRyYW5zZm9ybSIsImxpc3RlbmVycyIsImF0dHJpYnV0ZXMiLCJzZXROb2RlUmVmIiwicm93Iiwicm93SW5kZXgiLCJyb3dDb3VudCIsImluZGV4UGF0aCIsInJlYWRPbmx5IiwibGFiZWxzIiwiZmllbGRUeXBlcyIsInBlcm1pc3Npb25zIiwiYmxvY2tzIiwiYmxvY2tUb1JlbmRlciIsImhhc01heFJvd3MiLCJpMThuIiwidXNlVHJhbnNsYXRpb24iLCJoYXNTdWJtaXR0ZWQiLCJ1c2VGb3JtU3VibWl0dGVkIiwiY2hpbGRFcnJvclBhdGhzQ291bnQiLCJjaGlsZEVycm9yUGF0aHMiLCJzaXplIiwiZmllbGRIYXNFcnJvcnMiLCJjbGFzc05hbWVzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJkaXYiLCJrZXkiLCJpZCIsInNwbGl0IiwicmVmIiwic3R5bGUiLCJDb2xsYXBzaWJsZSIsImNvbGxhcHNlZCIsIm9uVG9nZ2xlIiwiY2xhc3NOYW1lIiwiY29sbGFwc2libGVTdHlsZSIsImRyYWdIYW5kbGVQcm9wcyIsImhlYWRlciIsInNwYW4iLCJTdHJpbmciLCJwYWRTdGFydCIsIlBpbGwiLCJwaWxsU3R5bGUiLCJibG9ja1R5cGUiLCJnZXRUcmFuc2xhdGlvbiIsInNpbmd1bGFyIiwiU2VjdGlvblRpdGxlIiwiRXJyb3JQaWxsIiwiY291bnQiLCJ3aXRoTWVzc2FnZSIsImFjdGlvbnMiLCJSb3dBY3Rpb25zIiwidW5kZWZpbmVkIiwiSGlkZGVuSW5wdXQiLCJuYW1lIiwidmFsdWUiLCJSZW5kZXJGaWVsZHMiLCJmaWVsZHMiLCJmaWVsZFNjaGVtYSIsIm1hcCIsImZpZWxkIiwiY3JlYXRlTmVzdGVkRmllbGRQYXRoIl0sIm1hcHBpbmdzIjoiOzs7OytCQWdDYUE7OztlQUFBQTs7OzREQWhDSzs0QkFDYTsyQkFFSDttRUFDSDttRUFDQTsyREFDUjtrRUFDTzs4QkFDTztxQ0FDTzswQkFDWDt1QkFJTTt5QkFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxZQUFZO0FBZVgsSUFBTUQsV0FBc0M7UUFDakRFLEFBQU1DLG1CQUFORCxNQUNBRSxlQUFBQSxRQUNBQyxrQkFBQUEsV0FDQUMsZ0JBQUFBLFNBQ0FDLHFCQUFBQSxjQUNBQyxvQkFBQUEsYUFDQUMsa0JBQUFBLFdBQ0FDLGtCQUFBQSxXQUNBQyxtQkFBQUEsWUFDQUMsbUJBQUFBLFlBQ0FDLFlBQUFBLEtBQ0FDLGlCQUFBQSxVQUNBQyxpQkFBQUEsVUFDQUMsa0JBQUFBLFdBQ0FDLGlCQUFBQSxVQUNBQyxlQUFBQSxRQUNBQyxtQkFBQUEsWUFDQUMsb0JBQUFBLGFBQ0FDLGVBQUFBLFFBQ0FDLHNCQUFBQSxlQUNBQyxtQkFBQUE7UUFNNkJWLHNCQTBFUk8sbUNBQUFBLHFCQUFBQTtJQTlFckIsSUFBTWxCLE9BQU8sQUFBQyxHQUFnQlksT0FBZFgsWUFBVyxLQUFZLE9BQVRXO0lBQzlCLElBQU0sQUFBRVUsT0FBU0MsSUFBQUEsNEJBQWMsSUFBdkJEO0lBQ1IsSUFBTUUsZUFBZUMsSUFBQUEseUJBQWdCO0lBRXJDLElBQU1DLHdCQUF1QmYsdUJBQUFBLElBQUlnQixlQUFlLGNBQW5CaEIsMkNBQUFBLHFCQUFxQmlCLElBQUk7SUFDdEQsSUFBTUMsaUJBQWlCTCxnQkFBZ0JFLHVCQUF1QjtJQUU5RCxJQUFNSSxhQUFh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
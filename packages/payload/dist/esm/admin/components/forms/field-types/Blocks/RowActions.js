function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
import { useModal } from "@faceless-ui/modal";
import { ArrayAction } from "../../../elements/ArrayAction";
import { useDrawerSlug } from "../../../elements/Drawer/useDrawerSlug";
import { BlocksDrawer } from "./BlocksDrawer";
export var RowActions = function(props) {
    var addRow = props.addRow, duplicateRow = props.duplicateRow, removeRow = props.removeRow, moveRow = props.moveRow, labels = props.labels, blocks = props.blocks, rowIndex = props.rowIndex, rowCount = props.rowCount, blockType = props.blockType, hasMaxRows = props.hasMaxRows;
    var _useModal = useModal(), openModal = _useModal.openModal, closeModal = _useModal.closeModal;
    var drawerSlug = useDrawerSlug("blocks-drawer");
    var _React_useState = _sliced_to_array(React.useState(null), 2), indexToAdd = _React_useState[0], setIndexToAdd = _React_useState[1];
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(BlocksDrawer, {
        drawerSlug: drawerSlug,
        blocks: blocks,
        addRow: function(_, rowBlockType) {
            if (typeof addRow === "function") {
                addRow(indexToAdd, rowBlockType);
            }
            closeModal(drawerSlug);
        },
        addRowIndex: rowIndex,
        labels: labels
    }), /*#__PURE__*/ React.createElement(ArrayAction, {
        rowCount: rowCount,
        addRow: function(index) {
            setIndexToAdd(index);
            openModal(drawerSlug);
        },
        duplicateRow: function() {
            return duplicateRow(rowIndex, blockType);
        },
        moveRow: moveRow,
        removeRow: removeRow,
        index: rowIndex,
        hasMaxRows: hasMaxRows
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0Jsb2Nrcy9Sb3dBY3Rpb25zLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgQmxvY2ssIExhYmVscyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgQXJyYXlBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9BcnJheUFjdGlvbic7XG5pbXBvcnQgeyB1c2VEcmF3ZXJTbHVnIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvRHJhd2VyL3VzZURyYXdlclNsdWcnO1xuaW1wb3J0IHsgQmxvY2tzRHJhd2VyIH0gZnJvbSAnLi9CbG9ja3NEcmF3ZXInO1xuXG5leHBvcnQgY29uc3QgUm93QWN0aW9uczogUmVhY3QuRkM8e1xuICBhZGRSb3c6IChyb3dJbmRleDogbnVtYmVyLCBibG9ja1R5cGU6IHN0cmluZykgPT4gdm9pZFxuICBkdXBsaWNhdGVSb3c6IChyb3dJbmRleDogbnVtYmVyLCBibG9ja1R5cGU6IHN0cmluZykgPT4gdm9pZFxuICByZW1vdmVSb3c6IChyb3dJbmRleDogbnVtYmVyKSA9PiB2b2lkXG4gIG1vdmVSb3c6IChmcm9tSW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyKSA9PiB2b2lkXG4gIGxhYmVsczogTGFiZWxzXG4gIGJsb2NrczogQmxvY2tbXVxuICByb3dJbmRleDogbnVtYmVyXG4gIHJvd0NvdW50OiBudW1iZXJcbiAgYmxvY2tUeXBlOiBzdHJpbmdcbiAgaGFzTWF4Um93cz86IGJvb2xlYW5cbn0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhZGRSb3csXG4gICAgZHVwbGljYXRlUm93LFxuICAgIHJlbW92ZVJvdyxcbiAgICBtb3ZlUm93LFxuICAgIGxhYmVscyxcbiAgICBibG9ja3MsXG4gICAgcm93SW5kZXgsXG4gICAgcm93Q291bnQsXG4gICAgYmxvY2tUeXBlLFxuICAgIGhhc01heFJvd3MsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgZHJhd2VyU2x1ZyA9IHVzZURyYXdlclNsdWcoJ2Jsb2Nrcy1kcmF3ZXInKTtcblxuICBjb25zdCBbaW5kZXhUb0FkZCwgc2V0SW5kZXhUb0FkZF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxCbG9ja3NEcmF3ZXJcbiAgICAgICAgZHJhd2VyU2x1Zz17ZHJhd2VyU2x1Z31cbiAgICAgICAgYmxvY2tzPXtibG9ja3N9XG4gICAgICAgIGFkZFJvdz17KF8sIHJvd0Jsb2NrVHlwZSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgYWRkUm93ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhZGRSb3coaW5kZXhUb0FkZCwgcm93QmxvY2tUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2xvc2VNb2RhbChkcmF3ZXJTbHVnKTtcbiAgICAgICAgfX1cbiAgICAgICAgYWRkUm93SW5kZXg9e3Jvd0luZGV4fVxuICAgICAgICBsYWJlbHM9e2xhYmVsc31cbiAgICAgIC8+XG4gICAgICA8QXJyYXlBY3Rpb25cbiAgICAgICAgcm93Q291bnQ9e3Jvd0NvdW50fVxuICAgICAgICBhZGRSb3c9eyhpbmRleCkgPT4ge1xuICAgICAgICAgIHNldEluZGV4VG9BZGQoaW5kZXgpO1xuICAgICAgICAgIG9wZW5Nb2RhbChkcmF3ZXJTbHVnKTtcbiAgICAgICAgfX1cbiAgICAgICAgZHVwbGljYXRlUm93PXsoKSA9PiBkdXBsaWNhdGVSb3cocm93SW5kZXgsIGJsb2NrVHlwZSl9XG4gICAgICAgIG1vdmVSb3c9e21vdmVSb3d9XG4gICAgICAgIHJlbW92ZVJvdz17cmVtb3ZlUm93fVxuICAgICAgICBpbmRleD17cm93SW5kZXh9XG4gICAgICAgIGhhc01heFJvd3M9e2hhc01heFJvd3N9XG4gICAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlTW9kYWwiLCJBcnJheUFjdGlvbiIsInVzZURyYXdlclNsdWciLCJCbG9ja3NEcmF3ZXIiLCJSb3dBY3Rpb25zIiwicHJvcHMiLCJhZGRSb3ciLCJkdXBsaWNhdGVSb3ciLCJyZW1vdmVSb3ciLCJtb3ZlUm93IiwibGFiZWxzIiwiYmxvY2tzIiwicm93SW5kZXgiLCJyb3dDb3VudCIsImJsb2NrVHlwZSIsImhhc01heFJvd3MiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwiZHJhd2VyU2x1ZyIsInVzZVN0YXRlIiwiaW5kZXhUb0FkZCIsInNldEluZGV4VG9BZGQiLCJGcmFnbWVudCIsIl8iLCJyb3dCbG9ja1R5cGUiLCJhZGRSb3dJbmRleCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLFNBQVNDLFFBQVEsUUFBUSxxQkFBcUI7QUFFOUMsU0FBU0MsV0FBVyxRQUFRLGdDQUFnQztBQUM1RCxTQUFTQyxhQUFhLFFBQVEseUNBQXlDO0FBQ3ZFLFNBQVNDLFlBQVksUUFBUSxpQkFBaUI7QUFFOUMsT0FBTyxJQUFNQyxhQVdSLFNBQUNDO0lBQ0osSUFDRUMsU0FVRUQsTUFWRkMsUUFDQUMsZUFTRUYsTUFURkUsY0FDQUMsWUFRRUgsTUFSRkcsV0FDQUMsVUFPRUosTUFQRkksU0FDQUMsU0FNRUwsTUFORkssUUFDQUMsU0FLRU4sTUFMRk0sUUFDQUMsV0FJRVAsTUFKRk8sVUFDQUMsV0FHRVIsTUFIRlEsVUFDQUMsWUFFRVQsTUFGRlMsV0FDQUMsYUFDRVYsTUFERlU7SUFHRixJQUFrQ2YsWUFBQUEsWUFBMUJnQixZQUEwQmhCLFVBQTFCZ0IsV0FBV0MsYUFBZWpCLFVBQWZpQjtJQUNuQixJQUFNQyxhQUFhaEIsY0FBYztJQUVqQyxJQUFvQ0gsbUNBQUFBLE1BQU1vQixRQUFRLENBQWdCLFdBQTNEQyxhQUE2QnJCLG9CQUFqQnNCLGdCQUFpQnRCO0lBRXBDLHFCQUNFLG9CQUFDQSxNQUFNdUIsUUFBUSxzQkFDYixvQkFBQ25CO1FBQ0NlLFlBQVlBO1FBQ1pQLFFBQVFBO1FBQ1JMLFFBQVEsU0FBQ2lCLEdBQUdDO1lBQ1YsSUFBSSxPQUFPbEIsV0FBVyxZQUFZO2dCQUNoQ0EsT0FBT2MsWUFBWUk7WUFDckI7WUFDQVAsV0FBV0M7UUFDYjtRQUNBTyxhQUFhYjtRQUNiRixRQUFRQTtzQkFFVixvQkFBQ1Q7UUFDQ1ksVUFBVUE7UUFDVlAsUUFBUSxTQUFDb0I7WUFDUEwsY0FBY0s7WUFDZFYsVUFBVUU7UUFDWjtRQUNBWCxjQUFjO21CQUFNQSxhQUFhSyxVQUFVRTs7UUFDM0NMLFNBQVNBO1FBQ1RELFdBQVdBO1FBQ1hrQixPQUFPZDtRQUNQRyxZQUFZQTs7QUFJcEIsRUFBRSJ9
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RowActions", {
    enumerable: true,
    get: function() {
        return RowActions;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _modal = require("@faceless-ui/modal");
var _ArrayAction = require("../../../elements/ArrayAction");
var _useDrawerSlug = require("../../../elements/Drawer/useDrawerSlug");
var _BlocksDrawer = require("./BlocksDrawer");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var RowActions = function(props) {
    var addRow = props.addRow, duplicateRow = props.duplicateRow, removeRow = props.removeRow, moveRow = props.moveRow, labels = props.labels, blocks = props.blocks, rowIndex = props.rowIndex, rowCount = props.rowCount, blockType = props.blockType, hasMaxRows = props.hasMaxRows;
    var _useModal = (0, _modal.useModal)(), openModal = _useModal.openModal, closeModal = _useModal.closeModal;
    var drawerSlug = (0, _useDrawerSlug.useDrawerSlug)("blocks-drawer");
    var _React_useState = _sliced_to_array(_react.default.useState(null), 2), indexToAdd = _React_useState[0], setIndexToAdd = _React_useState[1];
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_BlocksDrawer.BlocksDrawer, {
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
    }), /*#__PURE__*/ _react.default.createElement(_ArrayAction.ArrayAction, {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0Jsb2Nrcy9Sb3dBY3Rpb25zLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgQmxvY2ssIExhYmVscyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgQXJyYXlBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9BcnJheUFjdGlvbic7XG5pbXBvcnQgeyB1c2VEcmF3ZXJTbHVnIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvRHJhd2VyL3VzZURyYXdlclNsdWcnO1xuaW1wb3J0IHsgQmxvY2tzRHJhd2VyIH0gZnJvbSAnLi9CbG9ja3NEcmF3ZXInO1xuXG5leHBvcnQgY29uc3QgUm93QWN0aW9uczogUmVhY3QuRkM8e1xuICBhZGRSb3c6IChyb3dJbmRleDogbnVtYmVyLCBibG9ja1R5cGU6IHN0cmluZykgPT4gdm9pZFxuICBkdXBsaWNhdGVSb3c6IChyb3dJbmRleDogbnVtYmVyLCBibG9ja1R5cGU6IHN0cmluZykgPT4gdm9pZFxuICByZW1vdmVSb3c6IChyb3dJbmRleDogbnVtYmVyKSA9PiB2b2lkXG4gIG1vdmVSb3c6IChmcm9tSW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyKSA9PiB2b2lkXG4gIGxhYmVsczogTGFiZWxzXG4gIGJsb2NrczogQmxvY2tbXVxuICByb3dJbmRleDogbnVtYmVyXG4gIHJvd0NvdW50OiBudW1iZXJcbiAgYmxvY2tUeXBlOiBzdHJpbmdcbiAgaGFzTWF4Um93cz86IGJvb2xlYW5cbn0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBhZGRSb3csXG4gICAgZHVwbGljYXRlUm93LFxuICAgIHJlbW92ZVJvdyxcbiAgICBtb3ZlUm93LFxuICAgIGxhYmVscyxcbiAgICBibG9ja3MsXG4gICAgcm93SW5kZXgsXG4gICAgcm93Q291bnQsXG4gICAgYmxvY2tUeXBlLFxuICAgIGhhc01heFJvd3MsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3QgZHJhd2VyU2x1ZyA9IHVzZURyYXdlclNsdWcoJ2Jsb2Nrcy1kcmF3ZXInKTtcblxuICBjb25zdCBbaW5kZXhUb0FkZCwgc2V0SW5kZXhUb0FkZF0gPSBSZWFjdC51c2VTdGF0ZTxudW1iZXIgfCBudWxsPihudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxCbG9ja3NEcmF3ZXJcbiAgICAgICAgZHJhd2VyU2x1Zz17ZHJhd2VyU2x1Z31cbiAgICAgICAgYmxvY2tzPXtibG9ja3N9XG4gICAgICAgIGFkZFJvdz17KF8sIHJvd0Jsb2NrVHlwZSkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgYWRkUm93ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBhZGRSb3coaW5kZXhUb0FkZCwgcm93QmxvY2tUeXBlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2xvc2VNb2RhbChkcmF3ZXJTbHVnKTtcbiAgICAgICAgfX1cbiAgICAgICAgYWRkUm93SW5kZXg9e3Jvd0luZGV4fVxuICAgICAgICBsYWJlbHM9e2xhYmVsc31cbiAgICAgIC8+XG4gICAgICA8QXJyYXlBY3Rpb25cbiAgICAgICAgcm93Q291bnQ9e3Jvd0NvdW50fVxuICAgICAgICBhZGRSb3c9eyhpbmRleCkgPT4ge1xuICAgICAgICAgIHNldEluZGV4VG9BZGQoaW5kZXgpO1xuICAgICAgICAgIG9wZW5Nb2RhbChkcmF3ZXJTbHVnKTtcbiAgICAgICAgfX1cbiAgICAgICAgZHVwbGljYXRlUm93PXsoKSA9PiBkdXBsaWNhdGVSb3cocm93SW5kZXgsIGJsb2NrVHlwZSl9XG4gICAgICAgIG1vdmVSb3c9e21vdmVSb3d9XG4gICAgICAgIHJlbW92ZVJvdz17cmVtb3ZlUm93fVxuICAgICAgICBpbmRleD17cm93SW5kZXh9XG4gICAgICAgIGhhc01heFJvd3M9e2hhc01heFJvd3N9XG4gICAgICAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJvd0FjdGlvbnMiLCJwcm9wcyIsImFkZFJvdyIsImR1cGxpY2F0ZVJvdyIsInJlbW92ZVJvdyIsIm1vdmVSb3ciLCJsYWJlbHMiLCJibG9ja3MiLCJyb3dJbmRleCIsInJvd0NvdW50IiwiYmxvY2tUeXBlIiwiaGFzTWF4Um93cyIsInVzZU1vZGFsIiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsImRyYXdlclNsdWciLCJ1c2VEcmF3ZXJTbHVnIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImluZGV4VG9BZGQiLCJzZXRJbmRleFRvQWRkIiwiRnJhZ21lbnQiLCJCbG9ja3NEcmF3ZXIiLCJfIiwicm93QmxvY2tUeXBlIiwiYWRkUm93SW5kZXgiLCJBcnJheUFjdGlvbiIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7OytCQU9hQTs7O2VBQUFBOzs7NERBUEs7cUJBQ087MkJBRUc7NkJBQ0U7NEJBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEIsSUFBTUEsYUFXUixTQUFDQztJQUNKLElBQ0VDLFNBVUVELE1BVkZDLFFBQ0FDLGVBU0VGLE1BVEZFLGNBQ0FDLFlBUUVILE1BUkZHLFdBQ0FDLFVBT0VKLE1BUEZJLFNBQ0FDLFNBTUVMLE1BTkZLLFFBQ0FDLFNBS0VOLE1BTEZNLFFBQ0FDLFdBSUVQLE1BSkZPLFVBQ0FDLFdBR0VSLE1BSEZRLFVBQ0FDLFlBRUVULE1BRkZTLFdBQ0FDLGFBQ0VWLE1BREZVO0lBR0YsSUFBa0NDLFlBQUFBLElBQUFBLGVBQVEsS0FBbENDLFlBQTBCRCxVQUExQkMsV0FBV0MsYUFBZUYsVUFBZkU7SUFDbkIsSUFBTUMsYUFBYUMsSUFBQUEsNEJBQWEsRUFBQztJQUVqQyxJQUFvQ0MsbUNBQUFBLGNBQUssQ0FBQ0MsUUFBUSxDQUFnQixXQUEzREMsYUFBNkJGLG9CQUFqQkcsZ0JBQWlCSDtJQUVwQyxxQkFDRSw2QkFBQ0EsY0FBSyxDQUFDSSxRQUFRLHNCQUNiLDZCQUFDQywwQkFBWTtRQUNYUCxZQUFZQTtRQUNaUixRQUFRQTtRQUNSTCxRQUFRLFNBQUNxQixHQUFHQztZQUNWLElBQUksT0FBT3RCLFdBQVcsWUFBWTtnQkFDaENBLE9BQU9pQixZQUFZSztZQUNyQjtZQUNBVixXQUFXQztRQUNiO1FBQ0FVLGFBQWFqQjtRQUNiRixRQUFRQTtzQkFFViw2QkFBQ29CLHdCQUFXO1FBQ1ZqQixVQUFVQTtRQUNWUCxRQUFRLFNBQUN5QjtZQUNQUCxjQUFjTztZQUNkZCxVQUFVRTtRQUNaO1FBQ0FaLGNBQWM7bUJBQU1BLGFBQWFLLFVBQVVFOztRQUMzQ0wsU0FBU0E7UUFDVEQsV0FBV0E7UUFDWHVCLE9BQU9uQjtRQUNQRyxZQUFZQTs7QUFJcEIifQ==
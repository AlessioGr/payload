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
import React, { useState } from "react";
import { useConfig } from "../../../utilities/Config";
import CopyToClipboard from "../../CopyToClipboard";
import formatFilesize from "../../../../../uploads/formatFilesize";
import { useDocumentDrawer } from "../../DocumentDrawer";
import Edit from "../../../icons/Edit";
import Tooltip from "../../Tooltip";
import "./index.scss";
var baseClass = "file-meta";
var Meta = function(props) {
    var filename = props.filename, filesize = props.filesize, width = props.width, height = props.height, mimeType = props.mimeType, staticURL = props.staticURL, url = props.url, id = props.id, collection = props.collection;
    var _useState = _sliced_to_array(useState(false), 2), hovered = _useState[0], setHovered = _useState[1];
    var openInDrawer = Boolean(id && collection);
    var _useDocumentDrawer = _sliced_to_array(useDocumentDrawer({
        id: id,
        collectionSlug: collection
    }), 2), DocumentDrawer = _useDocumentDrawer[0], DocumentDrawerToggler = _useDocumentDrawer[1];
    var serverURL = useConfig().serverURL;
    var fileURL = url || "".concat(serverURL).concat(staticURL, "/").concat(filename);
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__url")
    }, openInDrawer && /*#__PURE__*/ React.createElement(DocumentDrawer, null), /*#__PURE__*/ React.createElement("a", {
        href: fileURL,
        target: "_blank",
        rel: "noopener noreferrer"
    }, filename), /*#__PURE__*/ React.createElement(CopyToClipboard, {
        value: fileURL,
        defaultMessage: "Copy URL"
    }), openInDrawer && /*#__PURE__*/ React.createElement(DocumentDrawerToggler, {
        className: "".concat(baseClass, "__edit"),
        onMouseEnter: function() {
            return setHovered(true);
        },
        onMouseLeave: function() {
            return setHovered(false);
        }
    }, /*#__PURE__*/ React.createElement(Edit, null), /*#__PURE__*/ React.createElement(Tooltip, {
        show: hovered
    }, "Edit"))), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__size-type")
    }, formatFilesize(filesize), width && height && /*#__PURE__*/ React.createElement(React.Fragment, null, "\xa0-\xa0", width, "x", height), mimeType && /*#__PURE__*/ React.createElement(React.Fragment, null, "\xa0-\xa0", mimeType)));
};
export default Meta;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0ZpbGVEZXRhaWxzL01ldGEvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IENvcHlUb0NsaXBib2FyZCBmcm9tICcuLi8uLi9Db3B5VG9DbGlwYm9hcmQnO1xuaW1wb3J0IGZvcm1hdEZpbGVzaXplIGZyb20gJy4uLy4uLy4uLy4uLy4uL3VwbG9hZHMvZm9ybWF0RmlsZXNpemUnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHVzZURvY3VtZW50RHJhd2VyIH0gZnJvbSAnLi4vLi4vRG9jdW1lbnREcmF3ZXInO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi4vLi4vLi4vaWNvbnMvRWRpdCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuLi8uLi9Ub29sdGlwJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnZmlsZS1tZXRhJztcblxuY29uc3QgTWV0YTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmaWxlbmFtZSwgZmlsZXNpemUsIHdpZHRoLCBoZWlnaHQsIG1pbWVUeXBlLCBzdGF0aWNVUkwsIHVybCwgaWQsIGNvbGxlY3Rpb24sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbaG92ZXJlZCwgc2V0SG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9wZW5JbkRyYXdlciA9IEJvb2xlYW4oaWQgJiYgY29sbGVjdGlvbik7XG5cbiAgY29uc3QgW1xuICAgIERvY3VtZW50RHJhd2VyLFxuICAgIERvY3VtZW50RHJhd2VyVG9nZ2xlcixcbiAgXSA9IHVzZURvY3VtZW50RHJhd2VyKHtcbiAgICBpZCwgY29sbGVjdGlvblNsdWc6IGNvbGxlY3Rpb24sXG4gIH0pO1xuXG4gIGNvbnN0IHsgc2VydmVyVVJMIH0gPSB1c2VDb25maWcoKTtcblxuICBjb25zdCBmaWxlVVJMID0gdXJsIHx8IGAke3NlcnZlclVSTH0ke3N0YXRpY1VSTH0vJHtmaWxlbmFtZX1gO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdXJsYH0+XG4gICAgICAgIHtvcGVuSW5EcmF3ZXIgJiYgPERvY3VtZW50RHJhd2VyIC8+fVxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9e2ZpbGVVUkx9XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtmaWxlbmFtZX1cbiAgICAgICAgPC9hPlxuICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgdmFsdWU9e2ZpbGVVUkx9XG4gICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9XCJDb3B5IFVSTFwiXG4gICAgICAgIC8+XG4gICAgICAgIHtvcGVuSW5EcmF3ZXJcbiAgICAgICAgICAmJiAoXG4gICAgICAgICAgICA8RG9jdW1lbnREcmF3ZXJUb2dnbGVyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZWRpdGB9XG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZCh0cnVlKX1cbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmVkKGZhbHNlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEVkaXQgLz5cbiAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICBzaG93PXtob3ZlcmVkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8L0RvY3VtZW50RHJhd2VyVG9nZ2xlcj5cbiAgICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fc2l6ZS10eXBlYH0+XG4gICAgICAgIHtmb3JtYXRGaWxlc2l6ZShmaWxlc2l6ZSl9XG4gICAgICAgIHsod2lkdGggJiYgaGVpZ2h0KSAmJiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgJm5ic3A7LSZuYnNwO1xuICAgICAgICAgICAge3dpZHRofVxuICAgICAgICAgICAgeFxuICAgICAgICAgICAge2hlaWdodH1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgICB7bWltZVR5cGUgJiYgKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICZuYnNwOy0mbmJzcDtcbiAgICAgICAgICAgIHttaW1lVHlwZX1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZXRhO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VDb25maWciLCJDb3B5VG9DbGlwYm9hcmQiLCJmb3JtYXRGaWxlc2l6ZSIsInVzZURvY3VtZW50RHJhd2VyIiwiRWRpdCIsIlRvb2x0aXAiLCJiYXNlQ2xhc3MiLCJNZXRhIiwicHJvcHMiLCJmaWxlbmFtZSIsImZpbGVzaXplIiwid2lkdGgiLCJoZWlnaHQiLCJtaW1lVHlwZSIsInN0YXRpY1VSTCIsInVybCIsImlkIiwiY29sbGVjdGlvbiIsImhvdmVyZWQiLCJzZXRIb3ZlcmVkIiwib3BlbkluRHJhd2VyIiwiQm9vbGVhbiIsImNvbGxlY3Rpb25TbHVnIiwiRG9jdW1lbnREcmF3ZXIiLCJEb2N1bWVudERyYXdlclRvZ2dsZXIiLCJzZXJ2ZXJVUkwiLCJmaWxlVVJMIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJ2YWx1ZSIsImRlZmF1bHRNZXNzYWdlIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwic2hvdyIsIkZyYWdtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsUUFBUSxRQUFRLFFBQVE7QUFDeEMsU0FBU0MsU0FBUyxRQUFRLDRCQUE0QjtBQUN0RCxPQUFPQyxxQkFBcUIsd0JBQXdCO0FBQ3BELE9BQU9DLG9CQUFvQix3Q0FBd0M7QUFFbkUsU0FBU0MsaUJBQWlCLFFBQVEsdUJBQXVCO0FBQ3pELE9BQU9DLFVBQVUsc0JBQXNCO0FBQ3ZDLE9BQU9DLGFBQWEsZ0JBQWdCO0FBRXBDLE9BQU8sZUFBZTtBQUV0QixJQUFNQyxZQUFZO0FBRWxCLElBQU1DLE9BQXdCLFNBQUNDO0lBQzdCLElBQ0VDLFdBQ0VELE1BREZDLFVBQVVDLFdBQ1JGLE1BRFFFLFVBQVVDLFFBQ2xCSCxNQURrQkcsT0FBT0MsU0FDekJKLE1BRHlCSSxRQUFRQyxXQUNqQ0wsTUFEaUNLLFVBQVVDLFlBQzNDTixNQUQyQ00sV0FBV0MsTUFDdERQLE1BRHNETyxLQUFLQyxLQUMzRFIsTUFEMkRRLElBQUlDLGFBQy9EVCxNQUQrRFM7SUFHbkUsSUFBOEJsQiw2QkFBQUEsU0FBUyxZQUFoQ21CLFVBQXVCbkIsY0FBZG9CLGFBQWNwQjtJQUM5QixJQUFNcUIsZUFBZUMsUUFBUUwsTUFBTUM7SUFFbkMsSUFHSWQsc0NBQUFBLGtCQUFrQjtRQUNwQmEsSUFBQUE7UUFBSU0sZ0JBQWdCTDtJQUN0QixRQUpFTSxpQkFFRXBCLHVCQURGcUIsd0JBQ0VyQjtJQUlKLElBQU0sQUFBRXNCLFlBQWN6QixZQUFkeUI7SUFFUixJQUFNQyxVQUFVWCxPQUFPLEFBQUMsR0FBY0QsT0FBWlcsV0FBeUJoQixPQUFiSyxXQUFVLEtBQVksT0FBVEw7SUFFbkQscUJBQ0Usb0JBQUNrQjtRQUFJQyxXQUFXdEI7cUJBQ2Qsb0JBQUNxQjtRQUFJQyxXQUFXLEFBQUMsR0FBWSxPQUFWdEIsV0FBVTtPQUMxQmMsOEJBQWdCLG9CQUFDRyxxQ0FDbEIsb0JBQUNNO1FBQ0NDLE1BQU1KO1FBQ05LLFFBQU87UUFDUEMsS0FBSTtPQUVIdkIseUJBRUgsb0JBQUNSO1FBQ0NnQyxPQUFPUDtRQUNQUSxnQkFBZTtRQUVoQmQsOEJBRUcsb0JBQUNJO1FBQ0NJLFdBQVcsQUFBQyxHQUFZLE9BQVZ0QixXQUFVO1FBQ3hCNkIsY0FBYzttQkFBTWhCLFdBQVc7O1FBQy9CaUIsY0FBYzttQkFBTWpCLFdBQVc7O3FCQUUvQixvQkFBQ2YsMkJBQ0Qsb0JBQUNDO1FBQ0NnQyxNQUFNbkI7T0FDUCx5QkFNVCxvQkFBQ1M7UUFBSUMsV0FBVyxBQUFDLEdBQVksT0FBVnRCLFdBQVU7T0FDMUJKLGVBQWVRLFdBQ2YsQUFBQ0MsU0FBU0Msd0JBQ1Qsb0JBQUNkLE1BQU13QyxRQUFRLFFBQUMsYUFFYjNCLE9BQU0sS0FFTkMsU0FHSkMsMEJBQ0Msb0JBQUNmLE1BQU13QyxRQUFRLFFBQUMsYUFFYnpCO0FBTWI7QUFFQSxlQUFlTixLQUFLIn0=
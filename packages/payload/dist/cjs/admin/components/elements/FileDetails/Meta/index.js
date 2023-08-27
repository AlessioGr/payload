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
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _Config = require("../../../utilities/Config");
var _CopyToClipboard = /*#__PURE__*/ _interop_require_default(require("../../CopyToClipboard"));
var _formatFilesize = /*#__PURE__*/ _interop_require_default(require("../../../../../uploads/formatFilesize"));
var _DocumentDrawer = require("../../DocumentDrawer");
var _Edit = /*#__PURE__*/ _interop_require_default(require("../../../icons/Edit"));
var _Tooltip = /*#__PURE__*/ _interop_require_default(require("../../Tooltip"));
require("./index.scss");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var baseClass = "file-meta";
var Meta = function(props) {
    var filename = props.filename, filesize = props.filesize, width = props.width, height = props.height, mimeType = props.mimeType, staticURL = props.staticURL, url = props.url, id = props.id, collection = props.collection;
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), hovered = _useState[0], setHovered = _useState[1];
    var openInDrawer = Boolean(id && collection);
    var _useDocumentDrawer = _sliced_to_array((0, _DocumentDrawer.useDocumentDrawer)({
        id: id,
        collectionSlug: collection
    }), 2), DocumentDrawer = _useDocumentDrawer[0], DocumentDrawerToggler = _useDocumentDrawer[1];
    var serverURL = (0, _Config.useConfig)().serverURL;
    var fileURL = url || "".concat(serverURL).concat(staticURL, "/").concat(filename);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__url")
    }, openInDrawer && /*#__PURE__*/ _react.default.createElement(DocumentDrawer, null), /*#__PURE__*/ _react.default.createElement("a", {
        href: fileURL,
        target: "_blank",
        rel: "noopener noreferrer"
    }, filename), /*#__PURE__*/ _react.default.createElement(_CopyToClipboard.default, {
        value: fileURL,
        defaultMessage: "Copy URL"
    }), openInDrawer && /*#__PURE__*/ _react.default.createElement(DocumentDrawerToggler, {
        className: "".concat(baseClass, "__edit"),
        onMouseEnter: function() {
            return setHovered(true);
        },
        onMouseLeave: function() {
            return setHovered(false);
        }
    }, /*#__PURE__*/ _react.default.createElement(_Edit.default, null), /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
        show: hovered
    }, "Edit"))), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__size-type")
    }, (0, _formatFilesize.default)(filesize), width && height && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, "\xa0-\xa0", width, "x", height), mimeType && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, "\xa0-\xa0", mimeType)));
};
var _default = Meta;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0ZpbGVEZXRhaWxzL01ldGEvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IENvcHlUb0NsaXBib2FyZCBmcm9tICcuLi8uLi9Db3B5VG9DbGlwYm9hcmQnO1xuaW1wb3J0IGZvcm1hdEZpbGVzaXplIGZyb20gJy4uLy4uLy4uLy4uLy4uL3VwbG9hZHMvZm9ybWF0RmlsZXNpemUnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IHVzZURvY3VtZW50RHJhd2VyIH0gZnJvbSAnLi4vLi4vRG9jdW1lbnREcmF3ZXInO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi4vLi4vLi4vaWNvbnMvRWRpdCc7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuLi8uLi9Ub29sdGlwJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnZmlsZS1tZXRhJztcblxuY29uc3QgTWV0YTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmaWxlbmFtZSwgZmlsZXNpemUsIHdpZHRoLCBoZWlnaHQsIG1pbWVUeXBlLCBzdGF0aWNVUkwsIHVybCwgaWQsIGNvbGxlY3Rpb24sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbaG92ZXJlZCwgc2V0SG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9wZW5JbkRyYXdlciA9IEJvb2xlYW4oaWQgJiYgY29sbGVjdGlvbik7XG5cbiAgY29uc3QgW1xuICAgIERvY3VtZW50RHJhd2VyLFxuICAgIERvY3VtZW50RHJhd2VyVG9nZ2xlcixcbiAgXSA9IHVzZURvY3VtZW50RHJhd2VyKHtcbiAgICBpZCwgY29sbGVjdGlvblNsdWc6IGNvbGxlY3Rpb24sXG4gIH0pO1xuXG4gIGNvbnN0IHsgc2VydmVyVVJMIH0gPSB1c2VDb25maWcoKTtcblxuICBjb25zdCBmaWxlVVJMID0gdXJsIHx8IGAke3NlcnZlclVSTH0ke3N0YXRpY1VSTH0vJHtmaWxlbmFtZX1gO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdXJsYH0+XG4gICAgICAgIHtvcGVuSW5EcmF3ZXIgJiYgPERvY3VtZW50RHJhd2VyIC8+fVxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9e2ZpbGVVUkx9XG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtmaWxlbmFtZX1cbiAgICAgICAgPC9hPlxuICAgICAgICA8Q29weVRvQ2xpcGJvYXJkXG4gICAgICAgICAgdmFsdWU9e2ZpbGVVUkx9XG4gICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9XCJDb3B5IFVSTFwiXG4gICAgICAgIC8+XG4gICAgICAgIHtvcGVuSW5EcmF3ZXJcbiAgICAgICAgICAmJiAoXG4gICAgICAgICAgICA8RG9jdW1lbnREcmF3ZXJUb2dnbGVyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZWRpdGB9XG4gICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZCh0cnVlKX1cbiAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmVkKGZhbHNlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEVkaXQgLz5cbiAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICBzaG93PXtob3ZlcmVkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8L0RvY3VtZW50RHJhd2VyVG9nZ2xlcj5cbiAgICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fc2l6ZS10eXBlYH0+XG4gICAgICAgIHtmb3JtYXRGaWxlc2l6ZShmaWxlc2l6ZSl9XG4gICAgICAgIHsod2lkdGggJiYgaGVpZ2h0KSAmJiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgJm5ic3A7LSZuYnNwO1xuICAgICAgICAgICAge3dpZHRofVxuICAgICAgICAgICAgeFxuICAgICAgICAgICAge2hlaWdodH1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgICB7bWltZVR5cGUgJiYgKFxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICZuYnNwOy0mbmJzcDtcbiAgICAgICAgICAgIHttaW1lVHlwZX1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZXRhO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIk1ldGEiLCJwcm9wcyIsImZpbGVuYW1lIiwiZmlsZXNpemUiLCJ3aWR0aCIsImhlaWdodCIsIm1pbWVUeXBlIiwic3RhdGljVVJMIiwidXJsIiwiaWQiLCJjb2xsZWN0aW9uIiwidXNlU3RhdGUiLCJob3ZlcmVkIiwic2V0SG92ZXJlZCIsIm9wZW5JbkRyYXdlciIsIkJvb2xlYW4iLCJ1c2VEb2N1bWVudERyYXdlciIsImNvbGxlY3Rpb25TbHVnIiwiRG9jdW1lbnREcmF3ZXIiLCJEb2N1bWVudERyYXdlclRvZ2dsZXIiLCJzZXJ2ZXJVUkwiLCJ1c2VDb25maWciLCJmaWxlVVJMIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJDb3B5VG9DbGlwYm9hcmQiLCJ2YWx1ZSIsImRlZmF1bHRNZXNzYWdlIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiRWRpdCIsIlRvb2x0aXAiLCJzaG93IiwiZm9ybWF0RmlsZXNpemUiLCJSZWFjdCIsIkZyYWdtZW50Il0sIm1hcHBpbmdzIjoiOzs7OytCQW9GQTs7O2VBQUE7Ozs2REFwRmdDO3NCQUNOO3NFQUNFO3FFQUNEOzhCQUVPOzJEQUNqQjs4REFDRztRQUViOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUEsWUFBWTtBQUVsQixJQUFNQyxPQUF3QixTQUFDQztJQUM3QixJQUNFQyxXQUNFRCxNQURGQyxVQUFVQyxXQUNSRixNQURRRSxVQUFVQyxRQUNsQkgsTUFEa0JHLE9BQU9DLFNBQ3pCSixNQUR5QkksUUFBUUMsV0FDakNMLE1BRGlDSyxVQUFVQyxZQUMzQ04sTUFEMkNNLFdBQVdDLE1BQ3REUCxNQURzRE8sS0FBS0MsS0FDM0RSLE1BRDJEUSxJQUFJQyxhQUMvRFQsTUFEK0RTO0lBR25FLElBQThCQyw2QkFBQUEsSUFBQUEsZUFBUSxFQUFDLFlBQWhDQyxVQUF1QkQsY0FBZEUsYUFBY0Y7SUFDOUIsSUFBTUcsZUFBZUMsUUFBUU4sTUFBTUM7SUFFbkMsSUFHSU0sc0NBQUFBLElBQUFBLGlDQUFpQixFQUFDO1FBQ3BCUCxJQUFBQTtRQUFJUSxnQkFBZ0JQO0lBQ3RCLFFBSkVRLGlCQUVFRix1QkFERkcsd0JBQ0VIO0lBSUosSUFBTSxBQUFFSSxZQUFjQyxJQUFBQSxpQkFBUyxJQUF2QkQ7SUFFUixJQUFNRSxVQUFVZCxPQUFPLEFBQUMsR0FBY0QsT0FBWmEsV0FBeUJsQixPQUFiSyxXQUFVLEtBQVksT0FBVEw7SUFFbkQscUJBQ0UsNkJBQUNxQjtRQUFJQyxXQUFXekI7cUJBQ2QsNkJBQUN3QjtRQUFJQyxXQUFXLEFBQUMsR0FBWSxPQUFWekIsV0FBVTtPQUMxQmUsOEJBQWdCLDZCQUFDSSxxQ0FDbEIsNkJBQUNPO1FBQ0NDLE1BQU1KO1FBQ05LLFFBQU87UUFDUEMsS0FBSTtPQUVIMUIseUJBRUgsNkJBQUMyQix3QkFBZTtRQUNkQyxPQUFPUjtRQUNQUyxnQkFBZTtRQUVoQmpCLDhCQUVHLDZCQUFDSztRQUNDSyxXQUFXLEFBQUMsR0FBWSxPQUFWekIsV0FBVTtRQUN4QmlDLGNBQWM7bUJBQU1uQixXQUFXOztRQUMvQm9CLGNBQWM7bUJBQU1wQixXQUFXOztxQkFFL0IsNkJBQUNxQixhQUFJLHVCQUNMLDZCQUFDQyxnQkFBTztRQUNOQyxNQUFNeEI7T0FDUCx5QkFNVCw2QkFBQ1c7UUFBSUMsV0FBVyxBQUFDLEdBQVksT0FBVnpCLFdBQVU7T0FDMUJzQyxJQUFBQSx1QkFBYyxFQUFDbEMsV0FDZixBQUFDQyxTQUFTQyx3QkFDVCw2QkFBQ2lDLGNBQUssQ0FBQ0MsUUFBUSxRQUFDLGFBRWJuQyxPQUFNLEtBRU5DLFNBR0pDLDBCQUNDLDZCQUFDZ0MsY0FBSyxDQUFDQyxRQUFRLFFBQUMsYUFFYmpDO0FBTWI7SUFFQSxXQUFlTiJ9
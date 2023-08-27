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
var _reactanimateheight = /*#__PURE__*/ _interop_require_default(require("react-animate-height"));
var _reacti18next = require("react-i18next");
var _Thumbnail = /*#__PURE__*/ _interop_require_default(require("../Thumbnail"));
var _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
var _Meta = /*#__PURE__*/ _interop_require_default(require("./Meta"));
var _Chevron = /*#__PURE__*/ _interop_require_default(require("../../icons/Chevron"));
require("./index.scss");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
var baseClass = "file-details";
// sort to the same as imageSizes
var sortSizes = function(sizes, imageSizes) {
    if (!imageSizes || imageSizes.length === 0) return sizes;
    var orderedSizes = {};
    imageSizes.forEach(function(param) {
        var name = param.name;
        if (sizes[name]) {
            orderedSizes[name] = sizes[name];
        }
    });
    return orderedSizes;
};
var FileDetails = function(props) {
    var _Object_keys;
    var doc = props.doc, collection = props.collection, handleRemove = props.handleRemove;
    var _collection_upload = collection.upload, staticURL = _collection_upload.staticURL, imageSizes = _collection_upload.imageSizes, collectionSlug = collection.slug;
    var filename = doc.filename, filesize = doc.filesize, width = doc.width, height = doc.height, mimeType = doc.mimeType, sizes = doc.sizes, url = doc.url, id = doc.id;
    var _useState = _sliced_to_array((0, _react.useState)(function() {
        return sortSizes(sizes, imageSizes);
    }), 2), orderedSizes = _useState[0], setOrderedSizes = _useState[1];
    (0, _react.useEffect)(function() {
        setOrderedSizes(sortSizes(sizes, imageSizes));
    }, [
        sizes,
        imageSizes
    ]);
    var _useState1 = _sliced_to_array((0, _react.useState)(false), 2), moreInfoOpen = _useState1[0], setMoreInfoOpen = _useState1[1];
    var t = (0, _reacti18next.useTranslation)("upload").t;
    var hasSizes = sizes && ((_Object_keys = Object.keys(sizes)) === null || _Object_keys === void 0 ? void 0 : _Object_keys.length) > 0;
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement("header", null, /*#__PURE__*/ _react.default.createElement(_Thumbnail.default, {
        doc: doc,
        collection: collection
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__main-detail")
    }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        staticURL: staticURL,
        filename: filename,
        filesize: filesize,
        width: width,
        height: height,
        mimeType: mimeType,
        url: url,
        id: id,
        collection: collectionSlug
    }), hasSizes && /*#__PURE__*/ _react.default.createElement(_Button.default, {
        className: "".concat(baseClass, "__toggle-more-info").concat(moreInfoOpen ? " open" : ""),
        buttonStyle: "none",
        onClick: function() {
            return setMoreInfoOpen(!moreInfoOpen);
        }
    }, !moreInfoOpen && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, t("moreInfo"), /*#__PURE__*/ _react.default.createElement(_Chevron.default, null)), moreInfoOpen && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, t("lessInfo"), /*#__PURE__*/ _react.default.createElement(_Chevron.default, null)))), handleRemove && /*#__PURE__*/ _react.default.createElement(_Button.default, {
        icon: "x",
        round: true,
        buttonStyle: "icon-label",
        iconStyle: "with-border",
        onClick: handleRemove,
        className: "".concat(baseClass, "__remove")
    })), hasSizes && /*#__PURE__*/ _react.default.createElement(_reactanimateheight.default, {
        className: "".concat(baseClass, "__more-info"),
        height: moreInfoOpen ? "auto" : 0
    }, /*#__PURE__*/ _react.default.createElement("ul", {
        className: "".concat(baseClass, "__sizes")
    }, Object.entries(orderedSizes).map(function(param) {
        var _param = _sliced_to_array(param, 2), key = _param[0], val = _param[1];
        var _val;
        if ((_val = val) === null || _val === void 0 ? void 0 : _val.filename) {
            return /*#__PURE__*/ _react.default.createElement("li", {
                key: key
            }, /*#__PURE__*/ _react.default.createElement("div", {
                className: "".concat(baseClass, "__size-label")
            }, key), /*#__PURE__*/ _react.default.createElement(_Meta.default, _object_spread_props(_object_spread({}, val), {
                mimeType: val.mimeType,
                staticURL: staticURL
            })));
        }
        return null;
    }))));
};
var _default = FileDetails;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0ZpbGVEZXRhaWxzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbmltYXRlSGVpZ2h0IGZyb20gJ3JlYWN0LWFuaW1hdGUtaGVpZ2h0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgVGh1bWJuYWlsIGZyb20gJy4uL1RodW1ibmFpbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgTWV0YSBmcm9tICcuL01ldGEnO1xuaW1wb3J0IENoZXZyb24gZnJvbSAnLi4vLi4vaWNvbnMvQ2hldnJvbic7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgRmlsZVNpemVzLCBVcGxvYWQgfSBmcm9tICcuLi8uLi8uLi8uLi91cGxvYWRzL3R5cGVzJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnZmlsZS1kZXRhaWxzJztcblxuLy8gc29ydCB0byB0aGUgc2FtZSBhcyBpbWFnZVNpemVzXG5jb25zdCBzb3J0U2l6ZXMgPSAoc2l6ZXM6IEZpbGVTaXplcywgaW1hZ2VTaXplczogVXBsb2FkWydpbWFnZVNpemVzJ10pID0+IHtcbiAgaWYgKCFpbWFnZVNpemVzIHx8IGltYWdlU2l6ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gc2l6ZXM7XG5cbiAgY29uc3Qgb3JkZXJlZFNpemVzOiBGaWxlU2l6ZXMgPSB7fTtcblxuICBpbWFnZVNpemVzLmZvckVhY2goKHsgbmFtZSB9KSA9PiB7XG4gICAgaWYgKHNpemVzW25hbWVdKSB7XG4gICAgICBvcmRlcmVkU2l6ZXNbbmFtZV0gPSBzaXplc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBvcmRlcmVkU2l6ZXM7XG59O1xuXG5jb25zdCBGaWxlRGV0YWlsczogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBkb2MsXG4gICAgY29sbGVjdGlvbixcbiAgICBoYW5kbGVSZW1vdmUsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7XG4gICAgdXBsb2FkOiB7XG4gICAgICBzdGF0aWNVUkwsXG4gICAgICBpbWFnZVNpemVzLFxuICAgIH0sXG4gICAgc2x1ZzogY29sbGVjdGlvblNsdWcsXG4gIH0gPSBjb2xsZWN0aW9uO1xuXG4gIGNvbnN0IHtcbiAgICBmaWxlbmFtZSxcbiAgICBmaWxlc2l6ZSxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbWltZVR5cGUsXG4gICAgc2l6ZXMsXG4gICAgdXJsLFxuICAgIGlkLFxuICB9ID0gZG9jO1xuXG4gIGNvbnN0IFtvcmRlcmVkU2l6ZXMsIHNldE9yZGVyZWRTaXplc10gPSB1c2VTdGF0ZTxGaWxlU2l6ZXM+KCgpID0+IHNvcnRTaXplcyhzaXplcywgaW1hZ2VTaXplcykpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0T3JkZXJlZFNpemVzKHNvcnRTaXplcyhzaXplcywgaW1hZ2VTaXplcykpO1xuICB9LCBbc2l6ZXMsIGltYWdlU2l6ZXNdKTtcblxuICBjb25zdCBbbW9yZUluZm9PcGVuLCBzZXRNb3JlSW5mb09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCd1cGxvYWQnKTtcblxuICBjb25zdCBoYXNTaXplcyA9IHNpemVzICYmIE9iamVjdC5rZXlzKHNpemVzKT8ubGVuZ3RoID4gMDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPFRodW1ibmFpbFxuICAgICAgICAgIGRvYz17ZG9jfVxuICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19tYWluLWRldGFpbGB9PlxuICAgICAgICAgIDxNZXRhXG4gICAgICAgICAgICBzdGF0aWNVUkw9e3N0YXRpY1VSTH1cbiAgICAgICAgICAgIGZpbGVuYW1lPXtmaWxlbmFtZSBhcyBzdHJpbmd9XG4gICAgICAgICAgICBmaWxlc2l6ZT17ZmlsZXNpemUgYXMgbnVtYmVyfVxuICAgICAgICAgICAgd2lkdGg9e3dpZHRoIGFzIG51bWJlcn1cbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0IGFzIG51bWJlcn1cbiAgICAgICAgICAgIG1pbWVUeXBlPXttaW1lVHlwZSBhcyBzdHJpbmd9XG4gICAgICAgICAgICB1cmw9e3VybCBhcyBzdHJpbmd9XG4gICAgICAgICAgICBpZD17aWQgYXMgc3RyaW5nfVxuICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvblNsdWcgYXMgc3RyaW5nfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2hhc1NpemVzICYmIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190b2dnbGUtbW9yZS1pbmZvJHttb3JlSW5mb09wZW4gPyAnIG9wZW4nIDogJyd9YH1cbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJub25lXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9yZUluZm9PcGVuKCFtb3JlSW5mb09wZW4pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7IW1vcmVJbmZvT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAge3QoJ21vcmVJbmZvJyl9XG4gICAgICAgICAgICAgICAgICA8Q2hldnJvbiAvPlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHttb3JlSW5mb09wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIHt0KCdsZXNzSW5mbycpfVxuICAgICAgICAgICAgICAgICAgPENoZXZyb24gLz5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtoYW5kbGVSZW1vdmUgJiYgKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGljb249XCJ4XCJcbiAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICBidXR0b25TdHlsZT1cImljb24tbGFiZWxcIlxuICAgICAgICAgICAgaWNvblN0eWxlPVwid2l0aC1ib3JkZXJcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmVtb3ZlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19yZW1vdmVgfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIHtoYXNTaXplcyAmJiAoXG4gICAgICAgIDxBbmltYXRlSGVpZ2h0XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19tb3JlLWluZm9gfVxuICAgICAgICAgIGhlaWdodD17bW9yZUluZm9PcGVuID8gJ2F1dG8nIDogMH1cbiAgICAgICAgPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NpemVzYH0+XG4gICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMob3JkZXJlZFNpemVzKS5tYXAoKFtrZXksIHZhbF0pID0+IHtcbiAgICAgICAgICAgICAgaWYgKHZhbD8uZmlsZW5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NpemUtbGFiZWxgfT5cbiAgICAgICAgICAgICAgICAgICAgICB7a2V5fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPE1ldGFcbiAgICAgICAgICAgICAgICAgICAgICB7Li4udmFsfVxuICAgICAgICAgICAgICAgICAgICAgIG1pbWVUeXBlPXt2YWwubWltZVR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljVVJMPXtzdGF0aWNVUkx9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvQW5pbWF0ZUhlaWdodD5cbiAgICAgICl9XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVEZXRhaWxzO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsInNvcnRTaXplcyIsInNpemVzIiwiaW1hZ2VTaXplcyIsImxlbmd0aCIsIm9yZGVyZWRTaXplcyIsImZvckVhY2giLCJuYW1lIiwiRmlsZURldGFpbHMiLCJwcm9wcyIsIk9iamVjdCIsImRvYyIsImNvbGxlY3Rpb24iLCJoYW5kbGVSZW1vdmUiLCJ1cGxvYWQiLCJzdGF0aWNVUkwiLCJzbHVnIiwiY29sbGVjdGlvblNsdWciLCJmaWxlbmFtZSIsImZpbGVzaXplIiwid2lkdGgiLCJoZWlnaHQiLCJtaW1lVHlwZSIsInVybCIsImlkIiwidXNlU3RhdGUiLCJzZXRPcmRlcmVkU2l6ZXMiLCJ1c2VFZmZlY3QiLCJtb3JlSW5mb09wZW4iLCJzZXRNb3JlSW5mb09wZW4iLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJoYXNTaXplcyIsImtleXMiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJUaHVtYm5haWwiLCJNZXRhIiwiQnV0dG9uIiwiYnV0dG9uU3R5bGUiLCJvbkNsaWNrIiwiUmVhY3QiLCJGcmFnbWVudCIsIkNoZXZyb24iLCJpY29uIiwicm91bmQiLCJpY29uU3R5bGUiLCJBbmltYXRlSGVpZ2h0IiwidWwiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwidmFsIiwibGkiXSwibWFwcGluZ3MiOiI7Ozs7K0JBcUpBOzs7ZUFBQTs7OzZEQXJKMkM7eUVBQ2pCOzRCQUNLO2dFQUNUOzZEQUNIOzJEQUNGOzhEQUNHO1FBSWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUEsWUFBWTtBQUVsQixpQ0FBaUM7QUFDakMsSUFBTUMsWUFBWSxTQUFDQyxPQUFrQkM7SUFDbkMsSUFBSSxDQUFDQSxjQUFjQSxXQUFXQyxNQUFNLEtBQUssR0FBRyxPQUFPRjtJQUVuRCxJQUFNRyxlQUEwQixDQUFDO0lBRWpDRixXQUFXRyxPQUFPLENBQUM7WUFBR0MsYUFBQUE7UUFDcEIsSUFBSUwsS0FBSyxDQUFDSyxLQUFLLEVBQUU7WUFDZkYsWUFBWSxDQUFDRSxLQUFLLEdBQUdMLEtBQUssQ0FBQ0ssS0FBSztRQUNsQztJQUNGO0lBRUEsT0FBT0Y7QUFDVDtBQUVBLElBQU1HLGNBQStCLFNBQUNDO1FBbUNWQztJQWxDMUIsSUFDRUMsTUFHRUYsTUFIRkUsS0FDQUMsYUFFRUgsTUFGRkcsWUFDQUMsZUFDRUosTUFERkk7SUFHRix5QkFNSUQsV0FMRkUsUUFDRUMsK0JBQUFBLFdBQ0FaLGdDQUFBQSxZQUVGYSxBQUFNQyxpQkFDSkwsV0FERkk7SUFHRixJQUNFRSxXQVFFUCxJQVJGTyxVQUNBQyxXQU9FUixJQVBGUSxVQUNBQyxR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
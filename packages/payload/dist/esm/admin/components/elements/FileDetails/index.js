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
import React, { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import { useTranslation } from "react-i18next";
import Thumbnail from "../Thumbnail";
import Button from "../Button";
import Meta from "./Meta";
import Chevron from "../../icons/Chevron";
import "./index.scss";
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
    var _useState = _sliced_to_array(useState(function() {
        return sortSizes(sizes, imageSizes);
    }), 2), orderedSizes = _useState[0], setOrderedSizes = _useState[1];
    useEffect(function() {
        setOrderedSizes(sortSizes(sizes, imageSizes));
    }, [
        sizes,
        imageSizes
    ]);
    var _useState1 = _sliced_to_array(useState(false), 2), moreInfoOpen = _useState1[0], setMoreInfoOpen = _useState1[1];
    var t = useTranslation("upload").t;
    var hasSizes = sizes && ((_Object_keys = Object.keys(sizes)) === null || _Object_keys === void 0 ? void 0 : _Object_keys.length) > 0;
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement("header", null, /*#__PURE__*/ React.createElement(Thumbnail, {
        doc: doc,
        collection: collection
    }), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__main-detail")
    }, /*#__PURE__*/ React.createElement(Meta, {
        staticURL: staticURL,
        filename: filename,
        filesize: filesize,
        width: width,
        height: height,
        mimeType: mimeType,
        url: url,
        id: id,
        collection: collectionSlug
    }), hasSizes && /*#__PURE__*/ React.createElement(Button, {
        className: "".concat(baseClass, "__toggle-more-info").concat(moreInfoOpen ? " open" : ""),
        buttonStyle: "none",
        onClick: function() {
            return setMoreInfoOpen(!moreInfoOpen);
        }
    }, !moreInfoOpen && /*#__PURE__*/ React.createElement(React.Fragment, null, t("moreInfo"), /*#__PURE__*/ React.createElement(Chevron, null)), moreInfoOpen && /*#__PURE__*/ React.createElement(React.Fragment, null, t("lessInfo"), /*#__PURE__*/ React.createElement(Chevron, null)))), handleRemove && /*#__PURE__*/ React.createElement(Button, {
        icon: "x",
        round: true,
        buttonStyle: "icon-label",
        iconStyle: "with-border",
        onClick: handleRemove,
        className: "".concat(baseClass, "__remove")
    })), hasSizes && /*#__PURE__*/ React.createElement(AnimateHeight, {
        className: "".concat(baseClass, "__more-info"),
        height: moreInfoOpen ? "auto" : 0
    }, /*#__PURE__*/ React.createElement("ul", {
        className: "".concat(baseClass, "__sizes")
    }, Object.entries(orderedSizes).map(function(param) {
        var _param = _sliced_to_array(param, 2), key = _param[0], val = _param[1];
        var _val;
        if ((_val = val) === null || _val === void 0 ? void 0 : _val.filename) {
            return /*#__PURE__*/ React.createElement("li", {
                key: key
            }, /*#__PURE__*/ React.createElement("div", {
                className: "".concat(baseClass, "__size-label")
            }, key), /*#__PURE__*/ React.createElement(Meta, _object_spread_props(_object_spread({}, val), {
                mimeType: val.mimeType,
                staticURL: staticURL
            })));
        }
        return null;
    }))));
};
export default FileDetails;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0ZpbGVEZXRhaWxzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbmltYXRlSGVpZ2h0IGZyb20gJ3JlYWN0LWFuaW1hdGUtaGVpZ2h0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgVGh1bWJuYWlsIGZyb20gJy4uL1RodW1ibmFpbCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgTWV0YSBmcm9tICcuL01ldGEnO1xuaW1wb3J0IENoZXZyb24gZnJvbSAnLi4vLi4vaWNvbnMvQ2hldnJvbic7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgRmlsZVNpemVzLCBVcGxvYWQgfSBmcm9tICcuLi8uLi8uLi8uLi91cGxvYWRzL3R5cGVzJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnZmlsZS1kZXRhaWxzJztcblxuLy8gc29ydCB0byB0aGUgc2FtZSBhcyBpbWFnZVNpemVzXG5jb25zdCBzb3J0U2l6ZXMgPSAoc2l6ZXM6IEZpbGVTaXplcywgaW1hZ2VTaXplczogVXBsb2FkWydpbWFnZVNpemVzJ10pID0+IHtcbiAgaWYgKCFpbWFnZVNpemVzIHx8IGltYWdlU2l6ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gc2l6ZXM7XG5cbiAgY29uc3Qgb3JkZXJlZFNpemVzOiBGaWxlU2l6ZXMgPSB7fTtcblxuICBpbWFnZVNpemVzLmZvckVhY2goKHsgbmFtZSB9KSA9PiB7XG4gICAgaWYgKHNpemVzW25hbWVdKSB7XG4gICAgICBvcmRlcmVkU2l6ZXNbbmFtZV0gPSBzaXplc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBvcmRlcmVkU2l6ZXM7XG59O1xuXG5jb25zdCBGaWxlRGV0YWlsczogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBkb2MsXG4gICAgY29sbGVjdGlvbixcbiAgICBoYW5kbGVSZW1vdmUsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7XG4gICAgdXBsb2FkOiB7XG4gICAgICBzdGF0aWNVUkwsXG4gICAgICBpbWFnZVNpemVzLFxuICAgIH0sXG4gICAgc2x1ZzogY29sbGVjdGlvblNsdWcsXG4gIH0gPSBjb2xsZWN0aW9uO1xuXG4gIGNvbnN0IHtcbiAgICBmaWxlbmFtZSxcbiAgICBmaWxlc2l6ZSxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgbWltZVR5cGUsXG4gICAgc2l6ZXMsXG4gICAgdXJsLFxuICAgIGlkLFxuICB9ID0gZG9jO1xuXG4gIGNvbnN0IFtvcmRlcmVkU2l6ZXMsIHNldE9yZGVyZWRTaXplc10gPSB1c2VTdGF0ZTxGaWxlU2l6ZXM+KCgpID0+IHNvcnRTaXplcyhzaXplcywgaW1hZ2VTaXplcykpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0T3JkZXJlZFNpemVzKHNvcnRTaXplcyhzaXplcywgaW1hZ2VTaXplcykpO1xuICB9LCBbc2l6ZXMsIGltYWdlU2l6ZXNdKTtcblxuICBjb25zdCBbbW9yZUluZm9PcGVuLCBzZXRNb3JlSW5mb09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCd1cGxvYWQnKTtcblxuICBjb25zdCBoYXNTaXplcyA9IHNpemVzICYmIE9iamVjdC5rZXlzKHNpemVzKT8ubGVuZ3RoID4gMDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPGhlYWRlcj5cbiAgICAgICAgPFRodW1ibmFpbFxuICAgICAgICAgIGRvYz17ZG9jfVxuICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19tYWluLWRldGFpbGB9PlxuICAgICAgICAgIDxNZXRhXG4gICAgICAgICAgICBzdGF0aWNVUkw9e3N0YXRpY1VSTH1cbiAgICAgICAgICAgIGZpbGVuYW1lPXtmaWxlbmFtZSBhcyBzdHJpbmd9XG4gICAgICAgICAgICBmaWxlc2l6ZT17ZmlsZXNpemUgYXMgbnVtYmVyfVxuICAgICAgICAgICAgd2lkdGg9e3dpZHRoIGFzIG51bWJlcn1cbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0IGFzIG51bWJlcn1cbiAgICAgICAgICAgIG1pbWVUeXBlPXttaW1lVHlwZSBhcyBzdHJpbmd9XG4gICAgICAgICAgICB1cmw9e3VybCBhcyBzdHJpbmd9XG4gICAgICAgICAgICBpZD17aWQgYXMgc3RyaW5nfVxuICAgICAgICAgICAgY29sbGVjdGlvbj17Y29sbGVjdGlvblNsdWcgYXMgc3RyaW5nfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2hhc1NpemVzICYmIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190b2dnbGUtbW9yZS1pbmZvJHttb3JlSW5mb09wZW4gPyAnIG9wZW4nIDogJyd9YH1cbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJub25lXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9yZUluZm9PcGVuKCFtb3JlSW5mb09wZW4pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7IW1vcmVJbmZvT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAge3QoJ21vcmVJbmZvJyl9XG4gICAgICAgICAgICAgICAgICA8Q2hldnJvbiAvPlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHttb3JlSW5mb09wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIHt0KCdsZXNzSW5mbycpfVxuICAgICAgICAgICAgICAgICAgPENoZXZyb24gLz5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtoYW5kbGVSZW1vdmUgJiYgKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGljb249XCJ4XCJcbiAgICAgICAgICAgIHJvdW5kXG4gICAgICAgICAgICBidXR0b25TdHlsZT1cImljb24tbGFiZWxcIlxuICAgICAgICAgICAgaWNvblN0eWxlPVwid2l0aC1ib3JkZXJcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUmVtb3ZlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19yZW1vdmVgfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIHtoYXNTaXplcyAmJiAoXG4gICAgICAgIDxBbmltYXRlSGVpZ2h0XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19tb3JlLWluZm9gfVxuICAgICAgICAgIGhlaWdodD17bW9yZUluZm9PcGVuID8gJ2F1dG8nIDogMH1cbiAgICAgICAgPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NpemVzYH0+XG4gICAgICAgICAgICB7T2JqZWN0LmVudHJpZXMob3JkZXJlZFNpemVzKS5tYXAoKFtrZXksIHZhbF0pID0+IHtcbiAgICAgICAgICAgICAgaWYgKHZhbD8uZmlsZW5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3NpemUtbGFiZWxgfT5cbiAgICAgICAgICAgICAgICAgICAgICB7a2V5fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPE1ldGFcbiAgICAgICAgICAgICAgICAgICAgICB7Li4udmFsfVxuICAgICAgICAgICAgICAgICAgICAgIG1pbWVUeXBlPXt2YWwubWltZVR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljVVJMPXtzdGF0aWNVUkx9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvQW5pbWF0ZUhlaWdodD5cbiAgICAgICl9XG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVEZXRhaWxzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBbmltYXRlSGVpZ2h0IiwidXNlVHJhbnNsYXRpb24iLCJUaHVtYm5haWwiLCJCdXR0b24iLCJNZXRhIiwiQ2hldnJvbiIsImJhc2VDbGFzcyIsInNvcnRTaXplcyIsInNpemVzIiwiaW1hZ2VTaXplcyIsImxlbmd0aCIsIm9yZGVyZWRTaXplcyIsImZvckVhY2giLCJuYW1lIiwiRmlsZURldGFpbHMiLCJwcm9wcyIsIk9iamVjdCIsImRvYyIsImNvbGxlY3Rpb24iLCJoYW5kbGVSZW1vdmUiLCJ1cGxvYWQiLCJzdGF0aWNVUkwiLCJzbHVnIiwiY29sbGVjdGlvblNsdWciLCJmaWxlbmFtZSIsImZpbGVzaXplIiwid2lkdGgiLCJoZWlnaHQiLCJtaW1lVHlwZSIsInVybCIsImlkIiwic2V0T3JkZXJlZFNpemVzIiwibW9yZUluZm9PcGVuIiwic2V0TW9yZUluZm9PcGVuIiwidCIsImhhc1NpemVzIiwia2V5cyIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImJ1dHRvblN0eWxlIiwib25DbGljayIsIkZyYWdtZW50IiwiaWNvbiIsInJvdW5kIiwiaWNvblN0eWxlIiwidWwiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwidmFsIiwibGkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsU0FBUyxFQUFFQyxRQUFRLFFBQVEsUUFBUTtBQUNuRCxPQUFPQyxtQkFBbUIsdUJBQXVCO0FBQ2pELFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDL0MsT0FBT0MsZUFBZSxlQUFlO0FBQ3JDLE9BQU9DLFlBQVksWUFBWTtBQUMvQixPQUFPQyxVQUFVLFNBQVM7QUFDMUIsT0FBT0MsYUFBYSxzQkFBc0I7QUFJMUMsT0FBTyxlQUFlO0FBRXRCLElBQU1DLFlBQVk7QUFFbEIsaUNBQWlDO0FBQ2pDLElBQU1DLFlBQVksU0FBQ0MsT0FBa0JDO0lBQ25DLElBQUksQ0FBQ0EsY0FBY0EsV0FBV0MsTUFBTSxLQUFLLEdBQUcsT0FBT0Y7SUFFbkQsSUFBTUcsZUFBMEIsQ0FBQztJQUVqQ0YsV0FBV0csT0FBTyxDQUFDO1lBQUdDLGFBQUFBO1FBQ3BCLElBQUlMLEtBQUssQ0FBQ0ssS0FBSyxFQUFFO1lBQ2ZGLFlBQVksQ0FBQ0UsS0FBSyxHQUFHTCxLQUFLLENBQUNLLEtBQUs7UUFDbEM7SUFDRjtJQUVBLE9BQU9GO0FBQ1Q7QUFFQSxJQUFNRyxjQUErQixTQUFDQztRQW1DVkM7SUFsQzFCLElBQ0VDLE1BR0VGLE1BSEZFLEtBQ0FDLGFBRUVILE1BRkZHLFlBQ0FDLGVBQ0VKLE1BREZJO0lBR0YseUJBTUlELFdBTEZFLFFBQ0VDLCtC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
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
import React, { Fragment, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ReactEditor, useSlate } from "slate-react";
import ElementButton from "../../Button";
import UploadIcon from "../../../../../../icons/Upload";
import { useListDrawer } from "../../../../../../elements/ListDrawer";
import { injectVoidElement } from "../../injectVoid";
import { EnabledRelationshipsCondition } from "../../EnabledRelationshipsCondition";
import "./index.scss";
var baseClass = "upload-rich-text-button";
var insertUpload = function(editor, param) {
    var value = param.value, relationTo = param.relationTo;
    var text = {
        text: " "
    };
    var upload = {
        type: "upload",
        value: value,
        relationTo: relationTo,
        children: [
            text
        ]
    };
    injectVoidElement(editor, upload);
    ReactEditor.focus(editor);
};
var UploadButton = function(param) {
    var enabledCollectionSlugs = param.enabledCollectionSlugs;
    var t = useTranslation([
        "upload",
        "general"
    ]).t;
    var editor = useSlate();
    var _useListDrawer = _sliced_to_array(useListDrawer({
        uploads: true,
        collectionSlugs: enabledCollectionSlugs
    }), 3), ListDrawer = _useListDrawer[0], ListDrawerToggler = _useListDrawer[1], closeDrawer = _useListDrawer[2].closeDrawer;
    var onSelect = useCallback(function(param) {
        var docID = param.docID, collectionConfig = param.collectionConfig;
        insertUpload(editor, {
            value: {
                id: docID
            },
            relationTo: collectionConfig.slug
        });
        closeDrawer();
    }, [
        editor,
        closeDrawer
    ]);
    return /*#__PURE__*/ React.createElement(Fragment, null, /*#__PURE__*/ React.createElement(ListDrawerToggler, null, /*#__PURE__*/ React.createElement(ElementButton, {
        className: baseClass,
        format: "upload",
        tooltip: t("fields:addUpload"),
        el: "div",
        onClick: function() {
        // do nothing
        }
    }, /*#__PURE__*/ React.createElement(UploadIcon, null))), /*#__PURE__*/ React.createElement(ListDrawer, {
        onSelect: onSelect
    }));
};
export default function(props) {
    return /*#__PURE__*/ React.createElement(EnabledRelationshipsCondition, _object_spread_props(_object_spread({}, props), {
        uploads: true
    }), /*#__PURE__*/ React.createElement(UploadButton, props));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL3VwbG9hZC9CdXR0b24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgUmVhY3RFZGl0b3IsIHVzZVNsYXRlIH0gZnJvbSAnc2xhdGUtcmVhY3QnO1xuaW1wb3J0IEVsZW1lbnRCdXR0b24gZnJvbSAnLi4vLi4vQnV0dG9uJztcbmltcG9ydCBVcGxvYWRJY29uIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ljb25zL1VwbG9hZCc7XG5pbXBvcnQgeyB1c2VMaXN0RHJhd2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZWxlbWVudHMvTGlzdERyYXdlcic7XG5pbXBvcnQgeyBpbmplY3RWb2lkRWxlbWVudCB9IGZyb20gJy4uLy4uL2luamVjdFZvaWQnO1xuaW1wb3J0IHsgRW5hYmxlZFJlbGF0aW9uc2hpcHNDb25kaXRpb24gfSBmcm9tICcuLi8uLi9FbmFibGVkUmVsYXRpb25zaGlwc0NvbmRpdGlvbic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3VwbG9hZC1yaWNoLXRleHQtYnV0dG9uJztcblxuY29uc3QgaW5zZXJ0VXBsb2FkID0gKGVkaXRvciwgeyB2YWx1ZSwgcmVsYXRpb25UbyB9KSA9PiB7XG4gIGNvbnN0IHRleHQgPSB7IHRleHQ6ICcgJyB9O1xuXG4gIGNvbnN0IHVwbG9hZCA9IHtcbiAgICB0eXBlOiAndXBsb2FkJyxcbiAgICB2YWx1ZSxcbiAgICByZWxhdGlvblRvLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB0ZXh0LFxuICAgIF0sXG4gIH07XG5cbiAgaW5qZWN0Vm9pZEVsZW1lbnQoZWRpdG9yLCB1cGxvYWQpO1xuXG4gIFJlYWN0RWRpdG9yLmZvY3VzKGVkaXRvcik7XG59O1xuXG50eXBlIEJ1dHRvblByb3BzID0ge1xuICBwYXRoOiBzdHJpbmdcbiAgZW5hYmxlZENvbGxlY3Rpb25TbHVnczogc3RyaW5nW11cbn1cblxuY29uc3QgVXBsb2FkQnV0dG9uOiBSZWFjdC5GQzxCdXR0b25Qcm9wcz4gPSAoeyBlbmFibGVkQ29sbGVjdGlvblNsdWdzIH0pID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbihbJ3VwbG9hZCcsICdnZW5lcmFsJ10pO1xuICBjb25zdCBlZGl0b3IgPSB1c2VTbGF0ZSgpO1xuXG4gIGNvbnN0IFtcbiAgICBMaXN0RHJhd2VyLFxuICAgIExpc3REcmF3ZXJUb2dnbGVyLFxuICAgIHtcbiAgICAgIGNsb3NlRHJhd2VyLFxuICAgIH0sXG4gIF0gPSB1c2VMaXN0RHJhd2VyKHtcbiAgICB1cGxvYWRzOiB0cnVlLFxuICAgIGNvbGxlY3Rpb25TbHVnczogZW5hYmxlZENvbGxlY3Rpb25TbHVncyxcbiAgfSk7XG5cbiAgY29uc3Qgb25TZWxlY3QgPSB1c2VDYWxsYmFjaygoeyBkb2NJRCwgY29sbGVjdGlvbkNvbmZpZyB9KSA9PiB7XG4gICAgaW5zZXJ0VXBsb2FkKGVkaXRvciwge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgaWQ6IGRvY0lELFxuICAgICAgfSxcbiAgICAgIHJlbGF0aW9uVG86IGNvbGxlY3Rpb25Db25maWcuc2x1ZyxcbiAgICB9KTtcbiAgICBjbG9zZURyYXdlcigpO1xuICB9LCBbZWRpdG9yLCBjbG9zZURyYXdlcl0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPExpc3REcmF3ZXJUb2dnbGVyPlxuICAgICAgICA8RWxlbWVudEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgICAgICAgIGZvcm1hdD1cInVwbG9hZFwiXG4gICAgICAgICAgdG9vbHRpcD17dCgnZmllbGRzOmFkZFVwbG9hZCcpfVxuICAgICAgICAgIGVsPVwiZGl2XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxVcGxvYWRJY29uIC8+XG4gICAgICAgIDwvRWxlbWVudEJ1dHRvbj5cbiAgICAgIDwvTGlzdERyYXdlclRvZ2dsZXI+XG4gICAgICA8TGlzdERyYXdlciBvblNlbGVjdD17b25TZWxlY3R9IC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wczogQnV0dG9uUHJvcHMpOiBSZWFjdC5SZWFjdE5vZGUgPT4ge1xuICByZXR1cm4gKFxuICAgIDxFbmFibGVkUmVsYXRpb25zaGlwc0NvbmRpdGlvblxuICAgICAgey4uLnByb3BzfVxuICAgICAgdXBsb2Fkc1xuICAgID5cbiAgICAgIDxVcGxvYWRCdXR0b24gey4uLnByb3BzfSAvPlxuICAgIDwvRW5hYmxlZFJlbGF0aW9uc2hpcHNDb25kaXRpb24+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRnJhZ21lbnQiLCJ1c2VDYWxsYmFjayIsInVzZVRyYW5zbGF0aW9uIiwiUmVhY3RFZGl0b3IiLCJ1c2VTbGF0ZSIsIkVsZW1lbnRCdXR0b24iLCJVcGxvYWRJY29uIiwidXNlTGlzdERyYXdlciIsImluamVjdFZvaWRFbGVtZW50IiwiRW5hYmxlZFJlbGF0aW9uc2hpcHNDb25kaXRpb24iLCJiYXNlQ2xhc3MiLCJpbnNlcnRVcGxvYWQiLCJlZGl0b3IiLCJ2YWx1ZSIsInJlbGF0aW9uVG8iLCJ0ZXh0IiwidXBsb2FkIiwidHlwZSIsImNoaWxkcmVuIiwiZm9jdXMiLCJVcGxvYWRCdXR0b24iLCJlbmFibGVkQ29sbGVjdGlvblNsdWdzIiwidCIsInVwbG9hZHMiLCJjb2xsZWN0aW9uU2x1Z3MiLCJMaXN0RHJhd2VyIiwiTGlzdERyYXdlclRvZ2dsZXIiLCJjbG9zZURyYXdlciIsIm9uU2VsZWN0IiwiZG9jSUQiLCJjb2xsZWN0aW9uQ29uZmlnIiwiaWQiLCJzbHVnIiwiY2xhc3NOYW1lIiwiZm9ybWF0IiwidG9vbHRpcCIsImVsIiwib25DbGljayIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLFNBQVNDLFFBQVEsRUFBRUMsV0FBVyxRQUFRLFFBQVE7QUFDckQsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxTQUFTQyxXQUFXLEVBQUVDLFFBQVEsUUFBUSxjQUFjO0FBQ3BELE9BQU9DLG1CQUFtQixlQUFlO0FBQ3pDLE9BQU9DLGdCQUFnQixpQ0FBaUM7QUFDeEQsU0FBU0MsYUFBYSxRQUFRLHdDQUF3QztBQUN0RSxTQUFTQyxpQkFBaUIsUUFBUSxtQkFBbUI7QUFDckQsU0FBU0MsNkJBQTZCLFFBQVEsc0NBQXNDO0FBRXBGLE9BQU8sZUFBZTtBQUV0QixJQUFNQyxZQUFZO0FBRWxCLElBQU1DLGVBQWUsU0FBQ0M7UUFBVUMsY0FBQUEsT0FBT0MsbUJBQUFBO0lBQ3JDLElBQU1DLE9BQU87UUFBRUEsTUFBTTtJQUFJO0lBRXpCLElBQU1DLFNBQVM7UUFDYkMsTUFBTTtRQUNOSixPQUFBQTtRQUNBQyxZQUFBQTtRQUNBSSxVQUFVO1lBQ1JIO1NBQ0Q7SUFDSDtJQUVBUCxrQkFBa0JJLFFBQVFJO0lBRTFCYixZQUFZZ0IsS0FBSyxDQUFDUDtBQUNwQjtBQU9BLElBQU1RLGVBQXNDO1FBQUdDLCtCQUFBQTtJQUM3QyxJQUFNLEFBQUVDLElBQU1wQixlQUFlO1FBQUM7UUFBVTtLQUFVLEVBQTFDb0I7SUFDUixJQUFNVixTQUFTUjtJQUVmLElBTUlHLGtDQUFBQSxjQUFjO1FBQ2hCZ0IsU0FBUztRQUNUQyxpQkFBaUJIO0lBQ25CLFFBUkVJLGFBS0VsQixtQkFKRm1CLG9CQUlFbkIsbUJBSEYsQUFDRW9CLGNBRUFwQixrQkFGQW9CO0lBT0osSUFBTUMsV0FBVzNCLFlBQVk7WUFBRzRCLGNBQUFBLE9BQU9DLHlCQUFBQTtRQUNyQ25CLGFBQWFDLFFBQVE7WUFDbkJDLE9BQU87Z0JBQ0xrQixJQUFJRjtZQUNOO1lBQ0FmLFlBQVlnQixpQkFBaUJFLElBQUk7UUFDbkM7UUFDQUw7SUFDRixHQUFHO1FBQUNmO1FBQVFlO0tBQVk7SUFFeEIscUJBQ0Usb0JBQUMzQiw4QkFDQyxvQkFBQzBCLHVDQUNDLG9CQUFDckI7UUFDQzRCLFdBQVd2QjtRQUNYd0IsUUFBTztRQUNQQyxTQUFTYixFQUFFO1FBQ1hjLElBQUc7UUFDSEMsU0FBUztRQUNQLGFBQWE7UUFDZjtxQkFFQSxvQkFBQy9CLG1DQUdMLG9CQUFDbUI7UUFBV0csVUFBVUE7O0FBRzVCO0FBRUEsZUFBZSxTQUFDVTtJQUNkLHFCQUNFLG9CQUFDN0IsdUVBQ0s2QjtRQUNKZixTQUFBQTtzQkFFQSxvQkFBQ0gsY0FBaUJrQjtBQUd4QixFQUFFIn0=
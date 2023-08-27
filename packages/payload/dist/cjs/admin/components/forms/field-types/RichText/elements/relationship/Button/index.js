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
var _slatereact = require("slate-react");
var _reacti18next = require("react-i18next");
var _Button = /*#__PURE__*/ _interop_require_default(require("../../Button"));
var _Relationship = /*#__PURE__*/ _interop_require_default(require("../../../../../../icons/Relationship"));
var _injectVoid = require("../../injectVoid");
var _ListDrawer = require("../../../../../../elements/ListDrawer");
var _EnabledRelationshipsCondition = require("../../EnabledRelationshipsCondition");
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
var baseClass = "relationship-rich-text-button";
var insertRelationship = function(editor, param) {
    var value = param.value, relationTo = param.relationTo;
    var text = {
        text: " "
    };
    var relationship = {
        type: "relationship",
        value: value,
        relationTo: relationTo,
        children: [
            text
        ]
    };
    (0, _injectVoid.injectVoidElement)(editor, relationship);
    _slatereact.ReactEditor.focus(editor);
};
var RelationshipButton = function(param) {
    var enabledCollectionSlugs = param.enabledCollectionSlugs;
    var t = (0, _reacti18next.useTranslation)("fields").t;
    var editor = (0, _slatereact.useSlate)();
    var _useState = _sliced_to_array((0, _react.useState)(function() {
        return enabledCollectionSlugs[0];
    }), 2), selectedCollectionSlug = _useState[0], setSelectedCollectionSlug = _useState[1];
    var _useListDrawer = _sliced_to_array((0, _ListDrawer.useListDrawer)({
        collectionSlugs: enabledCollectionSlugs,
        selectedCollection: selectedCollectionSlug
    }), 3), ListDrawer = _useListDrawer[0], ListDrawerToggler = _useListDrawer[1], _useListDrawer_ = _useListDrawer[2], closeDrawer = _useListDrawer_.closeDrawer, isDrawerOpen = _useListDrawer_.isDrawerOpen;
    var onSelect = (0, _react.useCallback)(function(param) {
        var docID = param.docID, collectionConfig = param.collectionConfig;
        insertRelationship(editor, {
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
    (0, _react.useEffect)(function() {
        // always reset back to first option
        // TODO: this is not working, see the ListDrawer component
        setSelectedCollectionSlug(enabledCollectionSlugs[0]);
    }, [
        isDrawerOpen,
        enabledCollectionSlugs
    ]);
    return /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, /*#__PURE__*/ _react.default.createElement(ListDrawerToggler, null, /*#__PURE__*/ _react.default.createElement(_Button.default, {
        className: baseClass,
        format: "relationship",
        tooltip: t("addRelationship"),
        el: "div",
        onClick: function() {
        // do nothing
        }
    }, /*#__PURE__*/ _react.default.createElement(_Relationship.default, null))), /*#__PURE__*/ _react.default.createElement(ListDrawer, {
        onSelect: onSelect
    }));
};
var _default = function(props) {
    return /*#__PURE__*/ _react.default.createElement(_EnabledRelationshipsCondition.EnabledRelationshipsCondition, props, /*#__PURE__*/ _react.default.createElement(RelationshipButton, props));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL3JlbGF0aW9uc2hpcC9CdXR0b24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdEVkaXRvciwgdXNlU2xhdGUgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IEVsZW1lbnRCdXR0b24gZnJvbSAnLi4vLi4vQnV0dG9uJztcbmltcG9ydCBSZWxhdGlvbnNoaXBJY29uIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ljb25zL1JlbGF0aW9uc2hpcCc7XG5pbXBvcnQgeyBpbmplY3RWb2lkRWxlbWVudCB9IGZyb20gJy4uLy4uL2luamVjdFZvaWQnO1xuaW1wb3J0IHsgdXNlTGlzdERyYXdlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VsZW1lbnRzL0xpc3REcmF3ZXInO1xuaW1wb3J0IHsgRW5hYmxlZFJlbGF0aW9uc2hpcHNDb25kaXRpb24gfSBmcm9tICcuLi8uLi9FbmFibGVkUmVsYXRpb25zaGlwc0NvbmRpdGlvbic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3JlbGF0aW9uc2hpcC1yaWNoLXRleHQtYnV0dG9uJztcblxuY29uc3QgaW5zZXJ0UmVsYXRpb25zaGlwID0gKGVkaXRvciwgeyB2YWx1ZSwgcmVsYXRpb25UbyB9KSA9PiB7XG4gIGNvbnN0IHRleHQgPSB7IHRleHQ6ICcgJyB9O1xuXG4gIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHtcbiAgICB0eXBlOiAncmVsYXRpb25zaGlwJyxcbiAgICB2YWx1ZSxcbiAgICByZWxhdGlvblRvLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB0ZXh0LFxuICAgIF0sXG4gIH07XG5cbiAgaW5qZWN0Vm9pZEVsZW1lbnQoZWRpdG9yLCByZWxhdGlvbnNoaXApO1xuXG4gIFJlYWN0RWRpdG9yLmZvY3VzKGVkaXRvcik7XG59O1xuXG50eXBlIFByb3BzID0ge1xuICBwYXRoOiBzdHJpbmdcbiAgZW5hYmxlZENvbGxlY3Rpb25TbHVnczogc3RyaW5nW11cbn1cbmNvbnN0IFJlbGF0aW9uc2hpcEJ1dHRvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgZW5hYmxlZENvbGxlY3Rpb25TbHVncyB9KSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2ZpZWxkcycpO1xuICBjb25zdCBlZGl0b3IgPSB1c2VTbGF0ZSgpO1xuICBjb25zdCBbc2VsZWN0ZWRDb2xsZWN0aW9uU2x1Zywgc2V0U2VsZWN0ZWRDb2xsZWN0aW9uU2x1Z10gPSB1c2VTdGF0ZSgoKSA9PiBlbmFibGVkQ29sbGVjdGlvblNsdWdzWzBdKTtcbiAgY29uc3QgW1xuICAgIExpc3REcmF3ZXIsXG4gICAgTGlzdERyYXdlclRvZ2dsZXIsXG4gICAge1xuICAgICAgY2xvc2VEcmF3ZXIsXG4gICAgICBpc0RyYXdlck9wZW4sXG4gICAgfSxcbiAgXSA9IHVzZUxpc3REcmF3ZXIoe1xuICAgIGNvbGxlY3Rpb25TbHVnczogZW5hYmxlZENvbGxlY3Rpb25TbHVncyxcbiAgICBzZWxlY3RlZENvbGxlY3Rpb246IHNlbGVjdGVkQ29sbGVjdGlvblNsdWcsXG4gIH0pO1xuXG4gIGNvbnN0IG9uU2VsZWN0ID0gdXNlQ2FsbGJhY2soKHsgZG9jSUQsIGNvbGxlY3Rpb25Db25maWcgfSkgPT4ge1xuICAgIGluc2VydFJlbGF0aW9uc2hpcChlZGl0b3IsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGlkOiBkb2NJRCxcbiAgICAgIH0sXG4gICAgICByZWxhdGlvblRvOiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcsXG4gICAgfSk7XG4gICAgY2xvc2VEcmF3ZXIoKTtcbiAgfSwgW2VkaXRvciwgY2xvc2VEcmF3ZXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGFsd2F5cyByZXNldCBiYWNrIHRvIGZpcnN0IG9wdGlvblxuICAgIC8vIFRPRE86IHRoaXMgaXMgbm90IHdvcmtpbmcsIHNlZSB0aGUgTGlzdERyYXdlciBjb21wb25lbnRcbiAgICBzZXRTZWxlY3RlZENvbGxlY3Rpb25TbHVnKGVuYWJsZWRDb2xsZWN0aW9uU2x1Z3NbMF0pO1xuICB9LCBbaXNEcmF3ZXJPcGVuLCBlbmFibGVkQ29sbGVjdGlvblNsdWdzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TGlzdERyYXdlclRvZ2dsZXI+XG4gICAgICAgIDxFbGVtZW50QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9XG4gICAgICAgICAgZm9ybWF0PVwicmVsYXRpb25zaGlwXCJcbiAgICAgICAgICB0b29sdGlwPXt0KCdhZGRSZWxhdGlvbnNoaXAnKX1cbiAgICAgICAgICBlbD1cImRpdlwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8UmVsYXRpb25zaGlwSWNvbiAvPlxuICAgICAgICA8L0VsZW1lbnRCdXR0b24+XG4gICAgICA8L0xpc3REcmF3ZXJUb2dnbGVyPlxuICAgICAgPExpc3REcmF3ZXIgb25TZWxlY3Q9e29uU2VsZWN0fSAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RW5hYmxlZFJlbGF0aW9uc2hpcHNDb25kaXRpb24gey4uLnByb3BzfT5cbiAgICAgIDxSZWxhdGlvbnNoaXBCdXR0b24gey4uLnByb3BzfSAvPlxuICAgIDwvRW5hYmxlZFJlbGF0aW9uc2hpcHNDb25kaXRpb24+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsImluc2VydFJlbGF0aW9uc2hpcCIsImVkaXRvciIsInZhbHVlIiwicmVsYXRpb25UbyIsInRleHQiLCJyZWxhdGlvbnNoaXAiLCJ0eXBlIiwiY2hpbGRyZW4iLCJpbmplY3RWb2lkRWxlbWVudCIsIlJlYWN0RWRpdG9yIiwiZm9jdXMiLCJSZWxhdGlvbnNoaXBCdXR0b24iLCJlbmFibGVkQ29sbGVjdGlvblNsdWdzIiwidCIsInVzZVRyYW5zbGF0aW9uIiwidXNlU2xhdGUiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkQ29sbGVjdGlvblNsdWciLCJzZXRTZWxlY3RlZENvbGxlY3Rpb25TbHVnIiwidXNlTGlzdERyYXdlciIsImNvbGxlY3Rpb25TbHVncyIsInNlbGVjdGVkQ29sbGVjdGlvbiIsIkxpc3REcmF3ZXIiLCJMaXN0RHJhd2VyVG9nZ2xlciIsImNsb3NlRHJhd2VyIiwiaXNEcmF3ZXJPcGVuIiwib25TZWxlY3QiLCJ1c2VDYWxsYmFjayIsImRvY0lEIiwiY29sbGVjdGlvbkNvbmZpZyIsImlkIiwic2x1ZyIsInVzZUVmZmVjdCIsIkZyYWdtZW50IiwiRWxlbWVudEJ1dHRvbiIsImNsYXNzTmFtZSIsImZvcm1hdCIsInRvb2x0aXAiLCJlbCIsIm9uQ2xpY2siLCJSZWxhdGlvbnNoaXBJY29uIiwicHJvcHMiLCJFbmFibGVkUmVsYXRpb25zaGlwc0NvbmRpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFzRkE7OztlQUFBOzs7NkRBdEZrRTswQkFDNUI7NEJBQ1A7NkRBQ0w7bUVBQ0c7MEJBQ0s7MEJBQ0o7NkNBQ2dCO1FBRXZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVAsSUFBTUEsWUFBWTtBQUVsQixJQUFNQyxxQkFBcUIsU0FBQ0M7UUFBVUMsY0FBQUEsT0FBT0MsbUJBQUFBO0lBQzNDLElBQU1DLE9BQU87UUFBRUEsTUFBTTtJQUFJO0lBRXpCLElBQU1DLGVBQWU7UUFDbkJDLE1BQU07UUFDTkosT0FBQUE7UUFDQUMsWUFBQUE7UUFDQUksVUFBVTtZQUNSSDtTQUNEO0lBQ0g7SUFFQUksSUFBQUEsNkJBQWlCLEVBQUNQLFFBQVFJO0lBRTFCSSx1QkFBVyxDQUFDQyxLQUFLLENBQUNUO0FBQ3BCO0FBTUEsSUFBTVUscUJBQXNDO1FBQUdDLCtCQUFBQTtJQUM3QyxJQUFNLEFBQUVDLElBQU1DLElBQUFBLDRCQUFjLEVBQUMsVUFBckJEO0lBQ1IsSUFBTVosU0FBU2MsSUFBQUEsb0JBQVE7SUFDdkIsSUFBNERDLDZCQUFBQSxJQUFBQSxlQUFRLEVBQUM7ZUFBTUosc0JBQXNCLENBQUMsRUFBRTtZQUE3RksseUJBQXFERCxjQUE3QkUsNEJBQTZCRjtJQUM1RCxJQU9JRyxrQ0FBQUEsSUFBQUEseUJBQWEsRUFBQztRQUNoQkMsaUJBQWlCUjtRQUNqQlMsb0JBQW9CSjtJQUN0QixRQVRFSyxhQU1FSCxtQkFMRkksb0JBS0VKLHFDQUFBQSxtQkFIQUssOEJBQUFBLGFBQ0FDLCtCQUFBQTtJQU9KLElBQU1DLFdBQVdDLElBQUFBLGtCQUFXLEVBQUM7WUFBR0MsY0FBQUEsT0FBT0MseUJBQUFBO1FBQ3JDN0IsbUJBQW1CQyxRQUFRO1lBQ3pCQyxPQUFPO2dCQUNMNEIsSUFBSUY7WUFDTjtZQUNBekIsWUFBWTBCLGlCQUFpQkUsSUFBSTtRQUNuQztRQUNBUDtJQUNGLEdBQUc7UUFBQ3ZCO1FBQVF1QjtLQUFZO0lBRXhCUSxJQUFBQSxnQkFBUyxFQUFDO1FBQ1Isb0NBQW9DO1FBQ3BDLDBEQUEwRDtRQUMxRGQsMEJBQTBCTixzQkFBc0IsQ0FBQyxFQUFFO0lBQ3JELEdBQUc7UUFBQ2E7UUFBY2I7S0FBdUI7SUFFekMscUJBQ0UsNkJBQUNxQixlQUFRLHNCQUNQLDZCQUFDVix1Q0FDQyw2QkFBQ1csZUFBYTtRQUNaQyxXQUFXcEM7UUFDWHFDLFFBQU87UUFDUEMsU0FBU3hCLEVBQUU7UUFDWHlCLElBQUc7UUFDSEMsU0FBUztRQUNQLGFBQWE7UUFDZjtxQkFFQSw2QkFBQ0MscUJBQWdCLHlCQUdyQiw2QkFBQ2xCO1FBQVdJLFVBQVVBOztBQUc1QjtJQUVBLFdBQWUsU0FBQ2U7SUFDZCxxQkFDRSw2QkFBQ0MsNERBQTZCLEVBQUtELHFCQUNqQyw2QkFBQzlCLG9CQUF1QjhCO0FBRzlCIn0=
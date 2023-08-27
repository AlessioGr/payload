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
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { ReactEditor, useSlate } from "slate-react";
import { useTranslation } from "react-i18next";
import ElementButton from "../../Button";
import RelationshipIcon from "../../../../../../icons/Relationship";
import { injectVoidElement } from "../../injectVoid";
import { useListDrawer } from "../../../../../../elements/ListDrawer";
import { EnabledRelationshipsCondition } from "../../EnabledRelationshipsCondition";
import "./index.scss";
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
    injectVoidElement(editor, relationship);
    ReactEditor.focus(editor);
};
var RelationshipButton = function(param) {
    var enabledCollectionSlugs = param.enabledCollectionSlugs;
    var t = useTranslation("fields").t;
    var editor = useSlate();
    var _useState = _sliced_to_array(useState(function() {
        return enabledCollectionSlugs[0];
    }), 2), selectedCollectionSlug = _useState[0], setSelectedCollectionSlug = _useState[1];
    var _useListDrawer = _sliced_to_array(useListDrawer({
        collectionSlugs: enabledCollectionSlugs,
        selectedCollection: selectedCollectionSlug
    }), 3), ListDrawer = _useListDrawer[0], ListDrawerToggler = _useListDrawer[1], _useListDrawer_ = _useListDrawer[2], closeDrawer = _useListDrawer_.closeDrawer, isDrawerOpen = _useListDrawer_.isDrawerOpen;
    var onSelect = useCallback(function(param) {
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
    useEffect(function() {
        // always reset back to first option
        // TODO: this is not working, see the ListDrawer component
        setSelectedCollectionSlug(enabledCollectionSlugs[0]);
    }, [
        isDrawerOpen,
        enabledCollectionSlugs
    ]);
    return /*#__PURE__*/ React.createElement(Fragment, null, /*#__PURE__*/ React.createElement(ListDrawerToggler, null, /*#__PURE__*/ React.createElement(ElementButton, {
        className: baseClass,
        format: "relationship",
        tooltip: t("addRelationship"),
        el: "div",
        onClick: function() {
        // do nothing
        }
    }, /*#__PURE__*/ React.createElement(RelationshipIcon, null))), /*#__PURE__*/ React.createElement(ListDrawer, {
        onSelect: onSelect
    }));
};
export default function(props) {
    return /*#__PURE__*/ React.createElement(EnabledRelationshipsCondition, props, /*#__PURE__*/ React.createElement(RelationshipButton, props));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL3JlbGF0aW9uc2hpcC9CdXR0b24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdEVkaXRvciwgdXNlU2xhdGUgfSBmcm9tICdzbGF0ZS1yZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IEVsZW1lbnRCdXR0b24gZnJvbSAnLi4vLi4vQnV0dG9uJztcbmltcG9ydCBSZWxhdGlvbnNoaXBJY29uIGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ljb25zL1JlbGF0aW9uc2hpcCc7XG5pbXBvcnQgeyBpbmplY3RWb2lkRWxlbWVudCB9IGZyb20gJy4uLy4uL2luamVjdFZvaWQnO1xuaW1wb3J0IHsgdXNlTGlzdERyYXdlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2VsZW1lbnRzL0xpc3REcmF3ZXInO1xuaW1wb3J0IHsgRW5hYmxlZFJlbGF0aW9uc2hpcHNDb25kaXRpb24gfSBmcm9tICcuLi8uLi9FbmFibGVkUmVsYXRpb25zaGlwc0NvbmRpdGlvbic7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3JlbGF0aW9uc2hpcC1yaWNoLXRleHQtYnV0dG9uJztcblxuY29uc3QgaW5zZXJ0UmVsYXRpb25zaGlwID0gKGVkaXRvciwgeyB2YWx1ZSwgcmVsYXRpb25UbyB9KSA9PiB7XG4gIGNvbnN0IHRleHQgPSB7IHRleHQ6ICcgJyB9O1xuXG4gIGNvbnN0IHJlbGF0aW9uc2hpcCA9IHtcbiAgICB0eXBlOiAncmVsYXRpb25zaGlwJyxcbiAgICB2YWx1ZSxcbiAgICByZWxhdGlvblRvLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB0ZXh0LFxuICAgIF0sXG4gIH07XG5cbiAgaW5qZWN0Vm9pZEVsZW1lbnQoZWRpdG9yLCByZWxhdGlvbnNoaXApO1xuXG4gIFJlYWN0RWRpdG9yLmZvY3VzKGVkaXRvcik7XG59O1xuXG50eXBlIFByb3BzID0ge1xuICBwYXRoOiBzdHJpbmdcbiAgZW5hYmxlZENvbGxlY3Rpb25TbHVnczogc3RyaW5nW11cbn1cbmNvbnN0IFJlbGF0aW9uc2hpcEJ1dHRvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgZW5hYmxlZENvbGxlY3Rpb25TbHVncyB9KSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2ZpZWxkcycpO1xuICBjb25zdCBlZGl0b3IgPSB1c2VTbGF0ZSgpO1xuICBjb25zdCBbc2VsZWN0ZWRDb2xsZWN0aW9uU2x1Zywgc2V0U2VsZWN0ZWRDb2xsZWN0aW9uU2x1Z10gPSB1c2VTdGF0ZSgoKSA9PiBlbmFibGVkQ29sbGVjdGlvblNsdWdzWzBdKTtcbiAgY29uc3QgW1xuICAgIExpc3REcmF3ZXIsXG4gICAgTGlzdERyYXdlclRvZ2dsZXIsXG4gICAge1xuICAgICAgY2xvc2VEcmF3ZXIsXG4gICAgICBpc0RyYXdlck9wZW4sXG4gICAgfSxcbiAgXSA9IHVzZUxpc3REcmF3ZXIoe1xuICAgIGNvbGxlY3Rpb25TbHVnczogZW5hYmxlZENvbGxlY3Rpb25TbHVncyxcbiAgICBzZWxlY3RlZENvbGxlY3Rpb246IHNlbGVjdGVkQ29sbGVjdGlvblNsdWcsXG4gIH0pO1xuXG4gIGNvbnN0IG9uU2VsZWN0ID0gdXNlQ2FsbGJhY2soKHsgZG9jSUQsIGNvbGxlY3Rpb25Db25maWcgfSkgPT4ge1xuICAgIGluc2VydFJlbGF0aW9uc2hpcChlZGl0b3IsIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGlkOiBkb2NJRCxcbiAgICAgIH0sXG4gICAgICByZWxhdGlvblRvOiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcsXG4gICAgfSk7XG4gICAgY2xvc2VEcmF3ZXIoKTtcbiAgfSwgW2VkaXRvciwgY2xvc2VEcmF3ZXJdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGFsd2F5cyByZXNldCBiYWNrIHRvIGZpcnN0IG9wdGlvblxuICAgIC8vIFRPRE86IHRoaXMgaXMgbm90IHdvcmtpbmcsIHNlZSB0aGUgTGlzdERyYXdlciBjb21wb25lbnRcbiAgICBzZXRTZWxlY3RlZENvbGxlY3Rpb25TbHVnKGVuYWJsZWRDb2xsZWN0aW9uU2x1Z3NbMF0pO1xuICB9LCBbaXNEcmF3ZXJPcGVuLCBlbmFibGVkQ29sbGVjdGlvblNsdWdzXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TGlzdERyYXdlclRvZ2dsZXI+XG4gICAgICAgIDxFbGVtZW50QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9XG4gICAgICAgICAgZm9ybWF0PVwicmVsYXRpb25zaGlwXCJcbiAgICAgICAgICB0b29sdGlwPXt0KCdhZGRSZWxhdGlvbnNoaXAnKX1cbiAgICAgICAgICBlbD1cImRpdlwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8UmVsYXRpb25zaGlwSWNvbiAvPlxuICAgICAgICA8L0VsZW1lbnRCdXR0b24+XG4gICAgICA8L0xpc3REcmF3ZXJUb2dnbGVyPlxuICAgICAgPExpc3REcmF3ZXIgb25TZWxlY3Q9e29uU2VsZWN0fSAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IFByb3BzKTogUmVhY3QuUmVhY3ROb2RlID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RW5hYmxlZFJlbGF0aW9uc2hpcHNDb25kaXRpb24gey4uLnByb3BzfT5cbiAgICAgIDxSZWxhdGlvbnNoaXBCdXR0b24gey4uLnByb3BzfSAvPlxuICAgIDwvRW5hYmxlZFJlbGF0aW9uc2hpcHNDb25kaXRpb24+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRnJhZ21lbnQiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUmVhY3RFZGl0b3IiLCJ1c2VTbGF0ZSIsInVzZVRyYW5zbGF0aW9uIiwiRWxlbWVudEJ1dHRvbiIsIlJlbGF0aW9uc2hpcEljb24iLCJpbmplY3RWb2lkRWxlbWVudCIsInVzZUxpc3REcmF3ZXIiLCJFbmFibGVkUmVsYXRpb25zaGlwc0NvbmRpdGlvbiIsImJhc2VDbGFzcyIsImluc2VydFJlbGF0aW9uc2hpcCIsImVkaXRvciIsInZhbHVlIiwicmVsYXRpb25UbyIsInRleHQiLCJyZWxhdGlvbnNoaXAiLCJ0eXBlIiwiY2hpbGRyZW4iLCJmb2N1cyIsIlJlbGF0aW9uc2hpcEJ1dHRvbiIsImVuYWJsZWRDb2xsZWN0aW9uU2x1Z3MiLCJ0Iiwic2VsZWN0ZWRDb2xsZWN0aW9uU2x1ZyIsInNldFNlbGVjdGVkQ29sbGVjdGlvblNsdWciLCJjb2xsZWN0aW9uU2x1Z3MiLCJzZWxlY3RlZENvbGxlY3Rpb24iLCJMaXN0RHJhd2VyIiwiTGlzdERyYXdlclRvZ2dsZXIiLCJjbG9zZURyYXdlciIsImlzRHJhd2VyT3BlbiIsIm9uU2VsZWN0IiwiZG9jSUQiLCJjb2xsZWN0aW9uQ29uZmlnIiwiaWQiLCJzbHVnIiwiY2xhc3NOYW1lIiwiZm9ybWF0IiwidG9vbHRpcCIsImVsIiwib25DbGljayIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsUUFBUSxFQUFFQyxXQUFXLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxRQUFRLFFBQVE7QUFDMUUsU0FBU0MsV0FBVyxFQUFFQyxRQUFRLFFBQVEsY0FBYztBQUNwRCxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLE9BQU9DLG1CQUFtQixlQUFlO0FBQ3pDLE9BQU9DLHNCQUFzQix1Q0FBdUM7QUFDcEUsU0FBU0MsaUJBQWlCLFFBQVEsbUJBQW1CO0FBQ3JELFNBQVNDLGFBQWEsUUFBUSx3Q0FBd0M7QUFDdEUsU0FBU0MsNkJBQTZCLFFBQVEsc0NBQXNDO0FBRXBGLE9BQU8sZUFBZTtBQUV0QixJQUFNQyxZQUFZO0FBRWxCLElBQU1DLHFCQUFxQixTQUFDQztRQUFVQyxjQUFBQSxPQUFPQyxtQkFBQUE7SUFDM0MsSUFBTUMsT0FBTztRQUFFQSxNQUFNO0lBQUk7SUFFekIsSUFBTUMsZUFBZTtRQUNuQkMsTUFBTTtRQUNOSixPQUFBQTtRQUNBQyxZQUFBQTtRQUNBSSxVQUFVO1lBQ1JIO1NBQ0Q7SUFDSDtJQUVBUixrQkFBa0JLLFFBQVFJO0lBRTFCZCxZQUFZaUIsS0FBSyxDQUFDUDtBQUNwQjtBQU1BLElBQU1RLHFCQUFzQztRQUFHQywrQkFBQUE7SUFDN0MsSUFBTSxBQUFFQyxJQUFNbEIsZUFBZSxVQUFyQmtCO0lBQ1IsSUFBTVYsU0FBU1Q7SUFDZixJQUE0REYsNkJBQUFBLFNBQVM7ZUFBTW9CLHNCQUFzQixDQUFDLEVBQUU7WUFBN0ZFLHlCQUFxRHRCLGNBQTdCdUIsNEJBQTZCdkI7SUFDNUQsSUFPSU8sa0NBQUFBLGNBQWM7UUFDaEJpQixpQkFBaUJKO1FBQ2pCSyxvQkFBb0JIO0lBQ3RCLFFBVEVJLGFBTUVuQixtQkFMRm9CLG9CQUtFcEIscUNBQUFBLG1CQUhBcUIsOEJBQUFBLGFBQ0FDLCtCQUFBQTtJQU9KLElBQU1DLFdBQVdoQyxZQUFZO1lBQUdpQyxjQUFBQSxPQUFPQyx5QkFBQUE7UUFDckN0QixtQkFBbUJDLFFBQVE7WUFDekJDLE9BQU87Z0JBQ0xxQixJQUFJRjtZQUNOO1lBQ0FsQixZQUFZbUIsaUJBQWlCRSxJQUFJO1FBQ25DO1FBQ0FOO0lBQ0YsR0FBRztRQUFDakI7UUFBUWlCO0tBQVk7SUFFeEI3QixVQUFVO1FBQ1Isb0NBQW9DO1FBQ3BDLDBEQUEwRDtRQUMxRHdCLDBCQUEwQkgsc0JBQXNCLENBQUMsRUFBRTtJQUNyRCxHQUFHO1FBQUNTO1FBQWNUO0tBQXVCO0lBRXpDLHFCQUNFLG9CQUFDdkIsOEJBQ0Msb0JBQUM4Qix1Q0FDQyxvQkFBQ3ZCO1FBQ0MrQixXQUFXMUI7UUFDWDJCLFFBQU87UUFDUEMsU0FBU2hCLEVBQUU7UUFDWGlCLElBQUc7UUFDSEMsU0FBUztRQUNQLGFBQWE7UUFDZjtxQkFFQSxvQkFBQ2xDLHlDQUdMLG9CQUFDcUI7UUFBV0ksVUFBVUE7O0FBRzVCO0FBRUEsZUFBZSxTQUFDVTtJQUNkLHFCQUNFLG9CQUFDaEMsK0JBQWtDZ0MscUJBQ2pDLG9CQUFDckIsb0JBQXVCcUI7QUFHOUIsRUFBRSJ9
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
import React, { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { components } from "react-select";
import { useDocumentDrawer } from "../../../../../elements/DocumentDrawer";
import Tooltip from "../../../../../elements/Tooltip";
import Edit from "../../../../../icons/Edit";
import { useAuth } from "../../../../../utilities/Auth";
import "./index.scss";
var baseClass = "relationship--multi-value-label";
export var MultiValueLabel = function(props) {
    var _permissions_collections_relationTo_read, _permissions_collections_relationTo, _permissions_collections, _permissions, _value;
    var _props_data = props.data, value = _props_data.value, relationTo = _props_data.relationTo, label = _props_data.label, tmp = props.selectProps, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.// @ts-ignore // TODO: Fix types
    customProps, _ref1 = tmp1 === void 0 ? {} : tmp1, // @ts-ignore // TODO: Fix types
    setDrawerIsOpen = _ref1.setDrawerIsOpen, // @ts-ignore // TODO: Fix types
    draggableProps = _ref1.draggableProps;
    var permissions = useAuth().permissions;
    var _useState = _sliced_to_array(useState(false), 2), showTooltip = _useState[0], setShowTooltip = _useState[1];
    var t = useTranslation("general").t;
    var hasReadPermission = Boolean((_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_collections = _permissions.collections) === null || _permissions_collections === void 0 ? void 0 : (_permissions_collections_relationTo = _permissions_collections[relationTo]) === null || _permissions_collections_relationTo === void 0 ? void 0 : (_permissions_collections_relationTo_read = _permissions_collections_relationTo.read) === null || _permissions_collections_relationTo_read === void 0 ? void 0 : _permissions_collections_relationTo_read.permission);
    var _useDocumentDrawer = _sliced_to_array(useDocumentDrawer({
        id: (_value = value) === null || _value === void 0 ? void 0 : _value.toString(),
        collectionSlug: relationTo
    }), 3), DocumentDrawer = _useDocumentDrawer[0], DocumentDrawerToggler = _useDocumentDrawer[1], isDrawerOpen = _useDocumentDrawer[2].isDrawerOpen;
    useEffect(function() {
        if (typeof setDrawerIsOpen === "function") setDrawerIsOpen(isDrawerOpen);
    }, [
        isDrawerOpen,
        setDrawerIsOpen
    ]);
    return /*#__PURE__*/ React.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__content")
    }, /*#__PURE__*/ React.createElement(components.MultiValueLabel, _object_spread_props(_object_spread({}, props), {
        innerProps: _object_spread({
            className: "".concat(baseClass, "__text")
        }, draggableProps || {})
    }))), relationTo && hasReadPermission && /*#__PURE__*/ React.createElement(Fragment, null, /*#__PURE__*/ React.createElement(DocumentDrawerToggler, {
        className: "".concat(baseClass, "__drawer-toggler"),
        "aria-label": "Edit ".concat(label),
        onTouchEnd: function(e) {
            return e.stopPropagation();
        },
        onMouseDown: function(e) {
            return e.stopPropagation();
        },
        onMouseEnter: function() {
            return setShowTooltip(true);
        },
        onMouseLeave: function() {
            return setShowTooltip(false);
        },
        onClick: function() {
            return setShowTooltip(false);
        }
    }, /*#__PURE__*/ React.createElement(Tooltip, {
        className: "".concat(baseClass, "__tooltip"),
        show: showTooltip
    }, t("editLabel", {
        label: ""
    })), /*#__PURE__*/ React.createElement(Edit, null)), /*#__PURE__*/ React.createElement(DocumentDrawer, {
        onSave: null
    })));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9zZWxlY3QtY29tcG9uZW50cy9NdWx0aVZhbHVlTGFiZWwvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBjb21wb25lbnRzLCBNdWx0aVZhbHVlUHJvcHMgfSBmcm9tICdyZWFjdC1zZWxlY3QnO1xuaW1wb3J0IHsgdXNlRG9jdW1lbnREcmF3ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9lbGVtZW50cy9Eb2N1bWVudERyYXdlcic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuLi8uLi8uLi8uLi8uLi9lbGVtZW50cy9Ub29sdGlwJztcbmltcG9ydCBFZGl0IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ljb25zL0VkaXQnO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9BdXRoJztcbmltcG9ydCB7IE9wdGlvbiB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncmVsYXRpb25zaGlwLS1tdWx0aS12YWx1ZS1sYWJlbCc7XG5cbmV4cG9ydCBjb25zdCBNdWx0aVZhbHVlTGFiZWw6IFJlYWN0LkZDPE11bHRpVmFsdWVQcm9wczxPcHRpb24+PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZGF0YToge1xuICAgICAgdmFsdWUsXG4gICAgICByZWxhdGlvblRvLFxuICAgICAgbGFiZWwsXG4gICAgfSxcbiAgICBzZWxlY3RQcm9wczoge1xuICAgICAgLy8gQHRzLWlnbm9yZSAvLyBUT0RPOiBGaXggdHlwZXNcbiAgICAgIGN1c3RvbVByb3BzOiB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgLy8gVE9ETzogRml4IHR5cGVzXG4gICAgICAgIHNldERyYXdlcklzT3BlbixcbiAgICAgICAgLy8gQHRzLWlnbm9yZSAvLyBUT0RPOiBGaXggdHlwZXNcbiAgICAgICAgZHJhZ2dhYmxlUHJvcHMsXG4gICAgICAgIC8vIG9uU2F2ZSxcbiAgICAgIH0gPSB7fSxcbiAgICB9ID0ge30sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IHBlcm1pc3Npb25zIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IFtzaG93VG9vbHRpcCwgc2V0U2hvd1Rvb2x0aXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG4gIGNvbnN0IGhhc1JlYWRQZXJtaXNzaW9uID0gQm9vbGVhbihwZXJtaXNzaW9ucz8uY29sbGVjdGlvbnM/LltyZWxhdGlvblRvXT8ucmVhZD8ucGVybWlzc2lvbik7XG5cbiAgY29uc3QgW0RvY3VtZW50RHJhd2VyLCBEb2N1bWVudERyYXdlclRvZ2dsZXIsIHsgaXNEcmF3ZXJPcGVuIH1dID0gdXNlRG9jdW1lbnREcmF3ZXIoe1xuICAgIGlkOiB2YWx1ZT8udG9TdHJpbmcoKSxcbiAgICBjb2xsZWN0aW9uU2x1ZzogcmVsYXRpb25UbyxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHNldERyYXdlcklzT3BlbiA9PT0gJ2Z1bmN0aW9uJykgc2V0RHJhd2VySXNPcGVuKGlzRHJhd2VyT3Blbik7XG4gIH0sIFtpc0RyYXdlck9wZW4sIHNldERyYXdlcklzT3Blbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Jhc2VDbGFzc30+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fY29udGVudGB9PlxuICAgICAgICA8Y29tcG9uZW50cy5NdWx0aVZhbHVlTGFiZWxcbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgaW5uZXJQcm9wcz17e1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBgJHtiYXNlQ2xhc3N9X190ZXh0YCxcbiAgICAgICAgICAgIC4uLmRyYWdnYWJsZVByb3BzIHx8IHt9LFxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtyZWxhdGlvblRvICYmIGhhc1JlYWRQZXJtaXNzaW9uICYmIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxEb2N1bWVudERyYXdlclRvZ2dsZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fZHJhd2VyLXRvZ2dsZXJgfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17YEVkaXQgJHtsYWJlbH1gfVxuICAgICAgICAgICAgb25Ub3VjaEVuZD17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9IC8vIHByZXZlbnRzIHJlYWN0LXNlbGVjdCBkcm9wZG93biBmcm9tIG9wZW5pbmdcbiAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0gLy8gcHJldmVudHMgcmVhY3Qtc2VsZWN0IGRyb3Bkb3duIGZyb20gb3BlbmluZ1xuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRTaG93VG9vbHRpcCh0cnVlKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U2hvd1Rvb2x0aXAoZmFsc2UpfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1Rvb2x0aXAoZmFsc2UpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdG9vbHRpcGB9XG4gICAgICAgICAgICAgIHNob3c9e3Nob3dUb29sdGlwfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7dCgnZWRpdExhYmVsJywgeyBsYWJlbDogJycgfSl9XG4gICAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgICAgICA8RWRpdCAvPlxuICAgICAgICAgIDwvRG9jdW1lbnREcmF3ZXJUb2dnbGVyPlxuICAgICAgICAgIDxEb2N1bWVudERyYXdlciBvblNhdmU9ey8qIG9uU2F2ZSAqL251bGx9IC8+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkZyYWdtZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VUcmFuc2xhdGlvbiIsImNvbXBvbmVudHMiLCJ1c2VEb2N1bWVudERyYXdlciIsIlRvb2x0aXAiLCJFZGl0IiwidXNlQXV0aCIsImJhc2VDbGFzcyIsIk11bHRpVmFsdWVMYWJlbCIsInByb3BzIiwicGVybWlzc2lvbnMiLCJ2YWx1ZSIsImRhdGEiLCJyZWxhdGlvblRvIiwibGFiZWwiLCJzZWxlY3RQcm9wcyIsImN1c3RvbVByb3BzIiwic2V0RHJhd2VySXNPcGVuIiwiZHJhZ2dhYmxlUHJvcHMiLCJzaG93VG9vbHRpcCIsInNldFNob3dUb29sdGlwIiwidCIsImhhc1JlYWRQZXJtaXNzaW9uIiwiQm9vbGVhbiIsImNvbGxlY3Rpb25zIiwicmVhZCIsInBlcm1pc3Npb24iLCJpZCIsInRvU3RyaW5nIiwiY29sbGVjdGlvblNsdWciLCJEb2N1bWVudERyYXdlciIsIkRvY3VtZW50RHJhd2VyVG9nZ2xlciIsImlzRHJhd2VyT3BlbiIsImRpdiIsImNsYXNzTmFtZSIsImlubmVyUHJvcHMiLCJhcmlhLWxhYmVsIiwib25Ub3VjaEVuZCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJvbk1vdXNlRG93biIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIm9uQ2xpY2siLCJzaG93Iiwib25TYXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
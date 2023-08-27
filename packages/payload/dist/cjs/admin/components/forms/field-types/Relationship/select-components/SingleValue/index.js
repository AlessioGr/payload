"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SingleValue", {
    enumerable: true,
    get: function() {
        return SingleValue;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reacti18next = require("react-i18next");
var _reactselect = require("react-select");
var _DocumentDrawer = require("../../../../../elements/DocumentDrawer");
var _Tooltip = /*#__PURE__*/ _interop_require_default(require("../../../../../elements/Tooltip"));
var _Edit = /*#__PURE__*/ _interop_require_default(require("../../../../../icons/Edit"));
var _Auth = require("../../../../../utilities/Auth");
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
var baseClass = "relationship--single-value";
var SingleValue = function(props) {
    var _permissions_collections_relationTo_read, _permissions_collections_relationTo, _permissions_collections, _permissions;
    var _props_data = props.data, value = _props_data.value, relationTo = _props_data.relationTo, label = _props_data.label, children = props.children, tmp = props.selectProps, _ref = tmp === void 0 ? {} : tmp, tmp1 = _ref.// @ts-ignore // TODO: Fix types
    customProps, _ref1 = tmp1 === void 0 ? {} : tmp1, // @ts-ignore // TODO: Fix types
    setDrawerIsOpen = _ref1.setDrawerIsOpen, // @ts-ignore // TODO: Fix types
    onSave = _ref1.onSave;
    var _useState = _sliced_to_array((0, _react.useState)(false), 2), showTooltip = _useState[0], setShowTooltip = _useState[1];
    var t = (0, _reacti18next.useTranslation)("general").t;
    var permissions = (0, _Auth.useAuth)().permissions;
    var hasReadPermission = Boolean((_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_collections = _permissions.collections) === null || _permissions_collections === void 0 ? void 0 : (_permissions_collections_relationTo = _permissions_collections[relationTo]) === null || _permissions_collections_relationTo === void 0 ? void 0 : (_permissions_collections_relationTo_read = _permissions_collections_relationTo.read) === null || _permissions_collections_relationTo_read === void 0 ? void 0 : _permissions_collections_relationTo_read.permission);
    var _useDocumentDrawer = _sliced_to_array((0, _DocumentDrawer.useDocumentDrawer)({
        id: value.toString(),
        collectionSlug: relationTo
    }), 3), DocumentDrawer = _useDocumentDrawer[0], DocumentDrawerToggler = _useDocumentDrawer[1], isDrawerOpen = _useDocumentDrawer[2].isDrawerOpen;
    (0, _react.useEffect)(function() {
        if (typeof setDrawerIsOpen === "function") {
            setDrawerIsOpen(isDrawerOpen);
        }
    }, [
        isDrawerOpen,
        setDrawerIsOpen
    ]);
    return /*#__PURE__*/ _react.default.createElement(_reactselect.components.SingleValue, _object_spread_props(_object_spread({}, props), {
        className: baseClass
    }), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__label-text")
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__text")
    }, children), relationTo && hasReadPermission && /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, /*#__PURE__*/ _react.default.createElement(DocumentDrawerToggler, {
        className: "".concat(baseClass, "__drawer-toggler"),
        "aria-label": t("editLabel", {
            label: label
        }),
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
    }, /*#__PURE__*/ _react.default.createElement(_Tooltip.default, {
        className: "".concat(baseClass, "__tooltip"),
        show: showTooltip
    }, t("edit")), /*#__PURE__*/ _react.default.createElement(_Edit.default, null))))), relationTo && hasReadPermission && /*#__PURE__*/ _react.default.createElement(DocumentDrawer, {
        onSave: onSave
    }));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9zZWxlY3QtY29tcG9uZW50cy9TaW5nbGVWYWx1ZS9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IGNvbXBvbmVudHMgYXMgU2VsZWN0Q29tcG9uZW50cywgU2luZ2xlVmFsdWVQcm9wcyB9IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5pbXBvcnQgeyB1c2VEb2N1bWVudERyYXdlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2VsZW1lbnRzL0RvY3VtZW50RHJhd2VyJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4uLy4uLy4uLy4uLy4uL2VsZW1lbnRzL1Rvb2x0aXAnO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi4vLi4vLi4vLi4vLi4vaWNvbnMvRWRpdCc7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0F1dGgnO1xuaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAncmVsYXRpb25zaGlwLS1zaW5nbGUtdmFsdWUnO1xuXG5leHBvcnQgY29uc3QgU2luZ2xlVmFsdWU6IFJlYWN0LkZDPFNpbmdsZVZhbHVlUHJvcHM8T3B0aW9uPj4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGRhdGE6IHtcbiAgICAgIHZhbHVlLFxuICAgICAgcmVsYXRpb25UbyxcbiAgICAgIGxhYmVsLFxuICAgIH0sXG4gICAgY2hpbGRyZW4sXG4gICAgc2VsZWN0UHJvcHM6IHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgLy8gVE9ETzogRml4IHR5cGVzXG4gICAgICBjdXN0b21Qcm9wczoge1xuICAgICAgICAvLyBAdHMtaWdub3JlIC8vIFRPRE86IEZpeCB0eXBlc1xuICAgICAgICBzZXREcmF3ZXJJc09wZW4sXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgLy8gVE9ETzogRml4IHR5cGVzXG4gICAgICAgIG9uU2F2ZSxcbiAgICAgIH0gPSB7fSxcbiAgICB9ID0ge30sXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbc2hvd1Rvb2x0aXAsIHNldFNob3dUb29sdGlwXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuICBjb25zdCB7IHBlcm1pc3Npb25zIH0gPSB1c2VBdXRoKCk7XG4gIGNvbnN0IGhhc1JlYWRQZXJtaXNzaW9uID0gQm9vbGVhbihwZXJtaXNzaW9ucz8uY29sbGVjdGlvbnM/LltyZWxhdGlvblRvXT8ucmVhZD8ucGVybWlzc2lvbik7XG5cbiAgY29uc3QgW0RvY3VtZW50RHJhd2VyLCBEb2N1bWVudERyYXdlclRvZ2dsZXIsIHsgaXNEcmF3ZXJPcGVuIH1dID0gdXNlRG9jdW1lbnREcmF3ZXIoe1xuICAgIGlkOiB2YWx1ZS50b1N0cmluZygpLFxuICAgIGNvbGxlY3Rpb25TbHVnOiByZWxhdGlvblRvLFxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygc2V0RHJhd2VySXNPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBzZXREcmF3ZXJJc09wZW4oaXNEcmF3ZXJPcGVuKTtcbiAgICB9XG4gIH0sIFtpc0RyYXdlck9wZW4sIHNldERyYXdlcklzT3Blbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPFNlbGVjdENvbXBvbmVudHMuU2luZ2xlVmFsdWVcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19sYWJlbGB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fbGFiZWwtdGV4dGB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X190ZXh0YH0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3JlbGF0aW9uVG8gJiYgaGFzUmVhZFBlcm1pc3Npb24gJiYgKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICA8RG9jdW1lbnREcmF3ZXJUb2dnbGVyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X19kcmF3ZXItdG9nZ2xlcmB9XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dCgnZWRpdExhYmVsJywgeyBsYWJlbCB9KX1cbiAgICAgICAgICAgICAgICBvblRvdWNoRW5kPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0gLy8gcHJldmVudHMgcmVhY3Qtc2VsZWN0IGRyb3Bkb3duIGZyb20gb3BlbmluZ1xuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0gLy8gcHJldmVudHMgcmVhY3Qtc2VsZWN0IGRyb3Bkb3duIGZyb20gb3BlbmluZ1xuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2hvd1Rvb2x0aXAodHJ1ZSl9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaG93VG9vbHRpcChmYWxzZSl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd1Rvb2x0aXAoZmFsc2UpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdG9vbHRpcGB9XG4gICAgICAgICAgICAgICAgICBzaG93PXtzaG93VG9vbHRpcH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dCgnZWRpdCcpfVxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICA8RWRpdCAvPlxuICAgICAgICAgICAgICA8L0RvY3VtZW50RHJhd2VyVG9nZ2xlcj5cbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtyZWxhdGlvblRvICYmIGhhc1JlYWRQZXJtaXNzaW9uICYmIChcbiAgICAgICAgPERvY3VtZW50RHJhd2VyIG9uU2F2ZT17b25TYXZlfSAvPlxuICAgICAgKX1cbiAgICA8L1NlbGVjdENvbXBvbmVudHMuU2luZ2xlVmFsdWU+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlNpbmdsZVZhbHVlIiwiYmFzZUNsYXNzIiwicHJvcHMiLCJwZXJtaXNzaW9ucyIsImRhdGEiLCJ2YWx1ZSIsInJlbGF0aW9uVG8iLCJsYWJlbCIsImNoaWxkcmVuIiwic2VsZWN0UHJvcHMiLCJjdXN0b21Qcm9wcyIsInNldERyYXdlcklzT3BlbiIsIm9uU2F2ZSIsInVzZVN0YXRlIiwic2hvd1Rvb2x0aXAiLCJzZXRTaG93VG9vbHRpcCIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZUF1dGgiLCJoYXNSZWFkUGVybWlzc2lvbiIsIkJvb2xlYW4iLCJjb2xsZWN0aW9ucyIsInJlYWQiLCJwZXJtaXNzaW9uIiwidXNlRG9jdW1lbnREcmF3ZXIiLCJpZCIsInRvU3RyaW5nIiwiY29sbGVjdGlvblNsdWciLCJEb2N1bWVudERyYXdlciIsIkRvY3VtZW50RHJhd2VyVG9nZ2xlciIsImlzRHJhd2VyT3BlbiIsInVzZUVmZmVjdCIsIlNlbGVjdENvbXBvbmVudHMiLCJjbGFzc05hbWUiLCJkaXYiLCJGcmFnbWVudCIsImFyaWEtbGFiZWwiLCJvblRvdWNoRW5kIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIm9uTW91c2VEb3duIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwib25DbGljayIsIlRvb2x0aXAiLCJzaG93IiwiRWRpdCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFZYUE7OztlQUFBQTs7OzZEQVp3Qzs0QkFDdEI7MkJBQ2tDOzhCQUMvQjs4REFDZDsyREFDSDtvQkFDTztRQUVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUCxJQUFNQyxZQUFZO0FBRVgsSUFBTUQsY0FBa0QsU0FBQ0U7UUFzQjVCQywwQ0FBQUEscUNBQUFBLDBCQUFBQTtJQXJCbEMsa0JBZ0JJRCxNQWZGRSxNQUNFQyxvQkFBQUEsT0FDQUMseUJBQUFBLFlBQ0FDLG9CQUFBQSxPQUVGQyxXQVVFTixNQVZGTSxVQUNhLE1BU1hOLE1BVEZPLG9CQUFhLGlCQVFULENBQUMsSUFSUSxLQUVFLFlBRGIsZ0NBQWdDO0lBQ2hDQyxxQkFBYSxrQkFLVCxDQUFDLElBTFEsTUFDWCxnQ0FBZ0M7SUFDaENDLHdCQUFBQSxpQkFDQSxnQ0FBZ0M7SUFDaENDLGVBQUFBO0lBS04sSUFBc0NDLDZCQUFBQSxJQUFBQSxlQUFRLEVBQUMsWUFBeENDLGNBQStCRCxjQUFsQkUsaUJBQWtCRjtJQUN0QyxJQUFNLEFBQUVHLElBQU1DLElBQUFBLDRCQUFjLEVBQUMsV0FBckJEO0lBQ1IsSUFBTSxBQUFFYixjQUFnQmUsSUFBQUEsYUFBTyxJQUF2QmY7SUFDUixJQUFNZ0Isb0JBQW9CQyxTQUFRakIsZUFBQUEseUJBQUFBLG9DQUFBQSwyQkFBQUEsYUFBYWtCLFdBQVcsY0FBeEJsQixnREFBQUEsc0NBQUFBLHdCQUEwQixDQUFDRyxXQUFXLGNBQXRDSCwyREFBQUEsMkNBQUFBLG9DQUF3Q21CLElBQUksY0FBNUNuQiwrREFBQUEseUNBQThDb0IsVUFBVTtJQUUxRixJQUFrRUMsc0NBQUFBLElBQUFBLGlDQUFpQixFQUFDO1FBQ2xGQyxJQUFJcEIsTUFBTXFCLFFBQVE7UUFDbEJDLGdCQUFnQnJCO0lBQ2xCLFFBSE9zQixpQkFBMkRKLHVCQUEzQ0ssd0JBQTJDTCx1QkFBcEIsQUFBRU0sZUFBa0JOLHNCQUFsQk07SUFLaERDLElBQUFBLGdCQUFTLEVBQUM7UUFDUixJQUFJLE9BQU9wQixvQkFBb0IsWUFBWTtZQUN6Q0EsZ0JBQWdCbUI7UUFDbEI7SUFDRixHQUFHO1FBQUNBO1FBQWNuQjtLQUFnQjtJQUVsQyxxQkFDRSw2QkFBQ3FCLHVCQUFnQixDQUFDaEMsV0FBVywwQ0FDdkJFO1FBQ0orQixXQUFXaEM7c0JBRVgsNkJBQUNpQztRQUFJRCxXQUFXLEFBQUMsR0FBWSxPQUFWaEMsV0FBVTtxQkFDM0IsNkJBQUNpQztRQUFJRCxXQUFXLEFBQUMsR0FBWSxPQUFWaEMsV0FBVTtxQkFDM0IsNkJBQUNpQztRQUFJRCxXQUFXLEFBQUMsR0FBWSxPQUFWaEMsV0FBVTtPQUMxQk8sV0FFRkYsY0FBY2EsbUNBQ2IsNkJBQUNnQixlQUFRLHNCQUNQLDZCQUFDTjtRQUNDSSxXQUFXLEFBQUMsR0FBWSxPQUFWaEMsV0FBVTtRQUN4Qm1DLGNBQVlwQixFQUFFLGFBQWE7WUFBRVQsT0FBQUE7UUFBTTtRQUNuQzhCLFlBQVksU0FBQ0M7bUJBQU1BLEVBQUVDLGVBQWU7O1FBQ3BDQyxhQUFhLFNBQUNGO21CQUFNQSxFQUFFQyxlQUFlOztRQUNyQ0UsY0FBYzttQkFBTTFCLGVBQWU7O1FBQ25DMkIsY0FBYzttQkFBTTNCLGVBQWU7O1FBQ25DNEIsU0FBUzttQkFBTTVCLGVBQWU7O3FCQUU5Qiw2QkFBQzZCLGdCQUFPO1FBQ05YLFdBQVcsQUFBQyxHQUFZLE9BQVZoQyxXQUFVO1FBQ3hCNEMsTUFBTS9CO09BRUxFLEVBQUUsd0JBRUwsNkJBQUM4QixhQUFJLGFBTWR4QyxjQUFjYSxtQ0FDYiw2QkFBQ1M7UUFBZWhCLFFBQVFBOztBQUloQyJ9
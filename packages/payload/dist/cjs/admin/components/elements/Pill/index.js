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
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reactrouterdom = require("react-router-dom");
var _useDraggableSortable = require("../DraggableSortable/useDraggableSortable");
require("./index.scss");
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
var baseClass = "pill";
var DraggablePill = function(props) {
    var className = props.className, id = props.id;
    var _useDraggableSortable1 = (0, _useDraggableSortable.useDraggableSortable)({
        id: id
    }), attributes = _useDraggableSortable1.attributes, listeners = _useDraggableSortable1.listeners, transform = _useDraggableSortable1.transform, setNodeRef = _useDraggableSortable1.setNodeRef, isDragging = _useDraggableSortable1.isDragging;
    return /*#__PURE__*/ _react.default.createElement(StaticPill, _object_spread_props(_object_spread({}, props), {
        className: [
            isDragging && "".concat(baseClass, "--is-dragging"),
            className
        ].filter(Boolean).join(" "),
        elementProps: _object_spread_props(_object_spread({}, listeners, attributes), {
            style: {
                transform: transform
            },
            ref: setNodeRef
        })
    }));
};
var StaticPill = function(props) {
    var className = props.className, to = props.to, icon = props.icon, _props_alignIcon = props.alignIcon, alignIcon = _props_alignIcon === void 0 ? "right" : _props_alignIcon, onClick = props.onClick, _props_pillStyle = props.pillStyle, pillStyle = _props_pillStyle === void 0 ? "light" : _props_pillStyle, draggable = props.draggable, children = props.children, elementProps = props.elementProps, rounded = props.rounded, ariaLabel = props["aria-label"], ariaExpanded = props["aria-expanded"], ariaControls = props["aria-controls"], ariaChecked = props["aria-checked"];
    var classes = [
        baseClass,
        "".concat(baseClass, "--style-").concat(pillStyle),
        className && className,
        to && "".concat(baseClass, "--has-link"),
        (to || onClick) && "".concat(baseClass, "--has-action"),
        icon && "".concat(baseClass, "--has-icon"),
        icon && "".concat(baseClass, "--align-icon-").concat(alignIcon),
        draggable && "".concat(baseClass, "--draggable"),
        rounded && "".concat(baseClass, "--rounded")
    ].filter(Boolean).join(" ");
    var Element = "div";
    if (onClick && !to) Element = "button";
    if (to) Element = _reactrouterdom.Link;
    return /*#__PURE__*/ _react.default.createElement(Element, _object_spread_props(_object_spread({}, elementProps), {
        "aria-label": ariaLabel,
        "aria-expanded": ariaExpanded,
        "aria-controls": ariaControls,
        "aria-checked": ariaChecked,
        className: classes,
        type: Element === "button" ? "button" : undefined,
        to: to || undefined,
        onClick: onClick
    }), icon && alignIcon === "left" && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, icon), children, icon && alignIcon === "right" && /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, icon));
};
var Pill = function(props) {
    var draggable = props.draggable;
    if (draggable) return /*#__PURE__*/ _react.default.createElement(DraggablePill, props);
    return /*#__PURE__*/ _react.default.createElement(StaticPill, props);
};
var _default = Pill;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1BpbGwvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBFbGVtZW50VHlwZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFByb3BzLCBSZW5kZXJlZFR5cGVQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlRHJhZ2dhYmxlU29ydGFibGUgfSBmcm9tICcuLi9EcmFnZ2FibGVTb3J0YWJsZS91c2VEcmFnZ2FibGVTb3J0YWJsZSc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3BpbGwnO1xuXG5jb25zdCBEcmFnZ2FibGVQaWxsOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGlkIH0gPSBwcm9wcztcblxuICBjb25zdCB7IGF0dHJpYnV0ZXMsIGxpc3RlbmVycywgdHJhbnNmb3JtLCBzZXROb2RlUmVmLCBpc0RyYWdnaW5nIH0gPSB1c2VEcmFnZ2FibGVTb3J0YWJsZSh7XG4gICAgaWQsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFN0YXRpY1BpbGxcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICBpc0RyYWdnaW5nICYmIGAke2Jhc2VDbGFzc30tLWlzLWRyYWdnaW5nYCxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgICAgZWxlbWVudFByb3BzPXt7XG4gICAgICAgIC4uLmxpc3RlbmVycyxcbiAgICAgICAgLi4uYXR0cmlidXRlcyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB0cmFuc2Zvcm0sXG4gICAgICAgIH0sXG4gICAgICAgIHJlZjogc2V0Tm9kZVJlZixcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn07XG5cbmNvbnN0IFN0YXRpY1BpbGw6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lLFxuICAgIHRvLFxuICAgIGljb24sXG4gICAgYWxpZ25JY29uID0gJ3JpZ2h0JyxcbiAgICBvbkNsaWNrLFxuICAgIHBpbGxTdHlsZSA9ICdsaWdodCcsXG4gICAgZHJhZ2dhYmxlLFxuICAgIGNoaWxkcmVuLFxuICAgIGVsZW1lbnRQcm9wcyxcbiAgICByb3VuZGVkLFxuICAgICdhcmlhLWxhYmVsJzogYXJpYUxhYmVsLFxuICAgICdhcmlhLWV4cGFuZGVkJzogYXJpYUV4cGFuZGVkLFxuICAgICdhcmlhLWNvbnRyb2xzJzogYXJpYUNvbnRyb2xzLFxuICAgICdhcmlhLWNoZWNrZWQnOiBhcmlhQ2hlY2tlZCxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgIGAke2Jhc2VDbGFzc30tLXN0eWxlLSR7cGlsbFN0eWxlfWAsXG4gICAgY2xhc3NOYW1lICYmIGNsYXNzTmFtZSxcbiAgICB0byAmJiBgJHtiYXNlQ2xhc3N9LS1oYXMtbGlua2AsXG4gICAgKHRvIHx8IG9uQ2xpY2spICYmIGAke2Jhc2VDbGFzc30tLWhhcy1hY3Rpb25gLFxuICAgIGljb24gJiYgYCR7YmFzZUNsYXNzfS0taGFzLWljb25gLFxuICAgIGljb24gJiYgYCR7YmFzZUNsYXNzfS0tYWxpZ24taWNvbi0ke2FsaWduSWNvbn1gLFxuICAgIGRyYWdnYWJsZSAmJiBgJHtiYXNlQ2xhc3N9LS1kcmFnZ2FibGVgLFxuICAgIHJvdW5kZWQgJiYgYCR7YmFzZUNsYXNzfS0tcm91bmRlZGAsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICBsZXQgRWxlbWVudDogRWxlbWVudFR5cGUgfCBSZWFjdC5GQzxSZW5kZXJlZFR5cGVQcm9wcz4gPSAnZGl2JztcblxuICBpZiAob25DbGljayAmJiAhdG8pIEVsZW1lbnQgPSAnYnV0dG9uJztcbiAgaWYgKHRvKSBFbGVtZW50ID0gTGluaztcblxuICByZXR1cm4gKFxuICAgIDxFbGVtZW50XG4gICAgICB7Li4uZWxlbWVudFByb3BzfVxuICAgICAgYXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuICAgICAgYXJpYS1leHBhbmRlZD17YXJpYUV4cGFuZGVkfVxuICAgICAgYXJpYS1jb250cm9scz17YXJpYUNvbnRyb2xzfVxuICAgICAgYXJpYS1jaGVja2VkPXthcmlhQ2hlY2tlZH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIHR5cGU9e0VsZW1lbnQgPT09ICdidXR0b24nID8gJ2J1dHRvbicgOiB1bmRlZmluZWR9XG4gICAgICB0bz17dG8gfHwgdW5kZWZpbmVkfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICB7KGljb24gJiYgYWxpZ25JY29uID09PSAnbGVmdCcpICYmIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIHtpY29ufVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHsoaWNvbiAmJiBhbGlnbkljb24gPT09ICdyaWdodCcpICYmIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIHtpY29ufVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L0VsZW1lbnQ+XG4gICk7XG59O1xuXG5jb25zdCBQaWxsOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBkcmFnZ2FibGUgfSA9IHByb3BzO1xuXG4gIGlmIChkcmFnZ2FibGUpIHJldHVybiA8RHJhZ2dhYmxlUGlsbCB7Li4ucHJvcHN9IC8+O1xuICByZXR1cm4gPFN0YXRpY1BpbGwgey4uLnByb3BzfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBpbGw7XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiRHJhZ2dhYmxlUGlsbCIsInByb3BzIiwiY2xhc3NOYW1lIiwiaWQiLCJ1c2VEcmFnZ2FibGVTb3J0YWJsZSIsImF0dHJpYnV0ZXMiLCJsaXN0ZW5lcnMiLCJ0cmFuc2Zvcm0iLCJzZXROb2RlUmVmIiwiaXNEcmFnZ2luZyIsIlN0YXRpY1BpbGwiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImVsZW1lbnRQcm9wcyIsInN0eWxlIiwicmVmIiwidG8iLCJpY29uIiwiYWxpZ25JY29uIiwib25DbGljayIsInBpbGxTdHlsZSIsImRyYWdnYWJsZSIsImNoaWxkcmVuIiwicm91bmRlZCIsImFyaWFMYWJlbCIsImFyaWFFeHBhbmRlZCIsImFyaWFDb250cm9scyIsImFyaWFDaGVja2VkIiwiY2xhc3NlcyIsIkVsZW1lbnQiLCJMaW5rIiwiYXJpYS1sYWJlbCIsImFyaWEtZXhwYW5kZWQiLCJhcmlhLWNvbnRyb2xzIiwiYXJpYS1jaGVja2VkIiwidHlwZSIsInVuZGVmaW5lZCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJQaWxsIl0sIm1hcHBpbmdzIjoiOzs7OytCQXdHQTs7O2VBQUE7Ozs0REF4R21DOzhCQUNkO29DQUVnQjtRQUU5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsZ0JBQWlDLFNBQUNDO0lBQ3RDLElBQVFDLFlBQWtCRCxNQUFsQkMsV0FBV0MsS0FBT0YsTUFBUEU7SUFFbkIsSUFBcUVDLHlCQUFBQSxJQUFBQSwwQ0FBb0IsRUFBQztRQUN4RkQsSUFBQUE7SUFDRixJQUZRRSxhQUE2REQsdUJBQTdEQyxZQUFZQyxZQUFpREYsdUJBQWpERSxXQUFXQyxZQUFzQ0gsdUJBQXRDRyxXQUFXQyxhQUEyQkosdUJBQTNCSSxZQUFZQyxhQUFlTCx1QkFBZks7SUFJdEQscUJBQ0UsNkJBQUNDLG9EQUNLVDtRQUNKQyxXQUFXO1lBQ1RPLGNBQWMsQUFBQyxHQUFZLE9BQVZWLFdBQVU7WUFDM0JHO1NBQ0QsQ0FBQ1MsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7UUFDdkJDLGNBQWMsd0NBQ1RSLFdBQ0FEO1lBQ0hVLE9BQU87Z0JBQ0xSLFdBQUFBO1lBQ0Y7WUFDQVMsS0FBS1I7OztBQUliO0FBRUEsSUFBTUUsYUFBOEIsU0FBQ1Q7SUFDbkMsSUFDRUMsWUFjRUQsTUFkRkMsV0FDQWUsS0FhRWhCLE1BYkZnQixJQUNBQyxPQVlFakIsTUFaRmlCLHlCQVlFakIsTUFYRmtCLFdBQUFBLDBDQUFZLDRCQUNaQyxVQVVFbkIsTUFWRm1CLDRCQVVFbkIsTUFURm9CLFdBQUFBLDBDQUFZLDRCQUNaQyxZQVFFckIsTUFSRnFCLFdBQ0FDLFdBT0V0QixNQVBGc0IsVUFDQVQsZUFNRWIsTUFORmEsY0FDQVUsVUFLRXZCLE1BTEZ1QixTQUNBLEFBQWNDLFlBSVp4QixNQUpGLGVBQ0EsQUFBaUJ5QixlQUdmekIsTUFIRixrQkFDQSxBQUFpQjBCLGVBRWYxQixNQUZGLGtCQUNBLEFBQWdCMkIsY0FDZDNCLE1BREY7SUFHRixJQUFNNEIsVUFBVTtRQUNkOUI7UUFDQyxHQUFzQnNCLE9BQXBCdEIsV0FBVSxZQUFvQixPQUFWc0I7UUFDdkJuQixhQUFhQTtRQUNiZSxNQUFNLEFBQUMsR0FBWSxPQUFWbEIsV0FBVTtRQUNsQmtCLENBQUFBLE1BQU1HLE9BQU0sS0FBTSxBQUFDLEdBQVksT0FBVnJCLFdBQVU7UUFDaENtQixRQUFRLEFBQUMsR0FBWSxPQUFWbkIsV0FBVTtRQUNyQm1CLFFBQVEsQUFBQyxHQUEyQkMsT0FBekJwQixXQUFVLGlCQUF5QixPQUFWb0I7UUFDcENHLGFBQWEsQUFBQyxHQUFZLE9BQVZ2QixXQUFVO1FBQzFCeUIsV0FBVyxBQUFDLEdBQVksT0FBVnpCLFdBQVU7S0FDekIsQ0FBQ1ksTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7SUFFdkIsSUFBSWlCLFVBQXFEO0lBRXpELElBQUlWLFdBQVcsQ0FBQ0gsSUFBSWEsVUFBVTtJQUM5QixJQUFJYixJQUFJYSxVQUFVQyxvQkFBSTtJQUV0QixxQkFDRSw2QkFBQ0QsaURBQ0toQjtRQUNKa0IsY0FBWVA7UUFDWlEsaUJBQWVQO1FBQ2ZRLGlCQUFlUDtRQUNmUSxnQkFBY1A7UUFDZDFCLFdBQVcyQjtRQUNYTyxNQUFNTixZQUFZLFdBQVcsV0FBV087UUFDeENwQixJQUFJQSxNQUFNb0I7UUFDVmpCLFNBQVNBO1FBRVIsQUFBQ0YsUUFBUUMsY0FBYyx3QkFDdEIsNkJBQUNtQixjQUFLLENBQUNDLFFBQVEsUUFDWnJCLE9BR0pLLFVBQ0EsQUFBQ0wsUUFBUUMsY0FBYyx5QkFDdEIsNkJBQUNtQixjQUFLLENBQUNDLFFBQVEsUUFDWnJCO0FBS1g7QUFFQSxJQUFNc0IsT0FBd0IsU0FBQ3ZDO0lBQzdCLElBQU0sQUFBRXFCLFlBQWNyQixNQUFkcUI7SUFFUixJQUFJQSxXQUFXLHFCQUFPLDZCQUFDdEIsZUFBa0JDO0lBQ3pDLHFCQUFPLDZCQUFDUyxZQUFlVDtBQUN6QjtJQUVBLFdBQWV1QyJ9
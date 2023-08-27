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
import React from "react";
import { Link } from "react-router-dom";
import { useDraggableSortable } from "../DraggableSortable/useDraggableSortable";
import "./index.scss";
var baseClass = "pill";
var DraggablePill = function(props) {
    var className = props.className, id = props.id;
    var _useDraggableSortable = useDraggableSortable({
        id: id
    }), attributes = _useDraggableSortable.attributes, listeners = _useDraggableSortable.listeners, transform = _useDraggableSortable.transform, setNodeRef = _useDraggableSortable.setNodeRef, isDragging = _useDraggableSortable.isDragging;
    return /*#__PURE__*/ React.createElement(StaticPill, _object_spread_props(_object_spread({}, props), {
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
    if (to) Element = Link;
    return /*#__PURE__*/ React.createElement(Element, _object_spread_props(_object_spread({}, elementProps), {
        "aria-label": ariaLabel,
        "aria-expanded": ariaExpanded,
        "aria-controls": ariaControls,
        "aria-checked": ariaChecked,
        className: classes,
        type: Element === "button" ? "button" : undefined,
        to: to || undefined,
        onClick: onClick
    }), icon && alignIcon === "left" && /*#__PURE__*/ React.createElement(React.Fragment, null, icon), children, icon && alignIcon === "right" && /*#__PURE__*/ React.createElement(React.Fragment, null, icon));
};
var Pill = function(props) {
    var draggable = props.draggable;
    if (draggable) return /*#__PURE__*/ React.createElement(DraggablePill, props);
    return /*#__PURE__*/ React.createElement(StaticPill, props);
};
export default Pill;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1BpbGwvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBFbGVtZW50VHlwZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFByb3BzLCBSZW5kZXJlZFR5cGVQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlRHJhZ2dhYmxlU29ydGFibGUgfSBmcm9tICcuLi9EcmFnZ2FibGVTb3J0YWJsZS91c2VEcmFnZ2FibGVTb3J0YWJsZSc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3BpbGwnO1xuXG5jb25zdCBEcmFnZ2FibGVQaWxsOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjbGFzc05hbWUsIGlkIH0gPSBwcm9wcztcblxuICBjb25zdCB7IGF0dHJpYnV0ZXMsIGxpc3RlbmVycywgdHJhbnNmb3JtLCBzZXROb2RlUmVmLCBpc0RyYWdnaW5nIH0gPSB1c2VEcmFnZ2FibGVTb3J0YWJsZSh7XG4gICAgaWQsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFN0YXRpY1BpbGxcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17W1xuICAgICAgICBpc0RyYWdnaW5nICYmIGAke2Jhc2VDbGFzc30tLWlzLWRyYWdnaW5nYCxcbiAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgICAgZWxlbWVudFByb3BzPXt7XG4gICAgICAgIC4uLmxpc3RlbmVycyxcbiAgICAgICAgLi4uYXR0cmlidXRlcyxcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICB0cmFuc2Zvcm0sXG4gICAgICAgIH0sXG4gICAgICAgIHJlZjogc2V0Tm9kZVJlZixcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn07XG5cbmNvbnN0IFN0YXRpY1BpbGw6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2xhc3NOYW1lLFxuICAgIHRvLFxuICAgIGljb24sXG4gICAgYWxpZ25JY29uID0gJ3JpZ2h0JyxcbiAgICBvbkNsaWNrLFxuICAgIHBpbGxTdHlsZSA9ICdsaWdodCcsXG4gICAgZHJhZ2dhYmxlLFxuICAgIGNoaWxkcmVuLFxuICAgIGVsZW1lbnRQcm9wcyxcbiAgICByb3VuZGVkLFxuICAgICdhcmlhLWxhYmVsJzogYXJpYUxhYmVsLFxuICAgICdhcmlhLWV4cGFuZGVkJzogYXJpYUV4cGFuZGVkLFxuICAgICdhcmlhLWNvbnRyb2xzJzogYXJpYUNvbnRyb2xzLFxuICAgICdhcmlhLWNoZWNrZWQnOiBhcmlhQ2hlY2tlZCxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgIGAke2Jhc2VDbGFzc30tLXN0eWxlLSR7cGlsbFN0eWxlfWAsXG4gICAgY2xhc3NOYW1lICYmIGNsYXNzTmFtZSxcbiAgICB0byAmJiBgJHtiYXNlQ2xhc3N9LS1oYXMtbGlua2AsXG4gICAgKHRvIHx8IG9uQ2xpY2spICYmIGAke2Jhc2VDbGFzc30tLWhhcy1hY3Rpb25gLFxuICAgIGljb24gJiYgYCR7YmFzZUNsYXNzfS0taGFzLWljb25gLFxuICAgIGljb24gJiYgYCR7YmFzZUNsYXNzfS0tYWxpZ24taWNvbi0ke2FsaWduSWNvbn1gLFxuICAgIGRyYWdnYWJsZSAmJiBgJHtiYXNlQ2xhc3N9LS1kcmFnZ2FibGVgLFxuICAgIHJvdW5kZWQgJiYgYCR7YmFzZUNsYXNzfS0tcm91bmRlZGAsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICBsZXQgRWxlbWVudDogRWxlbWVudFR5cGUgfCBSZWFjdC5GQzxSZW5kZXJlZFR5cGVQcm9wcz4gPSAnZGl2JztcblxuICBpZiAob25DbGljayAmJiAhdG8pIEVsZW1lbnQgPSAnYnV0dG9uJztcbiAgaWYgKHRvKSBFbGVtZW50ID0gTGluaztcblxuICByZXR1cm4gKFxuICAgIDxFbGVtZW50XG4gICAgICB7Li4uZWxlbWVudFByb3BzfVxuICAgICAgYXJpYS1sYWJlbD17YXJpYUxhYmVsfVxuICAgICAgYXJpYS1leHBhbmRlZD17YXJpYUV4cGFuZGVkfVxuICAgICAgYXJpYS1jb250cm9scz17YXJpYUNvbnRyb2xzfVxuICAgICAgYXJpYS1jaGVja2VkPXthcmlhQ2hlY2tlZH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIHR5cGU9e0VsZW1lbnQgPT09ICdidXR0b24nID8gJ2J1dHRvbicgOiB1bmRlZmluZWR9XG4gICAgICB0bz17dG8gfHwgdW5kZWZpbmVkfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICB7KGljb24gJiYgYWxpZ25JY29uID09PSAnbGVmdCcpICYmIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIHtpY29ufVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHsoaWNvbiAmJiBhbGlnbkljb24gPT09ICdyaWdodCcpICYmIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIHtpY29ufVxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgKX1cbiAgICA8L0VsZW1lbnQ+XG4gICk7XG59O1xuXG5jb25zdCBQaWxsOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBkcmFnZ2FibGUgfSA9IHByb3BzO1xuXG4gIGlmIChkcmFnZ2FibGUpIHJldHVybiA8RHJhZ2dhYmxlUGlsbCB7Li4ucHJvcHN9IC8+O1xuICByZXR1cm4gPFN0YXRpY1BpbGwgey4uLnByb3BzfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBpbGw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwidXNlRHJhZ2dhYmxlU29ydGFibGUiLCJiYXNlQ2xhc3MiLCJEcmFnZ2FibGVQaWxsIiwicHJvcHMiLCJjbGFzc05hbWUiLCJpZCIsImF0dHJpYnV0ZXMiLCJsaXN0ZW5lcnMiLCJ0cmFuc2Zvcm0iLCJzZXROb2RlUmVmIiwiaXNEcmFnZ2luZyIsIlN0YXRpY1BpbGwiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImVsZW1lbnRQcm9wcyIsInN0eWxlIiwicmVmIiwidG8iLCJpY29uIiwiYWxpZ25JY29uIiwib25DbGljayIsInBpbGxTdHlsZSIsImRyYWdnYWJsZSIsImNoaWxkcmVuIiwicm91bmRlZCIsImFyaWFMYWJlbCIsImFyaWFFeHBhbmRlZCIsImFyaWFDb250cm9scyIsImFyaWFDaGVja2VkIiwiY2xhc3NlcyIsIkVsZW1lbnQiLCJhcmlhLWxhYmVsIiwiYXJpYS1leHBhbmRlZCIsImFyaWEtY29udHJvbHMiLCJhcmlhLWNoZWNrZWQiLCJ0eXBlIiwidW5kZWZpbmVkIiwiRnJhZ21lbnQiLCJQaWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsV0FBNEIsUUFBUTtBQUMzQyxTQUFTQyxJQUFJLFFBQVEsbUJBQW1CO0FBRXhDLFNBQVNDLG9CQUFvQixRQUFRLDRDQUE0QztBQUVqRixPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxnQkFBaUMsU0FBQ0M7SUFDdEMsSUFBUUMsWUFBa0JELE1BQWxCQyxXQUFXQyxLQUFPRixNQUFQRTtJQUVuQixJQUFxRUwsd0JBQUFBLHFCQUFxQjtRQUN4RkssSUFBQUE7SUFDRixJQUZRQyxhQUE2RE4sc0JBQTdETSxZQUFZQyxZQUFpRFAsc0JBQWpETyxXQUFXQyxZQUFzQ1Isc0JBQXRDUSxXQUFXQyxhQUEyQlQsc0JBQTNCUyxZQUFZQyxhQUFlVixzQkFBZlU7SUFJdEQscUJBQ0Usb0JBQUNDLG9EQUNLUjtRQUNKQyxXQUFXO1lBQ1RNLGNBQWMsQUFBQyxHQUFZLE9BQVZULFdBQVU7WUFDM0JHO1NBQ0QsQ0FBQ1EsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7UUFDdkJDLGNBQWMsd0NBQ1RSLFdBQ0FEO1lBQ0hVLE9BQU87Z0JBQ0xSLFdBQUFBO1lBQ0Y7WUFDQVMsS0FBS1I7OztBQUliO0FBRUEsSUFBTUUsYUFBOEIsU0FBQ1I7SUFDbkMsSUFDRUMsWUFjRUQsTUFkRkMsV0FDQWMsS0FhRWYsTUFiRmUsSUFDQUMsT0FZRWhCLE1BWkZnQix5QkFZRWhCLE1BWEZpQixXQUFBQSwwQ0FBWSw0QkFDWkMsVUFVRWxCLE1BVkZrQiw0QkFVRWxCLE1BVEZtQixXQUFBQSwwQ0FBWSw0QkFDWkMsWUFRRXBCLE1BUkZvQixXQUNBQyxXQU9FckIsTUFQRnFCLFVBQ0FULGVBTUVaLE1BTkZZLGNBQ0FVLFVBS0V0QixNQUxGc0IsU0FDQSxBQUFjQyxZQUladkIsTUFKRixlQUNBLEFBQWlCd0IsZUFHZnhCLE1BSEYsa0JBQ0EsQUFBaUJ5QixlQUVmekIsTUFGRixrQkFDQSxBQUFnQjBCLGNBQ2QxQixNQURGO0lBR0YsSUFBTTJCLFVBQVU7UUFDZDdCO1FBQ0MsR0FBc0JxQixPQUFwQnJCLFdBQVUsWUFBb0IsT0FBVnFCO1FBQ3ZCbEIsYUFBYUE7UUFDYmMsTUFBTSxBQUFDLEdBQVksT0FBVmpCLFdBQVU7UUFDbEJpQixDQUFBQSxNQUFNRyxPQUFNLEtBQU0sQUFBQyxHQUFZLE9BQVZwQixXQUFVO1FBQ2hDa0IsUUFBUSxBQUFDLEdBQVksT0FBVmxCLFdBQVU7UUFDckJrQixRQUFRLEFBQUMsR0FBMkJDLE9BQXpCbkIsV0FBVSxpQkFBeUIsT0FBVm1CO1FBQ3BDRyxhQUFhLEFBQUMsR0FBWSxPQUFWdEIsV0FBVTtRQUMxQndCLFdBQVcsQUFBQyxHQUFZLE9BQVZ4QixXQUFVO0tBQ3pCLENBQUNXLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO0lBRXZCLElBQUlpQixVQUFxRDtJQUV6RCxJQUFJVixXQUFXLENBQUNILElBQUlhLFVBQVU7SUFDOUIsSUFBSWIsSUFBSWEsVUFBVWhDO0lBRWxCLHFCQUNFLG9CQUFDZ0MsaURBQ0toQjtRQUNKaUIsY0FBWU47UUFDWk8saUJBQWVOO1FBQ2ZPLGlCQUFlTjtRQUNmTyxnQkFBY047UUFDZHpCLFdBQVcwQjtRQUNYTSxNQUFNTCxZQUFZLFdBQVcsV0FBV007UUFDeENuQixJQUFJQSxNQUFNbUI7UUFDVmhCLFNBQVNBO1FBRVIsQUFBQ0YsUUFBUUMsY0FBYyx3QkFDdEIsb0JBQUN0QixNQUFNd0MsUUFBUSxRQUNabkIsT0FHSkssVUFDQSxBQUFDTCxRQUFRQyxjQUFjLHlCQUN0QixvQkFBQ3RCLE1BQU13QyxRQUFRLFFBQ1puQjtBQUtYO0FBRUEsSUFBTW9CLE9BQXdCLFNBQUNwQztJQUM3QixJQUFNLEFBQUVvQixZQUFjcEIsTUFBZG9CO0lBRVIsSUFBSUEsV0FBVyxxQkFBTyxvQkFBQ3JCLGVBQWtCQztJQUN6QyxxQkFBTyxvQkFBQ1EsWUFBZVI7QUFDekI7QUFFQSxlQUFlb0MsS0FBSyJ9
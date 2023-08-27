"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    baseClass: function() {
        return baseClass;
    },
    default: function() {
        return _default;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _slatereact = require("slate-react");
var _toggleList = /*#__PURE__*/ _interop_require_default(require("./toggleList"));
var _isListActive = /*#__PURE__*/ _interop_require_default(require("./isListActive"));
require("../buttons.scss");
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
var baseClass = "rich-text__button";
var ListButton = function(param) {
    var format = param.format, children = param.children, onClick = param.onClick, className = param.className;
    var editor = (0, _slatereact.useSlate)();
    var defaultOnClick = (0, _react.useCallback)(function(event) {
        event.preventDefault();
        (0, _toggleList.default)(editor, format);
    }, [
        editor,
        format
    ]);
    return /*#__PURE__*/ _react.default.createElement("button", {
        type: "button",
        className: [
            baseClass,
            className,
            (0, _isListActive.default)(editor, format) && "".concat(baseClass, "__button--active")
        ].filter(Boolean).join(" "),
        onClick: onClick || defaultOnClick
    }, children);
};
var _default = ListButton;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL0xpc3RCdXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNsYXRlIH0gZnJvbSAnc2xhdGUtcmVhY3QnO1xuaW1wb3J0IHRvZ2dsZUxpc3QgZnJvbSAnLi90b2dnbGVMaXN0JztcbmltcG9ydCB7IEJ1dHRvblByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgaXNMaXN0QWN0aXZlIGZyb20gJy4vaXNMaXN0QWN0aXZlJztcblxuaW1wb3J0ICcuLi9idXR0b25zLnNjc3MnO1xuXG5leHBvcnQgY29uc3QgYmFzZUNsYXNzID0gJ3JpY2gtdGV4dF9fYnV0dG9uJztcblxuY29uc3QgTGlzdEJ1dHRvbjogUmVhY3QuRkM8QnV0dG9uUHJvcHM+ID0gKHsgZm9ybWF0LCBjaGlsZHJlbiwgb25DbGljaywgY2xhc3NOYW1lIH0pID0+IHtcbiAgY29uc3QgZWRpdG9yID0gdXNlU2xhdGUoKTtcblxuICBjb25zdCBkZWZhdWx0T25DbGljayA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9nZ2xlTGlzdChlZGl0b3IsIGZvcm1hdCk7XG4gIH0sIFtlZGl0b3IsIGZvcm1hdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9e1tcbiAgICAgICAgYmFzZUNsYXNzLFxuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGlzTGlzdEFjdGl2ZShlZGl0b3IsIGZvcm1hdCkgJiYgYCR7YmFzZUNsYXNzfV9fYnV0dG9uLS1hY3RpdmVgLFxuICAgICAgXS5maWx0ZXIoQm9vbGVhbikuam9pbignICcpfVxuICAgICAgb25DbGljaz17b25DbGljayB8fCBkZWZhdWx0T25DbGlja31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0QnV0dG9uO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIkxpc3RCdXR0b24iLCJmb3JtYXQiLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJlZGl0b3IiLCJ1c2VTbGF0ZSIsImRlZmF1bHRPbkNsaWNrIiwidXNlQ2FsbGJhY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlTGlzdCIsImJ1dHRvbiIsInR5cGUiLCJpc0xpc3RBY3RpdmUiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFRYUEsU0FBUztlQUFUQTs7SUF5QmIsT0FBMEI7ZUFBMUI7Ozs2REFqQ21DOzBCQUNWO2lFQUNGO21FQUVFO1FBRWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxZQUFZO0FBRXpCLElBQU1DLGFBQW9DO1FBQUdDLGVBQUFBLFFBQVFDLGlCQUFBQSxVQUFVQyxnQkFBQUEsU0FBU0Msa0JBQUFBO0lBQ3RFLElBQU1DLFNBQVNDLElBQUFBLG9CQUFRO0lBRXZCLElBQU1DLGlCQUFpQkMsSUFBQUEsa0JBQVcsRUFBQyxTQUFDQztRQUNsQ0EsTUFBTUMsY0FBYztRQUNwQkMsSUFBQUEsbUJBQVUsRUFBQ04sUUFBUUo7SUFDckIsR0FBRztRQUFDSTtRQUFRSjtLQUFPO0lBRW5CLHFCQUNFLDZCQUFDVztRQUNDQyxNQUFLO1FBQ0xULFdBQVc7WUFDVEw7WUFDQUs7WUFDQVUsSUFBQUEscUJBQVksRUFBQ1QsUUFBUUosV0FBVyxBQUFDLEdBQVksT0FBVkYsV0FBVTtTQUM5QyxDQUFDZ0IsTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7UUFDdkJkLFNBQVNBLFdBQVdJO09BRW5CTDtBQUdQO0lBRUEsV0FBZUYifQ==
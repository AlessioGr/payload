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
var _Loading = require("../../elements/Loading");
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
var VersionView = /*#__PURE__*/ (0, _react.lazy)(function() {
    return Promise.resolve().then(function() {
        return /*#__PURE__*/ _interop_require_wildcard(require("./Version"));
    });
});
var Version = function(props) {
    return /*#__PURE__*/ _react.default.createElement(_react.Suspense, {
        fallback: /*#__PURE__*/ _react.default.createElement(_Loading.LoadingOverlayToggle, {
            show: true,
            name: "version-suspense"
        })
    }, /*#__PURE__*/ _react.default.createElement(VersionView, props));
};
var _default = Version;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSwgbGF6eSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExvYWRpbmdPdmVybGF5VG9nZ2xlIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvTG9hZGluZyc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBWZXJzaW9uVmlldyA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL1ZlcnNpb24nKSk7XG5cbmNvbnN0IFZlcnNpb246IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4gKFxuICA8U3VzcGVuc2UgZmFsbGJhY2s9eyhcbiAgICA8TG9hZGluZ092ZXJsYXlUb2dnbGVcbiAgICAgIHNob3dcbiAgICAgIG5hbWU9XCJ2ZXJzaW9uLXN1c3BlbnNlXCJcbiAgICAvPlxuICApfVxuICA+XG4gICAgPFZlcnNpb25WaWV3IHsuLi5wcm9wc30gLz5cbiAgPC9TdXNwZW5zZT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFZlcnNpb247XG4iXSwibmFtZXMiOlsiVmVyc2lvblZpZXciLCJsYXp5IiwiVmVyc2lvbiIsInByb3BzIiwiU3VzcGVuc2UiLCJmYWxsYmFjayIsIkxvYWRpbmdPdmVybGF5VG9nZ2xlIiwic2hvdyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBa0JBOzs7ZUFBQTs7OzZEQWxCc0M7dUJBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHckMsSUFBTUEsNEJBQWNDLElBQUFBLFdBQUksRUFBQztXQUFNO3VEQUFBLFFBQU87OztBQUV0QyxJQUFNQyxVQUEyQixTQUFDQzt5QkFDaEMsNkJBQUNDLGVBQVE7UUFBQ0Msd0JBQ1IsNkJBQUNDLDZCQUFvQjtZQUNuQkMsTUFBQUE7WUFDQUMsTUFBSzs7cUJBSVAsNkJBQUNSLGFBQWdCRzs7SUFJckIsV0FBZUQifQ==
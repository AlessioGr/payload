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
var _reacti18next = require("react-i18next");
var _Config = require("../../utilities/Config");
var _Eyebrow = /*#__PURE__*/ _interop_require_default(require("../../elements/Eyebrow"));
var _StepNav = require("../../elements/StepNav");
var _Button = /*#__PURE__*/ _interop_require_default(require("../../elements/Button"));
var _Meta = /*#__PURE__*/ _interop_require_default(require("../../utilities/Meta"));
var _Gutter = require("../../elements/Gutter");
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
var baseClass = "not-found";
var NotFound = function() {
    var setStepNav = (0, _StepNav.useStepNav)().setStepNav;
    var _useConfig = (0, _Config.useConfig)(), admin = _useConfig.routes.admin;
    var t = (0, _reacti18next.useTranslation)("general").t;
    (0, _react.useEffect)(function() {
        setStepNav([
            {
                label: t("notFound")
            }
        ]);
    }, [
        setStepNav,
        t
    ]);
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Meta.default, {
        title: t("notFound"),
        description: t("pageNotFound"),
        keywords: "404 ".concat(t("notFound"))
    }), /*#__PURE__*/ _react.default.createElement(_Eyebrow.default, null), /*#__PURE__*/ _react.default.createElement(_Gutter.Gutter, {
        className: "".concat(baseClass, "__wrap")
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t("nothingFound")), /*#__PURE__*/ _react.default.createElement("p", null, t("sorryNotFound")), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        el: "link",
        to: "".concat(admin)
    }, t("backToDashboard"))));
};
var _default = NotFound;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL05vdEZvdW5kL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IEV5ZWJyb3cgZnJvbSAnLi4vLi4vZWxlbWVudHMvRXllYnJvdyc7XG5pbXBvcnQgeyB1c2VTdGVwTmF2IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvU3RlcE5hdic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uL2VsZW1lbnRzL0J1dHRvbic7XG5pbXBvcnQgTWV0YSBmcm9tICcuLi8uLi91dGlsaXRpZXMvTWV0YSc7XG5pbXBvcnQgeyBHdXR0ZXIgfSBmcm9tICcuLi8uLi9lbGVtZW50cy9HdXR0ZXInO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnbm90LWZvdW5kJztcblxuY29uc3QgTm90Rm91bmQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IHNldFN0ZXBOYXYgfSA9IHVzZVN0ZXBOYXYoKTtcbiAgY29uc3QgeyByb3V0ZXM6IHsgYWRtaW4gfSB9ID0gdXNlQ29uZmlnKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2dlbmVyYWwnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0ZXBOYXYoW3tcbiAgICAgIGxhYmVsOiB0KCdub3RGb3VuZCcpLFxuICAgIH1dKTtcbiAgfSwgW3NldFN0ZXBOYXYsIHRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtiYXNlQ2xhc3N9PlxuICAgICAgPE1ldGFcbiAgICAgICAgdGl0bGU9e3QoJ25vdEZvdW5kJyl9XG4gICAgICAgIGRlc2NyaXB0aW9uPXt0KCdwYWdlTm90Rm91bmQnKX1cbiAgICAgICAga2V5d29yZHM9e2A0MDQgJHt0KCdub3RGb3VuZCcpfWB9XG4gICAgICAvPlxuICAgICAgPEV5ZWJyb3cgLz5cbiAgICAgIDxHdXR0ZXIgY2xhc3NOYW1lPXtgJHtiYXNlQ2xhc3N9X193cmFwYH0+XG4gICAgICAgIDxoMT57dCgnbm90aGluZ0ZvdW5kJyl9PC9oMT5cbiAgICAgICAgPHA+e3QoJ3NvcnJ5Tm90Rm91bmQnKX08L3A+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBlbD1cImxpbmtcIlxuICAgICAgICAgIHRvPXtgJHthZG1pbn1gfVxuICAgICAgICA+XG4gICAgICAgICAge3QoJ2JhY2tUb0Rhc2hib2FyZCcpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvR3V0dGVyPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiTm90Rm91bmQiLCJzZXRTdGVwTmF2IiwidXNlU3RlcE5hdiIsInVzZUNvbmZpZyIsInJvdXRlcyIsImFkbWluIiwidCIsInVzZVRyYW5zbGF0aW9uIiwidXNlRWZmZWN0IiwibGFiZWwiLCJkaXYiLCJjbGFzc05hbWUiLCJNZXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImtleXdvcmRzIiwiRXllYnJvdyIsIkd1dHRlciIsImgxIiwicCIsIkJ1dHRvbiIsImVsIiwidG8iXSwibWFwcGluZ3MiOiI7Ozs7K0JBNENBOzs7ZUFBQTs7OzZEQTVDaUM7NEJBQ0Y7c0JBQ0w7OERBQ047dUJBQ087NkRBQ1I7MkRBQ0Y7c0JBQ007Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QixJQUFNQSxZQUFZO0FBRWxCLElBQU1DLFdBQXFCO0lBQ3pCLElBQU0sQUFBRUMsYUFBZUMsSUFBQUEsbUJBQVUsSUFBekJEO0lBQ1IsSUFBOEJFLGFBQUFBLElBQUFBLGlCQUFTLEtBQS9CQyxBQUFVQyxRQUFZRixXQUF0QkMsT0FBVUM7SUFDbEIsSUFBTSxBQUFFQyxJQUFNQyxJQUFBQSw0QkFBYyxFQUFDLFdBQXJCRDtJQUVSRSxJQUFBQSxnQkFBUyxFQUFDO1FBQ1JQLFdBQVc7WUFBQztnQkFDVlEsT0FBT0gsRUFBRTtZQUNYO1NBQUU7SUFDSixHQUFHO1FBQUNMO1FBQVlLO0tBQUU7SUFFbEIscUJBQ0UsNkJBQUNJO1FBQUlDLFdBQVdaO3FCQUNkLDZCQUFDYSxhQUFJO1FBQ0hDLE9BQU9QLEVBQUU7UUFDVFEsYUFBYVIsRUFBRTtRQUNmUyxVQUFVLEFBQUMsT0FBb0IsT0FBZFQsRUFBRTtzQkFFckIsNkJBQUNVLGdCQUFPLHVCQUNSLDZCQUFDQyxjQUFNO1FBQUNOLFdBQVcsQUFBQyxHQUFZLE9BQVZaLFdBQVU7cUJBQzlCLDZCQUFDbUIsWUFBSVosRUFBRSxnQ0FDUCw2QkFBQ2EsV0FBR2IsRUFBRSxpQ0FDTiw2QkFBQ2MsZUFBTTtRQUNMQyxJQUFHO1FBQ0hDLElBQUksQUFBQyxHQUFRLE9BQU5qQjtPQUVOQyxFQUFFO0FBS2I7SUFFQSxXQUFlTiJ9
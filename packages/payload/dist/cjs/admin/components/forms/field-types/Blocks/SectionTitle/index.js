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
var _reacti18next = require("react-i18next");
var _useField = /*#__PURE__*/ _interop_require_default(require("../../../useField"));
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "section-title";
var SectionTitle = function(props) {
    var path = props.path, readOnly = props.readOnly;
    var _useField1 = (0, _useField.default)({
        path: path
    }), value = _useField1.value, setValue = _useField1.setValue;
    var t = (0, _reacti18next.useTranslation)("general").t;
    var classes = [
        baseClass
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ _react.default.createElement("div", {
        className: classes,
        "data-value": value
    }, /*#__PURE__*/ _react.default.createElement("input", {
        className: "".concat(baseClass, "__input"),
        id: path,
        value: value || "",
        placeholder: t("untitled"),
        type: "text",
        name: path,
        onChange: function(e) {
            e.stopPropagation();
            e.preventDefault();
            setValue(e.target.value);
        },
        readOnly: readOnly
    }));
};
var _default = SectionTitle;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL0Jsb2Nrcy9TZWN0aW9uVGl0bGUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHVzZUZpZWxkIGZyb20gJy4uLy4uLy4uL3VzZUZpZWxkJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3NlY3Rpb24tdGl0bGUnO1xuXG5jb25zdCBTZWN0aW9uVGl0bGU6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHBhdGgsIHJlYWRPbmx5IH0gPSBwcm9wcztcblxuICBjb25zdCB7IHZhbHVlLCBzZXRWYWx1ZSB9ID0gdXNlRmllbGQoeyBwYXRoIH0pO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG5cbiAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICBiYXNlQ2xhc3MsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIGRhdGEtdmFsdWU9e3ZhbHVlfVxuICAgID5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2lucHV0YH1cbiAgICAgICAgaWQ9e3BhdGh9XG4gICAgICAgIHZhbHVlPXt2YWx1ZSBhcyBzdHJpbmcgfHwgJyd9XG4gICAgICAgIHBsYWNlaG9sZGVyPXt0KCd1bnRpdGxlZCcpfVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9e3BhdGh9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgcmVhZE9ubHk9e3JlYWRPbmx5fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25UaXRsZTtcbiJdLCJuYW1lcyI6WyJiYXNlQ2xhc3MiLCJTZWN0aW9uVGl0bGUiLCJwcm9wcyIsInBhdGgiLCJyZWFkT25seSIsInVzZUZpZWxkIiwidmFsdWUiLCJzZXRWYWx1ZSIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEtdmFsdWUiLCJpbnB1dCIsImlkIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwibmFtZSIsIm9uQ2hhbmdlIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7OytCQTBDQTs7O2VBQUE7Ozs0REExQ2tCOzRCQUNhOytEQUNWO1FBR2Q7Ozs7OztBQUVQLElBQU1BLFlBQVk7QUFFbEIsSUFBTUMsZUFBZ0MsU0FBQ0M7SUFDckMsSUFBUUMsT0FBbUJELE1BQW5CQyxNQUFNQyxXQUFhRixNQUFiRTtJQUVkLElBQTRCQyxhQUFBQSxJQUFBQSxpQkFBUSxFQUFDO1FBQUVGLE1BQUFBO0lBQUssSUFBcENHLFFBQW9CRCxXQUFwQkMsT0FBT0MsV0FBYUYsV0FBYkU7SUFDZixJQUFNLEFBQUVDLElBQU1DLElBQUFBLDRCQUFjLEVBQUMsV0FBckJEO0lBRVIsSUFBTUUsVUFBVTtRQUNkVjtLQUNELENBQUNXLE1BQU0sQ0FBQ0MsU0FBU0MsSUFBSSxDQUFDO0lBRXZCLHFCQUNFLDZCQUFDQztRQUNDQyxXQUFXTDtRQUNYTSxjQUFZVjtxQkFFWiw2QkFBQ1c7UUFDQ0YsV0FBVyxBQUFDLEdBQVksT0FBVmYsV0FBVTtRQUN4QmtCLElBQUlmO1FBQ0pHLE9BQU9BLFNBQW1CO1FBQzFCYSxhQUFhWCxFQUFFO1FBQ2ZZLE1BQUs7UUFDTEMsTUFBTWxCO1FBQ05tQixVQUFVLFNBQUNDO1lBQ1RBLEVBQUVDLGVBQWU7WUFDakJELEVBQUVFLGNBQWM7WUFDaEJsQixTQUFTZ0IsRUFBRUcsTUFBTSxDQUFDcEIsS0FBSztRQUN6QjtRQUNBRixVQUFVQTs7QUFJbEI7SUFFQSxXQUFlSCJ9
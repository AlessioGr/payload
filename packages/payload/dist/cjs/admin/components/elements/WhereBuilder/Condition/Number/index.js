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
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "condition-value-number";
var NumberField = function(param) {
    var onChange = param.onChange, value = param.value;
    var t = (0, _reacti18next.useTranslation)("general").t;
    return /*#__PURE__*/ _react.default.createElement("input", {
        placeholder: t("enterAValue"),
        className: baseClass,
        type: "number",
        onChange: function(e) {
            return onChange(e.target.value);
        },
        value: value
    });
};
var _default = NumberField;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9Db25kaXRpb24vTnVtYmVyL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ2NvbmRpdGlvbi12YWx1ZS1udW1iZXInO1xuXG5jb25zdCBOdW1iZXJGaWVsZDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgb25DaGFuZ2UsIHZhbHVlIH0pID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuICByZXR1cm4gKFxuICAgIDxpbnB1dFxuICAgICAgcGxhY2Vob2xkZXI9e3QoJ2VudGVyQVZhbHVlJyl9XG4gICAgICBjbGFzc05hbWU9e2Jhc2VDbGFzc31cbiAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckZpZWxkO1xuIl0sIm5hbWVzIjpbImJhc2VDbGFzcyIsIk51bWJlckZpZWxkIiwib25DaGFuZ2UiLCJ2YWx1ZSIsInQiLCJ1c2VUcmFuc2xhdGlvbiIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJ0eXBlIiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFxQkE7OztlQUFBOzs7NERBckJrQjs0QkFDYTtRQUd4Qjs7Ozs7O0FBRVAsSUFBTUEsWUFBWTtBQUVsQixJQUFNQyxjQUErQjtRQUFHQyxpQkFBQUEsVUFBVUMsY0FBQUE7SUFDaEQsSUFBTSxBQUFFQyxJQUFNQyxJQUFBQSw0QkFBYyxFQUFDLFdBQXJCRDtJQUNSLHFCQUNFLDZCQUFDRTtRQUNDQyxhQUFhSCxFQUFFO1FBQ2ZJLFdBQVdSO1FBQ1hTLE1BQUs7UUFDTFAsVUFBVSxTQUFDUTttQkFBTVIsU0FBU1EsRUFBRUMsTUFBTSxDQUFDUixLQUFLOztRQUN4Q0EsT0FBT0E7O0FBR2I7SUFFQSxXQUFlRiJ9
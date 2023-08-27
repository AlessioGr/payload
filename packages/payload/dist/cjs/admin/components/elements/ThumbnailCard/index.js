"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ThumbnailCard", {
    enumerable: true,
    get: function() {
        return ThumbnailCard;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _reacti18next = require("react-i18next");
var _Thumbnail = /*#__PURE__*/ _interop_require_default(require("../Thumbnail"));
var _Config = require("../../utilities/Config");
var _useTitle = require("../../../hooks/useTitle");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "thumbnail-card";
var ThumbnailCard = function(props) {
    var className = props.className, onClick = props.onClick, doc = props.doc, collection = props.collection, thumbnail = props.thumbnail, labelFromProps = props.label, alignLabel = props.alignLabel;
    var _useTranslation = (0, _reacti18next.useTranslation)("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var config = (0, _Config.useConfig)();
    var classes = [
        baseClass,
        className,
        typeof onClick === "function" && "".concat(baseClass, "--has-on-click"),
        alignLabel && "".concat(baseClass, "--align-label-").concat(alignLabel)
    ].filter(Boolean).join(" ");
    var title = labelFromProps;
    if (!title) {
        var _doc;
        title = (0, _useTitle.formatUseAsTitle)({
            doc: doc,
            collection: collection,
            i18n: i18n,
            config: config
        }) || ((_doc = doc) === null || _doc === void 0 ? void 0 : _doc.filename) || "[".concat(t("untitled"), "]");
    }
    return /*#__PURE__*/ _react.default.createElement("button", {
        type: "button",
        title: title,
        className: classes,
        onClick: onClick
    }, /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__thumbnail")
    }, thumbnail && thumbnail, !thumbnail && collection && doc && /*#__PURE__*/ _react.default.createElement(_Thumbnail.default, {
        size: "expand",
        doc: doc,
        collection: collection
    })), /*#__PURE__*/ _react.default.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, title));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1RodW1ibmFpbENhcmQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBUaHVtYm5haWwgZnJvbSAnLi4vVGh1bWJuYWlsJztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHsgZm9ybWF0VXNlQXNUaXRsZSB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVRpdGxlJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAndGh1bWJuYWlsLWNhcmQnO1xuXG5leHBvcnQgY29uc3QgVGh1bWJuYWlsQ2FyZDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWUsXG4gICAgb25DbGljayxcbiAgICBkb2MsXG4gICAgY29sbGVjdGlvbixcbiAgICB0aHVtYm5haWwsXG4gICAgbGFiZWw6IGxhYmVsRnJvbVByb3BzLFxuICAgIGFsaWduTGFiZWwsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZygpO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgIGNsYXNzTmFtZSxcbiAgICB0eXBlb2Ygb25DbGljayA9PT0gJ2Z1bmN0aW9uJyAmJiBgJHtiYXNlQ2xhc3N9LS1oYXMtb24tY2xpY2tgLFxuICAgIGFsaWduTGFiZWwgJiYgYCR7YmFzZUNsYXNzfS0tYWxpZ24tbGFiZWwtJHthbGlnbkxhYmVsfWAsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICBsZXQgdGl0bGUgPSBsYWJlbEZyb21Qcm9wcztcblxuICBpZiAoIXRpdGxlKSB7XG4gICAgdGl0bGUgPSBmb3JtYXRVc2VBc1RpdGxlKHtcbiAgICAgIGRvYyxcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICBpMThuLFxuICAgICAgY29uZmlnLFxuICAgIH0pIHx8IGRvYz8uZmlsZW5hbWUgYXMgc3RyaW5nIHx8IGBbJHt0KCd1bnRpdGxlZCcpfV1gO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RodW1ibmFpbGB9PlxuICAgICAgICB7dGh1bWJuYWlsICYmIHRodW1ibmFpbH1cbiAgICAgICAgeyF0aHVtYm5haWwgJiYgKGNvbGxlY3Rpb24gJiYgZG9jKSAmJiAoXG4gICAgICAgICAgPFRodW1ibmFpbFxuICAgICAgICAgICAgc2l6ZT1cImV4cGFuZFwiXG4gICAgICAgICAgICBkb2M9e2RvY31cbiAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJUaHVtYm5haWxDYXJkIiwiYmFzZUNsYXNzIiwicHJvcHMiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZG9jIiwiY29sbGVjdGlvbiIsInRodW1ibmFpbCIsImxhYmVsIiwibGFiZWxGcm9tUHJvcHMiLCJhbGlnbkxhYmVsIiwidXNlVHJhbnNsYXRpb24iLCJ0IiwiaTE4biIsImNvbmZpZyIsInVzZUNvbmZpZyIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsInRpdGxlIiwiZm9ybWF0VXNlQXNUaXRsZSIsImZpbGVuYW1lIiwiYnV0dG9uIiwidHlwZSIsImRpdiIsIlRodW1ibmFpbCIsInNpemUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBV2FBOzs7ZUFBQUE7Ozs0REFYSzs0QkFDYTtnRUFFVDtzQkFDSTt3QkFDTztRQUUxQjs7Ozs7O0FBRVAsSUFBTUMsWUFBWTtBQUVYLElBQU1ELGdCQUFpQyxTQUFDRTtJQUM3QyxJQUNFQyxZQU9FRCxNQVBGQyxXQUNBQyxVQU1FRixNQU5GRSxTQUNBQyxNQUtFSCxNQUxGRyxLQUNBQyxhQUlFSixNQUpGSSxZQUNBQyxZQUdFTCxNQUhGSyxXQUNBQyxBQUFPQyxpQkFFTFAsTUFGRk0sT0FDQUUsYUFDRVIsTUFERlE7SUFHRixJQUFvQkMsa0JBQUFBLElBQUFBLDRCQUFjLEVBQUMsWUFBM0JDLElBQVlELGdCQUFaQyxHQUFHQyxPQUFTRixnQkFBVEU7SUFDWCxJQUFNQyxTQUFTQyxJQUFBQSxpQkFBUztJQUV4QixJQUFNQyxVQUFVO1FBQ2RmO1FBQ0FFO1FBQ0EsT0FBT0MsWUFBWSxjQUFjLEFBQUMsR0FBWSxPQUFWSCxXQUFVO1FBQzlDUyxjQUFjLEFBQUMsR0FBNEJBLE9BQTFCVCxXQUFVLGtCQUEyQixPQUFYUztLQUM1QyxDQUFDTyxNQUFNLENBQUNDLFNBQVNDLElBQUksQ0FBQztJQUV2QixJQUFJQyxRQUFRWDtJQUVaLElBQUksQ0FBQ1csT0FBTztZQU1KZjtRQUxOZSxRQUFRQyxJQUFBQSwwQkFBZ0IsRUFBQztZQUN2QmhCLEtBQUFBO1lBQ0FDLFlBQUFBO1lBQ0FPLE1BQUFBO1lBQ0FDLFFBQUFBO1FBQ0YsUUFBTVQsT0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFLaUIsUUFBUSxLQUFjLEFBQUMsSUFBaUIsT0FBZFYsRUFBRSxhQUFZO0lBQ3JEO0lBRUEscUJBQ0UsNkJBQUNXO1FBQ0NDLE1BQUs7UUFDTEosT0FBT0E7UUFDUGpCLFdBQVdhO1FBQ1haLFNBQVNBO3FCQUVULDZCQUFDcUI7UUFBSXRCLFdBQVcsQUFBQyxHQUFZLE9BQVZGLFdBQVU7T0FDMUJNLGFBQWFBLFdBQ2IsQ0FBQ0EsYUFBY0QsY0FBY0QscUJBQzVCLDZCQUFDcUIsa0JBQVM7UUFDUkMsTUFBSztRQUNMdEIsS0FBS0E7UUFDTEMsWUFBWUE7dUJBSWxCLDZCQUFDbUI7UUFBSXRCLFdBQVcsQUFBQyxHQUFZLE9BQVZGLFdBQVU7T0FDMUJtQjtBQUlUIn0=
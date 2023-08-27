import React from "react";
import { useTranslation } from "react-i18next";
import Thumbnail from "../Thumbnail";
import { useConfig } from "../../utilities/Config";
import { formatUseAsTitle } from "../../../hooks/useTitle";
import "./index.scss";
var baseClass = "thumbnail-card";
export var ThumbnailCard = function(props) {
    var className = props.className, onClick = props.onClick, doc = props.doc, collection = props.collection, thumbnail = props.thumbnail, labelFromProps = props.label, alignLabel = props.alignLabel;
    var _useTranslation = useTranslation("general"), t = _useTranslation.t, i18n = _useTranslation.i18n;
    var config = useConfig();
    var classes = [
        baseClass,
        className,
        typeof onClick === "function" && "".concat(baseClass, "--has-on-click"),
        alignLabel && "".concat(baseClass, "--align-label-").concat(alignLabel)
    ].filter(Boolean).join(" ");
    var title = labelFromProps;
    if (!title) {
        var _doc;
        title = formatUseAsTitle({
            doc: doc,
            collection: collection,
            i18n: i18n,
            config: config
        }) || ((_doc = doc) === null || _doc === void 0 ? void 0 : _doc.filename) || "[".concat(t("untitled"), "]");
    }
    return /*#__PURE__*/ React.createElement("button", {
        type: "button",
        title: title,
        className: classes,
        onClick: onClick
    }, /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__thumbnail")
    }, thumbnail && thumbnail, !thumbnail && collection && doc && /*#__PURE__*/ React.createElement(Thumbnail, {
        size: "expand",
        doc: doc,
        collection: collection
    })), /*#__PURE__*/ React.createElement("div", {
        className: "".concat(baseClass, "__label")
    }, title));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1RodW1ibmFpbENhcmQvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBUaHVtYm5haWwgZnJvbSAnLi4vVGh1bWJuYWlsJztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHsgZm9ybWF0VXNlQXNUaXRsZSB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVRpdGxlJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAndGh1bWJuYWlsLWNhcmQnO1xuXG5leHBvcnQgY29uc3QgVGh1bWJuYWlsQ2FyZDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjbGFzc05hbWUsXG4gICAgb25DbGljayxcbiAgICBkb2MsXG4gICAgY29sbGVjdGlvbixcbiAgICB0aHVtYm5haWwsXG4gICAgbGFiZWw6IGxhYmVsRnJvbVByb3BzLFxuICAgIGFsaWduTGFiZWwsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCB7IHQsIGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCdnZW5lcmFsJyk7XG4gIGNvbnN0IGNvbmZpZyA9IHVzZUNvbmZpZygpO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgIGNsYXNzTmFtZSxcbiAgICB0eXBlb2Ygb25DbGljayA9PT0gJ2Z1bmN0aW9uJyAmJiBgJHtiYXNlQ2xhc3N9LS1oYXMtb24tY2xpY2tgLFxuICAgIGFsaWduTGFiZWwgJiYgYCR7YmFzZUNsYXNzfS0tYWxpZ24tbGFiZWwtJHthbGlnbkxhYmVsfWAsXG4gIF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcblxuICBsZXQgdGl0bGUgPSBsYWJlbEZyb21Qcm9wcztcblxuICBpZiAoIXRpdGxlKSB7XG4gICAgdGl0bGUgPSBmb3JtYXRVc2VBc1RpdGxlKHtcbiAgICAgIGRvYyxcbiAgICAgIGNvbGxlY3Rpb24sXG4gICAgICBpMThuLFxuICAgICAgY29uZmlnLFxuICAgIH0pIHx8IGRvYz8uZmlsZW5hbWUgYXMgc3RyaW5nIHx8IGBbJHt0KCd1bnRpdGxlZCcpfV1gO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX3RodW1ibmFpbGB9PlxuICAgICAgICB7dGh1bWJuYWlsICYmIHRodW1ibmFpbH1cbiAgICAgICAgeyF0aHVtYm5haWwgJiYgKGNvbGxlY3Rpb24gJiYgZG9jKSAmJiAoXG4gICAgICAgICAgPFRodW1ibmFpbFxuICAgICAgICAgICAgc2l6ZT1cImV4cGFuZFwiXG4gICAgICAgICAgICBkb2M9e2RvY31cbiAgICAgICAgICAgIGNvbGxlY3Rpb249e2NvbGxlY3Rpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2Jhc2VDbGFzc31fX2xhYmVsYH0+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVRyYW5zbGF0aW9uIiwiVGh1bWJuYWlsIiwidXNlQ29uZmlnIiwiZm9ybWF0VXNlQXNUaXRsZSIsImJhc2VDbGFzcyIsIlRodW1ibmFpbENhcmQiLCJwcm9wcyIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJkb2MiLCJjb2xsZWN0aW9uIiwidGh1bWJuYWlsIiwibGFiZWwiLCJsYWJlbEZyb21Qcm9wcyIsImFsaWduTGFiZWwiLCJ0IiwiaTE4biIsImNvbmZpZyIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsInRpdGxlIiwiZmlsZW5hbWUiLCJidXR0b24iLCJ0eXBlIiwiZGl2Iiwic2l6ZSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLFNBQVNDLGNBQWMsUUFBUSxnQkFBZ0I7QUFFL0MsT0FBT0MsZUFBZSxlQUFlO0FBQ3JDLFNBQVNDLFNBQVMsUUFBUSx5QkFBeUI7QUFDbkQsU0FBU0MsZ0JBQWdCLFFBQVEsMEJBQTBCO0FBRTNELE9BQU8sZUFBZTtBQUV0QixJQUFNQyxZQUFZO0FBRWxCLE9BQU8sSUFBTUMsZ0JBQWlDLFNBQUNDO0lBQzdDLElBQ0VDLFlBT0VELE1BUEZDLFdBQ0FDLFVBTUVGLE1BTkZFLFNBQ0FDLE1BS0VILE1BTEZHLEtBQ0FDLGFBSUVKLE1BSkZJLFlBQ0FDLFlBR0VMLE1BSEZLLFdBQ0FDLEFBQU9DLGlCQUVMUCxNQUZGTSxPQUNBRSxhQUNFUixNQURGUTtJQUdGLElBQW9CZCxrQkFBQUEsZUFBZSxZQUEzQmUsSUFBWWYsZ0JBQVplLEdBQUdDLE9BQVNoQixnQkFBVGdCO0lBQ1gsSUFBTUMsU0FBU2Y7SUFFZixJQUFNZ0IsVUFBVTtRQUNkZDtRQUNBRztRQUNBLE9BQU9DLFlBQVksY0FBYyxBQUFDLEdBQVksT0FBVkosV0FBVTtRQUM5Q1UsY0FBYyxBQUFDLEdBQTRCQSxPQUExQlYsV0FBVSxrQkFBMkIsT0FBWFU7S0FDNUMsQ0FBQ0ssTUFBTSxDQUFDQyxTQUFTQyxJQUFJLENBQUM7SUFFdkIsSUFBSUMsUUFBUVQ7SUFFWixJQUFJLENBQUNTLE9BQU87WUFNSmI7UUFMTmEsUUFBUW5CLGlCQUFpQjtZQUN2Qk0sS0FBQUE7WUFDQUMsWUFBQUE7WUFDQU0sTUFBQUE7WUFDQUMsUUFBQUE7UUFDRixRQUFNUixPQUFBQSxpQkFBQUEsMkJBQUFBLEtBQUtjLFFBQVEsS0FBYyxBQUFDLElBQWlCLE9BQWRSLEVBQUUsYUFBWTtJQUNyRDtJQUVBLHFCQUNFLG9CQUFDUztRQUNDQyxNQUFLO1FBQ0xILE9BQU9BO1FBQ1BmLFdBQVdXO1FBQ1hWLFNBQVNBO3FCQUVULG9CQUFDa0I7UUFBSW5CLFdBQVcsQUFBQyxHQUFZLE9BQVZILFdBQVU7T0FDMUJPLGFBQWFBLFdBQ2IsQ0FBQ0EsYUFBY0QsY0FBY0QscUJBQzVCLG9CQUFDUjtRQUNDMEIsTUFBSztRQUNMbEIsS0FBS0E7UUFDTEMsWUFBWUE7dUJBSWxCLG9CQUFDZ0I7UUFBSW5CLFdBQVcsQUFBQyxHQUFZLE9BQVZILFdBQVU7T0FDMUJrQjtBQUlULEVBQUUifQ==
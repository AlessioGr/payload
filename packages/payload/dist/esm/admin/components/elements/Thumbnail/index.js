import React from "react";
import FileGraphic from "../../graphics/File";
import useThumbnail from "../../../hooks/useThumbnail";
import "./index.scss";
var baseClass = "thumbnail";
var Thumbnail = function(props) {
    var doc = props.doc, filename = props.doc.filename, collection = props.collection, size = props.size, _props_className = props.className, className = _props_className === void 0 ? "" : _props_className;
    var thumbnailSRC = useThumbnail(collection, doc);
    var classes = [
        baseClass,
        "".concat(baseClass, "--size-").concat(size || "medium"),
        className
    ].join(" ");
    return /*#__PURE__*/ React.createElement("div", {
        className: classes
    }, thumbnailSRC && /*#__PURE__*/ React.createElement("img", {
        src: thumbnailSRC,
        alt: filename
    }), !thumbnailSRC && /*#__PURE__*/ React.createElement(FileGraphic, null));
};
export default Thumbnail;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1RodW1ibmFpbC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgRmlsZUdyYXBoaWMgZnJvbSAnLi4vLi4vZ3JhcGhpY3MvRmlsZSc7XG5pbXBvcnQgdXNlVGh1bWJuYWlsIGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZVRodW1ibmFpbCc7XG5cbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY29uc3QgYmFzZUNsYXNzID0gJ3RodW1ibmFpbCc7XG5cbmNvbnN0IFRodW1ibmFpbDogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBkb2MsXG4gICAgZG9jOiB7XG4gICAgICBmaWxlbmFtZSxcbiAgICB9LFxuICAgIGNvbGxlY3Rpb24sXG4gICAgc2l6ZSxcbiAgICBjbGFzc05hbWUgPSAnJyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHRodW1ibmFpbFNSQyA9IHVzZVRodW1ibmFpbChjb2xsZWN0aW9uLCBkb2MpO1xuXG4gIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgYmFzZUNsYXNzLFxuICAgIGAke2Jhc2VDbGFzc30tLXNpemUtJHtzaXplIHx8ICdtZWRpdW0nfWAsXG4gICAgY2xhc3NOYW1lLFxuICBdLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgIHt0aHVtYm5haWxTUkMgJiYgKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXt0aHVtYm5haWxTUkN9XG4gICAgICAgICAgYWx0PXtmaWxlbmFtZSBhcyBzdHJpbmd9XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgICAgeyF0aHVtYm5haWxTUkMgJiYgKFxuICAgICAgICA8RmlsZUdyYXBoaWMgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVGh1bWJuYWlsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRmlsZUdyYXBoaWMiLCJ1c2VUaHVtYm5haWwiLCJiYXNlQ2xhc3MiLCJUaHVtYm5haWwiLCJwcm9wcyIsImRvYyIsImZpbGVuYW1lIiwiY29sbGVjdGlvbiIsInNpemUiLCJjbGFzc05hbWUiLCJ0aHVtYm5haWxTUkMiLCJjbGFzc2VzIiwiam9pbiIsImRpdiIsImltZyIsInNyYyIsImFsdCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxRQUFRO0FBRTFCLE9BQU9DLGlCQUFpQixzQkFBc0I7QUFDOUMsT0FBT0Msa0JBQWtCLDhCQUE4QjtBQUV2RCxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyxZQUE2QixTQUFDQztJQUNsQyxJQUNFQyxNQU9FRCxNQVBGQyxLQUNBQSxBQUNFQyxXQUtBRixNQU5GQyxJQUNFQyxVQUVGQyxhQUdFSCxNQUhGRyxZQUNBQyxPQUVFSixNQUZGSSx5QkFFRUosTUFERkssV0FBQUEsMENBQVk7SUFHZCxJQUFNQyxlQUFlVCxhQUFhTSxZQUFZRjtJQUU5QyxJQUFNTSxVQUFVO1FBQ2RUO1FBQ0MsR0FBcUJNLE9BQW5CTixXQUFVLFdBQTBCLE9BQWpCTSxRQUFRO1FBQzlCQztLQUNELENBQUNHLElBQUksQ0FBQztJQUVQLHFCQUNFLG9CQUFDQztRQUFJSixXQUFXRTtPQUNiRCw4QkFDQyxvQkFBQ0k7UUFDQ0MsS0FBS0w7UUFDTE0sS0FBS1Y7UUFHUixDQUFDSSw4QkFDQSxvQkFBQ1Y7QUFJVDtBQUNBLGVBQWVHLFVBQVUifQ==
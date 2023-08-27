import React from "react";
import Tooltip from "../../elements/Tooltip";
import "./index.scss";
var baseClass = "field-error";
var Error = function(props) {
    var _props_showError = props.showError, showError = _props_showError === void 0 ? false : _props_showError, message = props.message;
    if (showError) {
        return /*#__PURE__*/ React.createElement(Tooltip, {
            className: baseClass,
            delay: 0
        }, message);
    }
    return null;
};
export default Error;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Vycm9yL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi4vLi4vZWxlbWVudHMvVG9vbHRpcCc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmNvbnN0IGJhc2VDbGFzcyA9ICdmaWVsZC1lcnJvcic7XG5cbmNvbnN0IEVycm9yOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHNob3dFcnJvciA9IGZhbHNlLFxuICAgIG1lc3NhZ2UsXG4gIH0gPSBwcm9wcztcblxuICBpZiAoc2hvd0Vycm9yKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUb29sdGlwXG4gICAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgICAgICBkZWxheT17MH1cbiAgICAgID5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L1Rvb2x0aXA+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3I7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJUb29sdGlwIiwiYmFzZUNsYXNzIiwiRXJyb3IiLCJwcm9wcyIsInNob3dFcnJvciIsIm1lc3NhZ2UiLCJjbGFzc05hbWUiLCJkZWxheSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLE9BQU9DLGFBQWEseUJBQXlCO0FBRzdDLE9BQU8sZUFBZTtBQUV0QixJQUFNQyxZQUFZO0FBRWxCLElBQU1DLFFBQXlCLFNBQUNDO0lBQzlCLHVCQUdJQSxNQUZGQyxXQUFBQSwwQ0FBWSwwQkFDWkMsVUFDRUYsTUFERkU7SUFHRixJQUFJRCxXQUFXO1FBQ2IscUJBQ0Usb0JBQUNKO1lBQ0NNLFdBQVdMO1lBQ1hNLE9BQU87V0FFTkY7SUFHUDtJQUVBLE9BQU87QUFDVDtBQUVBLGVBQWVILE1BQU0ifQ==
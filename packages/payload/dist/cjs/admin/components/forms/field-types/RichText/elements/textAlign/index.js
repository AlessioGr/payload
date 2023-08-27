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
var _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
var _AlignLeft = /*#__PURE__*/ _interop_require_default(require("../../../../../icons/AlignLeft"));
var _AlignCenter = /*#__PURE__*/ _interop_require_default(require("../../../../../icons/AlignCenter"));
var _AlignRight = /*#__PURE__*/ _interop_require_default(require("../../../../../icons/AlignRight"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _default = {
    name: "alignment",
    Button: function() {
        return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Button.default, {
            format: "left",
            type: "textAlign"
        }, /*#__PURE__*/ _react.default.createElement(_AlignLeft.default, null)), /*#__PURE__*/ _react.default.createElement(_Button.default, {
            format: "center",
            type: "textAlign"
        }, /*#__PURE__*/ _react.default.createElement(_AlignCenter.default, null)), /*#__PURE__*/ _react.default.createElement(_Button.default, {
            format: "right",
            type: "textAlign"
        }, /*#__PURE__*/ _react.default.createElement(_AlignRight.default, null)));
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JpY2hUZXh0L2VsZW1lbnRzL3RleHRBbGlnbi9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFbGVtZW50QnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgQWxpZ25MZWZ0SWNvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9pY29ucy9BbGlnbkxlZnQnO1xuaW1wb3J0IEFsaWduQ2VudGVySWNvbiBmcm9tICcuLi8uLi8uLi8uLi8uLi9pY29ucy9BbGlnbkNlbnRlcic7XG5pbXBvcnQgQWxpZ25SaWdodEljb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vaWNvbnMvQWxpZ25SaWdodCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2FsaWdubWVudCcsXG4gIEJ1dHRvbjogKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxFbGVtZW50QnV0dG9uXG4gICAgICAgICAgZm9ybWF0PVwibGVmdFwiXG4gICAgICAgICAgdHlwZT1cInRleHRBbGlnblwiXG4gICAgICAgID5cbiAgICAgICAgICA8QWxpZ25MZWZ0SWNvbiAvPlxuICAgICAgICA8L0VsZW1lbnRCdXR0b24+XG4gICAgICAgIDxFbGVtZW50QnV0dG9uXG4gICAgICAgICAgZm9ybWF0PVwiY2VudGVyXCJcbiAgICAgICAgICB0eXBlPVwidGV4dEFsaWduXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxBbGlnbkNlbnRlckljb24gLz5cbiAgICAgICAgPC9FbGVtZW50QnV0dG9uPlxuICAgICAgICA8RWxlbWVudEJ1dHRvblxuICAgICAgICAgIGZvcm1hdD1cInJpZ2h0XCJcbiAgICAgICAgICB0eXBlPVwidGV4dEFsaWduXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxBbGlnblJpZ2h0SWNvbiAvPlxuICAgICAgICA8L0VsZW1lbnRCdXR0b24+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIm5hbWUiLCJCdXR0b24iLCJSZWFjdCIsIkZyYWdtZW50IiwiRWxlbWVudEJ1dHRvbiIsImZvcm1hdCIsInR5cGUiLCJBbGlnbkxlZnRJY29uIiwiQWxpZ25DZW50ZXJJY29uIiwiQWxpZ25SaWdodEljb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBTUE7OztlQUFBOzs7NERBTmtCOzZEQUNRO2dFQUNBO2tFQUNFO2lFQUNEOzs7Ozs7SUFFM0IsV0FBZTtJQUNiQSxNQUFNO0lBQ05DLFFBQVE7UUFDTixxQkFDRSw2QkFBQ0MsY0FBSyxDQUFDQyxRQUFRLHNCQUNiLDZCQUFDQyxlQUFhO1lBQ1pDLFFBQU87WUFDUEMsTUFBSzt5QkFFTCw2QkFBQ0Msa0JBQWEsd0JBRWhCLDZCQUFDSCxlQUFhO1lBQ1pDLFFBQU87WUFDUEMsTUFBSzt5QkFFTCw2QkFBQ0Usb0JBQWUsd0JBRWxCLDZCQUFDSixlQUFhO1lBQ1pDLFFBQU87WUFDUEMsTUFBSzt5QkFFTCw2QkFBQ0csbUJBQWM7SUFJdkI7QUFDRiJ9
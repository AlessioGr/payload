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
var _reacttoastify = require("react-toastify");
var _modal = require("@faceless-ui/modal");
var _reacti18next = require("react-i18next");
var _Button = /*#__PURE__*/ _interop_require_default(require("../Button"));
var _Minimal = /*#__PURE__*/ _interop_require_default(require("../../templates/Minimal"));
var _DocumentInfo = require("../../utilities/DocumentInfo");
require("./index.scss");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseClass = "generate-confirmation";
var GenerateConfirmation = function(props) {
    var setKey = props.setKey, highlightField = props.highlightField;
    var id = (0, _DocumentInfo.useDocumentInfo)().id;
    var toggleModal = (0, _modal.useModal)().toggleModal;
    var t = (0, _reacti18next.useTranslation)("authentication").t;
    var modalSlug = "generate-confirmation-".concat(id);
    var handleGenerate = function() {
        setKey();
        toggleModal(modalSlug);
        _reacttoastify.toast.success(t("newAPIKeyGenerated"), {
            autoClose: 3000
        });
        highlightField(true);
    };
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(_Button.default, {
        size: "small",
        buttonStyle: "secondary",
        onClick: function() {
            toggleModal(modalSlug);
        }
    }, t("generateNewAPIKey")), /*#__PURE__*/ _react.default.createElement(_modal.Modal, {
        slug: modalSlug,
        className: baseClass
    }, /*#__PURE__*/ _react.default.createElement(_Minimal.default, {
        className: "".concat(baseClass, "__template")
    }, /*#__PURE__*/ _react.default.createElement("h1", null, t("confirmGeneration")), /*#__PURE__*/ _react.default.createElement("p", null, /*#__PURE__*/ _react.default.createElement(_reacti18next.Trans, {
        i18nKey: "generatingNewAPIKeyWillInvalidate",
        t: t
    }, "generatingNewAPIKeyWillInvalidate", /*#__PURE__*/ _react.default.createElement("strong", null, "invalidate"))), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        buttonStyle: "secondary",
        type: "button",
        onClick: function() {
            toggleModal(modalSlug);
        }
    }, t("general:cancel")), /*#__PURE__*/ _react.default.createElement(_Button.default, {
        onClick: handleGenerate
    }, t("generate")))));
};
var _default = GenerateConfirmation;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0dlbmVyYXRlQ29uZmlybWF0aW9uL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBNb2RhbCwgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgVHJhbnMsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgTWluaW1hbFRlbXBsYXRlIGZyb20gJy4uLy4uL3RlbXBsYXRlcy9NaW5pbWFsJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnZ2VuZXJhdGUtY29uZmlybWF0aW9uJztcblxuY29uc3QgR2VuZXJhdGVDb25maXJtYXRpb246IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgc2V0S2V5LFxuICAgIGhpZ2hsaWdodEZpZWxkLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyBpZCB9ID0gdXNlRG9jdW1lbnRJbmZvKCk7XG4gIGNvbnN0IHsgdG9nZ2xlTW9kYWwgfSA9IHVzZU1vZGFsKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2F1dGhlbnRpY2F0aW9uJyk7XG5cbiAgY29uc3QgbW9kYWxTbHVnID0gYGdlbmVyYXRlLWNvbmZpcm1hdGlvbi0ke2lkfWA7XG5cbiAgY29uc3QgaGFuZGxlR2VuZXJhdGUgPSAoKSA9PiB7XG4gICAgc2V0S2V5KCk7XG4gICAgdG9nZ2xlTW9kYWwobW9kYWxTbHVnKTtcbiAgICB0b2FzdC5zdWNjZXNzKHQoJ25ld0FQSUtleUdlbmVyYXRlZCcpLCB7IGF1dG9DbG9zZTogMzAwMCB9KTtcbiAgICBoaWdobGlnaHRGaWVsZCh0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgdG9nZ2xlTW9kYWwobW9kYWxTbHVnKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3QoJ2dlbmVyYXRlTmV3QVBJS2V5Jyl9XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxNb2RhbFxuICAgICAgICBzbHVnPXttb2RhbFNsdWd9XG4gICAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgICAgPlxuICAgICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdGVtcGxhdGVgfT5cbiAgICAgICAgICA8aDE+e3QoJ2NvbmZpcm1HZW5lcmF0aW9uJyl9PC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxUcmFuc1xuICAgICAgICAgICAgICBpMThuS2V5PVwiZ2VuZXJhdGluZ05ld0FQSUtleVdpbGxJbnZhbGlkYXRlXCJcbiAgICAgICAgICAgICAgdD17dH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgZ2VuZXJhdGluZ05ld0FQSUtleVdpbGxJbnZhbGlkYXRlXG4gICAgICAgICAgICAgIDxzdHJvbmc+aW52YWxpZGF0ZTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdG9nZ2xlTW9kYWwobW9kYWxTbHVnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ2dlbmVyYWw6Y2FuY2VsJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlR2VuZXJhdGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ2dlbmVyYXRlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhdGVDb25maXJtYXRpb247XG4iXSwibmFtZXMiOlsiYmFzZUNsYXNzIiwiR2VuZXJhdGVDb25maXJtYXRpb24iLCJwcm9wcyIsInNldEtleSIsImhpZ2hsaWdodEZpZWxkIiwiaWQiLCJ1c2VEb2N1bWVudEluZm8iLCJ0b2dnbGVNb2RhbCIsInVzZU1vZGFsIiwidCIsInVzZVRyYW5zbGF0aW9uIiwibW9kYWxTbHVnIiwiaGFuZGxlR2VuZXJhdGUiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJhdXRvQ2xvc2UiLCJSZWFjdCIsIkZyYWdtZW50IiwiQnV0dG9uIiwic2l6ZSIsImJ1dHRvblN0eWxlIiwib25DbGljayIsIk1vZGFsIiwic2x1ZyIsImNsYXNzTmFtZSIsIk1pbmltYWxUZW1wbGF0ZSIsImgxIiwicCIsIlRyYW5zIiwiaTE4bktleSIsInN0cm9uZyIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBK0VBOzs7ZUFBQTs7OzREQS9Fa0I7NkJBQ0k7cUJBQ1U7NEJBQ007NkRBQ25COzhEQUNTOzRCQUVJO1FBRXpCOzs7Ozs7QUFFUCxJQUFNQSxZQUFZO0FBRWxCLElBQU1DLHVCQUF3QyxTQUFDQztJQUM3QyxJQUNFQyxTQUVFRCxNQUZGQyxRQUNBQyxpQkFDRUYsTUFERkU7SUFHRixJQUFNLEFBQUVDLEtBQU9DLElBQUFBLDZCQUFlLElBQXRCRDtJQUNSLElBQU0sQUFBRUUsY0FBZ0JDLElBQUFBLGVBQVEsSUFBeEJEO0lBQ1IsSUFBTSxBQUFFRSxJQUFNQyxJQUFBQSw0QkFBYyxFQUFDLGtCQUFyQkQ7SUFFUixJQUFNRSxZQUFZLEFBQUMseUJBQTJCLE9BQUhOO0lBRTNDLElBQU1PLGlCQUFpQjtRQUNyQlQ7UUFDQUksWUFBWUk7UUFDWkUsb0JBQUssQ0FBQ0MsT0FBTyxDQUFDTCxFQUFFLHVCQUF1QjtZQUFFTSxXQUFXO1FBQUs7UUFDekRYLGVBQWU7SUFDakI7SUFFQSxxQkFDRSw2QkFBQ1ksY0FBSyxDQUFDQyxRQUFRLHNCQUNiLDZCQUFDQyxlQUFNO1FBQ0xDLE1BQUs7UUFDTEMsYUFBWTtRQUNaQyxTQUFTO1lBQ1BkLFlBQVlJO1FBQ2Q7T0FFQ0YsRUFBRSxxQ0FFTCw2QkFBQ2EsWUFBSztRQUNKQyxNQUFNWjtRQUNOYSxXQUFXeEI7cUJBRVgsNkJBQUN5QixnQkFBZTtRQUFDRCxXQUFXLEFBQUMsR0FBWSxPQUFWeEIsV0FBVTtxQkFDdkMsNkJBQUMwQixZQUFJakIsRUFBRSxxQ0FDUCw2QkFBQ2tCLHlCQUNDLDZCQUFDQyxtQkFBSztRQUNKQyxTQUFRO1FBQ1JwQixHQUFHQTtPQUNKLG1EQUVDLDZCQUFDcUIsZ0JBQU8sK0JBSVosNkJBQUNaLGVBQU07UUFDTEUsYUFBWTtRQUNaVyxNQUFLO1FBQ0xWLFNBQVM7WUFDUGQsWUFBWUk7UUFDZDtPQUVDRixFQUFFLGtDQUVMLDZCQUFDUyxlQUFNO1FBQ0xHLFNBQVNUO09BRVJILEVBQUU7QUFNZjtJQUVBLFdBQWVSIn0=
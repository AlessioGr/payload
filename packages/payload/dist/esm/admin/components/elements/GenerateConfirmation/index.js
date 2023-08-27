import React from "react";
import { toast } from "react-toastify";
import { Modal, useModal } from "@faceless-ui/modal";
import { Trans, useTranslation } from "react-i18next";
import Button from "../Button";
import MinimalTemplate from "../../templates/Minimal";
import { useDocumentInfo } from "../../utilities/DocumentInfo";
import "./index.scss";
var baseClass = "generate-confirmation";
var GenerateConfirmation = function(props) {
    var setKey = props.setKey, highlightField = props.highlightField;
    var id = useDocumentInfo().id;
    var toggleModal = useModal().toggleModal;
    var t = useTranslation("authentication").t;
    var modalSlug = "generate-confirmation-".concat(id);
    var handleGenerate = function() {
        setKey();
        toggleModal(modalSlug);
        toast.success(t("newAPIKeyGenerated"), {
            autoClose: 3000
        });
        highlightField(true);
    };
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Button, {
        size: "small",
        buttonStyle: "secondary",
        onClick: function() {
            toggleModal(modalSlug);
        }
    }, t("generateNewAPIKey")), /*#__PURE__*/ React.createElement(Modal, {
        slug: modalSlug,
        className: baseClass
    }, /*#__PURE__*/ React.createElement(MinimalTemplate, {
        className: "".concat(baseClass, "__template")
    }, /*#__PURE__*/ React.createElement("h1", null, t("confirmGeneration")), /*#__PURE__*/ React.createElement("p", null, /*#__PURE__*/ React.createElement(Trans, {
        i18nKey: "generatingNewAPIKeyWillInvalidate",
        t: t
    }, "generatingNewAPIKeyWillInvalidate", /*#__PURE__*/ React.createElement("strong", null, "invalidate"))), /*#__PURE__*/ React.createElement(Button, {
        buttonStyle: "secondary",
        type: "button",
        onClick: function() {
            toggleModal(modalSlug);
        }
    }, t("general:cancel")), /*#__PURE__*/ React.createElement(Button, {
        onClick: handleGenerate
    }, t("generate")))));
};
export default GenerateConfirmation;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL0dlbmVyYXRlQ29uZmlybWF0aW9uL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBNb2RhbCwgdXNlTW9kYWwgfSBmcm9tICdAZmFjZWxlc3MtdWkvbW9kYWwnO1xuaW1wb3J0IHsgVHJhbnMsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgTWluaW1hbFRlbXBsYXRlIGZyb20gJy4uLy4uL3RlbXBsYXRlcy9NaW5pbWFsJztcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyB1c2VEb2N1bWVudEluZm8gfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRG9jdW1lbnRJbmZvJztcblxuaW1wb3J0ICcuL2luZGV4LnNjc3MnO1xuXG5jb25zdCBiYXNlQ2xhc3MgPSAnZ2VuZXJhdGUtY29uZmlybWF0aW9uJztcblxuY29uc3QgR2VuZXJhdGVDb25maXJtYXRpb246IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgc2V0S2V5LFxuICAgIGhpZ2hsaWdodEZpZWxkLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgeyBpZCB9ID0gdXNlRG9jdW1lbnRJbmZvKCk7XG4gIGNvbnN0IHsgdG9nZ2xlTW9kYWwgfSA9IHVzZU1vZGFsKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ2F1dGhlbnRpY2F0aW9uJyk7XG5cbiAgY29uc3QgbW9kYWxTbHVnID0gYGdlbmVyYXRlLWNvbmZpcm1hdGlvbi0ke2lkfWA7XG5cbiAgY29uc3QgaGFuZGxlR2VuZXJhdGUgPSAoKSA9PiB7XG4gICAgc2V0S2V5KCk7XG4gICAgdG9nZ2xlTW9kYWwobW9kYWxTbHVnKTtcbiAgICB0b2FzdC5zdWNjZXNzKHQoJ25ld0FQSUtleUdlbmVyYXRlZCcpLCB7IGF1dG9DbG9zZTogMzAwMCB9KTtcbiAgICBoaWdobGlnaHRGaWVsZCh0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgYnV0dG9uU3R5bGU9XCJzZWNvbmRhcnlcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgdG9nZ2xlTW9kYWwobW9kYWxTbHVnKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3QoJ2dlbmVyYXRlTmV3QVBJS2V5Jyl9XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxNb2RhbFxuICAgICAgICBzbHVnPXttb2RhbFNsdWd9XG4gICAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgICAgPlxuICAgICAgICA8TWluaW1hbFRlbXBsYXRlIGNsYXNzTmFtZT17YCR7YmFzZUNsYXNzfV9fdGVtcGxhdGVgfT5cbiAgICAgICAgICA8aDE+e3QoJ2NvbmZpcm1HZW5lcmF0aW9uJyl9PC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxUcmFuc1xuICAgICAgICAgICAgICBpMThuS2V5PVwiZ2VuZXJhdGluZ05ld0FQSUtleVdpbGxJbnZhbGlkYXRlXCJcbiAgICAgICAgICAgICAgdD17dH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgZ2VuZXJhdGluZ05ld0FQSUtleVdpbGxJbnZhbGlkYXRlXG4gICAgICAgICAgICAgIDxzdHJvbmc+aW52YWxpZGF0ZTwvc3Ryb25nPlxuICAgICAgICAgICAgPC9UcmFucz5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdG9nZ2xlTW9kYWwobW9kYWxTbHVnKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ2dlbmVyYWw6Y2FuY2VsJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlR2VuZXJhdGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3QoJ2dlbmVyYXRlJyl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvTWluaW1hbFRlbXBsYXRlPlxuICAgICAgPC9Nb2RhbD5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhdGVDb25maXJtYXRpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ0b2FzdCIsIk1vZGFsIiwidXNlTW9kYWwiLCJUcmFucyIsInVzZVRyYW5zbGF0aW9uIiwiQnV0dG9uIiwiTWluaW1hbFRlbXBsYXRlIiwidXNlRG9jdW1lbnRJbmZvIiwiYmFzZUNsYXNzIiwiR2VuZXJhdGVDb25maXJtYXRpb24iLCJwcm9wcyIsInNldEtleSIsImhpZ2hsaWdodEZpZWxkIiwiaWQiLCJ0b2dnbGVNb2RhbCIsInQiLCJtb2RhbFNsdWciLCJoYW5kbGVHZW5lcmF0ZSIsInN1Y2Nlc3MiLCJhdXRvQ2xvc2UiLCJGcmFnbWVudCIsInNpemUiLCJidXR0b25TdHlsZSIsIm9uQ2xpY2siLCJzbHVnIiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiaTE4bktleSIsInN0cm9uZyIsInR5cGUiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFdBQVcsUUFBUTtBQUMxQixTQUFTQyxLQUFLLFFBQVEsaUJBQWlCO0FBQ3ZDLFNBQVNDLEtBQUssRUFBRUMsUUFBUSxRQUFRLHFCQUFxQjtBQUNyRCxTQUFTQyxLQUFLLEVBQUVDLGNBQWMsUUFBUSxnQkFBZ0I7QUFDdEQsT0FBT0MsWUFBWSxZQUFZO0FBQy9CLE9BQU9DLHFCQUFxQiwwQkFBMEI7QUFFdEQsU0FBU0MsZUFBZSxRQUFRLCtCQUErQjtBQUUvRCxPQUFPLGVBQWU7QUFFdEIsSUFBTUMsWUFBWTtBQUVsQixJQUFNQyx1QkFBd0MsU0FBQ0M7SUFDN0MsSUFDRUMsU0FFRUQsTUFGRkMsUUFDQUMsaUJBQ0VGLE1BREZFO0lBR0YsSUFBTSxBQUFFQyxLQUFPTixrQkFBUE07SUFDUixJQUFNLEFBQUVDLGNBQWdCWixXQUFoQlk7SUFDUixJQUFNLEFBQUVDLElBQU1YLGVBQWUsa0JBQXJCVztJQUVSLElBQU1DLFlBQVksQUFBQyx5QkFBMkIsT0FBSEg7SUFFM0MsSUFBTUksaUJBQWlCO1FBQ3JCTjtRQUNBRyxZQUFZRTtRQUNaaEIsTUFBTWtCLE9BQU8sQ0FBQ0gsRUFBRSx1QkFBdUI7WUFBRUksV0FBVztRQUFLO1FBQ3pEUCxlQUFlO0lBQ2pCO0lBRUEscUJBQ0Usb0JBQUNiLE1BQU1xQixRQUFRLHNCQUNiLG9CQUFDZjtRQUNDZ0IsTUFBSztRQUNMQyxhQUFZO1FBQ1pDLFNBQVM7WUFDUFQsWUFBWUU7UUFDZDtPQUVDRCxFQUFFLHFDQUVMLG9CQUFDZDtRQUNDdUIsTUFBTVI7UUFDTlMsV0FBV2pCO3FCQUVYLG9CQUFDRjtRQUFnQm1CLFdBQVcsQUFBQyxHQUFZLE9BQVZqQixXQUFVO3FCQUN2QyxvQkFBQ2tCLFlBQUlYLEVBQUUscUNBQ1Asb0JBQUNZLHlCQUNDLG9CQUFDeEI7UUFDQ3lCLFNBQVE7UUFDUmIsR0FBR0E7T0FDSixtREFFQyxvQkFBQ2MsZ0JBQU8sK0JBSVosb0JBQUN4QjtRQUNDaUIsYUFBWTtRQUNaUSxNQUFLO1FBQ0xQLFNBQVM7WUFDUFQsWUFBWUU7UUFDZDtPQUVDRCxFQUFFLGtDQUVMLG9CQUFDVjtRQUNDa0IsU0FBU047T0FFUkYsRUFBRTtBQU1mO0FBRUEsZUFBZU4scUJBQXFCIn0=
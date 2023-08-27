import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import FormSubmit from "../../forms/Submit";
import { useDocumentInfo } from "../../utilities/DocumentInfo";
import { useForm, useFormModified } from "../../forms/Form/context";
import RenderCustomComponent from "../../utilities/RenderCustomComponent";
var DefaultPublishButton = function(param) {
    var disabled = param.disabled, publish = param.publish, label = param.label;
    return /*#__PURE__*/ React.createElement(FormSubmit, {
        type: "button",
        onClick: publish,
        disabled: disabled
    }, label);
};
export var Publish = function(param) {
    var CustomComponent = param.CustomComponent;
    var _unpublishedVersions;
    var _useDocumentInfo = useDocumentInfo(), unpublishedVersions = _useDocumentInfo.unpublishedVersions, publishedDoc = _useDocumentInfo.publishedDoc;
    var submit = useForm().submit;
    var modified = useFormModified();
    var t = useTranslation("version").t;
    var hasNewerVersions = ((_unpublishedVersions = unpublishedVersions) === null || _unpublishedVersions === void 0 ? void 0 : _unpublishedVersions.totalDocs) > 0;
    var canPublish = modified || hasNewerVersions || !publishedDoc;
    var publish = useCallback(function() {
        submit({
            overrides: {
                _status: "published"
            }
        });
    }, [
        submit
    ]);
    return /*#__PURE__*/ React.createElement(RenderCustomComponent, {
        CustomComponent: CustomComponent,
        DefaultComponent: DefaultPublishButton,
        componentProps: {
            publish: publish,
            disabled: !canPublish,
            label: t("publishChanges"),
            DefaultButton: DefaultPublishButton
        }
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1B1Ymxpc2gvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgRm9ybVN1Ym1pdCBmcm9tICcuLi8uLi9mb3Jtcy9TdWJtaXQnO1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0RvY3VtZW50SW5mbyc7XG5pbXBvcnQgeyB1c2VGb3JtLCB1c2VGb3JtTW9kaWZpZWQgfSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtL2NvbnRleHQnO1xuaW1wb3J0IFJlbmRlckN1c3RvbUNvbXBvbmVudCBmcm9tICcuLi8uLi91dGlsaXRpZXMvUmVuZGVyQ3VzdG9tQ29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgQ3VzdG9tUHVibGlzaEJ1dHRvblByb3BzID0gUmVhY3QuQ29tcG9uZW50VHlwZTxEZWZhdWx0UHVibGlzaEJ1dHRvblByb3BzICYge1xuICBEZWZhdWx0QnV0dG9uOiBSZWFjdC5Db21wb25lbnRUeXBlPERlZmF1bHRQdWJsaXNoQnV0dG9uUHJvcHM+O1xufT5cbmV4cG9ydCB0eXBlIERlZmF1bHRQdWJsaXNoQnV0dG9uUHJvcHMgPSB7XG4gIHB1Ymxpc2g6ICgpID0+IHZvaWQ7XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBsYWJlbDogc3RyaW5nO1xufTtcbmNvbnN0IERlZmF1bHRQdWJsaXNoQnV0dG9uOiBSZWFjdC5GQzxEZWZhdWx0UHVibGlzaEJ1dHRvblByb3BzPiA9ICh7IGRpc2FibGVkLCBwdWJsaXNoLCBsYWJlbCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZvcm1TdWJtaXRcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgb25DbGljaz17cHVibGlzaH1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9Gb3JtU3VibWl0PlxuICApO1xufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgQ3VzdG9tQ29tcG9uZW50PzogQ3VzdG9tUHVibGlzaEJ1dHRvblByb3BzXG59XG5leHBvcnQgY29uc3QgUHVibGlzaDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgQ3VzdG9tQ29tcG9uZW50IH0pID0+IHtcbiAgY29uc3QgeyB1bnB1Ymxpc2hlZFZlcnNpb25zLCBwdWJsaXNoZWREb2MgfSA9IHVzZURvY3VtZW50SW5mbygpO1xuICBjb25zdCB7IHN1Ym1pdCB9ID0gdXNlRm9ybSgpO1xuICBjb25zdCBtb2RpZmllZCA9IHVzZUZvcm1Nb2RpZmllZCgpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCd2ZXJzaW9uJyk7XG5cbiAgY29uc3QgaGFzTmV3ZXJWZXJzaW9ucyA9IHVucHVibGlzaGVkVmVyc2lvbnM/LnRvdGFsRG9jcyA+IDA7XG4gIGNvbnN0IGNhblB1Ymxpc2ggPSBtb2RpZmllZCB8fCBoYXNOZXdlclZlcnNpb25zIHx8ICFwdWJsaXNoZWREb2M7XG5cbiAgY29uc3QgcHVibGlzaCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzdWJtaXQoe1xuICAgICAgb3ZlcnJpZGVzOiB7XG4gICAgICAgIF9zdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSwgW3N1Ym1pdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlbmRlckN1c3RvbUNvbXBvbmVudFxuICAgICAgQ3VzdG9tQ29tcG9uZW50PXtDdXN0b21Db21wb25lbnR9XG4gICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0UHVibGlzaEJ1dHRvbn1cbiAgICAgIGNvbXBvbmVudFByb3BzPXt7XG4gICAgICAgIHB1Ymxpc2gsXG4gICAgICAgIGRpc2FibGVkOiAhY2FuUHVibGlzaCxcbiAgICAgICAgbGFiZWw6IHQoJ3B1Ymxpc2hDaGFuZ2VzJyksXG4gICAgICAgIERlZmF1bHRCdXR0b246IERlZmF1bHRQdWJsaXNoQnV0dG9uLFxuICAgICAgfX1cbiAgICAvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlVHJhbnNsYXRpb24iLCJGb3JtU3VibWl0IiwidXNlRG9jdW1lbnRJbmZvIiwidXNlRm9ybSIsInVzZUZvcm1Nb2RpZmllZCIsIlJlbmRlckN1c3RvbUNvbXBvbmVudCIsIkRlZmF1bHRQdWJsaXNoQnV0dG9uIiwiZGlzYWJsZWQiLCJwdWJsaXNoIiwibGFiZWwiLCJ0eXBlIiwib25DbGljayIsIlB1Ymxpc2giLCJDdXN0b21Db21wb25lbnQiLCJ1bnB1Ymxpc2hlZFZlcnNpb25zIiwicHVibGlzaGVkRG9jIiwic3VibWl0IiwibW9kaWZpZWQiLCJ0IiwiaGFzTmV3ZXJWZXJzaW9ucyIsInRvdGFsRG9jcyIsImNhblB1Ymxpc2giLCJvdmVycmlkZXMiLCJfc3RhdHVzIiwiRGVmYXVsdENvbXBvbmVudCIsImNvbXBvbmVudFByb3BzIiwiRGVmYXVsdEJ1dHRvbiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBU0MsV0FBVyxRQUFRLFFBQVE7QUFDM0MsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxPQUFPQyxnQkFBZ0IscUJBQXFCO0FBQzVDLFNBQVNDLGVBQWUsUUFBUSwrQkFBK0I7QUFDL0QsU0FBU0MsT0FBTyxFQUFFQyxlQUFlLFFBQVEsMkJBQTJCO0FBQ3BFLE9BQU9DLDJCQUEyQix3Q0FBd0M7QUFVMUUsSUFBTUMsdUJBQTREO1FBQUdDLGlCQUFBQSxVQUFVQyxnQkFBQUEsU0FBU0MsY0FBQUE7SUFDdEYscUJBQ0Usb0JBQUNSO1FBQ0NTLE1BQUs7UUFDTEMsU0FBU0g7UUFDVEQsVUFBVUE7T0FFVEU7QUFHUDtBQUtBLE9BQU8sSUFBTUcsVUFBMkI7UUFBR0Msd0JBQUFBO1FBTWhCQztJQUx6QixJQUE4Q1osbUJBQUFBLG1CQUF0Q1ksc0JBQXNDWixpQkFBdENZLHFCQUFxQkMsZUFBaUJiLGlCQUFqQmE7SUFDN0IsSUFBTSxBQUFFQyxTQUFXYixVQUFYYTtJQUNSLElBQU1DLFdBQVdiO0lBQ2pCLElBQU0sQUFBRWMsSUFBTWxCLGVBQWUsV0FBckJrQjtJQUVSLElBQU1DLG1CQUFtQkwsRUFBQUEsdUJBQUFBLGlDQUFBQSwyQ0FBQUEscUJBQXFCTSxTQUFTLElBQUc7SUFDMUQsSUFBTUMsYUFBYUosWUFBWUUsb0JBQW9CLENBQUNKO0lBRXBELElBQU1QLFVBQVVULFlBQVk7UUFDMUJpQixPQUFPO1lBQ0xNLFdBQVc7Z0JBQ1RDLFNBQVM7WUFDWDtRQUNGO0lBQ0YsR0FBRztRQUFDUDtLQUFPO0lBRVgscUJBQ0Usb0JBQUNYO1FBQ0NRLGlCQUFpQkE7UUFDakJXLGtCQUFrQmxCO1FBQ2xCbUIsZ0JBQWdCO1lBQ2RqQixTQUFBQTtZQUNBRCxVQUFVLENBQUNjO1lBQ1haLE9BQU9TLEVBQUU7WUFDVFEsZUFBZXBCO1FBQ2pCOztBQUdOLEVBQUUifQ==
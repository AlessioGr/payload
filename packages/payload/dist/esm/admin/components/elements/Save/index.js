import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import FormSubmit from "../../forms/Submit";
import useHotkey from "../../../hooks/useHotkey";
import RenderCustomComponent from "../../utilities/RenderCustomComponent";
import { useEditDepth } from "../../utilities/EditDepth";
import { useForm } from "../../forms/Form/context";
var DefaultSaveButton = function(param) {
    var label = param.label, save = param.save;
    var ref = useRef(null);
    var editDepth = useEditDepth();
    useHotkey({
        keyCodes: [
            "s"
        ],
        cmdCtrlKey: true,
        editDepth: editDepth
    }, function(e) {
        var _ref;
        e.preventDefault();
        e.stopPropagation();
        if ((_ref = ref) === null || _ref === void 0 ? void 0 : _ref.current) {
            ref.current.click();
        }
    });
    return /*#__PURE__*/ React.createElement(FormSubmit, {
        type: "button",
        buttonId: "action-save",
        onClick: save,
        ref: ref
    }, label);
};
export var Save = function(param) {
    var CustomComponent = param.CustomComponent;
    var t = useTranslation("general").t;
    var submit = useForm().submit;
    return /*#__PURE__*/ React.createElement(RenderCustomComponent, {
        CustomComponent: CustomComponent,
        DefaultComponent: DefaultSaveButton,
        componentProps: {
            save: submit,
            label: t("save"),
            DefaultButton: DefaultSaveButton
        }
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1NhdmUvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IEZvcm1TdWJtaXQgZnJvbSAnLi4vLi4vZm9ybXMvU3VibWl0JztcbmltcG9ydCB1c2VIb3RrZXkgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlSG90a2V5JztcbmltcG9ydCBSZW5kZXJDdXN0b21Db21wb25lbnQgZnJvbSAnLi4vLi4vdXRpbGl0aWVzL1JlbmRlckN1c3RvbUNvbXBvbmVudCc7XG5pbXBvcnQgeyB1c2VFZGl0RGVwdGggfSBmcm9tICcuLi8uLi91dGlsaXRpZXMvRWRpdERlcHRoJztcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtL2NvbnRleHQnO1xuXG5leHBvcnQgdHlwZSBDdXN0b21TYXZlQnV0dG9uUHJvcHMgPSBSZWFjdC5Db21wb25lbnRUeXBlPERlZmF1bHRTYXZlQnV0dG9uUHJvcHMgJiB7XG4gIERlZmF1bHRCdXR0b246IFJlYWN0LkNvbXBvbmVudFR5cGU8RGVmYXVsdFNhdmVCdXR0b25Qcm9wcz47XG59PlxudHlwZSBEZWZhdWx0U2F2ZUJ1dHRvblByb3BzID0ge1xuICBsYWJlbDogc3RyaW5nO1xuICBzYXZlOiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgRGVmYXVsdFNhdmVCdXR0b246IFJlYWN0LkZDPERlZmF1bHRTYXZlQnV0dG9uUHJvcHM+ID0gKHsgbGFiZWwsIHNhdmUgfSkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBlZGl0RGVwdGggPSB1c2VFZGl0RGVwdGgoKTtcblxuICB1c2VIb3RrZXkoeyBrZXlDb2RlczogWydzJ10sIGNtZEN0cmxLZXk6IHRydWUsIGVkaXREZXB0aCB9LCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmIChyZWY/LmN1cnJlbnQpIHtcbiAgICAgIHJlZi5jdXJyZW50LmNsaWNrKCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtU3VibWl0XG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGJ1dHRvbklkPVwiYWN0aW9uLXNhdmVcIlxuICAgICAgb25DbGljaz17c2F2ZX1cbiAgICAgIHJlZj17cmVmfVxuICAgID5cbiAgICAgIHtsYWJlbH1cbiAgICA8L0Zvcm1TdWJtaXQ+XG4gICk7XG59O1xuXG50eXBlIFByb3BzID0ge1xuICBDdXN0b21Db21wb25lbnQ/OiBDdXN0b21TYXZlQnV0dG9uUHJvcHM7XG59XG5leHBvcnQgY29uc3QgU2F2ZTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgQ3VzdG9tQ29tcG9uZW50IH0pID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignZ2VuZXJhbCcpO1xuICBjb25zdCB7IHN1Ym1pdCB9ID0gdXNlRm9ybSgpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlbmRlckN1c3RvbUNvbXBvbmVudFxuICAgICAgQ3VzdG9tQ29tcG9uZW50PXtDdXN0b21Db21wb25lbnR9XG4gICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0U2F2ZUJ1dHRvbn1cbiAgICAgIGNvbXBvbmVudFByb3BzPXt7XG4gICAgICAgIHNhdmU6IHN1Ym1pdCxcbiAgICAgICAgbGFiZWw6IHQoJ3NhdmUnKSxcbiAgICAgICAgRGVmYXVsdEJ1dHRvbjogRGVmYXVsdFNhdmVCdXR0b24sXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlVHJhbnNsYXRpb24iLCJGb3JtU3VibWl0IiwidXNlSG90a2V5IiwiUmVuZGVyQ3VzdG9tQ29tcG9uZW50IiwidXNlRWRpdERlcHRoIiwidXNlRm9ybSIsIkRlZmF1bHRTYXZlQnV0dG9uIiwibGFiZWwiLCJzYXZlIiwicmVmIiwiZWRpdERlcHRoIiwia2V5Q29kZXMiLCJjbWRDdHJsS2V5IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImNsaWNrIiwidHlwZSIsImJ1dHRvbklkIiwib25DbGljayIsIlNhdmUiLCJDdXN0b21Db21wb25lbnQiLCJ0Iiwic3VibWl0IiwiRGVmYXVsdENvbXBvbmVudCIsImNvbXBvbmVudFByb3BzIiwiRGVmYXVsdEJ1dHRvbiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBU0MsTUFBTSxRQUFRLFFBQVE7QUFDdEMsU0FBU0MsY0FBYyxRQUFRLGdCQUFnQjtBQUMvQyxPQUFPQyxnQkFBZ0IscUJBQXFCO0FBQzVDLE9BQU9DLGVBQWUsMkJBQTJCO0FBQ2pELE9BQU9DLDJCQUEyQix3Q0FBd0M7QUFDMUUsU0FBU0MsWUFBWSxRQUFRLDRCQUE0QjtBQUN6RCxTQUFTQyxPQUFPLFFBQVEsMkJBQTJCO0FBVW5ELElBQU1DLG9CQUFzRDtRQUFHQyxjQUFBQSxPQUFPQyxhQUFBQTtJQUNwRSxJQUFNQyxNQUFNVixPQUEwQjtJQUN0QyxJQUFNVyxZQUFZTjtJQUVsQkYsVUFBVTtRQUFFUyxVQUFVO1lBQUM7U0FBSTtRQUFFQyxZQUFZO1FBQU1GLFdBQUFBO0lBQVUsR0FBRyxTQUFDRztZQUd2REo7UUFGSkksRUFBRUMsY0FBYztRQUNoQkQsRUFBRUUsZUFBZTtRQUNqQixLQUFJTixPQUFBQSxpQkFBQUEsMkJBQUFBLEtBQUtPLE9BQU8sRUFBRTtZQUNoQlAsSUFBSU8sT0FBTyxDQUFDQyxLQUFLO1FBQ25CO0lBQ0Y7SUFFQSxxQkFDRSxvQkFBQ2hCO1FBQ0NpQixNQUFLO1FBQ0xDLFVBQVM7UUFDVEMsU0FBU1o7UUFDVEMsS0FBS0E7T0FFSkY7QUFHUDtBQUtBLE9BQU8sSUFBTWMsT0FBd0I7UUFBR0Msd0JBQUFBO0lBQ3RDLElBQU0sQUFBRUMsSUFBTXZCLGVBQWUsV0FBckJ1QjtJQUNSLElBQU0sQUFBRUMsU0FBV25CLFVBQVhtQjtJQUVSLHFCQUNFLG9CQUFDckI7UUFDQ21CLGlCQUFpQkE7UUFDakJHLGtCQUFrQm5CO1FBQ2xCb0IsZ0JBQWdCO1lBQ2RsQixNQUFNZ0I7WUFDTmpCLE9BQU9nQixFQUFFO1lBQ1RJLGVBQWVyQjtRQUNqQjs7QUFHTixFQUFFIn0=
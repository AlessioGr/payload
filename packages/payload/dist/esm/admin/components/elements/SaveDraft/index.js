import React, { useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useConfig } from "../../utilities/Config";
import FormSubmit from "../../forms/Submit";
import { useForm, useFormModified } from "../../forms/Form/context";
import { useDocumentInfo } from "../../utilities/DocumentInfo";
import { useLocale } from "../../utilities/Locale";
import useHotkey from "../../../hooks/useHotkey";
import RenderCustomComponent from "../../utilities/RenderCustomComponent";
import { useEditDepth } from "../../utilities/EditDepth";
var baseClass = "save-draft";
var DefaultSaveDraftButton = function(param) {
    var disabled = param.disabled, saveDraft = param.saveDraft, label = param.label;
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
        if (disabled) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if ((_ref = ref) === null || _ref === void 0 ? void 0 : _ref.current) {
            ref.current.click();
        }
    });
    return /*#__PURE__*/ React.createElement(FormSubmit, {
        className: baseClass,
        type: "button",
        buttonStyle: "secondary",
        onClick: saveDraft,
        disabled: disabled,
        ref: ref
    }, label);
};
export var SaveDraft = function(param) {
    var CustomComponent = param.CustomComponent;
    var _useConfig = useConfig(), serverURL = _useConfig.serverURL, api = _useConfig.routes.api;
    var submit = useForm().submit;
    var _useDocumentInfo = useDocumentInfo(), collection = _useDocumentInfo.collection, global = _useDocumentInfo.global, id = _useDocumentInfo.id;
    var modified = useFormModified();
    var _useLocale = useLocale(), locale = _useLocale.code;
    var t = useTranslation("version").t;
    var canSaveDraft = modified;
    var saveDraft = useCallback(function() {
        var search = "?locale=".concat(locale, "&depth=0&fallback-locale=null&draft=true");
        var action;
        var method = "POST";
        if (collection) {
            action = "".concat(serverURL).concat(api, "/").concat(collection.slug).concat(id ? "/".concat(id) : "").concat(search);
            if (id) method = "PATCH";
        }
        if (global) {
            action = "".concat(serverURL).concat(api, "/globals/").concat(global.slug).concat(search);
        }
        submit({
            action: action,
            method: method,
            skipValidation: true,
            overrides: {
                _status: "draft"
            }
        });
    }, [
        submit,
        collection,
        global,
        serverURL,
        api,
        locale,
        id
    ]);
    return /*#__PURE__*/ React.createElement(RenderCustomComponent, {
        CustomComponent: CustomComponent,
        DefaultComponent: DefaultSaveDraftButton,
        componentProps: {
            saveDraft: saveDraft,
            disabled: !canSaveDraft,
            label: t("saveDraft"),
            DefaultButton: DefaultSaveDraftButton
        }
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1NhdmVEcmFmdC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0NvbmZpZyc7XG5pbXBvcnQgRm9ybVN1Ym1pdCBmcm9tICcuLi8uLi9mb3Jtcy9TdWJtaXQnO1xuaW1wb3J0IHsgdXNlRm9ybSwgdXNlRm9ybU1vZGlmaWVkIH0gZnJvbSAnLi4vLi4vZm9ybXMvRm9ybS9jb250ZXh0JztcbmltcG9ydCB7IHVzZURvY3VtZW50SW5mbyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9Eb2N1bWVudEluZm8nO1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0xvY2FsZSc7XG5pbXBvcnQgdXNlSG90a2V5IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZUhvdGtleSc7XG5pbXBvcnQgUmVuZGVyQ3VzdG9tQ29tcG9uZW50IGZyb20gJy4uLy4uL3V0aWxpdGllcy9SZW5kZXJDdXN0b21Db21wb25lbnQnO1xuaW1wb3J0IHsgdXNlRWRpdERlcHRoIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0VkaXREZXB0aCc7XG5cblxuY29uc3QgYmFzZUNsYXNzID0gJ3NhdmUtZHJhZnQnO1xuXG5leHBvcnQgdHlwZSBDdXN0b21TYXZlRHJhZnRCdXR0b25Qcm9wcyA9IFJlYWN0LkNvbXBvbmVudFR5cGU8RGVmYXVsdFNhdmVEcmFmdEJ1dHRvblByb3BzICYge1xuICBEZWZhdWx0QnV0dG9uOiBSZWFjdC5Db21wb25lbnRUeXBlPERlZmF1bHRTYXZlRHJhZnRCdXR0b25Qcm9wcz47XG59PlxuZXhwb3J0IHR5cGUgRGVmYXVsdFNhdmVEcmFmdEJ1dHRvblByb3BzID0ge1xuICBzYXZlRHJhZnQ6ICgpID0+IHZvaWQ7XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBsYWJlbDogc3RyaW5nO1xufTtcbmNvbnN0IERlZmF1bHRTYXZlRHJhZnRCdXR0b246IFJlYWN0LkZDPERlZmF1bHRTYXZlRHJhZnRCdXR0b25Qcm9wcz4gPSAoeyBkaXNhYmxlZCwgc2F2ZURyYWZ0LCBsYWJlbCB9KSA9PiB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MQnV0dG9uRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGVkaXREZXB0aCA9IHVzZUVkaXREZXB0aCgpO1xuXG4gIHVzZUhvdGtleSh7IGtleUNvZGVzOiBbJ3MnXSwgY21kQ3RybEtleTogdHJ1ZSwgZWRpdERlcHRoIH0sIChlKSA9PiB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHJlZj8uY3VycmVudCkge1xuICAgICAgcmVmLmN1cnJlbnQuY2xpY2soKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZvcm1TdWJtaXRcbiAgICAgIGNsYXNzTmFtZT17YmFzZUNsYXNzfVxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBidXR0b25TdHlsZT1cInNlY29uZGFyeVwiXG4gICAgICBvbkNsaWNrPXtzYXZlRHJhZnR9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICByZWY9e3JlZn1cbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9Gb3JtU3VibWl0PlxuICApO1xufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgQ3VzdG9tQ29tcG9uZW50PzogQ3VzdG9tU2F2ZURyYWZ0QnV0dG9uUHJvcHNcbn1cbmV4cG9ydCBjb25zdCBTYXZlRHJhZnQ6IFJlYWN0LkZDPFByb3BzPiA9ICh7IEN1c3RvbUNvbXBvbmVudCB9KSA9PiB7XG4gIGNvbnN0IHsgc2VydmVyVVJMLCByb3V0ZXM6IHsgYXBpIH0gfSA9IHVzZUNvbmZpZygpO1xuICBjb25zdCB7IHN1Ym1pdCB9ID0gdXNlRm9ybSgpO1xuICBjb25zdCB7IGNvbGxlY3Rpb24sIGdsb2JhbCwgaWQgfSA9IHVzZURvY3VtZW50SW5mbygpO1xuICBjb25zdCBtb2RpZmllZCA9IHVzZUZvcm1Nb2RpZmllZCgpO1xuICBjb25zdCB7IGNvZGU6IGxvY2FsZSB9ID0gdXNlTG9jYWxlKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oJ3ZlcnNpb24nKTtcblxuICBjb25zdCBjYW5TYXZlRHJhZnQgPSBtb2RpZmllZDtcblxuICBjb25zdCBzYXZlRHJhZnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoID0gYD9sb2NhbGU9JHtsb2NhbGV9JmRlcHRoPTAmZmFsbGJhY2stbG9jYWxlPW51bGwmZHJhZnQ9dHJ1ZWA7XG4gICAgbGV0IGFjdGlvbjtcbiAgICBsZXQgbWV0aG9kID0gJ1BPU1QnO1xuXG4gICAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICAgIGFjdGlvbiA9IGAke3NlcnZlclVSTH0ke2FwaX0vJHtjb2xsZWN0aW9uLnNsdWd9JHtpZCA/IGAvJHtpZH1gIDogJyd9JHtzZWFyY2h9YDtcbiAgICAgIGlmIChpZCkgbWV0aG9kID0gJ1BBVENIJztcbiAgICB9XG5cbiAgICBpZiAoZ2xvYmFsKSB7XG4gICAgICBhY3Rpb24gPSBgJHtzZXJ2ZXJVUkx9JHthcGl9L2dsb2JhbHMvJHtnbG9iYWwuc2x1Z30ke3NlYXJjaH1gO1xuICAgIH1cblxuICAgIHN1Ym1pdCh7XG4gICAgICBhY3Rpb24sXG4gICAgICBtZXRob2QsXG4gICAgICBza2lwVmFsaWRhdGlvbjogdHJ1ZSxcbiAgICAgIG92ZXJyaWRlczoge1xuICAgICAgICBfc3RhdHVzOiAnZHJhZnQnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSwgW3N1Ym1pdCwgY29sbGVjdGlvbiwgZ2xvYmFsLCBzZXJ2ZXJVUkwsIGFwaSwgbG9jYWxlLCBpZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlbmRlckN1c3RvbUNvbXBvbmVudFxuICAgICAgQ3VzdG9tQ29tcG9uZW50PXtDdXN0b21Db21wb25lbnR9XG4gICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0U2F2ZURyYWZ0QnV0dG9ufVxuICAgICAgY29tcG9uZW50UHJvcHM9e3tcbiAgICAgICAgc2F2ZURyYWZ0LFxuICAgICAgICBkaXNhYmxlZDogIWNhblNhdmVEcmFmdCxcbiAgICAgICAgbGFiZWw6IHQoJ3NhdmVEcmFmdCcpLFxuICAgICAgICBEZWZhdWx0QnV0dG9uOiBEZWZhdWx0U2F2ZURyYWZ0QnV0dG9uLFxuICAgICAgfX1cbiAgICAvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlUmVmIiwidXNlVHJhbnNsYXRpb24iLCJ1c2VDb25maWciLCJGb3JtU3VibWl0IiwidXNlRm9ybSIsInVzZUZvcm1Nb2RpZmllZCIsInVzZURvY3VtZW50SW5mbyIsInVzZUxvY2FsZSIsInVzZUhvdGtleSIsIlJlbmRlckN1c3RvbUNvbXBvbmVudCIsInVzZUVkaXREZXB0aCIsImJhc2VDbGFzcyIsIkRlZmF1bHRTYXZlRHJhZnRCdXR0b24iLCJkaXNhYmxlZCIsInNhdmVEcmFmdCIsImxhYmVsIiwicmVmIiwiZWRpdERlcHRoIiwia2V5Q29kZXMiLCJjbWRDdHJsS2V5IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImNsaWNrIiwiY2xhc3NOYW1lIiwidHlwZSIsImJ1dHRvblN0eWxlIiwib25DbGljayIsIlNhdmVEcmFmdCIsIkN1c3RvbUNvbXBvbmVudCIsInNlcnZlclVSTCIsInJvdXRlcyIsImFwaSIsInN1Ym1pdCIsImNvbGxlY3Rpb24iLCJnbG9iYWwiLCJpZCIsIm1vZGlmaWVkIiwiY29kZSIsImxvY2FsZSIsInQiLCJjYW5TYXZlRHJhZnQiLCJzZWFyY2giLCJhY3Rpb24iLCJtZXRob2QiLCJzbHVnIiwic2tpcFZhbGlkYXRpb24iLCJvdmVycmlkZXMiLCJfc3RhdHVzIiwiRGVmYXVsdENvbXBvbmVudCIsImNvbXBvbmVudFByb3BzIiwiRGVmYXVsdEJ1dHRvbiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBU0MsV0FBVyxFQUFFQyxNQUFNLFFBQVEsUUFBUTtBQUNuRCxTQUFTQyxjQUFjLFFBQVEsZ0JBQWdCO0FBQy9DLFNBQVNDLFNBQVMsUUFBUSx5QkFBeUI7QUFDbkQsT0FBT0MsZ0JBQWdCLHFCQUFxQjtBQUM1QyxTQUFTQyxPQUFPLEVBQUVDLGVBQWUsUUFBUSwyQkFBMkI7QUFDcEUsU0FBU0MsZUFBZSxRQUFRLCtCQUErQjtBQUMvRCxTQUFTQyxTQUFTLFFBQVEseUJBQXlCO0FBQ25ELE9BQU9DLGVBQWUsMkJBQTJCO0FBQ2pELE9BQU9DLDJCQUEyQix3Q0FBd0M7QUFDMUUsU0FBU0MsWUFBWSxRQUFRLDRCQUE0QjtBQUd6RCxJQUFNQyxZQUFZO0FBVWxCLElBQU1DLHlCQUFnRTtRQUFHQyxpQkFBQUEsVUFBVUMsa0JBQUFBLFdBQVdDLGNBQUFBO0lBQzVGLElBQU1DLE1BQU1oQixPQUEwQjtJQUN0QyxJQUFNaUIsWUFBWVA7SUFFbEJGLFVBQVU7UUFBRVUsVUFBVTtZQUFDO1NBQUk7UUFBRUMsWUFBWTtRQUFNRixXQUFBQTtJQUFVLEdBQUcsU0FBQ0c7WUFPdkRKO1FBTkosSUFBSUgsVUFBVTtZQUNaO1FBQ0Y7UUFFQU8sRUFBRUMsY0FBYztRQUNoQkQsRUFBRUUsZUFBZTtRQUNqQixLQUFJTixPQUFBQSxpQkFBQUEsMkJBQUFBLEtBQUtPLE9BQU8sRUFBRTtZQUNoQlAsSUFBSU8sT0FBTyxDQUFDQyxLQUFLO1FBQ25CO0lBQ0Y7SUFFQSxxQkFDRSxvQkFBQ3JCO1FBQ0NzQixXQUFXZDtRQUNYZSxNQUFLO1FBQ0xDLGFBQVk7UUFDWkMsU0FBU2Q7UUFDVEQsVUFBVUE7UUFDVkcsS0FBS0E7T0FFSkQ7QUFHUDtBQUtBLE9BQU8sSUFBTWMsWUFBNkI7UUFBR0Msd0JBQUFBO0lBQzNDLElBQXVDNUIsYUFBQUEsYUFBL0I2QixZQUErQjdCLFdBQS9CNkIsV0FBV0MsQUFBVUMsTUFBVS9CLFdBQXBCOEIsT0FBVUM7SUFDN0IsSUFBTSxBQUFFQyxTQUFXOUIsVUFBWDhCO0lBQ1IsSUFBbUM1QixtQkFBQUEsbUJBQTNCNkIsYUFBMkI3QixpQkFBM0I2QixZQUFZQyxTQUFlOUIsaUJBQWY4QixRQUFRQyxLQUFPL0IsaUJBQVArQjtJQUM1QixJQUFNQyxXQUFXakM7SUFDakIsSUFBeUJFLGFBQUFBLGFBQWpCZ0MsQUFBTUMsU0FBV2pDLFdBQWpCZ0M7SUFDUixJQUFNLEFBQUVFLElBQU14QyxlQUFlLFdBQXJCd0M7SUFFUixJQUFNQyxlQUFlSjtJQUVyQixJQUFNeEIsWUFBWWYsWUFBWTtRQUM1QixJQUFNNEMsU0FBUyxBQUFDLFdBQWlCLE9BQVBILFFBQU87UUFDakMsSUFBSUk7UUFDSixJQUFJQyxTQUFTO1FBRWIsSUFBSVYsWUFBWTtZQUNkUyxTQUFTLEFBQUMsR0FBY1gsT0FBWkYsV0FBbUJJLE9BQVBGLEtBQUksS0FBcUJJLE9BQWxCRixXQUFXVyxJQUFJLEVBQXdCSCxPQUFyQk4sS0FBSyxBQUFDLElBQU0sT0FBSEEsTUFBTyxJQUFZLE9BQVBNO1lBQ3RFLElBQUlOLElBQUlRLFNBQVM7UUFDbkI7UUFFQSxJQUFJVCxRQUFRO1lBQ1ZRLFNBQVMsQUFBQyxHQUFjWCxPQUFaRixXQUEyQkssT0FBZkgsS0FBSSxhQUF5QlUsT0FBZFAsT0FBT1UsSUFBSSxFQUFVLE9BQVBIO1FBQ3ZEO1FBRUFULE9BQU87WUFDTFUsUUFBQUE7WUFDQUMsUUFBQUE7WUFDQUUsZ0JBQWdCO1lBQ2hCQyxXQUFXO2dCQUNUQyxTQUFTO1lBQ1g7UUFDRjtJQUNGLEdBQUc7UUFBQ2Y7UUFBUUM7UUFBWUM7UUFBUUw7UUFBV0U7UUFBS087UUFBUUg7S0FBRztJQUUzRCxxQkFDRSxvQkFBQzVCO1FBQ0NxQixpQkFBaUJBO1FBQ2pCb0Isa0JBQWtCdEM7UUFDbEJ1QyxnQkFBZ0I7WUFDZHJDLFdBQUFBO1lBQ0FELFVBQVUsQ0FBQzZCO1lBQ1gzQixPQUFPMEIsRUFBRTtZQUNUVyxlQUFleEM7UUFDakI7O0FBR04sRUFBRSJ9
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Publish", {
    enumerable: true,
    get: function() {
        return Publish;
    }
});
var _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
var _reacti18next = require("react-i18next");
var _Submit = /*#__PURE__*/ _interop_require_default(require("../../forms/Submit"));
var _DocumentInfo = require("../../utilities/DocumentInfo");
var _context = require("../../forms/Form/context");
var _RenderCustomComponent = /*#__PURE__*/ _interop_require_default(require("../../utilities/RenderCustomComponent"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var DefaultPublishButton = function(param) {
    var disabled = param.disabled, publish = param.publish, label = param.label;
    return /*#__PURE__*/ _react.default.createElement(_Submit.default, {
        type: "button",
        onClick: publish,
        disabled: disabled
    }, label);
};
var Publish = function(param) {
    var CustomComponent = param.CustomComponent;
    var _unpublishedVersions;
    var _useDocumentInfo = (0, _DocumentInfo.useDocumentInfo)(), unpublishedVersions = _useDocumentInfo.unpublishedVersions, publishedDoc = _useDocumentInfo.publishedDoc;
    var submit = (0, _context.useForm)().submit;
    var modified = (0, _context.useFormModified)();
    var t = (0, _reacti18next.useTranslation)("version").t;
    var hasNewerVersions = ((_unpublishedVersions = unpublishedVersions) === null || _unpublishedVersions === void 0 ? void 0 : _unpublishedVersions.totalDocs) > 0;
    var canPublish = modified || hasNewerVersions || !publishedDoc;
    var publish = (0, _react.useCallback)(function() {
        submit({
            overrides: {
                _status: "published"
            }
        });
    }, [
        submit
    ]);
    return /*#__PURE__*/ _react.default.createElement(_RenderCustomComponent.default, {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1B1Ymxpc2gvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgRm9ybVN1Ym1pdCBmcm9tICcuLi8uLi9mb3Jtcy9TdWJtaXQnO1xuaW1wb3J0IHsgdXNlRG9jdW1lbnRJbmZvIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL0RvY3VtZW50SW5mbyc7XG5pbXBvcnQgeyB1c2VGb3JtLCB1c2VGb3JtTW9kaWZpZWQgfSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtL2NvbnRleHQnO1xuaW1wb3J0IFJlbmRlckN1c3RvbUNvbXBvbmVudCBmcm9tICcuLi8uLi91dGlsaXRpZXMvUmVuZGVyQ3VzdG9tQ29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgQ3VzdG9tUHVibGlzaEJ1dHRvblByb3BzID0gUmVhY3QuQ29tcG9uZW50VHlwZTxEZWZhdWx0UHVibGlzaEJ1dHRvblByb3BzICYge1xuICBEZWZhdWx0QnV0dG9uOiBSZWFjdC5Db21wb25lbnRUeXBlPERlZmF1bHRQdWJsaXNoQnV0dG9uUHJvcHM+O1xufT5cbmV4cG9ydCB0eXBlIERlZmF1bHRQdWJsaXNoQnV0dG9uUHJvcHMgPSB7XG4gIHB1Ymxpc2g6ICgpID0+IHZvaWQ7XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBsYWJlbDogc3RyaW5nO1xufTtcbmNvbnN0IERlZmF1bHRQdWJsaXNoQnV0dG9uOiBSZWFjdC5GQzxEZWZhdWx0UHVibGlzaEJ1dHRvblByb3BzPiA9ICh7IGRpc2FibGVkLCBwdWJsaXNoLCBsYWJlbCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZvcm1TdWJtaXRcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgb25DbGljaz17cHVibGlzaH1cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICA+XG4gICAgICB7bGFiZWx9XG4gICAgPC9Gb3JtU3VibWl0PlxuICApO1xufTtcblxudHlwZSBQcm9wcyA9IHtcbiAgQ3VzdG9tQ29tcG9uZW50PzogQ3VzdG9tUHVibGlzaEJ1dHRvblByb3BzXG59XG5leHBvcnQgY29uc3QgUHVibGlzaDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgQ3VzdG9tQ29tcG9uZW50IH0pID0+IHtcbiAgY29uc3QgeyB1bnB1Ymxpc2hlZFZlcnNpb25zLCBwdWJsaXNoZWREb2MgfSA9IHVzZURvY3VtZW50SW5mbygpO1xuICBjb25zdCB7IHN1Ym1pdCB9ID0gdXNlRm9ybSgpO1xuICBjb25zdCBtb2RpZmllZCA9IHVzZUZvcm1Nb2RpZmllZCgpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCd2ZXJzaW9uJyk7XG5cbiAgY29uc3QgaGFzTmV3ZXJWZXJzaW9ucyA9IHVucHVibGlzaGVkVmVyc2lvbnM/LnRvdGFsRG9jcyA+IDA7XG4gIGNvbnN0IGNhblB1Ymxpc2ggPSBtb2RpZmllZCB8fCBoYXNOZXdlclZlcnNpb25zIHx8ICFwdWJsaXNoZWREb2M7XG5cbiAgY29uc3QgcHVibGlzaCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzdWJtaXQoe1xuICAgICAgb3ZlcnJpZGVzOiB7XG4gICAgICAgIF9zdGF0dXM6ICdwdWJsaXNoZWQnLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfSwgW3N1Ym1pdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlbmRlckN1c3RvbUNvbXBvbmVudFxuICAgICAgQ3VzdG9tQ29tcG9uZW50PXtDdXN0b21Db21wb25lbnR9XG4gICAgICBEZWZhdWx0Q29tcG9uZW50PXtEZWZhdWx0UHVibGlzaEJ1dHRvbn1cbiAgICAgIGNvbXBvbmVudFByb3BzPXt7XG4gICAgICAgIHB1Ymxpc2gsXG4gICAgICAgIGRpc2FibGVkOiAhY2FuUHVibGlzaCxcbiAgICAgICAgbGFiZWw6IHQoJ3B1Ymxpc2hDaGFuZ2VzJyksXG4gICAgICAgIERlZmF1bHRCdXR0b246IERlZmF1bHRQdWJsaXNoQnV0dG9uLFxuICAgICAgfX1cbiAgICAvPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJQdWJsaXNoIiwiRGVmYXVsdFB1Ymxpc2hCdXR0b24iLCJkaXNhYmxlZCIsInB1Ymxpc2giLCJsYWJlbCIsIkZvcm1TdWJtaXQiLCJ0eXBlIiwib25DbGljayIsIkN1c3RvbUNvbXBvbmVudCIsInVucHVibGlzaGVkVmVyc2lvbnMiLCJ1c2VEb2N1bWVudEluZm8iLCJwdWJsaXNoZWREb2MiLCJzdWJtaXQiLCJ1c2VGb3JtIiwibW9kaWZpZWQiLCJ1c2VGb3JtTW9kaWZpZWQiLCJ0IiwidXNlVHJhbnNsYXRpb24iLCJoYXNOZXdlclZlcnNpb25zIiwidG90YWxEb2NzIiwiY2FuUHVibGlzaCIsInVzZUNhbGxiYWNrIiwib3ZlcnJpZGVzIiwiX3N0YXR1cyIsIlJlbmRlckN1c3RvbUNvbXBvbmVudCIsIkRlZmF1bHRDb21wb25lbnQiLCJjb21wb25lbnRQcm9wcyIsIkRlZmF1bHRCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBOEJhQTs7O2VBQUFBOzs7NkRBOUJzQjs0QkFDSjs2REFDUjs0QkFDUzt1QkFDUzs0RUFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVWxDLElBQU1DLHVCQUE0RDtRQUFHQyxpQkFBQUEsVUFBVUMsZ0JBQUFBLFNBQVNDLGNBQUFBO0lBQ3RGLHFCQUNFLDZCQUFDQyxlQUFVO1FBQ1RDLE1BQUs7UUFDTEMsU0FBU0o7UUFDVEQsVUFBVUE7T0FFVEU7QUFHUDtBQUtPLElBQU1KLFVBQTJCO1FBQUdRLHdCQUFBQTtRQU1oQkM7SUFMekIsSUFBOENDLG1CQUFBQSxJQUFBQSw2QkFBZSxLQUFyREQsc0JBQXNDQyxpQkFBdENELHFCQUFxQkUsZUFBaUJELGlCQUFqQkM7SUFDN0IsSUFBTSxBQUFFQyxTQUFXQyxJQUFBQSxnQkFBTyxJQUFsQkQ7SUFDUixJQUFNRSxXQUFXQyxJQUFBQSx3QkFBZTtJQUNoQyxJQUFNLEFBQUVDLElBQU1DLElBQUFBLDRCQUFjLEVBQUMsV0FBckJEO0lBRVIsSUFBTUUsbUJBQW1CVCxFQUFBQSx1QkFBQUEsaUNBQUFBLDJDQUFBQSxxQkFBcUJVLFNBQVMsSUFBRztJQUMxRCxJQUFNQyxhQUFhTixZQUFZSSxvQkFBb0IsQ0FBQ1A7SUFFcEQsSUFBTVIsVUFBVWtCLElBQUFBLGtCQUFXLEVBQUM7UUFDMUJULE9BQU87WUFDTFUsV0FBVztnQkFDVEMsU0FBUztZQUNYO1FBQ0Y7SUFDRixHQUFHO1FBQUNYO0tBQU87SUFFWCxxQkFDRSw2QkFBQ1ksOEJBQXFCO1FBQ3BCaEIsaUJBQWlCQTtRQUNqQmlCLGtCQUFrQnhCO1FBQ2xCeUIsZ0JBQWdCO1lBQ2R2QixTQUFBQTtZQUNBRCxVQUFVLENBQUNrQjtZQUNYaEIsT0FBT1ksRUFBRTtZQUNUVyxlQUFlMUI7UUFDakI7O0FBR04ifQ==
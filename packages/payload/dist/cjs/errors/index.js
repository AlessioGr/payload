"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    APIError: function() {
        return _APIError.default;
    },
    AuthenticationError: function() {
        return _AuthenticationError.default;
    },
    DuplicateCollection: function() {
        return _DuplicateCollection.default;
    },
    DuplicateGlobal: function() {
        return _DuplicateGlobal.default;
    },
    ErrorDeletingFile: function() {
        return _ErrorDeletingFile.default;
    },
    errorHandler: function() {
        return _errorHandler.default;
    },
    FileUploadError: function() {
        return _FileUploadError.default;
    },
    Forbidden: function() {
        return _Forbidden.default;
    },
    LockedAuth: function() {
        return _LockedAuth.default;
    },
    InvalidConfiguration: function() {
        return _InvalidConfiguration.default;
    },
    InvalidFieldName: function() {
        return _InvalidFieldName.default;
    },
    InvalidFieldRelationship: function() {
        return _InvalidFieldRelationship.default;
    },
    MissingCollectionLabel: function() {
        return _MissingCollectionLabel.default;
    },
    MissingFieldInputOptions: function() {
        return _MissingFieldInputOptions.default;
    },
    MissingFieldType: function() {
        return _MissingFieldType.default;
    },
    MissingFile: function() {
        return _MissingFile.default;
    },
    NotFound: function() {
        return _NotFound.default;
    },
    ValidationError: function() {
        return _ValidationError.default;
    },
    QueryError: function() {
        return _QueryError.default;
    }
});
var _APIError = /*#__PURE__*/ _interop_require_default(require("./APIError"));
var _AuthenticationError = /*#__PURE__*/ _interop_require_default(require("./AuthenticationError"));
var _DuplicateCollection = /*#__PURE__*/ _interop_require_default(require("./DuplicateCollection"));
var _DuplicateGlobal = /*#__PURE__*/ _interop_require_default(require("./DuplicateGlobal"));
var _ErrorDeletingFile = /*#__PURE__*/ _interop_require_default(require("./ErrorDeletingFile"));
var _errorHandler = /*#__PURE__*/ _interop_require_default(require("../express/middleware/errorHandler"));
var _FileUploadError = /*#__PURE__*/ _interop_require_default(require("./FileUploadError"));
var _Forbidden = /*#__PURE__*/ _interop_require_default(require("./Forbidden"));
var _LockedAuth = /*#__PURE__*/ _interop_require_default(require("./LockedAuth"));
var _InvalidConfiguration = /*#__PURE__*/ _interop_require_default(require("./InvalidConfiguration"));
var _InvalidFieldName = /*#__PURE__*/ _interop_require_default(require("./InvalidFieldName"));
var _InvalidFieldRelationship = /*#__PURE__*/ _interop_require_default(require("./InvalidFieldRelationship"));
var _MissingCollectionLabel = /*#__PURE__*/ _interop_require_default(require("./MissingCollectionLabel"));
var _MissingFieldInputOptions = /*#__PURE__*/ _interop_require_default(require("./MissingFieldInputOptions"));
var _MissingFieldType = /*#__PURE__*/ _interop_require_default(require("./MissingFieldType"));
var _MissingFile = /*#__PURE__*/ _interop_require_default(require("./MissingFile"));
var _NotFound = /*#__PURE__*/ _interop_require_default(require("./NotFound"));
var _ValidationError = /*#__PURE__*/ _interop_require_default(require("./ValidationError"));
var _QueryError = /*#__PURE__*/ _interop_require_default(require("./QueryError"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lcnJvcnMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCBhcyBBUElFcnJvciB9IGZyb20gJy4vQVBJRXJyb3InO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBdXRoZW50aWNhdGlvbkVycm9yIH0gZnJvbSAnLi9BdXRoZW50aWNhdGlvbkVycm9yJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHVwbGljYXRlQ29sbGVjdGlvbiB9IGZyb20gJy4vRHVwbGljYXRlQ29sbGVjdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIER1cGxpY2F0ZUdsb2JhbCB9IGZyb20gJy4vRHVwbGljYXRlR2xvYmFsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRXJyb3JEZWxldGluZ0ZpbGUgfSBmcm9tICcuL0Vycm9yRGVsZXRpbmdGaWxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZXJyb3JIYW5kbGVyIH0gZnJvbSAnLi4vZXhwcmVzcy9taWRkbGV3YXJlL2Vycm9ySGFuZGxlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZpbGVVcGxvYWRFcnJvciB9IGZyb20gJy4vRmlsZVVwbG9hZEVycm9yJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRm9yYmlkZGVuIH0gZnJvbSAnLi9Gb3JiaWRkZW4nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2NrZWRBdXRoIH0gZnJvbSAnLi9Mb2NrZWRBdXRoJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW52YWxpZENvbmZpZ3VyYXRpb24gfSBmcm9tICcuL0ludmFsaWRDb25maWd1cmF0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW52YWxpZEZpZWxkTmFtZSB9IGZyb20gJy4vSW52YWxpZEZpZWxkTmFtZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEludmFsaWRGaWVsZFJlbGF0aW9uc2hpcCB9IGZyb20gJy4vSW52YWxpZEZpZWxkUmVsYXRpb25zaGlwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWlzc2luZ0NvbGxlY3Rpb25MYWJlbCB9IGZyb20gJy4vTWlzc2luZ0NvbGxlY3Rpb25MYWJlbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1pc3NpbmdGaWVsZElucHV0T3B0aW9ucyB9IGZyb20gJy4vTWlzc2luZ0ZpZWxkSW5wdXRPcHRpb25zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWlzc2luZ0ZpZWxkVHlwZSB9IGZyb20gJy4vTWlzc2luZ0ZpZWxkVHlwZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1pc3NpbmdGaWxlIH0gZnJvbSAnLi9NaXNzaW5nRmlsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE5vdEZvdW5kIH0gZnJvbSAnLi9Ob3RGb3VuZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZhbGlkYXRpb25FcnJvciB9IGZyb20gJy4vVmFsaWRhdGlvbkVycm9yJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUXVlcnlFcnJvciB9IGZyb20gJy4vUXVlcnlFcnJvcic7XG4iXSwibmFtZXMiOlsiQVBJRXJyb3IiLCJBdXRoZW50aWNhdGlvbkVycm9yIiwiRHVwbGljYXRlQ29sbGVjdGlvbiIsIkR1cGxpY2F0ZUdsb2JhbCIsIkVycm9yRGVsZXRpbmdGaWxlIiwiZXJyb3JIYW5kbGVyIiwiRmlsZVVwbG9hZEVycm9yIiwiRm9yYmlkZGVuIiwiTG9ja2VkQXV0aCIsIkludmFsaWRDb25maWd1cmF0aW9uIiwiSW52YWxpZEZpZWxkTmFtZSIsIkludmFsaWRGaWVsZFJlbGF0aW9uc2hpcCIsIk1pc3NpbmdDb2xsZWN0aW9uTGFiZWwiLCJNaXNzaW5nRmllbGRJbnB1dE9wdGlvbnMiLCJNaXNzaW5nRmllbGRUeXBlIiwiTWlzc2luZ0ZpbGUiLCJOb3RGb3VuZCIsIlZhbGlkYXRpb25FcnJvciIsIlF1ZXJ5RXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQW9CQSxRQUFRO2VBQVJBLGlCQUFROztJQUNSQyxtQkFBbUI7ZUFBbkJBLDRCQUFtQjs7SUFDbkJDLG1CQUFtQjtlQUFuQkEsNEJBQW1COztJQUNuQkMsZUFBZTtlQUFmQSx3QkFBZTs7SUFDZkMsaUJBQWlCO2VBQWpCQSwwQkFBaUI7O0lBQ2pCQyxZQUFZO2VBQVpBLHFCQUFZOztJQUNaQyxlQUFlO2VBQWZBLHdCQUFlOztJQUNmQyxTQUFTO2VBQVRBLGtCQUFTOztJQUNUQyxVQUFVO2VBQVZBLG1CQUFVOztJQUNWQyxvQkFBb0I7ZUFBcEJBLDZCQUFvQjs7SUFDcEJDLGdCQUFnQjtlQUFoQkEseUJBQWdCOztJQUNoQkMsd0JBQXdCO2VBQXhCQSxpQ0FBd0I7O0lBQ3hCQyxzQkFBc0I7ZUFBdEJBLCtCQUFzQjs7SUFDdEJDLHdCQUF3QjtlQUF4QkEsaUNBQXdCOztJQUN4QkMsZ0JBQWdCO2VBQWhCQSx5QkFBZ0I7O0lBQ2hCQyxXQUFXO2VBQVhBLG9CQUFXOztJQUNYQyxRQUFRO2VBQVJBLGlCQUFROztJQUNSQyxlQUFlO2VBQWZBLHdCQUFlOztJQUNmQyxVQUFVO2VBQVZBLG1CQUFVOzs7K0RBbEJNOzBFQUNXOzBFQUNBO3NFQUNKO3dFQUNFO21FQUNMO3NFQUNHO2dFQUNOO2lFQUNDOzJFQUNVO3VFQUNKOytFQUNROzZFQUNGOytFQUNFO3VFQUNSO2tFQUNMOytEQUNIO3NFQUNPO2lFQUNMIn0=
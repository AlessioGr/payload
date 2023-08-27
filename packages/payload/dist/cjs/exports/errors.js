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
        return _errors.APIError;
    },
    AuthenticationError: function() {
        return _errors.AuthenticationError;
    },
    DuplicateCollection: function() {
        return _errors.DuplicateCollection;
    },
    DuplicateGlobal: function() {
        return _errors.DuplicateGlobal;
    },
    ErrorDeletingFile: function() {
        return _errors.ErrorDeletingFile;
    },
    FileUploadError: function() {
        return _errors.FileUploadError;
    },
    Forbidden: function() {
        return _errors.Forbidden;
    },
    InvalidConfiguration: function() {
        return _errors.InvalidConfiguration;
    },
    InvalidFieldName: function() {
        return _errors.InvalidFieldName;
    },
    InvalidFieldRelationship: function() {
        return _errors.InvalidFieldRelationship;
    },
    LockedAuth: function() {
        return _errors.LockedAuth;
    },
    MissingCollectionLabel: function() {
        return _errors.MissingCollectionLabel;
    },
    MissingFieldInputOptions: function() {
        return _errors.MissingFieldInputOptions;
    },
    MissingFieldType: function() {
        return _errors.MissingFieldType;
    },
    MissingFile: function() {
        return _errors.MissingFile;
    },
    NotFound: function() {
        return _errors.NotFound;
    },
    ValidationError: function() {
        return _errors.ValidationError;
    },
    QueryError: function() {
        return _errors.QueryError;
    }
});
var _errors = require("../errors");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHBvcnRzL2Vycm9ycy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge1xuICBBUElFcnJvcixcbiAgQXV0aGVudGljYXRpb25FcnJvcixcbiAgRHVwbGljYXRlQ29sbGVjdGlvbixcbiAgRHVwbGljYXRlR2xvYmFsLFxuICBFcnJvckRlbGV0aW5nRmlsZSxcbiAgRmlsZVVwbG9hZEVycm9yLFxuICBGb3JiaWRkZW4sXG4gIEludmFsaWRDb25maWd1cmF0aW9uLFxuICBJbnZhbGlkRmllbGROYW1lLFxuICBJbnZhbGlkRmllbGRSZWxhdGlvbnNoaXAsXG4gIExvY2tlZEF1dGgsXG4gIE1pc3NpbmdDb2xsZWN0aW9uTGFiZWwsXG4gIE1pc3NpbmdGaWVsZElucHV0T3B0aW9ucyxcbiAgTWlzc2luZ0ZpZWxkVHlwZSxcbiAgTWlzc2luZ0ZpbGUsXG4gIE5vdEZvdW5kLFxuICBWYWxpZGF0aW9uRXJyb3IsXG4gIFF1ZXJ5RXJyb3Jcbn0gZnJvbSAnLi4vZXJyb3JzJ1xuIl0sIm5hbWVzIjpbIkFQSUVycm9yIiwiQXV0aGVudGljYXRpb25FcnJvciIsIkR1cGxpY2F0ZUNvbGxlY3Rpb24iLCJEdXBsaWNhdGVHbG9iYWwiLCJFcnJvckRlbGV0aW5nRmlsZSIsIkZpbGVVcGxvYWRFcnJvciIsIkZvcmJpZGRlbiIsIkludmFsaWRDb25maWd1cmF0aW9uIiwiSW52YWxpZEZpZWxkTmFtZSIsIkludmFsaWRGaWVsZFJlbGF0aW9uc2hpcCIsIkxvY2tlZEF1dGgiLCJNaXNzaW5nQ29sbGVjdGlvbkxhYmVsIiwiTWlzc2luZ0ZpZWxkSW5wdXRPcHRpb25zIiwiTWlzc2luZ0ZpZWxkVHlwZSIsIk1pc3NpbmdGaWxlIiwiTm90Rm91bmQiLCJWYWxpZGF0aW9uRXJyb3IiLCJRdWVyeUVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUNFQSxRQUFRO2VBQVJBLGdCQUFROztJQUNSQyxtQkFBbUI7ZUFBbkJBLDJCQUFtQjs7SUFDbkJDLG1CQUFtQjtlQUFuQkEsMkJBQW1COztJQUNuQkMsZUFBZTtlQUFmQSx1QkFBZTs7SUFDZkMsaUJBQWlCO2VBQWpCQSx5QkFBaUI7O0lBQ2pCQyxlQUFlO2VBQWZBLHVCQUFlOztJQUNmQyxTQUFTO2VBQVRBLGlCQUFTOztJQUNUQyxvQkFBb0I7ZUFBcEJBLDRCQUFvQjs7SUFDcEJDLGdCQUFnQjtlQUFoQkEsd0JBQWdCOztJQUNoQkMsd0JBQXdCO2VBQXhCQSxnQ0FBd0I7O0lBQ3hCQyxVQUFVO2VBQVZBLGtCQUFVOztJQUNWQyxzQkFBc0I7ZUFBdEJBLDhCQUFzQjs7SUFDdEJDLHdCQUF3QjtlQUF4QkEsZ0NBQXdCOztJQUN4QkMsZ0JBQWdCO2VBQWhCQSx3QkFBZ0I7O0lBQ2hCQyxXQUFXO2VBQVhBLG1CQUFXOztJQUNYQyxRQUFRO2VBQVJBLGdCQUFROztJQUNSQyxlQUFlO2VBQWZBLHVCQUFlOztJQUNmQyxVQUFVO2VBQVZBLGtCQUFVOzs7c0JBQ0wifQ==
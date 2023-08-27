"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CustomProvider", {
    enumerable: true,
    get: function() {
        return CustomProvider;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("react"));
var _Config = require("../Config");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var NestProviders = function(param) {
    var providers = param.providers, children = param.children;
    var Component = providers[0];
    if (providers.length > 1) {
        return /*#__PURE__*/ _react.default.createElement(Component, null, /*#__PURE__*/ _react.default.createElement(NestProviders, {
            providers: providers.slice(1)
        }, children));
    }
    return /*#__PURE__*/ _react.default.createElement(Component, null, children);
};
var CustomProvider = function(param) {
    var children = param.children;
    var config = (0, _Config.useConfig)();
    var _config_admin = config.admin, providers = _config_admin.components.providers;
    if (Array.isArray(providers) && providers.length > 0) {
        return /*#__PURE__*/ _react.default.createElement(NestProviders, {
            providers: providers
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3V0aWxpdGllcy9DdXN0b21Qcm92aWRlci9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uL0NvbmZpZyc7XG5cbmNvbnN0IE5lc3RQcm92aWRlcnMgPSAoeyBwcm92aWRlcnMsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgQ29tcG9uZW50ID0gcHJvdmlkZXJzWzBdO1xuICBpZiAocHJvdmlkZXJzLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudD5cbiAgICAgICAgPE5lc3RQcm92aWRlcnNcbiAgICAgICAgICBwcm92aWRlcnM9e3Byb3ZpZGVycy5zbGljZSgxKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9OZXN0UHJvdmlkZXJzPlxuICAgICAgPC9Db21wb25lbnQ+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxDb21wb25lbnQ+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db21wb25lbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgQ3VzdG9tUHJvdmlkZXI6IFJlYWN0LkZDPHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9PiA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgY29uZmlnID0gdXNlQ29uZmlnKCk7XG5cbiAgY29uc3Qge1xuICAgIGFkbWluOiB7XG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIHByb3ZpZGVycyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSA9IGNvbmZpZztcblxuICBpZiAoQXJyYXkuaXNBcnJheShwcm92aWRlcnMpICYmIHByb3ZpZGVycy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxOZXN0UHJvdmlkZXJzIHByb3ZpZGVycz17cHJvdmlkZXJzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9OZXN0UHJvdmlkZXJzPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJDdXN0b21Qcm92aWRlciIsIk5lc3RQcm92aWRlcnMiLCJwcm92aWRlcnMiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsImxlbmd0aCIsInNsaWNlIiwiY29uZmlnIiwidXNlQ29uZmlnIiwiYWRtaW4iLCJjb21wb25lbnRzIiwiQXJyYXkiLCJpc0FycmF5IiwiUmVhY3QiLCJGcmFnbWVudCJdLCJtYXBwaW5ncyI6Ijs7OzsrQkF1QmFBOzs7ZUFBQUE7Ozs0REF2Qks7c0JBQ1E7Ozs7OztBQUUxQixJQUFNQyxnQkFBZ0I7UUFBR0Msa0JBQUFBLFdBQVdDLGlCQUFBQTtJQUNsQyxJQUFNQyxZQUFZRixTQUFTLENBQUMsRUFBRTtJQUM5QixJQUFJQSxVQUFVRyxNQUFNLEdBQUcsR0FBRztRQUN4QixxQkFDRSw2QkFBQ0QsK0JBQ0MsNkJBQUNIO1lBQ0NDLFdBQVdBLFVBQVVJLEtBQUssQ0FBQztXQUUxQkg7SUFJVDtJQUNBLHFCQUNFLDZCQUFDQyxpQkFDRUQ7QUFHUDtBQUVPLElBQU1ILGlCQUEwRDtRQUFHRyxpQkFBQUE7SUFDeEUsSUFBTUksU0FBU0MsSUFBQUEsaUJBQVM7SUFFeEIsb0JBTUlELE9BTEZFLE9BQ0VDLEFBQ0VSLDBCQURGUSxXQUNFUjtJQUtOLElBQUlTLE1BQU1DLE9BQU8sQ0FBQ1YsY0FBY0EsVUFBVUcsTUFBTSxHQUFHLEdBQUc7UUFDcEQscUJBQ0UsNkJBQUNKO1lBQWNDLFdBQVdBO1dBQ3ZCQztJQUdQO0lBRUEscUJBQ0UsNkJBQUNVLGNBQUssQ0FBQ0MsUUFBUSxRQUNaWDtBQUdQIn0=
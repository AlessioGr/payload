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
var _reacti18next = require("react-i18next");
var _Config = require("../../../../../../utilities/Config");
var _formatDate = require("../../../../../../../utilities/formatDate");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var DateCell = function(param) {
    var data = param.data, field = param.field;
    var _field_admin_date, _field_admin, _field, _i18n;
    var _useConfig = (0, _Config.useConfig)(), _useConfig_admin = _useConfig.admin, dateFormatFromConfig = _useConfig_admin.dateFormat;
    var dateFormat = ((_field = field) === null || _field === void 0 ? void 0 : (_field_admin = _field.admin) === null || _field_admin === void 0 ? void 0 : (_field_admin_date = _field_admin.date) === null || _field_admin_date === void 0 ? void 0 : _field_admin_date.displayFormat) || dateFormatFromConfig;
    var i18n = (0, _reacti18next.useTranslation)().i18n;
    return /*#__PURE__*/ _react.default.createElement("span", null, data && (0, _formatDate.formatDate)(data, dateFormat, (_i18n = i18n) === null || _i18n === void 0 ? void 0 : _i18n.language));
};
var _default = DateCell;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9maWVsZC10eXBlcy9EYXRlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9mb3JtYXREYXRlJztcblxuY29uc3QgRGF0ZUNlbGwgPSAoeyBkYXRhLCBmaWVsZCB9KSA9PiB7XG4gIGNvbnN0IHsgYWRtaW46IHsgZGF0ZUZvcm1hdDogZGF0ZUZvcm1hdEZyb21Db25maWcgfSB9ID0gdXNlQ29uZmlnKCk7XG5cbiAgY29uc3QgZGF0ZUZvcm1hdCA9IGZpZWxkPy5hZG1pbj8uZGF0ZT8uZGlzcGxheUZvcm1hdCB8fCBkYXRlRm9ybWF0RnJvbUNvbmZpZztcblxuICBjb25zdCB7IGkxOG4gfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8c3Bhbj5cbiAgICAgIHtkYXRhICYmIGZvcm1hdERhdGUoZGF0YSwgZGF0ZUZvcm1hdCwgaTE4bj8ubGFuZ3VhZ2UpfVxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGVDZWxsO1xuIl0sIm5hbWVzIjpbIkRhdGVDZWxsIiwiZGF0YSIsImZpZWxkIiwiaTE4biIsInVzZUNvbmZpZyIsImFkbWluIiwiZGF0ZUZvcm1hdCIsImRhdGVGb3JtYXRGcm9tQ29uZmlnIiwiZGF0ZSIsImRpc3BsYXlGb3JtYXQiLCJ1c2VUcmFuc2xhdGlvbiIsInNwYW4iLCJmb3JtYXREYXRlIiwibGFuZ3VhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7K0JBbUJBOzs7ZUFBQTs7OzREQW5Ca0I7NEJBQ2E7c0JBQ0w7MEJBQ0M7Ozs7OztBQUUzQixJQUFNQSxXQUFXO1FBQUdDLGFBQUFBLE1BQU1DLGNBQUFBO1FBR0xBLG1CQUFBQSxjQUFBQSxRQU11QkM7SUFSMUMsSUFBd0RDLGFBQUFBLElBQUFBLGlCQUFTLHdCQUFUQSxXQUFoREMsT0FBU0MsQUFBWUMsd0NBQVpEO0lBRWpCLElBQU1BLGFBQWFKLEVBQUFBLFNBQUFBLG1CQUFBQSw4QkFBQUEsZUFBQUEsT0FBT0csS0FBSyxjQUFaSCxvQ0FBQUEsb0JBQUFBLGFBQWNNLElBQUksY0FBbEJOLHdDQUFBQSxrQkFBb0JPLGFBQWEsS0FBSUY7SUFFeEQsSUFBTSxBQUFFSixPQUFTTyxJQUFBQSw0QkFBYyxJQUF2QlA7SUFFUixxQkFDRSw2QkFBQ1EsY0FDRVYsUUFBUVcsSUFBQUEsc0JBQVUsRUFBQ1gsTUFBTUssYUFBWUgsUUFBQUEsa0JBQUFBLDRCQUFBQSxNQUFNVSxRQUFRO0FBRzFEO0lBRUEsV0FBZWIifQ==
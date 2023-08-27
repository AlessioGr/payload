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
    entityToJSONSchema: function() {
        return _configToJSONSchema.entityToJSONSchema;
    },
    configToJSONSchema: function() {
        return _configToJSONSchema.configToJSONSchema;
    },
    flattenTopLevelFields: function() {
        return _flattenTopLevelFields.default;
    },
    combineMerge: function() {
        return _combineMerge.combineMerge;
    },
    i18nInit: function() {
        return _init.i18nInit;
    }
});
var _configToJSONSchema = require("../utilities/configToJSONSchema");
var _flattenTopLevelFields = /*#__PURE__*/ _interop_require_default(require("../utilities/flattenTopLevelFields"));
var _combineMerge = require("../utilities/combineMerge");
var _init = require("../translations/init");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHBvcnRzL3V0aWxpdGllcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBlbnRpdHlUb0pTT05TY2hlbWEsIGNvbmZpZ1RvSlNPTlNjaGVtYSB9IGZyb20gJy4uL3V0aWxpdGllcy9jb25maWdUb0pTT05TY2hlbWEnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmbGF0dGVuVG9wTGV2ZWxGaWVsZHMgfSBmcm9tICcuLi91dGlsaXRpZXMvZmxhdHRlblRvcExldmVsRmllbGRzJztcbmV4cG9ydCB7IGNvbWJpbmVNZXJnZSB9IGZyb20gJy4uL3V0aWxpdGllcy9jb21iaW5lTWVyZ2UnO1xuXG5leHBvcnQgeyBpMThuSW5pdCB9IGZyb20gJy4uL3RyYW5zbGF0aW9ucy9pbml0J1xuIl0sIm5hbWVzIjpbImVudGl0eVRvSlNPTlNjaGVtYSIsImNvbmZpZ1RvSlNPTlNjaGVtYSIsImZsYXR0ZW5Ub3BMZXZlbEZpZWxkcyIsImNvbWJpbmVNZXJnZSIsImkxOG5Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFTQSxrQkFBa0I7ZUFBbEJBLHNDQUFrQjs7SUFBRUMsa0JBQWtCO2VBQWxCQSxzQ0FBa0I7O0lBQzNCQyxxQkFBcUI7ZUFBckJBLDhCQUFxQjs7SUFDaENDLFlBQVk7ZUFBWkEsMEJBQVk7O0lBRVpDLFFBQVE7ZUFBUkEsY0FBUTs7O2tDQUpzQzs0RUFDTjs0QkFDcEI7b0JBRUoifQ==
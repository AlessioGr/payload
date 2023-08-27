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
    buildVersionCollectionFields: function() {
        return _buildCollectionFields.buildVersionCollectionFields;
    },
    buildVersionGlobalFields: function() {
        return _buildGlobalFields.buildVersionGlobalFields;
    },
    deleteCollectionVersions: function() {
        return _deleteCollectionVersions.deleteCollectionVersions;
    },
    enforceMaxVersions: function() {
        return _enforceMaxVersions.enforceMaxVersions;
    },
    getLatestCollectionVersion: function() {
        return _getLatestCollectionVersion.getLatestCollectionVersion;
    },
    getLatestGlobalVersion: function() {
        return _getLatestGlobalVersion.getLatestGlobalVersion;
    },
    getVersionsModelName: function() {
        return _getVersionsModelName.getVersionsModelName;
    },
    saveVersion: function() {
        return _saveVersion.saveVersion;
    }
});
var _buildCollectionFields = require("../versions/buildCollectionFields");
var _buildGlobalFields = require("../versions/buildGlobalFields");
var _deleteCollectionVersions = require("../versions/deleteCollectionVersions");
var _enforceMaxVersions = require("../versions/enforceMaxVersions");
var _getLatestCollectionVersion = require("../versions/getLatestCollectionVersion");
var _getLatestGlobalVersion = require("../versions/getLatestGlobalVersion");
var _getVersionsModelName = require("../versions/getVersionsModelName");
var _saveVersion = require("../versions/saveVersion");

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHBvcnRzL3ZlcnNpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGJ1aWxkVmVyc2lvbkNvbGxlY3Rpb25GaWVsZHMgfSBmcm9tICcuLi92ZXJzaW9ucy9idWlsZENvbGxlY3Rpb25GaWVsZHMnXG5leHBvcnQgeyBidWlsZFZlcnNpb25HbG9iYWxGaWVsZHMgfSBmcm9tICcuLi92ZXJzaW9ucy9idWlsZEdsb2JhbEZpZWxkcydcbmV4cG9ydCB7IGRlbGV0ZUNvbGxlY3Rpb25WZXJzaW9ucyB9IGZyb20gJy4uL3ZlcnNpb25zL2RlbGV0ZUNvbGxlY3Rpb25WZXJzaW9ucydcbmV4cG9ydCB7IGVuZm9yY2VNYXhWZXJzaW9ucyB9IGZyb20gJy4uL3ZlcnNpb25zL2VuZm9yY2VNYXhWZXJzaW9ucydcbmV4cG9ydCB7IGdldExhdGVzdENvbGxlY3Rpb25WZXJzaW9uIH0gZnJvbSAnLi4vdmVyc2lvbnMvZ2V0TGF0ZXN0Q29sbGVjdGlvblZlcnNpb24nXG5leHBvcnQgeyBnZXRMYXRlc3RHbG9iYWxWZXJzaW9uIH0gZnJvbSAnLi4vdmVyc2lvbnMvZ2V0TGF0ZXN0R2xvYmFsVmVyc2lvbidcbmV4cG9ydCB7IGdldFZlcnNpb25zTW9kZWxOYW1lIH0gZnJvbSAnLi4vdmVyc2lvbnMvZ2V0VmVyc2lvbnNNb2RlbE5hbWUnXG5leHBvcnQgeyBzYXZlVmVyc2lvbiB9IGZyb20gJy4uL3ZlcnNpb25zL3NhdmVWZXJzaW9uJyJdLCJuYW1lcyI6WyJidWlsZFZlcnNpb25Db2xsZWN0aW9uRmllbGRzIiwiYnVpbGRWZXJzaW9uR2xvYmFsRmllbGRzIiwiZGVsZXRlQ29sbGVjdGlvblZlcnNpb25zIiwiZW5mb3JjZU1heFZlcnNpb25zIiwiZ2V0TGF0ZXN0Q29sbGVjdGlvblZlcnNpb24iLCJnZXRMYXRlc3RHbG9iYWxWZXJzaW9uIiwiZ2V0VmVyc2lvbnNNb2RlbE5hbWUiLCJzYXZlVmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFBU0EsNEJBQTRCO2VBQTVCQSxtREFBNEI7O0lBQzVCQyx3QkFBd0I7ZUFBeEJBLDJDQUF3Qjs7SUFDeEJDLHdCQUF3QjtlQUF4QkEsa0RBQXdCOztJQUN4QkMsa0JBQWtCO2VBQWxCQSxzQ0FBa0I7O0lBQ2xCQywwQkFBMEI7ZUFBMUJBLHNEQUEwQjs7SUFDMUJDLHNCQUFzQjtlQUF0QkEsOENBQXNCOztJQUN0QkMsb0JBQW9CO2VBQXBCQSwwQ0FBb0I7O0lBQ3BCQyxXQUFXO2VBQVhBLHdCQUFXOzs7cUNBUHlCO2lDQUNKO3dDQUNBO2tDQUNOOzBDQUNRO3NDQUNKO29DQUNGOzJCQUNUIn0=
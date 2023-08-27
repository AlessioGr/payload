"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "mongooseAdapter", {
    enumerable: true,
    get: function() {
        return mongooseAdapter;
    }
});
var _mongoose = /*#__PURE__*/ _interop_require_default(require("mongoose"));
var _database = require("payload/database");
var _connect = require("./connect");
var _init = require("./init");
var _webpack = require("./webpack");
var _createGlobal = require("./createGlobal");
var _createVersion = require("./createVersion");
var _beginTransaction = require("./transactions/beginTransaction");
var _rollbackTransaction = require("./transactions/rollbackTransaction");
var _commitTransaction = require("./transactions/commitTransaction");
var _queryDrafts = require("./queryDrafts");
var _find = require("./find");
var _findGlobalVersions = require("./findGlobalVersions");
var _findVersions = require("./findVersions");
var _create = require("./create");
var _deleteOne = require("./deleteOne");
var _deleteVersions = require("./deleteVersions");
var _findGlobal = require("./findGlobal");
var _findOne = require("./findOne");
var _updateGlobal = require("./updateGlobal");
var _updateOne = require("./updateOne");
var _updateVersion = require("./updateVersion");
var _deleteMany = require("./deleteMany");
var _destroy = require("./destroy");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function mongooseAdapter(param) {
    var url = param.url, connectOptions = param.connectOptions, migrationDir = param.migrationDir, _param_autoPluralization = param.autoPluralization, autoPluralization = _param_autoPluralization === void 0 ? true : _param_autoPluralization;
    var adapter = function adapter(param) {
        var payload = param.payload;
        _mongoose.default.set("strictQuery", false);
        return (0, _database.createDatabaseAdapter)({
            payload: payload,
            migrationDir: migrationDir,
            connection: undefined,
            mongoMemoryServer: undefined,
            sessions: {},
            url: url,
            connectOptions: connectOptions || {},
            autoPluralization: autoPluralization,
            globals: undefined,
            collections: {},
            versions: {},
            connect: _connect.connect,
            destroy: _destroy.destroy,
            init: _init.init,
            webpack: _webpack.webpack,
            createMigration: _database.createMigration,
            beginTransaction: _beginTransaction.beginTransaction,
            rollbackTransaction: _rollbackTransaction.rollbackTransaction,
            commitTransaction: _commitTransaction.commitTransaction,
            queryDrafts: _queryDrafts.queryDrafts,
            findOne: _findOne.findOne,
            find: _find.find,
            create: _create.create,
            updateOne: _updateOne.updateOne,
            deleteOne: _deleteOne.deleteOne,
            deleteMany: _deleteMany.deleteMany,
            findGlobal: _findGlobal.findGlobal,
            createGlobal: _createGlobal.createGlobal,
            updateGlobal: _updateGlobal.updateGlobal,
            findVersions: _findVersions.findVersions,
            findGlobalVersions: _findGlobalVersions.findGlobalVersions,
            createVersion: _createVersion.createVersion,
            updateVersion: _updateVersion.updateVersion,
            deleteVersions: _deleteVersions.deleteVersions
        });
    };
    return adapter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IENsaWVudFNlc3Npb24sIENvbm5lY3Rpb24sIENvbm5lY3RPcHRpb25zIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IGNyZWF0ZU1pZ3JhdGlvbiB9IGZyb20gJ3BheWxvYWQvZGF0YWJhc2UnO1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkIH0gZnJvbSAncGF5bG9hZCc7XG5pbXBvcnQgdHlwZSB7IERhdGFiYXNlQWRhcHRlciB9IGZyb20gJ3BheWxvYWQvZGF0YWJhc2UnO1xuaW1wb3J0IHsgY3JlYXRlRGF0YWJhc2VBZGFwdGVyIH0gZnJvbSAncGF5bG9hZC9kYXRhYmFzZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnLi9jb25uZWN0JztcbmltcG9ydCB7IGluaXQgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgd2VicGFjayB9IGZyb20gJy4vd2VicGFjayc7XG5pbXBvcnQgeyBjcmVhdGVHbG9iYWwgfSBmcm9tICcuL2NyZWF0ZUdsb2JhbCc7XG5pbXBvcnQgeyBjcmVhdGVWZXJzaW9uIH0gZnJvbSAnLi9jcmVhdGVWZXJzaW9uJztcbmltcG9ydCB7IGJlZ2luVHJhbnNhY3Rpb24gfSBmcm9tICcuL3RyYW5zYWN0aW9ucy9iZWdpblRyYW5zYWN0aW9uJztcbmltcG9ydCB7IHJvbGxiYWNrVHJhbnNhY3Rpb24gfSBmcm9tICcuL3RyYW5zYWN0aW9ucy9yb2xsYmFja1RyYW5zYWN0aW9uJztcbmltcG9ydCB7IGNvbW1pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi90cmFuc2FjdGlvbnMvY29tbWl0VHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgcXVlcnlEcmFmdHMgfSBmcm9tICcuL3F1ZXJ5RHJhZnRzJztcbmltcG9ydCB7IGZpbmQgfSBmcm9tICcuL2ZpbmQnO1xuaW1wb3J0IHsgZmluZEdsb2JhbFZlcnNpb25zIH0gZnJvbSAnLi9maW5kR2xvYmFsVmVyc2lvbnMnO1xuaW1wb3J0IHsgZmluZFZlcnNpb25zIH0gZnJvbSAnLi9maW5kVmVyc2lvbnMnO1xuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnLi9jcmVhdGUnO1xuaW1wb3J0IHsgZGVsZXRlT25lIH0gZnJvbSAnLi9kZWxldGVPbmUnO1xuaW1wb3J0IHsgZGVsZXRlVmVyc2lvbnMgfSBmcm9tICcuL2RlbGV0ZVZlcnNpb25zJztcbmltcG9ydCB7IGZpbmRHbG9iYWwgfSBmcm9tICcuL2ZpbmRHbG9iYWwnO1xuaW1wb3J0IHsgZmluZE9uZSB9IGZyb20gJy4vZmluZE9uZSc7XG5pbXBvcnQgeyB1cGRhdGVHbG9iYWwgfSBmcm9tICcuL3VwZGF0ZUdsb2JhbCc7XG5pbXBvcnQgeyB1cGRhdGVPbmUgfSBmcm9tICcuL3VwZGF0ZU9uZSc7XG5pbXBvcnQgeyB1cGRhdGVWZXJzaW9uIH0gZnJvbSAnLi91cGRhdGVWZXJzaW9uJztcbmltcG9ydCB7IGRlbGV0ZU1hbnkgfSBmcm9tICcuL2RlbGV0ZU1hbnknO1xuaW1wb3J0IHsgZGVzdHJveSB9IGZyb20gJy4vZGVzdHJveSc7XG5pbXBvcnQgdHlwZSB7IENvbGxlY3Rpb25Nb2RlbCwgR2xvYmFsTW9kZWwgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBBcmdzIHtcbiAgLyoqIFRoZSBVUkwgdG8gY29ubmVjdCB0byBNb25nb0RCIG9yIGZhbHNlIHRvIHN0YXJ0IHBheWxvYWQgYW5kIHByZXZlbnQgY29ubmVjdGluZyAqL1xuICB1cmw6IHN0cmluZyB8IGZhbHNlO1xuICBtaWdyYXRpb25EaXI/OiBzdHJpbmc7XG4gIC8qKiBFeHRyYSBjb25maWd1cmF0aW9uIG9wdGlvbnMgKi9cbiAgY29ubmVjdE9wdGlvbnM/OiBDb25uZWN0T3B0aW9ucyAmIHtcbiAgICAvKiogU2V0IGZhbHNlIHRvIGRpc2FibGUgJGZhY2V0IGFnZ3JlZ2F0aW9uIGluIG5vbi1zdXBwb3J0aW5nIGRhdGFiYXNlcywgRGVmYXVsdHMgdG8gdHJ1ZSAqL1xuICAgIHVzZUZhY2V0PzogYm9vbGVhbjtcbiAgfTtcbiAgLyoqIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIGF1dG8tcGx1cmFsaXphdGlvbiBvZiBjb2xsZWN0aW9uIG5hbWVzLCBEZWZhdWx0cyB0byB0cnVlICovXG4gIGF1dG9QbHVyYWxpemF0aW9uPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgTW9uZ29vc2VBZGFwdGVyID0gRGF0YWJhc2VBZGFwdGVyICZcbiAgQXJncyAmIHtcbiAgICBtb25nb01lbW9yeVNlcnZlcjogYW55O1xuICAgIGNvbGxlY3Rpb25zOiB7XG4gICAgICBbc2x1Zzogc3RyaW5nXTogQ29sbGVjdGlvbk1vZGVsO1xuICAgIH07XG4gICAgZ2xvYmFsczogR2xvYmFsTW9kZWw7XG4gICAgdmVyc2lvbnM6IHtcbiAgICAgIFtzbHVnOiBzdHJpbmddOiBDb2xsZWN0aW9uTW9kZWxcbiAgICB9XG4gICAgc2Vzc2lvbnM6IFJlY29yZDxzdHJpbmcgfCBudW1iZXIsIENsaWVudFNlc3Npb24+XG4gICAgY29ubmVjdGlvbjogQ29ubmVjdGlvblxuICB9XG5cbnR5cGUgTW9uZ29vc2VBZGFwdGVyUmVzdWx0ID0gKGFyZ3M6IHsgcGF5bG9hZDogUGF5bG9hZCB9KSA9PiBNb25nb29zZUFkYXB0ZXJcblxuZXhwb3J0IGZ1bmN0aW9uIG1vbmdvb3NlQWRhcHRlcih7XG4gIHVybCxcbiAgY29ubmVjdE9wdGlvbnMsXG4gIG1pZ3JhdGlvbkRpcixcbiAgYXV0b1BsdXJhbGl6YXRpb24gPSB0cnVlLFxufTogQXJncyk6IE1vbmdvb3NlQWRhcHRlclJlc3VsdCB7XG4gIGZ1bmN0aW9uIGFkYXB0ZXIoeyBwYXlsb2FkIH06IHsgcGF5bG9hZDogUGF5bG9hZCB9KSB7XG4gICAgbW9uZ29vc2Uuc2V0KCdzdHJpY3RRdWVyeScsIGZhbHNlKTtcblxuICAgIHJldHVybiBjcmVhdGVEYXRhYmFzZUFkYXB0ZXI8TW9uZ29vc2VBZGFwdGVyPih7XG4gICAgICBwYXlsb2FkLFxuICAgICAgbWlncmF0aW9uRGlyLFxuICAgICAgY29ubmVjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgbW9uZ29NZW1vcnlTZXJ2ZXI6IHVuZGVmaW5lZCxcbiAgICAgIHNlc3Npb25zOiB7fSxcbiAgICAgIHVybCxcbiAgICAgIGNvbm5lY3RPcHRpb25zOiBjb25uZWN0T3B0aW9ucyB8fCB7fSxcbiAgICAgIGF1dG9QbHVyYWxpemF0aW9uLFxuICAgICAgZ2xvYmFsczogdW5kZWZpbmVkLFxuICAgICAgY29sbGVjdGlvbnM6IHt9LFxuICAgICAgdmVyc2lvbnM6IHt9LFxuICAgICAgY29ubmVjdCxcbiAgICAgIGRlc3Ryb3ksXG4gICAgICBpbml0LFxuICAgICAgd2VicGFjayxcbiAgICAgIGNyZWF0ZU1pZ3JhdGlvbixcbiAgICAgIGJlZ2luVHJhbnNhY3Rpb24sXG4gICAgICByb2xsYmFja1RyYW5zYWN0aW9uLFxuICAgICAgY29tbWl0VHJhbnNhY3Rpb24sXG4gICAgICBxdWVyeURyYWZ0cyxcbiAgICAgIGZpbmRPbmUsXG4gICAgICBmaW5kLFxuICAgICAgY3JlYXRlLFxuICAgICAgdXBkYXRlT25lLFxuICAgICAgZGVsZXRlT25lLFxuICAgICAgZGVsZXRlTWFueSxcbiAgICAgIGZpbmRHbG9iYWwsXG4gICAgICBjcmVhdGVHbG9iYWwsXG4gICAgICB1cGRhdGVHbG9iYWwsXG4gICAgICBmaW5kVmVyc2lvbnMsXG4gICAgICBmaW5kR2xvYmFsVmVyc2lvbnMsXG4gICAgICBjcmVhdGVWZXJzaW9uLFxuICAgICAgdXBkYXRlVmVyc2lvbixcbiAgICAgIGRlbGV0ZVZlcnNpb25zLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG4iXSwibmFtZXMiOlsibW9uZ29vc2VBZGFwdGVyIiwidXJsIiwiY29ubmVjdE9wdGlvbnMiLCJtaWdyYXRpb25EaXIiLCJhdXRvUGx1cmFsaXphdGlvbiIsImFkYXB0ZXIiLCJwYXlsb2FkIiwibW9uZ29vc2UiLCJzZXQiLCJjcmVhdGVEYXRhYmFzZUFkYXB0ZXIiLCJjb25uZWN0aW9uIiwidW5kZWZpbmVkIiwibW9uZ29NZW1vcnlTZXJ2ZXIiLCJzZXNzaW9ucyIsImdsb2JhbHMiLCJjb2xsZWN0aW9ucyIsInZlcnNpb25zIiwiY29ubmVjdCIsImRlc3Ryb3kiLCJpbml0Iiwid2VicGFjayIsImNyZWF0ZU1pZ3JhdGlvbiIsImJlZ2luVHJhbnNhY3Rpb24iLCJyb2xsYmFja1RyYW5zYWN0aW9uIiwiY29tbWl0VHJhbnNhY3Rpb24iLCJxdWVyeURyYWZ0cyIsImZpbmRPbmUiLCJmaW5kIiwiY3JlYXRlIiwidXBkYXRlT25lIiwiZGVsZXRlT25lIiwiZGVsZXRlTWFueSIsImZpbmRHbG9iYWwiLCJjcmVhdGVHbG9iYWwiLCJ1cGRhdGVHbG9iYWwiLCJmaW5kVmVyc2lvbnMiLCJmaW5kR2xvYmFsVmVyc2lvbnMiLCJjcmVhdGVWZXJzaW9uIiwidXBkYXRlVmVyc2lvbiIsImRlbGV0ZVZlcnNpb25zIl0sIm1hcHBpbmdzIjoiOzs7OytCQTJEZ0JBOzs7ZUFBQUE7OzsrREExREs7d0JBQ1c7dUJBSVI7b0JBQ0g7dUJBQ0c7NEJBQ0s7NkJBQ0M7Z0NBQ0c7bUNBQ0c7aUNBQ0Y7MkJBQ047b0JBQ1A7a0NBQ2M7NEJBQ047c0JBQ047eUJBQ0c7OEJBQ0s7MEJBQ0o7dUJBQ0g7NEJBQ0s7eUJBQ0g7NkJBQ0k7MEJBQ0g7dUJBQ0g7Ozs7OztBQWdDakIsU0FBU0EsZ0JBQWdCLEtBS3pCO1FBSkxDLE1BRDhCLE1BQzlCQSxLQUNBQyxpQkFGOEIsTUFFOUJBLGdCQUNBQyxlQUg4QixNQUc5QkEseUNBSDhCLE1BSTlCQyxtQkFBQUEsMERBQW9CO1FBRVhDLFVBQVQsU0FBU0EsUUFBUSxLQUFpQztZQUFqQyxBQUFFQyxVQUFGLE1BQUVBO1FBQ2pCQyxpQkFBUSxDQUFDQyxHQUFHLENBQUMsZUFBZTtRQUU1QixPQUFPQyxJQUFBQSwrQkFBcUIsRUFBa0I7WUFDNUNILFNBQUFBO1lBQ0FILGNBQUFBO1lBQ0FPLFlBQVlDO1lBQ1pDLG1CQUFtQkQ7WUFDbkJFLFVBQVUsQ0FBQztZQUNYWixLQUFBQTtZQUNBQyxnQkFBZ0JBLGtCQUFrQixDQUFDO1lBQ25DRSxtQkFBQUE7WUFDQVUsU0FBU0g7WUFDVEksYUFBYSxDQUFDO1lBQ2RDLFVBQVUsQ0FBQztZQUNYQyxTQUFBQSxnQkFBTztZQUNQQyxTQUFBQSxnQkFBTztZQUNQQyxNQUFBQSxVQUFJO1lBQ0pDLFNBQUFBLGdCQUFPO1lBQ1BDLGlCQUFBQSx5QkFBZTtZQUNmQyxrQkFBQUEsa0NBQWdCO1lBQ2hCQyxxQkFBQUEsd0NBQW1CO1lBQ25CQyxtQkFBQUEsb0NBQWlCO1lBQ2pCQyxhQUFBQSx3QkFBVztZQUNYQyxTQUFBQSxnQkFBTztZQUNQQyxNQUFBQSxVQUFJO1lBQ0pDLFFBQUFBLGNBQU07WUFDTkMsV0FBQUEsb0JBQVM7WUFDVEMsV0FBQUEsb0JBQVM7WUFDVEMsWUFBQUEsc0JBQVU7WUFDVkMsWUFBQUEsc0JBQVU7WUFDVkMsY0FBQUEsMEJBQVk7WUFDWkMsY0FBQUEsMEJBQVk7WUFDWkMsY0FBQUEsMEJBQVk7WUFDWkMsb0JBQUFBLHNDQUFrQjtZQUNsQkMsZUFBQUEsNEJBQWE7WUFDYkMsZUFBQUEsNEJBQWE7WUFDYkMsZ0JBQUFBLDhCQUFjO1FBQ2hCO0lBQ0Y7SUFFQSxPQUFPbEM7QUFDVCJ9
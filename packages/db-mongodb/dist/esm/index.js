import mongoose from "mongoose";
import { createMigration } from "payload/database";
import { createDatabaseAdapter } from "payload/database";
import { connect } from "./connect";
import { init } from "./init";
import { webpack } from "./webpack";
import { createGlobal } from "./createGlobal";
import { createVersion } from "./createVersion";
import { beginTransaction } from "./transactions/beginTransaction";
import { rollbackTransaction } from "./transactions/rollbackTransaction";
import { commitTransaction } from "./transactions/commitTransaction";
import { queryDrafts } from "./queryDrafts";
import { find } from "./find";
import { findGlobalVersions } from "./findGlobalVersions";
import { findVersions } from "./findVersions";
import { create } from "./create";
import { deleteOne } from "./deleteOne";
import { deleteVersions } from "./deleteVersions";
import { findGlobal } from "./findGlobal";
import { findOne } from "./findOne";
import { updateGlobal } from "./updateGlobal";
import { updateOne } from "./updateOne";
import { updateVersion } from "./updateVersion";
import { deleteMany } from "./deleteMany";
import { destroy } from "./destroy";
export function mongooseAdapter(param) {
    var url = param.url, connectOptions = param.connectOptions, migrationDir = param.migrationDir, _param_autoPluralization = param.autoPluralization, autoPluralization = _param_autoPluralization === void 0 ? true : _param_autoPluralization;
    var adapter = function adapter(param) {
        var payload = param.payload;
        mongoose.set("strictQuery", false);
        return createDatabaseAdapter({
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
            connect: connect,
            destroy: destroy,
            init: init,
            webpack: webpack,
            createMigration: createMigration,
            beginTransaction: beginTransaction,
            rollbackTransaction: rollbackTransaction,
            commitTransaction: commitTransaction,
            queryDrafts: queryDrafts,
            findOne: findOne,
            find: find,
            create: create,
            updateOne: updateOne,
            deleteOne: deleteOne,
            deleteMany: deleteMany,
            findGlobal: findGlobal,
            createGlobal: createGlobal,
            updateGlobal: updateGlobal,
            findVersions: findVersions,
            findGlobalVersions: findGlobalVersions,
            createVersion: createVersion,
            updateVersion: updateVersion,
            deleteVersions: deleteVersions
        });
    };
    return adapter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IENsaWVudFNlc3Npb24sIENvbm5lY3Rpb24sIENvbm5lY3RPcHRpb25zIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IGNyZWF0ZU1pZ3JhdGlvbiB9IGZyb20gJ3BheWxvYWQvZGF0YWJhc2UnO1xuaW1wb3J0IHR5cGUgeyBQYXlsb2FkIH0gZnJvbSAncGF5bG9hZCc7XG5pbXBvcnQgdHlwZSB7IERhdGFiYXNlQWRhcHRlciB9IGZyb20gJ3BheWxvYWQvZGF0YWJhc2UnO1xuaW1wb3J0IHsgY3JlYXRlRGF0YWJhc2VBZGFwdGVyIH0gZnJvbSAncGF5bG9hZC9kYXRhYmFzZSc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnLi9jb25uZWN0JztcbmltcG9ydCB7IGluaXQgfSBmcm9tICcuL2luaXQnO1xuaW1wb3J0IHsgd2VicGFjayB9IGZyb20gJy4vd2VicGFjayc7XG5pbXBvcnQgeyBjcmVhdGVHbG9iYWwgfSBmcm9tICcuL2NyZWF0ZUdsb2JhbCc7XG5pbXBvcnQgeyBjcmVhdGVWZXJzaW9uIH0gZnJvbSAnLi9jcmVhdGVWZXJzaW9uJztcbmltcG9ydCB7IGJlZ2luVHJhbnNhY3Rpb24gfSBmcm9tICcuL3RyYW5zYWN0aW9ucy9iZWdpblRyYW5zYWN0aW9uJztcbmltcG9ydCB7IHJvbGxiYWNrVHJhbnNhY3Rpb24gfSBmcm9tICcuL3RyYW5zYWN0aW9ucy9yb2xsYmFja1RyYW5zYWN0aW9uJztcbmltcG9ydCB7IGNvbW1pdFRyYW5zYWN0aW9uIH0gZnJvbSAnLi90cmFuc2FjdGlvbnMvY29tbWl0VHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsgcXVlcnlEcmFmdHMgfSBmcm9tICcuL3F1ZXJ5RHJhZnRzJztcbmltcG9ydCB7IGZpbmQgfSBmcm9tICcuL2ZpbmQnO1xuaW1wb3J0IHsgZmluZEdsb2JhbFZlcnNpb25zIH0gZnJvbSAnLi9maW5kR2xvYmFsVmVyc2lvbnMnO1xuaW1wb3J0IHsgZmluZFZlcnNpb25zIH0gZnJvbSAnLi9maW5kVmVyc2lvbnMnO1xuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnLi9jcmVhdGUnO1xuaW1wb3J0IHsgZGVsZXRlT25lIH0gZnJvbSAnLi9kZWxldGVPbmUnO1xuaW1wb3J0IHsgZGVsZXRlVmVyc2lvbnMgfSBmcm9tICcuL2RlbGV0ZVZlcnNpb25zJztcbmltcG9ydCB7IGZpbmRHbG9iYWwgfSBmcm9tICcuL2ZpbmRHbG9iYWwnO1xuaW1wb3J0IHsgZmluZE9uZSB9IGZyb20gJy4vZmluZE9uZSc7XG5pbXBvcnQgeyB1cGRhdGVHbG9iYWwgfSBmcm9tICcuL3VwZGF0ZUdsb2JhbCc7XG5pbXBvcnQgeyB1cGRhdGVPbmUgfSBmcm9tICcuL3VwZGF0ZU9uZSc7XG5pbXBvcnQgeyB1cGRhdGVWZXJzaW9uIH0gZnJvbSAnLi91cGRhdGVWZXJzaW9uJztcbmltcG9ydCB7IGRlbGV0ZU1hbnkgfSBmcm9tICcuL2RlbGV0ZU1hbnknO1xuaW1wb3J0IHsgZGVzdHJveSB9IGZyb20gJy4vZGVzdHJveSc7XG5pbXBvcnQgdHlwZSB7IENvbGxlY3Rpb25Nb2RlbCwgR2xvYmFsTW9kZWwgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBBcmdzIHtcbiAgLyoqIFRoZSBVUkwgdG8gY29ubmVjdCB0byBNb25nb0RCIG9yIGZhbHNlIHRvIHN0YXJ0IHBheWxvYWQgYW5kIHByZXZlbnQgY29ubmVjdGluZyAqL1xuICB1cmw6IHN0cmluZyB8IGZhbHNlO1xuICBtaWdyYXRpb25EaXI/OiBzdHJpbmc7XG4gIC8qKiBFeHRyYSBjb25maWd1cmF0aW9uIG9wdGlvbnMgKi9cbiAgY29ubmVjdE9wdGlvbnM/OiBDb25uZWN0T3B0aW9ucyAmIHtcbiAgICAvKiogU2V0IGZhbHNlIHRvIGRpc2FibGUgJGZhY2V0IGFnZ3JlZ2F0aW9uIGluIG5vbi1zdXBwb3J0aW5nIGRhdGFiYXNlcywgRGVmYXVsdHMgdG8gdHJ1ZSAqL1xuICAgIHVzZUZhY2V0PzogYm9vbGVhbjtcbiAgfTtcbiAgLyoqIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIGF1dG8tcGx1cmFsaXphdGlvbiBvZiBjb2xsZWN0aW9uIG5hbWVzLCBEZWZhdWx0cyB0byB0cnVlICovXG4gIGF1dG9QbHVyYWxpemF0aW9uPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgTW9uZ29vc2VBZGFwdGVyID0gRGF0YWJhc2VBZGFwdGVyICZcbiAgQXJncyAmIHtcbiAgICBtb25nb01lbW9yeVNlcnZlcjogYW55O1xuICAgIGNvbGxlY3Rpb25zOiB7XG4gICAgICBbc2x1Zzogc3RyaW5nXTogQ29sbGVjdGlvbk1vZGVsO1xuICAgIH07XG4gICAgZ2xvYmFsczogR2xvYmFsTW9kZWw7XG4gICAgdmVyc2lvbnM6IHtcbiAgICAgIFtzbHVnOiBzdHJpbmddOiBDb2xsZWN0aW9uTW9kZWxcbiAgICB9XG4gICAgc2Vzc2lvbnM6IFJlY29yZDxzdHJpbmcgfCBudW1iZXIsIENsaWVudFNlc3Npb24+XG4gICAgY29ubmVjdGlvbjogQ29ubmVjdGlvblxuICB9XG5cbnR5cGUgTW9uZ29vc2VBZGFwdGVyUmVzdWx0ID0gKGFyZ3M6IHsgcGF5bG9hZDogUGF5bG9hZCB9KSA9PiBNb25nb29zZUFkYXB0ZXJcblxuZXhwb3J0IGZ1bmN0aW9uIG1vbmdvb3NlQWRhcHRlcih7XG4gIHVybCxcbiAgY29ubmVjdE9wdGlvbnMsXG4gIG1pZ3JhdGlvbkRpcixcbiAgYXV0b1BsdXJhbGl6YXRpb24gPSB0cnVlLFxufTogQXJncyk6IE1vbmdvb3NlQWRhcHRlclJlc3VsdCB7XG4gIGZ1bmN0aW9uIGFkYXB0ZXIoeyBwYXlsb2FkIH06IHsgcGF5bG9hZDogUGF5bG9hZCB9KSB7XG4gICAgbW9uZ29vc2Uuc2V0KCdzdHJpY3RRdWVyeScsIGZhbHNlKTtcblxuICAgIHJldHVybiBjcmVhdGVEYXRhYmFzZUFkYXB0ZXI8TW9uZ29vc2VBZGFwdGVyPih7XG4gICAgICBwYXlsb2FkLFxuICAgICAgbWlncmF0aW9uRGlyLFxuICAgICAgY29ubmVjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgbW9uZ29NZW1vcnlTZXJ2ZXI6IHVuZGVmaW5lZCxcbiAgICAgIHNlc3Npb25zOiB7fSxcbiAgICAgIHVybCxcbiAgICAgIGNvbm5lY3RPcHRpb25zOiBjb25uZWN0T3B0aW9ucyB8fCB7fSxcbiAgICAgIGF1dG9QbHVyYWxpemF0aW9uLFxuICAgICAgZ2xvYmFsczogdW5kZWZpbmVkLFxuICAgICAgY29sbGVjdGlvbnM6IHt9LFxuICAgICAgdmVyc2lvbnM6IHt9LFxuICAgICAgY29ubmVjdCxcbiAgICAgIGRlc3Ryb3ksXG4gICAgICBpbml0LFxuICAgICAgd2VicGFjayxcbiAgICAgIGNyZWF0ZU1pZ3JhdGlvbixcbiAgICAgIGJlZ2luVHJhbnNhY3Rpb24sXG4gICAgICByb2xsYmFja1RyYW5zYWN0aW9uLFxuICAgICAgY29tbWl0VHJhbnNhY3Rpb24sXG4gICAgICBxdWVyeURyYWZ0cyxcbiAgICAgIGZpbmRPbmUsXG4gICAgICBmaW5kLFxuICAgICAgY3JlYXRlLFxuICAgICAgdXBkYXRlT25lLFxuICAgICAgZGVsZXRlT25lLFxuICAgICAgZGVsZXRlTWFueSxcbiAgICAgIGZpbmRHbG9iYWwsXG4gICAgICBjcmVhdGVHbG9iYWwsXG4gICAgICB1cGRhdGVHbG9iYWwsXG4gICAgICBmaW5kVmVyc2lvbnMsXG4gICAgICBmaW5kR2xvYmFsVmVyc2lvbnMsXG4gICAgICBjcmVhdGVWZXJzaW9uLFxuICAgICAgdXBkYXRlVmVyc2lvbixcbiAgICAgIGRlbGV0ZVZlcnNpb25zLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjcmVhdGVNaWdyYXRpb24iLCJjcmVhdGVEYXRhYmFzZUFkYXB0ZXIiLCJjb25uZWN0IiwiaW5pdCIsIndlYnBhY2siLCJjcmVhdGVHbG9iYWwiLCJjcmVhdGVWZXJzaW9uIiwiYmVnaW5UcmFuc2FjdGlvbiIsInJvbGxiYWNrVHJhbnNhY3Rpb24iLCJjb21taXRUcmFuc2FjdGlvbiIsInF1ZXJ5RHJhZnRzIiwiZmluZCIsImZpbmRHbG9iYWxWZXJzaW9ucyIsImZpbmRWZXJzaW9ucyIsImNyZWF0ZSIsImRlbGV0ZU9uZSIsImRlbGV0ZVZlcnNpb25zIiwiZmluZEdsb2JhbCIsImZpbmRPbmUiLCJ1cGRhdGVHbG9iYWwiLCJ1cGRhdGVPbmUiLCJ1cGRhdGVWZXJzaW9uIiwiZGVsZXRlTWFueSIsImRlc3Ryb3kiLCJtb25nb29zZUFkYXB0ZXIiLCJ1cmwiLCJjb25uZWN0T3B0aW9ucyIsIm1pZ3JhdGlvbkRpciIsImF1dG9QbHVyYWxpemF0aW9uIiwiYWRhcHRlciIsInBheWxvYWQiLCJzZXQiLCJjb25uZWN0aW9uIiwidW5kZWZpbmVkIiwibW9uZ29NZW1vcnlTZXJ2ZXIiLCJzZXNzaW9ucyIsImdsb2JhbHMiLCJjb2xsZWN0aW9ucyIsInZlcnNpb25zIl0sIm1hcHBpbmdzIjoiQUFDQSxPQUFPQSxjQUFjLFdBQVc7QUFDaEMsU0FBU0MsZUFBZSxRQUFRLG1CQUFtQjtBQUduRCxTQUFTQyxxQkFBcUIsUUFBUSxtQkFBbUI7QUFDekQsU0FBU0MsT0FBTyxRQUFRLFlBQVk7QUFDcEMsU0FBU0MsSUFBSSxRQUFRLFNBQVM7QUFDOUIsU0FBU0MsT0FBTyxRQUFRLFlBQVk7QUFDcEMsU0FBU0MsWUFBWSxRQUFRLGlCQUFpQjtBQUM5QyxTQUFTQyxhQUFhLFFBQVEsa0JBQWtCO0FBQ2hELFNBQVNDLGdCQUFnQixRQUFRLGtDQUFrQztBQUNuRSxTQUFTQyxtQkFBbUIsUUFBUSxxQ0FBcUM7QUFDekUsU0FBU0MsaUJBQWlCLFFBQVEsbUNBQW1DO0FBQ3JFLFNBQVNDLFdBQVcsUUFBUSxnQkFBZ0I7QUFDNUMsU0FBU0MsSUFBSSxRQUFRLFNBQVM7QUFDOUIsU0FBU0Msa0JBQWtCLFFBQVEsdUJBQXVCO0FBQzFELFNBQVNDLFlBQVksUUFBUSxpQkFBaUI7QUFDOUMsU0FBU0MsTUFBTSxRQUFRLFdBQVc7QUFDbEMsU0FBU0MsU0FBUyxRQUFRLGNBQWM7QUFDeEMsU0FBU0MsY0FBYyxRQUFRLG1CQUFtQjtBQUNsRCxTQUFTQyxVQUFVLFFBQVEsZUFBZTtBQUMxQyxTQUFTQyxPQUFPLFFBQVEsWUFBWTtBQUNwQyxTQUFTQyxZQUFZLFFBQVEsaUJBQWlCO0FBQzlDLFNBQVNDLFNBQVMsUUFBUSxjQUFjO0FBQ3hDLFNBQVNDLGFBQWEsUUFBUSxrQkFBa0I7QUFDaEQsU0FBU0MsVUFBVSxRQUFRLGVBQWU7QUFDMUMsU0FBU0MsT0FBTyxRQUFRLFlBQVk7QUFnQ3BDLE9BQU8sU0FBU0MsZ0JBQWdCLEtBS3pCO1FBSkxDLE1BRDhCLE1BQzlCQSxLQUNBQyxpQkFGOEIsTUFFOUJBLGdCQUNBQyxlQUg4QixNQUc5QkEseUNBSDhCLE1BSTlCQyxtQkFBQUEsMERBQW9CO1FBRVhDLFVBQVQsU0FBU0EsUUFBUSxLQUFpQztZQUFqQyxBQUFFQyxVQUFGLE1BQUVBO1FBQ2pCL0IsU0FBU2dDLEdBQUcsQ0FBQyxlQUFlO1FBRTVCLE9BQU85QixzQkFBdUM7WUFDNUM2QixTQUFBQTtZQUNBSCxjQUFBQTtZQUNBSyxZQUFZQztZQUNaQyxtQkFBbUJEO1lBQ25CRSxVQUFVLENBQUM7WUFDWFYsS0FBQUE7WUFDQUMsZ0JBQWdCQSxrQkFBa0IsQ0FBQztZQUNuQ0UsbUJBQUFBO1lBQ0FRLFNBQVNIO1lBQ1RJLGFBQWEsQ0FBQztZQUNkQyxVQUFVLENBQUM7WUFDWHBDLFNBQUFBO1lBQ0FxQixTQUFBQTtZQUNBcEIsTUFBQUE7WUFDQUMsU0FBQUE7WUFDQUosaUJBQUFBO1lBQ0FPLGtCQUFBQTtZQUNBQyxxQkFBQUE7WUFDQUMsbUJBQUFBO1lBQ0FDLGFBQUFBO1lBQ0FRLFNBQUFBO1lBQ0FQLE1BQUFBO1lBQ0FHLFFBQUFBO1lBQ0FNLFdBQUFBO1lBQ0FMLFdBQUFBO1lBQ0FPLFlBQUFBO1lBQ0FMLFlBQUFBO1lBQ0FaLGNBQUFBO1lBQ0FjLGNBQUFBO1lBQ0FOLGNBQUFBO1lBQ0FELG9CQUFBQTtZQUNBTixlQUFBQTtZQUNBZSxlQUFBQTtZQUNBTCxnQkFBQUE7UUFDRjtJQUNGO0lBRUEsT0FBT2E7QUFDVCJ9
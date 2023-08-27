import mongoose from "mongoose";
import buildSchema from "./buildSchema";
import getBuildQueryPlugin from "../queries/buildQuery";
export var buildGlobalModel = function(config) {
    if (config.globals && config.globals.length > 0) {
        var globalsSchema = new mongoose.Schema({}, {
            discriminatorKey: "globalType",
            timestamps: true,
            minimize: false
        });
        globalsSchema.plugin(getBuildQueryPlugin());
        var Globals = mongoose.model("globals", globalsSchema, "globals");
        Object.values(config.globals).forEach(function(globalConfig) {
            var globalSchema = buildSchema(config, globalConfig.fields, {
                options: {
                    minimize: false
                }
            });
            Globals.discriminator(globalConfig.slug, globalSchema);
        });
        return Globals;
    }
    return null;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvYnVpbGRHbG9iYWxNb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29uZmlnIH0gZnJvbSAncGF5bG9hZC9jb25maWcnO1xuaW1wb3J0IGJ1aWxkU2NoZW1hIGZyb20gJy4vYnVpbGRTY2hlbWEnO1xuaW1wb3J0IGdldEJ1aWxkUXVlcnlQbHVnaW4gZnJvbSAnLi4vcXVlcmllcy9idWlsZFF1ZXJ5JztcbmltcG9ydCB0eXBlIHsgR2xvYmFsTW9kZWwgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBidWlsZEdsb2JhbE1vZGVsID0gKGNvbmZpZzogU2FuaXRpemVkQ29uZmlnKTogR2xvYmFsTW9kZWwgfCBudWxsID0+IHtcbiAgaWYgKGNvbmZpZy5nbG9iYWxzICYmIGNvbmZpZy5nbG9iYWxzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBnbG9iYWxzU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7fSwgeyBkaXNjcmltaW5hdG9yS2V5OiAnZ2xvYmFsVHlwZScsIHRpbWVzdGFtcHM6IHRydWUsIG1pbmltaXplOiBmYWxzZSB9KTtcblxuICAgIGdsb2JhbHNTY2hlbWEucGx1Z2luKGdldEJ1aWxkUXVlcnlQbHVnaW4oKSk7XG5cbiAgICBjb25zdCBHbG9iYWxzID0gbW9uZ29vc2UubW9kZWwoJ2dsb2JhbHMnLCBnbG9iYWxzU2NoZW1hLCAnZ2xvYmFscycpIGFzIHVua25vd24gYXMgR2xvYmFsTW9kZWw7XG5cbiAgICBPYmplY3QudmFsdWVzKGNvbmZpZy5nbG9iYWxzKS5mb3JFYWNoKChnbG9iYWxDb25maWcpID0+IHtcbiAgICAgIGNvbnN0IGdsb2JhbFNjaGVtYSA9IGJ1aWxkU2NoZW1hKFxuICAgICAgICBjb25maWcsXG4gICAgICAgIGdsb2JhbENvbmZpZy5maWVsZHMsXG4gICAgICAgIHtcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBtaW5pbWl6ZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgICBHbG9iYWxzLmRpc2NyaW1pbmF0b3IoZ2xvYmFsQ29uZmlnLnNsdWcsIGdsb2JhbFNjaGVtYSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gR2xvYmFscztcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImJ1aWxkU2NoZW1hIiwiZ2V0QnVpbGRRdWVyeVBsdWdpbiIsImJ1aWxkR2xvYmFsTW9kZWwiLCJjb25maWciLCJnbG9iYWxzIiwibGVuZ3RoIiwiZ2xvYmFsc1NjaGVtYSIsIlNjaGVtYSIsImRpc2NyaW1pbmF0b3JLZXkiLCJ0aW1lc3RhbXBzIiwibWluaW1pemUiLCJwbHVnaW4iLCJHbG9iYWxzIiwibW9kZWwiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiZ2xvYmFsQ29uZmlnIiwiZ2xvYmFsU2NoZW1hIiwiZmllbGRzIiwib3B0aW9ucyIsImRpc2NyaW1pbmF0b3IiLCJzbHVnIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxjQUFjLFdBQVc7QUFFaEMsT0FBT0MsaUJBQWlCLGdCQUFnQjtBQUN4QyxPQUFPQyx5QkFBeUIsd0JBQXdCO0FBR3hELE9BQU8sSUFBTUMsbUJBQW1CLFNBQUNDO0lBQy9CLElBQUlBLE9BQU9DLE9BQU8sSUFBSUQsT0FBT0MsT0FBTyxDQUFDQyxNQUFNLEdBQUcsR0FBRztRQUMvQyxJQUFNQyxnQkFBZ0IsSUFBSVAsU0FBU1EsTUFBTSxDQUFDLENBQUMsR0FBRztZQUFFQyxrQkFBa0I7WUFBY0MsWUFBWTtZQUFNQyxVQUFVO1FBQU07UUFFbEhKLGNBQWNLLE1BQU0sQ0FBQ1Y7UUFFckIsSUFBTVcsVUFBVWIsU0FBU2MsS0FBSyxDQUFDLFdBQVdQLGVBQWU7UUFFekRRLE9BQU9DLE1BQU0sQ0FBQ1osT0FBT0MsT0FBTyxFQUFFWSxPQUFPLENBQUMsU0FBQ0M7WUFDckMsSUFBTUMsZUFBZWxCLFlBQ25CRyxRQUNBYyxhQUFhRSxNQUFNLEVBQ25CO2dCQUNFQyxTQUFTO29CQUNQVixVQUFVO2dCQUNaO1lBQ0Y7WUFFRkUsUUFBUVMsYUFBYSxDQUFDSixhQUFhSyxJQUFJLEVBQUVKO1FBQzNDO1FBRUEsT0FBT047SUFDVDtJQUVBLE9BQU87QUFDVCxFQUFFIn0=
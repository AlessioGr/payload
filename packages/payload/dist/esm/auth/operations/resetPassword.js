function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import jwt from "jsonwebtoken";
import { APIError } from "../../errors";
import getCookieExpiration from "../../utilities/getCookieExpiration";
import { getFieldsToSign } from "./getFieldsToSign";
import { authenticateLocalStrategy } from "../strategies/local/authenticate";
import { generatePasswordSaltHash } from "../strategies/local/generatePasswordSaltHash";
import { initTransaction } from "../../utilities/initTransaction";
import { killTransaction } from "../../utilities/killTransaction";
function resetPassword(args) {
    return _resetPassword.apply(this, arguments);
}
function _resetPassword() {
    _resetPassword = _async_to_generator(function(args) {
        var _args_collection, collectionConfig, req, _args_req, _args_req_payload, config, secret, payload, overrideAccess, data, depth, shouldCommit, user, _ref, salt, hash, doc, fieldsToSign, token, cookieOptions, fullUser, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!Object.prototype.hasOwnProperty.call(args.data, "token") || !Object.prototype.hasOwnProperty.call(args.data, "password")) {
                        throw new APIError("Missing required data.");
                    }
                    _args_collection = args.collection, collectionConfig = _args_collection.config, req = args.req, _args_req = args.req, _args_req_payload = _args_req.payload, config = _args_req_payload.config, secret = _args_req_payload.secret, payload = _args_req.payload, overrideAccess = args.overrideAccess, data = args.data, depth = args.depth;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        10,
                        ,
                        12
                    ]);
                    return [
                        4,
                        initTransaction(req)
                    ];
                case 2:
                    shouldCommit = _state.sent();
                    return [
                        4,
                        payload.db.findOne({
                            collection: collectionConfig.slug,
                            where: {
                                resetPasswordToken: {
                                    equals: data.token
                                },
                                resetPasswordExpiration: {
                                    greater_than: Date.now()
                                }
                            },
                            req: req
                        })
                    ];
                case 3:
                    user = _state.sent();
                    if (!user) throw new APIError("Token is either invalid or has expired.");
                    return [
                        4,
                        generatePasswordSaltHash({
                            password: data.password
                        })
                    ];
                case 4:
                    _ref = _state.sent(), salt = _ref.salt, hash = _ref.hash;
                    user.salt = salt;
                    user.hash = hash;
                    user.resetPasswordExpiration = Date.now();
                    if (collectionConfig.auth.verify) {
                        user._verified = true;
                    }
                    return [
                        4,
                        payload.db.updateOne({
                            collection: collectionConfig.slug,
                            id: user.id,
                            data: user,
                            req: req
                        })
                    ];
                case 5:
                    doc = _state.sent();
                    return [
                        4,
                        authenticateLocalStrategy({
                            password: data.password,
                            doc: doc
                        })
                    ];
                case 6:
                    _state.sent();
                    fieldsToSign = getFieldsToSign({
                        collectionConfig: collectionConfig,
                        user: user,
                        email: user.email
                    });
                    token = jwt.sign(fieldsToSign, secret, {
                        expiresIn: collectionConfig.auth.tokenExpiration
                    });
                    if (args.res) {
                        cookieOptions = {
                            path: "/",
                            httpOnly: true,
                            expires: getCookieExpiration(collectionConfig.auth.tokenExpiration),
                            secure: collectionConfig.auth.cookies.secure,
                            sameSite: collectionConfig.auth.cookies.sameSite,
                            domain: undefined
                        };
                        if (collectionConfig.auth.cookies.domain) cookieOptions.domain = collectionConfig.auth.cookies.domain;
                        args.res.cookie("".concat(config.cookiePrefix, "-token"), token, cookieOptions);
                    }
                    return [
                        4,
                        payload.findByID({
                            collection: collectionConfig.slug,
                            id: user.id,
                            overrideAccess: overrideAccess,
                            depth: depth,
                            req: req
                        })
                    ];
                case 7:
                    fullUser = _state.sent();
                    if (!shouldCommit) return [
                        3,
                        9
                    ];
                    return [
                        4,
                        payload.db.commitTransaction(req.transactionID)
                    ];
                case 8:
                    _state.sent();
                    _state.label = 9;
                case 9:
                    return [
                        2,
                        {
                            token: collectionConfig.auth.removeTokenFromResponses ? undefined : token,
                            user: fullUser
                        }
                    ];
                case 10:
                    error = _state.sent();
                    return [
                        4,
                        killTransaction(req)
                    ];
                case 11:
                    _state.sent();
                    throw error;
                case 12:
                    return [
                        2
                    ];
            }
        });
    });
    return _resetPassword.apply(this, arguments);
}
export default resetPassword;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvcmVzZXRQYXNzd29yZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBBUElFcnJvciB9IGZyb20gJy4uLy4uL2Vycm9ycyc7XG5pbXBvcnQgZ2V0Q29va2llRXhwaXJhdGlvbiBmcm9tICcuLi8uLi91dGlsaXRpZXMvZ2V0Q29va2llRXhwaXJhdGlvbic7XG5pbXBvcnQgeyBnZXRGaWVsZHNUb1NpZ24gfSBmcm9tICcuL2dldEZpZWxkc1RvU2lnbic7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgYXV0aGVudGljYXRlTG9jYWxTdHJhdGVneSB9IGZyb20gJy4uL3N0cmF0ZWdpZXMvbG9jYWwvYXV0aGVudGljYXRlJztcbmltcG9ydCB7IGdlbmVyYXRlUGFzc3dvcmRTYWx0SGFzaCB9IGZyb20gJy4uL3N0cmF0ZWdpZXMvbG9jYWwvZ2VuZXJhdGVQYXNzd29yZFNhbHRIYXNoJztcbmltcG9ydCB7IGluaXRUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pbml0VHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbic7XG5cbmV4cG9ydCB0eXBlIFJlc3VsdCA9IHtcbiAgdG9rZW4/OiBzdHJpbmdcbiAgdXNlcjogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbn1cblxuZXhwb3J0IHR5cGUgQXJndW1lbnRzID0ge1xuICBkYXRhOiB7XG4gICAgdG9rZW46IHN0cmluZ1xuICAgIHBhc3N3b3JkOiBzdHJpbmdcbiAgfVxuICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgb3ZlcnJpZGVBY2Nlc3M/OiBib29sZWFuXG4gIHJlcz86IFJlc3BvbnNlXG4gIGRlcHRoPzogbnVtYmVyXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlc2V0UGFzc3dvcmQoYXJnczogQXJndW1lbnRzKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJncy5kYXRhLCAndG9rZW4nKVxuICAgIHx8ICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJncy5kYXRhLCAncGFzc3dvcmQnKSkge1xuICAgIHRocm93IG5ldyBBUElFcnJvcignTWlzc2luZyByZXF1aXJlZCBkYXRhLicpO1xuICB9XG5cbiAgY29uc3Qge1xuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIGNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICB9LFxuICAgIHJlcSxcbiAgICByZXE6IHtcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBzZWNyZXQsXG4gICAgICB9LFxuICAgICAgcGF5bG9hZCxcbiAgICB9LFxuICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIGRhdGEsXG4gICAgZGVwdGgsXG4gIH0gPSBhcmdzO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2hvdWxkQ29tbWl0ID0gYXdhaXQgaW5pdFRyYW5zYWN0aW9uKHJlcSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUmVzZXQgUGFzc3dvcmRcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcGF5bG9hZC5kYi5maW5kT25lPGFueT4oe1xuICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICAgICAgd2hlcmU6IHtcbiAgICAgICAgcmVzZXRQYXNzd29yZFRva2VuOiB7IGVxdWFsczogZGF0YS50b2tlbiB9LFxuICAgICAgICByZXNldFBhc3N3b3JkRXhwaXJhdGlvbjogeyBncmVhdGVyX3RoYW46IERhdGUubm93KCkgfSxcbiAgICAgIH0sXG4gICAgICByZXEsXG4gICAgfSk7XG5cbiAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBBUElFcnJvcignVG9rZW4gaXMgZWl0aGVyIGludmFsaWQgb3IgaGFzIGV4cGlyZWQuJyk7XG5cbiAgICAvLyBUT0RPOiByZXBsYWNlIHRoaXMgbWV0aG9kXG4gICAgY29uc3QgeyBzYWx0LCBoYXNoIH0gPSBhd2FpdCBnZW5lcmF0ZVBhc3N3b3JkU2FsdEhhc2goeyBwYXNzd29yZDogZGF0YS5wYXNzd29yZCB9KTtcblxuICAgIHVzZXIuc2FsdCA9IHNhbHQ7XG4gICAgdXNlci5oYXNoID0gaGFzaDtcblxuICAgIHVzZXIucmVzZXRQYXNzd29yZEV4cGlyYXRpb24gPSBEYXRlLm5vdygpO1xuXG4gICAgaWYgKGNvbGxlY3Rpb25Db25maWcuYXV0aC52ZXJpZnkpIHtcbiAgICAgIHVzZXIuX3ZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBkb2MgPSBhd2FpdCBwYXlsb2FkLmRiLnVwZGF0ZU9uZSh7XG4gICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcsXG4gICAgICBpZDogdXNlci5pZCxcbiAgICAgIGRhdGE6IHVzZXIsXG4gICAgICByZXEsXG4gICAgfSk7XG5cblxuICAgIGF3YWl0IGF1dGhlbnRpY2F0ZUxvY2FsU3RyYXRlZ3koeyBwYXNzd29yZDogZGF0YS5wYXNzd29yZCwgZG9jIH0pO1xuXG4gICAgY29uc3QgZmllbGRzVG9TaWduID0gZ2V0RmllbGRzVG9TaWduKHtcbiAgICAgIGNvbGxlY3Rpb25Db25maWcsXG4gICAgICB1c2VyLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKFxuICAgICAgZmllbGRzVG9TaWduLFxuICAgICAgc2VjcmV0LFxuICAgICAge1xuICAgICAgICBleHBpcmVzSW46IGNvbGxlY3Rpb25Db25maWcuYXV0aC50b2tlbkV4cGlyYXRpb24sXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBpZiAoYXJncy5yZXMpIHtcbiAgICAgIGNvbnN0IGNvb2tpZU9wdGlvbnMgPSB7XG4gICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgIGV4cGlyZXM6IGdldENvb2tpZUV4cGlyYXRpb24oY29sbGVjdGlvbkNvbmZpZy5hdXRoLnRva2VuRXhwaXJhdGlvbiksXG4gICAgICAgIHNlY3VyZTogY29sbGVjdGlvbkNvbmZpZy5hdXRoLmNvb2tpZXMuc2VjdXJlLFxuICAgICAgICBzYW1lU2l0ZTogY29sbGVjdGlvbkNvbmZpZy5hdXRoLmNvb2tpZXMuc2FtZVNpdGUsXG4gICAgICAgIGRvbWFpbjogdW5kZWZpbmVkLFxuICAgICAgfTtcblxuXG4gICAgICBpZiAoY29sbGVjdGlvbkNvbmZpZy5hdXRoLmNvb2tpZXMuZG9tYWluKSBjb29raWVPcHRpb25zLmRvbWFpbiA9IGNvbGxlY3Rpb25Db25maWcuYXV0aC5jb29raWVzLmRvbWFpbjtcblxuICAgICAgYXJncy5yZXMuY29va2llKGAke2NvbmZpZy5jb29raWVQcmVmaXh9LXRva2VuYCwgdG9rZW4sIGNvb2tpZU9wdGlvbnMpO1xuICAgIH1cblxuICAgIGNvbnN0IGZ1bGxVc2VyID0gYXdhaXQgcGF5bG9hZC5maW5kQnlJRCh7IGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcuc2x1ZywgaWQ6IHVzZXIuaWQsIG92ZXJyaWRlQWNjZXNzLCBkZXB0aCwgcmVxIH0pO1xuICAgIGlmIChzaG91bGRDb21taXQpIGF3YWl0IHBheWxvYWQuZGIuY29tbWl0VHJhbnNhY3Rpb24ocmVxLnRyYW5zYWN0aW9uSUQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRva2VuOiBjb2xsZWN0aW9uQ29uZmlnLmF1dGgucmVtb3ZlVG9rZW5Gcm9tUmVzcG9uc2VzID8gdW5kZWZpbmVkIDogdG9rZW4sXG4gICAgICB1c2VyOiBmdWxsVXNlcixcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGF3YWl0IGtpbGxUcmFuc2FjdGlvbihyZXEpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2V0UGFzc3dvcmQ7XG4iXSwibmFtZXMiOlsiand0IiwiQVBJRXJyb3IiLCJnZXRDb29raWVFeHBpcmF0aW9uIiwiZ2V0RmllbGRzVG9TaWduIiwiYXV0aGVudGljYXRlTG9jYWxTdHJhdGVneSIsImdlbmVyYXRlUGFzc3dvcmRTYWx0SGFzaCIsImluaXRUcmFuc2FjdGlvbiIsImtpbGxUcmFuc2FjdGlvbiIsInJlc2V0UGFzc3dvcmQiLCJhcmdzIiwiY29sbGVjdGlvbkNvbmZpZyIsInJlcSIsImNvbmZpZyIsInNlY3JldCIsInBheWxvYWQiLCJvdmVycmlkZUFjY2VzcyIsImRhdGEiLCJkZXB0aCIsInNob3VsZENvbW1pdCIsInVzZXIiLCJzYWx0IiwiaGFzaCIsImRvYyIsImZpZWxkc1RvU2lnbiIsInRva2VuIiwiY29va2llT3B0aW9ucyIsImZ1bGxVc2VyIiwiZXJyb3IiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJjb2xsZWN0aW9uIiwiZGIiLCJmaW5kT25lIiwic2x1ZyIsIndoZXJlIiwicmVzZXRQYXNzd29yZFRva2VuIiwiZXF1YWxzIiwicmVzZXRQYXNzd29yZEV4cGlyYXRpb24iLCJncmVhdGVyX3RoYW4iLCJEYXRlIiwibm93IiwicGFzc3dvcmQiLCJhdXRoIiwidmVyaWZ5IiwiX3ZlcmlmaWVkIiwidXBkYXRlT25lIiwiaWQiLCJlbWFpbCIsInNpZ24iLCJleHBpcmVzSW4iLCJ0b2tlbkV4cGlyYXRpb24iLCJyZXMiLCJwYXRoIiwiaHR0cE9ubHkiLCJleHBpcmVzIiwic2VjdXJlIiwiY29va2llcyIsInNhbWVTaXRlIiwiZG9tYWluIiwidW5kZWZpbmVkIiwiY29va2llIiwiY29va2llUHJlZml4IiwiZmluZEJ5SUQiLCJjb21taXRUcmFuc2FjdGlvbiIsInRyYW5zYWN0aW9uSUQiLCJyZW1vdmVUb2tlbkZyb21SZXNwb25zZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxTQUFTLGVBQWU7QUFHL0IsU0FBU0MsUUFBUSxRQUFRLGVBQWU7QUFDeEMsT0FBT0MseUJBQXlCLHNDQUFzQztBQUN0RSxTQUFTQyxlQUFlLFFBQVEsb0JBQW9CO0FBRXBELFNBQVNDLHlCQUF5QixRQUFRLG1DQUFtQztBQUM3RSxTQUFTQyx3QkFBd0IsUUFBUSwrQ0FBK0M7QUFDeEYsU0FBU0MsZUFBZSxRQUFRLGtDQUFrQztBQUNsRSxTQUFTQyxlQUFlLFFBQVEsa0NBQWtDO1NBbUJuREMsY0FBY0MsSUFBZTtXQUE3QkQ7O1NBQUFBO0lBQUFBLGlCQUFmLG9CQUFBLFNBQTZCQyxJQUFlOzhCQVE5QkMsa0JBRVZDLG1DQUdJQyxRQUNBQyxRQUVGQyxTQUVGQyxnQkFDQUMsTUFDQUMsT0FJTUMsY0FNQUMsTUFZaUIsTUFBZkMsTUFBTUMsTUFXUkMsS0FVQUMsY0FNQUMsT0FTRUMsZUFlRkMsVUFPQ0M7Ozs7b0JBbkdULElBQUksQ0FBQ0MsT0FBT0MsU0FBUyxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQ3RCLEtBQUtPLElBQUksRUFBRSxZQUNoRCxDQUFDWSxPQUFPQyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDdEIsS0FBS08sSUFBSSxFQUFFLGFBQWE7d0JBQ2pFLE1BQU0sSUFBSWYsU0FBUztvQkFDckI7dUNBaUJJUSxLQWRGdUIsWUFDVXRCLG9DQUFSRSxRQUVGRCxNQVdFRixLQVhGRSxpQkFXRUYsS0FWRkUsbUNBQ0VHLFNBQ0VGLDJCQUFBQSxRQUNBQywyQkFBQUEsUUFFRkMsb0JBQUFBLFNBRUZDLGlCQUdFTixLQUhGTSxnQkFDQUMsT0FFRVAsS0FGRk8sTUFDQUMsUUFDRVIsS0FERlE7Ozs7Ozs7OztvQkFJcUI7O3dCQUFNWCxnQkFBZ0JLOzs7b0JBQXJDTyxlQUFlO29CQU1SOzt3QkFBTUosUUFBUW1CLEVBQUUsQ0FBQ0MsT0FBTyxDQUFNOzRCQUN6Q0YsWUFBWXRCLGlCQUFpQnlCLElBQUk7NEJBQ2pDQyxPQUFPO2dDQUNMQyxvQkFBb0I7b0NBQUVDLFFBQVF0QixLQUFLUSxLQUFLO2dDQUFDO2dDQUN6Q2UseUJBQXlCO29DQUFFQyxjQUFjQyxLQUFLQyxHQUFHO2dDQUFHOzRCQUN0RDs0QkFDQS9CLEtBQUFBO3dCQUNGOzs7b0JBUE1RLE9BQU87b0JBU2IsSUFBSSxDQUFDQSxNQUFNLE1BQU0sSUFBSWxCLFNBQVM7b0JBR1A7O3dCQUFNSSx5QkFBeUI7NEJBQUVzQyxVQUFVM0IsS0FBSzJCLFFBQVE7d0JBQUM7OztvQkFBekQsT0FBQSxlQUFmdkIsT0FBZSxLQUFmQSxNQUFNQyxPQUFTLEtBQVRBO29CQUVkRixLQUFLQyxJQUFJLEdBQUdBO29CQUNaRCxLQUFLRSxJQUFJLEdBQUdBO29CQUVaRixLQUFLb0IsdUJBQXVCLEdBQUdFLEtBQUtDLEdBQUc7b0JBRXZDLElBQUloQyxpQkFBaUJrQyxJQUFJLENBQUNDLE1BQU0sRUFBRTt3QkFDaEMxQixLQUFLMkIsU0FBUyxHQUFHO29CQUNuQjtvQkFFWTs7d0JBQU1oQyxRQUFRbUIsRUFBRSxDQUFDYyxTQUFTLENBQUM7NEJBQ3JDZixZQUFZdEIsaUJBQWlCeUIsSUFBSTs0QkFDakNhLElBQUk3QixLQUFLNkIsRUFBRTs0QkFDWGhDLE1BQU1HOzRCQUNOUixLQUFBQTt3QkFDRjs7O29CQUxNVyxNQUFNO29CQVFaOzt3QkFBTWxCLDBCQUEwQjs0QkFBRXVDLFVBQVUzQixLQUFLMkIsUUFBUTs0QkFBRXJCLEtBQUFBO3dCQUFJOzs7b0JBQS9EO29CQUVNQyxlQUFlcEIsZ0JBQWdCO3dCQUNuQ08sa0JBQUFBO3dCQUNBUyxNQUFBQTt3QkFDQThCLE9BQU85QixLQUFLOEIsS0FBSztvQkFDbkI7b0JBRU16QixRQUFReEIsSUFBSWtELElBQUksQ0FDcEIzQixjQUNBVixRQUNBO3dCQUNFc0MsV0FBV3pDLGlCQUFpQmtDLElBQUksQ0FBQ1EsZUFBZTtvQkFDbEQ7b0JBR0YsSUFBSTNDLEtBQUs0QyxHQUFHLEVBQUU7d0JBQ041QixnQkFBZ0I7NEJBQ3BCNkIsTUFBTTs0QkFDTkMsVUFBVTs0QkFDVkMsU0FBU3RELG9CQUFvQlEsaUJBQWlCa0MsSUFBSSxDQUFDUSxlQUFlOzRCQUNsRUssUUFBUS9DLGlCQUFpQmtDLElBQUksQ0FBQ2MsT0FBTyxDQUFDRCxNQUFNOzRCQUM1Q0UsVUFBVWpELGlCQUFpQmtDLElBQUksQ0FBQ2MsT0FBTyxDQUFDQyxRQUFROzRCQUNoREMsUUFBUUM7d0JBQ1Y7d0JBR0EsSUFBSW5ELGlCQUFpQmtDLElBQUksQ0FBQ2MsT0FBTyxDQUFDRSxNQUFNLEVBQUVuQyxjQUFjbUMsTUFBTSxHQUFHbEQsaUJBQWlCa0MsSUFBSSxDQUFDYyxPQUFPLENBQUNFLE1BQU07d0JBRXJHbkQsS0FBSzRDLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEFBQUMsR0FBc0IsT0FBcEJsRCxPQUFPbUQsWUFBWSxFQUFDLFdBQVN2QyxPQUFPQztvQkFDekQ7b0JBRWlCOzt3QkFBTVgsUUFBUWtELFFBQVEsQ0FBQzs0QkFBRWhDLFlBQVl0QixpQkFBaUJ5QixJQUFJOzRCQUFFYSxJQUFJN0IsS0FBSzZCLEVBQUU7NEJBQUVqQyxnQkFBQUE7NEJBQWdCRSxPQUFBQTs0QkFBT04sS0FBQUE7d0JBQUk7OztvQkFBL0dlLFdBQVc7eUJBQ2JSLGNBQUFBOzs7O29CQUFjOzt3QkFBTUosUUFBUW1CLEVBQUUsQ0FBQ2dDLGlCQUFpQixDQUFDdEQsSUFBSXVELGFBQWE7OztvQkFBcEQ7OztvQkFFbEI7O3dCQUFPOzRCQUNMMUMsT0FBT2QsaUJBQWlCa0MsSUFBSSxDQUFDdUIsd0JBQXdCLEdBQUdOLFlBQVlyQzs0QkFDcEVMLE1BQU1PO3dCQUNSOzs7b0JBQ09DO29CQUNQOzt3QkFBTXBCLGdCQUFnQkk7OztvQkFBdEI7b0JBQ0EsTUFBTWdCOzs7Ozs7O0lBRVY7V0F4R2VuQjs7QUEwR2YsZUFBZUEsY0FBYyJ9
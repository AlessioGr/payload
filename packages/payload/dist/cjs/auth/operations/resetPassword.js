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
var _jsonwebtoken = /*#__PURE__*/ _interop_require_default(require("jsonwebtoken"));
var _errors = require("../../errors");
var _getCookieExpiration = /*#__PURE__*/ _interop_require_default(require("../../utilities/getCookieExpiration"));
var _getFieldsToSign = require("./getFieldsToSign");
var _authenticate = require("../strategies/local/authenticate");
var _generatePasswordSaltHash = require("../strategies/local/generatePasswordSaltHash");
var _initTransaction = require("../../utilities/initTransaction");
var _killTransaction = require("../../utilities/killTransaction");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
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
                        throw new _errors.APIError("Missing required data.");
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
                        (0, _initTransaction.initTransaction)(req)
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
                    if (!user) throw new _errors.APIError("Token is either invalid or has expired.");
                    return [
                        4,
                        (0, _generatePasswordSaltHash.generatePasswordSaltHash)({
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
                        (0, _authenticate.authenticateLocalStrategy)({
                            password: data.password,
                            doc: doc
                        })
                    ];
                case 6:
                    _state.sent();
                    fieldsToSign = (0, _getFieldsToSign.getFieldsToSign)({
                        collectionConfig: collectionConfig,
                        user: user,
                        email: user.email
                    });
                    token = _jsonwebtoken.default.sign(fieldsToSign, secret, {
                        expiresIn: collectionConfig.auth.tokenExpiration
                    });
                    if (args.res) {
                        cookieOptions = {
                            path: "/",
                            httpOnly: true,
                            expires: (0, _getCookieExpiration.default)(collectionConfig.auth.tokenExpiration),
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
                        (0, _killTransaction.killTransaction)(req)
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
var _default = resetPassword;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL29wZXJhdGlvbnMvcmVzZXRQYXNzd29yZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBBUElFcnJvciB9IGZyb20gJy4uLy4uL2Vycm9ycyc7XG5pbXBvcnQgZ2V0Q29va2llRXhwaXJhdGlvbiBmcm9tICcuLi8uLi91dGlsaXRpZXMvZ2V0Q29va2llRXhwaXJhdGlvbic7XG5pbXBvcnQgeyBnZXRGaWVsZHNUb1NpZ24gfSBmcm9tICcuL2dldEZpZWxkc1RvU2lnbic7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgYXV0aGVudGljYXRlTG9jYWxTdHJhdGVneSB9IGZyb20gJy4uL3N0cmF0ZWdpZXMvbG9jYWwvYXV0aGVudGljYXRlJztcbmltcG9ydCB7IGdlbmVyYXRlUGFzc3dvcmRTYWx0SGFzaCB9IGZyb20gJy4uL3N0cmF0ZWdpZXMvbG9jYWwvZ2VuZXJhdGVQYXNzd29yZFNhbHRIYXNoJztcbmltcG9ydCB7IGluaXRUcmFuc2FjdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9pbml0VHJhbnNhY3Rpb24nO1xuaW1wb3J0IHsga2lsbFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vdXRpbGl0aWVzL2tpbGxUcmFuc2FjdGlvbic7XG5cbmV4cG9ydCB0eXBlIFJlc3VsdCA9IHtcbiAgdG9rZW4/OiBzdHJpbmdcbiAgdXNlcjogUmVjb3JkPHN0cmluZywgdW5rbm93bj5cbn1cblxuZXhwb3J0IHR5cGUgQXJndW1lbnRzID0ge1xuICBkYXRhOiB7XG4gICAgdG9rZW46IHN0cmluZ1xuICAgIHBhc3N3b3JkOiBzdHJpbmdcbiAgfVxuICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgb3ZlcnJpZGVBY2Nlc3M/OiBib29sZWFuXG4gIHJlcz86IFJlc3BvbnNlXG4gIGRlcHRoPzogbnVtYmVyXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlc2V0UGFzc3dvcmQoYXJnczogQXJndW1lbnRzKTogUHJvbWlzZTxSZXN1bHQ+IHtcbiAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJncy5kYXRhLCAndG9rZW4nKVxuICAgIHx8ICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXJncy5kYXRhLCAncGFzc3dvcmQnKSkge1xuICAgIHRocm93IG5ldyBBUElFcnJvcignTWlzc2luZyByZXF1aXJlZCBkYXRhLicpO1xuICB9XG5cbiAgY29uc3Qge1xuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIGNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICB9LFxuICAgIHJlcSxcbiAgICByZXE6IHtcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBzZWNyZXQsXG4gICAgICB9LFxuICAgICAgcGF5bG9hZCxcbiAgICB9LFxuICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgIGRhdGEsXG4gICAgZGVwdGgsXG4gIH0gPSBhcmdzO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgc2hvdWxkQ29tbWl0ID0gYXdhaXQgaW5pdFRyYW5zYWN0aW9uKHJlcSk7XG5cbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgLy8gUmVzZXQgUGFzc3dvcmRcbiAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcGF5bG9hZC5kYi5maW5kT25lPGFueT4oe1xuICAgICAgY29sbGVjdGlvbjogY29sbGVjdGlvbkNvbmZpZy5zbHVnLFxuICAgICAgd2hlcmU6IHtcbiAgICAgICAgcmVzZXRQYXNzd29yZFRva2VuOiB7IGVxdWFsczogZGF0YS50b2tlbiB9LFxuICAgICAgICByZXNldFBhc3N3b3JkRXhwaXJhdGlvbjogeyBncmVhdGVyX3RoYW46IERhdGUubm93KCkgfSxcbiAgICAgIH0sXG4gICAgICByZXEsXG4gICAgfSk7XG5cbiAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBBUElFcnJvcignVG9rZW4gaXMgZWl0aGVyIGludmFsaWQgb3IgaGFzIGV4cGlyZWQuJyk7XG5cbiAgICAvLyBUT0RPOiByZXBsYWNlIHRoaXMgbWV0aG9kXG4gICAgY29uc3QgeyBzYWx0LCBoYXNoIH0gPSBhd2FpdCBnZW5lcmF0ZVBhc3N3b3JkU2FsdEhhc2goeyBwYXNzd29yZDogZGF0YS5wYXNzd29yZCB9KTtcblxuICAgIHVzZXIuc2FsdCA9IHNhbHQ7XG4gICAgdXNlci5oYXNoID0gaGFzaDtcblxuICAgIHVzZXIucmVzZXRQYXNzd29yZEV4cGlyYXRpb24gPSBEYXRlLm5vdygpO1xuXG4gICAgaWYgKGNvbGxlY3Rpb25Db25maWcuYXV0aC52ZXJpZnkpIHtcbiAgICAgIHVzZXIuX3ZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBkb2MgPSBhd2FpdCBwYXlsb2FkLmRiLnVwZGF0ZU9uZSh7XG4gICAgICBjb2xsZWN0aW9uOiBjb2xsZWN0aW9uQ29uZmlnLnNsdWcsXG4gICAgICBpZDogdXNlci5pZCxcbiAgICAgIGRhdGE6IHVzZXIsXG4gICAgICByZXEsXG4gICAgfSk7XG5cblxuICAgIGF3YWl0IGF1dGhlbnRpY2F0ZUxvY2FsU3RyYXRlZ3koeyBwYXNzd29yZDogZGF0YS5wYXNzd29yZCwgZG9jIH0pO1xuXG4gICAgY29uc3QgZmllbGRzVG9TaWduID0gZ2V0RmllbGRzVG9TaWduKHtcbiAgICAgIGNvbGxlY3Rpb25Db25maWcsXG4gICAgICB1c2VyLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgfSk7XG5cbiAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKFxuICAgICAgZmllbGRzVG9TaWduLFxuICAgICAgc2VjcmV0LFxuICAgICAge1xuICAgICAgICBleHBpcmVzSW46IGNvbGxlY3Rpb25Db25maWcuYXV0aC50b2tlbkV4cGlyYXRpb24sXG4gICAgICB9LFxuICAgICk7XG5cbiAgICBpZiAoYXJncy5yZXMpIHtcbiAgICAgIGNvbnN0IGNvb2tpZU9wdGlvbnMgPSB7XG4gICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgIGV4cGlyZXM6IGdldENvb2tpZUV4cGlyYXRpb24oY29sbGVjdGlvbkNvbmZpZy5hdXRoLnRva2VuRXhwaXJhdGlvbiksXG4gICAgICAgIHNlY3VyZTogY29sbGVjdGlvbkNvbmZpZy5hdXRoLmNvb2tpZXMuc2VjdXJlLFxuICAgICAgICBzYW1lU2l0ZTogY29sbGVjdGlvbkNvbmZpZy5hdXRoLmNvb2tpZXMuc2FtZVNpdGUsXG4gICAgICAgIGRvbWFpbjogdW5kZWZpbmVkLFxuICAgICAgfTtcblxuXG4gICAgICBpZiAoY29sbGVjdGlvbkNvbmZpZy5hdXRoLmNvb2tpZXMuZG9tYWluKSBjb29raWVPcHRpb25zLmRvbWFpbiA9IGNvbGxlY3Rpb25Db25maWcuYXV0aC5jb29raWVzLmRvbWFpbjtcblxuICAgICAgYXJncy5yZXMuY29va2llKGAke2NvbmZpZy5jb29raWVQcmVmaXh9LXRva2VuYCwgdG9rZW4sIGNvb2tpZU9wdGlvbnMpO1xuICAgIH1cblxuICAgIGNvbnN0IGZ1bGxVc2VyID0gYXdhaXQgcGF5bG9hZC5maW5kQnlJRCh7IGNvbGxlY3Rpb246IGNvbGxlY3Rpb25Db25maWcuc2x1ZywgaWQ6IHVzZXIuaWQsIG92ZXJyaWRlQWNjZXNzLCBkZXB0aCwgcmVxIH0pO1xuICAgIGlmIChzaG91bGRDb21taXQpIGF3YWl0IHBheWxvYWQuZGIuY29tbWl0VHJhbnNhY3Rpb24ocmVxLnRyYW5zYWN0aW9uSUQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRva2VuOiBjb2xsZWN0aW9uQ29uZmlnLmF1dGgucmVtb3ZlVG9rZW5Gcm9tUmVzcG9uc2VzID8gdW5kZWZpbmVkIDogdG9rZW4sXG4gICAgICB1c2VyOiBmdWxsVXNlcixcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcjogdW5rbm93bikge1xuICAgIGF3YWl0IGtpbGxUcmFuc2FjdGlvbihyZXEpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc2V0UGFzc3dvcmQ7XG4iXSwibmFtZXMiOlsicmVzZXRQYXNzd29yZCIsImFyZ3MiLCJjb2xsZWN0aW9uQ29uZmlnIiwicmVxIiwiY29uZmlnIiwic2VjcmV0IiwicGF5bG9hZCIsIm92ZXJyaWRlQWNjZXNzIiwiZGF0YSIsImRlcHRoIiwic2hvdWxkQ29tbWl0IiwidXNlciIsInNhbHQiLCJoYXNoIiwiZG9jIiwiZmllbGRzVG9TaWduIiwidG9rZW4iLCJjb29raWVPcHRpb25zIiwiZnVsbFVzZXIiLCJlcnJvciIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkFQSUVycm9yIiwiY29sbGVjdGlvbiIsImluaXRUcmFuc2FjdGlvbiIsImRiIiwiZmluZE9uZSIsInNsdWciLCJ3aGVyZSIsInJlc2V0UGFzc3dvcmRUb2tlbiIsImVxdWFscyIsInJlc2V0UGFzc3dvcmRFeHBpcmF0aW9uIiwiZ3JlYXRlcl90aGFuIiwiRGF0ZSIsIm5vdyIsImdlbmVyYXRlUGFzc3dvcmRTYWx0SGFzaCIsInBhc3N3b3JkIiwiYXV0aCIsInZlcmlmeSIsIl92ZXJpZmllZCIsInVwZGF0ZU9uZSIsImlkIiwiYXV0aGVudGljYXRlTG9jYWxTdHJhdGVneSIsImdldEZpZWxkc1RvU2lnbiIsImVtYWlsIiwiand0Iiwic2lnbiIsImV4cGlyZXNJbiIsInRva2VuRXhwaXJhdGlvbiIsInJlcyIsInBhdGgiLCJodHRwT25seSIsImV4cGlyZXMiLCJnZXRDb29raWVFeHBpcmF0aW9uIiwic2VjdXJlIiwiY29va2llcyIsInNhbWVTaXRlIiwiZG9tYWluIiwidW5kZWZpbmVkIiwiY29va2llIiwiY29va2llUHJlZml4IiwiZmluZEJ5SUQiLCJjb21taXRUcmFuc2FjdGlvbiIsInRyYW5zYWN0aW9uSUQiLCJyZW1vdmVUb2tlbkZyb21SZXNwb25zZXMiLCJraWxsVHJhbnNhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBdUlBOzs7ZUFBQTs7O21FQXZJZ0I7c0JBR1M7MEVBQ087K0JBQ0E7NEJBRVU7d0NBQ0Q7K0JBQ1Q7K0JBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FtQmpCQSxjQUFjQyxJQUFlO1dBQTdCRDs7U0FBQUE7SUFBQUEsaUJBQWYsb0JBQUEsU0FBNkJDLElBQWU7OEJBUTlCQyxrQkFFVkMsbUNBR0lDLFFBQ0FDLFFBRUZDLFNBRUZDLGdCQUNBQyxNQUNBQyxPQUlNQyxjQU1BQyxNQVlpQixNQUFmQyxNQUFNQyxNQVdSQyxLQVVBQyxjQU1BQyxPQVNFQyxlQWVGQyxVQU9DQzs7OztvQkFuR1QsSUFBSSxDQUFDQyxPQUFPQyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDdEIsS0FBS08sSUFBSSxFQUFFLFlBQ2hELENBQUNZLE9BQU9DLFNBQVMsQ0FBQ0MsY0FBYyxDQUFDQyxJQUFJLENBQUN0QixLQUFLTyxJQUFJLEVBQUUsYUFBYTt3QkFDakUsTUFBTSxJQUFJZ0IsZ0JBQVEsQ0FBQztvQkFDckI7dUNBaUJJdkIsS0FkRndCLFlBQ1V2QixvQ0FBUkUsUUFFRkQsTUFXRUYsS0FYRkUsaUJBV0VGLEtBVkZFLG1DQUNFRyxTQUNFRiwyQkFBQUEsUUFDQUMsMkJBQUFBLFFBRUZDLG9CQUFBQSxTQUVGQyxpQkFHRU4sS0FIRk0sZ0JBQ0FDLE9BRUVQLEtBRkZPLE1BQ0FD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
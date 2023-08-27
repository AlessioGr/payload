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
function sendVerificationEmail(args) {
    return _sendVerificationEmail.apply(this, arguments);
}
function _sendVerificationEmail() {
    _sendVerificationEmail = _async_to_generator(function(args) {
        var config, emailOptions, sendEmail, _args_collection, collectionConfig, user, disableEmail, req, token, serverURL, verificationURL, html, verify, subject;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    config = args.config, emailOptions = args.emailOptions, sendEmail = args.sendEmail, _args_collection = args.collection, collectionConfig = _args_collection.config, user = args.user, disableEmail = args.disableEmail, req = args.req, token = args.token;
                    if (!!disableEmail) return [
                        3,
                        5
                    ];
                    serverURL = config.serverURL !== null && config.serverURL !== "" ? config.serverURL : "".concat(req.protocol, "://").concat(req.get("host"));
                    verificationURL = "".concat(serverURL).concat(config.routes.admin, "/").concat(collectionConfig.slug, "/verify/").concat(token);
                    html = "".concat(req.t("authentication:newAccountCreated", {
                        interpolation: {
                            escapeValue: false
                        },
                        serverURL: config.serverURL,
                        verificationURL: verificationURL
                    }));
                    verify = collectionConfig.auth.verify;
                    if (!(typeof verify.generateEmailHTML === "function")) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        verify.generateEmailHTML({
                            req: req,
                            token: token,
                            user: user
                        })
                    ];
                case 1:
                    html = _state.sent();
                    _state.label = 2;
                case 2:
                    subject = req.t("authentication:verifyYourEmail");
                    if (!(typeof verify.generateEmailSubject === "function")) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        verify.generateEmailSubject({
                            req: req,
                            token: token,
                            user: user
                        })
                    ];
                case 3:
                    subject = _state.sent();
                    _state.label = 4;
                case 4:
                    sendEmail({
                        from: '"'.concat(emailOptions.fromName, '" <').concat(emailOptions.fromAddress, ">"),
                        to: user.email,
                        subject: subject,
                        html: html
                    });
                    _state.label = 5;
                case 5:
                    return [
                        2
                    ];
            }
        });
    });
    return _sendVerificationEmail.apply(this, arguments);
}
export default sendVerificationEmail;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hdXRoL3NlbmRWZXJpZmljYXRpb25FbWFpbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXlsb2FkIH0gZnJvbSAnLi4vcGF5bG9hZCc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29uZmlnLCBFbWFpbE9wdGlvbnMgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbiB9IGZyb20gJy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBVc2VyLCBWZXJpZnlDb25maWcgfSBmcm9tICcuL3R5cGVzJztcblxuXG50eXBlIEFyZ3MgPSB7XG4gIGNvbmZpZzogU2FuaXRpemVkQ29uZmlnLFxuICBjb2xsZWN0aW9uOiBDb2xsZWN0aW9uLFxuICB1c2VyOiBVc2VyXG4gIGRpc2FibGVFbWFpbDogYm9vbGVhblxuICByZXE6IFBheWxvYWRSZXF1ZXN0XG4gIHRva2VuOiBzdHJpbmdcbiAgc2VuZEVtYWlsOiBQYXlsb2FkWydzZW5kRW1haWwnXVxuICBlbWFpbE9wdGlvbnM6IEVtYWlsT3B0aW9uc1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZW5kVmVyaWZpY2F0aW9uRW1haWwoYXJnczogQXJncyk6IFByb21pc2U8dm9pZD4ge1xuICAvLyBWZXJpZnkgdG9rZW4gZnJvbSBlLW1haWxcbiAgY29uc3Qge1xuICAgIGNvbmZpZyxcbiAgICBlbWFpbE9wdGlvbnMsXG4gICAgc2VuZEVtYWlsLFxuICAgIGNvbGxlY3Rpb246IHtcbiAgICAgIGNvbmZpZzogY29sbGVjdGlvbkNvbmZpZyxcbiAgICB9LFxuICAgIHVzZXIsXG4gICAgZGlzYWJsZUVtYWlsLFxuICAgIHJlcSxcbiAgICB0b2tlbixcbiAgfSA9IGFyZ3M7XG5cbiAgaWYgKCFkaXNhYmxlRW1haWwpIHtcbiAgICBjb25zdCBzZXJ2ZXJVUkwgPSAoY29uZmlnLnNlcnZlclVSTCAhPT0gbnVsbCAmJiBjb25maWcuc2VydmVyVVJMICE9PSAnJykgPyBjb25maWcuc2VydmVyVVJMIDogYCR7cmVxLnByb3RvY29sfTovLyR7cmVxLmdldCgnaG9zdCcpfWA7XG5cbiAgICBjb25zdCB2ZXJpZmljYXRpb25VUkwgPSBgJHtzZXJ2ZXJVUkx9JHtjb25maWcucm91dGVzLmFkbWlufS8ke2NvbGxlY3Rpb25Db25maWcuc2x1Z30vdmVyaWZ5LyR7dG9rZW59YDtcblxuICAgIGxldCBodG1sID0gYCR7cmVxLnQoJ2F1dGhlbnRpY2F0aW9uOm5ld0FjY291bnRDcmVhdGVkJywgeyBpbnRlcnBvbGF0aW9uOiB7IGVzY2FwZVZhbHVlOiBmYWxzZSB9LCBzZXJ2ZXJVUkw6IGNvbmZpZy5zZXJ2ZXJVUkwsIHZlcmlmaWNhdGlvblVSTCB9KX1gO1xuXG4gICAgY29uc3QgdmVyaWZ5ID0gY29sbGVjdGlvbkNvbmZpZy5hdXRoLnZlcmlmeSBhcyBWZXJpZnlDb25maWc7XG5cbiAgICAvLyBBbGxvdyBjb25maWcgdG8gb3ZlcnJpZGUgZW1haWwgY29udGVudFxuICAgIGlmICh0eXBlb2YgdmVyaWZ5LmdlbmVyYXRlRW1haWxIVE1MID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBodG1sID0gYXdhaXQgdmVyaWZ5LmdlbmVyYXRlRW1haWxIVE1MKHtcbiAgICAgICAgcmVxLFxuICAgICAgICB0b2tlbixcbiAgICAgICAgdXNlcixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBzdWJqZWN0ID0gcmVxLnQoJ2F1dGhlbnRpY2F0aW9uOnZlcmlmeVlvdXJFbWFpbCcpO1xuXG4gICAgLy8gQWxsb3cgY29uZmlnIHRvIG92ZXJyaWRlIGVtYWlsIHN1YmplY3RcbiAgICBpZiAodHlwZW9mIHZlcmlmeS5nZW5lcmF0ZUVtYWlsU3ViamVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc3ViamVjdCA9IGF3YWl0IHZlcmlmeS5nZW5lcmF0ZUVtYWlsU3ViamVjdCh7XG4gICAgICAgIHJlcSxcbiAgICAgICAgdG9rZW4sXG4gICAgICAgIHVzZXIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZW5kRW1haWwoe1xuICAgICAgZnJvbTogYFwiJHtlbWFpbE9wdGlvbnMuZnJvbU5hbWV9XCIgPCR7ZW1haWxPcHRpb25zLmZyb21BZGRyZXNzfT5gLFxuICAgICAgdG86IHVzZXIuZW1haWwsXG4gICAgICBzdWJqZWN0LFxuICAgICAgaHRtbCxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZW5kVmVyaWZpY2F0aW9uRW1haWw7XG4iXSwibmFtZXMiOlsic2VuZFZlcmlmaWNhdGlvbkVtYWlsIiwiYXJncyIsImNvbmZpZyIsImVtYWlsT3B0aW9ucyIsInNlbmRFbWFpbCIsImNvbGxlY3Rpb25Db25maWciLCJ1c2VyIiwiZGlzYWJsZUVtYWlsIiwicmVxIiwidG9rZW4iLCJzZXJ2ZXJVUkwiLCJ2ZXJpZmljYXRpb25VUkwiLCJodG1sIiwidmVyaWZ5Iiwic3ViamVjdCIsImNvbGxlY3Rpb24iLCJwcm90b2NvbCIsImdldCIsInJvdXRlcyIsImFkbWluIiwic2x1ZyIsInQiLCJpbnRlcnBvbGF0aW9uIiwiZXNjYXBlVmFsdWUiLCJhdXRoIiwiZ2VuZXJhdGVFbWFpbEhUTUwiLCJnZW5lcmF0ZUVtYWlsU3ViamVjdCIsImZyb20iLCJmcm9tTmFtZSIsImZyb21BZGRyZXNzIiwidG8iLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQWtCZUEsc0JBQXNCQyxJQUFVO1dBQWhDRDs7U0FBQUE7SUFBQUEseUJBQWYsb0JBQUEsU0FBcUNDLElBQVU7WUFHM0NDLFFBQ0FDLGNBQ0FDLDZCQUVVQyxrQkFFVkMsTUFDQUMsY0FDQUMsS0FDQUMsT0FJTUMsV0FFQUMsaUJBRUZDLE1BRUVDLFFBV0ZDOzs7O29CQTlCSlosU0FVRUQsS0FWRkMsUUFDQUMsZUFTRUYsS0FURkUsY0FDQUMsWUFRRUgsS0FSRkcsOEJBUUVILEtBUEZjLFlBQ1VWLG9DQUFSSCxRQUVGSSxPQUlFTCxLQUpGSyxNQUNBQyxlQUdFTixLQUhGTSxjQUNBQyxNQUVFUCxLQUZGTyxLQUNBQyxRQUNFUixLQURGUTt5QkFHRSxDQUFDRixjQUFEOzs7O29CQUNJRyxZQUFZLEFBQUNSLE9BQU9RLFNBQVMsS0FBSyxRQUFRUixPQUFPUSxTQUFTLEtBQUssS0FBTVIsT0FBT1EsU0FBUyxHQUFHLEFBQUMsR0FBb0JGLE9BQWxCQSxJQUFJUSxRQUFRLEVBQUMsT0FBcUIsT0FBaEJSLElBQUlTLEdBQUcsQ0FBQztvQkFFckhOLGtCQUFrQixBQUFDLEdBQWNULE9BQVpRLFdBQW1DTCxPQUF2QkgsT0FBT2dCLE1BQU0sQ0FBQ0MsS0FBSyxFQUFDLEtBQW1DVixPQUFoQ0osaUJBQWlCZSxJQUFJLEVBQUMsWUFBZ0IsT0FBTlg7b0JBRTFGRyxPQUFPLEFBQUMsR0FBcUksT0FBbklKLElBQUlhLENBQUMsQ0FBQyxvQ0FBb0M7d0JBQUVDLGVBQWU7NEJBQUVDLGFBQWE7d0JBQU07d0JBQUdiLFdBQVdSLE9BQU9RLFNBQVM7d0JBQUVDLGlCQUFBQTtvQkFBZ0I7b0JBRXhJRSxTQUFTUixpQkFBaUJtQixJQUFJLENBQUNYLE1BQU07eUJBR3ZDLENBQUEsT0FBT0EsT0FBT1ksaUJBQWlCLEtBQUssVUFBUyxHQUE3Qzs7OztvQkFDSzs7d0JBQU1aLE9BQU9ZLGlCQUFpQixDQUFDOzRCQUNwQ2pCLEtBQUFBOzRCQUNBQyxPQUFBQTs0QkFDQUgsTUFBQUE7d0JBQ0Y7OztvQkFKQU0sT0FBTzs7O29CQU9MRSxVQUFVTixJQUFJYSxDQUFDLENBQUM7eUJBR2hCLENBQUEsT0FBT1IsT0FBT2Esb0JBQW9CLEtBQUssVUFBUyxHQUFoRDs7OztvQkFDUTs7d0JBQU1iLE9BQU9hLG9CQUFvQixDQUFDOzRCQUMxQ2xCLEtBQUFBOzRCQUNBQyxPQUFBQTs0QkFDQUgsTUFBQUE7d0JBQ0Y7OztvQkFKQVEsVUFBVTs7O29CQU9aVixVQUFVO3dCQUNSdUIsTUFBTSxBQUFDLElBQThCeEIsT0FBM0JBLGFBQWF5QixRQUFRLEVBQUMsT0FBOEIsT0FBekJ6QixhQUFhMEIsV0FBVyxFQUFDO3dCQUM5REMsSUFBSXhCLEtBQUt5QixLQUFLO3dCQUNkakIsU0FBQUE7d0JBQ0FGLE1BQUFBO29CQUNGOzs7Ozs7OztJQUVKO1dBbkRlWjs7QUFxRGYsZUFBZUEsc0JBQXNCIn0=
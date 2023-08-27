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
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
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
import sanitizeInternalFields from "./utilities/sanitizeInternalFields";
import { withSession } from "./withSession";
export var deleteOne = function() {
    var _deleteOne = _async_to_generator(function(param) {
        var collection, where, _param_req, req, Model, options, query, doc, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    collection = param.collection, where = param.where, _param_req = param.req, req = _param_req === void 0 ? {} : _param_req;
                    Model = this.collections[collection];
                    options = withSession(this, req.transactionID);
                    return [
                        4,
                        Model.buildQuery({
                            payload: this.payload,
                            where: where
                        })
                    ];
                case 1:
                    query = _state.sent();
                    return [
                        4,
                        Model.findOneAndDelete(query, options).lean()
                    ];
                case 2:
                    doc = _state.sent();
                    result = JSON.parse(JSON.stringify(doc));
                    // custom id type reset
                    result.id = result._id;
                    result = sanitizeInternalFields(result);
                    return [
                        2,
                        result
                    ];
            }
        });
    });
    function deleteOne(_) {
        return _deleteOne.apply(this, arguments);
    }
    return deleteOne;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWxldGVPbmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVsZXRlT25lIH0gZnJvbSAncGF5bG9hZC9kYXRhYmFzZSc7XG5pbXBvcnQgdHlwZSB7IERvY3VtZW50IH0gZnJvbSAncGF5bG9hZC90eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJ3BheWxvYWQvdHlwZXMnO1xuaW1wb3J0IHNhbml0aXplSW50ZXJuYWxGaWVsZHMgZnJvbSAnLi91dGlsaXRpZXMvc2FuaXRpemVJbnRlcm5hbEZpZWxkcyc7XG5pbXBvcnQgdHlwZSB7IE1vbmdvb3NlQWRhcHRlciB9IGZyb20gJy4nO1xuaW1wb3J0IHsgd2l0aFNlc3Npb24gfSBmcm9tICcuL3dpdGhTZXNzaW9uJztcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZU9uZTogRGVsZXRlT25lID0gYXN5bmMgZnVuY3Rpb24gZGVsZXRlT25lKFxuICB0aGlzOiBNb25nb29zZUFkYXB0ZXIsXG4gIHsgY29sbGVjdGlvbiwgd2hlcmUsIHJlcSA9IHt9IGFzIFBheWxvYWRSZXF1ZXN0IH0sXG4pIHtcbiAgY29uc3QgTW9kZWwgPSB0aGlzLmNvbGxlY3Rpb25zW2NvbGxlY3Rpb25dO1xuICBjb25zdCBvcHRpb25zID0gd2l0aFNlc3Npb24odGhpcywgcmVxLnRyYW5zYWN0aW9uSUQpO1xuXG4gIGNvbnN0IHF1ZXJ5ID0gYXdhaXQgTW9kZWwuYnVpbGRRdWVyeSh7XG4gICAgcGF5bG9hZDogdGhpcy5wYXlsb2FkLFxuICAgIHdoZXJlLFxuICB9KTtcblxuICBjb25zdCBkb2MgPSBhd2FpdCBNb2RlbC5maW5kT25lQW5kRGVsZXRlKHF1ZXJ5LCBvcHRpb25zKS5sZWFuKCk7XG5cbiAgbGV0IHJlc3VsdDogRG9jdW1lbnQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRvYykpO1xuXG4gIC8vIGN1c3RvbSBpZCB0eXBlIHJlc2V0XG4gIHJlc3VsdC5pZCA9IHJlc3VsdC5faWQ7XG4gIHJlc3VsdCA9IHNhbml0aXplSW50ZXJuYWxGaWVsZHMocmVzdWx0KTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiJdLCJuYW1lcyI6WyJzYW5pdGl6ZUludGVybmFsRmllbGRzIiwid2l0aFNlc3Npb24iLCJkZWxldGVPbmUiLCJjb2xsZWN0aW9uIiwid2hlcmUiLCJyZXEiLCJNb2RlbCIsIm9wdGlvbnMiLCJxdWVyeSIsImRvYyIsInJlc3VsdCIsImNvbGxlY3Rpb25zIiwidHJhbnNhY3Rpb25JRCIsImJ1aWxkUXVlcnkiLCJwYXlsb2FkIiwiZmluZE9uZUFuZERlbGV0ZSIsImxlYW4iLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJpZCIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLE9BQU9BLDRCQUE0QixxQ0FBcUM7QUFFeEUsU0FBU0MsV0FBVyxRQUFRLGdCQUFnQjtBQUU1QyxPQUFPLElBQU1DO1FBQXNDQSxhQUFmLG9CQUFBLFNBRWxDLEtBQWlEO1lBQS9DQyxZQUFZQyxtQkFBT0MsS0FFZkMsT0FDQUMsU0FFQUMsT0FLQUMsS0FFRkM7Ozs7b0JBWkZQLGFBQUYsTUFBRUEsWUFBWUMsUUFBZCxNQUFjQSxvQkFBZCxNQUFxQkMsS0FBQUEsOEJBQU0sQ0FBQztvQkFFdEJDLFFBQVEsSUFBSSxDQUFDSyxXQUFXLENBQUNSLFdBQVc7b0JBQ3BDSSxVQUFVTixZQUFZLElBQUksRUFBRUksSUFBSU8sYUFBYTtvQkFFckM7O3dCQUFNTixNQUFNTyxVQUFVLENBQUM7NEJBQ25DQyxTQUFTLElBQUksQ0FBQ0EsT0FBTzs0QkFDckJWLE9BQUFBO3dCQUNGOzs7b0JBSE1JLFFBQVE7b0JBS0Y7O3dCQUFNRixNQUFNUyxnQkFBZ0IsQ0FBQ1AsT0FBT0QsU0FBU1MsSUFBSTs7O29CQUF2RFAsTUFBTTtvQkFFUkMsU0FBbUJPLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsU0FBUyxDQUFDVjtvQkFFakQsdUJBQXVCO29CQUN2QkMsT0FBT1UsRUFBRSxHQUFHVixPQUFPVyxHQUFHO29CQUN0QlgsU0FBU1YsdUJBQXVCVTtvQkFFaEM7O3dCQUFPQTs7OztJQUNUO2FBckJtRFIsVUFFakQsQ0FBaUQ7ZUFGQUE7O1dBQUFBO0lBcUJqRCJ9
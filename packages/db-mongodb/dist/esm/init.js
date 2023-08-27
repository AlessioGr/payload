/* eslint-disable no-param-reassign */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import { buildVersionCollectionFields } from "payload/versions";
import { getVersionsModelName } from "payload/versions";
import { buildVersionGlobalFields } from "payload/versions";
import getBuildQueryPlugin from "./queries/buildQuery";
import buildCollectionSchema from "./models/buildCollectionSchema";
import buildSchema from "./models/buildSchema";
import { buildGlobalModel } from "./models/buildGlobalModel";
export var init = function() {
    var _init = _async_to_generator(function() {
        var _this, model;
        return _ts_generator(this, function(_state) {
            _this = this;
            this.payload.config.collections.forEach(function(collection) {
                var schema = buildCollectionSchema(collection, _this.payload.config);
                if (collection.versions) {
                    var _collection_versions;
                    var versionModelName = getVersionsModelName(collection);
                    var versionCollectionFields = buildVersionCollectionFields(collection);
                    var versionSchema = buildSchema(_this.payload.config, versionCollectionFields, {
                        disableUnique: true,
                        draftsEnabled: true,
                        options: {
                            timestamps: false,
                            minimize: false
                        }
                    });
                    if (collection.indexes) {
                        collection.indexes.forEach(function(index) {
                            // prefix 'version.' to each field in the index
                            var versionIndex = {
                                fields: {},
                                options: index.options
                            };
                            Object.entries(index.fields).forEach(function(param) {
                                var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                                versionIndex.fields["version.".concat(key)] = value;
                            });
                            versionSchema.index(versionIndex.fields, versionIndex.options);
                        });
                    }
                    versionSchema.plugin(paginate, {
                        useEstimatedCount: true
                    }).plugin(getBuildQueryPlugin({
                        collectionSlug: collection.slug,
                        versionsFields: versionCollectionFields
                    }));
                    if ((_collection_versions = collection.versions) === null || _collection_versions === void 0 ? void 0 : _collection_versions.drafts) {
                        versionSchema.plugin(mongooseAggregatePaginate);
                    }
                    var model = mongoose.model(versionModelName, versionSchema, versionModelName);
                    // this.payload.versions[collection.slug] = model;
                    _this.versions[collection.slug] = model;
                }
                var model1 = mongoose.model(collection.slug, schema, _this.autoPluralization === true ? undefined : collection.slug);
                _this.collections[collection.slug] = model1;
                // TS expect error only needed until we launch 2.0.0
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                _this.payload.collections[collection.slug] = {
                    config: collection
                };
            });
            model = buildGlobalModel(this.payload.config);
            this.globals = model;
            this.payload.config.globals.forEach(function(global) {
                if (global.versions) {
                    var versionModelName = getVersionsModelName(global);
                    var versionGlobalFields = buildVersionGlobalFields(global);
                    var versionSchema = buildSchema(_this.payload.config, versionGlobalFields, {
                        indexSortableFields: _this.payload.config.indexSortableFields,
                        disableUnique: true,
                        draftsEnabled: true,
                        options: {
                            timestamps: false,
                            minimize: false
                        }
                    });
                    versionSchema.plugin(paginate, {
                        useEstimatedCount: true
                    }).plugin(getBuildQueryPlugin({
                        versionsFields: versionGlobalFields
                    }));
                    var versionsModel = mongoose.model(versionModelName, versionSchema, versionModelName);
                    _this.versions[global.slug] = versionsModel;
                }
            });
            return [
                2
            ];
        });
    });
    function init() {
        return _init.apply(this, arguments);
    }
    return init;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbml0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgbW9uZ29vc2UsIHsgUGFnaW5hdGVPcHRpb25zIH0gZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IHBhZ2luYXRlIGZyb20gJ21vbmdvb3NlLXBhZ2luYXRlLXYyJztcbmltcG9ydCBtb25nb29zZUFnZ3JlZ2F0ZVBhZ2luYXRlIGZyb20gJ21vbmdvb3NlLWFnZ3JlZ2F0ZS1wYWdpbmF0ZS12Mic7XG5pbXBvcnQgeyBidWlsZFZlcnNpb25Db2xsZWN0aW9uRmllbGRzIH0gZnJvbSAncGF5bG9hZC92ZXJzaW9ucyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnIH0gZnJvbSAncGF5bG9hZC90eXBlcyc7XG5pbXBvcnQgeyBnZXRWZXJzaW9uc01vZGVsTmFtZSB9IGZyb20gJ3BheWxvYWQvdmVyc2lvbnMnO1xuaW1wb3J0IHsgYnVpbGRWZXJzaW9uR2xvYmFsRmllbGRzIH0gZnJvbSAncGF5bG9hZC92ZXJzaW9ucyc7XG5pbXBvcnQgdHlwZSB7IEluaXQgfSBmcm9tICdwYXlsb2FkL2RhdGFiYXNlJztcbmltcG9ydCBnZXRCdWlsZFF1ZXJ5UGx1Z2luIGZyb20gJy4vcXVlcmllcy9idWlsZFF1ZXJ5JztcbmltcG9ydCBidWlsZENvbGxlY3Rpb25TY2hlbWEgZnJvbSAnLi9tb2RlbHMvYnVpbGRDb2xsZWN0aW9uU2NoZW1hJztcbmltcG9ydCBidWlsZFNjaGVtYSBmcm9tICcuL21vZGVscy9idWlsZFNjaGVtYSc7XG5pbXBvcnQgdHlwZSB7IE1vbmdvb3NlQWRhcHRlciB9IGZyb20gJy4nO1xuaW1wb3J0IHsgYnVpbGRHbG9iYWxNb2RlbCB9IGZyb20gJy4vbW9kZWxzL2J1aWxkR2xvYmFsTW9kZWwnO1xuaW1wb3J0IHsgQ29sbGVjdGlvbk1vZGVsIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBpbml0OiBJbml0ID0gYXN5bmMgZnVuY3Rpb24gaW5pdChcbiAgdGhpczogTW9uZ29vc2VBZGFwdGVyLFxuKSB7XG4gIHRoaXMucGF5bG9hZC5jb25maWcuY29sbGVjdGlvbnMuZm9yRWFjaChcbiAgICAoY29sbGVjdGlvbjogU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZykgPT4ge1xuICAgICAgY29uc3Qgc2NoZW1hID0gYnVpbGRDb2xsZWN0aW9uU2NoZW1hKGNvbGxlY3Rpb24sIHRoaXMucGF5bG9hZC5jb25maWcpO1xuXG4gICAgICBpZiAoY29sbGVjdGlvbi52ZXJzaW9ucykge1xuICAgICAgICBjb25zdCB2ZXJzaW9uTW9kZWxOYW1lID0gZ2V0VmVyc2lvbnNNb2RlbE5hbWUoY29sbGVjdGlvbik7XG5cbiAgICAgICAgY29uc3QgdmVyc2lvbkNvbGxlY3Rpb25GaWVsZHMgPSBidWlsZFZlcnNpb25Db2xsZWN0aW9uRmllbGRzKGNvbGxlY3Rpb24pO1xuXG4gICAgICAgIGNvbnN0IHZlcnNpb25TY2hlbWEgPSBidWlsZFNjaGVtYShcbiAgICAgICAgICB0aGlzLnBheWxvYWQuY29uZmlnLFxuICAgICAgICAgIHZlcnNpb25Db2xsZWN0aW9uRmllbGRzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRpc2FibGVVbmlxdWU6IHRydWUsXG4gICAgICAgICAgICBkcmFmdHNFbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgICAgICAgICAgICAgbWluaW1pemU6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChjb2xsZWN0aW9uLmluZGV4ZXMpIHtcbiAgICAgICAgICBjb2xsZWN0aW9uLmluZGV4ZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgICAgIC8vIHByZWZpeCAndmVyc2lvbi4nIHRvIGVhY2ggZmllbGQgaW4gdGhlIGluZGV4XG4gICAgICAgICAgICBjb25zdCB2ZXJzaW9uSW5kZXggPSB7XG4gICAgICAgICAgICAgIGZpZWxkczoge30sXG4gICAgICAgICAgICAgIG9wdGlvbnM6IGluZGV4Lm9wdGlvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoaW5kZXguZmllbGRzKVxuICAgICAgICAgICAgICAuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgdmVyc2lvbkluZGV4LmZpZWxkc1tgdmVyc2lvbi4ke2tleX1gXSA9IHZhbHVlO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZlcnNpb25TY2hlbWEuaW5kZXgodmVyc2lvbkluZGV4LmZpZWxkcywgdmVyc2lvbkluZGV4Lm9wdGlvbnMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmVyc2lvblNjaGVtYS5wbHVnaW48YW55LCBQYWdpbmF0ZU9wdGlvbnM+KHBhZ2luYXRlLCB7IHVzZUVzdGltYXRlZENvdW50OiB0cnVlIH0pXG4gICAgICAgICAgLnBsdWdpbihcbiAgICAgICAgICAgIGdldEJ1aWxkUXVlcnlQbHVnaW4oe1xuICAgICAgICAgICAgICBjb2xsZWN0aW9uU2x1ZzogY29sbGVjdGlvbi5zbHVnLFxuICAgICAgICAgICAgICB2ZXJzaW9uc0ZpZWxkczogdmVyc2lvbkNvbGxlY3Rpb25GaWVsZHMsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICApO1xuXG4gICAgICAgIGlmIChjb2xsZWN0aW9uLnZlcnNpb25zPy5kcmFmdHMpIHtcbiAgICAgICAgICB2ZXJzaW9uU2NoZW1hLnBsdWdpbihtb25nb29zZUFnZ3JlZ2F0ZVBhZ2luYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1vZGVsID0gbW9uZ29vc2UubW9kZWwoXG4gICAgICAgICAgdmVyc2lvbk1vZGVsTmFtZSxcbiAgICAgICAgICB2ZXJzaW9uU2NoZW1hLFxuICAgICAgICAgIHZlcnNpb25Nb2RlbE5hbWUsXG4gICAgICAgICkgYXMgQ29sbGVjdGlvbk1vZGVsO1xuICAgICAgICAvLyB0aGlzLnBheWxvYWQudmVyc2lvbnNbY29sbGVjdGlvbi5zbHVnXSA9IG1vZGVsO1xuICAgICAgICB0aGlzLnZlcnNpb25zW2NvbGxlY3Rpb24uc2x1Z10gPSBtb2RlbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbW9kZWwgPSBtb25nb29zZS5tb2RlbChcbiAgICAgICAgY29sbGVjdGlvbi5zbHVnLFxuICAgICAgICBzY2hlbWEsXG4gICAgICAgIHRoaXMuYXV0b1BsdXJhbGl6YXRpb24gPT09IHRydWUgPyB1bmRlZmluZWQgOiBjb2xsZWN0aW9uLnNsdWcsXG4gICAgICApIGFzIENvbGxlY3Rpb25Nb2RlbDtcbiAgICAgIHRoaXMuY29sbGVjdGlvbnNbY29sbGVjdGlvbi5zbHVnXSA9IG1vZGVsO1xuXG4gICAgICAvLyBUUyBleHBlY3QgZXJyb3Igb25seSBuZWVkZWQgdW50aWwgd2UgbGF1bmNoIDIuMC4wXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICB0aGlzLnBheWxvYWQuY29sbGVjdGlvbnNbY29sbGVjdGlvbi5zbHVnXSA9IHtcbiAgICAgICAgY29uZmlnOiBjb2xsZWN0aW9uLFxuICAgICAgfTtcbiAgICB9LFxuICApO1xuXG4gIGNvbnN0IG1vZGVsID0gYnVpbGRHbG9iYWxNb2RlbCh0aGlzLnBheWxvYWQuY29uZmlnKTtcbiAgdGhpcy5nbG9iYWxzID0gbW9kZWw7XG5cbiAgdGhpcy5wYXlsb2FkLmNvbmZpZy5nbG9iYWxzLmZvckVhY2goKGdsb2JhbCkgPT4ge1xuICAgIGlmIChnbG9iYWwudmVyc2lvbnMpIHtcbiAgICAgIGNvbnN0IHZlcnNpb25Nb2RlbE5hbWUgPSBnZXRWZXJzaW9uc01vZGVsTmFtZShnbG9iYWwpO1xuXG4gICAgICBjb25zdCB2ZXJzaW9uR2xvYmFsRmllbGRzID0gYnVpbGRWZXJzaW9uR2xvYmFsRmllbGRzKGdsb2JhbCk7XG5cbiAgICAgIGNvbnN0IHZlcnNpb25TY2hlbWEgPSBidWlsZFNjaGVtYShcbiAgICAgICAgdGhpcy5wYXlsb2FkLmNvbmZpZyxcbiAgICAgICAgdmVyc2lvbkdsb2JhbEZpZWxkcyxcbiAgICAgICAge1xuICAgICAgICAgIGluZGV4U29ydGFibGVGaWVsZHM6IHRoaXMucGF5bG9hZC5jb25maWcuaW5kZXhTb3J0YWJsZUZpZWxkcyxcbiAgICAgICAgICBkaXNhYmxlVW5pcXVlOiB0cnVlLFxuICAgICAgICAgIGRyYWZ0c0VuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgdGltZXN0YW1wczogZmFsc2UsXG4gICAgICAgICAgICBtaW5pbWl6ZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICk7XG5cbiAgICAgIHZlcnNpb25TY2hlbWFcbiAgICAgICAgLnBsdWdpbjxhbnksIFBhZ2luYXRlT3B0aW9ucz4ocGFnaW5hdGUsIHsgdXNlRXN0aW1hdGVkQ291bnQ6IHRydWUgfSlcbiAgICAgICAgLnBsdWdpbihnZXRCdWlsZFF1ZXJ5UGx1Z2luKHsgdmVyc2lvbnNGaWVsZHM6IHZlcnNpb25HbG9iYWxGaWVsZHMgfSkpO1xuXG4gICAgICBjb25zdCB2ZXJzaW9uc01vZGVsID0gbW9uZ29vc2UubW9kZWwoXG4gICAgICAgIHZlcnNpb25Nb2RlbE5hbWUsXG4gICAgICAgIHZlcnNpb25TY2hlbWEsXG4gICAgICAgIHZlcnNpb25Nb2RlbE5hbWUsXG4gICAgICApIGFzIENvbGxlY3Rpb25Nb2RlbDtcbiAgICAgIHRoaXMudmVyc2lvbnNbZ2xvYmFsLnNsdWddID0gdmVyc2lvbnNNb2RlbDtcbiAgICB9XG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInBhZ2luYXRlIiwibW9uZ29vc2VBZ2dyZWdhdGVQYWdpbmF0ZSIsImJ1aWxkVmVyc2lvbkNvbGxlY3Rpb25GaWVsZHMiLCJnZXRWZXJzaW9uc01vZGVsTmFtZSIsImJ1aWxkVmVyc2lvbkdsb2JhbEZpZWxkcyIsImdldEJ1aWxkUXVlcnlQbHVnaW4iLCJidWlsZENvbGxlY3Rpb25TY2hlbWEiLCJidWlsZFNjaGVtYSIsImJ1aWxkR2xvYmFsTW9kZWwiLCJpbml0IiwibW9kZWwiLCJwYXlsb2FkIiwiY29uZmlnIiwiY29sbGVjdGlvbnMiLCJmb3JFYWNoIiwiY29sbGVjdGlvbiIsInNjaGVtYSIsInZlcnNpb25zIiwidmVyc2lvbk1vZGVsTmFtZSIsInZlcnNpb25Db2xsZWN0aW9uRmllbGRzIiwidmVyc2lvblNjaGVtYSIsImRpc2FibGVVbmlxdWUiLCJkcmFmdHNFbmFibGVkIiwib3B0aW9ucyIsInRpbWVzdGFtcHMiLCJtaW5pbWl6ZSIsImluZGV4ZXMiLCJpbmRleCIsInZlcnNpb25JbmRleCIsImZpZWxkcyIsIk9iamVjdCIsImVudHJpZXMiLCJrZXkiLCJ2YWx1ZSIsInBsdWdpbiIsInVzZUVzdGltYXRlZENvdW50IiwiY29sbGVjdGlvblNsdWciLCJzbHVnIiwidmVyc2lvbnNGaWVsZHMiLCJkcmFmdHMiLCJhdXRvUGx1cmFsaXphdGlvbiIsInVuZGVmaW5lZCIsImdsb2JhbHMiLCJnbG9iYWwiLCJ2ZXJzaW9uR2xvYmFsRmllbGRzIiwiaW5kZXhTb3J0YWJsZUZpZWxkcyIsInZlcnNpb25zTW9kZWwiXSwibWFwcGluZ3MiOiJBQUFBLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDcEMsT0FBT0EsY0FBbUMsV0FBVztBQUNyRCxPQUFPQyxjQUFjLHVCQUF1QjtBQUM1QyxPQUFPQywrQkFBK0IsaUNBQWlDO0FBQ3ZFLFNBQVNDLDRCQUE0QixRQUFRLG1CQUFtQjtBQUVoRSxTQUFTQyxvQkFBb0IsUUFBUSxtQkFBbUI7QUFDeEQsU0FBU0Msd0JBQXdCLFFBQVEsbUJBQW1CO0FBRTVELE9BQU9DLHlCQUF5Qix1QkFBdUI7QUFDdkQsT0FBT0MsMkJBQTJCLGlDQUFpQztBQUNuRSxPQUFPQyxpQkFBaUIsdUJBQXVCO0FBRS9DLFNBQVNDLGdCQUFnQixRQUFRLDRCQUE0QjtBQUc3RCxPQUFPLElBQU1DO1FBQTRCQSxRQUFmLG9CQUFBO21CQTZFbEJDOzs7WUExRU4sSUFBSSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsV0FBVyxDQUFDQyxPQUFPLENBQ3JDLFNBQUNDO2dCQUNDLElBQU1DLFNBQVNWLHNCQUFzQlMsWUFBWSxNQUFLSixPQUFPLENBQUNDLE1BQU07Z0JBRXBFLElBQUlHLFdBQVdFLFFBQVEsRUFBRTt3QkF5Q25CRjtvQkF4Q0osSUFBTUcsbUJBQW1CZixxQkFBcUJZO29CQUU5QyxJQUFNSSwwQkFBMEJqQiw2QkFBNkJhO29CQUU3RCxJQUFNSyxnQkFBZ0JiLFlBQ3BCLE1BQUtJLE9BQU8sQ0FBQ0MsTUFBTSxFQUNuQk8seUJBQ0E7d0JBQ0VFLGVBQWU7d0JBQ2ZDLGVBQWU7d0JBQ2ZDLFNBQVM7NEJBQ1BDLFlBQVk7NEJBQ1pDLFVBQVU7d0JBQ1o7b0JBQ0Y7b0JBR0YsSUFBSVYsV0FBV1csT0FBTyxFQUFFO3dCQUN0QlgsV0FBV1csT0FBTyxDQUFDWixPQUFPLENBQUMsU0FBQ2E7NEJBQzFCLCtDQUErQzs0QkFDL0MsSUFBTUMsZUFBZTtnQ0FDbkJDLFFBQVEsQ0FBQztnQ0FDVE4sU0FBU0ksTUFBTUosT0FBTzs0QkFDeEI7NEJBQ0FPLE9BQU9DLE9BQU8sQ0FBQ0osTUFBTUUsTUFBTSxFQUN4QmYsT0FBTyxDQUFDO3lFQUFFa0IsaUJBQUtDO2dDQUNkTCxhQUFhQyxNQUFNLENBQUMsQUFBQyxXQUFjLE9BQUpHLEtBQU0sR0FBR0M7NEJBQzFDOzRCQUNGYixjQUFjTyxLQUFLLENBQUNDLGFBQWFDLE1BQU0sRUFBRUQsYUFBYUwsT0FBTzt3QkFDL0Q7b0JBQ0Y7b0JBRUFILGNBQWNjLE1BQU0sQ0FBdUJsQyxVQUFVO3dCQUFFbUMsbUJBQW1CO29CQUFLLEdBQzVFRCxNQUFNLENBQ0w3QixvQkFBb0I7d0JBQ2xCK0IsZ0JBQWdCckIsV0FBV3NCLElBQUk7d0JBQy9CQyxnQkFBZ0JuQjtvQkFDbEI7b0JBR0osS0FBSUosdUJBQUFBLFdBQVdFLFFBQVEsY0FBbkJGLDJDQUFBQSxxQkFBcUJ3QixNQUFNLEVBQUU7d0JBQy9CbkIsY0FBY2MsTUFBTSxDQUFDakM7b0JBQ3ZCO29CQUVBLElBQU1TLFFBQVFYLFNBQVNXLEtBQUssQ0FDMUJRLGtCQUNBRSxlQUNBRjtvQkFFRixrREFBa0Q7b0JBQ2xELE1BQUtELFFBQVEsQ0FBQ0YsV0FBV3NCLElBQUksQ0FBQyxHQUFHM0I7Z0JBQ25DO2dCQUVBLElBQU1BLFNBQVFYLFNBQVNXLEtBQUssQ0FDMUJLLFdBQVdzQixJQUFJLEVBQ2ZyQixRQUNBLE1BQUt3QixpQkFBaUIsS0FBSyxPQUFPQyxZQUFZMUIsV0FBV3NCLElBQUk7Z0JBRS9ELE1BQUt4QixXQUFXLENBQUNFLFdBQVdzQixJQUFJLENBQUMsR0FBRzNCO2dCQUVwQyxvREFBb0Q7Z0JBQ3BELDZEQUE2RDtnQkFDN0QsbUJBQW1CO2dCQUNuQixNQUFLQyxPQUFPLENBQUNFLFdBQVcsQ0FBQ0UsV0FBV3NCLElBQUksQ0FBQyxHQUFHO29CQUMxQ3pCLFFBQVFHO2dCQUNWO1lBQ0Y7WUFHSUwsUUFBUUYsaUJBQWlCLElBQUksQ0FBQ0csT0FBTyxDQUFDQyxNQUFNO1lBQ2xELElBQUksQ0FBQzhCLE9BQU8sR0FBR2hDO1lBRWYsSUFBSSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQzhCLE9BQU8sQ0FBQzVCLE9BQU8sQ0FBQyxTQUFDNkI7Z0JBQ25DLElBQUlBLE9BQU8xQixRQUFRLEVBQUU7b0JBQ25CLElBQU1DLG1CQUFtQmYscUJBQXFCd0M7b0JBRTlDLElBQU1DLHNCQUFzQnhDLHlCQUF5QnVDO29CQUVyRCxJQUFNdkIsZ0JBQWdCYixZQUNwQixNQUFLSSxPQUFPLENBQUNDLE1BQU0sRUFDbkJnQyxxQkFDQTt3QkFDRUMscUJBQXFCLE1BQUtsQyxPQUFPLENBQUNDLE1BQU0sQ0FBQ2lDLG1CQUFtQjt3QkFDNUR4QixlQUFlO3dCQUNmQyxlQUFlO3dCQUNmQyxTQUFTOzRCQUNQQyxZQUFZOzRCQUNaQyxVQUFVO3dCQUNaO29CQUNGO29CQUdGTCxjQUNHYyxNQUFNLENBQXVCbEMsVUFBVTt3QkFBRW1DLG1CQUFtQjtvQkFBSyxHQUNqRUQsTUFBTSxDQUFDN0Isb0JBQW9CO3dCQUFFaUMsZ0JBQWdCTTtvQkFBb0I7b0JBRXBFLElBQU1FLGdCQUFnQi9DLFNBQVNXLEtBQUssQ0FDbENRLGtCQUNBRSxlQUNBRjtvQkFFRixNQUFLRCxRQUFRLENBQUMwQixPQUFPTixJQUFJLENBQUMsR0FBR1M7Z0JBQy9CO1lBQ0Y7Ozs7O0lBQ0Y7YUFoSHlDckM7ZUFBQUE7O1dBQUFBO0lBZ0h2QyJ9
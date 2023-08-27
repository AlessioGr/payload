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
var _mongoosepaginatev2 = /*#__PURE__*/ _interop_require_default(require("mongoose-paginate-v2"));
var _buildQuery = /*#__PURE__*/ _interop_require_default(require("../queries/buildQuery"));
var _buildSchema = /*#__PURE__*/ _interop_require_default(require("./buildSchema"));
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
var buildCollectionSchema = function(collection, config) {
    var schemaOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var _collection;
    var schema = (0, _buildSchema.default)(config, collection.fields, {
        draftsEnabled: Boolean(typeof ((_collection = collection) === null || _collection === void 0 ? void 0 : _collection.versions) === "object" && collection.versions.drafts),
        options: _object_spread({
            timestamps: collection.timestamps !== false,
            minimize: false
        }, schemaOptions),
        indexSortableFields: config.indexSortableFields
    });
    if (config.indexSortableFields && collection.timestamps !== false) {
        schema.index({
            updatedAt: 1
        });
        schema.index({
            createdAt: 1
        });
    }
    if (collection.indexes) {
        collection.indexes.forEach(function(index) {
            schema.index(index.fields, index.options);
        });
    }
    schema.plugin(_mongoosepaginatev2.default, {
        useEstimatedCount: true
    }).plugin((0, _buildQuery.default)({
        collectionSlug: collection.slug
    }));
    return schema;
};
var _default = buildCollectionSchema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvYnVpbGRDb2xsZWN0aW9uU2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYWdpbmF0ZSBmcm9tICdtb25nb29zZS1wYWdpbmF0ZS12Mic7XG5pbXBvcnQgeyBQYWdpbmF0ZU9wdGlvbnMsIFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IFNhbml0aXplZENvbmZpZyB9IGZyb20gJ3BheWxvYWQvY29uZmlnJztcbmltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICdwYXlsb2FkL3R5cGVzJztcbmltcG9ydCBnZXRCdWlsZFF1ZXJ5UGx1Z2luIGZyb20gJy4uL3F1ZXJpZXMvYnVpbGRRdWVyeSc7XG5pbXBvcnQgYnVpbGRTY2hlbWEgZnJvbSAnLi9idWlsZFNjaGVtYSc7XG5cbmNvbnN0IGJ1aWxkQ29sbGVjdGlvblNjaGVtYSA9IChjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgc2NoZW1hT3B0aW9ucyA9IHt9KTogU2NoZW1hID0+IHtcbiAgY29uc3Qgc2NoZW1hID0gYnVpbGRTY2hlbWEoXG4gICAgY29uZmlnLFxuICAgIGNvbGxlY3Rpb24uZmllbGRzLFxuICAgIHtcbiAgICAgIGRyYWZ0c0VuYWJsZWQ6IEJvb2xlYW4odHlwZW9mIGNvbGxlY3Rpb24/LnZlcnNpb25zID09PSAnb2JqZWN0JyAmJiBjb2xsZWN0aW9uLnZlcnNpb25zLmRyYWZ0cyksXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHRpbWVzdGFtcHM6IGNvbGxlY3Rpb24udGltZXN0YW1wcyAhPT0gZmFsc2UsXG4gICAgICAgIG1pbmltaXplOiBmYWxzZSxcbiAgICAgICAgLi4uc2NoZW1hT3B0aW9ucyxcbiAgICAgIH0sXG4gICAgICBpbmRleFNvcnRhYmxlRmllbGRzOiBjb25maWcuaW5kZXhTb3J0YWJsZUZpZWxkcyxcbiAgICB9LFxuICApO1xuXG4gIGlmIChjb25maWcuaW5kZXhTb3J0YWJsZUZpZWxkcyAmJiBjb2xsZWN0aW9uLnRpbWVzdGFtcHMgIT09IGZhbHNlKSB7XG4gICAgc2NoZW1hLmluZGV4KHsgdXBkYXRlZEF0OiAxIH0pO1xuICAgIHNjaGVtYS5pbmRleCh7IGNyZWF0ZWRBdDogMSB9KTtcbiAgfVxuICBpZiAoY29sbGVjdGlvbi5pbmRleGVzKSB7XG4gICAgY29sbGVjdGlvbi5pbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBzY2hlbWEuaW5kZXgoaW5kZXguZmllbGRzLCBpbmRleC5vcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuICBzY2hlbWEucGx1Z2luPGFueSwgUGFnaW5hdGVPcHRpb25zPihwYWdpbmF0ZSwgeyB1c2VFc3RpbWF0ZWRDb3VudDogdHJ1ZSB9KVxuICAgIC5wbHVnaW4oZ2V0QnVpbGRRdWVyeVBsdWdpbih7IGNvbGxlY3Rpb25TbHVnOiBjb2xsZWN0aW9uLnNsdWcgfSkpO1xuXG4gIHJldHVybiBzY2hlbWE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBidWlsZENvbGxlY3Rpb25TY2hlbWE7XG4iXSwibmFtZXMiOlsiYnVpbGRDb2xsZWN0aW9uU2NoZW1hIiwiY29sbGVjdGlvbiIsImNvbmZpZyIsInNjaGVtYU9wdGlvbnMiLCJzY2hlbWEiLCJidWlsZFNjaGVtYSIsImZpZWxkcyIsImRyYWZ0c0VuYWJsZWQiLCJCb29sZWFuIiwidmVyc2lvbnMiLCJkcmFmdHMiLCJvcHRpb25zIiwidGltZXN0YW1wcyIsIm1pbmltaXplIiwiaW5kZXhTb3J0YWJsZUZpZWxkcyIsImluZGV4IiwidXBkYXRlZEF0IiwiY3JlYXRlZEF0IiwiaW5kZXhlcyIsImZvckVhY2giLCJwbHVnaW4iLCJwYWdpbmF0ZSIsInVzZUVzdGltYXRlZENvdW50IiwiZ2V0QnVpbGRRdWVyeVBsdWdpbiIsImNvbGxlY3Rpb25TbHVnIiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFxQ0E7OztlQUFBOzs7eUVBckNxQjtpRUFJVztrRUFDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFNQSx3QkFBd0IsU0FBQ0MsWUFBdUNDO1FBQXlCQyxpRkFBZ0IsQ0FBQztRQUs1RUY7SUFKbEMsSUFBTUcsU0FBU0MsSUFBQUEsb0JBQVcsRUFDeEJILFFBQ0FELFdBQVdLLE1BQU0sRUFDakI7UUFDRUMsZUFBZUMsUUFBUSxTQUFPUCxjQUFBQSx3QkFBQUEsa0NBQUFBLFlBQVlRLFFBQVEsTUFBSyxZQUFZUixXQUFXUSxRQUFRLENBQUNDLE1BQU07UUFDN0ZDLFNBQVM7WUFDUEMsWUFBWVgsV0FBV1csVUFBVSxLQUFLO1lBQ3RDQyxVQUFVO1dBQ1BWO1FBRUxXLHFCQUFxQlosT0FBT1ksbUJBQW1CO0lBQ2pEO0lBR0YsSUFBSVosT0FBT1ksbUJBQW1CLElBQUliLFdBQVdXLFVBQVUsS0FBSyxPQUFPO1FBQ2pFUixPQUFPVyxLQUFLLENBQUM7WUFBRUMsV0FBVztRQUFFO1FBQzVCWixPQUFPVyxLQUFLLENBQUM7WUFBRUUsV0FBVztRQUFFO0lBQzlCO0lBQ0EsSUFBSWhCLFdBQVdpQixPQUFPLEVBQUU7UUFDdEJqQixXQUFXaUIsT0FBTyxDQUFDQyxPQUFPLENBQUMsU0FBQ0o7WUFDMUJYLE9BQU9XLEtBQUssQ0FBQ0EsTUFBTVQsTUFBTSxFQUFFUyxNQUFNSixPQUFPO1FBQzFDO0lBQ0Y7SUFDQVAsT0FBT2dCLE1BQU0sQ0FBdUJDLDJCQUFRLEVBQUU7UUFBRUMsbUJBQW1CO0lBQUssR0FDckVGLE1BQU0sQ0FBQ0csSUFBQUEsbUJBQW1CLEVBQUM7UUFBRUMsZ0JBQWdCdkIsV0FBV3dCLElBQUk7SUFBQztJQUVoRSxPQUFPckI7QUFDVDtJQUVBLFdBQWVKIn0=
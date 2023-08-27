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
import paginate from "mongoose-paginate-v2";
import getBuildQueryPlugin from "../queries/buildQuery";
import buildSchema from "./buildSchema";
var buildCollectionSchema = function(collection, config) {
    var schemaOptions = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var _collection;
    var schema = buildSchema(config, collection.fields, {
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
    schema.plugin(paginate, {
        useEstimatedCount: true
    }).plugin(getBuildQueryPlugin({
        collectionSlug: collection.slug
    }));
    return schema;
};
export default buildCollectionSchema;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvYnVpbGRDb2xsZWN0aW9uU2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYWdpbmF0ZSBmcm9tICdtb25nb29zZS1wYWdpbmF0ZS12Mic7XG5pbXBvcnQgeyBQYWdpbmF0ZU9wdGlvbnMsIFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJztcbmltcG9ydCB7IFNhbml0aXplZENvbmZpZyB9IGZyb20gJ3BheWxvYWQvY29uZmlnJztcbmltcG9ydCB7IFNhbml0aXplZENvbGxlY3Rpb25Db25maWcgfSBmcm9tICdwYXlsb2FkL3R5cGVzJztcbmltcG9ydCBnZXRCdWlsZFF1ZXJ5UGx1Z2luIGZyb20gJy4uL3F1ZXJpZXMvYnVpbGRRdWVyeSc7XG5pbXBvcnQgYnVpbGRTY2hlbWEgZnJvbSAnLi9idWlsZFNjaGVtYSc7XG5cbmNvbnN0IGJ1aWxkQ29sbGVjdGlvblNjaGVtYSA9IChjb2xsZWN0aW9uOiBTYW5pdGl6ZWRDb2xsZWN0aW9uQ29uZmlnLCBjb25maWc6IFNhbml0aXplZENvbmZpZywgc2NoZW1hT3B0aW9ucyA9IHt9KTogU2NoZW1hID0+IHtcbiAgY29uc3Qgc2NoZW1hID0gYnVpbGRTY2hlbWEoXG4gICAgY29uZmlnLFxuICAgIGNvbGxlY3Rpb24uZmllbGRzLFxuICAgIHtcbiAgICAgIGRyYWZ0c0VuYWJsZWQ6IEJvb2xlYW4odHlwZW9mIGNvbGxlY3Rpb24/LnZlcnNpb25zID09PSAnb2JqZWN0JyAmJiBjb2xsZWN0aW9uLnZlcnNpb25zLmRyYWZ0cyksXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHRpbWVzdGFtcHM6IGNvbGxlY3Rpb24udGltZXN0YW1wcyAhPT0gZmFsc2UsXG4gICAgICAgIG1pbmltaXplOiBmYWxzZSxcbiAgICAgICAgLi4uc2NoZW1hT3B0aW9ucyxcbiAgICAgIH0sXG4gICAgICBpbmRleFNvcnRhYmxlRmllbGRzOiBjb25maWcuaW5kZXhTb3J0YWJsZUZpZWxkcyxcbiAgICB9LFxuICApO1xuXG4gIGlmIChjb25maWcuaW5kZXhTb3J0YWJsZUZpZWxkcyAmJiBjb2xsZWN0aW9uLnRpbWVzdGFtcHMgIT09IGZhbHNlKSB7XG4gICAgc2NoZW1hLmluZGV4KHsgdXBkYXRlZEF0OiAxIH0pO1xuICAgIHNjaGVtYS5pbmRleCh7IGNyZWF0ZWRBdDogMSB9KTtcbiAgfVxuICBpZiAoY29sbGVjdGlvbi5pbmRleGVzKSB7XG4gICAgY29sbGVjdGlvbi5pbmRleGVzLmZvckVhY2goKGluZGV4KSA9PiB7XG4gICAgICBzY2hlbWEuaW5kZXgoaW5kZXguZmllbGRzLCBpbmRleC5vcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuICBzY2hlbWEucGx1Z2luPGFueSwgUGFnaW5hdGVPcHRpb25zPihwYWdpbmF0ZSwgeyB1c2VFc3RpbWF0ZWRDb3VudDogdHJ1ZSB9KVxuICAgIC5wbHVnaW4oZ2V0QnVpbGRRdWVyeVBsdWdpbih7IGNvbGxlY3Rpb25TbHVnOiBjb2xsZWN0aW9uLnNsdWcgfSkpO1xuXG4gIHJldHVybiBzY2hlbWE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBidWlsZENvbGxlY3Rpb25TY2hlbWE7XG4iXSwibmFtZXMiOlsicGFnaW5hdGUiLCJnZXRCdWlsZFF1ZXJ5UGx1Z2luIiwiYnVpbGRTY2hlbWEiLCJidWlsZENvbGxlY3Rpb25TY2hlbWEiLCJjb2xsZWN0aW9uIiwiY29uZmlnIiwic2NoZW1hT3B0aW9ucyIsInNjaGVtYSIsImZpZWxkcyIsImRyYWZ0c0VuYWJsZWQiLCJCb29sZWFuIiwidmVyc2lvbnMiLCJkcmFmdHMiLCJvcHRpb25zIiwidGltZXN0YW1wcyIsIm1pbmltaXplIiwiaW5kZXhTb3J0YWJsZUZpZWxkcyIsImluZGV4IiwidXBkYXRlZEF0IiwiY3JlYXRlZEF0IiwiaW5kZXhlcyIsImZvckVhY2giLCJwbHVnaW4iLCJ1c2VFc3RpbWF0ZWRDb3VudCIsImNvbGxlY3Rpb25TbHVnIiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLGNBQWMsdUJBQXVCO0FBSTVDLE9BQU9DLHlCQUF5Qix3QkFBd0I7QUFDeEQsT0FBT0MsaUJBQWlCLGdCQUFnQjtBQUV4QyxJQUFNQyx3QkFBd0IsU0FBQ0MsWUFBdUNDO1FBQXlCQyxpRkFBZ0IsQ0FBQztRQUs1RUY7SUFKbEMsSUFBTUcsU0FBU0wsWUFDYkcsUUFDQUQsV0FBV0ksTUFBTSxFQUNqQjtRQUNFQyxlQUFlQyxRQUFRLFNBQU9OLGNBQUFBLHdCQUFBQSxrQ0FBQUEsWUFBWU8sUUFBUSxNQUFLLFlBQVlQLFdBQVdPLFFBQVEsQ0FBQ0MsTUFBTTtRQUM3RkMsU0FBUztZQUNQQyxZQUFZVixXQUFXVSxVQUFVLEtBQUs7WUFDdENDLFVBQVU7V0FDUFQ7UUFFTFUscUJBQXFCWCxPQUFPVyxtQkFBbUI7SUFDakQ7SUFHRixJQUFJWCxPQUFPVyxtQkFBbUIsSUFBSVosV0FBV1UsVUFBVSxLQUFLLE9BQU87UUFDakVQLE9BQU9VLEtBQUssQ0FBQztZQUFFQyxXQUFXO1FBQUU7UUFDNUJYLE9BQU9VLEtBQUssQ0FBQztZQUFFRSxXQUFXO1FBQUU7SUFDOUI7SUFDQSxJQUFJZixXQUFXZ0IsT0FBTyxFQUFFO1FBQ3RCaEIsV0FBV2dCLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLFNBQUNKO1lBQzFCVixPQUFPVSxLQUFLLENBQUNBLE1BQU1ULE1BQU0sRUFBRVMsTUFBTUosT0FBTztRQUMxQztJQUNGO0lBQ0FOLE9BQU9lLE1BQU0sQ0FBdUJ0QixVQUFVO1FBQUV1QixtQkFBbUI7SUFBSyxHQUNyRUQsTUFBTSxDQUFDckIsb0JBQW9CO1FBQUV1QixnQkFBZ0JwQixXQUFXcUIsSUFBSTtJQUFDO0lBRWhFLE9BQU9sQjtBQUNUO0FBRUEsZUFBZUosc0JBQXNCIn0=
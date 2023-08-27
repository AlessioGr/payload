/* eslint-disable no-param-reassign */ function _define_property(obj, key, value) {
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
import * as GraphQL from "graphql";
import { GraphQLObjectType, GraphQLSchema } from "graphql";
import queryComplexity, { fieldExtensionsEstimator, simpleEstimator } from "graphql-query-complexity";
import buildLocaleInputType from "./schema/buildLocaleInputType";
import buildFallbackLocaleInputType from "./schema/buildFallbackLocaleInputType";
import initCollections from "../collections/graphql/init";
import initGlobals from "../globals/graphql/init";
import buildPoliciesType from "./schema/buildPoliciesType";
import accessResolver from "../auth/graphql/resolvers/access";
export default function registerGraphQLSchema(payload) {
    payload.types = {
        blockTypes: {},
        blockInputTypes: {},
        groupTypes: {},
        arrayTypes: {},
        tabTypes: {}
    };
    if (payload.config.localization) {
        payload.types.localeInputType = buildLocaleInputType(payload.config.localization);
        payload.types.fallbackLocaleInputType = buildFallbackLocaleInputType(payload.config.localization);
    }
    payload.Query = {
        name: "Query",
        fields: {}
    };
    payload.Mutation = {
        name: "Mutation",
        fields: {}
    };
    initCollections(payload);
    initGlobals(payload);
    payload.Query.fields.Access = {
        type: buildPoliciesType(payload),
        resolve: accessResolver(payload)
    };
    if (typeof payload.config.graphQL.queries === "function") {
        var customQueries = payload.config.graphQL.queries(GraphQL, payload);
        payload.Query = _object_spread_props(_object_spread({}, payload.Query), {
            fields: _object_spread({}, payload.Query.fields, customQueries || {})
        });
    }
    if (typeof payload.config.graphQL.mutations === "function") {
        var customMutations = payload.config.graphQL.mutations(GraphQL, payload);
        payload.Mutation = _object_spread_props(_object_spread({}, payload.Mutation), {
            fields: _object_spread({}, payload.Mutation.fields, customMutations || {})
        });
    }
    var query = new GraphQLObjectType(payload.Query);
    var mutation = new GraphQLObjectType(payload.Mutation);
    var schema = {
        query: query,
        mutation: mutation
    };
    payload.schema = new GraphQLSchema(schema);
    payload.validationRules = function(param) {
        var variableValues = param.variableValues;
        return [
            queryComplexity({
                estimators: [
                    fieldExtensionsEstimator(),
                    simpleEstimator({
                        defaultComplexity: 1
                    })
                ],
                maximumComplexity: payload.config.graphQL.maxComplexity,
                variables: variableValues
            })
        ];
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ncmFwaHFsL3JlZ2lzdGVyU2NoZW1hLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgKiBhcyBHcmFwaFFMIGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgR3JhcGhRTE9iamVjdFR5cGUsIEdyYXBoUUxTY2hlbWEgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCBxdWVyeUNvbXBsZXhpdHksIHsgZmllbGRFeHRlbnNpb25zRXN0aW1hdG9yLCBzaW1wbGVFc3RpbWF0b3IgfSBmcm9tICdncmFwaHFsLXF1ZXJ5LWNvbXBsZXhpdHknO1xuaW1wb3J0IHsgUGF5bG9hZCB9IGZyb20gJy4uL3BheWxvYWQnO1xuaW1wb3J0IGJ1aWxkTG9jYWxlSW5wdXRUeXBlIGZyb20gJy4vc2NoZW1hL2J1aWxkTG9jYWxlSW5wdXRUeXBlJztcbmltcG9ydCBidWlsZEZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlIGZyb20gJy4vc2NoZW1hL2J1aWxkRmFsbGJhY2tMb2NhbGVJbnB1dFR5cGUnO1xuaW1wb3J0IGluaXRDb2xsZWN0aW9ucyBmcm9tICcuLi9jb2xsZWN0aW9ucy9ncmFwaHFsL2luaXQnO1xuaW1wb3J0IGluaXRHbG9iYWxzIGZyb20gJy4uL2dsb2JhbHMvZ3JhcGhxbC9pbml0JztcbmltcG9ydCBidWlsZFBvbGljaWVzVHlwZSBmcm9tICcuL3NjaGVtYS9idWlsZFBvbGljaWVzVHlwZSc7XG5pbXBvcnQgYWNjZXNzUmVzb2x2ZXIgZnJvbSAnLi4vYXV0aC9ncmFwaHFsL3Jlc29sdmVycy9hY2Nlc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWdpc3RlckdyYXBoUUxTY2hlbWEocGF5bG9hZDogUGF5bG9hZCk6IHZvaWQge1xuICBwYXlsb2FkLnR5cGVzID0ge1xuICAgIGJsb2NrVHlwZXM6IHt9LFxuICAgIGJsb2NrSW5wdXRUeXBlczoge30sXG4gICAgZ3JvdXBUeXBlczoge30sXG4gICAgYXJyYXlUeXBlczoge30sXG4gICAgdGFiVHlwZXM6IHt9LFxuICB9O1xuXG4gIGlmIChwYXlsb2FkLmNvbmZpZy5sb2NhbGl6YXRpb24pIHtcbiAgICBwYXlsb2FkLnR5cGVzLmxvY2FsZUlucHV0VHlwZSA9IGJ1aWxkTG9jYWxlSW5wdXRUeXBlKHBheWxvYWQuY29uZmlnLmxvY2FsaXphdGlvbik7XG4gICAgcGF5bG9hZC50eXBlcy5mYWxsYmFja0xvY2FsZUlucHV0VHlwZSA9IGJ1aWxkRmFsbGJhY2tMb2NhbGVJbnB1dFR5cGUocGF5bG9hZC5jb25maWcubG9jYWxpemF0aW9uKTtcbiAgfVxuXG4gIHBheWxvYWQuUXVlcnkgPSB7XG4gICAgbmFtZTogJ1F1ZXJ5JyxcbiAgICBmaWVsZHM6IHt9LFxuICB9O1xuXG4gIHBheWxvYWQuTXV0YXRpb24gPSB7XG4gICAgbmFtZTogJ011dGF0aW9uJyxcbiAgICBmaWVsZHM6IHt9LFxuICB9O1xuXG4gIGluaXRDb2xsZWN0aW9ucyhwYXlsb2FkKTtcbiAgaW5pdEdsb2JhbHMocGF5bG9hZCk7XG5cbiAgcGF5bG9hZC5RdWVyeS5maWVsZHMuQWNjZXNzID0ge1xuICAgIHR5cGU6IGJ1aWxkUG9saWNpZXNUeXBlKHBheWxvYWQpLFxuICAgIHJlc29sdmU6IGFjY2Vzc1Jlc29sdmVyKHBheWxvYWQpLFxuICB9O1xuXG4gIGlmICh0eXBlb2YgcGF5bG9hZC5jb25maWcuZ3JhcGhRTC5xdWVyaWVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3QgY3VzdG9tUXVlcmllcyA9IHBheWxvYWQuY29uZmlnLmdyYXBoUUwucXVlcmllcyhHcmFwaFFMLCBwYXlsb2FkKTtcbiAgICBwYXlsb2FkLlF1ZXJ5ID0ge1xuICAgICAgLi4ucGF5bG9hZC5RdWVyeSxcbiAgICAgIGZpZWxkczoge1xuICAgICAgICAuLi5wYXlsb2FkLlF1ZXJ5LmZpZWxkcyxcbiAgICAgICAgLi4uKGN1c3RvbVF1ZXJpZXMgfHwge30pLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwYXlsb2FkLmNvbmZpZy5ncmFwaFFMLm11dGF0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnN0IGN1c3RvbU11dGF0aW9ucyA9IHBheWxvYWQuY29uZmlnLmdyYXBoUUwubXV0YXRpb25zKEdyYXBoUUwsIHBheWxvYWQpO1xuICAgIHBheWxvYWQuTXV0YXRpb24gPSB7XG4gICAgICAuLi5wYXlsb2FkLk11dGF0aW9uLFxuICAgICAgZmllbGRzOiB7XG4gICAgICAgIC4uLnBheWxvYWQuTXV0YXRpb24uZmllbGRzLFxuICAgICAgICAuLi4oY3VzdG9tTXV0YXRpb25zIHx8IHt9KSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHF1ZXJ5ID0gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHBheWxvYWQuUXVlcnkpO1xuICBjb25zdCBtdXRhdGlvbiA9IG5ldyBHcmFwaFFMT2JqZWN0VHlwZShwYXlsb2FkLk11dGF0aW9uKTtcblxuICBjb25zdCBzY2hlbWEgPSB7XG4gICAgcXVlcnksXG4gICAgbXV0YXRpb24sXG4gIH07XG5cbiAgcGF5bG9hZC5zY2hlbWEgPSBuZXcgR3JhcGhRTFNjaGVtYShzY2hlbWEpO1xuXG4gIHBheWxvYWQudmFsaWRhdGlvblJ1bGVzID0gKHsgdmFyaWFibGVWYWx1ZXMgfSkgPT4gKFtcbiAgICBxdWVyeUNvbXBsZXhpdHkoe1xuICAgICAgZXN0aW1hdG9yczogW1xuICAgICAgICBmaWVsZEV4dGVuc2lvbnNFc3RpbWF0b3IoKSxcbiAgICAgICAgc2ltcGxlRXN0aW1hdG9yKHsgZGVmYXVsdENvbXBsZXhpdHk6IDEgfSksIC8vIEZhbGxiYWNrIGlmIGNvbXBsZXhpdHkgbm90IHNldFxuICAgICAgXSxcbiAgICAgIG1heGltdW1Db21wbGV4aXR5OiBwYXlsb2FkLmNvbmZpZy5ncmFwaFFMLm1heENvbXBsZXhpdHksXG4gICAgICB2YXJpYWJsZXM6IHZhcmlhYmxlVmFsdWVzLFxuICAgICAgLy8gb25Db21wbGV0ZTogKGNvbXBsZXhpdHkpID0+IHsgY29uc29sZS5sb2coJ1F1ZXJ5IENvbXBsZXhpdHk6JywgY29tcGxleGl0eSk7IH0sXG4gICAgfSksXG4gIF0pO1xufVxuIl0sIm5hbWVzIjpbIkdyYXBoUUwiLCJHcmFwaFFMT2JqZWN0VHlwZSIsIkdyYXBoUUxTY2hlbWEiLCJxdWVyeUNvbXBsZXhpdHkiLCJmaWVsZEV4dGVuc2lvbnNFc3RpbWF0b3IiLCJzaW1wbGVFc3RpbWF0b3IiLCJidWlsZExvY2FsZUlucHV0VHlwZSIsImJ1aWxkRmFsbGJhY2tMb2NhbGVJbnB1dFR5cGUiLCJpbml0Q29sbGVjdGlvbnMiLCJpbml0R2xvYmFscyIsImJ1aWxkUG9saWNpZXNUeXBlIiwiYWNjZXNzUmVzb2x2ZXIiLCJyZWdpc3RlckdyYXBoUUxTY2hlbWEiLCJwYXlsb2FkIiwidHlwZXMiLCJibG9ja1R5cGVzIiwiYmxvY2tJbnB1dFR5cGVzIiwiZ3JvdXBUeXBlcyIsImFycmF5VHlwZXMiLCJ0YWJUeXBlcyIsImNvbmZpZyIsImxvY2FsaXphdGlvbiIsImxvY2FsZUlucHV0VHlwZSIsImZhbGxiYWNrTG9jYWxlSW5wdXRUeXBlIiwiUXVlcnkiLCJuYW1lIiwiZmllbGRzIiwiTXV0YXRpb24iLCJBY2Nlc3MiLCJ0eXBlIiwicmVzb2x2ZSIsImdyYXBoUUwiLCJxdWVyaWVzIiwiY3VzdG9tUXVlcmllcyIsIm11dGF0aW9ucyIsImN1c3RvbU11dGF0aW9ucyIsInF1ZXJ5IiwibXV0YXRpb24iLCJzY2hlbWEiLCJ2YWxpZGF0aW9uUnVsZXMiLCJ2YXJpYWJsZVZhbHVlcyIsImVzdGltYXRvcnMiLCJkZWZhdWx0Q29tcGxleGl0eSIsIm1heGltdW1Db21wbGV4aXR5IiwibWF4Q29tcGxleGl0eSIsInZhcmlhYmxlcyJdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3BDLFlBQVlBLGFBQWEsVUFBVTtBQUNuQyxTQUFTQyxpQkFBaUIsRUFBRUMsYUFBYSxRQUFRLFVBQVU7QUFDM0QsT0FBT0MsbUJBQW1CQyx3QkFBd0IsRUFBRUMsZUFBZSxRQUFRLDJCQUEyQjtBQUV0RyxPQUFPQywwQkFBMEIsZ0NBQWdDO0FBQ2pFLE9BQU9DLGtDQUFrQyx3Q0FBd0M7QUFDakYsT0FBT0MscUJBQXFCLDhCQUE4QjtBQUMxRCxPQUFPQyxpQkFBaUIsMEJBQTBCO0FBQ2xELE9BQU9DLHVCQUF1Qiw2QkFBNkI7QUFDM0QsT0FBT0Msb0JBQW9CLG1DQUFtQztBQUU5RCxlQUFlLFNBQVNDLHNCQUFzQkMsT0FBZ0I7SUFDNURBLFFBQVFDLEtBQUssR0FBRztRQUNkQyxZQUFZLENBQUM7UUFDYkMsaUJBQWlCLENBQUM7UUFDbEJDLFlBQVksQ0FBQztRQUNiQyxZQUFZLENBQUM7UUFDYkMsVUFBVSxDQUFDO0lBQ2I7SUFFQSxJQUFJTixRQUFRTyxNQUFNLENBQUNDLFlBQVksRUFBRTtRQUMvQlIsUUFBUUMsS0FBSyxDQUFDUSxlQUFlLEdBQUdoQixxQkFBcUJPLFFBQVFPLE1BQU0sQ0FBQ0MsWUFBWTtRQUNoRlIsUUFBUUMsS0FBSyxDQUFDUyx1QkFBdUIsR0FBR2hCLDZCQUE2Qk0sUUFBUU8sTUFBTSxDQUFDQyxZQUFZO0lBQ2xHO0lBRUFSLFFBQVFXLEtBQUssR0FBRztRQUNkQyxNQUFNO1FBQ05DLFFBQVEsQ0FBQztJQUNYO0lBRUFiLFFBQVFjLFFBQVEsR0FBRztRQUNqQkYsTUFBTTtRQUNOQyxRQUFRLENBQUM7SUFDWDtJQUVBbEIsZ0JBQWdCSztJQUNoQkosWUFBWUk7SUFFWkEsUUFBUVcsS0FBSyxDQUFDRSxNQUFNLENBQUNFLE1BQU0sR0FBRztRQUM1QkMsTUFBTW5CLGtCQUFrQkc7UUFDeEJpQixTQUFTbkIsZUFBZUU7SUFDMUI7SUFFQSxJQUFJLE9BQU9BLFFBQVFPLE1BQU0sQ0FBQ1csT0FBTyxDQUFDQyxPQUFPLEtBQUssWUFBWTtRQUN4RCxJQUFNQyxnQkFBZ0JwQixRQUFRTyxNQUFNLENBQUNXLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDaEMsU0FBU2E7UUFDOURBLFFBQVFXLEtBQUssR0FBRyx3Q0FDWFgsUUFBUVcsS0FBSztZQUNoQkUsUUFBUSxtQkFDSGIsUUFBUVcsS0FBSyxDQUFDRSxNQUFNLEVBQ25CTyxpQkFBaUIsQ0FBQzs7SUFHNUI7SUFFQSxJQUFJLE9BQU9wQixRQUFRTyxNQUFNLENBQUNXLE9BQU8sQ0FBQ0csU0FBUyxLQUFLLFlBQVk7UUFDMUQsSUFBTUMsa0JBQWtCdEIsUUFBUU8sTUFBTSxDQUFDVyxPQUFPLENBQUNHLFNBQVMsQ0FBQ2xDLFNBQVNhO1FBQ2xFQSxRQUFRYyxRQUFRLEdBQUcsd0NBQ2RkLFFBQVFjLFFBQVE7WUFDbkJELFFBQVEsbUJBQ0hiLFFBQVFjLFFBQVEsQ0FBQ0QsTUFBTSxFQUN0QlMsbUJBQW1CLENBQUM7O0lBRzlCO0lBRUEsSUFBTUMsUUFBUSxJQUFJbkMsa0JBQWtCWSxRQUFRVyxLQUFLO0lBQ2pELElBQU1hLFdBQVcsSUFBSXBDLGtCQUFrQlksUUFBUWMsUUFBUTtJQUV2RCxJQUFNVyxTQUFTO1FBQ2JGLE9BQUFBO1FBQ0FDLFVBQUFBO0lBQ0Y7SUFFQXhCLFFBQVF5QixNQUFNLEdBQUcsSUFBSXBDLGNBQWNvQztJQUVuQ3pCLFFBQVEwQixlQUFlLEdBQUc7WUFBR0MsdUJBQUFBO2VBQXNCO1lBQ2pEckMsZ0JBQWdCO2dCQUNkc0MsWUFBWTtvQkFDVnJDO29CQUNBQyxnQkFBZ0I7d0JBQUVxQyxtQkFBbUI7b0JBQUU7aUJBQ3hDO2dCQUNEQyxtQkFBbUI5QixRQUFRTyxNQUFNLENBQUNXLE9BQU8sQ0FBQ2EsYUFBYTtnQkFDdkRDLFdBQVdMO1lBRWI7U0FDRDs7QUFDSCJ9
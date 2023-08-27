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
import { recurseNestedFields } from "./recurseNestedFields";
import { populate } from "./populate";
export var recurseRichText = function(param) {
    var req = param.req, children = param.children, _param_overrideAccess = param.overrideAccess, overrideAccess = _param_overrideAccess === void 0 ? false : _param_overrideAccess, depth = param.depth, _param_currentDepth = param.currentDepth, currentDepth = _param_currentDepth === void 0 ? 0 : _param_currentDepth, field = param.field, promises = param.promises, showHiddenFields = param.showHiddenFields;
    if (Array.isArray(children)) {
        children.forEach(function(element) {
            var _element;
            if (depth && currentDepth <= depth) {
                var _element_value, _element1;
                if ((element.type === "relationship" || element.type === "upload") && ((_element1 = element) === null || _element1 === void 0 ? void 0 : (_element_value = _element1.value) === null || _element_value === void 0 ? void 0 : _element_value.id)) {
                    var _element2, _field_admin_upload_collections_element_relationTo, _element3, _field_admin_upload_collections, _field_admin_upload, _field_admin;
                    var collection = req.payload.collections[(_element2 = element) === null || _element2 === void 0 ? void 0 : _element2.relationTo];
                    if (collection) {
                        promises.push(populate({
                            req: req,
                            id: element.value.id,
                            data: element,
                            key: "value",
                            overrideAccess: overrideAccess,
                            depth: depth,
                            currentDepth: currentDepth,
                            field: field,
                            collection: collection,
                            showHiddenFields: showHiddenFields
                        }));
                    }
                    if (element.type === "upload" && Array.isArray((_field_admin = field.admin) === null || _field_admin === void 0 ? void 0 : (_field_admin_upload = _field_admin.upload) === null || _field_admin_upload === void 0 ? void 0 : (_field_admin_upload_collections = _field_admin_upload.collections) === null || _field_admin_upload_collections === void 0 ? void 0 : (_field_admin_upload_collections_element_relationTo = _field_admin_upload_collections[(_element3 = element) === null || _element3 === void 0 ? void 0 : _element3.relationTo]) === null || _field_admin_upload_collections_element_relationTo === void 0 ? void 0 : _field_admin_upload_collections_element_relationTo.fields)) {
                        recurseNestedFields({
                            promises: promises,
                            data: element.fields || {},
                            fields: field.admin.upload.collections[element.relationTo].fields,
                            req: req,
                            overrideAccess: overrideAccess,
                            depth: depth,
                            currentDepth: currentDepth,
                            showHiddenFields: showHiddenFields
                        });
                    }
                }
                if (element.type === "link") {
                    var _element_doc, _element4, _element_doc1, _element5, _field_admin_link, _field_admin1;
                    if (((_element4 = element) === null || _element4 === void 0 ? void 0 : (_element_doc = _element4.doc) === null || _element_doc === void 0 ? void 0 : _element_doc.value) && ((_element5 = element) === null || _element5 === void 0 ? void 0 : (_element_doc1 = _element5.doc) === null || _element_doc1 === void 0 ? void 0 : _element_doc1.relationTo)) {
                        var _element_doc2, _element6;
                        var collection1 = req.payload.collections[(_element6 = element) === null || _element6 === void 0 ? void 0 : (_element_doc2 = _element6.doc) === null || _element_doc2 === void 0 ? void 0 : _element_doc2.relationTo];
                        if (collection1) {
                            promises.push(populate({
                                req: req,
                                id: element.doc.value,
                                data: element.doc,
                                key: "value",
                                overrideAccess: overrideAccess,
                                depth: depth,
                                currentDepth: currentDepth,
                                field: field,
                                collection: collection1,
                                showHiddenFields: showHiddenFields
                            }));
                        }
                    }
                    if (Array.isArray((_field_admin1 = field.admin) === null || _field_admin1 === void 0 ? void 0 : (_field_admin_link = _field_admin1.link) === null || _field_admin_link === void 0 ? void 0 : _field_admin_link.fields)) {
                        var _field_admin_link1, _field_admin2;
                        recurseNestedFields({
                            promises: promises,
                            data: element.fields || {},
                            fields: (_field_admin2 = field.admin) === null || _field_admin2 === void 0 ? void 0 : (_field_admin_link1 = _field_admin2.link) === null || _field_admin_link1 === void 0 ? void 0 : _field_admin_link1.fields,
                            req: req,
                            overrideAccess: overrideAccess,
                            depth: depth,
                            currentDepth: currentDepth,
                            showHiddenFields: showHiddenFields
                        });
                    }
                }
            }
            if ((_element = element) === null || _element === void 0 ? void 0 : _element.children) {
                recurseRichText({
                    children: element.children,
                    currentDepth: currentDepth,
                    depth: depth,
                    field: field,
                    overrideAccess: overrideAccess,
                    promises: promises,
                    req: req,
                    showHiddenFields: showHiddenFields
                });
            }
        });
    }
};
var richTextRelationshipPromise = function() {
    var _ref = _async_to_generator(function(param) {
        var currentDepth, depth, field, overrideAccess, req, siblingDoc, showHiddenFields, promises;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    currentDepth = param.currentDepth, depth = param.depth, field = param.field, overrideAccess = param.overrideAccess, req = param.req, siblingDoc = param.siblingDoc, showHiddenFields = param.showHiddenFields;
                    promises = [];
                    recurseRichText({
                        children: siblingDoc[field.name],
                        currentDepth: currentDepth,
                        depth: depth,
                        field: field,
                        overrideAccess: overrideAccess,
                        promises: promises,
                        req: req,
                        showHiddenFields: showHiddenFields
                    });
                    return [
                        4,
                        Promise.all(promises)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function richTextRelationshipPromise(_) {
        return _ref.apply(this, arguments);
    };
}();
export default richTextRelationshipPromise;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWVsZHMvcmljaFRleHQvcmljaFRleHRSZWxhdGlvbnNoaXBQcm9taXNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJpY2hUZXh0RmllbGQgfSBmcm9tICcuLi9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgUGF5bG9hZFJlcXVlc3QgfSBmcm9tICcuLi8uLi9leHByZXNzL3R5cGVzJztcbmltcG9ydCB7IHJlY3Vyc2VOZXN0ZWRGaWVsZHMgfSBmcm9tICcuL3JlY3Vyc2VOZXN0ZWRGaWVsZHMnO1xuaW1wb3J0IHsgcG9wdWxhdGUgfSBmcm9tICcuL3BvcHVsYXRlJztcblxudHlwZSBBcmdzID0ge1xuICBjdXJyZW50RGVwdGg/OiBudW1iZXJcbiAgZGVwdGg6IG51bWJlclxuICBmaWVsZDogUmljaFRleHRGaWVsZFxuICBvdmVycmlkZUFjY2Vzcz86IGJvb2xlYW5cbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBzaWJsaW5nRG9jOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPlxuICBzaG93SGlkZGVuRmllbGRzOiBib29sZWFuXG59XG5cbnR5cGUgUmVjdXJzZVJpY2hUZXh0QXJncyA9IHtcbiAgY2hpbGRyZW46IHVua25vd25bXVxuICBvdmVycmlkZUFjY2VzczogYm9vbGVhblxuICBkZXB0aDogbnVtYmVyXG4gIGN1cnJlbnREZXB0aDogbnVtYmVyXG4gIGZpZWxkOiBSaWNoVGV4dEZpZWxkXG4gIHJlcTogUGF5bG9hZFJlcXVlc3RcbiAgcHJvbWlzZXM6IFByb21pc2U8dm9pZD5bXVxuICBzaG93SGlkZGVuRmllbGRzOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCByZWN1cnNlUmljaFRleHQgPSAoe1xuICByZXEsXG4gIGNoaWxkcmVuLFxuICBvdmVycmlkZUFjY2VzcyA9IGZhbHNlLFxuICBkZXB0aCxcbiAgY3VycmVudERlcHRoID0gMCxcbiAgZmllbGQsXG4gIHByb21pc2VzLFxuICBzaG93SGlkZGVuRmllbGRzLFxufTogUmVjdXJzZVJpY2hUZXh0QXJncyk6IHZvaWQgPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAoY2hpbGRyZW4gYXMgYW55W10pLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmICgoZGVwdGggJiYgY3VycmVudERlcHRoIDw9IGRlcHRoKSkge1xuICAgICAgICBpZiAoKGVsZW1lbnQudHlwZSA9PT0gJ3JlbGF0aW9uc2hpcCcgfHwgZWxlbWVudC50eXBlID09PSAndXBsb2FkJylcbiAgICAgICAgICAmJiBlbGVtZW50Py52YWx1ZT8uaWQpIHtcbiAgICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gcmVxLnBheWxvYWQuY29sbGVjdGlvbnNbZWxlbWVudD8ucmVsYXRpb25Ub107XG5cbiAgICAgICAgICBpZiAoY29sbGVjdGlvbikge1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwb3B1bGF0ZSh7XG4gICAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgICAgaWQ6IGVsZW1lbnQudmFsdWUuaWQsXG4gICAgICAgICAgICAgIGRhdGE6IGVsZW1lbnQsXG4gICAgICAgICAgICAgIGtleTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgICAgICAgIGRlcHRoLFxuICAgICAgICAgICAgICBjdXJyZW50RGVwdGgsXG4gICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICd1cGxvYWQnICYmIEFycmF5LmlzQXJyYXkoZmllbGQuYWRtaW4/LnVwbG9hZD8uY29sbGVjdGlvbnM/LltlbGVtZW50Py5yZWxhdGlvblRvXT8uZmllbGRzKSkge1xuICAgICAgICAgICAgcmVjdXJzZU5lc3RlZEZpZWxkcyh7XG4gICAgICAgICAgICAgIHByb21pc2VzLFxuICAgICAgICAgICAgICBkYXRhOiBlbGVtZW50LmZpZWxkcyB8fCB7fSxcbiAgICAgICAgICAgICAgZmllbGRzOiBmaWVsZC5hZG1pbi51cGxvYWQuY29sbGVjdGlvbnNbZWxlbWVudC5yZWxhdGlvblRvXS5maWVsZHMsXG4gICAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgICAgICAgIGRlcHRoLFxuICAgICAgICAgICAgICBjdXJyZW50RGVwdGgsXG4gICAgICAgICAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnbGluaycpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudD8uZG9jPy52YWx1ZSAmJiBlbGVtZW50Py5kb2M/LnJlbGF0aW9uVG8pIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSByZXEucGF5bG9hZC5jb2xsZWN0aW9uc1tlbGVtZW50Py5kb2M/LnJlbGF0aW9uVG9dO1xuXG4gICAgICAgICAgICBpZiAoY29sbGVjdGlvbikge1xuICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHBvcHVsYXRlKHtcbiAgICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICAgICAgaWQ6IGVsZW1lbnQuZG9jLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRhdGE6IGVsZW1lbnQuZG9jLFxuICAgICAgICAgICAgICAgIGtleTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICAgICAgICBkZXB0aCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RGVwdGgsXG4gICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgICAgICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQuYWRtaW4/Lmxpbms/LmZpZWxkcykpIHtcbiAgICAgICAgICAgIHJlY3Vyc2VOZXN0ZWRGaWVsZHMoe1xuICAgICAgICAgICAgICBwcm9taXNlcyxcbiAgICAgICAgICAgICAgZGF0YTogZWxlbWVudC5maWVsZHMgfHwge30sXG4gICAgICAgICAgICAgIGZpZWxkczogZmllbGQuYWRtaW4/Lmxpbms/LmZpZWxkcyxcbiAgICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICAgICAgZGVwdGgsXG4gICAgICAgICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudD8uY2hpbGRyZW4pIHtcbiAgICAgICAgcmVjdXJzZVJpY2hUZXh0KHtcbiAgICAgICAgICBjaGlsZHJlbjogZWxlbWVudC5jaGlsZHJlbixcbiAgICAgICAgICBjdXJyZW50RGVwdGgsXG4gICAgICAgICAgZGVwdGgsXG4gICAgICAgICAgZmllbGQsXG4gICAgICAgICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgICAgICAgcHJvbWlzZXMsXG4gICAgICAgICAgcmVxLFxuICAgICAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCByaWNoVGV4dFJlbGF0aW9uc2hpcFByb21pc2UgPSBhc3luYyAoe1xuICBjdXJyZW50RGVwdGgsXG4gIGRlcHRoLFxuICBmaWVsZCxcbiAgb3ZlcnJpZGVBY2Nlc3MsXG4gIHJlcSxcbiAgc2libGluZ0RvYyxcbiAgc2hvd0hpZGRlbkZpZWxkcyxcbn06IEFyZ3MpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgY29uc3QgcHJvbWlzZXMgPSBbXTtcblxuICByZWN1cnNlUmljaFRleHQoe1xuICAgIGNoaWxkcmVuOiBzaWJsaW5nRG9jW2ZpZWxkLm5hbWVdIGFzIHVua25vd25bXSxcbiAgICBjdXJyZW50RGVwdGgsXG4gICAgZGVwdGgsXG4gICAgZmllbGQsXG4gICAgb3ZlcnJpZGVBY2Nlc3MsXG4gICAgcHJvbWlzZXMsXG4gICAgcmVxLFxuICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gIH0pO1xuXG4gIGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJpY2hUZXh0UmVsYXRpb25zaGlwUHJvbWlzZTtcbiJdLCJuYW1lcyI6WyJyZWN1cnNlTmVzdGVkRmllbGRzIiwicG9wdWxhdGUiLCJyZWN1cnNlUmljaFRleHQiLCJyZXEiLCJjaGlsZHJlbiIsIm92ZXJyaWRlQWNjZXNzIiwiZGVwdGgiLCJjdXJyZW50RGVwdGgiLCJmaWVsZCIsInByb21pc2VzIiwic2hvd0hpZGRlbkZpZWxkcyIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJlbGVtZW50IiwidHlwZSIsInZhbHVlIiwiaWQiLCJjb2xsZWN0aW9uIiwicGF5bG9hZCIsImNvbGxlY3Rpb25zIiwicmVsYXRpb25UbyIsInB1c2giLCJkYXRhIiwia2V5IiwiYWRtaW4iLCJ1cGxvYWQiLCJmaWVsZHMiLCJkb2MiLCJsaW5rIiwicmljaFRleHRSZWxhdGlvbnNoaXBQcm9taXNlIiwic2libGluZ0RvYyIsIm5hbWUiLCJQcm9taXNlIiwiYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsbUJBQW1CLFFBQVEsd0JBQXdCO0FBQzVELFNBQVNDLFFBQVEsUUFBUSxhQUFhO0FBdUJ0QyxPQUFPLElBQU1DLGtCQUFrQjtRQUM3QkMsWUFBQUEsS0FDQUMsaUJBQUFBLHdDQUNBQyxnQkFBQUEsb0RBQWlCLCtCQUNqQkMsY0FBQUEsbUNBQ0FDLGNBQUFBLGdEQUFlLHlCQUNmQyxjQUFBQSxPQUNBQyxpQkFBQUEsVUFDQUMseUJBQUFBO0lBRUEsSUFBSUMsTUFBTUMsT0FBTyxDQUFDUixXQUFXO1FBQzFCQSxTQUFtQlMsT0FBTyxDQUFDLFNBQUNDO2dCQXNFdkJBO1lBckVKLElBQUtSLFNBQVNDLGdCQUFnQkQsT0FBUTtvQkFFL0JRLGdCQUFBQTtnQkFETCxJQUFJLEFBQUNBLENBQUFBLFFBQVFDLElBQUksS0FBSyxrQkFBa0JELFFBQVFDLElBQUksS0FBSyxRQUFPLE9BQzNERCxZQUFBQSxxQkFBQUEsaUNBQUFBLGlCQUFBQSxVQUFTRSxLQUFLLGNBQWRGLHFDQUFBQSxlQUFnQkcsRUFBRSxHQUFFO3dCQUNvQkgsV0FpQklOLG9EQUFtQ00sV0FBbkNOLGlDQUFBQSxxQkFBQUE7b0JBakIvQyxJQUFNVSxhQUFhZixJQUFJZ0IsT0FBTyxDQUFDQyxXQUFXLEVBQUNOLFlBQUFBLHFCQUFBQSxnQ0FBQUEsVUFBU08sVUFBVSxDQUFDO29CQUUvRCxJQUFJSCxZQUFZO3dCQUNkVCxTQUFTYSxJQUFJLENBQUNyQixTQUFTOzRCQUNyQkUsS0FBQUE7NEJBQ0FjLElBQUlILFFBQVFFLEtBQUssQ0FBQ0MsRUFBRTs0QkFDcEJNLE1BQU1UOzRCQUNOVSxLQUFLOzRCQUNMbkIsZ0JBQUFBOzRCQUNBQyxPQUFBQTs0QkFDQUMsY0FBQUE7NEJBQ0FDLE9BQUFBOzRCQUNBVSxZQUFBQTs0QkFDQVIsa0JBQUFBO3dCQUNGO29CQUNGO29CQUVBLElBQUlJLFFBQVFDLElBQUksS0FBSyxZQUFZSixNQUFNQyxPQUFPLEVBQUNKLGVBQUFBLE1BQU1pQixLQUFLLGNBQVhqQixvQ0FBQUEsc0JBQUFBLGFBQWFrQixNQUFNLGNBQW5CbEIsMkNBQUFBLGtDQUFBQSxvQkFBcUJZLFdBQVcsY0FBaENaLHVEQUFBQSxxREFBQUEsK0JBQWtDLEVBQUNNLFlBQUFBLHFCQUFBQSxnQ0FBQUEsVUFBU08sVUFBVSxDQUFDLGNBQXZEYix5RUFBQUEsbURBQXlEbUIsTUFBTSxHQUFHO3dCQUMvRzNCLG9CQUFvQjs0QkFDbEJTLFVBQUFBOzRCQUNBYyxNQUFNVCxRQUFRYSxNQUFNLElBQUksQ0FBQzs0QkFDekJBLFFBQVFuQixNQUFNaUIsS0FBSyxDQUFDQyxNQUFNLENBQUNOLFdBQVcsQ0FBQ04sUUFBUU8sVUFBVSxDQUFDLENBQUNNLE1BQU07NEJBQ2pFeEIsS0FBQUE7NEJBQ0FFLGdCQUFBQTs0QkFDQUMsT0FBQUE7NEJBQ0FDLGNBQUFBOzRCQUNBRyxrQkFBQUE7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSUksUUFBUUMsSUFBSSxLQUFLLFFBQVE7d0JBQ3ZCRCxjQUFBQSxXQUF1QkEsZUFBQUEsV0FtQlROLG1CQUFBQTtvQkFuQmxCLElBQUlNLEVBQUFBLFlBQUFBLHFCQUFBQSxpQ0FBQUEsZUFBQUEsVUFBU2MsR0FBRyxjQUFaZCxtQ0FBQUEsYUFBY0UsS0FBSyxPQUFJRixZQUFBQSxxQkFBQUEsaUNBQUFBLGdCQUFBQSxVQUFTYyxHQUFHLGNBQVpkLG9DQUFBQSxjQUFjTyxVQUFVLEdBQUU7NEJBQ1JQLGVBQUFBO3dCQUEzQyxJQUFNSSxjQUFhZixJQUFJZ0IsT0FBTyxDQUFDQyxXQUFXLEVBQUNOLFlBQUFBLHFCQUFBQSxpQ0FBQUEsZ0JBQUFBLFVBQVNjLEdBQUcsY0FBWmQsb0NBQUFBLGNBQWNPLFVBQVUsQ0FBQzt3QkFFcEUsSUFBSUgsYUFBWTs0QkFDZFQsU0FBU2EsSUFBSSxDQUFDckIsU0FBUztnQ0FDckJFLEtBQUFBO2dDQUNBYyxJQUFJSCxRQUFRYyxHQUFHLENBQUNaLEtBQUs7Z0NBQ3JCTyxNQUFNVCxRQUFRYyxHQUFHO2dDQUNqQkosS0FBSztnQ0FDTG5CLGdCQUFBQTtnQ0FDQUMsT0FBQUE7Z0NBQ0FDLGNBQUFBO2dDQUNBQyxPQUFBQTtnQ0FDQVUsWUFBQUE7Z0NBQ0FSLGtCQUFBQTs0QkFDRjt3QkFDRjtvQkFDRjtvQkFFQSxJQUFJQyxNQUFNQyxPQUFPLEVBQUNKLGdCQUFBQSxNQUFNaUIsS0FBSyxjQUFYakIscUNBQUFBLG9CQUFBQSxjQUFhcUIsSUFBSSxjQUFqQnJCLHdDQUFBQSxrQkFBbUJtQixNQUFNLEdBQUc7NEJBSWxDbkIsb0JBQUFBO3dCQUhWUixvQkFBb0I7NEJBQ2xCUyxVQUFBQTs0QkFDQWMsTUFBTVQsUUFBUWEsTUFBTSxJQUFJLENBQUM7NEJBQ3pCQSxNQUFNLEdBQUVuQixnQkFBQUEsTUFBTWlCLEtBQUssY0FBWGpCLHFDQUFBQSxxQkFBQUEsY0FBYXFCLElBQUksY0FBakJyQix5Q0FBQUEsbUJBQW1CbUIsTUFBTTs0QkFDakN4QixLQUFBQTs0QkFDQUUsZ0JBQUFBOzRCQUNBQyxPQUFBQTs0QkFDQUMsY0FBQUE7NEJBQ0FHLGtCQUFBQTt3QkFDRjtvQkFDRjtnQkFDRjtZQUNGO1lBRUEsS0FBSUksV0FBQUEscUJBQUFBLCtCQUFBQSxTQUFTVixRQUFRLEVBQUU7Z0JBQ3JCRixnQkFBZ0I7b0JBQ2RFLFVBQVVVLFFBQVFWLFFBQVE7b0JBQzFCRyxjQUFBQTtvQkFDQUQsT0FBQUE7b0JBQ0FFLE9BQUFBO29CQUNBSCxnQkFBQUE7b0JBQ0FJLFVBQUFBO29CQUNBTixLQUFBQTtvQkFDQU8sa0JBQUFBO2dCQUNGO1lBQ0Y7UUFDRjtJQUNGO0FBQ0YsRUFBRTtBQUVGLElBQU1vQjtlQUE4QixvQkFBQTtZQUNsQ3ZCLGNBQ0FELE9BQ0FFLE9BQ0FILGdCQUNBRixLQUNBNEIsWUFDQXJCLGtCQUVNRDs7OztvQkFSTkYscUJBQUFBLGNBQ0FELGNBQUFBLE9BQ0FFLGNBQUFBLE9BQ0FILHVCQUFBQSxnQkFDQUYsWUFBQUEsS0FDQTRCLG1CQUFBQSxZQUNBckIseUJBQUFBO29CQUVNRDtvQkFFTlAsZ0JBQWdCO3dCQUNkRSxVQUFVMkIsVUFBVSxDQUFDdkIsTUFBTXdCLElBQUksQ0FBQzt3QkFDaEN6QixjQUFBQTt3QkFDQUQsT0FBQUE7d0JBQ0FFLE9BQUFBO3dCQUNBSCxnQkFBQUE7d0JBQ0FJLFVBQUFBO3dCQUNBTixLQUFBQTt3QkFDQU8sa0JBQUFBO29CQUNGO29CQUVBOzt3QkFBTXVCLFFBQVFDLEdBQUcsQ0FBQ3pCOzs7b0JBQWxCOzs7Ozs7SUFDRjtvQkF2Qk1xQjs7OztBQXlCTixlQUFlQSw0QkFBNEIifQ==
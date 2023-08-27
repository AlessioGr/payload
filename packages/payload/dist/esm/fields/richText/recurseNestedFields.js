/* eslint-disable @typescript-eslint/no-use-before-define */ import { fieldHasSubFields, fieldIsArrayType, fieldAffectsData } from "../config/types";
import { populate } from "./populate";
import { recurseRichText } from "./richTextRelationshipPromise";
export var recurseNestedFields = function(param) {
    var promises = param.promises, data = param.data, fields = param.fields, req = param.req, _param_overrideAccess = param.overrideAccess, overrideAccess = _param_overrideAccess === void 0 ? false : _param_overrideAccess, depth = param.depth, _param_currentDepth = param.currentDepth, currentDepth = _param_currentDepth === void 0 ? 0 : _param_currentDepth, showHiddenFields = param.showHiddenFields;
    fields.forEach(function(field) {
        if (field.type === "relationship" || field.type === "upload") {
            if (field.type === "relationship") {
                var _data_field_name, _data_field_name1;
                if (field.hasMany && Array.isArray(data[field.name])) {
                    if (Array.isArray(field.relationTo)) {
                        data[field.name].forEach(function(param, i) {
                            var relationTo = param.relationTo, value = param.value;
                            var collection = req.payload.collections[relationTo];
                            if (collection) {
                                promises.push(populate({
                                    id: value,
                                    field: field,
                                    collection: collection,
                                    data: data[field.name],
                                    key: i,
                                    overrideAccess: overrideAccess,
                                    depth: depth,
                                    currentDepth: currentDepth,
                                    req: req,
                                    showHiddenFields: showHiddenFields
                                }));
                            }
                        });
                    } else {
                        data[field.name].forEach(function(id, i) {
                            var collection = req.payload.collections[field.relationTo];
                            if (collection) {
                                promises.push(populate({
                                    id: id,
                                    field: field,
                                    collection: collection,
                                    data: data[field.name],
                                    key: i,
                                    overrideAccess: overrideAccess,
                                    depth: depth,
                                    currentDepth: currentDepth,
                                    req: req,
                                    showHiddenFields: showHiddenFields
                                }));
                            }
                        });
                    }
                } else if (Array.isArray(field.relationTo) && ((_data_field_name = data[field.name]) === null || _data_field_name === void 0 ? void 0 : _data_field_name.value) && ((_data_field_name1 = data[field.name]) === null || _data_field_name1 === void 0 ? void 0 : _data_field_name1.relationTo)) {
                    var collection = req.payload.collections[data[field.name].relationTo];
                    promises.push(populate({
                        id: data[field.name].value,
                        field: field,
                        collection: collection,
                        data: data[field.name],
                        key: "value",
                        overrideAccess: overrideAccess,
                        depth: depth,
                        currentDepth: currentDepth,
                        req: req,
                        showHiddenFields: showHiddenFields
                    }));
                }
            }
            if (typeof data[field.name] !== "undefined" && typeof field.relationTo === "string") {
                var collection1 = req.payload.collections[field.relationTo];
                promises.push(populate({
                    id: data[field.name],
                    field: field,
                    collection: collection1,
                    data: data,
                    key: field.name,
                    overrideAccess: overrideAccess,
                    depth: depth,
                    currentDepth: currentDepth,
                    req: req,
                    showHiddenFields: showHiddenFields
                }));
            }
        } else if (fieldHasSubFields(field) && !fieldIsArrayType(field)) {
            if (fieldAffectsData(field) && typeof data[field.name] === "object") {
                recurseNestedFields({
                    promises: promises,
                    data: data[field.name],
                    fields: field.fields,
                    req: req,
                    overrideAccess: overrideAccess,
                    depth: depth,
                    currentDepth: currentDepth,
                    showHiddenFields: showHiddenFields
                });
            } else {
                recurseNestedFields({
                    promises: promises,
                    data: data,
                    fields: field.fields,
                    req: req,
                    overrideAccess: overrideAccess,
                    depth: depth,
                    currentDepth: currentDepth,
                    showHiddenFields: showHiddenFields
                });
            }
        } else if (field.type === "tabs") {
            field.tabs.forEach(function(tab) {
                recurseNestedFields({
                    promises: promises,
                    data: data,
                    fields: tab.fields,
                    req: req,
                    overrideAccess: overrideAccess,
                    depth: depth,
                    currentDepth: currentDepth,
                    showHiddenFields: showHiddenFields
                });
            });
        } else if (Array.isArray(data[field.name])) {
            if (field.type === "blocks") {
                data[field.name].forEach(function(row, i) {
                    var block = field.blocks.find(function(param) {
                        var slug = param.slug;
                        var _row;
                        return slug === ((_row = row) === null || _row === void 0 ? void 0 : _row.blockType);
                    });
                    if (block) {
                        recurseNestedFields({
                            promises: promises,
                            data: data[field.name][i],
                            fields: block.fields,
                            req: req,
                            overrideAccess: overrideAccess,
                            depth: depth,
                            currentDepth: currentDepth,
                            showHiddenFields: showHiddenFields
                        });
                    }
                });
            }
            if (field.type === "array") {
                data[field.name].forEach(function(_, i) {
                    recurseNestedFields({
                        promises: promises,
                        data: data[field.name][i],
                        fields: field.fields,
                        req: req,
                        overrideAccess: overrideAccess,
                        depth: depth,
                        currentDepth: currentDepth,
                        showHiddenFields: showHiddenFields
                    });
                });
            }
        }
        if (field.type === "richText" && Array.isArray(data[field.name])) {
            data[field.name].forEach(function(node) {
                if (Array.isArray(node.children)) {
                    recurseRichText({
                        req: req,
                        children: node.children,
                        overrideAccess: overrideAccess,
                        depth: depth,
                        currentDepth: currentDepth,
                        field: field,
                        promises: promises,
                        showHiddenFields: showHiddenFields
                    });
                }
            });
        }
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWVsZHMvcmljaFRleHQvcmVjdXJzZU5lc3RlZEZpZWxkcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCB7IEZpZWxkLCBmaWVsZEhhc1N1YkZpZWxkcywgZmllbGRJc0FycmF5VHlwZSwgZmllbGRBZmZlY3RzRGF0YSB9IGZyb20gJy4uL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBQYXlsb2FkUmVxdWVzdCB9IGZyb20gJy4uLy4uL2V4cHJlc3MvdHlwZXMnO1xuaW1wb3J0IHsgcG9wdWxhdGUgfSBmcm9tICcuL3BvcHVsYXRlJztcbmltcG9ydCB7IHJlY3Vyc2VSaWNoVGV4dCB9IGZyb20gJy4vcmljaFRleHRSZWxhdGlvbnNoaXBQcm9taXNlJztcblxudHlwZSBOZXN0ZWRSaWNoVGV4dEZpZWxkc0FyZ3MgPSB7XG4gIHByb21pc2VzOiBQcm9taXNlPHZvaWQ+W11cbiAgZGF0YTogdW5rbm93blxuICBmaWVsZHM6IEZpZWxkW11cbiAgcmVxOiBQYXlsb2FkUmVxdWVzdFxuICBvdmVycmlkZUFjY2VzczogYm9vbGVhblxuICBkZXB0aDogbnVtYmVyXG4gIGN1cnJlbnREZXB0aD86IG51bWJlclxuICBzaG93SGlkZGVuRmllbGRzOiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCByZWN1cnNlTmVzdGVkRmllbGRzID0gKHtcbiAgcHJvbWlzZXMsXG4gIGRhdGEsXG4gIGZpZWxkcyxcbiAgcmVxLFxuICBvdmVycmlkZUFjY2VzcyA9IGZhbHNlLFxuICBkZXB0aCxcbiAgY3VycmVudERlcHRoID0gMCxcbiAgc2hvd0hpZGRlbkZpZWxkcyxcbn06IE5lc3RlZFJpY2hUZXh0RmllbGRzQXJncyk6IHZvaWQgPT4ge1xuICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3JlbGF0aW9uc2hpcCcgfHwgZmllbGQudHlwZSA9PT0gJ3VwbG9hZCcpIHtcbiAgICAgIGlmIChmaWVsZC50eXBlID09PSAncmVsYXRpb25zaGlwJykge1xuICAgICAgICBpZiAoZmllbGQuaGFzTWFueSAmJiBBcnJheS5pc0FycmF5KGRhdGFbZmllbGQubmFtZV0pKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmllbGQucmVsYXRpb25UbykpIHtcbiAgICAgICAgICAgIGRhdGFbZmllbGQubmFtZV0uZm9yRWFjaCgoeyByZWxhdGlvblRvLCB2YWx1ZSB9LCBpKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSByZXEucGF5bG9hZC5jb2xsZWN0aW9uc1tyZWxhdGlvblRvXTtcbiAgICAgICAgICAgICAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHBvcHVsYXRlKHtcbiAgICAgICAgICAgICAgICAgIGlkOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFbZmllbGQubmFtZV0sXG4gICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICAgICAgICAgIGRlcHRoLFxuICAgICAgICAgICAgICAgICAgY3VycmVudERlcHRoLFxuICAgICAgICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhW2ZpZWxkLm5hbWVdLmZvckVhY2goKGlkLCBpKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSByZXEucGF5bG9hZC5jb2xsZWN0aW9uc1tmaWVsZC5yZWxhdGlvblRvIGFzIHN0cmluZ107XG4gICAgICAgICAgICAgIGlmIChjb2xsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwb3B1bGF0ZSh7XG4gICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgIGZpZWxkLFxuICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFbZmllbGQubmFtZV0sXG4gICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICAgICAgICAgIGRlcHRoLFxuICAgICAgICAgICAgICAgICAgY3VycmVudERlcHRoLFxuICAgICAgICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGZpZWxkLnJlbGF0aW9uVG8pICYmIGRhdGFbZmllbGQubmFtZV0/LnZhbHVlICYmIGRhdGFbZmllbGQubmFtZV0/LnJlbGF0aW9uVG8pIHtcbiAgICAgICAgICBjb25zdCBjb2xsZWN0aW9uID0gcmVxLnBheWxvYWQuY29sbGVjdGlvbnNbZGF0YVtmaWVsZC5uYW1lXS5yZWxhdGlvblRvXTtcbiAgICAgICAgICBwcm9taXNlcy5wdXNoKHBvcHVsYXRlKHtcbiAgICAgICAgICAgIGlkOiBkYXRhW2ZpZWxkLm5hbWVdLnZhbHVlLFxuICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICAgICAgZGF0YTogZGF0YVtmaWVsZC5uYW1lXSxcbiAgICAgICAgICAgIGtleTogJ3ZhbHVlJyxcbiAgICAgICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICAgICAgZGVwdGgsXG4gICAgICAgICAgICBjdXJyZW50RGVwdGgsXG4gICAgICAgICAgICByZXEsXG4gICAgICAgICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2ZpZWxkLm5hbWVdICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZmllbGQucmVsYXRpb25UbyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IHJlcS5wYXlsb2FkLmNvbGxlY3Rpb25zW2ZpZWxkLnJlbGF0aW9uVG9dO1xuICAgICAgICBwcm9taXNlcy5wdXNoKHBvcHVsYXRlKHtcbiAgICAgICAgICBpZDogZGF0YVtmaWVsZC5uYW1lXSxcbiAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICBjb2xsZWN0aW9uLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAga2V5OiBmaWVsZC5uYW1lLFxuICAgICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICAgIGRlcHRoLFxuICAgICAgICAgIGN1cnJlbnREZXB0aCxcbiAgICAgICAgICByZXEsXG4gICAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZmllbGRIYXNTdWJGaWVsZHMoZmllbGQpICYmICFmaWVsZElzQXJyYXlUeXBlKGZpZWxkKSkge1xuICAgICAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmIHR5cGVvZiBkYXRhW2ZpZWxkLm5hbWVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICByZWN1cnNlTmVzdGVkRmllbGRzKHtcbiAgICAgICAgICBwcm9taXNlcyxcbiAgICAgICAgICBkYXRhOiBkYXRhW2ZpZWxkLm5hbWVdLFxuICAgICAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICBkZXB0aCxcbiAgICAgICAgICBjdXJyZW50RGVwdGgsXG4gICAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWN1cnNlTmVzdGVkRmllbGRzKHtcbiAgICAgICAgICBwcm9taXNlcyxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGZpZWxkczogZmllbGQuZmllbGRzLFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICBkZXB0aCxcbiAgICAgICAgICBjdXJyZW50RGVwdGgsXG4gICAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmaWVsZC50eXBlID09PSAndGFicycpIHtcbiAgICAgIGZpZWxkLnRhYnMuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgIHJlY3Vyc2VOZXN0ZWRGaWVsZHMoe1xuICAgICAgICAgIHByb21pc2VzLFxuICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgZmllbGRzOiB0YWIuZmllbGRzLFxuICAgICAgICAgIHJlcSxcbiAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICBkZXB0aCxcbiAgICAgICAgICBjdXJyZW50RGVwdGgsXG4gICAgICAgICAgc2hvd0hpZGRlbkZpZWxkcyxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVtmaWVsZC5uYW1lXSkpIHtcbiAgICAgIGlmIChmaWVsZC50eXBlID09PSAnYmxvY2tzJykge1xuICAgICAgICBkYXRhW2ZpZWxkLm5hbWVdLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGJsb2NrID0gZmllbGQuYmxvY2tzLmZpbmQoKHsgc2x1ZyB9KSA9PiBzbHVnID09PSByb3c/LmJsb2NrVHlwZSk7XG4gICAgICAgICAgaWYgKGJsb2NrKSB7XG4gICAgICAgICAgICByZWN1cnNlTmVzdGVkRmllbGRzKHtcbiAgICAgICAgICAgICAgcHJvbWlzZXMsXG4gICAgICAgICAgICAgIGRhdGE6IGRhdGFbZmllbGQubmFtZV1baV0sXG4gICAgICAgICAgICAgIGZpZWxkczogYmxvY2suZmllbGRzLFxuICAgICAgICAgICAgICByZXEsXG4gICAgICAgICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICAgICAgICBkZXB0aCxcbiAgICAgICAgICAgICAgY3VycmVudERlcHRoLFxuICAgICAgICAgICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpZWxkLnR5cGUgPT09ICdhcnJheScpIHtcbiAgICAgICAgZGF0YVtmaWVsZC5uYW1lXS5mb3JFYWNoKChfLCBpKSA9PiB7XG4gICAgICAgICAgcmVjdXJzZU5lc3RlZEZpZWxkcyh7XG4gICAgICAgICAgICBwcm9taXNlcyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFbZmllbGQubmFtZV1baV0sXG4gICAgICAgICAgICBmaWVsZHM6IGZpZWxkLmZpZWxkcyxcbiAgICAgICAgICAgIHJlcSxcbiAgICAgICAgICAgIG92ZXJyaWRlQWNjZXNzLFxuICAgICAgICAgICAgZGVwdGgsXG4gICAgICAgICAgICBjdXJyZW50RGVwdGgsXG4gICAgICAgICAgICBzaG93SGlkZGVuRmllbGRzLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3JpY2hUZXh0JyAmJiBBcnJheS5pc0FycmF5KGRhdGFbZmllbGQubmFtZV0pKSB7XG4gICAgICBkYXRhW2ZpZWxkLm5hbWVdLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZS5jaGlsZHJlbikpIHtcbiAgICAgICAgICByZWN1cnNlUmljaFRleHQoe1xuICAgICAgICAgICAgcmVxLFxuICAgICAgICAgICAgY2hpbGRyZW46IG5vZGUuY2hpbGRyZW4sXG4gICAgICAgICAgICBvdmVycmlkZUFjY2VzcyxcbiAgICAgICAgICAgIGRlcHRoLFxuICAgICAgICAgICAgY3VycmVudERlcHRoLFxuICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICBwcm9taXNlcyxcbiAgICAgICAgICAgIHNob3dIaWRkZW5GaWVsZHMsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59O1xuIl0sIm5hbWVzIjpbImZpZWxkSGFzU3ViRmllbGRzIiwiZmllbGRJc0FycmF5VHlwZSIsImZpZWxkQWZmZWN0c0RhdGEiLCJwb3B1bGF0ZSIsInJlY3Vyc2VSaWNoVGV4dCIsInJlY3Vyc2VOZXN0ZWRGaWVsZHMiLCJwcm9taXNlcyIsImRhdGEiLCJmaWVsZHMiLCJyZXEiLCJvdmVycmlkZUFjY2VzcyIsImRlcHRoIiwiY3VycmVudERlcHRoIiwic2hvd0hpZGRlbkZpZWxkcyIsImZvckVhY2giLCJmaWVsZCIsInR5cGUiLCJoYXNNYW55IiwiQXJyYXkiLCJpc0FycmF5IiwibmFtZSIsInJlbGF0aW9uVG8iLCJpIiwidmFsdWUiLCJjb2xsZWN0aW9uIiwicGF5bG9hZCIsImNvbGxlY3Rpb25zIiwicHVzaCIsImlkIiwia2V5IiwidGFicyIsInRhYiIsInJvdyIsImJsb2NrIiwiYmxvY2tzIiwiZmluZCIsInNsdWciLCJibG9ja1R5cGUiLCJfIiwibm9kZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiQUFBQSwwREFBMEQsR0FDMUQsU0FBZ0JBLGlCQUFpQixFQUFFQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLFFBQVEsa0JBQWtCO0FBRS9GLFNBQVNDLFFBQVEsUUFBUSxhQUFhO0FBQ3RDLFNBQVNDLGVBQWUsUUFBUSxnQ0FBZ0M7QUFhaEUsT0FBTyxJQUFNQyxzQkFBc0I7UUFDakNDLGlCQUFBQSxVQUNBQyxh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
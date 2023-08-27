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
import { formatLabels, toWords } from "../../utilities/formatLabels";
import { InvalidFieldName, InvalidFieldRelationship, MissingFieldType } from "../../errors";
import { baseBlockFields } from "../baseFields/baseBlockFields";
import validations from "../validations";
import { baseIDField } from "../baseFields/baseIDField";
import { fieldAffectsData, tabHasName } from "./types";
import withCondition from "../../admin/components/forms/withCondition";
var sanitizeFields = function(fields, validRelationships) {
    if (!fields) return [];
    return fields.map(function(unsanitizedField) {
        var field = _object_spread({}, unsanitizedField);
        if (!field.type) throw new MissingFieldType(field);
        // assert that field names do not contain forbidden characters
        if (fieldAffectsData(field) && field.name.includes(".")) {
            throw new InvalidFieldName(field, field.name);
        }
        // Auto-label
        if ("name" in field && field.name && typeof field.label !== "object" && typeof field.label !== "string" && field.label !== false) {
            field.label = toWords(field.name);
        }
        if (field.type === "checkbox" && typeof field.defaultValue === "undefined" && field.required === true) {
            field.defaultValue = false;
        }
        if (field.type === "relationship" || field.type === "upload") {
            var relationships = Array.isArray(field.relationTo) ? field.relationTo : [
                field.relationTo
            ];
            relationships.forEach(function(relationship) {
                if (!validRelationships.includes(relationship)) {
                    throw new InvalidFieldRelationship(field, relationship);
                }
            });
            if (field.type === "relationship") {
                if (field.min && !field.minRows) {
                    console.warn('(payload): The "min" property is deprecated for the Relationship field "'.concat(field.name, '" and will be removed in a future version. Please use "minRows" instead.'));
                }
                if (field.max && !field.maxRows) {
                    console.warn('(payload): The "max" property is deprecated for the Relationship field "'.concat(field.name, '" and will be removed in a future version. Please use "maxRows" instead.'));
                }
                field.minRows = field.minRows || field.min;
                field.maxRows = field.maxRows || field.max;
            }
        }
        if (field.type === "blocks" && field.blocks) {
            field.blocks = field.blocks.map(function(block) {
                return _object_spread_props(_object_spread({}, block), {
                    fields: block.fields.concat(baseBlockFields)
                });
            });
        }
        if (field.type === "array" && field.fields) {
            field.fields.push(baseIDField);
        }
        if ((field.type === "blocks" || field.type === "array") && field.label) {
            field.labels = field.labels || formatLabels(field.name);
        }
        if (fieldAffectsData(field)) {
            if (typeof field.validate === "undefined") {
                var defaultValidate = validations[field.type];
                if (defaultValidate) {
                    field.validate = function(val, options) {
                        return defaultValidate(val, _object_spread({}, field, options));
                    };
                } else {
                    field.validate = function() {
                        return true;
                    };
                }
            }
            if (!field.hooks) field.hooks = {};
            if (!field.access) field.access = {};
        }
        if (field.admin) {
            var _field_admin_components;
            if (field.admin.condition && ((_field_admin_components = field.admin.components) === null || _field_admin_components === void 0 ? void 0 : _field_admin_components.Field)) {
                var _field_admin_components1;
                field.admin.components.Field = withCondition((_field_admin_components1 = field.admin.components) === null || _field_admin_components1 === void 0 ? void 0 : _field_admin_components1.Field);
            }
        } else {
            field.admin = {};
        }
        if ("fields" in field && field.fields) field.fields = sanitizeFields(field.fields, validRelationships);
        if (field.type === "tabs") {
            field.tabs = field.tabs.map(function(tab) {
                var unsanitizedTab = _object_spread({}, tab);
                if (tabHasName(tab) && typeof tab.label === "undefined") {
                    unsanitizedTab.label = toWords(tab.name);
                }
                unsanitizedTab.fields = sanitizeFields(tab.fields, validRelationships);
                return unsanitizedTab;
            });
        }
        if ("blocks" in field && field.blocks) {
            field.blocks = field.blocks.map(function(block) {
                var unsanitizedBlock = _object_spread({}, block);
                unsanitizedBlock.labels = !unsanitizedBlock.labels ? formatLabels(unsanitizedBlock.slug) : unsanitizedBlock.labels;
                unsanitizedBlock.fields = sanitizeFields(block.fields, validRelationships);
                return unsanitizedBlock;
            });
        }
        return field;
    });
};
export default sanitizeFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWVsZHMvY29uZmlnL3Nhbml0aXplLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdExhYmVscywgdG9Xb3JkcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9mb3JtYXRMYWJlbHMnO1xuaW1wb3J0IHsgSW52YWxpZEZpZWxkTmFtZSwgSW52YWxpZEZpZWxkUmVsYXRpb25zaGlwLCBNaXNzaW5nRmllbGRUeXBlIH0gZnJvbSAnLi4vLi4vZXJyb3JzJztcbmltcG9ydCB7IGJhc2VCbG9ja0ZpZWxkcyB9IGZyb20gJy4uL2Jhc2VGaWVsZHMvYmFzZUJsb2NrRmllbGRzJztcbmltcG9ydCB2YWxpZGF0aW9ucyBmcm9tICcuLi92YWxpZGF0aW9ucyc7XG5pbXBvcnQgeyBiYXNlSURGaWVsZCB9IGZyb20gJy4uL2Jhc2VGaWVsZHMvYmFzZUlERmllbGQnO1xuaW1wb3J0IHsgRmllbGQsIGZpZWxkQWZmZWN0c0RhdGEsIHRhYkhhc05hbWUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL2FkbWluL2NvbXBvbmVudHMvZm9ybXMvd2l0aENvbmRpdGlvbic7XG5cbmNvbnN0IHNhbml0aXplRmllbGRzID0gKGZpZWxkczogRmllbGRbXSwgdmFsaWRSZWxhdGlvbnNoaXBzOiBzdHJpbmdbXSk6IEZpZWxkW10gPT4ge1xuICBpZiAoIWZpZWxkcykgcmV0dXJuIFtdO1xuXG4gIHJldHVybiBmaWVsZHMubWFwKCh1bnNhbml0aXplZEZpZWxkKSA9PiB7XG4gICAgY29uc3QgZmllbGQ6IEZpZWxkID0geyAuLi51bnNhbml0aXplZEZpZWxkIH07XG5cbiAgICBpZiAoIWZpZWxkLnR5cGUpIHRocm93IG5ldyBNaXNzaW5nRmllbGRUeXBlKGZpZWxkKTtcblxuICAgIC8vIGFzc2VydCB0aGF0IGZpZWxkIG5hbWVzIGRvIG5vdCBjb250YWluIGZvcmJpZGRlbiBjaGFyYWN0ZXJzXG4gICAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmIGZpZWxkLm5hbWUuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRGaWVsZE5hbWUoZmllbGQsIGZpZWxkLm5hbWUpO1xuICAgIH1cblxuICAgIC8vIEF1dG8tbGFiZWxcbiAgICBpZiAoJ25hbWUnIGluIGZpZWxkICYmIGZpZWxkLm5hbWUgJiYgdHlwZW9mIGZpZWxkLmxhYmVsICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgZmllbGQubGFiZWwgIT09ICdzdHJpbmcnICYmIGZpZWxkLmxhYmVsICE9PSBmYWxzZSkge1xuICAgICAgZmllbGQubGFiZWwgPSB0b1dvcmRzKGZpZWxkLm5hbWUpO1xuICAgIH1cblxuICAgIGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnICYmIHR5cGVvZiBmaWVsZC5kZWZhdWx0VmFsdWUgPT09ICd1bmRlZmluZWQnICYmIGZpZWxkLnJlcXVpcmVkID09PSB0cnVlKSB7XG4gICAgICBmaWVsZC5kZWZhdWx0VmFsdWUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3JlbGF0aW9uc2hpcCcgfHwgZmllbGQudHlwZSA9PT0gJ3VwbG9hZCcpIHtcbiAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcHMgPSBBcnJheS5pc0FycmF5KGZpZWxkLnJlbGF0aW9uVG8pID8gZmllbGQucmVsYXRpb25UbyA6IFtmaWVsZC5yZWxhdGlvblRvXTtcbiAgICAgIHJlbGF0aW9uc2hpcHMuZm9yRWFjaCgocmVsYXRpb25zaGlwOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKCF2YWxpZFJlbGF0aW9uc2hpcHMuaW5jbHVkZXMocmVsYXRpb25zaGlwKSkge1xuICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkRmllbGRSZWxhdGlvbnNoaXAoZmllbGQsIHJlbGF0aW9uc2hpcCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3JlbGF0aW9uc2hpcCcpIHtcbiAgICAgICAgaWYgKGZpZWxkLm1pbiAmJiAhZmllbGQubWluUm93cykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgKHBheWxvYWQpOiBUaGUgXCJtaW5cIiBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkIGZvciB0aGUgUmVsYXRpb25zaGlwIGZpZWxkIFwiJHtmaWVsZC5uYW1lfVwiIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi4gUGxlYXNlIHVzZSBcIm1pblJvd3NcIiBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZC5tYXggJiYgIWZpZWxkLm1heFJvd3MpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYChwYXlsb2FkKTogVGhlIFwibWF4XCIgcHJvcGVydHkgaXMgZGVwcmVjYXRlZCBmb3IgdGhlIFJlbGF0aW9uc2hpcCBmaWVsZCBcIiR7ZmllbGQubmFtZX1cIiBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uIFBsZWFzZSB1c2UgXCJtYXhSb3dzXCIgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBmaWVsZC5taW5Sb3dzID0gZmllbGQubWluUm93cyB8fCBmaWVsZC5taW47XG4gICAgICAgIGZpZWxkLm1heFJvd3MgPSBmaWVsZC5tYXhSb3dzIHx8IGZpZWxkLm1heDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2Jsb2NrcycgJiYgZmllbGQuYmxvY2tzKSB7XG4gICAgICBmaWVsZC5ibG9ja3MgPSBmaWVsZC5ibG9ja3MubWFwKChibG9jaykgPT4gKHsgLi4uYmxvY2ssIGZpZWxkczogYmxvY2suZmllbGRzLmNvbmNhdChiYXNlQmxvY2tGaWVsZHMpIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2FycmF5JyAmJiBmaWVsZC5maWVsZHMpIHtcbiAgICAgIGZpZWxkLmZpZWxkcy5wdXNoKGJhc2VJREZpZWxkKTtcbiAgICB9XG5cbiAgICBpZiAoKGZpZWxkLnR5cGUgPT09ICdibG9ja3MnIHx8IGZpZWxkLnR5cGUgPT09ICdhcnJheScpICYmIGZpZWxkLmxhYmVsKSB7XG4gICAgICBmaWVsZC5sYWJlbHMgPSBmaWVsZC5sYWJlbHMgfHwgZm9ybWF0TGFiZWxzKGZpZWxkLm5hbWUpO1xuICAgIH1cblxuICAgIGlmIChmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSkge1xuICAgICAgaWYgKHR5cGVvZiBmaWVsZC52YWxpZGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbGlkYXRlID0gdmFsaWRhdGlvbnNbZmllbGQudHlwZV07XG4gICAgICAgIGlmIChkZWZhdWx0VmFsaWRhdGUpIHtcbiAgICAgICAgICBmaWVsZC52YWxpZGF0ZSA9ICh2YWwsIG9wdGlvbnMpID0+IGRlZmF1bHRWYWxpZGF0ZSh2YWwsIHsgLi4uZmllbGQsIC4uLm9wdGlvbnMgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmllbGQudmFsaWRhdGUgPSAoKSA9PiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghZmllbGQuaG9va3MpIGZpZWxkLmhvb2tzID0ge307XG4gICAgICBpZiAoIWZpZWxkLmFjY2VzcykgZmllbGQuYWNjZXNzID0ge307XG4gICAgfVxuXG4gICAgaWYgKGZpZWxkLmFkbWluKSB7XG4gICAgICBpZiAoZmllbGQuYWRtaW4uY29uZGl0aW9uICYmIGZpZWxkLmFkbWluLmNvbXBvbmVudHM/LkZpZWxkKSB7XG4gICAgICAgIGZpZWxkLmFkbWluLmNvbXBvbmVudHMuRmllbGQgPSB3aXRoQ29uZGl0aW9uKGZpZWxkLmFkbWluLmNvbXBvbmVudHM/LkZpZWxkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGQuYWRtaW4gPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoJ2ZpZWxkcycgaW4gZmllbGQgJiYgZmllbGQuZmllbGRzKSBmaWVsZC5maWVsZHMgPSBzYW5pdGl6ZUZpZWxkcyhmaWVsZC5maWVsZHMsIHZhbGlkUmVsYXRpb25zaGlwcyk7XG5cbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICBmaWVsZC50YWJzID0gZmllbGQudGFicy5tYXAoKHRhYikgPT4ge1xuICAgICAgICBjb25zdCB1bnNhbml0aXplZFRhYiA9IHsgLi4udGFiIH07XG4gICAgICAgIGlmICh0YWJIYXNOYW1lKHRhYikgJiYgdHlwZW9mIHRhYi5sYWJlbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB1bnNhbml0aXplZFRhYi5sYWJlbCA9IHRvV29yZHModGFiLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHVuc2FuaXRpemVkVGFiLmZpZWxkcyA9IHNhbml0aXplRmllbGRzKHRhYi5maWVsZHMsIHZhbGlkUmVsYXRpb25zaGlwcyk7XG4gICAgICAgIHJldHVybiB1bnNhbml0aXplZFRhYjtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgnYmxvY2tzJyBpbiBmaWVsZCAmJiBmaWVsZC5ibG9ja3MpIHtcbiAgICAgIGZpZWxkLmJsb2NrcyA9IGZpZWxkLmJsb2Nrcy5tYXAoKGJsb2NrKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuc2FuaXRpemVkQmxvY2sgPSB7IC4uLmJsb2NrIH07XG4gICAgICAgIHVuc2FuaXRpemVkQmxvY2subGFiZWxzID0gIXVuc2FuaXRpemVkQmxvY2subGFiZWxzID8gZm9ybWF0TGFiZWxzKHVuc2FuaXRpemVkQmxvY2suc2x1ZykgOiB1bnNhbml0aXplZEJsb2NrLmxhYmVscztcbiAgICAgICAgdW5zYW5pdGl6ZWRCbG9jay5maWVsZHMgPSBzYW5pdGl6ZUZpZWxkcyhibG9jay5maWVsZHMsIHZhbGlkUmVsYXRpb25zaGlwcyk7XG4gICAgICAgIHJldHVybiB1bnNhbml0aXplZEJsb2NrO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNhbml0aXplRmllbGRzO1xuIl0sIm5hbWVzIjpbImZvcm1hdExhYmVscyIsInRvV29yZHMiLCJJbnZhbGlkRmllbGROYW1lIiwiSW52YWxpZEZpZWxkUmVsYXRpb25zaGlwIiwiTWlzc2luZ0ZpZWxkVHlwZSIsImJhc2VCbG9ja0ZpZWxkcyIsInZhbGlkYXRpb25zIiwiYmFzZUlERmllbGQiLCJmaWVsZEFmZmVjdHNEYXRhIiwidGFiSGFzTmFtZSIsIndpdGhDb25kaXRpb24iLCJzYW5pdGl6ZUZpZWxkcyIsImZpZWxkcyIsInZhbGlkUmVsYXRpb25zaGlwcyIsIm1hcCIsInVuc2FuaXRpemVkRmllbGQiLCJmaWVsZCIsInR5cGUiLCJuYW1lIiwiaW5jbHVkZXMiLCJsYWJlbCIsImRlZmF1bHRWYWx1ZSIsInJlcXVpcmVkIiwicmVsYXRpb25zaGlwcyIsIkFycmF5IiwiaXNBcnJheSIsInJlbGF0aW9uVG8iLCJmb3JFYWNoIiwicmVsYXRpb25zaGlwIiwibWluIiwibWluUm93cyIsImNvbnNvbGUiLCJ3YXJuIiwibWF4IiwibWF4Um93cyIsImJsb2NrcyIsImJsb2NrIiwiY29uY2F0IiwicHVzaCIsImxhYmVscyIsInZhbGlkYXRlIiwiZGVmYXVsdFZhbGlkYXRlIiwidmFsIiwib3B0aW9ucyIsImhvb2tzIiwiYWNjZXNzIiwiYWRtaW4iLCJjb25kaXRpb24iLCJjb21wb25lbnRzIiwiRmllbGQiLCJ0YWJzIiwidGFiIiwidW5zYW5pdGl6ZWRUYWIiLCJ1bnNhbml0aXplZEJsb2NrIiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFlBQVksRUFBRUMsT0FBTyxRQUFRLCtCQUErQjtBQUNyRSxTQUFTQyxnQkFBZ0IsRUFBRUMsd0JBQXdCLEVBQUVDLGdCQUFnQixRQUFRLGVBQWU7QUFDNUYsU0FBU0MsZUFBZSxRQUFRLGdDQUFnQztBQUNoRSxPQUFPQyxpQkFBaUIsaUJBQWlCO0FBQ3pDLFNBQVNDLFdBQVcs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
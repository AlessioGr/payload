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
var _formatLabels = require("../../utilities/formatLabels");
var _errors = require("../../errors");
var _baseBlockFields = require("../baseFields/baseBlockFields");
var _validations = /*#__PURE__*/ _interop_require_default(require("../validations"));
var _baseIDField = require("../baseFields/baseIDField");
var _types = require("./types");
var _withCondition = /*#__PURE__*/ _interop_require_default(require("../../admin/components/forms/withCondition"));
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
var sanitizeFields = function(fields, validRelationships) {
    if (!fields) return [];
    return fields.map(function(unsanitizedField) {
        var field = _object_spread({}, unsanitizedField);
        if (!field.type) throw new _errors.MissingFieldType(field);
        // assert that field names do not contain forbidden characters
        if ((0, _types.fieldAffectsData)(field) && field.name.includes(".")) {
            throw new _errors.InvalidFieldName(field, field.name);
        }
        // Auto-label
        if ("name" in field && field.name && typeof field.label !== "object" && typeof field.label !== "string" && field.label !== false) {
            field.label = (0, _formatLabels.toWords)(field.name);
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
                    throw new _errors.InvalidFieldRelationship(field, relationship);
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
                    fields: block.fields.concat(_baseBlockFields.baseBlockFields)
                });
            });
        }
        if (field.type === "array" && field.fields) {
            field.fields.push(_baseIDField.baseIDField);
        }
        if ((field.type === "blocks" || field.type === "array") && field.label) {
            field.labels = field.labels || (0, _formatLabels.formatLabels)(field.name);
        }
        if ((0, _types.fieldAffectsData)(field)) {
            if (typeof field.validate === "undefined") {
                var defaultValidate = _validations.default[field.type];
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
                field.admin.components.Field = (0, _withCondition.default)((_field_admin_components1 = field.admin.components) === null || _field_admin_components1 === void 0 ? void 0 : _field_admin_components1.Field);
            }
        } else {
            field.admin = {};
        }
        if ("fields" in field && field.fields) field.fields = sanitizeFields(field.fields, validRelationships);
        if (field.type === "tabs") {
            field.tabs = field.tabs.map(function(tab) {
                var unsanitizedTab = _object_spread({}, tab);
                if ((0, _types.tabHasName)(tab) && typeof tab.label === "undefined") {
                    unsanitizedTab.label = (0, _formatLabels.toWords)(tab.name);
                }
                unsanitizedTab.fields = sanitizeFields(tab.fields, validRelationships);
                return unsanitizedTab;
            });
        }
        if ("blocks" in field && field.blocks) {
            field.blocks = field.blocks.map(function(block) {
                var unsanitizedBlock = _object_spread({}, block);
                unsanitizedBlock.labels = !unsanitizedBlock.labels ? (0, _formatLabels.formatLabels)(unsanitizedBlock.slug) : unsanitizedBlock.labels;
                unsanitizedBlock.fields = sanitizeFields(block.fields, validRelationships);
                return unsanitizedBlock;
            });
        }
        return field;
    });
};
var _default = sanitizeFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWVsZHMvY29uZmlnL3Nhbml0aXplLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcm1hdExhYmVscywgdG9Xb3JkcyB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9mb3JtYXRMYWJlbHMnO1xuaW1wb3J0IHsgSW52YWxpZEZpZWxkTmFtZSwgSW52YWxpZEZpZWxkUmVsYXRpb25zaGlwLCBNaXNzaW5nRmllbGRUeXBlIH0gZnJvbSAnLi4vLi4vZXJyb3JzJztcbmltcG9ydCB7IGJhc2VCbG9ja0ZpZWxkcyB9IGZyb20gJy4uL2Jhc2VGaWVsZHMvYmFzZUJsb2NrRmllbGRzJztcbmltcG9ydCB2YWxpZGF0aW9ucyBmcm9tICcuLi92YWxpZGF0aW9ucyc7XG5pbXBvcnQgeyBiYXNlSURGaWVsZCB9IGZyb20gJy4uL2Jhc2VGaWVsZHMvYmFzZUlERmllbGQnO1xuaW1wb3J0IHsgRmllbGQsIGZpZWxkQWZmZWN0c0RhdGEsIHRhYkhhc05hbWUgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB3aXRoQ29uZGl0aW9uIGZyb20gJy4uLy4uL2FkbWluL2NvbXBvbmVudHMvZm9ybXMvd2l0aENvbmRpdGlvbic7XG5cbmNvbnN0IHNhbml0aXplRmllbGRzID0gKGZpZWxkczogRmllbGRbXSwgdmFsaWRSZWxhdGlvbnNoaXBzOiBzdHJpbmdbXSk6IEZpZWxkW10gPT4ge1xuICBpZiAoIWZpZWxkcykgcmV0dXJuIFtdO1xuXG4gIHJldHVybiBmaWVsZHMubWFwKCh1bnNhbml0aXplZEZpZWxkKSA9PiB7XG4gICAgY29uc3QgZmllbGQ6IEZpZWxkID0geyAuLi51bnNhbml0aXplZEZpZWxkIH07XG5cbiAgICBpZiAoIWZpZWxkLnR5cGUpIHRocm93IG5ldyBNaXNzaW5nRmllbGRUeXBlKGZpZWxkKTtcblxuICAgIC8vIGFzc2VydCB0aGF0IGZpZWxkIG5hbWVzIGRvIG5vdCBjb250YWluIGZvcmJpZGRlbiBjaGFyYWN0ZXJzXG4gICAgaWYgKGZpZWxkQWZmZWN0c0RhdGEoZmllbGQpICYmIGZpZWxkLm5hbWUuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgdGhyb3cgbmV3IEludmFsaWRGaWVsZE5hbWUoZmllbGQsIGZpZWxkLm5hbWUpO1xuICAgIH1cblxuICAgIC8vIEF1dG8tbGFiZWxcbiAgICBpZiAoJ25hbWUnIGluIGZpZWxkICYmIGZpZWxkLm5hbWUgJiYgdHlwZW9mIGZpZWxkLmxhYmVsICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgZmllbGQubGFiZWwgIT09ICdzdHJpbmcnICYmIGZpZWxkLmxhYmVsICE9PSBmYWxzZSkge1xuICAgICAgZmllbGQubGFiZWwgPSB0b1dvcmRzKGZpZWxkLm5hbWUpO1xuICAgIH1cblxuICAgIGlmIChmaWVsZC50eXBlID09PSAnY2hlY2tib3gnICYmIHR5cGVvZiBmaWVsZC5kZWZhdWx0VmFsdWUgPT09ICd1bmRlZmluZWQnICYmIGZpZWxkLnJlcXVpcmVkID09PSB0cnVlKSB7XG4gICAgICBmaWVsZC5kZWZhdWx0VmFsdWUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3JlbGF0aW9uc2hpcCcgfHwgZmllbGQudHlwZSA9PT0gJ3VwbG9hZCcpIHtcbiAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcHMgPSBBcnJheS5pc0FycmF5KGZpZWxkLnJlbGF0aW9uVG8pID8gZmllbGQucmVsYXRpb25UbyA6IFtmaWVsZC5yZWxhdGlvblRvXTtcbiAgICAgIHJlbGF0aW9uc2hpcHMuZm9yRWFjaCgocmVsYXRpb25zaGlwOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKCF2YWxpZFJlbGF0aW9uc2hpcHMuaW5jbHVkZXMocmVsYXRpb25zaGlwKSkge1xuICAgICAgICAgIHRocm93IG5ldyBJbnZhbGlkRmllbGRSZWxhdGlvbnNoaXAoZmllbGQsIHJlbGF0aW9uc2hpcCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3JlbGF0aW9uc2hpcCcpIHtcbiAgICAgICAgaWYgKGZpZWxkLm1pbiAmJiAhZmllbGQubWluUm93cykge1xuICAgICAgICAgIGNvbnNvbGUud2FybihgKHBheWxvYWQpOiBUaGUgXCJtaW5cIiBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkIGZvciB0aGUgUmVsYXRpb25zaGlwIGZpZWxkIFwiJHtmaWVsZC5uYW1lfVwiIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgdmVyc2lvbi4gUGxlYXNlIHVzZSBcIm1pblJvd3NcIiBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWVsZC5tYXggJiYgIWZpZWxkLm1heFJvd3MpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oYChwYXlsb2FkKTogVGhlIFwibWF4XCIgcHJvcGVydHkgaXMgZGVwcmVjYXRlZCBmb3IgdGhlIFJlbGF0aW9uc2hpcCBmaWVsZCBcIiR7ZmllbGQubmFtZX1cIiBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uIFBsZWFzZSB1c2UgXCJtYXhSb3dzXCIgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBmaWVsZC5taW5Sb3dzID0gZmllbGQubWluUm93cyB8fCBmaWVsZC5taW47XG4gICAgICAgIGZpZWxkLm1heFJvd3MgPSBmaWVsZC5tYXhSb3dzIHx8IGZpZWxkLm1heDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2Jsb2NrcycgJiYgZmllbGQuYmxvY2tzKSB7XG4gICAgICBmaWVsZC5ibG9ja3MgPSBmaWVsZC5ibG9ja3MubWFwKChibG9jaykgPT4gKHsgLi4uYmxvY2ssIGZpZWxkczogYmxvY2suZmllbGRzLmNvbmNhdChiYXNlQmxvY2tGaWVsZHMpIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2FycmF5JyAmJiBmaWVsZC5maWVsZHMpIHtcbiAgICAgIGZpZWxkLmZpZWxkcy5wdXNoKGJhc2VJREZpZWxkKTtcbiAgICB9XG5cbiAgICBpZiAoKGZpZWxkLnR5cGUgPT09ICdibG9ja3MnIHx8IGZpZWxkLnR5cGUgPT09ICdhcnJheScpICYmIGZpZWxkLmxhYmVsKSB7XG4gICAgICBmaWVsZC5sYWJlbHMgPSBmaWVsZC5sYWJlbHMgfHwgZm9ybWF0TGFiZWxzKGZpZWxkLm5hbWUpO1xuICAgIH1cblxuICAgIGlmIChmaWVsZEFmZmVjdHNEYXRhKGZpZWxkKSkge1xuICAgICAgaWYgKHR5cGVvZiBmaWVsZC52YWxpZGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbGlkYXRlID0gdmFsaWRhdGlvbnNbZmllbGQudHlwZV07XG4gICAgICAgIGlmIChkZWZhdWx0VmFsaWRhdGUpIHtcbiAgICAgICAgICBmaWVsZC52YWxpZGF0ZSA9ICh2YWwsIG9wdGlvbnMpID0+IGRlZmF1bHRWYWxpZGF0ZSh2YWwsIHsgLi4uZmllbGQsIC4uLm9wdGlvbnMgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmllbGQudmFsaWRhdGUgPSAoKSA9PiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghZmllbGQuaG9va3MpIGZpZWxkLmhvb2tzID0ge307XG4gICAgICBpZiAoIWZpZWxkLmFjY2VzcykgZmllbGQuYWNjZXNzID0ge307XG4gICAgfVxuXG4gICAgaWYgKGZpZWxkLmFkbWluKSB7XG4gICAgICBpZiAoZmllbGQuYWRtaW4uY29uZGl0aW9uICYmIGZpZWxkLmFkbWluLmNvbXBvbmVudHM/LkZpZWxkKSB7XG4gICAgICAgIGZpZWxkLmFkbWluLmNvbXBvbmVudHMuRmllbGQgPSB3aXRoQ29uZGl0aW9uKGZpZWxkLmFkbWluLmNvbXBvbmVudHM/LkZpZWxkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZmllbGQuYWRtaW4gPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoJ2ZpZWxkcycgaW4gZmllbGQgJiYgZmllbGQuZmllbGRzKSBmaWVsZC5maWVsZHMgPSBzYW5pdGl6ZUZpZWxkcyhmaWVsZC5maWVsZHMsIHZhbGlkUmVsYXRpb25zaGlwcyk7XG5cbiAgICBpZiAoZmllbGQudHlwZSA9PT0gJ3RhYnMnKSB7XG4gICAgICBmaWVsZC50YWJzID0gZmllbGQudGFicy5tYXAoKHRhYikgPT4ge1xuICAgICAgICBjb25zdCB1bnNhbml0aXplZFRhYiA9IHsgLi4udGFiIH07XG4gICAgICAgIGlmICh0YWJIYXNOYW1lKHRhYikgJiYgdHlwZW9mIHRhYi5sYWJlbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB1bnNhbml0aXplZFRhYi5sYWJlbCA9IHRvV29yZHModGFiLm5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHVuc2FuaXRpemVkVGFiLmZpZWxkcyA9IHNhbml0aXplRmllbGRzKHRhYi5maWVsZHMsIHZhbGlkUmVsYXRpb25zaGlwcyk7XG4gICAgICAgIHJldHVybiB1bnNhbml0aXplZFRhYjtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgnYmxvY2tzJyBpbiBmaWVsZCAmJiBmaWVsZC5ibG9ja3MpIHtcbiAgICAgIGZpZWxkLmJsb2NrcyA9IGZpZWxkLmJsb2Nrcy5tYXAoKGJsb2NrKSA9PiB7XG4gICAgICAgIGNvbnN0IHVuc2FuaXRpemVkQmxvY2sgPSB7IC4uLmJsb2NrIH07XG4gICAgICAgIHVuc2FuaXRpemVkQmxvY2subGFiZWxzID0gIXVuc2FuaXRpemVkQmxvY2subGFiZWxzID8gZm9ybWF0TGFiZWxzKHVuc2FuaXRpemVkQmxvY2suc2x1ZykgOiB1bnNhbml0aXplZEJsb2NrLmxhYmVscztcbiAgICAgICAgdW5zYW5pdGl6ZWRCbG9jay5maWVsZHMgPSBzYW5pdGl6ZUZpZWxkcyhibG9jay5maWVsZHMsIHZhbGlkUmVsYXRpb25zaGlwcyk7XG4gICAgICAgIHJldHVybiB1bnNhbml0aXplZEJsb2NrO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNhbml0aXplRmllbGRzO1xuIl0sIm5hbWVzIjpbInNhbml0aXplRmllbGRzIiwiZmllbGRzIiwidmFsaWRSZWxhdGlvbnNoaXBzIiwibWFwIiwidW5zYW5pdGl6ZWRGaWVsZCIsImZpZWxkIiwidHlwZSIsIk1pc3NpbmdGaWVsZFR5cGUiLCJmaWVsZEFmZmVjdHNEYXRhIiwibmFtZSIsImluY2x1ZGVzIiwiSW52YWxpZEZpZWxkTmFtZSIsImxhYmVsIiwidG9Xb3JkcyIsImRlZmF1bHRWYWx1ZSIsInJlcXVpcmVkIiwicmVsYXRpb25zaGlwcyIsIkFycmF5IiwiaXNBcnJheSIsInJlbGF0aW9uVG8iLCJmb3JFYWNoIiwicmVsYXRpb25zaGlwIiwiSW52YWxpZEZpZWxkUmVsYXRpb25zaGlwIiwibWluIiwibWluUm93cyIsImNvbnNvbGUiLCJ3YXJuIiwibWF4IiwibWF4Um93cyIsImJsb2NrcyIsImJsb2NrIiwiY29uY2F0IiwiYmFzZUJsb2NrRmllbGRzIiwicHVzaCIsImJhc2VJREZpZWxkIiwibGFiZWxzIiwiZm9ybWF0TGFiZWxzIiwidmFsaWRhdGUiLCJkZWZhdWx0VmFsaWRhdGUiLCJ2YWxpZGF0aW9ucyIsInZhbCIsIm9wdGlvbnMiLCJob29rcyIsImFjY2VzcyIsImFkbWluIiwiY29uZGl0aW9uIiwiY29tcG9uZW50cyIsIkZpZWxkIiwid2l0aENvbmRpdGlvbiIsInRhYnMiLCJ0YWIiLCJ1bnNhbml0aXplZFRhYiIsInRhYkhhc05hbWUiLCJ1bnNhbml0aXplZEJsb2NrIiwic2x1ZyJdLCJtYXBwaW5ncyI6Ijs7OzsrQkE4R0E7OztlQUFBOzs7NEJBOUdzQztzQkFDdUM7K0JBQzdDO2tFQUNSOzJCQUNJO3FCQUN3QjtvRUFDMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsaUJBQWlCLFNBQUNDLFFBQWlCQztJQUN2QyxJQUFJLENBQUNELFFBQVEsT0FBTyxFQUFFO0lBRXRCLE9BQU9BLE9BQU9FLEdBQUcsQ0FBQyxT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
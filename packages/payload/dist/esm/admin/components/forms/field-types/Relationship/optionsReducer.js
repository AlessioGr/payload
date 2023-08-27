function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import { getTranslation } from "../../../../../utilities/getTranslation";
import { formatUseAsTitle } from "../../../../hooks/useTitle";
var reduceToIDs = function(options) {
    return options.reduce(function(ids, option) {
        if (option.options) {
            return _to_consumable_array(ids).concat(_to_consumable_array(reduceToIDs(option.options)));
        }
        return _to_consumable_array(ids).concat([
            option.value
        ]);
    }, []);
};
var sortOptions = function(options) {
    return options.sort(function(a, b) {
        var _a_label, _a, _b_label, _b;
        if (typeof ((_a = a) === null || _a === void 0 ? void 0 : (_a_label = _a.label) === null || _a_label === void 0 ? void 0 : _a_label.localeCompare) === "function" && typeof ((_b = b) === null || _b === void 0 ? void 0 : (_b_label = _b.label) === null || _b_label === void 0 ? void 0 : _b_label.localeCompare) === "function") {
            return a.label.localeCompare(b.label);
        }
        return 0;
    });
};
var optionsReducer = function(state, action) {
    switch(action.type){
        case "CLEAR":
            {
                return [];
            }
        case "UPDATE":
            {
                var _foundOptionGroup_options, _foundOptionGroup;
                var collection = action.collection, doc = action.doc, i18n = action.i18n, config = action.config;
                var relation = collection.slug;
                var newOptions = _to_consumable_array(state);
                var docTitle = formatUseAsTitle({
                    doc: doc,
                    collection: collection,
                    i18n: i18n,
                    config: config
                });
                var foundOptionGroup = newOptions.find(function(optionGroup) {
                    return optionGroup.label === collection.labels.plural;
                });
                var foundOption = (_foundOptionGroup = foundOptionGroup) === null || _foundOptionGroup === void 0 ? void 0 : (_foundOptionGroup_options = _foundOptionGroup.options) === null || _foundOptionGroup_options === void 0 ? void 0 : _foundOptionGroup_options.find(function(option) {
                    return option.value === doc.id;
                });
                if (foundOption) {
                    foundOption.label = docTitle || "".concat(i18n.t("general:untitled"), " - ID: ").concat(doc.id);
                    foundOption.relationTo = relation;
                }
                return newOptions;
            }
        case "ADD":
            {
                var collection1 = action.collection, docs = action.docs, sort = action.sort, _action_ids = action.ids, ids = _action_ids === void 0 ? [] : _action_ids, i18n1 = action.i18n, config1 = action.config;
                var relation1 = collection1.slug;
                var loadedIDs = reduceToIDs(state);
                var newOptions1 = _to_consumable_array(state);
                var optionsToAddTo = newOptions1.find(function(optionGroup) {
                    return optionGroup.label === collection1.labels.plural;
                });
                var newSubOptions = docs.reduce(function(docSubOptions, doc) {
                    if (loadedIDs.indexOf(doc.id) === -1) {
                        loadedIDs.push(doc.id);
                        var docTitle = formatUseAsTitle({
                            doc: doc,
                            collection: collection1,
                            i18n: i18n1,
                            config: config1
                        });
                        return _to_consumable_array(docSubOptions).concat([
                            {
                                label: docTitle || "".concat(i18n1.t("general:untitled"), " - ID: ").concat(doc.id),
                                relationTo: relation1,
                                value: doc.id
                            }
                        ]);
                    }
                    return docSubOptions;
                }, []);
                ids.forEach(function(id) {
                    if (!loadedIDs.includes(id)) {
                        newSubOptions.push({
                            relationTo: relation1,
                            label: "".concat(i18n1.t("general:untitled"), " - ID: ").concat(id),
                            value: id
                        });
                    }
                });
                if (optionsToAddTo) {
                    var subOptions = _to_consumable_array(optionsToAddTo.options).concat(_to_consumable_array(newSubOptions));
                    optionsToAddTo.options = sort ? sortOptions(subOptions) : subOptions;
                } else {
                    newOptions1.push({
                        label: getTranslation(collection1.labels.plural, i18n1),
                        options: sort ? sortOptions(newSubOptions) : newSubOptions
                    });
                }
                return newOptions1;
            }
        default:
            {
                return state;
            }
    }
};
export default optionsReducer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9vcHRpb25zUmVkdWNlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHRpb24sIEFjdGlvbiwgT3B0aW9uR3JvdXAgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGdldFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vdXRpbGl0aWVzL2dldFRyYW5zbGF0aW9uJztcbmltcG9ydCB7IGZvcm1hdFVzZUFzVGl0bGUgfSBmcm9tICcuLi8uLi8uLi8uLi9ob29rcy91c2VUaXRsZSc7XG5cbmNvbnN0IHJlZHVjZVRvSURzID0gKG9wdGlvbnMpID0+IG9wdGlvbnMucmVkdWNlKChpZHMsIG9wdGlvbikgPT4ge1xuICBpZiAob3B0aW9uLm9wdGlvbnMpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uaWRzLFxuICAgICAgLi4ucmVkdWNlVG9JRHMob3B0aW9uLm9wdGlvbnMpLFxuICAgIF07XG4gIH1cblxuICByZXR1cm4gW1xuICAgIC4uLmlkcyxcbiAgICBvcHRpb24udmFsdWUsXG4gIF07XG59LCBbXSk7XG5cbmNvbnN0IHNvcnRPcHRpb25zID0gKG9wdGlvbnM6IE9wdGlvbltdKTogT3B0aW9uW10gPT4gb3B0aW9ucy5zb3J0KChhOiBPcHRpb24sIGI6IE9wdGlvbikgPT4ge1xuICBpZiAodHlwZW9mIGE/LmxhYmVsPy5sb2NhbGVDb21wYXJlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBiPy5sYWJlbD8ubG9jYWxlQ29tcGFyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBhLmxhYmVsLmxvY2FsZUNvbXBhcmUoYi5sYWJlbCk7XG4gIH1cblxuICByZXR1cm4gMDtcbn0pO1xuXG5jb25zdCBvcHRpb25zUmVkdWNlciA9IChzdGF0ZTogT3B0aW9uR3JvdXBbXSwgYWN0aW9uOiBBY3Rpb24pOiBPcHRpb25Hcm91cFtdID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0NMRUFSJzoge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNhc2UgJ1VQREFURSc6IHtcbiAgICAgIGNvbnN0IHsgY29sbGVjdGlvbiwgZG9jLCBpMThuLCBjb25maWcgfSA9IGFjdGlvbjtcbiAgICAgIGNvbnN0IHJlbGF0aW9uID0gY29sbGVjdGlvbi5zbHVnO1xuICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IFsuLi5zdGF0ZV07XG5cbiAgICAgIGNvbnN0IGRvY1RpdGxlID0gZm9ybWF0VXNlQXNUaXRsZSh7XG4gICAgICAgIGRvYyxcbiAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgaTE4bixcbiAgICAgICAgY29uZmlnLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGZvdW5kT3B0aW9uR3JvdXAgPSBuZXdPcHRpb25zLmZpbmQoKG9wdGlvbkdyb3VwKSA9PiBvcHRpb25Hcm91cC5sYWJlbCA9PT0gY29sbGVjdGlvbi5sYWJlbHMucGx1cmFsKTtcbiAgICAgIGNvbnN0IGZvdW5kT3B0aW9uID0gZm91bmRPcHRpb25Hcm91cD8ub3B0aW9ucz8uZmluZCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09IGRvYy5pZCk7XG5cbiAgICAgIGlmIChmb3VuZE9wdGlvbikge1xuICAgICAgICBmb3VuZE9wdGlvbi5sYWJlbCA9IGRvY1RpdGxlIHx8IGAke2kxOG4udCgnZ2VuZXJhbDp1bnRpdGxlZCcpfSAtIElEOiAke2RvYy5pZH1gO1xuICAgICAgICBmb3VuZE9wdGlvbi5yZWxhdGlvblRvID0gcmVsYXRpb247XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdPcHRpb25zO1xuICAgIH1cblxuICAgIGNhc2UgJ0FERCc6IHtcbiAgICAgIGNvbnN0IHsgY29sbGVjdGlvbiwgZG9jcywgc29ydCwgaWRzID0gW10sIGkxOG4sIGNvbmZpZyB9ID0gYWN0aW9uO1xuICAgICAgY29uc3QgcmVsYXRpb24gPSBjb2xsZWN0aW9uLnNsdWc7XG4gICAgICBjb25zdCBsb2FkZWRJRHMgPSByZWR1Y2VUb0lEcyhzdGF0ZSk7XG4gICAgICBjb25zdCBuZXdPcHRpb25zID0gWy4uLnN0YXRlXTtcbiAgICAgIGNvbnN0IG9wdGlvbnNUb0FkZFRvID0gbmV3T3B0aW9ucy5maW5kKChvcHRpb25Hcm91cCkgPT4gb3B0aW9uR3JvdXAubGFiZWwgPT09IGNvbGxlY3Rpb24ubGFiZWxzLnBsdXJhbCk7XG5cbiAgICAgIGNvbnN0IG5ld1N1Yk9wdGlvbnMgPSBkb2NzLnJlZHVjZSgoZG9jU3ViT3B0aW9ucywgZG9jKSA9PiB7XG4gICAgICAgIGlmIChsb2FkZWRJRHMuaW5kZXhPZihkb2MuaWQpID09PSAtMSkge1xuICAgICAgICAgIGxvYWRlZElEcy5wdXNoKGRvYy5pZCk7XG5cbiAgICAgICAgICBjb25zdCBkb2NUaXRsZSA9IGZvcm1hdFVzZUFzVGl0bGUoe1xuICAgICAgICAgICAgZG9jLFxuICAgICAgICAgICAgY29sbGVjdGlvbixcbiAgICAgICAgICAgIGkxOG4sXG4gICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4uZG9jU3ViT3B0aW9ucyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbGFiZWw6IGRvY1RpdGxlIHx8IGAke2kxOG4udCgnZ2VuZXJhbDp1bnRpdGxlZCcpfSAtIElEOiAke2RvYy5pZH1gLFxuICAgICAgICAgICAgICByZWxhdGlvblRvOiByZWxhdGlvbixcbiAgICAgICAgICAgICAgdmFsdWU6IGRvYy5pZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkb2NTdWJPcHRpb25zO1xuICAgICAgfSwgW10pO1xuXG4gICAgICBpZHMuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgaWYgKCFsb2FkZWRJRHMuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgbmV3U3ViT3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgIHJlbGF0aW9uVG86IHJlbGF0aW9uLFxuICAgICAgICAgICAgbGFiZWw6IGAke2kxOG4udCgnZ2VuZXJhbDp1bnRpdGxlZCcpfSAtIElEOiAke2lkfWAsXG4gICAgICAgICAgICB2YWx1ZTogaWQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAob3B0aW9uc1RvQWRkVG8pIHtcbiAgICAgICAgY29uc3Qgc3ViT3B0aW9ucyA9IFtcbiAgICAgICAgICAuLi5vcHRpb25zVG9BZGRUby5vcHRpb25zLFxuICAgICAgICAgIC4uLm5ld1N1Yk9wdGlvbnMsXG4gICAgICAgIF07XG5cbiAgICAgICAgb3B0aW9uc1RvQWRkVG8ub3B0aW9ucyA9IHNvcnQgPyBzb3J0T3B0aW9ucyhzdWJPcHRpb25zKSA6IHN1Yk9wdGlvbnM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPcHRpb25zLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiBnZXRUcmFuc2xhdGlvbihjb2xsZWN0aW9uLmxhYmVscy5wbHVyYWwsIGkxOG4pLFxuICAgICAgICAgIG9wdGlvbnM6IHNvcnQgPyBzb3J0T3B0aW9ucyhuZXdTdWJPcHRpb25zKSA6IG5ld1N1Yk9wdGlvbnMsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3T3B0aW9ucztcbiAgICB9XG5cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9wdGlvbnNSZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImdldFRyYW5zbGF0aW9uIiwiZm9ybWF0VXNlQXNUaXRsZSIsInJlZHVjZVRvSURzIiwib3B0aW9ucyIsInJlZHVjZSIsImlkcyIsIm9wdGlvbiIsInZhbHVlIiwic29ydE9wdGlvbnMiLCJzb3J0IiwiYSIsImIiLCJsYWJlbCIsImxvY2FsZUNvbXBhcmUiLCJvcHRpb25zUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImZvdW5kT3B0aW9uR3JvdXAiLCJjb2xsZWN0aW9uIiwiZG9jIiwiaTE4biIsImNvbmZpZyIsInJlbGF0aW9uIiwic2x1ZyIsIm5ld09wdGlvbnMiLCJkb2NUaXRsZSIsImZpbmQiLCJvcHRpb25Hcm91cCIsImxhYmVscyIsInBsdXJhbCIsImZvdW5kT3B0aW9uIiwiaWQiLCJ0IiwicmVsYXRpb25UbyIsImRvY3MiLCJsb2FkZWRJRHMiLCJvcHRpb25zVG9BZGRUbyIsIm5ld1N1Yk9wdGlvbnMiLCJkb2NTdWJPcHRpb25zIiwiaW5kZXhPZiIsInB1c2giLCJmb3JFYWNoIiwiaW5jbHVkZXMiLCJzdWJPcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsU0FBU0EsY0FBYyxRQUFRLDBDQUEwQztBQUN6RSxTQUFTQyxnQkFBZ0IsUUFBUSw2QkFBNkI7QUFFOUQsSUFBTUMsY0FBYyxTQUFDQztXQUFZQSxRQUFRQyxNQUFNLENBQUMsU0FBQ0MsS0FBS0M7UUFDcEQsSUFBSUEsT0FBT0gsT0FBTyxFQUFFO1lBQ2xCLE9BQU8sQUFDTCxxQkFBR0UsWUFDSCxxQkFBR0gsWUFBWUksT0FBT0gsT0FBTztRQUVqQztRQUVBLE9BQU8sQUFDTCxxQkFBR0UsWUFERTtZQUVMQyxPQUFPQyxLQUFLO1NBQ2I7SUFDSCxHQUFHLEVBQUU7O0FBRUwsSUFBTUMsY0FBYyxTQUFDTDtXQUFnQ0EsUUFBUU0sSUFBSSxDQUFDLFNBQUNDLEdBQVdDO1lBQ2pFRCxVQUFBQSxJQUFpREMsVUFBQUE7UUFBNUQsSUFBSSxTQUFPRCxLQUFBQSxlQUFBQSwwQkFBQUEsV0FBQUEsR0FBR0UsS0FBSyxjQUFSRiwrQkFBQUEsU0FBVUcsYUFBYSxNQUFLLGNBQWMsU0FBT0YsS0FBQUEsZUFBQUEsMEJBQUFBLFdBQUFBLEdBQUdDLEtBQUssY0FBUkQsK0JBQUFBLFNBQVVFLGFBQWEsTUFBSyxZQUFZO1lBQ2xHLE9BQU9I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
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
import { getTranslation } from "../../../../../../utilities/getTranslation";
var reduceToIDs = function(options) {
    return options.reduce(function(ids, option) {
        if (option.options) {
            return _to_consumable_array(ids).concat(_to_consumable_array(reduceToIDs(option.options)));
        }
        return _to_consumable_array(ids).concat([
            option.id
        ]);
    }, []);
};
var optionsReducer = function(state, action) {
    switch(action.type){
        case "CLEAR":
            {
                return action.required ? [] : [
                    {
                        value: "null",
                        label: action.i18n.t("general:none")
                    }
                ];
            }
        case "ADD":
            {
                var hasMultipleRelations = action.hasMultipleRelations, collection = action.collection, relation = action.relation, data = action.data, i18n = action.i18n;
                var labelKey = collection.admin.useAsTitle || "id";
                var loadedIDs = reduceToIDs(state);
                if (!hasMultipleRelations) {
                    return _to_consumable_array(state).concat(_to_consumable_array(data.docs.reduce(function(docs, doc) {
                        if (loadedIDs.indexOf(doc.id) === -1) {
                            loadedIDs.push(doc.id);
                            return _to_consumable_array(docs).concat([
                                {
                                    label: doc[labelKey],
                                    value: doc.id
                                }
                            ]);
                        }
                        return docs;
                    }, [])));
                }
                var newOptions = _to_consumable_array(state);
                var optionsToAddTo = newOptions.find(function(optionGroup) {
                    return optionGroup.label === getTranslation(collection.labels.plural, i18n);
                });
                var newSubOptions = data.docs.reduce(function(docs, doc) {
                    if (loadedIDs.indexOf(doc.id) === -1) {
                        loadedIDs.push(doc.id);
                        return _to_consumable_array(docs).concat([
                            {
                                label: doc[labelKey],
                                relationTo: relation,
                                value: doc.id
                            }
                        ]);
                    }
                    return docs;
                }, []);
                if (optionsToAddTo) {
                    optionsToAddTo.options = _to_consumable_array(optionsToAddTo.options).concat(_to_consumable_array(newSubOptions));
                } else {
                    newOptions.push({
                        label: getTranslation(collection.labels.plural, i18n),
                        options: newSubOptions,
                        value: undefined
                    });
                }
                return newOptions;
            }
        default:
            {
                return state;
            }
    }
};
export default optionsReducer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci9Db25kaXRpb24vUmVsYXRpb25zaGlwL29wdGlvbnNSZWR1Y2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbiwgQWN0aW9uIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5cbmNvbnN0IHJlZHVjZVRvSURzID0gKG9wdGlvbnMpID0+IG9wdGlvbnMucmVkdWNlKChpZHMsIG9wdGlvbikgPT4ge1xuICBpZiAob3B0aW9uLm9wdGlvbnMpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLi4uaWRzLFxuICAgICAgLi4ucmVkdWNlVG9JRHMob3B0aW9uLm9wdGlvbnMpLFxuICAgIF07XG4gIH1cblxuICByZXR1cm4gW1xuICAgIC4uLmlkcyxcbiAgICBvcHRpb24uaWQsXG4gIF07XG59LCBbXSk7XG5cbmNvbnN0IG9wdGlvbnNSZWR1Y2VyID0gKHN0YXRlOiBPcHRpb25bXSwgYWN0aW9uOiBBY3Rpb24pOiBPcHRpb25bXSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdDTEVBUic6IHtcbiAgICAgIHJldHVybiBhY3Rpb24ucmVxdWlyZWQgPyBbXSA6IFt7IHZhbHVlOiAnbnVsbCcsIGxhYmVsOiBhY3Rpb24uaTE4bi50KCdnZW5lcmFsOm5vbmUnKSB9XTtcbiAgICB9XG5cbiAgICBjYXNlICdBREQnOiB7XG4gICAgICBjb25zdCB7IGhhc011bHRpcGxlUmVsYXRpb25zLCBjb2xsZWN0aW9uLCByZWxhdGlvbiwgZGF0YSwgaTE4biB9ID0gYWN0aW9uO1xuXG4gICAgICBjb25zdCBsYWJlbEtleSA9IGNvbGxlY3Rpb24uYWRtaW4udXNlQXNUaXRsZSB8fCAnaWQnO1xuXG4gICAgICBjb25zdCBsb2FkZWRJRHMgPSByZWR1Y2VUb0lEcyhzdGF0ZSk7XG5cbiAgICAgIGlmICghaGFzTXVsdGlwbGVSZWxhdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAuLi5kYXRhLmRvY3MucmVkdWNlKChkb2NzLCBkb2MpID0+IHtcbiAgICAgICAgICAgIGlmIChsb2FkZWRJRHMuaW5kZXhPZihkb2MuaWQpID09PSAtMSkge1xuICAgICAgICAgICAgICBsb2FkZWRJRHMucHVzaChkb2MuaWQpO1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIC4uLmRvY3MsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6IGRvY1tsYWJlbEtleV0sXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogZG9jLmlkLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZG9jcztcbiAgICAgICAgICB9LCBbXSksXG4gICAgICAgIF07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld09wdGlvbnMgPSBbLi4uc3RhdGVdO1xuICAgICAgY29uc3Qgb3B0aW9uc1RvQWRkVG8gPSBuZXdPcHRpb25zLmZpbmQoKG9wdGlvbkdyb3VwKSA9PiBvcHRpb25Hcm91cC5sYWJlbCA9PT0gZ2V0VHJhbnNsYXRpb24oY29sbGVjdGlvbi5sYWJlbHMucGx1cmFsLCBpMThuKSk7XG5cbiAgICAgIGNvbnN0IG5ld1N1Yk9wdGlvbnMgPSBkYXRhLmRvY3MucmVkdWNlKChkb2NzLCBkb2MpID0+IHtcbiAgICAgICAgaWYgKGxvYWRlZElEcy5pbmRleE9mKGRvYy5pZCkgPT09IC0xKSB7XG4gICAgICAgICAgbG9hZGVkSURzLnB1c2goZG9jLmlkKTtcblxuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi5kb2NzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBsYWJlbDogZG9jW2xhYmVsS2V5XSxcbiAgICAgICAgICAgICAgcmVsYXRpb25UbzogcmVsYXRpb24sXG4gICAgICAgICAgICAgIHZhbHVlOiBkb2MuaWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZG9jcztcbiAgICAgIH0sIFtdKTtcblxuICAgICAgaWYgKG9wdGlvbnNUb0FkZFRvKSB7XG4gICAgICAgIG9wdGlvbnNUb0FkZFRvLm9wdGlvbnMgPSBbXG4gICAgICAgICAgLi4ub3B0aW9uc1RvQWRkVG8ub3B0aW9ucyxcbiAgICAgICAgICAuLi5uZXdTdWJPcHRpb25zLFxuICAgICAgICBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICBsYWJlbDogZ2V0VHJhbnNsYXRpb24oY29sbGVjdGlvbi5sYWJlbHMucGx1cmFsLCBpMThuKSxcbiAgICAgICAgICBvcHRpb25zOiBuZXdTdWJPcHRpb25zLFxuICAgICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3T3B0aW9ucztcbiAgICB9XG5cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9wdGlvbnNSZWR1Y2VyO1xuIl0sIm5hbWVzIjpbImdldFRyYW5zbGF0aW9uIiwicmVkdWNlVG9JRHMiLCJvcHRpb25zIiwicmVkdWNlIiwiaWRzIiwib3B0aW9uIiwiaWQiLCJvcHRpb25zUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInJlcXVpcmVkIiwidmFsdWUiLCJsYWJlbCIsImkxOG4iLCJ0IiwiaGFzTXVsdGlwbGVSZWxhdGlvbnMiLCJjb2xsZWN0aW9uIiwicmVsYXRpb24iLCJkYXRhIiwibGFiZWxLZXkiLCJhZG1pbiIsInVzZUFzVGl0bGUiLCJsb2FkZWRJRHMiLCJkb2NzIiwiZG9jIiwiaW5kZXhPZiIsInB1c2giLCJuZXdPcHRpb25zIiwib3B0aW9uc1RvQWRkVG8iLCJmaW5kIiwib3B0aW9uR3JvdXAiLCJsYWJlbHMiLCJwbHVyYWwiLCJuZXdTdWJPcHRpb25zIiwicmVsYXRpb25UbyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLFNBQVNBLGNBQWMsUUFBUSw2Q0FBNkM7QUFFNUUsSUFBTUMsY0FBYyxTQUFDQztXQUFZQSxRQUFRQyxNQUFNLENBQUMsU0FBQ0MsS0FBS0M7UUFDcEQsSUFBSUEsT0FBT0gsT0FBTyxFQUFFO1lBQ2xCLE9BQU8sQUFDTCxxQkFBR0UsWUFDSCxxQkFBR0gsWUFBWUksT0FBT0gsT0FBTztRQUVqQztRQUVBLE9BQU8sQUFDTCxxQkFBR0UsWUFERTtZQUVMQyxPQUFPQyxFQUFFO1NBQ1Y7SUFDSCxHQUFHLEVBQUU7O0FBRUwsSUFBTUMsaUJBQWlCLFNBQUNDLE9BQWlCQztJQUN2QyxPQUFRQSxPQUFPQyxJQUFJO1FBQ2pCLEtBQUs7WUFBUztnQkFDWixPQUFPRCxPQUFPRSxRQUFRLEdBQUcsRUFBRSxHQUFHO29CQUFDO3dCQUFFQyxPQUFPO3dCQUFRQyxPQUFPSixPQUFPSyxJQUFJLENBQUNDLENBQUMsQ0FBQztvQkFBZ0I7aUJBQUU7WUFDekY7UUFFQSxLQUFLO1lBQU87Z0JBQ1YsSUFBUUMsdUJBQTJEUCxPQUEzRE8sc0JBQXNCQyxhQUFxQ1IsT0FBckNRLFlBQVlDLFdBQXlCVCxPQUF6QlMsVUFBVUMsT0FBZVYsT0FBZlUsTUFBTUwsT0FBU0wsT0FBVEs7Z0JBRTFELElBQU1NLFdBQVdILFdBQVdJLEtBQUssQ0FBQ0MsVUFBVSxJQUFJO2dCQUVoRCxJQUFNQyxZQUFZdEIsWUFBWU87Z0JBRTlCLElBQUksQ0FBQ1Esc0JBQXNCO29CQUN6QixPQUFPLEFBQ0wscUJBQUdSLGNBQ0gscUJBQUdXLEtBQUtLLElBQUksQ0FBQ3JCLE1BQU0sQ0FBQyxTQUFDcUIsTUFBTUM7d0JBQ3pCLElBQUlGLFVBQVVHLE9BQU8sQ0FBQ0QsSUFBSW5CLEVBQUUsTUFBTSxDQUFDLEdBQUc7NEJBQ3BDaUIsVUFBVUksSUFBSSxDQUFDRixJQUFJbkIsRUFBRTs0QkFDckIsT0FBTyxBQUNMLHFCQUFHa0IsYUFERTtnQ0FFTDtvQ0FDRVgsT0FBT1ksR0FBRyxDQUFDTCxTQUFTO29DQUNwQlIsT0FBT2EsSUFBSW5CLEVBQUU7Z0NBQ2Y7NkJBQ0Q7d0JBQ0g7d0JBQ0EsT0FBT2tCO29CQUNULEdBQUcsRUFBRTtnQkFFVDtnQkFFQSxJQUFNSSxhQUFjLHFCQUFHcEI7Z0JBQ3ZCLElBQU1xQixpQkFBaUJELFdBQVdFLElBQUksQ0FBQyxTQUFDQzsyQkFBZ0JBLFlBQVlsQixLQUFLLEtBQUtiLGVBQWVpQixXQUFXZSxNQUFNLENBQUNDLE1BQU0sRUFBRW5COztnQkFFdkgsSUFBTW9CLGdCQUFnQmYsS0FBS0ssSUFBSSxDQUFDckIsTUFBTSxDQUFDLFNBQUNxQixNQUFNQztvQkFDNUMsSUFBSUYsVUFBVUcsT0FBTyxDQUFDRCxJQUFJbkIsRUFBRSxNQUFNLENBQUMsR0FBRzt3QkFDcENpQixVQUFVSSxJQUFJLENBQUNGLElBQUluQixFQUFFO3dCQUVyQixPQUFPLEFBQ0wscUJBQUdrQixhQURFOzRCQUVMO2dDQUNFWCxPQUFPWSxHQUFHLENBQUNMLFNBQVM7Z0NBQ3BCZSxZQUFZakI7Z0NBQ1pOLE9BQU9hLElBQUluQixFQUFFOzRCQUNmO3lCQUNEO29CQUNIO29CQUVBLE9BQU9rQjtnQkFDVCxHQUFHLEVBQUU7Z0JBRUwsSUFBSUssZ0JBQWdCO29CQUNsQkEsZUFBZTNCLE9BQU8sR0FBRyxBQUN2QixxQkFBRzJCLGVBQWUzQixPQUFPLFNBQ3pCLHFCQUFHZ0M7Z0JBRVAsT0FBTztvQkFDTE4sV0FBV0QsSUFBSSxDQUFDO3dCQUNkZCxPQUFPYixlQUFlaUIsV0FBV2UsTUFBTSxDQUFDQyxNQUFNLEVBQUVuQjt3QkFDaERaLFNBQVNnQzt3QkFDVHRCLE9BQU93QjtvQkFDVDtnQkFDRjtnQkFFQSxPQUFPUjtZQUNUO1FBR0E7WUFBUztnQkFDUCxPQUFPcEI7WUFDVDtJQUNGO0FBQ0Y7QUFFQSxlQUFlRCxlQUFlIn0=
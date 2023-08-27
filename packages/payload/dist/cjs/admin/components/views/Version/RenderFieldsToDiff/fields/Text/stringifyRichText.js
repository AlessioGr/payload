"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "stringifyRichText", {
    enumerable: true,
    get: function() {
        return stringifyRichText;
    }
});
var _slate = require("slate");
var stringifyRichText = function(content) {
    if (Array.isArray(content)) {
        return content.reduce(function(output, node) {
            var isTextNode = _slate.Text.isText(node);
            var text = node.text;
            if (isTextNode) {
                var _text;
                // convert straight single quotations to curly
                // "\u201C" is starting double curly
                // "\u201D" is ending double curly
                var sanitizedText = (_text = text) === null || _text === void 0 ? void 0 : _text.replace(/'/g, "’"); // single quotes
                return "".concat(output).concat(sanitizedText);
            }
            if (node) {
                var nodeHTML;
                switch(node.type){
                    case "h1":
                    case "h2":
                    case "h3":
                    case "h4":
                    case "h5":
                    case "h6":
                    case "li":
                    case "p":
                    case undefined:
                        nodeHTML = "".concat(stringifyRichText(node.children), "\n");
                        break;
                    case "ul":
                    case "ol":
                        nodeHTML = "".concat(stringifyRichText(node.children), "\n\n");
                        break;
                    case "link":
                        nodeHTML = "".concat(stringifyRichText(node.children));
                        break;
                    case "relationship":
                        var _node_value, _node;
                        nodeHTML = "Relationship to ".concat(node.relationTo, ": ").concat((_node = node) === null || _node === void 0 ? void 0 : (_node_value = _node.value) === null || _node_value === void 0 ? void 0 : _node_value.id, "\n\n");
                        break;
                    case "upload":
                        var _node_value1, _node1;
                        nodeHTML = "".concat(node.relationTo, " Upload: ").concat((_node1 = node) === null || _node1 === void 0 ? void 0 : (_node_value1 = _node1.value) === null || _node_value1 === void 0 ? void 0 : _node_value1.id, "\n\n");
                        break;
                    default:
                        nodeHTML = "".concat(node.type, ": ").concat(JSON.stringify(node), "\n\n");
                        break;
                }
                return "".concat(output).concat(nodeHTML);
            }
            return output;
        }, "");
    }
    return "";
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVuZGVyRmllbGRzVG9EaWZmL2ZpZWxkcy9UZXh0L3N0cmluZ2lmeVJpY2hUZXh0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHQgfSBmcm9tICdzbGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBzdHJpbmdpZnlSaWNoVGV4dCA9IChjb250ZW50OiB1bmtub3duKTogc3RyaW5nID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudCkpIHtcbiAgICByZXR1cm4gY29udGVudC5yZWR1Y2UoKG91dHB1dCwgbm9kZSkgPT4ge1xuICAgICAgY29uc3QgaXNUZXh0Tm9kZSA9IFRleHQuaXNUZXh0KG5vZGUpO1xuXG4gICAgICBjb25zdCB7XG4gICAgICAgIHRleHQsXG4gICAgICB9ID0gbm9kZTtcblxuICAgICAgaWYgKGlzVGV4dE5vZGUpIHtcbiAgICAgICAgLy8gY29udmVydCBzdHJhaWdodCBzaW5nbGUgcXVvdGF0aW9ucyB0byBjdXJseVxuICAgICAgICAvLyBcIlxcdTIwMUNcIiBpcyBzdGFydGluZyBkb3VibGUgY3VybHlcbiAgICAgICAgLy8gXCJcXHUyMDFEXCIgaXMgZW5kaW5nIGRvdWJsZSBjdXJseVxuICAgICAgICBjb25zdCBzYW5pdGl6ZWRUZXh0ID0gdGV4dD8ucmVwbGFjZSgvJy9nLCAnXFx1MjAxOScpOyAvLyBzaW5nbGUgcXVvdGVzXG4gICAgICAgIHJldHVybiBgJHtvdXRwdXR9JHtzYW5pdGl6ZWRUZXh0fWA7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIGxldCBub2RlSFRNTDtcbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdoMSc6XG4gICAgICAgICAgY2FzZSAnaDInOlxuICAgICAgICAgIGNhc2UgJ2gzJzpcbiAgICAgICAgICBjYXNlICdoNCc6XG4gICAgICAgICAgY2FzZSAnaDUnOlxuICAgICAgICAgIGNhc2UgJ2g2JzpcbiAgICAgICAgICBjYXNlICdsaSc6XG4gICAgICAgICAgY2FzZSAncCc6XG4gICAgICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgICAgICBub2RlSFRNTCA9IGAke3N0cmluZ2lmeVJpY2hUZXh0KG5vZGUuY2hpbGRyZW4pfVxcbmA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3VsJzpcbiAgICAgICAgICBjYXNlICdvbCc6XG4gICAgICAgICAgICBub2RlSFRNTCA9IGAke3N0cmluZ2lmeVJpY2hUZXh0KG5vZGUuY2hpbGRyZW4pfVxcblxcbmA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2xpbmsnOlxuICAgICAgICAgICAgbm9kZUhUTUwgPSBgJHtzdHJpbmdpZnlSaWNoVGV4dChub2RlLmNoaWxkcmVuKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdyZWxhdGlvbnNoaXAnOlxuICAgICAgICAgICAgbm9kZUhUTUwgPSBgUmVsYXRpb25zaGlwIHRvICR7bm9kZS5yZWxhdGlvblRvfTogJHtub2RlPy52YWx1ZT8uaWR9XFxuXFxuYDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAndXBsb2FkJzpcbiAgICAgICAgICAgIG5vZGVIVE1MID0gYCR7bm9kZS5yZWxhdGlvblRvfSBVcGxvYWQ6ICR7bm9kZT8udmFsdWU/LmlkfVxcblxcbmA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBub2RlSFRNTCA9IGAke25vZGUudHlwZX06ICR7SlNPTi5zdHJpbmdpZnkobm9kZSl9XFxuXFxuYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke291dHB1dH0ke25vZGVIVE1MfWA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSwgJycpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufTtcbiJdLCJuYW1lcyI6WyJzdHJpbmdpZnlSaWNoVGV4dCIsImNvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJyZWR1Y2UiLCJvdXRwdXQiLCJub2RlIiwiaXNUZXh0Tm9kZSIsIlRleHQiLCJpc1RleHQiLCJ0ZXh0Iiwic2FuaXRpemVkVGV4dCIsInJlcGxhY2UiLCJub2RlSFRNTCIsInR5cGUiLCJ1bmRlZmluZWQiLCJjaGlsZHJlbiIsInJlbGF0aW9uVG8iLCJ2YWx1ZSIsImlkIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7OzsrQkFFYUE7OztlQUFBQTs7O3FCQUZRO0FBRWQsSUFBTUEsb0JBQW9CLFNBQUNDO0lBQ2hDLElBQUlDLE1BQU1DLE9BQU8sQ0FBQ0YsVUFBVTtRQUMxQixPQUFPQSxRQUFRRyxNQUFNLENBQUMsU0FBQ0MsUUFBUUM7WUFDN0IsSUFBTUMsYUFBYUMsV0FBSSxDQUFDQyxNQUFNLENBQUNIO1lBRS9CLElBQU0sQUFDSkksT0FDRUosS0FERkk7WUFHRixJQUFJSCxZQUFZO29CQUlRRztnQkFIdEIsOENBQThDO2dCQUM5QyxvQ0FBb0M7Z0JBQ3BDLGtDQUFrQztnQkFDbEMsSUFBTUMsaUJBQWdCRCxRQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU1FLE9BQU8sQ0FBQyxNQUFNLE1BQVcsZ0JBQWdCO2dCQUNyRSxPQUFPLEFBQUMsR0FBV0QsT0FBVE4sUUFBdUIsT0FBZE07WUFDckI7WUFFQSxJQUFJTCxNQUFNO2dCQUNSLElBQUlPO2dCQUNKLE9BQVFQLEtBQUtRLElBQUk7b0JBQ2YsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUtDO3dCQUNIRixXQUFXLEFBQUMsR0FBbUMsT0FBakNiLGtCQUFrQk0sS0FBS1UsUUFBUSxHQUFFO3dCQUMvQztvQkFFRixLQUFLO29CQUNMLEtBQUs7d0JBQ0hILFdBQVcsQUFBQyxHQUFtQyxPQUFqQ2Isa0JBQWtCTSxLQUFLVSxRQUFRLEdBQUU7d0JBQy9DO29CQUVGLEtBQUs7d0JBQ0hILFdBQVcsQUFBQyxHQUFtQyxPQUFqQ2Isa0JBQWtCTSxLQUFLVSxRQUFRO3dCQUM3QztvQkFFRixLQUFLOzRCQUMrQ1YsYUFBQUE7d0JBQWxETyxXQUFXLEFBNUN2QixBQTRDd0IsMEJBQWtCUCxLQUFLVyxVQUFVLEVBQUMsTUFBb0IsUUFBaEJYLFFBQUFBLGtCQUFBQSw2QkFBQUEsY0FBQUEsTUFBTVksS0FBSyxjQUFYWixrQ0FBQUEsWUFBYWEsRUFBRSxFQUFDO3dCQUNsRTtvQkFFRixLQUFLOzRCQUNzQ2IsY0FBQUE7d0JBQXpDTyxXQUFXLEFBaER2QixBQWdEd0IsVUFBRVAsS0FBS1csVUFBVSxFQUFDLGFBQTJCLFFBQWhCWCxTQUFBQSxrQkFBQUEsOEJBQUFBLGVBQUFBLE9BQU1ZLEtBQUssY0FBWFosbUNBQUFBLGFBQWFhLEVBQUUsRUFBQzt3QkFDekQ7b0JBRUY7d0JBQ0VOLFdBQVcsQUFBQyxHQUFnQk8sT0FBZGQsS0FBS1EsSUFBSSxFQUFDLE1BQXlCLE9BQXJCTSxLQUFLQyxTQUFTLENBQUNmLE9BQU07d0JBQ2pEO2dCQUNKO2dCQUVBLE9BQU8sQUFBQyxHQUFXTyxPQUFUUixRQUFrQixPQUFUUTtZQUNyQjtZQUVBLE9BQU9SO1FBQ1QsR0FBRztJQUNMO0lBRUEsT0FBTztBQUNUIn0=
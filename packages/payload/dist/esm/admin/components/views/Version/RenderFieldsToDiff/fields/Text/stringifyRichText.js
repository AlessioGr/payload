import { Text } from "slate";
export var stringifyRichText = function(content) {
    if (Array.isArray(content)) {
        return content.reduce(function(output, node) {
            var isTextNode = Text.isText(node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVuZGVyRmllbGRzVG9EaWZmL2ZpZWxkcy9UZXh0L3N0cmluZ2lmeVJpY2hUZXh0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHQgfSBmcm9tICdzbGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBzdHJpbmdpZnlSaWNoVGV4dCA9IChjb250ZW50OiB1bmtub3duKTogc3RyaW5nID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudCkpIHtcbiAgICByZXR1cm4gY29udGVudC5yZWR1Y2UoKG91dHB1dCwgbm9kZSkgPT4ge1xuICAgICAgY29uc3QgaXNUZXh0Tm9kZSA9IFRleHQuaXNUZXh0KG5vZGUpO1xuXG4gICAgICBjb25zdCB7XG4gICAgICAgIHRleHQsXG4gICAgICB9ID0gbm9kZTtcblxuICAgICAgaWYgKGlzVGV4dE5vZGUpIHtcbiAgICAgICAgLy8gY29udmVydCBzdHJhaWdodCBzaW5nbGUgcXVvdGF0aW9ucyB0byBjdXJseVxuICAgICAgICAvLyBcIlxcdTIwMUNcIiBpcyBzdGFydGluZyBkb3VibGUgY3VybHlcbiAgICAgICAgLy8gXCJcXHUyMDFEXCIgaXMgZW5kaW5nIGRvdWJsZSBjdXJseVxuICAgICAgICBjb25zdCBzYW5pdGl6ZWRUZXh0ID0gdGV4dD8ucmVwbGFjZSgvJy9nLCAnXFx1MjAxOScpOyAvLyBzaW5nbGUgcXVvdGVzXG4gICAgICAgIHJldHVybiBgJHtvdXRwdXR9JHtzYW5pdGl6ZWRUZXh0fWA7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlKSB7XG4gICAgICAgIGxldCBub2RlSFRNTDtcbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICBjYXNlICdoMSc6XG4gICAgICAgICAgY2FzZSAnaDInOlxuICAgICAgICAgIGNhc2UgJ2gzJzpcbiAgICAgICAgICBjYXNlICdoNCc6XG4gICAgICAgICAgY2FzZSAnaDUnOlxuICAgICAgICAgIGNhc2UgJ2g2JzpcbiAgICAgICAgICBjYXNlICdsaSc6XG4gICAgICAgICAgY2FzZSAncCc6XG4gICAgICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgICAgICBub2RlSFRNTCA9IGAke3N0cmluZ2lmeVJpY2hUZXh0KG5vZGUuY2hpbGRyZW4pfVxcbmA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3VsJzpcbiAgICAgICAgICBjYXNlICdvbCc6XG4gICAgICAgICAgICBub2RlSFRNTCA9IGAke3N0cmluZ2lmeVJpY2hUZXh0KG5vZGUuY2hpbGRyZW4pfVxcblxcbmA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2xpbmsnOlxuICAgICAgICAgICAgbm9kZUhUTUwgPSBgJHtzdHJpbmdpZnlSaWNoVGV4dChub2RlLmNoaWxkcmVuKX1gO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdyZWxhdGlvbnNoaXAnOlxuICAgICAgICAgICAgbm9kZUhUTUwgPSBgUmVsYXRpb25zaGlwIHRvICR7bm9kZS5yZWxhdGlvblRvfTogJHtub2RlPy52YWx1ZT8uaWR9XFxuXFxuYDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAndXBsb2FkJzpcbiAgICAgICAgICAgIG5vZGVIVE1MID0gYCR7bm9kZS5yZWxhdGlvblRvfSBVcGxvYWQ6ICR7bm9kZT8udmFsdWU/LmlkfVxcblxcbmA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBub2RlSFRNTCA9IGAke25vZGUudHlwZX06ICR7SlNPTi5zdHJpbmdpZnkobm9kZSl9XFxuXFxuYDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke291dHB1dH0ke25vZGVIVE1MfWA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSwgJycpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufTtcbiJdLCJuYW1lcyI6WyJUZXh0Iiwic3RyaW5naWZ5UmljaFRleHQiLCJjb250ZW50IiwiQXJyYXkiLCJpc0FycmF5IiwicmVkdWNlIiwib3V0cHV0Iiwibm9kZSIsImlzVGV4dE5vZGUiLCJpc1RleHQiLCJ0ZXh0Iiwic2FuaXRpemVkVGV4dCIsInJlcGxhY2UiLCJub2RlSFRNTCIsInR5cGUiLCJ1bmRlZmluZWQiLCJjaGlsZHJlbiIsInJlbGF0aW9uVG8iLCJ2YWx1ZSIsImlkIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsSUFBSSxRQUFRLFFBQVE7QUFFN0IsT0FBTyxJQUFNQyxvQkFBb0IsU0FBQ0M7SUFDaEMsSUFBSUMsTUFBTUMsT0FBTyxDQUFDRixVQUFVO1FBQzFCLE9BQU9BLFFBQVFHLE1BQU0sQ0FBQyxTQUFDQyxRQUFRQztZQUM3QixJQUFNQyxhQUFhUixLQUFLUyxNQUFNLENBQUNGO1lBRS9CLElBQU0sQUFDSkcsT0FDRUgsS0FERkc7WUFHRixJQUFJRixZQUFZO29CQUlRRTtnQkFIdEIsOENBQThDO2dCQUM5QyxvQ0FBb0M7Z0JBQ3BDLGtDQUFrQztnQkFDbEMsSUFBTUMsaUJBQWdCRCxRQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU1FLE9BQU8sQ0FBQyxNQUFNLE1BQVcsZ0JBQWdCO2dCQUNyRSxPQUFPLEFBQUMsR0FBV0QsT0FBVEwsUUFBdUIsT0FBZEs7WUFDckI7WUFFQSxJQUFJSixNQUFNO2dCQUNSLElBQUlNO2dCQUNKLE9BQVFOLEtBQUtPLElBQUk7b0JBQ2YsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO29CQUNMLEtBQUtDO3dCQUNIRixXQUFXLEFBQUMsR0FBbUMsT0FBakNaLGtCQUFrQk0sS0FBS1MsUUFBUSxHQUFFO3dCQUMvQztvQkFFRixLQUFLO29CQUNMLEtBQUs7d0JBQ0hILFdBQVcsQUFBQyxHQUFtQyxPQUFqQ1osa0JBQWtCTSxLQUFLUyxRQUFRLEdBQUU7d0JBQy9DO29CQUVGLEtBQUs7d0JBQ0hILFdBQVcsQUFBQyxHQUFtQyxPQUFqQ1osa0JBQWtCTSxLQUFLUyxRQUFRO3dCQUM3QztvQkFFRixLQUFLOzRCQUMrQ1QsYUFBQUE7d0JBQWxETSxXQUFXLEFBNUN2QixBQTRDd0IsMEJBQWtCTixLQUFLVSxVQUFVLEVBQUMsTUFBb0IsUUFBaEJWLFFBQUFBLGtCQUFBQSw2QkFBQUEsY0FBQUEsTUFBTVcsS0FBSyxjQUFYWCxrQ0FBQUEsWUFBYVksRUFBRSxFQUFDO3dCQUNsRTtvQkFFRixLQUFLOzRCQUNzQ1osY0FBQUE7d0JBQXpDTSxXQUFXLEFBaER2QixBQWdEd0IsVUFBRU4sS0FBS1UsVUFBVSxFQUFDLGFBQTJCLFFBQWhCVixTQUFBQSxrQkFBQUEsOEJBQUFBLGVBQUFBLE9BQU1XLEtBQUssY0FBWFgsbUNBQUFBLGFBQWFZLEVBQUUsRUFBQzt3QkFDekQ7b0JBRUY7d0JBQ0VOLFdBQVcsQUFBQyxHQUFnQk8sT0FBZGIsS0FBS08sSUFBSSxFQUFDLE1BQXlCLE9BQXJCTSxLQUFLQyxTQUFTLENBQUNkLE9BQU07d0JBQ2pEO2dCQUNKO2dCQUVBLE9BQU8sQUFBQyxHQUFXTSxPQUFUUCxRQUFrQixPQUFUTztZQUNyQjtZQUVBLE9BQU9QO1FBQ1QsR0FBRztJQUNMO0lBRUEsT0FBTztBQUNULEVBQUUifQ==
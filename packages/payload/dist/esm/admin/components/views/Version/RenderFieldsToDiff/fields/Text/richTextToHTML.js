import { Text } from "slate";
export var richTextToHTML = function(content) {
    if (Array.isArray(content)) {
        return content.reduce(function(output, node) {
            var isTextNode = Text.isText(node);
            var text = node.text, bold = node.bold, code = node.code, italic = node.italic, underline = node.underline, strikethrough = node.strikethrough;
            if (isTextNode) {
                var _text;
                // convert straight single quotations to curly
                // "\u201C" is starting double curly
                // "\u201D" is ending double curly
                var html = (_text = text) === null || _text === void 0 ? void 0 : _text.replace(/'/g, "’"); // single quotes
                if (bold) {
                    html = "<strong>".concat(html, "</strong>");
                }
                if (code) {
                    html = "<code>".concat(html, "</code>");
                }
                if (italic) {
                    html = "<em>".concat(html, "</em>");
                }
                if (underline) {
                    html = '<span style="text-decoration: underline;">'.concat(html, "</span>");
                }
                if (strikethrough) {
                    html = '<span style="text-decoration: line-through;">'.concat(html, "</span>");
                }
                return "".concat(output).concat(html);
            }
            if (node) {
                var nodeHTML;
                switch(node.type){
                    case "h1":
                        nodeHTML = "<h1>".concat(richTextToHTML(node.children), "</h1>");
                        break;
                    case "h2":
                        nodeHTML = "<h2>".concat(richTextToHTML(node.children), "</h2>");
                        break;
                    case "h3":
                        nodeHTML = "<h3>".concat(richTextToHTML(node.children), "</h3>");
                        break;
                    case "h4":
                        nodeHTML = "<h4>".concat(richTextToHTML(node.children), "</h4>");
                        break;
                    case "h5":
                        nodeHTML = "<h5>".concat(richTextToHTML(node.children), "</h5>");
                        break;
                    case "h6":
                        nodeHTML = "<h6>".concat(richTextToHTML(node.children), "</h6>");
                        break;
                    case "blockquote":
                        nodeHTML = "<blockquote>".concat(richTextToHTML(node.children), "</blockquote>");
                        break;
                    case "ul":
                        nodeHTML = "<ul>".concat(richTextToHTML(node.children), "</ul>");
                        break;
                    case "ol":
                        nodeHTML = "<ol>".concat(richTextToHTML(node.children), "</ol>");
                        break;
                    case "li":
                        nodeHTML = "<li>".concat(richTextToHTML(node.children), "</li>");
                        break;
                    case "link":
                        nodeHTML = '<a href="'.concat(node.url, '">').concat(richTextToHTML(node.children), "</a>");
                        break;
                    case "relationship":
                        nodeHTML = "<strong>Relationship to ".concat(node.relationTo, ": ").concat(node.value, "</strong><br/>");
                        break;
                    case "upload":
                        nodeHTML = "<strong>".concat(node.relationTo, " Upload: ").concat(node.value, "</strong><br/>");
                        break;
                    case "p":
                    case undefined:
                        nodeHTML = "<p>".concat(richTextToHTML(node.children), "</p>");
                        break;
                    default:
                        nodeHTML = "<strong>".concat(node.type, "</strong>:<br/>").concat(JSON.stringify(node));
                        break;
                }
                return "".concat(output).concat(nodeHTML, "\n");
            }
            return output;
        }, "");
    }
    return "";
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vUmVuZGVyRmllbGRzVG9EaWZmL2ZpZWxkcy9UZXh0L3JpY2hUZXh0VG9IVE1MLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHQgfSBmcm9tICdzbGF0ZSc7XG5cbmV4cG9ydCBjb25zdCByaWNoVGV4dFRvSFRNTCA9IChjb250ZW50OiB1bmtub3duKTogc3RyaW5nID0+IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY29udGVudCkpIHtcbiAgICByZXR1cm4gY29udGVudC5yZWR1Y2UoKG91dHB1dCwgbm9kZSkgPT4ge1xuICAgICAgY29uc3QgaXNUZXh0Tm9kZSA9IFRleHQuaXNUZXh0KG5vZGUpO1xuXG4gICAgICBjb25zdCB7XG4gICAgICAgIHRleHQsXG4gICAgICAgIGJvbGQsXG4gICAgICAgIGNvZGUsXG4gICAgICAgIGl0YWxpYyxcbiAgICAgICAgdW5kZXJsaW5lLFxuICAgICAgICBzdHJpa2V0aHJvdWdoLFxuICAgICAgfSA9IG5vZGU7XG5cbiAgICAgIGlmIChpc1RleHROb2RlKSB7XG4gICAgICAgIC8vIGNvbnZlcnQgc3RyYWlnaHQgc2luZ2xlIHF1b3RhdGlvbnMgdG8gY3VybHlcbiAgICAgICAgLy8gXCJcXHUyMDFDXCIgaXMgc3RhcnRpbmcgZG91YmxlIGN1cmx5XG4gICAgICAgIC8vIFwiXFx1MjAxRFwiIGlzIGVuZGluZyBkb3VibGUgY3VybHlcbiAgICAgICAgbGV0IGh0bWwgPSB0ZXh0Py5yZXBsYWNlKC8nL2csICdcXHUyMDE5Jyk7IC8vIHNpbmdsZSBxdW90ZXNcblxuICAgICAgICBpZiAoYm9sZCkge1xuICAgICAgICAgIGh0bWwgPSBgPHN0cm9uZz4ke2h0bWx9PC9zdHJvbmc+YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2RlKSB7XG4gICAgICAgICAgaHRtbCA9IGA8Y29kZT4ke2h0bWx9PC9jb2RlPmA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXRhbGljKSB7XG4gICAgICAgICAgaHRtbCA9IGA8ZW0+JHtodG1sfTwvZW0+YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1bmRlcmxpbmUpIHtcbiAgICAgICAgICBodG1sID0gYDxzcGFuIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XCI+JHtodG1sfTwvc3Bhbj5gO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0cmlrZXRocm91Z2gpIHtcbiAgICAgICAgICBodG1sID0gYDxzcGFuIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XCI+JHtodG1sfTwvc3Bhbj5gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke291dHB1dH0ke2h0bWx9YDtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgbGV0IG5vZGVIVE1MO1xuICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2gxJzpcbiAgICAgICAgICAgIG5vZGVIVE1MID0gYDxoMT4ke3JpY2hUZXh0VG9IVE1MKG5vZGUuY2hpbGRyZW4pfTwvaDE+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnaDInOlxuICAgICAgICAgICAgbm9kZUhUTUwgPSBgPGgyPiR7cmljaFRleHRUb0hUTUwobm9kZS5jaGlsZHJlbil9PC9oMj5gO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdoMyc6XG4gICAgICAgICAgICBub2RlSFRNTCA9IGA8aDM+JHtyaWNoVGV4dFRvSFRNTChub2RlLmNoaWxkcmVuKX08L2gzPmA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2g0JzpcbiAgICAgICAgICAgIG5vZGVIVE1MID0gYDxoND4ke3JpY2hUZXh0VG9IVE1MKG5vZGUuY2hpbGRyZW4pfTwvaDQ+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnaDUnOlxuICAgICAgICAgICAgbm9kZUhUTUwgPSBgPGg1PiR7cmljaFRleHRUb0hUTUwobm9kZS5jaGlsZHJlbil9PC9oNT5gO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdoNic6XG4gICAgICAgICAgICBub2RlSFRNTCA9IGA8aDY+JHtyaWNoVGV4dFRvSFRNTChub2RlLmNoaWxkcmVuKX08L2g2PmA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2Jsb2NrcXVvdGUnOlxuICAgICAgICAgICAgbm9kZUhUTUwgPSBgPGJsb2NrcXVvdGU+JHtyaWNoVGV4dFRvSFRNTChub2RlLmNoaWxkcmVuKX08L2Jsb2NrcXVvdGU+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAndWwnOlxuICAgICAgICAgICAgbm9kZUhUTUwgPSBgPHVsPiR7cmljaFRleHRUb0hUTUwobm9kZS5jaGlsZHJlbil9PC91bD5gO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdvbCc6XG4gICAgICAgICAgICBub2RlSFRNTCA9IGA8b2w+JHtyaWNoVGV4dFRvSFRNTChub2RlLmNoaWxkcmVuKX08L29sPmA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ2xpJzpcbiAgICAgICAgICAgIG5vZGVIVE1MID0gYDxsaT4ke3JpY2hUZXh0VG9IVE1MKG5vZGUuY2hpbGRyZW4pfTwvbGk+YDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAnbGluayc6XG4gICAgICAgICAgICBub2RlSFRNTCA9IGA8YSBocmVmPVwiJHtub2RlLnVybH1cIj4ke3JpY2hUZXh0VG9IVE1MKG5vZGUuY2hpbGRyZW4pfTwvYT5gO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdyZWxhdGlvbnNoaXAnOlxuICAgICAgICAgICAgbm9kZUhUTUwgPSBgPHN0cm9uZz5SZWxhdGlvbnNoaXAgdG8gJHtub2RlLnJlbGF0aW9uVG99OiAke25vZGUudmFsdWV9PC9zdHJvbmc+PGJyLz5gO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICd1cGxvYWQnOlxuICAgICAgICAgICAgbm9kZUhUTUwgPSBgPHN0cm9uZz4ke25vZGUucmVsYXRpb25Ub30gVXBsb2FkOiAke25vZGUudmFsdWV9PC9zdHJvbmc+PGJyLz5gO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICdwJzpcbiAgICAgICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgICAgIG5vZGVIVE1MID0gYDxwPiR7cmljaFRleHRUb0hUTUwobm9kZS5jaGlsZHJlbil9PC9wPmA7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBub2RlSFRNTCA9IGA8c3Ryb25nPiR7bm9kZS50eXBlfTwvc3Ryb25nPjo8YnIvPiR7SlNPTi5zdHJpbmdpZnkobm9kZSl9YDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke291dHB1dH0ke25vZGVIVE1MfVxcbmA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSwgJycpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufTtcbiJdLCJuYW1lcyI6WyJUZXh0IiwicmljaFRleHRUb0hUTUwiLCJjb250ZW50IiwiQXJyYXkiLCJpc0FycmF5IiwicmVkdWNlIiwib3V0cHV0Iiwibm9kZSIsImlzVGV4dE5vZGUiLCJpc1RleHQiLCJ0ZXh0IiwiYm9sZCIsImNvZGUiLCJpdGFsaWMiLCJ1bmRlcmxpbmUiLCJzdHJpa2V0aHJvdWdoIiwiaHRtbCIsInJlcGxhY2UiLCJub2RlSFRNTCIsInR5cGUiLCJjaGlsZHJlbiIsInVybCIsInJlbGF0aW9uVG8iLCJ2YWx1ZSIsInVuZGVmaW5lZCIsIkpTT04iLCJzdHJpbmdp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
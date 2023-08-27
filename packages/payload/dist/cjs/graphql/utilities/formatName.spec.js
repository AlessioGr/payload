/* eslint-disable indent */ /* eslint-disable jest/prefer-strict-equal */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _formatName = /*#__PURE__*/ _interop_require_default(require("./formatName"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n    char   | expected\n    ",
        " | ",
        "\n    ",
        " | ",
        "\n    ",
        " | ",
        "\n    ",
        " | ",
        "\n    ",
        " | ",
        "\n    ",
        " | ",
        "\n    ",
        " | ",
        "\n  "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
describe("formatName", function() {
    it.each(_templateObject(), "\xe1", "a", "\xe8", "e", "\xed", "i", "\xf3", "o", "\xfa", "u", "\xf1", "n", "\xfc", "u")("should convert accented character: $char", function(param) {
        var char = param.char, expected = param.expected;
        expect((0, _formatName.default)(char)).toEqual(expected);
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ncmFwaHFsL3V0aWxpdGllcy9mb3JtYXROYW1lLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBqZXN0L3ByZWZlci1zdHJpY3QtZXF1YWwgKi9cbmltcG9ydCBmb3JtYXROYW1lIGZyb20gJy4vZm9ybWF0TmFtZSc7XG5cbmRlc2NyaWJlKCdmb3JtYXROYW1lJywgKCkgPT4ge1xuICBpdC5lYWNoYFxuICAgIGNoYXIgICB8IGV4cGVjdGVkXG4gICAgJHsnw6EnfSB8ICR7J2EnfVxuICAgICR7J8OoJ30gfCAkeydlJ31cbiAgICAkeyfDrSd9IHwgJHsnaSd9XG4gICAgJHsnw7MnfSB8ICR7J28nfVxuICAgICR7J8O6J30gfCAkeyd1J31cbiAgICAkeyfDsSd9IHwgJHsnbid9XG4gICAgJHsnw7wnfSB8ICR7J3UnfVxuICBgKCdzaG91bGQgY29udmVydCBhY2NlbnRlZCBjaGFyYWN0ZXI6ICRjaGFyJywgKHsgY2hhciwgZXhwZWN0ZWQgfSkgPT4ge1xuICAgIGV4cGVjdChmb3JtYXROYW1lKGNoYXIpKS50b0VxdWFsKGV4cGVjdGVkKTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiZWFjaCIsImNoYXIiLCJleHBlY3RlZCIsImV4cGVjdCIsImZvcm1hdE5hbWUiLCJ0b0VxdWFsIl0sIm1hcHBpbmdzIjoiQUFBQSx5QkFBeUIsR0FDekIsMkNBQTJDOzs7O2lFQUNwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXZCQSxTQUFTLGNBQWM7SUFDckJDLEdBQUdDLElBQUksb0JBRUgsUUFBUyxLQUNULFFBQVMsS0FDVCxRQUFTLEtBQ1QsUUFBUyxLQUNULFFBQVMsS0FDVCxRQUFTLEtBQ1QsUUFBUyxLQUNYLDRDQUE0QztZQUFHQyxhQUFBQSxNQUFNQyxpQkFBQUE7UUFDckRDLE9BQU9DLElBQUFBLG1CQUFVLEVBQUNILE9BQU9JLE9BQU8sQ0FBQ0g7SUFDbkM7QUFDRiJ9
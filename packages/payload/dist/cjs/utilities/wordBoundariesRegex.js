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
var _default = function(input) {
    var words = input.split(" ");
    // Regex word boundaries that work for cyrillic characters - https://stackoverflow.com/a/47062016/1717697
    var wordBoundaryBefore = "(?:(?:[^\\p{L}\\p{N}])|^)"; // Converted to a non-matching group instead of positive lookbehind for Safari
    var wordBoundaryAfter = "(?=[^\\p{L}\\p{N}]|$)";
    var regex = words.reduce(function(pattern, word, i) {
        var escapedWord = word.replace(/[\\^$*+?\\.()|[\]{}]/g, "\\$&");
        return "".concat(pattern, "(?=.*").concat(wordBoundaryBefore, ".*").concat(escapedWord, ".*").concat(wordBoundaryAfter, ")").concat(i + 1 === words.length ? ".+" : "");
    }, "");
    return new RegExp(regex, "i");
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvd29yZEJvdW5kYXJpZXNSZWdleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoaW5wdXQ6IHN0cmluZyk6IFJlZ0V4cCA9PiB7XG4gIGNvbnN0IHdvcmRzID0gaW5wdXQuc3BsaXQoJyAnKTtcblxuICAvLyBSZWdleCB3b3JkIGJvdW5kYXJpZXMgdGhhdCB3b3JrIGZvciBjeXJpbGxpYyBjaGFyYWN0ZXJzIC0gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ3MDYyMDE2LzE3MTc2OTdcbiAgY29uc3Qgd29yZEJvdW5kYXJ5QmVmb3JlID0gJyg/Oig/OlteXFxcXHB7TH1cXFxccHtOfV0pfF4pJzsgLy8gQ29udmVydGVkIHRvIGEgbm9uLW1hdGNoaW5nIGdyb3VwIGluc3RlYWQgb2YgcG9zaXRpdmUgbG9va2JlaGluZCBmb3IgU2FmYXJpXG4gIGNvbnN0IHdvcmRCb3VuZGFyeUFmdGVyID0gJyg/PVteXFxcXHB7TH1cXFxccHtOfV18JCknO1xuICBjb25zdCByZWdleCA9IHdvcmRzLnJlZHVjZSgocGF0dGVybiwgd29yZCwgaSkgPT4ge1xuICAgIGNvbnN0IGVzY2FwZWRXb3JkID0gd29yZC5yZXBsYWNlKC9bXFxcXF4kKis/XFxcXC4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcbiAgICByZXR1cm4gYCR7cGF0dGVybn0oPz0uKiR7d29yZEJvdW5kYXJ5QmVmb3JlfS4qJHtlc2NhcGVkV29yZH0uKiR7d29yZEJvdW5kYXJ5QWZ0ZXJ9KSR7aSArIDEgPT09IHdvcmRzLmxlbmd0aCA/ICcuKycgOiAnJ31gO1xuICB9LCAnJyk7XG4gIHJldHVybiBuZXcgUmVnRXhwKHJlZ2V4LCAnaScpO1xufTtcbiJdLCJuYW1lcyI6WyJpbnB1dCIsIndvcmRzIiwic3BsaXQiLCJ3b3JkQm91bmRhcnlCZWZvcmUiLCJ3b3JkQm91bmRhcnlBZnRlciIsInJlZ2V4IiwicmVkdWNlIiwicGF0dGVybiIsIndvcmQiLCJpIiwiZXNjYXBlZFdvcmQiLCJyZXBsYWNlIiwibGVuZ3RoIiwiUmVnRXhwIl0sIm1hcHBpbmdzIjoiOzs7OytCQUFBOzs7ZUFBQTs7O0lBQUEsV0FBZSxTQUFDQTtJQUNkLElBQU1DLFFBQVFELE1BQU1FLEtBQUssQ0FBQztJQUUxQix5R0FBeUc7SUFDekcsSUFBTUMscUJBQXFCLDZCQUE2Qiw4RUFBOEU7SUFDdEksSUFBTUMsb0JBQW9CO0lBQzFCLElBQU1DLFFBQVFKLE1BQU1LLE1BQU0sQ0FBQyxTQUFDQyxTQUFTQyxNQUFNQztRQUN6QyxJQUFNQyxjQUFjRixLQUFLRyxPQUFPLENBQUMseUJBQXlCO1FBQzFELE9BQU8sQUFBQyxHQUFpQlIsT0FBZkksU0FBUSxTQUE4QkcsT0FBdkJQLG9CQUFtQixNQUFvQkMsT0FBaEJNLGFBQVksTUFBeUJELE9BQXJCTCxtQkFBa0IsS0FBc0MsT0FBbkNLLElBQUksTUFBTVIsTUFBTVcsTUFBTSxHQUFHLE9BQU87SUFDdkgsR0FBRztJQUNILE9BQU8sSUFBSUMsT0FBT1IsT0FBTztBQUMzQiJ9
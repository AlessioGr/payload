/**
  Turns: 'arrayField.0.group123field.arrayField.0.textField'

  Into: ['arrayField', '0', 'group123field.arrayField', '0', 'textField']
*/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "splitPathByArrayFields", {
    enumerable: true,
    get: function() {
        return splitPathByArrayFields;
    }
});
function splitPathByArrayFields(str) {
    var regex = /\.(\d+)\./g;
    return str.split(regex).filter(Boolean);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvc3BsaXRQYXRoQnlBcnJheUZpZWxkcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAgVHVybnM6ICdhcnJheUZpZWxkLjAuZ3JvdXAxMjNmaWVsZC5hcnJheUZpZWxkLjAudGV4dEZpZWxkJ1xuXG4gIEludG86IFsnYXJyYXlGaWVsZCcsICcwJywgJ2dyb3VwMTIzZmllbGQuYXJyYXlGaWVsZCcsICcwJywgJ3RleHRGaWVsZCddXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHNwbGl0UGF0aEJ5QXJyYXlGaWVsZHMoc3RyOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHJlZ2V4ID0gL1xcLihcXGQrKVxcLi9nO1xuICByZXR1cm4gc3RyLnNwbGl0KHJlZ2V4KS5maWx0ZXIoQm9vbGVhbik7XG59XG4iXSwibmFtZXMiOlsic3BsaXRQYXRoQnlBcnJheUZpZWxkcyIsInN0ciIsInJlZ2V4Iiwic3BsaXQiLCJmaWx0ZXIiLCJCb29sZWFuIl0sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUlBOzs7OytCQUNnQkE7OztlQUFBQTs7O0FBQVQsU0FBU0EsdUJBQXVCQyxHQUFXO0lBQ2hELElBQU1DLFFBQVE7SUFDZCxPQUFPRCxJQUFJRSxLQUFLLENBQUNELE9BQU9FLE1BQU0sQ0FBQ0M7QUFDakMifQ==
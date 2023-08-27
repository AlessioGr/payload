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
var bindCollectionMiddleware = function(collection) {
    return function(req, res, next) {
        req.collection = collection;
        next();
    };
};
var _default = bindCollectionMiddleware;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9iaW5kQ29sbGVjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBDb2xsZWN0aW9uIH0gZnJvbSAnLi9jb25maWcvdHlwZXMnO1xuXG5jb25zdCBiaW5kQ29sbGVjdGlvbk1pZGRsZXdhcmUgPSAoY29sbGVjdGlvbjogQ29sbGVjdGlvbikgPT4gKHJlcTogUmVxdWVzdCAmIHsgY29sbGVjdGlvbjogQ29sbGVjdGlvbiB9LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pOiB2b2lkID0+IHtcbiAgcmVxLmNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uO1xuICBuZXh0KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBiaW5kQ29sbGVjdGlvbk1pZGRsZXdhcmU7XG4iXSwibmFtZXMiOlsiYmluZENvbGxlY3Rpb25NaWRkbGV3YXJlIiwiY29sbGVjdGlvbiIsInJlcSIsInJlcyIsIm5leHQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBUUE7OztlQUFBOzs7QUFMQSxJQUFNQSwyQkFBMkIsU0FBQ0M7V0FBMkIsU0FBQ0MsS0FBMkNDLEtBQWVDO1FBQ3RIRixJQUFJRCxVQUFVLEdBQUdBO1FBQ2pCRztJQUNGOztJQUVBLFdBQWVKIn0=
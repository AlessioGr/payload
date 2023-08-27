/* eslint-disable no-param-reassign */ function _define_property(obj, key, value) {
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
/**
 * This makes sure that req.context always exists (is {}) and populates it with an optional default context.
 * This function mutates directly to avoid copying memory. As payloadRequest is not a primitive, the scope of the mutation is not limited to this function but should also be reflected in the calling function.
 */ export function setRequestContext() {
    var req = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        context: null
    }, context = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (req.context) {
        if (Object.keys(req.context).length === 0 && req.context.constructor === Object) {
            req.context = context; // Faster - ... is bad for performance
        } else {
            req.context = _object_spread({}, req.context, context); // Merge together
        }
    } else {
        req.context = context;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leHByZXNzL3NldFJlcXVlc3RDb250ZXh0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRSZXF1ZXN0LCBSZXF1ZXN0Q29udGV4dCB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIFRoaXMgbWFrZXMgc3VyZSB0aGF0IHJlcS5jb250ZXh0IGFsd2F5cyBleGlzdHMgKGlzIHt9KSBhbmQgcG9wdWxhdGVzIGl0IHdpdGggYW4gb3B0aW9uYWwgZGVmYXVsdCBjb250ZXh0LlxuICogVGhpcyBmdW5jdGlvbiBtdXRhdGVzIGRpcmVjdGx5IHRvIGF2b2lkIGNvcHlpbmcgbWVtb3J5LiBBcyBwYXlsb2FkUmVxdWVzdCBpcyBub3QgYSBwcmltaXRpdmUsIHRoZSBzY29wZSBvZiB0aGUgbXV0YXRpb24gaXMgbm90IGxpbWl0ZWQgdG8gdGhpcyBmdW5jdGlvbiBidXQgc2hvdWxkIGFsc28gYmUgcmVmbGVjdGVkIGluIHRoZSBjYWxsaW5nIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVxdWVzdENvbnRleHQocmVxOiBQYXlsb2FkUmVxdWVzdCA9IHsgY29udGV4dDogbnVsbCB9IGFzIFBheWxvYWRSZXF1ZXN0LCBjb250ZXh0OiBSZXF1ZXN0Q29udGV4dCA9IHt9KSB7XG4gIGlmIChyZXEuY29udGV4dCkge1xuICAgIGlmIChPYmplY3Qua2V5cyhyZXEuY29udGV4dCkubGVuZ3RoID09PSAwICYmIHJlcS5jb250ZXh0LmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHsgLy8gY2hlY2sgaWYgcmVxLmNvbnRleHQgaXMganVzdCB7fVxuICAgICAgcmVxLmNvbnRleHQgPSBjb250ZXh0OyAvLyBGYXN0ZXIgLSAuLi4gaXMgYmFkIGZvciBwZXJmb3JtYW5jZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXEuY29udGV4dCA9IHsgLi4ucmVxLmNvbnRleHQsIC4uLmNvbnRleHQgfTsgLy8gTWVyZ2UgdG9nZXRoZXJcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVxLmNvbnRleHQgPSBjb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsic2V0UmVxdWVzdENvbnRleHQiLCJyZXEiLCJjb250ZXh0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHcEM7OztDQUdDLEdBQ0QsT0FBTyxTQUFTQTtRQUFrQkMsTUFBQUEsaUVBQXNCO1FBQUVDLFNBQVM7SUFBSyxHQUFxQkEsVUFBQUEsaUVBQTBCLENBQUM7SUFDdEgsSUFBSUQsSUFBSUMsT0FBTyxFQUFFO1FBQ2YsSUFBSUMsT0FBT0MsSUFBSSxDQUFDSCxJQUFJQyxPQUFPLEVBQUVHLE1BQU0sS0FBSyxLQUFLSixJQUFJQyxPQUFPLENBQUNJLFdBQVcsS0FBS0gsUUFBUTtZQUMvRUYsSUFBSUMsT0FBTyxHQUFHQSxTQUFTLHNDQUFzQztRQUMvRCxPQUFPO1lBQ0xELElBQUlDLE9BQU8sR0FBRyxtQkFBS0QsSUFBSUMsT0FBTyxFQUFLQSxVQUFXLGlCQUFpQjtRQUNqRTtJQUNGLE9BQU87UUFDTEQsSUFBSUMsT0FBTyxHQUFHQTtJQUNoQjtBQUNGIn0=
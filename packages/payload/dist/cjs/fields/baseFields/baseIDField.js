"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "baseIDField", {
    enumerable: true,
    get: function() {
        return baseIDField;
    }
});
var _bsonobjectid = /*#__PURE__*/ _interop_require_default(require("bson-objectid"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var generateID = function(param) {
    var value = param.value;
    return value || new _bsonobjectid.default().toHexString();
};
var baseIDField = {
    name: "id",
    label: "ID",
    type: "text",
    hooks: {
        beforeChange: [
            generateID
        ]
    },
    admin: {
        disabled: true
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWVsZHMvYmFzZUZpZWxkcy9iYXNlSURGaWVsZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT2JqZWN0SUQgZnJvbSAnYnNvbi1vYmplY3RpZCc7XG5pbXBvcnQgeyBGaWVsZCwgRmllbGRIb29rIH0gZnJvbSAnLi4vY29uZmlnL3R5cGVzJztcblxuY29uc3QgZ2VuZXJhdGVJRDogRmllbGRIb29rID0gKHsgdmFsdWUgfSkgPT4gKHZhbHVlIHx8IG5ldyBPYmplY3RJRCgpLnRvSGV4U3RyaW5nKCkpO1xuXG5leHBvcnQgY29uc3QgYmFzZUlERmllbGQ6IEZpZWxkID0ge1xuICBuYW1lOiAnaWQnLFxuICBsYWJlbDogJ0lEJyxcbiAgdHlwZTogJ3RleHQnLFxuICBob29rczoge1xuICAgIGJlZm9yZUNoYW5nZTogW1xuICAgICAgZ2VuZXJhdGVJRCxcbiAgICBdLFxuICB9LFxuICBhZG1pbjoge1xuICAgIGRpc2FibGVkOiB0cnVlLFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJiYXNlSURGaWVsZCIsImdlbmVyYXRlSUQiLCJ2YWx1ZSIsIk9iamVjdElEIiwidG9IZXhTdHJpbmciLCJuYW1lIiwibGFiZWwiLCJ0eXBlIiwiaG9va3MiLCJiZWZvcmVDaGFuZ2UiLCJhZG1pbiIsImRpc2FibGVkIl0sIm1hcHBpbmdzIjoiOzs7OytCQUthQTs7O2VBQUFBOzs7bUVBTFE7Ozs7OztBQUdyQixJQUFNQyxhQUF3QjtRQUFHQyxjQUFBQTtXQUFhQSxTQUFTLElBQUlDLHFCQUFRLEdBQUdDLFdBQVc7O0FBRTFFLElBQU1KLGNBQXFCO0lBQ2hDSyxNQUFNO0lBQ05DLE9BQU87SUFDUEMsTUFBTTtJQUNOQyxPQUFPO1FBQ0xDLGNBQWM7WUFDWlI7U0FDRDtJQUNIO0lBQ0FTLE9BQU87UUFDTEMsVUFBVTtJQUNaO0FBQ0YifQ==
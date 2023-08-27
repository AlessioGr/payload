"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "groupOrTabHasRequiredSubfield", {
    enumerable: true,
    get: function() {
        return groupOrTabHasRequiredSubfield;
    }
});
var _types = require("../fields/config/types");
var groupOrTabHasRequiredSubfield = function(entity) {
    if ("type" in entity && entity.type === "group") {
        return entity.fields.some(function(subField) {
            return (0, _types.fieldAffectsData)(subField) && "required" in subField && subField.required || groupOrTabHasRequiredSubfield(subField);
        });
    }
    if ("fields" in entity && "name" in entity) {
        return entity.fields.some(function(subField) {
            return groupOrTabHasRequiredSubfield(subField);
        });
    }
    return false;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvZ3JvdXBPclRhYkhhc1JlcXVpcmVkU3ViZmllbGQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQsIGZpZWxkQWZmZWN0c0RhdGEsIFRhYiB9IGZyb20gJy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgZ3JvdXBPclRhYkhhc1JlcXVpcmVkU3ViZmllbGQgPSAoZW50aXR5OiBGaWVsZCB8IFRhYik6IGJvb2xlYW4gPT4ge1xuICBpZiAoJ3R5cGUnIGluIGVudGl0eSAmJiBlbnRpdHkudHlwZSA9PT0gJ2dyb3VwJykge1xuICAgIHJldHVybiBlbnRpdHkuZmllbGRzLnNvbWUoKHN1YkZpZWxkKSA9PiB7XG4gICAgICByZXR1cm4gKGZpZWxkQWZmZWN0c0RhdGEoc3ViRmllbGQpICYmICdyZXF1aXJlZCcgaW4gc3ViRmllbGQgJiYgc3ViRmllbGQucmVxdWlyZWQpIHx8IGdyb3VwT3JUYWJIYXNSZXF1aXJlZFN1YmZpZWxkKHN1YkZpZWxkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICgnZmllbGRzJyBpbiBlbnRpdHkgJiYgJ25hbWUnIGluIGVudGl0eSkge1xuICAgIHJldHVybiAoZW50aXR5IGFzIFRhYikuZmllbGRzLnNvbWUoKHN1YkZpZWxkKSA9PiBncm91cE9yVGFiSGFzUmVxdWlyZWRTdWJmaWVsZChzdWJGaWVsZCkpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiJdLCJuYW1lcyI6WyJncm91cE9yVGFiSGFzUmVxdWlyZWRTdWJmaWVsZCIsImVudGl0eSIsInR5cGUiLCJmaWVsZHMiLCJzb21lIiwic3ViRmllbGQiLCJmaWVsZEFmZmVjdHNEYXRhIiwicmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7K0JBRWFBOzs7ZUFBQUE7OztxQkFGZ0M7QUFFdEMsSUFBTUEsZ0NBQWdDLFNBQUNDO0lBQzVDLElBQUksVUFBVUEsVUFBVUEsT0FBT0MsSUFBSSxLQUFLLFNBQVM7UUFDL0MsT0FBT0QsT0FBT0UsTUFBTSxDQUFDQyxJQUFJLENBQUMsU0FBQ0M7WUFDekIsT0FBTyxBQUFDQyxJQUFBQSx1QkFBZ0IsRUFBQ0QsYUFBYSxjQUFjQSxZQUFZQSxTQUFTRSxRQUFRLElBQUtQLDhCQUE4Qks7UUFDdEg7SUFDRjtJQUVBLElBQUksWUFBWUosVUFBVSxVQUFVQSxRQUFRO1FBQzFDLE9BQU8sQUFBQ0EsT0FBZUUsTUFBTSxDQUFDQyxJQUFJLENBQUMsU0FBQ0M7bUJBQWFMLDhCQUE4Qks7O0lBQ2pGO0lBRUEsT0FBTztBQUNUIn0=
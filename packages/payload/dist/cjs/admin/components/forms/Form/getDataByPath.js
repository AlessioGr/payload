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
var _flatley = require("flatley");
var getDataByPath = function(fields, path) {
    var _unflattenedData;
    var pathPrefixToRemove = path.substring(0, path.lastIndexOf(".") + 1);
    var name = path.split(".").pop();
    var data = {};
    Object.keys(fields).forEach(function(key) {
        if (!fields[key].disableFormData && (key.indexOf("".concat(path, ".")) === 0 || key === path)) {
            data[key.replace(pathPrefixToRemove, "")] = fields[key].value;
        }
    });
    var unflattenedData = (0, _flatley.unflatten)(data);
    return (_unflattenedData = unflattenedData) === null || _unflattenedData === void 0 ? void 0 : _unflattenedData[name];
};
var _default = getDataByPath;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vZ2V0RGF0YUJ5UGF0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1bmZsYXR0ZW4gfSBmcm9tICdmbGF0bGV5JztcbmltcG9ydCB7IEZpZWxkcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBnZXREYXRhQnlQYXRoID0gPFQgPSB1bmtub3duPihmaWVsZHM6IEZpZWxkcywgcGF0aDogc3RyaW5nKTogVCA9PiB7XG4gIGNvbnN0IHBhdGhQcmVmaXhUb1JlbW92ZSA9IHBhdGguc3Vic3RyaW5nKDAsIHBhdGgubGFzdEluZGV4T2YoJy4nKSArIDEpO1xuICBjb25zdCBuYW1lID0gcGF0aC5zcGxpdCgnLicpLnBvcCgpO1xuXG4gIGNvbnN0IGRhdGEgPSB7fTtcbiAgT2JqZWN0LmtleXMoZmllbGRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIWZpZWxkc1trZXldLmRpc2FibGVGb3JtRGF0YSAmJiAoa2V5LmluZGV4T2YoYCR7cGF0aH0uYCkgPT09IDAgfHwga2V5ID09PSBwYXRoKSkge1xuICAgICAgZGF0YVtrZXkucmVwbGFjZShwYXRoUHJlZml4VG9SZW1vdmUsICcnKV0gPSBmaWVsZHNba2V5XS52YWx1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHVuZmxhdHRlbmVkRGF0YSA9IHVuZmxhdHRlbihkYXRhKTtcblxuICByZXR1cm4gdW5mbGF0dGVuZWREYXRhPy5bbmFtZV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXREYXRhQnlQYXRoO1xuIl0sIm5hbWVzIjpbImdldERhdGFCeVBhdGgiLCJmaWVsZHMiLCJwYXRoIiwidW5mbGF0dGVuZWREYXRhIiwicGF0aFByZWZpeFRvUmVtb3ZlIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJuYW1lIiwic3BsaXQiLCJwb3AiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJkaXNhYmxlRm9ybURhdGEiLCJpbmRleE9mIiwicmVwbGFjZSIsInZhbHVlIiwidW5mbGF0dGVuIl0sIm1hcHBpbmdzIjoiOzs7OytCQW1CQTs7O2VBQUE7Ozt1QkFuQjBCO0FBRzFCLElBQU1BLGdCQUFnQixTQUFjQyxRQUFnQkM7UUFhM0NDO0lBWlAsSUFBTUMscUJBQXFCRixLQUFLRyxTQUFTLENBQUMsR0FBR0gsS0FBS0ksV0FBVyxDQUFDLE9BQU87SUFDckUsSUFBTUMsT0FBT0wsS0FBS00sS0FBSyxDQUFDLEtBQUtDLEdBQUc7SUFFaEMsSUFBTUMsT0FBTyxDQUFDO0lBQ2RDLE9BQU9DLElBQUksQ0FBQ1gsUUFBUVksT0FBTyxDQUFDLFNBQUNDO1FBQzNCLElBQUksQ0FBQ2IsTUFBTSxDQUFDYSxJQUFJLENBQUNDLGVBQWUsSUFBS0QsQ0FBQUEsSUFBSUUsT0FBTyxDQUFDLEFBQUMsR0FBTyxPQUFMZCxNQUFLLFVBQVEsS0FBS1ksUUFBUVosSUFBRyxHQUFJO1lBQ25GUSxJQUFJLENBQUNJLElBQUlHLE9BQU8sQ0FBQ2Isb0JBQW9CLElBQUksR0FBR0gsTUFBTSxDQUFDYSxJQUFJLENBQUNJLEtBQUs7UUFDL0Q7SUFDRjtJQUVBLElBQU1mLGtCQUFrQmdCLElBQUFBLGtCQUFTLEVBQUNUO0lBRWxDLFFBQU9QLG1CQUFBQSw2QkFBQUEsdUNBQUFBLGdCQUFpQixDQUFDSSxLQUFLO0FBQ2hDO0lBRUEsV0FBZVAifQ==
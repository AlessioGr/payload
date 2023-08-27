"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "buildFieldSchemaMap", {
    enumerable: true,
    get: function() {
        return buildFieldSchemaMap;
    }
});
var _createNestedFieldPath = require("./createNestedFieldPath");
var buildFieldSchemaMap = function(entityFields) {
    var fieldMap = new Map();
    var buildUpMap = function(fields) {
        var parentPath = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        fields.forEach(function(field) {
            var path = (0, _createNestedFieldPath.createNestedFieldPath)(parentPath, field);
            switch(field.type){
                case "blocks":
                    field.blocks.forEach(function(block) {
                        var blockPath = "".concat(path, ".").concat(block.slug);
                        fieldMap.set(blockPath, block.fields);
                        buildUpMap(block.fields, blockPath);
                    });
                    break;
                case "array":
                    fieldMap.set(path, field.fields);
                    buildUpMap(field.fields, path);
                    break;
                case "row":
                case "collapsible":
                case "group":
                    buildUpMap(field.fields, path);
                    break;
                case "tabs":
                    field.tabs.forEach(function(tab) {
                        var tabPath = path;
                        if (tabPath) {
                            tabPath = "name" in tab ? "".concat(tabPath, ".").concat(tab.name) : tabPath;
                        } else {
                            tabPath = "name" in tab ? "".concat(tab.name) : tabPath;
                        }
                        buildUpMap(tab.fields, tabPath);
                    });
                    break;
                default:
                    break;
            }
        });
    };
    buildUpMap(entityFields);
    return fieldMap;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0vYnVpbGRGaWVsZFNjaGVtYU1hcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgY3JlYXRlTmVzdGVkRmllbGRQYXRoIH0gZnJvbSAnLi9jcmVhdGVOZXN0ZWRGaWVsZFBhdGgnO1xuXG4vKipcbiAqICoqUmV0dXJucyBNYXAgd2l0aCBhcnJheSBhbmQgYmxvY2sgZmllbGQgc2NoZW1hcyoqXG4gKiAtIFRha2VzIGVudGl0eSBmaWVsZHMgYW5kIHJldHVybnMgYSBNYXAgdG8gcmV0cmlldmUgZmllbGQgc2NoZW1hcyBieSBwYXRoIHdpdGhvdXQgaW5kZXhlc1xuICpcbiAqICoqQWNjZXNzaW5nIGZpZWxkIHNjaGVtYXMqKlxuICogLSBhcnJheSBmaWVsZHM6IGluZGV4ZXMgbXVzdCBiZSByZW1vdmVkIGZyb20gcGF0aCBpLmUuIGBhcnJheS5pbm5lckFycmF5YCBpbnN0ZWFkIG9mIGBhcnJheS4wLmlubmVyQXJyYXlgXG4gKiAtIGJsb2NrIGZpZWxkczogdGhlIGJsb2NrIHNsdWcgbXVzdCBiZSBhcHBlbmRlZCB0byB0aGUgcGF0aCBgYmxvY2tzRmllbGROYW1lLmJsb2NrU2x1Z2AgaW5zdGVhZCBvZiBgYmxvY2tzRmllbGROYW1lYFxuICpcbiAqIEBwYXJhbSBlbnRpdHlGaWVsZHNcbiAqIEByZXR1cm5zIE1hcDxzdHJpbmcsIEZpZWxkW10+XG4gKi9cbmV4cG9ydCBjb25zdCBidWlsZEZpZWxkU2NoZW1hTWFwID0gKGVudGl0eUZpZWxkczogRmllbGRbXSk6IE1hcDxzdHJpbmcsIEZpZWxkW10+ID0+IHtcbiAgY29uc3QgZmllbGRNYXAgPSBuZXcgTWFwPHN0cmluZywgRmllbGRbXT4oKTtcblxuICBjb25zdCBidWlsZFVwTWFwID0gKGZpZWxkczogRmllbGRbXSwgcGFyZW50UGF0aCA9ICcnKSA9PiB7XG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBjb25zdCBwYXRoID0gY3JlYXRlTmVzdGVkRmllbGRQYXRoKHBhcmVudFBhdGgsIGZpZWxkKTtcblxuICAgICAgc3dpdGNoIChmaWVsZC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2Jsb2Nrcyc6XG4gICAgICAgICAgZmllbGQuYmxvY2tzLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBibG9ja1BhdGggPSBgJHtwYXRofS4ke2Jsb2NrLnNsdWd9YDtcbiAgICAgICAgICAgIGZpZWxkTWFwLnNldChibG9ja1BhdGgsIGJsb2NrLmZpZWxkcyk7XG4gICAgICAgICAgICBidWlsZFVwTWFwKGJsb2NrLmZpZWxkcywgYmxvY2tQYXRoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgZmllbGRNYXAuc2V0KHBhdGgsIGZpZWxkLmZpZWxkcyk7XG4gICAgICAgICAgYnVpbGRVcE1hcChmaWVsZC5maWVsZHMsIHBhdGgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3Jvdyc6XG4gICAgICAgIGNhc2UgJ2NvbGxhcHNpYmxlJzpcbiAgICAgICAgY2FzZSAnZ3JvdXAnOlxuICAgICAgICAgIGJ1aWxkVXBNYXAoZmllbGQuZmllbGRzLCBwYXRoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICd0YWJzJzpcbiAgICAgICAgICBmaWVsZC50YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgICAgbGV0IHRhYlBhdGggPSBwYXRoO1xuICAgICAgICAgICAgaWYgKHRhYlBhdGgpIHtcbiAgICAgICAgICAgICAgdGFiUGF0aCA9ICduYW1lJyBpbiB0YWIgPyBgJHt0YWJQYXRofS4ke3RhYi5uYW1lfWAgOiB0YWJQYXRoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFiUGF0aCA9ICduYW1lJyBpbiB0YWIgPyBgJHt0YWIubmFtZX1gIDogdGFiUGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1aWxkVXBNYXAodGFiLmZpZWxkcywgdGFiUGF0aCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBidWlsZFVwTWFwKGVudGl0eUZpZWxkcyk7XG5cbiAgcmV0dXJuIGZpZWxkTWFwO1xufTtcbiJdLCJuYW1lcyI6WyJidWlsZEZpZWxkU2NoZW1hTWFwIiwiZW50aXR5RmllbGRzIiwiZmllbGRNYXAiLCJNYXAiLCJidWlsZFVwTWFwIiwiZmllbGRzIiwicGFyZW50UGF0aCIsImZvckVhY2giLCJmaWVsZCIsInBhdGgiLCJjcmVhdGVOZXN0ZWRGaWVsZFBhdGgiLCJ0eXBlIiwiYmxvY2tzIiwiYmxvY2siLCJibG9ja1BhdGgiLCJzbHVnIiwic2V0IiwidGFicyIsInRhYiIsInRhYlBhdGgiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7OytCQWNhQTs7O2VBQUFBOzs7cUNBYnlCO0FBYS9CLElBQU1BLHNCQUFzQixTQUFDQztJQUNsQyxJQUFNQyxXQUFXLElBQUlDO0lBRXJCLElBQU1DLGFBQWEsU0FBQ0M7WUFBaUJDLDhFQUFhO1FBQ2hERCxPQUFPRSxPQUFPLENBQUMsU0FBQ0M7WUFDZCxJQUFNQyxPQUFPQyxJQUFBQSw0Q0FBcUIsRUFBQ0osWUFBWUU7WUFFL0MsT0FBUUEsTUFBTUcsSUFBSTtnQkFDaEIsS0FBSztvQkFDSEgsTUFBTUksTUFBTSxDQUFDTCxPQUFPLENBQUMsU0FBQ007d0JBQ3BCLElBQU1DLFlBQVksQUFBQyxHQUFVRCxPQUFSSixNQUFLLEtBQWMsT0FBWEksTUFBTUUsSUFBSTt3QkFDdkNiLFNBQVNjLEdBQUcsQ0FBQ0YsV0FBV0QsTUFBTVIsTUFBTTt3QkFDcENELFdBQVdTLE1BQU1SLE1BQU0sRUFBRVM7b0JBQzNCO29CQUNBO2dCQUVGLEtBQUs7b0JBQ0haLFNBQVNjLEdBQUcsQ0FBQ1AsTUFBTUQsTUFBTUgsTUFBTTtvQkFDL0JELFdBQVdJLE1BQU1ILE1BQU0sRUFBRUk7b0JBQ3pCO2dCQUVGLEtBQUs7Z0JBQ0wsS0FBSztnQkFDTCxLQUFLO29CQUNITCxXQUFXSSxNQUFNSCxNQUFNLEVBQUVJO29CQUN6QjtnQkFFRixLQUFLO29CQUNIRCxNQUFNUyxJQUFJLENBQUNWLE9BQU8sQ0FBQyxTQUFDVzt3QkFDbEIsSUFBSUMsVUFBVVY7d0JBQ2QsSUFBSVUsU0FBUzs0QkFDWEEsVUFBVSxVQUFVRCxNQUFNLEFBQUMsR0FBYUEsT0FBWEMsU0FBUSxLQUFZLE9BQVRELElBQUlFLElBQUksSUFBS0Q7d0JBQ3ZELE9BQU87NEJBQ0xBLFVBQVUsVUFBVUQsTUFBTSxBQUFDLEdBQVcsT0FBVEEsSUFBSUUsSUFBSSxJQUFLRDt3QkFDNUM7d0JBQ0FmLFdBQVdjLElBQUliLE1BQU0sRUFBRWM7b0JBQ3pCO29CQUNBO2dCQUVGO29CQUNFO1lBQ0o7UUFDRjtJQUNGO0lBRUFmLFdBQVdIO0lBRVgsT0FBT0M7QUFDVCJ9
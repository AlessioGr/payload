export var findOptionsByValue = function(param) {
    var value = param.value, options = param.options;
    if (value) {
        if (Array.isArray(value)) {
            return value.map(function(val) {
                var matchedOption;
                options.forEach(function(optGroup) {
                    if (!matchedOption) {
                        matchedOption = optGroup.options.find(function(option) {
                            if (typeof val === "object") {
                                return option.value === val.value && option.relationTo === val.relationTo;
                            }
                            return val === option.value;
                        });
                    }
                });
                return matchedOption;
            });
        }
        var matchedOption;
        options.forEach(function(optGroup) {
            if (!matchedOption) {
                matchedOption = optGroup.options.find(function(option) {
                    if (typeof value === "object") {
                        return option.value === value.value && option.relationTo === value.relationTo;
                    }
                    return value === option.value;
                });
            }
        });
        return matchedOption;
    }
    return undefined;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Zvcm1zL2ZpZWxkLXR5cGVzL1JlbGF0aW9uc2hpcC9maW5kT3B0aW9uc0J5VmFsdWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3B0aW9uIH0gZnJvbSAnLi4vLi4vLi4vZWxlbWVudHMvUmVhY3RTZWxlY3QvdHlwZXMnO1xuaW1wb3J0IHsgT3B0aW9uR3JvdXAsIFZhbHVlIH0gZnJvbSAnLi90eXBlcyc7XG5cbnR5cGUgQXJncyA9IHtcbiAgdmFsdWU6IFZhbHVlIHwgVmFsdWVbXVxuICBvcHRpb25zOiBPcHRpb25Hcm91cFtdXG59XG5cbmV4cG9ydCBjb25zdCBmaW5kT3B0aW9uc0J5VmFsdWUgPSAoeyB2YWx1ZSwgb3B0aW9ucyB9OiBBcmdzKTogT3B0aW9uIHwgT3B0aW9uW10gPT4ge1xuICBpZiAodmFsdWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5tYXAoKHZhbCkgPT4ge1xuICAgICAgICBsZXQgbWF0Y2hlZE9wdGlvbjogT3B0aW9uO1xuXG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0R3JvdXApID0+IHtcbiAgICAgICAgICBpZiAoIW1hdGNoZWRPcHRpb24pIHtcbiAgICAgICAgICAgIG1hdGNoZWRPcHRpb24gPSBvcHRHcm91cC5vcHRpb25zLmZpbmQoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLnZhbHVlID09PSB2YWwudmFsdWUgJiYgb3B0aW9uLnJlbGF0aW9uVG8gPT09IHZhbC5yZWxhdGlvblRvO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHZhbCA9PT0gb3B0aW9uLnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbWF0Y2hlZE9wdGlvbjtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBtYXRjaGVkT3B0aW9uOiBPcHRpb247XG5cbiAgICBvcHRpb25zLmZvckVhY2goKG9wdEdyb3VwKSA9PiB7XG4gICAgICBpZiAoIW1hdGNoZWRPcHRpb24pIHtcbiAgICAgICAgbWF0Y2hlZE9wdGlvbiA9IG9wdEdyb3VwLm9wdGlvbnMuZmluZCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb24udmFsdWUgPT09IHZhbHVlLnZhbHVlICYmIG9wdGlvbi5yZWxhdGlvblRvID09PSB2YWx1ZS5yZWxhdGlvblRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IG9wdGlvbi52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlZE9wdGlvbjtcbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuIl0sIm5hbWVzIjpbImZpbmRPcHRpb25zQnlWYWx1ZSIsInZhbHVlIiwib3B0aW9ucyIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsInZhbCIsIm1hdGNoZWRPcHRpb24iLCJmb3JFYWNoIiwib3B0R3JvdXAiLCJmaW5kIiwib3B0aW9uIiwicmVsYXRpb25UbyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBUUEsT0FBTyxJQUFNQSxxQkFBcUI7UUFBR0MsY0FBQUEsT0FBT0MsZ0JBQUFBO0lBQzFDLElBQUlELE9BQU87UUFDVCxJQUFJRSxNQUFNQyxPQUFPLENBQUNILFFBQVE7WUFDeEIsT0FBT0EsTUFBTUksR0FBRyxDQUFDLFNBQUNDO2dCQUNoQixJQUFJQztnQkFFSkwsUUFBUU0sT0FBTyxDQUFDLFNBQUNDO29CQUNmLElBQUksQ0FBQ0YsZUFBZTt3QkFDbEJBLGdCQUFnQkUsU0FBU1AsT0FBTyxDQUFDUSxJQUFJLENBQUMsU0FBQ0M7NEJBQ3JDLElBQUksT0FBT0wsUUFBUSxVQUFVO2dDQUMzQixPQUFPSyxPQUFPVixLQUFLLEtBQUtLLElBQUlMLEtBQUssSUFBSVUsT0FBT0MsVUFBVSxLQUFLTixJQUFJTSxVQUFVOzRCQUMzRTs0QkFFQSxPQUFPTixRQUFRSyxPQUFPVixLQUFLO3dCQUM3QjtvQkFDRjtnQkFDRjtnQkFFQSxPQUFPTTtZQUNUO1FBQ0Y7UUFFQSxJQUFJQTtRQUVKTCxRQUFRTSxPQUFPLENBQUMsU0FBQ0M7WUFDZixJQUFJLENBQUNGLGVBQWU7Z0JBQ2xCQSxnQkFBZ0JFLFNBQVNQLE9BQU8sQ0FBQ1EsSUFBSSxDQUFDLFNBQUNDO29CQUNyQyxJQUFJLE9BQU9WLFVBQVUsVUFBVTt3QkFDN0IsT0FBT1UsT0FBT1YsS0FBSyxLQUFLQSxNQUFNQSxLQUFLLElBQUlVLE9BQU9DLFVBQVUsS0FBS1gsTUFBTVcsVUFBVTtvQkFDL0U7b0JBQ0EsT0FBT1gsVUFBVVUsT0FBT1YsS0FBSztnQkFDL0I7WUFDRjtRQUNGO1FBRUEsT0FBT007SUFDVDtJQUVBLE9BQU9NO0FBQ1QsRUFBRSJ9
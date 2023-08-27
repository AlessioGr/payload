import { validOperators } from "../../../../types/constants";
var validateWhereQuery = function(whereQuery) {
    var _whereQuery_or, _whereQuery, _whereQuery_or_, _whereQuery_or1, _whereQuery1, _whereQuery_or__and, _whereQuery_or_1, _whereQuery_or2, _whereQuery2;
    if (((_whereQuery = whereQuery) === null || _whereQuery === void 0 ? void 0 : (_whereQuery_or = _whereQuery.or) === null || _whereQuery_or === void 0 ? void 0 : _whereQuery_or.length) > 0 && ((_whereQuery1 = whereQuery) === null || _whereQuery1 === void 0 ? void 0 : (_whereQuery_or1 = _whereQuery1.or) === null || _whereQuery_or1 === void 0 ? void 0 : (_whereQuery_or_ = _whereQuery_or1[0]) === null || _whereQuery_or_ === void 0 ? void 0 : _whereQuery_or_.and) && ((_whereQuery2 = whereQuery) === null || _whereQuery2 === void 0 ? void 0 : (_whereQuery_or2 = _whereQuery2.or) === null || _whereQuery_or2 === void 0 ? void 0 : (_whereQuery_or_1 = _whereQuery_or2[0]) === null || _whereQuery_or_1 === void 0 ? void 0 : (_whereQuery_or__and = _whereQuery_or_1.and) === null || _whereQuery_or__and === void 0 ? void 0 : _whereQuery_or__and.length) > 0) {
        // At this point we know that the whereQuery has 'or' and 'and' fields,
        // now let's check the structure and content of these fields.
        var isValid = whereQuery.or.every(function(orQuery) {
            if (orQuery.and && Array.isArray(orQuery.and)) {
                return orQuery.and.every(function(andQuery) {
                    if (typeof andQuery !== "object") {
                        return false;
                    }
                    var andKeys = Object.keys(andQuery);
                    // If there are no keys, it's not a valid WhereField.
                    if (andKeys.length === 0) {
                        return false;
                    }
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        // eslint-disable-next-line no-restricted-syntax
                        for(var _iterator = andKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var key = _step.value;
                            var operator = Object.keys(andQuery[key])[0];
                            // Check if the key is a valid Operator.
                            if (!operator || !validOperators.includes(operator)) {
                                return false;
                            }
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return true;
                });
            }
            return false;
        });
        return isValid;
    }
    return false;
};
export default validateWhereQuery;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2VsZW1lbnRzL1doZXJlQnVpbGRlci92YWxpZGF0ZVdoZXJlUXVlcnkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBPcGVyYXRvciwgV2hlcmUgfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlcyc7XG5pbXBvcnQgeyB2YWxpZE9wZXJhdG9ycyB9IGZyb20gJy4uLy4uLy4uLy4uL3R5cGVzL2NvbnN0YW50cyc7XG5cbmNvbnN0IHZhbGlkYXRlV2hlcmVRdWVyeSA9ICh3aGVyZVF1ZXJ5KTogd2hlcmVRdWVyeSBpcyBXaGVyZSA9PiB7XG4gIGlmICh3aGVyZVF1ZXJ5Py5vcj8ubGVuZ3RoID4gMCAmJiB3aGVyZVF1ZXJ5Py5vcj8uWzBdPy5hbmQgJiYgd2hlcmVRdWVyeT8ub3I/LlswXT8uYW5kPy5sZW5ndGggPiAwKSB7XG4gICAgLy8gQXQgdGhpcyBwb2ludCB3ZSBrbm93IHRoYXQgdGhlIHdoZXJlUXVlcnkgaGFzICdvcicgYW5kICdhbmQnIGZpZWxkcyxcbiAgICAvLyBub3cgbGV0J3MgY2hlY2sgdGhlIHN0cnVjdHVyZSBhbmQgY29udGVudCBvZiB0aGVzZSBmaWVsZHMuXG5cbiAgICBjb25zdCBpc1ZhbGlkID0gd2hlcmVRdWVyeS5vci5ldmVyeSgob3JRdWVyeSkgPT4ge1xuICAgICAgaWYgKG9yUXVlcnkuYW5kICYmIEFycmF5LmlzQXJyYXkob3JRdWVyeS5hbmQpKSB7XG4gICAgICAgIHJldHVybiBvclF1ZXJ5LmFuZC5ldmVyeSgoYW5kUXVlcnkpID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGFuZFF1ZXJ5ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBhbmRLZXlzID0gT2JqZWN0LmtleXMoYW5kUXVlcnkpO1xuICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBrZXlzLCBpdCdzIG5vdCBhIHZhbGlkIFdoZXJlRmllbGQuXG4gICAgICAgICAgaWYgKGFuZEtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGFuZEtleXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZXJhdG9yID0gT2JqZWN0LmtleXMoYW5kUXVlcnlba2V5XSlbMF07XG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUga2V5IGlzIGEgdmFsaWQgT3BlcmF0b3IuXG4gICAgICAgICAgICBpZiAoIW9wZXJhdG9yIHx8ICF2YWxpZE9wZXJhdG9ycy5pbmNsdWRlcyhvcGVyYXRvciBhcyBPcGVyYXRvcikpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlV2hlcmVRdWVyeTtcbiJdLCJuYW1lcyI6WyJ2YWxpZE9wZXJhdG9ycyIsInZhbGlkYXRlV2hlcmVRdWVyeSIsIndoZXJlUXVlcnkiLCJvciIsImxlbmd0aCIsImFuZCIsImlzVmFsaWQiLCJldmVyeSIsIm9yUXVlcnkiLCJBcnJheSIsImlzQXJyYXkiLCJhbmRRdWVyeSIsImFuZEtleXMiLCJPYmplY3QiLCJrZXlzIiwia2V5Iiwib3BlcmF0b3IiLCJpbmNsdWRlcyJdLCJtYXBwaW5ncyI6IkFBQ0EsU0FBU0EsY0FBYyxRQUFRLDhCQUE4QjtBQUU3RCxJQUFNQyxxQkFBcUIsU0FBQ0M7UUFDdEJBLGdCQUFBQSxhQUE4QkEsaUJBQUFBLGlCQUFBQSxjQUE0QkEscUJBQUFBLGtCQUFBQSxpQkFBQUE7SUFBOUQsSUFBSUEsRUFBQUEsY0FBQUEsd0JBQUFBLG1DQUFBQSxpQkFBQUEsWUFBWUMsRUFBRSxjQUFkRCxxQ0FBQUEsZUFBZ0JFLE1BQU0sSUFBRyxPQUFLRixlQUFBQSx3QkFBQUEsb0NBQUFBLGtCQUFBQSxhQUFZQyxFQUFFLGNBQWRELHVDQUFBQSxrQkFBQUEsZUFBZ0IsQ0FBQyxFQUFFLGNBQW5CQSxzQ0FBQUEsZ0JBQXFCRyxHQUFHLEtBQUlILEVBQUFBLGVBQUFBLHdCQUFBQSxvQ0FBQUEsa0JBQUFBLGFBQVlDLEVBQUUsY0FBZEQsdUNBQUFBLG1CQUFBQSxlQUFnQixDQUFDLEVBQUUsY0FBbkJBLHdDQUFBQSxzQkFBQUEsaUJBQXFCRyxHQUFHLGNBQXhCSCwwQ0FBQUEsb0JBQTBCRSxNQUFNLElBQUcsR0FBRztRQUNsRyx1RUFBdUU7UUFDdkUsNkRBQTZEO1FBRTdELElBQU1FLFVBQVVKLFdBQVdDLEVBQUUsQ0FBQ0ksS0FBSyxDQUFDLFNBQUNDO1lBQ25DLElBQUlBLFFBQVFILEdBQUcsSUFBSUksTUFBTUMsT0FBTyxDQUFDRixRQUFRSCxHQUFHLEdBQUc7Z0JBQzdDLE9BQU9HLFFBQVFILEdBQUcsQ0FBQ0UsS0FBSyxDQUFDLFNBQUNJO29CQUN4QixJQUFJLE9BQU9BLGFBQWEsVUFBVTt3QkFDaEMsT0FBTztvQkFDVDtvQkFDQSxJQUFNQyxVQUFVQyxPQUFPQyxJQUFJLENBQUNIO29CQUM1QixxREFBcUQ7b0JBQ3JELElBQUlDLFFBQVFSLE1BQU0sS0FBSyxHQUFHO3dCQUN4QixPQUFPO29CQUNUO3dCQUVLLGtDQUFBLDJCQUFBOzt3QkFETCxnREFBZ0Q7d0JBQ2hELFFBQUssWUFBYVEsNEJBQWIsU0FBQSw2QkFBQSxRQUFBLHlCQUFBLGlDQUFzQjs0QkFBdEIsSUFBTUcsTUFBTjs0QkFDSCxJQUFNQyxXQUFXSCxPQUFPQyxJQUFJLENBQUNILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLENBQUMsRUFBRTs0QkFDOUMsd0NBQXdDOzRCQUN4QyxJQUFJLENBQUNDLFlBQVksQ0FBQ2hCLGVBQWVpQixRQUFRLENBQUNELFdBQXVCO2dDQUMvRCxPQUFPOzRCQUNUO3dCQUNGOzt3QkFOSzt3QkFBQTs7O2lDQUFBLDZCQUFBO2dDQUFBOzs7Z0NBQUE7c0NBQUE7Ozs7b0JBT0wsT0FBTztnQkFDVDtZQUNGO1lBQ0EsT0FBTztRQUNUO1FBRUEsT0FBT1Y7SUFDVDtJQUVBLE9BQU87QUFDVDtBQUVBLGVBQWVMLG1CQUFtQiJ9
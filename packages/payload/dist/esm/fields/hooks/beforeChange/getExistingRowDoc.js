/**
  * If there is an incoming row id,
  * and it matches the existing sibling doc id,
  * this is an existing row, so it should be merged.
  * Otherwise, return an empty object.
 */ export var getExistingRowDoc = function(incomingRow, existingRows) {
    if (incomingRow.id && Array.isArray(existingRows)) {
        var matchedExistingRow = existingRows.find(function(existingRow) {
            if (typeof existingRow === "object" && "id" in existingRow) {
                if (existingRow.id === incomingRow.id) return existingRow;
            }
            return false;
        });
        if (matchedExistingRow) return matchedExistingRow;
    }
    return {};
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9maWVsZHMvaG9va3MvYmVmb3JlQ2hhbmdlL2dldEV4aXN0aW5nUm93RG9jLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICAqIElmIHRoZXJlIGlzIGFuIGluY29taW5nIHJvdyBpZCxcbiAgKiBhbmQgaXQgbWF0Y2hlcyB0aGUgZXhpc3Rpbmcgc2libGluZyBkb2MgaWQsXG4gICogdGhpcyBpcyBhbiBleGlzdGluZyByb3csIHNvIGl0IHNob3VsZCBiZSBtZXJnZWQuXG4gICogT3RoZXJ3aXNlLCByZXR1cm4gYW4gZW1wdHkgb2JqZWN0LlxuICovXG5cbmV4cG9ydCBjb25zdCBnZXRFeGlzdGluZ1Jvd0RvYyA9IChpbmNvbWluZ1JvdzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sIGV4aXN0aW5nUm93cz86IHVua25vd24pOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9PiB7XG4gIGlmIChpbmNvbWluZ1Jvdy5pZCAmJiBBcnJheS5pc0FycmF5KGV4aXN0aW5nUm93cykpIHtcbiAgICBjb25zdCBtYXRjaGVkRXhpc3RpbmdSb3cgPSBleGlzdGluZ1Jvd3MuZmluZCgoZXhpc3RpbmdSb3cpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgZXhpc3RpbmdSb3cgPT09ICdvYmplY3QnICYmICdpZCcgaW4gZXhpc3RpbmdSb3cpIHtcbiAgICAgICAgaWYgKGV4aXN0aW5nUm93LmlkID09PSBpbmNvbWluZ1Jvdy5pZCkgcmV0dXJuIGV4aXN0aW5nUm93O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBpZiAobWF0Y2hlZEV4aXN0aW5nUm93KSByZXR1cm4gbWF0Y2hlZEV4aXN0aW5nUm93O1xuICB9XG5cbiAgcmV0dXJuIHt9O1xufTtcbiJdLCJuYW1lcyI6WyJnZXRFeGlzdGluZ1Jvd0RvYyIsImluY29taW5nUm93IiwiZXhpc3RpbmdSb3dzIiwiaWQiLCJBcnJheSIsImlzQXJyYXkiLCJtYXRjaGVkRXhpc3RpbmdSb3ciLCJmaW5kIiwiZXhpc3RpbmdSb3ciXSwibWFwcGluZ3MiOiJBQUFBOzs7OztDQUtDLEdBRUQsT0FBTyxJQUFNQSxvQkFBb0IsU0FBQ0MsYUFBc0NDO0lBQ3RFLElBQUlELFlBQVlFLEVBQUUsSUFBSUMsTUFBTUMsT0FBTyxDQUFDSCxlQUFlO1FBQ2pELElBQU1JLHFCQUFxQkosYUFBYUssSUFBSSxDQUFDLFNBQUNDO1lBQzVDLElBQUksT0FBT0EsZ0JBQWdCLFlBQVksUUFBUUEsYUFBYTtnQkFDMUQsSUFBSUEsWUFBWUwsRUFBRSxLQUFLRixZQUFZRSxFQUFFLEVBQUUsT0FBT0s7WUFDaEQ7WUFFQSxPQUFPO1FBQ1Q7UUFFQSxJQUFJRixvQkFBb0IsT0FBT0E7SUFDakM7SUFFQSxPQUFPLENBQUM7QUFDVixFQUFFIn0=
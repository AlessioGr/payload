export var getOffsetTop = function(element) {
    var el = element;
    // Set our distance placeholder
    var distance = 0;
    // Loop up the DOM
    if (el.offsetParent) {
        do {
            distance += el.offsetTop;
            el = el.offsetParent;
        }while (el);
    }
    // Return our distance
    return distance < 0 ? 0 : distance;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZG1pbi91dGlsaXRpZXMvZ2V0T2Zmc2V0VG9wLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRPZmZzZXRUb3AgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBudW1iZXIgPT4ge1xuICBsZXQgZWwgPSBlbGVtZW50O1xuICAvLyBTZXQgb3VyIGRpc3RhbmNlIHBsYWNlaG9sZGVyXG4gIGxldCBkaXN0YW5jZSA9IDA7XG5cbiAgLy8gTG9vcCB1cCB0aGUgRE9NXG4gIGlmIChlbC5vZmZzZXRQYXJlbnQpIHtcbiAgICBkbyB7XG4gICAgICBkaXN0YW5jZSArPSBlbC5vZmZzZXRUb3A7XG4gICAgICBlbCA9IGVsLm9mZnNldFBhcmVudCBhcyBIVE1MRWxlbWVudDtcbiAgICB9IHdoaWxlIChlbCk7XG4gIH1cblxuICAvLyBSZXR1cm4gb3VyIGRpc3RhbmNlXG4gIHJldHVybiBkaXN0YW5jZSA8IDAgPyAwIDogZGlzdGFuY2U7XG59O1xuIl0sIm5hbWVzIjpbImdldE9mZnNldFRvcCIsImVsZW1lbnQiLCJlbCIsImRpc3RhbmNlIiwib2Zmc2V0UGFyZW50Iiwib2Zmc2V0VG9wIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQU1BLGVBQWUsU0FBQ0M7SUFDM0IsSUFBSUMsS0FBS0Q7SUFDVCwrQkFBK0I7SUFDL0IsSUFBSUUsV0FBVztJQUVmLGtCQUFrQjtJQUNsQixJQUFJRCxHQUFHRSxZQUFZLEVBQUU7UUFDbkIsR0FBRztZQUNERCxZQUFZRCxHQUFHRyxTQUFTO1lBQ3hCSCxLQUFLQSxHQUFHRSxZQUFZO1FBQ3RCLFFBQVNGLElBQUk7SUFDZjtJQUVBLHNCQUFzQjtJQUN0QixPQUFPQyxXQUFXLElBQUksSUFBSUE7QUFDNUIsRUFBRSJ9
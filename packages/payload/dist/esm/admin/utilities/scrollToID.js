export var scrollToID = function(id) {
    var element = document.getElementById(id);
    if (element) {
        var bounds = element.getBoundingClientRect();
        window.scrollBy({
            top: bounds.top - 100,
            behavior: "smooth"
        });
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZG1pbi91dGlsaXRpZXMvc2Nyb2xsVG9JRC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2Nyb2xsVG9JRCA9IChpZDogc3RyaW5nKTogdm9pZCA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cbiAgaWYgKGVsZW1lbnQpIHtcbiAgICBjb25zdCBib3VuZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHdpbmRvdy5zY3JvbGxCeSh7XG4gICAgICB0b3A6IGJvdW5kcy50b3AgLSAxMDAsXG4gICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgfSk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsic2Nyb2xsVG9JRCIsImlkIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJib3VuZHMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aW5kb3ciLCJzY3JvbGxCeSIsInRvcCIsImJlaGF2aW9yIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLElBQU1BLGFBQWEsU0FBQ0M7SUFDekIsSUFBTUMsVUFBVUMsU0FBU0MsY0FBYyxDQUFDSDtJQUV4QyxJQUFJQyxTQUFTO1FBQ1gsSUFBTUcsU0FBU0gsUUFBUUkscUJBQXFCO1FBQzVDQyxPQUFPQyxRQUFRLENBQUM7WUFDZEMsS0FBS0osT0FBT0ksR0FBRyxHQUFHO1lBQ2xCQyxVQUFVO1FBQ1o7SUFDRjtBQUNGLEVBQUUifQ==
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _mimeTypeValidator = require("./mimeTypeValidator");
var options = {
    siblingData: {
        filename: "file.xyz"
    }
};
describe("mimeTypeValidator", function() {
    it("should validate single mimeType", function() {
        var mimeTypes = [
            "image/png"
        ];
        var validate = (0, _mimeTypeValidator.mimeTypeValidator)(mimeTypes);
        expect(validate("image/png", options)).toBe(true);
    });
    it("should validate multiple mimeTypes", function() {
        var mimeTypes = [
            "image/png",
            "application/pdf"
        ];
        var validate = (0, _mimeTypeValidator.mimeTypeValidator)(mimeTypes);
        expect(validate("image/png", options)).toBe(true);
        expect(validate("application/pdf", options)).toBe(true);
    });
    it("should validate using wildcard", function() {
        var mimeTypes = [
            "image/*"
        ];
        var validate = (0, _mimeTypeValidator.mimeTypeValidator)(mimeTypes);
        expect(validate("image/png", options)).toBe(true);
        expect(validate("image/gif", options)).toBe(true);
    });
    it("should validate multiple wildcards", function() {
        var mimeTypes = [
            "image/*",
            "audio/*"
        ];
        var validate = (0, _mimeTypeValidator.mimeTypeValidator)(mimeTypes);
        expect(validate("image/png", options)).toBe(true);
        expect(validate("audio/mpeg", options)).toBe(true);
    });
    it("should not validate when unmatched", function() {
        var mimeTypes = [
            "image/png"
        ];
        var validate = (0, _mimeTypeValidator.mimeTypeValidator)(mimeTypes);
        expect(validate("audio/mpeg", options)).toBe("Invalid file type: 'audio/mpeg'");
    });
    it("should not validate when unmatched - multiple mimeTypes", function() {
        var mimeTypes = [
            "image/png",
            "application/pdf"
        ];
        var validate = (0, _mimeTypeValidator.mimeTypeValidator)(mimeTypes);
        expect(validate("audio/mpeg", options)).toBe("Invalid file type: 'audio/mpeg'");
    });
    it("should not validate using wildcard - unmatched", function() {
        var mimeTypes = [
            "image/*"
        ];
        var validate = (0, _mimeTypeValidator.mimeTypeValidator)(mimeTypes);
        expect(validate("audio/mpeg", options)).toBe("Invalid file type: 'audio/mpeg'");
    });
    it("should not validate multiple wildcards - unmatched", function() {
        var mimeTypes = [
            "image/*",
            "audio/*"
        ];
        var validate = (0, _mimeTypeValidator.mimeTypeValidator)(mimeTypes);
        expect(validate("video/mp4", options)).toBe("Invalid file type: 'video/mp4'");
        expect(validate("application/pdf", options)).toBe("Invalid file type: 'application/pdf'");
    });
    it("should not error when mimeType is missing", function() {
        var mimeTypes = [
            "image/*",
            "application/pdf"
        ];
        var validate = (0, _mimeTypeValidator.mimeTypeValidator)(mimeTypes);
        var value;
        expect(validate(value, options)).toBe("Invalid file type");
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91cGxvYWRzL21pbWVUeXBlVmFsaWRhdG9yLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWltZVR5cGVWYWxpZGF0b3IgfSBmcm9tICcuL21pbWVUeXBlVmFsaWRhdG9yJztcbmltcG9ydCB7IFZhbGlkYXRlT3B0aW9ucyB9IGZyb20gJy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuXG5jb25zdCBvcHRpb25zID0geyBzaWJsaW5nRGF0YTogeyBmaWxlbmFtZTogJ2ZpbGUueHl6JyB9IH0gYXMgVmFsaWRhdGVPcHRpb25zPHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQ+O1xuXG5kZXNjcmliZSgnbWltZVR5cGVWYWxpZGF0b3InLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgdmFsaWRhdGUgc2luZ2xlIG1pbWVUeXBlJywgKCkgPT4ge1xuICAgIGNvbnN0IG1pbWVUeXBlcyA9IFsnaW1hZ2UvcG5nJ107XG4gICAgY29uc3QgdmFsaWRhdGUgPSBtaW1lVHlwZVZhbGlkYXRvcihtaW1lVHlwZXMpO1xuICAgIGV4cGVjdCh2YWxpZGF0ZSgnaW1hZ2UvcG5nJywgb3B0aW9ucykpLnRvQmUodHJ1ZSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgdmFsaWRhdGUgbXVsdGlwbGUgbWltZVR5cGVzJywgKCkgPT4ge1xuICAgIGNvbnN0IG1pbWVUeXBlcyA9IFsnaW1hZ2UvcG5nJywgJ2FwcGxpY2F0aW9uL3BkZiddO1xuICAgIGNvbnN0IHZhbGlkYXRlID0gbWltZVR5cGVWYWxpZGF0b3IobWltZVR5cGVzKTtcbiAgICBleHBlY3QodmFsaWRhdGUoJ2ltYWdlL3BuZycsIG9wdGlvbnMpKS50b0JlKHRydWUpO1xuICAgIGV4cGVjdCh2YWxpZGF0ZSgnYXBwbGljYXRpb24vcGRmJywgb3B0aW9ucykpLnRvQmUodHJ1ZSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgdmFsaWRhdGUgdXNpbmcgd2lsZGNhcmQnLCAoKSA9PiB7XG4gICAgY29uc3QgbWltZVR5cGVzID0gWydpbWFnZS8qJ107XG4gICAgY29uc3QgdmFsaWRhdGUgPSBtaW1lVHlwZVZhbGlkYXRvcihtaW1lVHlwZXMpO1xuICAgIGV4cGVjdCh2YWxpZGF0ZSgnaW1hZ2UvcG5nJywgb3B0aW9ucykpLnRvQmUodHJ1ZSk7XG4gICAgZXhwZWN0KHZhbGlkYXRlKCdpbWFnZS9naWYnLCBvcHRpb25zKSkudG9CZSh0cnVlKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCB2YWxpZGF0ZSBtdWx0aXBsZSB3aWxkY2FyZHMnLCAoKSA9PiB7XG4gICAgY29uc3QgbWltZVR5cGVzID0gWydpbWFnZS8qJywgJ2F1ZGlvLyonXTtcbiAgICBjb25zdCB2YWxpZGF0ZSA9IG1pbWVUeXBlVmFsaWRhdG9yKG1pbWVUeXBlcyk7XG4gICAgZXhwZWN0KHZhbGlkYXRlKCdpbWFnZS9wbmcnLCBvcHRpb25zKSkudG9CZSh0cnVlKTtcbiAgICBleHBlY3QodmFsaWRhdGUoJ2F1ZGlvL21wZWcnLCBvcHRpb25zKSkudG9CZSh0cnVlKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBub3QgdmFsaWRhdGUgd2hlbiB1bm1hdGNoZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgbWltZVR5cGVzID0gWydpbWFnZS9wbmcnXTtcbiAgICBjb25zdCB2YWxpZGF0ZSA9IG1pbWVUeXBlVmFsaWRhdG9yKG1pbWVUeXBlcyk7XG4gICAgZXhwZWN0KHZhbGlkYXRlKCdhdWRpby9tcGVnJywgb3B0aW9ucykpLnRvQmUoJ0ludmFsaWQgZmlsZSB0eXBlOiBcXCdhdWRpby9tcGVnXFwnJyk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgbm90IHZhbGlkYXRlIHdoZW4gdW5tYXRjaGVkIC0gbXVsdGlwbGUgbWltZVR5cGVzJywgKCkgPT4ge1xuICAgIGNvbnN0IG1pbWVUeXBlcyA9IFsnaW1hZ2UvcG5nJywgJ2FwcGxpY2F0aW9uL3BkZiddO1xuICAgIGNvbnN0IHZhbGlkYXRlID0gbWltZVR5cGVWYWxpZGF0b3IobWltZVR5cGVzKTtcbiAgICBleHBlY3QodmFsaWRhdGUoJ2F1ZGlvL21wZWcnLCBvcHRpb25zKSkudG9CZSgnSW52YWxpZCBmaWxlIHR5cGU6IFxcJ2F1ZGlvL21wZWdcXCcnKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBub3QgdmFsaWRhdGUgdXNpbmcgd2lsZGNhcmQgLSB1bm1hdGNoZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgbWltZVR5cGVzID0gWydpbWFnZS8qJ107XG4gICAgY29uc3QgdmFsaWRhdGUgPSBtaW1lVHlwZVZhbGlkYXRvcihtaW1lVHlwZXMpO1xuICAgIGV4cGVjdCh2YWxpZGF0ZSgnYXVkaW8vbXBlZycsIG9wdGlvbnMpKS50b0JlKCdJbnZhbGlkIGZpbGUgdHlwZTogXFwnYXVkaW8vbXBlZ1xcJycpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIG5vdCB2YWxpZGF0ZSBtdWx0aXBsZSB3aWxkY2FyZHMgLSB1bm1hdGNoZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgbWltZVR5cGVzID0gWydpbWFnZS8qJywgJ2F1ZGlvLyonXTtcbiAgICBjb25zdCB2YWxpZGF0ZSA9IG1pbWVUeXBlVmFsaWRhdG9yKG1pbWVUeXBlcyk7XG4gICAgZXhwZWN0KHZhbGlkYXRlKCd2aWRlby9tcDQnLCBvcHRpb25zKSkudG9CZSgnSW52YWxpZCBmaWxlIHR5cGU6IFxcJ3ZpZGVvL21wNFxcJycpO1xuICAgIGV4cGVjdCh2YWxpZGF0ZSgnYXBwbGljYXRpb24vcGRmJywgb3B0aW9ucykpLnRvQmUoJ0ludmFsaWQgZmlsZSB0eXBlOiBcXCdhcHBsaWNhdGlvbi9wZGZcXCcnKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBub3QgZXJyb3Igd2hlbiBtaW1lVHlwZSBpcyBtaXNzaW5nJywgKCkgPT4ge1xuICAgIGNvbnN0IG1pbWVUeXBlcyA9IFsnaW1hZ2UvKicsICdhcHBsaWNhdGlvbi9wZGYnXTtcbiAgICBjb25zdCB2YWxpZGF0ZSA9IG1pbWVUeXBlVmFsaWRhdG9yKG1pbWVUeXBlcyk7XG4gICAgbGV0IHZhbHVlO1xuICAgIGV4cGVjdCh2YWxpZGF0ZSh2YWx1ZSwgb3B0aW9ucykpLnRvQmUoJ0ludmFsaWQgZmlsZSB0eXBlJyk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOlsib3B0aW9ucyIsInNpYmxpbmdEYXRhIiwiZmlsZW5hbWUiLCJkZXNjcmliZSIsIml0IiwibWltZVR5cGVzIiwidmFsaWRhdGUiLCJtaW1lVHlwZVZhbGlkYXRvciIsImV4cGVjdCIsInRvQmUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7OztpQ0FBa0M7QUFHbEMsSUFBTUEsVUFBVTtJQUFFQyxhQUFhO1FBQUVDLFVBQVU7SUFBVztBQUFFO0FBRXhEQyxTQUFTLHFCQUFxQjtJQUM1QkMsR0FBRyxtQ0FBbUM7UUFDcEMsSUFBTUMsWUFBWTtZQUFDO1NBQVk7UUFDL0IsSUFBTUMsV0FBV0MsSUFBQUEsb0NBQWlCLEVBQUNGO1FBQ25DRyxPQUFPRixTQUFTLGFBQWFOLFVBQVVTLElBQUksQ0FBQztJQUM5QztJQUVBTCxHQUFHLHNDQUFzQztRQUN2QyxJQUFNQyxZQUFZO1lBQUM7WUFBYTtTQUFrQjtRQUNsRCxJQUFNQyxXQUFXQyxJQUFBQSxvQ0FBaUIsRUFBQ0Y7UUFDbkNHLE9BQU9GLFNBQVMsYUFBYU4sVUFBVVMsSUFBSSxDQUFDO1FBQzVDRCxPQUFPRixTQUFTLG1CQUFtQk4sVUFBVVMsSUFBSSxDQUFDO0lBQ3BEO0lBRUFMLEdBQUcsa0NBQWtDO1FBQ25DLElBQU1DLFlBQVk7WUFBQztTQUFVO1FBQzdCLElBQU1DLFdBQVdDLElBQUFBLG9DQUFpQixFQUFDRjtRQUNuQ0csT0FBT0YsU0FBUyxhQUFhTixVQUFVUyxJQUFJLENBQUM7UUFDNUNELE9BQU9GLFNBQVMsYUFBYU4sVUFBVVMsSUFBSSxDQUFDO0lBQzlDO0lBRUFMLEdBQUcsc0NBQXNDO1FBQ3ZDLElBQU1DLFlBQVk7WUFBQztZQUFXO1NBQVU7UUFDeEMsSUFBTUMsV0FBV0MsSUFBQUEsb0NBQWlCLEVBQUNGO1FBQ25DRyxPQUFPRixTQUFTLGFBQWFOLFVBQVVTLElBQUksQ0FBQztRQUM1Q0QsT0FBT0YsU0FBUyxjQUFjTixVQUFVUyxJQUFJLENBQUM7SUFDL0M7SUFFQUwsR0FBRyxzQ0FBc0M7UUFDdkMsSUFBTUMsWUFBWTtZQUFDO1NBQVk7UUFDL0IsSUFBTUMsV0FBV0MsSUFBQUEsb0NBQWlCLEVBQUNGO1FBQ25DRyxPQUFPRixTQUFTLGNBQWNOLFVBQVVTLElBQUksQ0FBQztJQUMvQztJQUVBTCxHQUFHLDJEQUEyRDtRQUM1RCxJQUFNQyxZQUFZO1lBQUM7WUFBYTtTQUFrQjtRQUNsRCxJQUFNQyxXQUFXQyxJQUFBQSxvQ0FBaUIsRUFBQ0Y7UUFDbkNHLE9BQU9GLFNBQVMsY0FBY04sVUFBVVMsSUFBSSxDQUFDO0lBQy9DO0lBRUFMLEdBQUcsa0RBQWtEO1FBQ25ELElBQU1DLFlBQVk7WUFBQztTQUFVO1FBQzdCLElBQU1DLFdBQVdDLElBQUFBLG9DQUFpQixFQUFDRjtRQUNuQ0csT0FBT0YsU0FBUyxjQUFjTixVQUFVUyxJQUFJLENBQUM7SUFDL0M7SUFFQUwsR0FBRyxzREFBc0Q7UUFDdkQsSUFBTUMsWUFBWTtZQUFDO1lBQVc7U0FBVTtRQUN4QyxJQUFNQyxXQUFXQyxJQUFBQSxvQ0FBaUIsRUFBQ0Y7UUFDbkNHLE9BQU9GLFNBQVMsYUFBYU4sVUFBVVMsSUFBSSxDQUFDO1FBQzVDRCxPQUFPRixTQUFTLG1CQUFtQk4sVUFBVVMsSUFBSSxDQUFDO0lBQ3BEO0lBRUFMLEdBQUcsNkNBQTZDO1FBQzlDLElBQU1DLFlBQVk7WUFBQztZQUFXO1NBQWtCO1FBQ2hELElBQU1DLFdBQVdDLElBQUFBLG9DQUFpQixFQUFDRjtRQUNuQyxJQUFJSztRQUNKRixPQUFPRixTQUFTSSxPQUFPVixVQUFVUyxJQUFJLENBQUM7SUFDeEM7QUFDRiJ9
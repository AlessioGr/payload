"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _formatLabels = require("./formatLabels");
describe("formatLabels", function() {
    it("should format singular slug", function() {
        expect((0, _formatLabels.formatLabels)("word")).toMatchObject({
            singular: "Word",
            plural: "Words"
        });
    });
    it("should format plural slug", function() {
        expect((0, _formatLabels.formatLabels)("words")).toMatchObject({
            singular: "Word",
            plural: "Words"
        });
    });
    it("should format kebab case", function() {
        expect((0, _formatLabels.formatLabels)("my-slugs")).toMatchObject({
            singular: "My Slug",
            plural: "My Slugs"
        });
    });
    it("should format camelCase", function() {
        expect((0, _formatLabels.formatLabels)("camelCaseItems")).toMatchObject({
            singular: "Camel Case Item",
            plural: "Camel Case Items"
        });
    });
    describe("toWords", function() {
        it("should convert camel to capitalized words", function() {
            expect((0, _formatLabels.toWords)("camelCaseItems")).toBe("Camel Case Items");
        });
        it("should allow no separator (used for building GraphQL label from name)", function() {
            expect((0, _formatLabels.toWords)("myGraphField", true)).toBe("MyGraphField");
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvZm9ybWF0TGFiZWxzLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0TGFiZWxzLCB0b1dvcmRzIH0gZnJvbSAnLi9mb3JtYXRMYWJlbHMnO1xuXG5kZXNjcmliZSgnZm9ybWF0TGFiZWxzJywgKCkgPT4ge1xuICBpdCgnc2hvdWxkIGZvcm1hdCBzaW5ndWxhciBzbHVnJywgKCkgPT4ge1xuICAgIGV4cGVjdChmb3JtYXRMYWJlbHMoJ3dvcmQnKSkudG9NYXRjaE9iamVjdCh7XG4gICAgICBzaW5ndWxhcjogJ1dvcmQnLFxuICAgICAgcGx1cmFsOiAnV29yZHMnLFxuICAgIH0pO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGZvcm1hdCBwbHVyYWwgc2x1ZycsICgpID0+IHtcbiAgICBleHBlY3QoZm9ybWF0TGFiZWxzKCd3b3JkcycpKS50b01hdGNoT2JqZWN0KHtcbiAgICAgIHNpbmd1bGFyOiAnV29yZCcsXG4gICAgICBwbHVyYWw6ICdXb3JkcycsXG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgZm9ybWF0IGtlYmFiIGNhc2UnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGZvcm1hdExhYmVscygnbXktc2x1Z3MnKSkudG9NYXRjaE9iamVjdCh7XG4gICAgICBzaW5ndWxhcjogJ015IFNsdWcnLFxuICAgICAgcGx1cmFsOiAnTXkgU2x1Z3MnLFxuICAgIH0pO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGZvcm1hdCBjYW1lbENhc2UnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGZvcm1hdExhYmVscygnY2FtZWxDYXNlSXRlbXMnKSkudG9NYXRjaE9iamVjdCh7XG4gICAgICBzaW5ndWxhcjogJ0NhbWVsIENhc2UgSXRlbScsXG4gICAgICBwbHVyYWw6ICdDYW1lbCBDYXNlIEl0ZW1zJyxcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ3RvV29yZHMnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCBjb252ZXJ0IGNhbWVsIHRvIGNhcGl0YWxpemVkIHdvcmRzJywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHRvV29yZHMoJ2NhbWVsQ2FzZUl0ZW1zJykpLnRvQmUoJ0NhbWVsIENhc2UgSXRlbXMnKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgYWxsb3cgbm8gc2VwYXJhdG9yICh1c2VkIGZvciBidWlsZGluZyBHcmFwaFFMIGxhYmVsIGZyb20gbmFtZSknLCAoKSA9PiB7XG4gICAgICBleHBlY3QodG9Xb3JkcygnbXlHcmFwaEZpZWxkJywgdHJ1ZSkpLnRvQmUoJ015R3JhcGhGaWVsZCcpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJleHBlY3QiLCJmb3JtYXRMYWJlbHMiLCJ0b01hdGNoT2JqZWN0Iiwic2luZ3VsYXIiLCJwbHVyYWwiLCJ0b1dvcmRzIiwidG9CZSJdLCJtYXBwaW5ncyI6Ijs7Ozs0QkFBc0M7QUFFdENBLFNBQVMsZ0JBQWdCO0lBQ3ZCQyxHQUFHLCtCQUErQjtRQUNoQ0MsT0FBT0MsSUFBQUEsMEJBQVksRUFBQyxTQUFTQyxhQUFhLENBQUM7WUFDekNDLFVBQVU7WUFDVkMsUUFBUTtRQUNWO0lBQ0Y7SUFFQUwsR0FBRyw2QkFBNkI7UUFDOUJDLE9BQU9DLElBQUFBLDBCQUFZLEVBQUMsVUFBVUMsYUFBYSxDQUFDO1lBQzFDQyxVQUFVO1lBQ1ZDLFFBQVE7UUFDVjtJQUNGO0lBRUFMLEdBQUcsNEJBQTRCO1FBQzdCQyxPQUFPQyxJQUFBQSwwQkFBWSxFQUFDLGFBQWFDLGFBQWEsQ0FBQztZQUM3Q0MsVUFBVTtZQUNWQyxRQUFRO1FBQ1Y7SUFDRjtJQUVBTCxHQUFHLDJCQUEyQjtRQUM1QkMsT0FBT0MsSUFBQUEsMEJBQVksRUFBQyxtQkFBbUJDLGFBQWEsQ0FBQztZQUNuREMsVUFBVTtZQUNWQyxRQUFRO1FBQ1Y7SUFDRjtJQUVBTixTQUFTLFdBQVc7UUFDbEJDLEdBQUcsNkNBQTZDO1lBQzlDQyxPQUFPSyxJQUFBQSxxQkFBTyxFQUFDLG1CQUFtQkMsSUFBSSxDQUFDO1FBQ3pDO1FBRUFQLEdBQUcseUVBQXlFO1lBQzFFQyxPQUFPSyxJQUFBQSxxQkFBTyxFQUFDLGdCQUFnQixPQUFPQyxJQUFJLENBQUM7UUFDN0M7SUFDRjtBQUNGIn0=
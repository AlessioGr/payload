import { formatLabels, toWords } from "./formatLabels";
describe("formatLabels", function() {
    it("should format singular slug", function() {
        expect(formatLabels("word")).toMatchObject({
            singular: "Word",
            plural: "Words"
        });
    });
    it("should format plural slug", function() {
        expect(formatLabels("words")).toMatchObject({
            singular: "Word",
            plural: "Words"
        });
    });
    it("should format kebab case", function() {
        expect(formatLabels("my-slugs")).toMatchObject({
            singular: "My Slug",
            plural: "My Slugs"
        });
    });
    it("should format camelCase", function() {
        expect(formatLabels("camelCaseItems")).toMatchObject({
            singular: "Camel Case Item",
            plural: "Camel Case Items"
        });
    });
    describe("toWords", function() {
        it("should convert camel to capitalized words", function() {
            expect(toWords("camelCaseItems")).toBe("Camel Case Items");
        });
        it("should allow no separator (used for building GraphQL label from name)", function() {
            expect(toWords("myGraphField", true)).toBe("MyGraphField");
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlsaXRpZXMvZm9ybWF0TGFiZWxzLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0TGFiZWxzLCB0b1dvcmRzIH0gZnJvbSAnLi9mb3JtYXRMYWJlbHMnO1xuXG5kZXNjcmliZSgnZm9ybWF0TGFiZWxzJywgKCkgPT4ge1xuICBpdCgnc2hvdWxkIGZvcm1hdCBzaW5ndWxhciBzbHVnJywgKCkgPT4ge1xuICAgIGV4cGVjdChmb3JtYXRMYWJlbHMoJ3dvcmQnKSkudG9NYXRjaE9iamVjdCh7XG4gICAgICBzaW5ndWxhcjogJ1dvcmQnLFxuICAgICAgcGx1cmFsOiAnV29yZHMnLFxuICAgIH0pO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGZvcm1hdCBwbHVyYWwgc2x1ZycsICgpID0+IHtcbiAgICBleHBlY3QoZm9ybWF0TGFiZWxzKCd3b3JkcycpKS50b01hdGNoT2JqZWN0KHtcbiAgICAgIHNpbmd1bGFyOiAnV29yZCcsXG4gICAgICBwbHVyYWw6ICdXb3JkcycsXG4gICAgfSk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgZm9ybWF0IGtlYmFiIGNhc2UnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGZvcm1hdExhYmVscygnbXktc2x1Z3MnKSkudG9NYXRjaE9iamVjdCh7XG4gICAgICBzaW5ndWxhcjogJ015IFNsdWcnLFxuICAgICAgcGx1cmFsOiAnTXkgU2x1Z3MnLFxuICAgIH0pO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGZvcm1hdCBjYW1lbENhc2UnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGZvcm1hdExhYmVscygnY2FtZWxDYXNlSXRlbXMnKSkudG9NYXRjaE9iamVjdCh7XG4gICAgICBzaW5ndWxhcjogJ0NhbWVsIENhc2UgSXRlbScsXG4gICAgICBwbHVyYWw6ICdDYW1lbCBDYXNlIEl0ZW1zJyxcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ3RvV29yZHMnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCBjb252ZXJ0IGNhbWVsIHRvIGNhcGl0YWxpemVkIHdvcmRzJywgKCkgPT4ge1xuICAgICAgZXhwZWN0KHRvV29yZHMoJ2NhbWVsQ2FzZUl0ZW1zJykpLnRvQmUoJ0NhbWVsIENhc2UgSXRlbXMnKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgYWxsb3cgbm8gc2VwYXJhdG9yICh1c2VkIGZvciBidWlsZGluZyBHcmFwaFFMIGxhYmVsIGZyb20gbmFtZSknLCAoKSA9PiB7XG4gICAgICBleHBlY3QodG9Xb3JkcygnbXlHcmFwaEZpZWxkJywgdHJ1ZSkpLnRvQmUoJ015R3JhcGhGaWVsZCcpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbImZvcm1hdExhYmVscyIsInRvV29yZHMiLCJkZXNjcmliZSIsIml0IiwiZXhwZWN0IiwidG9NYXRjaE9iamVjdCIsInNpbmd1bGFyIiwicGx1cmFsIiwidG9CZSJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsWUFBWSxFQUFFQyxPQUFPLFFBQVEsaUJBQWlCO0FBRXZEQyxTQUFTLGdCQUFnQjtJQUN2QkMsR0FBRywrQkFBK0I7UUFDaENDLE9BQU9KLGFBQWEsU0FBU0ssYUFBYSxDQUFDO1lBQ3pDQyxVQUFVO1lBQ1ZDLFFBQVE7UUFDVjtJQUNGO0lBRUFKLEdBQUcsNkJBQTZCO1FBQzlCQyxPQUFPSixhQUFhLFVBQVVLLGFBQWEsQ0FBQztZQUMxQ0MsVUFBVTtZQUNWQyxRQUFRO1FBQ1Y7SUFDRjtJQUVBSixHQUFHLDRCQUE0QjtRQUM3QkMsT0FBT0osYUFBYSxhQUFhSyxhQUFhLENBQUM7WUFDN0NDLFVBQVU7WUFDVkMsUUFBUTtRQUNWO0lBQ0Y7SUFFQUosR0FBRywyQkFBMkI7UUFDNUJDLE9BQU9KLGFBQWEsbUJBQW1CSyxhQUFhLENBQUM7WUFDbkRDLFVBQVU7WUFDVkMsUUFBUTtRQUNWO0lBQ0Y7SUFFQUwsU0FBUyxXQUFXO1FBQ2xCQyxHQUFHLDZDQUE2QztZQUM5Q0MsT0FBT0gsUUFBUSxtQkFBbUJPLElBQUksQ0FBQztRQUN6QztRQUVBTCxHQUFHLHlFQUF5RTtZQUMxRUMsT0FBT0gsUUFBUSxnQkFBZ0IsT0FBT08sSUFBSSxDQUFDO1FBQzdDO0lBQ0Y7QUFDRiJ9
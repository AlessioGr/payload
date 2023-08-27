import React from "react";
import { render } from "@testing-library/react";
import BlocksCell from "./field-types/Blocks";
import DateCell from "./field-types/Date";
import Checkbox from "./field-types/Checkbox";
import Textarea from "./field-types/Textarea";
import Select from "./field-types/Select";
import { jest } from "@jest/globals";
// unstable_mockModule is required for esm. See https://jestjs.io/docs/ecmascript-modules#module-mocking-in-esm
jest.unstable_mockModule("../../../../utilities/Config", function() {
    return {
        useConfig: function() {
            return {
                admin: {
                    dateFormat: "MMMM do yyyy, h:mm a"
                }
            };
        }
    };
});
jest.unstable_mockModule("react-i18next", function() {
    return {
        useTranslation: function() {
            return {
                t: function(string) {
                    return string;
                }
            };
        }
    };
});
describe("Cell Types", function() {
    describe("Blocks", function() {
        var field = {
            label: "Blocks Content",
            name: "blocks",
            labels: {
                singular: "Block",
                plural: "Blocks Content"
            },
            type: "blocks",
            blocks: [
                {
                    slug: "number",
                    labels: {
                        plural: "Numbers",
                        singular: "Number"
                    },
                    fields: []
                }
            ]
        };
        it("renders multiple", function() {
            var data = [
                {
                    blockType: "number"
                },
                {
                    blockType: "number"
                }
            ];
            var container = render(/*#__PURE__*/ React.createElement(BlocksCell, {
                data: data,
                field: field
            })).container;
            var el = container.querySelector("span");
            expect(el).toHaveTextContent("2 Blocks Content - Number, Number");
        });
        it("renders zero", function() {
            var data = [];
            var container = render(/*#__PURE__*/ React.createElement(BlocksCell, {
                data: data,
                field: field
            })).container;
            var el = container.querySelector("span");
            expect(el).toHaveTextContent("0 Blocks Content");
        });
        it('renders "and X more" if over maximum of 5', function() {
            var data = [
                {
                    blockType: "number"
                },
                {
                    blockType: "number"
                },
                {
                    blockType: "number"
                },
                {
                    blockType: "number"
                },
                {
                    blockType: "number"
                },
                {
                    blockType: "number"
                }
            ];
            var container = render(/*#__PURE__*/ React.createElement(BlocksCell, {
                data: data,
                field: field
            })).container;
            var el = container.querySelector("span");
            expect(el).toHaveTextContent("fields:itemsAndMore");
        });
    });
    describe.skip("Date", function() {
        var field = {
            name: "dayOnly",
            type: "date",
            admin: {
                date: {
                    pickerAppearance: "dayOnly"
                }
            }
        };
        it("renders date", function() {
            var timeStamp = "2020-10-06T14:07:39.033Z";
            var container = render(/*#__PURE__*/ React.createElement(DateCell, {
                data: timeStamp,
                field: field
            })).container;
            var dateMatch = /October\s6th\s2020,\s[\d]{1,2}:07\s[A|P]M/; // Had to account for timezones in CI
            var el = container.querySelector("span");
            expect(el.textContent).toMatch(dateMatch);
        });
        it("handles undefined", function() {
            var timeStamp = undefined;
            var container = render(/*#__PURE__*/ React.createElement(DateCell, {
                data: timeStamp,
                field: field
            })).container;
            var el = container.querySelector("span");
            expect(el.textContent).toBe("");
        });
    });
    describe("Checkbox", function() {
        it("renders true", function() {
            var container = render(/*#__PURE__*/ React.createElement(Checkbox, {
                data: true
            })).container;
            var el = container.querySelector("span");
            expect(el).toHaveTextContent("true");
        });
        it("renders false", function() {
            var container = render(/*#__PURE__*/ React.createElement(Checkbox, {
                data: false
            })).container;
            var el = container.querySelector("span");
            expect(el).toHaveTextContent("false");
        });
    });
    describe("Textarea", function() {
        it("renders data", function() {
            var container = render(/*#__PURE__*/ React.createElement(Textarea, {
                data: "data"
            })).container;
            var el = container.querySelector("span");
            expect(el).toHaveTextContent("data");
        });
        it("handle undefined - bug/13", function() {
            var container = render(/*#__PURE__*/ React.createElement(Textarea, {
                data: undefined
            })).container;
            var el = container.querySelector("span");
            expect(el).toHaveTextContent("");
        });
    });
    describe("Select", function() {
        var fieldWithOptionsObject = {
            type: "select",
            name: "selectObject",
            options: [
                {
                    value: "one",
                    label: "One"
                },
                {
                    value: "two",
                    label: "Two"
                }
            ]
        };
        var fieldWithStringsOptions = {
            type: "select",
            name: "selectString",
            options: [
                "blue",
                "green",
                "yellow"
            ]
        };
        it("renders options objects", function() {
            var container = render(/*#__PURE__*/ React.createElement(Select, {
                data: "one",
                field: fieldWithOptionsObject
            })).container;
            var el = container.querySelector("span");
            expect(el).toHaveTextContent("One");
        });
        it("renders option strings", function() {
            var container = render(/*#__PURE__*/ React.createElement(Select, {
                data: "blue",
                field: fieldWithStringsOptions
            })).container;
            var el = container.querySelector("span");
            expect(el).toHaveTextContent("blue");
        });
        describe("HasMany", function() {
            it("renders options objects", function() {
                var container = render(/*#__PURE__*/ React.createElement(Select, {
                    data: [
                        "one",
                        "two"
                    ],
                    field: fieldWithOptionsObject
                })).container;
                var el = container.querySelector("span");
                expect(el).toHaveTextContent("One, Two");
            });
            it("renders option strings", function() {
                var container = render(/*#__PURE__*/ React.createElement(Select, {
                    data: [
                        "blue",
                        "green"
                    ],
                    field: fieldWithStringsOptions
                })).container;
                var el = container.querySelector("span");
                expect(el).toHaveTextContent("blue, green");
            });
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL2NvbGxlY3Rpb25zL0xpc3QvQ2VsbC9jZWxsVHlwZXMuc3BlYy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ0B0ZXN0aW5nLWxpYnJhcnkvcmVhY3QnO1xuaW1wb3J0IHsgQmxvY2tGaWVsZCwgRGF0ZUZpZWxkLCBTZWxlY3RGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IEJsb2Nrc0NlbGwgZnJvbSAnLi9maWVsZC10eXBlcy9CbG9ja3MnO1xuaW1wb3J0IERhdGVDZWxsIGZyb20gJy4vZmllbGQtdHlwZXMvRGF0ZSc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi9maWVsZC10eXBlcy9DaGVja2JveCc7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9maWVsZC10eXBlcy9UZXh0YXJlYSc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vZmllbGQtdHlwZXMvU2VsZWN0JztcbmltcG9ydCB7IGplc3QgfSBmcm9tICdAamVzdC9nbG9iYWxzJztcblxuLy8gdW5zdGFibGVfbW9ja01vZHVsZSBpcyByZXF1aXJlZCBmb3IgZXNtLiBTZWUgaHR0cHM6Ly9qZXN0anMuaW8vZG9jcy9lY21hc2NyaXB0LW1vZHVsZXMjbW9kdWxlLW1vY2tpbmctaW4tZXNtXG5qZXN0LnVuc3RhYmxlX21vY2tNb2R1bGUoJy4uLy4uLy4uLy4uL3V0aWxpdGllcy9Db25maWcnLCAoKSA9PiAoe1xuICAgIHVzZUNvbmZpZzogKCkgPT4gKHsgYWRtaW46IHsgZGF0ZUZvcm1hdDogJ01NTU0gZG8geXl5eSwgaDptbSBhJyB9IH0pLFxufSkpO1xuXG5qZXN0LnVuc3RhYmxlX21vY2tNb2R1bGUoJ3JlYWN0LWkxOG5leHQnLCAoKSA9PiAoe1xuICB1c2VUcmFuc2xhdGlvbjogKCkgPT4gKHsgdDogKHN0cmluZykgPT4gc3RyaW5nIH0pLFxufSkpO1xuXG5kZXNjcmliZSgnQ2VsbCBUeXBlcycsICgpID0+IHtcbiAgZGVzY3JpYmUoJ0Jsb2NrcycsICgpID0+IHtcbiAgICBjb25zdCBmaWVsZDogQmxvY2tGaWVsZCA9IHtcbiAgICAgIGxhYmVsOiAnQmxvY2tzIENvbnRlbnQnLFxuICAgICAgbmFtZTogJ2Jsb2NrcycsXG4gICAgICBsYWJlbHM6IHtcbiAgICAgICAgc2luZ3VsYXI6ICdCbG9jaycsXG4gICAgICAgIHBsdXJhbDogJ0Jsb2NrcyBDb250ZW50JyxcbiAgICAgIH0sXG4gICAgICB0eXBlOiAnYmxvY2tzJyxcbiAgICAgIGJsb2NrczogW1xuICAgICAgICB7XG4gICAgICAgICAgc2x1ZzogJ251bWJlcicsXG4gICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICBwbHVyYWw6ICdOdW1iZXJzJyxcbiAgICAgICAgICAgIHNpbmd1bGFyOiAnTnVtYmVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZpZWxkczogW10sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG5cbiAgICBpdCgncmVuZGVycyBtdWx0aXBsZScsICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBbXG4gICAgICAgIHsgYmxvY2tUeXBlOiAnbnVtYmVyJyB9LFxuICAgICAgICB7IGJsb2NrVHlwZTogJ251bWJlcicgfSxcbiAgICAgIF07XG4gICAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gcmVuZGVyKDxCbG9ja3NDZWxsXG4gICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgIGZpZWxkPXtmaWVsZH1cbiAgICAgIC8+KTtcbiAgICAgIGNvbnN0IGVsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgICAgIGV4cGVjdChlbCkudG9IYXZlVGV4dENvbnRlbnQoJzIgQmxvY2tzIENvbnRlbnQgLSBOdW1iZXIsIE51bWJlcicpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3JlbmRlcnMgemVybycsICgpID0+IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcbiAgICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSByZW5kZXIoPEJsb2Nrc0NlbGxcbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgZmllbGQ9e2ZpZWxkfVxuICAgICAgLz4pO1xuICAgICAgY29uc3QgZWwgPSBjb250YWluZXIucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICAgICAgZXhwZWN0KGVsKS50b0hhdmVUZXh0Q29udGVudCgnMCBCbG9ja3MgQ29udGVudCcpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3JlbmRlcnMgXCJhbmQgWCBtb3JlXCIgaWYgb3ZlciBtYXhpbXVtIG9mIDUnLCAoKSA9PiB7XG4gICAgICBjb25zdCBkYXRhID0gW1xuICAgICAgICB7IGJsb2NrVHlwZTogJ251bWJlcicgfSxcbiAgICAgICAgeyBibG9ja1R5cGU6ICdudW1iZXInIH0sXG4gICAgICAgIHsgYmxvY2tUeXBlOiAnbnVtYmVyJyB9LFxuICAgICAgICB7IGJsb2NrVHlwZTogJ251bWJlcicgfSxcbiAgICAgICAgeyBibG9ja1R5cGU6ICdudW1iZXInIH0sXG4gICAgICAgIHsgYmxvY2tUeXBlOiAnbnVtYmVyJyB9LFxuICAgICAgXTtcblxuICAgICAgY29uc3QgeyBjb250YWluZXIgfSA9IHJlbmRlcig8QmxvY2tzQ2VsbFxuICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICBmaWVsZD17ZmllbGR9XG4gICAgICAvPik7XG4gICAgICBjb25zdCBlbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gICAgICBleHBlY3QoZWwpLnRvSGF2ZVRleHRDb250ZW50KCdmaWVsZHM6aXRlbXNBbmRNb3JlJyk7XG4gICAgfSk7XG4gIH0pO1xuXG5cbiAgZGVzY3JpYmUuc2tpcCgnRGF0ZScsICgpID0+IHsgLy8gVE9ETzogRml4IHRoaXMgdGVzdC4gSXQncyBmYWlsaW5nIGluIGVzbSBiZWNhdXNlIHRoZSBtb2NraW5nIGRvZXMgbm90IHdvcmsuXG4gICAgY29uc3QgZmllbGQ6IERhdGVGaWVsZCA9IHtcbiAgICAgIG5hbWU6ICdkYXlPbmx5JyxcbiAgICAgIHR5cGU6ICdkYXRlJyxcbiAgICAgIGFkbWluOiB7XG4gICAgICAgIGRhdGU6IHtcbiAgICAgICAgICBwaWNrZXJBcHBlYXJhbmNlOiAnZGF5T25seScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICBpdCgncmVuZGVycyBkYXRlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdGltZVN0YW1wID0gJzIwMjAtMTAtMDZUMTQ6MDc6MzkuMDMzWic7XG4gICAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gcmVuZGVyKDxEYXRlQ2VsbFxuICAgICAgICBkYXRhPXt0aW1lU3RhbXB9XG4gICAgICAgIGZpZWxkPXtmaWVsZH1cbiAgICAgIC8+KTtcbiAgICAgIGNvbnN0IGRhdGVNYXRjaCA9IC9PY3RvYmVyXFxzNnRoXFxzMjAyMCxcXHNbXFxkXXsxLDJ9OjA3XFxzW0F8UF1NLzsgLy8gSGFkIHRvIGFjY291bnQgZm9yIHRpbWV6b25lcyBpbiBDSVxuICAgICAgY29uc3QgZWwgPSBjb250YWluZXIucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICAgICAgZXhwZWN0KGVsLnRleHRDb250ZW50KS50b01hdGNoKGRhdGVNYXRjaCk7XG4gICAgfSk7XG5cbiAgICBpdCgnaGFuZGxlcyB1bmRlZmluZWQnLCAoKSA9PiB7XG4gICAgICBjb25zdCB0aW1lU3RhbXAgPSB1bmRlZmluZWQ7XG4gICAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gcmVuZGVyKDxEYXRlQ2VsbFxuICAgICAgICBkYXRhPXt0aW1lU3RhbXB9XG4gICAgICAgIGZpZWxkPXtmaWVsZH1cbiAgICAgIC8+KTtcbiAgICAgIGNvbnN0IGVsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgICAgIGV4cGVjdChlbC50ZXh0Q29udGVudCkudG9CZSgnJyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdDaGVja2JveCcsICgpID0+IHtcbiAgICBpdCgncmVuZGVycyB0cnVlJywgKCkgPT4ge1xuICAgICAgY29uc3QgeyBjb250YWluZXIgfSA9IHJlbmRlcig8Q2hlY2tib3ggZGF0YSAvPik7XG4gICAgICBjb25zdCBlbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gICAgICBleHBlY3QoZWwpLnRvSGF2ZVRleHRDb250ZW50KCd0cnVlJyk7XG4gICAgfSk7XG4gICAgaXQoJ3JlbmRlcnMgZmFsc2UnLCAoKSA9PiB7XG4gICAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gcmVuZGVyKDxDaGVja2JveCBkYXRhPXtmYWxzZX0gLz4pO1xuICAgICAgY29uc3QgZWwgPSBjb250YWluZXIucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICAgICAgZXhwZWN0KGVsKS50b0hhdmVUZXh0Q29udGVudCgnZmFsc2UnKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ1RleHRhcmVhJywgKCkgPT4ge1xuICAgIGl0KCdyZW5kZXJzIGRhdGEnLCAoKSA9PiB7XG4gICAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gcmVuZGVyKDxUZXh0YXJlYSBkYXRhPVwiZGF0YVwiIC8+KTtcbiAgICAgIGNvbnN0IGVsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgICAgIGV4cGVjdChlbCkudG9IYXZlVGV4dENvbnRlbnQoJ2RhdGEnKTtcbiAgICB9KTtcbiAgICBpdCgnaGFuZGxlIHVuZGVmaW5lZCAtIGJ1Zy8xMycsICgpID0+IHtcbiAgICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSByZW5kZXIoPFRleHRhcmVhIGRhdGE9e3VuZGVmaW5lZH0gLz4pO1xuICAgICAgY29uc3QgZWwgPSBjb250YWluZXIucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICAgICAgZXhwZWN0KGVsKS50b0hhdmVUZXh0Q29udGVudCgnJyk7XG4gICAgfSk7XG4gIH0pO1xuICBkZXNjcmliZSgnU2VsZWN0JywgKCkgPT4ge1xuICAgIGNvbnN0IGZpZWxkV2l0aE9wdGlvbnNPYmplY3Q6IFNlbGVjdEZpZWxkID0ge1xuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBuYW1lOiAnc2VsZWN0T2JqZWN0JyxcbiAgICAgIG9wdGlvbnM6IFt7XG4gICAgICAgIHZhbHVlOiAnb25lJyxcbiAgICAgICAgbGFiZWw6ICdPbmUnLFxuICAgICAgfSwge1xuICAgICAgICB2YWx1ZTogJ3R3bycsXG4gICAgICAgIGxhYmVsOiAnVHdvJyxcbiAgICAgIH1dLFxuICAgIH07XG4gICAgY29uc3QgZmllbGRXaXRoU3RyaW5nc09wdGlvbnM6IFNlbGVjdEZpZWxkID0ge1xuICAgICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgICBuYW1lOiAnc2VsZWN0U3RyaW5nJyxcbiAgICAgIG9wdGlvbnM6IFsnYmx1ZScsICdncmVlbicsICd5ZWxsb3cnXSxcbiAgICB9O1xuICAgIGl0KCdyZW5kZXJzIG9wdGlvbnMgb2JqZWN0cycsICgpID0+IHtcbiAgICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSByZW5kZXIoPFNlbGVjdFxuICAgICAgICBkYXRhPVwib25lXCJcbiAgICAgICAgZmllbGQ9e2ZpZWxkV2l0aE9wdGlvbnNPYmplY3R9XG4gICAgICAvPik7XG4gICAgICBjb25zdCBlbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gICAgICBleHBlY3QoZWwpLnRvSGF2ZVRleHRDb250ZW50KCdPbmUnKTtcbiAgICB9KTtcbiAgICBpdCgncmVuZGVycyBvcHRpb24gc3RyaW5ncycsICgpID0+IHtcbiAgICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSByZW5kZXIoPFNlbGVjdFxuICAgICAgICBkYXRhPVwiYmx1ZVwiXG4gICAgICAgIGZpZWxkPXtmaWVsZFdpdGhTdHJpbmdzT3B0aW9uc31cbiAgICAgIC8+KTtcbiAgICAgIGNvbnN0IGVsID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgICAgIGV4cGVjdChlbCkudG9IYXZlVGV4dENvbnRlbnQoJ2JsdWUnKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdIYXNNYW55JywgKCkgPT4ge1xuICAgICAgaXQoJ3JlbmRlcnMgb3B0aW9ucyBvYmplY3RzJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gcmVuZGVyKDxTZWxlY3RcbiAgICAgICAgICBkYXRhPXtbJ29uZScsICd0d28nXX1cbiAgICAgICAgICBmaWVsZD17ZmllbGRXaXRoT3B0aW9uc09iamVjdH1cbiAgICAgICAgLz4pO1xuICAgICAgICBjb25zdCBlbCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gICAgICAgIGV4cGVjdChlbCkudG9IYXZlVGV4dENvbnRlbnQoJ09uZSwgVHdvJyk7XG4gICAgICB9KTtcbiAgICAgIGl0KCdyZW5kZXJzIG9wdGlvbiBzdHJpbmdzJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB7IGNvbnRhaW5lciB9ID0gcmVuZGVyKDxTZWxlY3RcbiAgICAgICAgICBkYXRhPXtbJ2JsdWUnLCAnZ3JlZW4nXX1cbiAgICAgICAgICBmaWVsZD17ZmllbGRXaXRoU3RyaW5nc09wdGlvbnN9XG4gICAgICAgIC8+KTtcbiAgICAgICAgY29uc3QgZWwgPSBjb250YWluZXIucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICAgICAgICBleHBlY3QoZWwpLnRvSGF2ZVRleHRDb250ZW50KCdibHVlLCBncmVlbicpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJyZW5kZXIiLCJCbG9ja3NDZWxsIiwiRGF0ZUNlbGwiLCJDaGVja2JveCIsIlRleHRhcmVhIiwiU2VsZWN0IiwiamVzdCIsInVuc3RhYmxlX21vY2tNb2R1bGUiLCJ1c2VDb25maWciLCJhZG1pbiIsImRhdGVGb3JtYXQiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJzdHJpbmciLCJkZXNjcmliZSIsImZpZWxkIiwibGFiZWwiLCJuYW1lIiwibGFiZWxzIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJ0eXBlIiwiYmxvY2tzIiwic2x1ZyIsImZpZWxkcyIsIml0IiwiZGF0YSIsImJsb2NrVHlwZSIsImNvbnRhaW5lciIsImVsIiwicXVlcnlTZWxlY3RvciIsImV4cGVjdCIsInRvSGF2ZVRleHRDb250ZW50Iiwic2tpcCIsImRhdGUiLCJwaWNrZXJBcHBlYXJhbmNlIiwidGltZVN0YW1wIiwiZGF0ZU1hdGNoIiwidGV4dENvbnRlbnQiLCJ0b01hdGNoIiwidW5kZWZpbmVkIiwidG9CZSIsImZpZWxkV2l0aE9wdGlvbnNPYmplY3QiLCJvcHRpb25zIiwidmFsdWUiLCJmaWVsZFdpdGhTdHJpbmdzT3B0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsV0FBVyxRQUFRO0FBQzFCLFNBQVNDLE1BQU0sUUFBUSx5QkFBeUI7QUFFaEQsT0FBT0MsZ0JBQWdCLHVCQUF1QjtBQUM5QyxPQUFPQyxjQUFjLHFCQUFxQjtBQUMxQyxPQUFPQyxjQUFjLHlCQUF5QjtBQUM5QyxPQUFPQyxjQUFjLHlCQUF5QjtBQUM5QyxPQUFPQyxZQUFZLHVCQUF1QjtBQUMxQyxTQUFTQyxJQUFJLFFBQVEsZ0JBQWdCO0FBRXJDLCtHQUErRztBQUMvR0EsS0FBS0MsbUJBQW1CLENBQUMsZ0NBQWdDO1dBQU87UUFDNURDLFdBQVc7bUJBQU87Z0JBQUVDLE9BQU87b0JBQUVDLFlBQVk7Z0JBQXVCO1lBQUU7O0lBQ3RFOztBQUVBSixLQUFLQyxtQkFBbUIsQ0FBQyxpQkFBaUI7V0FBTztRQUMvQ0ksZ0JBQWdCO21CQUFPO2dCQUFFQyxHQUFHLFNBQUNDOzJCQUFXQTs7WUFBTzs7SUFDakQ7O0FBRUFDLFNBQVMsY0FBYztJQUNyQkEsU0FBUyxVQUFVO1FBQ2pCLElBQU1DLFFBQW9CO1lBQ3hCQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsUUFBUTtnQkFDTkMsVUFBVTtnQkFDVkMsUUFBUTtZQUNWO1lBQ0FDLE1B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
import sanitizeFields from "./sanitize";
import { MissingFieldType, InvalidFieldRelationship, InvalidFieldName } from "../../errors";
describe("sanitizeFields", function() {
    it("should throw on missing type field", function() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        var fields = [
            {
                label: "some-collection",
                name: "Some Collection"
            }
        ];
        expect(function() {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            sanitizeFields(fields, []);
        }).toThrow(MissingFieldType);
    });
    it("should throw on invalid field name", function() {
        var fields = [
            {
                label: "some.collection",
                name: "some.collection",
                type: "text"
            }
        ];
        expect(function() {
            sanitizeFields(fields, []);
        }).toThrow(InvalidFieldName);
    });
    describe("auto-labeling", function() {
        it("should populate label if missing", function() {
            var fields = [
                {
                    name: "someField",
                    type: "text"
                }
            ];
            var sanitizedField = sanitizeFields(fields, [])[0];
            expect(sanitizedField.name).toStrictEqual("someField");
            expect(sanitizedField.label).toStrictEqual("Some Field");
            expect(sanitizedField.type).toStrictEqual("text");
        });
        it("should allow auto-label override", function() {
            var fields = [
                {
                    name: "someField",
                    type: "text",
                    label: "Do not label"
                }
            ];
            var sanitizedField = sanitizeFields(fields, [])[0];
            expect(sanitizedField.name).toStrictEqual("someField");
            expect(sanitizedField.label).toStrictEqual("Do not label");
            expect(sanitizedField.type).toStrictEqual("text");
        });
        describe("opt-out", function() {
            it("should allow label opt-out", function() {
                var fields = [
                    {
                        name: "someField",
                        type: "text",
                        label: false
                    }
                ];
                var sanitizedField = sanitizeFields(fields, [])[0];
                expect(sanitizedField.name).toStrictEqual("someField");
                expect(sanitizedField.label).toStrictEqual(false);
                expect(sanitizedField.type).toStrictEqual("text");
            });
            it("should allow label opt-out for arrays", function() {
                var arrayField = {
                    name: "items",
                    type: "array",
                    label: false,
                    fields: [
                        {
                            name: "itemName",
                            type: "text"
                        }
                    ]
                };
                var sanitizedField = sanitizeFields([
                    arrayField
                ], [])[0];
                expect(sanitizedField.name).toStrictEqual("items");
                expect(sanitizedField.label).toStrictEqual(false);
                expect(sanitizedField.type).toStrictEqual("array");
                expect(sanitizedField.labels).toBeUndefined();
            });
            it("should allow label opt-out for blocks", function() {
                var fields = [
                    {
                        name: "noLabelBlock",
                        type: "blocks",
                        label: false,
                        blocks: [
                            {
                                slug: "number",
                                fields: [
                                    {
                                        name: "testNumber",
                                        type: "number"
                                    }
                                ]
                            }
                        ]
                    }
                ];
                var sanitizedField = sanitizeFields(fields, [])[0];
                expect(sanitizedField.name).toStrictEqual("noLabelBlock");
                expect(sanitizedField.label).toStrictEqual(false);
                expect(sanitizedField.type).toStrictEqual("blocks");
                expect(sanitizedField.labels).toBeUndefined();
            });
        });
        it("should label arrays with plural and singular", function() {
            var fields = [
                {
                    name: "items",
                    type: "array",
                    fields: [
                        {
                            name: "itemName",
                            type: "text"
                        }
                    ]
                }
            ];
            var sanitizedField = sanitizeFields(fields, [])[0];
            expect(sanitizedField.name).toStrictEqual("items");
            expect(sanitizedField.label).toStrictEqual("Items");
            expect(sanitizedField.type).toStrictEqual("array");
            expect(sanitizedField.labels).toMatchObject({
                singular: "Item",
                plural: "Items"
            });
        });
        it("should label blocks with plural and singular", function() {
            var fields = [
                {
                    name: "specialBlock",
                    type: "blocks",
                    blocks: [
                        {
                            slug: "number",
                            fields: [
                                {
                                    name: "testNumber",
                                    type: "number"
                                }
                            ]
                        }
                    ]
                }
            ];
            var sanitizedField = sanitizeFields(fields, [])[0];
            expect(sanitizedField.name).toStrictEqual("specialBlock");
            expect(sanitizedField.label).toStrictEqual("Special Block");
            expect(sanitizedField.type).toStrictEqual("blocks");
            expect(sanitizedField.labels).toMatchObject({
                singular: "Special Block",
                plural: "Special Blocks"
            });
            expect(sanitizedField.blocks[0].fields[0].label).toStrictEqual("Test Number");
        });
    });
    describe("relationships", function() {
        it("should not throw on valid relationship", function() {
            var validRelationships = [
                "some-collection"
            ];
            var fields = [
                {
                    type: "relationship",
                    label: "my-relationship",
                    name: "My Relationship",
                    relationTo: "some-collection"
                }
            ];
            expect(function() {
                sanitizeFields(fields, validRelationships);
            }).not.toThrow();
        });
        it("should not throw on valid relationship - multiple", function() {
            var validRelationships = [
                "some-collection",
                "another-collection"
            ];
            var fields = [
                {
                    type: "relationship",
                    label: "my-relationship",
                    name: "My Relationship",
                    relationTo: [
                        "some-collection",
                        "another-collection"
                    ]
                }
            ];
            expect(function() {
                sanitizeFields(fields, validRelationships);
            }).not.toThrow();
        });
        it("should not throw on valid relationship inside blocks", function() {
            var validRelationships = [
                "some-collection"
            ];
            var relationshipBlock = {
                slug: "relationshipBlock",
                fields: [
                    {
                        type: "relationship",
                        label: "my-relationship",
                        name: "My Relationship",
                        relationTo: "some-collection"
                    }
                ]
            };
            var fields = [
                {
                    name: "layout",
                    label: "Layout Blocks",
                    type: "blocks",
                    blocks: [
                        relationshipBlock
                    ]
                }
            ];
            expect(function() {
                sanitizeFields(fields, validRelationships);
            }).not.toThrow();
        });
        it("should throw on invalid relationship", function() {
            var validRelationships = [
                "some-collection"
            ];
            var fields = [
                {
                    type: "relationship",
                    label: "my-relationship",
                    name: "My Relationship",
                    relationTo: "not-valid"
                }
            ];
            expect(function() {
                sanitizeFields(fields, validRelationships);
            }).toThrow(InvalidFieldRelationship);
        });
        it("should throw on invalid relationship - multiple", function() {
            var validRelationships = [
                "some-collection",
                "another-collection"
            ];
            var fields = [
                {
                    type: "relationship",
                    label: "my-relationship",
                    name: "My Relationship",
                    relationTo: [
                        "some-collection",
                        "not-valid"
                    ]
                }
            ];
            expect(function() {
                sanitizeFields(fields, validRelationships);
            }).toThrow(InvalidFieldRelationship);
        });
        it("should throw on invalid relationship inside blocks", function() {
            var validRelationships = [
                "some-collection"
            ];
            var relationshipBlock = {
                slug: "relationshipBlock",
                fields: [
                    {
                        type: "relationship",
                        label: "my-relationship",
                        name: "My Relationship",
                        relationTo: "not-valid"
                    }
                ]
            };
            var fields = [
                {
                    name: "layout",
                    label: "Layout Blocks",
                    type: "blocks",
                    blocks: [
                        relationshipBlock
                    ]
                }
            ];
            expect(function() {
                sanitizeFields(fields, validRelationships);
            }).toThrow(InvalidFieldRelationship);
        });
        it("should defaultValue of checkbox to false if required and undefined", function() {
            var fields = [
                {
                    type: "checkbox",
                    name: "My Checkbox",
                    required: true
                }
            ];
            var sanitizedField = sanitizeFields(fields, [])[0];
            expect(sanitizedField.defaultValue).toStrictEqual(false);
        });
        it("should return empty field array if no fields", function() {
            var sanitizedFields = sanitizeFields([], []);
            expect(sanitizedFields).toStrictEqual([]);
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9maWVsZHMvY29uZmlnL3Nhbml0aXplLnNwZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNhbml0aXplRmllbGRzIGZyb20gJy4vc2FuaXRpemUnO1xuaW1wb3J0IHsgTWlzc2luZ0ZpZWxkVHlwZSwgSW52YWxpZEZpZWxkUmVsYXRpb25zaGlwLCBJbnZhbGlkRmllbGROYW1lIH0gZnJvbSAnLi4vLi4vZXJyb3JzJztcbmltcG9ydCB7IEFycmF5RmllbGQsIEJsb2NrLCBCbG9ja0ZpZWxkLCBDaGVja2JveEZpZWxkLCBGaWVsZCwgTnVtYmVyRmllbGQsIFRleHRGaWVsZCB9IGZyb20gJy4vdHlwZXMnO1xuXG5kZXNjcmliZSgnc2FuaXRpemVGaWVsZHMnLCAoKSA9PiB7XG4gIGl0KCdzaG91bGQgdGhyb3cgb24gbWlzc2luZyB0eXBlIGZpZWxkJywgKCkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgZmllbGRzOiBGaWVsZFtdID0gW3tcbiAgICAgIGxhYmVsOiAnc29tZS1jb2xsZWN0aW9uJyxcbiAgICAgIG5hbWU6ICdTb21lIENvbGxlY3Rpb24nLFxuICAgIH1dO1xuICAgIGV4cGVjdCgoKSA9PiB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBzYW5pdGl6ZUZpZWxkcyhmaWVsZHMsIFtdKTtcbiAgICB9KS50b1Rocm93KE1pc3NpbmdGaWVsZFR5cGUpO1xuICB9KTtcbiAgaXQoJ3Nob3VsZCB0aHJvdyBvbiBpbnZhbGlkIGZpZWxkIG5hbWUnLCAoKSA9PiB7XG4gICAgY29uc3QgZmllbGRzOiBGaWVsZFtdID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ3NvbWUuY29sbGVjdGlvbicsXG4gICAgICAgIG5hbWU6ICdzb21lLmNvbGxlY3Rpb24nLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB9LFxuICAgIF07XG4gICAgZXhwZWN0KCgpID0+IHtcbiAgICAgIHNhbml0aXplRmllbGRzKGZpZWxkcywgW10pO1xuICAgIH0pLnRvVGhyb3coSW52YWxpZEZpZWxkTmFtZSk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdhdXRvLWxhYmVsaW5nJywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgcG9wdWxhdGUgbGFiZWwgaWYgbWlzc2luZycsICgpID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkczogRmllbGRbXSA9IFt7XG4gICAgICAgIG5hbWU6ICdzb21lRmllbGQnLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICB9XTtcbiAgICAgIGNvbnN0IHNhbml0aXplZEZpZWxkID0gc2FuaXRpemVGaWVsZHMoZmllbGRzLCBbXSlbMF0gYXMgVGV4dEZpZWxkO1xuICAgICAgZXhwZWN0KHNhbml0aXplZEZpZWxkLm5hbWUpLnRvU3RyaWN0RXF1YWwoJ3NvbWVGaWVsZCcpO1xuICAgICAgZXhwZWN0KHNhbml0aXplZEZpZWxkLmxhYmVsKS50b1N0cmljdEVxdWFsKCdTb21lIEZpZWxkJyk7XG4gICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQudHlwZSkudG9TdHJpY3RFcXVhbCgndGV4dCcpO1xuICAgIH0pO1xuICAgIGl0KCdzaG91bGQgYWxsb3cgYXV0by1sYWJlbCBvdmVycmlkZScsICgpID0+IHtcbiAgICAgIGNvbnN0IGZpZWxkczogRmllbGRbXSA9IFt7XG4gICAgICAgIG5hbWU6ICdzb21lRmllbGQnLFxuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIGxhYmVsOiAnRG8gbm90IGxhYmVsJyxcbiAgICAgIH1dO1xuICAgICAgY29uc3Qgc2FuaXRpemVkRmllbGQgPSBzYW5pdGl6ZUZpZWxkcyhmaWVsZHMsIFtdKVswXSBhcyBUZXh0RmllbGQ7XG4gICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQubmFtZSkudG9TdHJpY3RFcXVhbCgnc29tZUZpZWxkJyk7XG4gICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQubGFiZWwpLnRvU3RyaWN0RXF1YWwoJ0RvIG5vdCBsYWJlbCcpO1xuICAgICAgZXhwZWN0KHNhbml0aXplZEZpZWxkLnR5cGUpLnRvU3RyaWN0RXF1YWwoJ3RleHQnKTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdvcHQtb3V0JywgKCkgPT4ge1xuICAgICAgaXQoJ3Nob3VsZCBhbGxvdyBsYWJlbCBvcHQtb3V0JywgKCkgPT4ge1xuICAgICAgICBjb25zdCBmaWVsZHM6IEZpZWxkW10gPSBbe1xuICAgICAgICAgIG5hbWU6ICdzb21lRmllbGQnLFxuICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICBsYWJlbDogZmFsc2UsXG4gICAgICAgIH1dO1xuICAgICAgICBjb25zdCBzYW5pdGl6ZWRGaWVsZCA9IHNhbml0aXplRmllbGRzKGZpZWxkcywgW10pWzBdIGFzIFRleHRGaWVsZDtcbiAgICAgICAgZXhwZWN0KHNhbml0aXplZEZpZWxkLm5hbWUpLnRvU3RyaWN0RXF1YWwoJ3NvbWVGaWVsZCcpO1xuICAgICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQubGFiZWwpLnRvU3RyaWN0RXF1YWwoZmFsc2UpO1xuICAgICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQudHlwZSkudG9TdHJpY3RFcXVhbCgndGV4dCcpO1xuICAgICAgfSk7XG5cbiAgICAgIGl0KCdzaG91bGQgYWxsb3cgbGFiZWwgb3B0LW91dCBmb3IgYXJyYXlzJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhcnJheUZpZWxkOiBBcnJheUZpZWxkID0ge1xuICAgICAgICAgIG5hbWU6ICdpdGVtcycsXG4gICAgICAgICAgdHlwZTogJ2FycmF5JyxcbiAgICAgICAgICBsYWJlbDogZmFsc2UsXG4gICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdpdGVtTmFtZScsXG4gICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc2FuaXRpemVkRmllbGQgPSBzYW5pdGl6ZUZpZWxkcyhbYXJyYXlGaWVsZF0sIFtdKVswXSBhcyBBcnJheUZpZWxkO1xuICAgICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQubmFtZSkudG9TdHJpY3RFcXVhbCgnaXRlbXMnKTtcbiAgICAgICAgZXhwZWN0KHNhbml0aXplZEZpZWxkLmxhYmVsKS50b1N0cmljdEVxdWFsKGZhbHNlKTtcbiAgICAgICAgZXhwZWN0KHNhbml0aXplZEZpZWxkLnR5cGUpLnRvU3RyaWN0RXF1YWwoJ2FycmF5Jyk7XG4gICAgICAgIGV4cGVjdChzYW5pdGl6ZWRGaWVsZC5sYWJlbHMpLnRvQmVVbmRlZmluZWQoKTtcbiAgICAgIH0pO1xuICAgICAgaXQoJ3Nob3VsZCBhbGxvdyBsYWJlbCBvcHQtb3V0IGZvciBibG9ja3MnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpZWxkczogRmllbGRbXSA9IFt7XG4gICAgICAgICAgbmFtZTogJ25vTGFiZWxCbG9jaycsXG4gICAgICAgICAgdHlwZTogJ2Jsb2NrcycsXG4gICAgICAgICAgbGFiZWw6IGZhbHNlLFxuICAgICAgICAgIGJsb2NrczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzbHVnOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogJ3Rlc3ROdW1iZXInLFxuICAgICAgICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfV07XG4gICAgICAgIGNvbnN0IHNhbml0aXplZEZpZWxkID0gc2FuaXRpemVGaWVsZHMoZmllbGRzLCBbXSlbMF0gYXMgQmxvY2tGaWVsZDtcbiAgICAgICAgZXhwZWN0KHNhbml0aXplZEZpZWxkLm5hbWUpLnRvU3RyaWN0RXF1YWwoJ25vTGFiZWxCbG9jaycpO1xuICAgICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQubGFiZWwpLnRvU3RyaWN0RXF1YWwoZmFsc2UpO1xuICAgICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQudHlwZSkudG9TdHJpY3RFcXVhbCgnYmxvY2tzJyk7XG4gICAgICAgIGV4cGVjdChzYW5pdGl6ZWRGaWVsZC5sYWJlbHMpLnRvQmVVbmRlZmluZWQoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgICBpdCgnc2hvdWxkIGxhYmVsIGFycmF5cyB3aXRoIHBsdXJhbCBhbmQgc2luZ3VsYXInLCAoKSA9PiB7XG4gICAgICBjb25zdCBmaWVsZHM6IEZpZWxkW10gPSBbe1xuICAgICAgICBuYW1lOiAnaXRlbXMnLFxuICAgICAgICB0eXBlOiAnYXJyYXknLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnaXRlbU5hbWUnLFxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9XTtcbiAgICAgIGNvbnN0IHNhbml0aXplZEZpZWxkID0gc2FuaXRpemVGaWVsZHMoZmllbGRzLCBbXSlbMF0gYXMgQXJyYXlGaWVsZDtcbiAgICAgIGV4cGVjdChzYW5pdGl6ZWRGaWVsZC5uYW1lKS50b1N0cmljdEVxdWFsKCdpdGVtcycpO1xuICAgICAgZXhwZWN0KHNhbml0aXplZEZpZWxkLmxhYmVsKS50b1N0cmljdEVxdWFsKCdJdGVtcycpO1xuICAgICAgZXhwZWN0KHNhbml0aXplZEZpZWxkLnR5cGUpLnRvU3RyaWN0RXF1YWwoJ2FycmF5Jyk7XG4gICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQubGFiZWxzKS50b01hdGNoT2JqZWN0KHsgc2luZ3VsYXI6ICdJdGVtJywgcGx1cmFsOiAnSXRlbXMnIH0pO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBsYWJlbCBibG9ja3Mgd2l0aCBwbHVyYWwgYW5kIHNpbmd1bGFyJywgKCkgPT4ge1xuICAgICAgY29uc3QgZmllbGRzOiBGaWVsZFtdID0gW3tcbiAgICAgICAgbmFtZTogJ3NwZWNpYWxCbG9jaycsXG4gICAgICAgIHR5cGU6ICdibG9ja3MnLFxuICAgICAgICBibG9ja3M6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzbHVnOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIGZpZWxkczogW3sgbmFtZTogJ3Rlc3ROdW1iZXInLCB0eXBlOiAnbnVtYmVyJyB9XSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfV07XG4gICAgICBjb25zdCBzYW5pdGl6ZWRGaWVsZCA9IHNhbml0aXplRmllbGRzKGZpZWxkcywgW10pWzBdIGFzIEJsb2NrRmllbGQ7XG4gICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQubmFtZSkudG9TdHJpY3RFcXVhbCgnc3BlY2lhbEJsb2NrJyk7XG4gICAgICBleHBlY3Qoc2FuaXRpemVkRmllbGQubGFiZWwpLnRvU3RyaWN0RXF1YWwoJ1NwZWNpYWwgQmxvY2snKTtcbiAgICAgIGV4cGVjdChzYW5pdGl6ZWRGaWVsZC50eXBlKS50b1N0cmljdEVxdWFsKCdibG9ja3MnKTtcbiAgICAgIGV4cGVjdChzYW5pdGl6ZWRGaWVsZC5sYWJlbHMpLnRvTWF0Y2hPYmplY3QoeyBzaW5ndWxhcjogJ1NwZWNpYWwgQmxvY2snLCBwbHVyYWw6ICdTcGVjaWFsIEJsb2NrcycgfSk7XG4gICAgICBleHBlY3QoKHNhbml0aXplZEZpZWxkLmJsb2Nrc1swXS5maWVsZHNbMF0gYXMgTnVtYmVyRmllbGQpLmxhYmVsKS50b1N0cmljdEVxdWFsKCdUZXN0IE51bWJlcicpO1xuICAgIH0pO1xuICB9KTtcblxuICBkZXNjcmliZSgncmVsYXRpb25zaGlwcycsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIG5vdCB0aHJvdyBvbiB2YWxpZCByZWxhdGlvbnNoaXAnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZFJlbGF0aW9uc2hpcHMgPSBbJ3NvbWUtY29sbGVjdGlvbiddO1xuICAgICAgY29uc3QgZmllbGRzOiBGaWVsZFtdID0gW3tcbiAgICAgICAgdHlwZTogJ3JlbGF0aW9uc2hpcCcsXG4gICAgICAgIGxhYmVsOiAnbXktcmVsYXRpb25zaGlwJyxcbiAgICAgICAgbmFtZTogJ015IFJlbGF0aW9uc2hpcCcsXG4gICAgICAgIHJlbGF0aW9uVG86ICdzb21lLWNvbGxlY3Rpb24nLFxuICAgICAgfV07XG4gICAgICBleHBlY3QoKCkgPT4ge1xuICAgICAgICBzYW5pdGl6ZUZpZWxkcyhmaWVsZHMsIHZhbGlkUmVsYXRpb25zaGlwcyk7XG4gICAgICB9KS5ub3QudG9UaHJvdygpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCBub3QgdGhyb3cgb24gdmFsaWQgcmVsYXRpb25zaGlwIC0gbXVsdGlwbGUnLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZFJlbGF0aW9uc2hpcHMgPSBbJ3NvbWUtY29sbGVjdGlvbicsICdhbm90aGVyLWNvbGxlY3Rpb24nXTtcbiAgICAgIGNvbnN0IGZpZWxkczogRmllbGRbXSA9IFt7XG4gICAgICAgIHR5cGU6ICdyZWxhdGlvbnNoaXAnLFxuICAgICAgICBsYWJlbDogJ215LXJlbGF0aW9uc2hpcCcsXG4gICAgICAgIG5hbWU6ICdNeSBSZWxhdGlvbnNoaXAnLFxuICAgICAgICByZWxhdGlvblRvOiBbJ3NvbWUtY29sbGVjdGlvbicsICdhbm90aGVyLWNvbGxlY3Rpb24nXSxcbiAgICAgIH1dO1xuICAgICAgZXhwZWN0KCgpID0+IHtcbiAgICAgICAgc2FuaXRpemVGaWVsZHMoZmllbGRzLCB2YWxpZFJlbGF0aW9uc2hpcHMpO1xuICAgICAgfSkubm90LnRvVGhyb3coKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgbm90IHRocm93IG9uIHZhbGlkIHJlbGF0aW9uc2hpcCBpbnNpZGUgYmxvY2tzJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRSZWxhdGlvbnNoaXBzID0gWydzb21lLWNvbGxlY3Rpb24nXTtcbiAgICAgIGNvbnN0IHJlbGF0aW9uc2hpcEJsb2NrOiBCbG9jayA9IHtcbiAgICAgICAgc2x1ZzogJ3JlbGF0aW9uc2hpcEJsb2NrJyxcbiAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgIHR5cGU6ICdyZWxhdGlvbnNoaXAnLFxuICAgICAgICAgIGxhYmVsOiAnbXktcmVsYXRpb25zaGlwJyxcbiAgICAgICAgICBuYW1lOiAnTXkgUmVsYXRpb25zaGlwJyxcbiAgICAgICAgICByZWxhdGlvblRvOiAnc29tZS1jb2xsZWN0aW9uJyxcbiAgICAgICAgfV0sXG4gICAgICB9O1xuICAgICAgY29uc3QgZmllbGRzOiBGaWVsZFtdID0gW3tcbiAgICAgICAgbmFtZTogJ2xheW91dCcsXG4gICAgICAgIGxhYmVsOiAnTGF5b3V0IEJsb2NrcycsXG4gICAgICAgIHR5cGU6ICdibG9ja3MnLFxuICAgICAgICBibG9ja3M6IFtyZWxhdGlvbnNoaXBCbG9ja10sXG4gICAgICB9XTtcbiAgICAgIGV4cGVjdCgoKSA9PiB7XG4gICAgICAgIHNhbml0aXplRmllbGRzKGZpZWxkcywgdmFsaWRSZWxhdGlvbnNoaXBzKTtcbiAgICAgIH0pLm5vdC50b1Rocm93KCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHRocm93IG9uIGludmFsaWQgcmVsYXRpb25zaGlwJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRSZWxhdGlvbnNoaXBzID0gWydzb21lLWNvbGxlY3Rpb24nXTtcbiAgICAgIGNvbnN0IGZpZWxkczogRmllbGRbXSA9IFt7XG4gICAgICAgIHR5cGU6ICdyZWxhdGlvbnNoaXAnLFxuICAgICAgICBsYWJlbDogJ215LXJlbGF0aW9uc2hpcCcsXG4gICAgICAgIG5hbWU6ICdNeSBSZWxhdGlvbnNoaXAnLFxuICAgICAgICByZWxhdGlvblRvOiAnbm90LXZhbGlkJyxcbiAgICAgIH1dO1xuICAgICAgZXhwZWN0KCgpID0+IHtcbiAgICAgICAgc2FuaXRpemVGaWVsZHMoZmllbGRzLCB2YWxpZFJlbGF0aW9uc2hpcHMpO1xuICAgICAgfSkudG9UaHJvdyhJbnZhbGlkRmllbGRSZWxhdGlvbnNoaXApO1xuICAgIH0pO1xuXG4gICAgaXQoJ3Nob3VsZCB0aHJvdyBvbiBpbnZhbGlkIHJlbGF0aW9uc2hpcCAtIG11bHRpcGxlJywgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRSZWxhdGlvbnNoaXBzID0gWydzb21lLWNvbGxlY3Rpb24nLCAnYW5vdGhlci1jb2xsZWN0aW9uJ107XG4gICAgICBjb25zdCBmaWVsZHM6IEZpZWxkW10gPSBbe1xuICAgICAgICB0eXBlOiAncmVsYXRpb25zaGlwJyxcbiAgICAgICAgbGFiZWw6ICdteS1yZWxhdGlvbnNoaXAnLFxuICAgICAgICBuYW1lOiAnTXkgUmVsYXRpb25zaGlwJyxcbiAgICAgICAgcmVsYXRpb25UbzogWydzb21lLWNvbGxlY3Rpb24nLCAnbm90LXZhbGlkJ10sXG4gICAgICB9XTtcbiAgICAgIGV4cGVjdCgoKSA9PiB7XG4gICAgICAgIHNhbml0aXplRmllbGRzKGZpZWxkcywgdmFsaWRSZWxhdGlvbnNoaXBzKTtcbiAgICAgIH0pLnRvVGhyb3coSW52YWxpZEZpZWxkUmVsYXRpb25zaGlwKTtcbiAgICB9KTtcblxuICAgIGl0KCdzaG91bGQgdGhyb3cgb24gaW52YWxpZCByZWxhdGlvbnNoaXAgaW5zaWRlIGJsb2NrcycsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkUmVsYXRpb25zaGlwcyA9IFsnc29tZS1jb2xsZWN0aW9uJ107XG4gICAgICBjb25zdCByZWxhdGlvbnNoaXBCbG9jazogQmxvY2sgPSB7XG4gICAgICAgIHNsdWc6ICdyZWxhdGlvbnNoaXBCbG9jaycsXG4gICAgICAgIGZpZWxkczogW3tcbiAgICAgICAgICB0eXBlOiAncmVsYXRpb25zaGlwJyxcbiAgICAgICAgICBsYWJlbDogJ215LXJlbGF0aW9uc2hpcCcsXG4gICAgICAgICAgbmFtZTogJ015IFJlbGF0aW9uc2hpcCcsXG4gICAgICAgICAgcmVsYXRpb25UbzogJ25vdC12YWxpZCcsXG4gICAgICAgIH1dLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IGZpZWxkczogRmllbGRbXSA9IFt7XG4gICAgICAgIG5hbWU6ICdsYXlvdXQnLFxuICAgICAgICBsYWJlbDogJ0xheW91dCBCbG9ja3MnLFxuICAgICAgICB0eXBlOiAnYmxvY2tzJyxcbiAgICAgICAgYmxvY2tzOiBbcmVsYXRpb25zaGlwQmxvY2tdLFxuICAgICAgfV07XG4gICAgICBleHBlY3QoKCkgPT4ge1xuICAgICAgICBzYW5pdGl6ZUZpZWxkcyhmaWVsZHMsIHZhbGlkUmVsYXRpb25zaGlwcyk7XG4gICAgICB9KS50b1Rocm93KEludmFsaWRGaWVsZFJlbGF0aW9uc2hpcCk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGRlZmF1bHRWYWx1ZSBvZiBjaGVja2JveCB0byBmYWxzZSBpZiByZXF1aXJlZCBhbmQgdW5kZWZpbmVkJywgKCkgPT4ge1xuICAgICAgY29uc3QgZmllbGRzOiBGaWVsZFtdID0gW3tcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgbmFtZTogJ015IENoZWNrYm94JyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB9XTtcblxuICAgICAgY29uc3Qgc2FuaXRpemVkRmllbGQgPSBzYW5pdGl6ZUZpZWxkcyhmaWVsZHMsIFtdKVswXSBhcyBDaGVja2JveEZpZWxkO1xuICAgICAgZXhwZWN0KHNhbml0aXplZEZpZWxkLmRlZmF1bHRWYWx1ZSkudG9TdHJpY3RFcXVhbChmYWxzZSk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIHJldHVybiBlbXB0eSBmaWVsZCBhcnJheSBpZiBubyBmaWVsZHMnLCAoKSA9PiB7XG4gICAgICBjb25zdCBzYW5pdGl6ZWRGaWVsZHMgPSBzYW5pdGl6ZUZpZWxkcyhbXSwgW10pO1xuICAgICAgZXhwZWN0KHNhbml0aXplZEZpZWxkcykudG9TdHJpY3RFcXVhbChbXSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOlsic2FuaXRpemVGaWVsZHMiLCJNaXNzaW5nRmllbGRUeXBlIiwiSW52YWxpZEZpZWxkUmVsYXRpb25zaGlwIiwiSW52YWxpZEZpZWxkTmFtZSIsImRlc2NyaWJlIiwiaXQiLCJmaWVsZHMiLCJsYWJlbCIsIm5hbWUiLCJleHBlY3QiLCJ0b1Rocm93IiwidHlwZSIsInNhbml0aXplZEZpZWxkIiwidG9TdHJpY3RFcXVhbCIsImFycmF5RmllbGQiLCJsYWJlbHMiLCJ0b0JlVW5kZWZpbmVkIiwiYmxvY2tzIiwic2x1ZyIsInRvTWF0Y2hPYmplY3QiLCJzaW5ndWxhciIsInBsdXJhbCIsInZhbGlkUmVsYXRpb25zaGlwcyIsInJlbGF0aW9uVG8iLCJub3QiLCJyZWxhdGlvbnNoaXBCbG9jayIsInJlcXVpcmVkIiwiZGVmYXVsdFZhbHVlIiwic2FuaXRpemVkRmllbGRzIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxvQkFBb0IsYUFBYTtBQUN4QyxTQUFTQyxnQkFBZ0IsRUFBRUMsd0JBQXdCLEVBQUVDLGdCQUFnQixRQUFRLGVBQWU7QUFHNUZDLFNBQVMsa0JBQWtCO0lBQ3pCQyxHQUFHLHNDQUFzQztRQUN2Qyw2REFBNkQ7UUFDN0QsYUFBYTtRQUNiLElBQU1DLFNBQWtCO1lBQUM7Z0JBQ3ZCQyxPQUFPO2dCQUNQQyxNQUFNO1lBQ1I7U0FBRTtRQUNGQyxPQUFPO1lBQ0wsNkRBQTZEO1lBQzdELGFBQWE7WUFDYlQsZUFBZU0sUUFBUSxFQUFFO1FBQzNCLEdBQUdJLE9BQU8sQ0FBQ1Q7SUFDYjtJQUNBSSxHQUFHLHNDQUFzQztRQUN2QyxJQUFNQyxTQUFrQjtZQUN0QjtnQkFDRUMsT0FBTztnQkFDUEMsTUFBTTtnQkFDTkcsTUFBTTtZQUNSO1NBQ0Q7UUFDREYsT0FBTztZQUNMVCxlQUFlTSxRQUFR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
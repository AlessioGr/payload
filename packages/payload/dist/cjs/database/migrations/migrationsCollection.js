"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "migrationsCollection", {
    enumerable: true,
    get: function() {
        return migrationsCollection;
    }
});
var migrationsCollection = {
    slug: "payload-migrations",
    admin: {
        hidden: true
    },
    graphQL: false,
    fields: [
        {
            name: "name",
            type: "text"
        },
        {
            name: "batch",
            type: "number"
        },
        // TODO: determine how schema will impact migration workflow
        {
            name: "schema",
            type: "json"
        }
    ]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9taWdyYXRpb25zL21pZ3JhdGlvbnNDb2xsZWN0aW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBtaWdyYXRpb25zQ29sbGVjdGlvbjogQ29sbGVjdGlvbkNvbmZpZyA9IHtcbiAgc2x1ZzogJ3BheWxvYWQtbWlncmF0aW9ucycsXG4gIGFkbWluOiB7XG4gICAgaGlkZGVuOiB0cnVlLFxuICB9LFxuICBncmFwaFFMOiBmYWxzZSxcbiAgZmllbGRzOiBbXG4gICAge1xuICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ2JhdGNoJyxcbiAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgLy8gTk9URTogVGhpcyB2YWx1ZSBpcyAtMSBpZiBpdCBpcyBhIFwiZGV2IHB1c2hcIlxuICAgIH0sXG4gICAgLy8gVE9ETzogZGV0ZXJtaW5lIGhvdyBzY2hlbWEgd2lsbCBpbXBhY3QgbWlncmF0aW9uIHdvcmtmbG93XG4gICAge1xuICAgICAgbmFtZTogJ3NjaGVtYScsXG4gICAgICB0eXBlOiAnanNvbicsXG4gICAgfSxcbiAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRvIHBlcnNpc3QgdGhlIGluZGV4ZXMgc2VwYXJhdGUgZnJvbSB0aGUgc2NoZW1hP1xuICAgIC8vIHtcbiAgICAvLyAgIG5hbWU6ICdpbmRleGVzJyxcbiAgICAvLyAgIHR5cGU6ICdhcnJheScsXG4gICAgLy8gICBmaWVsZHM6IFtcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgIG5hbWU6ICdpbmRleCcsXG4gICAgLy8gICAgICAgdHlwZTogJ3RleHQnLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgbmFtZTogJ3ZhbHVlJyxcbiAgICAvLyAgICAgICB0eXBlOiAnanNvbicsXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICBdLFxuICAgIC8vIH0sXG4gIF0sXG59O1xuIl0sIm5hbWVzIjpbIm1pZ3JhdGlvbnNDb2xsZWN0aW9uIiwic2x1ZyIsImFkbWluIiwiaGlkZGVuIiwiZ3JhcGhRTCIsImZpZWxkcyIsIm5hbWUiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7OytCQUVhQTs7O2VBQUFBOzs7QUFBTixJQUFNQSx1QkFBeUM7SUFDcERDLE1BQU07SUFDTkMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUMsU0FBUztJQUNUQyxRQUFRO1FBQ047WUFDRUMsTUFBTTtZQUNOQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxNQUFNO1lBQ05DLE1BQU07UUFFUjtRQUNBLDREQUE0RDtRQUM1RDtZQUNFRCxNQUFNO1lBQ05DLE1BQU07UUFDUjtLQWdCRDtBQUNIIn0=
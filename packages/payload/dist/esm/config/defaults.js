var _process, _process1;
import path from "path";
export var defaults = {
    serverURL: "",
    defaultDepth: 2,
    maxDepth: 10,
    defaultMaxTextLength: 40000,
    collections: [],
    globals: [],
    endpoints: [],
    cookiePrefix: "payload",
    csrf: [],
    cors: [],
    admin: {
        buildPath: path.resolve(process.cwd(), "./build"),
        meta: {
            titleSuffix: "- Payload"
        },
        disable: false,
        indexHTML: path.resolve(path.dirname(new URL(import.meta.url).pathname), "../admin/index.html"),
        avatar: "default",
        components: {},
        logoutRoute: "/logout",
        inactivityRoute: "/logout-inactivity",
        css: path.resolve(path.dirname(new URL(import.meta.url).pathname), "../admin/scss/custom.css"),
        dateFormat: "MMMM do yyyy, h:mm a"
    },
    typescript: {
        outputFile: "".concat(typeof ((_process = process) === null || _process === void 0 ? void 0 : _process.cwd) === "function" ? process.cwd() : "", "/payload-types.ts")
    },
    upload: {},
    graphQL: {
        maxComplexity: 1000,
        disablePlaygroundInProduction: true,
        schemaOutputFile: "".concat(typeof ((_process1 = process) === null || _process1 === void 0 ? void 0 : _process1.cwd) === "function" ? process.cwd() : "", "/schema.graphql")
    },
    routes: {
        admin: "/admin",
        api: "/api",
        graphQL: "/graphql",
        graphQLPlayground: "/graphql-playground"
    },
    rateLimit: {
        window: 15 * 60 * 100,
        max: 500
    },
    express: {
        json: {},
        compression: {},
        middleware: [],
        preMiddleware: [],
        postMiddleware: []
    },
    hooks: {},
    localization: false,
    telemetry: true,
    custom: {}
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWcvZGVmYXVsdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRzOiBPbWl0PENvbmZpZywgJ2RiJz4gPSB7XG4gIHNlcnZlclVSTDogJycsXG4gIGRlZmF1bHREZXB0aDogMixcbiAgbWF4RGVwdGg6IDEwLFxuICBkZWZhdWx0TWF4VGV4dExlbmd0aDogNDAwMDAsXG4gIGNvbGxlY3Rpb25zOiBbXSxcbiAgZ2xvYmFsczogW10sXG4gIGVuZHBvaW50czogW10sXG4gIGNvb2tpZVByZWZpeDogJ3BheWxvYWQnLFxuICBjc3JmOiBbXSxcbiAgY29yczogW10sXG4gIGFkbWluOiB7XG4gICAgYnVpbGRQYXRoOiBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJy4vYnVpbGQnKSxcbiAgICBtZXRhOiB7XG4gICAgICB0aXRsZVN1ZmZpeDogJy0gUGF5bG9hZCcsXG4gICAgfSxcbiAgICBkaXNhYmxlOiBmYWxzZSxcbiAgICBpbmRleEhUTUw6IHBhdGgucmVzb2x2ZShwYXRoLmRpcm5hbWUobmV3IFVSTChpbXBvcnQubWV0YS51cmwpLnBhdGhuYW1lKSwgJy4uL2FkbWluL2luZGV4Lmh0bWwnKSxcbiAgICBhdmF0YXI6ICdkZWZhdWx0JyxcbiAgICBjb21wb25lbnRzOiB7fSxcbiAgICBsb2dvdXRSb3V0ZTogJy9sb2dvdXQnLFxuICAgIGluYWN0aXZpdHlSb3V0ZTogJy9sb2dvdXQtaW5hY3Rpdml0eScsXG4gICAgY3NzOiBwYXRoLnJlc29sdmUocGF0aC5kaXJuYW1lKG5ldyBVUkwoaW1wb3J0Lm1ldGEudXJsKS5wYXRobmFtZSksICcuLi9hZG1pbi9zY3NzL2N1c3RvbS5jc3MnKSxcbiAgICBkYXRlRm9ybWF0OiAnTU1NTSBkbyB5eXl5LCBoOm1tIGEnLFxuICB9LFxuICB0eXBlc2NyaXB0OiB7XG4gICAgb3V0cHV0RmlsZTogYCR7dHlwZW9mIHByb2Nlc3M/LmN3ZCA9PT0gJ2Z1bmN0aW9uJyA/IHByb2Nlc3MuY3dkKCkgOiAnJ30vcGF5bG9hZC10eXBlcy50c2AsXG4gIH0sXG4gIHVwbG9hZDoge30sXG4gIGdyYXBoUUw6IHtcbiAgICBtYXhDb21wbGV4aXR5OiAxMDAwLFxuICAgIGRpc2FibGVQbGF5Z3JvdW5kSW5Qcm9kdWN0aW9uOiB0cnVlLFxuICAgIHNjaGVtYU91dHB1dEZpbGU6IGAke3R5cGVvZiBwcm9jZXNzPy5jd2QgPT09ICdmdW5jdGlvbicgPyBwcm9jZXNzLmN3ZCgpIDogJyd9L3NjaGVtYS5ncmFwaHFsYCxcbiAgfSxcbiAgcm91dGVzOiB7XG4gICAgYWRtaW46ICcvYWRtaW4nLFxuICAgIGFwaTogJy9hcGknLFxuICAgIGdyYXBoUUw6ICcvZ3JhcGhxbCcsXG4gICAgZ3JhcGhRTFBsYXlncm91bmQ6ICcvZ3JhcGhxbC1wbGF5Z3JvdW5kJyxcbiAgfSxcbiAgcmF0ZUxpbWl0OiB7XG4gICAgd2luZG93OiAxNSAqIDYwICogMTAwLCAvLyAxNW1pbiBkZWZhdWx0LFxuICAgIG1heDogNTAwLFxuICB9LFxuICBleHByZXNzOiB7XG4gICAganNvbjoge30sXG4gICAgY29tcHJlc3Npb246IHt9LFxuICAgIG1pZGRsZXdhcmU6IFtdLFxuICAgIHByZU1pZGRsZXdhcmU6IFtdLFxuICAgIHBvc3RNaWRkbGV3YXJlOiBbXSxcbiAgfSxcbiAgaG9va3M6IHt9LFxuICBsb2NhbGl6YXRpb246IGZhbHNlLFxuICB0ZWxlbWV0cnk6IHRydWUsXG4gIGN1c3RvbToge30sXG59O1xuIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJwYXRoIiwiZGVmYXVsdHMiLCJzZXJ2ZXJVUkwiLCJkZWZhdWx0RGVwdGgiLCJtYXhEZXB0aCIsImRlZmF1bHRNYXhUZXh0TGVuZ3RoIiwiY29sbGVjdGlvbnMiLCJnbG9iYWxzIiwiZW5kcG9pbnRzIiwiY29va2llUHJlZml4IiwiY3NyZiIsImNvcnMiLCJhZG1pbiIsImJ1aWxkUGF0aCIsInJlc29sdmUiLCJjd2QiLCJtZXRhIiwidGl0bGVTdWZmaXgiLCJkaXNhYmxlIiwiaW5kZXhIVE1MIiwiZGlybmFtZSIsIlVSTCIsInVybCIsInBhdGhuYW1lIiwiYXZhdGFyIiwiY29tcG9uZW50cyIsImxvZ291dFJvdXRlIiwiaW5hY3Rpdml0eVJvdXRlIiwiY3NzIiwiZGF0ZUZvcm1hdCIsInR5cGVzY3JpcHQiLCJvdXRwdXRGaWxlIiwidXBsb2FkIiwiZ3JhcGhRTCIsIm1heENvbXBsZXhpdHkiLCJkaXNhYmxlUGxheWdyb3VuZEluUHJvZHVjdGlvbiIsInNjaGVtYU91dHB1dEZpbGUiLCJyb3V0ZXMiLCJhcGkiLCJncmFwaFFMUGxheWdyb3VuZCIsInJhdGVMaW1pdCIsIndpbmRvdyIsIm1heCIsImV4cHJlc3MiLCJqc29uIiwiY29tcHJlc3Npb24iLCJtaWRkbGV3YXJlIiwicHJlTWlkZGxld2FyZSIsInBvc3RNaWRkbGV3YXJlIiwiaG9va3MiLCJsb2NhbGl6YXRpb24iLCJ0ZWxlbWV0cnkiLCJjdXN0b20iXSwibWFwcGluZ3MiOiJJQTZCMEJBLFVBTU1BO0FBbkNoQyxPQUFPQyxVQUFVLE9BQU87QUFHeEIsT0FBTyxJQUFNQyxXQUErQjtJQUMxQ0MsV0FBVztJQUNYQyxjQUFjO0lBQ2RDLFVBQVU7SUFDVkMsc0JBQXNCO0lBQ3RCQyxhQUFhLEVBQUU7SUFDZkMsU0FBUyxFQUFFO0lBQ1hDLFdBQVcsRUFBRTtJQUNiQyxjQUFjO0lBQ2RDLE1BQU0sRUFBRTtJQUNSQyxNQUFNLEVBQUU7SUFDUkMsT0FBTztRQUNMQyxXQUFXYixLQUFLYyxPQUFPLENBQUNmLFFBQVFnQixHQUFHLElBQUk7UUFDdkNDLE1BQU07WUFDSkMsYUFBYTtRQUNmO1FBQ0FDLFNBQVM7UUFDVEMsV0FBV25CLEtBQUtjLE9BQU8sQ0FBQ2QsS0FBS29CLE9BQU8sQ0FBQyxJQUFJQyxJQUFJLFlBQVlDLEdBQUcsRUFBRUMsUUFBUSxHQUFHO1FBQ3pFQyxRQUFRO1FBQ1JDLFlBQVksQ0FBQztRQUNiQyxhQUFhO1FBQ2JDLGlCQUFpQjtRQUNqQkMsS0FBSzVCLEtBQUtjLE9BQU8sQ0FBQ2QsS0FBS29CLE9BQU8sQ0FBQyxJQUFJQyxJQUFJLFlBQVlDLEdBQUcsRUFBRUMsUUFBUSxHQUFHO1FBQ25FTSxZQUFZO0lBQ2Q7SUFDQUMsWUFBWTtRQUNWQyxZQUFZLEFBQUMsR0FBMEQsT0FBeEQsU0FBT2hDLFdBQUFBLHFCQUFBQSwrQkFBQUEsU0FBU2dCLEdBQUcsTUFBSyxhQUFhaEIsUUFBUWdCLEdBQUcsS0FBSyxJQUFHO0lBQ3pFO0lBQ0FpQixRQUFRLENBQUM7SUFDVEMsU0FBUztRQUNQQyxlQUFlO1FBQ2ZDLCtCQUErQjtRQUMvQkMsa0JBQWtCLEFBQUMsR0FBMEQsT0FBeEQsU0FBT3JDLFlBQUFBLHFCQUFBQSxnQ0FBQUEsVUFBU2dCLEdBQUcsTUFBSyxhQUFhaEIsUUFBUWdCLEdBQUcsS0FBSyxJQUFHO0lBQy9FO0lBQ0FzQixRQUFRO1FBQ056QixPQUFPO1FBQ1AwQixLQUFLO1FBQ0xMLFNBQVM7UUFDVE0sbUJBQW1CO0lBQ3JCO0lBQ0FDLFdBQVc7UUFDVEMsUUFBUSxLQUFLLEtBQUs7UUFDbEJDLEtBQUs7SUFDUDtJQUNBQyxTQUFTO1FBQ1BDLE1BQU0sQ0FBQztRQUNQQyxhQUFhLENBQUM7UUFDZEMsWUFBWSxFQUFFO1FBQ2RDLGVBQWUsRUFBRTtRQUNqQkMsZ0JBQWdCLEVBQUU7SUFDcEI7SUFDQUMsT0FBTyxDQUFDO0lBQ1JDLGNBQWM7SUFDZEMsV0FBVztJQUNYQyxRQUFRLENBQUM7QUFDWCxFQUFFIn0=
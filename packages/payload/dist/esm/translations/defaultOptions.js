import translations from "./index";
export var defaultOptions = {
    fallbackLng: "en",
    debug: false,
    supportedLngs: Object.keys(translations),
    resources: translations,
    interpolation: {
        escapeValue: false
    },
    detection: {
        order: [
            "cookie",
            "localStorage"
        ],
        lookupCookie: "lng",
        lookupLocalStorage: "lng",
        caches: [
            "cookie",
            "localStorage"
        ]
    }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90cmFuc2xhdGlvbnMvZGVmYXVsdE9wdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBJbml0T3B0aW9ucyB9IGZyb20gJ2kxOG5leHQnO1xuaW1wb3J0IHRyYW5zbGF0aW9ucyBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPcHRpb25zOiBJbml0T3B0aW9ucyA9IHtcbiAgZmFsbGJhY2tMbmc6ICdlbicsXG4gIGRlYnVnOiBmYWxzZSxcbiAgc3VwcG9ydGVkTG5nczogT2JqZWN0LmtleXModHJhbnNsYXRpb25zKSxcbiAgcmVzb3VyY2VzOiB0cmFuc2xhdGlvbnMsXG4gIGludGVycG9sYXRpb246IHtcbiAgICBlc2NhcGVWYWx1ZTogZmFsc2UsXG4gIH0sXG4gIGRldGVjdGlvbjoge1xuICAgIG9yZGVyOiBbXG4gICAgICAnY29va2llJyxcbiAgICAgICdsb2NhbFN0b3JhZ2UnLFxuICAgIF0sXG4gICAgbG9va3VwQ29va2llOiAnbG5nJyxcbiAgICBsb29rdXBMb2NhbFN0b3JhZ2U6ICdsbmcnLFxuICAgIGNhY2hlczogW1xuICAgICAgJ2Nvb2tpZScsXG4gICAgICAnbG9jYWxTdG9yYWdlJyxcbiAgICBdLFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJ0cmFuc2xhdGlvbnMiLCJkZWZhdWx0T3B0aW9ucyIsImZhbGxiYWNrTG5nIiwiZGVidWciLCJzdXBwb3J0ZWRMbmdzIiwiT2JqZWN0Iiwia2V5cyIsInJlc291cmNlcyIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsImRldGVjdGlvbiIsIm9yZGVyIiwibG9va3VwQ29va2llIiwibG9va3VwTG9jYWxTdG9yYWdlIiwiY2FjaGVzIl0sIm1hcHBpbmdzIjoiQUFDQSxPQUFPQSxrQkFBa0IsVUFBVTtBQUVuQyxPQUFPLElBQU1DLGlCQUE4QjtJQUN6Q0MsYUFBYTtJQUNiQyxPQUFPO0lBQ1BDLGVBQWVDLE9BQU9DLElBQUksQ0FBQ047SUFDM0JPLFdBQVdQO0lBQ1hRLGVBQWU7UUFDYkMsYUFBYTtJQUNmO0lBQ0FDLFdBQVc7UUFDVEMsT0FBTztZQUNMO1lBQ0E7U0FDRDtRQUNEQyxjQUFjO1FBQ2RDLG9CQUFvQjtRQUNwQkMsUUFBUTtZQUNOO1lBQ0E7U0FDRDtJQUNIO0FBQ0YsRUFBRSJ9
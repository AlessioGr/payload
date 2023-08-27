import React, { Suspense, lazy } from "react";
import { LoadingOverlayToggle } from "../../elements/Loading";
var VersionView = /*#__PURE__*/ lazy(function() {
    return import("./Version");
});
var Version = function(props) {
    return /*#__PURE__*/ React.createElement(Suspense, {
        fallback: /*#__PURE__*/ React.createElement(LoadingOverlayToggle, {
            show: true,
            name: "version-suspense"
        })
    }, /*#__PURE__*/ React.createElement(VersionView, props));
};
export default Version;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL3ZpZXdzL1ZlcnNpb24vaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSwgbGF6eSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExvYWRpbmdPdmVybGF5VG9nZ2xlIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvTG9hZGluZyc7XG5pbXBvcnQgeyBQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBWZXJzaW9uVmlldyA9IGxhenkoKCkgPT4gaW1wb3J0KCcuL1ZlcnNpb24nKSk7XG5cbmNvbnN0IFZlcnNpb246IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4gKFxuICA8U3VzcGVuc2UgZmFsbGJhY2s9eyhcbiAgICA8TG9hZGluZ092ZXJsYXlUb2dnbGVcbiAgICAgIHNob3dcbiAgICAgIG5hbWU9XCJ2ZXJzaW9uLXN1c3BlbnNlXCJcbiAgICAvPlxuICApfVxuICA+XG4gICAgPFZlcnNpb25WaWV3IHsuLi5wcm9wc30gLz5cbiAgPC9TdXNwZW5zZT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFZlcnNpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTdXNwZW5zZSIsImxhenkiLCJMb2FkaW5nT3ZlcmxheVRvZ2dsZSIsIlZlcnNpb25WaWV3IiwiVmVyc2lvbiIsInByb3BzIiwiZmFsbGJhY2siLCJzaG93IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsU0FBU0MsUUFBUSxFQUFFQyxJQUFJLFFBQVEsUUFBUTtBQUM5QyxTQUFTQyxvQkFBb0IsUUFBUSx5QkFBeUI7QUFHOUQsSUFBTUMsNEJBQWNGLEtBQUs7V0FBTSxNQUFNLENBQUM7O0FBRXRDLElBQU1HLFVBQTJCLFNBQUNDO3lCQUNoQyxvQkFBQ0w7UUFBU00sd0JBQ1Isb0JBQUNKO1lBQ0NLLE1BQUFBO1lBQ0FDLE1BQUs7O3FCQUlQLG9CQUFDTCxhQUFnQkU7O0FBSXJCLGVBQWVELFFBQVEifQ==
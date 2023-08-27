"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _find = /*#__PURE__*/ _interop_require_default(require("./find"));
var _findByID = /*#__PURE__*/ _interop_require_default(require("./findByID"));
var _create = /*#__PURE__*/ _interop_require_default(require("./create"));
var _update = /*#__PURE__*/ _interop_require_default(require("./update"));
var _delete = /*#__PURE__*/ _interop_require_default(require("./delete"));
var _local = /*#__PURE__*/ _interop_require_default(require("../../../auth/operations/local"));
var _findVersionByID = /*#__PURE__*/ _interop_require_default(require("./findVersionByID"));
var _findVersions = /*#__PURE__*/ _interop_require_default(require("./findVersions"));
var _restoreVersion = /*#__PURE__*/ _interop_require_default(require("./restoreVersion"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _default = {
    find: _find.default,
    findByID: _findByID.default,
    create: _create.default,
    update: _update.default,
    deleteLocal: _delete.default,
    auth: _local.default,
    findVersionByID: _findVersionByID.default,
    findVersions: _findVersions.default,
    restoreVersion: _restoreVersion.default
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb2xsZWN0aW9ucy9vcGVyYXRpb25zL2xvY2FsL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaW5kIGZyb20gJy4vZmluZCc7XG5pbXBvcnQgZmluZEJ5SUQgZnJvbSAnLi9maW5kQnlJRCc7XG5pbXBvcnQgY3JlYXRlIGZyb20gJy4vY3JlYXRlJztcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi91cGRhdGUnO1xuaW1wb3J0IGRlbGV0ZUxvY2FsIGZyb20gJy4vZGVsZXRlJztcbmltcG9ydCBhdXRoIGZyb20gJy4uLy4uLy4uL2F1dGgvb3BlcmF0aW9ucy9sb2NhbCc7XG5pbXBvcnQgZmluZFZlcnNpb25CeUlEIGZyb20gJy4vZmluZFZlcnNpb25CeUlEJztcbmltcG9ydCBmaW5kVmVyc2lvbnMgZnJvbSAnLi9maW5kVmVyc2lvbnMnO1xuaW1wb3J0IHJlc3RvcmVWZXJzaW9uIGZyb20gJy4vcmVzdG9yZVZlcnNpb24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpbmQsXG4gIGZpbmRCeUlELFxuICBjcmVhdGUsXG4gIHVwZGF0ZSxcbiAgZGVsZXRlTG9jYWwsXG4gIGF1dGgsXG4gIGZpbmRWZXJzaW9uQnlJRCxcbiAgZmluZFZlcnNpb25zLFxuICByZXN0b3JlVmVyc2lvbixcbn07XG4iXSwibmFtZXMiOlsiZmluZCIsImZpbmRCeUlEIiwiY3JlYXRlIiwidXBkYXRlIiwiZGVsZXRlTG9jYWwiLCJhdXRoIiwiZmluZFZlcnNpb25CeUlEIiwiZmluZFZlcnNpb25zIiwicmVzdG9yZVZlcnNpb24iXSwibWFwcGluZ3MiOiI7Ozs7K0JBVUE7OztlQUFBOzs7MkRBVmlCOytEQUNJOzZEQUNGOzZEQUNBOzZEQUNLOzREQUNQO3NFQUNXO21FQUNIO3FFQUNFOzs7Ozs7SUFFM0IsV0FBZTtJQUNiQSxNQUFBQSxhQUFJO0lBQ0pDLFVBQUFBLGlCQUFRO0lBQ1JDLFFBQUFBLGVBQU07SUFDTkMsUUFBQUEsZUFBTTtJQUNOQyxhQUFBQSxlQUFXO0lBQ1hDLE1BQUFBLGNBQUk7SUFDSkMsaUJBQUFBLHdCQUFlO0lBQ2ZDLGNBQUFBLHFCQUFZO0lBQ1pDLGdCQUFBQSx1QkFBYztBQUNoQiJ9
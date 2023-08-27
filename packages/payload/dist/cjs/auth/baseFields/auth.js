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
var _validations = require("../../fields/validations");
var _extractTranslations = require("../../translations/extractTranslations");
var labels = (0, _extractTranslations.extractTranslations)([
    "general:email"
]);
var baseAuthFields = [
    {
        name: "email",
        label: labels["general:email"],
        type: "email",
        validate: _validations.email,
        unique: true,
        required: true,
        admin: {
            components: {
                Field: function() {
                    return null;
                }
            }
        }
    },
    {
        name: "resetPasswordToken",
        type: "text",
        hidden: true
    },
    {
        name: "resetPasswordExpiration",
        type: "date",
        hidden: true
    },
    {
        name: "salt",
        type: "text",
        hidden: true
    },
    {
        name: "hash",
        type: "text",
        hidden: true
    }
];
var _default = baseAuthFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL2Jhc2VGaWVsZHMvYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbWFpbCB9IGZyb20gJy4uLy4uL2ZpZWxkcy92YWxpZGF0aW9ucyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgZXh0cmFjdFRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucy9leHRyYWN0VHJhbnNsYXRpb25zJztcblxuY29uc3QgbGFiZWxzID0gZXh0cmFjdFRyYW5zbGF0aW9ucyhbJ2dlbmVyYWw6ZW1haWwnXSk7XG5cbmNvbnN0IGJhc2VBdXRoRmllbGRzOiBGaWVsZFtdID0gW1xuICB7XG4gICAgbmFtZTogJ2VtYWlsJyxcbiAgICBsYWJlbDogbGFiZWxzWydnZW5lcmFsOmVtYWlsJ10sXG4gICAgdHlwZTogJ2VtYWlsJyxcbiAgICB2YWxpZGF0ZTogZW1haWwsXG4gICAgdW5pcXVlOiB0cnVlLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGFkbWluOiB7XG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEZpZWxkOiAoKSA9PiBudWxsLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ3Jlc2V0UGFzc3dvcmRUb2tlbicsXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIGhpZGRlbjogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdyZXNldFBhc3N3b3JkRXhwaXJhdGlvbicsXG4gICAgdHlwZTogJ2RhdGUnLFxuICAgIGhpZGRlbjogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdzYWx0JyxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgaGlkZGVuOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2hhc2gnLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBoaWRkZW46IHRydWUsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBiYXNlQXV0aEZpZWxkcztcbiJdLCJuYW1lcyI6WyJsYWJlbHMiLCJleHRyYWN0VHJhbnNsYXRpb25zIiwiYmFzZUF1dGhGaWVsZHMiLCJuYW1lIiwibGFiZWwiLCJ0eXBlIiwidmFsaWRhdGUiLCJlbWFpbCIsInVuaXF1ZSIsInJlcXVpcmVkIiwiYWRtaW4iLCJjb21wb25lbnRzIiwiRmllbGQiLCJoaWRkZW4iXSwibWFwcGluZ3MiOiI7Ozs7K0JBMENBOzs7ZUFBQTs7OzJCQTFDc0I7bUNBRWM7QUFFcEMsSUFBTUEsU0FBU0MsSUFBQUEsd0NBQW1CLEVBQUM7SUFBQztDQUFnQjtBQUVwRCxJQUFNQyxpQkFBMEI7SUFDOUI7UUFDRUMsTUFBTTtRQUNOQyxPQUFPSixNQUFNLENBQUMsZ0JBQWdCO1FBQzlCSyxNQUFNO1FBQ05DLFVBQVVDLGtCQUFLO1FBQ2ZDLFFBQVE7UUFDUkMsVUFBVTtRQUNWQyxPQUFPO1lBQ0xDLFlBQVk7Z0JBQ1ZDLE9BQU87MkJBQU07O1lBQ2Y7UUFDRjtJQUNGO0lBQ0E7UUFDRVQsTUFBTTtRQUNORSxNQUFNO1FBQ05RLFFBQVE7SUFDVjtJQUNBO1FBQ0VWLE1BQU07UUFDTkUsTUFBTTtRQUNOUSxRQUFRO0lBQ1Y7SUFDQTtRQUNFVixNQUFNO1FBQ05FLE1BQU07UUFDTlEsUUFBUTtJQUNWO0lBQ0E7UUFDRVYsTUFBTTtRQUNORSxNQUFNO1FBQ05RLFFBQVE7SUFDVjtDQUNEO0lBRUQsV0FBZVgifQ==
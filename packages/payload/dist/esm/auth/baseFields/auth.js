import { email } from "../../fields/validations";
import { extractTranslations } from "../../translations/extractTranslations";
var labels = extractTranslations([
    "general:email"
]);
var baseAuthFields = [
    {
        name: "email",
        label: labels["general:email"],
        type: "email",
        validate: email,
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
export default baseAuthFields;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hdXRoL2Jhc2VGaWVsZHMvYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlbWFpbCB9IGZyb20gJy4uLy4uL2ZpZWxkcy92YWxpZGF0aW9ucyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uL2ZpZWxkcy9jb25maWcvdHlwZXMnO1xuaW1wb3J0IHsgZXh0cmFjdFRyYW5zbGF0aW9ucyB9IGZyb20gJy4uLy4uL3RyYW5zbGF0aW9ucy9leHRyYWN0VHJhbnNsYXRpb25zJztcblxuY29uc3QgbGFiZWxzID0gZXh0cmFjdFRyYW5zbGF0aW9ucyhbJ2dlbmVyYWw6ZW1haWwnXSk7XG5cbmNvbnN0IGJhc2VBdXRoRmllbGRzOiBGaWVsZFtdID0gW1xuICB7XG4gICAgbmFtZTogJ2VtYWlsJyxcbiAgICBsYWJlbDogbGFiZWxzWydnZW5lcmFsOmVtYWlsJ10sXG4gICAgdHlwZTogJ2VtYWlsJyxcbiAgICB2YWxpZGF0ZTogZW1haWwsXG4gICAgdW5pcXVlOiB0cnVlLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIGFkbWluOiB7XG4gICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEZpZWxkOiAoKSA9PiBudWxsLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB7XG4gICAgbmFtZTogJ3Jlc2V0UGFzc3dvcmRUb2tlbicsXG4gICAgdHlwZTogJ3RleHQnLFxuICAgIGhpZGRlbjogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdyZXNldFBhc3N3b3JkRXhwaXJhdGlvbicsXG4gICAgdHlwZTogJ2RhdGUnLFxuICAgIGhpZGRlbjogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdzYWx0JyxcbiAgICB0eXBlOiAndGV4dCcsXG4gICAgaGlkZGVuOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2hhc2gnLFxuICAgIHR5cGU6ICd0ZXh0JyxcbiAgICBoaWRkZW46IHRydWUsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBiYXNlQXV0aEZpZWxkcztcbiJdLCJuYW1lcyI6WyJlbWFpbCIsImV4dHJhY3RUcmFuc2xhdGlvbnMiLCJsYWJlbHMiLCJiYXNlQXV0aEZpZWxkcyIsIm5hbWUiLCJsYWJlbCIsInR5cGUiLCJ2YWxpZGF0ZSIsInVuaXF1ZSIsInJlcXVpcmVkIiwiYWRtaW4iLCJjb21wb25lbnRzIiwiRmllbGQiLCJoaWRkZW4iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLEtBQUssUUFBUSwyQkFBMkI7QUFFakQsU0FBU0MsbUJBQW1CLFFBQVEseUNBQXlDO0FBRTdFLElBQU1DLFNBQVNELG9CQUFvQjtJQUFDO0NBQWdCO0FBRXBELElBQU1FLGlCQUEwQjtJQUM5QjtRQUNFQyxNQUFNO1FBQ05DLE9BQU9ILE1BQU0sQ0FBQyxnQkFBZ0I7UUFDOUJJLE1BQU07UUFDTkMsVUFBVVA7UUFDVlEsUUFBUTtRQUNSQyxVQUFVO1FBQ1ZDLE9BQU87WUFDTEMsWUFBWTtnQkFDVkMsT0FBTzsyQkFBTTs7WUFDZjtRQUNGO0lBQ0Y7SUFDQTtRQUNFUixNQUFNO1FBQ05FLE1BQU07UUFDTk8sUUFBUTtJQUNWO0lBQ0E7UUFDRVQsTUFBTTtRQUNORSxNQUFNO1FBQ05PLFFBQVE7SUFDVjtJQUNBO1FBQ0VULE1BQU07UUFDTkUsTUFBTTtRQUNOTyxRQUFRO0lBQ1Y7SUFDQTtRQUNFVCxNQUFNO1FBQ05FLE1BQU07UUFDTk8sUUFBUTtJQUNWO0NBQ0Q7QUFFRCxlQUFlVixlQUFlIn0=
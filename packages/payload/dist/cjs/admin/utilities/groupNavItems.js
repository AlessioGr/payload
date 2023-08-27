"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    EntityType: function() {
        return EntityType;
    },
    groupNavItems: function() {
        return groupNavItems;
    }
});
var _getTranslation = require("../../utilities/getTranslation");
var EntityType;
(function(EntityType) {
    EntityType["collection"] = "collections";
    EntityType["global"] = "globals";
})(EntityType || (EntityType = {}));
function groupNavItems(entities, permissions, i18n) {
    var result = entities.reduce(function(groups, entityToGroup) {
        var _permissions_entityToGroup_type_toLowerCase_entityToGroup_entity_slug, _permissions_entityToGroup_type_toLowerCase, _permissions;
        if ((_permissions = permissions) === null || _permissions === void 0 ? void 0 : (_permissions_entityToGroup_type_toLowerCase = _permissions[entityToGroup.type.toLowerCase()]) === null || _permissions_entityToGroup_type_toLowerCase === void 0 ? void 0 : (_permissions_entityToGroup_type_toLowerCase_entityToGroup_entity_slug = _permissions_entityToGroup_type_toLowerCase[entityToGroup.entity.slug]) === null || _permissions_entityToGroup_type_toLowerCase_entityToGroup_entity_slug === void 0 ? void 0 : _permissions_entityToGroup_type_toLowerCase_entityToGroup_entity_slug.read.permission) {
            var translatedGroup = (0, _getTranslation.getTranslation)(entityToGroup.entity.admin.group, i18n);
            if (entityToGroup.entity.admin.group) {
                var existingGroup = groups.find(function(group) {
                    return (0, _getTranslation.getTranslation)(group.label, i18n) === translatedGroup;
                });
                var matchedGroup = existingGroup;
                if (!existingGroup) {
                    matchedGroup = {
                        label: translatedGroup,
                        entities: []
                    };
                    groups.push(matchedGroup);
                }
                matchedGroup.entities.push(entityToGroup);
            } else {
                var defaultGroup = groups.find(function(group) {
                    return (0, _getTranslation.getTranslation)(group.label, i18n) === i18n.t("general:".concat(entityToGroup.type));
                });
                defaultGroup.entities.push(entityToGroup);
            }
        }
        return groups;
    }, [
        {
            label: i18n.t("general:collections"),
            entities: []
        },
        {
            label: i18n.t("general:globals"),
            entities: []
        }
    ]);
    return result.filter(function(group) {
        return group.entities.length > 0;
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hZG1pbi91dGlsaXRpZXMvZ3JvdXBOYXZJdGVtcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpMThuIGFzIElpMThuIH0gZnJvbSAnaTE4bmV4dCc7XG5pbXBvcnQgeyBQZXJtaXNzaW9ucyB9IGZyb20gJy4uLy4uL2F1dGgnO1xuaW1wb3J0IHsgU2FuaXRpemVkQ29sbGVjdGlvbkNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbGxlY3Rpb25zL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBTYW5pdGl6ZWRHbG9iYWxDb25maWcgfSBmcm9tICcuLi8uLi9nbG9iYWxzL2NvbmZpZy90eXBlcyc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL3V0aWxpdGllcy9nZXRUcmFuc2xhdGlvbic7XG5cbmV4cG9ydCBlbnVtIEVudGl0eVR5cGUge1xuICBjb2xsZWN0aW9uID0gJ2NvbGxlY3Rpb25zJyxcbiAgZ2xvYmFsID0gJ2dsb2JhbHMnXG59XG5cbmV4cG9ydCB0eXBlIEVudGl0eVRvR3JvdXAgPSB7XG4gIHR5cGU6IEVudGl0eVR5cGUuY29sbGVjdGlvblxuICBlbnRpdHk6IFNhbml0aXplZENvbGxlY3Rpb25Db25maWdcbn0gfCB7XG4gIHR5cGU6IEVudGl0eVR5cGUuZ2xvYmFsXG4gIGVudGl0eTogU2FuaXRpemVkR2xvYmFsQ29uZmlnXG59XG5cbmV4cG9ydCB0eXBlIEdyb3VwID0ge1xuICBsYWJlbDogc3RyaW5nXG4gIGVudGl0aWVzOiBFbnRpdHlUb0dyb3VwW11cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdyb3VwTmF2SXRlbXMoZW50aXRpZXM6IEVudGl0eVRvR3JvdXBbXSwgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25zLCBpMThuOiBJaTE4bik6IEdyb3VwW10ge1xuICBjb25zdCByZXN1bHQgPSBlbnRpdGllcy5yZWR1Y2UoKGdyb3VwcywgZW50aXR5VG9Hcm91cCkgPT4ge1xuICAgIGlmIChwZXJtaXNzaW9ucz8uW2VudGl0eVRvR3JvdXAudHlwZS50b0xvd2VyQ2FzZSgpXT8uW2VudGl0eVRvR3JvdXAuZW50aXR5LnNsdWddPy5yZWFkLnBlcm1pc3Npb24pIHtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZWRHcm91cCA9IGdldFRyYW5zbGF0aW9uKGVudGl0eVRvR3JvdXAuZW50aXR5LmFkbWluLmdyb3VwLCBpMThuKTtcbiAgICAgIGlmIChlbnRpdHlUb0dyb3VwLmVudGl0eS5hZG1pbi5ncm91cCkge1xuICAgICAgICBjb25zdCBleGlzdGluZ0dyb3VwID0gZ3JvdXBzLmZpbmQoKGdyb3VwKSA9PiBnZXRUcmFuc2xhdGlvbihncm91cC5sYWJlbCwgaTE4bikgPT09IHRyYW5zbGF0ZWRHcm91cCkgYXMgR3JvdXA7XG4gICAgICAgIGxldCBtYXRjaGVkR3JvdXA6IEdyb3VwID0gZXhpc3RpbmdHcm91cDtcbiAgICAgICAgaWYgKCFleGlzdGluZ0dyb3VwKSB7XG4gICAgICAgICAgbWF0Y2hlZEdyb3VwID0geyBsYWJlbDogdHJhbnNsYXRlZEdyb3VwLCBlbnRpdGllczogW10gfTtcbiAgICAgICAgICBncm91cHMucHVzaChtYXRjaGVkR3JvdXApO1xuICAgICAgICB9XG5cbiAgICAgICAgbWF0Y2hlZEdyb3VwLmVudGl0aWVzLnB1c2goZW50aXR5VG9Hcm91cCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkZWZhdWx0R3JvdXAgPSBncm91cHMuZmluZCgoZ3JvdXApID0+IGdldFRyYW5zbGF0aW9uKGdyb3VwLmxhYmVsLCBpMThuKSA9PT0gaTE4bi50KGBnZW5lcmFsOiR7ZW50aXR5VG9Hcm91cC50eXBlfWApKSBhcyBHcm91cDtcbiAgICAgICAgZGVmYXVsdEdyb3VwLmVudGl0aWVzLnB1c2goZW50aXR5VG9Hcm91cCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGdyb3VwcztcbiAgfSwgW1xuICAgIHtcbiAgICAgIGxhYmVsOiBpMThuLnQoJ2dlbmVyYWw6Y29sbGVjdGlvbnMnKSBhcyBzdHJpbmcsXG4gICAgICBlbnRpdGllczogW10sXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogaTE4bi50KCdnZW5lcmFsOmdsb2JhbHMnKSBhcyBzdHJpbmcsXG4gICAgICBlbnRpdGllczogW10sXG4gICAgfSxcbiAgXSk7XG5cbiAgcmV0dXJuIHJlc3VsdC5maWx0ZXIoKGdyb3VwKSA9PiBncm91cC5lbnRpdGllcy5sZW5ndGggPiAwKTtcbn1cbiJdLCJuYW1lcyI6WyJncm91cE5hdkl0ZW1zIiwiRW50aXR5VHlwZSIsImNvbGxlY3Rpb24iLCJnbG9iYWwiLCJlbnRpdGllcyIsInBlcm1pc3Npb25zIiwiaTE4biIsInJlc3VsdCIsInJlZHVjZSIsImdyb3VwcyIsImVudGl0eVRvR3JvdXAiLCJ0eXBlIiwidG9Mb3dlckNhc2UiLCJlbnRpdHkiLCJzbHVnIiwicmVhZCIsInBlcm1pc3Npb24iLCJ0cmFuc2xhdGVkR3JvdXAiLCJnZXRUcmFuc2xhdGlvbiIsImFkbWluIiwiZ3JvdXAiLCJleGlzdGluZ0dyb3VwIiwiZmluZCIsImxhYmVsIiwibWF0Y2hlZEdyb3VwIiwicHVzaCIsImRlZmF1bHRHcm91cCIsInQiLCJmaWx0ZXIiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBd0JnQkEsYUFBYTtlQUFiQTs7OzhCQXBCZTtJQUV4QjtVQUFLQyxVQUFVO0lBQVZBLFdBQ1ZDLGdCQUFhO0lBREhELFdBRVZFLFlBQVM7R0FGQ0YsZUFBQUE7QUFrQkwsU0FBU0QsY0FBY0ksUUFBeUIsRUFBRUMsV0FBd0IsRUFBRUMsSUFBVztJQUM1RixJQUFNQyxTQUFTSCxTQUFTSSxNQUFNLENBQUMsU0FBQ0MsUUFBUUM7WUFDbENMLHVFQUFBQSw2Q0FBQUE7UUFBSixLQUFJQSxlQUFBQSx5QkFBQUEsb0NBQUFBLDhDQUFBQSxZQUFhLENBQUNLLGNBQWNDLElBQUksQ0FBQ0MsV0FBVyxHQUFHLGNBQS9DUCxtRUFBQUEsd0VBQUFBLDJDQUFpRCxDQUFDSyxjQUFjRyxNQUFNLENBQUNDLElBQUksQ0FBQyxjQUE1RVQsNEZBQUFBLHNFQUE4RVUsSUFBSSxDQUFDQyxVQUFVLEVBQUU7WUFDakcsSUFBTUMsa0JBQWtCQyxJQUFBQSw4QkFBYyxFQUFDUixjQUFjRyxNQUFNLENBQUNNLEtBQUssQ0FBQ0MsS0FBSyxFQUFFZDtZQUN6RSxJQUFJSSxjQUFjRyxNQUFNLENBQUNNLEtBQUssQ0FBQ0MsS0FBSyxFQUFFO2dCQUNwQyxJQUFNQyxnQkFBZ0JaLE9BQU9hLElBQUksQ0FBQyxTQUFDRjsyQkFBVUYsSUFBQUEsOEJBQWMsRUFBQ0UsTUFBTUcsS0FBSyxFQUFFakIsVUFBVVc7O2dCQUNuRixJQUFJTyxlQUFzQkg7Z0JBQzFCLElBQUksQ0FBQ0EsZUFBZTtvQkFDbEJHLGVBQWU7d0JBQUVELE9BQU9OO3dCQUFpQmIsVUFBVSxFQUFFO29CQUFDO29CQUN0REssT0FBT2dCLElBQUksQ0FBQ0Q7Z0JBQ2Q7Z0JBRUFBLGFBQWFwQixRQUFRLENBQUNxQixJQUFJLENBQUNmO1lBQzdCLE9BQU87Z0JBQ0wsSUFBTWdCLGVBQWVqQixPQUFPYSxJQUFJLENBQUMsU0FBQ0Y7MkJBQVVGLElBQUFBLDhCQUFjLEVBQUNFLE1BQU1HLEtBQUssRUFBRWpCLFVBQVVBLEtBQUtxQixDQUFDLENBQUMsQUFBQyxXQUE2QixPQUFuQmpCLGNBQWNDLElBQUk7O2dCQUN0SGUsYUFBYXRCLFFBQVEsQ0FBQ3FCLElBQUksQ0FBQ2Y7WUFDN0I7UUFDRjtRQUVBLE9BQU9EO0lBQ1QsR0FBRztRQUNEO1lBQ0VjLE9BQU9qQixLQUFLcUIsQ0FBQyxDQUFDO1lBQ2R2QixVQUFVLEVBQUU7UUFDZDtRQUNBO1lBQ0VtQixPQUFPakIsS0FBS3FCLENBQUMsQ0FBQztZQUNkdkIsVUFBVSxFQUFFO1FBQ2Q7S0FDRDtJQUVELE9BQU9HLE9BQU9xQixNQUFNLENBQUMsU0FBQ1I7ZUFBVUEsTUFBTWhCLFFBQVEsQ0FBQ3lCLE1BQU0sR0FBRzs7QUFDMUQifQ==
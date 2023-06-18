"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntityPolicies = void 0;
const types_1 = require("../fields/config/types");
async function getEntityPolicies(args) {
    const { req, entity, operations, id, type } = args;
    const isLoggedIn = !!(req.user);
    // ---- ---- ---- ---- ---- ---- ---- ---- ----
    // `policies` and `promises` get mutated in
    // the functions below, and return in the end
    // ---- ---- ---- ---- ---- ---- ---- ---- ----
    const policies = {
        fields: {},
    };
    let docBeingAccessed;
    async function getEntityDoc({ where } = {}) {
        var _a;
        if (entity.slug) {
            if (type === 'global') {
                return req.payload.findGlobal({
                    overrideAccess: true,
                    slug: entity.slug,
                });
            }
            if (type === 'collection' && id) {
                if (typeof where === 'object') {
                    const paginatedRes = await req.payload.find({
                        overrideAccess: true,
                        collection: entity.slug,
                        where: {
                            ...where,
                            and: [
                                ...where.and || [],
                                {
                                    id: {
                                        equals: id,
                                    },
                                },
                            ],
                        },
                        limit: 1,
                    });
                    return ((_a = paginatedRes === null || paginatedRes === void 0 ? void 0 : paginatedRes.docs) === null || _a === void 0 ? void 0 : _a[0]) || undefined;
                }
                return req.payload.findByID({
                    overrideAccess: true,
                    collection: entity.slug,
                    id,
                });
            }
        }
        return undefined;
    }
    const createAccessPromise = async ({ policiesObj, access, operation, disableWhere = false, accessLevel, }) => {
        var _a;
        const mutablePolicies = policiesObj;
        if (accessLevel === 'field' && docBeingAccessed === undefined) {
            docBeingAccessed = await getEntityDoc();
        }
        const accessResult = await access({ req, id, doc: docBeingAccessed });
        if (typeof accessResult === 'object' && !disableWhere) {
            mutablePolicies[operation] = {
                permission: (id || type === 'global') ? !!(await getEntityDoc({ where: accessResult })) : true,
                where: accessResult,
            };
        }
        else if (((_a = mutablePolicies[operation]) === null || _a === void 0 ? void 0 : _a.permission) !== false) {
            mutablePolicies[operation] = {
                permission: !!(accessResult),
            };
        }
    };
    const executeFieldPolicies = async ({ policiesObj, fields, operation, entityPermission, }) => {
        const mutablePolicies = policiesObj.fields;
        await Promise.all(fields.map(async (field) => {
            var _a;
            if (field.name) {
                if (!mutablePolicies[field.name])
                    mutablePolicies[field.name] = {};
                if (field.access && typeof field.access[operation] === 'function') {
                    await createAccessPromise({
                        policiesObj: mutablePolicies[field.name],
                        access: field.access[operation],
                        operation,
                        disableWhere: true,
                        accessLevel: 'field',
                    });
                }
                else {
                    mutablePolicies[field.name][operation] = {
                        permission: (_a = policiesObj[operation]) === null || _a === void 0 ? void 0 : _a.permission,
                    };
                }
                if (field.fields) {
                    if (!mutablePolicies[field.name].fields)
                        mutablePolicies[field.name].fields = {};
                    await executeFieldPolicies({
                        policiesObj: mutablePolicies[field.name],
                        fields: field.fields,
                        operation,
                        entityPermission,
                    });
                }
            }
            else if (field.fields) {
                await executeFieldPolicies({
                    policiesObj,
                    fields: field.fields,
                    operation,
                    entityPermission,
                });
            }
            else if (field.type === 'tabs') {
                await Promise.all(field.tabs.map(async (tab) => {
                    if ((0, types_1.tabHasName)(tab)) {
                        if (!mutablePolicies[tab.name]) {
                            mutablePolicies[tab.name] = {
                                fields: {},
                                [operation]: { permission: entityPermission },
                            };
                        }
                        await executeFieldPolicies({
                            policiesObj: mutablePolicies[tab.name],
                            fields: tab.fields,
                            operation,
                            entityPermission,
                        });
                    }
                    else {
                        await executeFieldPolicies({
                            policiesObj,
                            fields: tab.fields,
                            operation,
                            entityPermission,
                        });
                    }
                }));
            }
        }));
    };
    await Promise.all(operations.map(async (operation) => {
        let entityAccessPromise;
        if (typeof entity.access[operation] === 'function') {
            entityAccessPromise = createAccessPromise({
                policiesObj: policies,
                access: entity.access[operation],
                operation,
                accessLevel: 'entity',
            });
        }
        else {
            policies[operation] = {
                permission: isLoggedIn,
            };
        }
        await entityAccessPromise;
        await executeFieldPolicies({
            policiesObj: policies,
            fields: entity.fields,
            operation,
            entityPermission: policies[operation].permission,
        });
    }));
    return policies;
}
exports.getEntityPolicies = getEntityPolicies;
//# sourceMappingURL=getEntityPolicies.js.map
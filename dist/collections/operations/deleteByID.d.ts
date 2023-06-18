import { PayloadRequest } from '../../express/types';
import { Collection, CollectionSlug } from '../config/types';
import { Document } from '../../types';
export type Arguments = {
    depth?: number;
    collection: Collection;
    id: string | number;
    req: PayloadRequest;
    overrideAccess?: boolean;
    showHiddenFields?: boolean;
};
declare function deleteByID<TSlug extends CollectionSlug>(incomingArgs: Arguments): Promise<Document>;
export default deleteByID;

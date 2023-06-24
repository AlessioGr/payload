import { DeepPartial } from 'ts-essentials';
import { Collection, CollectionSlug, Collections } from '../config/types';
import { PayloadRequest } from '../../express/types';
type UpdateByIDArgs<TSlug extends CollectionSlug> = {
    collection: Collection;
    req: PayloadRequest;
    id: string | number;
    data: DeepPartial<Collections[TSlug]>;
    depth?: number;
    disableVerificationEmail?: boolean;
    overrideAccess?: boolean;
    showHiddenFields?: boolean;
    overwriteExistingFiles?: boolean;
    draft?: boolean;
    autosave?: boolean;
};
declare function updateByID<TSlug extends CollectionSlug>(incomingArgs: UpdateByIDArgs<TSlug>): Promise<Collections[TSlug]>;
export default updateByID;

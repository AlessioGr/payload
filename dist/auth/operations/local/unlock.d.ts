import { PayloadRequest } from '../../../express/types';
import { Payload } from '../../../payload';
import { CollectionSlug } from '../../../collections/config/types';
export type Options<T extends CollectionSlug> = {
    collection: T;
    data: {
        email: any;
    };
    req?: PayloadRequest;
    overrideAccess: boolean;
};
declare function localUnlock<T extends CollectionSlug>(payload: Payload, options: Options<T>): Promise<boolean>;
export default localUnlock;

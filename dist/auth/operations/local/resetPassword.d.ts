import { Payload } from '../../../payload';
import { Result } from '../resetPassword';
import { PayloadRequest } from '../../../express/types';
import { CollectionSlug } from '../../../collections/config/types';
export type Options<T extends CollectionSlug> = {
    collection: T;
    data: {
        token: string;
        password: string;
    };
    overrideAccess: boolean;
    req?: PayloadRequest;
};
declare function localResetPassword<T extends CollectionSlug>(payload: Payload, options: Options<T>): Promise<Result>;
export default localResetPassword;

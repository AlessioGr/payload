import { PayloadRequest } from '../../../express/types';
import { Result } from '../forgotPassword';
import { Payload } from '../../../payload';
import { CollectionSlug } from '../../../collections/config/types';
export type Options<T extends CollectionSlug> = {
    collection: T;
    data: {
        email: string;
    };
    expiration?: number;
    disableEmail?: boolean;
    req?: PayloadRequest;
};
declare function localForgotPassword<T extends CollectionSlug>(payload: Payload, options: Options<T>): Promise<Result>;
export default localForgotPassword;

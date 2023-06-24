import { Payload } from '../../../payload';
import { CollectionSlug } from '../../../collections/config/types';
export type Options<T extends CollectionSlug> = {
    token: string;
    collection: T;
};
declare function localVerifyEmail<T extends CollectionSlug>(payload: Payload, options: Options<T>): Promise<boolean>;
export default localVerifyEmail;

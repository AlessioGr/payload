import type { PayloadRequest, PayloadRequestContext } from './types';
/**
 * This makes sure that payloadRequest.payloadContext always exists (is {}) and populates it with an optional default context.
 * This function mutates directly to avoid copying memory. As payloadRequest is not a primitive, the scope of the mutation is not limited to this function but should also be reflected in the calling function.
 */
export declare function populateDefaultRequest(payloadRequest: PayloadRequest | undefined, context?: PayloadRequestContext | undefined): void;

import type { JSONSchema4 } from 'json-schema';
import { SanitizedCollectionConfig } from '../collections/config/types';
import { SanitizedGlobalConfig } from '../globals/config/types';
import { SanitizedConfig } from '../config/types';
export declare function generateEntitySchemas(entities: (SanitizedCollectionConfig | SanitizedGlobalConfig)[]): JSONSchema4;
export declare function configToJSONSchema(config: SanitizedConfig): JSONSchema4;

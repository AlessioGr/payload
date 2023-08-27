import { type i18n } from 'i18next';
import { RelationshipField } from '../../../../../../fields/config/types.js';
import { SanitizedCollectionConfig } from '../../../../../../collections/config/types.js';
import type { PaginatedDocs } from '../../../../../../database/types.js';

export type Props = {
  onChange: (val: unknown) => void,
  value: unknown,
} & RelationshipField

export type Option = {
  label: string
  value: string
  relationTo?: string
  options?: Option[]
}

type CLEAR = {
  type: 'CLEAR'
  required: boolean
  i18n: i18n
}

type ADD = {
  type: 'ADD'
  data: PaginatedDocs<any>
  relation: string
  hasMultipleRelations: boolean
  collection: SanitizedCollectionConfig
  i18n: i18n
}

export type Action = CLEAR | ADD

export type ValueWithRelation = {
  relationTo: string
  value: string
}

export type GetResults = (args: { lastFullyLoadedRelation?: number, lastLoadedPage?: number, search?: string }) => Promise<void>

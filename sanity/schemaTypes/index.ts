import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import { ProductType } from './ProductType'
import { orderType } from './OrderType'
import { salesType } from './SalesType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, ProductType , orderType, salesType],
}

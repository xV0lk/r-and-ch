import * as z from 'zod';
import { CompleteTable, RelatedTableModel } from './index';

export const TokenModel = z.object({
  id: z.number().int(),
  token: z.string(),
  createdAt: z.date(),
  closedAt: z.date(),
  isValid: z.boolean(),
  sugLeft: z.number().int(),
  reqLeft: z.number().int(),
  tableNum: z.number().int(),
});

export interface CompleteToken extends z.infer<typeof TokenModel> {
  table: CompleteTable;
}

/**
 * RelatedTokenModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTokenModel: z.ZodSchema<CompleteToken> = z.lazy(() =>
  TokenModel.extend({
    table: RelatedTableModel,
  })
);

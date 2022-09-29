/* eslint-disable import/no-cycle */
import * as z from 'zod'
import {
  CompleteToken,
  RelatedTokenModel,
  CompleteRequest,
  RelatedRequestModel,
  CompleteUser,
  RelatedUserModel,
} from './index'

export const TableModel = z.object({
  tableNum: z.number().int(),
})

export interface CompleteTable extends z.infer<typeof TableModel> {
  token?: CompleteToken | null
  requests: CompleteRequest[]
  users: CompleteUser[]
}

/**
 * RelatedTableModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedTableModel: z.ZodSchema<CompleteTable> = z.lazy(() =>
  TableModel.extend({
    token: RelatedTokenModel.nullish(),
    requests: RelatedRequestModel.array(),
    users: RelatedUserModel.array(),
  })
)

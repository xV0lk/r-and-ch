/* eslint-disable import/no-cycle */
import * as z from 'zod'
import { Role } from '@prisma/client'
import { CompleteRequest, RelatedRequestModel, CompleteTable, RelatedTableModel } from './index'

export const UserModel = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  email: z.string(),
  name: z.string(),
  role: z.nativeEnum(Role),
  password: z.string(),
  tableNum: z.number().int().nullish(),
})

export interface CompleteUser extends z.infer<typeof UserModel> {
  requests: CompleteRequest[]
  table?: CompleteTable | null
}

/**
 * RelatedUserModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedUserModel: z.ZodSchema<CompleteUser> = z.lazy(() =>
  UserModel.extend({
    requests: RelatedRequestModel.array(),
    table: RelatedTableModel.nullish(),
  })
)

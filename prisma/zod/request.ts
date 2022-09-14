import * as z from "zod"
import * as imports from "../null"
import { ReqStatus, ReqType } from "@prisma/client"
import { CompleteTable, RelatedTableModel, CompleteUser, RelatedUserModel } from "./index"

export const RequestModel = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  status: z.nativeEnum(ReqStatus),
  type: z.nativeEnum(ReqType),
  tableNum: z.number().int(),
  songId: z.string(),
  songTitle: z.string(),
  songThumbnail: z.string(),
  songTWidth: z.number().int(),
  songTHeight: z.number().int(),
  userId: z.number().int().nullish(),
})

export interface CompleteRequest extends z.infer<typeof RequestModel> {
  table: CompleteTable
  user?: CompleteUser | null
}

/**
 * RelatedRequestModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedRequestModel: z.ZodSchema<CompleteRequest> = z.lazy(() => RequestModel.extend({
  table: RelatedTableModel,
  user: RelatedUserModel.nullish(),
}))

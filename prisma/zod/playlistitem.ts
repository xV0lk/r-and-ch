/* eslint-disable import/no-cycle */
import * as z from 'zod'
import { CompletePlaylist, RelatedPlaylistModel } from './index'

export const PlaylistItemModel = z.object({
  id: z.string(),
  title: z.string(),
  thumbnail: z.string(),
  tWidth: z.number().int(),
  tHeight: z.number().int(),
  playlistId: z.string(),
  position: z.number().int(),
})

export interface CompletePlaylistItem extends z.infer<typeof PlaylistItemModel> {
  playlist: CompletePlaylist
}

/**
 * RelatedPlaylistItemModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPlaylistItemModel: z.ZodSchema<CompletePlaylistItem> = z.lazy(() =>
  PlaylistItemModel.extend({
    playlist: RelatedPlaylistModel,
  })
)

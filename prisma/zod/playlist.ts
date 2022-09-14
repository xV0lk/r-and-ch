import * as z from 'zod';
import { CompletePlaylistItem, RelatedPlaylistItemModel } from './index';

export const PlaylistModel = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  itemCount: z.number().int(),
  thumbnail: z.string(),
  tWidth: z.number().int(),
  tHeight: z.number().int(),
  player: z.string(),
});

export interface CompletePlaylist extends z.infer<typeof PlaylistModel> {
  items: CompletePlaylistItem[];
}

/**
 * RelatedPlaylistModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedPlaylistModel: z.ZodSchema<CompletePlaylist> = z.lazy(() =>
  PlaylistModel.extend({
    items: RelatedPlaylistItemModel.array(),
  })
);

import { Organization } from './organisation';
import { Tag } from './tags';
import { User } from './user';

export interface Article {
  type_of: string;
  id: number;
  title: string;
  description: string;
  cover_image: string;
  readable_publish_date: string;
  social_image: string;
  tag_list: Tag[];
  tags: string;
  slug: string;
  path: string;
  url: string;
  canonical_url: string;
  comments_count: number;
  positive_reactions_count: number;
  public_reactions_count: number;
  collection_id: string;
  created_at: Date;
  edited_at: Date;
  crossposted_at: string;
  published_at: Date;
  last_comment_at: Date;
  published_timestamp: Date;
  reading_time_minutes: number;
  user: User;
  organization: Organization;
}

/**
 * This is a bit redundant wrt to article but interfaces are free in runtime. So I kept it
 * Todo In future use Omit and extend to reuse one an another
 */
export interface ArticleDetails {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: string;
  published_timestamp: Date;
  positive_reactions_count: number;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  created_at: Date;
  edited_at: string;
  crossposted_at: string;
  published_at: Date;
  last_comment_at: Date;
  reading_time_minutes: number;
  tag_list: string;
  tags: string[];
  body_html: string;
  body_markdown: string;
  user: User;
  flare_tag: Partial<Tag>;
}

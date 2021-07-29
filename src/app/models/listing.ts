import { User } from "./user";

export interface Listing {
    type_of: string;
    id: number;
    created_at: string;
    title: string;
    slug: string;
    body_markdown: string;
    tag_list: string;
    tags: string[];
    category: string;
    processed_html: string;
    published: boolean;
    user: User;
}

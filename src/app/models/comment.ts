import { User } from "./user";

export interface Comment {
    type_of: string;
    id_code: string;
    created_at: Date;
    body_html: string;
    user: User;
    children: Comment[];
}

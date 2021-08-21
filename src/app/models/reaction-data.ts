export interface ReactionData {
  article_reaction_counts: Reaction[];
}

export interface Reaction {
  category: string;
  count: number;
}

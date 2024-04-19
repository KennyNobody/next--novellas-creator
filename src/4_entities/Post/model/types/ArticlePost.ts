interface ArticlePostType {
    id: number;
    slug: string;
    title: string;
    locale: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
}

export type {
    ArticlePostType,
};

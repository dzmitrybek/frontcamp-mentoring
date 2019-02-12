export interface NewsModel {
    id?: number;
    source: {
        id?: string;
        name?: string;
    };
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
}

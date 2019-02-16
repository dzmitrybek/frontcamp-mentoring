interface Source {
  id?: string;
  name?: string;
}

export class NewsModel {
  public static convertFormDataToNews(data): NewsModel {
    return new NewsModel(
      data.source ? {
        id: '',
        name: data.source
      } : { id: '', name: '' },
      data.title || '',
      data.description || '',
      data.sourceUrl || '',
      data.imageUrl || '',
      data.publishedAt ? new Date(data.publishedAt) : new Date(),
      data.content || '');
  }

  constructor(
    public source: Source,
    public title: string,
    public description: string,
    public url: string,
    public urlToImage: string,
    public publishedAt: Date,
    public content: string,
    public _id?: string
  ) { }
}

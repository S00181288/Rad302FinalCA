export interface IBook {
    items: Items[];

}

export interface Items {

    volumeInfo: string;


}
export interface IVolumeInfo {
    title: string;
    authors: string;
    subtitle: string;
    publlisher: string;
    thumbnail?: string;

}

export class Book implements IVolumeInfo {
    title: string;
    authors: string;
    subtitle: string;
    publlisher: string;
    thumbnail?: string;

    constructor(title: string, authors: string, subtitle: string, publisher: string, thumbnail?: string) {
        this.title = title;
        this.authors = authors;
        this.subtitle = subtitle;
        this.publlisher = publisher;
        this.thumbnail = thumbnail;
    }
}

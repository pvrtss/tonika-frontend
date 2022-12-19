export interface ISong {
    pk: Number,
    name: string,
    author: string,
    chords: string,
    cover?: string,
    date_added?: Date,
}

export type SongListProps = {
    songs: ISong[]
};
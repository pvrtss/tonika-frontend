export interface ISong {
    pk: Number,
    name: String,
    author: String,
    chords: String
}

export type SongListProps = {
    songs: ISong[]
};
export interface ISong {
    pk: Number,
    name: string,
    author: string,
    chords: string,
    cover?: string,
    date_added?: Date,
}

export interface ISongsState {
    songs: ISong[],
}

export interface IUser {
    pk: number,
    username: string,
    is_staff: boolean,
    is_superuser: boolean,
    favourites?: ISong[],
}

export interface IUserState {
    user: IUser | undefined,
}
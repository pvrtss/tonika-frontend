export interface ISong {
    pk: Number,
    name: string,
    author: string,
    chords: string,
    cover?: string,
    date_added?: Date,
    date_accepted?: Date,
    date_declined?: Date,
    status: string,
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
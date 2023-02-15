import { Track } from "./Track"

export interface Album {
    id: number,
    artist: string,
    album: {
        name: string,
        releaseDate: string,
        coverImage: string,
        tracks: Track[]
    }
}
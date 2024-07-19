export interface IMovieType {
    id: string,
    title: string,
    img: string,
}

export interface IMovieCategoryType {
    [key: string]: IMovieType[];
}

// movie details type
export interface IMovieDetailsType {
    id: string,
    title: string,
    genres: string,
    img: string,
    synopsis: string,
    release_date: string,
    production_companies: string,
}

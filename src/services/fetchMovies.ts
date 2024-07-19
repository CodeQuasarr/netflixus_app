import {IMovieCategoryType, IMovieType} from "../types/movies/IMovieType";
import {movieCategories} from "../helpers/StaticMovieCategory";
import fetchTmdbWithApiKey from "./fetchTmdbWithApiKey";
import {UnwrapRef} from "vue";


export const fetchMoviesByAllCategories = async (): Promise<IMovieCategoryType> => {

    const moviesByCategory: IMovieCategoryType = {};

    for (const category of movieCategories) {

        const response = await fetchTmdbWithApiKey(`https://api.themoviedb.org/3/discover/movie?&language=fr-FR&page=1&sort_by=popularity.desc&with_genres=${category.id}'`);
        const data = await response.json();

        moviesByCategory[category.name] = data.results.map((movie: any) => ({
            id: movie.id,
            title: movie.original_title ?? movie.original_name,
            img: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
        })) as IMovieType[];

    }
    return moviesByCategory;
}

export const fetchMovies = async (page: number = 1, genre:number | null): Promise<IMovieType[]> => {

    const params = new URLSearchParams({
        include_adult: 'false',
        include_video: 'false',
        language: 'fr-FR',
        sort_by: 'popularity.desc',

    });

    if (page) {
        params.append('page', page.toString());
    }

    if (genre) {
        params.append('with_genres', genre.toString());
    }

    const response = await fetchTmdbWithApiKey(`https://api.themoviedb.org/3/discover/movie?${params.toString()}`);
    const data = await response.json();

    return data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.original_title ?? movie.original_name,
        img: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
    })) as IMovieType[];
}

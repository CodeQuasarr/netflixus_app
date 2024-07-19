import {IMovieCategoryType, IMovieType} from "../types/movies/IMovieType";
import {movieCategories} from "../helpers/StaticMovieCategory";
import fetchTmdbWithApiKey from "./fetchTmdbWithApiKey";


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

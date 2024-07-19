import fetchTmdbWithApiKey from "@/services/fetchTmdbWithApiKey";
import { IMovieType } from "@/types/movies/IMovieType";

export const fetchUpcomingMovies = async (): Promise<IMovieType[]> => {

    const response = await fetchTmdbWithApiKey('https://api.themoviedb.org/3/movie/upcoming?language=fr-FR&page=1');
    const data = await response.json();

    return data.results.slice(0, 7).map((movie: any) => ({
        id: movie.id,
        title: movie.original_title,
        img: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
    })) as IMovieType[];

};


export const fetchBannerMovies = async (url: string): Promise<IMovieType[]> => {

    const response = await fetchTmdbWithApiKey(url);
    const data = await response.json();

    return data.results.map((movie: any) => ({
        id: movie.id,
        title: movie.original_title ?? movie.original_name,
        img: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`
    })) as IMovieType[];

}

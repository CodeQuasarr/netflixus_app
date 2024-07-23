import type IMovieType from "@/types/IMovieType";
import fetchTmdbWithApiKey from "@/services/fetchTmdbWithApiKey";

export class MoviesService {

    private params: URLSearchParams = new URLSearchParams({
        include_adult: 'false',
        include_video: 'false',
        language: 'fr-FR',
        sort_by: 'popularity.desc',
    });

    async searchMovies(query: string) : Promise<IMovieType[]> {
        if (query.trim() !== '') {
            this.params.append('query', query);
        }
        const response = await fetchTmdbWithApiKey(`${import.meta.env.VITE_API_BASE_URL}/search/movie?${this.params}`);
        const data = await response.json();
        return data.results.slice(0, 7).map((movie: any) => ({
            id: movie.id,
            title: movie.original_title,
            img: import.meta.env.VITE_IMAGE_BASE_URL + movie.poster_path
        }));
    }

    async popularMovies() : Promise<IMovieType[]> {
        const response = await fetchTmdbWithApiKey(`${import.meta.env.VITE_API_BASE_URL}/movie/popular?${this.params}`);
        const data = await response.json();
        return data.results.slice(0, 7).map((movie: any) => ({
            id: movie.id,
            title: movie.original_title,
            img: import.meta.env.VITE_IMAGE_BASE_URL + movie.poster_path
        }));
    }

    async upcomingMovies() : Promise<IMovieType[]> {
        const response = await fetchTmdbWithApiKey(`${import.meta.env.VITE_API_BASE_URL}/movie/upcoming?${this.params}`);
        const data = await response.json();
        return data.results.slice(0, 7).map((movie: any) => ({
            id: movie.id,
            title: movie.original_title,
            img: import.meta.env.VITE_IMAGE_BASE_URL + movie.poster_path
        }));
    }
}

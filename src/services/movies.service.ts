import type IMovieType from "@/types/IMovieType";
import fetchTmdbWithApiKey from "@/services/fetchTmdbWithApiKey";
import type IMovieCategoryType from "@/types/IMovieCategoryType";

export class MoviesService {

    private params: URLSearchParams = new URLSearchParams({
        include_adult: 'false',
        include_video: 'false',
        language: 'fr-FR',
        sort_by: 'popularity.desc',
    });

    public movieCategories = [
        { id: 28,     name: "Action",           label: "action" },
        { id: 12,     name: "Aventure",         label: "aventure" },
        { id: 35,     name: "Comédie",          label: "comédie" },
        { id: 27,     name: "Horreur",          label: "horreur" },
        { id: 10402,  name: "Musique",          label: "musique" },
        { id: 878,    name: "Science-Fiction",  label: "science_fiction" },
    ]


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
        return data.results.map((movie: any) => ({
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

    async movieByAllCategories() : Promise<IMovieCategoryType> {

        const moviesByCategory: IMovieCategoryType = {};

        for (const category of this.movieCategories) {

            const response = await fetchTmdbWithApiKey(`${import.meta.env.VITE_API_BASE_URL}/discover/movie?${this.params}&with_genres=${category.id}`);
            const data = await response.json();

            moviesByCategory[category.name] = data.results.map((movie: any) => ({
                id: movie.id,
                title: movie.original_title ?? movie.original_name,
                img: import.meta.env.VITE_IMAGE_BASE_URL + movie.poster_path
            })) as IMovieType[];

        }
        return moviesByCategory;
    }
}

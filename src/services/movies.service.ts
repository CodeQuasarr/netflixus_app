import type IMovieType from "@/types/IMovieType";
import fetchTmdbWithApiKey from "@/services/fetchTmdbWithApiKey";
import type IMovieCategoryType from "@/types/IMovieCategoryType";
import type IMovieDetailsType from "@/types/IMovieDetailsType";
import type {RouteParamValue} from "vue-router";

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

    /**
     * Format response
     * @param data
     * @private
     */
    private formatResponse(data: any) {
        return {
            id: data.id,
            title: data.original_title,
            img: import.meta.env.VITE_IMAGE_BASE_URL + data.poster_path
        }
    }

    /**
     * Search movies by query  (title)
     * @param query
     * @returns Promise<IMovieType[]>
     */
    async searchMovies(query: string) : Promise<IMovieType[]> {
        if (query.trim() !== '') {
            this.params.append('query', query);
        }
        const response = await fetchTmdbWithApiKey(`${import.meta.env.VITE_API_BASE_URL}/search/movie?${this.params.toString()}`);
        const data = await response.json();
        return data.results.slice(0, 7).map((movie: any) => this.formatResponse(movie));
    }

    /**
     * Get popular movies
     * @returns Promise<IMovieType[]>
     */
    async popularMovies() : Promise<IMovieType[]> {
        const response = await fetchTmdbWithApiKey(`${import.meta.env.VITE_API_BASE_URL}/movie/popular?${this.params.toString()}`);
        const data = await response.json();
        return data.results.map((movie: any) => this.formatResponse(movie));
    }

    /**
     * Get upcoming movies
     * @returns Promise<IMovieType[]>
     */
    async upcomingMovies() : Promise<IMovieType[]> {
        const response = await fetchTmdbWithApiKey(`${import.meta.env.VITE_API_BASE_URL}/movie/upcoming?${this.params.toString()}`);
        const data = await response.json();
        return data.results.slice(0, 7).map((movie: any) => this.formatResponse(movie));
    }

    /**
     * Get movies by all categories
     * @returns Promise<IMovieCategoryType>
     */
    async movieByAllCategories() : Promise<IMovieCategoryType> {
        const moviesByCategory: IMovieCategoryType = {};
        for (const category of this.movieCategories) {
            const response = await fetchTmdbWithApiKey(`${import.meta.env.VITE_API_BASE_URL}/discover/movie?${this.params.toString()}&with_genres=${category.id}`);
            const data = await response.json();
            moviesByCategory[category.name] = data.results.map((movie: any) => this.formatResponse(movie));
        }
        return moviesByCategory;
    }

    /**
     * Get movie details
     * @param id
     */
    async moviesDetails(id: string | RouteParamValue[]): Promise<IMovieDetailsType> {
        const detail = await fetchTmdbWithApiKey(`${import.meta.env.VITE_API_BASE_URL}/movie/${id}?${this.params.toString()}`);
        const detailData = await detail.json();

        if (detailData.success === false) {
            throw new Error('Movie not found');
        }

        return {
            id: detailData.id,
            title: detailData.original_title ?? detailData.original_name,
            img: import.meta.env.VITE_IMAGE_BASE_URL + detailData.backdrop_path,
            genres: detailData.genres.map((genre: any) => genre.name).join(', '),
            release_date: detailData.release_date,
            synopsis: detailData.overview,
            production_companies: detailData.production_companies.map((company: any) => company.name).join(', ')
        } as IMovieDetailsType;
    }

    /**
     * Get movies by category
     * @param category
     * @returns Promise<IMovieType[]>
     */
    async moviesByCategory(category: string) : Promise<IMovieType[]> {
        const response = await fetchTmdbWithApiKey(`${import.meta.env.VITE_API_BASE_URL}/discover/movie?${this.params.toString()}&with_genres=${category}`);
        const data = await response.json();
        return data.results.map((movie: any) => this.formatResponse(movie));
    }

    /**
     * Get similar movies
     * @param id
     * @returns Promise<IMovieType[]>
     */
    async similarMovies(id: string | RouteParamValue[]) : Promise<IMovieType[]> {
        const response = await fetchTmdbWithApiKey(`${import.meta.env.VITE_API_BASE_URL}/movie/${id}/similar?${this.params.toString()}`);
        const similarData = await response.json();

        return similarData.results.slice(0, 8).map((movie: any) => this.formatResponse(movie));
    }

    /**
     * Get movies by page and genre
     * @param page
     * @param genre
     * @returns Promise<IMovieType[]>
     */
    async movies(page: number = 1, genre:number | null): Promise<IMovieType[]> {
        if (page) {
            this.params.append('page', page.toString());
        }

        if (genre) {
            this.params.append('with_genres', genre.toString());
        }

        const response = await fetchTmdbWithApiKey(`${import.meta.env.VITE_API_BASE_URL}/discover/movie?${this.params.toString()}`);
        const data = await response.json();
        return data.results.map((movie: any) => this.formatResponse(movie));
    }
}

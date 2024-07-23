import type IMovieType from "@/types/IMovieType";

export default interface IMovieCategoryType {
    [key: string]: IMovieType[];
}

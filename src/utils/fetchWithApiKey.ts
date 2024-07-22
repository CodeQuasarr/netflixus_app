export async function fetchWithApiKey(url: string) {
    const apiKey: string = import.meta.env.VITE_TMDB_ACCESS_API_KEY as string;
    return await fetch(url, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
        }
    })
}

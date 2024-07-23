export default async function fetchTmdbWithApiKey(url: string) :Promise<Response> {
    const apiKey = import.meta.env.VITE_ACCESS_API_KEY;
    return await fetch(url, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
        }
    });
}




export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TNHdKWddyuBzaXwLYOXPJA46ZSFsLgn7&q=${encodeURIComponent(category)}&limit=20`;

    try {
        const resp = await fetch(url);
        const { data } = await resp.json();

        console.log("Datos obtenidos:", data);

        // Filtrar los objetos que no tengan imágenes válidas
        const gifs = data
            .filter(img => img.images?.downsized_medium?.url) // Validación para evitar objetos inválidos
            .map(img => ({
                id: img.id,
                title: img.title || 'Sin título', // Fallback para título
                url: img.images.downsized_medium.url,
            }));

        return gifs;
    } catch (error) {
        console.error("Error fetching GIFs:", error);
        return []; // Retornar un array vacío en caso de error
    }
};


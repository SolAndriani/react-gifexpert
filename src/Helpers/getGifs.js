const Hc = async (category) => {
    try {
        const m = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=TNHdKWddyuBzaXwLYOXPJA46ZSFsLgn7&q=${encodeURIComponent(category)}&limit=20`);
        const { data: W } = await m.json();

        // Imprimir la respuesta completa para verificar la estructura de los datos
        console.log("Respuesta de la API:", W);

        // Filtrar y mapear los resultados con validación más completa
        const gifs = W.map(I => {
            // Comprobar que 'I.images' y 'I.images.downsized_medium' existen antes de acceder a la URL
            if (I && I.images && I.images.downsized_medium && I.images.downsized_medium.url) {
                return {
                    id: I.id,
                    title: I.title || 'Sin título', // Fallback si no hay título
                    url: I.images.downsized_medium.url
                };
            } else {
                console.warn("Imagen o URL no encontrada para el item:", I); // Advertencia si faltan datos
                return null; // Si no hay imagen válida, retornar null
            }
        }).filter(gif => gif !== null); // Filtrar los valores nulos

        // Imprimir los resultados en consola
        console.log("GIFs obtenidos:", gifs);

        return gifs;
    } catch (error) {
        console.error("Error fetching GIFs:", error);
        return []; // En caso de error, retornar un array vacío
    }
};

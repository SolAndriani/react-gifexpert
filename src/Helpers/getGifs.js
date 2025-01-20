export const getGifs = async (category) => {
  // Cambié el protocolo a https para evitar posibles problemas de seguridad
  const url = `https://api.giphy.com/v1/gifs/search?api_key=TNHdKWddyuBzaXwLYOXPJA46ZSFsLgn7&q=${encodeURIComponent(category)}&limit=20`;

  try {
      const resp = await fetch(url);
      const { data } = await resp.json();

      console.log("Datos obtenidos:", data);

      // Filtrar los objetos que no tengan imágenes válidas
      const gifs = data
          .filter(img => img.images && img.images.downsized_medium && img.images.downsized_medium.url) // Validación más segura
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
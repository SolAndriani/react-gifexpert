export const getGifs = async (category) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=kaJ1JwD4CuQgYun7YpTQpTr5p1qs1sQn&q=${category}&limit=10`;
    const resp = await fetch(url);

    if (!resp.ok) {  // Verifica si la respuesta fue exitosa
      throw new Error('Failed to fetch data');
    }

    const { data } = await resp.json();

    // Si no hay datos, devuelve un array vacío
    if (!data || data.length === 0) {
      return [];
    }

    // Mapea los datos de la API a un formato más limpio
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));

    return gifs;
  } catch (error) {
    console.error('Error fetching GIFs:', error);
    return [];  // En caso de error, devuelve un array vacío
  }
};

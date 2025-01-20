// src/helpers/getGifs.js

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=kaJ1JwD4CuQgYun7YpTQpTr5p1qs1sQn&q=${category}&limit=10`;

  const response = await fetch(url);
  const { data } = await response.json();

  // Mapeamos los datos para obtener la información necesaria de cada GIF
  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

  console.log(gifs); // Muestra los GIFs en la consola
  return gifs;
};

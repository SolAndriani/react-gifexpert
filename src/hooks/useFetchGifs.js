import { useEffect, useState } from 'react';
import { getGifs } from './helpers/getGifs';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    try {
      const newImages = await getGifs(category);
      setImages(newImages);
    } catch (error) {
      console.error("Error fetching gifs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getImages();
  }, [category]); // Se ejecuta cada vez que cambie la categoría

  return {
    images,
    isLoading
  };
};

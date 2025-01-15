import { useEffect, useState } from "react";
import{getGifs}from'../Helpers/getGifs';



export const useFetchGifs= ( category ) =>{



  const[images,setImages]= useState([]);
  const[isLoading,setIsLoading]= useState([true]);


    const getImages = async () => {
       try {
         const newImages = await getGifs(category);
          setImages(newImages);
          setIsLoading(false);
      
     } 
    
     catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    getImages();
  }, [category]);

    return{
        images,
        isLoading
    }


};

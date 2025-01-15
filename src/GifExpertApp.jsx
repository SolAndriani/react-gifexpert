



import { useState } from 'react';
import { AddCategory, GifGrid } from './Components';  // Asegúrate de que no haya errores tipográficos o rutas incorrectas


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Sol']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; // Evita duplicados

        console.log(newCategory);
        setCategories([newCategory, ...categories]); // Corrige el uso del estado
    };

    return (
        <>
          
            <h1>GifExpertApp</h1>

     
            <AddCategory 
                onNewCategory={(value) => onAddCategory(value)} 
            />

                {
                
                categories.map((category) => (
                    <GifGrid 
                    key={ category }
                    category={ category }
                    />
                ))
                }
        </>
    );
};
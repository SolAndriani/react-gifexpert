export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);
  
    return (
      <>
        <h3>{category}</h3>
        {isLoading && <h2>Cargando...</h2>}
  
        <div className="card-grid">
          {Array.isArray(images) && images.length > 0 ? (
            images.map((image) => (
              <GifItem key={image.id} {...image} />
            ))
          ) : (
            <h2>No se encontraron GIFs</h2>
          )}
        </div>
      </>
    );
  };
  
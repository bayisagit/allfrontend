import { useState, useEffect } from 'react';

function ImageGallery() {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('car')
    const handleSearch = (value) => {
        setQuery(value)
    }
    const API_KEY = '46928046-865982fc22d15d4db400c45d6';

    const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo`;

    useEffect(() => {
        const fetchImages = async () => {

            const response = await fetch(API_URL);

            const data = await response.json();
            setImages(data.hits);


        };

        fetchImages();
    }, [query]);

    return (
        <div>
            <h1>Image Gallery</h1>
            <div style={{ padding: '10px' }}>
                <label htmlFor="search">Search for: </label>
                <input type="text" onChange={(e) => handleSearch(e.target.value)} />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {images.map((image) => (
                    <div key={image.id} style={{ width: '200px' }}>
                        <img
                            src={image.previewURL}

                            style={{ width: '100%', height: 'auto' }}
                        />

                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageGallery;
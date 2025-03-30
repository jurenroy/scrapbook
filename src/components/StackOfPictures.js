import React, { useEffect, useState } from 'react';
import './StackOfPictures.css'; // Import the CSS for styling

const StackOfPictures = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showPictures, setShowPictures] = useState(false);

    // Dynamically import images from the assets/waterfall directory
    const importAll = (r) => {
        return r.keys().map(r);
    };

    const images = importAll(require.context('../assets/waterfall', false, /\.(png|jpe?g|svg)$/));

    useEffect(() => {
        // Automatically show pictures after component mounts
        setShowPictures(true);
    }, []);

    const handleClick = () => {
        if (currentIndex < images.length - 1) {
            setShowPictures(true);
            setCurrentIndex(currentIndex + 1);
        }
    };

    useEffect(() => {
        if (showPictures && currentIndex < images.length - 1) {
            const timer = setTimeout(() => {
                setCurrentIndex(currentIndex + 1);
            }, 500); // Auto-advance every 0.5 seconds

            return () => clearTimeout(timer);
        }
    }, [showPictures, currentIndex]);

    return (
        <>
            Every Day with you is like a waterfall,
            Walay Connect

            <div className="stack-container">
                {showPictures && (
                    <div className="falling-images">
                        {images.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Falling ${index + 1}`}
                                className="falling-image"
                                style={{
                                    animation: 'fall 3s forwards',
                                    animationDelay: `${(index + 1) * 0.4}s`, // Stagger the animation
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default StackOfPictures;
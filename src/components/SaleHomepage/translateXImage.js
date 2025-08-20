import { useEffect, useState, useRef } from "react";

const useTranslateX = (ref) => {
    const [translateXPosition, setTranslateXPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;
            
            // Get the position of the container element
            if (ref.current) {
                const elementTop = ref.current.offsetTop;
                const elementHeight = ref.current.offsetHeight;
                
                // Define the start and end points of the animation based on the element's position
                const startAnimation = elementTop - window.innerHeight;
                const endAnimation = elementTop + elementHeight;
                
                // Calculate the scroll progress within the animation range
                const scrollProgress = (currentScrollPosition - startAnimation) / (endAnimation - startAnimation);
                
                // Clamp the progress between 0 and 1 to control the animation
                const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);
                
                // The maximum distance the images will move
                const maxTranslate = 150; 
                
                // Calculate the new translation value. 
                // We multiply the progress by the max distance to get a value from 0 to 150.
                const newTranslateX = clampedProgress * maxTranslate;

                setTranslateXPosition(newTranslateX);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ref]); // The effect depends on the ref, so it re-runs if the ref changes

    return {
        translateXPosition
    };
};

export default useTranslateX;
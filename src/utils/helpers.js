import { useState, useEffect } from 'react';

export const useScroll = () => {
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

    function getScrollPosition() {
        return { x: window.pageXOffset, y: window.pageYOffset };
    }

    useEffect(() => {
        function handleScroll() {
            setScrollPosition(getScrollPosition());
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return scrollPosition;
};

const POST_ENDPOINT = 'https://drewj.dev/.netlify/functions/contactEmail';
export const sendEmail = async params =>
    fetch(POST_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }).then(data => data.json());

import React, { useRef, useState, useEffect } from 'react'
import './App.css';

const App = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const divRef = useRef(null);
    const [divWidth, setDivWidth] = useState(0);

    useEffect(() => {
        if (divRef.current) {
            setDivWidth(divRef.current.offsetWidth + 150);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const containerStyle = {
        display: 'flex',
        gap: 20,
        padding: '20px 0px',
        backgroundColor: windowWidth < divWidth ? 'lightblue' : 'lightgreen',
        whiteSpace: 'noWrap',
        justifyContent: 'space-between'


    };

    const element = {
        display: windowWidth < divWidth && 'none',
    }

    return (
        <div style={containerStyle}>
            <div ref={divRef}>
                <p>Resize the window to see the changes! Lorem ipsum dolor sit.</p>
            </div>

            <div style={{ display: 'flex', gap: 5 }}>
                <div style={element}>Label:</div>
                <div >lorem</div>
            </div>
        </div>
    );
}

export default App

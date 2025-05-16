import React from 'react';
import useWindow from '../hooks/useWindow';

export default function ScreenSize(){
    const width = useWindow();

    return(
        <>
            <h2>Example 1: Width of a window</h2>
            <p>The actual width of the window is: {width}px. </p>
        </>
    );
}
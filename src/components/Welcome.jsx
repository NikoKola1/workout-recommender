import React, { useState } from 'react'
import bgImage from '../assets/welcomebg.avif'

const Welcome = () => {

    return (
        <div style={styles.container}>
            {/*Additional content*/}
            <div style={styles.box}>
                <h1>Tervetuloa</h1>
            </div>
        </div>
    )
}

const styles = {
    container: {
        width: '100vw',
        height: '100%',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        objectFit: 'contain',
    },
    box: {
        backgroundColor: 'rgba(11,202,220, 0.3)',
        color: "white",
        minWidth: "60%",
        textShadow: "1px 1px 2px black",
        fontSize:"4rem",
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
    },
}

export default Welcome;

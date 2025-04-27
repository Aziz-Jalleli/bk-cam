import React from 'react';

const scroll = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '300vh', // Make it much taller than the screen
        backgroundImage: "url('https://bk-cam.com/image/data/journal2/background/2-2.jpg')",
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', // <-- THIS is the magic
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold',
        textShadow: '0px 0px 10px rgba(0,0,0,0.7)'
      }}>
        Scroll Down 👇
      </div>
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold',
        textShadow: '0px 0px 10px rgba(0,0,0,0.7)'
      }}>
        Still Scrolling 👇
      </div>
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '2rem',
        fontWeight: 'bold',
        textShadow: '0px 0px 10px rgba(0,0,0,0.7)'
      }}>
        You reached the end! 🎯
      </div>
    </div>
  );
};

export default scroll;

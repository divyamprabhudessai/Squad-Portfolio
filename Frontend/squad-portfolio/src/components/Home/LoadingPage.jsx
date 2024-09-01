import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import './LoadingPage.css';

const LoadingPage = () => {
  const canvasRef = useRef(null);
  const numberOfParticules = 30;
  const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];
  let pointerX = 0;
  let pointerY = 0;

  const [on, setOn] = useState(false);

  const setCanvasSize = () => {
    const canvasEl = canvasRef.current;
    canvasEl.width = window.innerWidth * 2;
    canvasEl.height = window.innerHeight * 2;
    canvasEl.style.width = window.innerWidth + 'px';
    canvasEl.style.height = window.innerHeight + 'px';
    canvasEl.getContext('2d').scale(2, 2);
  };

  const updateCoords = (e) => {
    pointerX = e.clientX || e.touches[0].clientX;
    pointerY = e.clientY || e.touches[0].clientY;
  };

  const setParticuleDirection = (p) => {
    const angle = anime.random(0, 360) * Math.PI / 180;
    const value = anime.random(50, 180);
    const radius = [-1, 1][anime.random(0, 1)] * value;
    return {
      x: p.x + radius * Math.cos(angle),
      y: p.y + radius * Math.sin(angle),
    };
  };

  const createParticule = (x, y) => {
    const p = {
      x,
      y,
      color: colors[anime.random(0, colors.length - 1)],
      radius: anime.random(16, 32),
      endPos: setParticuleDirection({ x, y }),
      draw() {
        const ctx = canvasRef.current.getContext('2d');
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = p.color;
        ctx.fill();
      },
    };
    return p;
  };

  const createCircle = (x, y) => {
    const p = {
      x,
      y,
      color: '#FFF',
      radius: 0.1,
      alpha: 0.5,
      lineWidth: 6,
      draw() {
        const ctx = canvasRef.current.getContext('2d');
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.lineWidth = p.lineWidth;
        ctx.strokeStyle = p.color;
        ctx.stroke();
        ctx.globalAlpha = 1;
      },
    };
    return p;
  };

  const renderParticule = (anim) => {
    for (let i = 0; i < anim.animatables.length; i++) {
      anim.animatables[i].target.draw();
    }
  };

  const animateParticules = (x, y) => {
    const circle = createCircle(x, y);
    const particules = [];
    for (let i = 0; i < numberOfParticules; i++) {
      particules.push(createParticule(x, y));
    }
    anime.timeline().add({
      targets: particules,
      x: (p) => p.endPos.x,
      y: (p) => p.endPos.y,
      radius: 0.1,
      duration: anime.random(1200, 1800),
      easing: 'easeOutExpo',
      update: renderParticule,
    })
      .add({
        targets: circle,
        radius: anime.random(80, 160),
        lineWidth: 0,
        alpha: {
          value: 0,
          easing: 'linear',
          duration: anime.random(600, 800),
        },
        duration: anime.random(1200, 1800),
        easing: 'easeOutExpo',
        update: renderParticule,
        offset: 0,
      });
  };

  useEffect(() => {
    const canvasEl = canvasRef.current;
    const ctx = canvasEl.getContext('2d');
    const tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
    let human = false;

    const render = anime({
      duration: Infinity,
      update() {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      },
    });

    const handleEvent = (e) => {
      human = true;
      render.play();
      updateCoords(e);
      animateParticules(pointerX, pointerY);
    };

    document.addEventListener(tap, handleEvent, false);

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize, false);

    return () => {
      document.removeEventListener(tap, handleEvent, false);
      window.removeEventListener('resize', setCanvasSize, false);
    };
  }, []);

  // Handler for clicking the button to trigger checkboxes
  const handleButtonClick = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      if (!checkbox.checked) {
        checkbox.click();  // Programmatically click each checkbox
      }
    });
    setOn(true);  // Update the state after the loop
    console.log('on', on);
  };

  const handleOff = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        checkbox.click();  // Programmatically click each checkbox
      }
    });
    setOn(false);  // Update the state after the loop
    console.log('on', on);
  };

  return (
    <div className="loading-page">
      <ul>
        <li>
          <input type="checkbox" />
          <div>S</div>
        </li>
        <li>
          <input type="checkbox" />
          <div>Q</div>
        </li>
        <li>
          <input type="checkbox" />
          <div>U</div>
        </li>
        <li>
          <input type="checkbox" />
          <div>A</div>
        </li>
        <li>
          <input type="checkbox" />
          <div>D</div>
        </li>
        <li>
          <input type="checkbox" />
          <div>-</div>
        </li>
        <li>
          <input type="checkbox" />
          <div>55</div>
        </li>
      </ul>
      {on ? (
        <button onClick={handleOff} className='buttons'>off</button>
      ) : (
        <button onClick={handleButtonClick} className='buttons'>on</button>
      )}
      <canvas className="fireworks" ref={canvasRef} />
    </div>
  );
};

export default LoadingPage;

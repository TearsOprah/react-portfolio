import React, { useState, useRef, useEffect } from 'react';
import './Canvas.css';

function Canvas(props) {
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const cellSize = 40; // размер пикселя
  const colors = ['#ffc0cb', '#90ee90', '#add8e6', '#e6c9ff', '#b0e0e6']; // массив из 6 пастельных цветов

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    drawPixel(e.nativeEvent);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    drawPixel(e.nativeEvent);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const drawPixel = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const x = Math.floor((e.clientX - canvas.offsetLeft) / cellSize);
    const y = Math.floor((e.clientY - canvas.offsetTop) / cellSize);
    const color = colors[Math.floor(Math.random() * colors.length)]; // выбираем случайный цвет из массива
    ctx.fillStyle = color; // устанавливаем выбранный цвет
    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'rgba(250, 235, 215, 0)'; // цвет сетки между пикселями
    for (let x = 0; x < canvas.width; x += cellSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += cellSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
  }, [cellSize]);

  return (
    <canvas
      className={'canvas'}
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    />
  );
}

export default Canvas;

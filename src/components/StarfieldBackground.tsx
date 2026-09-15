import { useEffect, useRef, type FC } from 'react';

export const StarfieldBackground: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate stars
    const starCount = 140;
    const stars: {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      delta: number;
    }[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.5,
        speed: Math.random() * 0.35 + 0.1,
        opacity: Math.random() * 0.7 + 0.3,
        delta: Math.random() * 0.02 + 0.005,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Move stars slowly upwards and to the left (outer space drift)
        star.y -= star.speed;
        star.x -= star.speed * 0.3;

        // Twinkle
        star.opacity += star.delta;
        if (star.opacity >= 0.95 || star.opacity <= 0.2) {
          star.delta = -star.delta;
        }

        // Wrap around
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }
        if (star.x < 0) {
          star.x = width;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-45"
      aria-hidden="true"
    />
  );
};

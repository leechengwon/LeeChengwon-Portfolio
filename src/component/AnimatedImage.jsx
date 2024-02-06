import { useState } from "react";

const AnimatedImage = ({ imgSrc, width, height }) => {
  //image 움직이게하는 부분
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const [backgroundPosition, setBackgroundPosition] = useState(100);

  const handleMouseMove = (event) => {
    const { offsetX: x, offsetY: y } = event.nativeEvent;
    const rotateY = (x - 150) / 10;
    const rotateX = (y - 150) / 10;
    setRotateY(rotateY);
    setRotateX(rotateX);
    setBackgroundPosition(x + y + 100);
  };

  return (
    <div
      className="animated-img-container relative rounded-md shadow-lg bg-[#f5f5f5]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setRotateY(0);
        setRotateX(0);
        setBackgroundPosition(100);
      }}
      style={{
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div
        className="absolute rounded-md w-full h-full mix-blend-color-dodge background-blend-mode-soft-light filter brightness-110 opacity-80"
        style={{
          background: `linear-gradient(105deg, transparent 40%, rgba(255, 219, 112, 0.8) 45%, rgba(132, 50, 255, 0.6) 50%, transparent 54%)`,
          backgroundSize: "150% 150%",
          backgroundPosition: `${backgroundPosition}%`,
        }}
      />
      <img
        className="animated rounded-md object-cover border-2 border-[#000]/20"
        src={imgSrc}
        alt="project"
      />
    </div>
  );
};

export default AnimatedImage;

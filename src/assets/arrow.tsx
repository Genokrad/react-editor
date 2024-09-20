interface ArrowTopIconProps {
  color?: string;
  rotation?: number;
}

const ArrowTopIcon: React.FC<ArrowTopIconProps> = ({ color = 'white', rotation = 0 }) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }} // Применяем поворот
    >
      <g id="arrow-top">
        <path
          id="Vector"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.875 11.6162V1.24999H8.125V11.6162L12.0581 7.68312L12.9419 8.56687L7.5 14.0087L2.05813 8.56687L2.94188 7.68312L6.875 11.6162Z"
          fill={color} // Устанавливаем цвет через пропс
        />
      </g>
    </svg>
  );
};

export default ArrowTopIcon;
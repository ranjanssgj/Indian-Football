export function IndianFlagIcon({ className, width = 27, height = 18 }: { className?: string, width?: number, height?: number }) {
  const saffron = "#FF9933";
  const white = "#FFFFFF";
  const green = "#138808";
  const navyBlue = "#000080";

  const bandHeight = height / 3;
  const chakraRadius = bandHeight * 0.8 / 2; // Chakra smaller than the white band

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      width={width}
      height={height}
      aria-label="Indian Flag"
    >
      <rect width={width} height={bandHeight} fill={saffron} />
      <rect y={bandHeight} width={width} height={bandHeight} fill={white} />
      <rect y={bandHeight * 2} width={width} height={bandHeight} fill={green} />
      <circle cx={width / 2} cy={height / 2} r={chakraRadius} fill={navyBlue} />
      <circle cx={width / 2} cy={height / 2} r={chakraRadius * 0.85} fill={white} />
      <circle cx={width / 2} cy={height / 2} r={chakraRadius * 0.2} fill={navyBlue} />
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1={width / 2}
          y1={height / 2}
          x2={width / 2}
          y2={(height / 2) - chakraRadius * 0.85}
          stroke={navyBlue}
          strokeWidth={chakraRadius * 0.1} // Made spokes thinner
          transform={`rotate(${i * 15}, ${width / 2}, ${height / 2})`}
        />
      ))}
    </svg>
  );
}

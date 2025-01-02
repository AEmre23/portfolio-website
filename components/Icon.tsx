interface IconProps {
    className?: string;
    width?: number | string;
    height?: number | string;
    color?: string;
    children: React.ReactNode;
  }
  
  const Icon = ({ className, width = 24, height = 24, color = "currentColor", children }: IconProps) => (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
  
  export default Icon;
  
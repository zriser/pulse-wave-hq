interface LoadingPulseProps {
  className?: string;
}

const LoadingPulse = ({ className = '' }: LoadingPulseProps) => {
  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      <div className="flex space-x-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-8 bg-primary rounded-full animate-wave-pulse"
            style={{
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
      <span className="text-primary font-semibold ml-3">Loading...</span>
    </div>
  );
};

export default LoadingPulse;
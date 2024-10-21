import { cn } from "@/lib/utils";

interface LoadingProps {
  size?: "small" | "medium" | "large";
  className?: string;
}

export default function Loading({
  size = "medium",
  className,
}: LoadingProps = {}) {
  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className={cn("relative rounded-full", sizeClasses[size])}>
        <div
          className={cn(
            "absolute inset-0 rounded-full bg-blue-500 opacity-25 animate-ping",
            sizeClasses[size]
          )}
        ></div>
        <div
          className={cn("relative rounded-full bg-blue-600", sizeClasses[size])}
        >
          <span className="sr-only">Loading</span>
        </div>
      </div>
    </div>
  );
}

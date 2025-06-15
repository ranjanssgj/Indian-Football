import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {}

const GlassCard = ({ className, children, ...props }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "bg-card/30 backdrop-blur-lg border border-border/30 rounded-xl shadow-2xl overflow-hidden", // Adjusted opacity and shadow
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { GlassCard };

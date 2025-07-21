import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={
          "rounded-lg border border-border bg-background p-4 " + (className || "")
        }
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

export { Card };

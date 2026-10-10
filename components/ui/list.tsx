import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

function ListCard({ className, children }: ComponentProps<"div">) {
  return <div className={cn("space-y-2 my-2 py-3", className)}>{children}</div>;
}

function ListCardHeader({ className, children }: ComponentProps<"div">) {
  return <div className={cn("mt-2 mb-4", className)}>{children}</div>;
}

function List({ className, children }: ComponentProps<"ul">) {
  return <ul className={cn("list-none space-y-3", className)}>{children}</ul>;
}

function ListCardTitle({ className, children }: ComponentProps<"h4">) {
  return (
    <h4 className={cn("text-2xl tracking-tighter", className)}>{children}</h4>
  );
}

function ListCardDescription({ className, children }: ComponentProps<"div">) {
  return <p className={cn("text-muted-foreground", className)}>{children}</p>;
}

function ListItem({ className, children }: ComponentProps<"li">) {
  return (
    <li
      className={cn(
        "flex items-center gap-1 text-base md:text-lg text-foreground/60 tracking-tighter leading-[0.98] ml-1",
        className,
      )}
    >
      {children}
    </li>
  );
}

function ListItemMarker({ className, children }: ComponentProps<"span">) {
  return (
    <span className={cn("size-1.5 bg-foreground/60 rounded-full", className)}>
      {children}
    </span>
  );
}

export {
  List,
  ListCard,
  ListCardDescription,
  ListCardHeader,
  ListCardTitle,
  ListItem,
  ListItemMarker,
};

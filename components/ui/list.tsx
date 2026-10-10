import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

function ListArea({ className, children }: ComponentProps<"div">) {
  return <div className={cn("space-y-2 my-2 py-3", className)}>{children}</div>;
}

function List({ className, children }: ComponentProps<"ul">) {
  return <ul className={cn("list-none space-y-2", className)}>{children}</ul>;
}

function ListTitle({ className, children }: ComponentProps<"h4">) {
  return (
    <h4 className={cn("text-2xl tracking-tighter", className)}>{children}</h4>
  );
}

function ListDescription({ className, children }: ComponentProps<"div">) {
  return <p className={cn("text-muted-foreground", className)}>{children}</p>;
}

function ListItem({ className, children }: ComponentProps<"li">) {
  return (
    <li
      className={cn(
        "flex items-center gap-1 text-lg text-muted-foreground tracking-tight ml-1",
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

export { List, ListArea, ListDescription, ListItem, ListItemMarker, ListTitle };

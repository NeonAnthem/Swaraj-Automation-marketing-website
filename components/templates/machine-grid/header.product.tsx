import { Button } from "@/components/ui/button";
import { ListCard, ListCardHeader, ListCardTitle } from "@/components/ui/list";
import Tag from "@/components/ui/tag";
import { IMachine } from "@/data/static/machines/machines.types";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
import { PropsWithChildren } from "react";

function ProductHeader({ children }: PropsWithChildren) {
  return <div className={"grid grid-cols-1 md:grid-cols-6"}>{children}</div>;
}

function ProductHeaderImage({ children }: PropsWithChildren) {
  return <div className={"h-auto md:col-span-2"}>{children}</div>;
}

function ProductHeaderDetails({ machine }: { machine: IMachine }) {
  return (
    <div
      className={
        "flex flex-col gap-2 md:flex-row md:gap-4 items-center md:col-span-4"
      }
    >
      {/* Text Content Area */}
      <div className={"text-start space-y-8 "}>
        {/* Category Label */}
        <Tag
          textCase={"upper"}
          size={"none"}
          className={"underline underline-offset-10"}
        >
          {machine.category ?? "Machines"}
        </Tag>
        {/* end Category Label */}

        {/* Machine Details */}
        <div className={"space-y-4"}>
          <h2 className={"text-5xl tracking-tight text-primary font-semibold"}>
            {machine.name}
          </h2>
          <p className={"text-md w-[80%] text-foreground"}>
            {machine.description}
          </p>
        </div>
        {/* end Machine Details */}

        {/* Tags */}
        <ListCard className={"-space-y-2!"}>
          <ListCardHeader className={"pb-0!"}>
            <ListCardTitle>
              {/* Operations Performed on this machine */}
              Tools that can be equiped on the machines
            </ListCardTitle>
          </ListCardHeader>
          <div className={"flex flex-wrap gap-4"}>
            {machine.operationsPerformed?.map((tag) => (
              <Tag
                key={tag}
                variant={"pill"}
                size={"lg"}
                hasTag={false}
                className={"px-0! py-1! border-none!"}
              >
                <span className={"text-primary font-medium"}>{tag}</span>
              </Tag>
            ))}
          </div>
        </ListCard>
        {/* end Tags */}
        <div className={""}>
          <Button
            nativeButton={false}
            size={"lg"}
            render={
              <Link href={"/contact"}>
                Request a Quote <IconArrowUpRight />
              </Link>
            }
          />
        </div>
      </div>
      {/* end Text Content Area */}
      {/* CTA */}

      {/* end CTA */}
    </div>
  );
}

export { ProductHeader, ProductHeaderDetails, ProductHeaderImage };

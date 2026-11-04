import ThumbnailsCarousel from "@/components/cards/thumbnails";
import { MachineSpecTable } from "@/components/features/machine-table/machine-spec-table";
import {
  List,
  ListCard,
  ListCardHeader,
  ListCardTitle,
  ListItem,
} from "@/components/ui/list";
import Tag from "@/components/ui/tag";
import type { IMachine } from "@/data/static/machines/machines.types";
import { cn } from "@/lib/utils";
import { IconArrowRight } from "@tabler/icons-react";

interface IMachineInfoPanelProps {
  machine: IMachine;
  /** Spans the full width next to the list when there is no media panel */
  fullWidth?: boolean;
}

export function MachineInfoPanel({
  machine,
  fullWidth = false,
}: IMachineInfoPanelProps) {
  return (
    <div
      className={cn(
        "text-start flex flex-col gap-8 -mt-10! px-2",
        "lg:col-span-8",
      )}
    >
      <div className={"mt-12"}>
        <ThumbnailsCarousel
          images={[
            {
              url: "/assets/images/x_DSC_0011.jpg",
              alt: "Sime",
            },
            {
              url: "/assets/images/x_DSC_0011.jpg",
              alt: "Sime",
            },
            {
              url: "/assets/images/x_DSC_0011.jpg",
              alt: "Sime",
            },
            {
              url: "/assets/images/x_DSC_0011.jpg",
              alt: "Sime",
            },
          ]}
        />
      </div>
      {/* Applications */}
      <ListCard>
        <ListCardHeader>
          <ListCardTitle>Applications</ListCardTitle>
        </ListCardHeader>
        {machine.applications?.length > 0 && (
          <div className={"flex flex-wrap gap-2 sm:mt-8"}>
            {machine.applications.map((application) => (
              <Tag key={application} variant={"pill"} size={"lg"}>
                {application}
              </Tag>
            ))}
          </div>
        )}
      </ListCard>
      {/* end Applications */}

      {/* Video */}
      {/* {machine?.videoUrl && (
        <iframe
          className="w-[80%] h-80 md:h-128"
          src={machine?.videoUrl}
          title={machine?.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )} */}
      {/* end Video */}

      {/* Specifications Table */}
      {machine.tables?.length ? (
        <MachineSpecTable tables={machine.tables} />
      ) : null}
      {/* end Specifications Table */}

      {/* Machine Key Features */}
      <ItemListComponent title="Key Features" items={machine.features} />
      {/* end Machine Key Features */}
      {/* Machine Tags */}
      {/* <ListCard>
        <ListCardHeader>
          <ListCardTitle>Tags</ListCardTitle>
        </ListCardHeader>
        <div className={"flex flex-wrap gap-1"}>
          {machine.features?.map((tag) => {
            return (
              <Tag key={tag} className={""}>
                {tag}
              </Tag>
            );
          })}
        </div>
      </ListCard> */}
      {/* end Machine Tags */}
    </div>
  );
}

interface IItemListComponent {
  title: string;
  items: string[];
}

/**
 * @param title header title for the list
 * @param items array of strings to be displayed as a list
 */
function ItemListComponent({ title, items }: IItemListComponent) {
  return (
    <ListCard className="my-0 py-0">
      <ListCardHeader>
        <ListCardTitle>{title}</ListCardTitle>
      </ListCardHeader>

      <List>
        {items?.map((item, index) => (
          <ListItem key={item + index} className={"text-foreground!"}>
            <IconArrowRight className="size-4 shrink-0" aria-hidden={true} />
            {item}
          </ListItem>
        ))}
      </List>
    </ListCard>
  );
}

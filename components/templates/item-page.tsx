"use client";

import {
  Section,
  SectionContent,
} from "@/components/features/section/index.section";
import { MACHINES_MAP } from "@/data/static/machines/machines";
import {
  IconArrowRight,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { notFound } from "next/navigation";
import { useRef, useState } from "react";
import type { IMachine } from "../../data/static/machines/machines.types";
import {
  List,
  ListCard,
  ListCardHeader,
  ListCardTitle,
  ListItem,
} from "../ui/list";
import { Separator } from "../ui/separator";
import Tag from "../ui/tag";

interface IItemPageComponentProps {
  machineKey: string;
}

interface IMachineVideoFrameProps {
  videoUrl: string;
  title: string;
}

function MachineVideoFrame({ videoUrl, title }: IMachineVideoFrameProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const togglePlayback = () => {
    const player = iframeRef.current?.contentWindow;
    if (!player) return;

    player.postMessage(
      JSON.stringify({
        event: "command",
        func: isPlaying ? "pauseVideo" : "playVideo",
        args: [],
      }),
      "*",
    );
    setIsPlaying((playing) => !playing);
  };

  return (
    <div className={"relative"}>
      <iframe
        ref={iframeRef}
        width="560"
        height="315"
        // `enablejsapi=1` is required for the postMessage play/pause commands below.
        src={`${videoUrl}?enablejsapi=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className={
          "absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity hover:opacity-100"
        }
      >
        <span
          className={
            "flex items-center justify-center rounded-full bg-white/90 p-4"
          }
        >
          {isPlaying ? (
            <IconPlayerPauseFilled className={"size-6 text-black"} />
          ) : (
            <IconPlayerPlayFilled className={"size-6 text-black"} />
          )}
        </span>
      </button>
    </div>
  );
}

export function ItemPageComponent({ machineKey }: IItemPageComponentProps) {
  const machine: IMachine = MACHINES_MAP?.[machineKey as never];

  if (!machine) return notFound();

  return (
    <>
      <Section className={"border-b"}>
        <SectionContent>
          {/* Machines Heading */}
          <div
            className={
              "flex flex-col gap-2 md:flex-row md:gap-4 md:justify-between pt-8 md:pt-14"
            }
          >
            {/* Text Content Area */}
            <div className={"text-start space-y-8 "}>
              {/* Label */}

              <Tag textCase={"upper"} size={"none"}>
                Precision Deep hole drilling
              </Tag>

              {/* end Label */}

              {/* Machine Details */}
              <div className={"space-y-4"}>
                {/* Machine Name */}
                <h2 className={"text-5xl tracking-tight"}>{machine.name}</h2>
                {/* end Machine Name */}
                {/* Description */}
                <p className={"max-w-[90%] xl:max-w-120 text-muted-foreground"}>
                  {machine.tagline}
                </p>
                {/* end Description */}
              </div>
              {/* end Machine Details */}
              {/* tags */}
              <div className={"flex flex-wrap gap-2"}>
                {machine.tags.map((tag) => (
                  <Tag key={tag} variant={"pill"}>
                    {tag}
                  </Tag>
                ))}
              </div>
              {/* end Tags */}
              {/* <Button
                className={"bg-white text-foreground border border-border"}
              >
                Contact Sales
                <IconArrowUpRight />
              </Button> */}
            </div>
            {/* end Text Content Area */}

            {/* Video Area */}
            <div className={"rounded-2xl overflow-hidden"}>
              {/* <MachineVideoFrame
                videoUrl={machine.videoUrl}
                title="Machine Video"
              /> */}
            </div>
            {/* end Video Area */}
          </div>
          {/* end Machines Heading */}
        </SectionContent>
      </Section>

      {/* Grid Section */}
      <Section>
        <SectionContent>
          {/* Grid */}
          <div
            className={
              "w-full min-h-screen flex flex-row justify-between gap-2"
            }
          >
            {/* Text Content */}
            <div className="text-start my-2 mb-4 space-y-3">
              <h4 className={"tracking-tighter text-2xl text-foreground"}>
                Overview
              </h4>
              <p
                className={
                  "tracking-tight leading-[0.98] text-muted-foreground xl:max-w-160"
                }
              >
                {machine.description}
              </p>

              <Separator className={"mt-8"} />
              <div className={"space-y-8"}>
                {/* Key Features */}

                <ItemListComponent
                  title={"Key Features"}
                  items={machine.features}
                />

                {/* end Key Features */}
                <Separator />

                {/* Applications */}
                <ItemListComponent
                  title={"Applications"}
                  items={machine.applications}
                />
                {/* end Applications */}
              </div>
            </div>
            {/* end Text Content */}
            {/* Image Content */}
            <div className={"overflow-hidden rounded-lg w-fit"}>
              <MachineVideoFrame
                videoUrl={machine.videoUrl}
                title={"Machine Video"}
              />
            </div>
            {/* End Image Content */}
          </div>
          {/* end Grid */}
        </SectionContent>
      </Section>
      {/* end Grid Section */}
    </>
  );
}

//* Item List Component

interface IItemListComponent {
  title: string;
  items: string[];
}

/**
 *
 * @param title Header title for the list
 * @param items Array of String to be displayed as list
 * @returns React.Node
 */
function ItemListComponent({ title, items }: IItemListComponent) {
  return (
    <ListCard>
      <ListCardHeader>
        <ListCardTitle>{title}</ListCardTitle>
      </ListCardHeader>

      <List>
        {items?.map((item, index) => {
          return (
            <ListItem key={item + index}>
              <IconArrowRight className={"size-4"} aria-hidden={true} />
              {item}
            </ListItem>
          );
        })}
      </List>
    </ListCard>
  );
}

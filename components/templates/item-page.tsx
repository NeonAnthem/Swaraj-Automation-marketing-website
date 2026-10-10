"use client";

import {
  Section,
  SectionContent,
} from "@/components/features/section/index.section";
import {
  IconArrowRight,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { useRef, useState } from "react";
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
  const mockMachine = {
    key: machineKey,
    name: "Micro Gun Drilling Machine",
    tagline: "Precision deep hole drilling for small-diameter applications.",
    tags: [
      "Small-Diameter Drilling",
      "CNC Controlled",
      "High-Precision Machining",
    ],
    description:
      "Designed for accurate, repeatable drilling of small-diameter, deep holes in industrial components.",

    videoUrl: "https://www.youtube.com/embed/RGFsdCiJveU",
    features: [
      "Precision spindle system for small-diameter drilling.",
      "CNC-controlled drilling cycles for repeatability.",
      "High-pressure coolant delivery through the gun drill with 5 micron Filtration",
      "Configurable spindle speed and feed parameters.",
      "Customized workholding solutions",
      "Compact Sized Machine - Less Floor Area Occupied",
    ],
    applications: [
      "Core Pins",
      "Implants & Instruments",
      "Gauges",
      "Spindles",
      "Electronic Components",
    ],
  };

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
                <h2 className={"text-5xl tracking-tight"}>
                  {mockMachine.name}
                </h2>
                {/* end Machine Name */}
                {/* Description */}
                <p className={"max-w-[90%] xl:max-w-120 text-muted-foreground"}>
                  {mockMachine.tagline}
                </p>
                {/* end Description */}
              </div>
              {/* end Machine Detials */}
              {/* tags */}
              <div className={"flex flex-wrap gap-2"}>
                {mockMachine.tags.map((tag) => (
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
                videoUrl={mockMachine.videoUrl}
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
                {mockMachine.description}
              </p>

              <Separator className={"mt-8"} />
              <div className={"space-y-8"}>
                {/* Key Features */}
                <ListCard>
                  <ListCardHeader>
                    <ListCardTitle>Key Features</ListCardTitle>
                  </ListCardHeader>

                  <List>
                    {mockMachine.features.map((feature) => (
                      <ListItem key={feature}>
                        {/* <ListItemMarker /> */}
                        <IconArrowRight className={"size-4"} />
                        {feature}
                      </ListItem>
                    ))}
                  </List>
                </ListCard>
                {/* end Key Features */}
                <Separator />

                {/* Applications */}
                <ListCard>
                  <ListCardHeader>
                    <ListCardTitle>Applications</ListCardTitle>
                  </ListCardHeader>

                  <List>
                    {mockMachine.applications.map((application) => (
                      <ListItem key={application}>
                        {/* <ListItemMarker /> */}
                        <IconArrowRight className={"size-4"} />
                        {application}
                      </ListItem>
                    ))}
                  </List>
                </ListCard>
                {/* end Applications */}
              </div>
            </div>
            {/* end Text Content */}
            {/* Image Content */}
            <div className={"overflow-hidden rounded-lg w-fit"}>
              <MachineVideoFrame
                videoUrl={mockMachine.videoUrl}
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

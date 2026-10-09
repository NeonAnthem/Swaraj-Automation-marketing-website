"use client";

import {
  Section,
  SectionContent,
} from "@/components/features/section/index.section";
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { useRef, useState } from "react";
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
    name: "Deep Hole Gun Drilling Machine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempora, natus ea culpa quasi nostrum dolor nihil explicabo. Vitae, corrupti pariatur nemo a culpa asperiores ad quod aut ea sint eveniet tempore.",

    videoUrl: "https://www.youtube.com/embed/RGFsdCiJveU",
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

              <Tag className={"uppercase"} size={"none"}>
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
                  {mockMachine.description}
                </p>
                {/* end Description */}
              </div>
              {/* end Machine Detials */}
              {/* tags */}
              <div className={"flex flex-wrap gap-2"}>
                {[
                  "Small-Diameter Drilling",
                  "CNC Controlled",
                  "High-Precision Machining",
                ].map((tag) => (
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
          <div className={"w-full min-h-screen flex flex-row gap-2"}>
            {/* Image Content */}
            <div className={"overflow-hidden rounded-lg w-fit"}>
              <MachineVideoFrame
                videoUrl={mockMachine.videoUrl}
                title={"Machine Video"}
              />
            </div>
            {/* End Image Content */}

            {/* Text Content */}
            <div className="text-start">
              <h4 className={"tracking-tighter text-2xl text-foreground"}>
                Description
              </h4>
              <p className={"tracking-tight leading-[0.98] text-foreground"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatum sint vel repellendus recusandae maiores et nemo
                quidem nihil pariatur! Culpa itaque autem id temporibus porro
                natus iure tempora quae hic. Voluptatibus, natus.
              </p>
            </div>
            {/* end Text Content */}
          </div>
          {/* end Grid */}
        </SectionContent>
      </Section>
      {/* end Grid Section */}
    </>
  );
}

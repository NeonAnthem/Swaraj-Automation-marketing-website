import { cn } from "cn";
import Image from "next/image";
import { PropsWithChildren } from "react";

export default function MetricsSection() {
  return (
    <div className="flex flex-col md:flex-row gap-8 xl:gap-24">
      {/* Image Area */}
      <div className="rounded-xs">
        <Image
          className="rounded-[inherit]"
          src="/assets/images/team-members-group.webp"
          alt="Metrics Image"
          width={640}
          height={360}
        />
      </div>
      {/* end Image Area */}

      {/* Metrics Area */}

      <div className="flex flex-col gap-1 w-full md:justify-center">
        {/* Text content */}
        <div className="text-start">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 dark:text-white mb-16 tracking-tight xl:w-[80%]">
            Powering Industries with precision machines.{" "}
            <span className="text-zinc-500 dark:text-zinc-400">
              Our next-gen precision machines push the boundaries of
              manufacturing excellence.
            </span>
          </h3>
        </div>
        {/* end Text content */}

        {/* Metrics Content */}
        <div className=" border-y">
          <div
            className={cn(
              "grid grid-cols-1 grid-rows-flow gap-2 text-start w-full min-h-100 divide-y divide-gray-200 dark:divide-gray-700",
            )}
          >
            {/* end First row */}
            <RowWrapper>
              <MetricCard label="years in business" value="25+" />
              <MetricCard label="satisfied clients" value="70+" />
              <MetricCard label="Projects completed" value="150+" />
            </RowWrapper>
            {/* end First Row */}
            {/* Second Row */}
            {/* <RowWrapper>
              <MetricCard label="projects completed" value="150+" />
              <MetricCard label="awards won" value="8" />
            </RowWrapper> */}
            {/* end Second Row */}
          </div>
        </div>
        {/* end Metrics Content */}
      </div>

      {/* end Metrics Area */}
    </div>
  );
}

function RowWrapper({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-1 grid-rows-flow md:grid-cols-3 gap-2 text-start w-full">
      {children}
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2 justify-center w-full">
      <h3 className="text-6xl text-foreground font-medium">{value}</h3>
      <p className="text-2xl tracking-tight text-muted-foreground/70">
        {label}
      </p>
    </div>
  );
}

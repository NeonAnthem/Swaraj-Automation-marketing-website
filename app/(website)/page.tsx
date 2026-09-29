import {
  Section,
  SectionContent,
} from "@/components/features/section/index.section";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Section spacing="none" className={"relative min-h-screen z-10"}>
        {/* Video */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover object-left"
            src="/assets/videos/hero.webm"
          />

          <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
        </div>
        {/* end Video */}

        {/* Hero Content */}
        <SectionContent className={"z-100"}>
          <div className="text-start flex flex-col justify-center min-h-screen space-y-12">
            <div>
              <h1 className="text-white text-7xl font-semibold tracking-tighter leading-[0.98]">
                Precision
                <br />
                manufacturing
                <br /> without friction
              </h1>
              <p className="text-muted-foreground text-md mt-4 ">
                We provide top-notch automation solutions to streamline your
                business processes.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button size={"lg"} variant={"default"} className="capitalize">
                Request a quote
              </Button>
              {/* Secondary Button */}
              <Button size={"lg"} variant={"secondary"} className="capitalize">
                Contact Sales
              </Button>
              {/* end Secondary Button */}
            </div>
          </div>
        </SectionContent>
        {/* end Hero Content */}
      </Section>
    </>
  );
}

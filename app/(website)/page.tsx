import {
  IShowcaseSliderItem,
  ShowcaseSlider,
} from "@/components/cards/showcase.slider";
import FeaturedSectionStats from "@/components/cards/stats";
import { TeamSection } from "@/components/cards/teams-1";
import Timeline from "@/components/cards/timeline";
import { CinematicLogoCloud } from "@/components/cinematic-logo-cloud";
import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "@/components/features/section/index.section";
import { Button } from "@/components/ui/button";

export default function Home() {
  const demoIndustries: IShowcaseSliderItem[] = [
    {
      id: "cta",
      image: "",
      type: "cta",
      title: "Get in touch",
      description:
        "Reach out to us for inquiries, quotes, or any assistance you may need.",
      href: "#",
    },
    {
      id: "hydraulic-valves-connectors",
      title: "Hydraulic Valves, Connectors",
      description:
        "Precision-machined hydraulic valves and connectors engineered for reliable, high-pressure performance.",
      href: "#",
      image: "/assets/images/hydro.jpg",
    },
    {
      id: "food-processing-pellet-dies",
      title: "Food Processing & Pellet Dies",
      description:
        "Durable pellet dies and food processing components built to withstand demanding production environments.",
      href: "#",
      image: "/assets/images/food.jpg",
    },
    {
      id: "gear-manufacturers",
      title: "Gear Manufacturers",
      description:
        "Tight-tolerance components supporting gear manufacturers with consistent, repeatable precision.",
      href: "#",
      image: "/assets/images/ge.jpg",
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description:
        "Precision parts manufactured to strict quality standards for critical healthcare applications.",
      href: "#",

      image: "/assets/images/healthcare.jpg",
    },
    {
      id: "general-engineering",
      title: "General Engineering",
      description:
        "Versatile machining solutions supporting a wide range of general engineering projects.",
      href: "#",
      image: "/assets/images/eng.jpg",
    },
    {
      id: "machinery-and-fixtures",
      title: "Machinery and Fixtures",
      description:
        "Custom fixtures and machinery components designed for durability and precise fit.",
      href: "#",
      image: "/assets/images/mach.jpg",
    },
    {
      id: "automotive",
      title: "Automotive",
      description:
        "High-precision automotive components manufactured to meet rigorous industry standards.",
      href: "#",
      image: "/assets/images/autom.jpg",
    },
    {
      id: "pneumatics",
      title: "Pneumatics",
      description:
        "Precision pneumatic components engineered for consistent, leak-free performance.",
      href: "#",
      image: "/assets/images/pen.jpg",
    },
    {
      id: "mechanical-industry",
      title: "Mechanical Industry",
      description:
        "Reliable mechanical components manufactured to exacting tolerances for diverse industrial needs.",
      href: "#",
      image: "/assets/images/mech.jpg",
    },
    {
      id: "instrumentation",
      title: "Instrumentation",
      description:
        "Precision-engineered parts for instrumentation applications requiring exceptional accuracy.",
      href: "#",
      image: "/assets/images/instrument.jpg",
    },
  ];

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

      {/* Trusted Teams */}

      <Section>
        <SectionContent>
          <CinematicLogoCloud
            eyebrow="Trusted by teams at"
            clients={[
              {
                name: "OpenAI",
                text: true,
                className: "text-xl font-semibold",
              },
              {
                name: "hello patient",
                text: true,
                className: "text-lg font-medium lowercase",
              },
              { name: "granola", text: true, className: "text-lg font-medium" },
              {
                name: "character.ai",
                text: true,
                className: "text-lg font-medium",
              },
              {
                name: "ORACLE",
                text: true,
                className:
                  "text-lg font-bold tracking-wide text-red-600 dark:text-red-500",
              },
              {
                name: "PORTOLA",
                text: true,
                className: "text-lg font-semibold tracking-wide",
              },
              { name: "Accel", text: true, className: "text-xl font-semibold" },
              { name: "Bloomberg", text: true, className: "text-lg font-bold" },
              {
                name: "FORBES",
                text: true,
                className: "text-lg font-bold font-serif tracking-wide",
              },
              {
                name: "SoftBank",
                text: true,
                className: "text-lg font-semibold",
              },
              {
                name: "WIRED",
                text: true,
                className: "text-lg font-black tracking-tight",
              },
              { name: "hulu", text: true, className: "text-xl font-bold" },
              {
                name: "YouTube",
                text: true,
                className: "text-lg font-semibold",
              },
              {
                name: "NETFLIX",
                text: true,
                className: "text-lg font-bold tracking-widest",
              },
            ]}
          />
        </SectionContent>
      </Section>
      {/* end Trusted Teams */}

      {/* Industries We Serve */}
      <Section>
        <SectionHeader>
          <SectionTitle className="font-medium tracking-tighter">
            Industries We Serve
          </SectionTitle>
          <SectionDescription className="text-muted-foreground">
            We Design Solutions for a Wide Range of Industries & Sectors across
            the fastest growing markets
          </SectionDescription>
        </SectionHeader>

        {/*  */}

        <ShowcaseSlider items={demoIndustries} />
        {/*  */}
      </Section>
      {/* end Industries We Serve */}
      {/* Stats */}
      <Section>
        <FeaturedSectionStats />
      </Section>
      {/* end Stats */}

      {/* Values Section */}
      <Section>
        <SectionHeader>
          <SectionTitle className="font-medium tracking-tighter">
            Our Core Values
          </SectionTitle>
          <SectionDescription className="text-muted-foreground">
            We are committed to delivering excellence through our core values
            that drive our innovation and customer satisfaction.
          </SectionDescription>
        </SectionHeader>
      </Section>
      {/* end Values section */}

      {/* Featured Products */}
      <Section>
        <SectionHeader>
          <SectionTitle className="font-medium tracking-tighter">
            Featured Products
          </SectionTitle>
          <SectionDescription className="text-muted-foreground">
            Explore our range of featured products that exemplify our commitment
            to quality and innovation.
          </SectionDescription>
        </SectionHeader>
        <ShowcaseSlider items={demoIndustries} />
      </Section>
      {/* end Featured Products */}

      {/* Teams Section */}
      <Section>
        <TeamSection />
      </Section>
      {/* end Teams Section */}

      {/* Timeline Section */}
      <Section>
        <Timeline
          imageUrl="/assets/images/place.jpg"
          title="Swaraj's foundation"
          activeColor="#9f1f24"
          periodLabel="1997-2026"
        />
      </Section>
      {/* end Timeline Section */}
    </>
  );
}

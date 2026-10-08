import {
  Section,
  SectionContent,
} from "@/components/features/section/index.section";
import { ItemProductCard } from "@/components/ui/item.card";

export default function MachinesPage() {
  return (
    <>
      <Section>
        <h1>Machines page</h1>
      </Section>
      <Section>
        <SectionContent>
          {/* Item Wrapper */}
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <ItemProductCard
                key={index}
                item={{
                  image: "/assets/images/x_DSC_0011.jpg",
                  title: `Gun Drilling machines`,
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsum ab magni ea quasi, quam mollitia tempora, repudiandae iure voluptate eligendi impedit sed ipsa officia placeat consequuntur nisi asperiores laudantium minus quod!",
                  tags: ["CNC Machines", "Tag 2"],
                  href: "#",
                }}
              />
            ))}
          </div>
          {/* end Item Wrapper */}
        </SectionContent>
      </Section>
    </>
  );
}

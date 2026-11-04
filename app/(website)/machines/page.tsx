import CategorizedLandingPage from "@/components/templates/categorized-landing-page";
import {
  ItemCardGridWrapper,
  ItemProductCard,
} from "@/components/ui/item.card";

export default function MachinesPage() {
  return (
    <CategorizedLandingPage
      heading={{
        title: "Our Machines",
        tagline: "We aim to provide innovative solutions",
        tags: [],
      }}
    >
      {/* Item Wrapper */}
      <ItemCardGridWrapper>
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
      </ItemCardGridWrapper>
      {/* end Item Wrapper */}
    </CategorizedLandingPage>
  );
}

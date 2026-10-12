import CategorizedLandingPage from "@/components/templates/categorized-landing-page";
import {
  ItemCardGridWrapper,
  ItemCardWrapper,
  ItemImageBleedCard,
} from "@/components/ui/item.card";

export default function IndustriesLandingPage() {
  const mockIndustries = [
    {
      title: "Automotive",
      description: "Innovative solutions for the automotive industry",
    },
    {
      title: "Healthcare",
      description: "Cutting-edge technology for healthcare",
    },
    {
      title: "Manufacturing",
      description: "Efficient solutions for manufacturing",
    },
  ];

  return (
    <CategorizedLandingPage
      heading={{
        title: "All Industries",
        tagline: "We cater to a wide range of industries",
        tags: [],
      }}
    >
      {/* Add industry cards or content here */}
      <ItemCardGridWrapper>
        {mockIndustries.map((industry) => {
          return (
            <ItemCardWrapper key={industry.title}>
              <ItemImageBleedCard
                item={{
                  image: "",
                  title: industry.title,
                  href: "#",
                }}
              />
            </ItemCardWrapper>
          );
        })}
      </ItemCardGridWrapper>
    </CategorizedLandingPage>
  );
}

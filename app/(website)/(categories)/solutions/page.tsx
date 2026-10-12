import CategorizedLandingPage from "@/components/templates/categorized-landing-page";
import {
  ItemCardGridWrapper,
  ItemCardWrapper,
  ItemImageBleedCard,
} from "@/components/ui/item.card";

export default function SolutionsLandingPage() {
  const mockSolutions = [
    {
      title: "Healthcare & Life Sciences",
      description: "Description for solution 1",
    },
    {
      title: "Solution 2",
      description: "Description for solution 2",
    },
    {
      title: "Solution 3",
      description: "Description for solution 3",
    },
    {
      title: "Solution 4",
      description: "Description for solution 4",
    },
    {
      title: "Solution 5",
      description: "Description for solution 5",
    },
  ];

  return (
    <CategorizedLandingPage
      heading={{
        title: "All Solutions",
        tagline: "We aim to provide innovative solutions",
        tags: [],
      }}
    >
      {/* Add solution cards or content here */}
      <ItemCardGridWrapper>
        {mockSolutions.map((solution) => {
          return (
            <ItemCardWrapper key={solution.title}>
              <ItemImageBleedCard
                item={{
                  image: "/assets/images/autom.jpg",
                  title: solution.title,
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

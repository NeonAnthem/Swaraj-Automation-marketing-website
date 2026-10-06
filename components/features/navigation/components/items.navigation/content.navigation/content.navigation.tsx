import CTALink from "@/components/cta/link.cta";
import {
  INavbarContent,
  INavbarContentBase,
  INavbarContentList,
  INavbarItems,
} from "@/components/features/navigation/types/navbar.types";
import { cn } from "@/lib/utils";
import { NavigationMenu } from "@base-ui/react";
import { IconArrowUpRight } from "@tabler/icons-react";
import { motion, stagger, type Variants } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useState } from "react";
import { useNavigationStore } from "../../../providers/navigation.store.provider";
import NavigationContentBlockBanner from "./components/banner.card.navigation";

function NavigationContent({
  child,
  ...props
}: {
  child: INavbarItems["child"];
}) {
  return (
    <NavigationMenu.Content className={cn("w-screen h-[50vh]")}>
      {/* Content Children */}

      <NavigationWrapper>
        {child?.map((block, index) => {
          return (
            <NavigationContentBlockWrapper
              block={block}
              key={block.contentType + index}
            >
              <NavigationContentBlock {...block} />
            </NavigationContentBlockWrapper>
          );
        })}
        <NavigationContentBlockWrapper
          block={{
            position: "d",
            span: 1,
          }}
        >
          <NewsBlock />
        </NavigationContentBlockWrapper>
      </NavigationWrapper>

      {/* End Content Children */}
    </NavigationMenu.Content>
  );
}

export { NavigationContent };

function NavigationWrapper({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return (
    <div
      className={cn(
        "dark grid grid-cols-1 md:grid-cols-4 divide-x h-full",
        "container mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}

function NavigationContentBlockWrapper({
  block,
  children,
}: PropsWithChildren & { block: INavbarContentBase }) {
  return (
    <div
      className={cn("space-y-4 mx-4 pt-8", {
        "col-span-1": block.span === 1,
        "col-span-2": block.span === 2,
        "col-span-3": block.span === 3,
      })}
    >
      {children}
    </div>
  );
}

function NavigationContentBlock({ ...block }: INavbarContent) {
  switch (block.contentType) {
    case "list":
      return <NavigationContentBlockList {...block} />;

    case "image":
      return (
        <div className="h-full w-full">
          <Image
            src={block.imageSrc}
            alt={block.alt}
            width={1000}
            height={1000}
            quality={100}
            className=" w-auto object-cover h-full object-top-left"
          />
        </div>
      );

    case "news":
      return <NewsBlock />;
    case "banner":
      return <NavigationContentBlockBanner />;

    default:
      return <></>;
  }
}

function NewsBlock() {
  return (
    <div className="flex flex-col cols-span-1 p-2 h-full sm:-m-4">
      {/* Title */}
      <NavigationContentBlockTitle heading={"Featured"} />
      {/* end Title */}
      {/* News Block */}
      <div className="h-full flex flex-col space-y-4">
        {/* Image */}
        <div>
          <Image
            src={"/assets/images/test.jpeg"}
            alt={"test image"}
            width={400}
            height={400}
            className="object-fill h-48"
          />
        </div>
        {/* end Image */}

        <div className="flex flex-col items-start justify-between h-full">
          {/* Content */}
          <div className={cn("space-y-2")}>
            <p className={cn("text-primary text-xl line-clamp-1")}>
              Website Redesign
            </p>
            <p className="text-accent-foreground/70! line-clamp-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
              nostrum in consequatur fuga fugit fugiat molestiae quos, rerum
              excepturi. Porro culpa dolorum deserunt saepe sit? Suscipit,
              asperiores dolor sit repudiandae ipsa dolores natus dolorem odit
              consequatur libero repellat fugiat consequuntur omnis mollitia.
              Suscipit sed repellat cum ad illum, harum ratione.
            </p>
          </div>
          {/* end Content */}

          {/* CTA */}
          <div className="mt-auto h-max">
            <CTALink className="text-lg">
              Learn More
              <IconArrowUpRight />
            </CTALink>
          </div>
          {/* end CTA */}
        </div>
      </div>
      {/* end News Block */}
    </div>
  );
}

function NavigationContentBlockTitle({ heading }: { heading: string }) {
  return (
    <div className="mb-4 dark ">
      <p className="text-white/40!">{heading}</p>
    </div>
  );
}

function NavigationContentBlockList({ ...block }: INavbarContentList) {
  /**
   * The list itself never moves — it only holds the clock. `delayChildren`
   * hands each ListItem its own offset, so the reveal reads as one gesture
   * travelling down the column rather than N independent animations.
   */
  const LIST_VARIANTS: Variants = {
    hidden: {},
    visible: {
      transition: { delayChildren: stagger(0.07, { startDelay: 0.08 }) },
    },
  };

  return (
    <div className={cn("flex flex-col h-full")}>
      {/* Title */}
      <NavigationContentBlockTitle heading={block?.heading ?? ""} />
      {/* end Title */}
      <motion.div
        className={cn("")}
        variants={LIST_VARIANTS}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {block?.children?.map((navItem, index) => {
          return <ListItem {...navItem} key={index} />;
        })}
      </motion.div>
    </div>
  );
}

function ListItem({ ...navItem }: INavbarContentList["children"][0]) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const setActiveChildId = useNavigationStore(
    (s) => s._system.setActiveChildId,
  );

  /**
   * Inherited from the list — no `initial`/`animate` here, or the item would
   * drive itself and drop out of the stagger. Long, decelerating ease so the
   * item settles instead of snapping; the blur lets it resolve into focus.
   */
  const ITEM_VARIANTS: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const redirect = useRouter();

  return (
    <motion.div
      key={navItem.href}
      variants={ITEM_VARIANTS}
      className="dark w-full py-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        setActiveChildId(null);
        redirect.push(navItem?.href ?? "#");
      }}
    >
      <CTALink className="relative text-xl" isHovered={isHovered}>
        {navItem.label}
        <IconArrowUpRight className="text-blue-600! opacity-40" />
      </CTALink>
    </motion.div>
  );
}

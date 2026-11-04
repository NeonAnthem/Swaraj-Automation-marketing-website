import {
  Section,
  SectionContent,
} from "@/components/features/section/index.section";
import type { IMachine } from "@/data/static/machines/machines.types";
import Image from "next/image";
import {
  ProductHeader,
  ProductHeaderDetails,
  ProductHeaderImage,
} from "./machine-grid";
import { MachinePageGrid } from "./machine-grid/machine-grid";
import { MachineInfoPanel } from "./machine-grid/machine-info-panel";
import { MachineListPanel } from "./machine-grid/machine-list-panel";
import { hasMachineMedia } from "./machine-grid/machine-media-panel";

interface IItemPageComponentProps {
  machine: IMachine;
}

export function ItemPageComponent({ machine }: IItemPageComponentProps) {
  return (
    <>
      <Section spacing={"none"} className={"pt-30 pb-10 bg-gray-100"}>
        <SectionContent className={"md:px-0!"}>
          {/* Machines Heading */}
          <ProductHeader>
            {/* Header Title & Desciption */}
            <ProductHeaderDetails machine={machine} />
            {/* end Header title & Description */}
            <ProductHeaderImage>
              <Image
                className={"ml-auto mt-16 h-auto w-[95%] object-cover"}
                src={"/assets/images/x_DSC_0011.jpg"}
                alt={"Machine Image"}
                width={500}
                height={500}
              />
            </ProductHeaderImage>
          </ProductHeader>
          {/* end Machines Heading */}
        </SectionContent>
      </Section>

      {/* Grid Section */}
      <Section className={"mb-12 border-primary bg-gray-100"} spacing={"none"}>
        {/* <div
          className={"bg-linear-90 from-transparent to-primary h-px w-full"}
        ></div> */}
        <SectionContent className={"md:px-0!"}>
          <MachinePageGrid>
            <MachineInfoPanel
              machine={machine}
              fullWidth={!hasMachineMedia(machine)}
            />
            <MachineListPanel currentKey={machine.key} />
            {/* <MachineMediaPanel machine={machine} /> */}
          </MachinePageGrid>
        </SectionContent>
      </Section>
      {/* end Grid Section */}
    </>
  );
}

import { ContactCard } from "@/components/cards/contact-card";
import WelcomeBanner from "@/components/cards/welcome-card";
import { Section } from "@/components/features/section/element.section";
import { SectionContent } from "@/components/features/section/index.section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

export default function ContactPage() {
  return (
    <>
      <Section
        className={"relative min-h-[80vh] flex items-center justify-center"}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/images/cnc-machine.webp')" }}
        ></div>
        {/* end Background Image */}
        <SectionContent className={""}>
          <ContactCard
            title="Contact Sales"
            description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
            contactInfo={[
              {
                icon: IconMail,
                label: "Email",
                value: "shashank@swarajautomation.in",
              },
              {
                icon: IconPhone,
                label: "Phone",
                value: "+91 98225-03630",
              },
              {
                icon: IconMapPin,
                label: "Address",
                value: "Pirangut Maharashtra, India",
                className: "col-span-2",
              },
            ]}
          >
            <form action="" className="w-full space-y-4">
              <div className="flex flex-col gap-2">
                <Label>Name</Label>
                <Input type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Email</Label>
                <Input type="email" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Phone</Label>
                <Input type="tel" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Message</Label>
                <Textarea />
              </div>
              <Button className="w-full" type="button">
                Submit
              </Button>
            </form>
          </ContactCard>
        </SectionContent>
      </Section>

      {/* Careers Card */}
      <Section spacing={"none"}>
        <WelcomeBanner />
      </Section>
      {/* end Careers Card */}
    </>
  );
}

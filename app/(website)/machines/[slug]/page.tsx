import { ItemPageComponent } from "@/components/templates/item-page";
import { Metadata } from "next";

export const instant = false;

/**
 * Props for the Next.js page component representing a machine based on its slug.
 */
interface INextPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  const machines: { slug: string }[] = [{ slug: "deep" }];
  return machines?.map((machine) => ({
    slug: machine.slug,
  }));
}

/**
 * Dynamic metadata generator
 */
export async function generateMetadata({
  params,
}: INextPageProps): Promise<Metadata> {
  const machineSlug = (await params).slug;

  return {
    title: machineSlug, // TODO: Replace with the actual machine name once available
  };
}

/**
 *
 * @param params The props object containing the route parameters.
 * @param searchParams The props object containing the search parameters.
 * @returns The JSX element representing the machine page.
 */
export default async function MachinesSlugPage({ params }: INextPageProps) {
  const { slug: machineSlug } = await params;

  return (
    <>
      <ItemPageComponent machineKey={machineSlug} />
    </>
  );
}

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
  searchParams,
}: INextPageProps): Promise<Metadata> {
  return {
    title: `Machine Name`,
  };
}

/**
 *
 * @param params The props object containing the route parameters.
 * @param searchParams The props object containing the search parameters.
 * @returns The JSX element representing the machine page.
 */
export default async function MachinesSlugPage({
  params,
  searchParams,
}: INextPageProps) {
  const { slug } = await params;

  return (
    <>
      <ItemPageComponent machineKey={slug} />
    </>
  );
}

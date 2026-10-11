export interface IMachine {
  key: string;
  name: string;
  tagline: string;
  description: string;
  /**
   * Tags associated with the machine
   */
  tags: string[];
  /**
   * Youtube Video URL of the machine
   */
  videoUrl: string;

  /**
   * Machine Features list
   */
  features: string[];

  /**
   * Machines Applications list
   */
  applications: string[];

  // Content
  category?: string;
  solutions: string[];
  industries: string[];

  // Meta data for SEO and social sharing

  ogImageUrl: string;
}

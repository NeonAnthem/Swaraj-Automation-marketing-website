export interface IMachineImage {
  url: string;
  alt: string;
}

export interface IMachineTableRow {
  /** Parameter name shown in the fixed left column */
  label: string;
  /** One value per column in `IMachineTable.columns` */
  values: string[];
}

export interface IMachineTable {
  title?: string;
  /** Model/variant headers, e.g. GDSA-01 */
  columns: string[];
  rows: IMachineTableRow[];
}

export interface IMachine {
  key: string;
  name: string;
  tagline: string;
  operationsPerformed?: string[];
  description: string;
  /**
   * Tags associated with the machine
   */
  tags: string[];
  /**
   * YouTube Video URL of the machine
   */
  videoUrl: string;

  /**
   * Photos of the machine, shown in the carousel
   */
  images?: IMachineImage[];

  /**
   * Machine Features list
   */
  features: string[];

  /**
   * Machines Applications list
   */
  applications: string[];

  /**
   * Technical specification tables
   */
  tables?: IMachineTable[];

  // Content
  category?: string;
  solutions: string[];
  industries: string[];

  // Meta data for SEO and social sharing

  ogImageUrl: string;
}

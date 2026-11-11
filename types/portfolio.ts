export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  category: string[];
  timeline: string;
  highlight?: string;
  description: string;
  techStack: string[];
  fullDetails: {
    title: string;
    badge: string;
    tech: string;
    desc: string[];
    links?: { label: string; url: string }[];
  };
}

export interface TerminalCommandResponse {
  output: string;
  isFunction?: boolean;
}


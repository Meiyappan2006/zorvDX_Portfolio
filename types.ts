export interface Service {
  id: string;
  title: string;
  description: string;
  detailedInfo: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface TimelineStep {
  week: string;
  title: string;
  description: string;
}
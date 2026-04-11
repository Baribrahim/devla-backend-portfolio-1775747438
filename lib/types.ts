export interface Profile {
  id: string;
  email?: string;
  fullName?: string;
  avatarUrl?: string;
  skillLevel?: "beginner" | "intermediate" | "advanced";
  preferredStack?: "frontend" | "backend" | "fullstack";
  mainGoal?: string;
  githubToken?: string;
  createdAt: string;
}

export interface Milestone {
  id: string;
  projectId: string;
  milestoneIndex: number;
  status: "pending" | "review" | "completed";
  branchName: string;
  reviewFeedback?: any;
  createdAt: string;
}

export interface Project {
  id: string;
  userId: string;
  trackId: string;
  githubRepoUrl?: string;
  status: "active" | "completed" | "archived";
  createdAt: string;
}

export interface Track {
  id: string;
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  icon: string;
  tags: string[];
  exampleProject: ExampleProject;
}

export interface ExampleProject {
  title: string;
  description: string;
  estimatedHours: number;
  milestoneCount: number;
  skills: string[];
}

export interface WaitlistEntry {
  name: string;
  email: string;
}

export interface ExampleMilestone {
  id: string;
  title: string;
  description: string;
  order: number;
  status: "locked" | "active" | "in_review" | "complete";
}

export interface ReviewFinding {
  severity: "critical" | "warning" | "info";
  message: string;
  file?: string;
  line?: number;
  suggestion?: string;
}

export interface Scorecard {
  functionality: number;
  codeStructure: number;
  testing: number;
  documentation: number;
  maintainability: number;
  portfolioReadiness: number;
}

export interface User {
  id: number;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  created_at: string;
};

export interface Job {
  id: number;
  user_id: number;
  url: string;
  title: string | null;
  company: string | null;
  contact: string | null;
  salary: string | null;
  location: string | null;
  notes: string | null;
  status: JobStatus;
  created_at: string;
  updated_at: string;
};

export type JobStatus = "applied" | "interviewing" | "offer" | "rejected";
export type AccentTheme = 'gold' | 'orange';

export interface CandidateForm {
  fullName: string;
  activity: string;
  objective: 'performance' | 'aesthetic' | 'wellbeing' | 'recovery';
  message: string;
}

export interface MetricItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface PillarItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

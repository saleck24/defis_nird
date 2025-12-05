export interface School {
  id: string;
  name: string;
  location: { lat: number; lng: number };
  status: 'resistant' | 'transition' | 'dependent';
  score: number;
  problems: string[];
  decisions: Decision[];
  badges: string[];
}

export interface Decision {
  date: string;
  action: string;
  impact: string;
}

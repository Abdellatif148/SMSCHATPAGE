import { ReactNode } from 'react';

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface VersionInfo {
  version: string;
  build: string;
  date: string;
  size: string;
}

export interface TimelineStep {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

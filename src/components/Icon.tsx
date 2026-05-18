import * as React from "react";
import {
  Activity,
  AlertTriangle,
  Atom,
  BadgeCheck,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CircleDollarSign,
  Database,
  Dna,
  Factory,
  FlaskConical,
  Leaf,
  Linkedin,
  LockKeyhole,
  Mail,
  Menu,
  Microscope,
  OctagonAlert,
  Pill,
  Rocket,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Timer,
  Workflow,
  X
} from "lucide-react";
import type { LucideProps } from "lucide-react";

const icons = {
  Activity,
  AlertTriangle,
  Atom,
  BadgeCheck,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CircleDollarSign,
  Database,
  Dna,
  Factory,
  FlaskConical,
  Leaf,
  Linkedin,
  LockKeyhole,
  Mail,
  Menu,
  Microscope,
  OctagonAlert,
  Pill,
  Rocket,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Timer,
  Workflow,
  X
};

export type IconName = keyof typeof icons;

type IconProps = LucideProps & {
  name: string;
};

export function Icon({ name, strokeWidth = 1.6, ...props }: IconProps) {
  const LucideIcon = icons[name as IconName] ?? Sparkles;
  return <LucideIcon aria-hidden="true" strokeWidth={strokeWidth} {...props} />;
}

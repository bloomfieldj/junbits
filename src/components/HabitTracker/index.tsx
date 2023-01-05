"use client";

import { TooltipProvider } from "@radix-ui/react-tooltip";
import {
  BellOff,
  Book,
  Carrot,
  Edit3,
  GlassWater,
  HeartPulse,
  Wind,
  LucideIcon,
} from "lucide-react";
import HabitToggle from "./HabitToggle";

type Habit = {
  title: string;
  icon: LucideIcon;
};

const habits: Habit[] = [
  {
    title: "Meditating",
    icon: Wind,
  },
  {
    title: "Exercising",
    icon: HeartPulse,
  },
  {
    title: "Reading",
    icon: Book,
  },
  {
    title: "Journaling",
    icon: Edit3,
  },
  {
    title: "Drinking Water",
    icon: GlassWater,
  },
  {
    title: "Eating Vegetables",
    icon: Carrot,
  },
  {
    title: "Disconnect",
    icon: BellOff,
  },
];

export default function HabitTracker() {
  return (
    <section className="my-6">
      <h3 className="text-xl">Daily Goals</h3>

      <TooltipProvider>
        <fieldset className="my-6 flex w-full gap-4">
          {habits.map((habit, index) => (
            <HabitToggle key={index} title={habit.title}>
              <habit.icon />
            </HabitToggle>
          ))}
        </fieldset>
      </TooltipProvider>
    </section>
  );
}

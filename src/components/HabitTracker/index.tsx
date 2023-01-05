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
    title: "Meditate",
    icon: Wind,
  },
  {
    title: "Exercise",
    icon: HeartPulse,
  },
  {
    title: "Read",
    icon: Book,
  },
  {
    title: "Journal",
    icon: Edit3,
  },
  {
    title: "Drink Water",
    icon: GlassWater,
  },
  {
    title: "Eat Vegetables",
    icon: Carrot,
  },
  {
    title: "Disconnect",
    icon: BellOff,
  },
];

export default function HabitTracker() {
  return (
    <section className="mt-12 mb-20">
      <h3 className="text-xl">My Habits</h3>
      <TooltipProvider>
        <fieldset className="my-6 flex w-full items-center justify-center gap-4">
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

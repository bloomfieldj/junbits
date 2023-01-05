"use client";

import { TooltipProvider } from "@radix-ui/react-tooltip";
import {
  Book,
  Carrot,
  Edit3,
  GlassWater,
  HeartPulse,
  LucideIcon,
  BellOff,
} from "lucide-react";
import Toggle from "./Toggle";
import Tooltip from "./Tooltip";

type Habit = {
  title: string;
  icon: LucideIcon;
};

const habits: Habit[] = [
  {
    title: "Meditating",
    icon: Edit3,
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
    title: "Water",
    icon: GlassWater,
  },
  {
    title: "Vegetables",
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

      <fieldset className="my-6 flex w-full gap-4">
        {habits.map((habit, index) => (
          <TooltipProvider>
            <Tooltip key={index} content={habit.title}>
              <Toggle key={index} title={habit.title}>
                <habit.icon />
              </Toggle>
            </Tooltip>
          </TooltipProvider>
        ))}
      </fieldset>
    </section>
  );
}

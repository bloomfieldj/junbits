"use client";

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

import clsx from "clsx";

type Habit = {
  title: string;
  icon: LucideIcon;
  col: string;
};

const habits: Habit[] = [
  {
    title: "Meditate",
    icon: Wind,
    col: "meditate",
  },
  {
    title: "Exercise",
    icon: HeartPulse,
    col: "exercise",
  },
  {
    title: "Read",
    icon: Book,
    col: "read",
  },
  {
    title: "Journal",
    icon: Edit3,
    col: "journal",
  },
  {
    title: "Drink Water",
    icon: GlassWater,
    col: "water",
  },
  {
    title: "Eat Vegetables",
    icon: Carrot,
    col: "vegetables",
  },
  {
    title: "Disconnect",
    icon: BellOff,
    col: "disconnect",
  },
];

const users = [
  {
    username: "test",
    date: "10/10/1010",
    meditate: true,
    exercise: true,
    read: false,
    journal: false,
    water: true,
    vegetables: true,
    disconnect: false,
  },
  {
    username: "test2",
    date: "10/10/1010",
    meditate: false,
    exercise: true,
    read: false,
    journal: false,
    water: true,
    vegetables: true,
    disconnect: false,
  },
];

export default function PublicTracker() {
  return (
    <section>
      <table className="w-full">
        <caption className="text-xl">Our Habits</caption>
        {users.map((user, index) => (
          <tr
            className="my-6 flex h-full w-full justify-center gap-4"
            key={index}
          >
            {habits.map((habit, index) => {
              return (
                <td
                  key={index}
                  className={clsx(
                    "flex h-10 w-10 items-center justify-center rounded-md",
                    user[habit.col] ? "text-mint-9" : "text-sage-9"
                  )}
                >
                  <habit.icon />
                </td>
              );
            })}
          </tr>
        ))}
      </table>
    </section>
  );
}

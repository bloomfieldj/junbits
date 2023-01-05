"use client";

import { Book, Edit3 } from "lucide-react";
import HabitToggle from "./HabitToggle";
import { useState } from "react";

export default function HabitTracker() {
  return (
    <section className="my-6">
      <h3 className="text-xl">Daily Goals</h3>
      <fieldset className="flex w-full gap-4">
        <HabitToggle title="Reading">
          <Book />
        </HabitToggle>
        <HabitToggle title="Journaling">
          <Edit3 />
        </HabitToggle>
      </fieldset>
    </section>
  );
}

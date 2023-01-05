"use client";

import { Book, BookOpenCheckIcon } from "lucide-react";
import HabitToggle from "./Toggle";

export default function HabitTracker() {
  return (
    <section className="my-6">
      <h3 className="text-xl">Daily Goals</h3>
      <fieldset className="flex w-full gap-3">
        <HabitToggle title="Reading">
          <Book />
        </HabitToggle>
      </fieldset>
    </section>
  );
}

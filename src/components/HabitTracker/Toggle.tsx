import * as Toggle from "@radix-ui/react-toggle";
import { useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function HabitToggle({ title, children }: Props) {
  const [complete, setComplete] = useState(false);
  return (
    <Toggle.Root
      aria-label={`Toggle ${title}`}
      className="flex h-10 w-10 items-center justify-center rounded-md bg-sage-4 text-crimson-9 shadow-[0px_0px_10px_-4px] shadow-whiteA-9 hover:bg-sage-2 focus:shadow-[0px_0px_10px] focus:shadow-whiteA-9 data-[state=on]:text-mint-9"
      pressed={complete}
      onPressedChange={(pressed) => setComplete(pressed)}
    >
      {children}
    </Toggle.Root>
  );
}

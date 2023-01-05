import * as TogglePrimitive from "@radix-ui/react-toggle";
import { useState } from "react";

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function Toggle({ title, children }: Props) {
  const [complete, setComplete] = useState(false);
  const [working, setWorking] = useState(false);

  const handleToggle = async (toggled: boolean) => {
    setWorking(true);
    await new Promise((r) => setTimeout(r, 300));
    setComplete(toggled);
    setWorking(false);
  };

  return (
    <TogglePrimitive.Root
      aria-label={`Toggle ${title}`}
      className="flex h-10 w-10 items-center justify-center rounded-md text-crimson-9 shadow-[0px_0px_10px] shadow-whiteA-9 hover:bg-sage-2 focus:shadow-[0px_0px_10px_5px] focus:shadow-whiteA-10 data-[state=on]:text-mint-9 data-[state=on]:shadow-none"
      pressed={complete}
      onPressedChange={(toggled) => handleToggle(toggled)}
    >
      {working ? <p>o</p> : children}
    </TogglePrimitive.Root>
  );
}

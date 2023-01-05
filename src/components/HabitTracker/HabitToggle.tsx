import * as TogglePrimitive from "@radix-ui/react-toggle";
import React, { forwardRef, useState } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Tooltip = ({ title, children }: Props) => {
  return (
    <TooltipPrimitive.Root delayDuration={150}>
      <TooltipPrimitive.Trigger tabIndex={-1}>
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content
        align="center"
        side="bottom"
        sideOffset={15}
        className="text-mint-9"
      >
        {title}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
};

const Toggle = ({ title, children }: Props) => {
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
      className="flex h-10 w-10 items-center justify-center rounded-md text-sage-9 shadow-[0px_0px_10px] shadow-whiteA-9 hover:bg-sage-2 hover:text-mint-9 hover:shadow-mint-9 focus:text-mint-10 focus:shadow-[0px_0px_10px_2px] focus:shadow-mint-10 data-[state=on]:text-mint-9 data-[state=on]:shadow-none"
      pressed={complete}
      onPressedChange={(toggled) => handleToggle(toggled)}
    >
      {working ? <p>o</p> : children}
    </TogglePrimitive.Root>
  );
};

export default function HabitToggle({ title, children }: Props) {
  return (
    <Tooltip title={title}>
      <Toggle title={title}>{children}</Toggle>
    </Tooltip>
  );
}

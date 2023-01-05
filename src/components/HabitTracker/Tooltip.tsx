"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";

type Props = {
  content: string;
  children: React.ReactNode;
};

export default function Tooltip({ content, children }: Props) {
  return (
    <TooltipPrimitive.Root delayDuration={200}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content
        align="center"
        sideOffset={15}
        className="text-sage-12"
      >
        {content}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
}

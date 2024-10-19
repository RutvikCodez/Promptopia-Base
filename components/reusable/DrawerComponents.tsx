import { Drawer, DrawerContent, DrawerTrigger } from "@components/ui/drawer";
import { drawerType } from "@utils/types";
import React from "react";

const DrawerComponents = ({
  children,
  direction,
  onOpenChange,
  open,
  trigger,
  ...props
}: drawerType) => {
  return (
    <Drawer direction={direction} open={open} onOpenChange={onOpenChange} {...props}>
      <DrawerTrigger>{trigger}</DrawerTrigger>
      <DrawerContent className="h-1/2 w-full">{children}</DrawerContent>
    </Drawer>
  );
};

export default DrawerComponents;

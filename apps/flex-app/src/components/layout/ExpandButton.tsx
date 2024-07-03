import React, { useState, useEffect } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import { Badge } from "@nubeio/ui/badge";

export const ExpandButton = (props: any) => {
  const { isExpanded, setIsExpanded } = props;
  return (
    <Badge className="m-[5px] p-[2px]">
      {isExpanded ? (
        <Minimize2
          size={22}
          className="p-[5px] cursor-pointer"
          onClick={() => setIsExpanded(false)}
        />
      ) : (
        <Maximize2
          size={22}
          className="p-[5px] cursor-pointer"
          onClick={() => setIsExpanded(true)}
        />
      )}
    </Badge>
  );
};

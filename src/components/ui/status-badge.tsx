import React from "react";
import { Badge } from "./badge";

type Status = "pending" | "approved" | "rejected" | "draft";

interface StatusBadgeProps {
  status: Status;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  let variant: Parameters<typeof Badge>[0]["variant"] = "default";
  let text = "";

  switch (status) {
    case "pending":
      variant = "pink";
      text = "En attente";
      break;
    case "approved":
      variant = "default";
      text = "Approuvé";
      break;
    case "rejected":
      variant = "destructive";
      text = "Rejeté";
      break;
    case "draft":
      variant = "outline";
      text = "Brouillon";
      break;
  }

  return <Badge variant={variant}>{text}</Badge>;
}

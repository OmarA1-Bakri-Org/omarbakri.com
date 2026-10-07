import React from "react";
import Monogram from "./monogram";

interface MonogramLigatureProps {
  size?: number;
  className?: string;
  "aria-hidden"?: boolean;
}

export default function MonogramLigature(props: MonogramLigatureProps) {
  return <Monogram {...props} color="currentColor" />;
}

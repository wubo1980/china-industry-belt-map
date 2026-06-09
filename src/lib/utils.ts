import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines conditional Tailwind class names into a single merged string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

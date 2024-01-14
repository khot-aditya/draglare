import clsx from "clsx"; // Import the 'clsx' library for generating CSS class names.
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class values into a single string of CSS class names.
 * This function is designed to be used with the 'twMerge' function, which allows
 * seamless integration with Tailwind CSS classes.
 *
 * @param inputs - An array of class values to be combined into a single string.
 * @returns A string containing the merged CSS class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

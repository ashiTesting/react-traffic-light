import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* 
const baseStyle = "font-xl"
className={`${baseStyle} ${condition ? "bg-red-500" : "bg=gray-500}"`}

Using clsx
const baseStyle = "bg=gray-500 font-xl"
const baseStyle2 = "bg=gray-500 font-lg"
className={clsx(baseStyle, baseStyle2, condition && "bg-red-500")} -> bg=gray-500,font-xl,bg=gray-500,font-lg
className={clsx([baseStyle, baseStyle2], condition && "bg-red-500")} -> bg=gray-500,font-xl,bg=gray-500,font-lg
className={clsx(baseStyle, baseStyle2, {"bg-red-500":condition})} -> bg=gray-500,font-xl,bg=gray-500,font-lg
*/

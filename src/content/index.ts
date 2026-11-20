import type { Locale } from "@/config/site";
import { en } from "./en";
import { hi } from "./hi";
import { mr } from "./mr";
import type { Content } from "./types";

export const CONTENT: Record<Locale, Content> = { en, hi, mr };
export type { Content };

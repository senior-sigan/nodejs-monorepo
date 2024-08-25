import { printer } from "./printer";

export interface Anime {
  title: string;
  year: number;
}

export async function loadAnime() {
  await null; // just for async test
  printer("Hello from typescript!");
  return {
    title: "Anime lol",
    year: 2024,
  } satisfies Anime;
}
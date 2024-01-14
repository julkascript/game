import { Character } from "@prisma/client";
import prisma from "./prisma";

export async function getAllCharacters() {
  return await prisma.character.findMany();
}

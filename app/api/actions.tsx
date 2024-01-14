import prisma from "../lib/prisma";

export async function getAllCharacters() {
  const characters = await prisma.character.findMany();
  return characters;
}

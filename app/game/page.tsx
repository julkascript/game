import { getAllCharacters } from "../lib/actions";
import { CharacterDashboard } from "../ui/characterDashboard";

async function Game() {
  const characters = await getAllCharacters();
  return <CharacterDashboard characters={characters} />;
}

export default Game;

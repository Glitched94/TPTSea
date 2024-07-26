import { Task } from "grimoire-kolmafia";
import { canAdventure, haveEffect, use } from "kolmafia";
import { $effect, $familiar, $item, $location, have } from "libram";

export const GET_FISHY: Task = {
    name: "Get Fishy",
    ready: () => canAdventure($location`The Brinier Deepers`),
    outfit: {
        familiar: $familiar`Space Jellyfish`
    },
    prepare: () => {
        if (!have($effect`Lucky!`) && have($item`11-leaf clover`)) {
            use($item`11-leaf clover`);
        }
    },
    do: $location`The Brinier Deepers`,
    completed: () => have($effect`Fishy`),
}

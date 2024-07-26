import { Engine } from "grimoire-kolmafia";
import { GET_FISHY } from "./quests/getFishy";

export default function main(): void {
    const tasks = [GET_FISHY];
    const engine = new Engine(tasks);

    try {
        engine.run();
    } finally {
        engine.destruct();
    }
}

import { QuestState } from "./quest-state";

/**
 * One quest of one mission, from a Game
 */
export interface Quest {
    /**
     * Date of the creation of the quest
     */
    createdDate: Date;

    /**
     * Current state of the quest
     */
    state: QuestState;

    /**
     * Value of the winned XP
     */
    winnedXP: number;
}

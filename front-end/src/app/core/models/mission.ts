import { Quest } from './quest';

/**
 * One mission of one game
 */
export interface Mission {
    /**
     * Date of creation of the mission
     */
    createdDate: Date;

    /**
     * List of the quests
     */
    quests: Quest[];
}

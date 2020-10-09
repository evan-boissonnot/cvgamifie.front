import { Mission } from './mission';

/**
 * One game model, with missions
 */
export interface Game {
    /** Created date of the game, from one user */
    createdDate: Date;

    /**
     * List of missions of the game
     */
    missions: Mission[];
}

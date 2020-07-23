import { Status } from '../enums/status';

/**
 * Training course : it's a template to be created by the trainer
 */
export class TrainingCourse {
    //#region Properties
    public id: number;

    public dateCreation: Date;

    public dateActivation: Date;

    public status: Status

    public title: string;
    //#endregion
}

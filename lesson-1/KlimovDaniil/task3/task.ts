import { TaskInterface } from '../../../custom-types/KlimovDaniil';

export class TaskTypeScriptGetUnique implements TaskInterface {

    private taskResult: number[];

    public constructor() {
        this.taskResult = getUnique(1, 3, 3, 5, 6, 8, 9, 9, 10);
    }

    public getResult(): number[] {
        return this.taskResult;
    }

}

function getUnique(...arr: number[]): number[] {
    return [...new Set(arr)];
}
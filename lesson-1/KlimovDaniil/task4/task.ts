import { TaskInterface } from '../../../custom-types/KlimovDaniil';

export class TaskTypeScriptToMatrix implements TaskInterface {

    private taskResult: number[][];

    public constructor() {
        this.taskResult = toMatrix([1, 3, 3, 5, 6, 8, 9, 9, 10], 5);
    }

    public getResult(): number[][] {
        return this.taskResult;
    }

}

function toMatrix(arr: number[], sizeOfSubArrays: number): number[][] {
    const martix: number[][] = [];

    for (let i: number = 0; i < sizeOfSubArrays; i++)
        martix[i] = arr.slice(0, sizeOfSubArrays);

    return martix;
}
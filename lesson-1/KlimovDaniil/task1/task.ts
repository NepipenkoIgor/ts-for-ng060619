import { TaskInterface } from '../../../custom-types/KlimovDaniil';

export class TaskTypeScriptIsInArray implements TaskInterface {

    private taskResult: boolean;

    public constructor() {
        this.taskResult = isInArray([1, 4, 7, 9, 12, 20], 2, 4, 4, 7, 9, 14, 19, 20, 25);
        // this.taskResult = isInArray([1, 4, 7, 9, 12, 20], 1, 9, 12, 20);
    }

    public getResult(): boolean {
        return this.taskResult;
    }

}

function isInArray(arr: number[], ...args: number[]): boolean {

    return args.every((item: number) => {
        return arr.includes(item);
    });
}

console.log(isInArray([1, 4, 7, 9, 12, 20], 2, 4, 4, 7, 9, 14, 19, 20, 25));
console.log(isInArray([1, 4, 7, 9, 12, 20], 1, 9, 12, 20));
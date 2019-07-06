import { SN, TaskInterface } from '../../../custom-types/KlimovDaniil';

export class TaskTypeScriptSummator implements TaskInterface {

    private taskResult: number;

    public constructor() {
        this.taskResult = summator(1, '2', 3, 'lol', '4', 5);
    }

    public getResult(): number {
        return this.taskResult;
    }

}

function toNumber(str: string): number {
    return (!isNaN(parseInt(str))) ? parseInt(str) : 0;
}

function summator(...args: SN []): number {

    return args.reduce((sum: number, current: SN) => {
        return sum + ((typeof current === 'string') ? toNumber(current) : current);
    }, 0);
}


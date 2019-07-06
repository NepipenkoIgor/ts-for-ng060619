export type SN = number | string;

export type LessonContent = {
    lessonName: string,
    lessonTasks: Task []
};

export type Task = {
    taskName: string,
    taskResult: any
};

export interface TaskInterface {
    getResult(): any;
}
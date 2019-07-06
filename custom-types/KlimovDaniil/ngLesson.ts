import { LessonContent, Task } from './index';

export abstract class NGLesson {

    private lessonName: string = 'Undefined lesson';
    private tasks: Task[] = [];
    private body: HTMLBodyElement | null = document.querySelector('body');

    public constructor(protected lessonContent: LessonContent) {

        this.lessonName = lessonContent.lessonName;
        this.tasks = lessonContent.lessonTasks;

        this.build();
    }

    private build(): void {

        this.wrapperHeader();

        this.tasks.forEach((task: Task, index: number) => {
            this.wrapperSection(task, index);
        });
    }

    private wrapperHeader(): void {

        const header: HTMLHeadingElement = document.createElement('h1');
        header.innerText = this.lessonName;

        if (this.body)
            this.body.appendChild(header);
    }

    private wrapperSection(task: Task, index: number): void {

        task.taskResult = (task.taskResult !== undefined) ? task.taskResult.getResult() : 'Not Found';

        const section: HTMLElement = document.createElement('section');
        section.innerHTML = '<section>' +
            '<h2> Task #' + index + ': ' + task.taskName + '</h2>' +
            '<div>Task Result:  ' + task.taskResult + '</div>' +
            '<hr></section>';

        if (this.body)
            this.body.appendChild(section);
    }
}
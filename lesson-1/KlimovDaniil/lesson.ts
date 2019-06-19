import { NGLesson } from '../../custom-types/KlimovDaniil/ngLesson';
import { LessonContent } from '../../custom-types/KlimovDaniil';

export class NgLesson extends NGLesson {
    public constructor(protected lessonContent: LessonContent) {
        super(lessonContent);
    }
}
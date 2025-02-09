export type Mark = MarkWithoutId & {
    id: string;
}

export type MarkWithoutId = {
    score: number;
    course: string;
    semester: string;
}
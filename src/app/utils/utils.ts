import { MarkWithoutId } from "../models/mark";

export const isFormOK = (formValues: MarkWithoutId | null) => {
    if (
        formValues === null ||
        formValues.course === '' || 
        formValues.score === 0 || 
        formValues.semester === '' || 
        formValues.studentName === ''
    ) {
        return false
    } else {
        return true
    }
}
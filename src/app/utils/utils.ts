import { MarkWithoutId } from "../models/mark";

export const isFormOK = (formValues: MarkWithoutId | null) => {
    if (
        formValues === null ||
        formValues.course === '' || 
        formValues.score === 0 || 
        formValues.semester === ''
    ) {
        return false
    } else {
        return true
    }
}
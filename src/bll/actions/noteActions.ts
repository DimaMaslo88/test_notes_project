type  AddNoteActionType = ReturnType<typeof addNoteAction>


export const addNoteAction = (title: string, text: string) => {
    return {
        type: "ADD-NOTE",
        payload: {
            title,
            text
        }
    } as const
}
type  ChangeNoteActionType = ReturnType<typeof changeNoteAction>
export const changeNoteAction = (title: string, text: string, id: string) => {
    return {
        type: "EDIT-NOTE",
        payload: {
            title,
            text,
            id
        }
    } as const
}
type  DeleteNoteActionType = ReturnType<typeof deleteNoteAction>
export const deleteNoteAction = (id: string) => {
    return {
        type: "DELETE-NOTE",
        payload: {
            id
        }
    } as const
}
type SearchNoteTitleActionType = ReturnType<typeof searchNoteTitleAction>
export const searchNoteTitleAction = (title: string) => {
    return {
        type: "SEARCH-TITLE",
        payload: {
            title,

        }
    } as const
}

export type NotesActionStateType = AddNoteActionType |
    ChangeNoteActionType
    | DeleteNoteActionType
    | SearchNoteTitleActionType

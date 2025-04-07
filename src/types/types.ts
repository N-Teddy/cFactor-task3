//verse selcted page
export interface Verse {
    id: string;
    reference: string;
    text: string;
    bookId: string;
    chapterId: string;
}

// chapter page
export interface Chapter {
    id: string;
    number: string;
}

export interface Section {
    id: string;
    title: string;
}
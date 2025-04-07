export interface Book {
    id: string;
    name: string;
    chapters?: number[];
    language: {
        name: string;
    };
    books?: number[];
    abbreviation?: string;
}

// types/bible.ts

export interface Bible {
  id: string;
  name: string;
  abbreviation?: string;
  books?: Array<any>;
  language: {
    name: string;
  };
}

import { useQuery } from '@tanstack/react-query';
import { getBibles, getBooks, getChapters, getVerses, getOneVerse, getPassages, getSection, getOneSection } from '../services/apiBible';
import { Book } from '../types/Book';


export const useBibles = () => {

    return useQuery({

        queryKey: ['bibles'],
        queryFn: getBibles,

    })

}

export const useBooks = (bibleId: string) => {

    return useQuery<Book[]>({

        queryKey: ['books', bibleId],
        queryFn: () => getBooks(bibleId),
        enabled: !!bibleId,

    })

};

export const useChapters = (bibleId: string, bookId: string) => {

    return useQuery({

        queryKey: ['books', bibleId, bookId],
        queryFn: () => getChapters(bibleId, bookId),
        enabled: !!bibleId && !!bookId,

    })

}

export const useVerses = (bibleId: string, chapterId: string) => {

    return useQuery({

        queryKey: ['verses', bibleId, chapterId],
        queryFn: () => getVerses(bibleId, chapterId),
        enabled: !!bibleId && !!chapterId,

    })

}

export const useOneVerse = (bibleId: string, verseId: string) => {

    return useQuery({

        queryKey: ['verse', bibleId, verseId],
        queryFn: () => getOneVerse(bibleId, verseId),
        enabled: !!bibleId && !!verseId,

    })

}

export const usePassage = (bibleId: string, passageId: string) => {

    return useQuery({

        queryKey: ["passage", bibleId, passageId],
        queryFn: () => getPassages(bibleId, passageId),
        enabled: !!bibleId && !!passageId,

    });

};

export const useSections = (bibleId: string, bookId: string) => {

    return useQuery({

        queryKey: ['section', bibleId, bookId],
        queryFn: () => getSection(bibleId, bookId),
        enabled: !!bibleId && !!bookId,

    })

}

export const useOneSection = (bibleId: string, sectionId: string) => {

    return useQuery({

        queryKey: ['section', bibleId, sectionId],
        queryFn: () => getOneSection(bibleId, sectionId),
        enabled: !!bibleId && !!sectionId,
        
    });

}


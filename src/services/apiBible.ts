import axios from 'axios';

const API_BASE_URL = 'https://api.scripture.api.bible/v1/bibles';
const API_KEY = import.meta.env.VITE_API_KEY;


export const getBibles = async () => {

    try {

        const res = await axios.get(`${API_BASE_URL}`, {
            headers: {
                'api-key': API_KEY
            }
        });

        console.table(res.data.data)
        return res.data.data

    } catch (error) {

        console.error('Error fetching bibles:', error);
        return [];

    }

};

export const getBooks = async (bibleId: string) => {

    try {

        const res = await axios.get(`${API_BASE_URL}/${bibleId}/books`, {
            headers: {
                'api-key': API_KEY
            }
        });

        console.table(res.data.data)
        return res.data.data;

    } catch (error) {

        console.error('Error fetching books:', error);
        return [];

    }

};

export const getChapters = async (bibleId: string, bookId: string) => {

    try {

        const res = await axios.get(`${API_BASE_URL}/${bibleId}/books/${bookId}/chapters`,
            {
                headers: {
                    'api-key': API_KEY
                }
            }
        );

        console.table(res.data.data)
        return res.data.data;

    } catch (error) {

        console.error('Error fetching chapters:', error);
        return [];

    }

}

export const getVerses = async (bibleId: string, chapterId: string) => {

    try {

        const res = await axios.get(`${API_BASE_URL}/${bibleId}/chapters/${chapterId}/verses`,
            {
                headers: {
                    'api-key': API_KEY
                }
            }
        );

        console.table(res.data.data);
        return res.data.data;

    } catch (error) {

        console.error('Error fetching verses:', error);
        return [];

    }

}

export const getOneVerse = async (bibleId: string, verseId: string) => {

    try {

        const res = await axios.get(`${API_BASE_URL}/${bibleId}/verses/${verseId}`,
            {
                headers: {
                    "api-key": API_KEY
                }
            }
        );

        console.table(res.data.data);
        return res.data.data;

    } catch (error) {

        console.error('Error fetching verses:', error);
        return [];

    }

}

export const getPassages = async (bibleId: string, passageId: string) => {

    try {

        const res = await axios.get(`${API_BASE_URL}/${bibleId}/passages/${passageId}`,
            {
                headers: {
                    "api-key": API_KEY
                }
            }
        );

        console.table(res.data.data);
        return res.data.data;

    } catch (error) {

        console.error('Error fetching verses:', error);
        return [];

    }

}

export const getSection = async (bibleId: string, bookId: string) => {

    try {

        const res = await axios.get(`${API_BASE_URL}/${bibleId}/books/${bookId}/sections`,
            {
                headers: {
                    "api-key": API_KEY
                }
            }
        );

        console.table(res.data.data);
        return res.data.data;

    } catch (error) {

        console.error('Error fetching sections:', error);
        return [];

    }

}

export const getOneSection = async (bibleId: string, sectionId: string) => {

    try {

        const res = await axios.get(`${API_BASE_URL}/${bibleId}/sections/${sectionId}`,
            {
                headers: {
                    "api-key": API_KEY
                }
            }
        );

        console.table(res.data.data);
        return res.data.data;

    } catch (error) {

        console.error('Error fetching sections:', error);
        return [];

    }

}
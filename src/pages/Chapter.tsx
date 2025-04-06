import { useParams, Link } from "react-router-dom";
import { useChapters, useSections } from "../hooks/useBibleData";

interface Chapter {
    id: string;
    number: string;
}

interface Section {
    id: string;
    title: string;
}

const ChapterPage = () => {

    const { bibleId, bookId } = useParams<{ bibleId: string; bookId: string }>();

    const { data: chapters, isLoading: chaptersLoading, error: chaptersError } = useChapters(bibleId || '', bookId || '');
    const { data: sections, isLoading: sectionsLoading, error: sectionsError } = useSections(bibleId || '', bookId || '');

    if (chaptersLoading || sectionsLoading) return <div>Loading...</div>;
    if (chaptersError) return <div>Error loading chapters: {chaptersError.message}</div>;
    if (sectionsError) return <div>Error loading sections: {sectionsError.message}</div>;

    return (
        <div>
            <h1>Chapters and Sections</h1>

            <h2>Chapters</h2>
            <ul>
                {chapters?.map((chapter: Chapter) => (
                    <li key={chapter.id}>
                        <Link
                            to={`/bibles/${bibleId}/books/${bookId}/chapters/${chapter.id}/verses`}
                        >
                        {chapter.number}
                        </Link>
                    </li>
                ))}
            </ul>

            <h2>Sections</h2>
            <ul>
                {sections?.map((section: Section) => (
                    <li key={section.id}>
                        <Link
                            to={`/bibles/${bibleId}/sections/${section.id}`}
                        >
                        {section.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChapterPage;

import { useParams, Link } from 'react-router-dom';
import { useVerses } from '../hooks/useBibleData';

interface Verse {
    id: string;
    reference: string;
    text: string;
    bookId: string;
    chapterId: string;
}

const VersePage = () => {

    const { bibleId, chapterId } = useParams<{ bibleId: string; chapterId: string }>();

    const { data: verses, isLoading, error } = useVerses(bibleId || '', chapterId || '');

    if (isLoading) return <div>Loading verses...</div>;
    if (error) return <div>Error loading verses: {error.message}</div>;

    return (
        <div>
            <h1>Verses in Chapter {chapterId}</h1>
            <ul>
                {verses?.map((verse: Verse) => (
                    <li key={verse.id}>
                        <Link
                            to={`/bibles/${bibleId}/books/${verse.bookId}/chapters/${verse.chapterId}/verses/${verse.id}`}
                        >
                        <strong>{verse.reference}:</strong> {verse.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default VersePage;

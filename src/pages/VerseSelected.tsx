import { useParams } from 'react-router-dom';
import { useOneVerse } from '../hooks/useBibleData';

const VerseSelected = () => {

    const { bibleId, verseId } = useParams<{ bibleId: string; verseId: string }>();

    const { data: verse, isLoading, error } = useOneVerse(bibleId || '', verseId || '');

    if (isLoading) return <div>Loading verse...</div>;
    if (error) return <div>Error loading verse: {error.message}</div>;

    return (
        <div>
            <h1>{verse?.reference}</h1>
            <div dangerouslySetInnerHTML={{ __html: verse?.content }} />
        </div>
    );
}

export default VerseSelected;

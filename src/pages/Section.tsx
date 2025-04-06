import { useParams } from 'react-router-dom';
import { useOneSection } from '../hooks/useBibleData';


const SectionPage = () => {

    const { bibleId, sectionId } = useParams<{ bibleId: string; sectionId: string }>();

    const { data: section, isLoading, error } = useOneSection(bibleId || '', sectionId || '');

    if (isLoading) return <div>Loading section...</div>;
    if (error) return <div>Error loading section: {error.message}</div>;

    return (
        <div>
            <h1>{section?.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: section?.content }} />
        </div>
    );
}

export default SectionPage;

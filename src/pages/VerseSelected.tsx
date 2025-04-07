import { useParams } from 'react-router-dom';
import { useOneVerse } from '../hooks/useBibleData';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import VerseSelectedSkeleton from '../components/Skeleton/VerseSelectedSkeleton';

const VerseSelected = () => {
    
    const navigate = useNavigate();
    const { bibleId, verseId } = useParams<{ bibleId: string; verseId: string }>();
    const { data: verse, isLoading } = useOneVerse(bibleId || '', verseId || '');


    return (
        <div className="max-w-3xl mx-auto p-4 md:p-6">
            <div className="flex items-center gap-3 mb-6">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-full hover:bg-gray-100 transition"
                    aria-label="Go back"
                >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <h1 className="text-2xl font-bold text-gray-800 font-serif">
                    {verse?.reference}
                </h1>
            </div>
            {isLoading ? (
                <VerseSelectedSkeleton />
            ) : (
                <div
                    className="text-lg leading-relaxed text-gray-800 font-serif verse-content"
                    dangerouslySetInnerHTML={{ __html: verse?.content || '' }}
                />
            )
            }
        </div>
    );
};

export default VerseSelected;
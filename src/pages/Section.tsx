import { useParams, useNavigate } from 'react-router-dom';
import { useOneSection } from '../hooks/useBibleData';
import { ChevronLeft, Bookmark, Share2, Copy } from 'lucide-react';

const SectionPage = () => {
    const navigate = useNavigate();
    const { bibleId, sectionId } = useParams<{ bibleId: string; sectionId: string }>();
    const { data: section, isLoading, error } = useOneSection(bibleId || '', sectionId || '');

    // Loading State
    if (isLoading) return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="h-9 w-9 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-7 w-64 bg-gray-200 rounded animate-pulse"></div>
            </div>
        </div>
    );


    return (
        <div className="max-w-4xl mx-auto p-4 md:p-6">
            {/* Header with back button */}
            <div className="flex items-center gap-3 mb-6">
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 rounded-full hover:bg-gray-100 transition"
                    aria-label="Go back"
                >
                    <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 font-serif">
                    {section?.title}
                </h1>
            </div>

            <div
                className="prose max-w-none text-gray-800"
                dangerouslySetInnerHTML={{ __html: section?.content || '' }}
            />

        </div>
    );
};

export default SectionPage;
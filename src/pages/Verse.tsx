import { useParams, Link } from 'react-router-dom';
import { useVerses } from '../hooks/useBibleData';
import { BookOpen, ChevronRight, Bookmark } from 'lucide-react';
import VerseSkeleton from '../components/Skeleton/VerseSkeleton';

interface Verse {
    id: string;
    reference: string;
    text: string;
    bookId: string;
    chapterId: string;
}

const VersePage = () => {
    const { bibleId, chapterId } = useParams<{ bibleId: string; chapterId: string }>();
    const { data: verses, isLoading } = useVerses(bibleId || '', chapterId || '');

    // VerseSkeleton;

    return (
        <div className="max-w-3xl mx-auto p-4 md:p-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-500" />
                    <h1 className="text-2xl font-bold text-gray-800 font-serif">
                        Chapter {chapterId}
                    </h1>
                </div>
                <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {verses?.length || 0} verses
                </div>
            </div>


            {isLoading ? (
                <VerseSkeleton />
            ) : (
                <div className="space-y-3">
                    {verses?.map((verse: Verse) => (
                        <Link
                            key={verse.id}
                            to={`/bibles/${bibleId}/books/${verse.bookId}/chapters/${verse.chapterId}/verses/${verse.id}`}
                            className="group block transition-all hover:scale-[1.01]"
                        >
                            <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-4 border border-gray-200 transition-all">
                                <div className="flex justify-between items-start gap-3">
                                    <div>
                                        <span className="font-medium text-blue-600 group-hover:text-blue-700">
                                            {verse.reference}
                                        </span>
                                        <p className="mt-1 text-gray-800 group-hover:text-gray-900">
                                            {verse.text}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )
            }

        </div>
    );
}

export default VersePage;
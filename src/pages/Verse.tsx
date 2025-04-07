import { useParams, Link } from 'react-router-dom';
import { useVerses } from '../hooks/useBibleData';
import { BookOpen, ChevronRight } from 'lucide-react';
import VerseSkeleton from '../components/Skeleton/VerseSkeleton';
import { Verse } from '../types/types';
import PageHeader from '../components/PageHeader';



const VersePage = () => {
    const { bibleId, chapterId } = useParams<{ bibleId: string; chapterId: string }>();
    const { data: verses, isLoading } = useVerses(bibleId || '', chapterId || '');

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6">
            <PageHeader
                title='Select a Verse'
                description='Choose a verse to read'
            />

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-indigo-400" />
                    <h1 className="text-3xl font-bold text-gray-800 font-serif">
                        Chapter {chapterId}
                    </h1>
                </div>
                <div className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                    {verses?.length || 0} verses
                </div>
            </div>

            {isLoading ? (
                <VerseSkeleton />
            ) : (
                    <div className="space-y-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {verses?.map((verse: Verse) => (
                        <Link
                            key={verse.id}
                            to={`/bibles/${bibleId}/books/${verse.bookId}/chapters/${verse.chapterId}/verses/${verse.id}`}
                            className="group block transition-all hover:scale-[1.01]"
                        >
                            <div className="bg-gray-800 rounded-lg shadow-sm hover:shadow-lg p-4 border border-gray-700 transition-all">
                                <div className="flex justify-between items-start gap-3">
                                    <div>
                                        <span className="font-medium text-indigo-400 group-hover:text-indigo-300">
                                            {verse.reference}
                                        </span>
                                        <p className="mt-1 text-gray-100 group-hover:text-gray-50">
                                            {verse.text}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-indigo-400" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default VersePage;
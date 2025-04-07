import { BookOpen } from 'lucide-react';

const BibleSkeleton = () => {

    return (

        <div className=" max-w-7xl mx-auto p-4 md:p-6">
            {[...Array(3)].map((_, langIdx) => (
                <section key={`lang-skeleton-${langIdx}`} className="space-y-4 py-[20px]">
                    <div className="h-8 w-1/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[...Array(6)].map((_, bibleIdx) => (
                            <div
                                key={`bible-skeleton-${bibleIdx}`}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5 border border-gray-100 dark:border-gray-700 h-full"
                            >
                                <div className="space-y-3">
                                    <div className="h-5 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                    <div className="h-4 w-1/2 bg-gray-100 dark:bg-gray-600 rounded animate-pulse"></div>
                                    <div className="flex items-center mt-4">
                                        <BookOpen className="h-4 w-4 mr-2 text-gray-300 dark:text-gray-500" />
                                        <div className="h-3 w-1/4 bg-gray-100 dark:bg-gray-600 rounded animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}
        </div>

    );

}

export default BibleSkeleton;

import { ChevronRight } from 'lucide-react';

const ChapterSkeleton = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="space-y-8">
                <div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {[...Array(10)].map((_, i) => (
                            <div key={`chapter-skel-${i}`} className="bg-gray-700 rounded-lg p-3 border border-gray-200 animate-pulse h-14">
                                <div className="flex items-center justify-between">
                                    <div className="h-4 w-6 bg-gray-200 rounded"></div>
                                    <ChevronRight className="h-4 w-4 text-gray-300" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChapterSkeleton;

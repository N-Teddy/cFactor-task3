import { ChevronRight } from 'lucide-react';

const SectionSkeleton = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 ">
            <div>
                <div className="space-y-2">
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {[...Array(5)].map((_, i) => (
                            <div key={`section-skel-${i}`} className="bg-gray-700 rounded-lg p-4 border border-gray-200 animate-pulse h-16">
                                <div className="flex items-center justify-between">
                                    <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
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

export default SectionSkeleton;

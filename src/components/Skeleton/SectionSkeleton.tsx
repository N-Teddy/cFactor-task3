import { ChevronRight } from 'lucide-react';

const SectionSkeleton = () => {
    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="space-y-8">
                <div>
                    <div className="h-8 w-48 bg-gray-200 rounded-lg animate-pulse mb-4"></div>
                    <div className="space-y-2">
                        {[...Array(5)].map((_, i) => (
                            <div key={`section-skel-${i}`} className="bg-white rounded-lg p-4 border border-gray-200 animate-pulse h-16">
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


const VerseSelectedSkeleton = () => {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="flex items-center gap-4 mb-6">
                <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="space-y-4">
                <div className="h-5 w-full bg-gray-200 rounded animate-pulse"></div>
                <div className="h-5 w-5/6 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-5 w-4/5 bg-gray-200 rounded animate-pulse"></div>
            </div>
        </div>
    );
}

export default VerseSelectedSkeleton;

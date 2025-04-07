
const VerseSkeleton = () => {

    return (

        <div className="max-w-3xl mx-auto p-4 md:p-6">
            <div className="space-y-4">
                {[...Array(10)].map((_, i) => (
                    <div key={`verse-skel-${i}`} className="bg-white rounded-lg p-4 border border-gray-200 animate-pulse">
                        <div className="flex justify-between items-start">
                            <div className="space-y-2">
                                <div className="h-4 w-16 bg-gray-200 rounded"></div>
                                <div className="h-4 w-full bg-gray-200 rounded"></div>
                                <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                            </div>
                            <div className="h-5 w-5 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
    
}

export default VerseSkeleton;

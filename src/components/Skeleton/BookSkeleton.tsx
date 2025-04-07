

const BookSkeleton = () => {

    return (

        <div className="max-w-7xl mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => (
                    <div key={i} className="bg-gray-800 rounded-lg p-4 border border-gray-700 animate-pulse h-20">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="h-10 w-10 rounded-full bg-gray-700"></div>
                                <div className="h-4 w-24 bg-gray-700 rounded"></div>
                            </div>
                            <div className="h-5 w-5 bg-gray-700 rounded"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );

}

export default BookSkeleton;

import { useParams, Link } from "react-router-dom";
import { useBooks } from "../hooks/useBibleData";
import { BookOpen, ChevronRight } from "lucide-react";
import BookSkeleton from "../components/Skeleton/BookSkeleton";
import PageHeader from "../components/PageHeader";

const BookPage = () => {
    const { bibleId } = useParams<{ bibleId: string }>();
    const { data: books, isLoading } = useBooks(bibleId || "");


    return (

        <>

            <div className="max-w-7xl mx-auto p-6">
                <PageHeader
                    title="Select a Book"
                    description="Choose a book to begin reading"
                />
                {
                    isLoading ? (
                        <BookSkeleton />
                    ) : (
                        < div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {books?.map((book) => (
                                <Link
                                    to={`/bibles/${bibleId}/books/${book.id}/chapters`}
                                    key={book.id}
                                    className="group block transition-all hover:scale-[1.02]"
                                >
                                    <div className="bg-gray-800 rounded-lg shadow-sm hover:shadow-lg p-4 border border-gray-700 transition-all h-full flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className="h-10 w-10 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 font-medium">
                                                {book.abbreviation || book.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-gray-100 group-hover:text-indigo-400 transition-colors">
                                                    {book.name}
                                                </h3>
                                                <p className="text-sm text-gray-400">
                                                    {book.chapters?.length || '?'} chapters
                                                </p>
                                            </div>
                                        </div>
                                        <ChevronRight className="h-5 w-5 text-gray-500 group-hover:text-indigo-400 transition-colors" />
                                    </div>
                                </Link>
                            ))}
                        </div >
                    )
                }

            </div>
        </>

    );
};

export default BookPage;
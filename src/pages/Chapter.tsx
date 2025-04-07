import { useParams, Link } from "react-router-dom";
import { useChapters, useSections } from "../hooks/useBibleData";
import { BookOpen, List, ChevronRight } from "lucide-react";
import ChapterSkeleton from "../components/Skeleton/ChapterSkeleton";
import SectionSkeleton from "../components/Skeleton/SectionSkeleton";

interface Chapter {
    id: string;
    number: string;
}

interface Section {
    id: string;
    title: string;
}


const ChapterPage = () => {

    
    const { bibleId, bookId } = useParams<{ bibleId: string; bookId: string }>();

    const {
        data: chapters,
        isLoading: chaptersLoading,
    } = useChapters(bibleId || '', bookId || '');

    const {
        data: sections,
        isLoading: sectionsLoading,
    } = useSections(bibleId || '', bookId || '');



    return (
        <>
            <div className="max-w-7xl mx-auto p-6">
                <div className="pb-[50px]">
                    <h1 className="text-3xl font-bold font-serif flex items-center gap-3">
                        <BookOpen className="text-indigo-400" />
                        Select a Chapter or a Section
                    </h1>
                    <p className="text-gray-400 mt-2">Browse and select a chapter to begin reading</p>
                </div>

                < section className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="h-5 w-5 text-blue-500" />
                        <h2 className="text-xl font-semibold text-gray-700">Chapters</h2>
                        <span className="ml-auto text-sm text-gray-500">
                            {chapters?.length} chapters
                        </span>
                    </div>

                    {chaptersLoading ? (
                        <ChapterSkeleton />
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                            {chapters?.map((chapter: Chapter) => (
                                <Link
                                    key={chapter.id}
                                    to={`/bibles/${bibleId}/books/${bookId}/chapters/${chapter.id}/verses`}
                                    className="group block transition-all hover:scale-[1.02]"
                                >
                                    <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-3 border border-gray-200 transition-all flex items-center justify-between">
                                        <span className="font-medium text-gray-900 group-hover:text-blue-600">
                                            {chapter.number}
                                        </span>
                                        <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </section>

                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <List className="h-5 w-5 text-green-500" />
                        <h2 className="text-xl font-semibold text-gray-700">Sections</h2>
                        <span className="ml-auto text-sm text-gray-500">
                            {sections?.length} sections
                        </span>
                    </div>

                    {sectionsLoading ? (
                        <SectionSkeleton />
                    ) : (
                        <div className="space-y-2">
                            {sections?.map((section: Section) => (
                                <Link
                                    key={section.id}
                                    to={`/bibles/${bibleId}/sections/${section.id}`}
                                    className="group block transition-all hover:scale-[1.01]"
                                >
                                    <div className="bg-white rounded-lg shadow-sm hover:shadow-md p-4 border border-gray-200 transition-all flex items-center justify-between">
                                        <span className="font-medium text-gray-900 group-hover:text-green-600">
                                            {section.title}
                                        </span>
                                        <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-green-500" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                </section>
            </div >
        </>
    );
}

export default ChapterPage;
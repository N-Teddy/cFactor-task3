import { useParams, Link } from "react-router-dom";
import { useChapters, useSections } from "../hooks/useBibleData";
import { BookOpen, List, ChevronRight } from "lucide-react";
import ChapterSkeleton from "../components/Skeleton/ChapterSkeleton";
import SectionSkeleton from "../components/Skeleton/SectionSkeleton";
import { Chapter, Section } from "../types/types";
import PageHeader from "../components/PageHeader";



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
        <div className="max-w-7xl mx-auto p-6">
            <PageHeader
                title="Select Chapter or Section"
                description="Select what you wat to read"
            />

            <section className="mb-[100px]">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-700">
                    <BookOpen className="h-5 w-5 text-indigo-400" />
                    <h2 className="text-3xl font-semibold text-gray-800">Chapters</h2>
                    <span className="ml-auto text-sm text-gray-400">
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
                                <div className="bg-gray-800 rounded-lg shadow-sm hover:shadow-lg p-3 border border-gray-700 transition-all flex items-center justify-between">
                                    <span className="font-medium text-gray-100 group-hover:text-indigo-400">
                                        {chapter.number}
                                    </span>
                                    <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-indigo-400" />
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            <section>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-700">
                    <List className="h-5 w-5 text-green-400" />
                    <h2 className="text-3xl font-semibold text-gray-800">Sections</h2>
                    <span className="ml-auto text-sm text-gray-400">
                        {sections?.length} sections
                    </span>
                </div>

                {sectionsLoading ? (
                    <SectionSkeleton />
                ) : (
                    <div className="space-y-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {sections?.map((section: Section) => (
                                <Link
                                    key={section.id}
                                    to={`/bibles/${bibleId}/sections/${section.id}`}
                                    className="group block transition-all hover:scale-[1.01] "
                                >
                                    <div className="bg-gray-800 rounded-lg shadow-sm hover:shadow-md p-4 border border-gray-700 transition-all flex items-center justify-between">
                                        <span className="font-medium text-gray-100 group-hover:text-green-400">
                                            {section.title}
                                        </span>
                                        <ChevronRight className="h-4 w-4 text-gray-500 group-hover:text-green-400" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}

export default ChapterPage;
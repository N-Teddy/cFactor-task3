import React from 'react';
import { useBibles } from '../hooks/useBibleData';
import { Bible } from '../types/Bible';
import { Link } from 'react-router-dom';
import BibleSkeleton from './Skeleton/BibleSkeleton';

const BibleComponent: React.FC = () => {
    const { data: bibles, isLoading } = useBibles();

    // Only process bibles if data exists and is an array
    const biblesByLanguage = React.useMemo(() => {
        if (!bibles || !Array.isArray(bibles)) return {};

        return bibles.reduce<Record<string, Bible[]>>((acc, bible) => {
        const languageName = bible.language.name;
        if (!acc[languageName]) {
            acc[languageName] = [];
        }
        acc[languageName].push(bible);
        return acc;
    }, {});
    }, [bibles]);

    return (
        <>
            {isLoading ? (
                <BibleSkeleton />
            ) : (
                    <div className="max-w-7xl mx-auto p-4 md:p-6">
                    {Object.entries(biblesByLanguage).map(([language, biblesInLanguage]) => (
                        <section key={language} className="space-y-4 py-[20px]">
                            <h2 className="text-2xl font-bold text-gray-800 font-serif">
                                {language}
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {biblesInLanguage.map((bible) => (
                                    <Link
                                        to={`/bibles/${bible.id}/books`}
                                        key={bible.id}
                                        className="group block transition-all hover:scale-[1.02]"
                                    >
                                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md p-5 border border-gray-100 dark:border-gray-700 transition-all h-full">
                                            <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {bible.name}
                                            </h3>
                                            {bible.abbreviation && (
                                                <span className="inline-block mt-1 px-2 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full">
                                                    {bible.abbreviation}
                                                </span>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            )}
        </>
    );
}

export default BibleComponent;

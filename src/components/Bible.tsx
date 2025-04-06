import React from 'react';
import { useBibles } from '../hooks/useBibleData';
import { Bible } from '../types/Bible';
import { Link } from 'react-router-dom';

const BibleComponent: React.FC = () => {

    const { data: bibles, isLoading, error } = useBibles();

    if (isLoading) return <>loading...</>;
    if (error) return <div>Error loading Bibles.</div>;

    if (!bibles || !Array.isArray(bibles)) return <div>No Bibles available.</div>;

    const biblesByLanguage = bibles.reduce<Record<string, Bible[]>>((acc, bible) => {
        const languageName = bible.language.name;
        if (!acc[languageName]) {
            acc[languageName] = [];
        }
        acc[languageName].push(bible);
        return acc;
    }, {});

    return (
        <div>
            {Object.entries(biblesByLanguage).map(([language, biblesInLanguage]) => (
                <div key={language}>
                    <h2 className='text-xl'>{language}</h2>
                    <ul>
                        {biblesInLanguage.map((bible) => (
                            <Link
                                to={`/bibles/${bible.id}/books`}
                                key={bible.id}
                            >
                                {bible.name}
                            </Link>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default BibleComponent;

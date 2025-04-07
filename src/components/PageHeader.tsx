import { BookOpen, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {

    const navigate = useNavigate();


    return (
        <div className="mb-10 max-w-7xl flex justify-between items-center">
            <div className="pb-12">
                <div className="w-[120px] h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-4"></div>
                <div className="flex items-center gap-3">
                    <BookOpen className="size-[70px] text-indigo-400 mt-1 flex-shrink-0" />
                    <div>
                        <h1 className="text-5xl font-bold text-gray-800 font-serif tracking-tight">
                            {title}
                        </h1>
                        <p className="mt-2 text-lg text-gray-400 max-w-3xl leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <button
                    onClick={() => navigate(-1)}
                    className="p-2 flex items-center gap-2 rounded-3xl hover:bg-gray-100 transition"
                    aria-label="Go back"
                >
                    <ChevronLeft className="h-5 w-5 text-gray-600" /> Go back
                </button>
            </div>
        </div>
    );
};

export default PageHeader;
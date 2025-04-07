import { BookOpen, Menu, } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="sticky top-0 z-10 bg-gray-800 shadow-lg">
            <div className="container max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link to={'/'}>
                        <div className="flex items-center gap-3">
                            <BookOpen className="h-7 w-7 text-white" />
                            <h1 className="text-2xl font-bold text-white font-serif tracking-tight">BibleApp</h1>
                        </div>
                    </Link>

                    <button className="md:hidden text-white">
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </header>

    );
}

export default Header;

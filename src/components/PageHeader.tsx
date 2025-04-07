import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
    name: string;
    path?: string;
}

interface PageHeaderProps {
    title: string;
    breadcrumbs: BreadcrumbItem[];
    description?: string;
}

const PageHeader = ({ title, breadcrumbs, description }: PageHeaderProps) => {
    return (
        <header className="mb-10">
            <nav className="flex items-center mb-5">
                <div className="flex items-center space-x-1 bg-surface-dark rounded-full px-3 py-1.5 border border-border-dark">
                    <Link
                        to="/"
                        className="p-1 rounded-full hover:bg-bg-dark transition-colors"
                    >
                        <Home className="h-4 w-4 text-text-secondary" />
                    </Link>

                    {breadcrumbs.map((crumb, index) => (
                        <div key={index} className="flex items-center">
                            <ChevronRight className="h-4 w-4 mx-1 text-border-dark" />
                            {crumb.path ? (
                                <Link
                                    to={crumb.path}
                                    className="px-2 py-1 text-sm font-medium text-text-secondary hover:text-accent-dark transition-colors"
                                >
                                    {crumb.name}
                                </Link>
                            ) : (
                                <span className="px-2 py-1 text-sm font-medium text-text-secondary/60">
                                    {crumb.name}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </nav>

            <div className="relative">
                <h1 className="text-4xl font-bold text-text-primary font-sans tracking-tight">
                    {title}
                </h1>
                {description && (
                    <p className="mt-3 text-lg text-text-secondary max-w-3xl">
                        {description}
                    </p>
                )}
                <div className="absolute -bottom-4 left-0 w-16 h-1 bg-gradient-to-r from-accent-dark to-indigo-400 rounded-full"></div>
            </div>
        </header>
    );
};

export default PageHeader;
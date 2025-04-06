import { useParams, Link } from "react-router-dom";
import { useBooks } from "../hooks/useBibleData";

const BookPage = () => {

    const { bibleId } = useParams<{ bibleId: string }>();
    const { data: books, isLoading, error } = useBooks(bibleId || "");

    if (isLoading) return <div>Loading books...</div>;
    if (error) return <div>Error loading books.</div>;

    return (
        <>
            <div>
                <h1>Books in the Selected Bible</h1>
                <ul>
                    {books?.map((book) => (
                        <li key={book.id}>
                            <Link to={`/bibles/${bibleId}/books/${book.id}/chapters`}>
                                {book.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );

}

export default BookPage;

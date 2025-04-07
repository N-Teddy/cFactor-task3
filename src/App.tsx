import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BiblePage from './pages/Bible';
import BookPage from './pages/Book';
import ChapterPage from './pages/Chapter';
import VersePage from './pages/Verse';
import SectionPage from './pages/Section';
import VerseSelected from './pages/VerseSelected';
import Header from './components/Header';


function App() {

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<BiblePage />} />
				<Route path='/bibles/:bibleId/books' element={<BookPage />} />
				<Route path='/bibles/:bibleId/books/:bookId/chapters' element={<ChapterPage />} />
				<Route path='/bibles/:bibleId/books/:bookId/chapters/:chapterId/verses' element={<VersePage />} />
				<Route path='/bibles/:bibleId/sections/:sectionId' element={<SectionPage />} />
				<Route path='/bibles/:bibleId/books/:bookId/chapters/:chapterId/verses/:verseId' element={<VerseSelected/>} />
			</Routes>
		</Router>
	)
}

export default App


import { useState } from 'react';
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
    if (!bookmarks.some(item => blog.id  ===item.id )) {
      console.log(blog);
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
  } else {
      alert("Blog already exists in bookmarks.")
  }
  }

  const handleMarkAsRead = (id, time) =>{
    console.log(time)
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    // console.log('remove bookmark', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <Header/>
      <div className='md:flex max-w-7xl mx-auto py-5'>
      
       <Blogs  handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} />
       <Bookmarks bookmarks={bookmarks} readingTime={readingTime} handleMarkAsRead={handleMarkAsRead} ></Bookmarks>
      </div>
    </>
  )
}

export default App

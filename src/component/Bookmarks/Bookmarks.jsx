import Bookmark from "../Bookmark/Bookmark"
import PropTypes from 'prop-types'
 import '../../App.css'


function Bookmarks({bookmarks,readingTime}) {
<style>
 
</style>

    return (
 <div className="  md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4 px-2  h-[500px] overflow-y-auto">
            <div>
                <h3 className="text-4xl">Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center ">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks?.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )
            }
        </div>
  )
}
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks
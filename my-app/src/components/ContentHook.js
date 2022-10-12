import React, {useState, useEffect}  from 'react'
import css from "./css/Content.module.css"
import PostItem from './Postitem'
import { savedPosts } from "../posts.json"
import Loader from './Loader'

function ContentHook() {
    const [fetchedPosts, setFetchedPosts] = useState([]);
    const [isLoaded, setIsloaded] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setIsloaded(true);
            setFetchedPosts(savedPosts);
        }, 2000)
    }, [])

    const handleChange = (e) => {
        const name = e.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter((post)=>{
            return post.name.toLowerCase().includes(name);
        })
        
        setFetchedPosts(filteredPosts)
    }
    
  return (
    <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <form>
            <label htmlFor='searchInput'>Search:</label>
            <input
            type="search"
            id="searchInput"
            onChange={(e) => {handleChange(e)}}
            />
            <h4>Post Found: </h4>
          </form>
        </div>
        <div className={css.SearchResults}>{isLoaded ? (
          <PostItem savedPosts={fetchedPosts} />
          ) : (<Loader />)
      }
        </div>
      </div>
  )
}

export default ContentHook
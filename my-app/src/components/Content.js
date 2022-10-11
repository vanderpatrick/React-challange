import React, { Component } from 'react'
import css from "./css/Content.module.css"
import PostItem from './Postitem'
import { savedPosts } from "../posts.json"
import Loader from './Loader'


export class Content extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoaded: false,
       posts: [],
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoaded: true,
        posts: savedPosts,
      })
    },3000) 
  }

  handleChange = (event) => {
    const name = event.target.value.toLowerCase()
    const filteredPosts = savedPosts.filter((post) => {
      return post.name.toLowerCase().includes(name);
    })
    this.setState({
      posts: filteredPosts
    })
  }
  
  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <form>
            <label htmlFor='searchInput'>Search: {this.state.posts.length} </label>
            <input
            type="search"
            id="searchInput"
            onChange={(event) => {this.handleChange(event)}}
            />
            <h4>Post Found: </h4>
          </form>
        </div>
        <div className={css.SearchResults}>{this.state.isLoaded ? (
          <PostItem savedPosts={this.state.posts} />
          ) : (<Loader />)
      }
        </div>
      </div>
    )
  }
}

export default Content
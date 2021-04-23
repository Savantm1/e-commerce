import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../../Filters/Title/Title'
import "./BlogSmallItem.scss"

const BlogSmallItem = (props) => {
    return (
        <Link to="/blog_item">
        <div className="blog_small_item">
            <div className="blog_small_item__info_blog">
                <Title  margin="0 0 1rem 0">Space for your heading is here, write what you need</Title>
                <div className="autor_block">
                    <span className="autor_block__autor_name">Author</span>
                    <span className="autor_block__data">17.92.22</span>
                </div>
            </div>
            <div className="blog_small_item__block_img">
                <img src={props.postImg} alt="#" className="blog_small_item__bg" />
            </div>
        </div>
        </Link>
    )
}

export default BlogSmallItem

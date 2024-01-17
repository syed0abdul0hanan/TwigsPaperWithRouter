import React from 'react'
import ArticleSectionStyle from './ArticleSectionStyle.module.css'
import ArticleImage from '../../../assets/ArticleImage.jpg'

function ArticleSection() {
    return (
        <div className={ArticleSectionStyle.ArticleSectionContainer}>

            <div className={ArticleSectionStyle.ArticleSectionDiv}>
                <div className={ArticleSectionStyle.ArticleSectionContent}>
                <h6>WHAT TO WRITE</h6>
                <h1>105 Perfect Father’s Day Wishes for Dad - Heartfelt and Funny Messages & Quotes</h1>
                <p>There is so much to be grateful for when Father’s Day comes around. How do you find the right words to say to someone who you love and appreciate so much? And how do you make it unique? Expressing your love in a Father’s Day card can be overwhelming because there are endless things to say about your dad. To make it easier for you, we made a short list of some of our favorite wishes.</p>
                <button>Read Article</button>
                </div>
            </div>

            <div className={ArticleSectionStyle.ArticleSectionDiv}>
                <img src={ArticleImage} alt="" />
            </div>

        </div>
    )
}

export default ArticleSection
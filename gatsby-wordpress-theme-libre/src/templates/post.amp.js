import React from "react";
import { graphql, Link } from "gatsby";
import ArticleMeta from "../components/meta/article-meta";

const PostTemplate = ({ data, location, pageContext }) => {
  return (
    <>
      <ArticleMeta
        data={data.wordpressPost}
        location={location}
        amp={pageContext.amp}
        type="article"
      />
      <header className="main-header">
        <nav className="blog-title">
          <Link to="/">
            <span
              dangerouslySetInnerHTML={{ __html: pageContext.title }}
            ></span>
          </Link>
        </nav>
      </header>
      <main className="content" role="main">
        <article className="post tag-getting-started">
          <header className="post-header">
            <h1 className="post-title">{data.wordpressPost.title}</h1>
            <div className="post-meta">
              <div className="post-meta-avatars">
                <p className="author">{data.wordpressPost.author.name}</p>
              </div>
              <time
                className="post-date"
                dateTime="{{date format='DD-MM-YYYY'}}"
              >
                {data.wordpressPost.date}
              </time>{" "}
            </div>
          </header>
          {data.wordpressPost.featured_media &&
            data.wordpressPost.featured_media.localFile && (
              <figure className="post-image">
                {data.wordpressPost.featured_media.localFile.childImageSharp &&
                  data.wordpressPost.featured_media.localFile.childImageSharp
                    .fluid && (
                    <img
                      src={
                        data.wordpressPost.featured_media.localFile
                          .childImageSharp.fluid.src
                      }
                      alt={data.wordpressPost.title}
                    />
                  )}

                {!data.wordpressPost.featured_media.localFile
                  .childImageSharp && (
                  <img
                    src={data.wordpressPost.featured_media.localFile.publicURL}
                    alt={data.wordpressPost.title}
                  />
                )}
              </figure>
            )}
          <section
            className="post-content"
            dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
          ></section>

          {data.wordpressPost.tags && data.wordpressPost.tags.length > 0 && (
            <div className="tags">
              <span>Tag:</span>
              <a
                className="tag"
                href={`/tag/${data.wordpressPost.tags[0].slug}`}
              >
                {data.wordpressPost.tags[0].name}
              </a>
            </div>
          )}

          <div className="comment-button-container">
            <button>
              <a href={`${data.wordpressPost.slug}`}>View original article</a>
            </button>
          </div>
        </article>
      </main>
    </>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    wordpressPost(permaLinkSlug: { eq: $slug }) {
      ...WordPressPostData
    }
  }
`;

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
          <Link to="/">{pageContext.title}</Link>
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
          {data.wordpressPost.jetpack_featured_media_url.localFile && (
            <figure className="post-image">
              <img
                src={
                  data.wordpressPost.jetpack_featured_media_url.localFile
                    .childImageSharp.fluid.src
                }
                alt={data.wordpressPost.title}
              />
            </figure>
          )}
          <section
            className="post-content"
            dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
          ></section>
        </article>
      </main>
    </>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      plainExcerpt
      slug
      content
      date(formatString: "DD MMMM YYYY")
      jetpack_featured_media_url {
        localFile {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
      author {
        name
        slug
      }
    }
  }
`;
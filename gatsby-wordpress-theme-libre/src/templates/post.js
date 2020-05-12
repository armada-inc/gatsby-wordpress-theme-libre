import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { graphql, Link } from "gatsby";
import Footer from "../components/footer";
import ArticleMeta from "../components/meta/article-meta";
import SubscribeForm from "../components/subscribe-form";
import Disqus from "../components/disqus";
import facebookShare from "../images/facebook-share.svg";
import twitterShare from "../images/twitter-share.svg";
import linkedInShare from "../images/linkedin.svg";
import mailShare from "../images/mail.svg";
import CopyLink from "../components/copy-link";

const Post = ({ data, location }) => {
  const [href, sethref] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      sethref(window.location.href);
    }
  }, []);
  const twitterShareUrl = `https://twitter.com/share?text=${data.wordpressPost.plainTitle}&url=${href}`;

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${href}`;

  const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${href}&title=${data.wordpressPost.plainTitle}`;

  const mailShareUrl = `mailto:?subject=${data.wordpressPost.plainTitle}&body=${href}`;

  return (
    <Layout>
      <ArticleMeta data={data.wordpressPost} />
      <div
        className="post-template-default single single-post single-format-standard wp-embed-responsive singular"
        style={{ overflowX: "hidden" }}
      >
        <div id="page" className="hfeed site">
          <a className="skip-link screen-reader-text" href="#content">
            Skip to content
          </a>
          <Navbar />
          <div id="content" className="site-content">
            <div id="primary" className="content-area">
              <main id="main" className="site-main" role="main">
                <article className="post type-post status-publish format-standard has-post-thumbnail hentry">
                  {data.wordpressPost.featured_media &&
                    data.wordpressPost.featured_media.localFile && (
                      <div className="post-thumbnail">
                        <img
                          className="attachment-libre-2-post-thumbnail size-libre-2-post-thumbnail wp-post-image jetpack-lazy-image jetpack-lazy-image--handled"
                          src={
                            data.wordpressPost.featured_media.localFile
                              .childImageSharp.fluid.src
                          }
                          srcSet={
                            data.wordpressPost.featured_media.localFile
                              .childImageSharp.fluid.srcSet
                          }
                          alt={
                            data.wordpressPost.featured_media.alt_text
                              ? data.wordpressPost.featured_media.alt_text
                              : data.wordpressPost.featured_media.title
                          }
                        />
                      </div>
                    )}
                  <header className="entry-header">
                    <h1
                      className="entry-title"
                      dangerouslySetInnerHTML={{
                        __html: data.wordpressPost.title,
                      }}
                    ></h1>
                    <div className="entry-meta">
                      {" "}
                      <span className="posted-on">
                        Posted on{" "}
                        <time
                          className="entry-date published"
                          dateTime="2019-09-15T21:16:31+05:30"
                        >
                          {data.wordpressPost.date}
                        </time>
                        <time
                          className="updated"
                          dateTime="2019-09-15T21:25:22+05:30"
                        >
                          {data.wordpressPost.date}
                        </time>
                      </span>
                      <span className="byline">
                        {" "}
                        by{" "}
                        <span className="author vcard">
                          <Link
                            to={`/author/${data.wordpressPost.author.slug}`}
                            className="url fn n"
                          >
                            {data.wordpressPost.author.name}
                          </Link>
                        </span>
                      </span>{" "}
                      &bull; {data.wordpressPost.readingTime}
                    </div>
                  </header>
                  <div
                    className="entry-content"
                    dangerouslySetInnerHTML={{
                      __html: data.wordpressPost.content,
                    }}
                  ></div>
                  <footer className="entry-footer">
                    {" "}
                    {data.wordpressPost.tags && (
                      <span className="cat-links">
                        Posted in{" "}
                        {data.wordpressPost.tags.map((tag, index, arr) => {
                          return (
                            <Link key={index} to={`/tag/${tag.slug}`}>
                              {tag.name}
                              {index !== arr.length - 1 && ", "}
                            </Link>
                          );
                        })}
                      </span>
                    )}
                  </footer>
                  <div className="social-icons-container flex items-center max-w-3xl mt-8 mx-4 lg:mx-auto">
                    <span className="mr-2 text-lg text-gray-700">Share:</span>
                    <div className="social-icons">
                      <ul className="flex">
                        <li>
                          <a
                            href={facebookShareUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="h-4"
                              src={facebookShare}
                              alt="Facebook Share"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href={twitterShareUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="h-4"
                              src={twitterShare}
                              alt="Twitter Share"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href={linkedInShareUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="h-4"
                              src={linkedInShare}
                              alt="LinkedIn Share"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            href={mailShareUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="h-4"
                              src={mailShare}
                              alt="Share via Mail"
                            />
                          </a>
                        </li>
                        <li>
                          <CopyLink textToCopy={href} />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="entry-author">
                    <div className="author-avatar">
                      <img
                        alt={data.wordpressPost.author.name}
                        src={data.wordpressPost.author.avatar_urls.wordpress_96}
                        className="avatar avatar-100 photo jetpack-lazy-image jetpack-lazy-image--handled"
                        height={100}
                        width={100}
                      />
                    </div>

                    <div className="author-heading">
                      <h2 className="author-title">
                        Published by{" "}
                        <span className="author-name">
                          {data.wordpressPost.author.name}
                        </span>
                      </h2>
                    </div>
                    <p className="author-bio">
                      {data.wordpressPost.author.description}
                      <Link
                        className="author-link"
                        to={`/author/${data.wordpressPost.author.slug}`}
                        rel="author"
                      >
                        {" "}
                        View all posts by {data.wordpressPost.author.name}{" "}
                      </Link>
                    </p>
                  </div>
                  <nav className="navigation post-navigation" role="navigation">
                    <h2 className="screen-reader-text">Post navigation</h2>
                    <div className="nav-links">
                      {data.prev && (
                        <div className="nav-previous">
                          <Link to={`/${data.prev.slug}`} rel="prev">
                            <span className="meta-nav">Previous Post</span>{" "}
                            <span
                              dangerouslySetInnerHTML={{
                                __html: data.prev.title,
                              }}
                            ></span>
                          </Link>
                        </div>
                      )}

                      {data.next && (
                        <div className="nav-next">
                          <Link to={`/${data.next.slug}`} rel="next">
                            <span className="meta-nav">Next Post</span>{" "}
                            <span
                              dangerouslySetInnerHTML={{
                                __html: data.next.title,
                              }}
                            ></span>
                          </Link>
                        </div>
                      )}
                    </div>{" "}
                  </nav>
                </article>

                <Disqus />
                <SubscribeForm />
              </main>
            </div>
            <div
              id="secondary"
              className="widget-area"
              role="complementary"
            ></div>
          </div>
          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default Post;

export const postQuery = graphql`
  query($slug: String, $prev: String, $next: String) {
    wordpressPost(slug: { eq: $slug }) {
      ...WordPressPostData
    }

    prev: wordpressPost(id: { eq: $prev }) {
      title
      slug
    }

    next: wordpressPost(id: { eq: $next }) {
      title
      slug
    }
  }
`;

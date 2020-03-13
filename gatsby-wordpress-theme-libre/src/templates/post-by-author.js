import React from "react";
import Layout from "../components/layout";
import PostCard from "../components/post-card";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const PostByAuthor = ({ data }) => (
  <Layout>
    <div className="home blog wp-embed-responsive">
      <div id="page" className="hfeed site">
        <Navbar />
        <div id="content" className="site-content">
          <div id="primary" className="content-area">
            <main id="main" className="site-main">
              {data.allWordpressPost.edges.map(({ node }, index) => (
                <PostCard key={index} node={node} />
              ))}
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </Layout>
);

export default PostByAuthor;

export const pageQuery = graphql`
  query($slug: String) {
    allWordpressPost(filter: { author: { slug: { eq: $slug } } }) {
      edges {
        node {
          ...WordPressPostData
        }
      }
    }
  }
`;

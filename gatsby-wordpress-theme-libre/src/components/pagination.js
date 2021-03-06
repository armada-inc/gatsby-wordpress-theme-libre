import React from "react";
import { Link } from "gatsby";

const Pagination = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext;

  return (
    <>
    {(nextPagePath || previousPagePath) && <nav className="navigation posts-navigation" role="navigation">
        <h2 className="screen-reader-text">Posts navigation</h2>
        <div className="nav-links">
          {nextPagePath && (
            <div className="nav-previous">
              <Link to={nextPagePath} rel="next">
                Older posts
              </Link>
            </div>
          )}
          {previousPagePath && (
            <div className="nav-next">
              <Link to={previousPagePath} rel="prev">
                Newer posts
              </Link>
            </div>
          )}
        </div>{" "}
      </nav>}
      
    </>
  );
};


export default Pagination;

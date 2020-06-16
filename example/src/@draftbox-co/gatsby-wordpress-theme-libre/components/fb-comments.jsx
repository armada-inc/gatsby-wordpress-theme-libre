import React from "react";
import { FacebookProvider, Comments } from 'react-facebook';

const FbComments = props => {
  return process.env.FB_APP_ID ? (
    <FacebookProvider appId={process.env.FB_APP_ID}>
      <Comments href={props.href}/>
    </FacebookProvider>
  ) : (
    <></>
  );
  return ;
};

export default FbComments;

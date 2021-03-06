import React from "react";
import { FacebookProvider, Comments } from 'react-facebook';

const FbComments = props => {
  return process.env.GATSBY_FB_APP_ID ? (
    <FacebookProvider appId={process.env.GATSBY_FB_APP_ID}>
      <Comments href={props.href} width={'100%'}/>
    </FacebookProvider>
  ) : (
    <></>
  );
};

export default FbComments;

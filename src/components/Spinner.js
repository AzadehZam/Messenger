import React from 'react';
import { css } from "@emotion/core";
import { CircleLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function Spinner({ loading }) {
  if (!loading) {
    return null;
  }
  return (
    <div >
      
        <CircleLoader loading={loading} size='400' color='rgb(54, 215, 183)' css={override} />
        <h1 className='text-center mt-4 pt-4 spinner-text' >Messenger is loading ...</h1>
      
    </div>
  )
}
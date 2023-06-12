import React, { Component } from 'react';

import { Vortex } from 'react-loader-spinner';

import { Wrapper, LoaderItem } from './Loader.styled';


export class Loader extends Component {
  render() {
    return (
      <Wrapper>
      
       <LoaderItem>
       <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
       </LoaderItem>
      </Wrapper>
    );
  }
}

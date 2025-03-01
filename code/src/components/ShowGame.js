import React from 'react';
import { useSelector } from 'react-redux';

import { StartPage } from './StartPage';
import { Labyrinth } from './Labyrinth';

import { Main, LoaderContainer, Body } from './StyledComponents';
import { LoadingIndicator } from './LoadingIndicator';

export const ShowGame = () => {
  const loading = useSelector(store => store.start.loading);
  const coordinates = useSelector(store => store.start.coordinates);
  const colorDictionary = {
    '0,0': 'url(https://i.postimg.cc/zfkqh53b/url0-1.jpg)',
    '1,0': 'url(https://i.postimg.cc/4yxvGJHz/url0-2.jpg)',
    '1,1': 'url(https://i.postimg.cc/90D41zqN/url0-22.jpg)',
    '0,1': 'url(https://i.postimg.cc/PJ0C7hWf/url0-3.jpg)',
    '0,2': 'url(https://i.postimg.cc/FRskdTFv/url1-1.jpg)',
    '0,3': 'url(https://i.postimg.cc/R0TnZkBG/857152.jpg)',
    '1,3': 'url(https://i.postimg.cc/7YwfXPSY/start.jpg)',
  };

  const username = useSelector(store => store.start.username);

  return (
    <>
      {loading && (
        <LoaderContainer>
          <LoadingIndicator />
        </LoaderContainer>
      )}

      {!loading && (
        <Body
          style={{
            backgroundImage: colorDictionary[coordinates],
          }}
        >
          <Main>{username ? <Labyrinth /> : <StartPage />}</Main>
        </Body>
      )}
    </>
  );
};

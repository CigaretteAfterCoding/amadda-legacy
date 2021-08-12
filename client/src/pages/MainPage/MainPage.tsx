import React from 'react';
import styled from 'styled-components';
import Header from 'Layouts/Header/Header';
import DiaryCard from 'Components/DiaryCard/DiaryCard';

interface MainPageProps {}

const MainPage = ({}: MainPageProps) => {
  const post = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <MainPageContainer>
      <Header />
      <MainPageWrapper>
        <CardContainer>
          {post?.map((item, idx) => (
            <DiaryCard />
          ))}
        </CardContainer>
      </MainPageWrapper>
    </MainPageContainer>
  );
};

export default MainPage;

const MainPageContainer = styled.div``;

const MainPageWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 1425px;
`;

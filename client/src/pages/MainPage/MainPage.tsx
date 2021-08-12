import React from 'react';
import styled from 'styled-components';
import Header from 'Layouts/Header/Header';
import DiaryCard from 'Components/DiaryCard/DiaryCard';

interface MainPageProps {}

const MainPage = ({}: MainPageProps) => {
  const test = Array(10).fill('');
  return (
    <MainPageContainer>
      <Header />
      <MainPageWrapper>
        <CardContainer>
          {test?.map((item, idx) => (
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

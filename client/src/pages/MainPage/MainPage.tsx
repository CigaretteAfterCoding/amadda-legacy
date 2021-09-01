import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from 'Layouts/Header/Header';
import DiaryCard from 'Components/DiaryCard/DiaryCard';
import WriteButton from 'Components/WriteButton/WriteButton';
import DiaryModal from 'Components/DiaryModal/DiaryModal';

const MainPage = () => {
  const [diaryModalOpen, setDiaryModalOpen] = useState(false);
  const test = Array(8).fill('');

  const DiaryModalOpen = () => {
    setDiaryModalOpen(!diaryModalOpen);
  };

  useEffect(() => {
    const DiaryModalClose = (e: React.MouseEvent<HTMLBodyElement>) => {
      if (!(e.target as HTMLElement).closest('.diary-modal')) {
        setDiaryModalOpen(false);
      }
    };
    const body = document.querySelector('body');

    if (diaryModalOpen) {
      body?.addEventListener('click', DiaryModalClose);
    }

    return () => body?.removeEventListener('click', DiaryModalClose);
  }, [diaryModalOpen]);

  return (
    <MainPageContainer>
      <Header />
      <MainPageWrapper>
        <CardContainer>
          {test?.map((item, idx) => (
            <DiaryCardWrapper key={idx} onClick={DiaryModalOpen}>
              <DiaryCard key={idx} />
            </DiaryCardWrapper>
          ))}
        </CardContainer>
        <DiaryModalWrapper diaryModalOpen={diaryModalOpen}>
          {diaryModalOpen && <DiaryModal className="diary-modal" />}
        </DiaryModalWrapper>
      </MainPageWrapper>
      <WriteButtonWrapper>
        <WriteButton />
      </WriteButtonWrapper>
    </MainPageContainer>
  );
};

export default MainPage;

const MainPageContainer = styled.div``;

const MainPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 1340px;
  max-width: 1350px;
  margin: 50px auto;
`;

const DiaryCardWrapper = styled.div`
  &:hover {
    transition: all ease 0.5s;
    transform: translateY(-8px);
  }
`;

const DiaryModalWrapper = styled.div<{ diaryModalOpen: boolean }>`
  display: ${(props) => (props.diaryModalOpen ? 'flex' : 'none')};
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const WriteButtonWrapper = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
`;

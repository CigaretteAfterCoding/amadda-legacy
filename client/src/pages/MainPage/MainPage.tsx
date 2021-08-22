import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from 'Layouts/Header/Header';
import DiaryCard from 'Components/DiaryCard/DiaryCard';
import WriteButton from 'Components/WriteButton/WriteButton';
import DiaryModal from 'Components/DiaryModal/DiaryModal';
interface MainPageProps {}

const MainPage = () => {
  const [diaryModalOpen, setDiaryModalOpen] = useState(false);
  const test = Array(10).fill('');
  const DiaryModalOpen = () => {
    setDiaryModalOpen(!diaryModalOpen);
  };
  const DiaryModalClose = (e) => {
    console.log(!e.target.closest('.diary-modal'));
    if (!e.target.closest('.diary-modal')) {
      setDiaryModalOpen(false);
    }
  };
  useEffect(() => {
    const body = document.querySelector('body');
    if (diaryModalOpen) {
      body?.addEventListener('click', DiaryModalClose);
    }
    return () => body?.removeEventListener('click', DiaryModalClose);
  }, [DiaryModalClose, diaryModalOpen]);
  return (
    <MainPageContainer>
      <Header />
      <MainPageWrapper>
        <CardContainer>
          {test?.map((item, idx) => (
            <DiaryCardWrapper onClick={DiaryModalOpen}>
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
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const DiaryCardWrapper = styled.div``;

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
  max-width: 1425px;
`;

const WriteButtonWrapper = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
`;

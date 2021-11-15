import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from 'Layouts/Header/Header';
import DiaryCard from 'Components/DiaryCard/DiaryCard';
import WriteButton from 'Components/WriteButton/WriteButton';
import DiaryModal from 'Components/DiaryModal/DiaryModal';
import diaryAPI, { GetDiaryResponse } from 'Apis/diaryAPI';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import userState from 'Recoil/userState';

const MainPage = () => {
  const [diaryModalOpen, setDiaryModalOpen] = useState(false);
  const [writeModalOpen, setWriteModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'default' | 'write' | 'edit'>(
    'default',
  );
  const [user, _] = useRecoilState(userState);
  const { data: diaries, isLoading } = useQuery<GetDiaryResponse[] | void>(
    'diary/diaries',
    diaryAPI.getAllDiaries,
    {
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
    },
  );

  const openDiaryModal = () => {
    setDiaryModalOpen(!diaryModalOpen);
  };

  const openDiaryWriteModal = () => {
    setWriteModalOpen(true);
    setModalMode('write');
  };

  const closeDiaryWriteModal = () => {
    setWriteModalOpen(false);
    setModalMode('default');
  };

  const body = document.querySelector('body');

  const closeDiaryModal = (e: Event) => {
    if (
      !(
        (e.target as HTMLElement).closest('.diary-modal') ||
        (e.target as HTMLElement).closest('.select-wrapper')
      ) || (e as KeyboardEvent).key === 'Escpae'
    ) {
      setDiaryModalOpen(false);
      setWriteModalOpen(false);
      setModalMode('default');
    }
  };

  useEffect(() => {
    if (diaryModalOpen) {
      body?.addEventListener('click', closeDiaryModal);
    }

    return () => body?.removeEventListener('click', closeDiaryModal);
  }, [diaryModalOpen, body]);

  return (
    <MainPageContainer>
      <Header />
      <MainPageWrapper>
        {isLoading ?
          '로딩중~~' :
          <>
            <CardContainer>
              {diaries?.map((diary, idx) => (
                <DiaryCardWrapper key={idx}
                  onClick={openDiaryModal}
                >
                  <DiaryCard
                    key={idx}
                    diary={diary}
                  />
                </DiaryCardWrapper>
              ))}
            </CardContainer>
            <DiaryModalWrapper
              diaryModalOpen={diaryModalOpen}
              writeModalOpen={writeModalOpen}
            >
              {diaryModalOpen && (
                <DiaryModal
                  className="diary-modal"
                  modalMode={modalMode}
                  onClose={closeDiaryModal}
                />
              )}
              {writeModalOpen && (
                <DiaryModal
                  className="diary-modal"
                  modalMode={modalMode}
                  onClose={closeDiaryWriteModal}
                />
              )}
            </DiaryModalWrapper>
          </>
        }
      </MainPageWrapper>
      {user?.id &&
      <WriteButtonWrapper onClick={openDiaryWriteModal}>
        <WriteButton />
      </WriteButtonWrapper>
      }
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

const DiaryModalWrapper = styled.div<{ diaryModalOpen: boolean, writeModalOpen: boolean}>`
  display: ${(props) => ((props.diaryModalOpen) || (props.writeModalOpen) ? 'flex' : 'none')};
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

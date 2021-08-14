import React from 'react';
import styled from 'styled-components';
import testImg from 'Images/test.jpg';
import MuiSunnyIcon from '@material-ui/icons/WbSunny';
import colors from 'Styles/color-variables';
import MuiCreateIcon from '@material-ui/icons/CreateOutlined';
import MuiDeleteIcon from '@material-ui/icons/DeleteOutline';
import MuiShareIcon from '@material-ui/icons/Reply';

interface DiaryModalProps {}

const DiaryModal = ({}: DiaryModalProps) => {
  return (
    <DiaryModalContainer>
      <DiaryModalPhoto />
      <DiaryModalContents>
        <DiaryModalTitle>오늘의 일기</DiaryModalTitle>
        <DiaryTopRightWrapper>
          <DiaryModalDate>2021년 08월 14일</DiaryModalDate>
          <DiaryModalWeather />
        </DiaryTopRightWrapper>
        <DiaryModalText disabled>
          12월 9일 목요일 사랑하는 사람과 마지막 하루를 보냈다고 4월에 나눌
          인사를 미리 서둘러 하고 세상과도 이별한다고 눈을 감고 깨어나질 못하고
          매일 써오던 일기 내게 전해주라고 혼자 남은 나를 걱정했나요 많이
          아파했나요 갚지 못할 그 사랑에 자꾸 눈물이 나죠 사랑했던 날을 모두
          더하면 이별보다 길텐데 그댄 벌써 내게 제발 잊으라고만 하네요 4월에
          내린 햇살을 만져보고 싶다고 힘없이 눌러쓴 그대 팔에 몇일동안 비가 내려
          많이 아파하던 날 멈춰버린 4월 어느날 가지말라고 제발 눈을 뜨라고 이건
          장난이라고 이럼 화낼거라고 혼자 남은 나를 걱정했나요 많이 아파했나요
          갚지 못할 그 사랑에 자꾸 눈물이 나죠 사랑했던 날을 모두 더하면
          이별보다 길텐데 그댄 벌써 내게 제발 잊으라고만 하네요 슬픈 나의 바램
          시간이 지나도 변치 않는건 그댈 사랑하는 일 안된다고 잊었다고 하지
          말아요 영원히 그대곁에 my love
        </DiaryModalText>
        <DiaryModalBottom>
          <DiaryModalShare />
          <DiaryModalEdit />
          <DiaryModalDelete />
        </DiaryModalBottom>
      </DiaryModalContents>
    </DiaryModalContainer>
  );
};

export default DiaryModal;

const DiaryModalContainer = styled.div`
  width: 900px;
  height: 600px;
  border: 0;
  border-radius: 15px;
  display: flex;
  justify-content: flex-start;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const DiaryModalPhoto = styled.div`
  margin: 60px 0 60px 60px;
  width: 340px;
  height: 485px;
  background-image: url(${testImg});
  background-size: cover;
  border-radius: 15px;
`;

const DiaryModalContents = styled.div`
  margin: 60px 0 0 60px;
  width: 500px;
`;

const DiaryModalTitle = styled.div`
  font-weight: bold;
  font-size: 19px;
  line-height: 22px;
`;

const DiaryModalText = styled.textarea`
  font-size: 16px;
  line-height: 25px;
  font-family: Roboto;
  width: 405px;
  height: 400px;
  border: 0px;
  background-color: white;
  resize: none;

  &::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${colors.gray[400]};
    border-radius: 99px;
  }
`;

const DiaryTopRightWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const DiaryModalWeather = styled(MuiSunnyIcon)`
  margin-right: 60px;
  font-size: 10px;
  color: ${colors.orange};
`;

const DiaryModalDate = styled.div`
  margin-left: 110px;
  margin-right: 5px;
  font-size: 14px;
  color: ${colors.gray[800]};
  font-family: Roboto;
`;

const DiaryModalBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 60px 60px 0;
`;

const DiaryModalShare = styled(MuiShareIcon)`
  margin-right: 8px;
  color: ${colors.gray[800]};
  &:hover {
    cursor: pointer;
    color: ${colors.amadda};
    transition: all ease 0.5s;
  }
`;

const DiaryModalEdit = styled(MuiCreateIcon)`
  margin-right: 7px;
  color: ${colors.gray[800]};
  &:hover {
    cursor: pointer;
    color: blue;
    transition: all ease 0.5s;
  }
`;

const DiaryModalDelete = styled(MuiDeleteIcon)`
  color: ${colors.gray[800]};
  &:hover {
    cursor: pointer;
    transition: all ease 0.5s;
  }
`;

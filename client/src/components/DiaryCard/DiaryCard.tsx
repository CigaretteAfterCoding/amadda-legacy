import React, { useState } from 'react';
import styled from 'styled-components';
import colors from 'Styles/color-variables';
import testImg from 'Images/test2.jpg';
import MuiLikeBorderIcon from '@material-ui/icons/FavoriteBorder';
import MuiLikeIcon from '@material-ui/icons/Favorite';
import MuiSunnyIcon from '@material-ui/icons/WbSunny';

const DiaryCard = () => {
  const [like, setLike] = useState(false);
  const handleClickLike = () => {
    setLike(!like);
  };

  return (
    <DiaryCardContainer>
      <DiaryCardPhoto />
      <DiaryCardContents>
        <ContentsTop>
          <DiaryCardTitle>아 너무 덥다</DiaryCardTitle>
          <DiaryCardWeather />
        </ContentsTop>
        <ContentsMid>
          <DiaryCardText>
            12월 9일 목요일 사랑하는 사람과 마지막 하루를 보냈다고 4월에 나눌
            인사를 미리 서둘러 하고 세상과도 이별한다고 눈을 감고 깨어나질
            못하고 매일 써오던 일기 내게 전해주라고
          </DiaryCardText>
        </ContentsMid>
        <ContentsBtm>
          <LikeWrapper onClick={handleClickLike}>
            {like ? <DiaryCardLike /> : <DiaryCardLikeBorder />}
          </LikeWrapper>
          <DiaryCardDate>2021년 07월 19일</DiaryCardDate>
        </ContentsBtm>
      </DiaryCardContents>
    </DiaryCardContainer>
  );
};

export default DiaryCard;

const DiaryCardContainer = styled.div`
  margin: 30px 20px 0px 20px;
  width: 230px;
  height: 321px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-radius: 5px;
  background-color: ${colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  user-select: none;
  & :hover {
    cursor: pointer;
  }
`;

const DiaryCardPhoto = styled.div`
  height: 130px;
  border-radius: 10px 10px 0 0;
  background-image: url(${testImg});
  background-size: cover;
`;

const DiaryCardContents = styled.div`
  height: 160px;
`;

const ContentsTop = styled.div`
  display: float;
  justify-content: space-between;
  align-items: center;
  margin-top: 11px;
  line-height: 3px;
`;

const DiaryCardTitle = styled.div`
  font-weight: bold;
  margin-left: 15px;
  font-size: 14px;
`;

const DiaryCardWeather = styled(MuiSunnyIcon)`
  margin-right: 10px;
  font-size: 8px;
  color: ${colors.orange};
  opacity: 0.6;
`;

const ContentsMid = styled.div`
  margin: 6px 10px 15px 15px;
  line-height: 20px;
`;

const DiaryCardText = styled.div`
  font-size: 13px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  overflow: hidden;
  -webkit-box-orient: vertical;
  height: 80px;
  color: ${colors.gray[1000]};
`;

const ContentsBtm = styled.div`
  display: float;
  justify-content: space-between;
  margin-top: 35px;
  line-height: 13px;
  align-items: center;
`;

const LikeWrapper = styled.div`
  & :hover {
    cursor: pointer;
    color: ${colors.red};
    transition: all ease 0.5s;
  }
`;

const DiaryCardLikeBorder = styled(MuiLikeBorderIcon)`
  margin-left: 15px;
  color: ${colors.gray[600]};
`;

const DiaryCardLike = styled(MuiLikeIcon)`
  margin-left: 15px;
  color: ${colors.red};
  animation: pop 0.3s;
  @keyframes pop {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }
`;

const DiaryCardDate = styled.div`
  margin-right: 15px;
  font-size: 12px;
  color: ${colors.gray[800]};
`;

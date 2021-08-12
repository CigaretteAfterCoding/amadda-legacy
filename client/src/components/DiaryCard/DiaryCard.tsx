import React, { useState } from 'react';
import styled from 'styled-components';
import colors from 'Styles/color-variables';
import testImg from 'Images/test.jpg';
import MuiLikeBorderIcon from '@material-ui/icons/FavoriteBorder';
import MuiLikeIcon from '@material-ui/icons/Favorite';
import MuiSunnyIcon from '@material-ui/icons/WbSunny';

interface DiaryCardProps {}

const DiaryCard = ({}: DiaryCardProps) => {
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
  width: 245px;
  height: 360px;
  border-radius: 18px;
  background-color: ${colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  font-family: 'Roboto';
  & :hover {
    cursor: pointer;
  }
`;

const DiaryCardPhoto = styled.div`
  height: 142px;
  border-radius: 18px 18px 0 0;
  background-image: url(${testImg});
  background-size: cover;
`;

const DiaryCardContents = styled.div`
  height: 162px;
`;

const ContentsTop = styled.div`
  display: float;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  line-height: 10px;
`;

const DiaryCardTitle = styled.div`
  font-weight: bold;
  margin-left: 15px;
  font-size: 16px;
`;

const DiaryCardWeather = styled(MuiSunnyIcon)`
  margin-right: 10px;
  font-size: 10px;
  color: orange;
`;

const ContentsMid = styled.div`
  margin: 12px 10px 15px 15px;
  line-height: 21px;
`;

const DiaryCardText = styled.div`
  font-size: 14px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  word-break: break-all;
  overflow: hidden;
  -webkit-box-orient: vertical;
  height: 80px;
  color: ${colors.gray[1000]};
`;

const ContentsBtm = styled.div`
  display: float;
  justify-content: space-between;
  margin-top: 53px;
  line-height: 13px;
  align-items: center;
`;
const LikeWrapper = styled.div`
  & :hover {
    cursor: pointer;
    color: red;
  }
`;
const DiaryCardLikeBorder = styled(MuiLikeBorderIcon)`
  margin-left: 15px;
  color: ${colors.gray[800]};
`;

const DiaryCardLike = styled(MuiLikeIcon)`
  margin-left: 15px;
  color: red;
`;

const DiaryCardDate = styled.div`
  margin-right: 15px;
  font-size: 12px;
  color: ${colors.gray[800]};
`;

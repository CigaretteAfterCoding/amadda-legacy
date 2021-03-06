import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import testImg from 'Images/test.jpg';
import MuiSunnyIcon from '@material-ui/icons/WbSunnyOutlined';
import MuiCloudIcon from '@material-ui/icons/CloudOutlined';
import MuiSnowIcon from '@material-ui/icons/AcUnitOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import colors from 'Styles/color-variables';
import MuiCreateIcon from '@material-ui/icons/CreateOutlined';
import MuiDeleteIcon from '@material-ui/icons/DeleteOutline';
import MuiShareIcon from '@material-ui/icons/Reply';
import MuiCheckRoundedIcon from '@material-ui/icons/CheckRounded';
import MuiClearRoundedIcon from '@material-ui/icons/ClearRounded';
import weatherAPI from 'Apis/weatherAPI';
import WeatherSelect from 'Elements/Select/WeatherSelect';
import Alert from 'Elements/Alert/Alert';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

interface DiaryModalProps {
  className: string;
  modalMode: 'default' | 'write' | 'edit';
  onClose?: (e: Event) => void;
}

const DiaryModal = ({ className, modalMode = 'default', onClose }: DiaryModalProps) => {
  const [weatherData, setWeatherData] = useState<0 | 1 | 2 | 3 >(0);
  const [weatherMenu, setWeatherMenu] = useState(false);
  const [weather, setWeather] = useState<React.ReactNode>('');
  const [alertModal, setAlertModal] = useState(false);
  const [imageFile, setImageFile] = useState('');
  const [previewImage, setPreviewImage] = useState('');

  const weatherIcon = [
    <MuiSunnyIcon
      className="sunny"
      key="sunny"
    />,
    <MuiCloudIcon
      className="cloudy"
      key="cloudy"
    />,
    <FontAwesomeIcon
      icon={faCloudShowersHeavy}
      size="lg"
      className="rainy"
      key="rainy"
    />,
    <MuiSnowIcon
      className="snowy"
      key="snowy"
    />,
  ];

  const SELECT_MENU = [
    <MuiSunnyIcon
      fontSize="small"
      className="sunny"
      key="sunny"
    />,
    <MuiCloudIcon
      fontSize="small"
      className="cloudy"
      key="cloudy"
    />,
    <FontAwesomeIcon
      icon={faCloudShowersHeavy}
      size="lg"
      className="rainy"
      key="rainy"
    />,
    <MuiSnowIcon
      fontSize="small"
      className="snowy"
      key="snowy"
    />,
  ];

  const handleFileOnChange = (e: MouseEvent) =>{
    e?.preventDefault();
    const reader = new FileReader();
    const file = e?.target?.files[0];
    reader.onloadend = () => {
      setImageFile(file);
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAlertButton = () =>{
    setAlertModal(!alertModal);
  };

  const closeAlertButton = () =>{
    setAlertModal(false);
  };

  const handleClickMenu = () => {
    setWeatherMenu(!weatherMenu);
  };

  const handleSetMenu = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.sunny')) {
      setWeatherMenu(false);
      setWeather(weatherIcon[0]);
    }

    if ((e.target as HTMLElement).closest('.cloudy')) {
      setWeatherMenu(false);
      setWeather(weatherIcon[1]);
    }

    if ((e.target as HTMLElement).closest('.rainy')) {
      setWeatherMenu(false);
      setWeather(weatherIcon[2]);
    }

    if ((e.target as HTMLElement).closest('.snowy')) {
      setWeatherMenu(false);
      setWeather(weatherIcon[3]);
    }
  };

  useEffect(() => {
    async function getWeatherAPI() {
      const data = await weatherAPI.getWeather();
      setWeatherData(data);
    }
    getWeatherAPI();
  }, []);

  useEffect(() => {
    const handleClickSelect = (e: MouseEvent) => {
      if (
        !(
          (e.target as HTMLElement).closest('.select-wrapper') ||
          (e.target as HTMLElement).closest('.icon')
        )
      ) {
        setWeatherMenu(false);
      }
    };

    const keyboardHandler = (e: KeyboardEvent) => {
      if (modalMode === 'default') {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        onClose && onClose(e);
      }
    };

    window.addEventListener('click', handleClickSelect);
    window.addEventListener('keydown', keyboardHandler);

    return () => {
      window.removeEventListener('click', handleClickSelect);
      window.removeEventListener('keydown', keyboardHandler);
    };
  }, [modalMode, onClose]);

  return (
    <DiaryModalContainer className={className}>
      {modalMode === 'write' ? (
        <PhotoContainer>
          {imageFile ?
            <>
              <label htmlFor="ex_file" >
                <ImageWrapper src={previewImage}>
                </ImageWrapper>
              </label>
              <input type="file"
                id="ex_file"
                onChange={handleFileOnChange}
              />
            </>
            :
            <PhotoWrapper>
              <UploadButtonWrapper >
                <label htmlFor="ex_file" ><AddRoundedIcon fontSize="large" /></label>
              </UploadButtonWrapper>
              <input type="file"
                id="ex_file"
                onChange={handleFileOnChange}
              />
            </PhotoWrapper>
          }
        </PhotoContainer>
      ) : (
        <DiaryModalPhoto />
      )}
      <DiaryModalContents>
        {modalMode === 'write' && (
          <WeatherContainer>
            <WeatherWrapper onClick={handleClickMenu}
              className="icon"
            >
              {weather || <>{weatherIcon[weatherData]}</>}
            </WeatherWrapper>
            {weatherMenu && (
              <SelectWrapper className="select-wrapper"
                onClick={handleSetMenu}
              >
                <WeatherSelect menus={SELECT_MENU} />
              </SelectWrapper>
            )}
          </WeatherContainer>
        )}
        {modalMode === 'write' ? (
          <TitleWriteWrapper>
            <TitleWrite placeholder="????????? ????????? ????????????????" />
            <MuiCreateIcon
              fontSize="small"
              style={{ color: `${colors.gray[400]}` }}
            />
          </TitleWriteWrapper>
        ) : (
          <DiaryTitleWrapper>
            <DiaryModalTitle>????????? ??????</DiaryModalTitle>
            <DiaryDateWrapper>
              <DiaryModalDate>2021??? 08??? 14???</DiaryModalDate>
              <DiaryModalWeather />
            </DiaryDateWrapper>
          </DiaryTitleWrapper>
        )}
        {modalMode === 'write' ? (
          <TextWrite placeholder="????????? ????????? ???????????????..." />
        ) : (
          <DiaryModalText>
            12??? 9??? ????????? ???????????? ????????? ????????? ????????? ????????????
            <br />
            4?????? ?????? ????????? ?????? ????????? ?????? ???????????? ???????????????
            <br />
            ?????? ?????? ???????????? ????????? ?????? ????????? ??????
            <br />
            ?????? ??????????????? ?????? ?????? ?????? ???????????????
            <br />
            ?????? ??????????????? ?????? ?????? ??? ????????? ?????? ????????? ??????
            <br />
            ???????????? ?????? ?????? ????????? ???????????? ?????????
            <br />
            ?????? ?????? ?????? ?????? ??????????????? ?????????
            <br />
            4?????? ?????? ????????? ???????????? ?????????
            <br />
            ????????? ????????? ?????? ?????? ???????????? ?????? ??????
            <br />
            ?????? ???????????? ??? ???????????? 4??? ?????????
            <br />
            ??????????????? ?????? ?????? ????????? ?????? ???????????????
            <br />
            ?????? ??????????????? ?????? ?????? ?????? ???????????????
            <br />
            ?????? ??????????????? ?????? ?????? ??? ????????? ?????? ????????? ??????
            <br />
            ???????????? ?????? ?????? ????????? ???????????? ?????????
            <br />
            ?????? ?????? ?????? ?????? ??????????????? ?????????
            <br />
            ?????? ?????? ?????? ????????? ????????? ?????? ????????? ?????? ???????????? ??? ????????????
            <br />
            ???????????? ?????? ????????? ????????? ???????????? my love
          </DiaryModalText>
        )}
        <DiaryModalBottom>
          {modalMode === 'write' ? (
            <>
              <DiaryModalCheckWrapper>
                <DiaryModalCheckIcon />
              </DiaryModalCheckWrapper>
              {alertModal && <AlertWrapper>
                <Alert
                  onClose={onClose}
                  closeAlertButton={closeAlertButton}
                /></AlertWrapper>}
              <DiaryModalCancelWrapper onClick={handleAlertButton}>
                <DiaryModalCancelIcon />
              </DiaryModalCancelWrapper>
            </>
          ) : (
            <>
              <DiaryModalShare />
              <DiaryModalEdit />
              <DiaryModalDelete />
            </>
          )
          }
        </DiaryModalBottom>
      </DiaryModalContents>
    </DiaryModalContainer>
  );
};

export default DiaryModal;

const DiaryModalContainer = styled.div`
  width: 920px;
  height: 580px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  background-color: ${colors.white};
  position: relative;
  animation: topmove 0.3s;
  @keyframes topmove {
    0% {
      transform: translateY(5px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

const PhotoContainer = styled.div`
  margin: 30px 0 30px 30px;
  width: 380px;
  height: 520px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  & input[type="file"]{
    position: absolute; 
    width: 1px; 
    height: 1px; 
    padding: 0; 
    margin: -1px; 
    overflow: hidden; 
    clip:rect(0,0,0,0); 
    border: 0; 
  }
`;

const PhotoWrapper = styled.div`
  width: 290px;
  height: 520px;
  border-radius: 10px;
  border: 2px dashed ${colors.gray[300]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UploadButtonWrapper = styled.div`
  opacity: 0.7;
 
  & label{
    color:white;
    background-color: ${colors.amadda};
    height: 2.5em;
    width: 2.5em;
    border-radius: 999px;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
    }
  }
`;

const ImageWrapper = styled.div<{src: string}>`
  width: 300px;
  height: 520px;
  background-image: ${(props)=> `url(${(props.src)})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
 
  &:hover{
    cursor:pointer;
  }
`;

const DiaryModalPhoto = styled.div`
  margin: 30px 0 30px 30px;
  width: 380px;
  height: 520px;
  background-image: url(${testImg});
  background-size: cover;
  border-radius: 10px;
`;

const DiaryModalContents = styled.div`
  margin: 30px 30px 0 60px;
`;

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const WeatherWrapper = styled.div`
  width: 20px;
  color: ${colors.gray[500]};
  margin-left: 480px;
  cursor: pointer;
`;

const SelectWrapper = styled.div`
  z-index: 9999;
  position: absolute;
  right: -40px;
`;

const DiaryTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const DiaryDateWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
`;

const DiaryModalTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  justify-content: flex-start;
`;

const TitleWriteWrapper = styled.div`
  margin-top: 20px;
  font-size: 14px;
  border-bottom: 1px solid ${colors.gray[300]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrite = styled.input`
  padding: 5px;
  width: 350px;
  line-height: 22px;
  font-size: 14px;
  text-align: left;
  border: none;
  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const TextWrite = styled.textarea`
  border: none;
  resize: none;
  text-align: left;
  padding: 5px;
  margin-top: 10px;
  margin-left: 0px;
  font-size: 14px;
  line-height: 25px;
  font-family: Roboto;
  width: 490px;
  height: 370px;
  border: 0px;
  background-color: white;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.gray[400]};
    border-radius: 99px;
  }
  &:focus {
    outline: none;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const DiaryModalText = styled.div`
  text-align: left;
  margin: 25px 30px 0 0;
  font-size: 14px;
  line-height: 25px;
  font-family: Roboto;
  width: 490px;
  height: 400px;
  border: 0px;
  background-color: white;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.gray[400]};
    border-radius: 99px;
  }
`;

const DiaryModalWeather = styled(MuiSunnyIcon)`
  font-size: 10px;
  color: ${colors.orange};
`;

const DiaryModalDate = styled.div`
  margin-right: 10px;
  font-size: 14px;
  color: ${colors.gray[800]};
  font-family: Roboto;
`;

const DiaryModalBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 20px 20px 0px 0;
  position: relative;
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
    color: darkblue;
    transition: all ease 0.5s;
  }
`;

const DiaryModalDelete = styled(MuiDeleteIcon)`
  color: ${colors.gray[800]};
  &:hover {
    cursor: pointer;
    transition: all ease 0.5s;
    color: darkred;
  }
`;

const DiaryModalCheckWrapper = styled.div``;

const DiaryModalCheckIcon = styled(MuiCheckRoundedIcon)`
  color: ${colors.gray[800]};
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    transition: all ease 0.5s;
    color: black;
  }
`;

const DiaryModalCancelWrapper = styled.div``;

const DiaryModalCancelIcon = styled(MuiClearRoundedIcon)`
  color: ${colors.gray[800]};
  color: #af0000;
  &:hover {
    cursor: pointer;
  }
`;

const AlertWrapper = styled.div``;

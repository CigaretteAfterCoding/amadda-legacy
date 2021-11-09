import React from 'react';
import styled from 'styled-components';
import colors from 'Styles/color-variables';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import MuiClearRoundedIcon from '@material-ui/icons/ClearRounded';

interface AlertProps {
  onClose?: () => void;
  closeAlertButton: () => void;
}

const Alert = ({ onClose, closeAlertButton }: AlertProps) => {
  return (
    <AlertContainer>
      <ExitBtn onClick={closeAlertButton}>
        <MuiClearRoundedIcon fontSize="small" />
      </ExitBtn>
      <AlertMessage>
        <CancelMessage>취소하시겠습니까?</CancelMessage>
        <WarningMessage>
          <ErrorOutlineOutlinedIcon fontSize="small" />
            작성한 글은 저장되지 않습니다!
        </WarningMessage>
        <YesOrNoBtn>
          <YesBtn onClick={onClose}>예</YesBtn>
        </YesOrNoBtn>
      </AlertMessage>
    </AlertContainer>
  );
};

export default Alert;

const AlertContainer = styled.div`
  width:200px;
  height:99px;
  position:absolute;
  background-color: ${colors.gray[100]};
  border-radius: 5px;
  top:-110px;
  right:-28px;
  & ::after{
  border-top:10px solid ${colors.gray[100]};
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 0px solid transparent;
  content:"";
  position:absolute;
  bottom:-10px;
  right:30px;
  }
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

const AlertMessage = styled.div`
  font-family: Roboto;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WarningMessage = styled.div`
  margin-top:3px;
  font-size:10px;
  display:flex;
  justify-content: center;
  align-items: center;
  color:${colors.red};
`;

const CancelMessage = styled.div`
  text-align:center;
  font-size:13px;
  font-weight: bold;
`;

const YesOrNoBtn = styled.div`
  margin-top:7px;
  font-size:12px;
  display:flex;
  justify-content: center;
  align-items: center;
`;

const YesBtn = styled.button`
  width:40px;
  margin-bottom:7px;
  border: 1px solid ${colors.gray[800]};
  background-color: transparent;
  border-radius: 30px;
  font-size:11px;
  color: ${colors.gray[900]};
  &:hover{
    color: ${colors.white};
    background-color: ${colors.red};
    border-color:${colors.red};
    cursor:pointer;
  }
`;

const ExitBtn = styled.div`
  width:20px;
  padding-top:4px;
  color:${colors.gray[700]};
  margin-left:172px;
  &:hover{
    cursor:pointer;
  }
`;
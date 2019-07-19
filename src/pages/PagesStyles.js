import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  min-height: calc(100vh - 60px);
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #252525;
  color: #999;
  border-radius: 10px;
  border: solid 1px #050505;

  box-shadow: 0 0 10px #000d;
  
  min-width: 400px;
  min-height: 440px;
  max-width: 400px;
  max-height: 440px;

  overflow: hidden;

  section {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #111;
    color: #fff;

    width: 400px;
    height: 45px;
  }
  

  input[type="file"] {
    width: 360px;
    padding: 10px 0;
    margin: 0;
    border-bottom: solid 1px #151515;

    ::-webkit-file-upload-button {
      background-color: #333;
      color: #fff;
      padding: 10px;

      border-radius: 7px;
      border: solid 1px #151515;
      border-bottom-width: 2px;

      :hover {
        background-color: #373737;
      }

      :active {
        background-color: #151515;
      }
    }
  }

  label.info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 14px;

    width: 360px;
    margin: 10px 0;

    input, textarea {
      background-color: #333;
      color: #fff;

      padding: 10px;
      border-radius: 5px;
      border: solid 1px #151515;
    }

    input, textarea {
      width: 290px;
    }

    textarea {
      resize: none;
      height: 140px;
    }
  }

  label.agree {
    display: flex;
    font-size: 14px;
    margin: 10px;
    align-items: center;

    input {
      margin-right: 10px;
    }
  }

  button {
    background: #ac68ac;
    color: #fff;

    width: 280px;
    height: 50px;
    margin: 10px;

    font-size: 18px;
    font-weight: 400;

    border-radius: 7px;
    border: solid 1px #151515;
    border-bottom-width: 2px;

    :hover {
      background: #ba82ba;
    }

    :active {
      background: #381f38;
    }
  }
`;

export const FormStyledOnLoad = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  position: absolute;
  visibility: ${props => props.visible? 'visible' : 'hidden'};

  background-color: #111;
  color: #fff;

  min-width: 400px;
  min-height: 440px;
  max-width: 400px;
  max-height: 440px;

  .progress-container {
    min-width: 120px;
    min-height: 120px;
    max-width: 120px;
    max-height: 120px;
  }
`;

export const VideoPageStyle = styled.section`
  max-width: 800px;
  padding: 30px 0;

  h5 {
    display: flex;
    flex-direction: row-reverse;
    margin: 5px;
  }
`;

import styled from 'styled-components';

export const VideoCard = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #252525;
  color: #999;
  border: solid 1px #050505;

  border-radius: 10px;
  width: 300px;
  height: 320px;

  cursor: pointer;
  overflow: hidden;

  :hover {
    box-shadow: 0 0 10px #000d;
  }

  :active {
    background-color: #444;
    color: #151515;
  }

  img {
    width: 300px;
    height: 175px;
    margin: 0;
  }

  p {
    font-size: 14px;
    margin-top: 9px;
    margin-right: 9px;
    margin-left: auto;
  }

  h1 {
    margin: auto;
  }
`;

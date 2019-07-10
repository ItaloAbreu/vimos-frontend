import styled from 'styled-components';

export const VideoCard = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #252525;
  color: #999;
  border: solid 1px #050505;

  border-radius: 10px;
  min-width: 220px;
  min-height: 240px;
  max-width: 220px;
  max-height: 240px;

  margin: 5px;

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
    width: 220px;
    height: 130px;
    margin: 0;
  }

  p {
    font-size: 10px;
    margin-top: 9px;
    margin-right: 9px;
    margin-left: auto;
  }

  h1 {
    font-size: 18px;
    padding: 0 10px;
    margin: auto;
    text-align: justify;
    text-align-last: center;
  }
`;

import styled from 'styled-components';

export const VideoCardStyled = styled.section`
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
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    min-width: 220px;
    min-height: 240px;
    max-width: 220px;
    max-height: 240px;
  }

  img {
    width: 220px;
    height: 130px;
    margin: 0;
  }

  p {
    color: #999;
    font-size: 10px;
    margin-top: 9px;
    margin-right: 9px;
    margin-left: auto;
  }

  h1 {
    color: #999;
    font-size: 18px;
    padding: 0 10px;
    margin: auto;
    text-align: center;
    text-align-last: center;
  }
`;

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 60px;

  background: #333;

  section {
    display: flex;
    width: 100%;
    max-width: 640px;
    justify-content: space-between;
    align-items: center;
  }

  .link {
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;

    padding: 0 20px;
    height: 60px;
    margin: 0 60px;

    font-size: 18px;

    color: #fafafa;
    transition: all 0.25s;
  }

  .link:hover {
    background: #ac68ac;
  }

  .link:active {
    background: #caadca;
  }
`;

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 120px;

  background: #333;

  section {
    display: flex;
    width: 100%;
    max-width: 400px;
    justify-content: space-between;
    align-items: center;
  }

  .link {
    display: flex;
    align-items: center;

    padding: 0 20px;
    height: 50px;
    
    margin: 0 20px;

    cursor: pointer;
    font-size: 16px;
    color: #cacaca;
    text-decoration: none;
  }

  .link:hover {
    color: #ac68ac;
    transition: all 0.3s;
  }

`;

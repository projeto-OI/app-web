import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body #__next{
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text[0]};
    font: 400 16px Roboto, sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  main {
    display: flex;
    border-radius: 10px;
    padding: 20px;
    background: ${props => props.theme.colors.backgroundGame};

    width: 100%;
    height: 100%;

    max-width: 1200px;
    max-height: 600px;
    flex-direction: row;

    margin-top: 10px;
    margin-bottom: 10px;

    section.colun{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      min-width: 40%;
      text-align: center;
    }
    section.colun + section.colun{
      min-width: 60%;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    margin-top: 50px;
    li{
      width: 100%;
    }
    li+li{
      margin-top: 15px;
    }
  }

  p{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    max-width: 800px;
    text-indent: 30px;
    text-align: justify;
    padding: 10px 20px;
  }
  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    text-align: center;
    margin-bottom: 20px;
  }
  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    text-align: center;
    padding: 0 10px;
  }
  h3 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    text-align: center;
    margin-bottom: 20px;

    &.normal {
      font-weight: normal;
      font-size: 30px;
    }
  }
  h4 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
  }

  a {
    color: ${props => props.theme.colors.text[0]};
    font-weight: 400;

    :hover {
      color: ${props => props.theme.colors.primary};
      font-weight: 500;
    }
  }


  ul {
    list-style: none;
  }

  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (max-width: 700px) {
    padding: 0 15px;
  }
  }
  .blankSpace {
    width: 100%;
    height: calc(100vh - 497px);
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  section {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 50px 0;

    &.callaction {
      background: ${props => props.theme.colors.callaction.background};
    }
  }


`;

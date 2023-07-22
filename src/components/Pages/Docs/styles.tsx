import { styled } from "@mui/material";

export default styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
`;

export const H1 = styled("h1")`
  color: #ffffff;
  margin: 0 auto;
  text-align: center;
  position: relative;
  font-size: 3.6em;
  line-height: 0.9em;
  & span.title {
    text-shadow: 1px 1px 0px #000000;
    font-weight: bold;
  }
  & .anotation {
    font-size: 0.4em;
    display: block;
    width: 100%;
    text-align: center;
    text-shadow: 1px 1px 0px #000000;
    font-weight: 100;
    & a {
      color: ${({ theme }) => theme.palette.secondary.main};
      text-decoration: none;
    }
    cursor: pointer;
  }
  & small {
    display: block;
    font-weight: 100;
    font-size: 0.6em;
    color: #ff149d;
    text-shadow: 1px 1px 0px ${({ theme }) => theme.palette.customColor[700]};
  }
`;

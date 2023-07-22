import { Button } from "@mui/material";
import WrapperStyles from "./styles";
import { H1 } from "./styles";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

const DocsComponent = () => {
  return (
    <WrapperStyles>
      <H1>
        <span className="title">Typescript Template</span>
        <small>NestJS - Mui - Custom Themes</small>
        <span className="anotation">
          By{" "}
          <a href="https://github.com/johnjaider1000" target="_blank">
            johnjaider1000
          </a>
        </span>
      </H1>

      <Button
        color="custonButtonColor"
        variant="contained"
        size="large"
        sx={{ marginTop: 10 }}
      >
        <RocketLaunchIcon sx={{ marginRight: 1 }} />
        Ir a la documentación
      </Button>
    </WrapperStyles>
  );
};

export default DocsComponent;

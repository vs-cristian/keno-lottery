import { useMemo } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as BackIcon } from "../icons/back.svg";
import { ButtonBase } from "./shared";

const AppHeaderRoot = styled.header`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  padding: 1rem;
`;

const AppHeaderButton = styled(ButtonBase)`
  color: #fff;
  text-transform: capitalize;

  svg {
    font-size: 2.4rem;
    margin-right: 0.5rem;
  }

  &:hover {
    color: #141939;
  }
`;

const AppHeader = () => {
  const { pathname } = useLocation();

  const backPath = useMemo(() => pathname.split("/").slice(0, -1), [pathname]);

  return (
    <AppHeaderRoot>
      {pathname !== "/" && (
        <AppHeaderButton as={Link} to={backPath.join("/")}>
          <BackIcon />
          {backPath[backPath.length - 1] || "Home"}
        </AppHeaderButton>
      )}
    </AppHeaderRoot>
  );
};

export default AppHeader;

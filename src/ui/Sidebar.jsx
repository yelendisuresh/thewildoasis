import React from "react";
import styled from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
const StyledSidebar = styled.header`
  background-color: var(--color-grey-0);
  padding: 3cap 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
};

export default Sidebar;

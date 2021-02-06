import React from "react";
import { ResponsiveContainer } from "recharts";

import styled from "styled-components";

const StyledContainer = styled(ResponsiveContainer)`
  margin: ${(props) => (props.style ? props.style.margin : null)};
  .recharts-wrapper {
    width: 100% !important;
  }
`;

const ResponsiveContainerWrapper = (props) => {
  return <StyledContainer {...props} />;
};

export default ResponsiveContainerWrapper;

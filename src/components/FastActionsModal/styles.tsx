import styled from "styled-components";

const FastActionsHeader = styled.header`
  margin-bottom: 0.875rem;
  font-weight: 500;
`;

const FastActionsContent = styled.article`
  font-family: "Inter", sans-serif;
  padding: 0.875rem 1.125rem 0.5rem;
  font-size: 0.75rem;
  color: #434343;
  line-height: 100%;
`;

const FastActionsBody = styled.div`
  font-weight: 400;
  color: #898989;
  ul {
    padding: 0;
    list-style: none;
    margin: 0;

    li {
      margin-bottom: 0.875rem;

      button {
        background-color: transparent;
        border: none;
        padding: 0;
        color: inherit;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

const FastActionsDivider = styled.hr`
  margin: 0 0 0.75rem;
  border: 1px solid #898989;
`;

export {
  FastActionsHeader,
  FastActionsContent,
  FastActionsBody,
  FastActionsDivider,
};

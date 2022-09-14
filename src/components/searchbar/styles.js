import styled, { css, keyframes } from "styled-components";
import SearchIcon from "../searchicons/search";
import ArrowRightIcon from "../searchicons/arrowright";

export const Container = styled.div`
  position: relative;
  right: 50px;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  border-radius: 50px;
  border: 2px solid #3927B1;
  padding: 7px;
  background: #222831;
  transition: all 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ hover }) =>
    hover &&
    css`
      width: 100%;
      border: 2px solid #3224AFCC;

      @media (min-width: 768px) {
        width: 400%;
      }
    `}
`;

export const SearchInput = styled.input`
  position: absolute;
  width: 95%;
  height: 20px;
  line-height: 30px;
  outline: 0;
  border: 0;
  font-size: .9rem;
  border-radius: 20px;
  padding: 0 10px;
  margin: 2rem;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  display: ${(props) => (props.showSearchInput ? "block" : "none")};
`;

/** icons */
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const IconCommonCss = css`
  height: 1rem;
  width: 1.25rem;
  fill: #C46BD6;
  animation: ${fadeIn} 1s linear;
`;

export const IconMagnifyingGlass = styled(SearchIcon)`
  ${IconCommonCss}
`;

export const IconRightArrow = styled(ArrowRightIcon)`
  ${IconCommonCss}
  align-self: flex-end;
  cursor: pointer;
  &:hover {
    fill: #3927B1;
  }
`;

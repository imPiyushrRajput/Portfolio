import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledFooter = styled.footer`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
  background-color: rgb(2, 12, 27);
     margin-bottom: -6rem;
`;



const StyledCredit = styled.div`
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;

  a {
    padding: 10px;
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0 7px;
    }
    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <StyledCredit tabindex="-1">
      <a href="https://github.com/imPiyushrRajput/Portfolio" target="_blank" rel="noreferrer">
        <div>Designed &amp; Built by Piyush Rajput</div>
      </a>
    </StyledCredit>
  </StyledFooter>
);

Footer.propTypes = {
  githubInfo: PropTypes.object,
};

export default Footer;

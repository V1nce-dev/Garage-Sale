import styled from "styled-components";

const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Github = styled.a`
  display: flex;
  text-align: center;
  color: black;
  text-decoration: none;
  border-radius: 1rem;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  background: white;
  transition: 0.2s all ease-out;
  &:hover {
    background: #f4f7fa;
  }
`;

const Logo = styled.svg`
  margin-right: 5px;
  vertical-align: middle;
  height: 20px;
  width: auto;
  & > path {
    stroke: black !important;
    stroke-width: 1.5;
    stroke-linecap: round;
  }
`;

const HomePage = () => {
  return (
    <Container>
      <Github href="https://github.com/V1nce-dev">
        <span>
          <Logo viewBox="0 0 64 64">
            <path
              id="github"
              d="M32.029,8.345c-13.27,0 -24.029,10.759 -24.029,24.033c0,10.617 6.885,19.624 16.435,22.803c1.202,0.22 1.64,-0.522 1.64,-1.16c0,-0.569 -0.02,-2.081 -0.032,-4.086c-6.685,1.452 -8.095,-3.222 -8.095,-3.222c-1.093,-2.775 -2.669,-3.514 -2.669,-3.514c-2.182,-1.492 0.165,-1.462 0.165,-1.462c2.412,0.171 3.681,2.477 3.681,2.477c2.144,3.672 5.625,2.611 6.994,1.997c0.219,-1.553 0.838,-2.612 1.526,-3.213c-5.336,-0.606 -10.947,-2.669 -10.947,-11.877c0,-2.623 0.937,-4.769 2.474,-6.449c-0.247,-0.608 -1.072,-3.051 0.235,-6.36c0,0 2.018,-0.646 6.609,2.464c1.917,-0.533 3.973,-0.8 6.016,-0.809c2.041,0.009 4.097,0.276 6.017,0.809c4.588,-3.11 6.602,-2.464 6.602,-2.464c1.311,3.309 0.486,5.752 0.239,6.36c1.54,1.68 2.471,3.826 2.471,6.449c0,9.232 -5.62,11.263 -10.974,11.858c0.864,0.742 1.632,2.208 1.632,4.451c0,3.212 -0.029,5.804 -0.029,6.591c0,0.644 0.432,1.392 1.652,1.157c9.542,-3.185 16.421,-12.186 16.421,-22.8c0,-13.274 -10.76,-24.033 -24.034,-24.033"
            ></path>{" "}
          </Logo>
        </span>{" "}
        Check out the Github
      </Github>
    </Container>
  );
};

export default HomePage;

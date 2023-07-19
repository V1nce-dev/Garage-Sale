import styled from "styled-components";

const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60rem;
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

const Header = styled.h1`
  font-size: 70px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  text-align: center;
  margin: auto;
`;

const Text = styled.h6`
  font-size: 20px;
  font-weight: normal;
  font-family: sans-serif;
  margin-top: 10px;
  color: #909296;
`;

const PreviewImage = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  width: 100%;
`;

const CategoryContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  background-image: linear-gradient(#f3f3f3, #f4f7fa);
  margin-top: 50px;
`;

const Category = styled.a`
  cursor: pointer;
  position: relative;
  background: white;
  border-radius: 10px;
  height: 15rem;
  width: 15rem;
  box-shadow: 0px 0px 3px 1px gray;
  margin: auto;
  transition: 0.2s all ease-out;
  &:hover {
    background: lightgray;
  }
`;

const Fashion = styled(Category)`
  margin-left: 15rem;
`;
const Electronics = styled(Category)``;
const Accessories = styled(Category)``;
const Furniture = styled(Category)`
  margin-right: 15rem;
`;

const Svg = styled.svg`
  height: 50px;
  width: 50px;
  margin-top: 10px;
  margin-left: 15px;
  border: 1px solid lightgray;
  border-radius: 50%;
`;

const FashionSvg = styled(Svg)``;
const ElectronicSvg = styled(Svg)``;
const AccessorieSvg = styled(Svg)``;
const FurnitureSvg = styled(Svg)``;

const CategoryHeader = styled.h1`
  margin-left: 15px;
  font-size: larger;
  font-family: sans-serif;
`;

const FashionHeader = styled(CategoryHeader)``;
const ElectronicsHeader = styled(CategoryHeader)``;
const AccessoriesHeader = styled(CategoryHeader)``;
const FurnitureHeader = styled(CategoryHeader)``;

const CategoryText = styled.h1`
  margin-left: 15px;
  font-size: 15px;
  font-weight: normal;
  font-family: sans-serif;
  color: #909296;
`;
const FashionText = styled(CategoryText)``;
const ElectronicsText = styled(CategoryText)``;
const AccessoriesText = styled(CategoryText)``;
const FurnitureText = styled(CategoryText)``;

const CreateContainer = styled.div`
  display: flex;
  width: 100%;
  background: #f4f7fa;
`;

const Create = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;
  height: 15rem;
  margin-left: 15rem;
  margin-right: 15rem;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CreateHeader = styled.h1`
  font-family: sans-serif;
`;

const CreateButton = styled.a`
  border-radius: 5px;
  padding: 10px;
  background: white;
  transition: 0.2s all ease-out;
  &:hover {
    background: #f4f7fa;
  }
`;

const HomePage = () => {
  return (
    <div>
      <Container>
        <HeaderContainer>
          <Github href="https://github.com/V1nce-dev">
            <span>
              <Logo viewBox="0 0 64 64">
                <path d="M32.029,8.345c-13.27,0 -24.029,10.759 -24.029,24.033c0,10.617 6.885,19.624 16.435,22.803c1.202,0.22 1.64,-0.522 1.64,-1.16c0,-0.569 -0.02,-2.081 -0.032,-4.086c-6.685,1.452 -8.095,-3.222 -8.095,-3.222c-1.093,-2.775 -2.669,-3.514 -2.669,-3.514c-2.182,-1.492 0.165,-1.462 0.165,-1.462c2.412,0.171 3.681,2.477 3.681,2.477c2.144,3.672 5.625,2.611 6.994,1.997c0.219,-1.553 0.838,-2.612 1.526,-3.213c-5.336,-0.606 -10.947,-2.669 -10.947,-11.877c0,-2.623 0.937,-4.769 2.474,-6.449c-0.247,-0.608 -1.072,-3.051 0.235,-6.36c0,0 2.018,-0.646 6.609,2.464c1.917,-0.533 3.973,-0.8 6.016,-0.809c2.041,0.009 4.097,0.276 6.017,0.809c4.588,-3.11 6.602,-2.464 6.602,-2.464c1.311,3.309 0.486,5.752 0.239,6.36c1.54,1.68 2.471,3.826 2.471,6.449c0,9.232 -5.62,11.263 -10.974,11.858c0.864,0.742 1.632,2.208 1.632,4.451c0,3.212 -0.029,5.804 -0.029,6.591c0,0.644 0.432,1.392 1.652,1.157c9.542,-3.185 16.421,-12.186 16.421,-22.8c0,-13.274 -10.76,-24.033 -24.034,-24.033"></path>{" "}
              </Logo>
            </span>{" "}
            Follow along on Github
          </Github>
          <Header>An e-ecommerce platform out your garage.</Header>
          <Text>
            Buy and sell products made from others in your neighborhood
          </Text>
          <PreviewImage>PlaceHolder</PreviewImage>
        </HeaderContainer>
      </Container>
      <CategoryContainer>
        <Fashion>
          <FashionSvg viewBox="0 0 48 48" fill="#000000">
            <path d="M40.7,20.4l-4-3.9V43H11.3V16.5l-4,3.9L1,14.1,9.2,5H19A5.2,5.2,0,0,0,29,5h9.8L47,14.1Z"></path>{" "}
          </FashionSvg>
          <FashionHeader>Fashion</FashionHeader>
          <FashionText>
            Explore, buy, and sell a diverse range of fashion-forward products.
          </FashionText>
        </Fashion>
        <Electronics>
          <ElectronicSvg viewBox="0 0 48 48">
            <path d="M0 0h48v48H0z" fill="none"></path>{" "}
            <path d="M8,40h32c2.2,0,4-1.8,4-4v-2c0-2.2-1.8-4-4-4V12c0-2.2-1.8-4-4-4H12c-2.2,0-4,1.8-4,4v18c-2.2,0-4,1.8-4,4v2 C4,38.2,5.8,40,8,40z M8,34h4h24h4v2H8V34z"></path>{" "}
          </ElectronicSvg>
          <ElectronicsHeader>Electronics</ElectronicsHeader>
          <ElectronicsText>
            Dive into the world of technology and discover a wide range of
            innovative gadgets and devices.
          </ElectronicsText>
        </Electronics>
        <Accessories>
          <AccessorieSvg viewBox="0 0 24 24">
            <path d="M18,12a6,6,0,1,0-6,6A6,6,0,0,0,18,12Zm-3.293,2.707a1,1,0,0,1-1.414,0l-2-2A1,1,0,0,1,11,12V10a1,1,0,0,1,2,0v1.586l1.707,1.707A1,1,0,0,1,14.707,14.707ZM15,2a1,1,0,0,1,1,1V5.082a7.935,7.935,0,0,0-8,0V3A1,1,0,0,1,9,2ZM12,20a7.94,7.94,0,0,0,4-1.082V21a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V18.918A7.94,7.94,0,0,0,12,20Z"></path>
          </AccessorieSvg>
          <AccessoriesHeader>Accessories</AccessoriesHeader>
          <AccessoriesText>
            Find the perfect finishing touches for your style with our curated
            collection of accessories.
          </AccessoriesText>
        </Accessories>
        <Furniture>
          <FurnitureSvg viewBox="-1.5 0 19 19">
            <path d="M2.461 7.02a1.61 1.61 0 0 1 1.61 1.611v2.456h7.857V8.63a1.61 1.61 0 1 1 1.988 1.566v4.634a.476.476 0 0 1-.475.475H2.559a.476.476 0 0 1-.475-.475v-4.634A1.61 1.61 0 0 1 2.46 7.02zm1.059-.894a2.68 2.68 0 0 0-.227-.084V4.669A1.111 1.111 0 0 1 4.4 3.56h7.198a1.111 1.111 0 0 1 1.108 1.109v1.373a2.679 2.679 0 0 0-.227.084 2.717 2.717 0 0 0-1.66 2.505v1.347H5.18V8.631a2.72 2.72 0 0 0-1.66-2.505z"></path>
          </FurnitureSvg>
          <FurnitureHeader>Furniture</FurnitureHeader>
          <FurnitureText>
            Discover a world of stylish and functional furniture pieces to
            elevate your home.
          </FurnitureText>
        </Furniture>
      </CategoryContainer>
      <CreateContainer>
        <Create>
          <CreateHeader>Interested in listing your own products?</CreateHeader>
          <CreateButton>Organize Your Own</CreateButton>
        </Create>
      </CreateContainer>
    </div>
  );
};

export default HomePage;

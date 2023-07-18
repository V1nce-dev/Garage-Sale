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
const Category = styled.div`
  background: white;
  border-radius: 10px;
  height: 15rem;
  width: 15rem;
  box-shadow: 0px 0px 3px 1px gray;
  margin: auto;
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
`;

const FashionSvg = styled(Svg)`
  margin-left: 0;
`;

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
          <FashionSvg viewBox="0 0 24 24">
            {" "}
            <path d="M12,22.41l5.13-5.13L14.07,7.09,16.62,2H7.38L9.93,7.09,6.87,17.28Zm0-2.83L9.13,16.72,11.74,8h.51l2.61,8.72ZM13.38,4l-1,2h-.76l-1-2Z"></path>{" "}
          </FashionSvg>
          <FashionHeader>Fashion</FashionHeader>
          <FashionText>
            Explore, buy, and sell a diverse range of fashion-forward products.
          </FashionText>
        </Fashion>
        <Electronics>
          <ElectronicSvg viewBox="0 0 512 512">
            <path d="M503.467,384h-8.533V76.8c0-18.825-15.309-34.133-34.133-34.133H51.2c-18.825,0-34.133,15.309-34.133,34.133V384H8.533 C3.823,384,0,387.814,0,392.533v25.515c0,28.271,23.006,51.285,51.285,51.285h409.429c28.279,0,51.285-23.014,51.285-51.285 v-25.515C512,387.814,508.177,384,503.467,384z M51.2,85.333c0-4.719,3.823-8.533,8.533-8.533h392.533 c4.71,0,8.533,3.814,8.533,8.533V358.4c0,4.719-3.823,8.533-8.533,8.533H59.733c-4.71,0-8.533-3.814-8.533-8.533V85.333z M494.933,418.048c0,18.867-15.351,34.219-34.219,34.219H51.285c-18.867,0-34.219-15.351-34.219-34.219v-16.981H25.6h460.8h8.533 V418.048z"></path>{" "}
            <path d="M145.067,418.132H59.733c-4.71,0-8.533,3.814-8.533,8.533s3.823,8.533,8.533,8.533h85.333 c4.71,0,8.533-3.814,8.533-8.533S149.777,418.132,145.067,418.132z"></path>{" "}
            <path d="M452.267,418.132h-85.333c-4.71,0-8.533,3.814-8.533,8.533s3.823,8.533,8.533,8.533h85.333 c4.71,0,8.533-3.814,8.533-8.533S456.977,418.132,452.267,418.132z"></path>{" "}
            <path d="M264.533,418.132h-17.067c-4.71,0-8.533,3.814-8.533,8.533s3.823,8.533,8.533,8.533h17.067 c4.71,0,8.533-3.814,8.533-8.533S269.244,418.132,264.533,418.132z"></path>{" "}
            <path d="M298.941,305.236c27.802-14.379,47.531-42.197,50.492-74.837h-33.886C314.575,260.744,308.456,286.924,298.941,305.236z"></path>{" "}
            <path d="M243.321,314.772c1.382,0.188,2.748,0.401,4.147,0.529v-84.907h-33.954C215.136,275.331,229.292,309.047,243.321,314.772 z"></path>{" "}
            <path d="M264.533,315.299c1.399-0.128,2.765-0.341,4.147-0.529c14.029-5.717,28.186-39.441,29.807-84.369h-33.954V315.299z"></path>{" "}
            <path d="M268.679,128.957c-1.382-0.188-2.748-0.401-4.147-0.529v84.907h33.954C296.864,168.399,282.708,134.683,268.679,128.957z "></path>{" "}
            <path d="M298.941,138.493c9.515,18.313,15.633,44.493,16.606,74.837h33.886C346.472,180.691,326.743,152.872,298.941,138.493z"></path>{" "}
            <path d="M443.733,93.865H68.267v256h375.467V93.865z M272.555,331.424c-2.611,0.819-5.274,1.374-8.021,1.374 c-0.606,0-1.143-0.222-1.715-0.35c-2.261,0.145-4.514,0.35-6.818,0.35s-4.557-0.205-6.818-0.35 c-0.572,0.128-1.109,0.35-1.715,0.35c-2.748,0-5.41-0.555-8.021-1.374c-53.325-8.038-94.379-54.033-94.379-109.56 c0-55.526,41.054-101.521,94.379-109.559c2.611-0.819,5.274-1.374,8.021-1.374c0.606,0,1.143,0.222,1.715,0.35 c2.27-0.145,4.514-0.35,6.818-0.35s4.548,0.205,6.818,0.35c0.572-0.128,1.109-0.35,1.715-0.35c2.748,0,5.41,0.555,8.021,1.374 c53.325,8.038,94.379,54.033,94.379,109.559C366.933,277.391,325.879,323.386,272.555,331.424z"></path>{" "}
            <path d="M162.566,213.332h33.886c0.973-30.345,7.091-56.525,16.606-74.837C185.256,152.873,165.527,180.692,162.566,213.332z"></path>{" "}
            <path d="M247.465,128.433c-1.399,0.12-2.765,0.333-4.147,0.521c-14.029,5.726-28.186,39.45-29.807,84.378h33.954V128.433z"></path>{" "}
            <path d="M162.566,230.398c2.961,32.64,22.69,60.459,50.492,74.837c-9.515-18.313-15.633-44.493-16.606-74.837H162.566z"></path>{" "}
          </ElectronicSvg>
          <ElectronicsHeader>Electronics</ElectronicsHeader>
          <ElectronicsText>
            Dive into the world of technology and discover a wide range of
            innovative gadgets and devices.
          </ElectronicsText>
        </Electronics>
        <Accessories>
          <AccessorieSvg viewBox="0 0 24 24">
            {" "}
            <path d="M10.0615 7.94004C10.3426 7.35261 10.5 6.69469 10.5 6C10.5 3.51472 8.48528 1.5 6 1.5C3.51472 1.5 1.5 3.51472 1.5 6C1.5 8.48528 3.51472 10.5 6 10.5C6.69475 10.5 7.35273 10.3426 7.94021 10.0614L9.87878 12L7.94018 13.9386C7.35271 13.6574 6.69474 13.5 6 13.5C3.51472 13.5 1.5 15.5147 1.5 18C1.5 20.4853 3.51472 22.5 6 22.5C8.48528 22.5 10.5 20.4853 10.5 18C10.5 17.3053 10.3426 16.6474 10.0615 16.0599L13.0553 13.0661C13.0571 13.0643 13.059 13.0625 13.0608 13.0607C13.0626 13.0588 13.0644 13.057 13.0662 13.0552L21.4143 4.70712C21.8048 4.3166 21.8048 3.68343 21.4143 3.29291L20.7072 2.5858C20.3167 2.19528 19.6835 2.19528 19.293 2.5858L12.0001 9.87866L10.0615 7.94004ZM6 4.5C5.17157 4.5 4.5 5.17157 4.5 6C4.5 6.82843 5.17157 7.5 6 7.5C6.39548 7.5 6.75522 7.34695 7.02321 7.09684C7.03503 7.08418 7.04711 7.07168 7.05946 7.05933C7.07178 7.04701 7.08426 7.03495 7.0969 7.02314C7.34697 6.75516 7.5 6.39545 7.5 6C7.5 5.17157 6.82843 4.5 6 4.5ZM6 16.5C5.17157 16.5 4.5 17.1716 4.5 18C4.5 18.8284 5.17157 19.5 6 19.5C6.82843 19.5 7.5 18.8284 7.5 18C7.5 17.6125 7.35307 17.2593 7.11188 16.9931L7.00686 16.8881C6.74067 16.6469 6.3875 16.5 6 16.5Z"></path>{" "}
            <path d="M14.2928 13.5858C14.6834 13.1953 15.3165 13.1953 15.7071 13.5858L21.4142 19.2929C21.8047 19.6834 21.8047 20.3166 21.4142 20.7071L20.7071 21.4142C20.3165 21.8048 19.6834 21.8048 19.2928 21.4142L13.5857 15.7071C13.1952 15.3166 13.1952 14.6834 13.5857 14.2929L14.2928 13.5858Z"></path>
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
    </div>
  );
};

export default HomePage;

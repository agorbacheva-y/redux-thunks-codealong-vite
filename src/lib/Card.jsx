import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  border: 1px solid green;
`

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`

const SecondaryText = styled.p`
  margin: 0;
  color: gray;
`

const Thumbnail = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${(props) => props.url });
  background-size: cover;
  margin-right: 10px;
`

const TitleBar = styled.div`
  display: flex;
  align-items: center;
`



const Card = ({ title, secondaryText, thumbnailUrl }) => {
  return (
    <Container>
      <TitleBar>
        {thumbnailUrl && <Thumbnail url={thumbnailUrl} />}
        <div>
          {title && <Title>{title}</Title>}
          {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
        </div>
      </TitleBar>
    </Container>
  );
};

export default Card;

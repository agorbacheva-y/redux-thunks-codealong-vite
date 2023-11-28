import styled from "styled-components";

const Container = styled.div`
  border-radius: 10px;
  background: #fff;
  border: 1px solid green;
  margin-bottom: 20px;
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

const CoverImage = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`

const Content = styled.div`
  padding: 20px:  
`

const ChildrenContent = styled.div`
  background: lightgray;
  padding: 10px;
`

const Card = ({ title, secondaryText, thumbnailUrl, coverImage, className, children }) => {
  return (
    <Container className={className}>
      {coverImage && <CoverImage src={coverImage} />}
      <Content>
        <TitleBar>
          {thumbnailUrl && <Thumbnail url={thumbnailUrl} />}
          <div>
            {title && <Title>{title}</Title>}
            {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
          </div>
        </TitleBar>

        {children && <ChildrenContent>{children}</ChildrenContent>}
      </Content>
    </Container>
  );
};

export default Card;

import styled from "styled-components";

const Container = styled.div`
  height: 72dp;
  display: flex;
  gap: 16px;
  margin: 8px 16px 8px 16px;
`

const Headline = styled.h3``

const SupportingText = styled.p``

const LeadingImage = styled.img`
  width: 56dp;
  height: 56dp;
`

const Divider = styled.hr`
  height: 1dp;
  color: #79747E;
  margin: 0 16px;
`

const List = () => {
  return (
    <div>
      <Container>
        <LeadingImage src="https://picsum.photos/150/100" />
        <div>
          <Headline>headline</Headline>
          <SupportingText>supporting text</SupportingText>
        </div>
      </Container>
      <Divider></Divider>
    </div>
  );
};

export default List;

// https://m3.material.io/components/lists/specs
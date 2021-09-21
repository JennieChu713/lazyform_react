import React from "react";
import styled from "styled-components";

// CSS in JS
const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 10% auto;
  flex-grow: 1;
`;

// form area
const Form = styled.section`
  border-top: 6px solid #fad312;
  box-shadow: 1.8px 2.4px 5px 0 rgba(0, 0, 0, 0.3);
  background-color: white;
`;
const FormContent = styled.div`
  width: 90%;
  margin: 10% auto;
`;

// form title
const FormTitle = styled.h1`
  font-size: 2rem;
`;
const FormDesc = styled.div`
  margin: 7% 0;
`;
const FormDescItem = styled.p`
  margin: 10px 0;
  &:not(:last-child) {
    font-size: 16px;
  }
  &:last-child {
    font-size: 18px;
    color: #e74149;
    margin: 20px 0;
  }
  &:last-child::before {
    content: "* ";
    color: #e74149;
  }
`;
const FormTitleGroup = () => {
  const descriptions = [
    "活動日期：2020/12/10 ~ 2020/12/11",
    "活動地點：台北市大安區新生南路二段1號",
    "必填",
  ];
  const desc = "desc";
  let id = 0;
  const descListout = descriptions.map((desc) => {
    ++id;
    return <FormDescItem key={`${desc}-${id}`}>{desc}</FormDescItem>;
  });

  return (
    <header>
      <FormTitle>新拖延運動報名表單</FormTitle>
      <FormDesc>{descListout}</FormDesc>
    </header>
  );
};

// form filling
const FormFillingWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 2rem 0;
`;
const FormFillingContainer = styled.div``;
const FormFillingLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 4%;
  &::after {
    content: " *";
    color: #e74149;
  }
`;
const FormFillingInput = styled.input`
  &[type="text"] {
    height: 30px;
    padding: 0 5px;
  }
`;
const FormFillingTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  &::after {
    content: " *";
    color: #e74149;
  }
`;
const UserFilling = () => {
  const fillingData = [
    {
      identity: "name",
      context: "暱稱",
      holdertext: "您的回答",
    },
    {
      identity: "email",
      context: "電子郵件",
      holdertext: "您的電子郵件",
    },
    {
      identity: "phone",
      context: "手機號碼",
      holdertext: "您的手機號碼",
    },
  ];
  const fillInStructure = fillingData.map((section) => {
    return (
      <FormFillingWrapper key={section.identity}>
        <FormFillingLabel for={section.identity}>
          {section.context}
        </FormFillingLabel>
        <FormFillingInput
          type="text"
          id={section.identity}
          name={section.identity}
          placeholder={section.holdertext}
        />
      </FormFillingWrapper>
    );
  });
  return <FormFillingContainer>{fillInStructure}</FormFillingContainer>;
};
const ChoiceSelecting = () => {
  const radioSelectData = [
    {
      subject: "choose-type",
      identity: "imagination",
      context: "躺在床上用想像力實作",
    },
    {
      subject: "choose-type",
      identity: "ready-made",
      context: "趴在地上滑手機找現成的",
    },
  ];

  const choiceStructure = radioSelectData.map((choice) => {
    return (
      <>
        <FormFillingInput
          type="radio"
          name={choice.subject}
          id={choice.identity}
          value={choice.context}
        />
        <FormFillingLabel for={choice.identity}>
          {choice.context}
        </FormFillingLabel>
      </>
    );
  });
  return (
    <FormFillingWrapper>
      <FormFillingTitle>報名類型</FormFillingTitle>
      {choiceStructure}
    </FormFillingWrapper>
  );
};
const EventFilling = () => {
  return (
    <FormFillingWrapper>
      <FormFillingLabel for="informed">怎麼知道這個活動的？</FormFillingLabel>
      <FormFillingInput
        type="text"
        id="informed"
        name="informed"
        placeholder="您的回答"
      />
    </FormFillingWrapper>
  );
};
const OptionFilling = () => {
  return (
    <FormFillingWrapper>
      <FormFillingTitle>其他</FormFillingTitle>
      <FormFillingLabel for="optionFilling">對活動的一些建議</FormFillingLabel>
      <FormFillingInput
        type="text"
        id="optionFilling"
        name="optionFilling"
        placeholder="您的回答"
      />
    </FormFillingWrapper>
  );
};
const FormFillingGroup = () => {
  return (
    <form>
      <UserFilling />
      <ChoiceSelecting />
      <EventFilling />
      <OptionFilling />
      <FormFillingInput type="submit" />
    </form>
  );
};

function App() {
  return (
    <Container>
      <Form>
        <FormContent>
          <FormTitleGroup />
          <FormFillingGroup />
        </FormContent>
      </Form>
    </Container>
  );
}

export default App;

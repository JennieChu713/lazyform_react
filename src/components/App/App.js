import React, { useContext, createContext } from "react";
import FormTitle from "../Form/FormTitle";
import ErrorMessage from "../ErrorMessage";
import fillingComponents from "../Form/FillingComponents";
import generalComponents from "../GeneralComponents";
import useForms from "../../useForms";

// CSS in JS
// general components
const { Container, Form, FormContent, Footer } = generalComponents();
// form filling components
const {
  FormFillingWrapper,
  FormFillingContainer,
  FormFillingLabel,
  FormFillingInput,
  FormFillingTitle,
  OptionFillingTitle,
  CautionMessage,
} = fillingComponents();

const UserFilling = () => {
  const { handleInputChange, handleFormFocus, messageError } =
    useContext(FillingHandleContext);
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
        <FormFillingLabel htmlFor={section.identity}>
          {section.context}
        </FormFillingLabel>
        <FormFillingInput
          type="text"
          id={section.identity}
          name={section.identity}
          placeholder={section.holdertext}
          onChange={handleInputChange}
          onFocus={handleFormFocus}
        />
        {messageError[section.identity] && (
          <ErrorMessage>{messageError[section.identity]}</ErrorMessage>
        )}
      </FormFillingWrapper>
    );
  });
  return <FormFillingContainer>{fillInStructure}</FormFillingContainer>;
};
const ChoiceSelecting = () => {
  const { handleInputChange, messageError, handleFormFocus } =
    useContext(FillingHandleContext);
  const { chooseType } = messageError;
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
          onChange={handleInputChange}
          onFocus={handleFormFocus}
        />
        <FormFillingLabel htmlFor={choice.identity}>
          {choice.context}
        </FormFillingLabel>
      </>
    );
  });
  return (
    <FormFillingWrapper>
      <FormFillingTitle>報名類型</FormFillingTitle>
      {choiceStructure}
      {chooseType && <ErrorMessage>{chooseType}</ErrorMessage>}
    </FormFillingWrapper>
  );
};
const EventFilling = () => {
  const { handleInputChange, messageError, handleFormFocus } =
    useContext(FillingHandleContext);
  const { notice } = messageError;
  return (
    <FormFillingWrapper>
      <FormFillingLabel htmlFor="notice">怎麼知道這個活動的？</FormFillingLabel>
      <FormFillingInput
        type="text"
        id="notice"
        name="notice"
        placeholder="您的回答"
        onChange={handleInputChange}
        onFocus={handleFormFocus}
      />
      {notice && <ErrorMessage>{notice}</ErrorMessage>}
    </FormFillingWrapper>
  );
};
const OptionFilling = () => {
  const { handleInputChange } = useContext(FillingHandleContext);
  return (
    <FormFillingWrapper>
      <OptionFillingTitle>其他</OptionFillingTitle>
      <FormFillingLabel htmlFor="optionFilling">
        對活動的一些建議
      </FormFillingLabel>
      <FormFillingInput
        type="text"
        id="optionFilling"
        name="optionFilling"
        placeholder="您的回答"
        onChange={handleInputChange}
      />
    </FormFillingWrapper>
  );
};
const FormFillingGroup = () => {
  const { handleSubmit, filledInfo } = useContext(FillingHandleContext);
  return (
    <form onSubmit={handleSubmit}>
      <UserFilling />
      <ChoiceSelecting />
      <EventFilling />
      <OptionFilling />
      <FormFillingInput type="submit" disabled={filledInfo && true} />
      <CautionMessage>請勿透過表單送出您的密碼。</CautionMessage>
    </form>
  );
};

const FillingHandleContext = createContext();

// front render
function App() {
  const {
    handleSubmit,
    handleFormFocus,
    handleInputChange,
    messageError,
    filledInfo,
  } = useForms();
  return (
    <>
      <Container>
        <Form>
          <FormContent>
            <FormTitle />
            <FillingHandleContext.Provider
              value={{
                handleSubmit,
                handleInputChange,
                handleFormFocus,
                messageError,
                filledInfo,
              }}
            >
              <FormFillingGroup />
            </FillingHandleContext.Provider>
          </FormContent>
        </Form>
      </Container>
      <Footer>© 2020 Copyright. All rights Reserved.</Footer>
    </>
  );
}

export default App;

import styled from "styled-components";

// form filling
export default function fillingComponents() {
  const FormFillingWrapper = styled.article`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 2rem 0;
  `;
  const FormFillingContainer = styled.div``;
  const FormFillingLabel = styled.label`
    font-size: 1.2rem;
    margin-bottom: 4%;
    &:not([for="imagination"], [for="ready-made"], [for="optionFilling"])::after {
      content: " *";
      color: #e74149;
    }
    &[for="imagination"],
    &[for="ready-made"],
    &[for="optionFilling"] {
      font-size: 1rem;
    }
  `;
  const FormFillingInput = styled.input`
    &[type="text"] {
      height: 30px;
      padding: 0 5px;
    }
    &[type="text"]:focus {
      outline-color: #fad312;
    }

    &[type="submit"] {
      width: 90px;
      background-color: #fad312;
      padding: 13px 13px;
      border-radius: 3px;
      border: 1px solid transparent;
      margin: 4% 0 2%;
      font-size: 15px;
      cursor: pointer;
      transition: all 0.3s;
    }
    &[type="submit"]:hover {
      border-color: #a04646;
      color: #a04646;
      background-color: transparent;
    }
    &[type="submit"]:disabled,
    &[type="submit"]:disabled:hover {
      border-color: #ccc;
      color: #ccc;
      background-color: transparent;
    }

    &[type="radio"]:checked,
    &[type="radio"]:not(:checked) {
      position: absolute;
      left: -9999px;
      opacity: 0;
    }
    &[type="radio"]:checked + label,
    &[type="radio"]:not(:checked) + label {
      position: relative;
      padding-left: 25px;
      cursor: pointer;
    }
    &[type="radio"]:checked + label::before,
    &[type="radio"]:not(:checked) + label::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 18px;
      height: 18px;
      border: 1px solid #ddd;
      border-radius: 100%;
      background-color: #fff;
    }
    &[type="radio"]:checked + label::after,
    &[type="radio"]:not(:checked) + label::after {
      content: "";
      width: 12px;
      height: 12px;
      background-color: #a04646;
      position: absolute;
      top: 4px;
      left: 4px;
      border-radius: 100%;
      transition: all 0.2s ease;
    }
    &[type="radio"]:not(:checked) + label::after {
      opacity: 0;
      transform: scale(0);
    }
    &[type="radio"]:checked + label::after {
      opacity: 1;
      transform: scale(1);
    }
  `;
  const FormFillingTitle = styled.div`
    font-size: 1.2rem;
    margin-bottom: 4%;
    &::after {
      content: " *";
      color: #e74149;
    }
  `;
  const OptionFillingTitle = styled.div`
    font-size: 1.2rem;
    margin-bottom: 4%;
  `;
  const CautionMessage = styled.p`
    font-size: 0.8rem;
    font-weight: 700;
  `;
  return {
    FormFillingWrapper,
    FormFillingContainer,
    FormFillingLabel,
    FormFillingInput,
    FormFillingTitle,
    OptionFillingTitle,
    CautionMessage,
  };
}

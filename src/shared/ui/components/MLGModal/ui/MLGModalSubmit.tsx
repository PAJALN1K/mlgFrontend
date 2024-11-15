import React, { FC } from "react";
import { MLGButton } from "src/shared/ui/components/MLGButton";
import { MLGModal } from "./MLGModal";

interface IMLGModalSubmit {
  active: boolean;
  closeModal: () => void;
  heading: string;
  textContent: string;
  submitBtnText: string;
  submitBtnOnClick: () => void;
  cancelBtnText: string;
}

export const MLGModalSubmit: FC<IMLGModalSubmit> = ({
  active,
  closeModal,
  heading,
  textContent,
  submitBtnText,
  submitBtnOnClick,
  cancelBtnText
}) => {
  return (
    <MLGModal classes={["MLGModalSubmit"]} active={active} closeModal={closeModal}>
      <h3 className="MLGModal-Heading">{heading}</h3>
      <span className="MLGModal-Text">{textContent}</span>
      <div className="MLGModal-Btns">
        <MLGButton
          onClick={closeModal}
          btnType="reset"
          classes={["MLGModal-Btn", "MLGModal-CancelBtn", "MLGButton_empty"]}
        >
          {cancelBtnText}
        </MLGButton>
        <MLGButton
          onClick={submitBtnOnClick}
          btnType="submit"
          classes={["MLGModal-Btn", "MLGModal-SubmitBtn", ""]}
        >
          {submitBtnText}
        </MLGButton>
      </div>
    </MLGModal>
  );
};

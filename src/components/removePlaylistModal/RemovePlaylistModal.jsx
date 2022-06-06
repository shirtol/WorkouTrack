import React from "react";
import { StyledButton } from "../button/StyledButton";
import { StyledModal } from "../modal/StyledModal";
import { StyledModalWrapper } from "../modalWrapper/StyledModalWrapper";
import { StyledTitle } from "../title/StyledTitle";
import { StyledFlexWrapper } from "../wrappers/flexWrapper/StyledFlexWrapper";

const RemovePlaylistModal = ({
    isShown,
    onCancelBtnClicked,
    onApproveBtnClicked,
}) => {
    return (
        isShown && (
            <StyledModalWrapper>
                <StyledModal>
                    <StyledTitle>
                        Are you sure you want to delete this playlist?
                    </StyledTitle>
                    <StyledFlexWrapper>
                        <StyledButton onClick={onCancelBtnClicked}>
                            Cancel
                        </StyledButton>
                        <StyledButton onClick={onApproveBtnClicked}>
                            Yes
                        </StyledButton>
                    </StyledFlexWrapper>
                </StyledModal>
            </StyledModalWrapper>
        )
    );
};

export default RemovePlaylistModal;

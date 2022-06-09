import React, { useState } from "react";
import { StyledButton } from "../../components/button/StyledButton";
import { StyledInput } from "../../components/input/StyledInput";
import { StyledLink } from "../../components/link/StyledLink";
import { StyledTitle } from "../../components/title/StyledTitle";
import { StyledFlexWrapper } from "../../components/wrappers/flexWrapper/StyledFlexWrapper";
import { useFirebase } from "../../context/FirebaseContext";
import { addDocument } from "../../utils/firebaseUtils";
import { StyledTextArea } from "./StyledTextArea";

const Contact = () => {
    const [term, setTerm] = useState("");
    const [textAreaTerm, setTextAreaTerm] = useState("");
    const { db, currentUser } = useFirebase();

    const onInputChange = ({ target: { value } }) => {
        setTerm(value);
    };

    const onTextAreaChange = ({ target: { value } }) => {
        setTextAreaTerm(value);
    };

    const addComment = () => {
        addDocument(db, "contact", {
            title: term,
            comment: textAreaTerm,
            date: new Date(),
            owner: currentUser.uid,
            email: currentUser.email,
        });
    };
    return (
        <StyledFlexWrapper flexDirection="column" flexDirectionTablet="column">
            <StyledTitle marginTop="5rem">Please Help Us Improve!</StyledTitle>
            <StyledInput
                placeholder="Title"
                onChange={onInputChange}
                value={term}
            ></StyledInput>
            <StyledTextArea
                placeholder="Your complaint Here"
                onChange={onTextAreaChange}
                value={textAreaTerm}
            ></StyledTextArea>
            <StyledLink
                disabled={!textAreaTerm.length || !term.length}
                to={{
                    pathname: "/",
                }}
            >
                <StyledButton
                    disabled={!textAreaTerm.length || !term.length}
                    onClick={addComment}
                >
                    Send
                </StyledButton>
            </StyledLink>
        </StyledFlexWrapper>
    );
};

export default Contact;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const TextInput = styled.TextInput`
    background-color: #fff;
    margin: 20px 24px 48px;
    padding: 8px 16px;
    border-radius: 18px;
`;

const Input = ({placeholder, value, onChange, onSubmit}) =>
    <TextInput
        value={value}
        placeholder={placeholder}
        returnKeyType={"search"}
        onChangeText={onChange}
        onSubmitEditing={onSubmit}
    />

Input.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default Input;
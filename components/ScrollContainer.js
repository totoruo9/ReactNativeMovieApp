import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import PropTypes from "prop-types";
import { ActivityIndicator } from "react-native";

const ScrollContainer = ({loading, children}) => (
    <ScrollView
        style={{backgroundColor:"#333"}}
        contentContainerStyle={{
            flex: loading ? 1 : 'auto',
            justifyContent: loading ? "center" : "flex-start"
        }}
    >
        {
            loading
                ? <ActivityIndicator color="#000" size="large" />
                : children
        }
    </ScrollView>
);

ScrollContainer.propTypes = {
    loading:PropTypes.bool.isRequired,
    children:PropTypes.node.isRequired
}

export default ScrollContainer;

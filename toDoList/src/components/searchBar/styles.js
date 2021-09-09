import { TextInput } from "react-native";
import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.View`
    flex-grow: 1;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
    border-radius: 5px;
    margin-bottom: 10px;
    border: 1px solid ${colors.defaultGray};
    width: ${(props) => props.width || '100%'};
`;

export const StyledInput = styled(TextInput)`
    flex: 1;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    align-items: center;
    justify-content: center;
    height: ${(props) => props.height || '25px'};
`;

export const TouchableArea = styled.TouchableOpacity`
    width: ${(props) => props.width || '100%'};
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;
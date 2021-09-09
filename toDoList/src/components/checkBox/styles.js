import styled from "styled-components";
import { TextInput } from "react-native";
import { colors } from "../../styles";

export const Container = styled.View`
    flex-grow: 1;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;

    width: ${(props) => props.width || '100%'};
`;

export const Row = styled.View`
    width: 30%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

export const TouchableArea = styled.TouchableOpacity`
    width: ${(props) => props.width || '100%'};
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
`;

export const TouchableIcon = styled.TouchableOpacity`
    width: ${(props) => props.width || '100%'};
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;

export const StyledInput = styled(TextInput)`
    width: 100%;
    padding-left: 5px;
    align-items: center;
    justify-content: center;
    height: ${(props) => props.height || '25px'};
    border: 1px solid ${colors.defaultGray};
`;

export const CheckBox = styled.View`
    margin-right: 10px;
    align-items: center;
    justify-content: center;
    
    border-width: 1px;
    border-style: solid;
    border-color: ${colors.defaultBlack};

    width: ${(props) => props.height || '20px'};
    height: ${(props) => props.height || '20px'};
    border-radius: ${(props) => (props.height / 8) || '5px'};
    background-color: ${(props) => props.checked ? colors.babyBlue : colors.lightBlue };
`;
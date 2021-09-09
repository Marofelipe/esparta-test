import * as React from "react";
import * as Icon from 'react-native-feather';
import { Container, StyledInput, TouchableArea } from "./styles";
import { colors } from "../../styles";
import { Alert } from "react-native";

export const DefaultSearchBar = ({onPress, ...rest}) => {
    const [text, setText] = React.useState('')
    const handleSubmit = () => {
        try {
            onPress(text);
        } catch (error) {
            Alert.alert(
                'Erro ao cadastrar nova tarefa',
                `Erro: ${error}`
            );
        } finally {
            setText('');
        }
    }
    return (
        <Container {...rest} >
            <StyledInput {...rest} value={text} onChangeText={(text) => setText(text)}/>
            <TouchableArea width="14%" onPress={() => handleSubmit()} {...rest} >
                <Icon.Send width="18px" color={colors.babyBlue} />
            </TouchableArea>
        </Container>
    );
};

export default DefaultSearchBar;
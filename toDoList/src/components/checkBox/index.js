import * as React from "react";
import * as Icon from 'react-native-feather';
import { CheckBox, Container, TouchableArea, StyledInput, Row, TouchableIcon } from "./styles";
import { colors, StyledText } from "../../styles";

export const DefaultCheckBox = ({checked, handleCheck, finished, handleDeleteItem, index, title, ...rest}) => {
    const [editing, setEditing] = React.useState(false);
    const [text, setText] = React.useState(title);
    return (
        <Container {...rest} >
            <TouchableArea width="60%" onPress={() => handleCheck ? handleCheck(!checked, index, finished) : null } {...rest} >
                <CheckBox checked={checked} {...rest} >
                    <Icon.Check width="18px" color={colors.defaultWhite}/>
                </CheckBox>
                {editing ? (
                    <StyledInput value={text} onChangeText={(e) => setText(e)} />
                ) : (
                    <StyledText>{text}</StyledText>
                )}
            </TouchableArea >
            {handleDeleteItem && 
                <Row>
                    <TouchableIcon width="50%" onPress={() => setEditing(!editing)} {...rest} >
                        <Icon.Edit2 width="18px" color={colors.babyBlue}/>
                    </TouchableIcon>
                    <TouchableIcon width="50%" onPress={() => handleDeleteItem(index)} {...rest} >
                        <Icon.Trash2 width="18px" color={colors.error}/>
                    </TouchableIcon>
                </Row>
            }
        </Container>
    );
};

export default DefaultCheckBox;
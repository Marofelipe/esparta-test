import styled from "styled-components";
import { colors } from "../../styles";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
`;

export const HeaderContainer = styled.View`
    width: 85%;
    padding: 20px 0;
    align-items: center;
    justify-content: space-between;
`;

export const HeaderRow = styled.View`
    width: 50%;
    align-items: center;
    flex-direction: row;
    align-self: flex-start;
    justify-content: space-between;
`;

export const RowContainer = styled.View`
    flex: 1;
    width: 95%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TouchableArea = styled.TouchableOpacity`
    align-self: center;
    align-items: center;
    justify-content: center;
`;

export const CheckBoxList = styled.ScrollView`
    width: 85%;
    padding: 10px;
    border-radius: 10px;
    background-color: ${colors.lightBlue};
`;


export const Title = styled.Text`
    font-size: 18px;
    line-height: 27px;
    font-weight: 600;
`;



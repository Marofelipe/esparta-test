import styled from "styled-components";

//Colors

export const colors = {
    defaultBlack: '#262540',
    defaultWhite: '#FFFFFF', 
    defaultGray: '#99B6B6', 
    lightBlue: '#F0F8F8',
    babyBlue: '#21D7CB',
    error: '#EA001B'
}

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const StyledText = styled.Text`
    padding-left: 5px;
    font-size: ${(props) => props.fontSize || '14px'};
    line-height: ${(props) => props.lineHeight || '21px'};
    font-weight: ${(props) => props.fontWeight || 400 };
    color: ${(props) => props.color || colors.defaultBlack};
`;
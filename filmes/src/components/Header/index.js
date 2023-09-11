import React from "react";
import { Container, MenuButton, Title } from './styles';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

function Header({title}) {
    const nativation = useNavigation();

    return (
        <Container>
            <MenuButton onPress={() => nativation.openDrawer()}>
                <Feather name="menu" size={36} color="#FFF" />
            </MenuButton>
            <Title>{title}</Title>
        </Container>
    )
}

export default Header;
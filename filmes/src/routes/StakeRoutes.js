import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Detail from "../pages/Detail";
import Search from "../pages/Search";

const Stake = createNativeStackNavigator();

function StakeRoutes() {
    return (
        <Stake.Navigator>
            <Stake.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stake.Screen
                name="Detail"
                component={Detail}
                options={{
                    headerShown: false,
                    title: 'Detalhes'
                }}
            />
            <Stake.Screen
                name="Search"
                component={Search}
                options={{
                    title: 'Sua busca',
                    headerTintColor: "#FFF",
                    headerTitleStyle: {
                        color: "#FFF",
                    },
                    headerStyle: {
                        backgroundColor: "#141a29",
                    }

                }}
            />
        </Stake.Navigator>
    )
}

export default StakeRoutes;
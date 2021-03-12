import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

//Navigators
import HomeStack from './HomeStack';

//Components
import DrawerUserCard from '../../components/Drawer/DrawerUserCard';

import { moderateScale, verticalScale } from '../../helpers/ScailingScreen';
import { COLORS } from '../../helpers/constants';

const Drawer = createDrawerNavigator();

function DrawerContent(props) {
    var items =
        [
            {
                label: 'Home',
                screen: 'Home',
                icon: 'home'
            },
        ];
    return (
        <DrawerContentScrollView
            style={{ backgroundColor: '#F2F2F2', }}
            {...props}
        >

            <DrawerUserCard />

            <View style={styles.drawerItemsContainer}>
                {items.map((item, i) => {
                    return (
                        <NaVItem
                            label={item.label}
                            icon={item.icon}
                            action={() => item.screen ? props.navigation.navigate(item.screen, { route: 'drawer' }) : item.action}
                            key={i}
                            {...props}
                        />
                    )
                })}
            </View>

        </DrawerContentScrollView>
    );
}

const NaVItem = ({ label, icon, light, action }) => (
    <DrawerItem
        label={label}
        labelStyle={styles.drawerItemLabel}
        style={styles.drawerItemWrapper}
        onPress={action}
    />
);


export default function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={props => DrawerContent(props)}
            initialRouteName="Home"
            drawerStyle={{ width: '80%' }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeStack}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    drawerItemsContainer: {
        // backgroundColor: 'red'
    },
    drawerItemWrapper: {
        marginVertical: verticalScale(5),
        marginLeft: moderateScale(20)
    },
    drawerItemLabel: {
        fontSize: moderateScale(18),
        color: COLORS.darkGrey
    },
    logoutButton: {
        flexDirection: 'row',
        marginTop: verticalScale(100),
        marginLeft: moderateScale(30),
        alignItems: 'center'
    }
})
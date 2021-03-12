// Constants

import { COLORS } from '../helpers/constants';
import { moderateScale } from '../helpers/ScailingScreen';

// Common Settings Screens
import AllTeams from '../views/AllTeams';
import CreateTeam from '../views/CreateTeam';

export const settingsScreens = [
    {
        name: 'AllTeams',
        screen: AllTeams,
        options: {
            headerTransparent: false,
            headerShown: true,
            headerTitle: "My Teams",
            headerTintColor: COLORS.blackV2,
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: moderateScale(19),
            },
            headerStyle: {
                shadowRadius: 0,
                shadowOffset: { height: 0 },
            }
        }
    },
    {
        name: 'CreateTeam',
        screen: CreateTeam,
        options: {
            headerTransparent: false,
            headerShown: true,
            headerTitle: "Create New Team",
            headerTintColor: COLORS.blackV2,
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: moderateScale(19),
            },
            headerStyle: {
                shadowRadius: 0,
                shadowOffset: { height: 0 },
            }
        }
    },
]


// Common Header Options

export const commonHeaderOptions = {
    headerTransparent: true,
    headerTintColor: COLORS.darkBlue,
    headerBackTitleVisible: false,
    // headerShown: false
}

export const defaulOptions = {
    headerTransparent: false,
    headerTintColor: COLORS.darkBlue,
}

export const commonWhiteHeaderOptions = {
    headertintColor: COLORS.darkBlue,
}
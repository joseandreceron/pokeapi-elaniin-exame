import React from 'react';
import { Text, View } from 'react-native';

import { verticalScale } from '../../helpers/ScailingScreen';
import { COLORS } from '../../helpers/constants';

const Divider = (props) => (
    <View
        style={{
            width: props.width ? props.width : '100%',
            height: verticalScale(1),
            backgroundColor: 'rgba(0,0,0,0.2)',
            marginVertical: 10
        }}
    />
);

export default Divider;


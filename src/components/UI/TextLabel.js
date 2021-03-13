import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Constants

import { COLORS, FONTS } from '../../helpers/constants';

// Components

const TextLabel = props => {
    // Font Colors

    const colors = {
        darkBlue: COLORS.darkBlue,
        red: COLORS.red,
        darkGrey: COLORS.darkGrey,
        grey: COLORS.grey,
        white: COLORS.white,
        default: COLORS.blackV2,
    };

    // Text Transform

    const transform = {
        lowercase: 'lowercase',
        uppercase: 'uppercase',
        capitalize: 'capitalize',
        default: 'none',
    };

    // Text align

    const align = {
        default: 'left',
        right: 'right',
        center: 'center',
    };

    // Styles

    const styles = StyleSheet.create({
        textStyles: {
              fontFamily: props.font ? props.font : FONTS.primary,
            fontSize: props.size ? props.size : 16,
            color: props.color ? colors[props.color] : colors.default,
            textTransform: props.transform
                ? transform[props.transform]
                : transform.default,
            textAlign: props.align ? align[props.align] : align.default,
        },
        sectionHeading: props.heading ? { marginBottom: 15 } : {},
        additionalStyles: props.additionalStyles ? props.additionalStyles : {},
    });

    return (
        <Text
            style={[
                styles.textStyles,
                styles.sectionHeading,
                styles.additionalStyles,
            ]}
            numberOfLines={props.numberOfLines ? props.numberOfLines : 0}>
            {props.children}
        </Text>
    );
};

export default TextLabel;

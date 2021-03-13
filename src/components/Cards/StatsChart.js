
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Dimensions,
    View,
    Text,
} from 'react-native';

//Components
import { BarChart } from "react-native-chart-kit";

//Constants
import { moderateScale, verticalScale } from '../../helpers/ScailingScreen';
import { COLORS } from '../../helpers/constants';


const StatsChart = ({ data, heading, width, chartStyles }) => {
    const [chartWidth, setChartWidth] = useState(Dimensions.get("window").width)

    return (
        <View style={styles.container}>

            <BarChart
                data={data}
                width={width ?? chartWidth}
                height={220}
                style={chartStyles ?? { left: -30 }}
                withInnerLines={false}
                yAxisLabel=''
                yAxisSuffix=''
                chartConfig={{
                    // data: data.datasets,
                    decimalPlaces: 0,
                    backgroundGradientFrom: COLORS.white,
                    backgroundGradientTo: COLORS.white,
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    // data: data.datasets,
                    fillShadowGradient: 'rgb(163, 198, 240)',
                    fillShadowGradientOpacity: 1,
                    propsForLabels: { fontSize: 9 },
                    barPercentage: 0.6,
                }}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: verticalScale(20)
    }
});

export default StatsChart;

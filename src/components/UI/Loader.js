import React, { Component } from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';

// UI
import TextLabel from './TextLabel';

//Constants
import { COLORS } from '../../helpers/constants';

class Loader extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    {this.props.errorState === true ? (
                        <View style={styles.containerInner}>
                            <Image
                                source={require("../../assets/images/icn-error.png")}
                                style={styles.icon}
                            />

                            <TextLabel
                                color={'grey'}
                                weight={'bold'}
                                size={18}
                                additionalStyles={styles.errorMessage}>
                                {this.props.errorMessage}
                            </TextLabel>

                            {/* Load aditional components */}

                            {this.props.children}
                        </View>
                    ) : (
                            <View>
                                <ActivityIndicator size="large" color={'#CCCCCC'} />
                                <TextLabel
                                    size={13}
                                    color={'grey'}
                                    transform={'uppercase'}
                                    additionalStyles={styles.loadingMessage}>
                                    {this.props.loadingMessage}
                                </TextLabel>
                            </View>
                        )}
                </View>
            </View>
        );
    }
}

export default Loader;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
    },
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInner: {
        width: '70%',
        padding: 30,
        backgroundColor: COLORS.white,
        borderRadius: 20,
    },
    icon: {
        width: 80,
        height: 80,
        marginBottom: 25,
        alignSelf: 'center',
    },
    errorMessage: {
        marginBottom: 15,
        textAlign: 'center',
        lineHeight: 31,
    },
    loadingMessage: {
        marginTop: 15,
    },
});
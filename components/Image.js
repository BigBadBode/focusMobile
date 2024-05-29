import {StyleSheet, Image} from 'react-native';

export default function ImageViewer({ imageSource }) {
    return (
        <Image source={imageSource} style={styles.image} resizeMode="contain"/>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 260,
        height: 260,
    }
})
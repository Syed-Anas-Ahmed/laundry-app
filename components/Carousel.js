import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { images } from '../data/CarouselData'

export default function Carousel() {
  return (
    <View>
      <SliderBox
      
      images={images}
      autoPlay
      circleLoop
      dotColor={'black'}
      inactiveDotColor="red"
      ImageComponentStyle={{
        borderRadius:6,
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { images } from '../data/CarouselData'

export default function Carousel() {
  return (
      <SliderBox
      
      images={images}
      autoPlay
      circleLoop
      dotColor={'black'}
      inactiveDotColor="red"
      ImageComponentStyle={{
        marginTop:10,
        borderRadius:6,
        width:"95%"
      }}
      />
  )
}

const styles = StyleSheet.create({})
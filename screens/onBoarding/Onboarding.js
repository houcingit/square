import React, {useState, useRef} from 'react';
import {FlatList} from 'react-native';
import slidesData from './onbordingSlides/slidesData';
import OnbordingSlide from './onbordingSlides/OnboardingSlide';

const Onboarding = ({navigation}) => {
  const [currentslideIndex, setCurrentslideIndex] = useState();

  const slider = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentslideIndex(viewableItems[0].index);
  }).current;

  const scrollToNextSlide = () => {
    slider.current.scrollToIndex({index: currentslideIndex + 1});
  };

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  return (
    <FlatList
      ref={slider}
      data={slidesData}
      renderItem={slide => (
        <OnbordingSlide
          slide={slide}
          scrollToNextSlide={scrollToNextSlide}
          navigation={navigation}
        />
      )}
      horizontal={true}
      pagingEnabled={true}
      bounces={false}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      viewabilityConfig={viewConfig}
      scrollEventThrottle={32}
      waitForInteraction={true}
      onViewableItemsChanged={viewableItemsChanged}
    />
  );
};

export default Onboarding;

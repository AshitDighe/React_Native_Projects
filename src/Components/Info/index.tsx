import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import data from '../data';
import { Transition, Transitioning } from 'react-native-reanimated';

const transition = (
  <Transition.Together>
    <Transition.In type='fade' durationMs={200} />
    <Transition.Change />
    <Transition.Out type='fade' durationMs={200} />
  </Transition.Together>
);

const Info = () => {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();

  return (
    <Transitioning.View
    ref={ref}
    transition={transition}
    style={styles.container}
  >
    <StatusBar hidden />
    {data.map(({ bg, color, category, subCategories }, index) => {
      return (
        <TouchableOpacity
          key={category}
          onPress={() => {
            ref.current.animateNextTransition();
            setCurrentIndex(index === currentIndex ? null : index);
          }}
          style={styles.cardContainer}
          activeOpacity={0.9}
        >
          <View style={[styles.card, { backgroundColor: bg }]}>
            <Text style={[styles.heading, { color }]}>{category}</Text>
            {index === currentIndex && (
              <View style={styles.subCategoriesList}>
                {subCategories.map((subCategory) => (
                  <Text key={subCategory} style={[styles.body, { color }]}>
                    {subCategory}
                  </Text>
                ))}
              </View>
            )}
          </View>
        </TouchableOpacity>
      );
    })}
  </Transitioning.View>
  )
}

export default Info

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffafa',
    justifyContent: 'center',
  },
  cardContainer: {
    flexGrow: 1,
    marginBottom:14,
    marginTop:14
  },
  card: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    // letterSpacing: -2,
  },
  body: {
    width:1000,
    backgroundColor:'#fff',
    fontSize: 12,
    lineHeight: 20 * 1.5,
    textAlign: 'center',
    
  },
  subCategoriesList: {
    marginTop: 20,
  },
});
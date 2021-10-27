import React, { Component, useEffect, useState } from 'react';
import {
  Animated,
  Button,
  Dimensions,
  FlatList,
  Image,
  LayoutAnimation,
  Modal,
  Platform,
  StyleSheet,
  TouchableOpacity,
  UIManager,
  View
} from 'react-native';
const { width } = Dimensions.get('screen');

let data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default function ItemPopup() {
  const [layoutData, setData] = useState(null);
  return (
    <View>
      <FlatList
        data={data}
        contentContainerStyle={{ paddingVertical: 20 }}
        keyExtractor={item => item}
        renderItem={() => <RenderItem toggleModal={data => setData(data)} />}
        numColumns={2}
      />
      {layoutData !== null && (
        <ModalView layoutData={layoutData} close={() => setData(null)} />
      )}
    </View>
  );
}

function ModalView({ layoutData, close }) {
  const { x, y, _width, _height } = layoutData;
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      setExpanded(true);
    }, 10);
  }, []);
  const onRequestClose = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        150,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.opacity,
      ),
      () => {
        close();
      },
    );
    setExpanded(false);
  };
  return (
    <Modal visible onRequestClose={onRequestClose} transparent>
      <View style={styles.center}>
        {expanded && (
          <Animated.View
            style={[StyleSheet.absoluteFill, { backgroundColor: '#000000aa' }]}
          />
        )}
        <View
          style={[
            expanded
              ? { height: '90%', width: '95%' }
              : {
                height: _height,
                width: _width,
                left: x,
                top: y,
                position: 'absolute',
              },
            { backgroundColor: '#ccc', overflow: 'hidden' },
          ]}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/bc/58/c0/bc58c04652c3fa566727695db01c480e--ocean-sunset-the-ocean.jpg',
            }}
            resizeMode="cover"
            style={styles.fill}
          />
          {expanded && (
            <View style={styles.close}>
              <Button title="close" onPress={onRequestClose} />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
}

class RenderItem extends Component {
  shouldComponentUpdate = () => false;
  onPress = () => {
    const { toggleModal } = this.props;
    this.itemRef.measureInWindow((x, y, _width, _height) => {
      toggleModal({
        x,
        y,
        _width,
        _height,
      });
    });
  };
  render() {
    return (
      <View style={styles.item}>
        <TouchableOpacity
          ref={e => (this.itemRef = e)}
          style={{ flex: 1, backgroundColor: '#ddd' }}
          onPress={this.onPress}
          onLongPress={this.onPress}
          activeOpacity={0.7}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/474x/bc/58/c0/bc58c04652c3fa566727695db01c480e--ocean-sunset-the-ocean.jpg',
            }}
            resizeMode="cover"
            style={styles.fill}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    height: width / 2,
    flex: 1,
    padding: 3,
  },
  close: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill: {
    height: '100%',
    width: '100%',
  },
});

import React from 'react';
import { Text, View } from 'react-native';

const NoteScreen = () => {
  return (
    <View style={{ padding: 10 }}>
      <Text>This is a note!</Text>
    </View>
  );
};

NoteScreen.navigationOptions = {
  title: 'Back',
};

export default NoteScreen;

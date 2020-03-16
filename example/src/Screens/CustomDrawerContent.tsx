import * as React from 'react';
import { ScrollViewProps } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  useIsDrawerOpen,
} from '@react-navigation/drawer';

export default function CustomDrawerContent(props: Partial<ScrollViewProps>) {
  const isDrawerOpen = useIsDrawerOpen();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Help" onPress={() => alert('Link to Help')} />
      <DrawerItem
        label="Drawer State"
        onPress={() => alert('Drawer is: ' + isDrawerOpen)}
      />
    </DrawerContentScrollView>
  );
}

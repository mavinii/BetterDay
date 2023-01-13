import React from 'react';
import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

// this interface is used to define the properties and all rest that the component will receive
interface HeadingProps extends ViewProps {
  title: string;
  subtitle: string;
}

// the component receives the properties defined in the interface which are the title and subtitle and all rest
export function Heading({ title, subtitle, ...rest }: HeadingProps) {
  return (
    <View style={styles.container} {...rest} >

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>

    </View>
  );
}
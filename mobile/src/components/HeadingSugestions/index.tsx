import React from 'react';
import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

// this interface is used to define the properties and all rest that the suggestion component will receive
interface HeadingProps extends ViewProps {
    title: string;
    subtitle: string;
}

// Suggestions component
export function HeadingSugestions({ title, subtitle, ...rest }: HeadingProps) {
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
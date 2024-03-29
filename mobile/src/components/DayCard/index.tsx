import React from 'react';
import { 
  View, 
  TouchableOpacity, 
  Text, 
  ViewProps,
} from 'react-native';

import { styles } from './styles';


interface HeadingProps extends ViewProps {
  title: string;
  subtitle: string;
}

export function DayCard({ title, subtitle, ...rest }: HeadingProps) {
  return (
    <View style={styles.container} {...rest}>
      
      <View style={styles.card}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>

    </View>
  );
}
import React from 'react';
import { Text,  TouchableOpacity, TouchableOpacityProps, ImageSourcePropType, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';

// this interface is used to define the data that will be passed to the component also can be exported to another file
export interface SuggestionsCardProps {
    id: string;
    name: string;
    ads: string; 
    cover: ImageSourcePropType;
} 

// this interface is not exported because it is only used in this file
interface Props extends TouchableOpacityProps {
    data: SuggestionsCardProps;
}

export function SuggestionsCard({ data, ...rest }: Props) {
  return (      
    <TouchableOpacity style={styles.container} {...rest}>
        <ImageBackground
          source={data.cover}
          style={styles.cover}
        >
                   
          <LinearGradient
            colors={THEME.COLORS.FOOTER}
            style={styles.footer}
          >
            <Text style={styles.name}>
              {data.name}
            </Text>
            <Text style={styles.ads}>
              {data.ads}
            </Text>
          </LinearGradient>

        </ImageBackground>
    </TouchableOpacity>
  );
}
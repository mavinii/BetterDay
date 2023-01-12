// This tells TypeScript that all png files can be imported as a string
declare module '*.png'; 

// Path: mobile/src/@types/svg.d.ts
declare module '*.svg' {
    import React from 'react';
    import { SvgProps } from 'react-native-svg';
    const content: React.FC<SvgProps>;

export default content 

}
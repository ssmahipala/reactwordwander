# React Word Wander

A React component that adds a dynamic word wandering effect to your text.

## Installation

```bash
npm install react-word-wander

```

## Usage
```JSX
import React from 'react';
import ReactWordWander from 'react-word-wander';

const MyComponent = () => {
  return (
    <div>
      <ReactWordWander
        text="Hello, World!"
        fontFamily="Space Mono"
        fontSize="clamp(3rem, 10vw, 5rem)"
        textColor="#000000"
        backgroundColor="transparent"
      />
    </div>
  );
};

export default MyComponent;
```
## Props
text (string, required): The text to be displayed and animated.

fontFamily (string, optional): The font family for the text. Defaults to "Space Mono".

fontSize (string, optional): The font size for the text. Defaults to "clamp(3rem, 10vw, 5rem)".

textColor (string, optional): The color of the text. Defaults to "#000000".

backgroundColor (string, optional): The background color behind the text. Defaults to "transparent".

## Dynamic Styling
The component allows dynamic styling, and you can customize the appearance by passing different values for fontFamily, fontSize, textColor, and backgroundColor.

## How It Works
The component uses an onMouseOver event to trigger a dynamic text animation, making each letter randomly change as the mouse moves over the text.

## License
This project is licensed under the MIT License.

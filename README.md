<p align="center">
    <img width="180" src="./src/volume-high-solid.svg" alt="logo">
</p>
<br/>
<p align="center">
  <a href="https://www.npmjs.com/package/sound-effect"><img src="https://img.shields.io/npm/v/sound-effect" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/previous-releases"><img src="https://img.shields.io/node/v/sound-effect" alt="node compatibility"></a>
<img src="https://img.shields.io/npm/dw/sound-effect"/>

</p>
<br/>

# Sound Effect 🎵

Meet 'soundEffect' – your ticket to an immersive React experience! Elevate your app with dynamic sound effects that pack a punch. Just a simple call and voila! Your UI springs to life with every action, making interactions feel like magic. 🎵✨experience.

[Read the Docs to Learn More](https://github.com/SouhailM07/sound-effect/tree/main/doc).

> Features :

- 💡 Add sound effect to your Elements
- 📦 Comes with a Collection of sound effects

## Getting Started

```bash
npm i sound-effect
```

## Basic Usage

```
let { sound , effects } = soundEffect()

<div onClick={()=>sound(src)}/>

You can use your favorite sound or use our built in effects

<div onClick={()=>sound(effects.tap1)}/>

```

## Built in Effects

| Effects |
| ------- |
| bell    |
| tap1    |

## License

[MIT](LICENSE).

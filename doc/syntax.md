# Syntax

```
import soundEffect from "sound-effect";

function App() {
  const { sound, effects } = soundEffect();
  return (
        <button
          id="sb"
          onClick={() => sound(effects.bell)}
        >
          Run
        </button>
  );
}
export default App;
```

Easily integrate the 'sound' function from 'soundEffect' function into your project by simply providing your audio source. Additionally, explore our diverse collection of sound effects, including popular choices like the bell effect.

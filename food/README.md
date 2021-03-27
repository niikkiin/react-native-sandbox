### Section 1 App Project Overview

- `expo-cli` Adds in a ton of default config to use features vommon in apps, like icons, video, better camera use, etc
- `react-native-cli` Default CLI to generate a project. Requires a lot of extra work to add in common features

- Common Syntaxes

  - Create a new project called 'food'
    ```zsh
      npx expo-cli init food
    ```

- `fetch`

  - Built in function for making network requests
  - Error handling is a bit weird
  - Requires us to write a lot of wrapper code to make it work 'sensibly'

- `axios`
  - Separate library for making requests
  - Easy to use, sensible defaults
  - Increases our app size (very, very slightly)

### Making it reusable

- `useEffect` hook

  ```JSX
    useState(() => {})
  ```

  - Run the arrow function _every time_ the component is rendered

  ```JSX
    useState(() => {}, [])
  ```

  - Run the arrow function _only_ when the component is _first_ rendered

  ```JSX
    useState(() => {}, [])
  ```

  - Run the arrow function _only_ when the component is _first_ rendered, and when the _'value' changes_

### Navigation with Parameters

- `withNavigation` Helper

  ```JSX
    // navigation
    import { withNavigation } from 'react-navigation';
    const Example = () => (

    <TouchableOpacity onPress={() =>
                  navigate('ResultsShow', { id: item.id })
                  }
                >
                  <ResultsDetail result={item} />
                </TouchableOpacity>
    )

    export default withNavigation(ResultsList);
  ```

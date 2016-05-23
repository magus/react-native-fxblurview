# react-native-fxblurview
`<FXBlurView />` provides a [React Native][react-native] component wrapping the native [FXBlurView](https://github.com/nicklockwood/FXBlurView) UIView subclass for realtime background blur effect and is compatible with iOS 5 and above.

<img src="https://raw.githubusercontent.com/magus/react-native-fxblurview/master/example/preview.png" alt="preview" height="400" />

## Table of contents
- [Setup](#setup)
- [Usage](#usage)
- [Example](#example)
- [Contributing](#contributing)
- [Copyright and license](#copyright-and-license)


## Setup
`rnpm install react-native-fxblurview`

## Usage

### FXBlurView
Provides a React Native component which wraps the `FXBlurView`.

##### Defaults
```js
import FXBlurView from 'react-native-fxblurview'

class BlurredView extends Component {
  render() {
    return (
      <FXBlurView>
        { this.props.children }
      </FXBlurView>
    );
  }
}
```

##### Fields

| Prop | Type | Opt/Required | Default | Note |
|---|---|---|---|---|
| `blurEnabled` | `bool` | Optional | true | Toggles blurring on and off for an individual FXBlurView instance
| `blurRadius` | `number` | Optional | 40 | Radius of the blur effect (in points). Defaults to a 40 point radius, which is similar to the iOS 7 blur effect
| `dynamic` | `bool` | Optional | false | Controls whether the FXBlurView updates dynamically, or only once when the view is added to its superview


## Example
```sh
open example/FXBlurViewExample/ios/FXBlurViewExample.xcodeproj
```

See the [example](example/FXBlurViewExample) project for a working example.

## Contributing
Just submit a pull request!

### Contact
[Twitter - @imnmj](http://twitter.com/imnmj)

[iamnoah.com](http://iamnoah.com)

## Copyright and license

Code and documentation copyright 2016 Noah. Code released under [the MIT license](https://github.com/magus/react-native-fxblurview/blob/master/LICENSE).

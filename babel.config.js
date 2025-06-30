// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
// };
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // Add this if you're using react-native-reanimated
    'react-native-reanimated/plugin',
  ],
};
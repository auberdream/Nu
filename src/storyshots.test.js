import initStoryshots from '@storybook/addon-storyshots';
import path from 'path';
import 'jest-styled-components';

initStoryshots({
  configPath: path.resolve(__dirname, '../.storybook'),
  framework: 'react',
});

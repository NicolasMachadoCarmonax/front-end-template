import { React } from 'react';

import { Text } from './text.base.js';

export default {
    title: 'App/Text',
    component: Text
}

export const Title = (args) => <Text {...args} styles={{
    fontWeight: '700',
    fontSize: 'clamp(16px, 1.4vw, 200px)'
}}/>;

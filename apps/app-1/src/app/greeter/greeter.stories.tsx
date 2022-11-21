import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Greeter } from './greeter';

const Story: ComponentMeta<typeof Greeter> = {
  component: Greeter,
  title: 'Greeter',
};
export default Story;

const Template: ComponentStory<typeof Greeter> = (args) => (
  <Greeter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

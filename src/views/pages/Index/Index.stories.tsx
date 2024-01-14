import { Meta, StoryFn } from '@storybook/react'

import { Index } from '.'

export default {
  title: 'Pages/Index',
  component: Index,
} as Meta

const Template: StoryFn<typeof Index> = (args) => <Index {...args} />

export const Default = Template.bind({})
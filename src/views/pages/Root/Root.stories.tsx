import { Meta, StoryFn } from '@storybook/react'

import { Root } from '.'

export default {
  title: 'Pages/Root',
  component: Root,
} as Meta

const Template: StoryFn<typeof Root> = (args) => <Root {...args} />

export const Default = Template.bind({})
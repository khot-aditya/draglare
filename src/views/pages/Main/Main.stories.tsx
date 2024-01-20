import { Meta, StoryFn } from '@storybook/react'

import { Main } from '.'

export default {
  title: 'Pages/Main',
  component: Main,
} as Meta

const Template: StoryFn<typeof Main> = (args) => <Main {...args} />

export const Default = Template.bind({})
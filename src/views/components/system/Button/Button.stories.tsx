import { Meta, StoryFn } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Components/System/Button',
  component: Button,
} as Meta

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})
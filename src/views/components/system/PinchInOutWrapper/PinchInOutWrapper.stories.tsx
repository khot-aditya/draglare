import { Meta, StoryFn } from '@storybook/react'

import { PinchInOutWrapper } from '.'

export default {
  title: 'Components/System/PinchInOutWrapper',
  component: PinchInOutWrapper,
} as Meta

const Template: StoryFn<typeof PinchInOutWrapper> = (args) => <PinchInOutWrapper {...args} />

export const Default = Template.bind({})
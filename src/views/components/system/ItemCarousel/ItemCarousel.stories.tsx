import { Meta, StoryFn } from '@storybook/react'

import { ItemCarousel } from '.'

export default {
  title: 'Components/System/ItemCarousel',
  component: ItemCarousel,
} as Meta

const Template: StoryFn<typeof ItemCarousel> = (args) => <ItemCarousel {...args} />

export const Default = Template.bind({})
import { Meta, StoryFn } from '@storybook/react'

import { ItemCarouselContainer } from '.'

export default {
  title: 'Components/System/ItemCarouselContainer',
  component: ItemCarouselContainer,
} as Meta

const Template: StoryFn<typeof ItemCarouselContainer> = (args) => <ItemCarouselContainer {...args} />

export const Default = Template.bind({})
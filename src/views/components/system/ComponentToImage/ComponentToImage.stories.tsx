import { Meta, StoryFn } from '@storybook/react'

import { ComponentToImage } from '.'

export default {
  title: 'Components/System/ComponentToImage',
  component: ComponentToImage,
} as Meta

const Template: StoryFn<typeof ComponentToImage> = (args) => <ComponentToImage {...args} />

export const Default = Template.bind({})
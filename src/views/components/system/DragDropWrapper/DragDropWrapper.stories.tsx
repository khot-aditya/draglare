import { Meta, StoryFn } from '@storybook/react'

import { DragDropWrapper } from '.'

export default {
  title: 'Components/System/DragDropWrapper',
  component: DragDropWrapper,
} as Meta

const Template: StoryFn<typeof DragDropWrapper> = (args) => <DragDropWrapper {...args} />

export const Default = Template.bind({})
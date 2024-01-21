import { Meta, StoryFn } from '@storybook/react'

import { DragAndDropCanvas } from '.'

export default {
  title: 'Components/System/DragAndDropCanvas',
  component: DragAndDropCanvas,
} as Meta

const Template: StoryFn<typeof DragAndDropCanvas> = (args) => <DragAndDropCanvas {...args} />

export const Default = Template.bind({})
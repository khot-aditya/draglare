import { Meta, StoryFn } from '@storybook/react'

import { SettingsPane } from '.'

export default {
  title: 'Components/System/SettingsPane',
  component: SettingsPane,
} as Meta

const Template: StoryFn<typeof SettingsPane> = (args) => <SettingsPane {...args} />

export const Default = Template.bind({})
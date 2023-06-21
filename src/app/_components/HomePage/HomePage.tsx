import type { FC } from 'react'
import Robot from '@/components/Robot'
import Icon from '@/components/Icon'
import Button, { Variant } from '@/components/Button'

const HomePage: FC = () => (
  <div>
    <p>Hello, world!</p>
    <Robot />
    <Icon.Bad />
    <Icon.Check />
    <Icon.Expand />
    <Icon.Good />
    <Icon.Missing />
    <Icon.Sparkles />
    <Button icon={<Icon.Check />} variant={Variant.Primary}>Button</Button>
    <Button icon={<Icon.Missing />} variant={Variant.Secondary}>Button</Button>
  </div>
)

export default HomePage

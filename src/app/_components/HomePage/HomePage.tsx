import type { FC } from 'react'
import Robot from '@/components/Robot'
import Icon from '@/components/Icon'

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
  </div>
)

export default HomePage

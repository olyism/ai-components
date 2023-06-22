import type { FC } from 'react'
import Robot from '@/components/Robot'
import Icon from '@/components/Icon'
import Button, { Variant } from '@/components/Button'
import Border from '@/components/Border'
import Tile from '@/components/Tile'
import OverlayPanel from '@/components/OverlayPanel'

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
    <Border className="w-[52px] h-[52px]"> </Border>
    <div className="w-12 h-12"><Tile> </Tile></div>
    <OverlayPanel>
      <div className="h-[200px] w-full"> </div>
    </OverlayPanel>
  </div>
)

export default HomePage

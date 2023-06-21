export enum RoundedSize {
  Default = 'Default',
  Tile = 'Tile',
  TileInner = 'TileInner',
  Panel = 'Panel',
  PanelInner = 'PanelInner',
  Full = 'Full',
}

const roundedClassName = (size: RoundedSize): string => {
  switch (size) {
    case RoundedSize.Tile:
      return 'rounded-tile'
    case RoundedSize.TileInner:
      return 'rounded-tile-inner'
    case RoundedSize.Panel:
      return 'rounded-panel'
    case RoundedSize.PanelInner:
      return 'rounded-panel-inner'
    case RoundedSize.Full:
      return 'rounded-full'
    default:
      return 'rounded'
  }
}

export default roundedClassName

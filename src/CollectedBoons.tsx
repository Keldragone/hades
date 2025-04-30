import { useEffect, useState } from 'react'
import './BoonLine.css'
import { BoonData } from './data/boon';

const BoonLine_Item = (props) => {
  const { boonNumber, iconSizePx, iconSpacingPx, boonId } = props;

  const spacingOnAxis = 0.707 * iconSpacingPx;

  const appliedStyle = {
    position: "absolute",
    width: iconSizePx,
    height: iconSizePx,
    left: (0.5 * iconSizePx + spacingOnAxis) * boonNumber,
    top: (0.5  * iconSizePx + spacingOnAxis) * (boonNumber % 2),
  }

  return (
    <div className="BoonLine_Item" style={appliedStyle}>
      <img className="BoonLine_Item_iconBorder" src="./BoonIcons/border_hollow.png" style={{ width: iconSizePx }} />
      <img className="BoonLine_Item_icon" src={BoonData[boonId].iconPath} style={{ width: iconSizePx }} />
    </div>
  )
};

const BoonLine = (props) => {
  const { boonIds } = props;

  const iconSizePx = 80;

  return (
    <div className="BoonLine" style={{ position: 'relative', height: 1 * iconSizePx }}>
      {boonIds.map((boonId, i) => (
        <BoonLine_Item key={boonId} boonNumber={i} iconSizePx={iconSizePx} iconSpacingPx={0} boonId={boonId} />
      ))}
    </div>
  )
};

export default BoonLine;

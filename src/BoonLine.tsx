import { useEffect, useState } from 'react'
import './BoonLine.css'
import { BoonData } from './data/Boon';

const BoonLine_Item = (props) => {
  const { boonNumber, iconSizePx, iconSpacingPx, boon, collected, onClick } = props;

  const spacingOnAxis = 0.707 * iconSpacingPx;

  const appliedStyle = {
    position: "absolute",
    width: iconSizePx,
    height: iconSizePx,
    left: (0.5 * iconSizePx + spacingOnAxis) * boonNumber,
    top: (0.5  * iconSizePx + spacingOnAxis) * (boonNumber % 2),
  }

  return (
    <div className="BoonLine_Item" style={appliedStyle} onClick={onClick}>
      {// <img className="BoonLine_Item_iconBorder" src="./Icons/Boon/border_hollow.png" style={{ width: iconSizePx }} />
      }
      <img className={`BoonLine_Item_icon ${!collected ? 'BoonLine_Item_icon--greyscale' : ''}`} src={boon.iconPath} style={{ width: iconSizePx }} />
      <img className="BoonLine_Item_iconHighlight" src="./Icons/Boon/border_hollow.png" style={{ width: iconSizePx }} />
    </div>
  )
};

const BoonLine = (props) => {
  const { boons, collectedBoonIds, onClick, iconSizePx, iconSpacingPx } = props;
  const rowSpacingPx = 0;

  return (
    <div className="BoonLine" style={{ position: 'relative', height: iconSizePx + 2 * 0.707 * iconSpacingPx + rowSpacingPx }}>
      {boons.map((boon, i) => (
        <BoonLine_Item key={boon.name} boonNumber={i} iconSizePx={iconSizePx} iconSpacingPx={iconSpacingPx} boon={boon} collected={collectedBoonIds.includes(boon.id)} onClick={() => onClick(boon.id)} />
      ))}
    </div>
  )
};

export default BoonLine;

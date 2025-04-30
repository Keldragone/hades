import { useEffect, useState } from 'react'
import './BoonLine.css'
import { BoonData } from './data/boon';

const BoonLine_Item = (props) => {
  const { boonNumber, iconSizePx, iconSpacingPx, boonId, collected, onClick } = props;

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
      {// <img className="BoonLine_Item_iconBorder" src="./BoonIcons/border_hollow.png" style={{ width: iconSizePx }} />
      }
      <img className={`BoonLine_Item_icon ${!collected ? 'BoonLine_Item_icon--greyscale' : ''}`} src={BoonData[boonId].iconPath} style={{ width: iconSizePx }} />
      <img className="BoonLine_Item_iconHighlight" src="./BoonIcons/border_hollow.png" style={{ width: iconSizePx }} />
    </div>
  )
};

const BoonLine = (props) => {
  const { boonIds, collectedBoonIds, onClick } = props;

  const iconSizePx = 80;
  const iconSpacingPx = 4;
  const rowSpacingPx = 16;

  return (
    <div className="BoonLine" style={{ position: 'relative', height: iconSizePx + 2 * 0.707 * iconSpacingPx + rowSpacingPx }}>
      {boonIds.map((boonId, i) => (
        <BoonLine_Item key={boonId} boonNumber={i} iconSizePx={iconSizePx} iconSpacingPx={iconSpacingPx} boonId={boonId} collected={collectedBoonIds.includes(boonId)} onClick={() => onClick(boonId)} />
      ))}
    </div>
  )
};

export default BoonLine;

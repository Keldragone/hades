import './BoonLine.css'
import { BoonData } from './data/boon';

const BoonIcon = (props) => {
  const { iconSizePx, boonId } = props;

  const appliedStyle = {
    position: "relative",
    width: iconSizePx,
    height: iconSizePx,
  };

  return (
    <div className="BoonIcon" style={appliedStyle}>
      <img className="BoonIcon_icon" src={BoonData[boonId].iconPath} style={{ width: iconSizePx }} />
    </div>
  )
};

export default BoonIcon;

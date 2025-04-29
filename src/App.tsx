import { useEffect, useState } from 'react'
import './App.css'

interface BoonProperties {
  id: string;
  name: string;
  iconPath: string;
  collectableTest: (collectedBoonIds: string[]) => boolean;
}

interface BoonList_Props {
  boonData: BoonProperties[];
  collectedBoonIds: string[];
  onClick: any; // !!!
}

interface BoonListItem_Props {
  boonData: BoonProperties;
  collected: boolean;
  collectable: boolean;
  onClick: any; // !!!!
}

const BoonListItem = (props: BoonListItem_Props) => {
  const { boonData, collected, collectable, onClick } = props;

  const { id, name, iconPath } = boonData;

  let iconClassName = 'BoonListItem_icon';
  let iconBorderClassName = 'BoonListItem_iconBorder';

  let iconBorderSrc = './boon_icons/border_hollow.png';
  
  if (collected) {
    iconBorderSrc = './boon_icons/border_star.png';
  }
  else if (collectable) {
    iconBorderSrc = './boon_icons/border.png';
  }

  if (!collected) {
    iconClassName += ' BoonListItem_icon--uncollected';
    iconBorderClassName += ' BoonListItem_iconBorder--uncollected';
  }

  if (!collectable) {
    iconClassName += ' BoonListItem_icon--uncollectable';
    iconBorderClassName += ' BoonListItem_iconBorder--uncollectable';
  }

  return (
    <div className="BoonListItem" onClick={onClick}>
      <img className={iconBorderClassName} src={iconBorderSrc} />
      <img className={iconClassName} src={iconPath} />
    </div>
  );
}

const BoonList = (props: BoonList_Props) => {
  const { boonData, collectedBoonIds, onClick } = props;

  return (
    <div className="BoonList">
      {boonData.map(boonDataElement => {
        const collected = collectedBoonIds.includes(boonDataElement.id);
        const collectable = boonDataElement.collectableTest(collectedBoonIds);

        return (
          <BoonListItem key={boonDataElement.id} boonData={boonDataElement} collected={collected} collectable={collectable} onClick={() => onClick(boonDataElement.id)} />
        );
      })}
    </div>
  );
};

function App() {
  const [ collectedBoonIds, setCollectedBoonIds ] = useState([]);
  
  useEffect(() => console.log(collectedBoonIds), [collectedBoonIds]);

  const onBoonListClick = (clickedBoonId: string) => {
    console.log(clickedBoonId);

    const alreadyCollected = collectedBoonIds.includes(clickedBoonId);

    if (alreadyCollected) {
      setCollectedBoonIds([...collectedBoonIds.filter(boonId => boonId !== clickedBoonId)]);
    }
    else {
      // Need to test if it's collectable.
      
      setCollectedBoonIds([clickedBoonId, ...collectedBoonIds]);
    }

  };

  const boonDataDionysus: BoonProperties[] = [
    { id: "DIO_1", name: "Drunken Strike", iconPath: "./boon_icons/dio_1.webp", collectableTest: () => true },
    { id: "DIO_2", name: "Drunken Flourish", iconPath: "./boon_icons/dio_2.webp", collectableTest: () => true },
    { id: "DIO_3", name: "Trippy Shot / Trippy Flare", iconPath: "./boon_icons/dio_3.webp", collectableTest: () => true },
    { id: "DIO_4", name: "Drunken Dash", iconPath: "./boon_icons/dio_4.webp", collectableTest: () => true },
    { id: "DIO_5", name: "Dionysus' Aid", iconPath: "./boon_icons/dio_5.webp", collectableTest: () => true },
    { id: "DIO_AFTER-PARTY", name: "After Party", iconPath: "./boon_icons/dio_after-party.webp", collectableTest: () => true },
    { id: "DIO_POSITIVE-OUTLOOK", name: "Positive Outlook", iconPath: "./boon_icons/dio_positive-outlook.webp", collectableTest: () => true },
    { id: "DIO_PREMIUM-VINTAGE", name: "Premium Vintage", iconPath: "./boon_icons/dio_premium-vintage.webp", collectableTest: () => true },
    { id: "DIO_STRONG-DRINK", name: "Strong Drink", iconPath: "./boon_icons/dio_strong-drink.webp", collectableTest: () => true },
    {
      id: "DIO_BAD-INFLUENCE",
      name: "Bad Influence",
      iconPath: "./boon_icons/dio_bad-influence.webp",
      collectableTest: (collectedBoonIds) => {
        const prerequisites = ["DIO_1", "DIO_2", "DIO_4", "DIO_5"];
        
        return collectedBoonIds.some(boonId => prerequisites.includes(boonId));
      },
    },
    {
      id: "DIO_NUMBING-SENSATION",
      name: "Numbing Sensation",
      iconPath: "./boon_icons/dio_numbing-sensation.webp",
      collectableTest: (collectedBoonIds) => {
        const prerequisites = ["DIO_1", "DIO_2", "DIO_4", "DIO_5"];
        
        return collectedBoonIds.some(boonId => prerequisites.includes(boonId));
      },
    },
    {
      id: "DIO_PEER-PRESSURE",
      name: "Peer Pressure",
      iconPath: "./boon_icons/dio_peer-pressure.webp",
      collectableTest: (collectedBoonIds) => {
        const prerequisites = ["DIO_1", "DIO_2", "DIO_4"];
        
        return collectedBoonIds.some(boonId => prerequisites.includes(boonId));
      },
    },
    {
      id: "DIO_HIGH-TOLERANCE",
      name: "High Tolerance",
      iconPath: "./boon_icons/dio_high-tolerance.webp",
      collectableTest: (collectedBoonIds) => {
        const prerequisites = ["DIO_3"];
        
        return collectedBoonIds.some(boonId => prerequisites.includes(boonId));
      },
    },
    {
      id: "DIO_BLACK-OUT",
      name: "Black Out",
      iconPath: "./boon_icons/dio_black-out.webp",
      collectableTest: (collectedBoonIds) => {
        const prerequisites = ["DIO_1", "DIO_2", "DIO_4", "DIO_5"];
        const prerequisites_two = ["DIO_3"];
        
        return collectedBoonIds.some(boonId => prerequisites.includes(boonId)) && collectedBoonIds.some(boonId => prerequisites_two.includes(boonId));
      },
    },
  ];

  return (
    <>
      <h1>Secret Hades Project</h1>
      <BoonList boonData={boonDataDionysus} collectedBoonIds={collectedBoonIds} onClick={onBoonListClick} />
    </>
  )
}

export default App

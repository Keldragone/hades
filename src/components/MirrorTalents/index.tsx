import './MirrorTalents.css'
import { getAllMirrorTalents } from '@/data/mirror';

interface Component_MirrorTalents_Props {
    chosenMirrorTalentIds: Array<string>;
    onClick: (mirrorTalentId: string) => void;
};

const Component_MirrorTalents = (props: Component_MirrorTalents_Props) => {
    const { chosenMirrorTalentIds, onClick } = props;

    const talentLines = getAllMirrorTalents();

    return (
        <div className="MirrorTalents">
            {talentLines.map(talentLine => {
                const firstSelected = chosenMirrorTalentIds.includes(talentLine[0].id);
                const secondSelected = chosenMirrorTalentIds.includes(talentLine[1].id);

                let firstClassName = "MirrorTalents_Line_Item MirrorTalents_Line_ItemFirst";
                let secondClassName = "MirrorTalents_Line_Item MirrorTalents_Line_ItemSecond";
                
                if (firstSelected) {
                    firstClassName += " MirrorTalents_Line_ItemFirst--Selected";
                }

                if (secondSelected) {
                    secondClassName += " MirrorTalents_Line_ItemSecond--Selected";
                }

                return (
                    <div className="MirrorTalents_Line">
                        <button className={firstClassName} onClick={() => onClick(talentLine[0].id)} />
                        <button className={secondClassName} onClick={() => onClick(talentLine[1].id)} />
                    </div>
                );
            })}
        </div>
    );
};

export default Component_MirrorTalents;

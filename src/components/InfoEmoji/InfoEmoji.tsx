import { infoEmojiConfig } from '../Characters/utils';
import './InfoEmoji.scss';

export const InfoEmoji = ({ status, species, gender, size = 'small' }: { status?: string, species?: string, gender?: string, size?: string }): JSX.Element => {
    const info = status || species || gender;
    let textInfoEmoji;
    if (status) textInfoEmoji = 'Status';
    if (species) textInfoEmoji = 'Species';
    if (gender) textInfoEmoji = 'Gender';

    return (
        <div className={`info-emoji info-emoji--${size} info-emoji--${info}`}>
            <span title={info}>{infoEmojiConfig(info)}</span>
            <span>{textInfoEmoji}</span>
        </div>
    );
};
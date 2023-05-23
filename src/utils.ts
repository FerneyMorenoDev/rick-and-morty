import moment from 'moment';

export const formatDate = (value?: string): string => {
    return moment(value).format('MM/DD/YY');
};

export const formatEpisode = (episode?: string): string => {
    const splitted = episode?.split('/');
    return splitted ? splitted[splitted.length - 1] : '';
};
import { makeStyles } from '@material-ui/core/styles';

import { OverviewHeroImage } from '../../assets/images/overview_hero.jpg';

export const useStyles = makeStyles(theme => ({
    typography: {
        whiteSpace: "pre-wrap" 
    },
    modalImage: {
        backgroundImage: `url(${OverviewHeroImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
}));
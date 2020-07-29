import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

import HeroImage from '../../assets/images/hero.jpeg';

export const useStyles = makeStyles(theme => ({
    buttonHero: {
        border: `1px solid black`,
        borderRadius: 0,
        '&:hover': {
            backgroundColor: grey[900],
            color: '#fff' 
        }
    },
    image: {
        position: 'relative',
        backgroundImage: `url(${HeroImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
}));

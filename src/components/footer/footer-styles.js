import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';

import LogoLKS from '../../assets/images/logo_lks.png';
import LogoSPRI from '../../assets/images/logo_spri.png';
import LogoIndaba from '../../assets/images/logo_indaba.png';

export const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: grey[200],
        padding: theme.spacing(4,0),
        marginTop: theme.spacing(4)
    },
    icon: {
        paddingTop: "0px",
        color: grey[900]
    },
    gridItemLKS: {
        height: "60px",
        backgroundImage: `url(${LogoLKS})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"
    },
    gridItemSPRI: {
        height: "60px",
        backgroundImage: `url(${LogoSPRI})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"
    },
    gridItemIndaba: {
        height: "60px",
        backgroundImage: `url(${LogoIndaba})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"
    }
}));
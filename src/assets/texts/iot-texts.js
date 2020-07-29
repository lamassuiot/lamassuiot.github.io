import React from 'react';

import { Typography } from '@material-ui/core';

export const headerText = {
    "title": "IoT",
    "subtitle": "Lamassu IoT PKI deals with the heterogeneity and scale of IoT.",
    "subcomponents": [{
        "title": "What makes Lamassu an IoT PKI?",
        "element":<Typography variant="subtitle1">Lamassu IoT differs from standard PKIs by allowing for longer certificate validity periods, stronger crypto algorithms and key sizes, higher performing algorithms like ECC and shorter root hierarchies.</Typography>
    }]
}

export const bodyText = {
    "components": [{
        "title": "System adaptability",
        "element": <Typography variant="subtitle1">Lamassu IoT system offers the necessary variation points for the addition of new communication mechanisms and protocols or new cryptographic algorithms.</Typography>
    }]
}

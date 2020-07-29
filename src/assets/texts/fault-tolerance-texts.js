import React from 'react';

import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { DoneOutlineOutlined as DoneOutlineOutlinedIcon } from '@material-ui/icons/';

export const headerText = {
    "title": "Fault tolerance",
    "subtitle": "Lamassu IoT is designed in such a way that failures do not affect system availability.",
    "subcomponents": [{
        "title": "How fault tolerance is achieved",
        "body": "A Lamassu IoT deployment consists of several server machines ideally spread across multiple datacenters or regions. For this purpose, the architecture supports the execution of multiple instances of the same microservice without intereferring between them and offers fault tolerance for other services depending on the microservices."
    }]
}

export const bodyText = {
    "components": [
    {
        "title": "Fault tolerance features",
        "element": <List>
                        <ListItem>
                            <ListItemIcon>
                                <DoneOutlineOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="No data is lost in case of power outage in one or both datacenters."/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DoneOutlineOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Data is replicated and synchronized between both data centers."/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <DoneOutlineOutlinedIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Detection of faults and quick and automatic recovery from them."/>
                        </ListItem>
                    </List>
    }]
}

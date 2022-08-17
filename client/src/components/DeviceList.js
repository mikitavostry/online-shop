import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
    const { device } = useContext(Context)
    device.devices.map(device =>
        console.log(device.rating)
    )
    return (
        <Row className="d-flex">
            {device.devices.map(device =>
                <DeviceItem key={device.id} name={device.name} rating={device.rating} id={device.id} img={device.img} />
            )}
        </Row>
    );
});

export default DeviceList;
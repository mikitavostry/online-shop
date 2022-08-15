import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite'
import { Context } from "../index";

const BrandBar = observer(() => {
    const { device } = useContext(Context)

    return (
        <div>BrandBar</div>
    )
})
export default BrandBar
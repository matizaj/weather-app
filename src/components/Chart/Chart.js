import React from "react";
import _ from 'lodash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

const Chart = (props) => {
  const average=(data)=> {
    return _.round(_.sum(data)/data.length)
  }
  return (
    <div>
       <Sparklines height={120} width={180} data={props.data}>
            <SparklinesLine color={props.color}/>
            <SparklinesReferenceLine type="avg"/>
        </Sparklines>
        <div style={{textAlign:"center"}}>{average(props.data)}</div>
    </div>
  )
};

export default Chart;

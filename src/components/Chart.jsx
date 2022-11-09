import ReactEcharts from "echarts-for-react";
import { useEffect,useRef } from 'react';
import "./Chart.css";
import { blue, green, red } from '@mui/material/colors';

const Chart = ({popular_times, date, time, threshold})=>{
  const eChartsRef = useRef(null);

  const x_data = ['6a','7a','8a','9a','10a','11a','12p','1p','2p','3p','4p','5p','6p','7p','8p','9p','10p'];
  const x_data_form_time = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
 
  const y_data_before = popular_times[date].filter((x,i)=> i>=6);
  let y_data = y_data_before.map((x,i)=> parseInt(x.replace("%","")));

  let option = {
    // legend: {
    //   icon: "circle",
    //   x: "center",
    //   y: "50px",
    //   data: dataNames,
    //   textStyle: {
    //     color: "#fff"
    //   }
    // },
      xAxis: {
        type: 'category',
        data: x_data
      },
      yAxis: {
        type: 'value',
      },
      series: [
        // {
        //   data: y_data_blue,
        //   type: 'bar',
        //   itemStyle: {
        //     color: "blue"
        //   }
        // },
        // {
        //   data: y_data_green,
        //   type: 'bar',
        //   itemStyle: {
        //     color: "green"
        //   }
        // },
        // {
        //   data: y_data_red,
        //   type: 'bar',
        //   itemStyle: {
        //     color: "red"
        //   }
        // },
        {
          data: y_data,
          type: 'bar',

        },
      
      
      ],
    };

  useEffect(()=>{
    // console.log("chart",date);

    y_data = y_data.map((x,i)=>{
      //is x in selected time? idx i=0 : 6am
       //does time include x_data_from_time[i]? if so, construct an object for its value

       if(time.includes(x_data_form_time[i].toString()) ){
        if(x < threshold){
          return {
            value: x,
            itemStyle: {
              color: '#00ff00'
            }
          }
        }
        // console.log("include");
        else{
          return{
            value:x,
            itemStyle:{
              color:"#ff3300"
            }
          }
        }
       }
       else{
        return x;
       }
    })
    // console.log(option);
    option["series"][0]["data"] = y_data;
    // option = structuredClone(option);
    // console.log(option);
    
    if (eChartsRef && eChartsRef.current) {
      eChartsRef.current?.getEchartsInstance().setOption(option);
}

},[time])

    // console.log("y_data", y_data);
    // const y_data_green = x_data_form_time.map((x)=> {
    //   if (time.includes(x.toString()) && y_data[x-6] < threshold) {
    //     return y_data[x-6];
    //   } else {
    //     return 0;
    //   }
    // });
    // const y_data_red = x_data_form_time.map((x)=>{
    //   if (time.includes(x.toString()) && y_data[x-6] >= threshold) {
    //     return y_data[x-6];
    //   } else {
    //     return 0;
    //   }
    // });
    // const y_data_blue = x_data_form_time.map((x)=> {
    //   if (!(time.includes(x.toString()))) {
    //     return y_data[x-6];
    //   } else {
    //     return 0;
    //   }
    // });
    // console.log("green", y_data_green, "red", y_data_red, "blue", y_data_blue );

    const legendData = [["Unselected Time", "blue"], ["Selected Time Over Capacity", red], ["Selected Time Under Capacity", green]];

    const dataNames = legendData.map(x=>x[0]);


    
      // style={{
      //   height: '8.1vh',
      //   width: '100%',
      //   padding: "3%",}}
      
      // The usage of ReactEChartsCore are same with above.
      return <ReactEcharts option={option} ref={eChartsRef}      />




}



export default Chart;
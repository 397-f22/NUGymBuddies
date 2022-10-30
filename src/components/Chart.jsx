import ReactECharts from 'echarts-for-react';
import { useEffect } from 'react';
import "./Chart.css";

const Chart = ({popular_times, date})=>{
  useEffect(()=>{
    console.log("chart",date);
  },[date])
    const x_data = ['6a','7a','8a','9a','10a','11a','12p','1p','2p','3p','4p','5p','6p','7p','8p','9p','10p','11p'];
    const y_data_before = popular_times[date].filter((x,i)=> i>=6);
    const y_data = y_data_before.map((x,i)=> parseInt(x.replace("%","")));

    
    const option = {
      
        xAxis: {
          type: 'category',
          data: x_data
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: y_data,
            type: 'bar',
          }
        ],
      };
    
      // style={{
      //   height: '8.1vh',
      //   width: '100%',
      //   padding: "3%",}}

      return <ReactECharts option={option} />;


}



export default Chart;
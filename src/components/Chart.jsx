import data from '../Gyms.json';

import ReactECharts from 'echarts-for-react';


const Chart = ()=>{

    const x_data = ['6a','7a','8a','9a','10a','11a','12p','1p','2p','3p','4p','5p','6p','7p','8p','9p','10p','11p']
    const y_data_before = data.popular_times["Monday"].filter((x,i)=> i>=6);
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
    
      return <ReactECharts option={option} style={{
        height: '11.9vh',
        width: '100%',
        padding: "3%",}}/>;


}



export default Chart;
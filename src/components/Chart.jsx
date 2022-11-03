import ReactECharts from 'echarts-for-react';
import { useEffect } from 'react';
import "./Chart.css";

const Chart = ({popular_times, date, time})=>{
  useEffect(()=>{
    // console.log("chart",date);
  },[date])
    console.log(time);
    const x_data = ['6a','7a','8a','9a','10a','11a','12p','1p','2p','3p','4p','5p','6p','7p','8p','9p','10p'];
    const x_data_form_time = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
   
    const y_data_before = popular_times[date].filter((x,i)=> i>=6);
    const y_data = y_data_before.map((x,i)=> parseInt(x.replace("%","")));
    const threshold = 25;
    console.log("y_data", y_data);
    const y_data_green = x_data_form_time.map((x)=> {
      if (time.includes(x.toString()) && y_data[x-6] < threshold) {
        return y_data[x-6];
      } else {
        return 0;
      }
    });
    const y_data_red = x_data_form_time.map((x)=>{
      if (time.includes(x.toString()) && y_data[x-6] >= threshold) {
        return y_data[x-6];
      } else {
        return 0;
      }
    });
    const y_data_blue = x_data_form_time.map((x)=> {
      if (!(time.includes(x.toString()))) {
        return y_data[x-6];
      } else {
        return 0;
      }
    });
    console.log("green", y_data_green, "red", y_data_red, "blue", y_data_blue );
   
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
            data: y_data_blue,
            type: 'bar',
            itemStyle: {
              color: "blue"
            }
          },
          {
            data: y_data_green,
            type: 'bar',
            itemStyle: {
              color: "green"
            }
          },
          {
            data: y_data_red,
            type: 'bar',
            itemStyle: {
              color: "red"
            }
          },
        ],
      };
    
      // style={{
      //   height: '8.1vh',
      //   width: '100%',
      //   padding: "3%",}}

      return <ReactECharts option={option} />;


}



export default Chart;
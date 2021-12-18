
import './Dashboard.css'
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie} from 'recharts';
function Dashboard() {
   
    const data = [
        {
          name: 'Jan 01',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Jan 02',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Jan 03',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Jan 04',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Jan 05',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Jan 06',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Jan 07',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
            name: 'Jan 08',
            uv: 3230,
            pv: 2800,
            amt: 1230,
          },
          {
            name: 'Jan 09',
            uv: 3490,
            pv: 4800,
            amt: 2700,
          },
          {
            name: 'Jan 10',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
          {
            name: 'Jan 11',
            uv: 490,
            pv: 8300,
            amt: 2100,
          },
          {
            name: 'Jan 12',
            uv: 3490,
            pv: 430,
            amt: 4100,
          },
      ];
      const data1 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
       
    return (
        <div className='content'>
        <div className='info'>
            <div className='item one'>
                <span className='title'>
                    Total Income
                </span><br/>
                <span className='money'>$579,000</span><br/>
                <span className='note'>Saved 25%</span>
            </div>

            <div className='item two'>
                <span className='title'>
                    Total Expense
                </span><br/>
                <span className='money'>$79,000</span><br/>
                <span className='note'>Saved 25%</span>
            </div>

            <div className='item three'>
                <span className='title'>
                    Cash on Hand
                </span><br/>
                <span className='money'>$92,000</span><br/>
                <span className='note'>Saved 25%</span>
            </div>

            <div className='item four'>
                <span className='title'>
                    Net Profit Margin
                </span><br/>
                <span className='money'>$179,000</span><br/>
                <span className='note'>Saved 65%</span>
            </div>
        </div>
        

        <div className='chartbox'>
<div className="barchart">
<h4>AP and QR Balance</h4>
<ResponsiveContainer width="100%" aspect={4 / 2}>
        <BarChart  data={data}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={25}
        >
            <XAxis dataKey="name" scale="point"  />
            <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid  />
          <Bar dataKey="pv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer></div>
      
      <div className='piechart1'>
      <h4>% of Income Budget</h4>
      <ResponsiveContainer width="100%" aspect={4 / 3}>
          
        <PieChart width={150} height={150}>
           
        <Pie dataKey="value" data={data1} cx={140} cy={80} innerRadius={20} outerRadius={40} fill="#8884d8" />
         
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      </div>
      <div className='piechart2'>
      <h4>% of Expenses Budget</h4>
      <ResponsiveContainer width="100%"  aspect={4 / 3}>
          
        <PieChart width={150} height={150}>
           
        <Pie dataKey="value" data={data1} cx={130} cy={80} innerRadius={20} outerRadius={40} fill="#8884d8" />
         
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      </div>


        </div>

       </div> 

        
    )
}


export default Dashboard

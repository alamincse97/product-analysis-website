import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Mylinechart = () => {

    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='d-flex row'>
            <div className='col-md-6'>
                <h4 className='text-center text-danger'>Investment VS Revenue</h4>
                <div className='d-flex justify-content-center'>
                <LineChart width={350} height={300} data={data}>
                    <Line dataKey={'investment'}></Line>
                    <Line dataKey={'revenue'}></Line>
                    <XAxis dataKey="month"></XAxis>
                    <Tooltip />
                    <YAxis></YAxis>
                </LineChart>
                </div>
                
            </div>
            <div className='col-md-6'>
                <h4 className='text-center text-danger'>Investment VS Revenue</h4>
                    <div className='d-flex justify-content-center'>
                    <BarChart width={350} height={300} data={data}>
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#84d8c6" />
                        <XAxis dataKey="month"></XAxis>
                        <Tooltip></Tooltip>
                        <YAxis></YAxis>
                    </BarChart>
            
                    </div>
            </div>
            <div className='col-md-6'>
            <h4 className='text-center text-danger'>Investment VS Revenue</h4>
            <div className='d-flex justify-content-center'>
            <AreaChart
                width={350}
                height={300}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="investment" stroke="#ffc658" fill="#ffc658" />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </div>
            </div>
            <div className='col-md-6'>
            <h4 className='text-center text-danger'>Investment VS Revenue</h4>
            <div className='d-flex justify-content-center'>
            <PieChart className='' width={350} height={300}>
                <Tooltip />
                <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>
            </div>
            </div>
        </div>
    );
};

export default Mylinechart;
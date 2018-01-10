/**
 * Created by Alice on 2016/7/8 0008.
 * for 全课云-调查问卷
 */

var myChart_2 = echarts.init(document.getElementById('qs_1'));
var myChart_3 = echarts.init(document.getElementById('qs_2'));

var option_2={
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    legend: {
        orient: 'vertical',

       top:'0',
        right:'10',


        selectedMode:false,


        data:[
            { name: '经管学院',icon: 'circle',textStyle:{color:'#878686'}},
            { name: '文学院',icon: 'circle',textStyle:{color:'#878686'}},
            { name: '理学院',icon: 'circle',textStyle:{color:'#878686'}},
            { name: '医学院',icon: 'circle',textStyle:{color:'#878686'}},
            { name: '艺术学院',icon: 'circle',textStyle:{color:'#878686'}}

        ]
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['30%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {
                    value:20,
                    name:'经管学院',
                    itemStyle: {
                        normal: {
                            color: '#7cd6ff'
                        }
                    }
                },
                {
                    value:30,
                    name:'文学院',
                    itemStyle: {
                        normal: {
                            color: '#5acbff'
                        }
                    }
                },
                {
                    value:10,
                    name:'理学院',
                    itemStyle: {
                        normal: {
                            color: '#54a0fe'
                        }
                    }
                },
                {
                    value:10,
                    name:'医学院',
                    itemStyle: {
                        normal: {
                            color: '#04d8f7'
                        }
                    }
                },
                {
                    value:30,
                    name:'艺术学院',
                    itemStyle: {
                        normal: {
                            color: '#b5e8ff'
                        }
                    }
                }
            ]
        }
    ]



};
var option_3= {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        nameTextStyle:{
            color:'red',
            fontSize:14,
        },
        axisLine:{
            show:false,
            lineStyle:{
                color:'#888',

            }
        }


    },
    yAxis: {
        type: 'category',
        axisLine:{
            show:false,
            lineStyle:{
                color:'#888',

            }
        },
        data:['经管学院','文学院','理学院','医学院','艺术学院']
    },
    series: [

        {
            name: '受访百分比',
            type: 'bar',
            data:[
                {
                    value:20,
                    name:'经管学院',
                    itemStyle: {
                        normal: {
                            color: '#7cd6ff'
                        }
                    }
                },
                {
                    value:30,
                    name:'文学院',
                    itemStyle: {
                        normal: {
                            color: '#5acbff'
                        }
                    }
                },
                {
                    value:10,
                    name:'理学院',
                    itemStyle: {
                        normal: {
                            color: '#54a0fe'
                        }
                    }
                },
                {
                    value:10,
                    name:'医学院',
                    itemStyle: {
                        normal: {
                            color: '#04d8f7'
                        }
                    }
                },
                {
                    value:30,
                    name:'艺术学院',
                    itemStyle: {
                        normal: {
                            color: '#b5e8ff'
                        }
                    }
                }
            ]
        }
    ]
};

myChart_2.setOption(option_2);
myChart_3.setOption(option_3);





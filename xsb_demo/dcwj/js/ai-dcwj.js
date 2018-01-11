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
            { name: '非常满意',icon: 'circle',textStyle:{color:'#878686'}},
            { name: '满意',icon: 'circle',textStyle:{color:'#878686'}},
            { name: '一般',icon: 'circle',textStyle:{color:'#878686'}},
            { name: '不满意',icon: 'circle',textStyle:{color:'#878686'}},
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
                    value:40,
                    name:'非常满意',
                    itemStyle: {
                        normal: {
                            color: '#7cd6ff'
                        }
                    }
                },
                {
                    value:30,
                    name:'满意',
                    itemStyle: {
                        normal: {
                            color: '#5acbff'
                        }
                    }
                },
                {
                    value:10,
                    name:'一般',
                    itemStyle: {
                        normal: {
                            color: '#54a0fe'
                        }
                    }
                },
                {
                    value:20,
                    name:'不满意',
                    itemStyle: {
                        normal: {
                            color: '#04d8f7'
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
        data:['足够','一般','不足够']
    },
    series: [

        {
            name: '受访百分比',
            type: 'bar',
            data:[
                {
                    value:20,
                    name:'足够',
                    itemStyle: {
                        normal: {
                            color: '#7cd6ff'
                        }
                    }
                },
                {
                    value:30,
                    name:'一般',
                    itemStyle: {
                        normal: {
                            color: '#5acbff'
                        }
                    }
                },
                {
                    value:50,
                    name:'不足够',
                    itemStyle: {
                        normal: {
                            color: '#54a0fe'
                        }
                    }
                }
            ]
        }
    ]
};

myChart_2.setOption(option_2);
myChart_3.setOption(option_3);





/**
 * Created by Alice on 2016/7/11 0011.
 */
var sjData = echarts.init(document.getElementById('sj_data'));
var option_4 = {

    tooltip : {
        trigger: 'axis'
    },

    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'收集份数',
            itemStyle:{
                normal: {
                    color: '#04cdf7',
                    shadowBlur: 200,
                    //shadowColor: 'rgba(4, 205,247, 0.5)'
                }
            },
            type:'line',
            areaStyle: {
                normal: {
                    normal: {}
                }

            },
            //
            data: [0,0,0,0,0,0,5,10,20,50,100,120,150,160,250,200,180,190,120,100,50,40,20,0,0
            ],


            //
        },

    ]
};
sjData.setOption(option_4);
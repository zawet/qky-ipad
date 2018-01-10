/**
 * Created by Alice on 2017/11/28.
 */
$("#grade").picker({
    title: "请选择班级",
    cols: [
        {
            textAlign: 'center',
            values: ['初一', '初二','初三','高一','高二','高三']
        },
        {
            textAlign: 'center',
            values: ['1班', '2班', '3班']
        }
    ],
    onChange: function(p, v, dv) {
        console.log(p, v, dv);
    },
    onClose: function(p, v, d) {
        console.log("close");
    }
});
$("#sheet").picker({
    title: "请选择课程表类型",
    cols: [
        {
            textAlign: 'center',
            values: ['周课表', '日课表']
        }
    ],
    onChange: function(p, v, dv) {
        console.log(p, v, dv);
    },
    onClose: function(p, v, d) {
        console.log("close");
    }
});
$("#week").picker({
    title: "请选择周",
    cols: [
        {
            textAlign: 'center',
            values: ['第1周', '第2周(本周)','第3周','第4周','第5周']
        }
    ],
    onChange: function(p, v, dv) {
        console.log(p, v, dv);
    },
    onClose: function(p, v, d) {
        console.log("close");
    }
});

$("#day").picker({
    title: "请选择日期",
    cols: [
        {
            textAlign: 'center',
            values: ['第1周', '第2周','第3周','第4周','第5周']
        },
        {
            textAlign: 'center',
            values: ['星期一', '星期二','星期三(今天)','星期四','星期五']
        }
    ],
    onChange: function(p, v, dv) {
        console.log(p, v, dv);
    },
    onClose: function(p, v, d) {
        console.log("close");
    }
});

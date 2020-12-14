<template>
  <div>
    <h1>后台首页echarts图表</h1>
    <div id="main" style="width:700px;height:500px"></div>
  </div>
</template>
<script>
import echarts from "echarts"; 
export default {
  data() {
    return {
      options: {
        title: {
          text: "堆叠区域图",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [],
      },
    };
  },
  mounted() {
    this.$axios.get("/echars.json").then((res) => {
      console.log(res);
      this.options.series = res.data.series;

      // 基于准备好的dom，初始化echarts实例

      var myChart = echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option = this.options;
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    });
  },
};
</script>

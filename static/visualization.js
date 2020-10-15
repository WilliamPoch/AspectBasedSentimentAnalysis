Vue.use(VueResource);

var vm = new Vue({
    el:'#vue-app',
    data:{
        // menu
        visualization:"pie_chart",
        details:"detail",
        testing:"testing",
        
        //data for visualization from firebase
        visual_overall:[],
        visual_aspect1:[],
        visual_aspect2:[],
        visual_aspect3:[],
        visual_aspect4:[],
        visual_tf:false
    },

    methods:{
        // post: function(){
        //     this.$http.post('https://aspectbased-sentiment-analysis.firebaseio.com/testing.json',{
        //         sentence1:this.adding.sentence1,
        //         sentence2:this.adding.sentence2,
        //         sentence3:this.adding.sentence3,
        //         sentence4:this.adding.sentence4,
        //         sentence5:this.adding.sentence5
        //     }).then(function(data){
        //         console.log(data);
        //     });
        // },


    
    },

    computed:{

    },


    created(){
        // this.$http.get('https://aspectbased-sentiment-analysis.firebaseio.com/details.json').then(function(data){
        //     console.log(data);
        //     this.details_array=data.body;
        // })

        this.$http.get('https://aspectbased-sentiment-analysis.firebaseio.com/visualization.json').then(function(data){
            console.log(data);
            this.visual_tf = data.ok;
            this.visual_overall=data.body.overall;
            this.visual_aspect1=data.body.aspect1;
            this.visual_aspect2=data.body.aspect2;
            this.visual_aspect3=data.body.aspect3;
            this.visual_aspect4=data.body.aspect4;
        })

    },

    updated(){
            // profile barchart
            var type= 'bar';
            var data = {
                labels: ['Overall','Aspect1','Aspect2','Aspect3','Aspect4'],
                datasets: [
                    {
                        label: 'Negative',
                        data: [this.visual_overall.negative, this.visual_aspect1.negative, this.visual_aspect2.negative, this.visual_aspect3.negative, this.visual_aspect4.negative],
                        borderColor: 'red',
                        borderWidth: 1,
                        // fill: true,
                        // backgroundColor: 'rgba(128,0,0,0)',
                        pointStyle: 'rect', //circle, cross, crossRot, dash, line, rect, rectRounded, rectRot, star, triangle
                        pointRadius: 2,
                    },
                    {
                        label: 'Positive',
                        data: [this.visual_overall.positive, this.visual_aspect1.positive, this.visual_aspect2.positive, this.visual_aspect3.positive, this.visual_aspect4.positive],
                        borderColor: 'green',
                        borderWidth: 1,
                        // fill: true,
                        // backgroundColor: 'rgba(0,128,0,0)',
                        pointStyle: 'triangle',
                        pointRadius: 2,
                    },

                    {
                        label: 'Neutral',
                        data: [this.visual_overall.neutral, this.visual_aspect1.neutral, this.visual_aspect2.neutral, this.visual_aspect3.neutral, this.visual_aspect4.neutral ],
                        borderColor: 'yellow',
                        borderWidth: 1,
                        // fill: true,
                        // backgroundColor: 'rgba(128,0,0,0)',
                        pointStyle: 'circle', //circle, cross, crossRot, dash, line, rect, rectRounded, rectRot, star, triangle
                        pointRadius: 2,
                    },
                ]
            };

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                type: type,
                data: data,
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                               
                                // stepSize: 400,
                            }
                        }]
                    },

                    title: {
                        display: true,
                        text: 'Overview',
                        // fontColor: 'blue',
                        fontSize: '20',
                        position:'top'
                    },
                    // legend:{
                    //     position:'right',
                    //     display:true
                    // }
                }
            });


            // overall piechart
            var type_overall = 'pie'; //pie, doughnut
            var data_overall = {
                labels: ['Positive', 'Neutral', 'Negative'],
                datasets: [
                    {
                        data: [this.visual_overall.positive, this.visual_overall.neutral, this.visual_overall.negative],
                        backgroundColor: ['green', 'gray', 'pink']
                    }
                ]
            };

            var options_overall = {
                title: {
                    display: true,
                    text: 'Overall',
                    // fontColor: 'indigo',
                    fontSize: '20'
                },
                // cutoutPercentage: 20,
            };

            var ctx_overall = document.getElementById('myChart_overall').getContext('2d');
                var chart_overall = new Chart(ctx_overall, {
                    type: type_overall,
                    data: data_overall,
                    options: options_overall
            });


            // aspect1 piechart
            var type1 = 'doughnut'; //pie, doughnut
            var data1 = {
                labels: ['Positive', 'Neutral', 'Negative'],
                datasets: [
                    {
                        data: [this.visual_aspect1.positive, this.visual_aspect1.neutral, this.visual_aspect1.negative],
                        backgroundColor: ['rgba(34,139,34,1)', 'rgba(245,222,179,1)', 'rgba(178,34,34,1)']
                    }
                ]
            };

            var options1 = {
                title: {
                    display: true,
                    text: 'Aspect1',
                    // fontColor: 'indigo',
                    fontSize: '15'
                },
                // cutoutPercentage: 20,
            };

            var ctx1 = document.getElementById('myChart1').getContext('2d');
                var chart1 = new Chart(ctx1, {
                    type: type1,
                    data: data1,
                    options: options1
            });

            // aspect2
            var type2 = 'doughnut'; //pie, doughnut
            var data2 = {
                labels: ['Positive', 'Neutral', 'Negative'],
                datasets: [
                    {
                        data: [this.visual_aspect2.positive, this.visual_aspect2.neutral, this.visual_aspect2.negative],
                        backgroundColor: ['rgba(34,139,34,1)', 'rgba(245,222,179,1)', 'rgba(178,34,34,1)']
                    }
                ]
            };

            var options2 = {
                title: {
                    display: true,
                    text: 'Aspect2',
                    // fontColor: 'indigo',
                    fontSize: '15'
                },
                // cutoutPercentage: 20,
            };

            var ctx2 = document.getElementById('myChart2').getContext('2d');
                var chart2 = new Chart(ctx2, {
                    type: type2,
                    data: data2,
                    options: options2
            });

            // aspect3
            var type3 = 'doughnut'; //pie, doughnut
            var data3 = {
                labels: ['Positive', 'Neutral', 'Negative'],
                datasets: [
                    {
                        data: [this.visual_aspect3.positive, this.visual_aspect3.neutral, this.visual_aspect3.negative],
                        backgroundColor: ['rgba(34,139,34,1)', 'rgba(245,222,179,1)', 'rgba(178,34,34,1)']
                    }
                ]
            };

            var options3 = {
                title: {
                    display: true,
                    text: 'Aspect3',
                    // fontColor: 'indigo',
                    fontSize: '15'
                },
                // cutoutPercentage: 20,
            };

            var ctx3 = document.getElementById('myChart3').getContext('2d');
                var chart3 = new Chart(ctx3, {
                    type: type3,
                    data: data3,
                    options: options3
            });


            // aspect4
            var type4 = 'doughnut'; //pie, doughnut
            var data4 = {
                labels: ['Positive', 'Neutral', 'Negative'],
                datasets: [
                    {
                        data: [this.visual_aspect4.positive, this.visual_aspect4.neutral, this.visual_aspect4.negative],
                        backgroundColor: ['rgba(34,139,34,1)', 'rgba(245,222,179,1)', 'rgba(178,34,34,1)']
                    }
                ]
            };

            var options4 = {
                title: {
                    display: true,
                    text: 'Aspect4',
                    // fontColor: 'indigo',
                    fontSize: '15'
                },
                // cutoutPercentage: 20,
            };

            var ctx4 = document.getElementById('myChart4').getContext('2d');
                var chart4 = new Chart(ctx4, {
                    type: type4,
                    data: data4,
                    options: options4
            });

            
    }

    
})
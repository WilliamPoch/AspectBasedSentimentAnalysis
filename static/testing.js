Vue.use(VueResource);

new Vue({
    el:'#vue-testing',
    data:{
        // menu
        visualization:"pie_chart",
        details:"detail",
        testing:"testing",
        //input of testing page
        adding:{
            sentence1:"",
            sentence2:"",
            sentence3:"",
            sentence4:"",
            sentence5:"",
        },
        //data for visualization from firebase
        visual_overall:[],
        visual_aspect1:[],
        visual_aspect2:[],
        visual_aspect3:[],
        visual_aspect4:[],
        visual_tf:false
    },

    methods:{
        post: function(){
            this.$http.post('https://aspectbased-sentiment-analysis.firebaseio.com/testing.json',{
                sentence1:this.adding.sentence1,
                sentence2:this.adding.sentence2,
                sentence3:this.adding.sentence3,
                sentence4:this.adding.sentence4,
                sentence5:this.adding.sentence5
            }).then(function(data){
                console.log(data);
            });
        },


    
    },

    created(){

        this.$http.get('https://aspectbased-sentiment-analysis.firebaseio.com/visualization.json').then(function(data){
            console.log(data);
            this.visual_tf = data.ok;
            this.visual_overall=data.body.overall;
            this.visual_aspect1=data.body.aspect1;
            this.visual_aspect2=data.body.aspect2;
            this.visual_aspect3=data.body.aspect3;
            this.visual_aspect4=data.body.aspect4;
        })
		
		this.$http.get('https://aspectbased-sentiment-analysis.firebaseio.com/testing.json').then(function(data){
            console.log(data);
            this.visual_tf = data.ok;
            this.visual_overall2=data.body.overall;
            this.visual_aspect12=data.body.aspect1;
            this.visual_aspect22=data.body.aspect2;
            this.visual_aspect32=data.body.aspect3;
            this.visual_aspect42=data.body.aspect4;
        })

    },

    updated(){

        // overall piechart
        var type_overall = 'pie'; //pie, doughnut
        var data_overall = {
            labels: ['Positive', 'Neutral', 'Negative'],
            datasets: [
                {
                    data: [this.visual_overall.positive, this.visual_overall.neutral, this.visual_overall.negative],
                    backgroundColor: ['rgba(34,139,34,1)', 'rgba(255, 164, 76,1)', 'rgba(178,34,34,1)']
                }
            ]
        };

        var options_overall = {
            title: {
                display: true,
                text: 'Overall',
                // fontColor: 'indigo',
                fontSize: '15'
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
        var type1 = 'pie'; //pie, doughnut
        var data1 = {
            labels: ['Positive', 'Neutral', 'Negative'],
            datasets: [
                {
                    data: [this.visual_aspect1.positive, this.visual_aspect1.neutral, this.visual_aspect1.negative],
                    backgroundColor: ['rgba(34,139,34,1)', 'rgba(255, 164, 76,1)', 'rgba(178,34,34,1)']
                }
            ]
        };

        var options1 = {
            title: {
                display: true,
                text: 'Staff',
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
        var type2 = 'pie'; //pie, doughnut
        var data2 = {
            labels: ['Positive', 'Neutral', 'Negative'],
            datasets: [
                {
                    data: [this.visual_aspect2.positive, this.visual_aspect2.neutral, this.visual_aspect2.negative],
                    backgroundColor: ['rgba(34,139,34,1)', 'rgba(255, 164, 76,1)', 'rgba(178,34,34,1)']
                }
            ]
        };

        var options2 = {
            title: {
                display: true,
                text: 'Amenities',
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
        var type3 = 'pie'; //pie, doughnut
        var data3 = {
            labels: ['Positive', 'Neutral', 'Negative'],
            datasets: [
                {
                    data: [this.visual_aspect3.positive, this.visual_aspect3.neutral, this.visual_aspect3.negative],
                    backgroundColor: ['rgba(34,139,34,1)', 'rgba(255, 164, 76,1)', 'rgba(178,34,34,1)']
                }
            ]
        };

        var options3 = {
            title: {
                display: true,
                text: 'Condition',
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
        var type4 = 'pie'; //pie, doughnut
        var data4 = {
            labels: ['Positive', 'Neutral', 'Negative'],
            datasets: [
                {
                    data: [this.visual_aspect4.positive, this.visual_aspect4.neutral, this.visual_aspect4.negative],
                    backgroundColor: ['rgba(34,139,34,1)', 'rgba(255, 164, 76,1)', 'rgba(178,34,34,1)']
                }
            ]
        };

        var options4 = {
            title: {
                display: true,
                text: 'Cleanliness',
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
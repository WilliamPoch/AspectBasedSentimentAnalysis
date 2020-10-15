

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

Vue.use(VueResource);

new Vue({
    el:'#vue-detail',
    delimiter: ['[[',']]'],
    data:{
        // menu
        visualization:"pie_chart",
        details:"detail",
        testing:"testing",
        
        // dropdown of details page
        list1_available:false,
        list2_available:false,
        // checkboxes of details page
        checkbox_s: ["positive","negative","neutral"],
        checkbox_a: ["a1","a2","a3","a4","no"],
        //Array contains details from firebase
        // details_array:[],

        // senti_tf:false,
        // aspect_tf:false,

        // aspects:[],

        // data in firestore
        details_array:[],
    },

    methods:{
        check_sentiment: function(sentiment){
            for(let i of this.checkbox_s){
                if (sentiment == i){
                    return true
                }
            }
            return false

        },

        check_aspect: function(a1,a2,a3,a4){
            for(let i of this.checkbox_a){
                if ((a1 != null && i =='a1' )|| (a2 != null && i =='a2' ) || (a3 != null && i =='a3' ) ||(a4 != null && i =='a4' )){
                    return true
                }
            }
            return false
        },

        contains_asepct: function(){

            for(let i of this.checkbox_a){
                if (i == 'no'){
                    return true
                }
            }
            return false
        },

        aspect_IS_null: function(a1, a2, a3, a4){
            if(a1 == null && a2 == null && a3 == null && a4 == null){
                return true
            }else{
                return false
            }
        }
        
    },

    created(){

        // this.$http.get('https://aspectbased-sentiment-analysis.firebaseio.com/details.json').then(function(data){
        //     console.log(data);
        //     this.details_array=data.body;
        // })

        db.collection('details').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // this.content = doc.data().content;
                // this.title = doc.data().title;
                this.details_array.push (doc.data());
                console.log(doc.id,"=>",doc.data());
            })
        })

    },
})
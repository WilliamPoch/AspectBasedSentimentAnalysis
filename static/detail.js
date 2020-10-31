 var firebaseConfig = {
     apiKey: "AIzaSyDO0EYmkcKCwSS2XJFMj5DT8TL_KMYgkAs",
     authDomain: "aspectbased-sentiment-analysis.firebaseapp.com",
     databaseURL: "https://aspectbased-sentiment-analysis.firebaseio.com",
     projectId: "aspectbased-sentiment-analysis",
     storageBucket: "aspectbased-sentiment-analysis.appspot.com",
     messagingSenderId: "473619564785",
     appId: "1:473619564785:web:532bd8651d5862a3948150",
     measurementId: "G-9J2G4PEDFT"
 };
//var firebaseConfig = {
//    apiKey: "AIzaSyBtuqcloyYj0SIkUinoig7lk9BWNqd8maQ",
//    authDomain: "willps-8539d.firebaseapp.com",
//    databaseURL: "https://willps-8539d.firebaseio.com",
//    projectId: "willps-8539d",
//    storageBucket: "willps-8539d.appspot.com",
//    messagingSenderId: "950733704920",
//    appId: "1:950733704920:web:89dae2c2e72877addad1ad",
//    measurementId: "G-EWVJ3VJ8SW"
//  };

// var firebaseConfig = {
//     apiKey: "AIzaSyAsBGCnFvpuYTti3U-gM2bqSpMJ3lHJuEs",
//     authDomain: "test-9f759.firebaseapp.com",
//     databaseURL: "https://test-9f759.firebaseio.com",
//     projectId: "test-9f759",
//     storageBucket: "test-9f759.appspot.com",
//     messagingSenderId: "284236069556",
//     appId: "1:284236069556:web:3ea7a89d4a3b899e72f5e1",
//     measurementId: "G-W8QPS9V10V"
// };

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
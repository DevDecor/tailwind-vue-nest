<template>
  <button @click="submit" style="background: red; float: right;">Submit</button>
  <question 
    v-for="(quest, index) in quests" 
    :key="index" 
    :question="quest" 
    :num="num" 
    :index="index"
    @change="change"
  >
  </question>
  <div class="btn-group">
    <button class="btn" @click="prev">&lt;&lt; Prev</button>
    <button class="btn" @click="next">Next &gt;&gt;</button>
  </div>
</template>

<script>
// import HelloWorld from './components// World.vue'
import question from './components/Question.vue';
export default {
  components:{
    question
  },
  name: 'App',
  data(){
    return {
      title: "Hello my people!",
      quests: [],
      num: 0,
      answers: []
    }
  },
  computed: {
    current(){
      return this.quests[this.num-1]
    },
    opts(){
      return this.quests[this.num-1].opts
    },
    solution(){
      return this.quests.map(e=>e.ans);
    }
  },
  async mounted(){
    await fetch('http://192.168.43.19:5000/api/questions')
      .then(res=>res.json())
      .then(e=>{
        this.quests = e;
        // console.log(this.quests);
      })
      .catch(async err=>{
        if(err.message=="Failed to fetch"){
          return await fetch('http://localhost:5000/api/questions')
            .then(res=>res.json())
            .then(e=>{
              this.quests = e;
              // console.log(this.quests);
            })
            .catch(e=>console.log(e.message))
        }
        console.log(err.message, err.code)
      })
  },
  methods:{
    next(){
      return this.num<this.quests.length-1?this.num++:''
    },
    prev(){
      return this.num>0?this.num--:''
    },
    change(arr){
      // console.log(arr, 23)
      this.answers[arr[1]] = parseInt(arr[0])
    },
    submit(){ 
      // console.log(this.answers)
      if(this.answers.length == this.solution.length){
        let score = 0
        for(let i=0; i<this.answers.length; i++){
          if(this.answers[i] == this.solution[i]){
            score++
          }
        }
        alert("you score "+score+"/"+this.solution.length)
      }else{
        alert("answer the last question")
      }
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #f11;
  margin-top: 60px;
}
.btn-group{
  padding: 0;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 10px;
  width: fit-content;
  margin: auto;
}
.btn:first-of-type{
  margin: 0;
  margin-right: 5px;
}
</style>

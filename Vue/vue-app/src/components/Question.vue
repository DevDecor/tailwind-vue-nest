<template>
    <div class="quest" v-show="num===index">
        <h2 v-if="question">{{question.quest}}</h2>
        <h1 v-else>loading...</h1>
        <form v-if="question" :key="num" @change="$emit('change', [$event.target.value, index])">
            <label v-for="(opt, index) in opts" :key="`${num}-${index}`"><input v-model="choice" :name="'nm-'+num" :value="opt.id" type="radio">{{opt.opt}}</label>
        </form>
        <div>
        </div>
    </div>
</template>
<script>
export default {
    props : ['question', 'num', 'index'],
    data(){
        return {
            choice: null
        }
    },
    computed: {
        opts(){
            return this.question.opts.sort(e=>Math.random()>0.5?1:-1)
        }
    }
}
</script>
<style>
    .quest{
        width: 50%;
        background: #f1f1f1;
        margin: auto;
        text-align: left;
        padding: 10px;
    }
    .quest h1{
        color: black;
    }
    .quest label{
        display: block;
        margin-left: 20px;
        margin-bottom: 5px;
    }
    button{
        padding:10px;
        font-size: larger;
        background: lightblue;
        border: 0;
    }
    @media screen and (max-width:720px) {
        .quest{
            width: 100%;
            padding: 20px;
        }
        button{
            padding:10px;
            font-size: large;
        }
    }
</style>
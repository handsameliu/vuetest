<template>
	<div class="timeline-demo">
		<timeline>
			<timeline-item v-for="(i, index) in count" :key="index">
				<h4 :class="[i === 0 ? 'recent' : '']">Timeline Node {{i + 1}}</h4>
				<p :class="[i === 0 ? 'recent' : '']">index {{i + 1}}</p>
			</timeline-item>
		</timeline>
    <x-button type="primary" @click.native="count = count==6?3:6"> Set to nodes</x-button>
    <x-button type="primary" @click.native='sendMsg'>给其他组件传值</x-button>
	</div>
</template>


<script>
    import eventHub from '../assets/eventHub'
    import { Timeline, TimelineItem, XButton } from 'vux'
    export default {
        name:'recordTimeLine',
        components: {Timeline,TimelineItem,XButton},
        data () {
            return {
                count: 3
            }
        },
        created(){
            console.log(222);
        },
        methods:{
            sendMsg(){
                var _this = this;
                eventHub.$emit('username','my name is username')
            }
        }
    }
</script>

<style lang="less">
.timeline-demo {
	p {
		color: #888;
		font-size: 0.8rem;
	}
	h4 {
		color: #666;
		font-weight: normal;
	}
	.recent {
		color: rgb(4, 190, 2)
	}
}
</style>
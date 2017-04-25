    Vue.component('custome-alert',{
		props:{
        		alertTitle:{
        			type:String,
        			default:'This is alert window'
        		}
        },
		template:`<div class="alert_wrap">
			            <h2 class="alert_title">{{alertTitle}}</h2>
			            <p class="alert_desc"><slot name='alertDesc'>default desc</slot></p>
			            <div class="alert_btn">
			                <button class="btn_cancle" @click='cancleAlert'>取消</button>
			                <button class="btn_ensure" @click='sureAlert'>确定</button>
			            </div>
        				</div>`,
        methods:{
        		cancleAlert:function(){
        			alert('canclealert');
        			this.$emit('hidealert');
        		},
        		sureAlert:function(){
        			alert('surealert');
        			this.$emit('hidealert');
        		}
        	}
	});


new Vue({
    el:'#app',
    data:{
    	showStatus:true
    },
    methods:{
    	hideThis:function(){
    		//alert(1111);
    		this.showStatus=false;
    	}
    }

});

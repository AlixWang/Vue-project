
new Vue({
	el:'#app',
	data:{
		showinfo:true,
	},
	components:{
		'custom-info':{
			props:{
				infotype:{
					type:String,
					default:'success'
				},
				title:{
					type:String,
					default:'这是一个提示框'
				},
				showicon:{
					type:Boolean,
					default:true
				},
				showclose:{
					type:Boolean,
					default:true
				}
			},
			template:`<div :class=[typeclass] v-show='showinfo'>
						<span v-show='showicon' :class=[icontypeclass]></span><p class="remind-content-sucess">{{ title }}</p><span v-on:click='closeinfo' v-show='showclose' class="remind-beficon"></span>
					  </div>`,
			computed:{
				typeclass:function(){
					return `remind-info-${this.infotype}`
				},
				icontypeclass:function(){
					return `remind-preicon-${this.infotype}`
				}
			},
			data:function(){
				return {
					showinfo:true
				};
			},
			methods:{
				closeinfo(){
					this.showinfo=false;
					// this.$emit('close');
				}
			}
		}
	}
})
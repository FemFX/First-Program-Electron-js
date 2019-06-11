new Vue({
	el : '#app',
	data : {
		msg : ''
	},
	methods: {
		reverseMessage() {
			this.msg = this.msg.split('').reverse().join('')
		  }
	},
})
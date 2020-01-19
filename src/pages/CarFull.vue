<template>
	<div>
		<h4>Car name: {{ $route.query.name }}</h4>
		<h4>Car Year: {{ year }}</h4>
		<div class="scroll"></div>
		<h6 id="scroll">Hello form the bottom</h6>
		<div class="scroll"></div>
	</div>
</template>
<script>
	export default {
		computed:{
			year(){
				return this.$route.query.year
			}
		}
	}
</script>

<style>

	.scroll{
		width: 100px;
		height: 1000px;
		background: #ccc;
	}
	
</style>
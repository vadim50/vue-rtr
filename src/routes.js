import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
import CarFull from './pages/CarFull'
import ErrorCmp from './pages/Error'

export default new VueRouter({
	routes: [

		{
			path: '',// localost:8080
			component: Home
		},
		{
			path: '/cars',// localost:8080/cars
			component: Cars,
			name: 'cars'
		},
		{
			path: '/car/:id',
			component: Car,
			children: [{
				path: 'full',// localost:8080/car/4/full
				component: CarFull,
				name: 'carFull'
			}]
		},
		{
			path:'/none',
			redirect: {
				name: 'cars'
			}
		},
		{
			path: '*',
			component: ErrorCmp
		}

	],
	mode: 'history',
	scrollBehavior(to, from, savePosition){

		if(savePosition){
			return savePosition
		}

		if(to.hash){
			return {selector: to.hash}
		}

		return {
			x: 0,
			y: 0
		}
	}
})
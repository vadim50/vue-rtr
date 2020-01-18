import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
import CarFull from './pages/CarFull'

export default new VueRouter({
	routes: [

		{
			path: '',// localost:8080
			component: Home
		},
		{
			path: '/cars',// localost:8080/cars
			component: Cars
		},
		{
			path: '/car/:id',
			component: Car,
			children: [{
				path: 'full',// localost:8080/car/4/full
				component: CarFull,
				name: 'carFull'
			}]
		}

	],
	mode: 'history'
})
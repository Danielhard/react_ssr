import Home from './Home';
import About from './About';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/about',
        component: About,
        loadData:About.loadData
    }

]

export default routes;
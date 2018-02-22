import FirstPage from '../views/first_page.jsx'
import Sex from '../views/sex.jsx'
import Message from '../views/message/Message.jsx';
import Result from '../views/result.jsx'
import Food from '../views/message/food.jsx'
import Allergy from '../views/message/allergy.jsx';
import Medical from '../views/message/medical.jsx';
import Feel from '../views/message/feel.jsx';
const routerConfig = {
    routes: [
        {
            path: '/first_page',
            component: FirstPage
        },
        {
            path: '/sex',
            component: Sex
        },
        {
            path: '/message',
            component: Message,
            children: [
                {
                    path: '/message/food',
                    component: Food
                },
                {
                    path: '/message/allergy',
                    component: Allergy
                },
                {
                    path: '/message/medical',
                    component: Medical
                },
                {
                    path: '/message/feel',
                    component: Feel
                }
            ]
        },
        {
            path: '/result',
            component: Result
        }
    ]
}
export default routerConfig;
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../components/Layout'

const AppRouter = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route path="/" exact={true} component={Home} />
            </Switch>
        </Layout>
    </BrowserRouter>
)


export default AppRouter
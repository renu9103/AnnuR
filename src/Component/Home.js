import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Products from './Products';
import Reports from './Reports';
import Orders from './Orders';
import ProductDetails from './ProductDetails';
import DailogBox from './DailogBox';
import OpreationalCockpit from './OpreationalCockpit';
import DataReadWrite from './DataReadWrite';



export default function Home() {
    return (
        <div>
            <Header />
            <div className='container-fluid'>
                <div className="row mainRow ">
                    <div className="col-2 sidebar">
                        <Sidebar />
                    </div>
                    <div className="col-10 main">
                        <Switch>
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/products" component={Products} />
                            <Route path="/orders" component={Orders} />
                            <Route path="/reports" component={Reports} />
                            <Route path="/dailogBox" component={DailogBox}/>
                            <Route path="/productDetails" component={ProductDetails} />
                            <Route path="/opreationalCockpit" component={OpreationalCockpit}/>
                            <Route path="/dataReadWrite" component={DataReadWrite}/>
                    {/* <Route path="/reports" component={Home} />
                    <Route path="/integrations" component={Home} /> */} 
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}

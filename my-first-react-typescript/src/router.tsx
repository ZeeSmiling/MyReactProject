import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import Root from "./Root";
import Login from "./../src/pages/Login/login";
import Admin from "./admin";
import Buttons from "./pages/ui/buttons";
import NoMatch from "./pages/NoMatch/NoMatch";
import Modals from "./pages/ui/modals";
import Loadings from "./pages/ui/loadings";
import Notices from "./pages/ui/notices";
import Messages from "./pages/ui/messages";
import Tab from "./pages/ui/tabs";
import Gallery from "./pages/ui/gallery";
import Carousels from "./pages/ui/carousel";
import FormLogin from "./pages/Login/login";
import CSSDemo from "./css/css-demo";
import Info from "./route_demo/route3/Info";
import Register from "./pages/Login/register";
import Basic from "./pages/table/basic";
import City from "./pages/City/city";
import Order from "./pages/order/order";
import Common from "./common";
import OrderDetail from "./pages/order/detail";

export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <Root>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons}/>
                                <Route path="/admin/ui/modals" component={Modals}/>
                                <Route path="/admin/ui/loadings" component={Loadings}/>
                                <Route path="/admin/ui/notification" component={Notices}/>
                                <Route path="/admin/ui/messages" component={Messages}/>
                                <Route path="/admin/ui/tabs" component={Tab}/>
                                <Route path="/admin/ui/gallery" component={Gallery}/>
                                <Route path="/admin/ui/carousel" component={Carousels}/>
                                <Route path="/admin/form/login" component={FormLogin}/>
                                <Route path="/admin/form/reg" component={Register}/>
                                <Route path="/admin/table/basic" component={Basic}/>
                                <Route path="/admin/city" component={City}/>
                                <Route path="/admin/order" component={Order}/>
                                <Route component={NoMatch}/>
                            </Switch>
                        </Admin>
                    }/>
                    {/*通用详情页面路由配置*/}
                    <Route path="/common" render={() =>
                        <Common>
                            <Route path="/common/order/detail/:orderId" component={OrderDetail}/>
                        </Common>
                    }/>
                    <Route path="/order/detail" component={Login}/>
                    <Route path="/css/test" component={CSSDemo}/>
                    <Route path="/test/info/:id" component={Info}/>
                </Root>
            </HashRouter>
        );
    }
}

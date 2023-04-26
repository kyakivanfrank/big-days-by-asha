import { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

function Dashboard() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [promotions, setPromotions] = useState([]);
    const [subscribers, setSubscribers] = useState([]);
    const [loginLogs, setLoginLogs] = useState([]);
    const [orders, setOrders] = useState([]);

    function addProduct(product) {
        setProducts((prevProducts) => [...prevProducts, product]);
    }

    function removeProduct(productId) {
        setProducts((prevProducts) =>
            prevProducts.filter((product) => product.id !== productId)
        );
    }

    function addPromotion(promotion) {
        setPromotions((prevPromotions) => [...prevPromotions, promotion]);
    }

    function removePromotion(promotionId) {
        setPromotions((prevPromotions) =>
            prevPromotions.filter((promotion) => promotion.id !== promotionId)
        );
    }

    function addCategory(category) {
        setCategories((prevCategories) => [...prevCategories, category]);
    }

    function addSubscriber(subscriber) {
        setSubscribers((prevSubscribers) => [...prevSubscribers, subscriber]);
    }

    function addLoginLog(loginLog) {
        setLoginLogs((prevLoginLogs) => [...prevLoginLogs, loginLog]);
    }

    function addOrder(order) {
        setOrders((prevOrders) => [...prevOrders, order]);
    }

    return (
        <Router>
            <div className="flex h-screen bg-gray-100">
                <nav className="w-56 bg-white shadow-lg">
                    <ul className="mt-6">
                        <li className="px-4 py-2 mb-2 text-gray-600 rounded-full hover:bg-gray-200">
                            <NavLink to="/products" activeClassName="font-bold">
                                Products ({products.length})
                            </NavLink>
                        </li>
                        <li className="px-4 py-2 mb-2 text-gray-600 rounded-full hover:bg-gray-200">
                            <NavLink to="/categories" activeClassName="font-bold">
                                Categories ({categories.length})
                            </NavLink>
                        </li>
                        <li className="px-4 py-2 mb-2 text-gray-600 rounded-full hover:bg-gray-200">
                            <NavLink to="/promotions" activeClassName="font-bold">
                                Promotions ({promotions.length})
                            </NavLink>
                        </li>
                        <li className="px-4 py-2 mb-2 text-gray-600 rounded-full hover:bg-gray-200">
                            <NavLink to="/subscribers" activeClassName="font-bold">
                                Subscribers ({subscribers.length})
                            </NavLink>
                        </li>
                        <li className="px-4 py-2 mb-2 text-gray-600 rounded-full hover:bg-gray-200">
                            <NavLink to="/login-logs" activeClassName="font-bold">
                                Login Logs ({loginLogs.length})
                            </NavLink>
                        </li>
                        <li className="px-4 py-2 mb-2 text-gray-600 rounded-full hover:bg-gray-200">
                            <NavLink to="/orders" activeClassName="font-bold">
                                Orders ({orders.length})
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="flex flex-col flex-1 overflow-hidden">
                    <header className="flex items-center px-6 py-4 bg-white border-b-2 border-gray-200">
                        <h1 className="text-lg font-bold">Dashboard</h1>
                    </header>
                    <main className="flex-1 overflow-y-scroll">
                            {/* here are the routes */}
                    </main>
                </div>
            </div>
        </Router>
    );
}

export default Dashboard;


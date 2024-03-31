import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/Main';
import KitchenPage from './pages/Kitchen';
import AccountCreationPage from './pages/AccountCreation';
import LoginPage from './pages/Login';
import PasswordResetPage from './pages/PasswordReset';
import UserProfilePage from './pages/UserProfile';
import KitchenProfilePage from './pages/KitchenProfile';
import CheckoutPage from './pages/Checkout';
import PaymentPage from './pages/Payment';
import OrderConfirmationPage from './pages/OrderConfirmation';
import Header from './components/Header';
import Footer from './components/Footer';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
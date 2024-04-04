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

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />                
                <Route path="/kitchen-page" element={<KitchenPage />} />                
                <Route path="/create-account" element={<AccountCreationPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/reset-password" element={<PasswordResetPage />} />
                <Route path="/profile" element={<UserProfilePage />} />
                <Route path="/kitchen-profile" element={<KitchenProfilePage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
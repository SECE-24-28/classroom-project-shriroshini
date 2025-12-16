import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProviderIntegrated } from './context/AuthContextIntegrated';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import ProtectedRoute from './routes/ProtectedRoute';
import NavbarIntegrated from './components/NavbarIntegrated';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import LoginIntegrated from './pages/LoginIntegrated';
import SignupIntegrated from './pages/SignupIntegrated';
import RechargePlansIntegrated from './pages/RechargePlansIntegrated';
import Recharge from './pages/Recharge';
import History from './pages/History';

function AppIntegrated() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProviderIntegrated>
          <UserProvider>
            <div className="min-h-screen flex flex-col">
              <NavbarIntegrated />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/login" element={<LoginIntegrated />} />
                  <Route path="/signup" element={<SignupIntegrated />} />
                  <Route path="/plans" element={
                    <ProtectedRoute>
                      <RechargePlansIntegrated />
                    </ProtectedRoute>
                  } />
                  <Route path="/recharge" element={
                    <ProtectedRoute>
                      <Recharge />
                    </ProtectedRoute>
                  } />
                  <Route path="/history" element={
                    <ProtectedRoute>
                      <History />
                    </ProtectedRoute>
                  } />
                </Routes>
              </main>
              <Footer />
            </div>
          </UserProvider>
        </AuthProviderIntegrated>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default AppIntegrated;
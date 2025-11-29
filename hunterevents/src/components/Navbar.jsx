import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logOut } from '../firebase/auth';

export default function Navbar() {
    const { currentUser } = useAuth();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await logOut();
        navigate('/signin');
    };

    return (
        <nav className="bg-white border-b border-border shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link
                        to="/home"
                        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                        <img
                            src="/images/hunter-logo.png"
                            alt="Hunter College Logo"
                            className="h-10 w-auto"
                        />
                        <span className="text-xl font-bold font-condensed">
                            Daily Events Portal
                        </span>
                    </Link>

                    <ul className="flex items-center space-x-6">
                        

                        {/*
                        {currentUser ? (
                            <>
                                <li className="text-sm text-muted-foreground">
                                    Welcome, {currentUser.displayName || currentUser.email}
                                </li>
                                <li>
                                    <button
                                        onClick={handleSignOut}
                                        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                                    >
                                        Sign Out
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li>
                                <Link
                                    to="/signin"
                                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium inline-block"
                                >
                                    Sign In
                                </Link>
                            </li>
                        )}
                        */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

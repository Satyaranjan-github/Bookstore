import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

const NetworkStatusChecker = () => {
    useEffect(() => {
        const handleOnline = () => {
            toast.success('✅ You are back online');
        };

        const handleOffline = () => {
            toast.error('⚠️ You are offline. Check your internet connection');
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        // Show initial state
        if (!navigator.onLine) {
            toast.error('⚠️ You are offline. Check your internet connection');
        }

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    return null;
};

export default NetworkStatusChecker;

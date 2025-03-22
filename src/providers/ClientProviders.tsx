'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ReduxProvider } from "@/redux/ReduxProvider";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <ReduxProvider>
            <AppRouterCacheProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    {children}
                </LocalizationProvider>
            </AppRouterCacheProvider>
        </ReduxProvider>
    );
} 
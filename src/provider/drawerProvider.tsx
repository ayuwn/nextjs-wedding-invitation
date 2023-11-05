'use client';
import * as React from 'react';

export const DrawerContext = React.createContext({
	open: false,
	setOpen: (open: boolean) => {},
});

interface DrawerProviderProps {
	children: React.ReactNode;
}

const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
	const [open, setOpen] = React.useState(false);

	return <DrawerContext.Provider value={{ open, setOpen }}>{children}</DrawerContext.Provider>;
};

export default DrawerProvider;

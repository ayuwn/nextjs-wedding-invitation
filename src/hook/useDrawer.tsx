import * as React from 'react';
import { DrawerContext } from '@/provider/drawerProvider';

export const useDrawer = () => React.useContext(DrawerContext);

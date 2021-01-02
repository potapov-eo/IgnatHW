

import { createContext } from 'react';
import {AppStoreType} from "../../p2-homeworks/h10/bll/store";
const initialGlobalState: AppStoreType = {
    theme:{themes:'some'as const,},
    loading:{ loading:false }
};
const ProfilePageContext = createContext(initialGlobalState);

export default ProfilePageContext;
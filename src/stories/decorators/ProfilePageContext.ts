import {createContext} from 'react';
import {AppStoreType} from "../../p2-homeworks/h10/bll/store";

const initialGlobalState: AppStoreType = {
    theme: {themes: 'some' as const,},
    loading: {loading: false},
    auth: {success: true,error:""},

};
const ProfilePageContext = createContext(initialGlobalState);

export default ProfilePageContext;
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AllActions from "./../store/store";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(AllActions, dispatch);
}
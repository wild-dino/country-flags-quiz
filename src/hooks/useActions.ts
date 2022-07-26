import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AllActions from "./../store/reducers/actions";

export const useActions = () => {
    const dispatch = useDispatch();
    return {...bindActionCreators(AllActions, dispatch), dispatch}
}
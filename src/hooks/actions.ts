import { languageActions } from '../store/languageLearning/language.slice';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const actions = {
  ...languageActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

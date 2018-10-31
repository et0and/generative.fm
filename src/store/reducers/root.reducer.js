import { combineReducers } from 'redux';
import isMuted from './is-muted.reducer';
import isPlaying from './is-playing.reducer';
import selectedPieceId from './selected-piece-id.reducer';
import volumePct from './volume-pct.reducer';
import activeTabId from './active-tab-id.reducer';
import isShuffleActive from './is-shuffle-active.reducer';
import pieceHistory from './piece-history.reducer';

const rootReducer = combineReducers({
  isMuted,
  isPlaying,
  selectedPieceId,
  volumePct,
  activeTabId,
  isShuffleActive,
  pieceHistory,
});

export default rootReducer;

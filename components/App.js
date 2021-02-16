"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = App;

var _react = _interopRequireWildcard(require("react"));

var _Game = _interopRequireDefault(require("./Game"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StarMatch = () => {
  const [gameId, setGameId] = (0, _react.useState)(1);
  return /*#__PURE__*/_react.default.createElement(_Game.default, {
    key: gameId,
    startNewGame: () => setGameId(gameId + 1)
  });
};

function App() {
  return /*#__PURE__*/_react.default.createElement(StarMatch, null);
}
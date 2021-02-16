"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue'
};

const PlayNumber = props => /*#__PURE__*/_react.default.createElement("button", {
  className: "number",
  style: {
    backgroundColor: colors[props.status]
  },
  onClick: () => props.onClick(props.number, props.status)
}, props.number);

var _default = PlayNumber;
exports.default = _default;
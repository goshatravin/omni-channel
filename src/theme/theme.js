const darkColors = {
  primary: '#393F47',
  active: '#4577C3',
  input_border: '#5F7283',
  input_placeholder: '#BBBDBF',
  text: '#FFFFFF',
  error: '#a95055',
  button: '#5d6b82',
};
const lightColors = {
  primary: '#F6F6F6',
  active: '#266CD7',
  input_border: '#EBEFF3',
  input_placeholder: '#9fa9ad',
  text: '#393F47',
  error: '#ff767e',
};

const theme = {
  other: {},
};

const getTheme = (mode) => {
  return {
    ...theme,
    colors: mode === 'light' ? lightColors : darkColors,
  };
};
export default getTheme;

export interface ITheme {
  button: {
    backgroundColor: string;
    color: string;
    fontSize: string;
    height: string;
    disabledColor: string;
  }
  link: {
    color: string;
    fontSize: string;
  }
  checkbox: {
    borderColor: string;
    strokeColor: string;
    color: string;
    fontSize: string;
  }
  errorComponent: {
    color: string;
    fontSize: string;
  }
  header: {
    color: string;
    fontSize: string;
  }
  input: {
    fontSize: string
    color: string;
    backgroundColor: string;
    placeholderColor: string;
    height: string;
  }
  radioButton: {
    borderColor: string;
    backgroundColor: string;
    fontSize: string;
  }
  select: {
    color: string;
    backgroundColor: string;
    backgroundModalColor: string;
    height: string;
    placeholderColor: string;
    backgroundHover: string;
    fontSize: string;
    heightOption: string;
  }
}

const defaultColors = {
  white: '#FFFFFF',
  blue: '#0094FF',
  black: '#222222',
  red: '#E82828',
  grey: '#F5F8FA',
  lightGrey: '#A2A2A2',
  fontSizeBig: '28px', 
  fontSizeMedium: '18px',
  fontSizeSlow: '14px',
  fontSizeVerySlow: '10px',
  heightField: '50px',
  heightButton: '62px',
  heightOption: '36px',
}

export const getTheme = (theme: typeof defaultColors): ITheme => {
  return {
    button: {
      backgroundColor: theme.blue,
      color: theme.white,
      fontSize: theme.fontSizeMedium,
      height: theme.heightButton,
      disabledColor: theme.lightGrey,
    },
    link: {
      color: theme.blue,
      fontSize: theme.fontSizeSlow,
    },
    checkbox: {
      borderColor: theme.blue,
      strokeColor: theme.blue,
      color: theme.black,
      fontSize: theme.fontSizeSlow,
    },
    errorComponent: {
      color: theme.red,
      fontSize: theme.fontSizeVerySlow,
    },
    header: {
      color: theme.black,
      fontSize: theme.fontSizeBig,
    },
    input: {
      fontSize: theme.fontSizeSlow,
      color: theme.black,
      backgroundColor: theme.grey,
      placeholderColor: theme.lightGrey,
      height: theme.heightField,
    },
    radioButton: {
      borderColor: theme.blue,
      backgroundColor: theme.blue,
      fontSize: theme.fontSizeSlow,
    },
    select: {
      color: theme.black,
      backgroundColor: theme.grey,
      backgroundModalColor: theme.white,
      height: theme.heightField,
      placeholderColor: theme.lightGrey,
      backgroundHover: theme.grey,
      fontSize: theme.fontSizeSlow,
      heightOption: theme.heightOption
    }
  }
} 

export const defaultTheme = getTheme(defaultColors);

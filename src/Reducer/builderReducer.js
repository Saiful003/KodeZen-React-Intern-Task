// Action Types
// Intial State
// Builder Reducer function

const ACTIONS = {
  SELECT_FONT: "selectFont",
  SELECT_FONT_WEIGHT: "selectFontWeight",
  SELECT_TEXT_DECORATION: "selectTextDecoration",
  SELECT_FONT_STYLE: "selectFontStyle",
  SELECT_TRANSFORM_STYLE: "selectTransformStyle",
  SIZE: "size",
  TOGGLE_EDITOR: "toggleEditor",
  TOGGLE_FONT_FAMILY: "toogleFontFamily",
  TOGGLE_FONT_WEIGHT: "toogleFontWeight",
  TOGGLE_TRANSFORM: "toogleTransform",
  TOGGLE_STYLE: "toogleStyle",
  TOGGLE_DECORATION: "toogleDecoration",
  UNIT_CHANGE: "unitChange",
};

const initialState = {
  editorState: {
    font: { displayName: "", fontFamily: "" },
    fontWeight: { value: "", type: "" },
    fontSize: { value: 32, unit: "px" },
    fontStyle: "normal",
    textTransform: "none",
    textDecoration: "none",
    lineHeight: { value: 32, unit: "px" },
    letterSpacing: { value: 0, unit: "px" },
    wordSpacing: { value: 0, unit: "px" },
  },
  onclickState: {
    isOpenFontFamily: false,
    isOpenFontWeight: false,
    isOpenTransform: false,
    isOpenFontStyle: false,
    isOpenTextDecoration: false,
    isOpenEditor: false,
  },
};

const builderReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SELECT_FONT: {
      const { displayName, fontFamily } = action.payload;

      return {
        ...state,
        editorState: {
          ...state.editorState,
          font: { ...state.font, displayName, fontFamily },
        },
      };
    }
    case ACTIONS.SELECT_FONT_WEIGHT: {
      const { value, type } = action.payload;

      return {
        ...state,
        editorState: {
          ...state.editorState,
          fontWeight: { ...state.fontWeight, value, type },
        },
      };
    }

    case ACTIONS.SELECT_TRANSFORM_STYLE: {
      return {
        ...state,
        editorState: {
          ...state.editorState,
          textTransform: action.payload,
        },
      };
    }

    case ACTIONS.SIZE: {
      const { stateName, value } = action.payload;

      return {
        ...state,
        editorState: {
          ...state.editorState,
          [stateName]: { ...state.editorState[stateName], value },
        },
      };
    }

    case ACTIONS.UNIT_CHANGE: {
      const { stateName, unit } = action.payload;
      return {
        ...state,
        editorState: {
          ...state.editorState,
          [stateName]: { ...state.editorState[stateName], unit },
        },
      };
    }

    case ACTIONS.SELECT_FONT_STYLE: {
      const { fontStyle } = action.payload;

      return {
        ...state,
        editorState: {
          ...state.editorState,
          fontStyle,
        },
      };
    }
    case ACTIONS.SELECT_TEXT_DECORATION: {
      const { textDecoration } = action.payload;

      return {
        ...state,
        editorState: {
          ...state.editorState,
          textDecoration,
        },
      };
    }
    case ACTIONS.TOGGLE_EDITOR: {
      return {
        ...state,
        onclickState: {
          ...state.onclickState,
          isOpenEditor: !state.onclickState.isOpenEditor,
        },
      };
    }
    case ACTIONS.TOGGLE_FONT_FAMILY: {
      return {
        ...state,
        onclickState: {
          ...state.onclickState,
          isOpenFontFamily: !state.onclickState.isOpenFontFamily,
        },
      };
    }
    case ACTIONS.TOGGLE_FONT_WEIGHT: {
      return {
        ...state,
        onclickState: {
          ...state.onclickState,
          isOpenFontWeight: !state.onclickState.isOpenFontWeight,
        },
      };
    }
    case ACTIONS.TOGGLE_TRANSFORM: {
      return {
        ...state,
        onclickState: {
          ...state.onclickState,
          isOpenTransform: !state.onclickState.isOpenTransform,
        },
      };
    }
    case ACTIONS.TOGGLE_STYLE: {
      return {
        ...state,
        onclickState: {
          ...state.onclickState,
          isOpenFontStyle: !state.onclickState.isOpenFontStyle,
        },
      };
    }
    case ACTIONS.TOGGLE_DECORATION: {
      return {
        ...state,
        onclickState: {
          ...state.onclickState,
          isOpenTextDecoration: !state.onclickState.isOpenTextDecoration,
        },
      };
    }
    default: {
      return state;
    }
  }
};

export { builderReducer, initialState, ACTIONS };

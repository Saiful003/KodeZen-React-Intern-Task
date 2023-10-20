import { useEffect, useReducer } from "react";
import Editor from "./components/Editor/Editor";
// import { builderReducer } from "./Reducer/builderReducer";
import { RiGlobalLine } from "react-icons/ri";
import { BiSolidEditAlt } from "react-icons/bi";
import {
  builderReducer,
  initialState,
  ACTIONS,
} from "./Reducer/builderReducer";
import Preview from "./components/Preview/Preview";
import Header from "./components/Header/Header";
import { fonts } from "./Data/fonts";

function App() {
  const [state, dispatch] = useReducer(builderReducer, initialState);
  // Dispatch functions for state update
  const handleSelectFont = (displayName, fontFamily) => {
    dispatch({
      type: ACTIONS.SELECT_FONT,
      payload: { displayName, fontFamily },
    });
  };
  const handleSelectFontWeight = (payload) => {
    dispatch({
      type: ACTIONS.SELECT_FONT_WEIGHT,
      payload,
    });
  };
  const handleSize = (stateName, value) => {
    dispatch({
      type: ACTIONS.SIZE,
      payload: { stateName, value },
    });
  };
  const handleSelectFontStyle = (fontStyle) => {
    dispatch({
      type: ACTIONS.SELECT_FONT_STYLE,
      payload: { fontStyle },
    });
  };
  const handleSelectTextDecoration = (textDecoration) => {
    dispatch({
      type: ACTIONS.SELECT_TEXT_DECORATION,
      payload: { textDecoration },
    });
  };
  const handleChangeUnit = (stateName, unit) => {
    dispatch({
      type: ACTIONS.UNIT_CHANGE,
      payload: { stateName, unit },
    });
  };
  const handleSelectTransform = (payload) => {
    dispatch({
      type: ACTIONS.SELECT_TRANSFORM_STYLE,
      payload,
    });
  };

  // Open / Close Dispatch function
  const handleToggleEditor = () => dispatch({ type: ACTIONS.TOGGLE_EDITOR });
  const handleToggleFontFamily = () =>
    dispatch({ type: ACTIONS.TOGGLE_FONT_FAMILY });
  const handleToggleFontWeight = () =>
    dispatch({ type: ACTIONS.TOGGLE_FONT_WEIGHT });
  const handleToggleTransform = () =>
    dispatch({ type: ACTIONS.TOGGLE_TRANSFORM });
  const handleToggleStyle = () => dispatch({ type: ACTIONS.TOGGLE_STYLE });
  const handleToggleDecoration = () =>
    dispatch({ type: ACTIONS.TOGGLE_DECORATION });

  console.log(state);

  // Write a function that render relavent font weight depanding on current font state
  const renderFontWeight = () => {
    if (state.editorState.font.displayName !== "") {
      return fonts
        .filter((f) => f.displayName === state.editorState.font.displayName)[0]
        .fontWeight.filter(
          (w) => w.value !== state.editorState.fontWeight.value
        );
    }
  };
  // When app first time mount to the dom
  // Here we initialize very first selected font
  useEffect(() => {
    const firstFontItem = fonts[0];

    handleSelectFont(firstFontItem.displayName, firstFontItem.fontFamily);
  }, []);

  // Here we initialized when font changeed should be changed relavent font weight
  useEffect(() => {
    const firstfontWeight = renderFontWeight();
    if (firstfontWeight) {
      handleSelectFontWeight({
        value: firstfontWeight[0].value,
        type: firstfontWeight[0].type,
      });
    }
  }, [state.editorState.font]);

  return (
    <div className="container">
      <div className="pageWrapper">
        <aside>
          {/* Edit Item */}
          <div className="editPropertyWrapper">
            <p className="editPropertyText">Typography</p>
            <div className="editPropertyButtonGroup">
              <div className="editPropertyIconButton">
                <RiGlobalLine />
              </div>
              <div
                onClick={handleToggleEditor}
                className="editPropertyIconButton"
              >
                <BiSolidEditAlt />
              </div>
            </div>
            {state.onclickState.isOpenEditor && (
              <Editor
                handleToggleFontFamily={handleToggleFontFamily}
                handleToggleFontWeight={handleToggleFontWeight}
                handleToggleTransform={handleToggleTransform}
                handleToggleStyle={handleToggleStyle}
                handleToggleDecoration={handleToggleDecoration}
                handleSelectFont={handleSelectFont}
                handleSelectFontWeight={handleSelectFontWeight}
                handleSize={handleSize}
                handleChangeUnit={handleChangeUnit}
                handleSelectTransform={handleSelectTransform}
                handleSelectFontStyle={handleSelectFontStyle}
                handleSelectTextDecoration={handleSelectTextDecoration}
                renderFontWeight={renderFontWeight}
                state={state}
              />
            )}
          </div>
        </aside>
        <main>
          <div className="rightAreaWrapper">
            {/* Header */}
            <Header />
            {/* Preview */}
            <Preview state={state} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;

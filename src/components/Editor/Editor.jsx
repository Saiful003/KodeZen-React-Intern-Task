import React, { useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import { SlReload } from "react-icons/sl";
import styles from "./Editor.module.css";
import { MdOutlineDesktopMac } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { fonts } from "../../Data/fonts";
import { textTransfrom } from "../../Data/transfrom";
import { fontStyle } from "../../Data/fontStyle";
import { styleDecoration } from "../../Data/decoration";

function Editor({
  handleToggleFontFamily,
  handleToggleFontWeight,
  handleToggleTransform,
  handleToggleStyle,
  handleToggleDecoration,
  handleSelectFont,
  handleSelectTextDecoration,
  handleSelectFontWeight,
  handleSelectTransform,
  handleSelectFontStyle,
  renderFontWeight,
  handleChangeUnit,
  handleSize,
  state,
}) {
  const {
    onclickState: {
      isOpenFontFamily,
      isOpenFontWeight,
      isOpenTransform,
      isOpenFontStyle,
      isOpenTextDecoration,
    },
    editorState: { font, fontSize, lineHeight, letterSpacing, wordSpacing },
  } = state;

  return (
    <div className={styles.editorWrapper}>
      <div className={styles.editorTop}>
        <div className={styles.openIndicator}></div>
        <p className={styles.editorTopText}>Typography</p>
        <div className={styles.editorTopButtonGroup}>
          <div className={styles.editorTopButton}>
            <SlReload />
          </div>
          <div className={styles.editorTopButton}>
            <BsPlus />
          </div>
        </div>
      </div>
      <div className={styles.editorBody}>
        <div className={styles.cssPropertyItemWrap}>
          {/* Select Type Editor */}

          {/* Font Family Property */}
          <div className={styles.cssPropertyItem}>
            <p className={styles.cssPropertyItemName}>Family</p>
            <div
              onClick={handleToggleFontFamily}
              className={styles.selectBoxWrapper}
            >
              <p className={styles.selectBoxText}>{font.displayName}</p>
              <div className={styles.selectBoxIcon}>
                <IoMdArrowDropdown />
              </div>
              {/* Select Box Dropdown Item */}
              {isOpenFontFamily && (
                <div className={styles.dropdownItemWrap}>
                  <div className={styles.dropdownItemInnerWrap}>
                    {fonts
                      .filter((f) => f.displayName !== font.displayName)
                      .map((font) => (
                        <p
                          onClick={() =>
                            handleSelectFont(font.displayName, font.fontFamily)
                          }
                          key={font.id}
                          className={styles.dropdownItem}
                        >
                          {font.displayName}
                        </p>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Font Size */}
          <div className={styles.inputPropertyItem}>
            <div className="flex">
              <div className="flex gap-5px">
                <p>Size</p>
                <div className="flex">
                  <MdOutlineDesktopMac />
                </div>
              </div>
              <select
                value={state.editorState.fontSize.unit}
                name="fontSize"
                onChange={(e) => {
                  const unit = e.target.value;
                  handleChangeUnit(e.target.name, unit);
                }}
                className={styles.unitSelect}
              >
                <option value="px">PX</option>
                <option value="rem">REM</option>
                <option value="em">EM</option>
                <option value="vh">VH</option>
                <option value="vw">VW</option>
                <option value="svh">SVH</option>
              </select>
            </div>
            <div className={styles.inputGroupWrapper}>
              <input
                value={fontSize.value}
                name="fontSize"
                onChange={(e) => handleSize(e.target.name, e.target.value)}
                className={styles.rangInput}
                type="range"
                min={0}
                max={100}
              />
              <input
                value={fontSize.value}
                name="fontSize"
                onChange={(e) => handleSize(e.target.name, e.target.value)}
                className={styles.numberInput}
                type="number"
                min={0}
                max={100}
              />
            </div>
          </div>

          {/* Font Weight */}
          <div className={styles.cssPropertyItem}>
            <p className={styles.cssPropertyItemName}>Weight</p>
            <div
              onClick={handleToggleFontWeight}
              className={styles.selectBoxWrapper}
            >
              <p className={styles.selectBoxText}>
                {`${state.editorState.fontWeight.value} (${state.editorState.fontWeight.type})`}
              </p>
              <div className={styles.selectBoxIcon}>
                <IoMdArrowDropdown />
              </div>
              {/* Select Box Dropdown Item */}
              {isOpenFontWeight && (
                <div className={styles.dropdownItemWrap}>
                  <div className={styles.dropdownItemInnerWrap}>
                    {renderFontWeight().map((w) => (
                      <p
                        onClick={() =>
                          handleSelectFontWeight({
                            value: w.value,
                            type: w.type,
                          })
                        }
                        key={w.id}
                        className={styles.dropdownItem}
                      >
                        {`${w.value} (${w.type})`}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Text Transform */}
          <div className={styles.cssPropertyItem}>
            <p className={styles.cssPropertyItemName}>Transform</p>
            <div
              onClick={handleToggleTransform}
              className={styles.selectBoxWrapper}
            >
              <p className={styles.selectBoxText}>
                {state.editorState.textTransform}
              </p>
              <div className={styles.selectBoxIcon}>
                <IoMdArrowDropdown />
              </div>
              {/* Select Box Dropdown Item */}
              {isOpenTransform && (
                <div className={styles.dropdownItemWrap}>
                  <div className={styles.dropdownItemInnerWrap}>
                    {textTransfrom
                      .filter(
                        (t) => t.value !== state.editorState.textTransform
                      )
                      .map((transform) => (
                        <p
                          onClick={() => handleSelectTransform(transform.value)}
                          key={transform.id}
                          className={styles.dropdownItem}
                        >
                          {transform.value}
                        </p>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Font Style */}
          <div className={styles.cssPropertyItem}>
            <p className={styles.cssPropertyItemName}>Style</p>
            <div
              onClick={handleToggleStyle}
              className={styles.selectBoxWrapper}
            >
              <p className={styles.selectBoxText}>
                {state.editorState.fontStyle}
              </p>
              <div className={styles.selectBoxIcon}>
                <IoMdArrowDropdown />
              </div>
              {/* Select Box Dropdown Item */}
              {isOpenFontStyle && (
                <div className={styles.dropdownItemWrap}>
                  <div className={styles.dropdownItemInnerWrap}>
                    {fontStyle
                      .filter((s) => s.value !== state.editorState.fontStyle)
                      .map((s) => (
                        <p
                          onClick={() => handleSelectFontStyle(s.value)}
                          key={s.id}
                          className={styles.dropdownItem}
                        >
                          {s.value}
                        </p>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Text Decoration */}
          <div className={styles.cssPropertyItem}>
            <p className={styles.cssPropertyItemName}>Decoration</p>
            <div
              onClick={handleToggleDecoration}
              className={styles.selectBoxWrapper}
            >
              <p className={styles.selectBoxText}>
                {state.editorState.textDecoration}
              </p>
              <div className={styles.selectBoxIcon}>
                <IoMdArrowDropdown />
              </div>
              {/* Select Box Dropdown Item */}
              {isOpenTextDecoration && (
                <div className={styles.dropdownItemWrap}>
                  <div className={styles.dropdownItemInnerWrap}>
                    {styleDecoration
                      .filter(
                        (decoration) =>
                          decoration.value !== state.editorState.textDecoration
                      )
                      .map((decoration) => (
                        <p
                          onClick={() =>
                            handleSelectTextDecoration(decoration.value)
                          }
                          key={decoration.id}
                          className={styles.dropdownItem}
                        >
                          {decoration.value}
                        </p>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Line Height */}
          <div className={styles.inputPropertyItem}>
            <div className="flex">
              <div className="flex gap-5px">
                <p>Line-Height</p>
                <div className="flex">
                  <MdOutlineDesktopMac />
                </div>
              </div>
              <select
                name="lineHeight"
                value={state.editorState.lineHeight.unit}
                onChange={(e) => {
                  const unit = e.target.value;
                  handleChangeUnit(e.target.name, unit);
                }}
                className={styles.unitSelect}
              >
                <option value="px">PX</option>
                <option value="rem">REM</option>
                <option value="em">EM</option>
                <option value="">-</option>
              </select>
            </div>
            <div className={styles.inputGroupWrapper}>
              <input
                value={lineHeight.value}
                name="lineHeight"
                onChange={(e) => handleSize(e.target.name, e.target.value)}
                className={styles.rangInput}
                type="range"
                min={0}
                max={100}
              />
              <input
                value={lineHeight.value}
                name="lineHeight"
                onChange={(e) => handleSize(e.target.name, e.target.value)}
                className={styles.numberInput}
                type="number"
                min={0}
                max={100}
              />
            </div>
          </div>

          {/* Letter Spacing */}
          <div className={styles.inputPropertyItem}>
            <div className="flex">
              <div className="flex gap-5px">
                <p>Letter-Spacing</p>
                <div className="flex">
                  <MdOutlineDesktopMac />
                </div>
              </div>
              <select
                name="letterSpacing"
                value={state.editorState.letterSpacing.unit}
                onChange={(e) => {
                  const unit = e.target.value;
                  handleChangeUnit(e.target.name, unit);
                }}
                className={styles.unitSelect}
              >
                <option value="px">PX</option>
                <option value="rem">REM</option>
                <option value="em">EM</option>
              </select>
            </div>
            <div className={styles.inputGroupWrapper}>
              <input
                value={letterSpacing.value}
                name="letterSpacing"
                onChange={(e) => handleSize(e.target.name, e.target.value)}
                className={styles.rangInput}
                type="range"
                min={0}
                max={100}
              />
              <input
                value={letterSpacing.value}
                name="letterSpacing"
                onChange={(e) => handleSize(e.target.name, e.target.value)}
                className={styles.numberInput}
                type="number"
                min={0}
                max={100}
              />
            </div>
          </div>

          {/* Word Spacing */}
          <div className={styles.inputPropertyItem}>
            <div className="flex">
              <div className="flex gap-5px">
                <p>Word-Spacing</p>
                <div className="flex">
                  <MdOutlineDesktopMac />
                </div>
              </div>
              <select
                name="wordSpacing"
                value={state.editorState.wordSpacing.unit}
                onChange={(e) => {
                  const unit = e.target.value;
                  handleChangeUnit(e.target.name, unit);
                }}
                className={styles.unitSelect}
              >
                <option value="px">PX</option>
                <option value="rem">REM</option>
                <option value="em">EM</option>
              </select>
            </div>
            <div className={styles.inputGroupWrapper}>
              <input
                value={wordSpacing.value}
                name="wordSpacing"
                onChange={(e) => handleSize(e.target.name, e.target.value)}
                className={styles.rangInput}
                type="range"
                min={0}
                max={50}
              />
              <input
                value={wordSpacing.value}
                name="wordSpacing"
                onChange={(e) => handleSize(e.target.name, e.target.value)}
                className={styles.numberInput}
                type="number"
                min={0}
                max={50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;

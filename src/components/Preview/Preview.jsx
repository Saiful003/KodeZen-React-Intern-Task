import React from "react";
import styles from "./Preview.module.css";

function Preview({ state }) {
  // Let's destructure our state
  const {
    editorState: {
      font,
      fontWeight,
      fontSize,
      fontStyle,
      textDecoration,
      textTransform,
      lineHeight,
      letterSpacing,
      wordSpacing,
    },
  } = state;

  return (
    <div className={styles.previewAreaWrapper}>
      <div className={styles.previewArea}>
        <h2 className={styles.userGuideText}>
          To change typography for this text below, please click edit icon on
          typography panel!😎😎😎
        </h2>
        <h2
          className={styles.previewHeading}
          style={{
            fontFamily: font.fontFamily,
            fontWeight: fontWeight.value,
            fontSize: `${fontSize.value}${fontSize.unit}`,
            lineHeight: `${lineHeight.value}${lineHeight.unit}`,
            letterSpacing: `${letterSpacing.value}${letterSpacing.unit}`,
            wordSpacing: `${wordSpacing.value}${wordSpacing.unit}`,
            textTransform,
            fontStyle,
            textDecoration,
          }}
        >
          “If everything was perfect you would never learn and you would never
          grow.” - Beyonce
        </h2>
      </div>
    </div>
  );
}

export default Preview;

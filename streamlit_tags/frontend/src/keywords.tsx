import React,{ useEffect, useState, ReactElement, ReactNode }  from "react"
import { ComponentProps, Streamlit, withStreamlitConnection } from "streamlit-component-lib"
import { TagsInput } from "./react-tag-input-componet";
import "./styles.css";

interface PythonArgs {
  label: string
  text: string
  color: string
  initialValue: string[]
  suggestions: string[]
  maxTags: number
}

const Custom_keywords = (props: ComponentProps):ReactElement => {
  // Destructure using Typescript interface
  // This ensures typing validation for received props from Python
  let { label, text, color, initialValue, suggestions, maxTags}: PythonArgs = props.args
  const [value, setValue] = useState(initialValue)

  const onSubmit = (values: string[]) => {
    setValue(values)
    Streamlit.setComponentValue((values))
  }
  useEffect(() => Streamlit.setFrameHeight())
  return (
    <div>
        <TagsInput
        value={value}
        color={color}
        onChange= {(value) =>  onSubmit(value)}
        name={label}
        placeHolder={text}
        suggestions={suggestions}
        maxTags={maxTags}
      />
    </div>
  )
}

export default withStreamlitConnection(Custom_keywords)

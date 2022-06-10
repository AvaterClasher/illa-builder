import { RadioGroup } from "@illa-design/radio"
import { FC } from "react"
import LabelWrapper from "@/wrappedComponents/LabelWrapper"
import { WrappedSegmentedControlProps } from "./interface"
import { withParser } from "@/wrappedComponents/parserHOC"

const WrappedSegmentedControl: FC<WrappedSegmentedControlProps> = (props) => {
  const {
    label,
    labelPosition,
    labelWidth,
    labelWidthUnit,
    labelCaption,
    labelAlign,
    tooltipText,
    value,
    defaultValue,
    disabled,
    options,
    direction,
    colorScheme,
    handleUpdateDsl,
  } = props
  return (
    <LabelWrapper
      label={label}
      labelAlign={labelAlign}
      labelPosition={labelPosition}
      labelWidth={labelWidth}
      labelWidthUnit={labelWidthUnit}
      labelCaption={labelCaption}
      tooltipText={tooltipText}
    >
      <RadioGroup
        type="button"
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        options={options}
        direction={direction}
        colorScheme={colorScheme}
        onChange={(value) => {
          handleUpdateDsl({ value })
        }}
      />
    </LabelWrapper>
  )
}

WrappedSegmentedControl.displayName = "WrappedSegmentedControl"

export const SegmentedControlWidget = withParser(WrappedSegmentedControl)

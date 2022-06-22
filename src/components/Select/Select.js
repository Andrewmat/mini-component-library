import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import Icon from "../Icon"
import { getDisplayedValue } from "./Select.helpers"

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children)

	return (
		<SSelect value={value} onChange={onChange}>
			{children}
		</SSelect>
	)
}

export default Select

const SSelect = styled.select`
	padding: 8px;
	border-radius: 8px;
`

import React, { useMemo, useRef } from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import Icon from "../Icon"
import { getDisplayedValue } from "./Select.helpers"
import VisuallyHidden from "../VisuallyHidden"

const Select = ({ label, value, onChange, children }) => {
	const displayedValue = getDisplayedValue(value, children)

	const width = useMemo(() => {
		const elem = document.createElement("span")
		elem.textContent = displayedValue
		elem.style.visibility = "hidden"
		document.body.appendChild(elem)
		const width = elem.getBoundingClientRect().width
		elem.remove()
		return width
	}, [displayedValue])

	return (
		<SWrapper>
			<label>
				<VisuallyHidden>{label}</VisuallyHidden>
				<SSelect
					value={value}
					onChange={onChange}
					selectWidth={width}
				>
					{children}
				</SSelect>
				<SIconWrapper>
					<Icon id="chevron-down" size={24} />
				</SIconWrapper>
			</label>
		</SWrapper>
	)
}

export default Select

const SWrapper = styled.div`
	position: relative;
	display: inline-block;
`

const SSelect = styled.select`
	appearance: none;
	font-size: ${16 / 16}rem;
	display: inline-block;
	padding: 8px 8px 8px 8px;
	border-radius: 8px;
	width: ${(p) => p.selectWidth + 43}px;
	color: ${COLORS.gray700};
	border: none;

	&:hover {
		color: black;
	}
`
const SIconWrapper = styled.div`
	position: absolute;
	right: 0;
	height: 100%;
	width: 30px;
	display: inline-flex;
	flex-flow: column nowrap;
	place-content: center;
`

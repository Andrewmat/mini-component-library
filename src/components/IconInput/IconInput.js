import React, { useState } from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"

import Icon from "../Icon"
import VisuallyHidden from "../VisuallyHidden"

const IconInput = ({
	label,
	icon,
	width = 250,
	size,
	placeholder,
}) => {
	const style = styles[size]
	return (
		<SWrapper style={{ "--width": `${width}px`, ...style }}>
			<SLabel>
				<Icon id={icon} {...iconStyles[size]} />
				<VisuallyHidden>{label}</VisuallyHidden>
				<SInput placeholder={placeholder} />
			</SLabel>
		</SWrapper>
	)
}

const styles = {
	small: {
		"--font-size": 14,
		"--border-size": 1,
	},
	large: {
		"--font-size": 18,
		"--border-size": 2,
	},
}

const iconStyles = {
	small: {
		size: 16,
		strokeWidth: 1,
	},
	large: {
		size: 24,
		strokeWidth: 2,
	},
}

const SWrapper = styled.div`
	position: relative;
	width: var(--width);
	border-bottom: calc(var(--border-size) * 1px) solid black;
	padding-bottom: 4px;
	color: ${COLORS.gray700};
	font-size: calc(var(--font-size) * ${1 / 16}rem);

	&:focus-within {
		border-radius: 2px;
		outline: #4374cb solid 2px;
		outline-offset: 2px;
	}
	&:hover,
	&:focus-within {
		color: black;
	}
`

const SLabel = styled.label`
	display: flex;
	gap: 10px;
`

const SInput = styled.input`
	display: inline-block;
	border: none;
	flex-grow: 1;
	color: inherit;
	font-size: 1em;

	font-weight: 700;

	&::placeholder {
		font-weight: 400;
		color: ${COLORS.gray500};
	}

	&:focus {
		outline: none;
	}
`

export default IconInput

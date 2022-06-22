/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components"

import { COLORS } from "../../constants"
import VisuallyHidden from "../VisuallyHidden"

const ProgressBar = ({ value, size }) => {
	return (
		<SProgress
			value={value}
			max="100"
			style={SIZE[size]}
			size={size}
		></SProgress>
	)
}

const SIZE = {
	small: {
		"--width": "370px",
		"--height": "8px",
		"--border-radius": "4px",
		"--padding": "0",
	},
	medium: {
		"--width": "370px",
		"--height": "12px",
		"--border-radius": "4px",
		"--padding": "0",
	},
	large: {
		"--width": "370px",
		"--height": "24px",
		"--border-radius": "8px",
		"--padding": "4px",
	},
}

const SProgress = styled.progress`
	width: var(--width);
	height: var(--height);
	-webkit-appearance: none;
	border-radius: var(--border-radius);
	border: ${COLORS.gray300} solid 1px;

	&::-webkit-progress-bar {
		background-color: ${COLORS.transparentGray15};

		box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);

		padding: var(--padding);
		border-radius: var(--border-radius);
	}

	&::-webkit-progress-inner-element {
		border-radius: var(--border-radius);
	}

	&::-webkit-progress-value {
		background-color: ${COLORS.primary};
		border-top-left-radius: calc(
			var(--border-radius) - var(--padding)
		);
		border-bottom-left-radius: calc(
			var(--border-radius) - var(--padding)
		);

		${(p) =>
			p.value >= 99.5 &&
			`
			border-top-right-radius: calc(
				${p.value / 100} *
					(var(--border-radius) - var(--padding))
			);
			border-bottom-right-radius: calc(
				${p.value / 100} *
					(var(--border-radius) - var(--padding))
			);
		`}
	}
`

export default ProgressBar

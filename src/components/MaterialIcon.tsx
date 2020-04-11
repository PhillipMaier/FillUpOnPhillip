/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { forwardRef } from 'react'
import _ from 'lodash/fp'
import styled from 'styled-components'

interface IconStylingProps {
  size?: string,
  color?: string,
  onclick?: () => void,
  hasHoverEffect?: boolean,
  width?: string,
  alignSelf?: string,
  overflow?: string,
  display?: string,
}

interface IMaterialIconsProps extends IconStylingProps {
  name: string,
  onClick?: () => any,
}

// eslint-disable-next-line no-unused-vars
const ICON_THEMES = {
  FILLED: '',
  OUTLINED: '-outlined',
  ROUNDED: '-round',
  TWOTONE: '-two-tone',
  SHARP: '-sharp',
}

const IconContainer = styled.div<IconStylingProps>`
  display: ${({ display }) => display};
  cursor: ${({ onClick }) => (onClick ? 'pointer' : undefined)};
  align-self: ${({ alignSelf }) => alignSelf};
`

// TODO: avoid using !important
// TODO: how to add rgba to theme.
const Icon = styled.i<IconStylingProps>`
  overflow: ${({ overflow }) => overflow};
  font-size: ${({ size }) => size} !important;
  color: ${({ color }) => color}; 
  width: ${({ width }) => width};
  &:hover {
    background: ${({ hasHoverEffect, theme }) => hasHoverEffect && theme.minorBackgroundColorSoft};
    border-radius: 20px;
  }
`

// TODO: correctly manage onKeyPress, role and tabIndex...
// TODO: clarify React.Ref attribute
const MaterialIcon = forwardRef(
  ({
    name, onClick, alignSelf, display, ...props
  }: IMaterialIconsProps, buttonRef: React.Ref<any>) => {
    // TODO: make a regex to do this super quick
    const materialTheme = _.get(_.flow(_.split('_'), _.last, _.toUpper)(name), ICON_THEMES)
    return (
      <IconContainer
        role={onClick && 'button'}
        onClick={onClick}
        onKeyPress={onClick}
        alignSelf={alignSelf}
        display={display}
        ref={buttonRef}
      >
        <Icon {...props} className={materialTheme ? `material-icons${materialTheme}` : 'material-icons'}>
          {name}
        </Icon>
      </IconContainer>
    )
  },
)

export default MaterialIcon

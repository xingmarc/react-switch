import React, { Component, PropTypes } from 'react'
import './Switch.css'

const myMagnificentBlueColor = 'rgb(68, 135, 218)'
const anotherMagnificentBlueColor = 'rgba(68, 135, 218, 0.3)'
const theWhiteOfEternity = 'rgb(255, 255, 255)'

class Switch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            checked: props.checked
        }
        this.onCheck = this.onCheck.bind(this)
    }

    onCheck() {
        this.setState({checked: !this.state.checked})
        this.props.onChange(!this.state.checked)
    }

    render() {
        const { checked } = this.state
        const {
            width,
            disabled,
            knobBackgroundColor,
            backgroundColor,
            ...restProps
        } = this.props

        const height = width / 2
        const diameter = Math.floor(height * 0.9)
        const diff = ( height - diameter ) / 2
        const borderRadius = height / 2

        const checkedClassName = disabled ? 'disabled' : checked ? 'checked' : ''
        const left = disabled ? diff : checked ? height + diff : diff

        const knobColor = disabled ? knobBackgroundColor.disabled : checked ?
            knobBackgroundColor.checked : knobBackgroundColor.unchecked

        const switchColor = disabled ? backgroundColor.disabled : checked ?
            backgroundColor.checked : backgroundColor.unchecked

        return (
            <span
                {...restProps}
                className={`switch ${checkedClassName}`}
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    borderRadius: `${borderRadius}px`,
                    backgroundColor: switchColor
                }}
                onClick={this.onCheck}
            >
                <span
                    className="switch-knob"
                    style={{
                        width: `${diameter}px`,
                        height: `${diameter}px`,
                        top: `${diff}px`,
                        left: `${left}px`,
                        backgroundColor: knobColor
                    }}
                />
            </span>
        )
    }
}

Switch.propTypes = {
    width: PropTypes.number,
    knobBackgroundColor: PropTypes.object,
    backgroundColor: PropTypes.object,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
}

Switch.defaultProps = {
    width: 44,
    knobBackgroundColor: {
        checked: myMagnificentBlueColor,
        unchecked: theWhiteOfEternity,
        disabled: '#9e9e9e'
    },
    backgroundColor: {
        checked: anotherMagnificentBlueColor,
        unchecked: anotherMagnificentBlueColor,
        disabled: '#ccc'
    },
    disabled: false,
    checked: false,
    onChange: function() {}
}

export default Switch

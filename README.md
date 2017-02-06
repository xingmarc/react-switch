# A Highly Customizable Switch Component in React


### `props`:


* `width`: number, represent the width of the switch. Notice that the aspect ratio for the switch is a constant, so `width` alone is enough for sizing the switch.
* `disabled`: boolean, represent the switch is disabled or not.

* `knobBackgroundColor`: an object, containing three properties: `checked`, `unchecked`, and `disabled`, representing the color of the knob under the three different states. For example:


```
{
	checked: 'blue',
   	unchecked: 'red',
   disabled: '#9e9e9e'
}
```

* `backgroundColor`: an object, containing three properties same as `knobBackgroundColor`, representing the background color.

* `onChange`: function, the function invoked after each state change. parameter: a boolean value, representing the switch current state ( or the state after the click )



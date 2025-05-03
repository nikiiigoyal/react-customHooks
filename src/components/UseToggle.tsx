import useToggle from "../hooks/useToggle"

export default function ToggleBar () {
const [isOn, toggle] = useToggle(false)
    return (
<>
<div>
    <p className="heading">Current state: {isOn ? 'ON': 'OFF'}</p>
    <button onClick={() => toggle()}>Toggle</button>
    <button onClick={() => toggle(true)}>Turn On</button>
    <button onClick={() => toggle(false)}>Turn Off</button>
</div>
</>
)
}
import { Component, type ReactChild, type ReactChildren } from 'react';
interface ScriptLoadedState {
    scriptLoaded: boolean;
}
interface ScriptLoadedProps {
    children: ReactChild | ReactChildren | Function;
}
declare class ScriptLoaded extends Component<ScriptLoadedProps, ScriptLoadedState> {
    interval: number | undefined;
    constructor(props: ScriptLoadedProps);
    setScriptLoadedCallback: () => void;
    checkIfScriptLoaded: () => void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default ScriptLoaded;

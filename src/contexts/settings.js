import React, { useContext } from 'react';

export const SettingsContext = React.createContext();

export default function useSettings() {
    return useContext(SettingsContext);
}

export class SettingsProvider extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            // TODO: figure out what state is
        };
    }

    // TODO: Set state on properties once defined

    render() {
        return (
            <SettingsContext.Provider value={this.state}>
                {this.props.children}
            </SettingsContext.Provider>
        )
    }
}